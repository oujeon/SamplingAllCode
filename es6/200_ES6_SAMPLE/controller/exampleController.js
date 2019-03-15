/**
 *
 */
import { helloWorld , pi, square, Person } from '../lib/exampleLib.js';


let foo = 123;

{
    let foo = 456;
    let bar = 456;
}

let xxx = 123;
//let xxx = 456;  Uncaught SyntaxError: Identifier 'bar' has already been declared

var div001 = document.getElementById("div001");
var div002 = document.getElementById("div002");

div001.innerHTML = foo;
div002.innerHTML = xxx;


var funcs =[];

for(let i = 0; i < 3; i++ ){
    funcs.push(function(){
       console.log(i);
    });
}

for(var j =0; j < 3; j++){
    console.dir(funcs[j]);
    funcs[j]();
}

// 1.5 ���� ��ü�� let
var globalVar = 123; // ��������
console.log(window.globalVar);

let globalLet = 123; // ��������
console.log(window.globalLet);

// 2. const


const FOO = 123;
//Uncaught TypeError: Assignment to constant variable.
//    at exampleController.js:49
// FOO = 456; // TypeError: Assignment to constant variable.

//Uncaught SyntaxError: Missing initializer in const declaration
//const AOO; // SyntaxError: Missing initializer in const declaration


{
    const FOO = 10;
    console.log(FOO); //10
}
console.log(FOO); // ReferenceError: FOO is not defined

// 2.2 ���
var rows = 1;
// 10�� �ǹ̸� �˱� ��Ʊ� ������ �������� ���� �ʴ�.
if(rows > 10){

}
// ���� �ǹ̸� ��Ȯ�� ����Ͽ� �������� ���Ǿ���.
const MAXROWS = 10;
if(rows > MAXROWS){

}

const obj = { foo: 123};
console.log(obj);

// Assignment to constant variable.
// obj = {bar:456};


// 2.3 const�� ��ü

const user = { name : 'Lee'};

user.name = 'Kim';

console.log(user);

//3. var vs. let vs. const


// 6.2 Template Literals
// ���ø� ���ͷ�

const template = `���ø� ���ͷ��� '��������ǥ(single quotes)'�� "ū����ǥ(double quotes)"�� ȥ���� �� �ִ�.`;

console.log(template);

const template1 = `<ul class="nav-items">
  <li><a href="#home">Home</a></li>
  <li><a href="#news">News</a></li>
  <li><a href="#contact">Contact</a></li>
  <li><a href="#about">About</a></li>
</ul>`;

console.log(template1);



const first = 'Ung-mo';
const last = 'Lee';


console.log('My name is ' + first + ' ' + last + '.');


console.log(`My name is ${first} ${last}.`);



//���� Ÿ��
console.log(`1 + 1 = ${1+1}`);


// 6.3 Arrow function
// ȭ��ǥ �Լ�




// 2. ȭ��ǥ �Լ��� ȣ��

const pow = x =>{ return x *  x };

console.log(pow(10));

//

const arr = [1, 2, 3];
const pow2 = arr.map(x =>{ return x*x  });

console.log(pow2);

//3. this
// 3.1 �Ϲ� �Լ��� this

const person = {
    name : 'Lee',
    sayHi(){
        console.log(`Hi ${this.name}`);
    }
};

person.sayHi();

const people = {
    name : 'lee',
}

Object.prototype.tellHi = function(){
    console.log(`Hi ${this.name}`);
};

people.tellHi();

// 4.3 ������ �Լ�


const AAAA = () => {};

console.log(AAAA.hasOwnProperty('prototype'));
//AAAA is not a constructor
//const aaaa = new AAAA();


var button = document.getElementById('mybutton');

button.addEventListener('click', function(){
    console.log(this === button);

    this.innerHTML = 'Clicked button';
});

// 6.4 Extended Parameter Handling
// �Ķ���� �⺻��, Rest �Ķ����, Spread ������


function plus(x = 0, y=0){
    return x+y;
}

console.log(plus());
console.log(plus(1, 2));

