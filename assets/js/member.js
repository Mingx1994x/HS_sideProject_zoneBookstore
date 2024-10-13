let isLogin = JSON.parse(localStorage.getItem('loginStatus'));
let memberData = JSON.parse(localStorage.getItem('member'));

const writeData = () => {
    const userID = document.querySelector('#userID');
    const userNickname = document.querySelector('#userNickname');
    userID.value = memberData.uid;
    userNickname.value = memberData.nickname;
}
if (isLogin) {
    writeData();
}