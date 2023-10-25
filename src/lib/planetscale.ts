// import 'server-only' not working with API routes yet
import { Generated, Kysely } from "kysely";
import { PlanetScaleDialect } from "kysely-planetscale";

interface GuestbookTable {
  id: Generated<number>;
  email: string;
  body: string;
  created_by: string;
  updated_at?: string;
}

interface ViewsTable {
  slug: string;
  count: number;
}

interface SubscribersTable {
  email: string;
}

interface Database {
  guestbook: GuestbookTable;
  views: ViewsTable;
  subscribers: SubscribersTable;
}

export const queryBuilder = new Kysely<Database>({
  dialect: new PlanetScaleDialect({
    url: process.env.NEXT_PUBLIC_DATABASE_URL,
  }),
});
