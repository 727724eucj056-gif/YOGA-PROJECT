import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Subscription List</Link>{" | "}
      <Link to="/add-subscription">Add Subscription</Link>
    </nav>
  );
}

export default Navbar;
