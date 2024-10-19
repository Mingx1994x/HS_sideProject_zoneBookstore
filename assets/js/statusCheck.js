import axios from "axios";
const HexAPI = 'https://todolist-api.hexschool.io';
const memberData = {};
const memberLogin = document.querySelector('#memberLogin');
const memberArea = document.querySelector('#memberArea');
// checkout
const checkout = async () => {
    try {
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)userToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
        const res = await axios.get(`${HexAPI}/users/checkout`, {
            headers: {
                authorization: token
            }
        })
        // console.log(res);
        memberData.nickname = res.data.nickname;
        memberData.uid = res.data.uid;
        localStorage.setItem('nickName', `${memberData.nickname}`);
        writeData();
    } catch (error) {
        // console.log(error);
        checkBehavior();
        // isCheckout.value = false
    }
}

const checkBehavior = () => {
    memberLogin.classList.remove('d-none');
    memberArea.classList.add('d-none');
    // console.log(window.location.toString());
    let pageName = window.location.toString().split('/');
    if (pageName[pageName.length - 1].includes('member.html')) {
        // console.log('請先登入');
        alert('請先登入');
        window.location.href = './index.html';
    }
}

// logout
const logout = async (userId) => {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)userToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    try {
        const logoutRes = await axios.post(`${HexAPI}/users/sign_out`, userId, {
            headers: {
                authorization: token
            }
        });
        console.log(logoutRes);
        // logoutMsg.value = logoutRes.data.message
        // alert(res.data.message)
        document.cookie = 'userToken=null';
        localStorage.clear();
        window.location.href = './index.html';
    } catch (error) {
        console.log(error);
        if (error) alert(error.response.data.message);
    }
}

const writeData = () => {
    memberLogin.classList.toggle('d-none');
    memberArea.classList.toggle('d-none');
    let pageName = window.location.toString().split('/');
    if (pageName[pageName.length - 1].includes('member.html')) {
        // let memberInfo = JSON.parse(localStorage.getItem('member'));
        // const userID = document.querySelector('#userID');
        const userNickname = document.querySelector('#userNickname');
        const memberNickname = document.querySelector('#memberNickname');
        const editNickname = document.querySelector('#editNickname');
        const userEmail = document.querySelector('#userEmail');
        const editEmail = document.querySelector('#editEmail');
        const userPassword = document.querySelector('#userPassword');
        const editPassword = document.querySelector('#editPassword');
        const chkEditPassword = document.querySelector('#chkEditPassword');
        const memberInfo = JSON.parse(localStorage.getItem('member'));
        console.log(memberInfo);
        // userID.value = memberData.uid;
        userNickname.value = memberData.nickname;
        editNickname.value = memberData.nickname;
        memberNickname.textContent = memberData.nickname;
        userEmail.value = memberInfo.email;
        editEmail.value = memberInfo.email;
        userPassword.value = memberInfo.password;
        editPassword.value = memberInfo.password;
        chkEditPassword.value = memberInfo.password;
    }
}

checkout();

//監聽
const logoutBtn = document.querySelector('#logoutBtn');
if (logoutBtn) {
    logoutBtn.onclick = () => {
        if (confirm(`${memberData.nickname}，確定要登出嗎？`)) logout(memberData.uid);


        return
    }
}