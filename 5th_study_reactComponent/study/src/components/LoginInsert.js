import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const submitHandler = (event) => {
    event.preventDefault();
    alert("id: " + event.target.id.value);
};

const LoginInsert = () => {
    return (
        <Fragment>
            <form onSubmit={submitHandler}>
                <input name="id" placeholder="아이디"></input><br />
                <input name="password" placeholder="비밀번호" type="password"></input><br />
                <button type="submit">로그인</button>
            </form>
            <Link to="/signup"><button>회원가입</button></Link>
        </Fragment>
    );
};

export default LoginInsert;