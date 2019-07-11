import { Component ,ElementRef} from '@angular/core';

@Component(
  {
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  constructor(private _eref: ElementRef) { }
  name = 'Angular';
  toggle=false;
  isOpen=false
  close(){
    if(this.isOpen
    ===false){
     this.toggle=false
    }else{
      this.isOpen=false
    }
  }
 
  callMe(e){
    this.isOpen=true
    this.toggle=true
  }
  closeMe(e){
    
    this.toggle=false
  }
  
}
