// src/App.jsx
import { useState } from "react"

function App() {
const [shoppingCart, setshoppingCart] = useState([])
const [availableBalance, setavailableBalancet] = useState(100)
  const [warningMessage, setWarningMessage] = useState("");


const [availableItems, setAvailableItems] = useState(
  [
  {
    id: 1,
    name: "Black T shirt",
    price: 5
  },
  {
    id: 2,
    name: "Hanger Set",
    price: 8
  },
  {
    id: 3,
    name: "Thoub",
    price: 12
  },
  {
    id: 4,
    name: "Computer Bag",
    price: 20
  },
  {
    id: 5,
    name: "Couch",
    price: 50
  },
  {
    id: 6,
    name: "Gaming Chair",
    price: 70
  }
])
function handleAddToCart(clickedItem){
    console.log(clickedItem)
if (availableBalance>clickedItem.price){
    const filteredItem = availableItems.filter((oneItem)=>{
      return oneItem.name !== clickedItem.name
    })

    console.log(filteredItem)
    setAvailableItems(filteredItem)
     setshoppingCart([...shoppingCart,clickedItem])
     setavailableBalancet(availableBalance - clickedItem.price)
    setWarningMessage("")
    }
   else{
  
       setWarningMessage("Your balance is too low to purchase this item")

   }
  }
  function handleRemoveFromShoppingCart(clickedItem){
   const deleteItem = shoppingCart.filter((oneItem) => {
    return oneItem.name !== clickedItem.name
  })
 setshoppingCart(deleteItem)

  setAvailableItems([...availableItems, clickedItem])

  setavailableBalancet(availableBalance + clickedItem.price)
  }
  return (
    <> <h1>Hello world!</h1>
    
   

<h2>Your Balance: {availableBalance}</h2>

<h2>Available Items</h2>

      {availableItems.map((oneItem)=>
      <div key={oneItem.name}>
        <p>Name: {oneItem.name}</p>

           <button onClick={()=>{handleAddToCart(oneItem)}}>Add to Cart</button>
        
      </div>
       
      )}<p >{warningMessage}</p>

       <h2>Shopping Cart</h2>
      {shoppingCart.map((oneItem)=>
      <div key={oneItem.name}>
        <p>Name: {oneItem.name}</p>
            <button onClick={() => handleRemoveFromShoppingCart(oneItem)}>
      Remove from Cart
    </button>
      </div>)}


    
    </>
  );
}

export default App
