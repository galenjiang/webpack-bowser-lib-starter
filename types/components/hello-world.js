var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import './style.css';
function testable(target) {
    target.isTestable = true;
}
let Test = class Test {
    constructor() {
        console.log('test');
    }
};
Test = __decorate([
    testable
], Test);
export { Test };
export const hello = (name) => {
    console.log(Array.of(1, 2));
    console.log(`hello ${name}`);
};
var MyComponent;
(function (MyComponent) {
    class C1 {
    }
    MyComponent.C1 = C1;
    MyComponent.index = 5;
    MyComponent.val = 'val';
})(MyComponent || (MyComponent = {}));
