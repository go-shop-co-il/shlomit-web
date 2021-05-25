(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/Gkt":
/*!************************************************!*\
  !*** ./libs/ui/src/lib/menu/menu.component.ts ***!
  \************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");






const _c0 = function (a0) { return [a0]; };
function MenuComponent_li_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c0, p_r1.url));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](p_r1.title);
} }
const _c1 = function (a0) { return { "active": a0 }; };
class MenuComponent {
    constructor(router) {
        this.isOpen = true;
        this.appPages = [
            { title: 'ראשי', url: '/dashboard', icon: 'apps' },
            { title: 'נוכחות', url: '/hours-report', icon: 'paper-plane' },
            { title: 'העדרות', url: '/absence', icon: 'heart' },
            { title: 'לוח שנה', url: '/calender', icon: 'calender' },
            { title: 'התראות', url: '/alerts', icon: 'alerts' },
            { title: 'דוחות', url: '/reports', icon: 'warning' },
            { title: 'כניסה', url: '/auth', icon: 'warning' },
        ];
        router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])((event) => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationEnd"]))
            .subscribe((event) => {
            console.log(event.url);
            // this.isOpen = !this.isOpen;
        });
    }
    ngOnInit() { }
    onClick() {
        this.isOpen = !this.isOpen;
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"])); };
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["ui-menu"]], inputs: { isOpen: "isOpen" }, decls: 38, vars: 4, consts: [["id", "sidebar", 3, "ngClass"], [1, "sidebar-wrapper", "active"], [1, "sidebar-header"], [1, "d-flex", "justify-content-between"], [1, "logo"], ["href", "index.html"], ["src", "https://www.shlomit.org.il/wp-content/uploads/2017/01/logo_1-1.svg", "alt", "Logo", "srcset", ""], [1, "toggler", 3, "click"], [1, "sidebar-hide", "d-xl-none", "d-block"], [1, "bi", "bi-x", "bi-middle"], [1, "sidebar-menu"], [1, "menu"], ["class", "sidebar-item ", "routerLinkActive", "active", 4, "ngFor", "ngForOf"], [1, "sidebar-toggler", "btn", "x"], ["data-feather", "x"], ["routerLinkActive", "active", 1, "sidebar-item"], [1, "sidebar-link", 3, "routerLink"], [1, "bi", "bi-grid-fill"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MenuComponent_Template_div_click_14_listener() { return ctx.onClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "\n\n\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "\n\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, MenuComponent_li_29_Template, 10, 4, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "\n\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "\n\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c1, ctx.isOpen));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.appPages);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZW51LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 0:
/*!************************************!*\
  !*** multi ./apps/web/src/main.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Projects\go-sites\ShlomitMobile\apps\web\src\main.ts */"mNEa");


/***/ }),

/***/ "2NV3":
/*!**************************************************************!*\
  !*** ./libs/ui/src/lib/form/error/custom-error.validator.ts ***!
  \**************************************************************/
