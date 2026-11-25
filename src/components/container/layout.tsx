import type { DefaultProps } from '@/types/defaultProps';

import { ThemeButton } from '../client/themeButton';
import { HeaderContainer } from './header';

export function LayoutContainer({ children }: DefaultProps) {
  return (
    <div className="animated-gradient flex h-dvh p-2.5 max-sm:flex-col sm:items-center sm:justify-center sm:gap-6 md:p-3.5 lg:gap-20 lg:p-6 xl:gap-8 2xl:gap-20">
      <HeaderContainer />

      <main className="bg-light/27 dark:bg-dark/32.5 relative flex flex-1 flex-col overflow-y-hidden rounded-lg px-4 transition-colors duration-300 sm:h-full sm:max-h-100 sm:max-w-[54%] md:max-h-11/12 lg:max-w-122 lg:px-6 xl:max-w-220.5 2xl:max-w-222.5">
        <div className="border-light/60 absolute left-4 flex h-14 w-[calc(100%-2rem)] items-center justify-end border-b-2 pt-0.5 sm:h-12 md:h-14 lg:left-6 lg:h-15.5 lg:w-[calc(100%-3rem)] lg:border-b-[3px]">
          <ThemeButton />
        </div>

        {children}
      </main>
    </div>
  );
}
