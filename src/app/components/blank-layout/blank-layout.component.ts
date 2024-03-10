import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavBlankComponent } from '../nav-blank/nav-blank.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-blank-layout',
  templateUrl: './blank-layout.component.html',
  
  styleUrls: ['./blank-layout.component.css']
})
export class BlankLayoutComponent {
  goToUp():void{
    window.scrollTo(0,0)
  }
}
