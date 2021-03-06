(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shlomit-hours-report"],{

/***/ "5xtj":
/*!****************************************************************!*\
  !*** ./libs/hours-report/src/lib/calender/calender.routing.ts ***!
  \****************************************************************/
/*! exports provided: CalenderRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalenderRoutes", function() { return CalenderRoutes; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _calender_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calender.component */ "Mzm8");


const routes = [
    {
        path: '',
        component: _calender_component__WEBPACK_IMPORTED_MODULE_1__["CalenderComponent"],
    },
];
const CalenderRoutes = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "97V7":
/*!****************************************!*\
  !*** ./libs/hours-report/src/index.ts ***!
  \****************************************/
/*! exports provided: HoursReportModule, HoursReportButtonModule, AbsenceModule, CalenderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_hours_report_hours_report_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/hours-report/hours-report.module */ "9XfN");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HoursReportModule", function() { return _lib_hours_report_hours_report_module__WEBPACK_IMPORTED_MODULE_0__["HoursReportModule"]; });

/* harmony import */ var _lib_hours_report_button_hours_report_button_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/hours-report-button/hours-report-button.module */ "PWva");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HoursReportButtonModule", function() { return _lib_hours_report_button_hours_report_button_module__WEBPACK_IMPORTED_MODULE_1__["HoursReportButtonModule"]; });

/* harmony import */ var _lib_absence_absence_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/absence/absence.module */ "z+fs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AbsenceModule", function() { return _lib_absence_absence_module__WEBPACK_IMPORTED_MODULE_2__["AbsenceModule"]; });

/* harmony import */ var _lib_calender_calender_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/calender/calender.module */ "ai2r");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CalenderModule", function() { return _lib_calender_calender_module__WEBPACK_IMPORTED_MODULE_3__["CalenderModule"]; });







/***/ }),

/***/ "9XfN":
/*!***********************************************************************!*\
  !*** ./libs/hours-report/src/lib/hours-report/hours-report.module.ts ***!
  \***********************************************************************/
/*! exports provided: HoursReportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoursReportModule", function() { return HoursReportModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _hours_report_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hours-report.component */ "OUNv");
/* harmony import */ var _hours_report_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hours-report.routing */ "Co9U");
/* harmony import */ var _shlomit_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shlomit/ui */ "HYn3");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var _services_hours_report_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/hours-report.service */ "QtXq");
/* harmony import */ var _services_hours_report_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/hours-report-data.service */ "D/sq");
/* harmony import */ var _hour_report_instantce_hour_report_instantce_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hour-report-instantce/hour-report-instantce.component */ "aNwz");
/* harmony import */ var _form_form_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../form/form.module */ "MOkS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "iInd");











class HoursReportModule {
}
HoursReportModule.??fac = function HoursReportModule_Factory(t) { return new (t || HoursReportModule)(); };
HoursReportModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????defineNgModule"]({ type: HoursReportModule });
HoursReportModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????defineInjector"]({ providers: [_services_hours_report_service__WEBPACK_IMPORTED_MODULE_5__["HoursReportService"],
        _services_hours_report_data_service__WEBPACK_IMPORTED_MODULE_6__["HoursReportDataService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _shlomit_ui__WEBPACK_IMPORTED_MODULE_3__["UiModule"],
            // HttpClientModule,
            _form_form_module__WEBPACK_IMPORTED_MODULE_8__["FormModule"],
            _hours_report_routing__WEBPACK_IMPORTED_MODULE_2__["HoursReportRoutes"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["????setNgModuleScope"](HoursReportModule, { declarations: [_hours_report_component__WEBPACK_IMPORTED_MODULE_1__["HoursReportComponent"], _hour_report_instantce_hour_report_instantce_component__WEBPACK_IMPORTED_MODULE_7__["HourReportInstantceComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _shlomit_ui__WEBPACK_IMPORTED_MODULE_3__["UiModule"],
        // HttpClientModule,
        _form_form_module__WEBPACK_IMPORTED_MODULE_8__["FormModule"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]], exports: [_hours_report_component__WEBPACK_IMPORTED_MODULE_1__["HoursReportComponent"], _hour_report_instantce_hour_report_instantce_component__WEBPACK_IMPORTED_MODULE_7__["HourReportInstantceComponent"]] }); })();


/***/ }),

/***/ "Co9U":
/*!************************************************************************!*\
  !*** ./libs/hours-report/src/lib/hours-report/hours-report.routing.ts ***!
  \************************************************************************/
/*! exports provided: HoursReportRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoursReportRoutes", function() { return HoursReportRoutes; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _hours_report_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hours-report.component */ "OUNv");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../form/form.component */ "WhBD");
/* harmony import */ var _absence_files_files_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../absence/files/files.component */ "a6ly");




const routes = [
    {
        path: '',
        component: _hours_report_component__WEBPACK_IMPORTED_MODULE_1__["HoursReportComponent"],
        children: [
            {
                path: 'month',
                component: _hours_report_component__WEBPACK_IMPORTED_MODULE_1__["HoursReportComponent"],
            },
            {
                path: 'add',
                component: _form_form_component__WEBPACK_IMPORTED_MODULE_2__["FormComponent"],
                data: {
                    showOffCanvase: true,
                },
            },
            {
                path: 'update/:id',
                component: _form_form_component__WEBPACK_IMPORTED_MODULE_2__["FormComponent"],
                data: {
                    showOffCanvase: true,
                },
            },
            {
                path: 'update',
                component: _form_form_component__WEBPACK_IMPORTED_MODULE_2__["FormComponent"],
                data: {
                    showOffCanvase: true,
                },
            },
            {
                path: 'files',
                component: _absence_files_files_component__WEBPACK_IMPORTED_MODULE_3__["FilesComponent"],
            },
        ],
    },
];
const HoursReportRoutes = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "D/sq":
/*!*************************************************************************!*\
  !*** ./libs/hours-report/src/lib/services/hours-report-data.service.ts ***!
  \*************************************************************************/
