import { useState } from "react";


const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold mb-2 md:mb-0">MCMS</div>

        {/* Menu Icon (visible on small screens) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isMenuOpen ? 'Close' : 'Menu'}
          </button>
        </div>

        {/* Navigation Links (visible on medium and larger screens) */}
        <div className={`md:flex md:space-x-4 mb-2 md:mb-0 ${isMenuOpen ? 'block' : 'hidden'}`}>
          <a href="#" className="text-white">Home</a>
          <a href="#" className="text-white">Available Camps</a>
          <a href="#" className="text-white">Dashboard</a>
          <a href="#" className="text-white">Contact Us</a>
        </div>

        {/* Conditional Buttons */}
        <div className="flex items-center space-x-4">
          {/* Check if user is logged in */}
          {/* If yes, show user image and logout button */}
          {/* If not, show register/login buttons */}
          <div>
            <img src="user-image.jpg" alt="User" className="w-8 h-8 rounded-full" />
            {/* This button should toggle between Login/Register and Logout based on authentication status */}
            <button className="text-white">Login</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
