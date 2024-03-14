import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";
const Blogs = ({handleBookmark,handleMarkAsRead}) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('./blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);

    return (
        <div className="w-2/3">
            {
                blogs.map((blog,idx) =>
                    <Blog
                        key={idx}
                        blog={ blog }
                        handleBookmark={ handleBookmark }
                        handleMarkAsRead={handleMarkAsRead}
                    ></Blog>
                )
        }
        </div>
    );
};
Blogs.propTypes = {
    handleBookmark: PropTypes.func.isRequired,
    handleMarkAsRead:PropTypes.func.isRequired
};
export default Blogs;