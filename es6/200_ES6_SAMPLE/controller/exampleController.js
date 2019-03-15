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

// 1.5 전역 객체와 let
var globalVar = 123; // 전역변수
console.log(window.globalVar);

let globalLet = 123; // 전역변수
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

// 2.2 상수
var rows = 1;
// 10의 의미를 알기 어렵기 때문에 가독성이 좋지 않다.
if(rows > 10){

}
// 값의 의미를 명확히 기술하여 가독성이 향상되었다.
const MAXROWS = 10;
if(rows > MAXROWS){

}

const obj = { foo: 123};
console.log(obj);

// Assignment to constant variable.
// obj = {bar:456};


// 2.3 const와 객체

const user = { name : 'Lee'};

user.name = 'Kim';

console.log(user);

//3. var vs. let vs. const


// 6.2 Template Literals
// 템플릿 리터럴

const template = `템플릿 리터럴은 '작은따옴표(single quotes)'과 "큰따옴표(double quotes)"를 혼용할 수 있다.`;

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



//강제 타입
console.log(`1 + 1 = ${1+1}`);


// 6.3 Arrow function
// 화살표 함수




// 2. 화살표 함수의 호출

const pow = x =>{ return x *  x };

console.log(pow(10));

//

const arr = [1, 2, 3];
const pow2 = arr.map(x =>{ return x*x  });

console.log(pow2);

//3. this
// 3.1 일반 함수의 this

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

// 4.3 생성자 함수


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
// 파라미터 기본값, Rest 파라미터, Spread 연산자


function plus(x = 0, y=0){
    return x+y;
}

console.log(plus());
console.log(plus(1, 2));

// 2. Rest 파라미터
// 2.1 기본 문법

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

//ES6에서는 rest 파라미터를 사용하여 가변 인자를 함수 내부에 배열로 전달할 수 있다.
//이렇게 하면 유사 배열인 arguments 객체를 배열로 변환하는 등의 번거로움을 피할 수 있다.

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

//3. Spread 연산자

console.log(...[1,2,3]);
console.log(...'hello');

console.log(...new Map([['a', '1'],['b', '2']]));
console.log(...new Set([1, 2, 3]));


// ES6의 Spread 연산자(…)를 사용한 배열을 함수의 인수로 사용하면
// 배열의 요소를 개별적으로 분리하여 순차적으로 파라미터에 할당한다.

function fnSpead(x, y, z){
    console.log(x);
    console.log(y);
    console.log(z);
}


const speadArr = [1, 2, 3];

fnSpead(...speadArr);

// Rest 파라미터는 반드시 마지막 파라미터이어야 하지만 Spread 연산자를 사용한 인수는 자유롭게 사용할 수 있다.

function fnAAA(v, w, x, y, z){
    console.log(v);
    console.log(w);
    console.log(x);
    console.log(y);
    console.log(z);
}

fnAAA(1,...[2, 3], 4,...[5]);


// 3.2 배열에서 사용하는 경우
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


//3.3 객체에서 사용하는 경우

const sample = {...{x:1, y:2}, ...{y:10, z:3}};

console.log('sample : %o',sample);

// 특정 프로퍼티 변경
const changed = {...{x:1, y:2}, y:100};
// changed = { ...{ x: 1, y: 2 }, ...{ y: 100 } }
console.log('changed : %o', changed);

// 프로퍼티 추가
const added = { ...{x:1, y:2}, z:0};
// added = { ...{ x: 1, y: 2 }, ...{ z: 0 } }
console.log('added : %o', added);


// Object.assign 메소드를 사용해도 동일한 작업을 할 수 있다.

const byOjectAssign1 = Object.assign({}, {x:1, y:2}, {y:10, z:3});
console.log('byOjectAssign1 : %o', byOjectAssign1);

const byOjectAssign2 = Object.assign({}, {x:1, y:2}, {y:100});
console.log('byOjectAssign2 : %o', byOjectAssign2);

// 프로퍼티 추가
const byOjectAssign3 = Object.assign({}, {x:1, y:2}, {z:0});
console.log('byOjectAssign3 : %o',byOjectAssign3);


// Spread 연산자를 사용하면 유사 배열 객체(Array-like Object)를 배열로 손쉽게 변환할 수 있다.

const htmlColloection = document.getElementsByTagName('li');
const arrhtmlColloection = [...htmlColloection];

console.log('arrhtmlColloection : %o', arrhtmlColloection);


// 6.5 Enhanced Object property
// 객체 리터럴 프로퍼티 기능 확장

let x = 1;
let y = 2;

const varObj = {x, y};

console.log('varObj : %o', varObj);

// 2. 프로퍼티 키 동적 생성

const prefix = 'prop';

let i = 0;

const strObj = {
    [`${prefix}-${++i}`]:i,
    [`${prefix}-${++i}`]:i,
    [`${prefix}-${++i}`]:i
};