/*! exports provided: RegexPatterns, MultilingualValidators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegexPatterns", function() { return RegexPatterns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultilingualValidators", function() { return MultilingualValidators; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");



const RegexPatterns = {
    // email regex copied from `/lib/regex.js` we dont' limit the email extensions, https://data.iana.org/TLD/tlds-alpha-by-domain.txt
    // All segments of FQDNs (provided that they are not IDNs, which incurs further restrictions), including TLDs are limited to 63 ASCII characters.
    // eslint-disable-next-line max-len
    // this email regex is freezing the browser on fast typing , its to heavy regex
    // example is here : https://stackblitz.com/edit/reactive-form-formbuilder-exam-hap792?file=src%2Fapp%2Fuser-form%2Fuser-form.component.ts
    // email:  /^[\w\u00C0-\u024F]+([\.-]?[\w\u00C0-\u024F]+)+@[\w\u00C0-\u024F]+([\.-]?[\w\u00C0-\u024F]+)*(\.\w{2,63})+$/,
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    validCharacters: /[^\s\w\u00C0-\u024F\u2C60-\u2C7F\uA720-\uA7FF\u1E00-\u1EFF,.:&\/()+%'`@-]/g,
    phoneNumber: /^(\+ ?\d+)(( ?\d)+)$/,
    url: new RegExp('^(?:(?:https?):\\/\\/)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))\\.?)(?::\\d{2,5})?(?:[/?#]\\S*)?$', 'i'),
    digits: /^\d+$/,
    double: /^\d{1,2}\.\d{1,2}|\d$/,
    strings: /^[A-Za-z]+$/,
    version: /^\d{1,2}\.\d{1,3}(\.\d{1,4}(\.\d{1,6})?)?$/,
    nonZeroVersion: /^[0\.]*$/,
    validateFirstLastCharacters: /(^[%&?,'`~,:/+@#$^*. )])|([&,':/+@#^*($%]$)/,
    // https://www.w3resource.com/javascript/form/ip-address-validation.php
    ip: /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
    allSpaces: /^\s+$/,
    price: /^\d{1,17}(\.\d\d?)?$/,
    time: /^\d{2}:\d{2}$/,
    nonZero: /^[0\.]+$/,
    oneSpaceBetweenWords: /^(\S+ )*\S+$/,
    //copied form ES docs gbx-entity-service1.1.12.html#operation/createEntitySepaAccount - iban
    iban: /^[a-zA-Z]{2,2}[0-9]{2,2}[a-zA-Z0-9]{1,30}$/,
    merchantReference: /^[^=+\-@].*/,
    merchantReferenceCode: /^[0-9]{4}$/,
    // For Tid list
    terminalId: /^[a-zA-Z0-9]{1,12}$/,
};
class MultilingualValidators {
    constructor() {
        // Source: https://medium.com/ngx/3-ways-to-implement-conditional-validation-of-reactive-forms-c59ed6fc3325
        this.conditional = (predicate, validator) => {
            return (control) => {
                if (!control.parent) {
                    return null;
                }
                if (predicate(control.parent)) {
                    return validator(control);
                }
                return null;
            };
        };
        this.required = (control) => {
            const baseRequired = _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required(control);
            const isRequired = baseRequired && baseRequired.required;
            return isRequired
                ? {
                    required: {
                        message: '@@FIELD_REQUIRED',
                        displayMessage: $localize `Please fill up the required field`,
                    },
                }
                : null;
        };
        this.maxAmount = (input, message) => {
            return (control) => {
                if (!control.value) {
                    return null;
                }
                const maxAmount = _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].max(Number(input))(control);
                if (!maxAmount) {
                    return null;
                }
                return {
                    max: {
                        message: '@@AMOUNT_TOO_HIGH',
                        displayMessage: message || $localize `The Amount value is above the limit`,
                    },
                };
            };
        };
        this.minLength = (min) => {
            return (control) => {
                if (!control.value) {
                    return null;
                }
                const baseMinLength = _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(min)(control);
                if (!baseMinLength) {
                    return null;
                }
                const requiredLength = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(baseMinLength, 'maxlength.requiredLength');
                const actualLength = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(baseMinLength, 'maxlength.actualLength');
                return {
                    maxLength: {
                        message: '@@NUMBER_TOO_LOW',
                        displayMessage: $localize `The length of the string is shorter than expected`,
                        requiredLength,
                        actualLength,
                    },
                };
            };
        };
        this.maxLength = (max) => {
            return (control) => {
                if (!control.value) {
                    return null;
                }
                const baseMaxLength = _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(max)(control);
                if (!baseMaxLength) {
                    return null;
                }
                const requiredLength = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(baseMaxLength, 'maxlength.requiredLength');
                const actualLength = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(baseMaxLength, 'maxlength.actualLength');
                return {
                    maxLength: {
                        message: '@@NUMBER_TOO_HIGH',
                        displayMessage: $localize `The length of the string is higher than expected`,
                        requiredLength,
                        actualLength,
                    },
                };
            };
        };
        this.email = (control) => {
            if (!control.value) {
                return null;
            }
            return RegexPatterns.email.test(control.value)
                ? null
                : {
                    email: {
                        message: '@@INVALID_EMAIL',
                        displayMessage: $localize `Please ensure your email is valid`,
                    },
                };
        };
        this.phone = (control) => {
            if (!control.value) {
                return null;
            }
            return RegexPatterns.phoneNumber.test(control.value)
                ? null
                : {
                    phone: {
                        message: '@@NOT_A_PHONE_NUMBER',
                        displayMessage: $localize `Please enter a valid phone number`,
                    },
                };
        };
        this.merchantReference = (control) => {
            if (!control.value) {
                return null;
            }
            return RegexPatterns.merchantReference.test(control.value)
                ? null
                : {
                    merchantReference: {
                        message: '@@INVALID_MERCHANT_REFERENCE',
                        displayMessage: $localize `Merchant reference cannot start with "=", "+", "-", or "@"`,
                    },
                };
        };
        this.merchantReferenceCode = (control) => {
            if (!control.value) {
                return null;
            }
            return RegexPatterns.merchantReferenceCode.test(control.value)
                ? null
                : {
                    merchantReferenceCode: {
                        message: '@@INVALID_MERCHANT_REFERENCE_CODE',
                        displayMessage: $localize `Please enter a valid 4-digit Merchant Category Code`,
                    },
                };
        };
        this.validateCharacters = (control) => {
            if (control.value && control.value.length > 0) {
                const matches = control.value.match(RegexPatterns.validCharacters);
                if (matches && matches.length) {
                    const characters = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["reduce"])(matches, (characterString, character, index) => {
                        let string = characterString;
                        string += character;
                        if (matches.length !== index + 1) {
                            string += ', ';
                        }
                        return string;
                    }, '');
                    return {
                        validateCharacters: {
                            characters,
                            message: `@@CHARACTERS_NOT_ALLOWED, invalid: ${characters}`,
                            displayMessage: $localize `Please don’t use these invalid characters: ${characters}:characters:`,
                        },
                    };
                }
                return null;
            }
            return null;
        };
        this.url = (control) => {
            if (control.value && control.value.length > 0) {
                return RegexPatterns.url.test(control.value)
                    ? null
                    : {
                        url: {
                            message: '@@INVALID_URL',
                            displayMessage: $localize `Please enter a valid URL`,
                        },
                    };
            }
            return null;
        };
        this.digits = (control) => {
            if (!control.value) {
                return null;
            }
            return RegexPatterns.digits.test(control.value)
                ? null
                : {
                    digits: {
                        message: '@@CONTAINS_NON_DIGITS',
                        displayMessage: $localize `Please use only digits charters`,
                    },
                };
        };
        this.double = (control) => {
            if (!control.value) {
                return null;
            }
            return RegexPatterns.double.test(control.value)
                ? null
                : {
                    double: {
                        message: '@@CONTAINS_NON_NUMBER_OR_DOUBLE',
                        displayMessage: $localize `Please use only integer or double numbers`,
                    },
                };
        };
        this.onlyStrings = (control) => {
            if (!control.value) {
                return null;
            }
            return RegexPatterns.strings.test(control.value)
                ? null
                : {
                    onlyStrings: {
                        message: '@@CONTAINS_NON_ALPAHBET',
                        displayMessage: $localize `Please use only alphabet characters`,
                    },
                };
        };
        this.ip = (control) => {
            if (!control.value) {
                return null;
            }
            return RegexPatterns.ip.test(control.value)
                ? null
                : {
                    ip: {
                        message: '@@CONTAINS_INVALID_IP_FORMAT',
                        displayMessage: $localize `Please enter a valid IP address`,
                    },
                };
        };
        this.ipPort = (lastPort) => {
            return (control) => {
                if (!control.value) {
                    return null;
                }
                return Number(control.value) && Number(control.value) <= lastPort
                    ? null
                    : {
                        ip: {
                            message: '@@CONTAINS_INVALID_IP_FORMAT',
                            displayMessage: $localize `Please enter a valid port`,
                        },
                    };
            };
        };
        this.version = (control) => {
            if (!control.value) {
                return null;
            }
            return RegexPatterns.version.test(control.value)
                ? null
                : {
                    version: {
                        message: '@@CONTAINS_INVALID_VERSION_FORMAT',
                        displayMessage: $localize `Please enter a valid version format ([2].[3].[4].[6])`,
                    },
                };
        };
        this.nonZeroVersion = (control) => {
            if (!control.value) {
                return null;
            }
            return !RegexPatterns.nonZeroVersion.test(control.value)
                ? null
                : {
                    nonZeroVersion: {
                        message: '@@CONTAINS_ALL_0',
                        displayMessage: $localize `Version could not contain all 0`,
                    },
                };
        };
        this.validateFirstLastCharacters = (control) => {
            if (!control.value) {
                return null;
            }
            return !RegexPatterns.validateFirstLastCharacters.test(control.value)
                ? null
                : {
                    validateFirstLastCharacters: {
                        message: '@@CONTAINS_INVALID_FIRST_OR_LAST_SYMBOL',
                        displayMessage: $localize `Please enter a valid first or last symbols`,
                    },
                };
        };
        this.cartesBancairesPaymentType = (processorType, defaultPaymentTypes) => {
            return (control) => {
                if (!control.value) {
                    return null;
                }
                const invalidTypes = control.value.filter((paymentType) => !defaultPaymentTypes.includes(paymentType));
                const doesNotSupport = $localize `does not support`;
                return invalidTypes.length
                    ? {
                        version: {
                            message: `@@${processorType.value} does not support: ${invalidTypes.join(',')}`,
                            displayMessage: `@@${processorType.value} ${doesNotSupport}: ${invalidTypes.join(',')}`,
                        },
                    }
                    : null;
            };
        };
        this.validSelectedValue = (validValues) => {
            return (control) => {
                if (!control.value) {
                    return null;
                }
                const isValidValue = validValues.some((value) => value === control.value);
                return isValidValue
                    ? null
                    : {
                        validSelectedValue: {
                            message: '@@CONTAINS_INVALID_VALUE',
                            displayMessage: $localize `Please enter a valid value`,
                        },
                    };
            };
        };
        this.allSpaces = (control) => {
            if (!control.value) {
                return null;
            }
            return !RegexPatterns.allSpaces.test(control.value)
                ? null
                : {
                    allSpaces: {
                        message: '@@CONTAINS_ALL_SPACES',
                        displayMessage: $localize `Could not contain only spaces`,
                    },
                };
        };
        this.price = (control) => {
            if (!control.value) {
                return null;
            }
            return RegexPatterns.price.test(control.value)
                ? null
                : {
                    price: {
                        message: '@@CONTAINS_INVALID_PRICE_FORMAT',
                        displayMessage: $localize `Please enter a valid price (X.XX)`,
                    },
                };
        };
        this.nonZero = (control) => {
            if (control.value === null) {
                return null;
            }
            return !RegexPatterns.nonZero.test(control.value)
                ? null
                : {
                    nonZero: {
                        message: '@@0_NOT_ALLOWED',
                        displayMessage: $localize `0 is not allowed`,
                    },
                };
        };
        this.oneSpaceBetweenWords = (control) => {
            if (!control.value) {
                return null;
            }
            return RegexPatterns.oneSpaceBetweenWords.test(control.value.trim())
                ? null
                : {
                    version: {
                        message: '@@CONTAINS_MORE_THAN_ONE_SPACE_BETWEEN_WORDS',
                        displayMessage: $localize `Please avoid extra spaces`,
                    },
                };
        };
        this.higherVersion = (oldVersion) => {
            return (control) => {
                if (!control.value) {
                    return null;
                }
                const oldV = oldVersion.split('.');
                const newV = control.value.split('.');
                while (oldV.length < newV.length) {
                    oldV.push('0');
                }
                while (newV.length < oldV.length) {
                    newV.push('0');
                }
                for (let i = 0; i < oldV.length; ++i) {
                    if (newV.length === i) {
                        return null;
                    }
                    if (+oldV[i] === +newV[i]) {
                        continue;
                    }
                    else if (+oldV[i] > +newV[i]) {
                        return {
                            higherVersion: {
                                message: `@@VERSION_MUST_BE_MORE_THAN_CURRENT_${oldVersion}`,
                                displayMessage: $localize `The version number should be greater than ${oldVersion}:oldVersion:`,
                            },
                        };
                    }
                    else {
                        return null;
                    }
                }
                return {
                    higherVersion: {
                        message: `@@VERSION_MUST_BE_MORE_THAN_CURRENT_${oldVersion}`,
                        displayMessage: $localize `The version number should be greater than ${oldVersion}:oldVersion:`,
                    },
                };
            };
        };
        this.time = (control) => {
            return !control.value || MultilingualValidators.isValidTime(control.value)
                ? null
                : {
                    time: {
                        message: '@@INVALID_TIME',
                        displayMessage: $localize `Invalid time format`,
                    },
                };
        };
        this.timePair = (group) => {
            const startControl = group.get('start');
            const endControl = group.get('end');
            if (startControl.value &&
                MultilingualValidators.isValidTime(startControl.value) &&
                endControl.value &&
                MultilingualValidators.isValidTime(endControl.value)) {
                if (startControl.value >= endControl.value) {
                    return {
                        timePair: {
                            message: '@@INVALID_TIME_PAIR',
                            displayMessage: $localize `End time should be after start time`,
                        },
                    };
                }
            }
            return null;
        };
        this.timePairOverlap = (array) => {
            const values = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["compact"])(array.value.flatMap((item) => {
                if (MultilingualValidators.isValidTime(item.start) &&
                    MultilingualValidators.isValidTime(item.end) &&
                    item.start < item.end) {
                    return [item.start, item.end];
                }
            }));
            const sortedValues = [...values].sort();
            return values.join(',') === sortedValues.join(',')
                ? null
                : {
                    timePairOverlap: {
                        message: '@@INVALID_TIME_PAIR_OVERLAP',
                        displayMessage: $localize `Timeslots should not overlap`,
                    },
                };
        };
        this.markOneOption = (openingHours) => {
            return openingHours.value.length
                ? null
                : {
                    markOneOption: {
                        message: '@@INVALID_MARRK_ONE_OPTION',
                        displayMessage: $localize `Please mark at least one option and add valid hours`,
                    },
                };
        };
        this.iban = (control) => {
            if (!control.value) {
                return null;
            }
            return RegexPatterns.iban.test(control.value)
                ? null
                : {
                    iban: {
                        message: '@@CONTAINS_INVALID_IBAN_FORMAT',
                        displayMessage: $localize `Please enter a valid IBAN code`,
                    },
                };
        };
        /*
          https://developers.google.com/maps/documentation/javascript/reference/coordinates?hl=fr#LatLng
          "Longitude ranges between -180 and 180 degrees, inclusive."
        */
        this.longitude = (control) => {
            if (!control.value) {
                return null;
            }
            const numberValue = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["toNumber"])(control.value);
            return !Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isNaN"])(numberValue) && numberValue <= 180 && numberValue >= -180
                ? null
                : {
                    longitude: {
                        message: '@@CONTAINS_INVALID_LONGITUDE',
                        displayMessage: $localize `Please enter a valid longitude`,
                    },
                };
        };
        /*
          https://developers.google.com/maps/documentation/javascript/reference/coordinates?hl=fr#LatLng
          "Latitude ranges between -90 and 90 degrees, inclusive."
        */
        this.latitude = (control) => {
            if (!control.value) {
                return null;
            }
            const numberValue = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["toNumber"])(control.value);
            return !Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isNaN"])(numberValue) && numberValue <= 90 && numberValue >= -90
                ? null
                : {
                    latitude: {
                        message: '@@CONTAINS_INVALID_LATITUDE',
                        displayMessage: $localize `Please enter a valid latitude`,
                    },
                };
        };
        this.terminalId = (control) => {
            if (!control.value) {
                return null;
            }
            return RegexPatterns.terminalId.test(control.value)
                ? null
                : {
                    terminalId: {
                        message: '@@CONTAINS_INVALID_TERMINAL_ID_FORMAT',
                        displayMessage: $localize `Please enter a valid terminal ID`,
                    },
                };
        };
    }
    static isValidTime(timeString) {
        return (RegexPatterns.time.test(timeString) &&
            timeString >= '00:00' &&
            timeString <= '23:59');
    }
}
MultilingualValidators.ɵfac = function MultilingualValidators_Factory(t) { return new (t || MultilingualValidators)(); };
MultilingualValidators.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: MultilingualValidators, factory: MultilingualValidators.ɵfac });


