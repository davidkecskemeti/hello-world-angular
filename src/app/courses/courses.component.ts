import {Component} from '@angular/core';
import {CoursesService} from '../courses.service';

@Component({
  selector: 'app-courses',
  template: `
      <h2>{{title}}</h2>
      <h2 [textContent]="title"></h2>
      <ul>
          <li *ngFor="let course of courses">
              {{course}}
          </li>
      </ul>
      <img src="{{imageUrl}}"/>
      <img [src]="title"/>
      <table>
          <tr>
              <td [attr.colSpan]="colSpan"></td>
          </tr>
      </table>
      <button class="btn btn-primary"
              [class.active]="isActive"
              [style.backgroundColor]="isActive?'blue':'white'"
              (click)="onSave()">Save
      </button>
      <div (click)="onDivClicked($event)">
          <button class="btn btn-primary"
                  [class.active]="isActive"
                  [style.backgroundColor]="isActive?'blue':'white'"
                  (click)="onTest($event)">Test
          </button>
      </div>
      <!--      <input (keyup)="onKeyUp($event)"/>-->
      <input (keyup.enter)="onKeyUp2($event)"/>
      <input #email (keyup.enter)="onKeyUp3(email.value)"/>
      <input [value]="email2" (keyup.enter)="onKeyUp4()"/>
      <input [value]="email3" (keyup.enter)="email3=$event.target.value; onKeyUp5()"/>
      <input [(ngModel)]="email4" (keyup.enter)="onKeyUp6()"/>
      <h2>Course</h2>
      {{course.title | uppercase |lowercase}}<br/>
      {{course.students | number}}<br/>
      {{course.rating | number:'1.2-2'}}<br/>
      {{course.price | currency:'HUF':true:'3.2-2'}}<br/>
      {{course.releaseDate | date:'shortDate'}}<br/>
      {{course.releaseDate | date:'longDate'}}<br/>
      {{text | summary:20}}
  `
})
export class CoursesComponent {
  title = 'List of courses';
  courses;
  imageUrl = 'http://lorempixel.com/400/200';
  colSpan = 2;
  isActive = true;
  email2 = 'me@example.com';
  email3 = 'me@example.com';
  email4 = 'me@example.com';

  text = `Lorem Ipsum is simply dummy text of the printing and typesting bla bla bla`;

  course = {
    title: 'The Complete Angular Course',
    rating: 4.9745,
    students: 30123,
    price: 190.95,
    releaseDate: new Date(2019, 3, 1)
  };

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }

  onSave() {
    console.log('Button was clicked');
  }

  onTest($event: MouseEvent) {
    $event.stopPropagation();
    console.log('Button was clicked', $event);
  }

  onDivClicked($event: MouseEvent) {
    console.log('Button was clicked on div', $event);
  }

  // onKeyUp($event: KeyboardEvent) {
  //   if ($event.keyCode === 13) {
  //     console.log('ENTER was pressed');
  //   }
  onKeyUp2($event) {
    console.log('ENTER was pressed');
    console.log($event.target.value);
  }

  onKeyUp3(email) {
    console.log(email);
  }

  onKeyUp4() {
    console.log(this.email2);
  }

  onKeyUp5() {
    console.log(this.email3);
  }

  onKeyUp6() {
    console.log(this.email3);
  }
}