// 2. Rest �Ķ����
// 2.1 �⺻ ����

function fnRest(...rest){
    console.log(Array.isArray(rest));
    console.log(rest);
}

fnRest(1, 2, 3, 4, 5);


function fnParam(param, ...rest){
    console.log(param);
    console.log(rest);
}

fnParam(1, 2, 3, 4, 5);

//ES6������ rest �Ķ���͸� ����Ͽ� ���� ���ڸ� �Լ� ���ο� �迭�� ������ �� �ִ�.
//�̷��� �ϸ� ���� �迭�� arguments ��ü�� �迭�� ��ȯ�ϴ� ���� ���ŷο��� ���� �� �ִ�.

function sum(...args){
    console.log(arguments);
    console.log(Array.isArray(args));
    return args.reduce((pre, cur) => pre+cur);
}

console.log(sum(1, 2, 3, 4, 5, 6));


var normalFunc = function(){};

console.log(normalFunc.hasOwnProperty('arguemnts'));

const arrowFunc = () => {};
console.log(arrowFunc.hasOwnProperty('arguments'));

//3. Spread ������

console.log(...[1,2,3]);
console.log(...'hello');

console.log(...new Map([['a', '1'],['b', '2']]));
console.log(...new Set([1, 2, 3]));


// ES6�� Spread ������(��)�� ����� �迭�� �Լ��� �μ��� ����ϸ�
// �迭�� ��Ҹ� ���������� �и��Ͽ� ���������� �Ķ���Ϳ� �Ҵ��Ѵ�.

function fnSpead(x, y, z){
    console.log(x);
    console.log(y);
    console.log(z);
}


const speadArr = [1, 2, 3];

fnSpead(...speadArr);

// Rest �Ķ���ʹ� �ݵ�� ������ �Ķ�����̾�� ������ Spread �����ڸ� ����� �μ��� �����Ӱ� ����� �� �ִ�.

function fnAAA(v, w, x, y, z){
    console.log(v);
    console.log(w);
    console.log(x);
    console.log(y);
    console.log(z);
}

fnAAA(1,...[2, 3], 4,...[5]);


// 3.2 �迭���� ����ϴ� ���
// 3.2.1 concat

const  arrSpread = [1, 2, 3];
console.log('sample : %o',arrSpread);


const arr1 = [1, 2, 3, 6];
const arr2 = [4, 5, 6];

arr1.push(...arr2);
console.log('merge  : %o', arr1);


// 3.2.3 splice
const arr11 = [1, 2, 3, 6];
const arr22 = [4, 5];

arr11.splice(3, 0, ...arr22);
console.log('arr1 : %o',arr11);

// 3.2.4 copy


const arr333 = [1, 2, 3];
const copy =[...arr333];

console.log('copy : %o',copy);

copy.push(4);

console.log('copy : %o',copy);
console.log('arr333 : %o',arr333);


//3.3 ��ü���� ����ϴ� ���

const sample = {...{x:1, y:2}, ...{y:10, z:3}};

console.log('sample : %o',sample);

// Ư�� ������Ƽ ����
const changed = {...{x:1, y:2}, y:100};
// changed = { ...{ x: 1, y: 2 }, ...{ y: 100 } }
console.log('changed : %o', changed);

// ������Ƽ �߰�
const added = { ...{x:1, y:2}, z:0};
// added = { ...{ x: 1, y: 2 }, ...{ z: 0 } }
console.log('added : %o', added);


// Object.assign �޼ҵ带 ����ص� ������ �۾��� �� �� �ִ�.

const byOjectAssign1 = Object.assign({}, {x:1, y:2}, {y:10, z:3});
console.log('byOjectAssign1 : %o', byOjectAssign1);

const byOjectAssign2 = Object.assign({}, {x:1, y:2}, {y:100});
console.log('byOjectAssign2 : %o', byOjectAssign2);

// ������Ƽ �߰�
const byOjectAssign3 = Object.assign({}, {x:1, y:2}, {z:0});
console.log('byOjectAssign3 : %o',byOjectAssign3);


