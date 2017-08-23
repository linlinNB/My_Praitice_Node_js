function Person () {
    
}
var Person_Son = new Person()

Person.prototype.sayHi = function () {
    console.log('这是Person原型中的使用的语言 ： HI')
}

Person_Son.sayHi()