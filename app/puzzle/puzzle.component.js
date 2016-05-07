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
    var PuzzleComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PuzzleComponent = (function () {
                function PuzzleComponent() {
                }
                PuzzleComponent.prototype.ngOnInit = function () {
                    this.switch1Number = Math.round(Math.random());
                    this.switch2Number = Math.round(Math.random());
                    this.switch3Number = Math.round(Math.random());
                    this.switch4Number = Math.round(Math.random());
                    console.log(this.switch1Number, this.switch2Number, this.switch3Number, this.switch4Number);
                };
                PuzzleComponent = __decorate([
                    core_1.Component({
                        selector: 'my-puzzle',
                        template: "\n      <section class=\"setup\">\n        <h2>Game Setup</h2>\n        Enter your name please:\n        <input type=\"text\" #name (keyup)=\"0\"/>\n      </section>\n      <section \n      [ngClass]=\"{\n        puzzle: true,\n        solved: switch1.value == switch1Number && switch2.value == switch2Number && switch3.value == switch3Number && switch4.value == switch4Number\n      }\"\n      [style.display]=\"name.value === '' ? 'none':'block'\">\n        <h2>The Puzzle</h2>\n        <p>Ok, Welcome <span class=\"name\">{{name.value}}</span></p>\n        <br />\n        Switch 1:\n        <input type=\"text\" #switch1 (keyup)=\"0\" /><br />\n        Switch 2:\n        <input type=\"text\" #switch2 (keyup)=\"0\" /><br />\n        Switch 3:\n        <input type=\"text\" #switch3 (keyup)=\"0\" /><br />\n        Switch 4:\n        <input type=\"text\" #switch4 (keyup)=\"0\" /><br />\n      </section>\n      <h2>Congratulations {{name.value}}, you did it!</h2>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], PuzzleComponent);
                return PuzzleComponent;
            }());
            exports_1("PuzzleComponent", PuzzleComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1enpsZS9wdXp6bGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBaUNBO2dCQUFBO2dCQWdCQSxDQUFDO2dCQVZDLGtDQUFRLEdBQVI7b0JBQ0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO29CQUMvQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7b0JBQy9DLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztvQkFDL0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO29CQUUvQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDOUYsQ0FBQztnQkEzQ0g7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUUsV0FBVzt3QkFDckIsUUFBUSxFQUFFLGc5QkF5QlA7cUJBQ0osQ0FBQzs7bUNBQUE7Z0JBa0JGLHNCQUFDO1lBQUQsQ0FoQkEsQUFnQkMsSUFBQTtZQWhCRCw2Q0FnQkMsQ0FBQSIsImZpbGUiOiJwdXp6bGUvcHV6emxlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7T25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXktcHV6emxlJyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgIDxzZWN0aW9uIGNsYXNzPVwic2V0dXBcIj5cbiAgICAgICAgPGgyPkdhbWUgU2V0dXA8L2gyPlxuICAgICAgICBFbnRlciB5b3VyIG5hbWUgcGxlYXNlOlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjbmFtZSAoa2V5dXApPVwiMFwiLz5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxzZWN0aW9uIFxuICAgICAgW25nQ2xhc3NdPVwie1xuICAgICAgICBwdXp6bGU6IHRydWUsXG4gICAgICAgIHNvbHZlZDogc3dpdGNoMS52YWx1ZSA9PSBzd2l0Y2gxTnVtYmVyICYmIHN3aXRjaDIudmFsdWUgPT0gc3dpdGNoMk51bWJlciAmJiBzd2l0Y2gzLnZhbHVlID09IHN3aXRjaDNOdW1iZXIgJiYgc3dpdGNoNC52YWx1ZSA9PSBzd2l0Y2g0TnVtYmVyXG4gICAgICB9XCJcbiAgICAgIFtzdHlsZS5kaXNwbGF5XT1cIm5hbWUudmFsdWUgPT09ICcnID8gJ25vbmUnOidibG9jaydcIj5cbiAgICAgICAgPGgyPlRoZSBQdXp6bGU8L2gyPlxuICAgICAgICA8cD5PaywgV2VsY29tZSA8c3BhbiBjbGFzcz1cIm5hbWVcIj57e25hbWUudmFsdWV9fTwvc3Bhbj48L3A+XG4gICAgICAgIDxiciAvPlxuICAgICAgICBTd2l0Y2ggMTpcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI3N3aXRjaDEgKGtleXVwKT1cIjBcIiAvPjxiciAvPlxuICAgICAgICBTd2l0Y2ggMjpcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI3N3aXRjaDIgKGtleXVwKT1cIjBcIiAvPjxiciAvPlxuICAgICAgICBTd2l0Y2ggMzpcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI3N3aXRjaDMgKGtleXVwKT1cIjBcIiAvPjxiciAvPlxuICAgICAgICBTd2l0Y2ggNDpcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI3N3aXRjaDQgKGtleXVwKT1cIjBcIiAvPjxiciAvPlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPGgyPkNvbmdyYXR1bGF0aW9ucyB7e25hbWUudmFsdWV9fSwgeW91IGRpZCBpdCE8L2gyPlxuICAgIGBcbn0pXG5cbmV4cG9ydCBjbGFzcyBQdXp6bGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBzd2l0Y2gxTnVtYmVyOiBudW1iZXI7XG4gIHN3aXRjaDJOdW1iZXI6IG51bWJlcjtcbiAgc3dpdGNoM051bWJlcjogbnVtYmVyO1xuICBzd2l0Y2g0TnVtYmVyOiBudW1iZXI7XG5cbiAgbmdPbkluaXQoKXtcbiAgICB0aGlzLnN3aXRjaDFOdW1iZXIgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpO1xuICAgIHRoaXMuc3dpdGNoMk51bWJlciA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSk7XG4gICAgdGhpcy5zd2l0Y2gzTnVtYmVyID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKTtcbiAgICB0aGlzLnN3aXRjaDROdW1iZXIgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpO1xuXG4gICAgY29uc29sZS5sb2codGhpcy5zd2l0Y2gxTnVtYmVyLCB0aGlzLnN3aXRjaDJOdW1iZXIsIHRoaXMuc3dpdGNoM051bWJlciwgdGhpcy5zd2l0Y2g0TnVtYmVyKTtcbiAgfVxuXG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
