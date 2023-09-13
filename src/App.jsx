
import { useState } from 'react'
import './App.css'
import Bookmarks from './Bookmarks/Bookmarks'
import Books from './components/Books/Books'
import Header from './components/Header/Header'
import { addLsData, getLsData } from './LocalStorage/LocalStorage'

function App() {
  const [bookmarks, setbookmark] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleLs = (data) => {
    const lsData = getLsData();
    const lsArr = [];
    lsData.forEach(ls => {
      const findData = data.find(item =>  item.title === ls );
      lsArr.push(findData);
    });
    const newLsArr = new Set(lsArr);
    const setNewLsArr = [...newLsArr];
    setbookmark(setNewLsArr); 

  }

  const handleBookmark = book => {
    const copyBookmarks = [...bookmarks];
    const filtedBookmarks = copyBookmarks.filter(item => {
      return item !== book;
    });
    // call ls data setter function     
    addLsData(book.title);  
    
    // set state data
    setbookmark([...filtedBookmarks, book])
  }

  const handleMarkAsRead = (book) => {
    const time = book.reading_time;
    setReadingTime(readingTime + time);

    const filtedBookmarks = bookmarks.filter(item => item.title !== book.title);
    setbookmark(filtedBookmarks);
  }
  return (
    <>
      <Header></Header>
      <div className='lg:grid  flex flex-col-reverse lg:grid-cols-3 gap-4 w-10/12 mx-auto'>
        <Books
          handleBookmark={handleBookmark}
          handleMarkAsRead={handleMarkAsRead}
          handleLs={handleLs}
        ></Books>
        <Bookmarks
          bookmarks={bookmarks}
          readingTime={readingTime}
        ></Bookmarks>
      </div>

    </>

  )
}

export default App
