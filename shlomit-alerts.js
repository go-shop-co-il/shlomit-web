(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shlomit-alerts"],{

/***/ "BBV5":
/*!***********************************************!*\
  !*** ./libs/alerts/src/lib/alerts.routing.ts ***!
  \***********************************************/
/*! exports provided: AlertsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertsRoutes", function() { return AlertsRoutes; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list/list.component */ "hnd7");
/* harmony import */ var _alerts_alerts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alerts/alerts.component */ "FkzJ");



const routes = [
    {
        path: '',
        component: _alerts_alerts_component__WEBPACK_IMPORTED_MODULE_2__["AlertsComponent"],
        children: [
            {
                path: '',
                redirectTo: 'list',
                pathMatch: 'full',
            },
            {
                path: 'list',
                component: _list_list_component__WEBPACK_IMPORTED_MODULE_1__["ListComponent"],
            },
        ],
    },
    {
        path: 'list',
        component: _list_list_component__WEBPACK_IMPORTED_MODULE_1__["ListComponent"],
    },
];
const AlertsRoutes = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "FkzJ":
/*!********************************************************!*\
  !*** ./libs/alerts/src/lib/alerts/alerts.component.ts ***!
  \********************************************************/
/*! exports provided: AlertsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertsComponent", function() { return AlertsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _ui_src_lib_layout_layout_horizontal_layout_horizontal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../ui/src/lib/layout/layout-horizontal/layout-horizontal.component */ "HCn3");


class AlertsComponent {
    constructor() { }
    ngOnInit() {
    }
}
AlertsComponent.ɵfac = function AlertsComponent_Factory(t) { return new (t || AlertsComponent)(); };
AlertsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlertsComponent, selectors: [["app-alerts"]], decls: 2, vars: 0, template: function AlertsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ui-layout-horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n \n \n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_ui_src_lib_layout_layout_horizontal_layout_horizontal_component__WEBPACK_IMPORTED_MODULE_1__["LayoutHorizontalComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGVydHMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "SJzF":
/*!**********************************************!*\
  !*** ./libs/alerts/src/lib/alerts.module.ts ***!
  \**********************************************/
/*! exports provided: AlertsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertsModule", function() { return AlertsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list/list.component */ "hnd7");
/* harmony import */ var _alerts_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alerts.routing */ "BBV5");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _alerts_alerts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./alerts/alerts.component */ "FkzJ");
/* harmony import */ var _shlomit_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shlomit/ui */ "HYn3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "iInd");








class AlertsModule {
}
AlertsModule.ɵfac = function AlertsModule_Factory(t) { return new (t || AlertsModule)(); };
AlertsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AlertsModule });
AlertsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _shlomit_ui__WEBPACK_IMPORTED_MODULE_5__["UiModule"],
            _alerts_routing__WEBPACK_IMPORTED_MODULE_2__["AlertsRoutes"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AlertsModule, { declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_1__["ListComponent"], _alerts_alerts_component__WEBPACK_IMPORTED_MODULE_4__["AlertsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
        _shlomit_ui__WEBPACK_IMPORTED_MODULE_5__["UiModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]], exports: [_list_list_component__WEBPACK_IMPORTED_MODULE_1__["ListComponent"], _alerts_alerts_component__WEBPACK_IMPORTED_MODULE_4__["AlertsComponent"]] }); })();


/***/ }),

/***/ "aBwZ":
/*!**********************************!*\
  !*** ./libs/alerts/src/index.ts ***!
  \**********************************/
/*! exports provided: AlertsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_alerts_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/alerts.module */ "SJzF");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertsModule", function() { return _lib_alerts_module__WEBPACK_IMPORTED_MODULE_0__["AlertsModule"]; });




/***/ }),

/***/ "hnd7":
/*!****************************************************!*\
  !*** ./libs/alerts/src/lib/list/list.component.ts ***!
  \****************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");

class ListComponent {
    constructor() { }
    ngOnInit() {
    }
}
ListComponent.ɵfac = function ListComponent_Factory(t) { return new (t || ListComponent)(); };
ListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListComponent, selectors: [["app-list"]], decls: 0, vars: 0, template: function ListComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ })

}]);
//# sourceMappingURL=shlomit-alerts.js.map