/*! exports provided: HoursReportDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoursReportDataService", function() { return HoursReportDataService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _shared_interfaces_src_lib_hours_report_hours_report_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/interfaces/src/lib/hours-report/hours-report.config */ "sqTB");
/* harmony import */ var _shlomit_shared_interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shlomit/shared/interfaces */ "7GHE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");





class HoursReportDataService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    fetchData(date, userId) {
        if (!userId) {
            userId = '44981';
        }
        date.month = +date.month < 10 ? `0${date.month}` : date.month;
        return this.httpClient.get(_shared_interfaces_src_lib_hours_report_hours_report_config__WEBPACK_IMPORTED_MODULE_1__["HOURS_REPORT"].GET_USER_HOURREPORT(date, userId));
    }
    addreport(data) {
        return this.httpClient.post(_shared_interfaces_src_lib_hours_report_hours_report_config__WEBPACK_IMPORTED_MODULE_1__["HOURS_REPORT"].ADD_REPORT(), data);
    }
    getreportcodes() {
        return this.httpClient.get(_shared_interfaces_src_lib_hours_report_hours_report_config__WEBPACK_IMPORTED_MODULE_1__["HOURS_REPORT"].GET_REPORT_CODES());
    }
}
HoursReportDataService.??fac = function HoursReportDataService_Factory(t) { return new (t || HoursReportDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
HoursReportDataService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjectable"]({ token: HoursReportDataService, factory: HoursReportDataService.??fac, providedIn: 'root' });


/***/ }),

/***/ "Eu8q":
/*!**************************************************************!*\
  !*** ./libs/hours-report/src/lib/absence/absence.routing.ts ***!
  \**************************************************************/
/*! exports provided: AbsenceRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbsenceRoutes", function() { return AbsenceRoutes; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _absence_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./absence.component */ "wNRl");


const routes = [
    {
        path: '',
        component: _absence_component__WEBPACK_IMPORTED_MODULE_1__["AbsenceComponent"],
    },
];
const AbsenceRoutes = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "Fq7C":
/*!**********************************************************!*\
  !*** ./libs/hours-report/src/lib/form/form.directive.ts ***!
  \**********************************************************/
/*! exports provided: FormDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormDirective", function() { return FormDirective; });
/* harmony import */ var _shlomit_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shlomit/ui */ "HYn3");
/* harmony import */ var _services_hours_report_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/hours-report.service */ "QtXq");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var libs_ui_src_lib_form_error_error_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! libs/ui/src/lib/form/error/error.validator */ "1jdK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");







class FormDirective extends _shlomit_ui__WEBPACK_IMPORTED_MODULE_0__["FormBaseDirective"] {
    constructor(hoursReportService, fb) {
        super(fb.group({
            reportDate: ['', [libs_ui_src_lib_form_error_error_validator__WEBPACK_IMPORTED_MODULE_3__["CustomValidators"].required]],
            toReportDate: ['', [libs_ui_src_lib_form_error_error_validator__WEBPACK_IMPORTED_MODULE_3__["CustomValidators"].required]],
            reportStart: ['', [libs_ui_src_lib_form_error_error_validator__WEBPACK_IMPORTED_MODULE_3__["CustomValidators"].required]],
            reportEnd: ['', [libs_ui_src_lib_form_error_error_validator__WEBPACK_IMPORTED_MODULE_3__["CustomValidators"].required]],
            reportCode: ['', [libs_ui_src_lib_form_error_error_validator__WEBPACK_IMPORTED_MODULE_3__["CustomValidators"].required]],
            locationStart: ['10.0.0.1', [libs_ui_src_lib_form_error_error_validator__WEBPACK_IMPORTED_MODULE_3__["CustomValidators"].required]],
        }));
        this.hoursReportService = hoursReportService;
        this.fb = fb;
    }
    get reportCodes() {
        return this.hoursReportService.reportCodes;
    }
    // formatDate(this.post.startDate, 'yyyy-MM-dd', 'en')
    get reportDate() {
        return this.form.get('reportDate');
    }
    onReportTypeChange(e) {
        console.log(e);
    }
    submit() {
        console.log(this.form.value);
        if (this.form.valid) {
            let data = this.form.value;
            data.userIndex = 44981;
            this.hoursReportService.addreport(data).subscribe((data) => {
                console.log(data);
            });
        }
    }
}
FormDirective.??fac = function FormDirective_Factory(t) { return new (t || FormDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_services_hours_report_service__WEBPACK_IMPORTED_MODULE_1__["HoursReportService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"])); };
FormDirective.??dir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineDirective"]({ type: FormDirective, selectors: [["", "appForm", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["????InheritDefinitionFeature"]] });


/***/ }),

/***/ "MOkS":
/*!*******************************************************!*\
  !*** ./libs/hours-report/src/lib/form/form.module.ts ***!
  \*******************************************************/
/*! exports provided: FormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormModule", function() { return FormModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.component */ "WhBD");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _form_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form.directive */ "Fq7C");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");





