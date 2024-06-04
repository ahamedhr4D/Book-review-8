import Cardlist from "../Card/Cardlist";
import Hooks from "../Hooks/Hooks";


const BookList = () => {
    const {data,loading} = Hooks();
    console.log(data);
    return (
        <div className="grid grid-cols-3 mx-80 mr-96 mt-10 gap-4">
            {
                data.map((item)=>(
                    <Cardlist key={item.id} item={item}/>
                ))
            }
        </div>
    );
};

export default BookList;