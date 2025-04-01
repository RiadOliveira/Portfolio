import './globals.css';

export { metadata } from 'constants/metadata';

import type { DefaultProps } from 'types/DefaultProps';
import { POPPINS, SPACE_GROTESK } from 'constants/fonts';

export default function RootLayout({ children }: DefaultProps) {
  return (
    <html lang="en" className="dark">
      <body className={`${POPPINS} ${SPACE_GROTESK} antialiased`}>{children}</body>
    </html>
  );
}
