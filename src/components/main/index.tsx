import { Repository } from './Repository';
import { ThemeButton } from './ThemeButton';

export async function Main() {
  return (
    <main className="py-3 px-4 rounded-sm space-y-4">
      <section className="flex justify-between items-center pb-2 border-b-2 border-dark/70 dark:border-light/70">
        <h1 className="text-lg">Portfolio Projects</h1>
        <ThemeButton />
      </section>

      <Repository />
      <Repository />
      <Repository />
    </main>
  );
}
