let callCount = 0;

function validate() {

    callCount += 1;

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (username === 'caupd' && password === 'caupd')
    {
        window.open('http://10.10.2.102:5001', '_blank');
    } else {
        alert('账户或密码错误')
    }

}

console.log(callCount);