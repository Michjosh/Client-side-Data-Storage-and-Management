//to store new cookies on the browser with expiration date
document.cookie = 'name=Michael; expires=' + new Date(2020, 0, 1).toUTCString

//to retirve all the cokkie stored you can only view all the cookies with it
console.log(document.cookie)