/*******************************forEach循环数组*****************************/
// var arr = [1, 2, 3, 4];
// var arr1 = [];
// arr.forEach(res => {
//     console.log(res*2)
//     arr1.push(res*2)
// })
// console.log(arr1)


// var num= 0
// arr.forEach(res => {
//     num += res
// })
// console.log(num)


// 如果要循环对象就要使用Object.keys(objEach).forEach(res=>{})转换
var objEach = {
  name: '小明',
  age: '18',
  sex: '男'
};
Object.keys(objEach).forEach(res => {
  console.log(objEach[res]);
})

/*******************************for of循环数组*****************************/
/**
 for of 循环用来获取一对键值对中的值,而 for in 获取的是 键名
 */
// var arr2 = ['a', 'b', 'c'];
// var obj = {
//   name: '小明',
//   age: '18',
//   sex: '男'
// };
// //也可以不写let--->for (value of arr2){}
// for (let value of arr2) {
//   console.log(value)
//   // a
//   // b
//   // c
// }
//
// // for (let i of obj) {
// //   console.log(i)
// //   // Uncaught TypeError: obj is not iterable 报错了
// // }
//
// for (let i of Object.keys(obj)) {
//   console.log(i);
//   // name
//   // age
//   // sex
//   console.log(obj[i])
//   // 小明
//   // 18
//   // 男
// }


/*******************************for in循环对象*****************************/
/**
 for ... in 循环返回的值都是数据结构的键值名。
 遍历对象返回的对象的key值
 遍历数组返回的数组的下标(key)

 for ... in 循环不仅可以遍历数字键名,还会遍历原型上的值和手动添加的其他键
 特别情况下, for ... in 循环会以任意的顺序遍历键名

 总结一句: for in 循环特别适合遍历对象。
 **/
//例一：
// var obj = {
//     name:'阿童木',
//     age: 18,
//     sex: '男'
// }
// for (let key in obj) {
//     console.log(obj[key])
// }

//例二：
// const obj = {
//   a: 1,
//   b: 2,
//   c: 3
// };
//
// //返回下标
// for (let i in Object.keys(obj)) {
//   console.log(i)
//   // 0
//   // 1
//   // 2
// }
//
// //返回键名
// for (let i in obj) {
//   console.log(i)
//   // a
//   // b
//   // c
// }
//
//
// //返回值
// for (let i in obj) {
//   console.log(obj[i])
//   // 1
//   // 2
//   // 3
// }


/******************************* map()与数组*****************************/
/**map() 方法创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果**/
// map 需要返回值return，如果没有返回值默认值undefined
// let num = arr.map(res => {
//     return res * 2
// });
// console.log(num);

/******************************* map()与数组对象*****************************/
// let objArr = [
//   {
//     pinpai: '宝马',
//     jiage: 60,
//     guojia: '德国'
//   },
//   {
//     pinpai: '红旗',
//     jiage: 600,
//     guojia: '中国'
//   }
// ];
//
// let pingpais = objArr.map(res => {
//   return res.pinpai
// });
// console.log(pingpais)


/******************************* filter() 过滤，找到所有符合条件的值*****************************/
// 案例1：筛选出数值为2的

// var arr = [1, 2, 5, 2, 5, 3, 6, 4, 22];
// var arr2 = arr.filter(res => {
//     return res === 2
// });
// console.log(arr2);
//
// 案例2：筛选出type值为中国的
// var car = [
//     {
//         name: '宝马',
//         type: '德国'
//     },
//     {
//         name: '红旗',
//         type: '中国'
//     },
//     {
//         name: '路虎',
//         type: '印度'
//     },
//     {
//         name: '奥迪',
//         type: '德国'
//     },
//     {
//         name: '吉利',
//         type: '中国'
//     },
//     {
//         name: '哈弗',
//         type: '中国'
//     }
// ];
//
// var car1 = car.filter(res => {
//     return res.type === '中国'
// });
// console.log(car1)

/******************************* find() 选择第一个符合条件的值，找到后不往下执行*****************************/
// var arr3 = arr.find(res => {
//     return res === 2
// });
// console.log(arr3)
//
// var car2 = car.find(res => {
//     return res.type === '中国'
// });
// console.log(car2)

/*************************************every和some,返回布尔值***************************************
 *                                  every 一假即假
 *                                  some 一真即真
 */
