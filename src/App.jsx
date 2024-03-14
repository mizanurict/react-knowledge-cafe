
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  

  return (
    <>
      <section className='p-4 m-auto max-w-[1200px] '>
      <Header></Header>
      <div className='flex justify-between items-start m-4 p-4 gap-2'>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </div>
      </section>
    
    </>
  )
}

export default App