class FormModule {
}
FormModule.??fac = function FormModule_Factory(t) { return new (t || FormModule)(); };
FormModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineNgModule"]({ type: FormModule });
FormModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["????setNgModuleScope"](FormModule, { declarations: [_form_component__WEBPACK_IMPORTED_MODULE_1__["FormComponent"],
        _form_directive__WEBPACK_IMPORTED_MODULE_3__["FormDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]], exports: [_form_component__WEBPACK_IMPORTED_MODULE_1__["FormComponent"]] }); })();


/***/ }),

/***/ "Mzm8":
/*!******************************************************************!*\
  !*** ./libs/hours-report/src/lib/calender/calender.component.ts ***!
  \******************************************************************/
/*! exports provided: CalenderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalenderComponent", function() { return CalenderComponent; });
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _ui_src_lib_layout_layout_horizontal_layout_horizontal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../ui/src/lib/layout/layout-horizontal/layout-horizontal.component */ "HCn3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");





function CalenderComponent_ng_template_31_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function CalenderComponent_ng_template_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](0, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, CalenderComponent_ng_template_31_div_1_Template, 4, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2, "\n  ");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", _r1.state.months);
} }
class CalenderComponent {
    constructor(calendar) {
        this.calendar = calendar;
    }
    ngOnInit() { }
    selectToday() {
        this.model = this.calendar.getToday();
    }
    onDateSelect(e) {
        this.model = e;
        alert();
    }
}
CalenderComponent.??fac = function CalenderComponent_Factory(t) { return new (t || CalenderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbCalendar"])); };
CalenderComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: CalenderComponent, selectors: [["app-calender"]], decls: 40, vars: 6, consts: [[3, "dateSelect", "navigate"], ["dp", ""], [1, "btn", "btn-sm", "btn-outline-primary", "mr-2", 3, "click"], [3, "displayMonths"], ["datepicker", ""], ["ngbDatepickerContent", ""], ["type", "text", "ngbDatepicker", ""], ["d", "ngbDatepicker"], [3, "click"], [4, "ngFor", "ngForOf"]], template: function CalenderComponent_Template(rf, ctx) { if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "ui-layout-horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "Simple datepicker");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "ngb-datepicker", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("dateSelect", function CalenderComponent_Template_ngb_datepicker_dateSelect_5_listener($event) { return ctx.onDateSelect($event); })("navigate", function CalenderComponent_Template_ngb_datepicker_navigate_5_listener($event) { return ctx.date = $event.next; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](8, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function CalenderComponent_Template_button_click_10_listener() { return ctx.selectToday(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](11, "Select Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](12, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function CalenderComponent_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r6); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](6); return _r0.navigateTo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14, "To current month");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](15, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function CalenderComponent_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r6); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](6); return _r0.navigateTo({ year: 2013, month: 2 }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](17, "To Feb 2013");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](18, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](19, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](20, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](23, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](26, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](27, "\n\n \n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "ngb-datepicker", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](30, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](31, CalenderComponent_ng_template_31_Template, 3, 1, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](32, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](33, "\n\n\n\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](34, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](36, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](37, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function CalenderComponent_Template_button_click_37_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r6); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](35); return _r3.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](38, "Toggle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](39, "\n\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate2"]("Month: ", ctx.date.month, ".", ctx.date.year, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("Model: ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](26, 4, ctx.model), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("displayMonths", 1);
    } }, directives: [_ui_src_lib_layout_layout_horizontal_layout_horizontal_component__WEBPACK_IMPORTED_MODULE_2__["LayoutHorizontalComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbDatepicker"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbDatepickerContent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbInputDatepicker"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["JsonPipe"]], styles: [".ngb-dp-day[_ngcontent-%COMP%], .ngb-dp-week-number[_ngcontent-%COMP%], .ngb-dp-weekday[_ngcontent-%COMP%] {\n  width: 100% !important;\n  height: 15rem;\n}\n\nbutton.calendar[_ngcontent-%COMP%], button.calendar[_ngcontent-%COMP%]:active {\n  width: 2.75rem;\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAcCAYAAAAEN20fAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEUSURBVEiJ7ZQxToVAEIY/YCHGxN6XGOIpnpaEsBSeQC9ArZbm9TZ6ADyBNzAhQGGl8Riv4BLAWAgmkpBYkH1b8FWT2WK/zJ8ZJ4qiI6XUI3ANnGKWBnht2/ZBDRK3hgVGNsCd7/ui+JkEIrKtqurLpEWaphd933+IyI3LEIdpCYCiKD6HcuOa/nwOa0ScJEnk0BJg0UTUWJRl6RxCYEzEmomsIlPU3IPW+grIAbquy+q6fluy/28RIBeRMwDXdXMgXLj/B2uimRXpui4D9sBeRLKl+1N+L+t6RwbWrZliTTTr1oxYtzVWiTQAcRxvTX+eJMnlUDaO1vpZRO5NS0x48sIwfPc87xg4B04MCzQi8hIEwe4bl1DnFMCN2zsAAAAASUVORK5CYII=\") !important;\n  background-repeat: no-repeat;\n  background-size: 23px;\n  background-position: center;\n}\n\n.ngb-dp-day[_ngcontent-%COMP%] {\n  background-color: blue;\n}\n\n.ngb-dp-day[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  width: 4rem !important;\n  height: 4rem !important;\n  line-height: 4rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY2FsZW5kZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0E7OztFQUdFLHNCQUFBO0VBQ0EsYUFBQTtBQU5GOztBQVNBOztFQUVFLGNBQUE7RUFDQSwwbEJBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7QUFORjs7QUFTQTtFQUlFLHNCQUFBO0FBVEY7O0FBWUE7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNEJBQUE7QUFURiIsImZpbGUiOiJjYWxlbmRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm5nYi1kYXRlcGlja2VyIHtcclxuXHJcbi8vICAgd2lkdGg6IDEwMCU7XHJcblxyXG5cclxufVxyXG5cclxuLm5nYi1kcC1kYXksXHJcbi5uZ2ItZHAtd2Vlay1udW1iZXIsXHJcbi5uZ2ItZHAtd2Vla2RheSB7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDE1cmVtO1xyXG59XHJcblxyXG5idXR0b24uY2FsZW5kYXIsXHJcbmJ1dHRvbi5jYWxlbmRhcjphY3RpdmUge1xyXG4gIHdpZHRoOiAyLjc1cmVtO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDSUFBQUFjQ0FZQUFBQUVOMjBmQUFBQUJITkNTVlFJQ0FnSWZBaGtpQUFBQUFsd1NGbHpBQUFPeEFBQURzUUJsU3NPR3dBQUFCbDBSVmgwVTI5bWRIZGhjbVVBZDNkM0xtbHVhM05qWVhCbExtOXlaNXZ1UEJvQUFBRVVTVVJCVkVpSjdaUXhUb1ZBRUlZL1lDSEd4TjZYR09JcG5wYUVzQlNlUUM5QXJaYm05VFo2QUR5Qk56QWhRR0dsOFJpdjRCTEFXQWdta3BCWWtIMWI4RldUMldLL3pKOFpKNHFpSTZYVUkzQU5uR0tXQm5odDIvWkJEUkszaGdWR05zQ2Q3L3VpK0prRUlyS3RxdXJMcEVXYXBoZDkzMytJeUkzTEVJZHBDWUNpS0Q2SGN1T2EvbndPYTBTY0pFbmswQkpnMFVUVVdKUmw2UnhDWUV6RW1vbXNJbFBVM0lQVytncklBYnF1eStxNmZsdXkvMjhSSUJlUk13RFhkWE1nWExqL0IydWltUlhwdWk0RDlzQmVSTEtsKzFOK0wrdDZSd2JXclpsaVRUVHIxb3hZdHpWV2lUUUFjUnh2VFgrZUpNbmxVRGFPMXZwWlJPNU5TMHg0OHNJd2ZQYzg3eGc0QjA0TUN6UWk4aElFd2U0YmwxRG5GTUNOMnpzQUFBQUFTVVZPUks1Q1lJST0nKSAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAyM3B4O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxufVxyXG5cclxuLm5nYi1kcC1kYXkge1xyXG5cclxuICAvLyB3aWR0aDogNHJlbSAhaW1wb3J0YW50O1xyXG4gIC8vIGhlaWdodDogNHJlbSAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbn1cclxuXHJcbi5uZ2ItZHAtZGF5PmRpdiB7XHJcbiAgd2lkdGg6IDRyZW0gIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDRyZW0gIWltcG9ydGFudDtcclxuICBsaW5lLWhlaWdodDogNHJlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubmdiLWRwLXdlZWtkYXkge1xyXG5cclxuICAvLyB3aWR0aDogNXJlbSAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "OUNv":
/*!**************************************************************************!*\
  !*** ./libs/hours-report/src/lib/hours-report/hours-report.component.ts ***!
  \**************************************************************************/
/*! exports provided: HoursReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoursReportComponent", function() { return HoursReportComponent; });
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var _services_hours_report_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/hours-report.service */ "QtXq");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _ui_src_lib_layout_layout_horizontal_layout_horizontal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../ui/src/lib/layout/layout-horizontal/layout-horizontal.component */ "HCn3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _hour_report_instantce_hour_report_instantce_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hour-report-instantce/hour-report-instantce.component */ "aNwz");










function HoursReportComponent_ng_template_38_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](2, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function HoursReportComponent_ng_template_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](0, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](1, HoursReportComponent_ng_template_38_div_1_Template, 3, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](2, "\n          ");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????reference"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngForOf", _r0.state.months);
} }
function HoursReportComponent_ng_container_71_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate2"]("\n\n                      ", item_r5 == null ? null : item_r5.specialDay == null ? null : item_r5.specialDay.dayType, "\n                      ", item_r5 == null ? null : item_r5.specialDay == null ? null : item_r5.specialDay.specialDayName, "\n                    ");
} }
const _c0 = function (a0) { return { " bg-info bg-gradient text-dark": a0 }; };
function HoursReportComponent_ng_container_71_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "\n\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "tr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](3, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](7, HoursReportComponent_ng_container_71_span_7_Template, 2, 2, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](8, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](9, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](12, "\n\n\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](13, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](14, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](15, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](16, "app-hour-report-instantce", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](17, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](18, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](19, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](20, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](21, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](22, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function HoursReportComponent_ng_container_71_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](); return ctx_r9.update(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](23, " \u05E2\u05D3\u05DB\u05DF");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](24, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](25, "\n\n\n\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](26, "\n\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](8, _c0, (item_r5 == null ? null : item_r5.isWeekend) === true));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"]("\n                    ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind2"](6, 5, item_r5.reportDate, "dd/MM/YYYY"), "\n\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", item_r5.specialDay);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", item_r5.dayName, "\n\n\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("report", item_r5 == null ? null : item_r5.report);
} }
const _c1 = function (a0) { return { "show": a0 }; };
class HoursReportComponent {
    constructor(calendar, hoursReportService, activatedRoute, router) {
        this.calendar = calendar;
        this.hoursReportService = hoursReportService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.showOffCanvase = true;
        this._date = {
            year: new Date().getFullYear().toString(),
            month: (new Date().getMonth() + 1).toString(),
        };
    }
    get date() {
        return this._date;
    }
    set date(val) {
        this._date = val;
        this.hoursReportService.fetchData(this.date).subscribe((data) => {
            this.items = data;
            this.placeSherutName = data['data']['placeSherutName'];
        });
    }
    get reportDays() {
        return this.items.data.reportDays;
    }
    ngOnInit() {
        // debugger
    }
    onDateSelect(e) {
        this.date = e.next;
    }
    update() { }
    toggle() {
        this.showOffCanvase = !this.showOffCanvase;
    }
    open() {
        this.showOffCanvase = true;
    }
    close() {
        this.showOffCanvase = false;
    }
}
HoursReportComponent.??fac = function HoursReportComponent_Factory(t) { return new (t || HoursReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbCalendar"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_services_hours_report_service__WEBPACK_IMPORTED_MODULE_1__["HoursReportService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
HoursReportComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({ type: HoursReportComponent, selectors: [["app-hours-report"]], decls: 94, vars: 9, consts: [[1, "row"], [1, "col"], [1, "card-title"], ["dir", "ltr"], [1, "btn", "btn-primary"], [1, "btn", "btn-primary", 3, "routerLink"], [1, "card"], [1, "card-header"], ["dir", "ltr", 3, "displayMonths", "navigate"], ["datepicker", ""], ["ngbDatepickerContent", ""], [1, "card-content"], [1, "card-body"], [1, "table-responsive"], [1, "table"], [4, "ngFor", "ngForOf"], ["tabindex", "-1", "id", "offcanvas", "aria-labelledby", "offcanvasLabel", 1, "offcanvas", "offcanvas-start", "show", 3, "ngClass"], [1, "offcanvas-header"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close", "text-reset", 3, "click"], [1, "offcanvas-body"], [3, "ngClass"], [1, "text-bold-500"], [4, "ngIf"], [3, "report"], [1, "btn", "btn-primary", 3, "click"]], template: function HoursReportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "ui-layout-horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](5, "\n\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](6, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](7, "\u05D3\u05D9\u05D5\u05D5\u05D7 \u05E9\u05E2\u05D5\u05EA \u05DC\u05D7\u05D5\u05D3\u05E9\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](8, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](10, "\n  \n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](11, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](12, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](14, "\n\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](15, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](16, "\u05E1\u05D2\u05D9\u05E8\u05EA \u05D7\u05D5\u05D3\u05E9");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](17, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](18, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](19, "  \u05D4\u05D5\u05E1\u05E4\u05EA \u05D3\u05D9\u05D5\u05D5\u05D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](20, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](21, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](22, "\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](24, "\n    \u05DE\u05E7\u05D5\u05DD \u05E9\u05D9\u05E8\u05D5\u05EA: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](25, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](27, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](28, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](29, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](30, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](31, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](32, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](33, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](34, "\u05D1\u05D7\u05D9\u05E8\u05EA \u05D7\u05D5\u05D3\u05E9\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](35, "ngb-datepicker", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("navigate", function HoursReportComponent_Template_ngb_datepicker_navigate_35_listener($event) { return ctx.onDateSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](37, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](38, HoursReportComponent_ng_template_38_Template, 3, 1, "ng-template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](39, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](40, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](41, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](42, "\n\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](43, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](44, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](45, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](46, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](47, "\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](48, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](49, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](50, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](51, "table", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](52, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](53, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](54, "\n              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](55, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](56, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](57, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](58, "\u05EA\u05D0\u05E8\u05D9\u05DA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](59, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](60, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](61, "\u05D9\u05D5\u05DD");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](62, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](63, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](64, "\u05DB\u05E0\u05D9\u05E1\u05D4 /\u05D9\u05E6\u05D9\u05D0\u05D4");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](65, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](66, "\n              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](67, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](68, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](69, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](70, "\n              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](71, HoursReportComponent_ng_container_71_Template, 27, 10, "ng-container", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](72, "\n\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](73, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](74, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](75, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](76, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](77, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](78, "\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](79, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](80, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](81, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](82, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](83, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](84, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](85, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function HoursReportComponent_Template_button_click_85_listener() { return ctx.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](86, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](87, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](88, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](89, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](90, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](91, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](92, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](93, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate2"]("\n        ", ctx.date == null ? null : ctx.date.month, "/", ctx.date == null ? null : ctx.date.year, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("routerLink", "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx.placeSherutName);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("displayMonths", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngForOf", ctx.items == null ? null : ctx.items.data == null ? null : ctx.items.data.reportDays);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](7, _c1, ctx.showOffCanvase));
    } }, directives: [_ui_src_lib_layout_layout_horizontal_layout_horizontal_component__WEBPACK_IMPORTED_MODULE_4__["LayoutHorizontalComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbDatepicker"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbDatepickerContent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _hour_report_instantce_hour_report_instantce_component__WEBPACK_IMPORTED_MODULE_6__["HourReportInstantceComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]], styles: [".offcanvas.show[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaG91cnMtcmVwb3J0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0UsbUJBQUE7QUFBTiIsImZpbGUiOiJob3Vycy1yZXBvcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub2ZmY2FudmFzIHtcclxuICAgICYuc2hvdyB7XHJcbiAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICB9XHJcbiAgfVxyXG4gICJdfQ== */"] });


/***/ }),

/***/ "PWva":
/*!*************************************************************************************!*\
  !*** ./libs/hours-report/src/lib/hours-report-button/hours-report-button.module.ts ***!
  \*************************************************************************************/
/*! exports provided: HoursReportButtonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoursReportButtonModule", function() { return HoursReportButtonModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _hours_report_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hours-report-button.component */ "oEyJ");
/* harmony import */ var _hours_report_button_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hours-report-button.directive */ "vLva");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




class HoursReportButtonModule {
}
HoursReportButtonModule.??fac = function HoursReportButtonModule_Factory(t) { return new (t || HoursReportButtonModule)(); };
HoursReportButtonModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineNgModule"]({ type: HoursReportButtonModule });
HoursReportButtonModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["????setNgModuleScope"](HoursReportButtonModule, { declarations: [_hours_report_button_component__WEBPACK_IMPORTED_MODULE_1__["HoursReportButtonComponent"], _hours_report_button_directive__WEBPACK_IMPORTED_MODULE_2__["HoursReportButtonDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [_hours_report_button_component__WEBPACK_IMPORTED_MODULE_1__["HoursReportButtonComponent"], _hours_report_button_directive__WEBPACK_IMPORTED_MODULE_2__["HoursReportButtonDirective"]] }); })();


/***/ }),

/***/ "QtXq":
/*!********************************************************************!*\
  !*** ./libs/hours-report/src/lib/services/hours-report.service.ts ***!
  \********************************************************************/
/*! exports provided: HoursReportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoursReportService", function() { return HoursReportService; });
/* harmony import */ var _hours_report_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hours-report-data.service */ "D/sq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");



class HoursReportService {
    constructor(hoursReportDataService) {
        this.hoursReportDataService = hoursReportDataService;
    }
    addreport(data) {
        return this.hoursReportDataService.addreport(data);
    }
    get reportCodes() {
        if (!this._reportCodes) {
            this.hoursReportDataService.getreportcodes().subscribe((data) => {
                this._reportCodes = data.data;
            });
        }
        return this._reportCodes;
    }
    fetchData(data, userId) {
        return this.hoursReportDataService.fetchData(data, userId);
    }
}
HoursReportService.??fac = function HoursReportService_Factory(t) { return new (t || HoursReportService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_hours_report_data_service__WEBPACK_IMPORTED_MODULE_0__["HoursReportDataService"])); };
HoursReportService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({ token: HoursReportService, factory: HoursReportService.??fac, providedIn: 'root' });


/***/ }),

/***/ "WhBD":
/*!**********************************************************!*\
  !*** ./libs/hours-report/src/lib/form/form.component.ts ***!
  \**********************************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var _services_hours_report_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/hours-report.service */ "QtXq");