// Spread �����ڸ� ����ϸ� ���� �迭 ��ü(Array-like Object)�� �迭�� �ս��� ��ȯ�� �� �ִ�.

const htmlColloection = document.getElementsByTagName('li');
const arrhtmlColloection = [...htmlColloection];

console.log('arrhtmlColloection : %o', arrhtmlColloection);


// 6.5 Enhanced Object property
// ��ü ���ͷ� ������Ƽ ��� Ȯ��

let x = 1;
let y = 2;

const varObj = {x, y};

console.log('varObj : %o', varObj);

// 2. ������Ƽ Ű ���� ����

const prefix = 'prop';

let i = 0;

const strObj = {
    [`${prefix}-${++i}`]:i,
    [`${prefix}-${++i}`]:i,
    [`${prefix}-${++i}`]:i
};


console.log('strObj : %o',strObj);


// 3. �޼ҵ� ��� ǥ��
// ES5���� �޼ҵ带 �����Ϸ��� ������Ƽ ������ �Լ� ������� �Ҵ��Ѵ�.


const compressMethod = {
    name : 'Lee',
    sayHi(){
        console.log('name : %o',this.name);
    }
};


console.log('compressMethod : %o',compressMethod);



// 4. __proto__ ������Ƽ�� ���� ���
// ES5���� ��ü ���ͷ��� ����ϱ� ���ؼ��� Object.create() �Լ��� ����Ѵ�. �̸� ������Ÿ�� ���� ����̶� �Ѵ�.


const proto1 = {
    name : 'parent',
    sayHi(){
        console.log('hi ! : %o',this.name);
    }
};

const proto2 = {
    __proto__: proto1,
    name : 'child'
};

console.log('proto1 : %o',proto1.sayHi());
console.log('proto2 : %o',proto2.sayHi());



// 6.6 Destructuring
// ��Ʈ��ó��


const destructuring = [1, 2, 3];

const [one, two, three] = destructuring;

console.log('sample : %o %o %o', one, two, three);

// ������ ���� ����Ʈ�� �������� �迭�� �迭�� �ε����� �������� �Ҵ�ȴ�.

let x1, y1, z1;

[x1, y1] = [1, 2];
console.log('x : %o , y : %o', x1, y1);

[x1, y1] =[1];
console.log('x : %o, y : %o', x1, y1);

[x1, y1] = [1, 2, 3];
console.log('x : %o, y : %o',x1, y1);

[x1, y1, z1=3] = [1, 2];
console.log('x : %o, y : %o, z : %o',x1, y1, z1);

[x1, y1 =10, z1 = 3] = [1, 2];
console.log('x : %o, y : %o, z : %o',x1, y1, z1);

[x1, ...y1] = [1, 2, 3];
console.log('x : %o , y : %o',x1, y1);



// ES6�� �迭 ��Ʈ��ó���� �迭���� �ʿ��� ��Ҹ� �����Ͽ� ������ �Ҵ��ϰ� ���� ��쿡 �����ϴ�. �Ʒ��� �ڵ�� Date ��ü���� �⵵, ��, ���� �����ϴ� �����̴�.

const date1 = new Date();

const formattedDate  = date1.toISOString().substring(0, 10);
const [year, month, day] = formattedDate.split('-');
console.log('sample : %o, sample : %o, sample : %o', year, month, day);



// 2. ��ü ��Ʈ��ó�� (Object destructuring)
// ES5���� ��ü�� �� ������Ƽ�� ��ü�κ��� ��Ʈ��ó���Ͽ� ������ �Ҵ��ϱ� ���ؼ��� ������Ƽ �̸�(Ű)�� ����ؾ� �Ѵ�.

const destructuring11 = {firstname:'Ungmo', lastName:'Lee'};

const {firstname, lastName} = destructuring11;

console.log('firstname : %o, lastName : %o', firstname, lastName);


//��ü ��Ʈ��ó���� ���ؼ��� �Ҵ� ������ ���ʿ� ��ü ������ ���� ����Ʈ�� �ʿ��ϴ�.

