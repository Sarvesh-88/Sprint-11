import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import Sidebar from "../components/Sidebar";

function Shop() {
  const [products, setProducts] = useState([]);
  
  // Redux se active filter read kar rahe hain
  const activeCategory = useSelector((state) => state.filters.category);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  // Filter Logic apply kar rahe hain
  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      
      <div style={{ padding: "20px", flex: 1 }}>
        <h1 style={{ marginBottom: "20px" }}>Shop ({activeCategory})</h1>
        
        <div style={{ display: "flex", flexWrap: "wrap", gap: "25px" }}>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          
          {filteredProducts.length === 0 && <p>Loading products...</p>}
        </div>
      </div>
    </div>
  );
}

export default Shop;