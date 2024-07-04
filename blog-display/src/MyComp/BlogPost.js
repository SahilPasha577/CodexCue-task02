import React from 'react';
import './Blog.css';

export const BlogPost = ({ post1 }) => {

    // const { post1 } = props

    return (

        <div className="blog-post">
            <h2>{post1.title}</h2>
            <h3>By {post1.author}</h3>
            <p>{post1.content}</p>
        </div>
    );
};


