import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      style={{
        border: "1px solid #ddd", padding: "15px", width: "250px", 
        cursor: "pointer", borderRadius: "8px", background: "white",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
      }}
    >
      <img src={product.thumbnail} alt={product.title} style={{ width: "100%", height: "180px", objectFit: "cover" }} />
      <h3 style={{ fontSize: "16px", marginTop: "15px" }}>{product.title}</h3>
      <p style={{ color: "gray", fontSize: "14px" }}>{product.brand}</p>
      <div style={{ fontSize: "18px", fontWeight: "bold", color: "#28a745", marginTop: "10px" }}>
        ${product.price}
      </div>
    </div>
  );
}

export default ProductCard;