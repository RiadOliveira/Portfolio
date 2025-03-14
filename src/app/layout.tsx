import './globals.css';

import type { DefaultProps } from 'types/DefaultProps';
import { POPPINS, SPACE_GROTESK } from 'constants/fonts';

export { metadata } from 'constants/metadata';

export default function RootLayout({ children }: DefaultProps) {
  return (
    <html lang="en">
      <body className={`${POPPINS} ${SPACE_GROTESK} antialiased`}>{children}</body>
    </html>
  );
}
