import './style.css'

function testable(target: any): void {
  // eslint-disable-next-line
  target.isTestable = true
}
@testable
export class Test {
  public constructor() {
    console.log('test')
  }
}

export const hello = (name: string): void => {
  console.log(Array.of(1, 2))
  console.log(`hello ${name}`)
}
