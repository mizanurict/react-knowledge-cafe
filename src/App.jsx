
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleBookmark = blog => {
    const isExit = bookmarks.find(pd => pd.id === blog.id);
    if (!isExit) {
      setBookmarks([...bookmarks, blog]);
    } else {
      alert("Already in Bookmark")
    }
  }

  const handleMarkAsRead = time => {
    setReadingTime(readingTime + time);
  }

  return (
    <>
      <section className='p-4 m-auto max-w-6xl '>
      <Header></Header>
      <div className='flex justify-between items-start m-4 p-4 gap-2'>
          <Blogs
            handleBookmark={ handleBookmark }
            handleMarkAsRead={handleMarkAsRead}
          ></Blogs>
          <Bookmarks
            bookmarks={ bookmarks }
            readingTime={readingTime}
          ></Bookmarks>
      </div>
      </section>
    
    </>
  )
}

export default App
