import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import Hooks from "../Hooks/Hooks";


const BookDtails = () => {
    const [singleData, setSingleData] = useState({});
    const { bookId } = useParams();
    const { data, loading } = Hooks();

    useEffect(() => {

        const singleData = data.find((item) => item.bookId == bookId);
        console.log(singleData);
        setSingleData(singleData);

    }, [data, bookId]);
    const {bookName,author,image,review,totalPages,rating,category,tags,publisher,yearOfPublishing} = singleData || {};
    console.log(tags);
    return (
        <div className="hero max-w-screen-2xl bg-base-200 ml-40 rounded-3xl">
            <div className="hero-content flex-col lg:flex-row">
                <img src={image} className=" pr-6" />
                <div>
                    <h1 className="text-5xl font-bold">{bookName}</h1>
                    <p className="py-6"> By: {author}</p>
                    <p>-------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
                    <p>{category}</p>
                    <p>-------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
                    <p className="py-6">Review :{review}</p>
                    {/* <p>Tags : {tags[0]}</p> */}
                    {/* {
                        tags.map(pd=><</>)
                    } */}
                    <p></p>
                    <p>-------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
                    <div className="pb-6">
                        <p>Number of Pages: {totalPages}  </p>
                        <p>Publisher:  {publisher}  </p>
                        <p>Year of Publishing: {yearOfPublishing}  </p>
                        <p>Rating:  {rating}  </p>
                    </div>

                     <div className="">
                    <button className="btn border-4 border-stone-50 pl-6 pr-6">Read</button>
                    <button className="btn bg-emerald-500 ml-4">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default BookDtails;