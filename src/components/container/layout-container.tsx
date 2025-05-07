import { ThemeButton } from '../client/theme-button';
import { DefaultProps } from 'types/DefaultProps';
import { HeaderContainer } from './header-container';

export function LayoutContainer({ children }: DefaultProps) {
  return (
    <div className="animated-gradient flex h-dvh p-2.5 max-sm:flex-col sm:justify-center sm:gap-2 md:gap-6 md:p-3.5 lg:gap-12 lg:p-6">
      <HeaderContainer />

      <main className="bg-light/27 dark:bg-dark/32.5 relative flex flex-1 flex-col overflow-y-hidden rounded-lg px-4 transition-colors duration-300 sm:max-w-[52%] lg:px-8">
        <div className="border-light/80 absolute left-4 flex h-14 w-[calc(100%-2rem)] items-center justify-end border-b-2 pt-0.5 sm:h-12 md:h-16.5 lg:left-8 lg:h-20 lg:w-[calc(100%-4rem)] lg:border-b-[3px] lg:pt-1">
          <ThemeButton />
        </div>

        {children}
      </main>
    </div>
  );
}
