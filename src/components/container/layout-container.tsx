import { ThemeButton } from '../client/theme-button';
import { DefaultProps } from 'types/DefaultProps';
import { HeaderContainer } from './header-container';

export function LayoutContainer({ children }: DefaultProps) {
  return (
    <div className="animated-gradient flex min-h-full w-full flex-col p-2.5">
      <HeaderContainer />

      <main className="bg-light/27 dark:bg-dark/32.5 relative flex flex-1 flex-col rounded px-4 pt-3 pb-6.5 transition-colors duration-300">
        <section className="border-light/80 absolute left-4 flex h-11 w-[calc(100%-2rem)] items-center justify-end border-b-2 pb-2">
          <ThemeButton />
        </section>

        {children}
      </main>
    </div>
  );
}
