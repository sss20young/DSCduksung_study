import React from 'react';

const NoticeBoardItem = ({ post }) => {
    const { id, title, contents } = post;

    return (
        <div>
            <p>글 번호 : { id }</p>
            <p>글 제목 : { title }</p>
            <p>내용 : { contents }</p>
        </div>
    );
};

export default NoticeBoardItem;