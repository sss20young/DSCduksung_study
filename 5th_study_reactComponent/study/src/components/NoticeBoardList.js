import React from 'react';
import NoticeBoardItem from './NoticeBoardItem';

const NoticeBoardList = ({ posts, setPosts }) => {
    const onRemove = id => {
        const nextPosts = posts.filter(post => post.id !== id);
        setPosts(nextPosts);
    }

    return (
        <div>
            {posts.map(post => (
                post.id === 0 ? '' :
                <div onClick={() => onRemove(post.id)} key={post.id}>
                    <NoticeBoardItem post={post} setPosts={setPosts} key={post.id} />
                </div>
            ))}
        </div>
    );
};

export default NoticeBoardList;