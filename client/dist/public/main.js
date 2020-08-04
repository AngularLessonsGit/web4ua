(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_html_html_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/html/html.component */ "./src/app/components/html/html.component.ts");
/* harmony import */ var _components_css_css_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/css/css.component */ "./src/app/components/css/css.component.ts");
/* harmony import */ var _components_js_js_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/js/js.component */ "./src/app/components/js/js.component.ts");
/* harmony import */ var _components_add_post_add_post_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/add-post/add-post.component */ "./src/app/components/add-post/add-post.component.ts");








const routes = [
    { path: '', component: _components_html_html_component__WEBPACK_IMPORTED_MODULE_2__["HtmlComponent"] },
    { path: 'css', component: _components_css_css_component__WEBPACK_IMPORTED_MODULE_3__["CssComponent"] },
    { path: 'js', component: _components_js_js_component__WEBPACK_IMPORTED_MODULE_4__["JsComponent"] },
    { path: 'add', component: _components_add_post_add_post_component__WEBPACK_IMPORTED_MODULE_5__["AddPostComponent"] },
    { path: '**', component: _components_html_html_component__WEBPACK_IMPORTED_MODULE_2__["HtmlComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/navigation/navigation.component */ "./src/app/components/navigation/navigation.component.ts");
/* harmony import */ var _components_auth_auth_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/auth/auth.component */ "./src/app/components/auth/auth.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-auth");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
    } }, directives: [_components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__["NavigationComponent"], _components_auth_auth_component__WEBPACK_IMPORTED_MODULE_2__["AuthComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.effects.ts":
/*!********************************!*\
  !*** ./src/app/app.effects.ts ***!
  \********************************/
/*! exports provided: AppEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppEffects", function() { return AppEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _reducers_auth_auth_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducers/auth/auth.actions */ "./src/app/reducers/auth/auth.actions.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/modal/modal.component */ "./src/app/components/modal/modal.component.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_error_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/error.service */ "./src/app/services/error.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/local-storage.service */ "./src/app/services/local-storage.service.ts");













class AppEffects {
    constructor(actions$, userService, errorService, modalService, localStorageService) {
        this.actions$ = actions$;
        this.userService = userService;
        this.errorService = errorService;
        this.modalService = modalService;
        this.localStorageService = localStorageService;
    }
    login$() {
        return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_reducers_auth_auth_actions__WEBPACK_IMPORTED_MODULE_4__["authActionsType"].login), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((action) => this.userService.fetchUser(action.payload)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(res => {
            const modalRef = this.modalService.open(_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_6__["ModalComponent"], { backdrop: false });
            if (res.message) {
                modalRef.componentInstance.message = `${res.message}`;
                return [new _reducers_auth_auth_actions__WEBPACK_IMPORTED_MODULE_4__["AuthLoginErrorAction"]()];
            }
            else {
                modalRef.componentInstance.message = `Вітаємо дома ${res.user.userName}`;
                this.localStorageService.setItem('login', res.user.userName);
                this.localStorageService.setItem('password', res.user.userPwd);
                this.localStorageService.setItem('isAdmin', `${!!res.user.isAdmin}`);
                return [
                    new _reducers_auth_auth_actions__WEBPACK_IMPORTED_MODULE_4__["AuthLoginSuccessAction"](res.user),
                    new _reducers_auth_auth_actions__WEBPACK_IMPORTED_MODULE_4__["AuthFormResetAction"](),
                    new _reducers_auth_auth_actions__WEBPACK_IMPORTED_MODULE_4__["AuthHideAction"]()
                ];
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(this.errorService.handleError(err))));
    }
    remind$() {
        return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_reducers_auth_auth_actions__WEBPACK_IMPORTED_MODULE_4__["authActionsType"].remindPwd), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((action) => this.userService.remind(action.payload)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            const modalRef = this.modalService.open(_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_6__["ModalComponent"], { backdrop: false });
            modalRef.componentInstance.message = res.message;
            return new _reducers_auth_auth_actions__WEBPACK_IMPORTED_MODULE_4__["AuthRemindPwdSuccessAction"]();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(this.errorService.handleError(err))));
    }
    register$() {
        return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_reducers_auth_auth_actions__WEBPACK_IMPORTED_MODULE_4__["authActionsType"].register), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((action) => this.userService.register(action.payload)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            const modalRef = this.modalService.open(_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_6__["ModalComponent"], { backdrop: false });
            modalRef.componentInstance.message = res.message;
            if (res.success) {
                return new _reducers_auth_auth_actions__WEBPACK_IMPORTED_MODULE_4__["AuthOpenLoginPageAction"]();
            }
            else {
                return new _reducers_auth_auth_actions__WEBPACK_IMPORTED_MODULE_4__["AuthRegisterUserErrorAction"]();
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(this.errorService.handleError(err))));
    }
    exit$() {
        return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_reducers_auth_auth_actions__WEBPACK_IMPORTED_MODULE_4__["authActionsType"].exit), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(() => {
            const modalRef = this.modalService.open(_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_6__["ModalComponent"], { backdrop: false });
            modalRef.componentInstance.message = `Ви впевнені, що хочете вийти?`;
            modalRef.componentInstance.isConfirmModal = true;
            return modalRef.result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((result) => {
            if (result) {
                this.localStorageService.removeItem('login');
                this.localStorageService.removeItem('password');
                this.localStorageService.removeItem('isAdmin');
                return new _reducers_auth_auth_actions__WEBPACK_IMPORTED_MODULE_4__["AuthExitSuccessAction"]();
            }
            else {
                return new _reducers_auth_auth_actions__WEBPACK_IMPORTED_MODULE_4__["AuthExitCancelAction"]();
            }
        }));
    }
}
AppEffects.ɵfac = function AppEffects_Factory(t) { return new (t || AppEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_error_service__WEBPACK_IMPORTED_MODULE_8__["ErrorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_local_storage_service__WEBPACK_IMPORTED_MODULE_10__["LocalStorageService"])); };
AppEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AppEffects, factory: AppEffects.ɵfac });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], AppEffects.prototype, "login$", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], AppEffects.prototype, "remind$", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], AppEffects.prototype, "register$", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], AppEffects.prototype, "exit$", null);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] }, { type: _services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] }, { type: _services_error_service__WEBPACK_IMPORTED_MODULE_8__["ErrorService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModal"] }, { type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_10__["LocalStorageService"] }]; }, { login$: [], remind$: [], register$: [], exit$: [] }); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/__ivy_ngcc__/fesm2015/store-devtools.js");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/router-store */ "./node_modules/@ngrx/router-store/__ivy_ngcc__/fesm2015/router-store.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_auth_auth_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/auth/auth.component */ "./src/app/components/auth/auth.component.ts");
/* harmony import */ var _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/navigation/navigation.component */ "./src/app/components/navigation/navigation.component.ts");
/* harmony import */ var _components_css_css_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/css/css.component */ "./src/app/components/css/css.component.ts");
/* harmony import */ var _components_html_html_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/html/html.component */ "./src/app/components/html/html.component.ts");
/* harmony import */ var _components_js_js_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/js/js.component */ "./src/app/components/js/js.component.ts");
/* harmony import */ var _components_frontend_frontend_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/frontend/frontend.component */ "./src/app/components/frontend/frontend.component.ts");
/* harmony import */ var _components_backend_backend_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/backend/backend.component */ "./src/app/components/backend/backend.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./reducers */ "./src/app/reducers/index.ts");
/* harmony import */ var _app_effects__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./app.effects */ "./src/app/app.effects.ts");
/* harmony import */ var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/modal/modal.component */ "./src/app/components/modal/modal.component.ts");
/* harmony import */ var _directives_mousedown_stop_directive__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./directives/mousedown-stop.directive */ "./src/app/directives/mousedown-stop.directive.ts");
/* harmony import */ var _directives_autofocus_directive__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./directives/autofocus.directive */ "./src/app/directives/autofocus.directive.ts");
/* harmony import */ var _components_add_post_add_post_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/add-post/add-post.component */ "./src/app/components/add-post/add-post.component.ts");






























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forRoot(_reducers__WEBPACK_IMPORTED_MODULE_19__["reducers"], {
                metaReducers: _reducers__WEBPACK_IMPORTED_MODULE_19__["metaReducers"],
                runtimeChecks: {
                    strictStateImmutability: true,
                    strictActionImmutability: true,
                }
            }),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__["StoreDevtoolsModule"].instrument({ maxAge: 25, logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].production }),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsModule"].forRoot([_app_effects__WEBPACK_IMPORTED_MODULE_20__["AppEffects"]]),
            _ngrx_router_store__WEBPACK_IMPORTED_MODULE_6__["StoreRouterConnectingModule"].forRoot(),
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
        _components_auth_auth_component__WEBPACK_IMPORTED_MODULE_11__["AuthComponent"],
        _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_12__["NavigationComponent"],
        _components_css_css_component__WEBPACK_IMPORTED_MODULE_13__["CssComponent"],
        _components_html_html_component__WEBPACK_IMPORTED_MODULE_14__["HtmlComponent"],
        _components_js_js_component__WEBPACK_IMPORTED_MODULE_15__["JsComponent"],
        _components_frontend_frontend_component__WEBPACK_IMPORTED_MODULE_16__["FrontendComponent"],
        _components_backend_backend_component__WEBPACK_IMPORTED_MODULE_17__["BackendComponent"],
        _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_21__["ModalComponent"],
        _directives_mousedown_stop_directive__WEBPACK_IMPORTED_MODULE_22__["MousedownStopDirective"],
        _directives_autofocus_directive__WEBPACK_IMPORTED_MODULE_23__["AutofocusDirective"],
        _components_add_post_add_post_component__WEBPACK_IMPORTED_MODULE_24__["AddPostComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__["StoreDevtoolsModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsRootModule"], _ngrx_router_store__WEBPACK_IMPORTED_MODULE_6__["StoreRouterConnectingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                    _components_auth_auth_component__WEBPACK_IMPORTED_MODULE_11__["AuthComponent"],
                    _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_12__["NavigationComponent"],
                    _components_css_css_component__WEBPACK_IMPORTED_MODULE_13__["CssComponent"],
                    _components_html_html_component__WEBPACK_IMPORTED_MODULE_14__["HtmlComponent"],
                    _components_js_js_component__WEBPACK_IMPORTED_MODULE_15__["JsComponent"],
                    _components_frontend_frontend_component__WEBPACK_IMPORTED_MODULE_16__["FrontendComponent"],
                    _components_backend_backend_component__WEBPACK_IMPORTED_MODULE_17__["BackendComponent"],
                    _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_21__["ModalComponent"],
                    _directives_mousedown_stop_directive__WEBPACK_IMPORTED_MODULE_22__["MousedownStopDirective"],
                    _directives_autofocus_directive__WEBPACK_IMPORTED_MODULE_23__["AutofocusDirective"],
                    _components_add_post_add_post_component__WEBPACK_IMPORTED_MODULE_24__["AddPostComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forRoot(_reducers__WEBPACK_IMPORTED_MODULE_19__["reducers"], {
                        metaReducers: _reducers__WEBPACK_IMPORTED_MODULE_19__["metaReducers"],
                        runtimeChecks: {
                            strictStateImmutability: true,
                            strictActionImmutability: true,
                        }
                    }),
                    _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__["StoreDevtoolsModule"].instrument({ maxAge: 25, logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].production }),
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsModule"].forRoot([_app_effects__WEBPACK_IMPORTED_MODULE_20__["AppEffects"]]),
                    _ngrx_router_store__WEBPACK_IMPORTED_MODULE_6__["StoreRouterConnectingModule"].forRoot(),
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
                ],
                providers: [],
                bootstrap: [
                    _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/add-post/add-post.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/add-post/add-post.component.ts ***!
  \***********************************************************/
/*! exports provided: AddPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPostComponent", function() { return AddPostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AddPostComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
AddPostComponent.ɵfac = function AddPostComponent_Factory(t) { return new (t || AddPostComponent)(); };
AddPostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddPostComponent, selectors: [["app-add-post"]], decls: 2, vars: 0, template: function AddPostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "add-post works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLXBvc3QvYWRkLXBvc3QuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddPostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-post',
                templateUrl: './add-post.component.html',
                styleUrls: ['./add-post.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/auth/auth.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/auth/auth.component.ts ***!
  \***************************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _reducers_auth_auth_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../reducers/auth/auth.selectors */ "./src/app/reducers/auth/auth.selectors.ts");
