
import ban from "../../assets/image/pngwing .jrg.png"

import BookList from "../BookCard/BookList";
const Home = () => {

    return (
        <div>
            <div>
                <div className="flex max-w-screen-2xl bg-slate-100 ml-80 mt-10 rounded-3xl p-20  mr-96">

                    <div className="pl-20">
                        <h3 className="text-6xl items-center font-bold mb-20 pt-20 ">Books to freshen up <br /> your bookshelf</h3>
                        <button className="btn bg-green-400">View The List</button>
                    </div>
                    <img src={ban} alt="" />
                </div>
            </div>
            <div>
                
                <BookList></BookList>
            </div>
        </div>
    );
};

export default Home;