/***/ }),

/***/ "2ODP":
/*!********************************************************************!*\
  !*** ./libs/shared/interfaces/src/lib/hours-report/report-code.ts ***!
  \********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "3MaS":
/*!*************************************************************!*\
  !*** ./libs/shared/interfaces/src/lib/hours-report/date.ts ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "4DCQ":
/*!***********************************************!*\
  !*** ./libs/shared/http-wrapper/src/index.ts ***!
  \***********************************************/
/*! exports provided: SharedHttpWrapperModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_shared_http_wrapper_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/shared-http-wrapper.module */ "Q76e");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedHttpWrapperModule", function() { return _lib_shared_http_wrapper_module__WEBPACK_IMPORTED_MODULE_0__["SharedHttpWrapperModule"]; });




/***/ }),

/***/ "5PGf":
/*!*******************************************************!*\
  !*** ./libs/ui/src/lib/form/error/error.component.ts ***!
  \*******************************************************/
/*! exports provided: FormErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormErrorComponent", function() { return FormErrorComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _enums_error_check_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enums/error-check.enum */ "UjsP");
/* harmony import */ var _error_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error.service */ "mtfV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "SVse");






function FormErrorComponent_div_0_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattributeInterpolate1"]("data-e2e", "error-", ctx_r1.errorId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("\n    ", message_r2, "\n  ");
} }
function FormErrorComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, FormErrorComponent_div_0_p_2_Template, 2, 2, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.messages);
} }
class FormErrorComponent {
    isInvalid() {
        return _error_service__WEBPACK_IMPORTED_MODULE_3__["ErrorService"].isFieldInvalid(this.formInput, this.checkOn);
    }
    get messages() {
        if (!this.formInput) {
            return [];
        }
        return Object(lodash__WEBPACK_IMPORTED_MODULE_1__["map"])(this.formInput.errors, (error, errorKey) => {
            // ng-bootstrap datepicker includes validation but without messages,
            // so we need to add it ourselves
            if (errorKey === 'ngbDate') {
                error = _error_service__WEBPACK_IMPORTED_MODULE_3__["ErrorService"].addMessageToNgbError(error);
            }
            return Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(error, 'displayMessage', '');
        });
    }
}
FormErrorComponent.ɵfac = function FormErrorComponent_Factory(t) { return new (t || FormErrorComponent)(); };
FormErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: FormErrorComponent, selectors: [["app-form-error"]], inputs: { formInput: "formInput", checkOn: "checkOn", errorId: "errorId" }, decls: 2, vars: 1, consts: [["class", "help is-danger", 4, "ngIf"], [1, "help", "is-danger"], [4, "ngFor", "ngForOf"]], template: function FormErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, FormErrorComponent_div_0_Template, 4, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isInvalid() && ctx.messages.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], encapsulation: 2 });


