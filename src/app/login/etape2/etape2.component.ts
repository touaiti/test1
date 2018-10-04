import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-etape2',
  templateUrl: './etape2.component.html',
  styleUrls: ['./etape2.component.css']
})
export class Etape2Component implements OnInit {
  
  @ViewChild('conditions') private myScrollContainer: ElementRef;
  isAcceptDisable = true
  accept = null

  constructor(private loginService : LoginService) { }

  ngOnInit() {
  }

  onScroll(){
    let element = this.myScrollContainer.nativeElement
    let atBottom = element.scrollHeight - element.scrollTop === element.clientHeight
    if (this.isAcceptDisable && atBottom) {
        this.isAcceptDisable = false
    }
  }

  onValidate(){
    if(this.accept){
      this.loginService.login({}).subscribe(result=> {
        console.log(result)
      }, 
      error => {
        console.log(error)
      })
    }

  }

}
