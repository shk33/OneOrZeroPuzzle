System.register(['angular2/core', './test.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, test_component_1;
    var MyComponentComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (test_component_1_1) {
                test_component_1 = test_component_1_1;
            }],
        execute: function() {
            MyComponentComponent = (function () {
                function MyComponentComponent() {
                    this.name = "Lollipop";
                }
                MyComponentComponent = __decorate([
                    core_1.Component({
                        selector: 'my-component',
                        template: "\n    Hi, I have <span [style.color]=\"inputElement.value=='yes'? 'red':''\">{{name}}</span>, \n    <span [class.is-awesome]=\"inputElement.value=='yes'\">\n      Angular 2 is awesome\n    </span>\n    <br/>\n    Is it awesome?\n    <br />\n    Enter 'yes' to make it red\n    <input type=\"text\" #inputElement (keyup)=\"0\"/>\n    <br /><br />\n    <button [disabled]=\"inputElement.value=='yes'\">\n      Only enabled if 'yes' was introduced\n    </button>\n    <test></test>\n  ",
                        styleUrls: ['src/css/mycomponent.css'],
                        directives: [test_component_1.TestComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MyComponentComponent);
                return MyComponentComponent;
            }());
            exports_1("MyComponentComponent", MyComponentComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LWNvbXBvbmVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF5QkE7Z0JBQUE7b0JBQ0UsU0FBSSxHQUFHLFVBQVUsQ0FBQztnQkFDcEIsQ0FBQztnQkF4QkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUUsY0FBYzt3QkFDeEIsUUFBUSxFQUFFLG9lQWVUO3dCQUNELFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO3dCQUN0QyxVQUFVLEVBQUUsQ0FBQyw4QkFBYSxDQUFDO3FCQUM1QixDQUFDOzt3Q0FBQTtnQkFJRiwyQkFBQztZQUFELENBRkEsQUFFQyxJQUFBO1lBRkQsdURBRUMsQ0FBQSIsImZpbGUiOiJteS1jb21wb25lbnQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtUZXN0Q29tcG9uZW50fSBmcm9tICcuL3Rlc3QuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXktY29tcG9uZW50JyxcbiAgdGVtcGxhdGU6IGBcbiAgICBIaSwgSSBoYXZlIDxzcGFuIFtzdHlsZS5jb2xvcl09XCJpbnB1dEVsZW1lbnQudmFsdWU9PSd5ZXMnPyAncmVkJzonJ1wiPnt7bmFtZX19PC9zcGFuPiwgXG4gICAgPHNwYW4gW2NsYXNzLmlzLWF3ZXNvbWVdPVwiaW5wdXRFbGVtZW50LnZhbHVlPT0neWVzJ1wiPlxuICAgICAgQW5ndWxhciAyIGlzIGF3ZXNvbWVcbiAgICA8L3NwYW4+XG4gICAgPGJyLz5cbiAgICBJcyBpdCBhd2Vzb21lP1xuICAgIDxiciAvPlxuICAgIEVudGVyICd5ZXMnIHRvIG1ha2UgaXQgcmVkXG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI2lucHV0RWxlbWVudCAoa2V5dXApPVwiMFwiLz5cbiAgICA8YnIgLz48YnIgLz5cbiAgICA8YnV0dG9uIFtkaXNhYmxlZF09XCJpbnB1dEVsZW1lbnQudmFsdWU9PSd5ZXMnXCI+XG4gICAgICBPbmx5IGVuYWJsZWQgaWYgJ3llcycgd2FzIGludHJvZHVjZWRcbiAgICA8L2J1dHRvbj5cbiAgICA8dGVzdD48L3Rlc3Q+XG4gIGAsXG4gIHN0eWxlVXJsczogWydzcmMvY3NzL215Y29tcG9uZW50LmNzcyddLFxuICBkaXJlY3RpdmVzOiBbVGVzdENvbXBvbmVudF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBNeUNvbXBvbmVudENvbXBvbmVudCB7XG4gIG5hbWUgPSBcIkxvbGxpcG9wXCI7XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
