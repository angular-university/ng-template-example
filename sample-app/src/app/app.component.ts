import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-root',
  template: `      

      <ng-template #defaultTabButtons>

          <button class="tab-button" (click)="login()">{{loginText}}</button>

          <button class="tab-button" (click)="signUp()">{{signUpText}}</button>

      </ng-template>

 

      <div class="lessons-list" *ngIf="lessons else loading">
          <div class="lessons-list">
              {{lessons | json}}
          </div>
      </div>

      
      <ng-template [ngIf]="lessons" [ngIfElse]="loading">
          <div class="lessons-list">
            {{lessonsList | json}}
          </div>
      </ng-template>
      
      
      <ng-template #loading > 
          <div>Loading</div>
      </ng-template>


      <ng-template #estimateTemplate let-lessonsCounter="estimate">
          <div> Approximately {{lessonsCounter}} lessons ...</div>
      </ng-template>


      <ng-container *ngTemplateOutlet="loading"></ng-container>
      
      <ng-container *ngTemplateOutlet="estimateTemplate; context: templateCtx"></ng-container>


      <!-- div class="lessons-list" *ngIf="lessons" *ngFor="let lesson of lessons">
          <div class="lessons-list">
              {{lesson | json}}
          </div>
      </div -->

      <ng-container *ngIf="lessons">
          <div class="lesson" *ngFor="let lesson of lessons">
              <div class="lesson-detail">
                  {{lesson | json}}
              </div>
          </div>
      </ng-container>


      <ng-template #customTabButtons>
          <div class="custom-class">
              <button class="tab-button" (click)="login()">{{loginText}}</button>
              <button class="tab-button" (click)="signUp()">{{signUpText}}</button>
          </div>
      </ng-template>

      <tab-container [headerTemplate]="defaultTabButtons"></tab-container>
      
      
  `})
export class AppComponent implements OnInit {

    loginText = 'Login';
    signUpText = 'Sign Up';

    lessons = ['Lesson 1', 'Lessons 2'];

    totalEstimate = 10;

    templateCtx = {estimate: this.totalEstimate};


    @ViewChild('defaultTabButtons')
    private defaultTabButtonsTpl: TemplateRef<any>;


    ngOnInit() {
        console.log(this.defaultTabButtonsTpl);
    }

    login() {
        console.log('Login');
    }

    signUp() {
        console.log('Sign Up');
    }

}