// var obj = [
//     {
//         id: 2
//     }, {
//         id: 5
//     }, {
//         id: 6
//     }, {
//         id: 7
//     }, {
//         id: 4
//     }
// ];
// var booler1 = obj.every(res => {
//     return res.id > 5
// });
// console.log(booler1)
// var booler2 = obj.some(res => {
//     return res.id > 5
// });
// console.log(booler2)


/******************************* reduce() ****************************
 * reduce方法接收两个参数，参数名自定
 * 第一个参数是储存每次return后的值，可以给初始值，例如这个 0 就是cont的初始值
 * 第二个参数是遍历出数值里的每一个元素
 * */
// var arr = [1, 2, 3, 4, 5, 6];
// var num = arr.reduce((cont, arrs) => {
//   return cont + arrs
// }, 0);
// console.log(num);


/****************************************展开运算符************************************/
// 案例一：
// var A = [1, 2, 3];
// var B = [4, 5, 6];
// console.log([...A, ...B]);

// 案例二：
// function D(arr) {
//     return arr.reduce((total, arr) => {
//         return total + arr
//     }, 0)
// }
// var arr = [1, 2, 3, 4, 5, 6];
// console.log(D(arr));


// function D(...arr) {
//     return arr.reduce((total, arr) => {
//         return total + arr
//     }, 0)
// }
// console.log(D(1, 2, 3, 4, 5, 6));


/****************************************解构对象************************************/
// 案例一：
// var carObj = {
//     name: "保时捷",
//     type: "帕拉梅拉",
//     price: 160
// };

// 方法一：ES5
// function car1(car) {
//     return `${car.name},${car.type},${car.price}`
// }
// console.log(car1(carObj));

// 方法二：ES6
// function car({name, type, price}) {
//     return `${name},${type},${price}`
// }
// console.log(car(carObj));


/****************************************Generato生成器************************************/
/**Generator函数和普通的函数区别有两个：
 * 1：function和函数名之间有一个 * 号
 * 2：函数体内部使用了yield表达式
 */
// function* sayName() {
//     yield '奔驰';
//     yield '保时捷';
//     yield '奥迪'
// }
//
// const name = sayName();
// console.log(name);//"Generator {  }"
// console.log(name.next());//奔驰
// console.log(name.next());//保时捷
// console.log(name.next());//奥迪
// console.log(name.next());//undefined
//
//
// var arr = [1, [[2, 3], 4], [5, 6]];
// var flat = function* (a) {
//     var length = a.length;
//     for (var i = 0; i < length; i++) {
//         var item = a[i];
//         if (typeof item !== 'number') {
//             yield* flat(item);
//         } else {
//             yield item;
//         }
//     }
// };
// for (var f of flat(arr)) {
//     console.log(f);
// }


/****************************************数据类型 map ************************************/
/**
 * 键值对：类似于对象（object）与对象最大的不同是map的键值可以为任何类型
 */
// 设置key的键名
// const map1 = new Map();
// const key1 = 'map string';
//       key2 = {};
//       key3 = function () {};

/*设置key的value值*/
// map1.set(key1,'value key1');
// map1.set(key2,'value key2');
// map1.set(key3,'value key3');


/*根据key获取对应的value*/
// console.log(map1.get(key1));
// console.log(map1.get(key2));
// console.log(map1.get(key3));


/*获取对应的value的数量*/
// console.log(map1.size)


/*用for of循环map1中的key和value*/
// for (let full of map1){
//     console.log(full)
// }


/*获取key值*/
// for (let key of map1.keys()){
//     console.log(key)
// }


/*获取value值*/
// for(let value of map1.values()){
//     console.log(value)
// }


/*forEach循环遍历map1*/
// map1.forEach((value, key)=>{
//     console.log(`${value}=====${key}`)
// });


/*将map1转化为数组*/
// const map1Array = Array.from(map1);
// console.log(map1Array);


/*将map1里面的key转化为数组*/
// const keyArray = Array.from(map1.keys());
// console.log(keyArray)


/*将map1里面的value转化为数组*/
// const valueArray = Array.from(map1.values());
// console.log(valueArray)


/****************************************数据类型 set ************************************/
/**
 * set是一个集合，类似于数组（Array），不同点是set里面可以存储任何的数据类型，但是里面存储的值不能重复，重复值也只会显示一个
 */
/*创建一个set方法一*/
// const set1 = new Set();

/*往set1里面添加数据*/
// set1.add(100);
// set1.add('我是字符串');
// set1.add({name: '阿童木'});
// set1.add(function () {
// });
// set1.add(100);
// console.log(set1)

