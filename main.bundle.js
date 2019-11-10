webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./views/home/home.module": [
		"./src/app/views/home/home.module.ts",
		"home.module",
		"common"
	],
	"./views/results/results.module": [
		"./src/app/views/results/results.module.ts",
		"results.module",
		"common"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<alert></alert>\r\n<header-nav-bar *ngIf=\"showFlag\"></header-nav-bar>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
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
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var AppComponent = /** @class */ (function () {
    function AppComponent(_router, _cdref) {
        var _this = this;
        this._router = _router;
        this._cdref = _cdref;
        this.title = 'ShoppinPal';
        this.currentRoute = '';
        this.subscription = this._router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationEnd) {
                var urlArray = event.urlAfterRedirects.split('/');
                if (urlArray[1] !== undefined)
                    _this.currentRoute = urlArray[1];
                _this._cdref.detectChanges();
            }
        });
    }
    AppComponent.prototype.ngOnit = function () {
    };
    Object.defineProperty(AppComponent.prototype, "showFlag", {
        get: function () {
            return this.currentRoute == 'login' || this.currentRoute.indexOf('login') != -1 ? false : true;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
        }),
        __metadata("design:paramtypes", [router_1.Router,
            core_1.ChangeDetectorRef])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var animations_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var app_routing_1 = __webpack_require__("./src/app/app.routing.ts");
var login_module_1 = __webpack_require__("./src/app/views/login/login.module.ts");
var coreModules_module_1 = __webpack_require__("./src/app/core-modules/coreModules.module.ts");
var app_module_config_1 = __webpack_require__("./src/app/config/app-module.config.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                login_module_1.LoginModule,
                animations_1.BrowserAnimationsModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                coreModules_module_1.CoreModulesModule,
                app_routing_1.routing
            ],
            providers: [
                http_1.BaseRequestOptions
            ].concat(app_module_config_1.APPLICATION_SERVICES),
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var auth_guard_1 = __webpack_require__("./src/app/guards/auth.guard.ts");
var appRoutes = [
    { path: 'home', canActivate: [auth_guard_1.AuthGuard], loadChildren: './views/home/home.module#HomeModule' },
    { path: 'results', canActivate: [auth_guard_1.AuthGuard], loadChildren: './views/results/results.module#ResultsModule' },
    { path: '**', redirectTo: 'home' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);


/***/ }),

/***/ "./src/app/config/app-module.config.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * APPLICATION SERVICES
 */
Object.defineProperty(exports, "__esModule", { value: true });
var AppServices = __webpack_require__("./src/app/services/index.ts");
var auth_guard_1 = __webpack_require__("./src/app/guards/auth.guard.ts");
exports.APPLICATION_SERVICES = [
    AppServices.AlertService,
    auth_guard_1.AuthGuard
];


/***/ }),

/***/ "./src/app/core-modules/alert/alert.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"flash\" *ngIf=\"message\" \r\n    [ngClass]=\"{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\" \r\n    (click)=\"dismiss($event)\">\r\n    <span class=\"msg\">{{message.text}}</span>\r\n    <span (click)=\"dismiss($event)\"><img class=\"alert-cancel\" src=\"assets/cancel.svg\" id=\"icon\"/></span>\r\n</div>"

/***/ }),

/***/ "./src/app/core-modules/alert/alert.component.ts":
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
var index_1 = __webpack_require__("./src/app/services/index.ts");
var AlertComponent = /** @class */ (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.alertService.getMessage().subscribe(function (message) { _this.message = message; });
    };
    AlertComponent.prototype.dismiss = function (event) {
        this.message = false;
    };
    AlertComponent = __decorate([
        core_1.Component({
            selector: 'alert',
            template: __webpack_require__("./src/app/core-modules/alert/alert.component.html")
        }),
        __metadata("design:paramtypes", [index_1.AlertService])
    ], AlertComponent);
    return AlertComponent;
}());
exports.AlertComponent = AlertComponent;


/***/ }),