console.log('strObj : %o',strObj);


// 3. 메소드 축약 표현
// ES5에서 메소드를 선언하려면 프로퍼티 값으로 함수 선언식을 할당한다.


const compressMethod = {
    name : 'Lee',
    sayHi(){
        console.log('name : %o',this.name);
    }
};


console.log('compressMethod : %o',compressMethod);



// 4. __proto__ 프로퍼티에 의한 상속
// ES5에서 객체 리터럴을 상속하기 위해서는 Object.create() 함수를 사용한다. 이를 프로토타입 패턴 상속이라 한다.


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
// 디스트럭처링


const destructuring = [1, 2, 3];

const [one, two, three] = destructuring;

console.log('sample : %o %o %o', one, two, three);

// 왼쪽의 변수 리스트와 오른쪽의 배열은 배열의 인덱스를 기준으로 할당된다.

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



// ES6의 배열 디스트럭처링은 배열에서 필요한 요소만 추출하여 변수에 할당하고 싶은 경우에 유용하다. 아래의 코드는 Date 객체에서 년도, 월, 일을 추출하는 예제이다.

const date1 = new Date();

const formattedDate  = date1.toISOString().substring(0, 10);
const [year, month, day] = formattedDate.split('-');
console.log('sample : %o, sample : %o, sample : %o', year, month, day);



// 2. 객체 디스트럭처링 (Object destructuring)
// ES5에서 객체의 각 프로퍼티를 객체로부터 디스트럭처링하여 변수에 할당하기 위해서는 프로퍼티 이름(키)을 사용해야 한다.

const destructuring11 = {firstname:'Ungmo', lastName:'Lee'};

const {firstname, lastName} = destructuring11;

console.log('firstname : %o, lastName : %o', firstname, lastName);


//객체 디스트럭처링을 위해서는 할당 연산자 왼쪽에 객체 형태의 변수 리스트가 필요하다.

const { prop1: p1, prop2 : p2} = { prop1:'a', prop2:'b'};
console.log('sample : %o, sample : %o', p1, p2);
console.log('sample : %o', { prop1: p1, prop2 : p2});


const {prop11, prop22} = {prop11:'a', prop22:'b'};
console.log('sample : %o', {prop11, prop22});


const {prop111, prop222, prop333 = 'c'} = {prop111:'a', prop222:'b'};
console.log('sample : %o', {prop111, prop222, prop333 } );



// 객체 디스트럭처링은 객체에서 프로퍼티 이름(키)으로 필요한 프로퍼티 값만을 추출할 수 있다. 아래의 코드를 살펴보자.

const todo = [
    {id: 1, content: 'HTML', completed:true},
    {id: 2, content: 'CSS', completed:false},
    {id: 3, content: 'JS', completed:false}
];

const sample1111 = todo.filter(({completed}) => completed  );
console.log('sample : %o', sample1111);



// Array.prototype.filter 메소드의 콜백 함수는 대상 배열(todos)을 순회하며
// 첫 번째 인자로 대상 배열의 요소를 받는다. 이때 필요한 프로퍼티(completed 프로퍼티)만을 추출할 수 있다.
// 중첩 객체의 경우는 아래와 같이 사용한다.


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
// 클래스

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


// 일반적이지는 않지만, 표현식으로도 클래스를 정의할 수 있다.
// 함수와 마찬가지로 클래스는 이름을 가질 수도 갖지 않을 수도 있다.
// 이때 클래스가 할당된 변수를 사용해 클래스를 생성하지 않고 기명 클래스의
// 클래스 이름을 사용해 클래스를 생성하면 에러가 발생한다.
// 이는 함수와 마찬가지로 클래스 표현식에서 사용한 클래스 이름은
// 외부 코드에서 접근 불가능하기 때문이다. 자세한 내용은
// 함수표현식(Function expression)을 참조하기 바란다.


const constMyClass = class classMy {};

const constMyClass2 = new constMyClass();

console.log('sample : %o', constMyClass2);

// new  classMy();

//2. 인스턴스의 생성
// 클래스의 인스턴스를 생성하려면 new 연산자와 함께 constructor(생성자)를 호출한다.



class class11 {
}

const costclass11 = new class11();

console.log('sample : %o',costclass11);

// 위 코드에서 new 연산자와 함께 호출한 Foo는 클래스의 이름이 아니라 constructor이다. 표현식이 아닌 선언식으로 정의한 클래스의 이름은 constructor와 동일하다.
console.log(class11 === class11.prototype.constructor); // true


// 3. constructor

class classConstructor {}

const contConstructor = new classConstructor();
console.log('contConstructor : %o', contConstructor);

contConstructor.num = 1;
console.log('contConstructor : %o', contConstructor);


// constructor는 인스턴스의 생성과 동시에 클래스 프로퍼티의 생성과 초기화를 실행한다.


