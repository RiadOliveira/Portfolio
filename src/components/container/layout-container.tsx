import { ThemeButton } from '../client/theme-button';
import { DefaultProps } from 'types/DefaultProps';
import { HeaderContainer } from './header-container';

export function LayoutContainer({ children }: DefaultProps) {
  return (
    <div className="animated-gradient flex h-screen flex-col p-2.5">
      <HeaderContainer />

      <main className="bg-light/27 dark:bg-dark/32.5 relative flex h-full max-h-full flex-col overflow-y-hidden rounded-lg px-4 py-3 transition-colors duration-300">
        <div className="border-light/80 absolute left-4 flex h-11 w-[calc(100%-2rem)] items-center justify-end border-b-2 pb-2">
          <ThemeButton />
        </div>

        {children}
      </main>
    </div>
  );
}