/***/ "./src/app/core-modules/coreModules.module.ts":
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
var alert_component_1 = __webpack_require__("./src/app/core-modules/alert/alert.component.ts");
var header_nav_bar_component_1 = __webpack_require__("./src/app/core-modules/header-nav-bar/header-nav-bar.component.ts");
var CoreModulesModule = /** @class */ (function () {
    function CoreModulesModule() {
    }
    CoreModulesModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
            ],
            declarations: [
                alert_component_1.AlertComponent,
                header_nav_bar_component_1.HeaderNavBarComponent,
            ],
            providers: [],
            exports: [
                alert_component_1.AlertComponent,
                header_nav_bar_component_1.HeaderNavBarComponent
            ]
        })
    ], CoreModulesModule);
    return CoreModulesModule;
}());
exports.CoreModulesModule = CoreModulesModule;


/***/ }),

/***/ "./src/app/core-modules/header-nav-bar/header-nav-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n        <div class=\"user-option\">\r\n           <img class=\"user-icon\" src=\"assets/user.svg\" id=\"icon\" alt=\"User Icon\" />\r\n           <div class=\"user-operations\">\r\n              <li (click)=\"logout()\"><span><img class=\"logout-option\" src=\"assets/logout.svg\"></span>Logout</li>\r\n           </div>\r\n        </div>\r\n     </nav>"

/***/ }),

/***/ "./src/app/core-modules/header-nav-bar/header-nav-bar.component.scss":
/***/ (function(module, exports) {

module.exports = ".navbar {\n  height: 11%;\n  display: block;\n  background-color: #17db1d !important;\n  position: absolute;\n  width: 100%;\n  top: 0px; }\n  .navbar .user-option {\n    float: right;\n    position: relative;\n    top: 1%;\n    right: 3%; }\n  .navbar .user-option .user-icon {\n      width: 50px;\n      height: 50px;\n      cursor: pointer; }\n  .navbar .user-option .user-operations {\n      display: none; }\n  .navbar .user-option:hover .user-operations {\n      display: block;\n      position: absolute;\n      height: 48px;\n      background: #f8f9fa;\n      padding: 10px 0px 0px 0px;\n      right: -24px;\n      top: 53px;\n      border: 1px solid #e4e4e4;\n      border-radius: 5px;\n      z-index: 1000;\n      -webkit-box-shadow: 0 2px 10px 0px rgba(0, 0, 0, 0.3);\n              box-shadow: 0 2px 10px 0px rgba(0, 0, 0, 0.3); }\n  .navbar .user-option:hover .user-operations li {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        font-size: 14px;\n        color: #999999;\n        cursor: pointer;\n        padding: 5px 10px;\n        height: 37px; }\n  .navbar .user-option:hover .user-operations li span .logout-option {\n          height: 20px;\n          margin: -2px 8px 0px 0px; }\n  .navbar .user-option:hover .user-operations li:hover {\n          color: #8e8e8e;\n          background: #eaeaea; }\n  .navbar .user-option:hover .user-operations:before {\n      content: \"\";\n      position: absolute;\n      width: 20.28px;\n      height: 20.28px;\n      -webkit-transform: scaleY(0.7774) rotate(135deg);\n              transform: scaleY(0.7774) rotate(135deg);\n      background-color: #f8f9fa;\n      left: 35px;\n      top: -11px;\n      border-bottom: solid 2.5px #e4e4e4;\n      border-left: solid 2.5px #e4e4e4; }\n"

/***/ }),

/***/ "./src/app/core-modules/header-nav-bar/header-nav-bar.component.ts":
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
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var HeaderNavBarComponent = /** @class */ (function () {
    function HeaderNavBarComponent(_router) {
        this._router = _router;
    }
    HeaderNavBarComponent.prototype.ngOnInit = function () {
    };
    HeaderNavBarComponent.prototype.logout = function () {
        localStorage.removeItem('currentUser');
        localStorage.removeItem('currentUserToken');
        localStorage.removeItem('environmentReady');
        this._router.navigate(['login']);
    };
    HeaderNavBarComponent = __decorate([
        core_1.Component({
            selector: 'header-nav-bar',
            template: __webpack_require__("./src/app/core-modules/header-nav-bar/header-nav-bar.component.html"),
            styles: [__webpack_require__("./src/app/core-modules/header-nav-bar/header-nav-bar.component.scss")]
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], HeaderNavBarComponent);
    return HeaderNavBarComponent;
}());
exports.HeaderNavBarComponent = HeaderNavBarComponent;


/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
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
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentUserToken') && (localStorage.getItem('environmentReady') == "1") && localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.Router])
    ], AuthGuard);
    return AuthGuard;
}());
exports.AuthGuard = AuthGuard;


