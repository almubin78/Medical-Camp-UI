import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const user = true;
  
  return (
    <div className="navbar bg-base-100">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li><NavLink className={({ isActive }) => isActive ? 'active' : undefined} to='/'>Home</NavLink></li>
          <li><Link to='/mycart'>My Cart</Link></li>

          <li><Link to='/addItem'>Add Item</Link></li>
          <li><Link to='/mission'>Our Mission</Link></li>
          <li><Link to='/apply'>Apply as Partner</Link></li>

        </ul>

      </div>
      <div className="avatar hidden lg:flex mx-2">
        <div className="w-12 rounded-full">
          <img src="https://www.aranca.com/assets/uploads/blogs/trendbeautyban.jpg" alt='' />
        </div>
      </div>
      {/* <Link to='/' className="btn btn-ghost text-xl">Cosmetics and Beauty</Link> */}
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        <li className='mx-3'><Link to='/'>Home</Link></li>
        <li className='mx-3'><Link to='/mycart'>My Cart</Link></li>

        <li className='mx-3'><Link to='/addItem'>Add Item</Link></li>
        <li className='mx-3'><Link to='/mission'>Our Mission</Link></li>
        <li className='mx-3'><Link to='/apply'>Apply as Partner</Link></li>
      </ul>
    </div>
    <div className="navbar-end">
      {
        user ? <>
          <div className="avatar hidden lg:flex">
            <div className="w-16 rounded-full">
              <img src='' alt='' />
              {/* <img src={user.photoURL} alt='' /> */}
            </div>
          </div>

          <Link onClick='' className="btn ms-2">Log Out</Link>
        </> : <>
          <Link to='/login' className="btn">Login</Link>
        </>
      }
    </div>

  </div>
  );
};

export default Navbar;