class clssConstructor1 {
  constructor(num) {
    this.num = num;
  }
}

const constConstructor1 = new clssConstructor1(1);
console.log('constConstructor1 : %o', constConstructor1);




// 4. 클래스 프로퍼티
// 클래스 몸체(class body)에는 메소드만 선언할 수 있다.
// 클래스 바디에 클래스 프로퍼티(멤버 변수)를 선언하면 문법 에러(SyntaxError)가 발생한다.

class classClassBody {
    //name = '';
  constructor() {
  }
}

// 클래스 프로퍼티의 선언과 초기화는 반드시 constructor 내부에서 실시한다.


class classClassBody1 {
  constructor(name) {
    this.name = name;
  }
}

const constClassBody1 = new classClassBody1('Lee');
console.log('constClassBody1 : %o',constClassBody1);


/// constructor 내부에서 선언한 클래스 프로퍼티는 클래스의 인스턴스를 가리키는 this에 바인딩한다. 이로써 클래스 프로퍼티는 클래스가
//  생성할 인스턴스의 프로퍼티가 되며, 클래스의 인스턴스를 통해 클래스 외부에서 언제나 참조할 수 있다.
// 즉, 언제나 public이다.

class classConstructor3 {
  constructor(name='') {
    this.name = name;
  }
}

const constConstructor3 = new classConstructor3();
console.log('constConstructor3 : %o',constConstructor3);



// 5. 호이스팅
// 클래스는 let, const와 같이 호이스팅(Hoisting)되지 않는 것처럼 동작한다.
// 즉, class 선언문 이전에 클래스를 참조하면 참조 에러(ReferenceError)가 발생한다.

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
// setter는 클래스 프로퍼티에 값을 할당할 때마다 클래스 프로퍼티의 값을
// 조작하는 행위가 필요할 때 사용한다. setter는 메소드 이름 앞에 set 키워드를 사용해 정의한다.
// 이때 메소드 이름은 클래스 프로퍼티 이름처럼 사용된다. 다시 말해 setter는 호출하는 것이 아니라
// 프로퍼티처럼 값을 할당하는 형식으로 사용하며 할당 시에 메소드가 호출된다. 사용 방법은 아래와 같다.


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


// 7. 정적 메소드
// 클래스의 정적(static) 메소드를 정의할 때 static 키워드를 사용한다.
// 정적 메소드는 클래스의 인스턴스가 아닌 클래스 이름으로 호출한다.
// 따라서 클래스의 인스턴스를 생성하지 않아도 호출할 수 있다.

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
// 정적 메소드는 인스턴스로 호출할 수 없다.
//console.log('constStatic.staticMethod() : %o',constStatic.staticMethod());


console.log('classStatic.prototype === classStatic.__proto__ : %o', classStatic.prototype === classStatic.__proto__);


//8. 클래스 상속
//클래스 상속(Class Inheritance)은 코드 재사용 관점에서 매우 유용하다.
//새롭게 정의할 클래스가 기존에 있는 클래스와 매우 유사하다면,
// 상속을 통해 그대로 사용하되 다른 점만 구현하면 된다.
// 코드 재사용은 개발 비용을 현저히 줄일 수 있는 잠재력이 있으므로 매우 중요하다.

//#8.1 extends 키워드
//extends 키워드는 부모 클래스(base class)를 상속받는 자식 클래스(sub class)를 정의할 때 사용한다.
// 부모 클래스 Circle을 상속받는 자식 클래스 Cylinder를 정의해 보자.



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


// 반지름이 2, 높이가 10인 원통
const cylinder = new classCylinder(2, 10);

// 원의 지름
console.log(cylinder.getDiameter());  // 4
// 원의 둘레
console.log(cylinder.getPerimeter()); // 12.566370614359172
// 원통의 넓이
console.log(cylinder.getArea());      // 150.79644737231007
// 원통의 부피
console.log(cylinder.getVolume());    // 125.66370614359172

// cylinder는 Cylinder 클래스의 인스턴스이다.
console.log(cylinder instanceof classCylinder); // true
// cylinder는 Circle 클래스의 인스턴스이다.
console.log(cylinder instanceof classCircle);   // true

// 8.2 super 키워드
// super 키워드는 부모 클래스를 참조(Reference)할 때 또는 부모 클래스의 constructor를 호출할 때 사용한다.
// 위 “extends 키워드”의 예제를 보면 super가 메소드로 사용될 때, 그리고 객체로 사용될 때 다르게 동작하는 것을 알 수 있다.
// 다시 한번 예제를 살펴보자.


//class classCircle {
// ...
//}
//
//class classCylinder extends classCircle{
//  constructor(radius, height) {
//      // ① super 메소드는 부모 클래스의 인스턴스를 생성
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
//// 반지름이 2, 높이가 10인 원통
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
// 모듈


// 2. export


console.log('sample : %o',pi);


// 6.9 Promise
// 프로미스



















