import { Link, NavLink } from "react-router-dom";
import { useGlobalContext } from "../../AuthProvider/AuthContextFunction";
// import useRole from "../../Hooks/useRole";

const Navbar = () => {
  // const role = useRole()
  const { user, logOut } = useGlobalContext();
  // const id = useParams();
  // console.log(id);
  // console.log(user.photoURL);
  const handleLogOut = () => {
    logOut()
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
  }
  return (
    <div className="navbar bg-green-500 opacity-80">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><NavLink className={({ isActive }) => isActive ? 'active' : undefined} to='/'>Home</NavLink></li>
            <li><Link to='/available'>Available Camps</Link></li>

            <li><Link to='/dashboard'>Dashboard</Link></li>
            <li><Link to='/contact'>Contact Us</Link></li>

          </ul>

        </div>
        <div className="avatar hidden lg:flex mx-2">
          <div className="w-16 rounded-full">
            <img src="https://i.ibb.co/TbMPsrW/logo.png" alt='' />
          </div>
        </div>
        {/* <Link to='/' className="btn btn-ghost text-xl">Cosmetics and Beauty</Link> */}
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className='mx-3'><Link to='/'>Home</Link></li>
          <li className='mx-3'><Link to='/available'>Available Camps</Link></li>

          {/* {
            role && <li className='mx-3'><Link to={`/dashboard/${role}`}>Dashboard</Link></li>
          } */}
          <li className='mx-3'><Link to='/dashboard'>Dashboard</Link></li>
          <li className='mx-3'><Link to='/contact'>Contact Us</Link></li>
          <li className='mx-3'><Link to={`/campDetails`}>Details</Link></li>

        </ul>
      </div>
      <div className="navbar-end">
        {
          user ? <>

            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
                </div>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <Link to='/dashboard/profile' className="justify-between">
                    Profile
                  </Link>
                {/* handleLogOut */}
                <button onClick={handleLogOut} className="btn btn-secondary my-2">Logout</button>
              </ul>
            </div>
      </> : <>
        <Link to='/login' className="btn">Login</Link>
      </>
      }
    </div>

  </div >
  );
};

export default Navbar;