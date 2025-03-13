export function App() {
  function toggleTheme() {
    document.documentElement.classList.toggle('dark');
  }

  return (
    <div>
      <h1>Hello World</h1>
      <p>Contet Test</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}
