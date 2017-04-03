# AngularNotes

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


GLOSSARY https://angular.io/docs/ts/latest/guide/glossary.html

JARGON:

    </decorator-definition>
        Decorator | decoration

        A function that adds metadata to a class, its members (properties, methods) and 
        function arguments.

        Decorators are a JavaScript language feature, implemented in TypeScript and 
        proposed for ES2016 (also known as ES7).

        To apply a decorator, position it immediately above or to the left of the item 
        it decorates.

        Angular has its own set of decorators to help it interoperate with your 
        application parts. The following example is a @Component decorator that identifies a class as an Angular component and an @Input decorator applied to the name property of that component. The elided object argument to the @Component decorator would contain the pertinent component metadata.

        @Component({...})
        export class AppComponent {
          constructor(@Inject('SpecialFoo') public foo:Foo) {}
          @Input() name:string;
        }
        The scope of a decorator is limited to the language feature that it decorates. 
        None of the decorations shown here will "leak" to other classes that follow it in the file.

        Always include parentheses () when applying a decorator.
    </decorator-definition>



    </lifeCycleHooks-definition> 
        https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html

        Directives and components have a lifecycle managed by Angular as it creates, 
        updates, and destroys them.

        You can tap into key moments in that lifecycle by implementing one or more of 
        the lifecycle hook interfaces.

        Each interface has a single hook method whose name is the interface name prefixed 
        with ng. For example, the OnInit interface has a hook method named ngOnInit.

        Angular calls these hook methods in the following order:

            ngOnChanges: when an input/output binding value changes.
            ngOnInit: after the first ngOnChanges.
            ngDoCheck: developer's custom change detection.
            ngAfterContentInit: after component content initialized.
            ngAfterContentChecked: after every check of component content.
            ngAfterViewInit: after a component's views are initialized.
            ngAfterViewChecked: after every check of a component's views.
            ngOnDestroy: just before the directive is destroyed.
            Read more in the Lifecycle Hooks page. https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html
    </lifeCycleHooks-definition>