import React, { useState } from 'react';
import NoticeBoardList from './NoticeBoardList'

const NoticeBoardInsert = () => {

    const [ posts, setPosts ] = useState([
    ]);
    const [ inputTitle, setInputTitle ] = useState('');
    const [ inputContents, setInputContents ] = useState('');
    const [ nextId, setNextId ] = useState(1);

    const onChangeTitle = e => setInputTitle(e.target.value);
    const onChangeContents = e => setInputContents(e.target.value);

    const submitHandler = (e) => {
        e.preventDefault();

        const nextPosts = posts.concat({
            id: nextId,
            title: inputTitle,
            contents: inputContents,
        });

        setNextId(nextId + 1);
        setPosts(nextPosts);
        setInputTitle('');
        setInputContents('');
    };
    
    return (
        <>
            <form onSubmit={submitHandler}>
                <input value={inputTitle} onChange={onChangeTitle} name="title" placeholder="글 제목" /><br />
                <textarea value={inputContents} onChange={onChangeContents} name="content" placeholder="내용" /><br />
                <button type="submit">작성하기</button><br />
            </form>
            <NoticeBoardList posts={posts} setPosts={setPosts}/>
        </>
    );
};

export default NoticeBoardInsert;