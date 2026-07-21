import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/filterSlice";

function Sidebar() {
  const dispatch = useDispatch();
  const currentCategory = useSelector((state) => state.filters.category);
  
  const categories = ["All", "beauty", "fragrances", "furniture", "groceries"];

  return (
    <div style={{ width: "220px", padding: "20px", borderRight: "1px solid #ddd", minHeight: "80vh" }}>
      <h3 style={{ marginBottom: "20px" }}>Filters</h3>
      {categories.map((cat) => (
        <div key={cat} style={{ marginBottom: "10px" }}>
          <button
            style={{
              width: "100%", padding: "10px", textAlign: "left", cursor: "pointer",
              background: currentCategory === cat ? "#007bff" : "transparent",
              color: currentCategory === cat ? "white" : "black",
              border: "1px solid #ccc", borderRadius: "5px",
              fontWeight: currentCategory === cat ? "bold" : "normal"
            }}
            onClick={() => dispatch(setCategory(cat))}
          >
            {cat.toUpperCase()}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Sidebar;