/* harmony import */ var _reducers_auth_auth_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../reducers/auth/auth.actions */ "./src/app/reducers/auth/auth.actions.ts");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modal/modal.component */ "./src/app/components/modal/modal.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _directives_mousedown_stop_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../directives/mousedown-stop.directive */ "./src/app/directives/mousedown-stop.directive.ts");












function AuthComponent_div_0_div_7_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041F\u0443\u0441\u0442\u0435 \u043F\u043E\u043B\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AuthComponent_div_0_div_7_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041C\u0456\u043D\u0456\u043C\u0443\u043C 3 \u0441\u0438\u043C\u0432\u043E\u043B\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AuthComponent_div_0_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AuthComponent_div_0_div_7_span_1_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AuthComponent_div_0_div_7_span_2_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.form.get("userName").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.form.get("userName").errors.minlength);
} }
function AuthComponent_div_0_div_8_div_2_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041F\u0443\u0441\u0442\u0435 \u043F\u043E\u043B\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AuthComponent_div_0_div_8_div_2_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041C\u0456\u043D\u0456\u043C\u0443\u043C 3 \u0441\u0438\u043C\u0432\u043E\u043B\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AuthComponent_div_0_div_8_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AuthComponent_div_0_div_8_div_2_span_1_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AuthComponent_div_0_div_8_div_2_span_2_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.form.get("password").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.form.get("password").errors.minlength);
} }
function AuthComponent_div_0_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AuthComponent_div_0_div_8_div_2_Template, 3, 2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.form.get("password").invalid && (ctx_r2.form.get("password").touched || ctx_r2.form.get("password").dirty));
} }
function AuthComponent_div_0_div_9_div_2_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041F\u0443\u0441\u0442\u0435 \u043F\u043E\u043B\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AuthComponent_div_0_div_9_div_2_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041C\u0456\u043D\u0456\u043C\u0443\u043C 3 \u0441\u0438\u043C\u0432\u043E\u043B\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AuthComponent_div_0_div_9_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AuthComponent_div_0_div_9_div_2_span_1_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AuthComponent_div_0_div_9_div_2_span_2_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.form.get("confirmPassword").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.form.get("confirmPassword").errors.minlength);
} }
function AuthComponent_div_0_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AuthComponent_div_0_div_9_div_2_Template, 3, 2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.form.get("confirmPassword").invalid && (ctx_r3.form.get("confirmPassword").touched || ctx_r3.form.get("confirmPassword").dirty));
} }
function AuthComponent_div_0_div_10_div_2_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041F\u0443\u0441\u0442\u0435 \u043F\u043E\u043B\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AuthComponent_div_0_div_10_div_2_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041C\u0456\u043D\u0456\u043C\u0443\u043C 3 \u0441\u0438\u043C\u0432\u043E\u043B\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AuthComponent_div_0_div_10_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AuthComponent_div_0_div_10_div_2_span_1_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AuthComponent_div_0_div_10_div_2_span_2_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.form.get("keyword").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.form.get("keyword").errors.minlength);
} }
function AuthComponent_div_0_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AuthComponent_div_0_div_10_div_2_Template, 3, 2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.form.get("keyword").invalid && (ctx_r4.form.get("keyword").touched || ctx_r4.form.get("keyword").dirty));
} }
function AuthComponent_div_0_span_12_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthComponent_div_0_span_12_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r19.openRemindPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.loginTabs.remind.name);
} }
function AuthComponent_div_0_span_13_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthComponent_div_0_span_13_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r21.openRegisterPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.loginTabs.register.name);
} }
function AuthComponent_div_0_span_14_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthComponent_div_0_span_14_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r23.openLoginPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.loginTabs.login.name);
} }
function AuthComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function AuthComponent_div_0_Template_div_mousedown_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AuthComponent_div_0_Template_form_ngSubmit_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.submit(); })("keydown.enter", function AuthComponent_div_0_Template_form_keydown_enter_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.submit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AuthComponent_div_0_div_7_Template, 3, 2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AuthComponent_div_0_div_8_Template, 3, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AuthComponent_div_0_div_9_Template, 3, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AuthComponent_div_0_div_10_Template, 3, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AuthComponent_div_0_span_12_Template, 2, 1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AuthComponent_div_0_span_13_Template, 2, 1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AuthComponent_div_0_span_14_Template, 2, 1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.currentTab.tab.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.form.get("userName").invalid && (ctx_r0.form.get("userName").touched || ctx_r0.form.get("userName").dirty));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isActive(ctx_r0.loginTabs.login) || ctx_r0.isActive(ctx_r0.loginTabs.register));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isActive(ctx_r0.loginTabs.register));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isActive(ctx_r0.loginTabs.register) || ctx_r0.isActive(ctx_r0.loginTabs.remind));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isActive(ctx_r0.loginTabs.login) || ctx_r0.isActive(ctx_r0.loginTabs.register));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isActive(ctx_r0.loginTabs.login) || ctx_r0.isActive(ctx_r0.loginTabs.remind));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isActive(ctx_r0.loginTabs.register) || ctx_r0.isActive(ctx_r0.loginTabs.remind));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.currentTab.tab.button);
} }
class AuthComponent {
    constructor(store$, modalService) {
        this.store$ = store$;
        this.modalService = modalService;
        this.isShowAuth$ = this.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_reducers_auth_auth_selectors__WEBPACK_IMPORTED_MODULE_3__["selectIsShowAuth"]));
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({});
        this.loginTabs = {
            login: {
                id: 1,
                name: 'Авторизація',
                button: 'Увійти'
            },
            register: {
                id: 2,
                name: 'Реєстрація',
                button: 'Зареєструватись'
            },
            remind: {
                id: 3,
                name: 'Забули пароль',
                button: 'Надіслати'
            }
        };
        this.currentTab = {
            tab: this.loginTabs.login
        };
    }
    ngOnInit() {
        this.open(this.loginTabs.login);
        this.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_reducers_auth_auth_selectors__WEBPACK_IMPORTED_MODULE_3__["selectIsShowAuth"]))
            .subscribe((status) => {
            if (status) {
                this.form.reset();
                this.currentTab.tab = this.loginTabs.login;
                this.store$.dispatch(new _reducers_auth_auth_actions__WEBPACK_IMPORTED_MODULE_4__["AuthFormResetSuccessAction"]());
            }
        });
        this.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_reducers_auth_auth_selectors__WEBPACK_IMPORTED_MODULE_3__["selectAuthPages"]))
            .subscribe((page) => this.open(this.loginTabs[page]));
    }
    isActive(tab) {
        if (!tab) {
            return;
        }
        return this.currentTab.tab === tab;
    }
    open(tab) {
        if (!tab) {
            return;
        }
        this.currentTab.tab = tab;
        this.form.reset();
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', this.currentTab.tab === this.loginTabs.login ||
                this.currentTab.tab === this.loginTabs.register ? [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] : null),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', this.currentTab.tab === this.loginTabs.register ?
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] : null),
            keyword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', this.currentTab.tab === this.loginTabs.register ||
                this.currentTab.tab === this.loginTabs.remind ? [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] : null)
        });
    }
    submit() {
        if (!this.form.valid) {
            const modalRef = this.modalService.open(_modal_modal_component__WEBPACK_IMPORTED_MODULE_5__["ModalComponent"], { backdrop: false });
            modalRef.componentInstance.message = 'Форма заповнена невірно';
            return modalRef;
        }
        switch (this.currentTab.tab) {
            case this.loginTabs.login:
                return this.login();
            case this.loginTabs.register:
                return this.register();
            case this.loginTabs.remind:
                return this.remind();
        }
    }
    login() {
        this.store$.dispatch(new _reducers_auth_auth_actions__WEBPACK_IMPORTED_MODULE_4__["AuthLoginAction"]({
            userName: this.form.get('userName').value,
            userPwd: this.form.get('password').value,
        }));
    }
    register() {
        if (this.form.get('password').value !== this.form.get('confirmPassword').value) {
            const modalRef = this.modalService.open(_modal_modal_component__WEBPACK_IMPORTED_MODULE_5__["ModalComponent"], { backdrop: false });
            modalRef.componentInstance.message = 'Паролі не співпадають';
            return;
        }
        this.store$.dispatch(new _reducers_auth_auth_actions__WEBPACK_IMPORTED_MODULE_4__["AuthRegisterUserAction"]({
            userName: this.form.get('userName').value,
            userPwd: this.form.get('password').value,
            keyword: this.form.get('keyword').value,
        }));
    }
    remind() {
        this.store$.dispatch(new _reducers_auth_auth_actions__WEBPACK_IMPORTED_MODULE_4__["AuthRemindPwdAction"]({
            userName: this.form.get('userName').value,
            keyword: this.form.get('keyword').value,
        }));
    }
    hide() {
        this.store$.dispatch(new _reducers_auth_auth_actions__WEBPACK_IMPORTED_MODULE_4__["AuthHideAction"]());
        this.form.reset();
    }
    openLoginPage() {
        this.store$.dispatch(new _reducers_auth_auth_actions__WEBPACK_IMPORTED_MODULE_4__["AuthOpenLoginPageAction"]());
    }
    openRemindPage() {
        this.store$.dispatch(new _reducers_auth_auth_actions__WEBPACK_IMPORTED_MODULE_4__["AuthOpenRemindPageAction"]());
    }
    openRegisterPage() {
        this.store$.dispatch(new _reducers_auth_auth_actions__WEBPACK_IMPORTED_MODULE_4__["AuthOpenRegisterPageAction"]());
    }
}
AuthComponent.ɵfac = function AuthComponent_Factory(t) { return new (t || AuthComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"])); };
AuthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthComponent, selectors: [["app-auth"]], decls: 2, vars: 3, consts: [["class", "auth-container", "tabindex", "0", 3, "mousedown", 4, "ngIf"], ["tabindex", "0", 1, "auth-container", 3, "mousedown"], ["appMousedownStop", "", 1, "form"], [1, "header"], [1, "body"], [3, "formGroup", "ngSubmit", "keydown.enter"], ["type", "text", "placeholder", "\u0456\u043C'\u044F", "formControlName", "userName", "autocomplete", "off", 1, "inputs"], ["class", "validate", 4, "ngIf"], ["class", "grid", 4, "ngIf"], [1, "navi-buttons"], ["class", "func-text", 3, "click", 4, "ngIf"], ["type", "submit"], [1, "validate"], ["class", "error-text", 4, "ngIf"], [1, "error-text"], [1, "grid"], ["type", "password", "placeholder", "\u043F\u0430\u0440\u043E\u043B\u044C", "formControlName", "password", "autocomplete", "off", 1, "inputs"], ["type", "password", "placeholder", "\u043F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0436\u0435\u043D\u043D\u044F \u043F\u0430\u0440\u043E\u043B\u044F", "formControlName", "confirmPassword", "autocomplete", "off", 1, "inputs"], ["type", "text", "placeholder", "\u0441\u043B\u043E\u0432\u043E-\u043A\u043B\u044E\u0447", "formControlName", "keyword", "autocomplete", "off", 1, "inputs"], [1, "func-text", 3, "click"]], template: function AuthComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AuthComponent_div_0_Template, 17, 10, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.isShowAuth$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _directives_mousedown_stop_directive__WEBPACK_IMPORTED_MODULE_8__["MousedownStopDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: [".auth-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: -50px;\n  position: absolute;\n  z-index: 3;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n.form[_ngcontent-%COMP%] {\n  height: 360px;\n  max-width: 400px;\n  width: 90%;\n}\n\n.header[_ngcontent-%COMP%] {\n  height: 50px;\n  border: 1px solid #191919;\n  border-bottom: 1px solid black;\n  border-radius: 5px 5px 0 0;\n  background-image: linear-gradient(#2a2a2a, #131313);\n  font-size: 17px;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-shadow: 0px 2px 1px black;\n  box-shadow: 0px 0px 6px 2px rgba(0, 0, 0, 0.75);\n}\n\n.body[_ngcontent-%COMP%] {\n  border: 1px solid #191919;\n  border-radius: 0 0 5px 5px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 30px 15px 20px 15px;\n  background-color: #111111;\n  box-shadow: 0px 3px 6px 2px rgba(0, 0, 0, 0.75);\n}\n\n.inputs[_ngcontent-%COMP%] {\n  height: 40px;\n  margin-bottom: 30px;\n  background-color: #080808;\n}\n\n.navi-buttons[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.func-text[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  text-decoration: underline;\n  font-size: 13px;\n  cursor: pointer;\n}\n\n.func-text[_ngcontent-%COMP%]:hover {\n  color: #8e9cc3;\n}\n\n.func-text[_ngcontent-%COMP%]:nth-child(2) {\n  margin-right: auto;\n}\n\ninput[type=button][_ngcontent-%COMP%]:active, button[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.validate[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin-top: -24px;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hdXRoL2F1dGguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxvQ0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQkFBQTtFQUNBLG1EQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSw4QkFBQTtFQUdBLCtDQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0VBR0EsK0NBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRjs7QUFHQTtFQUNFLGtCQUFBO0FBQUY7O0FBR0E7O0VBRUUsWUFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFBRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXV0aC9hdXRoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF1dGgtY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAtNTBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbn1cclxuXHJcbi5mb3JtIHtcclxuICBoZWlnaHQ6IDM2MHB4O1xyXG4gIG1heC13aWR0aDogNDAwcHg7XHJcbiAgd2lkdGg6IDkwJTtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMxOTE5MTk7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjMmEyYTJhLCAjMTMxMzEzKTtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC1zaGFkb3c6IDBweCAycHggMXB4IGJsYWNrO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCA2cHggMnB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDZweCAycHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDZweCAycHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxufVxyXG5cclxuLmJvZHkge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMxOTE5MTk7XHJcbiAgYm9yZGVyLXJhZGl1czogMCAwIDVweCA1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMzBweCAxNXB4IDIwcHggMTVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExMTExO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDNweCA2cHggMnB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggM3B4IDZweCAycHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAycHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxufVxyXG5cclxuLmlucHV0cyB7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4MDgwODtcclxufVxyXG5cclxuLm5hdmktYnV0dG9ucyB7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5mdW5jLXRleHQge1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZnVuYy10ZXh0OmhvdmVyIHtcclxuICBjb2xvcjogIzhlOWNjMztcclxuXHJcbn1cclxuXHJcbi5mdW5jLXRleHQ6bnRoLWNoaWxkKDIpIHtcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJidXR0b25cIl06YWN0aXZlLFxyXG5idXR0b24ge1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLnZhbGlkYXRlIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbWFyZ2luLXRvcDogLTI0cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-auth',
                templateUrl: './auth.component.html',
                styleUrls: ['./auth.component.scss']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/backend/backend.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/backend/backend.component.ts ***!
  \*********************************************************/
/*! exports provided: BackendComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackendComponent", function() { return BackendComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class BackendComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
BackendComponent.ɵfac = function BackendComponent_Factory(t) { return new (t || BackendComponent)(); };
BackendComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BackendComponent, selectors: [["app-backend"]], decls: 2, vars: 0, template: function BackendComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "backend works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmFja2VuZC9iYWNrZW5kLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BackendComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-backend',
                templateUrl: './backend.component.html',
                styleUrls: ['./backend.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/css/css.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/css/css.component.ts ***!
  \*************************************************/
/*! exports provided: CssComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CssComponent", function() { return CssComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CssComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
CssComponent.ɵfac = function CssComponent_Factory(t) { return new (t || CssComponent)(); };
CssComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CssComponent, selectors: [["app-css"]], decls: 2, vars: 0, template: function CssComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "css works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3NzL2Nzcy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CssComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-css',
                templateUrl: './css.component.html',
                styleUrls: ['./css.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/frontend/frontend.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/frontend/frontend.component.ts ***!
  \***********************************************************/
/*! exports provided: FrontendComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrontendComponent", function() { return FrontendComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FrontendComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
FrontendComponent.ɵfac = function FrontendComponent_Factory(t) { return new (t || FrontendComponent)(); };
FrontendComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FrontendComponent, selectors: [["app-frontend"]], decls: 2, vars: 0, template: function FrontendComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "frontend works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZnJvbnRlbmQvZnJvbnRlbmQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FrontendComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-frontend',
                templateUrl: './frontend.component.html',
                styleUrls: ['./frontend.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/html/html.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/html/html.component.ts ***!
  \***************************************************/
/*! exports provided: HtmlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HtmlComponent", function() { return HtmlComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HtmlComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
HtmlComponent.ɵfac = function HtmlComponent_Factory(t) { return new (t || HtmlComponent)(); };
HtmlComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HtmlComponent, selectors: [["app-html"]], decls: 2, vars: 0, template: function HtmlComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "html works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaHRtbC9odG1sLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HtmlComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-html',
                templateUrl: './html.component.html',
                styleUrls: ['./html.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/js/js.component.ts":
/*!***********************************************!*\
  !*** ./src/app/components/js/js.component.ts ***!
  \***********************************************/
/*! exports provided: JsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsComponent", function() { return JsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class JsComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
JsComponent.ɵfac = function JsComponent_Factory(t) { return new (t || JsComponent)(); };
JsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JsComponent, selectors: [["app-js"]], decls: 2, vars: 0, template: function JsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "js works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvanMvanMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-js',
                templateUrl: './js.component.html',
                styleUrls: ['./js.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/modal/modal.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/modal/modal.component.ts ***!
  \*****************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _directives_autofocus_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../directives/autofocus.directive */ "./src/app/directives/autofocus.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function ModalComponent_input_7_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_input_7_Template_input_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.cancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "modal-block-show": a0 }; };
const _c1 = function (a0) { return { "modal-two-buttons": a0 }; };
class ModalComponent {
    constructor(activeModal) {
        this.activeModal = activeModal;
        this.show = false;
    }
    ngOnInit() {
        this.show = true;
    }
    accept() {
        this.activeModal.close(true);
    }
    cancel() {
        this.activeModal.close(false);
    }
}
ModalComponent.ɵfac = function ModalComponent_Factory(t) { return new (t || ModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"])); };
ModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalComponent, selectors: [["app-modal"]], inputs: { message: "message", isConfirmModal: "isConfirmModal" }, decls: 8, vars: 8, consts: [["tabindex", "1", "appAutofocus", "", 1, "modal", 3, "keydown.enter"], [1, "modal-block", 3, "ngClass"], [1, "modal-body"], [1, "modal-buttons", 3, "ngClass"], ["type", "button", "value", "Ok", 3, "click"], ["type", "button", "value", "\u0421\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438", 3, "click", 4, "ngIf"], ["type", "button", "value", "\u0421\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438", 3, "click"]], template: function ModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.enter", function ModalComponent_Template_div_keydown_enter_0_listener() { return ctx.accept(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_Template_input_click_6_listener() { return ctx.accept(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ModalComponent_input_7_Template, 1, 0, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.show));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, ctx.isConfirmModal));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isConfirmModal);
    } }, directives: [_directives_autofocus_directive__WEBPACK_IMPORTED_MODULE_2__["AutofocusDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".modal[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n\n.modal-block[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 160px;\n  opacity: 0;\n  transition: 1s;\n  padding: 25px 15px 15px 15px;\n  border: 1px solid #191919;\n  border-radius: 0 0 5px 5px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: #111111;\n  box-shadow: 0 0 12px 6px rgba(0, 0, 0, 0.75);\n  color: #fcfcfc;\n}\n\n.modal-block[_ngcontent-%COMP%]   .modal-two-buttons[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n}\n\n.modal-block-show[_ngcontent-%COMP%] {\n  opacity: 1;\n  top: 130px;\n}\n\n.modal-body[_ngcontent-%COMP%] {\n  border: 1px solid #5d5d5d;\n  border-radius: 5px;\n  padding: 15px;\n  margin-bottom: 25px;\n}\n\n@media (max-width: 768px) {\n  .modal-block[_ngcontent-%COMP%] {\n    top: 20px;\n  }\n\n  .modal-block-show[_ngcontent-%COMP%] {\n    top: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb2RhbC9tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUdBLDRDQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUNFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQUNKOztBQUdBO0VBQ0UsVUFBQTtFQUNBLFVBQUE7QUFBRjs7QUFHQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFHQTtFQUNFO0lBQ0UsU0FBQTtFQUFGOztFQUdBO0lBQ0UsU0FBQTtFQUFGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21vZGFsL21vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ubW9kYWwtYmxvY2sge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDE2MHB4O1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdHJhbnNpdGlvbjogMXM7XHJcbiAgcGFkZGluZzogMjVweCAxNXB4IDE1cHggMTVweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMTkxOTE5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgMCA1cHggNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTExMTE7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMTJweCA2cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICAtbW96LWJveC1zaGFkb3c6IDAgMCAxMnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxMnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gIGNvbG9yOiAjZmNmY2ZjO1xyXG5cclxuICAubW9kYWwtdHdvLWJ1dHRvbnMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxufVxyXG5cclxuLm1vZGFsLWJsb2NrLXNob3cge1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgdG9wOiAxMzBweDtcclxufVxyXG5cclxuLm1vZGFsLWJvZHkge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM1ZDVkNWQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLm1vZGFsLWJsb2NrIHtcclxuICAgIHRvcDogMjBweDtcclxuICB9XHJcblxyXG4gIC5tb2RhbC1ibG9jay1zaG93IHtcclxuICAgIHRvcDogMTBweDtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-modal',
                templateUrl: './modal.component.html',
                styleUrls: ['./modal.component.scss']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"] }]; }, { message: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isConfirmModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/navigation/navigation.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.ts ***!
  \***************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _reducers_auth_auth_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../reducers/auth/auth.actions */ "./src/app/reducers/auth/auth.actions.ts");
/* harmony import */ var src_app_reducers_auth_auth_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/reducers/auth/auth.selectors */ "./src/app/reducers/auth/auth.selectors.ts");
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/local-storage.service */ "./src/app/services/local-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









function NavigationComponent_li_10_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_li_10_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.openAuth(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0410\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0456\u044F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["add"]; };
function NavigationComponent_li_12_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_li_12_div_4_div_1_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r6.showHideSubMenu = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0414\u043E\u0434\u0430\u0442\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
const _c1 = function () { return [""]; };
function NavigationComponent_li_12_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavigationComponent_li_12_div_4_div_1_Template, 3, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_li_12_div_4_Template_a_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.exit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0412\u0438\u0445\u0456\u0434");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx_r4.isAdmin$));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
} }
const _c2 = function (a0) { return { "menu-active": a0 }; };
function NavigationComponent_li_12_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_li_12_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.showHideSubMenu = !ctx_r10.showHideSubMenu; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NavigationComponent_li_12_div_4_Template, 6, 5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c2, ctx_r1.showHideSubMenu));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, ctx_r1.name$));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.showHideSubMenu);
} }
const _c3 = function () { return { exact: true }; };
const _c4 = function () { return ["css"]; };
const _c5 = function () { return ["js"]; };
class NavigationComponent {
    constructor(store$, localStorageService) {
        this.store$ = store$;
        this.localStorageService = localStorageService;
        this.name$ = this.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(src_app_reducers_auth_auth_selectors__WEBPACK_IMPORTED_MODULE_3__["selectUserName"]));
        this.isLogin$ = this.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(src_app_reducers_auth_auth_selectors__WEBPACK_IMPORTED_MODULE_3__["selectIsLogin"]));
        this.isAdmin$ = this.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(src_app_reducers_auth_auth_selectors__WEBPACK_IMPORTED_MODULE_3__["selectIsAdmin"]));
        this.showHideSubMenu = false;
    }
    ngOnInit() {
        if (this.localStorageService.getItem('login')) {
            const user = {
                userName: this.localStorageService.getItem('login'),
                userPwd: this.localStorageService.getItem('password'),
                isAdmin: !!this.localStorageService.getItem('isAdmin'),
            };
            this.store$.dispatch(new _reducers_auth_auth_actions__WEBPACK_IMPORTED_MODULE_2__["AuthLoginSuccessAction"](user));
        }
    }
    openAuth() {
        this.store$.dispatch(new _reducers_auth_auth_actions__WEBPACK_IMPORTED_MODULE_2__["AuthShowAction"]());
    }
    exit() {
        this.store$.dispatch(new _reducers_auth_auth_actions__WEBPACK_IMPORTED_MODULE_2__["AuthExitAction"]());
        this.showHideSubMenu = false;
    }
}
NavigationComponent.ɵfac = function NavigationComponent_Factory(t) { return new (t || NavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"])); };
NavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavigationComponent, selectors: [["app-navigation"]], decls: 14, vars: 14, consts: [["routerLinkActive", "menu-active", 3, "routerLink", "routerLinkActiveOptions"], ["routerLinkActive", "menu-active", 3, "routerLink"], [4, "ngIf"], ["class", "p-rel", 4, "ngIf"], [3, "click"], [1, "p-rel"], [3, "ngClass", "click"], ["class", "auth-menu", 4, "ngIf"], [1, "auth-menu"], ["class", "auth-menu-row", 4, "ngIf"], [1, "auth-menu-row"], [3, "routerLink", "click"], ["routerLinkActive", "menu-active", 3, "routerLink", "click"]], template: function NavigationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Css");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "JavaScript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NavigationComponent_li_10_Template, 3, 0, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, NavigationComponent_li_12_Template, 5, 7, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c1))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 6, ctx.isLogin$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 8, ctx.isLogin$));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: ["ul[_ngcontent-%COMP%] {\n  height: 50px;\n  display: flex;\n  padding: 0 0 0 50px;\n  margin: 0;\n  list-style-type: none;\n  background-image: linear-gradient(#2a2a2a, #131313);\n  text-shadow: 0 2px 1px black;\n  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.75);\n  position: relative;\n  z-index: 2;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 16px 15px 15px 15px;\n  cursor: pointer;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.menu-active[_ngcontent-%COMP%] {\n  color: #8e9cc3;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  margin: 0 50px 0 auto;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .auth-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  top: 51px;\n  width: 100%;\n  box-shadow: 0 5px 10px 2px rgba(0, 0, 0, 0.75);\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .auth-menu[_ngcontent-%COMP%]   .auth-menu-row[_ngcontent-%COMP%] {\n  height: 40px;\n  background-image: linear-gradient(#2a2a2a, #131313);\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .auth-menu[_ngcontent-%COMP%]   .auth-menu-row[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLHFCQUFBO0VBQ0EsbURBQUE7RUFDQSw0QkFBQTtFQUdBLDRDQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBQ0Y7QUFDRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFDSTtFQUNFLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0FBQ047QUFDTTtFQUNFLGNBQUE7QUFDUjtBQUdJO0VBQ0UscUJBQUE7QUFETjtBQUlJO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSw4Q0FBQTtBQUZOO0FBSU07RUFDRSxZQUFBO0VBQ0EsbURBQUE7QUFGUjtBQUlRO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUFGViIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWwge1xyXG4gIGhlaWdodDogNTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmc6IDAgMCAwIDUwcHg7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIzJhMmEyYSwgIzEzMTMxMyk7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMnB4IDFweCBibGFjaztcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAxMHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gIC1tb3otYm94LXNoYWRvdzogMCAwIDEwcHggMnB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggMnB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDI7XHJcblxyXG4gIGxpIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgYSB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgcGFkZGluZzogMTZweCAxNXB4IDE1cHggMTVweDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgJjpob3ZlciwgJi5tZW51LWFjdGl2ZSB7XHJcbiAgICAgICAgY29sb3I6ICM4ZTljYzM7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICBtYXJnaW46IDAgNTBweCAwIGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgLmF1dGgtbWVudSB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgei1pbmRleDogMTtcclxuICAgICAgdG9wOiA1MXB4O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgYm94LXNoYWRvdzogMCA1cHggMTBweCAycHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuXHJcbiAgICAgIC5hdXRoLW1lbnUtcm93IHtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCMyYTJhMmEsICMxMzEzMTMpO1xyXG5cclxuICAgICAgICBhIHtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navigation',
                templateUrl: './navigation.component.html',
                styleUrls: ['./navigation.component.scss']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }, { type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/directives/autofocus.directive.ts":
/*!***************************************************!*\
  !*** ./src/app/directives/autofocus.directive.ts ***!
  \***************************************************/
/*! exports provided: AutofocusDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutofocusDirective", function() { return AutofocusDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AutofocusDirective {
    constructor(el) {
        this.el = el;
    }
    ngOnInit() {
        if (this.autofocusRef || typeof this.autofocusRef === 'undefined') {
            this.el.nativeElement.focus();
        }
    }
    set autofocus(condition) {
        this.autofocusRef = condition !== false;
    }
}
AutofocusDirective.ɵfac = function AutofocusDirective_Factory(t) { return new (t || AutofocusDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
AutofocusDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: AutofocusDirective, selectors: [["", "appAutofocus", ""]], inputs: { autofocus: "autofocus" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AutofocusDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appAutofocus]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { autofocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/directives/mousedown-stop.directive.ts":
/*!********************************************************!*\
  !*** ./src/app/directives/mousedown-stop.directive.ts ***!
  \********************************************************/
/*! exports provided: MousedownStopDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MousedownStopDirective", function() { return MousedownStopDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class MousedownStopDirective {
    onClick(event) {
        event.stopPropagation();
    }
}
MousedownStopDirective.ɵfac = function MousedownStopDirective_Factory(t) { return new (t || MousedownStopDirective)(); };
MousedownStopDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MousedownStopDirective, selectors: [["", "appMousedownStop", ""]], hostBindings: function MousedownStopDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function MousedownStopDirective_mousedown_HostBindingHandler($event) { return ctx.onClick($event); });
    } } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MousedownStopDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appMousedownStop]'
            }]
    }], null, { onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mousedown', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/reducers/auth/auth.actions.ts":
/*!***********************************************!*\
  !*** ./src/app/reducers/auth/auth.actions.ts ***!
  \***********************************************/
/*! exports provided: authActionsType, authPages, AuthShowAction, AuthHideAction, AuthLoginAction, AuthLoginSuccessAction, AuthLoginErrorAction, AuthExitAction, AuthExitSuccessAction, AuthExitCancelAction, AuthFormResetAction, AuthFormResetSuccessAction, AuthRemindPwdAction, AuthRemindPwdSuccessAction, AuthRegisterUserAction, AuthRegisterUserErrorAction, AuthOpenLoginPageAction, AuthOpenRemindPageAction, AuthOpenRegisterPageAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authActionsType", function() { return authActionsType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authPages", function() { return authPages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthShowAction", function() { return AuthShowAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthHideAction", function() { return AuthHideAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLoginAction", function() { return AuthLoginAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLoginSuccessAction", function() { return AuthLoginSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLoginErrorAction", function() { return AuthLoginErrorAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthExitAction", function() { return AuthExitAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthExitSuccessAction", function() { return AuthExitSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthExitCancelAction", function() { return AuthExitCancelAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthFormResetAction", function() { return AuthFormResetAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthFormResetSuccessAction", function() { return AuthFormResetSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRemindPwdAction", function() { return AuthRemindPwdAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRemindPwdSuccessAction", function() { return AuthRemindPwdSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRegisterUserAction", function() { return AuthRegisterUserAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRegisterUserErrorAction", function() { return AuthRegisterUserErrorAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthOpenLoginPageAction", function() { return AuthOpenLoginPageAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthOpenRemindPageAction", function() { return AuthOpenRemindPageAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthOpenRegisterPageAction", function() { return AuthOpenRegisterPageAction; });
var authActionsType;
(function (authActionsType) {
    authActionsType["show"] = "[AUTH] show";
    authActionsType["hide"] = "[AUTH] hide";
    authActionsType["login"] = "[AUTH] log in";
    authActionsType["loginSuccess"] = "[AUTH] log in success";
    authActionsType["loginError"] = "[AUTH] log in error";
    authActionsType["exit"] = "[AUTH] exit";
    authActionsType["exitSuccess"] = "[AUTH] exit success";
    authActionsType["exitCancel"] = "[AUTH] exit cancel";
    authActionsType["remindPwd"] = "[AUTH] remind password";
    authActionsType["remindPwdSuccess"] = "[AUTH] remind password success";
    authActionsType["formReset"] = "[AUTH] form reset";
    authActionsType["formResetSuccess"] = "[AUTH] form reset success";
    authActionsType["register"] = "[AUTH] register user";
    authActionsType["registerSuccess"] = "[AUTH] register user success";
    authActionsType["openLoginPage"] = "[AUTH] open login page";
    authActionsType["openRemindPage"] = "[AUTH] open remind page";
    authActionsType["openRegisterPage"] = "[AUTH] open register page";
})(authActionsType || (authActionsType = {}));
var authPages;
(function (authPages) {
    authPages["login"] = "login";
    authPages["remind"] = "remind";
    authPages["register"] = "register";
})(authPages || (authPages = {}));
class AuthShowAction {
    constructor() {
        this.type = authActionsType.show;
    }
}
class AuthHideAction {
    constructor() {
        this.type = authActionsType.hide;
    }
}
class AuthLoginAction {
    constructor(payload) {
        this.payload = payload;
        this.type = authActionsType.login;
    }
}
class AuthLoginSuccessAction {
    constructor(payload) {
        this.payload = payload;
        this.type = authActionsType.loginSuccess;
    }
}
class AuthLoginErrorAction {
    constructor() {
        this.type = authActionsType.loginError;
    }
}
class AuthExitAction {
    constructor() {
        this.type = authActionsType.exit;
    }
}
class AuthExitSuccessAction {
    constructor() {
        this.type = authActionsType.exitSuccess;
    }
}
class AuthExitCancelAction {
    constructor() {
        this.type = authActionsType.exitCancel;
    }
}
class AuthFormResetAction {
    constructor() {
        this.type = authActionsType.formReset;
    }
}
class AuthFormResetSuccessAction {
    constructor() {
        this.type = authActionsType.formResetSuccess;
    }
}
class AuthRemindPwdAction {
    constructor(payload) {
        this.payload = payload;
        this.type = authActionsType.remindPwd;
    }
}
class AuthRemindPwdSuccessAction {
    constructor() {
        this.type = authActionsType.remindPwdSuccess;
    }
}
class AuthRegisterUserAction {
    constructor(payload) {
        this.payload = payload;
        this.type = authActionsType.register;
    }
}
class AuthRegisterUserErrorAction {
    constructor() {
        this.type = authActionsType.registerSuccess;
    }
}
class AuthOpenLoginPageAction {
    constructor() {
        this.type = authActionsType.openLoginPage;
    }
}
class AuthOpenRemindPageAction {
    constructor() {
        this.type = authActionsType.openRemindPage;
    }
}
class AuthOpenRegisterPageAction {
    constructor() {
        this.type = authActionsType.openRegisterPage;
    }
}


/***/ }),