/***/ }),

/***/ "./src/app/services/alert.service.ts":
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
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var Subject_1 = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new Subject_1.Subject();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationStart) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
        this.dismissEvent();
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
        this.dismissEvent();
    };
    AlertService.prototype.dismissEvent = function () {
        var _that = this;
        setTimeout(function () {
            _that.subject.next(false);
        }, 5000);
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.Router])
    ], AlertService);
    return AlertService;
}());
exports.AlertService = AlertService;


/***/ }),

/***/ "./src/app/services/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/app/services/alert.service.ts"));


/***/ }),

/***/ "./src/app/views/login/components/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper fadeInDown\" *ngIf=\"!signUpForm\">\r\n    <div id=\"formContent\">\r\n      <div class=\"fadeIn first\">\r\n        <img src=\"assets/Pariksha_Logo.jpg\" id=\"icon\" alt=\"Company Icon\" />\r\n      </div>\r\n      <form name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\r\n        <input type=\"email\" name=\"email\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\" [(ngModel)]=\"model.email\" #email=\"ngModel\" id=\"login\" [ngClass]=\"{ 'has-error': f.submitted && !email.valid }\" class=\"fadeIn second\" placeholder=\"Username\" required />\r\n        <span *ngIf=\"!email.valid && f.submitted\" class=\"error-message\">Please enter a valid email address</span>\r\n        <input type=\"password\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" id=\"password\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\" class=\"fadeIn third\" placeholder=\"Password\" required />\r\n        <span *ngIf=\"!password.valid && f.submitted\" class=\"error-message\">Please enter a password</span>\r\n        <input type=\"submit\" class=\"fadeIn fourth\" value=\"Log In\">\r\n      </form>\r\n        <div id=\"formFooter\">\r\n          <a class=\"underlineHover\" (click)=\"signUp(true)\">Sign Up</a>\r\n        </div>\r\n      </div>\r\n</div>\r\n    <div class=\"wrapper fadeInDown\" *ngIf=\"signUpForm\">\r\n      <div id=\"formContent\">\r\n        <div class=\"fadeIn first\">\r\n          <img src=\"assets/Pariksha_Logo.jpg\" id=\"icon\" alt=\"Company Icon\" />\r\n        </div>\r\n        <form name=\"form\" (ngSubmit)=\"f.form.valid && signUpUser()\" #f=\"ngForm\" novalidate>\r\n          <input type=\"text\" name=\"username\" [(ngModel)]=\"model.userName\" #username=\"ngModel\" id=\"username\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\" class=\"fadeIn second\" placeholder=\"Username\" required />\r\n          <span *ngIf=\"!username.valid && f.submitted\" class=\"error-message\">Please enter a user name</span>\r\n          <input type=\"email\" name=\"email\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\" [(ngModel)]=\"model.email\" #email=\"ngModel\" id=\"login\" [ngClass]=\"{ 'has-error': f.submitted && !email.valid }\" class=\"fadeIn second\" placeholder=\"Email\" required />\r\n          <span *ngIf=\"!email.valid && f.submitted\" class=\"error-message\">Please enter a valid email address</span>\r\n          <input type=\"password\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" id=\"password\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\" class=\"fadeIn third\" placeholder=\"Password\" required />\r\n          <span *ngIf=\"!password.valid && f.submitted\" class=\"error-message\">Please enter a password</span>\r\n          <input type=\"submit\" class=\"fadeIn fourth\" value=\"Sign Up\">\r\n          </form>\r\n          <div id=\"formFooter\">\r\n            <a class=\"underlineHover\" (click)=\"signUp(false)\">Cancel</a>\r\n          </div>\r\n        </div>\r\n      </div>"

/***/ }),

