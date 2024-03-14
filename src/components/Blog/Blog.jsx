/** @format */
import { CiBookmark } from "react-icons/ci";
import PropTypes from "prop-types";
import cover from "../../assets/images/cover-photos1.png";
import pic from "../../assets/images/boy1.jpg";

const Blog = ({ blog, handleBookmark,handleMarkAsRead }) => {
  const { title, author, reading_time,posted_time,hashtags } = blog;

  return (
    <div className="border mb-4">
      <img className="w-full" src={cover} alt="" />
      <div className="flex justify-between items-center">
        <div className="flex justify-center items-center gap-2 my-2">
          <div className="w-12">
            <img src={pic} alt="" />
          </div>
          <div>
            <h1>{author}</h1>
            <p>{posted_time}</p>
          </div>
        </div>
        <div className="flex gap-2">
                  <p>{ reading_time } min read</p>
                  <button onClick={()=>handleBookmark(blog)} className="text-2xl mr-2"><CiBookmark></CiBookmark></button>
        </div>
      </div>
      <h1 className="text-3xl font-bold ">{title}</h1>
      <div className="flex gap-2 my-2">
        {hashtags.map((hash,idx)=><span key={idx}><a href="">#{hash}</a></span>)}
      </div>
      <button onClick={()=>handleMarkAsRead(reading_time)} className="underline text-blue-500">Mark as Read</button>
    </div>
  );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
};
export default Blog;
