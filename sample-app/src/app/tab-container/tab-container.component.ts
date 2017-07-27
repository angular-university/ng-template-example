import {Component, Input, OnInit, TemplateRef} from '@angular/core';

@Component({
    selector: 'tab-container',
    template: `
    
<ng-template #defaultTabButtons>
    
    <div class="default-tab-buttons">
        
    </div>
    
</ng-template>

<ng-container 
        
        *ngTemplateOutlet="headerTemplate ? headerTemplate: defaultTabButtons">
    
</ng-container>
        
    
    `})
export class TabContainerComponent implements OnInit {

    @Input()
    headerTemplate: TemplateRef<any>;

    constructor() {

    }

    ngOnInit() {

    }

}


