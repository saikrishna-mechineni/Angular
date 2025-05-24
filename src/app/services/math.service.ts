import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MathService {

  add(a: number, b: number){
    return `Addition of ${a} and ${b} is ${a+b}`
  }

  sub(a:number, b:number){
     return `Subtraction of ${a} and ${b} is ${a-b}`
  }

}