/* harmony import */ var _form_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.directive */ "Fq7C");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");







function FormComponent_option_100_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("value", item_r2.reportCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"]("\n                  ", item_r2.reportCodeName, "\n\n                ");
} }
class FormComponent extends _form_directive__WEBPACK_IMPORTED_MODULE_1__["FormDirective"] {
    constructor(hoursReportService, fb) {
        super(hoursReportService, fb);
        this.hoursReportService = hoursReportService;
        this.fb = fb;
    }
    ngOnInit() { }
    onChange(e) {
        console.log(e);
    }
}
FormComponent.??fac = function FormComponent_Factory(t) { return new (t || FormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_services_hours_report_service__WEBPACK_IMPORTED_MODULE_0__["HoursReportService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"])); };
FormComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({ type: FormComponent, selectors: [["app-form"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["????InheritDefinitionFeature"]], decls: 161, vars: 2, consts: [[1, "card", "mt-5"], [1, "card-header"], [1, "card-title", "offcanvas-title"], [1, "card-body"], [1, "input-group", "mb-3"], ["for", "inputGroupSelect01", 1, "input-group-text"], ["id", "inputGroupSelect01", 1, "form-select", 3, "change"], ["reportType", ""], ["selected", ""], ["value", "1"], ["value", "2"], ["value", "3"], [3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-md-6", "col-12"], [1, "form-group"], ["for", "reportDate"], ["type", "date", "formControlName", "reportDate", "id", "reportDate", "placeholder", "\u05EA\u05D0\u05E8\u05D9\u05DA \u05D4\u05EA\u05D7\u05DC\u05D4", "name", "reportDate", 1, "form-control"], ["for", "toReportDate"], ["type", "date", "formControlName", "toReportDate", "id", "toReportDate", "placeholder", "\u05EA\u05D0\u05E8\u05D9\u05DA \u05E1\u05D9\u05D5\u05DD  ", "name", "toReportDate", 1, "form-control"], ["for", "reportStart"], ["type", "time", "formControlName", "reportStart", "id", "reportStart", "placeholder", "\u05E9\u05E2\u05EA \u05D4\u05EA\u05D7\u05DC\u05D4", "name", "reportStart", 1, "form-control"], ["for", "reportEnd"], ["type", "time", "formControlName", "reportEnd", "id", "reportEnd", "placeholder", "\u05E9\u05E2\u05EA \u05E1\u05D9\u05D5\u05DD  ", "name", "reportEnd", 1, "form-control"], [1, "col-12"], ["for", "reportCode", 1, "input-group-text"], ["formControlName", "reportCode", "id", "reportCode", 1, "form-select", 3, "change"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "first-name-column"], ["type", "file", "id", "formFileMultiple", "multiple", "", 1, "form-control"], [1, "col-12", "d-flex", "justify-content-end"], ["type", "submit", 1, "btn", "btn-primary", "me-1", "mb-1"], [3, "value"]], template: function FormComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](5, " \u05D4\u05D5\u05E1\u05E4\u05EA \u05D3\u05D9\u05D5\u05D5\u05D7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](6, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](7, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](9, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](11, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](12, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](13, "\u05E1\u05D5\u05D2 \u05D3\u05D9\u05D5\u05D5\u05D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](14, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](15, "select", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("change", function FormComponent_Template_select_change_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r3); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????reference"](16); return ctx.onReportTypeChange(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](17, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](18, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](19, "Choose...");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](20, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](21, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](22, "\u05E0\u05D5\u05DB\u05D7\u05D5\u05EA");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](23, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](24, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](25, "\u05D4\u05E2\u05D3\u05E8\u05D5\u05EA");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](26, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](27, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](28, "\u05D7\u05D5\u05E4\u05E9\u05D4");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](29, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](30, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](31, "\u05DE\u05D7\u05DC\u05D4");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](32, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](33, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](34, "\u05E7\u05D5\u05E8\u05D5\u05E0\u05D4");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](35, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](36, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](37, "\n\n\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](38, "form", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("ngSubmit", function FormComponent_Template_form_ngSubmit_38_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](39, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](40, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](41, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](42, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](43, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](44, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](45, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](46, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](47, "\u05EA\u05D0\u05E8\u05D9\u05DA \u05D4\u05EA\u05D7\u05DC\u05D4");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](48, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](49, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](50, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](51, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](52, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](53, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](54, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](55, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](56, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](57, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](58, "\u05EA\u05D0\u05E8\u05D9\u05DA \u05E1\u05D9\u05D5\u05DD ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](59, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](60, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](61, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](62, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](63, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](64, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](65, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](66, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](67, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](68, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](69, "\u05E9\u05E2\u05EA \u05D4\u05EA\u05D7\u05DC\u05D4");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](70, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](71, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](72, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](73, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](74, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](75, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](76, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](77, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](78, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](79, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](80, "\u05E9\u05E2\u05EA \u05E1\u05D9\u05D5\u05DD ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](81, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](82, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](83, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](84, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](85, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](86, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](87, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](88, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](89, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](90, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](91, "\n              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](92, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](93, "\u05E7\u05D5\u05D3 \u05D4\u05E2\u05D3\u05E8\u05D5\u05EA");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](94, "\n              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](95, "select", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("change", function FormComponent_Template_select_change_95_listener($event) { return ctx.onChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](96, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](97, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](98, "\u05D1\u05D7\u05E8\u05D9...");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](99, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](100, FormComponent_option_100_Template, 2, 2, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](101, "\n\n              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](102, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](103, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](104, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](105, "\n\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](106, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](107, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](108, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](109, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](110, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](111, " \u05D4\u05D5\u05E1\u05E4\u05EA \u05E7\u05D5\u05D1\u05E5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](112, "\n\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](113, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](114, "\n              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](115, "\n              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](116, "\n              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](117, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](118, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](119, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](120, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](121, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](122, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](123, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](124, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](125, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](126, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](127, " \u05D4\u05D5\u05E1\u05E4\u05EA \u05E7\u05D5\u05D1\u05E5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](128, "\n\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](129, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](130, "\n              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](131, "\n              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](132, "\n              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](133, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](134, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](135, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](136, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](137, "\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](138, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](139, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](140, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](141, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](142, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](143, " \u05D4\u05D5\u05E1\u05E4\u05EA \u05E7\u05D5\u05D1\u05E5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](144, "\n\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](145, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](146, "\n              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](147, "\n              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](148, "\n              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](149, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](150, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](151, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](152, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](153, "\n\n\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](154, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](155, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](156, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](157, "\u05D4\u05D5\u05E1\u05E4\u05EA \u05D3\u05D9\u05D5\u05D5\u05D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](158, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](159, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](160, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngForOf", ctx.reportCodes);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["??angular_packages_forms_forms_z"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "a6ly":
/*!********************************************************************!*\
  !*** ./libs/hours-report/src/lib/absence/files/files.component.ts ***!
  \********************************************************************/
/*! exports provided: FilesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesComponent", function() { return FilesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");

class FilesComponent {
    constructor() { }
    ngOnInit() {
    }
}
FilesComponent.??fac = function FilesComponent_Factory(t) { return new (t || FilesComponent)(); };
FilesComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: FilesComponent, selectors: [["app-files"]], decls: 70, vars: 0, consts: [[1, "card", "mt-5"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "form"], [1, "row"], [1, "col-md-6", "col-12"], [1, "form-group"], ["for", "first-name-column"], ["type", "date", "id", "first-name-column", "placeholder", "\u05EA\u05D0\u05E8\u05D9\u05DA \u05D4\u05EA\u05D7\u05DC\u05D4", "name", "fname-column", 1, "form-control"], ["for", "last-name-column"], ["type", "date", "id", "last-name-column", "placeholder", "\u05EA\u05D0\u05E8\u05D9\u05DA \u05E1\u05D9\u05D5\u05DD  ", "name", "lname-column", 1, "form-control"], [1, "input-group", "mb-3"], ["for", "inputGroupSelect01", 1, "input-group-text"], ["id", "inputGroupSelect01", 1, "form-select"], ["selected", ""], ["value", "1"], ["value", "2"], ["value", "3"], [1, "col-12", "d-flex", "justify-content-end"], ["type", "submit", 1, "btn", "btn-primary", "me-1", "mb-1"]], template: function FilesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "\u05D4\u05D5\u05E1\u05E4\u05EA \u05E7\u05D1\u05E6\u05D9\u05DD  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "\u05EA\u05D0\u05E8\u05D9\u05DA \u05D4\u05EA\u05D7\u05DC\u05D4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "\u05EA\u05D0\u05E8\u05D9\u05DA \u05E1\u05D9\u05D5\u05DD ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "\n             ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "\n              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "\u05E7\u05D5\u05D3 \u05D4\u05E2\u05D3\u05E8\u05D5\u05EA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "\n              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "\u05D1\u05D7\u05E8\u05D9...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "One");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "Two");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "Three");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "\n              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "\u05D4\u05D5\u05E1\u05E4\u05EA \u05E7\u05D1\u05E6\u05D9\u05DD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "\n         ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaWxlcy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "aNwz":
/*!*********************************************************************************************************!*\
  !*** ./libs/hours-report/src/lib/hours-report/hour-report-instantce/hour-report-instantce.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: HourReportInstantceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HourReportInstantceComponent", function() { return HourReportInstantceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");



function HourReportInstantceComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("title", ctx_r0.report == null ? null : ctx_r0.report.reportNoteOut);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("\n\n    \u05D9\u05E6\u05D9\u05D0\u05D4 ", ctx_r0.report == null ? null : ctx_r0.report.reportEnd, "\n\n    \n\n  ");
} }
const _c0 = function (a1) { return ["update", a1]; };
function HourReportInstantceComponent_a_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " \u05D7\u05E1\u05E8\u05D4 \u05D9\u05E6\u05D9\u05D0\u05D4\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](1, _c0, ctx_r1.report == null ? null : ctx_r1.report.mobileHrDetailsIndex));
} }
class HourReportInstantceComponent {
    constructor() { }
    ngOnInit() { }
    update() {
    }
}
HourReportInstantceComponent.??fac = function HourReportInstantceComponent_Factory(t) { return new (t || HourReportInstantceComponent)(); };
HourReportInstantceComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: HourReportInstantceComponent, selectors: [["app-hour-report-instantce"]], inputs: { report: "report" }, decls: 11, vars: 5, consts: [[3, "title"], [3, "title", 4, "ngIf"], ["class", "btn btn-link", "class", "bg-danger bg-gradient text-white", 3, "routerLink", 4, "ngIf"], [1, "bg-danger", "bg-gradient", "text-white", 3, "routerLink"]], template: function HourReportInstantceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](0, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, HourReportInstantceComponent_span_6_Template, 2, 2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, HourReportInstantceComponent_a_8_Template, 2, 3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("title", ctx.report == null ? null : ctx.report.reportNoteIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("\n    \u05DB\u05E0\u05D9\u05E1\u05D4 ", ctx.report == null ? null : ctx.report.reportStart, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.report == null ? null : ctx.report.reportEnd);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !(ctx.report == null ? null : ctx.report.reportEnd));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("\n  \u05E1\u05D4\"\u05DB:\n  ", ctx.report == null ? null : ctx.report.totalHours, "\n");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob3VyLXJlcG9ydC1pbnN0YW50Y2UuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "ai2r":
/*!***************************************************************!*\
  !*** ./libs/hours-report/src/lib/calender/calender.module.ts ***!
  \***************************************************************/
/*! exports provided: CalenderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalenderModule", function() { return CalenderModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _calender_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calender.component */ "Mzm8");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _shlomit_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shlomit/ui */ "HYn3");
/* harmony import */ var _calender_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calender.routing */ "5xtj");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "iInd");








