import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="d-flex justify-content-center">
      <h1>Cartoon</h1>
      <input className="border border-danger w-25" type="search" />
      <button className="btn btn-danger">search</button>
      <div>
        <Link to="/wishlist">WishList </Link>
        {/* <box-icon name='heart' color='#fb1414' ></box-icon> */}
      </div>
    </nav>
  );
};
export default Navbar;
