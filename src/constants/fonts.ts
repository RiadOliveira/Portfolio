import { Poppins, Space_Grotesk } from 'next/font/google';

const poppins = Poppins({
  variable: '--font-primary',
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});
const spaceGrotesk = Space_Grotesk({
  variable: '--font-secondary',
  subsets: ['latin'],
});

export const POPPINS = poppins.variable;
export const SPACE_GROTESK = spaceGrotesk.variable;
