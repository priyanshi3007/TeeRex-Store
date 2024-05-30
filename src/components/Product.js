import React from 'react';
import { useProductContext } from '../context/ProductContext';
import '../Styles/styles.css';

const Product = ({products, isLoading}) => {
  const { addToCart } = useProductContext();
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
  
//             fetch( 'https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json').then(response=>response.json()).then(dt=>{
        
//             setProducts(dt);
//             console.log(dt) 
//             })

    
//     };

//     fetchProducts();
//   }, []);





  return (



//     <div className='productDisplay '>
//       <h2 id="Catalog">Product Catalog</h2>
//       <div className="product-container ">
// {products.map((product) => (
//           <div key={product.id} className={`product-card ${isLoading ? 'skeleton' : ''}`}>
//             <img src={product.imageURL} alt={product.name} />
//             <h3>{product.name}</h3>
//             <p>Price: ₹{product.price}</p>
//             <button onClick={() => addToCart(product)}>Add to Cart</button>
//           </div>
//         ))} 



//       </div>
//     </div>



//   );
// };
<div className='productDisplay'>
<h2 id="Catalog">Product Catalog</h2>
<div className="product-container">

  {isLoading ? (

Array.from({ length: 8 }).map((_, index) => (
  <div key={index} className="product-card skeleton">

    <div className="skeleton-rectangular"></div>
    <div className="skeleton-text"></div>
    <div className="skeleton-text"></div>
    <div className="skeleton-bt"></div>
  </div>
    ))
  ) : (

    products.map((product) => (
      <div key={product.id} className="product-card">
        <img src={product.imageURL} alt={product.name} />
        <h3>{product.name}</h3>
        <p>Price: ₹{product.price}</p>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    ))
  )}
</div>
</div>
);
};
export default Product;