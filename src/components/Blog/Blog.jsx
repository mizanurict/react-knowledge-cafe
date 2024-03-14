/** @format */

import PropTypes from "prop-types";
import cover from "../../assets/images/cover-photos1.png";
import pic from "../../assets/images/boy1.jpg";
const Blog = ({ blog }) => {
  const { title, author, reading_time } = blog;
  console.log(blog);

  return (
    <div>
      <img src={cover} alt="" />
      <div className="flex justify-between items-center">
        <div className="flex justify-center items-center gap-2 my-2">
          <div className="w-12">
            <img src={pic} alt="" />
          </div>
          <div>
            <h1>{author}</h1>
            <p>Mar 14</p>
          </div>
        </div>
        <div>
          <p>{reading_time} min read</p>
        </div>
      </div>
      <h1 className="text-3xl font-bold ">{title}</h1>
      <div className="flex gap-2 my-2">
        <h1>#beginners</h1>
        <h1>#Programming</h1>
      </div>
      <button className="underline text-blue-500 ">Mark as Read</button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};
export default Blog;
