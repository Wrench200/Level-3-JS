import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name: string = " our beloved showcase app";
  description: string= "the best angular showcase software"
  creator:Array<string> = ['Mr Kambang', 'Web Legends']
  age: number = 40
price: number = 300
username: string =""

sayHi(){
  return "hello" + this.name + "how are you?";
}
}