/***/ }),

/***/ "7GHE":
/*!*********************************************!*\
  !*** ./libs/shared/interfaces/src/index.ts ***!
  \*********************************************/
/*! exports provided: InterfacesModule, AUTH */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_interfaces_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/interfaces.module */ "yrBv");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InterfacesModule", function() { return _lib_interfaces_module__WEBPACK_IMPORTED_MODULE_0__["InterfacesModule"]; });

/* harmony import */ var _lib_auth_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/auth/auth */ "vOzH");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AUTH", function() { return _lib_auth_auth__WEBPACK_IMPORTED_MODULE_1__["AUTH"]; });

/* harmony import */ var _lib_auth_token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/auth/token */ "F0SK");
/* empty/unused harmony star reexport *//* harmony import */ var _lib_hours_report_report_code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/hours-report/report-code */ "2ODP");
/* empty/unused harmony star reexport *//* harmony import */ var _lib_hours_report_date__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/hours-report/date */ "3MaS");
/* empty/unused harmony star reexport */






/***/ }),

/***/ "C9LD":
/*!**********************************************************!*\
  !*** ./libs/auth/authentication/src/lib/auth.service.ts ***!
  \**********************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _shlomit_shared_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shlomit/shared/interfaces */ "7GHE");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "NAv5");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");






class AuthService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.authEvents = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.authEvents.subscribe((data) => {
            localStorage.setItem('access_token', data.accessToken);
        });
    }
    get token() {
        return localStorage.getItem('access_token');
    }
    get tokenData() {
        return this._tokenData;
    }
    set tokenData(val) {
        this._tokenData = val;
        this.authEvents.next(val);
    }
    authenticate(data) {
        this.httpClient.post(_shlomit_shared_interfaces__WEBPACK_IMPORTED_MODULE_1__["AUTH"].LOGIN(), data).subscribe((data) => { });
    }
    getTokenWithSsmCode(data) {
        return this.httpClient.post(_shlomit_shared_interfaces__WEBPACK_IMPORTED_MODULE_1__["AUTH"].TOKEN(), data);
    }
    afterLogin() {
        this.httpClient.get(_shlomit_shared_interfaces__WEBPACK_IMPORTED_MODULE_1__["AUTH"].GETUSERS()).subscribe((data) => { });
    }
    logout() {
        this.tokenData = null;
    }
    hasTokenExpired() {
        let exp;
        const accessToken = localStorage.getItem('access_token');
        if (!accessToken) {
            return false;
        }
        try {
            exp = JSON.parse(atob(accessToken.split('.')[1])).exp;
            const tokenExpiryDate = new Date(0);
            tokenExpiryDate.setUTCSeconds(exp);
            const currentDate = new Date();
            if (Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["isBefore"])(tokenExpiryDate, currentDate)) {
                // this.notifier.warn($localize`Session has expired! Please login again`);
                return true;
            }
            return false;
        }
        catch (error) {
            console.error(error);
            // this.notifier.error($localize`Invalid session detected! Please login`);
            return true;
        }
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "F0SK":
/*!******************************************************!*\
  !*** ./libs/shared/interfaces/src/lib/auth/token.ts ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "FpGh":
/*!***************************************************!*\
  !*** ./libs/shared/routes/src/lib/app.routing.ts ***!
  \***************************************************/
