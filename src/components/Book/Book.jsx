import PropTypes from 'prop-types';
import { FaRegBookmark } from 'react-icons/fa';

const Book = ({ book, handleBookmark, handleMarkAsRead }) => {
    const { cover, author_img, author, title, posted_date, reading_time, hashtags } = book;

    return (
        <div className= 'book bg-orange-200  mb-4 rounded-lg'>
            <div className='md:flex gap-5 mb-4'>
                {/* banner image */}
                <div className='bg-gray-400 p-4 xs:rounded-t-lg lg:rounded-l-lg' >
                    <img className='min-w-[200px] mx-auto h-[240px] shadow-2xl rounded-lg' src={cover} alt="Book-cover img" />
                </div>
                <div className='px-4 md:px-0'>
                    {/* Title */}
                    <h1 className='text-2xl text-purple-600 font-bold mb-2 mt-8'>{title}</h1>
                    {/* book mark section */}
                    <div className='flex items-center gap-4'>
                        <h3>Reading time: </h3>
                        <small className='text-lg font-medium'>{reading_time} hrs read</small>
                        <button onClick={() => handleBookmark(book)} className='text-purple-600 text-2xl' ><FaRegBookmark /></button>
                    </div>

                    {/* hash tag  */}
                    <div className='flex text-blue-600 gap-2 -mb-1 mt-3'>
                        {
                            hashtags.map((tag, idx) => <div key={idx}>
                                <a key={idx} className=' cursor-pointer'>#{tag}</a>
                            </div>)
                        }
                    </div>

                    {/* Mark as read btn */}
                    <div>
                        <button className=' mark underline text-blue-600 font-medium'
                            onClick={() => { handleMarkAsRead(book)}}>Mark as read</button>
                    </div>
                    {/* author img and name */}
                    <div className='flex gap-4 items-center mt-4'>
                        <img className='w-[60px]' src={author_img} alt="author img" />
                        <div>
                            <h2 className='font-bold text-lg'>{author}</h2>
                            <small> Post-date: {posted_date} </small>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

Book.propTypes = {
    book: PropTypes.object,
    handleBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}
export default Book;