class CalenderModule {
}
CalenderModule.??fac = function CalenderModule_Factory(t) { return new (t || CalenderModule)(); };
CalenderModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????defineNgModule"]({ type: CalenderModule });
CalenderModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????defineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _shlomit_ui__WEBPACK_IMPORTED_MODULE_3__["UiModule"], _calender_routing__WEBPACK_IMPORTED_MODULE_4__["CalenderRoutes"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["????setNgModuleScope"](CalenderModule, { declarations: [_calender_component__WEBPACK_IMPORTED_MODULE_1__["CalenderComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _shlomit_ui__WEBPACK_IMPORTED_MODULE_3__["UiModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]], exports: [_calender_component__WEBPACK_IMPORTED_MODULE_1__["CalenderComponent"]] }); })();


/***/ }),

/***/ "oEyJ":
/*!****************************************************************************************!*\
  !*** ./libs/hours-report/src/lib/hours-report-button/hours-report-button.component.ts ***!
  \****************************************************************************************/
/*! exports provided: HoursReportButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoursReportButtonComponent", function() { return HoursReportButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");

class HoursReportButtonComponent {
    constructor() { }
    ngOnInit() {
    }
}
HoursReportButtonComponent.??fac = function HoursReportButtonComponent_Factory(t) { return new (t || HoursReportButtonComponent)(); };
HoursReportButtonComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: HoursReportButtonComponent, selectors: [["app-hours-report-button"]], decls: 5, vars: 0, consts: [[1, "d-flex", "justify-content-center", "align-items-center", 2, "height", "100px"], [1, "btn", "btn-primary", "bg-info", "text-dark", "btn-xl"]], template: function HoursReportButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "\n \n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "\n    \u05D4\u05EA\u05D7\u05DC\u05D4\n\n \n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob3Vycy1yZXBvcnQtYnV0dG9uLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "sqTB":
/*!****************************************************************************!*\
  !*** ./libs/shared/interfaces/src/lib/hours-report/hours-report.config.ts ***!
  \****************************************************************************/
