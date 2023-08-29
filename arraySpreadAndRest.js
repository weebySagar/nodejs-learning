const fruits =['apple','oranges','','mango','','lemon'];

console.log(fruits.map(fruit=>{
    if(!fruit) return 'empty string';
    return fruit;
}));


const obj1={key1:1};
const obj2 ={...obj1};
if(obj1===obj2){
    console.log('same objects');
}
else{
    console.log('different objects');
}

const obj3 = {key1: 1,key2:2};
const obj4 ={...obj3,key1:100};
console.log(obj3,obj4);