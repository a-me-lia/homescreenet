import type { Metadata } from 'next';
import Guestbook from './guestbook';
import { queryBuilder } from '../../lib/planetscale';

export const metadata: Metadata = {
  title: 'Guestbook',
  description: 'Sign my guestbook and leave your mark.',
};

export const dynamic = 'force-dynamic';
export const runtime = 'edge';

export default async function Page() {
  <Guestbook></Guestbook>
}