/*! exports provided: AppRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutes", function() { return AppRoutes; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "iInd");

const routes = [
    {
        path: '',
        redirectTo: 'auth',
        pathMatch: 'full',
    },
    {
        path: 'auth',
        loadChildren: () => Promise.all(/*! import() | shlomit-auth-login */[__webpack_require__.e("default~shlomit-auth-login~shlomit-hours-report"), __webpack_require__.e("shlomit-auth-login")]).then(__webpack_require__.bind(null, /*! @shlomit/auth/login */ "4V8C")).then((m) => m.LoginModule),
    },
    // {
    //   path: 'dashboard',
    //   loadChildren: () =>
    //     import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
    // },
    {
        path: 'dashboard',
        loadChildren: () => Promise.all(/*! import() | shlomit-dashboard */[__webpack_require__.e("default~shlomit-alerts~shlomit-dashboard~shlomit-hours-report"), __webpack_require__.e("shlomit-dashboard")]).then(__webpack_require__.bind(null, /*! @shlomit/dashboard */ "KrcD")).then((m) => m.DashboardModule),
    },
    {
        path: 'alerts',
        loadChildren: () => Promise.all(/*! import() | shlomit-alerts */[__webpack_require__.e("default~shlomit-alerts~shlomit-dashboard~shlomit-hours-report"), __webpack_require__.e("shlomit-alerts")]).then(__webpack_require__.bind(null, /*! @shlomit/alerts */ "aBwZ")).then((m) => m.AlertsModule),
    },
    {
        path: 'calender',
        loadChildren: () => Promise.all(/*! import() | shlomit-hours-report */[__webpack_require__.e("default~shlomit-alerts~shlomit-dashboard~shlomit-hours-report"), __webpack_require__.e("default~shlomit-auth-login~shlomit-hours-report"), __webpack_require__.e("shlomit-hours-report")]).then(__webpack_require__.bind(null, /*! @shlomit/hours-report */ "97V7")).then((m) => m.CalenderModule),
    },
    {
        path: 'absence',
        loadChildren: () => Promise.all(/*! import() | shlomit-hours-report */[__webpack_require__.e("default~shlomit-alerts~shlomit-dashboard~shlomit-hours-report"), __webpack_require__.e("default~shlomit-auth-login~shlomit-hours-report"), __webpack_require__.e("shlomit-hours-report")]).then(__webpack_require__.bind(null, /*! @shlomit/hours-report */ "97V7")).then((m) => m.AbsenceModule),
    },
    {
        path: 'hours-report',
        loadChildren: () => Promise.all(/*! import() | shlomit-hours-report */[__webpack_require__.e("default~shlomit-alerts~shlomit-dashboard~shlomit-hours-report"), __webpack_require__.e("default~shlomit-auth-login~shlomit-hours-report"), __webpack_require__.e("shlomit-hours-report")]).then(__webpack_require__.bind(null, /*! @shlomit/hours-report */ "97V7")).then((m) => m.HoursReportModule),
    },
];
const AppRoutes = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "HCn3":
/*!*********************************************************************************!*\
  !*** ./libs/ui/src/lib/layout/layout-horizontal/layout-horizontal.component.ts ***!
  \*********************************************************************************/
/*! exports provided: LayoutHorizontalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutHorizontalComponent", function() { return LayoutHorizontalComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../menu/menu.component */ "/Gkt");




const _c0 = ["*"];
class LayoutHorizontalComponent {
    constructor(route, router) {
        this.route = route;
        this.router = router;
        this.showOffCanvase = false;
        this.isOpen = true;
    }
    ngOnInit() {
        this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationEnd"]) {
                this.showOffCanvase = this.route.snapshot.data['showOffCanvase'];
            }
        });
    }
    onClick() {
        this.isOpen = !this.isOpen;
        // this.menu.isopen = !this.menu.isopen;
    }
    toggle() {
        this.showOffCanvase = !this.showOffCanvase;
    }
}
LayoutHorizontalComponent.ɵfac = function LayoutHorizontalComponent_Factory(t) { return new (t || LayoutHorizontalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"])); };
LayoutHorizontalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LayoutHorizontalComponent, selectors: [["ui-layout-horizontal"]], ngContentSelectors: _c0, decls: 22, vars: 1, consts: [[3, "isOpen"], ["id", "main", 1, "layout-navbar"], ["id", "main-content"], [1, "footer", "clearfix", "mb-0", "text-muted"], [1, "float-start"]], template: function LayoutHorizontalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ui-menu", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("isOpen", ctx.isOpen);
    } }, directives: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuComponent"]], styles: [".offcanvas.show[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGxheW91dC1ob3Jpem9udGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsbUJBQUE7QUFBSiIsImZpbGUiOiJsYXlvdXQtaG9yaXpvbnRhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vZmZjYW52YXMge1xyXG4gICYuc2hvdyB7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "HD8G":
/*!*******************************************!*\
  !*** ./apps/web/src/app/app.component.ts ***!
  \*******************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _libs_ui_src_lib_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../libs/ui/src/lib/layout/layout.component */ "bEk8");


class AppComponent {
    constructor() {
        this.title = 'web';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["shlomit-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ui-layout");
    } }, directives: [_libs_ui_src_lib_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__["LayoutComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "HYn3":
/*!******************************!*\
  !*** ./libs/ui/src/index.ts ***!
  \******************************/
/*! exports provided: UiModule, FormBaseModule, FormBaseDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_ui_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/ui.module */ "V9qr");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UiModule", function() { return _lib_ui_module__WEBPACK_IMPORTED_MODULE_0__["UiModule"]; });

/* harmony import */ var _lib_form_form_base_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/form/form-base.module */ "V3nj");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormBaseModule", function() { return _lib_form_form_base_module__WEBPACK_IMPORTED_MODULE_1__["FormBaseModule"]; });

/* harmony import */ var _lib_form_form_base_form_base_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/form/form-base/form-base.directive */ "yraV");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormBaseDirective", function() { return _lib_form_form_base_form_base_directive__WEBPACK_IMPORTED_MODULE_2__["FormBaseDirective"]; });






/***/ }),

/***/ "PIN6":
/*!*************************************!*\
  !*** ./environments/environment.ts ***!
  \*************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const API_ENDPOINT = {
    api: 'http://109.226.23.217:4001',
};
const environment = {
    production: false,
    API_ENDPOINT,
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

/***/ "Q76e":
/*!************************************************************************!*\
  !*** ./libs/shared/http-wrapper/src/lib/shared-http-wrapper.module.ts ***!
  \************************************************************************/
/*! exports provided: SharedHttpWrapperModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedHttpWrapperModule", function() { return SharedHttpWrapperModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _interceptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interceptors */ "y0Zc");




class SharedHttpWrapperModule {
    static init() {
        return {
            ngModule: SharedHttpWrapperModule,
            providers: [_interceptors__WEBPACK_IMPORTED_MODULE_2__["httpInterceptorProviders"]],
        };
    }
}
SharedHttpWrapperModule.ɵfac = function SharedHttpWrapperModule_Factory(t) { return new (t || SharedHttpWrapperModule)(); };
SharedHttpWrapperModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedHttpWrapperModule });
SharedHttpWrapperModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedHttpWrapperModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] }); })();


/***/ }),

/***/ "UjsP":
/*!**************************************************************!*\
  !*** ./libs/ui/src/lib/form/error/enums/error-check.enum.ts ***!
  \**************************************************************/
/*! exports provided: ErrorCheck */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorCheck", function() { return ErrorCheck; });
var ErrorCheck;
(function (ErrorCheck) {
    ErrorCheck["Dirty"] = "dirty";
})(ErrorCheck || (ErrorCheck = {}));


