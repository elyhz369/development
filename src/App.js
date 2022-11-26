import logo from './logo.svg';
import './App.css';
import ArtItems from './components/ArtItems';
import ArtworkData from './assets/ArtworkData.json'
import {useState} from 'react';

ArtworkData.forEach((item)=>{
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});

function App() {
  
  const[names, setNames] = useState([])
  const[names2, setNames2] = useState([])
  const[sortBy,setSortBy] = useState('Default')
  const[query,setQuery] = useState([])
  const[price, setPrice] = useState([])
  const[cartTotal,setCartTotal] = useState(0)
	const[cartChange,setCartChange] = useState(false)

  function addToCart(item){
    setNames([...ArtItems, item])
  }

  function subTotal(){
    let total = 0
    for (let i = 0; i < names.length; i++){
      total += names[1].price
    }
    return total
  }

  // function SortItems(event) {
  //   if(event.target.value==="Default"){
  //     var arr = names
  //     arr.sort(compare("id"))
  //     setNames(current => [...arr]);
  //     setSortBy(current =>"Default")
  //   }
  //   else if(event.target.value==="Price"){
  //     var arr = names
  //     arr.sort(compare("price"))
  //     setNames(current => [...arr]);
  //     setSortBy(current =>"price")
  //   }
  // }

  




  return(
    <body>
    <div className="container">
      <h1>MY ART STORE</h1>
      <h2>Shop my illustration and photography prints.</h2>
      {ArtworkData.map((item,index) => (
        <ArtItems item = {item} addToCart = {addToCart}/>
      ))}

      <div>
        <h3>Cart Total: {subTotal()}</h3>
      </div>
    </div>
    </body>
  );
}

export default App;
