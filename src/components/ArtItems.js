import "./ArtItems.css"

function ArtItems(props){
    return(
        <div className = "ArtItems">
            <img src = {props.item.image} alt='image'></img>
            <button onClick = {()=>{props.addToCart(props.item)}}>ADD TO CART</button>
        </div>
    )
}

export default ArtItems