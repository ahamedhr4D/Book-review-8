import { NavLink } from "react-router-dom";
import ban from "../../assets/image/pngwing .jrg.png"

const Home = () => {
    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/Listed">Listed Books</NavLink></li>
        <li><NavLink to="/Pages">Pages to Read</NavLink></li>

    </>
    return (
        <div>
            <div className="max-w-screen-2xl mt-4">
                <div className="navbar bg-base-100 justify-between">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {links}
                            </ul>
                        </div>
                        <a className="btn btn-ghost text-xl font-bold ml-80">Book Vibe</a>
                    </div>
                    <div className="navbar-center hidden lg:flex align-middle">
                        <ul className="menu menu-horizontal px-1">
                            {links}
                        </ul>
                    </div>
                    <div className="ml-14 gap-6">
                        <div className="navbar-end">
                            <a className="btn bg-green-500">Sign In</a>
                        </div>
                        <div className="navbar-end">
                            <a className="btn bg-emerald-300 w-100%">Sign Up</a>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex max-w-screen-2xl bg-slate-100 ml-80 mt-10 rounded-3xl p-20  mr-96">
                   
                  <div className="pl-20">
                    <h3 className="text-6xl items-center font-bold mb-20 pt-20 ">Books to freshen up <br /> your bookshelf</h3>
                    <button className="btn bg-green-400">View The List</button>
                    </div>  
                    <img src={ban} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;