/***/ "./src/app/views/login/components/login.component.scss":
/***/ (function(module, exports) {

module.exports = "html {\n  background-color: #56baed; }\n\nbody {\n  font-family: \"Poppins\", sans-serif;\n  height: 100vh; }\n\na {\n  color: #00c7e9;\n  display: inline-block;\n  text-decoration: none;\n  font-weight: 400;\n  cursor: pointer; }\n\n.wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 100%;\n  min-height: 100%;\n  padding: 20px; }\n\n#formContent {\n  border-radius: 10px 10px 10px 10px;\n  background: #fff;\n  padding: 30px;\n  width: 90%;\n  max-width: 450px;\n  position: relative;\n  margin-top: 35px;\n  -webkit-box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);\n  box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);\n  text-align: center; }\n\n#formFooter {\n  padding: 15px;\n  text-align: center;\n  border-radius: 0 0 10px 10px; }\n\ninput[type=button], input[type=submit], input[type=reset] {\n  background-color: #17db1d !important;\n  border: none;\n  color: white;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  width: 52%;\n  text-transform: uppercase;\n  font-size: 13px;\n  -webkit-box-shadow: 0 10px 30px 0 rgba(95, 186, 233, 0.4);\n  box-shadow: 0 10px 30px 0 rgba(142, 233, 95, 0.4);\n  margin: 20px 20px 30px 20px;\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out; }\n\ninput[type=button]:hover, input[type=submit]:hover, input[type=reset]:hover {\n  background-color: #0be812 !important; }\n\ninput[type=button]:active, input[type=submit]:active, input[type=reset]:active {\n  -webkit-transform: scale(0.95);\n  transform: scale(0.95); }\n\ninput {\n  background-color: #f6f6f6;\n  border: none;\n  color: #0d0d0d;\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 5px;\n  width: 85%;\n  border: 2px solid #f6f6f6;\n  -webkit-transition: all 0.5s ease-in-out;\n  transition: all 0.5s ease-in-out;\n  border-radius: 50px; }\n\ninput:focus {\n  border: solid 1px #56ed5b; }\n\ninput[type=text]:placeholder {\n  color: #cccccc; }\n\n.fadeInDown {\n  -webkit-animation-name: fadeIn;\n  animation-name: fadeIn;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both; }\n\n@-webkit-keyframes fadeIn {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@keyframes fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n.fadeIn {\n  opacity: 0;\n  -webkit-animation: fadeIn ease-in 1;\n  animation: fadeIn ease-in 1;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s; }\n\n.fadeIn.first {\n  -webkit-animation-delay: 0.4s;\n  animation-delay: 0.4s; }\n\n.fadeIn.second {\n  -webkit-animation-delay: 0.6s;\n  animation-delay: 0.6s; }\n\n.fadeIn.third {\n  -webkit-animation-delay: 0.8s;\n  animation-delay: 0.8s; }\n\n.fadeIn.fourth {\n  -webkit-animation-delay: 1s;\n  animation-delay: 1s;\n  cursor: pointer; }\n\n.underlineHover:after {\n  display: block;\n  left: 0;\n  bottom: -10px;\n  width: 0;\n  height: 2px;\n  background-color: #56baed;\n  content: \"\";\n  -webkit-transition: width 0.2s;\n  transition: width 0.2s; }\n\n.underlineHover:hover {\n  color: #0d0d0d; }\n\n.underlineHover:hover:after {\n  width: 100%;\n  background-color: #56ed5b; }\n\nh1 {\n  color: #39ace7; }\n\n*:focus {\n  outline: none; }\n\n#icon {\n  width: 69%;\n  margin: 40px 0px 0px px; }\n"

/***/ }),

/***/ "./src/app/views/login/components/login.component.ts":
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
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var rxjs_1 = __webpack_require__("./node_modules/rxjs/Rx.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/takeUntil.js");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(_router) {
        this._router = _router;
        this.model = {};
        this.ngUnsubscriber = new rxjs_1.Subject();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        localStorage.setItem('currentUser', JSON.stringify(this.model.userName));
        localStorage.setItem('currentUserToken', JSON.stringify("DFFFFF34563435663HHH"));
        window.localStorage.setItem('environmentReady', "1");
        this._router.navigate(['/home']);
    };
    LoginComponent.prototype.signUp = function (pValue) {
        this.signUpForm = pValue;
    };
    LoginComponent.prototype.signUpUser = function () {
        this.login();
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        this.ngUnsubscriber.next();
        this.ngUnsubscriber.complete();
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            template: __webpack_require__("./src/app/views/login/components/login.component.html"),
            styles: [__webpack_require__("./src/app/views/login/components/login.component.scss")]
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;


/***/ }),

