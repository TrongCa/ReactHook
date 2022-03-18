import React from 'react';
import PropTypes from 'prop-types';

PostList.propTypes = {
    posts:PropTypes.array,
};

PostList.defaultProps={
    posts:[],
}
function PostList(props) {
    const {posts}    = props;
    // console.log("posts", posts);
    return (
        <ul className="post-list">
        {/* {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))} */}
        {(posts.data ?? []).map((item)=> {
            return(
                <div key={item?.id}>
                    {item?.title}
                </div>
            )
        })}
      </ul>
    )
}

export default PostList;