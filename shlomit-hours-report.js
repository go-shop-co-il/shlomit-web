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
HoursReportModule.ɵfac = function HoursReportModule_Factory(t) { return new (t || HoursReportModule)(); };
HoursReportModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: HoursReportModule });
HoursReportModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ providers: [_services_hours_report_service__WEBPACK_IMPORTED_MODULE_5__["HoursReportService"],
        _services_hours_report_data_service__WEBPACK_IMPORTED_MODULE_6__["HoursReportDataService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _shlomit_ui__WEBPACK_IMPORTED_MODULE_3__["UiModule"],
            // HttpClientModule,
            _form_form_module__WEBPACK_IMPORTED_MODULE_8__["FormModule"],
            _hours_report_routing__WEBPACK_IMPORTED_MODULE_2__["HoursReportRoutes"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](HoursReportModule, { declarations: [_hours_report_component__WEBPACK_IMPORTED_MODULE_1__["HoursReportComponent"], _hour_report_instantce_hour_report_instantce_component__WEBPACK_IMPORTED_MODULE_7__["HourReportInstantceComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
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
HoursReportDataService.ɵfac = function HoursReportDataService_Factory(t) { return new (t || HoursReportDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
HoursReportDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: HoursReportDataService, factory: HoursReportDataService.ɵfac, providedIn: 'root' });


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
FormDirective.ɵfac = function FormDirective_Factory(t) { return new (t || FormDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_hours_report_service__WEBPACK_IMPORTED_MODULE_1__["HoursReportService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"])); };
FormDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({ type: FormDirective, selectors: [["", "appForm", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]] });


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
FormModule.ɵfac = function FormModule_Factory(t) { return new (t || FormModule)(); };
FormModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: FormModule });
FormModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](FormModule, { declarations: [_form_component__WEBPACK_IMPORTED_MODULE_1__["FormComponent"],
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CalenderComponent_ng_template_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CalenderComponent_ng_template_31_div_1_Template, 4, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\n  ");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _r1.state.months);
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
CalenderComponent.ɵfac = function CalenderComponent_Factory(t) { return new (t || CalenderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbCalendar"])); };
CalenderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CalenderComponent, selectors: [["app-calender"]], decls: 40, vars: 6, consts: [[3, "dateSelect", "navigate"], ["dp", ""], [1, "btn", "btn-sm", "btn-outline-primary", "mr-2", 3, "click"], [3, "displayMonths"], ["datepicker", ""], ["ngbDatepickerContent", ""], ["type", "text", "ngbDatepicker", ""], ["d", "ngbDatepicker"], [3, "click"], [4, "ngFor", "ngForOf"]], template: function CalenderComponent_Template(rf, ctx) { if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ui-layout-horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Simple datepicker");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ngb-datepicker", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("dateSelect", function CalenderComponent_Template_ngb_datepicker_dateSelect_5_listener($event) { return ctx.onDateSelect($event); })("navigate", function CalenderComponent_Template_ngb_datepicker_navigate_5_listener($event) { return ctx.date = $event.next; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CalenderComponent_Template_button_click_10_listener() { return ctx.selectToday(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Select Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CalenderComponent_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6); return _r0.navigateTo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "To current month");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CalenderComponent_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6); return _r0.navigateTo({ year: 2013, month: 2 }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "To Feb 2013");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](26, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "\n\n \n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "ngb-datepicker", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, CalenderComponent_ng_template_31_Template, 3, 1, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "\n\n\n\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CalenderComponent_Template_button_click_37_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](35); return _r3.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Toggle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "\n\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("Month: ", ctx.date.month, ".", ctx.date.year, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Model: ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](26, 4, ctx.model), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("displayMonths", 1);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function HoursReportComponent_ng_template_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, HoursReportComponent_ng_template_38_div_1_Template, 3, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\n          ");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _r0.state.months);
} }
function HoursReportComponent_ng_container_71_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("\n\n                      ", item_r5 == null ? null : item_r5.specialDay == null ? null : item_r5.specialDay.dayType, "\n                      ", item_r5 == null ? null : item_r5.specialDay == null ? null : item_r5.specialDay.specialDayName, "\n                    ");
} }
const _c0 = function (a0) { return { " bg-info bg-gradient text-dark": a0 }; };
function HoursReportComponent_ng_container_71_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\n\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "tr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, HoursReportComponent_ng_container_71_span_7_Template, 2, 2, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "\n\n\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "app-hour-report-instantce", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HoursReportComponent_ng_container_71_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r9.update(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, " \u05E2\u05D3\u05DB\u05DF");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "\n\n\n\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "\n\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](8, _c0, (item_r5 == null ? null : item_r5.isWeekend) === true));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\n                    ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](6, 5, item_r5.reportDate, "dd/MM/YYYY"), "\n\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r5.specialDay);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r5.dayName, "\n\n\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("report", item_r5 == null ? null : item_r5.report);
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
HoursReportComponent.ɵfac = function HoursReportComponent_Factory(t) { return new (t || HoursReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbCalendar"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_hours_report_service__WEBPACK_IMPORTED_MODULE_1__["HoursReportService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
HoursReportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: HoursReportComponent, selectors: [["app-hours-report"]], decls: 94, vars: 9, consts: [[1, "row"], [1, "col"], [1, "card-title"], ["dir", "ltr"], [1, "btn", "btn-primary"], [1, "btn", "btn-primary", 3, "routerLink"], [1, "card"], [1, "card-header"], ["dir", "ltr", 3, "displayMonths", "navigate"], ["datepicker", ""], ["ngbDatepickerContent", ""], [1, "card-content"], [1, "card-body"], [1, "table-responsive"], [1, "table"], [4, "ngFor", "ngForOf"], ["tabindex", "-1", "id", "offcanvas", "aria-labelledby", "offcanvasLabel", 1, "offcanvas", "offcanvas-start", "show", 3, "ngClass"], [1, "offcanvas-header"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close", "text-reset", 3, "click"], [1, "offcanvas-body"], [3, "ngClass"], [1, "text-bold-500"], [4, "ngIf"], [3, "report"], [1, "btn", "btn-primary", 3, "click"]], template: function HoursReportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ui-layout-horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "\n\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "\u05D3\u05D9\u05D5\u05D5\u05D7 \u05E9\u05E2\u05D5\u05EA \u05DC\u05D7\u05D5\u05D3\u05E9\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "\n  \n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "\n\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "\u05E1\u05D2\u05D9\u05E8\u05EA \u05D7\u05D5\u05D3\u05E9");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "  \u05D4\u05D5\u05E1\u05E4\u05EA \u05D3\u05D9\u05D5\u05D5\u05D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "\n    \u05DE\u05E7\u05D5\u05DD \u05E9\u05D9\u05E8\u05D5\u05EA: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "\u05D1\u05D7\u05D9\u05E8\u05EA \u05D7\u05D5\u05D3\u05E9\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "ngb-datepicker", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("navigate", function HoursReportComponent_Template_ngb_datepicker_navigate_35_listener($event) { return ctx.onDateSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](38, HoursReportComponent_ng_template_38_Template, 3, 1, "ng-template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "\n\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "table", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, "\n              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, "\u05EA\u05D0\u05E8\u05D9\u05DA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "\u05D9\u05D5\u05DD");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64, "\u05DB\u05E0\u05D9\u05E1\u05D4 /\u05D9\u05E6\u05D9\u05D0\u05D4");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66, "\n              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70, "\n              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](71, HoursReportComponent_ng_container_71_Template, 27, 10, "ng-container", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](72, "\n\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](75, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](76, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](77, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](78, "\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](80, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](82, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](83, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](84, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HoursReportComponent_Template_button_click_85_listener() { return ctx.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](86, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](87, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](89, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](90, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](91, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](92, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](93, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("\n        ", ctx.date == null ? null : ctx.date.month, "/", ctx.date == null ? null : ctx.date.year, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.placeSherutName);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("displayMonths", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.items == null ? null : ctx.items.data == null ? null : ctx.items.data.reportDays);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](7, _c1, ctx.showOffCanvase));
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
HoursReportButtonModule.ɵfac = function HoursReportButtonModule_Factory(t) { return new (t || HoursReportButtonModule)(); };
HoursReportButtonModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: HoursReportButtonModule });
HoursReportButtonModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](HoursReportButtonModule, { declarations: [_hours_report_button_component__WEBPACK_IMPORTED_MODULE_1__["HoursReportButtonComponent"], _hours_report_button_directive__WEBPACK_IMPORTED_MODULE_2__["HoursReportButtonDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [_hours_report_button_component__WEBPACK_IMPORTED_MODULE_1__["HoursReportButtonComponent"], _hours_report_button_directive__WEBPACK_IMPORTED_MODULE_2__["HoursReportButtonDirective"]] }); })();


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
HoursReportService.ɵfac = function HoursReportService_Factory(t) { return new (t || HoursReportService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_hours_report_data_service__WEBPACK_IMPORTED_MODULE_0__["HoursReportDataService"])); };
HoursReportService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: HoursReportService, factory: HoursReportService.ɵfac, providedIn: 'root' });


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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", item_r2.reportCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\n                  ", item_r2.reportCodeName, "\n\n                ");
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
FormComponent.ɵfac = function FormComponent_Factory(t) { return new (t || FormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_hours_report_service__WEBPACK_IMPORTED_MODULE_0__["HoursReportService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"])); };
FormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: FormComponent, selectors: [["app-form"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 161, vars: 2, consts: [[1, "card", "mt-5"], [1, "card-header"], [1, "card-title", "offcanvas-title"], [1, "card-body"], [1, "input-group", "mb-3"], ["for", "inputGroupSelect01", 1, "input-group-text"], ["id", "inputGroupSelect01", 1, "form-select", 3, "change"], ["reportType", ""], ["selected", ""], ["value", "1"], ["value", "2"], ["value", "3"], [3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-md-6", "col-12"], [1, "form-group"], ["for", "reportDate"], ["type", "date", "formControlName", "reportDate", "id", "reportDate", "placeholder", "\u05EA\u05D0\u05E8\u05D9\u05DA \u05D4\u05EA\u05D7\u05DC\u05D4", "name", "reportDate", 1, "form-control"], ["for", "toReportDate"], ["type", "date", "formControlName", "toReportDate", "id", "toReportDate", "placeholder", "\u05EA\u05D0\u05E8\u05D9\u05DA \u05E1\u05D9\u05D5\u05DD  ", "name", "toReportDate", 1, "form-control"], ["for", "reportStart"], ["type", "time", "formControlName", "reportStart", "id", "reportStart", "placeholder", "\u05E9\u05E2\u05EA \u05D4\u05EA\u05D7\u05DC\u05D4", "name", "reportStart", 1, "form-control"], ["for", "reportEnd"], ["type", "time", "formControlName", "reportEnd", "id", "reportEnd", "placeholder", "\u05E9\u05E2\u05EA \u05E1\u05D9\u05D5\u05DD  ", "name", "reportEnd", 1, "form-control"], [1, "col-12"], ["for", "reportCode", 1, "input-group-text"], ["formControlName", "reportCode", "id", "reportCode", 1, "form-select", 3, "change"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "first-name-column"], ["type", "file", "id", "formFileMultiple", "multiple", "", 1, "form-control"], [1, "col-12", "d-flex", "justify-content-end"], ["type", "submit", 1, "btn", "btn-primary", "me-1", "mb-1"], [3, "value"]], template: function FormComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " \u05D4\u05D5\u05E1\u05E4\u05EA \u05D3\u05D9\u05D5\u05D5\u05D7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "\u05E1\u05D5\u05D2 \u05D3\u05D9\u05D5\u05D5\u05D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "select", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function FormComponent_Template_select_change_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](16); return ctx.onReportTypeChange(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Choose...");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "\u05E0\u05D5\u05DB\u05D7\u05D5\u05EA");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "\u05D4\u05E2\u05D3\u05E8\u05D5\u05EA");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "\u05D7\u05D5\u05E4\u05E9\u05D4");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "\u05DE\u05D7\u05DC\u05D4");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "\u05E7\u05D5\u05E8\u05D5\u05E0\u05D4");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "\n\n\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "form", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function FormComponent_Template_form_ngSubmit_38_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "\u05EA\u05D0\u05E8\u05D9\u05DA \u05D4\u05EA\u05D7\u05DC\u05D4");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](49, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, "\u05EA\u05D0\u05E8\u05D9\u05DA \u05E1\u05D9\u05D5\u05DD ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](60, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, "\u05E9\u05E2\u05EA \u05D4\u05EA\u05D7\u05DC\u05D4");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](71, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](72, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](76, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](78, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](80, "\u05E9\u05E2\u05EA \u05E1\u05D9\u05D5\u05DD ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](81, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](82, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](83, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](84, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](85, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](87, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](89, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](91, "\n              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](93, "\u05E7\u05D5\u05D3 \u05D4\u05E2\u05D3\u05E8\u05D5\u05EA");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](94, "\n              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "select", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function FormComponent_Template_select_change_95_listener($event) { return ctx.onChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](96, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](98, "\u05D1\u05D7\u05E8\u05D9...");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](99, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](100, FormComponent_option_100_Template, 2, 2, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](101, "\n\n              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](102, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](103, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](104, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](105, "\n\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](106, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](107, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](108, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](109, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](110, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](111, " \u05D4\u05D5\u05E1\u05E4\u05EA \u05E7\u05D5\u05D1\u05E5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](112, "\n\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](113, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](114, "\n              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](115, "\n              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](116, "\n              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](117, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](118, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](119, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](120, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](121, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](122, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](123, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](124, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](125, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](126, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](127, " \u05D4\u05D5\u05E1\u05E4\u05EA \u05E7\u05D5\u05D1\u05E5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](128, "\n\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](129, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](130, "\n              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](131, "\n              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](132, "\n              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](133, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](134, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](135, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](136, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](137, "\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](138, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](139, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](140, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](141, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](142, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](143, " \u05D4\u05D5\u05E1\u05E4\u05EA \u05E7\u05D5\u05D1\u05E5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](144, "\n\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](145, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](146, "\n              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](147, "\n              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](148, "\n              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](149, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](150, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](151, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](152, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](153, "\n\n\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](154, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](155, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](156, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](157, "\u05D4\u05D5\u05E1\u05E4\u05EA \u05D3\u05D9\u05D5\u05D5\u05D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](158, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](159, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](160, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.reportCodes);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_z"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLmNvbXBvbmVudC5zY3NzIn0= */"] });


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
FilesComponent.ɵfac = function FilesComponent_Factory(t) { return new (t || FilesComponent)(); };
FilesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FilesComponent, selectors: [["app-files"]], decls: 70, vars: 0, consts: [[1, "card", "mt-5"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "form"], [1, "row"], [1, "col-md-6", "col-12"], [1, "form-group"], ["for", "first-name-column"], ["type", "date", "id", "first-name-column", "placeholder", "\u05EA\u05D0\u05E8\u05D9\u05DA \u05D4\u05EA\u05D7\u05DC\u05D4", "name", "fname-column", 1, "form-control"], ["for", "last-name-column"], ["type", "date", "id", "last-name-column", "placeholder", "\u05EA\u05D0\u05E8\u05D9\u05DA \u05E1\u05D9\u05D5\u05DD  ", "name", "lname-column", 1, "form-control"], [1, "input-group", "mb-3"], ["for", "inputGroupSelect01", 1, "input-group-text"], ["id", "inputGroupSelect01", 1, "form-select"], ["selected", ""], ["value", "1"], ["value", "2"], ["value", "3"], [1, "col-12", "d-flex", "justify-content-end"], ["type", "submit", 1, "btn", "btn-primary", "me-1", "mb-1"]], template: function FilesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u05D4\u05D5\u05E1\u05E4\u05EA \u05E7\u05D1\u05E6\u05D9\u05DD  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u05EA\u05D0\u05E8\u05D9\u05DA \u05D4\u05EA\u05D7\u05DC\u05D4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u05EA\u05D0\u05E8\u05D9\u05DA \u05E1\u05D9\u05D5\u05DD ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\n             ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\n              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\u05E7\u05D5\u05D3 \u05D4\u05E2\u05D3\u05E8\u05D5\u05EA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\n              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "\u05D1\u05D7\u05E8\u05D9...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "One");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Two");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Three");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "\n              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "\u05D4\u05D5\u05E1\u05E4\u05EA \u05E7\u05D1\u05E6\u05D9\u05DD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "\n         ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx_r0.report == null ? null : ctx_r0.report.reportNoteOut);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n\n    \u05D9\u05E6\u05D9\u05D0\u05D4 ", ctx_r0.report == null ? null : ctx_r0.report.reportEnd, "\n\n    \n\n  ");
} }
const _c0 = function (a1) { return ["update", a1]; };
function HourReportInstantceComponent_a_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u05D7\u05E1\u05E8\u05D4 \u05D9\u05E6\u05D9\u05D0\u05D4\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r1.report == null ? null : ctx_r1.report.mobileHrDetailsIndex));
} }
class HourReportInstantceComponent {
    constructor() { }
    ngOnInit() { }
    update() {
    }
}
HourReportInstantceComponent.ɵfac = function HourReportInstantceComponent_Factory(t) { return new (t || HourReportInstantceComponent)(); };
HourReportInstantceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HourReportInstantceComponent, selectors: [["app-hour-report-instantce"]], inputs: { report: "report" }, decls: 11, vars: 5, consts: [[3, "title"], [3, "title", 4, "ngIf"], ["class", "btn btn-link", "class", "bg-danger bg-gradient text-white", 3, "routerLink", 4, "ngIf"], [1, "bg-danger", "bg-gradient", "text-white", 3, "routerLink"]], template: function HourReportInstantceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HourReportInstantceComponent_span_6_Template, 2, 2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HourReportInstantceComponent_a_8_Template, 2, 3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx.report == null ? null : ctx.report.reportNoteIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n    \u05DB\u05E0\u05D9\u05E1\u05D4 ", ctx.report == null ? null : ctx.report.reportStart, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.report == null ? null : ctx.report.reportEnd);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.report == null ? null : ctx.report.reportEnd));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n  \u05E1\u05D4\"\u05DB:\n  ", ctx.report == null ? null : ctx.report.totalHours, "\n");
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
CalenderModule.ɵfac = function CalenderModule_Factory(t) { return new (t || CalenderModule)(); };
CalenderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: CalenderModule });
CalenderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _shlomit_ui__WEBPACK_IMPORTED_MODULE_3__["UiModule"], _calender_routing__WEBPACK_IMPORTED_MODULE_4__["CalenderRoutes"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](CalenderModule, { declarations: [_calender_component__WEBPACK_IMPORTED_MODULE_1__["CalenderComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _shlomit_ui__WEBPACK_IMPORTED_MODULE_3__["UiModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]], exports: [_calender_component__WEBPACK_IMPORTED_MODULE_1__["CalenderComponent"]] }); })();


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
HoursReportButtonComponent.ɵfac = function HoursReportButtonComponent_Factory(t) { return new (t || HoursReportButtonComponent)(); };
HoursReportButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HoursReportButtonComponent, selectors: [["app-hours-report-button"]], decls: 5, vars: 0, consts: [[1, "d-flex", "justify-content-center", "align-items-center", 2, "height", "100px"], [1, "btn", "btn-primary", "bg-info", "text-dark", "btn-xl"]], template: function HoursReportButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n \n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n    \u05D4\u05EA\u05D7\u05DC\u05D4\n\n \n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
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
HoursReportButtonDirective.ɵfac = function HoursReportButtonDirective_Factory(t) { return new (t || HoursReportButtonDirective)(); };
HoursReportButtonDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: HoursReportButtonDirective, selectors: [["", "appHoursReportButton", ""]] });


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
AbsenceComponent.ɵfac = function AbsenceComponent_Factory(t) { return new (t || AbsenceComponent)(); };
AbsenceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AbsenceComponent, selectors: [["app-absence"]], decls: 33, vars: 1, consts: [[1, "page-heading"], [1, "page-title"], [1, "row"], [1, "col-12", "col-md-6", "order-md-2", "order-last"], [1, "btn", "btn-primary", "btn-lg", 3, "routerLink"], [1, "col-12", "col-md-6", "order-md-1", "order-first"], [1, "text-subtitle", "text-muted"], [1, "section"]], template: function AbsenceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ui-layout-horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u05D4\u05D5\u05E1\u05E4\u05EA \u05D4\u05E2\u05D3\u05E8\u05D5\u05EA   ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\n              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u05D4\u05E2\u05D3\u05E8\u05D5\u05D9\u05D5\u05EA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\n              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u05D8\u05E7\u05E1\u05D8 \u05D8\u05E7\u05E1\u05D8 \u05D8\u05E7\u05E1\u05E1\u05D8.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\n  \n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "section", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\n\n       ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "add");
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
AbsenceModule.ɵfac = function AbsenceModule_Factory(t) { return new (t || AbsenceModule)(); };
AbsenceModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AbsenceModule });
AbsenceModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shlomit_ui__WEBPACK_IMPORTED_MODULE_3__["UiModule"], _absence_routing__WEBPACK_IMPORTED_MODULE_2__["AbsenceRoutes"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AbsenceModule, { declarations: [_absence_component__WEBPACK_IMPORTED_MODULE_1__["AbsenceComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shlomit_ui__WEBPACK_IMPORTED_MODULE_3__["UiModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]], exports: [_absence_component__WEBPACK_IMPORTED_MODULE_1__["AbsenceComponent"]] }); })();


/***/ })

}]);
//# sourceMappingURL=shlomit-hours-report.js.map