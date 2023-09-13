import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';


const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="sticky top-0">
            <h1 className="text-2xl font-semibold bg-gray-200 py-4 px-8 rounded-lg text-purple-600">Spent time on read: {readingTime} Hrs</h1>
            <div className=" bg-gray-200 p-8 rounded-lg mt-4">
             <h1 className="text-2xl font-semibold mb-8 text-purple-600">Book marked: {bookmarks.length} </h1>
             <div>
                {
                    bookmarks.map((bookmark, idx) => <Bookmark 
                    key={idx}
                    bookmark={bookmark}
                    readingTime={readingTime}
                ></Bookmark>)
                }
             </div>
            </div>
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}
export default Bookmarks;