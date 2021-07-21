import React from 'react';
import Post from './Post';


const PostList = (props) => {
    return (
        <React.Fragment>
            <h1>Post List Here</h1>
            {props.posts.map(post=>{
                return <Post post={post}/>
            })}
        </React.Fragment>
    );

}

export default PostList;
