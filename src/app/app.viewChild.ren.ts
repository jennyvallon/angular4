import {
    AfterViewInit, //life-cycle hook INTERFACE NAME. explored in detail in README, needed because viewChildrenQueries will be based on data compiled in this part of the Angular life cycle
    Component, 
    QueryList, //Observable- a collection of dynamically added elements
    //ViewChildren, //Decorator
    ViewChild //Decorator
    } from '@angular/core';

@Component({ 
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']  
})

export class AppComponent implements AfterViewInit { 
    title = 'app.viewChild.ren.ts';
  
    @ViewChild(AppComponent) viewChild: AppComponent; //if there is only one instance
//   @ViewChildren(AppComponent) viewChild: QueryList<AppComponent>; //if there are multiple dynamically added/removed instances
//   @ViewChildren(AppComponent, read:ElementRef) viewChildrenElemRef: QueryList<AppComponent>; //element reference is any html tag aka native DOM element
    
    ngAfterViewInit() { //life-cycle hook method
//        viewChild available here
//        viewChildren available as a Collection here
//        viewChildrenElemRef available as a Collection here

    }
}

//      OBSERVATIONS
//        VIEW CHILDREN requires the importing of the AfterViewInit LifeCycle Hook 
//        because view children are are only accessable after angular has instantiated
//        and populated the view before then, they will be undefined.

//        IMPORTANT:THERE IS A DIFFERENCE BETWEEN VIEW AND CONTENT. 
//         *The children element which 
//        are located inside of its template of a component are called *view children *. 
//        On the other hand, **elements which are used between the opening and closing 
//        tags of the host element of a given component are called *content children **.

//        MORE ON: 
//                  LIFE CYCLE HOOKS IN README
//                  QUERY LIST https://angular.io/docs/ts/latest/api/core/index/QueryList-class.html

//      DOCUMENTATION 
//      https://angular.io/docs/ts/latest/api/core/index/ViewChildren-decorator.html
//      https://angular.io/docs/ts/latest/api/core/index/ViewChild-decorator.html

//      ARTICLE FOR FOUNDATIONAL UNDERSTANDING
//        http://blog.mgechev.com/2016/01/23/angular2-viewchildren-contentchildren-difference-viewproviders/ 
//        https://netbasal.com/exploring-the-various-decorators-in-angular-b208875b207c 

//      Q:
//      A:
//

//      DESCRIPTION:
//          
//            You can use ViewChildren to get the QueryList of elements or 
//            directives from the view DOM. Any time a child element is added, 
//            removed, or moved, the query list will be updated, and the 
//            changes observable of the query list will emit a new value.
//            
//            You can use ViewChild to get the first element or the directive 
//            matching the selector from the view DOM. If the view DOM changes, 
//            and a new child matches the selector, the property will be updated.
//
//            View queries are set before the ngAfterViewInit callback is called.
//
//            Metadata Properties:
//
//                selector - the directive type or the name used for querying.
//                read - read a different token from the queried elements.
//                  //elementReference
//                      @ViewChildren(AppComponent, { read: div }) alerts: QueryList<AppComponent>
//                  //ViewContainerRef — You need this token when you need to create templates or components dynamically
//                      @ViewChildren(AppComponent, { read: ComponentContainerRef }) alerts: QueryList<AppComponent>



