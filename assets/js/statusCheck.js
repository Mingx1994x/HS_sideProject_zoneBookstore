import axios from "axios";
const HexAPI = 'https://todolist-api.hexschool.io';
const memberData = {};

// let errorResponse;
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
        localStorage.setItem("member", JSON.stringify(memberData));
        localStorage.setItem("loginStatus", JSON.stringify(true));
    } catch (error) {
        // console.log(error);
        checkBehavior();
        // isCheckout.value = false
    }
}

const checkBehavior = () => {
    // console.log(window.location.toString());
    localStorage.setItem("loginStatus", JSON.stringify(false));
    let pageName = window.location.toString().split('/');
    if (pageName[pageName.length - 1].includes('member.html')) {
        console.log('請先登入');
    }
}

checkout();