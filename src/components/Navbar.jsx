import React from 'react';
import MyNavLinks from './MyNavLinks';

const Navbar = () => {
  return (
    <div>
      <header className="bg-white shadow-2xs py-3">
        <nav className="w-10/12 mx-auto flex items-center justify-between">
          <h1 className="text-lg md:text-3xl font-bold text-orange-600">
            Keen<span className="text-neutral-600  ">Keeper</span>
          </h1>

          <div>
            <MyNavLinks />
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
