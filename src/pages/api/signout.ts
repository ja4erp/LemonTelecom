import { lucia } from "@/auth";
import type { APIContext } from "astro";

export async function POST(context: APIContext): Promise<Response> {
  if (!context.locals.session) {
    return new Response(null, {
      status: 401,
    });
  }

  await lucia.invalidateSession(context.locals.session.id);

  const sessionCookie = lucia.createBlankSessionCookie();
  context.cookies.set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );

  return context.redirect("/");
}

/*
Explicacion para el futuro, para cerrar sesion con un boton se usa un formulacio de esta manera

<form method="POST" action="/api/signout">
	<button class="underline">Sign out</button>
</form>

*/ 

/*
Para bloquear la entrada a el panel si no hay usuario haz

const user = Astro.locals.user;
if (!user) {
  return Astro.redirect("/signin");
}
*/