import './globals.css';

export { metadata } from 'constants/metadata';

import type { DefaultProps } from 'types/DefaultProps';
import { POPPINS, SPACE_GROTESK } from 'constants/fonts';
import { LayoutContainer } from 'components/layout-container';

export default function RootLayout({ children }: DefaultProps) {
  return (
    <html lang="en">
      <body className={`${POPPINS} ${SPACE_GROTESK} antialiased`}>
        <LayoutContainer>{children}</LayoutContainer>
      </body>
    </html>
  );
}
