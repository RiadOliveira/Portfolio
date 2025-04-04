import { DefaultProps } from 'types/DefaultProps';
import { Header } from './header';
import { ThemeButton } from './utilities/theme-button';

export function LayoutContainer({ children }: DefaultProps) {
  return (
    <div className="p-2.5 w-full min-h-full flex flex-col animated-gradient">
      <Header />

      <main className="flex-1 flex flex-col relative pt-3 pb-5 px-4 rounded bg-light/27 dark:bg-dark/32.5 transition-colors duration-300">
        <section className="w-[calc(100%-2rem)] h-11 absolute left-4 flex items-center justify-end pb-2 border-b-2 border-light">
          <ThemeButton />
        </section>

        {children}
      </main>
    </div>
  );
}
