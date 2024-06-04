
import { Link } from "react-router-dom";
import icon from "../../assets/image/icons.jpg.png"

const Cardlist = (item) => {
    //console.log(item);
    const {bookId,bookName,author,image,review,totalPages,rating,category,tags,publisher,yearOfPublishing}=item.item || {};
    return (
       <>
       <Link to={`/bookdtails/${bookId}`}>
        <div>
            <div className="card w-96 bg-gray-100 shadow-xl">
                    <figure><img className="w-40  mt-10 rounded-2xl" src={image} alt="Shoes" /></figure>
                    <div className="card-actions justify-start mt-4 ml-8">
                        <div className="badge badge-outline">{tags[0]}</div>
                        <div className="badge badge-outline">{tags[1]}</div>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">
                        {bookName}
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>By : {author}</p>

                        <p>------------------------------------------------</p>
                    </div>
                    <div className="flex justify-between mx-4 -mt-8 pb-10">
                        <p className="text-xl">{category}</p>
                        <div className="flex gap-2 items-center">
                            <p className="text-xl">{rating}</p>
                            <img src={icon} alt="" />
                        </div>
                    </div>
                </div>
        </div>
        </Link>
        </>
      
    );
};

export default Cardlist;