/*! exports provided: HOURS_REPORT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOURS_REPORT", function() { return HOURS_REPORT; });
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! environments/environment */ "PIN6");

const HOURS_REPORT = {
    GET_REPORT_CODES: () => {
        return `${environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].API_ENDPOINT.api}/api/hour/getreportcodes`;
    },
    GET_USER_HOURREPORT: (date, userId) => {
        return `${environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].API_ENDPOINT.api}/api/hour/getuserhourreport?userIndex=${userId}&mnYear=${date.month}/${date.year}`;
    },
    ADD_REPORT: () => {
        return `${environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].API_ENDPOINT.api}/api/hour/addreport`;
    },
};


/***/ }),

/***/ "vLva":
/*!****************************************************************************************!*\
  !*** ./libs/hours-report/src/lib/hours-report-button/hours-report-button.directive.ts ***!
  \****************************************************************************************/
/*! exports provided: HoursReportButtonDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoursReportButtonDirective", function() { return HoursReportButtonDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");

class HoursReportButtonDirective {
    constructor() { }
}
HoursReportButtonDirective.??fac = function HoursReportButtonDirective_Factory(t) { return new (t || HoursReportButtonDirective)(); };
HoursReportButtonDirective.??dir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineDirective"]({ type: HoursReportButtonDirective, selectors: [["", "appHoursReportButton", ""]] });


/***/ }),