/***/ "./src/app/views/login/login.module.ts":
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
var login_component_1 = __webpack_require__("./src/app/views/login/components/login.component.ts");
var login_routing_module_1 = __webpack_require__("./src/app/views/login/login.routing.module.ts");
var user_services_1 = __webpack_require__("./src/app/views/login/state/user.services.ts");
var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                login_routing_module_1.LoginRoutingModule
            ],
            declarations: [
                login_component_1.LoginComponent
            ],
            providers: [
                user_services_1.UserService
            ]
        })
    ], LoginModule);
    return LoginModule;
}());
exports.LoginModule = LoginModule;


/***/ }),

/***/ "./src/app/views/login/login.routing.module.ts":
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
var login_component_1 = __webpack_require__("./src/app/views/login/components/login.component.ts");
var loginRoutes = [
    {
        path: 'login',
        component: login_component_1.LoginComponent,
    }
];
var LoginRoutingModule = /** @class */ (function () {
    function LoginRoutingModule() {
    }
    LoginRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(loginRoutes)],
            exports: [router_1.RouterModule]
        })
    ], LoginRoutingModule);
    return LoginRoutingModule;
}());
exports.LoginRoutingModule = LoginRoutingModule;


/***/ }),

/***/ "./src/app/views/login/state/user.services.ts":
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
__webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.loginUser = function (pData) {
        // return this.http.post("https://client:60621/login", pData)
        // .map(data => data.json());
    };
    UserService.prototype.headers = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return new http_1.RequestOptions({ headers: headers, withCredentials: true });
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
__webpack_require__("./src/polyfills.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/polyfills.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/guide/browser-support
 */
Object.defineProperty(exports, "__esModule", { value: true });
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE9, IE10, IE11, and Chrome <55 requires all of the following polyfills.
 *  This also includes Android Emulators with older versions of Chrome and Google Search/Googlebot
 */
__webpack_require__("./node_modules/core-js/es6/symbol.js");
__webpack_require__("./node_modules/core-js/es6/object.js");
__webpack_require__("./node_modules/core-js/es6/function.js");
__webpack_require__("./node_modules/core-js/es6/parse-int.js");
__webpack_require__("./node_modules/core-js/es6/parse-float.js");
__webpack_require__("./node_modules/core-js/es6/number.js");
__webpack_require__("./node_modules/core-js/es6/math.js");
__webpack_require__("./node_modules/core-js/es6/string.js");
__webpack_require__("./node_modules/core-js/es6/date.js");
__webpack_require__("./node_modules/core-js/es6/array.js");
__webpack_require__("./node_modules/core-js/es6/regexp.js");
__webpack_require__("./node_modules/core-js/es6/map.js");
__webpack_require__("./node_modules/core-js/es6/weak-map.js");
__webpack_require__("./node_modules/core-js/es6/set.js");
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/** IE10 and IE11 requires the following for the Reflect API. */
__webpack_require__("./node_modules/core-js/es6/reflect.js");
__webpack_require__("./node_modules/core-js/es7/reflect.js");
/**
 * Web Animations `@angular/platform-browser/animations`
 * Only required if AnimationBuilder is used within the application and using IE/Edge or Safari.
 * Standard animation support in Angular DOES NOT require any polyfills (as of Angular 6.0).
 */
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/**
 * By default, zone.js will patch all possible macroTask and DomEvents
 * user can disable parts of macroTask/DomEvents patch by setting following flags
 * because those flags need to be set before `zone.js` being loaded, and webpack
 * will put import in the top of bundle, so user need to create a separate file
 * in this directory (for example: zone-flags.ts), and put the following flags
 * into that file, and then add the following code before importing zone.js.
 * import './zone-flags.ts';
 *
 * The flags allowed in zone-flags.ts are listed here.
 *
 * The following flags will work for all browsers.
 *
 * (window as any).__Zone_disable_requestAnimationFrame = true; // disable patch requestAnimationFrame
 * (window as any).__Zone_disable_on_property = true; // disable patch onProperty such as onclick
 * (window as any).__zone_symbol__BLACK_LISTED_EVENTS = ['scroll', 'mousemove']; // disable patch specified eventNames
 *
 *  in IE/Edge developer tools, the addEventListener will also be wrapped by zone.js
 *  with the following flag, it will bypass `zone.js` patch for IE/Edge
 *
 *  (window as any).__Zone_enable_cross_context_check = true;
 *
 */
/***************************************************************************************************
 * Zone JS is required by default for Angular itself.
 */
__webpack_require__("./node_modules/zone.js/dist/zone.js"); // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map