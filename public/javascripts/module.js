export default 123
export const str = 'hello'
export const arr = ['키위','사과','토마토']
export const func = (a,b)=>{
  return a+b
}

export class Sonata{
  constructor(){ //생성자 함수
    this.wheelNum = 4
    this.speed = 0
    this.carColor = 'red'
  }
  speedUp = ()=> {
    this.speed = this.speed + 1
  return this.speed

  } 
}