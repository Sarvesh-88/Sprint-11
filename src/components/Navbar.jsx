import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const cartItems = useSelector((state) => state.cart.items);
  // Total items calculate kar rahe hain (agar ek item 2 baar add hua toh count 2 hoga)
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav style={{ padding: "15px", background: "#282c34", color: "white", display: "flex", gap: "20px", alignItems: "center" }}>
      <Link to="/" style={{ color: "white", textDecoration: "none", fontSize: "18px" }}>Home</Link>
      <Link to="/shop" style={{ color: "white", textDecoration: "none", fontSize: "18px" }}>Shop</Link>
      
      <div style={{ marginLeft: "auto", background: "#ff4757", padding: "5px 15px", borderRadius: "20px", fontWeight: "bold" }}>
        🛒 Cart: {totalItems}
      </div>
    </nav>
  );
}

export default Navbar;