/***/ "./src/app/reducers/auth/auth.reducer.ts":
/*!***********************************************!*\
  !*** ./src/app/reducers/auth/auth.reducer.ts ***!
  \***********************************************/
/*! exports provided: authNode, authReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authNode", function() { return authNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authReducer", function() { return authReducer; });
/* harmony import */ var _auth_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.actions */ "./src/app/reducers/auth/auth.actions.ts");

const authNode = 'auth';
const initialState = {
    isShowAuth: false,
    isLogin: false,
    userName: '',
    userPwd: '',
    isAdmin: false,
    formReset: false,
    currentPage: _auth_actions__WEBPACK_IMPORTED_MODULE_0__["authPages"].login,
};
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case _auth_actions__WEBPACK_IMPORTED_MODULE_0__["authActionsType"].show:
            return Object.assign(Object.assign({}, state), { isShowAuth: true });
        case _auth_actions__WEBPACK_IMPORTED_MODULE_0__["authActionsType"].hide:
            return Object.assign(Object.assign({}, state), { isShowAuth: false });
        case _auth_actions__WEBPACK_IMPORTED_MODULE_0__["authActionsType"].loginSuccess:
            return Object.assign(Object.assign({}, state), { isLogin: true, userName: action.payload.userName, userPwd: action.payload.userPwd, isAdmin: action.payload.isAdmin });
        case _auth_actions__WEBPACK_IMPORTED_MODULE_0__["authActionsType"].exitSuccess:
            return Object.assign(Object.assign({}, state), { isLogin: false, userName: '', userPwd: '', isAdmin: false });
        case _auth_actions__WEBPACK_IMPORTED_MODULE_0__["authActionsType"].formReset:
            return Object.assign(Object.assign({}, state), { formReset: true });
        case _auth_actions__WEBPACK_IMPORTED_MODULE_0__["authActionsType"].formResetSuccess:
            return Object.assign(Object.assign({}, state), { formReset: false });
        case _auth_actions__WEBPACK_IMPORTED_MODULE_0__["authActionsType"].openLoginPage:
            return Object.assign(Object.assign({}, state), { currentPage: _auth_actions__WEBPACK_IMPORTED_MODULE_0__["authPages"].login });
        case _auth_actions__WEBPACK_IMPORTED_MODULE_0__["authActionsType"].openRegisterPage:
            return Object.assign(Object.assign({}, state), { currentPage: _auth_actions__WEBPACK_IMPORTED_MODULE_0__["authPages"].register });
        case _auth_actions__WEBPACK_IMPORTED_MODULE_0__["authActionsType"].openRemindPage:
            return Object.assign(Object.assign({}, state), { currentPage: _auth_actions__WEBPACK_IMPORTED_MODULE_0__["authPages"].remind });
        default:
            return state;
    }
};


