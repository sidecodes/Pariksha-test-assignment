webpackJsonp(["results.module"],{

/***/ "./src/app/views/results/components/results.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"result-view\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12 col-md-12 col-xs-12 result-header\"><button (click)=\"traverseHome()\">Home</button><p *ngIf=\"allQuestions.length > 0\">Test is Complete!!</p> <p *ngIf=\"allQuestions.length == 0\">Please take the test!!</p>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12 col-md-12 col-xs-12\">\r\n            <p><span class=\"user-name-heading\">Name: </span><span class=\"user-name-value\">{{userDetails}}</span></p>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row questions-box\">\r\n        <div class=\"col-lg-12 col-md-12 col-xs-12 result-div\" *ngFor=\"let question of allQuestions\">\r\n            <p class=\"question\"><span class=\"question-head\">Question {{question.id}} - </span>{{question.question}}</p>\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-6 col-md-6 col-xs-6\">\r\n                    <p class=\"answer\"><span class=\"question-head\">Correct Answer - </span><span class=\"correct-answer\">{{question.correctAnswer}}</span></p>\r\n                </div>\r\n                <div class=\"col-lg-6 col-md-6 col-xs-6\">\r\n                    <p class=\"answer\"><span class=\"question-head given-answer\">Given Answer - </span><span class=\"correct-answer\" *ngIf=\"question.selectedAnswerIndex != -1\" [ngClass]=\"{'wrong-answer': question.correctAnswer !== question.options[question.selectedAnswerIndex]}\">{{question.options[question.selectedAnswerIndex]}}</span><span *ngIf=\"question.selectedAnswerIndex == -1\">Not Attempted</span></p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/views/results/components/results.component.scss":
/***/ (function(module, exports) {

module.exports = ".result-view {\n  display: block;\n  height: auto;\n  min-height: 86.5%;\n  width: 97%;\n  margin: 1.5%;\n  position: absolute;\n  background: white;\n  top: 12%;\n  border: 1px solid rgba(0, 0, 0, 0.07);\n  -webkit-box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.6);\n          box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.6); }\n  .result-view .row {\n    margin: 0; }\n  .result-view .row .result-header {\n      margin-top: 15px; }\n  .result-view .row .result-header p {\n        text-align: center;\n        font-size: 4vh;\n        color: #999999;\n        font-weight: 500; }\n  .result-view .row .result-header button {\n        float: left;\n        padding: 1% 2.5%;\n        margin-right: 10px;\n        margin-top: 10px;\n        border-radius: 15px;\n        background: white;\n        color: #17db1d;\n        outline: transparent;\n        border: solid 1.5px #17db1d; }\n  .result-view .row .result-header button:hover {\n          color: white;\n          background: #17db1d;\n          cursor: pointer; }\n  .result-view .row .user-name-heading {\n      font-size: 3vh; }\n  .result-view .row .user-name-value {\n      font-size: 3vh;\n      color: #999999; }\n  .result-view .questions-box {\n    width: 98%;\n    margin: 12px; }\n  .result-view .questions-box .result-div {\n      height: auto;\n      border: solid 1px #17db1d;\n      padding: 0px;\n      border-radius: 5px;\n      -webkit-box-shadow: 0px 0px 10px #3dde62;\n              box-shadow: 0px 0px 10px #3dde62;\n      margin-top: 30px; }\n  .result-view .questions-box .result-div .question {\n        padding: 5px 10px;\n        color: #999999;\n        font-size: 2.1vh;\n        font-weight: 500; }\n  .result-view .questions-box .result-div .question .question-head {\n          color: black; }\n  .result-view .questions-box .result-div .answer {\n        padding: 0px;\n        color: #999999;\n        font-size: 2.1vh;\n        font-weight: 500; }\n  .result-view .questions-box .result-div .answer .question-head {\n          color: black; }\n  .result-view .questions-box .result-div .answer .correct-answer {\n          color: #17db1d; }\n  .result-view .questions-box .result-div .answer .wrong-answer {\n          color: red; }\n"

/***/ }),

/***/ "./src/app/views/results/components/results.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var rxjs_1 = __webpack_require__("./node_modules/rxjs/Rx.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/takeUntil.js");
var results_service_1 = __webpack_require__("./src/app/views/results/state/results.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var ResultsComponent = /** @class */ (function () {
    function ResultsComponent(_resultSvc, _router) {
        this._resultSvc = _resultSvc;
        this._router = _router;
        this.ngUnsubscriber = new rxjs_1.Subject();
        this.allQuestions = this._resultSvc.getQuestions();
        this.userDetails = this._resultSvc.getUserDetails();
        console.log(this.userDetails);
    }
    ResultsComponent.prototype.ngOnInit = function () {
    };
    ResultsComponent.prototype.traverseHome = function () {
        this._router.navigate(['home']);
    };
    ResultsComponent.prototype.ngOnDestroy = function () {
        this.ngUnsubscriber.next();
        this.ngUnsubscriber.complete();
    };
    ResultsComponent = __decorate([
        core_1.Component({
            selector: 'results',
            template: __webpack_require__("./src/app/views/results/components/results.component.html"),
            styles: [__webpack_require__("./src/app/views/results/components/results.component.scss")]
        }),
        __metadata("design:paramtypes", [results_service_1.ResultsService,
            router_1.Router])
    ], ResultsComponent);
    return ResultsComponent;
}());
exports.ResultsComponent = ResultsComponent;


/***/ }),

/***/ "./src/app/views/results/results.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var results_component_1 = __webpack_require__("./src/app/views/results/components/results.component.ts");
var results_routing_module_1 = __webpack_require__("./src/app/views/results/results.routing.module.ts");
var results_service_1 = __webpack_require__("./src/app/views/results/state/results.service.ts");
var ResultsModule = /** @class */ (function () {
    function ResultsModule() {
    }
    ResultsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                results_routing_module_1.ResultsRoutingModule
            ],
            declarations: [
                results_component_1.ResultsComponent
            ],
            providers: [
                results_service_1.ResultsService
            ]
        })
    ], ResultsModule);
    return ResultsModule;
}());
exports.ResultsModule = ResultsModule;


/***/ }),

/***/ "./src/app/views/results/results.routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var auth_guard_1 = __webpack_require__("./src/app/guards/auth.guard.ts");
var results_component_1 = __webpack_require__("./src/app/views/results/components/results.component.ts");
var resultsRoutes = [
    {
        path: '',
        component: results_component_1.ResultsComponent,
        canActivate: [auth_guard_1.AuthGuard],
    }
];
var ResultsRoutingModule = /** @class */ (function () {
    function ResultsRoutingModule() {
    }
    ResultsRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(resultsRoutes)],
            exports: [router_1.RouterModule]
        })
    ], ResultsRoutingModule);
    return ResultsRoutingModule;
}());
exports.ResultsRoutingModule = ResultsRoutingModule;


/***/ }),

/***/ "./src/app/views/results/state/results.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var home_config_1 = __webpack_require__("./src/app/views/home/state/home.config.ts");
var ResultsService = /** @class */ (function () {
    function ResultsService() {
    }
    ResultsService.prototype.getUserDetails = function () {
        return localStorage.getItem('currentUser');
    };
    ResultsService.prototype.getQuestions = function () {
        return home_config_1.questions;
    };
    ResultsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], ResultsService);
    return ResultsService;
}());
exports.ResultsService = ResultsService;


/***/ })

});
//# sourceMappingURL=results.module.chunk.js.map