import { Header } from 'components/Header';
import { Main } from 'components/Main';

export default async function Home() {
  function toggleTheme() {
    document.documentElement.classList.toggle('dark');
  }

  return (
    <div className="flex flex-col w-full h-full animated-gradient">
      <Header />
      <Main />
    </div>
  );
}