/***/ }),

/***/ "UojI":
/*!***********************************************!*\
  !*** ./libs/auth/authentication/src/index.ts ***!
  \***********************************************/
/*! exports provided: AuthenticationModule, AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_authentication_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/authentication.module */ "pmzK");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationModule", function() { return _lib_authentication_module__WEBPACK_IMPORTED_MODULE_0__["AuthenticationModule"]; });

/* harmony import */ var _lib_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/auth.service */ "C9LD");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return _lib_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]; });





/***/ }),

/***/ "V3nj":
/*!**************************************************!*\
  !*** ./libs/ui/src/lib/form/form-base.module.ts ***!
  \**************************************************/
/*! exports provided: FormBaseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormBaseModule", function() { return FormBaseModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _form_base_form_base_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-base/form-base.directive */ "yraV");
/* harmony import */ var _form_base_form_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-base/form-base.component */ "fdeG");
/* harmony import */ var _error_error_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./error/error.service */ "mtfV");
/* harmony import */ var _error_custom_error_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./error/custom-error.validator */ "2NV3");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./error/error.component */ "5PGf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "8Y7J");








class FormBaseModule {
}
FormBaseModule.ɵfac = function FormBaseModule_Factory(t) { return new (t || FormBaseModule)(); };
FormBaseModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: FormBaseModule });
FormBaseModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [_error_error_service__WEBPACK_IMPORTED_MODULE_4__["ErrorService"], _error_custom_error_validator__WEBPACK_IMPORTED_MODULE_5__["MultilingualValidators"]], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](FormBaseModule, { declarations: [_form_base_form_base_component__WEBPACK_IMPORTED_MODULE_3__["FormBaseComponent"], _form_base_form_base_directive__WEBPACK_IMPORTED_MODULE_2__["FormBaseDirective"], _error_error_component__WEBPACK_IMPORTED_MODULE_6__["FormErrorComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]], exports: [_form_base_form_base_directive__WEBPACK_IMPORTED_MODULE_2__["FormBaseDirective"], _error_error_component__WEBPACK_IMPORTED_MODULE_6__["FormErrorComponent"]] }); })();


/***/ }),

/***/ "V9qr":
/*!**************************************!*\
  !*** ./libs/ui/src/lib/ui.module.ts ***!
  \**************************************/
/*! exports provided: UiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiModule", function() { return UiModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout/layout.module */ "jExi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _menu_menu_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu/menu.module */ "g41A");
/* harmony import */ var _form_form_base_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form/form-base.module */ "V3nj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "8Y7J");






class UiModule {
}
UiModule.ɵfac = function UiModule_Factory(t) { return new (t || UiModule)(); };
UiModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: UiModule });
UiModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            _menu_menu_module__WEBPACK_IMPORTED_MODULE_3__["MenuModule"],
            _form_form_base_module__WEBPACK_IMPORTED_MODULE_4__["FormBaseModule"],
            _layout_layout_module__WEBPACK_IMPORTED_MODULE_1__["LayoutModule"]], _layout_layout_module__WEBPACK_IMPORTED_MODULE_1__["LayoutModule"], _menu_menu_module__WEBPACK_IMPORTED_MODULE_3__["MenuModule"], _form_form_base_module__WEBPACK_IMPORTED_MODULE_4__["FormBaseModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](UiModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        _menu_menu_module__WEBPACK_IMPORTED_MODULE_3__["MenuModule"],
        _form_form_base_module__WEBPACK_IMPORTED_MODULE_4__["FormBaseModule"],
        _layout_layout_module__WEBPACK_IMPORTED_MODULE_1__["LayoutModule"]], exports: [_layout_layout_module__WEBPACK_IMPORTED_MODULE_1__["LayoutModule"], _menu_menu_module__WEBPACK_IMPORTED_MODULE_3__["MenuModule"], _form_form_base_module__WEBPACK_IMPORTED_MODULE_4__["FormBaseModule"]] }); })();


/***/ }),

/***/ "X699":
/*!****************************************!*\
  !*** ./apps/web/src/app/app.module.ts ***!
  \****************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "HD8G");
/* harmony import */ var _shlomit_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shlomit/ui */ "HYn3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _shlomit_shared_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shlomit/shared/routes */ "fqTp");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _shlomit_shared_http_wrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shlomit/shared/http-wrapper */ "4DCQ");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _libs_shared_http_wrapper_src_lib_shared_http_wrapper_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../libs/shared/http-wrapper/src/lib/shared-http-wrapper.module */ "Q76e");











class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _shlomit_shared_routes__WEBPACK_IMPORTED_MODULE_4__["RoutesModule"],
            _shlomit_ui__WEBPACK_IMPORTED_MODULE_2__["UiModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _shlomit_shared_http_wrapper__WEBPACK_IMPORTED_MODULE_7__["SharedHttpWrapperModule"].init(),
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
        _shlomit_shared_routes__WEBPACK_IMPORTED_MODULE_4__["RoutesModule"],
        _shlomit_ui__WEBPACK_IMPORTED_MODULE_2__["UiModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _libs_shared_http_wrapper_src_lib_shared_http_wrapper_module__WEBPACK_IMPORTED_MODULE_10__["SharedHttpWrapperModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]] }); })();


/***/ }),

/***/ "bEk8":
/*!****************************************************!*\
  !*** ./libs/ui/src/lib/layout/layout.component.ts ***!
  \****************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");


const _c0 = ["*"];
class LayoutComponent {
    constructor() {
        // @ViewChild(MenuComponent) menu;
        this.isOpen = true;
    }
    ngOnInit() { }
    onClick() {
        this.isOpen = !this.isOpen;
        // this.menu.isopen = !this.menu.isopen;
    }
}
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(); };
LayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LayoutComponent, selectors: [["ui-layout"]], ngContentSelectors: _c0, decls: 5, vars: 0, template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 0, ["#name", ""]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n\n\n        ");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "fdeG":
/*!***************************************************************!*\
  !*** ./libs/ui/src/lib/form/form-base/form-base.component.ts ***!
  \***************************************************************/
/*! exports provided: FormBaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormBaseComponent", function() { return FormBaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");

class FormBaseComponent {
    constructor() { }
    ngOnInit() {
    }
}
FormBaseComponent.ɵfac = function FormBaseComponent_Factory(t) { return new (t || FormBaseComponent)(); };
FormBaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormBaseComponent, selectors: [["app-form-base"]], decls: 3, vars: 0, template: function FormBaseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n  form-base works!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLWJhc2UuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "fqTp":
/*!*****************************************!*\
  !*** ./libs/shared/routes/src/index.ts ***!
  \*****************************************/