const { prop1: p1, prop2 : p2} = { prop1:'a', prop2:'b'};
console.log('sample : %o, sample : %o', p1, p2);
console.log('sample : %o', { prop1: p1, prop2 : p2});


const {prop11, prop22} = {prop11:'a', prop22:'b'};
console.log('sample : %o', {prop11, prop22});


const {prop111, prop222, prop333 = 'c'} = {prop111:'a', prop222:'b'};
console.log('sample : %o', {prop111, prop222, prop333 } );



// ��ü ��Ʈ��ó���� ��ü���� ������Ƽ �̸�(Ű)���� �ʿ��� ������Ƽ ������ ������ �� �ִ�. �Ʒ��� �ڵ带 ���캸��.

const todo = [
    {id: 1, content: 'HTML', completed:true},
    {id: 2, content: 'CSS', completed:false},
    {id: 3, content: 'JS', completed:false}
];

const sample1111 = todo.filter(({completed}) => completed  );
console.log('sample : %o', sample1111);



// Array.prototype.filter �޼ҵ��� �ݹ� �Լ��� ��� �迭(todos)�� ��ȸ�ϸ�
// ù ��° ���ڷ� ��� �迭�� ��Ҹ� �޴´�. �̶� �ʿ��� ������Ƽ(completed ������Ƽ)���� ������ �� �ִ�.
// ��ø ��ü�� ���� �Ʒ��� ���� ����Ѵ�.


const person1 = {
    name: 'Lee',
    address: {
        zipCode: '03068',
        city: 'Seoul'
    }
};

const { address: { city } } = person1;
console.log(city); // 'Seoul'



// 6.7 Class
// Ŭ����

class classPerson {
  constructor(name) {
    this._name = name;
  }
  sayHi() {
      console.log('sample : %o',`Hi! ${this._name}`);
  }
}

const me = new classPerson('Lee');
me.sayHi();

console.log('sample : %o', me instanceof classPerson);


// �Ϲ��������� ������, ǥ�������ε� Ŭ������ ������ �� �ִ�.
// �Լ��� ���������� Ŭ������ �̸��� ���� ���� ���� ���� ���� �ִ�.
// �̶� Ŭ������ �Ҵ�� ������ ����� Ŭ������ �������� �ʰ� ��� Ŭ������
// Ŭ���� �̸��� ����� Ŭ������ �����ϸ� ������ �߻��Ѵ�.
// �̴� �Լ��� ���������� Ŭ���� ǥ���Ŀ��� ����� Ŭ���� �̸���
// �ܺ� �ڵ忡�� ���� �Ұ����ϱ� �����̴�. �ڼ��� ������
// �Լ�ǥ����(Function expression)�� �����ϱ� �ٶ���.


const constMyClass = class classMy {};

const constMyClass2 = new constMyClass();

console.log('sample : %o', constMyClass2);

// new  classMy();

//2. �ν��Ͻ��� ����
// Ŭ������ �ν��Ͻ��� �����Ϸ��� new �����ڿ� �Բ� constructor(������)�� ȣ���Ѵ�.



class class11 {
}

const costclass11 = new class11();

console.log('sample : %o',costclass11);

// �� �ڵ忡�� new �����ڿ� �Բ� ȣ���� Foo�� Ŭ������ �̸��� �ƴ϶� constructor�̴�. ǥ������ �ƴ� ��������� ������ Ŭ������ �̸��� constructor�� �����ϴ�.
console.log(class11 === class11.prototype.constructor); // true


// 3. constructor

class classConstructor {}

const contConstructor = new classConstructor();
console.log('contConstructor : %o', contConstructor);

contConstructor.num = 1;
console.log('contConstructor : %o', contConstructor);


// constructor�� �ν��Ͻ��� ������ ���ÿ� Ŭ���� ������Ƽ�� ������ �ʱ�ȭ�� �����Ѵ�.


class clssConstructor1 {
  constructor(num) {
    this.num = num;
  }
}

const constConstructor1 = new clssConstructor1(1);
console.log('constConstructor1 : %o', constConstructor1);




