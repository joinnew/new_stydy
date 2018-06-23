// var o = {}; //空对象字面量
// o.step = 1;

// var bValue = 5;
// Object.defineProperty(o, 'a', {
//     get: function() {
//         console.log('get');
//         return bValue;
//     },
//     set: function(val) {
//         console.log('给bValue设置了新的值');
//         // val指代赋值的那个值，o.a = 24;
//         // set可以在修改数据后更新那个节点
//         bValue = val;
//     }
// });

// // get不能与writable一起使用,也不能与value一起使用
// o.a = 2;
// console.log(o.a);

// (function () {

//     //启用严格模式
//     'use strict';
//     console.log(this);
//     var o = {};

//     Object.defineProperty(o, 'a', {
//         value: 7,
//         // get: function() {
//         //     // get甚至可以发送一个ajax请求
//         // },
//         writable: false
//     });

//     console.log(o.a);
//     // o.a = 24;
//     console.log(o.a);
// })()
// var o = {};
// Object.defineProperty(o, 'a', {
//     value: 1,
//     enumerable: true
// })

// Object.defineProperty(o, 'b', {
//     value: 2,
//     enumerable: false
// })

// Object.defineProperty(o, 'c', {
//     value: 3
// })

// o.d = 4;

// console.log(Object.keys(o));
// for(let i in o) {
//     console.log(i, o[i]);
// }
// console.log(o.b);
// console.log(o.c);
// console.log(o.propertyIsEnumerable('c'));

'use strict';
var o = {};

Object.defineProperty(o, 'a', {
    configurable: false,
    get: function() {
        return 3;
    }
});

// 不可配置包括删除操作
console.log(o.a);
// delete o.a;
// console.log(o.a);



function Archiver() {
    var temperature = null;
    var archive = [];
    // this是指实例化的对象
    Object.defineProperty(this, 'temperature', {
        get: function() {
            console.log('get!');
            return temperature;
        },
        set: function(value) {
            console.log('set!');
            temperature = value;
        }
    })
    // var data = {000
    //     age: 19,
    //     name: '张双双'
    // }
    for (let key in data) {
        Object.defineProperty(data, key, {
            // data中的数据进行属性设定，通过get，可以修改data中数据自身的内容，更新其自身，而不是仅通过另一个obj来表示修改后的内容
            get: function() {
                console.log('get!');
                return data[key];
            },
            set: function(newValue) {
                data[key] = newValue;
            }
        })
    }
    
}

var arc = new Archiver();
arc.temperature = 35;
console.log(arc.temperature);
arc.temperature = 38;
console.log(arc.temperature);