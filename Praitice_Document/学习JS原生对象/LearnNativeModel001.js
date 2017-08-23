/**
 * 重写原型模式会打断每个function自动创建的 constructor与实例本身创建对 原型链接
 *
 */

function Person () {

}

var friend = new Person()

Person.prototype = {
    constructor: Person,
    name: '林麟',
    age: 29,
    job: '软件开发人员',
    sayName: function () {
        console.log(this.name)
    }
}

friend.sayName()