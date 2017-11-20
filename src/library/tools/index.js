import Cookies from 'js-cookie'

let tools = {}

tools.setCookie = function(...arg) {
    Cookies.set(...arg)
}

tools.getCookie = function(...arg) {
    return Cookies.get(...arg)
}

tools.removeCookie = function(...arg) {
    Cookies.remove(...arg)
}

tools.getTime = function (time) {
    let year = ''
    let month = ''
    let day = ''

    if (time) {
        let timeObj = new Date(time)
        year = timeObj.getFullYear()
        month = timeObj.getMonth() + 1
        day = timeObj.getDate()
    } else {
        let timeObj = new Date(Date.now())
        year = timeObj.getFullYear()
        month = timeObj.getMonth() + 1
        day = timeObj.getDate()
    }
    console.log('time:', day)

    return year + '/' + month + '/' + day
}

export default tools