/***/ "wNRl":
/*!****************************************************************!*\
  !*** ./libs/hours-report/src/lib/absence/absence.component.ts ***!
  \****************************************************************/
/*! exports provided: AbsenceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbsenceComponent", function() { return AbsenceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _ui_src_lib_layout_layout_horizontal_layout_horizontal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../ui/src/lib/layout/layout-horizontal/layout-horizontal.component */ "HCn3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");



class AbsenceComponent {
    constructor() { }
    ngOnInit() {
    }
}
AbsenceComponent.??fac = function AbsenceComponent_Factory(t) { return new (t || AbsenceComponent)(); };
AbsenceComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AbsenceComponent, selectors: [["app-absence"]], decls: 33, vars: 1, consts: [[1, "page-heading"], [1, "page-title"], [1, "row"], [1, "col-12", "col-md-6", "order-md-2", "order-last"], [1, "btn", "btn-primary", "btn-lg", 3, "routerLink"], [1, "col-12", "col-md-6", "order-md-1", "order-first"], [1, "text-subtitle", "text-muted"], [1, "section"]], template: function AbsenceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](0, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "ui-layout-horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "\u05D4\u05D5\u05E1\u05E4\u05EA \u05D4\u05E2\u05D3\u05E8\u05D5\u05EA   ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "\n              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "\u05D4\u05E2\u05D3\u05E8\u05D5\u05D9\u05D5\u05EA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "\n              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "\u05D8\u05E7\u05E1\u05D8 \u05D8\u05E7\u05E1\u05D8 \u05D8\u05E7\u05E1\u05E1\u05D8.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "\n  \n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "section", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "\n\n       ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", "add");
    } }, directives: [_ui_src_lib_layout_layout_horizontal_layout_horizontal_component__WEBPACK_IMPORTED_MODULE_1__["LayoutHorizontalComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYnNlbmNlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "z+fs":
/*!*************************************************************!*\
  !*** ./libs/hours-report/src/lib/absence/absence.module.ts ***!
  \*************************************************************/
/*! exports provided: AbsenceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbsenceModule", function() { return AbsenceModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _absence_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./absence.component */ "wNRl");
/* harmony import */ var _absence_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./absence.routing */ "Eu8q");
/* harmony import */ var _shlomit_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shlomit/ui */ "HYn3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");






class AbsenceModule {
}
AbsenceModule.??fac = function AbsenceModule_Factory(t) { return new (t || AbsenceModule)(); };
AbsenceModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineNgModule"]({ type: AbsenceModule });
AbsenceModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shlomit_ui__WEBPACK_IMPORTED_MODULE_3__["UiModule"], _absence_routing__WEBPACK_IMPORTED_MODULE_2__["AbsenceRoutes"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["????setNgModuleScope"](AbsenceModule, { declarations: [_absence_component__WEBPACK_IMPORTED_MODULE_1__["AbsenceComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shlomit_ui__WEBPACK_IMPORTED_MODULE_3__["UiModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]], exports: [_absence_component__WEBPACK_IMPORTED_MODULE_1__["AbsenceComponent"]] }); })();


/***/ })

}]);
//# sourceMappingURL=shlomit-hours-report.js.map