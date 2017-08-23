/**
 * Created by 95262 on 2017/7/4.
 */
console.log("进行2+2的结果 = " , "2+2")
console.log("进行2+2的结果 = " , (2+2) )

console.log("使用console.time进行代码段的时间统计")
console.time("测试代码段A")
for (var i=1; i<= 100000; i++){
    ;
}
console.timeEnd("测试代码段A")

console.log("学习console.trace的处理方式")
var user = new Object()
user.name = "林麟"
user.getName = function () {
    return user.name
}
user.setName = function (name) {
    this.name = name
}
console.trace("在这停顿")