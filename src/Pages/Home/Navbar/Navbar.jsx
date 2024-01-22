import logo from '../../../assets/Group 1.svg'
import { navLink } from './NavLink';

const Navbar = () => {

   
    return (
        <div className="navbar fixed z-30 justify-between text-white max-w-screen-lg mx-auto">
        <div className="navbar-start">
            <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52">
                    {navLink}
                </ul>
            </div>
            <div className='flex items-center gap-4'>
                <img src={logo} alt="" />
                <p className='text-[30px]'>
                    <span className='text-[#F7A582]'>Doc</span>
                    Hous
                </p>
            </div>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu text-[18px] menu-horizontal px-1 gap-5">
                {navLink}
            </ul>
        </div>
    </div>
    );
};

export default Navbar;