// 4. Ŭ���� ������Ƽ
// Ŭ���� ��ü(class body)���� �޼ҵ常 ������ �� �ִ�.
// Ŭ���� �ٵ� Ŭ���� ������Ƽ(��� ����)�� �����ϸ� ���� ����(SyntaxError)�� �߻��Ѵ�.

class classClassBody {
    //name = '';
  constructor() {
  }
}

// Ŭ���� ������Ƽ�� ����� �ʱ�ȭ�� �ݵ�� constructor ���ο��� �ǽ��Ѵ�.


class classClassBody1 {
  constructor(name) {
    this.name = name;
  }
}

const constClassBody1 = new classClassBody1('Lee');
console.log('constClassBody1 : %o',constClassBody1);


/// constructor ���ο��� ������ Ŭ���� ������Ƽ�� Ŭ������ �ν��Ͻ��� ����Ű�� this�� ���ε��Ѵ�. �̷ν� Ŭ���� ������Ƽ�� Ŭ������
//  ������ �ν��Ͻ��� ������Ƽ�� �Ǹ�, Ŭ������ �ν��Ͻ��� ���� Ŭ���� �ܺο��� ������ ������ �� �ִ�.
// ��, ������ public�̴�.

class classConstructor3 {
  constructor(name='') {
    this.name = name;
  }
}

const constConstructor3 = new classConstructor3();
console.log('constConstructor3 : %o',constConstructor3);



// 5. ȣ�̽���
// Ŭ������ let, const�� ���� ȣ�̽���(Hoisting)���� �ʴ� ��ó�� �����Ѵ�.
// ��, class ���� ������ Ŭ������ �����ϸ� ���� ����(ReferenceError)�� �߻��Ѵ�.

//const foo = new Foo(); // ReferenceError: Foo is not defined
//class Foo {}


//6. getter, setter
//#6.1 getter



class classGetter {
  constructor(arr=[]) {
    this._arr = arr;
  }
  get firstElem() {
      return this._arr.length ? this._arr[0]:null;
  }
}

const constGetter = new classGetter([1,2]);
console.log('classGetter.firstElem : %o', constGetter.firstElem);


// 6.2 setter
// setter�� Ŭ���� ������Ƽ�� ���� �Ҵ��� ������ Ŭ���� ������Ƽ�� ����
// �����ϴ� ������ �ʿ��� �� ����Ѵ�. setter�� �޼ҵ� �̸� �տ� set Ű���带 ����� �����Ѵ�.
// �̶� �޼ҵ� �̸��� Ŭ���� ������Ƽ �̸�ó�� ���ȴ�. �ٽ� ���� setter�� ȣ���ϴ� ���� �ƴ϶�
// ������Ƽó�� ���� �Ҵ��ϴ� �������� ����ϸ� �Ҵ� �ÿ� �޼ҵ尡 ȣ��ȴ�. ��� ����� �Ʒ��� ����.


/**
 *
 */
class classSetter {
  constructor(arr=[200]) {
    this._arr = arr;
  }
  get firstElem() {
      console.log('this._arr : %o',this._arr);
   return this._arr.length ? this._arr[0] : null;
  }
  set firstElem(elem) {
   return this._arr = [elem, ...this._arr];
  }
}

const constSetter = new classSetter();
constSetter.firstElem = 100;

console.log('constSetter.firstElem : %o', constSetter.firstElem)


// 7. ���� �޼ҵ�
// Ŭ������ ����(static) �޼ҵ带 ������ �� static Ű���带 ����Ѵ�.
// ���� �޼ҵ�� Ŭ������ �ν��Ͻ��� �ƴ� Ŭ���� �̸����� ȣ���Ѵ�.
// ���� Ŭ������ �ν��Ͻ��� �������� �ʾƵ� ȣ���� �� �ִ�.

class classStatic {
  constructor(prop) {
    this.prop = prop;
  }
    prototypeMethod() {
        return this.prop;
    }
  static staticMethod(){
    return 'staticMethod';
  }

}

