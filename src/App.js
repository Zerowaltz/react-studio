import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function MyButton({ price, onClick }) {
  return (
    <button onClick={onClick}>
      Add to cart
    </button>
  );
}
let nextId = 0;

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
	const [price, setPrice] = useState(0);
	  const [items, setItems] = useState([]);

	function MyButton({ price, name, onClick }) {
  return (
    <button onClick={() => {
        setPrice(a => Math.round((a + price) * 100) / 100);
        items.push({
          id: nextId++,
          name: name,
        });
      }}>Add to Cart</button>
  );
}
 
  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
        <p>Bakery Item {index}
		<li>
	      {item.name}
	     <p> {item.description}</p>
		  	      <p>{item.price}</p>
				  	   <p> <img style={{ width: "50%", height: "60%" }} src={item.image} alt={item.description}></img></p>
				  	   <p>  <MyButton price={item.price} name={item.name} onclick={MyButton}/></p>



	    </li>
</p> // replace with BakeryItem component
      ))}

      <div>
        <h2>Cart</h2>
        {/* TODO: render a list of items in the cart */}
		<ol>
        {items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ol>
	  Total price of items in cart: {price}
      </div>
    </div>
  );
}

export default App;
