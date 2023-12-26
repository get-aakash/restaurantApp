import './App.css';
import Categories from './components/Categories';
import Menu from './components/Menu';
import items from "./data"

function App() {
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories />
        <Menu data={items} />
      </section>
    </main>
  );
}

export default App;
