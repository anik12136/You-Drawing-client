import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from './../../Provider/AuthProvider';
import "./Header.css"

const Header = () => {

  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
        .then(() => { })
        .catch(error => console.log(error));
}
    return (
        <div className="mx-20 my-3 rounded-tl-lg rounded-br-lg">
            <div className="navbar bg-fuchsia-200 px-20">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li><Link to="/">Home</Link></li>
        
      <li><Link to="/instructors">Instructors</Link></li>
      <li><Link to="/classes">Classes</Link></li>
      <li><Link to="/dashboard">Dashboard</Link></li>
      </ul>
    </div>

    <img src="https://w1.pngwing.com/pngs/712/352/png-transparent-graphic-design-icon-icon-design-drawing-pencil-logo-text-black-and-white-line.png" alt="" className="rounded-full h-10" />
    <Link to="/" className="btn btn-ghost normal-case text-xl">YouDrawing</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/instructors">Instructors</Link></li>
      <li><Link to="/classes">Classes</Link></li>
      <li><Link to="/dashboard">Dashboard</Link></li>
      {/* <li tabIndex={0}>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li> */}
    </ul>
  </div>
  <div className="navbar-end">

       {
            user &&
            <div className="hover-container">
              <img className='rounded-full me-2' src={user.photoURL} alt="" />
              <div className="hover-text">
                <span>{user.displayName}</span>
              </div>
            </div>
          }

       {
            user ? <>
                <button onClick={handleLogOut} className="btn btn-outline btn-default">LogOut</button>
            </> : <>
                <li><Link to="/login" className="btn btn-outline btn-default">Login</Link></li>
            </>
        }
  </div>
</div>
        
        </div>
    );
};

export default Header;