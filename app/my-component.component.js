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
                }
                MyComponentComponent.prototype.ngOnInit = function () {
                    this.name = "ngOnInit";
                };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LWNvbXBvbmVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUEwQkE7Z0JBQUE7Z0JBT0EsQ0FBQztnQkFKQyx1Q0FBUSxHQUFSO29CQUNFLElBQUksQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDO2dCQUN6QixDQUFDO2dCQTNCSDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFFBQVEsRUFBRSxjQUFjO3dCQUN4QixRQUFRLEVBQUUsb2VBZVQ7d0JBQ0QsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7d0JBQ3RDLFVBQVUsRUFBRSxDQUFDLDhCQUFhLENBQUM7cUJBQzVCLENBQUM7O3dDQUFBO2dCQVNGLDJCQUFDO1lBQUQsQ0FQQSxBQU9DLElBQUE7WUFQRCx1REFPQyxDQUFBIiwiZmlsZSI6Im15LWNvbXBvbmVudC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge09uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1Rlc3RDb21wb25lbnR9IGZyb20gJy4vdGVzdC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdteS1jb21wb25lbnQnLFxuICB0ZW1wbGF0ZTogYFxuICAgIEhpLCBJIGhhdmUgPHNwYW4gW3N0eWxlLmNvbG9yXT1cImlucHV0RWxlbWVudC52YWx1ZT09J3llcyc/ICdyZWQnOicnXCI+e3tuYW1lfX08L3NwYW4+LCBcbiAgICA8c3BhbiBbY2xhc3MuaXMtYXdlc29tZV09XCJpbnB1dEVsZW1lbnQudmFsdWU9PSd5ZXMnXCI+XG4gICAgICBBbmd1bGFyIDIgaXMgYXdlc29tZVxuICAgIDwvc3Bhbj5cbiAgICA8YnIvPlxuICAgIElzIGl0IGF3ZXNvbWU/XG4gICAgPGJyIC8+XG4gICAgRW50ZXIgJ3llcycgdG8gbWFrZSBpdCByZWRcbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjaW5wdXRFbGVtZW50IChrZXl1cCk9XCIwXCIvPlxuICAgIDxiciAvPjxiciAvPlxuICAgIDxidXR0b24gW2Rpc2FibGVkXT1cImlucHV0RWxlbWVudC52YWx1ZT09J3llcydcIj5cbiAgICAgIE9ubHkgZW5hYmxlZCBpZiAneWVzJyB3YXMgaW50cm9kdWNlZFxuICAgIDwvYnV0dG9uPlxuICAgIDx0ZXN0PjwvdGVzdD5cbiAgYCxcbiAgc3R5bGVVcmxzOiBbJ3NyYy9jc3MvbXljb21wb25lbnQuY3NzJ10sXG4gIGRpcmVjdGl2ZXM6IFtUZXN0Q29tcG9uZW50XVxufSlcblxuZXhwb3J0IGNsYXNzIE15Q29tcG9uZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuICBuYW1lOiBzdHJpbmc7XG5cbiAgbmdPbkluaXQoKTphbnl7XG4gICAgdGhpcy5uYW1lID0gXCJuZ09uSW5pdFwiO1xuICB9XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
