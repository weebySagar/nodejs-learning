const obj = {
    key1: 1,
    key2: 2,
    key3 : 1000
};

const {key1, key3} = obj;


console.log(key1,key3);


const arr = ['value1','value2'];
const [val1,val2] = arr;
console.log(val1);
console.log(val2);


const obj2 = {
    key4: 1,
    key5: 2,
    key6 : 1000
};

let {key4,key6}= obj2;

key4=20;
key6=123;

console.log(obj2.key4,obj2.key6);