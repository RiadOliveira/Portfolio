import './globals.css';

import type { DefaultProps } from '@/types/DefaultProps';

export { metadata } from '@/constants/metadata';
import { POPPINS, SPACE_GROTESK } from '@/constants/fonts';
import { LayoutContainer } from '@/components/container/layout-container';

export default function RootLayout({ children }: DefaultProps) {
  return (
    <html lang="en">
      <body className={`${POPPINS} ${SPACE_GROTESK} antialiased`}>
        <LayoutContainer>{children}</LayoutContainer>
      </body>
    </html>
  );
}
