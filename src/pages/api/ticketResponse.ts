// api/ticketResponse.ts
import type { APIContext } from "astro";
import { db, Tickets, eq } from "astro:db";

function generateId(length: number): string {
    let id = '';
    for(let i = 0; i < length; i++){
        id += Math.floor(Math.random() * 10);
    }
    return id;
}

export async function POST(context: APIContext) {
  const userId = context.locals.user.id;
  const formData = await context.request.formData();
  const description = formData.get("description");
  const ticketId = formData.get("ticketId");
  const closeTicket = formData.get("closeTicket");

  // Comprueba si el ticket está cerrado
  const ticket = (await db.select().from(Tickets).where(eq(Tickets.id, ticketId)))[0];
  if (!ticket.open) {
      return new Response('El ticket está cerrado, no se puede añadir una nueva respuesta', { status: 400 });
  }

  if (closeTicket) {
      // Si el usuario quiere cerrar el ticket, actualiza el campo 'open' a false
      await db.update(Tickets).set({ open: false }).where(eq(Tickets.id, ticketId));
      return new Response('Ticket cerrado con éxito', { status: 200 });
  } else {
      // Si no, inserta la respuesta del usuario en la base de datos
      await db.insert(Tickets).values([
          {
            id: generateId(15),
            userId: userId,
            title: '',
            description: description,
            open: true,
            timestamp: new Date(), 
          },
        ]);
        return new Response('Respuesta enviada con éxito', { status: 200 });
  }
}
