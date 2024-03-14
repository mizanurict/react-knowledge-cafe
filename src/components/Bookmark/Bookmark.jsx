import PropTypes from "prop-types";

const Bookmark = ({ bookmark }) => {
    const { title } = bookmark;
    return (
        <div className=" shadow-xl mb-4 p-2 rounded-lg">
            <h1>{ title }</h1>
            
        </div>
    );
};
Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired
};
export default Bookmark;