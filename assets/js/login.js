import axios from "axios";

const HexAPI = 'https://todolist-api.hexschool.io';
const loginData = {};
const registerData = {};
const registerBtn = document.querySelector('#registerBtn');
const loginBtn = document.querySelector('#loginBtn');

// register
const signup = async () => {
    try {
        const registerRes = await axios.post(`${HexAPI}/users/sign_up`, registerData);
        // console.log(registerRes);
        alert(`${registerData.nickname}，恭喜完成註冊嘍！！！\n` + '可以直接登入使用服務嘍')
        window.location.reload();
    } catch (error) {
        // console.log(error);
        if (error) alert(error.response.data.message);
    }
}

// login
const login = async () => {
    try {
        const loginRes = await axios.post(`${HexAPI}/users/sign_in`, loginData);
        console.log(loginRes);
        document.cookie = `userToken=${loginRes.data.token}`;
        window.location.href = './member.html';
    } catch (error) {
        // console.log(error)
        if (error) alert(error.response.data.message);
        document.querySelector('#memberPassword').value = "";
    }
}

registerBtn.addEventListener('click', () => {
    const userData = new Object();
    userData.nickname = document.querySelector('#userNickname').value;
    userData.email = document.querySelector('#userEmail').value;
    userData.password = document.querySelector('#userPassword').value;
    userData.checkPwd = document.querySelector('#chkPassword').value;
    // console.log(userData);

    if (!userData.nickname || !userData.password || !userData.email) {
        alert('還有欄位未填喔')
        return
    }

    if (userData.checkPwd !== userData.password) {
        alert('密碼欄位不一致喔')
        return
    }
    registerData.email = userData.email;
    registerData.password = userData.password;
    registerData.nickname = userData.nickname;
    signup();
})

loginBtn.addEventListener('click', () => {
    const userData = new Object();
    userData.email = document.querySelector('#memberEmail').value;
    userData.password = document.querySelector('#memberPassword').value;
    // console.log(userData);
    if (!userData.password || !userData.email) {
        alert('帳號密碼欄位不可為空喔')
        return
    }
    loginData.email = userData.email;
    loginData.password = userData.password;
    login();
})