/*创建一个set方法二*/
// const set2 = new Set([100, '我是字符串', {name: '阿童木'}, function () {
// }]);
// console.log(set2);


/*获取set1的长度大小*/
// console.log(set1.size);


/*判断set里面是否有某个值（has()），返回true或false
* 注意：不能判断对象，因为对象比较的地址，在编程里每二个元素的地址都是唯一的
**/
// console.log(set1.has(100));


/*删除set1 的某个值*/
// set1.delete(100)
// console.log(set1)


/*将set转化为数组（Array）*/
// const setArray = Array.from(set1);
// console.log(setArray);


/*for of 循环遍历set*/
// for (let item of set1){
//     console.log(item)
// }


/*forEach 循环遍历set*/
// set1.forEach(item =>{
//     console.log(item)
// })


/**************************************** Promise 对象************************************/
/** promise 的三种状态：（状态参数名自定）
 * 1，unresolve：等待任务完成
 * 2，resolve：任务完成并且没有任何问题，就会执行 .then 回调函数
 * 3，reject：任务完成，但是出现了问题，就会执行 .catch 回调函数
 */
// const promise = new Promise((resolve, reject) => {
//     resolve()
//     // reject()
// });
// promise
//     .then(() => {
//         console.log('成功，没毛病！')
//     })
//     .then(() => {
//         console.log('可以无限的.then下去')
//     })
//     .catch(() => {
//         console.log('ohoh,出毛病了！')
//     });


/**************************************** Promise.all ************************************/
// const promise1 = Promise.resolve('hello world');
// const promise2 = Promise.resolve(20);
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 2000, '哈哈')
// });
// const promise4 = fetch('http://jsonplaceholder.typicode.com/users').then(res =>{
//     return res.json()
// });
// Promise.all([promise1, promise2, promise3,promise4]).then(value => {
//     console.log(value)
// });


/**************************************** fetch请求************************************/
// document.getElementById('btn1').addEventListener('click', getHttp);

// function getHttp() {
//     fetch('https://api.github.com/users')
//         .then(res => res.json())
//         .then(data => console.log(data))
//         .catch(() => {
//             console.log('出错了')
//         })
// }

/*使用axios请求是=时需要安装axios或是添加axios包*/
// function getHttp() {
//     axios({
//         url: 'https://api.github.com/users',
//         method: 'get'
//     })
//         .then(res=>{
//             console.log(res.data)
//         })
//         .catch(err=>{
//             console.log(err)
//         })
// }


/**************************************** async 和 await ************************************/
/**
 * async: 是将一个函数转为 Promise 返回
 * await: 等待 resolve 执行完毕才执行
 *
 */

/*案例一：*/
// async function myFun() {
//     const promise = new Promise(((resolve, reject) => {
//         setTimeout(() => resolve('hello world'), 2000)
//     }));
//
//     // 错误信息
//     const error = true;
//     if (!error) {
//         const res = await promise;
//         return res
//     } else {
//         await Promise.reject(new Error('error: 出错了'))
//     }
// }
//
// myFun()
//     .then(data => {
//         console.log(data)
//     })
//     .catch(err => {
//         console.log(err)
//     });


/*案例二：*/
// async function getUser() {
//     const response = await fetch("http://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     return data
// }
//
// getUser()
//     .then(res => {
//         console.log(res)
//     })
//     .catch(() => {
//         console.log('出错了')
//     });


/**************************************** class ************************************/
// class App { //定义了一个名字为Person的类
//     constructor(name, age) { //constructor是一个构造方法，用来接收参数
//         this.name = name;
//         this.age = age;
//     }
//
//     say() { //这是一个类的方法，注意千万不要加上function
//         return '我叫' + this.name + ',我今年' + this.age + '岁'
//     }
// }
//
// const demo = new App('阿童木', '18');
// console.log(demo.say());

/**class继承**/
// class Bpp extends App {
//     constructor() {
//         super('阿童木', '18');//要将继承的参数写在super()方法里面
//         this.aa='123' // this一定要写在super方法后面，否则会报错
//     }
// }
// const B=new Bpp();
// console.log(B);
// console.log(B.aa);

/**ES5写法**/
// function App1(name1, age1) {
//     this.name1 = name1;
//     this.age1 = age1;
// }
//
// App1.prototype.say1 = function () {
//     return '我叫' + this.name1 + ',我今年' + this.age1 + '岁'
// };
// const demo1 = new App1('阿童木', '20');
// console.log(demo1.say1());













