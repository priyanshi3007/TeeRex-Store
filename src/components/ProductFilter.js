
import React, { useState ,useEffect} from 'react';
import Product from './Product';
import { useProductContext } from '../context/ProductContext';
import NavBar from './Navbar';
import filter from '../assets/filter.png';

const ProductFilter = () => {
  
  const { products,error } = useProductContext();
  const[searchText,setSearchText]=useState('');
  const [filterGender, setFilterGender] = useState([]);
  const [filterColor,setFilterColor]=useState([]);
  const [filterType,setFilterType]=useState([]);
  const [filterPrice, setFilterPrice] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (products.length > 0) {
      setLoading(false);
    }
  }, [products]);



  const isPriceInRange = (price, range) => {
    const [min, max] = range.split('-').map(Number);
    return price >= min && price <= max;
  };

    const handleSearchTextChange = (e) => {
        setSearchText(e.target.value);
      };

    
    
      const handleCheckboxChange = (value ,setFilter) => {
        console.log('Before:', filterGender);
       
        setFilter((prev) => {
          const updatedFilter = prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value];
         console.log('After:', updatedFilter);
        
        return updatedFilter;
        });
      };
            
      const handlePriceRangeChange = (value) => {
        setFilterPrice((prev) => {
          const updatedPriceFilter = prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value];
          return updatedPriceFilter;
        });
      };
    
  
            

      const filteredProducts = products.filter((product) => {
        const searchTerm = searchText.toLowerCase();
        const nameMatch = product.name.toLowerCase().includes(searchTerm);
        const colorMatch = filterColor.length === 0 || filterColor.includes(product.color.toLowerCase());
        const typeMatch = filterType.length === 0 || filterType.includes(product.type.toLowerCase());
        const genderMatch = filterGender.length === 0 || filterGender.includes(product.gender);
        const priceMatch = filterPrice.length === 0 || filterPrice.some((range) => isPriceInRange(product.price, range));
  
        console.log(
          'Name Match:', nameMatch,
          'Color Match:', colorMatch,
          'Type Match:', typeMatch,
          'Gender Match:', genderMatch
        );
        return nameMatch && typeMatch && colorMatch && genderMatch && priceMatch;
      });      


              console.log('Filtered Products:', filteredProducts);
              console.log('Filtered Products Count:', filteredProducts.length);
  return (
    <>
      <NavBar/>
      {/* <div className="product-filter-container"> */}

  
<div>
      <div className="searchDiv">
       
            <input type="text" className='srch' placeholder="Search by Name, Colour, Type"  value={searchText} onChange={handleSearchTextChange}  />
       
        </div>


        <div className='contentDiv'>

        <div className="filter-options">
       
        <img src={filter} alt="." style={{ height: '50px', marginRight: '10px' }} />
       
        <div  className="checkBoxDiv">
          <h4>Gender:</h4>
          <label>
            <input type="checkbox" checked={filterGender.includes('Men')} onChange={() => handleCheckboxChange('Men', setFilterGender)} />
            Men
          </label>
          <label>
            <input type="checkbox" checked={filterGender.includes('Women')} onChange={() => handleCheckboxChange('Women', setFilterGender)}/>
            Women
          </label>
        </div>

     
        <div  className="checkBoxDiv">
          <h4>Colour:</h4>
          <label>
            <input type="checkbox" checked={filterColor.includes('red')} onChange={() => handleCheckboxChange('red', setFilterColor)} />
            Red
          </label>
          <label>
            <input type="checkbox" checked={filterColor.includes('blue')} onChange={() => handleCheckboxChange('blue', setFilterColor)} />
            Blue
          </label>
          <label>
            <input type="checkbox"  checked={filterColor.includes('green')} onChange={() => handleCheckboxChange('green', setFilterColor)} />
            Green
          </label>
          <label>
            <input type="checkbox" checked={filterColor.includes('pink')} onChange={() => handleCheckboxChange('pink', setFilterColor)} />
            Pink
          </label>
        </div>

    
        <div  className="checkBoxDiv">
          <h4>Price Range:</h4>
          <label>
            <input type="checkbox"  onChange={() => handlePriceRangeChange('0-200')} checked={filterPrice.includes('0-200')} />
            ₹0-₹200
          </label>
          <label>
            <input type="checkbox"  onChange={() => handlePriceRangeChange('250-300')} checked={filterPrice.includes('250-300')}/>
            ₹250-₹300
          </label>
          <label>
            <input type="checkbox"  onChange={() => handlePriceRangeChange('350-500')} checked={filterPrice.includes('350-500')}/>
            ₹350-₹500
          </label>
        </div>

 
        <div  className="checkBoxDiv">
          <h4>Type:</h4>
          <label>
            <input type="checkbox"  checked={filterType.includes('basic')} onChange={() => handleCheckboxChange('basic', setFilterType)} />
            T-shirt
          </label>
          <label>
            <input type="checkbox" checked={filterType.includes('polo')} onChange={() => handleCheckboxChange('polo', setFilterType)} />
            Polo
          </label>
          <label>
            <input type="checkbox"  checked={filterType.includes('hoodie')} onChange={() => handleCheckboxChange('hoodie', setFilterType)}/>
            Hoodie
          </label>
        </div>
      </div>
    


      <div className="product-list">
    
    <Product products={filteredProducts}  isLoading={loading} />
 
    
      </div>
      </div>
    </div>
  

    </>
  );
};

export default ProductFilter;
