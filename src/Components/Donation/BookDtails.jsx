import { useParams } from "react-router-dom";
import Hooks from "../Hooks/Hooks";
import { useEffect, useState } from "react";


const BookDtails = () => {
    const [singleData,setSingledata]=useState({});
    const { bookId } = useParams();
    const { data, loading } = Hooks()
    //console.log(bookId,singleData);
    useEffect(() => {
        if (data) {
        const singleData = data.find((item) => item.bookId == bookId);
        //console.log(singleData);
        setSingledata(singleData);
        }
    },[data,bookId]
    );
    const {bookName,author,image,review,totalPages,rating,category,tags,publisher,yearOfPublishing}=singleData || {};
    return (
        <div>
            <div className="card card-side max-w-screen-2xl ml-40 mt-4 bg-gray-100 shadow-xl">
                <figure><img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-4xl font-bold">{bookName}</h2>
                    <p className="text-3xl mt-4 border-b-2 border-dotted border-green-500">{author}</p>
                    {/* <p>----------------------------------------------------------------------------</p> */}
                    <p className="text-2xl mt-4 pb-4 border-b-2 border-dotted border-green-500">Review : {review}</p>
                     <p className="text-2xl border-b-2 border-dotted border-green-500 pb-4">Tag: #{tags[0]} , #{tags[1]} </p>
                     <div>
                        <li>Number of Pages: {totalPages}</li>
                        <li>Publisher: {publisher}</li>
                        <li>Year of Publishing: {yearOfPublishing}</li>
                        <li>Rating:{rating}</li>
                        
                     </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDtails;