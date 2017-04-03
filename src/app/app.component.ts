//COMPONENT DECORATOR
//THIS IS WHERE COMPONENT METADATA PROPERTIES ARE DECLARED AND COMPONENT IS INSTANTIATED

import { Component } from '@angular/core'; //component decorator part of angular core

@Component({ //instantiating component with the following options
    selector: 'app-root',//WHERE COMPONENT SHOULD BE INJECTED
    templateUrl: './app.component.html',// url to an external file containing a template for the view
    styleUrls: ['./app.component.css']
    
//    OTHER METADATA PROPERTIES FOR REFERENCE
    //animations - list of animations of this component
    //changeDetection - change detection strategy used by this component
    //encapsulation - style encapsulation strategy used by this component
    //entryComponents - list of components that are dynamically inserted into the view of this component
    //exportAs - name under which the component instance is exported in a template
    //host - map of class property to host element bindings for events, properties and attributes
    //inputs - list of class property names to data-bind as component inputs
    //interpolation - custom interpolation markers used in this component's template
    //moduleId - ES/CommonJS module id of the file in which this component is defined
    //outputs - list of class property names that expose output events that others can subscribe to
    //providers - list of providers available to this component and its children
    //queries - configure queries that can be injected into the component
    //selector - css selector that identifies this component in a template
    //styleUrls - list of urls to stylesheets to be applied to this component's view
    //styles - inline-defined styles to be applied to this component's view
    //template - inline-defined template for the view
    //templateUrl - url to an external file containing a template for the view
    //viewProviders - list of providers available to this component and its view children

})

//DOUBLE BRACKETED VARIABLES IN TEMPLATE URL ARE ASSIGNED VALUES AS OPTIONS
export class AppComponent { //definitely using es6 because of class keyword
    

  title = 'app poop!';
}

//      DOCUMENTATION https://angular.io/docs/ts/latest/api/core/index/Component-decorator.html

//      QUESTION:
//        HOW DO I STRUCTURE DATA RECEIVED FROM A FACTORY/PROVIDER?
//        WHAT IS THE DIFFERENCE BETWEEN CHILDREN AND VIEW CHILDREN? (PROVIDER VS VIEWPROVIDER)
//

//      DESCRIPTION:
//        Component decorator allows you to mark a class as an Angular component 
//        and provide additional metadata that determines how the component should be processed, 
//        instantiated and used at runtime.
//
//        Components are the most basic building block of an UI in an Angular 
//        application. An Angular application is a tree of Angular components. 
//        Angular components are a subset of directives. Unlike directives, 
//        components always have a template and only one component can be instantiated 
//        per an element in a template.
//
//        A component must belong to an NgModule in order for it to be usable by 
//        nother component or application. To specify that a component is a member 
//        of an NgModule, you should list it in the declarations field of that NgModule.
//
//        In addition to the metadata configuration specified via the Component 
//        decorator, components can control their runtime behavior by implementing 
//        various Life-Cycle hooks.




