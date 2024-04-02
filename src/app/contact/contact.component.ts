import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  allMessage = '';
  @ViewChild('inputEl') tagElements: ElementRef;

  secondMessage = '';
  @ViewChild('inputEl2') tagElements2: ElementRef;

  reveal(){
    this.allMessage = this.tagElements.nativeElement.value;
    this.secondMessage = this.tagElements2.nativeElement.value;
  
  }

}

// reveal(){
//   let message = ''
//   this.tagElements.forEach((element) => {
//     message += (element.nativeElement.value) + ' ';
//   })
//   this.allMessage = message.trim()
// }