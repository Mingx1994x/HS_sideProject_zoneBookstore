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
        const userID = document.querySelector('#userID');
        const userNickname = document.querySelector('#userNickname');
        const memberNickname = document.querySelector('#memberNickname');

        userID.value = memberData.uid;
        userNickname.value = memberData.nickname;
        memberNickname.textContent = memberData.nickname;
        userID.value = memberData.uid;
    }
}

checkout();

//監聽
const logoutBtn = document.querySelector('#logoutBtn');
if (logoutBtn) {
    logoutBtn.onclick = () => {
        logout(memberData.uid);
    }
}