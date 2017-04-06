import {
    AfterContentInit, //life-cycle hook INTERFACE NAME used to access content child/ren
    Component, 
    QueryList, 
    ContentChildren, //Decorator
    ContentChild //Decorator
} from '@angular/core';

@Component({ 
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']  
})

//at the AfterContentInit point in the lifecycle 
export class AppComponent implements AfterContentInit { 
    
    //if you want to access one, the first, or there is only instance of the selector, use -Child
    //in this example "contentChild" will be the element reference of type AppComponent in the ngAfterContentInit callback
    //QueryList is not used with -child
    @ContentChild(AppComponent) contentChild: AppComponent; 
       
    //if you want to access a collection use Query List
    @ContentChildren(AppComponent) contentChildren: QueryList<AppComponent>; 
    
    //if you want to select a native DOM element within the selected Component or Directive
    //point to it with the "read" property as shown below 
    @ContentChildren(AppComponent, read:ElementRef) contentChildrenElemRef: QueryList<AppComponent>; 
    @ContentChild(AppComponent, read:ElementRef) contentChildElemRef: AppComponent;
    
    ngAfterContentInit() { //<--life-cycle hook method
        contentChild //available here --the query list would have a length of one. View Child only returns first instance
        contentChildren //available as a Collection here
        contentChild/ElemRef //available as a Collection here
    }
}


//OBSERVATIONS
    //Content CHILD/ren requires the importing of the AfterViewInit LifeCycle Hook 
    //because view children are are only accessable after angular has instantiated
    //and populated the view before then, they will be undefined.


//IMPORTANT:
    //THERE IS A DIFFERENCE BETWEEN VIEW AND CONTENT -CHILD / -CHILDREN. 
    //*The child elements which are located inside of its template of a component are 
    //called *view children *. On the other hand, **elements which are used between 
    //the opening and closing tags of the host element of a given component are called *content children **.


//MORE ON: 
    //LIFE CYCLE HOOKS IN README
    //QUERY LIST https://angular.io/docs/ts/latest/api/core/index/QueryList-class.html


//DOCUMENTATION 
    //https://angular.io/docs/ts/latest/api/core/index/ContentChildren-decorator.html
    //https://angular.io/docs/ts/latest/api/core/index/ContentChild-decorator.html


//ARTICLEs FOR FOUNDATIONAL UNDERSTANDING
    //http://blog.mgechev.com/2016/01/23/angular2-viewchildren-contentchildren-difference-viewproviders/ 
    //https://netbasal.com/exploring-the-various-decorators-in-angular-b208875b207c 


//Q:What is a host element? (important because content child/ren are those elements 
//  present between opening and closing tags of this element.
//A:


//Q:How do I use the "descendants" metadata property?
//A:


//DESCRIPTION:         
    //You can use ContentChildren to get the QueryList of elements or directives from 
    //the content DOM. Any time a child element is added, removed, or moved, the query 
    //list will be updated, and the changes observable of the query list will emit a 
    //new value.

    //You can use ContentChild to get the first element or the directive 
    //matching the selector from the content DOM. If the content DOM changes, 
    //and a new child matches the selector, the property will be updated.

    //Content queries are set before the ngAfterContentInit callback is called.


//METADATA PROPERTIES:
    //selector - the directive type or the name used for querying.
    //descendants - include only direct children or all descendants.//available to Content Children only
    //read - read a different token from the queried elements.