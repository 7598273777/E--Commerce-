import PropTypes from "prop-types";
import { useState } from "react";

export default function ProductCard(props = {}) {
  const { data = {} ,AddCart,RemoveCart} = props;
  const [number ,setNumber] = useState(true);
{

  function renderRatings(rating = 0) 
  {
    let ratingsNode = [];
    for (let i = 0; i < rating; i++) {
      ratingsNode.push(<div key={i}className="bi-star-fill"></div>);
      // Here Bi star fil is the bootstrap icon class
    }
    return ratingsNode;
  }

  const changeButton=()=>{

      setNumber(!number);
     
      if(number){
        AddCart();
      }
      else{
        RemoveCart();
      }
  }
  
  return (

  <div className="card">
      <p
          className="badge bg-dark text-white position-absolute"
          style={{ top: "0.5rem", right: "0.5rem" }}
        >
          Sale
        </p>
      
      <div className="img"><img src={data.image} /></div>
      
        <h1 className="product_name">{data.name}</h1>
        <div className="rating">{renderRatings(data.rating)}</div>
        <p className="cost">Rs.{data.normalCost}</p>
        <p className="actual-cost">Rs.{data.actualCost}</p>
        
      
<button className="card-button"onClick={changeButton}>{number ? 'Add to Cart':"Remove from Cart"}</button>
</div>
  
  );
}

}

ProductCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    normalCost: PropTypes.number.isRequired,
    actualCost: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    subCategory: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};
