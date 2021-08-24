import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import "./Home.css"

const Home = () => {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async() => {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts")
    const items = await data.json();
    console.log(items)
    setItems(items);
  }


  return (
    <div>
    <h3 class="home_header">Go through our list of articles</h3>
      {items.map(item => (
        <Link to={`/Home/${item.id}`}><h4 className="list" key={item.id}>{item.id}.) {item.title}</h4></Link>
      ))}
    </div>
  )
}

export default Home
