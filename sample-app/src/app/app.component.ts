import { Component } from '@angular/core';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-root',
  template: `      

      <ng-template>

          <button class="tab-button" (click)="login()">{{loginText}}</button>

          <button class="tab-button" (click)="signUp()">{{signUpText}}</button>

      </ng-template>



      <div class="lessons-list" *ngIf="lessons  else loading">
          <div class="lessons-list">
              {{lessons | json}}
          </div>
      </div>

      
      <ng-template [ngIf]="lessons" [ngIfElse]="loading">
          <div class="lessons-list">
            {{lessonsList | json}}
          </div>
      </ng-template>
      
      
      <ng-template #loading>
          <div>Loading...</div>
      </ng-template>


  `})
export class AppComponent {

    loginText = 'Login';
    signUpText = 'Sign Up';

    lessons = ['Lesson 1', 'Lessons 2'];



    login() {
        console.log('Login');
    }

    signUp() {
        console.log('Sign Up');
    }

}
