# Class

## 注意事项
1. 类相当于实例的原型，所有在类中定义的方法，都会被实例继承。如果在一个方法前，加上`static`关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”
```js
class Foo {
  static classMethod() {
    return 'hello';
  }
}
Foo.classMethod() // 'hello'
var foo = new Foo();
foo.classMethod()
// TypeError: foo.classMethod is not a function
```

2. 父类的静态方法，可以被子类继承
```js
class Foo {
  static classMethod() {
    return 'hello';
  }
}
class Bar extends Foo {
}
Bar.classMethod() // 'hello'
```

3. 实例属性除了定义在constructor()方法里面的this上面，也可以定义在类的最顶层

```js
class IncreasingCounter {
  constructor() {
    this._count = 0;
  }
  get value() {
    console.log('Getting the current value!');
    return this._count;
  }
  increment() {
    this._count++;
  }
}
// 实例属性_count与取值函数value()和increment()方法，处于同一个层级。这时，不需要在实例属性前面加上this
class IncreasingCounter {
  _count = 0;
  get value() {
    console.log('Getting the current value!');
    return this._count;
  }
  increment() {
    this._count++;
  }
}
```

4. 子类的构造函数必须执行一次super函数
```js
class A {}
class B extends A {
  constructor() {
    super();
  }
}
```