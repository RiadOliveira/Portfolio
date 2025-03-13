export function App() {
  function toggleTheme() {
    document.documentElement.classList.toggle('dark');
  }

  return (
    <div>
      <h1>Hello World</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}
