(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~shlomit-auth-login~shlomit-hours-report"],{

/***/ "1jdK":
/*!*******************************************************!*\
  !*** ./libs/ui/src/lib/form/error/error.validator.ts ***!
  \*******************************************************/
/*! exports provided: CustomValidators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomValidators", function() { return CustomValidators; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _custom_error_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./custom-error.validator */ "2NV3");
/*
                      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  This Validator is deprecated due to inability to use i18n service inside it.
  It will be removed in the future.

  Please replace it with new validator - libs\shared\ui\form\src\lib\error\custom-error.validator.ts
  To be able to use it:
  1) import "libs\shared\ui\form\src\lib\form.module.ts" into your module
  2) inject "MultilingualValidators" as regular Angular service where you want it to use

  Example of usage:

  1) inside the super() of the constructor
  
  constructor(
    public fb: FormBuilder,
    private customValidators: MultilingualValidators,
  ) {
    super(fb.group({entityId: ['', customValidators.required]}));
  }
  
  2) regular case:
    
  fb.group({entityId: ['', this.customValidators.required]})


  If you need to change something in Validator, please change in both until this one be removed.
*/



const deprecatedMessage = `libs/shared/ui/form/src/lib/error/error.validator.ts is deprecated and will be removed soon.
Please replace it with:
libs/shared/ui/form/src/lib/error/custom-error.validator.ts. See error.validator.ts for description.`;
const showWarning = () => console.warn(deprecatedMessage);
class CustomValidators extends _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"] {
    // Source: https://medium.com/ngx/3-ways-to-implement-conditional-validation-of-reactive-forms-c59ed6fc3325
    static conditional(predicate, validator) {
        showWarning();
        return (control) => {
            if (!control.parent) {
                return null;
            }
            if (predicate()) {
                return validator(control);
            }
            return null;
        };
    }
    static required(control) {
        const baseRequired = _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required(control);
        const isRequired = baseRequired && baseRequired.required;
        showWarning();
        return isRequired
            ? {
                required: {
                    message: '@@FIELD_REQUIRED',
                    displayMessage: 'Please fill up the required field',
                },
            }
            : null;
    }
    static maxAmount(input) {
        showWarning();
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
                    displayMessage: 'The Amount value is above the limit',
                },
            };
        };
    }
    static minLength(min) {
        showWarning();
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
                    displayMessage: 'The length of the string is shorter than expected',
                    requiredLength,
                    actualLength,
                },
            };
        };
    }
    static maxLength(max) {
        showWarning();
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
                    displayMessage: 'The length of the string is higher than expected',
                    requiredLength,
                    actualLength,
                },
            };
        };
    }
    static israelyIdNumber(control) {
        showWarning();
        return !control.value ||
            CustomValidators.isValidIsraelyIdNumber(control.value)
            ? null
            : {
                time: {
                    message: '@@INVALID_TIME',
                    displayMessage: 'תעודת זהות לא חוקית',
                },
            };
    }
    static email(control) {
        showWarning();
        if (!control.value) {
            return null;
        }
        return _custom_error_validator__WEBPACK_IMPORTED_MODULE_2__["RegexPatterns"].email.test(control.value)
            ? null
            : {
                email: {
                    message: '@@INVALID_EMAIL',
                    displayMessage: 'Please ensure your email is valid',
                },
            };
    }
    static phone(control) {
        showWarning();
        if (!control.value) {
            return null;
        }
        return _custom_error_validator__WEBPACK_IMPORTED_MODULE_2__["RegexPatterns"].phoneNumber.test(control.value)
            ? null
            : {
                phone: {
                    message: '@@NOT_A_PHONE_NUMBER',
                    displayMessage: 'Please enter a valid phone number',
                },
            };
    }
    static validateCharacters(control) {
        showWarning();
        if (control.value && control.value.length > 0) {
            const matches = control.value.match(_custom_error_validator__WEBPACK_IMPORTED_MODULE_2__["RegexPatterns"].validCharacters);
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
                        displayMessage: `Please don’t use these invalid characters: ${characters}`,
                    },
                };
            }
            return null;
        }
        return null;
    }
    static url(control) {
        showWarning();
        if (control.value && control.value.length > 0) {
            return _custom_error_validator__WEBPACK_IMPORTED_MODULE_2__["RegexPatterns"].url.test(control.value)
                ? null
                : {
                    url: {
                        message: '@@INVALID_URL',
                        displayMessage: 'Please enter a valid URL',
                    },
                };
        }
        return null;
    }
    static digits(control) {
        showWarning();
        if (!control.value) {
            return null;
        }
        return _custom_error_validator__WEBPACK_IMPORTED_MODULE_2__["RegexPatterns"].digits.test(control.value)
            ? null
            : {
                digits: {
                    message: '@@CONTAINS_NON_DIGITS',
                    displayMessage: 'Please use only digits charters',
                },
            };
    }
    static double(control) {
        showWarning();
        if (!control.value) {
            return null;
        }
        return _custom_error_validator__WEBPACK_IMPORTED_MODULE_2__["RegexPatterns"].double.test(control.value)
            ? null
            : {
                double: {
                    message: '@@CONTAINS_NON_NUMBER_OR_DOUBLE',
                    displayMessage: 'Please use only integer or double numbers',
                },
            };
    }
    static onlyStrings(control) {
        showWarning();
        if (!control.value) {
            return null;
        }
        return _custom_error_validator__WEBPACK_IMPORTED_MODULE_2__["RegexPatterns"].strings.test(control.value)
            ? null
            : {
                onlyStrings: {
                    message: '@@CONTAINS_NON_ALPAHBET',
                    displayMessage: 'Please use only alphabet charters',
                },
            };
    }
    static ip(control) {
        showWarning();
        if (!control.value) {
            return null;
        }
        return _custom_error_validator__WEBPACK_IMPORTED_MODULE_2__["RegexPatterns"].ip.test(control.value)
            ? null
            : {
                ip: {
                    message: '@@CONTAINS_INVALID_IP_FORMAT',
                    displayMessage: 'Please enter a valid IP address',
                },
            };
    }
    static ipPort(lastPort) {
        showWarning();
        return (control) => {
            if (!control.value) {
                return null;
            }
            return Number(control.value) && Number(control.value) <= lastPort
                ? null
                : {
                    ip: {
                        message: '@@CONTAINS_INVALID_IP_FORMAT',
                        displayMessage: 'Please enter a valid port',
                    },
                };
        };
    }
    static version(control) {
        showWarning();
        if (!control.value) {
            return null;
        }
        return _custom_error_validator__WEBPACK_IMPORTED_MODULE_2__["RegexPatterns"].version.test(control.value)
            ? null
            : {
                version: {
                    message: '@@CONTAINS_INVALID_VERSION_FORMAT',
                    displayMessage: 'Please enter a valid version format ([2].[3].[4].[6])',
                },
            };
    }
    static nonZeroVersion(control) {
        showWarning();
        if (!control.value) {
            return null;
        }
        return !_custom_error_validator__WEBPACK_IMPORTED_MODULE_2__["RegexPatterns"].nonZeroVersion.test(control.value)
            ? null
            : {
                nonZeroVersion: {
                    message: '@@CONTAINS_ALL_0',
                    displayMessage: 'Version could not contain all 0',
                },
            };
    }
    static maxWords(max) {
        showWarning();
        return (control) => {
            const maxWords = new RegExp(`(\\w+\\W+){${max}}\\w+(\\W+\\w+)*`);
            if (!control.value) {
                return null;
            }
            return !maxWords.test(control.value)
                ? null
                : {
                    minWords: {
                        message: `@@MORE_THAN_${max}_WORDS`,
                        displayMessage: `Please don't use more than ${max} words`,
                    },
                };
        };
    }
    static validateFirstLastCharacters(control) {
        showWarning();
        if (!control.value) {
            return null;
        }
        return !_custom_error_validator__WEBPACK_IMPORTED_MODULE_2__["RegexPatterns"].validateFirstLastCharacters.test(control.value)
            ? null
            : {
                validateFirstLastCharacters: {
                    message: '@@CONTAINS_INVALID_FIRST_OR_LAST_SYMBOL',
                    displayMessage: 'Please enter a valid first or last symbols',
                },
            };
    }
    static cartesBancairesPaymentType(processorType, defaultPaymentTypes) {
        showWarning();
        return (control) => {
            if (!control.value) {
                return null;
            }
            const invalidTypes = control.value.filter((paymentType) => !defaultPaymentTypes.includes(paymentType));
            return invalidTypes.length
                ? {
                    version: {
                        message: `@@${processorType.value} does not support: ${invalidTypes.join(',')}`,
                        displayMessage: `@@${processorType.value} does not support: ${invalidTypes.join(',')}`,
                    },
                }
                : null;
        };
    }
    static validSelectedValue(validValues) {
        showWarning();
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
                        displayMessage: 'Please enter a valid value',
                    },
                };
        };
    }
    static allSpaces(control) {
        showWarning();
        if (!control.value) {
            return null;
        }
        return !_custom_error_validator__WEBPACK_IMPORTED_MODULE_2__["RegexPatterns"].allSpaces.test(control.value)
            ? null
            : {
                allSpaces: {
                    message: '@@CONTAINS_ALL_SPACES',
                    displayMessage: 'Could not contains only spaces',
                },
            };
    }
    static price(control) {
        showWarning();
        if (!control.value) {
            return null;
        }
        return _custom_error_validator__WEBPACK_IMPORTED_MODULE_2__["RegexPatterns"].price.test(control.value)
            ? null
            : {
                price: {
                    message: '@@CONTAINS_INVALID_PRICE_FORMAT',
                    displayMessage: 'Please enter a valid price (X.XX)',
                },
            };
    }
    static nonZero(control) {
        showWarning();
        if (control.value === null) {
            return null;
        }
        return !_custom_error_validator__WEBPACK_IMPORTED_MODULE_2__["RegexPatterns"].nonZero.test(control.value)
            ? null
            : {
                nonZero: {
                    message: '@@0_NOT_ALLOWED',
                    displayMessage: '0 is not allowed',
                },
            };
    }
    static oneSpaceBetweenWords(control) {
        showWarning();
        if (!control.value) {
            return null;
        }
        return _custom_error_validator__WEBPACK_IMPORTED_MODULE_2__["RegexPatterns"].oneSpaceBetweenWords.test(control.value.trim())
            ? null
            : {
                version: {
                    message: '@@CONTAINS_MORE_THAN_ONE_SPACE_BETWEEN_WORDS',
                    displayMessage: 'Please avoid extra spaces',
                },
            };
    }
    static higherVersion(oldVersion) {
        showWarning();
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
                            displayMessage: `The version number should be grater than ${oldVersion}`,
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
                    displayMessage: `The version number should be grater than ${oldVersion}`,
                },
            };
        };
    }
    static time(control) {
        showWarning();
        return !control.value || CustomValidators.isValidTime(control.value)
            ? null
            : {
                time: {
                    message: '@@INVALID_TIME',
                    displayMessage: 'Invalid time format',
                },
            };
    }
    static timePair(group) {
        showWarning();
        const startControl = group.get('start');
        const endControl = group.get('end');
        if (startControl.value &&
            CustomValidators.isValidTime(startControl.value) &&
            endControl.value &&
            CustomValidators.isValidTime(endControl.value)) {
            if (startControl.value >= endControl.value) {
                return {
                    timePair: {
                        message: '@@INVALID_TIME_PAIR',
                        displayMessage: 'End time should be after start time',
                    },
                };
            }
        }
        return null;
    }
    static timePairOverlap(array) {
        showWarning();
        const values = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["compact"])(array.value.flatMap((item) => {
            if (CustomValidators.isValidTime(item.start) &&
                CustomValidators.isValidTime(item.end) &&
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
                    displayMessage: 'Timeslots should not overlap',
                },
            };
    }
    static markOneOption(openingHours) {
        showWarning();
        return openingHours.value.length
            ? null
            : {
                markOneOption: {
                    message: '@@INVALID_MARRK_ONE_OPTION',
                    displayMessage: 'Please mark at least one option and add valid hours',
                },
            };
    }
    static iban(control) {
        showWarning();
        if (!control.value) {
            return null;
        }
        return _custom_error_validator__WEBPACK_IMPORTED_MODULE_2__["RegexPatterns"].iban.test(control.value)
            ? null
            : {
                iban: {
                    message: '@@CONTAINS_INVALID_IBAN_FORMAT',
                    displayMessage: 'Please enter a valid IBAN code',
                },
            };
    }
    /*
      https://developers.google.com/maps/documentation/javascript/reference/coordinates?hl=fr#LatLng
      "Longitude ranges between -180 and 180 degrees, inclusive."
    */
    static longitude(control) {
        showWarning();
        if (!control.value) {
            return null;
        }
        const numberValue = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["toNumber"])(control.value);
        return !Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isNaN"])(numberValue) && numberValue <= 180 && numberValue >= -180
            ? null
            : {
                longitude: {
                    message: '@@CONTAINS_INVALID_LONGITUDE',
                    displayMessage: 'Please enter a valid longitude',
                },
            };
    }
    /*
      https://developers.google.com/maps/documentation/javascript/reference/coordinates?hl=fr#LatLng
      "Latitude ranges between -90 and 90 degrees, inclusive."
    */
    static latitude(control) {
        showWarning();
        if (!control.value) {
            return null;
        }
        const numberValue = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["toNumber"])(control.value);
        return !Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isNaN"])(numberValue) && numberValue <= 90 && numberValue >= -90
            ? null
            : {
                latitude: {
                    message: '@@CONTAINS_INVALID_LATITUDE',
                    displayMessage: 'Please enter a valid latitude',
                },
            };
    }
    static isValidIsraelyIdNumber(id) {
        var id = String(id).trim();
        if (id.length > 9 || id.length < 5 || Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isNaN"])(id))
            return false;
        // Pad string with zeros up to 9 digits
        id = id.length < 9 ? ('00000000' + id).slice(-9) : id;
        return (Array.from(id, Number).reduce((counter, digit, i) => {
            const step = digit * ((i % 2) + 1);
            return counter + (step > 9 ? step - 9 : step);
        }) %
            10 ===
            0);
    }
    static isValidTime(timeString) {
        return (_custom_error_validator__WEBPACK_IMPORTED_MODULE_2__["RegexPatterns"].time.test(timeString) &&
            timeString >= '00:00' &&
            timeString <= '23:59');
    }
}


/***/ })

}]);
//# sourceMappingURL=default~shlomit-auth-login~shlomit-hours-report.js.map