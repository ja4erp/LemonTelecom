import { defineDb, defineTable, column } from 'astro:db';

const User = defineTable({
	columns: {
		id:column.text({ primaryKey: true, optional: false, unique: true }),
		email:column.text({ unique: true, optional:false }),
		password:column.text({ optional:false, }),
		isAdmin:column.boolean({ optional:false, default: false })
	},
});

const Session = defineTable({
	columns: {
	  id: column.text({ optional: false, unique: true }),
	  userId: column.text({ optional: false, references: () => User.columns.id }),
	  expiresAt: column.number({ optional: false }),
	},
  });

  const Products = defineTable({
	columns: {
	  id: column.text({ optional: false, unique: true }),
	  Name: column.text({ optional: false }),
	  Description: column.text({ optional: true }),
	  Price: column.number({ optional: false }),
	},
  });

  const Purchases = defineTable({
	columns: {
	  id: column.text({ optional: false , unique: true }),
	  userId: column.text({ optional: false, references: () => User.columns.id }),
	  productId: column.text({ optional: false }),
	  time: column.number({ optional: false }),
	  status: column.text({ optional: false })
	},
});
	const Tickets = defineTable({
		columns: {
		id: column.text({ optional: false, unique: true }),
		userId: column.text({ optional: false, references: () => User.columns.id }),
		title: column.text({ optional: false }),
		description: column.text({ optional: true }),
		open: column.boolean({optional: false}),
		timestamp: column.date({ optional: false })
		},
	});


export default defineDb({
	tables: {
	  User,
	  Session,
	  Products,
	  Purchases, 
	  Tickets,
	},
});