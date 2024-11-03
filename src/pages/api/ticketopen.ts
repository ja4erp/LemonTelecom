import type { APIContext } from "astro";
import { db, Tickets, eq } from "astro:db";


function generateId(length: number): string {
    let id = '';
    for(let i = 0; i < length; i++){
        id += Math.floor(Math.random() * 10);
    }
    return id;
}

export async function POST(context: APIContext): Promise<Response> {
    const formData = await context.request.formData();
    const title = formData.get("title");
    const description = formData.get("description");

    // Comprueba si el usuario ya tiene un ticket abierto
    const existingTicket = await db.select().from(Tickets).where(eq(Tickets.userId, context.locals.user.id)).limit(1);

    if (existingTicket.length > 0) {
        return new Response('Ya tienes un ticket abierto', { status: 400 });
    }

    const ticketId = generateId(15);

    await db.insert(Tickets).values([
        {
          id: ticketId,
          userId: context.locals.user.id,
          title: title,
          description: description,
          open: true,
          timestamp: new Date(), 
        },
      ]);
    return new Response('Ticket creado exitosamente', { status: 200 });
}