/*! exports provided: routesRoutes, RoutesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_routes_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/routes.module */ "sxRN");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "routesRoutes", function() { return _lib_routes_module__WEBPACK_IMPORTED_MODULE_0__["routesRoutes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RoutesModule", function() { return _lib_routes_module__WEBPACK_IMPORTED_MODULE_0__["RoutesModule"]; });




/***/ }),

/***/ "g41A":
/*!*********************************************!*\
  !*** ./libs/ui/src/lib/menu/menu.module.ts ***!
  \*********************************************/
/*! exports provided: MenuModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuModule", function() { return MenuModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.component */ "/Gkt");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




class MenuModule {
}
MenuModule.ɵfac = function MenuModule_Factory(t) { return new (t || MenuModule)(); };
MenuModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: MenuModule });
MenuModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MenuModule, { declarations: [_menu_component__WEBPACK_IMPORTED_MODULE_1__["MenuComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_menu_component__WEBPACK_IMPORTED_MODULE_1__["MenuComponent"]] }); })();


/***/ }),

/***/ "jExi":
/*!*************************************************!*\
  !*** ./libs/ui/src/lib/layout/layout.module.ts ***!
  \*************************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout.component */ "bEk8");
/* harmony import */ var _menu_menu_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menu/menu.module */ "g41A");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _full_width_full_width_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./full-width/full-width.component */ "raRM");
/* harmony import */ var _layout_horizontal_layout_horizontal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout-horizontal/layout-horizontal.component */ "HCn3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "8Y7J");







class LayoutModule {
}
LayoutModule.ɵfac = function LayoutModule_Factory(t) { return new (t || LayoutModule)(); };
LayoutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: LayoutModule });
LayoutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _menu_menu_module__WEBPACK_IMPORTED_MODULE_2__["MenuModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](LayoutModule, { declarations: [_layout_component__WEBPACK_IMPORTED_MODULE_1__["LayoutComponent"], _full_width_full_width_component__WEBPACK_IMPORTED_MODULE_4__["FullWidthComponent"], _layout_horizontal_layout_horizontal_component__WEBPACK_IMPORTED_MODULE_5__["LayoutHorizontalComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _menu_menu_module__WEBPACK_IMPORTED_MODULE_2__["MenuModule"]], exports: [_layout_component__WEBPACK_IMPORTED_MODULE_1__["LayoutComponent"], _full_width_full_width_component__WEBPACK_IMPORTED_MODULE_4__["FullWidthComponent"], _layout_horizontal_layout_horizontal_component__WEBPACK_IMPORTED_MODULE_5__["LayoutHorizontalComponent"]] }); })();


/***/ }),

/***/ "mNEa":
/*!******************************!*\
  !*** ./apps/web/src/main.ts ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ "PIN6");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "X699");




if (environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch((err) => console.error(err));


/***/ }),

/***/ "mtfV":
/*!*****************************************************!*\
  !*** ./libs/ui/src/lib/form/error/error.service.ts ***!
  \*****************************************************/
/*! exports provided: ErrorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorService", function() { return ErrorService; });
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/get */ "mwIZ");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isArray */ "Z0cm");
/* harmony import */ var lodash_isArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/map */ "3WF5");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_2__);



// @dynamic
class ErrorService {
    static isFieldInvalid(control, checkOn) {
        const shouldValidate = checkOn ? control.touched || control[checkOn] : control.touched;
        const isInvalid = shouldValidate && control.invalid;
        return isInvalid;
    }
    static getFormattedMessage(details) {
        return lodash_map__WEBPACK_IMPORTED_MODULE_2___default()(details, (value, key) => {
            let formattedValue = value;
            if (lodash_isArray__WEBPACK_IMPORTED_MODULE_1___default()(value)) {
                const valueAsArray = value;
                formattedValue = valueAsArray.join(',');
            }
            return `${key}: ${formattedValue}. `;
        });
    }
    static getErrorMessage(error) {
        // pick the top level error message by default, this is the lowest priority.
        let message = error.message;
        // pick the error message returned by backend
        const errorMessage = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(error, 'error.message');
        if (errorMessage) {
            message = errorMessage;
        }
        // pick the error message returned by backend in an array
        const errorsMessage = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(error, 'error.errors[0].message');
        if (errorsMessage) {
            message = errorsMessage;
        }
        // pick detailed error message returned by backend
        const additionalPropertiesError = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(error, 'error.additionalProperties.error');
        if (additionalPropertiesError) {
            message = additionalPropertiesError;
        }
        const embeddedAdditionalPropertiesError = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(error, 'error.error.additionalProperties.error');
        if (embeddedAdditionalPropertiesError) {
            message = embeddedAdditionalPropertiesError;
        }
        return message;
    }
    /**
     * @description
     *
     * Returns the status code of error object
     *
     * @Param {Object} httpError - Error which was Threw on http request
     *
     * @Param {number|string} httpError.error.status - The status code of httpError if param instanceof HttpErrorResponse
     *
     * @Param {number|string} httpError.error.status The status code of httpError if param instanceof DataServiceError
     *
     * @Param {number|string} httpError.error.code The status code of httpError if param instanceof DataServiceError or an object
     *
     * @Param {string} httpError.error The error property of httpError object might be an json string if param instanceof DataServiceError or an object.
     * In this case we should parse it and get the status code.
     *
     *  @returns {number} Returns the value of status code.
     */
    static addMessageToNgbError(ngbError) {
        if (ngbError.invalid) {
            ngbError.message = '@@INVALID_DATE';
        }
        return ngbError;
    }
}


/***/ }),

/***/ "pmzK":
/*!*******************************************************************!*\
  !*** ./libs/auth/authentication/src/lib/authentication.module.ts ***!
  \*******************************************************************/
/*! exports provided: AuthenticationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationModule", function() { return AuthenticationModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "C9LD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




class AuthenticationModule {
}
AuthenticationModule.ɵfac = function AuthenticationModule_Factory(t) { return new (t || AuthenticationModule)(); };
AuthenticationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AuthenticationModule });
AuthenticationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AuthenticationModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]] }); })();


/***/ }),

/***/ "raRM":
/*!*******************************************************************!*\
  !*** ./libs/ui/src/lib/layout/full-width/full-width.component.ts ***!
  \*******************************************************************/
/*! exports provided: FullWidthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullWidthComponent", function() { return FullWidthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");

class FullWidthComponent {
    constructor() { }
    ngOnInit() {
    }
}
FullWidthComponent.ɵfac = function FullWidthComponent_Factory(t) { return new (t || FullWidthComponent)(); };
FullWidthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FullWidthComponent, selectors: [["ui-full-width"]], decls: 3, vars: 0, template: function FullWidthComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n  full-width works!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmdWxsLXdpZHRoLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "sfMF":
/*!***************************************************************************!*\
  !*** ./libs/shared/http-wrapper/src/lib/interceptors/auth-interceptor.ts ***!
  \***************************************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _shlomit_auth_authentication__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shlomit/auth/authentication */ "UojI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");




