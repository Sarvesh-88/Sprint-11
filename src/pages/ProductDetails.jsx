import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  
  // Dispatch hook ko initialize kiya taaki actions bhej sakein
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <div style={{ padding: "50px", textAlign: "center", fontSize: "20px" }}>Loading...</div>;

  return (
    <div style={{ padding: "40px", display: "flex", gap: "50px", maxWidth: "1000px", margin: "0 auto" }}>
      <div style={{ flex: 1 }}>
        <img src={product.thumbnail} alt={product.title} style={{ width: "100%", borderRadius: "10px", border: "1px solid #ddd" }} />
      </div>
      
      <div style={{ flex: 1 }}>
        <h1 style={{ marginBottom: "15px" }}>{product.title}</h1>
        <p style={{ fontSize: "16px", color: "#444", lineHeight: "1.6" }}>{product.description}</p>
        
        <div style={{ fontSize: "32px", fontWeight: "bold", color: "#28a745", margin: "20px 0" }}>
          ${product.price}
        </div>
        
        <p><strong>Brand:</strong> {product.brand}</p>
        <p><strong>Category:</strong> {product.category}</p>
        <p><strong>Rating:</strong> ⭐ {product.rating}</p>

        <button 
          onClick={() => {
            dispatch(addToCart(product));
            alert("Item added to cart! Check Navbar.");
          }}
          style={{
            background: "#007bff", color: "white", border: "none", 
            padding: "15px 30px", fontSize: "18px", borderRadius: "5px", 
            cursor: "pointer", marginTop: "20px", width: "100%", fontWeight: "bold"
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;