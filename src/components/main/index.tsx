import { Repository } from './Repository';
import { ThemeButton } from './ThemeButton';

export async function Main() {
  return (
    <main className="pt-3 pb-5 px-4 rounded-sm space-y-5">
      <section className="flex justify-between items-center pb-2 border-b-2 border-light/70">
        <h1 className="text-lg text-light font-semibold">Portfolio Projects</h1>
        <ThemeButton />
      </section>

      <section className="px-2 space-y-6">
        <Repository />
        <Repository />
        <Repository />
      </section>
    </main>
  );
}
