import './style.css'

function testable(target: any) {
    target.isTestable = true;
  }
@testable
export class Test {
    constructor() {
        console.log('test')
    }
}

export const hello = (name: string) => {
    console.log(Array.of(1, 2))
    console.log(`hello ${name}`)
}
