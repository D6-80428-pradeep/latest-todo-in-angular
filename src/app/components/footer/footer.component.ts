import { DatePipe } from '@angular/common';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  gmail="todolist@gmail.com";

}
