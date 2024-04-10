// Importing all the Requirements to the app

import React,{useState}from 'react';
import './components/Style/styles.css';
import NavBar from "./components/Header";
import Billboard from "./components/Billboard";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";

// Declaring the APP Function
function App() {
  const [cart, setCart] = useState([]);
  const data=[
        {
        "id": 1,
        "name": "Redmi 13C (Stardust Black, 4GB RAM, 128GB Storage) | Powered by 4G Media tek Helio G85 | 90Hz Display | 50MP AI Triple Camera",
        "rating": 5,
        "normalCost": 11999,
        "actualCost": 7799,
        "category": "Mobile",
        "subCategory": "Mobile Trending",
        "image": "https://m.media-amazon.com/images/I/71d1ytcCntL._AC_UY218_.jpg"
      },
      {
        "id": 2,
        "name": "Redmi 12 5G Moonstone Silver 4GB RAM 128GB ROM",
        "rating": 4,
        "normalCost": 15999,
        "actualCost": 11999,
        "category": "Mobile",
        "subCategory": "Mobile Trending",
        "image": "https://m.media-amazon.com/images/I/71dEY4Neo3L._AC_UY218_.jpg"
      },
      {
        "id": 3,
        "name": "POCO C55 (Cool Blue, 6GB RAM, 128GB Storage)",
        "rating": 4,
        "normalCost": 13999,
        "actualCost": 6499,
        "category": "Mobile",
        "subCategory": "Mobile Trending",
        "image": "https://m.media-amazon.com/images/I/51pK-S3ssPL._AC_UY218_.jpg"
      },
      {
        "id": 4,
        "name": "realme narzo N53 (Feather Gold, 8GB+128GB) 33W Segment Fastest Charging | Slimmest Phone in Segment |",
        "rating": 4,
        "normalCost": 13999,
        "actualCost": 8499,
        "category": "Mobile",
        "subCategory": "Mobile Trending",
        "image": "https://m.media-amazon.com/images/I/71dEY4Neo3L._AC_UY218_.jpg"
      },
      {
        "id": 5,
        "name": "Redmi A2 (Aqua Blue, 2GB RAM, 64GB Storage)",
        "rating": 4.5,
        "normalCost": 9999,
        "actualCost": 5299,
        "category": "Mobile",
        "subCategory": "Mobile Trending",
        "image": "https://m.media-amazon.com/images/I/81RR0TAz+5L._AC_UY218_.jpg"
      },
      {
        "id": 6,
        "name": "realme narzo N53 (Feather Black, 4GB+64GB) 33W Segment Fastest Charging | Slim Smartphone | 90 Hz",
        "rating": 4,
        "normalCost": 10999,
        "actualCost": 7499,
        "category": "Mobile",
        "subCategory": "Mobile Trending",
        "image": "https://m.media-amazon.com/images/I/71DSxfKzkJL._AC_UY218_.jpg"
      },
      {
        "id": 7,
        "name": "Redmi 13C (Stardust Black, 6GB RAM, 128GB Storage) | Powered by 4G MediaTek Helio G85 | 90Hz Display | 50MP",
        "rating": 4,
        "normalCost": 13999,
        "actualCost": 8799,
        "category": "Mobile",
        "subCategory": "Mobile Trending",
        "image": "https://m.media-amazon.com/images/I/71d1ytcCntL._AC_UY218_.jpg"
      },
      {
        "id": 8,
        "name": "realme narzo N53 (Feather Gold, 4GB+64GB) 33W Segment Fastest Charging | Slim Smartphone | 90 Hz",
        "rating": 3,
        "normalCost": 10999,
        "actualCost": 7499,
        "category": "Mobile",
        "subCategory": "Mobile Trending",
        "image": "https://m.media-amazon.com/images/I/71dEY4Neo3L._AC_UY218_.jpg"
      },
      {
        "id": 9,
        "name": "Redmi 13C (Starfrost White, 4GB RAM, 128GB Storage) | Powered by 4G MediaTek Helio G85 | 90Hz Display | 50MP",
        "rating": 5,
        "normalCost": 11999,
        "actualCost": 7799,
        "category": "Mobile",
        "subCategory": "Mobile Trending",
        "image": "https://m.media-amazon.com/images/I/71scmEdSC2L._AC_UY218_.jpg"
      },
      {
        "id": 10,
        "name": "Redmi 13C (Stardust Black, 4GB RAM, 128GB Storage) | Powered by 4G Mediatek Helio G85 | 90Hz Display",
        "rating": 4,
        "normalCost": 11999,
        "actualCost": 7799,
        "category": "Mobile",
        "subCategory": "Mobile Trending",
        "image": "https://m.media-amazon.com/images/I/71d1ytcCntL._AC_UY218_.jpg"
      },
      {
        "id": 11,
        "name": "Redmi 13C 5G (Startrail Green, 4GB RAM, 128GB Storage) | MediaTek Dimensity 6100+ 5G | 90Hz Display",
        "rating": 2,
        "normalCost": 13999,
        "actualCost": 10999,
        "category": "Mobile",
        "subCategory": "Mobile Trending",
        "image": "https://m.media-amazon.com/images/I/81H7FJtH4SL._AC_UY218_.jpg"
      },
      {
        "id": 12,
        "name": "itel A70 (4GB RAM, 128GB ROM) Upto 12GB RAM with Memory Fusion | 13MP Dual Rear Camera & 8MP Front",
        "rating": 4,
        "normalCost": 9999,
        "actualCost": 6799,
        "category": "Mobile",
        "subCategory": "Mobile Trending",
        "image": "https://m.media-amazon.com/images/I/71BiGP4u5JL._AC_UY218_.jpg"
      },
      {
        "id": 13,
        "name": "POCO C65 Matte Black 8GB RAM 256GB ROM",
        "rating": 4,
        "normalCost": 13499,
        "actualCost": 8999,
        "category": "Mobile",
        "subCategory": "Mobile SellingFast",
        "image": "https://m.media-amazon.com/images/I/71UqEQNWyfL._AC_UY218_.jpg"
      },
      {
        "id": 14,
        "name": "Nokia G42 5G Powered by Snapdragon® 480 Plus 5G | 50MP Triple Rear AI Camera | 6GB RAM (4GB RAM + 2GB Virtual RAM)",
        "rating": 3,
        "normalCost": 12999,
        "actualCost": 9999,
        "category": "Mobile",
        "subCategory": "Mobile SellingFast",
        "image": "https://m.media-amazon.com/images/I/714-klcm1rL._AC_UY218_.jpg"
      },
      {
        "id": 15,
        "name": "POCO M6 Pro 5G (Forest Green, 4GB RAM, 128GB Storage)",
        "rating": 4,
        "normalCost": 15999,
        "actualCost": 9999,
        "category": "Mobile",
        "subCategory": "Mobile SellingFast",
        "image": "https://m.media-amazon.com/images/I/51X1axWGFZL._AC_UY218_.jpg"
      },
      {
        "id": 16,
        "name": "Samsung Galaxy M14 4G (Arctic Blue,4GB,64GB) | 50MP Triple Cam | 5000mAh Battery | Snapdragon",
        "rating": 5,
        "normalCost": 13999,
        "actualCost": 8999,
        "category": "Mobile",
        "subCategory": "Mobile SellingFast",
        "image": "https://m.media-amazon.com/images/I/81juPhKSZJL._AC_UY218_.jpg"
      }
    ];
  

    return (
      <>
  <div class="main">
      <NavBar quantity={cart.length}/>
      <Billboard />
      <div className='CardFlex'>
      {data.map((element, index) => (
          <ProductCard
            key={element.id}
            data = {element}
            AddCart ={()=>{
              setCart(cart=>[...cart,element])
            }}
            RemoveCart ={()=>{
              setCart(cart=>cart.filter(product=>product.id!== element.id));
            }}
          />
          ))}
      </div>
          <Footer/>
  </div> 
      </>
    );
}

export default App;
