import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  numbersAlpha: number[] = [];
  numbersBeta: number [] = [];
  sum: number = 0;
  sum2: number = 0;
  res: number = 0;

  constructor() { }

  retrieveNumbers(): number[]{
    return this.numbersAlpha;
  }

  addNumber(num: number) {
    const rand = Math.floor(Math.random() * 10) + 1);
    this.numbersAlpha.push(rand);
  }

  retrieveNumbersBeta(): number[]{
    return this.numbersBeta;
  }

  addNumberBeta(num: number) {
    const rand = Math.floor(Math.random() * 10) + 1);
    this.numbersBeta.push(rand);
  }

  result(){
    this.sum =0;
    for(let i of this.numbersAlpha){ 
      this.sum += i ;
    
    }
    this.sum2 = 0;
    for (let k of this.numbersBeta){ 
      this.sum2 += k;
    }
    this.res = 0;
    this.res = this.sum - this.sum2
    return this.res
 }

  
}