console.log('sample : %o',classStatic.staticMethod());

const constStatic = new classStatic(123);
// ���� �޼ҵ�� �ν��Ͻ��� ȣ���� �� ����.
//console.log('constStatic.staticMethod() : %o',constStatic.staticMethod());


console.log('classStatic.prototype === classStatic.__proto__ : %o', classStatic.prototype === classStatic.__proto__);


//8. Ŭ���� ���
//Ŭ���� ���(Class Inheritance)�� �ڵ� ���� �������� �ſ� �����ϴ�.
//���Ӱ� ������ Ŭ������ ������ �ִ� Ŭ������ �ſ� �����ϴٸ�,
// ����� ���� �״�� ����ϵ� �ٸ� ���� �����ϸ� �ȴ�.
// �ڵ� ������ ���� ����� ������ ���� �� �ִ� ������� �����Ƿ� �ſ� �߿��ϴ�.

//#8.1 extends Ű����
//extends Ű����� �θ� Ŭ����(base class)�� ��ӹ޴� �ڽ� Ŭ����(sub class)�� ������ �� ����Ѵ�.
// �θ� Ŭ���� Circle�� ��ӹ޴� �ڽ� Ŭ���� Cylinder�� ������ ����.



class classCircle {
    constructor(radius) {
        this.radius = radius;
    }
    getDiameter(){
        return 2 * this.radius;
    }
    getPerimeter(){
        return 2 * Math.PI * this.radius;
    }
    getArea(){
        return Math.PI * Math.pow(this.radius, 2);
    }
}

class classCylinder extends classCircle{
    constructor(radius, height) {
        super(radius);
        this.height = height;
    }
    getArea(){
        return (this.height * super.getPerimeter()) + (2 * super.getArea());
    }
    getVolume(){
        return super.getArea() * this.height;
    }
}


// �������� 2, ���̰� 10�� ����
const cylinder = new classCylinder(2, 10);

// ���� ����
console.log(cylinder.getDiameter());  // 4
// ���� �ѷ�
console.log(cylinder.getPerimeter()); // 12.566370614359172
// ������ ����
console.log(cylinder.getArea());      // 150.79644737231007
// ������ ����
console.log(cylinder.getVolume());    // 125.66370614359172

// cylinder�� Cylinder Ŭ������ �ν��Ͻ��̴�.
console.log(cylinder instanceof classCylinder); // true
// cylinder�� Circle Ŭ������ �ν��Ͻ��̴�.
console.log(cylinder instanceof classCircle);   // true

// 8.2 super Ű����
// super Ű����� �θ� Ŭ������ ����(Reference)�� �� �Ǵ� �θ� Ŭ������ constructor�� ȣ���� �� ����Ѵ�.
// �� ��extends Ű���塱�� ������ ���� super�� �޼ҵ�� ���� ��, �׸��� ��ü�� ���� �� �ٸ��� �����ϴ� ���� �� �� �ִ�.
// �ٽ� �ѹ� ������ ���캸��.


//class classCircle {
// ...
//}
//
//class classCylinder extends classCircle{
//  constructor(radius, height) {
//      // �� super �޼ҵ�� �θ� Ŭ������ �ν��Ͻ��� ����
//      super(radius);
//      this.height = height;
//  }
//    getArea(){
//
//    return  (this.height * super.getPerimeter()) + (2 * super.getArea());
//  }
//    getArea(){
//
//        return  super.getArea() * this.height;
//    }
//}
//
//// �������� 2, ���̰� 10�� ����
//const constCylinder = new classCylinder(2, 10);


class classParent{
    static staticMethod() {
        return 'staticMethod';
    }
}

class classChild extends classParent{}

console.log('sample : %o', classChild.__proto__ === classParent);
console.log('sample : %o', classChild.prototype.__proto__ ===   classParent.prototype);

console.log('sample : %o',classParent.staticMethod());
console.log('sample : %o',classChild.staticMethod());


// 6.8 Module
// ���


// 2. export


console.log('sample : %o',pi);


// 6.9 Promise
// ���ι̽�



















