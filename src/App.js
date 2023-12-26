import { useState } from 'react';
import './App.css';
import Categories from './components/Categories';
import Menu from './components/Menu';
import items from "./data"

function App() {
  const [menuItems, setMenuItems] = useState(items)
  const categories = [...new Set(items.map(item => item.category))]
  console.log(categories)

  const filterItems = (category)=>{
    if(category==="all"){
      setMenuItems(items)
    }else{
      setMenuItems(items.filter((data)=>data.category===category))
    }
   
    

  }
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems}/>
        <Menu data={menuItems} />
      </section>
    </main>
  );
}

export default App;
