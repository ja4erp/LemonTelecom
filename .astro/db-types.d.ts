// This file is generated by Astro DB
declare module 'astro:db' {
	export const User: import("@astrojs/db/runtime").Table<
		"User",
		{"id":{"type":"text","schema":{"unique":true,"deprecated":false,"name":"id","collection":"User","primaryKey":true,"optional":false}},"email":{"type":"text","schema":{"unique":true,"deprecated":false,"name":"email","collection":"User","primaryKey":false,"optional":false}},"password":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"password","collection":"User","primaryKey":false,"optional":false}},"isAdmin":{"type":"boolean","schema":{"optional":false,"unique":false,"deprecated":false,"name":"isAdmin","collection":"User","default":false}}}
	>;
	export const Session: import("@astrojs/db/runtime").Table<
		"Session",
		{"id":{"type":"text","schema":{"unique":true,"deprecated":false,"name":"id","collection":"Session","primaryKey":false,"optional":false}},"userId":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"userId","collection":"Session","primaryKey":false,"optional":false,"references":{"type":"text","schema":{"unique":true,"deprecated":false,"name":"id","collection":"User","primaryKey":true,"optional":false}}}},"expiresAt":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"expiresAt","collection":"Session","primaryKey":false,"optional":false}}}
	>;
	export const Products: import("@astrojs/db/runtime").Table<
		"Products",
		{"id":{"type":"text","schema":{"unique":true,"deprecated":false,"name":"id","collection":"Products","primaryKey":false,"optional":false}},"Name":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"Name","collection":"Products","primaryKey":false,"optional":false}},"Description":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"Description","collection":"Products","primaryKey":false,"optional":true}},"Price":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"Price","collection":"Products","primaryKey":false,"optional":false}}}
	>;
	export const Purchases: import("@astrojs/db/runtime").Table<
		"Purchases",
		{"id":{"type":"text","schema":{"unique":true,"deprecated":false,"name":"id","collection":"Purchases","primaryKey":false,"optional":false}},"userId":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"userId","collection":"Purchases","primaryKey":false,"optional":false,"references":{"type":"text","schema":{"unique":true,"deprecated":false,"name":"id","collection":"User","primaryKey":true,"optional":false}}}},"productId":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"productId","collection":"Purchases","primaryKey":false,"optional":false}},"time":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"time","collection":"Purchases","primaryKey":false,"optional":false}},"status":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"status","collection":"Purchases","primaryKey":false,"optional":false}}}
	>;
	export const Tickets: import("@astrojs/db/runtime").Table<
		"Tickets",
		{"id":{"type":"text","schema":{"unique":true,"deprecated":false,"name":"id","collection":"Tickets","primaryKey":false,"optional":false}},"userId":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"userId","collection":"Tickets","primaryKey":false,"optional":false,"references":{"type":"text","schema":{"unique":true,"deprecated":false,"name":"id","collection":"User","primaryKey":true,"optional":false}}}},"title":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"title","collection":"Tickets","primaryKey":false,"optional":false}},"description":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"description","collection":"Tickets","primaryKey":false,"optional":true}},"open":{"type":"boolean","schema":{"optional":false,"unique":false,"deprecated":false,"name":"open","collection":"Tickets"}},"timestamp":{"type":"date","schema":{"optional":false,"unique":false,"deprecated":false,"name":"timestamp","collection":"Tickets"}}}
	>;
}