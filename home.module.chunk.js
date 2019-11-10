webpackJsonp(["home.module"],{

/***/ "./src/app/views/home/components/home-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"landing-view\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12 col-md-12 col-xs-12 button-col main-start\"><button (click)=\"startTimer()\">Start Test</button></div>\r\n        <div class=\"col-lg-12 col-md-12 col-xs-12 time-counter\" *ngIf=\"currentQuestion?.id\"><p>{{timeLeft}} Seconds Left</p> \r\n    </div>\r\n    <div class=\"row\" *ngIf=\"currentQuestion?.id\">\r\n        <div class=\"col-lg-12 col-md-12 col-xs-12 button-col\">\r\n            <p class=\"question\"><span class=\"question-head\">Question {{counter}} - </span>{{currentQuestion.question}}</p>\r\n        </div>\r\n        <div class=\"col-lg-12 col-md-12\" *ngFor=\"let option of currentQuestion.options; let i = index\">\r\n              <button class=\"option-button ripple\" (click)=\"setSelectedAnswer(i);\" [ngClass]=\"{'active': i == currentQuestion?.selectedAnswerIndex}\"></button><span class=\"question-options\">{{option}}</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"row traverse-div\" *ngIf=\"currentQuestion?.id\">\r\n        <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6 traverse-button button-col\"><button class=\"previous traversal-button\" [ngClass]=\"{'hide-button': counter == 0}\" (click)=\"previousQuestion()\">Previous Question</button></div>\r\n        <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6 traverse-button button-col\"><button class=\"traversal-button\" [ngClass]=\"{'hide-button': counter == 2}\" (click)=\"nextQuestion()\">Next Question</button></div>\r\n    </div>\r\n    <div *ngIf=\"currentQuestion?.id == undefined\" class=\"landing-page\">\r\n        <div class=\"welcome-text\"><img src=\"assets/logo.png\"> Welcome to <span class=\"black-text\">Pariksha</span><span class=\"yellow-text\">.</span><span class=\"black-text\">Co</span></div>\r\n        <ul class=\"bg-bubbles\">\r\n            <li></li>\r\n            <li></li>\r\n            <li></li>\r\n            <li></li>\r\n            <li></li>\r\n            <li></li>\r\n            <li></li>\r\n            <li></li>\r\n            <li></li>\r\n            <li></li>\r\n        </ul>\r\n    </div>\r\n    <div class=\"row traverse-div\">\r\n        <div class=\"col-lg-12 col-md-12 col-xs-12 button-col\" *ngIf=\"counter == 2\"><button (click)=\"submitTest()\">Submit Test</button></div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/views/home/components/home-view.component.scss":
/***/ (function(module, exports) {

module.exports = ".landing-view {\n  display: block;\n  height: 85.5%;\n  width: 97%;\n  margin: 1.5%;\n  position: absolute;\n  background: white;\n  top: 12%;\n  border: 1px solid rgba(0, 0, 0, 0.07);\n  -webkit-box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.6);\n          box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.6); }\n  .landing-view .row {\n    margin: 0px; }\n  .landing-view .row .traverse-button {\n      width: 50%; }\n  .landing-view .row .main-start {\n      position: absolute;\n      z-index: 10; }\n  .landing-view .row .button-col {\n      padding: 0px; }\n  .landing-view .row .button-col button {\n        float: right;\n        padding: 1% 2.5%;\n        margin-right: 10px;\n        margin-top: 10px;\n        border-radius: 15px;\n        background: white;\n        color: #17db1d;\n        outline: transparent;\n        border: solid 1.5px #17db1d; }\n  .landing-view .row .button-col button:hover {\n          color: white;\n          background: #17db1d;\n          cursor: pointer; }\n  .landing-view .row .button-col .previous {\n        float: left;\n        margin-left: 10px; }\n  .landing-view .row .button-col .traversal-button {\n        margin-top: 50px; }\n  .landing-view .row .button-col .hide-button {\n        visibility: collapse; }\n  .landing-view .row .button-col .question {\n        padding: 5px 10px;\n        color: #999999;\n        font-size: 2.1vh;\n        font-weight: 500; }\n  .landing-view .row .button-col .question .question-head {\n          color: black; }\n  .landing-view .row .time-counter {\n      text-align: center;\n      margin-top: 10px; }\n  .landing-view .row .time-counter p {\n        font-size: 3.4vh;\n        color: #999999; }\n  .landing-view .traverse-div {\n    width: 100%; }\n  .landing-view .home-text {\n    font-size: 50px;\n    position: absolute;\n    top: 170px;\n    left: 30px;\n    font-weight: 500;\n    color: #00c7e9; }\n  .landing-view .home-text .text-black {\n      color: #656565; }\n  .landing-view .ripple {\n    position: relative;\n    overflow: hidden;\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0); }\n  .landing-view .ripple:after {\n    content: \"\";\n    display: block;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    pointer-events: none;\n    background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);\n    background-repeat: no-repeat;\n    background-position: 50%;\n    -webkit-transform: scale(10, 10);\n            transform: scale(10, 10);\n    opacity: 0;\n    -webkit-transition: opacity 1s, -webkit-transform .5s;\n    transition: opacity 1s, -webkit-transform .5s;\n    transition: transform .5s, opacity 1s;\n    transition: transform .5s, opacity 1s, -webkit-transform .5s; }\n  .landing-view .ripple:active:after {\n    -webkit-transform: scale(0, 0);\n            transform: scale(0, 0);\n    opacity: .3;\n    -webkit-transition: 0s;\n    transition: 0s; }\n  .landing-view .option-button {\n    padding: 8px;\n    background: #17db1d;\n    outline: transparent;\n    border: solid 1px #17db1d;\n    margin-right: 10px;\n    cursor: pointer;\n    margin-bottom: 10px; }\n  .landing-view .question-options {\n    display: inline-block;\n    position: absolute;\n    top: 7px;\n    color: #999999;\n    font-size: 2.2vh; }\n  .landing-view .active {\n    background-color: #eef113;\n    border: solid 1px #eef113;\n    -webkit-transition: background-color 1000ms linear;\n    transition: background-color 1000ms linear; }\n  .landing-view .landing-page {\n    background: -webkit-gradient(linear, left top, right bottom, from(#17db1d), to(#53e3a6));\n    background: linear-gradient(to bottom right, #17db1d 0%, #53e3a6 100%);\n    top: 0%;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n    position: absolute; }\n  .landing-view .landing-page .welcome-text {\n      height: 100%;\n      text-align: center;\n      font-size: 2.5em;\n      margin-top: 2.5em;\n      font-weight: 500;\n      color: #d0fdcf; }\n  .landing-view .landing-page .welcome-text .black-text {\n        color: black; }\n  .landing-view .landing-page .welcome-text .yellow-text {\n        color: yellow; }\n  .landing-view .landing-page .bg-bubbles {\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%; }\n  .landing-view .landing-page .bg-bubbles li {\n        position: absolute;\n        list-style: none;\n        display: block;\n        width: 40px;\n        height: 40px;\n        background: white;\n        bottom: -160px;\n        opacity: 0.2;\n        border-radius: 100px;\n        -webkit-animation: square 25s infinite;\n        animation: square 25s infinite;\n        -webkit-transition-timing-function: linear;\n        transition-timing-function: linear; }\n  .landing-view .landing-page .bg-bubbles li:nth-child(1) {\n          left: 10%; }\n  .landing-view .landing-page .bg-bubbles li:nth-child(2) {\n          left: 20%;\n          width: 80px;\n          height: 80px;\n          -webkit-animation-delay: 2s;\n                  animation-delay: 2s;\n          -webkit-animation-duration: 17s;\n                  animation-duration: 17s; }\n  .landing-view .landing-page .bg-bubbles li:nth-child(3) {\n          left: 25%;\n          -webkit-animation-delay: 4s;\n                  animation-delay: 4s; }\n  .landing-view .landing-page .bg-bubbles li:nth-child(4) {\n          left: 40%;\n          width: 60px;\n          height: 60px;\n          -webkit-animation-duration: 22s;\n                  animation-duration: 22s;\n          background-color: fade(white, 25%); }\n  .landing-view .landing-page .bg-bubbles li:nth-child(5) {\n          left: 70%; }\n  .landing-view .landing-page .bg-bubbles li:nth-child(6) {\n          left: 80%;\n          width: 120px;\n          height: 120px;\n          -webkit-animation-delay: 3s;\n                  animation-delay: 3s;\n          background-color: fade(white, 20%); }\n  .landing-view .landing-page .bg-bubbles li:nth-child(7) {\n          left: 32%;\n          width: 160px;\n          height: 160px;\n          -webkit-animation-delay: 7s;\n                  animation-delay: 7s; }\n  .landing-view .landing-page .bg-bubbles li:nth-child(8) {\n          left: 55%;\n          width: 20px;\n          height: 20px;\n          -webkit-animation-delay: 15s;\n                  animation-delay: 15s;\n          -webkit-animation-duration: 40s;\n                  animation-duration: 40s; }\n  .landing-view .landing-page .bg-bubbles li:nth-child(9) {\n          left: 25%;\n          width: 10px;\n          height: 10px;\n          -webkit-animation-delay: 2s;\n                  animation-delay: 2s;\n          -webkit-animation-duration: 40s;\n                  animation-duration: 40s;\n          background-color: fade(white, 30%); }\n  .landing-view .landing-page .bg-bubbles li:nth-child(10) {\n          left: 90%;\n          width: 160px;\n          height: 160px;\n          -webkit-animation-delay: 11s;\n                  animation-delay: 11s; }\n  @-webkit-keyframes square {\n  0% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0); }\n  100% {\n    -webkit-transform: translateY(-700px) rotate(600deg);\n            transform: translateY(-700px) rotate(600deg); } }\n  @keyframes square {\n  0% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0); }\n  100% {\n    -webkit-transform: translateY(-700px) rotate(600deg);\n            transform: translateY(-700px) rotate(600deg); } }\n"

/***/ }),

/***/ "./src/app/views/home/components/home-view.component.ts":
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
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/takeUntil.js");
var home_config_1 = __webpack_require__("./src/app/views/home/state/home.config.ts");
var HomeViewComponent = /** @class */ (function () {
    function HomeViewComponent(_router) {
        this._router = _router;
        this.ngUnsubscriber = new rxjs_1.Subject();
        this.timeLeft = 120;
        this.questions = [];
    }
    HomeViewComponent.prototype.ngOnInit = function () {
        home_config_1.resetSelectedIndex();
        this.questions = home_config_1.questions;
    };
    HomeViewComponent.prototype.startTimer = function () {
        var _this = this;
        this.counter = 0;
        this.currentQuestion = this.questions[this.counter];
        this.interval = setInterval(function () {
            if (_this.timeLeft > 0) {
                _this.timeLeft--;
            }
            else {
                _this.submitTest();
            }
        }, 1000);
    };
    HomeViewComponent.prototype.nextQuestion = function () {
        this.counter++;
        this.currentQuestion = this.questions[this.counter];
    };
    HomeViewComponent.prototype.previousQuestion = function () {
        this.counter--;
        this.currentQuestion = this.questions[this.counter];
    };
    HomeViewComponent.prototype.setSelectedAnswer = function (pIndex) {
        this.currentQuestion.selectedAnswerIndex = pIndex;
    };
    HomeViewComponent.prototype.submitTest = function () {
        this._router.navigate(['/results']);
    };
    HomeViewComponent = __decorate([
        core_1.Component({
            selector: 'home-view',
            template: __webpack_require__("./src/app/views/home/components/home-view.component.html"),
            styles: [__webpack_require__("./src/app/views/home/components/home-view.component.scss")]
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], HomeViewComponent);
    return HomeViewComponent;
}());
exports.HomeViewComponent = HomeViewComponent;


/***/ }),

/***/ "./src/app/views/home/home.module.ts":
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
var home_view_component_1 = __webpack_require__("./src/app/views/home/components/home-view.component.ts");
var home_routing_module_1 = __webpack_require__("./src/app/views/home/home.routing.module.ts");
var home_service_1 = __webpack_require__("./src/app/views/home/state/home.service.ts");
var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                home_routing_module_1.HomeRoutingModule
            ],
            declarations: [
                home_view_component_1.HomeViewComponent
            ],
            providers: [
                home_service_1.HomeService
            ]
        })
    ], HomeModule);
    return HomeModule;
}());
exports.HomeModule = HomeModule;


/***/ }),

/***/ "./src/app/views/home/home.routing.module.ts":
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
var home_view_component_1 = __webpack_require__("./src/app/views/home/components/home-view.component.ts");
var homeRoutes = [
    {
        path: '',
        component: home_view_component_1.HomeViewComponent,
        canActivate: [auth_guard_1.AuthGuard]
    }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(homeRoutes)],
            exports: [router_1.RouterModule]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());
exports.HomeRoutingModule = HomeRoutingModule;


/***/ }),

/***/ "./src/app/views/home/state/home.service.ts":
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
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var HomeService = /** @class */ (function () {
    function HomeService(http) {
        this.http = http;
    }
    HomeService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], HomeService);
    return HomeService;
}());
exports.HomeService = HomeService;


/***/ })

});
//# sourceMappingURL=home.module.chunk.js.map