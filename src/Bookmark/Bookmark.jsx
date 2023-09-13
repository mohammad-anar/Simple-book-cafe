import PropTypes from 'prop-types';


const Bookmark = ({bookmark}) => {
    return (
        <div className="bg-gray-300 p-4 mb-2 rounded-lg">
            <h1 className='text-lg font-semibold'>{bookmark.title}
            </h1>
            <p>Author: {bookmark.author}</p>
        </div>
    );
};
Bookmark.propTypes = {
    bookmark: PropTypes.object,
}
export default Bookmark;