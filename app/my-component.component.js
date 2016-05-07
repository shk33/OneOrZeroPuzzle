System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var MyComponentComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MyComponentComponent = (function () {
                function MyComponentComponent() {
                    this.name = "Lollipop";
                }
                MyComponentComponent = __decorate([
                    core_1.Component({
                        selector: 'my-component',
                        template: "\n    Hi, I have {{name}}, \n    <span [class.is-awesome]=\"inputElement.value=='yes'\">\n      Angular 2 is awesome\n    </span>\n    <br/>\n    Is it awesome?\n    <br />\n    Enter 'yes' to make it red\n    <input type=\"text\" #inputElement (keyup)=\"0\"/>\n  ",
                        styleUrls: ['src/css/mycomponent.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], MyComponentComponent);
                return MyComponentComponent;
            }());
            exports_1("MyComponentComponent", MyComponentComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LWNvbXBvbmVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFrQkE7Z0JBQUE7b0JBQ0UsU0FBSSxHQUFHLFVBQVUsQ0FBQztnQkFDcEIsQ0FBQztnQkFsQkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUUsY0FBYzt3QkFDeEIsUUFBUSxFQUFFLDBRQVVUO3dCQUNELFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO3FCQUN2QyxDQUFDOzt3Q0FBQTtnQkFJRiwyQkFBQztZQUFELENBRkEsQUFFQyxJQUFBO1lBRkQsdURBRUMsQ0FBQSIsImZpbGUiOiJteS1jb21wb25lbnQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdteS1jb21wb25lbnQnLFxuICB0ZW1wbGF0ZTogYFxuICAgIEhpLCBJIGhhdmUge3tuYW1lfX0sIFxuICAgIDxzcGFuIFtjbGFzcy5pcy1hd2Vzb21lXT1cImlucHV0RWxlbWVudC52YWx1ZT09J3llcydcIj5cbiAgICAgIEFuZ3VsYXIgMiBpcyBhd2Vzb21lXG4gICAgPC9zcGFuPlxuICAgIDxici8+XG4gICAgSXMgaXQgYXdlc29tZT9cbiAgICA8YnIgLz5cbiAgICBFbnRlciAneWVzJyB0byBtYWtlIGl0IHJlZFxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNpbnB1dEVsZW1lbnQgKGtleXVwKT1cIjBcIi8+XG4gIGAsXG4gIHN0eWxlVXJsczogWydzcmMvY3NzL215Y29tcG9uZW50LmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgTXlDb21wb25lbnRDb21wb25lbnQge1xuICBuYW1lID0gXCJMb2xsaXBvcFwiO1xufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
