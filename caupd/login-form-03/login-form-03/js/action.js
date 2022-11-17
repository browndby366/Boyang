function validate() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (username === 'caupd' && password === 'caupd')
    {
        window.open('http://10.10.2.102:5001', '_self');
    } else {
        alert('账户或密码错误')
    }

}