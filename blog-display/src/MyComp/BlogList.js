import React, { useEffect, useState } from 'react';
import { BlogPost } from './BlogPost';
import './Blog.css';


export const BlogList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('/blogs.json')
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                console.log(data)
                setPosts(data)
            })
            .catch((error) => {
                console.error('Error fetching the blogs:', error)
            })
        // .then(response => response.json())
        // .then(data => setPosts(data))
        // .catch(error => console.error('Error fetching the blogs:', error));
    }, []);

    return (
        <div className="blog-container">
            {
                posts.map((post) => (
                    <BlogPost key={post.id} post1={post} />
                ))
            }
            {/* {posts.map(post => (
                <BlogPost key={post.id} post={post} />
            ))} */}
        </div>
    );
};


