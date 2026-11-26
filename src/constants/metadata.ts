import type { Metadata } from 'next';

import { USER_DATA } from './userData';

export const metadata: Metadata = {
  title: `Portfolio | ${USER_DATA.fullName}`,
  description: `Portfolio of ${USER_DATA.fullName}, a ${USER_DATA.role} building web and mobile apps with React, Next.js, Expo, Node.js (Fastify, Nest.js) and Java (Spring) since 2020.`,
} as const;
