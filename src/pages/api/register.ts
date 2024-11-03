import type { APIContext } from "astro";
import { generateId } from "lucia";
import { Argon2id } from "oslo/password";
import { db, User } from "astro:db";
import { lucia } from "@/auth";
export async function POST(context: APIContext): Promise<Response> {
  //Parse the form data
  const formData = await context.request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  //Validate the form data
  if (!email || !password) {
    return new Response("email and Password are required", { status: 400 });
  }

  if (typeof password !== "string" || password.length < 6) {
    return new Response("Password must be at least 6 characters long", {
      status: 400,
    });
  }
  // Insert user into db
  const userId = generateId(15);
  const hashedPassword = await new Argon2id().hash(password);

  await db.insert(User).values([
    {
      id: userId,
      email,
      password: hashedPassword,
    },
  ]);

  // Generate session
  const session = await lucia.createSession(userId, {});
  const sessionCookie = lucia.createSessionCookie(session.id);
  context.cookies.set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );
  return context.redirect("/");
}