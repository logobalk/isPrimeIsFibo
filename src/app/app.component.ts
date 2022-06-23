import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  inputValue = null;
  selectType = '0';
  result = null;
   cache = {};
  onInputChange(val: number) {
    this.inputValue = val;
    this.result = !this.inputValue
      ? null
      : this.selectType === '0'
      ? this.isPrime(val)
      : this.isFibonacci(val);
  }
  onSelectTypeChange(val: string) {
    if (val == '0') {
      this.result = this.inputValue && this.isPrime(this.inputValue);
      console.log('here', this.result);
    } else {
      this.result = this.inputValue && this.isFibonacci(this.inputValue);
      console.log('here', this.result);
    }
    this.selectType = val;
  }

  isPrime(num) {
    var sqrtnum = Math.floor(Math.sqrt(num));
    var prime = num != 1;
    for (var i = 2; i < sqrtnum + 1; i++) {
      // sqrtnum+1
      if (num % i == 0) {
        prime = false;
        break;
      }
    }
    return prime;
  }

  isFibonacci(n) {
    const fn = this.fibonacci(n);
    if(fn){
      return fn[fn.length-1 + fn.length-2]=== fn[fn.length]? true:false;
    }
    return fn;
  }
   fibonacci = n => {
    if (n === 1) {
       return [0, 1];
    } else {
      var arr = this.fibonacci(n - 1);
      arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
      return arr;
    }
    
  };

}
