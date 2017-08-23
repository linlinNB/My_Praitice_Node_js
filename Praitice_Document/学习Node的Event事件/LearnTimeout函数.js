/**
 * Created by 95262 on 2017/7/6.
 */

var testfunction = function (msg) {
    console.log(msg)
}

var timer = setTimeout(testfunction, 5000, '我就是回调一下testfunction')
clearTimeout(timer)