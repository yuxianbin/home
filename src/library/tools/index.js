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

tools.getYearMonth = function (time) {
    let year = ''
    let month = ''

    if (time) {
        let timeObj = new Date(time)
        year = timeObj.getFullYear()
        month = timeObj.getMonth() + 1
    } else {
        let timeObj = new Date(Date.now())
        year = timeObj.getFullYear()
        month = timeObj.getMonth() + 1
    }

    return year + '/' + month
}

export default tools