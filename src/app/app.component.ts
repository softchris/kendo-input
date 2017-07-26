import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
  // checkbox
  checkBox = {
    checked : true,
    disabled : false
  };

  numericalTextBox = {
    autoCorrect : false,
    value : 5
  };

  maskedTextBox = {
    value : "359884123321",
    mask : "(999) 000-00-00-00"
  };

  slider = {
    min: 0,
    max : 100,
    smallStep: 2,
    valueVertical: 40
  };

  sliderVertical = {
    min: 0,
    max : 100,
    smallStep: 2,
    valueVertical: 40
  };
  
  //numerical textbox
  

  onButtonClick(){
    console.log('button click');
  }
}
