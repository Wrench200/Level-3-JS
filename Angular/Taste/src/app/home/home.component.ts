import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  activepage: string = "homepage";
  username: string = ""
  derivedstyles: string = "color:red"
  prooftext:string=""
  refreshPage(){
    alert("yaay ive been clicked")
  
  }
  updatetext(event:any){
    this.prooftext= event.target.value;
  }
}