class AuthInterceptor {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(req, next) {
        // if (req.url.includes('public')) {
        //   return next.handle(req);
        // }
        const token = this.authService.token;
        if (!token) {
            return next.handle(req);
        }
        if (req.url &&
            // Only intercept non-authentication request as
            // they use specific headers that should not be modified
            !req.url.includes('access_token')) {
            if (this.authService.hasTokenExpired()) {
                this.authService.logout();
                return next.handle(req);
            }
            // Clone the request and replace the original headers with modified ones
            let modifiedReq;
            if (req.body && req.body instanceof FormData) {
                modifiedReq = req.clone({
                    headers: req.headers.set('Authorization', `Bearer ${token}`),
                });
            }
            else {
                modifiedReq = req.clone({
                    headers: req.headers
                        .set('Content-type', 'application/json') //this header breaks image loading
                        .set('Authorization', `Bearer ${token}`),
                });
            }
            // send cloned request with header to the next handler.
            return next.handle(modifiedReq);
        }
        return next.handle(req);
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_shlomit_auth_authentication__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });


/***/ }),

/***/ "sxRN":
/*!*****************************************************!*\
  !*** ./libs/shared/routes/src/lib/routes.module.ts ***!
  \*****************************************************/
/*! exports provided: routesRoutes, RoutesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routesRoutes", function() { return routesRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutesModule", function() { return RoutesModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.routing */ "FpGh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");




const routesRoutes = [];
class RoutesModule {
}
RoutesModule.ɵfac = function RoutesModule_Factory(t) { return new (t || RoutesModule)(); };
RoutesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: RoutesModule });
RoutesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routesRoutes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_0__["PreloadAllModules"] }),
            _app_routing__WEBPACK_IMPORTED_MODULE_1__["AppRoutes"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"],
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](RoutesModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "vOzH":
/*!*****************************************************!*\
  !*** ./libs/shared/interfaces/src/lib/auth/auth.ts ***!
  \*****************************************************/
/*! exports provided: AUTH */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH", function() { return AUTH; });
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! environments/environment */ "PIN6");

const AUTH = {
    LOGIN: () => {
        return `${environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].API_ENDPOINT.api}/api/auth/login`;
    },
    TOKEN: () => {
        return `${environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].API_ENDPOINT.api}/api/auth/token`;
    },
    REFRESH_TOKEN: () => {
        return `${environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].API_ENDPOINT.api}/api/auth/refresh-token`;
    },
    GETUSERS: () => {
        return `${environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].API_ENDPOINT.api}/api/auth/getusers`;
    },
};


/***/ }),

/***/ "y0Zc":
/*!****************************************************************!*\
  !*** ./libs/shared/http-wrapper/src/lib/interceptors/index.ts ***!
  \****************************************************************/
/*! exports provided: httpInterceptorProviders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpInterceptorProviders", function() { return httpInterceptorProviders; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _auth_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-interceptor */ "sfMF");


const httpInterceptorProviders = [
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: _auth_interceptor__WEBPACK_IMPORTED_MODULE_1__["AuthInterceptor"], multi: true },
];


/***/ }),

/***/ "yrBv":
/*!*************************************************************!*\
  !*** ./libs/shared/interfaces/src/lib/interfaces.module.ts ***!
  \*************************************************************/
/*! exports provided: InterfacesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterfacesModule", function() { return InterfacesModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class InterfacesModule {
}
InterfacesModule.ɵfac = function InterfacesModule_Factory(t) { return new (t || InterfacesModule)(); };
InterfacesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: InterfacesModule });
InterfacesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](InterfacesModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]] }); })();


/***/ }),

/***/ "yraV":
/*!***************************************************************!*\
  !*** ./libs/ui/src/lib/form/form-base/form-base.directive.ts ***!
  \***************************************************************/
/*! exports provided: FormBaseDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormBaseDirective", function() { return FormBaseDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);





class FormBaseDirective {
    constructor(form) {
        this.formValidated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._whitelistEmptyValue = new Set();
        this._fieldToOmit = new Set();
        this._fieldsToNullify = new Set();
        this._fieldsToNullifyByCondition = new Map();
        this._form = form;
    }
    get form() {
        return this._form;
    }
    setFormGroup(newFormGroup) {
        this._form = newFormGroup;
    }
    setFormValue(input) {
        this._form.patchValue(input);
    }
    isEmptyValue() {
        return (value, key) => {
            return value === '' && !this._whitelistEmptyValue.has(key);
        };
    }
    omitFieldFromPayload() {
        return (_value, key) => {
            return this._fieldToOmit.has(key);
        };
    }
    nullifyEmptyValues(formValues) {
        this._fieldsToNullify.forEach((fieldToNullify) => {
            const value = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["get"])(formValues, fieldToNullify);
            if (value === '') {
                Object(lodash__WEBPACK_IMPORTED_MODULE_2__["set"])(formValues, fieldToNullify, null);
            }
        });
        return formValues;
    }
    nullifyByCondition(formValues) {
        this._fieldsToNullifyByCondition.forEach((condition, fieldToNullify) => {
            const value = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["get"])(formValues, fieldToNullify);
            if (condition(value)) {
                Object(lodash__WEBPACK_IMPORTED_MODULE_2__["set"])(formValues, fieldToNullify, null);
            }
        });
        return formValues;
    }
    submit() {
        this._form.markAllAsTouched();
        if (this._form.valid) {
            // If a backend doesn't allow a field to be set as an empty string,
            // we need to set it to `null` in order to clear its value
            const nullifiedEmptyValues = this.nullifyEmptyValues(this._form.getRawValue());
            const nullifiedByConditionValues = this.nullifyByCondition(nullifiedEmptyValues);
            const removeEmptyValue = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["omitBy"])(nullifiedByConditionValues, this.isEmptyValue());
            const sanitized = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["omitBy"])(removeEmptyValue, this.omitFieldFromPayload());
            this.formValidated.emit(sanitized);
        }
    }
    set whitelistEmptyValue(newList) {
        this._whitelistEmptyValue = newList;
    }
    get whitelistEmptyValue() {
        return this._whitelistEmptyValue;
    }
    get fieldToOmit() {
        return this._fieldToOmit;
    }
    set fieldToOmit(newList) {
        this._fieldToOmit = newList;
    }
    get fieldsToNullify() {
        return this._fieldsToNullify;
    }
    set fieldsToNullify(newList) {
        this._fieldsToNullify = newList;
    }
    get fieldsToNullifyByCondition() {
        return this._fieldsToNullifyByCondition;
    }
    set fieldsToNullifyByCondition(newList) {
        this._fieldsToNullifyByCondition = newList;
    }
}
FormBaseDirective.ɵfac = function FormBaseDirective_Factory(t) { return new (t || FormBaseDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"])); };
FormBaseDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: FormBaseDirective, selectors: [["", "appFormBase", ""]], outputs: { formValidated: "formValidated" } });


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map