/***/ }),

/***/ "./src/app/reducers/auth/auth.selectors.ts":
/*!*************************************************!*\
  !*** ./src/app/reducers/auth/auth.selectors.ts ***!
  \*************************************************/
/*! exports provided: selectAuthFeature, selectIsShowAuth, selectIsLogin, selectUserName, selectUserPwd, selectIsAdmin, selectFormReset, selectAuthPages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAuthFeature", function() { return selectAuthFeature; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIsShowAuth", function() { return selectIsShowAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIsLogin", function() { return selectIsLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUserName", function() { return selectUserName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUserPwd", function() { return selectUserPwd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIsAdmin", function() { return selectIsAdmin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFormReset", function() { return selectFormReset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAuthPages", function() { return selectAuthPages; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _auth_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.reducer */ "./src/app/reducers/auth/auth.reducer.ts");


const selectAuthFeature = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_auth_reducer__WEBPACK_IMPORTED_MODULE_1__["authNode"]);
const selectIsShowAuth = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectAuthFeature, (state) => state.isShowAuth);
const selectIsLogin = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectAuthFeature, (state) => state.isLogin);
const selectUserName = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectAuthFeature, (state) => state.userName);
const selectUserPwd = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectAuthFeature, (state) => state.userPwd);
const selectIsAdmin = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectAuthFeature, (state) => state.isAdmin);
const selectFormReset = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectAuthFeature, (state) => state.formReset);
const selectAuthPages = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectAuthFeature, (state) => state.currentPage);


