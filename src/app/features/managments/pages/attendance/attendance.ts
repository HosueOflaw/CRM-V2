import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-attendance',
  imports: [CommonModule],
  templateUrl: './attendance.html',
  styleUrl: './attendance.css',
    template: `<h2 class="text-xl font-bold text-primary">📅 الحضور والانصراف</h2>`

})
export class Attendance {

}
