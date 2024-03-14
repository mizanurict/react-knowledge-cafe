import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks,readingTime }) => {
    
    return (
        <div className="w-1/3 border shadow-lg">
            <h1>Reading Time: { readingTime}</h1>
            <h1>Bookmark Blogs: { bookmarks.length }</h1> 
            {
                bookmarks.map((bookmark,idx) => <Bookmark
                    key={idx}
                    bookmark={bookmark}
                    ></Bookmark>)
            }
            
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.object.isRequired,
    readingTime:PropTypes.number
};
export default Bookmarks;