import { Header } from 'components/Header';
import { getPortfolioData } from 'services/getPortfolioData';

export default async function Home() {
  const portfolioData = await getPortfolioData();

  function toggleTheme() {
    document.documentElement.classList.toggle('dark');
  }

  return (
    <div className="flex flex-col items-center">
      <Header />

      <main>
        <h1>Hello World</h1>
        <p>Contet Test</p>
      </main>
    </div>
  );
}
