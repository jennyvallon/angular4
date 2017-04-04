//DIRECTIVE DECORATOR
//THIS IS WHERE DIRECTIVE METADATA PROPERTIES ARE DECLARED AND DIRECTIVE CLASS IS EXPORTED

import { Directive } from '@angular/core'; //import directive decorator from angular core

@Directive({ //instantiating a DIRECTIVE with the following options
//    Metadata Properties:
//
//    exportAs - name under which the component instance is exported in a template
//    host - map of class property to host element bindings for events, properties and attributes
//    inputs - list of class property names to data-bind as component inputs
//    outputs - list of class property names that expose output events that others can subscribe to
//    providers - list of providers available to this component and its children
//    queries - configure queries that can be injected into the component
//    selector - css selector that identifies this component in a template example
})

//DOUBLE BRACKETED VARIABLES IN TEMPLATE URL ARE ASSIGNED VALUES AS OPTIONS
export class AppDirective {  }//definitely using es6 because of class keyword

//      DOCUMENTATION https://angular.io/docs/ts/latest/api/core/index/Directive-decorator.html
        
        
        

//      Q:HOW ARE DIRECTIVES DIFFERENT FROM COMPONENTS?
//      A:Angular components are a subset of directives. Unlike directives, 
//        components *always* have a template and only one component can be instantiated 
//        per an element in a template.
//      
//        
//

//      DESCRIPTION:
//        Directive decorator allows you to mark a class as an Angular directive 
//        and provide additional metadata that determines how the directive should 
//        be processed, instantiated and used at runtime.

//        Directives allow you to attach behavior to elements in the DOM..
//
//        SIMILAR TO COMPONENTS IN THAT:
//        A directive must belong to an NgModule in order for it to be usable by another 
//        directive, component, or application. To specify that a directive is a member of 
//        an NgModule, you should list it in the declarations field of that NgModule.
//
//        In addition to the metadata configuration specified via the Directive decorator, 
//        directives can control their runtime behavior by implementing various Life-Cycle hooks.




