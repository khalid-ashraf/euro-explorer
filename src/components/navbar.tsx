import { Link } from "@tanstack/react-router";

const NavBar = () => {
  return (
    <header className='w-full px-8  shadow-sm'>
      <div className='container flex flex-col md:flex-row items-center justify-between py-5 mx-auto max-w-7xl'>
        <div className='flex flex-col md:flex-row items-center'>
          <Link to='/' className='flex items-center mb-5 md:mb-0'>
            <span className='text-xl font-black select-none'>
              EURO <span className='text-indigo-600'>Explorer</span>
            </span>
          </Link>

          <nav className='flex flex-wrap items-center ml-0 md:ml-8 md:border-l md:pl-8'>
            <Link
              to='/'
              className='mr-5 font-medium text-gray-400 hover:text-gray-300'
              activeProps={{ className: "text-indigo-300" }}
            >
              Home
            </Link>

            <Link
              to='/countries'
              className='mr-5 font-medium hover:text-gray-300 text-gray-400'
              activeProps={{ className: "text-indigo-300" }}
            >
              Countries
            </Link>

            <Link
              to='/about'
              activeOptions={{ exact: true }}
              className='mr-5 font-medium hover:text-gray-300 text-gray-400'
              activeProps={{ className: "text-indigo-300" }}
            >
              About
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};
export default NavBar;
