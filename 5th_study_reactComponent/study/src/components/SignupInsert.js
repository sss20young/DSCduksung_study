import React from 'react';

const submitHandler = (event) => {
    event.preventDefault();
    alert("id: " + event.target.id.value + "\n이름: " + event.target.name.value + "\n생년월일: " +  event.target.birth.value + "\n성별: " +  event.target.sex.value + "\n전화번호: " + event.target.phone_number.value);
};


const SignupInsert = () => {
    return (
        <form onSubmit={submitHandler}>
            <input name="id" placeholder="아이디" /><br />
            <input name="password" placeholder="비밀번호" type="password" /><br />
            <input name="password_check" placeholder="비밀번호 재확인" type="password" /><br />
            <input name="name" placeholder="이름" /><br />
            <input name="birth" placeholder="생년월일" type="date" /><br />
            <select name="sex">
                <option value="여">여</option>
                <option value="남">남</option>
            </select><br />
            <input name="phone_number" placeholder="전화번호" /><br />
            <button type="submit">가입하기</button>
        </form>
    );
};

export default SignupInsert;