/***/ }),

/***/ "./src/app/reducers/index.ts":
/*!***********************************!*\
  !*** ./src/app/reducers/index.ts ***!
  \***********************************/
/*! exports provided: reducers, metaReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _auth_auth_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/auth.reducer */ "./src/app/reducers/auth/auth.reducer.ts");


const reducers = {
    [_auth_auth_reducer__WEBPACK_IMPORTED_MODULE_1__["authNode"]]: _auth_auth_reducer__WEBPACK_IMPORTED_MODULE_1__["authReducer"],
};
const metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].production ? [] : [];


/***/ }),

/***/ "./src/app/services/error.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/error.service.ts ***!
  \*******************************************/
/*! exports provided: ErrorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorService", function() { return ErrorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class ErrorService {
    constructor(http) {
        this.http = http;
    }
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong.
            console.error(`Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        // Return an observable with a user-facing error message.
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('Something bad happened; please try again later.');
    }
}
ErrorService.ɵfac = function ErrorService_Factory(t) { return new (t || ErrorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ErrorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ErrorService, factory: ErrorService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/local-storage.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/local-storage.service.ts ***!
  \***************************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class LocalStorageService {
    constructor() { }
    getItem(key) {
        if (!key) {
            return;
        }
        return localStorage.getItem(key);
    }
    setItem(key, value) {
        if (!key || !value) {
            return;
        }
        localStorage.setItem(key, value);
    }
    removeItem(key) {
        if (!key) {
            return;
        }
        localStorage.removeItem(key);
    }
    clear() {
        localStorage.clear();
    }
}
LocalStorageService.ɵfac = function LocalStorageService_Factory(t) { return new (t || LocalStorageService)(); };
LocalStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LocalStorageService, factory: LocalStorageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocalStorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class UserService {
    constructor(http) {
        this.http = http;
    }
    fetchUser(user) {
        return this.http.post('/user', user);
    }
    remind(user) {
        return this.http.post('/remind', user);
    }
    register(user) {
        return this.http.post('/registerUser', user);
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\youtube\web4ua\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map