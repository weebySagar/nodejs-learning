const product =(num1,num2) => num1*num2;

console.log(product(3,2));


const student ={
    name:'sagar',
    age:22,
    greet:function(){
        return (`hello my name is ${this.name}`);
    }
}

console.log(student.greet());