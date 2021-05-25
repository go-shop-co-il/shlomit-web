(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~shlomit-alerts~shlomit-dashboard~shlomit-hours-report"],{

/***/ "1Bn7":
/*!****************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index.js ***!
  \****************************************************/
/*! exports provided: createAnimation, iosTransitionAnimation, mdTransitionAnimation, getTimeGivenProgression, createGesture, getPlatforms, initialize, isPlatform, componentOnReady, IonicSafeString, LIFECYCLE_DID_ENTER, LIFECYCLE_DID_LEAVE, LIFECYCLE_WILL_ENTER, LIFECYCLE_WILL_LEAVE, LIFECYCLE_WILL_UNLOAD, menuController, actionSheetController, alertController, loadingController, modalController, pickerController, popoverController, toastController, getMode, setupConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMode", function() { return getMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupConfig", function() { return setupConfig; });
/* harmony import */ var _animation_096c6391_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation-096c6391.js */ "meiF");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createAnimation", function() { return _animation_096c6391_js__WEBPACK_IMPORTED_MODULE_0__["c"]; });

/* harmony import */ var _ios_transition_48010460_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ios.transition-48010460.js */ "lTIg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "iosTransitionAnimation", function() { return _ios_transition_48010460_js__WEBPACK_IMPORTED_MODULE_1__["iosTransitionAnimation"]; });

/* harmony import */ var _md_transition_464fd4a8_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./md.transition-464fd4a8.js */ "RQGG");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mdTransitionAnimation", function() { return _md_transition_464fd4a8_js__WEBPACK_IMPORTED_MODULE_2__["mdTransitionAnimation"]; });

/* harmony import */ var _cubic_bezier_eea9a7a9_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cubic-bezier-eea9a7a9.js */ "bC4P");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTimeGivenProgression", function() { return _cubic_bezier_eea9a7a9_js__WEBPACK_IMPORTED_MODULE_3__["g"]; });

/* harmony import */ var _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index-f49d994d.js */ "iWo5");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createGesture", function() { return _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_4__["createGesture"]; });

/* harmony import */ var _ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ionic-global-63a97a32.js */ "E/Mt");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPlatforms", function() { return _ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_5__["g"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialize", function() { return _ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_5__["i"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPlatform", function() { return _ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_5__["a"]; });

/* harmony import */ var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers-dd7e4b7b.js */ "1vRN");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "componentOnReady", function() { return _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_6__["c"]; });

/* harmony import */ var _index_9e3fe806_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index-9e3fe806.js */ "39oe");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IonicSafeString", function() { return _index_9e3fe806_js__WEBPACK_IMPORTED_MODULE_7__["I"]; });

/* harmony import */ var _index_c3ff7f2e_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index-c3ff7f2e.js */ "k4ps");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LIFECYCLE_DID_ENTER", function() { return _index_c3ff7f2e_js__WEBPACK_IMPORTED_MODULE_8__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LIFECYCLE_DID_LEAVE", function() { return _index_c3ff7f2e_js__WEBPACK_IMPORTED_MODULE_8__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LIFECYCLE_WILL_ENTER", function() { return _index_c3ff7f2e_js__WEBPACK_IMPORTED_MODULE_8__["L"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LIFECYCLE_WILL_LEAVE", function() { return _index_c3ff7f2e_js__WEBPACK_IMPORTED_MODULE_8__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LIFECYCLE_WILL_UNLOAD", function() { return _index_c3ff7f2e_js__WEBPACK_IMPORTED_MODULE_8__["d"]; });

/* harmony import */ var _index_0d58a5bf_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index-0d58a5bf.js */ "r7QR");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "menuController", function() { return _index_0d58a5bf_js__WEBPACK_IMPORTED_MODULE_9__["m"]; });

/* harmony import */ var _overlays_28c23c35_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./overlays-28c23c35.js */ "7OTs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "actionSheetController", function() { return _overlays_28c23c35_js__WEBPACK_IMPORTED_MODULE_10__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "alertController", function() { return _overlays_28c23c35_js__WEBPACK_IMPORTED_MODULE_10__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadingController", function() { return _overlays_28c23c35_js__WEBPACK_IMPORTED_MODULE_10__["l"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "modalController", function() { return _overlays_28c23c35_js__WEBPACK_IMPORTED_MODULE_10__["m"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pickerController", function() { return _overlays_28c23c35_js__WEBPACK_IMPORTED_MODULE_10__["p"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "popoverController", function() { return _overlays_28c23c35_js__WEBPACK_IMPORTED_MODULE_10__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toastController", function() { return _overlays_28c23c35_js__WEBPACK_IMPORTED_MODULE_10__["t"]; });

/* harmony import */ var _gesture_controller_31cb6bb9_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./gesture-controller-31cb6bb9.js */ "y08P");
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ "wEJo");
/* harmony import */ var _hardware_back_button_4a6b37fb_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./hardware-back-button-4a6b37fb.js */ "B4Jq");















const setupConfig = (config) => {
  const win = window;
  const Ionic = win.Ionic;
  if (Ionic && Ionic.config && Ionic.config.constructor.name !== 'Object') {
    console.error('ionic config was already initialized');
    return;
  }
  win.Ionic = win.Ionic || {};
  win.Ionic.config = Object.assign(Object.assign({}, win.Ionic.config), config);
  return win.Ionic.config;
};
const getMode = () => {
  const win = window;
  const config = win && win.Ionic && win.Ionic.config;
  if (config) {
    if (config.mode) {
      return config.mode;
    }
    else {
      return config.get('mode');
    }
  }
  return 'md';
};




/***/ }),

/***/ "1vRN":
/*!***************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/helpers-dd7e4b7b.js ***!
  \***************************************************************/
/*! exports provided: a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, r */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addEventListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return removeEventListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return componentOnReady; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getAriaLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return renderHiddenInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return debounceEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getElementRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return findItemLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return inheritAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return clamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return hasShadowDom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return assert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return isEndSide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return now; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return pointerCoord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return raf; });
/**
 * Waits for a component to be ready for
 * both custom element and non-custom element builds.
 * If non-custom element build, el.componentOnReady
 * will be used.
 * For custom element builds, we wait a frame
 * so that the inner contents of the component
 * have a chance to render.
 *
 * Use this utility rather than calling
 * el.componentOnReady yourself.
 */
const componentOnReady = (el, callback) => {
  if (el.componentOnReady) {
    el.componentOnReady().then((resolvedEl) => callback(resolvedEl));
  }
  else {
    raf(() => callback(el));
  }
};
/**
 * Elements inside of web components sometimes need to inherit global attributes
 * set on the host. For example, the inner input in `ion-input` should inherit
 * the `title` attribute that developers set directly on `ion-input`. This
 * helper function should be called in componentWillLoad and assigned to a variable
 * that is later used in the render function.
 *
 * This does not need to be reactive as changing attributes on the host element
 * does not trigger a re-render.
 */
const inheritAttributes = (el, attributes = []) => {
  const attributeObject = {};
  attributes.forEach(attr => {
    if (el.hasAttribute(attr)) {
      const value = el.getAttribute(attr);
      if (value !== null) {
        attributeObject[attr] = el.getAttribute(attr);
      }
      el.removeAttribute(attr);
    }
  });
  return attributeObject;
};
const addEventListener = (el, eventName, callback, opts) => {
  if (typeof window !== 'undefined') {
    const win = window;
    const config = win && win.Ionic && win.Ionic.config;
    if (config) {
      const ael = config.get('_ael');
      if (ael) {
        return ael(el, eventName, callback, opts);
      }
      else if (config._ael) {
        return config._ael(el, eventName, callback, opts);
      }
    }
  }
  return el.addEventListener(eventName, callback, opts);
};
const removeEventListener = (el, eventName, callback, opts) => {
  if (typeof window !== 'undefined') {
    const win = window;
    const config = win && win.Ionic && win.Ionic.config;
    if (config) {
      const rel = config.get('_rel');
      if (rel) {
        return rel(el, eventName, callback, opts);
      }
      else if (config._rel) {
        return config._rel(el, eventName, callback, opts);
      }
    }
  }
  return el.removeEventListener(eventName, callback, opts);
};
/**
 * Gets the root context of a shadow dom element
 * On newer browsers this will be the shadowRoot,
 * but for older browser this may just be the
 * element itself.
 *
 * Useful for whenever you need to explicitly
 * do "myElement.shadowRoot!.querySelector(...)".
 */
const getElementRoot = (el, fallback = el) => {
  return el.shadowRoot || fallback;
};
/**
 * Patched version of requestAnimationFrame that avoids ngzone
 * Use only when you know ngzone should not run
 */
const raf = (h) => {
  if (typeof __zone_symbol__requestAnimationFrame === 'function') {
    return __zone_symbol__requestAnimationFrame(h);
  }
  if (typeof requestAnimationFrame === 'function') {
    return requestAnimationFrame(h);
  }
  return setTimeout(h);
};
const hasShadowDom = (el) => {
  return !!el.shadowRoot && !!el.attachShadow;
};
const findItemLabel = (componentEl) => {
  const itemEl = componentEl.closest('ion-item');
  if (itemEl) {
    return itemEl.querySelector('ion-label');
  }
  return null;
};
/**
 * This method is used for Ionic's input components that use Shadow DOM. In
 * order to properly label the inputs to work with screen readers, we need
 * to get the text content of the label outside of the shadow root and pass
 * it to the input inside of the shadow root.
 *
 * Referencing label elements by id from outside of the component is
 * impossible due to the shadow boundary, read more here:
 * https://developer.salesforce.com/blogs/2020/01/accessibility-for-web-components.html
 *
 * @param componentEl The shadow element that needs the aria label
 * @param inputId The unique identifier for the input
 */
const getAriaLabel = (componentEl, inputId) => {
  let labelText;
  // If the user provides their own label via the aria-labelledby attr
  // we should use that instead of looking for an ion-label
  const labelledBy = componentEl.getAttribute('aria-labelledby');
  // Grab the id off of the component in case they are using
  // a custom label using the label element
  const componentId = componentEl.id;
  let labelId = labelledBy !== null && labelledBy.trim() !== ''
    ? labelledBy
    : inputId + '-lbl';
  let label = labelledBy !== null && labelledBy.trim() !== ''
    ? document.getElementById(labelledBy)
    : findItemLabel(componentEl);
  if (label) {
    if (labelledBy === null) {
      label.id = labelId;
    }
    labelText = label.textContent;
    label.setAttribute('aria-hidden', 'true');
    // if there is no label, check to see if the user has provided
    // one by setting an id on the component and using the label element
  }
  else if (componentId.trim() !== '') {
    label = document.querySelector(`label[for="${componentId}"]`);
    if (label) {
      if (label.id !== '') {
        labelId = label.id;
      }
      else {
        label.id = labelId = `${componentId}-lbl`;
      }
      labelText = label.textContent;
    }
  }
  return { label, labelId, labelText };
};
/**
 * This method is used to add a hidden input to a host element that contains
 * a Shadow DOM. It does not add the input inside of the Shadow root which
 * allows it to be picked up inside of forms. It should contain the same
 * values as the host element.
 *
 * @param always Add a hidden input even if the container does not use Shadow
 * @param container The element where the input will be added
 * @param name The name of the input
 * @param value The value of the input
 * @param disabled If true, the input is disabled
 */
const renderHiddenInput = (always, container, name, value, disabled) => {
  if (always || hasShadowDom(container)) {
    let input = container.querySelector('input.aux-input');
    if (!input) {
      input = container.ownerDocument.createElement('input');
      input.type = 'hidden';
      input.classList.add('aux-input');
      container.appendChild(input);
    }
    input.disabled = disabled;
    input.name = name;
    input.value = value || '';
  }
};
const clamp = (min, n, max) => {
  return Math.max(min, Math.min(n, max));
};
const assert = (actual, reason) => {
  if (!actual) {
    const message = 'ASSERT: ' + reason;
    console.error(message);
    debugger; // tslint:disable-line
    throw new Error(message);
  }
};
const now = (ev) => {
  return ev.timeStamp || Date.now();
};
const pointerCoord = (ev) => {
  // get X coordinates for either a mouse click
  // or a touch depending on the given event
  if (ev) {
    const changedTouches = ev.changedTouches;
    if (changedTouches && changedTouches.length > 0) {
      const touch = changedTouches[0];
      return { x: touch.clientX, y: touch.clientY };
    }
    if (ev.pageX !== undefined) {
      return { x: ev.pageX, y: ev.pageY };
    }
  }
  return { x: 0, y: 0 };
};
/**
 * @hidden
 * Given a side, return if it should be on the end
 * based on the value of dir
 * @param side the side
 * @param isRTL whether the application dir is rtl
 */
const isEndSide = (side) => {
  const isRTL = document.dir === 'rtl';
  switch (side) {
    case 'start': return isRTL;
    case 'end': return !isRTL;
    default:
      throw new Error(`"${side}" is not a valid value for [side]. Use "start" or "end" instead.`);
  }
};
const debounceEvent = (event, wait) => {
  const original = event._original || event;
  return {
    _original: event,
    emit: debounce(original.emit.bind(original), wait)
  };
};
const debounce = (func, wait = 0) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(func, wait, ...args);
  };
};




/***/ }),

/***/ "39oe":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-9e3fe806.js ***!
  \*************************************************************/
/*! exports provided: I, s */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return IonicSafeString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return sanitizeDOMString; });
/**
 * Does a simple sanitization of all elements
 * in an untrusted string
 */
const sanitizeDOMString = (untrustedString) => {
  try {
    if (untrustedString instanceof IonicSafeString) {
      return untrustedString.value;
    }
    if (!isSanitizerEnabled() || typeof untrustedString !== 'string' || untrustedString === '') {
      return untrustedString;
    }
    /**
     * Create a document fragment
     * separate from the main DOM,
     * create a div to do our work in
     */
    const documentFragment = document.createDocumentFragment();
    const workingDiv = document.createElement('div');
    documentFragment.appendChild(workingDiv);
    workingDiv.innerHTML = untrustedString;
    /**
     * Remove any elements
     * that are blocked
     */
    blockedTags.forEach(blockedTag => {
      const getElementsToRemove = documentFragment.querySelectorAll(blockedTag);
      for (let elementIndex = getElementsToRemove.length - 1; elementIndex >= 0; elementIndex--) {
        const element = getElementsToRemove[elementIndex];
        if (element.parentNode) {
          element.parentNode.removeChild(element);
        }
        else {
          documentFragment.removeChild(element);
        }
        /**
         * We still need to sanitize
         * the children of this element
         * as they are left behind
         */
        const childElements = getElementChildren(element);
        /* tslint:disable-next-line */
        for (let childIndex = 0; childIndex < childElements.length; childIndex++) {
          sanitizeElement(childElements[childIndex]);
        }
      }
    });
    /**
     * Go through remaining elements and remove
     * non-allowed attribs
     */
    // IE does not support .children on document fragments, only .childNodes
    const dfChildren = getElementChildren(documentFragment);
    /* tslint:disable-next-line */
    for (let childIndex = 0; childIndex < dfChildren.length; childIndex++) {
      sanitizeElement(dfChildren[childIndex]);
    }
    // Append document fragment to div
    const fragmentDiv = document.createElement('div');
    fragmentDiv.appendChild(documentFragment);
    // First child is always the div we did our work in
    const getInnerDiv = fragmentDiv.querySelector('div');
    return (getInnerDiv !== null) ? getInnerDiv.innerHTML : fragmentDiv.innerHTML;
  }
  catch (err) {
    console.error(err);
    return '';
  }
};
/**
 * Clean up current element based on allowed attributes
 * and then recursively dig down into any child elements to
 * clean those up as well
 */
const sanitizeElement = (element) => {
  // IE uses childNodes, so ignore nodes that are not elements
  if (element.nodeType && element.nodeType !== 1) {
    return;
  }
  for (let i = element.attributes.length - 1; i >= 0; i--) {
    const attribute = element.attributes.item(i);
    const attributeName = attribute.name;
    // remove non-allowed attribs
    if (!allowedAttributes.includes(attributeName.toLowerCase())) {
      element.removeAttribute(attributeName);
      continue;
    }
    // clean up any allowed attribs
    // that attempt to do any JS funny-business
    const attributeValue = attribute.value;
    /* tslint:disable-next-line */
    if (attributeValue != null && attributeValue.toLowerCase().includes('javascript:')) {
      element.removeAttribute(attributeName);
    }
  }
  /**
   * Sanitize any nested children
   */
  const childElements = getElementChildren(element);
  /* tslint:disable-next-line */
  for (let i = 0; i < childElements.length; i++) {
    sanitizeElement(childElements[i]);
  }
};
/**
 * IE doesn't always support .children
 * so we revert to .childNodes instead
 */
const getElementChildren = (el) => {
  return (el.children != null) ? el.children : el.childNodes;
};
const isSanitizerEnabled = () => {
  const win = window;
  const config = win && win.Ionic && win.Ionic.config;
  if (config) {
    if (config.get) {
      return config.get('sanitizerEnabled', true);
    }
    else {
      return config.sanitizerEnabled === true || config.sanitizerEnabled === undefined;
    }
  }
  return true;
};
const allowedAttributes = ['class', 'id', 'href', 'src', 'name', 'slot'];
const blockedTags = ['script', 'style', 'iframe', 'meta', 'link', 'object', 'embed'];
class IonicSafeString {
  constructor(value) {
    this.value = value;
  }
}




/***/ }),

/***/ "7OTs":
/*!****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/overlays-28c23c35.js ***!
  \****************************************************************/
/*! exports provided: B, a, b, c, d, e, f, g, h, i, l, m, p, s, t */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return BACKDROP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return alertController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return actionSheetController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return popoverController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return present; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return prepareOverlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return dismiss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return eventMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return activeAnimations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return isCancel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return loadingController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return modalController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return pickerController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return safeCall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return toastController; });
/* harmony import */ var _ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ionic-global-63a97a32.js */ "E/Mt");
/* harmony import */ var _hardware_back_button_4a6b37fb_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hardware-back-button-4a6b37fb.js */ "B4Jq");
/* harmony import */ var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers-dd7e4b7b.js */ "1vRN");




let lastId = 0;
const activeAnimations = new WeakMap();
const createController = (tagName) => {
  return {
    create(options) {
      return createOverlay(tagName, options);
    },
    dismiss(data, role, id) {
      return dismissOverlay(document, data, role, tagName, id);
    },
    async getTop() {
      return getOverlay(document, tagName);
    }
  };
};
const alertController = /*@__PURE__*/ createController('ion-alert');
const actionSheetController = /*@__PURE__*/ createController('ion-action-sheet');
const loadingController = /*@__PURE__*/ createController('ion-loading');
const modalController = /*@__PURE__*/ createController('ion-modal');
const pickerController = /*@__PURE__*/ createController('ion-picker');
const popoverController = /*@__PURE__*/ createController('ion-popover');
const toastController = /*@__PURE__*/ createController('ion-toast');
const prepareOverlay = (el) => {
  /* tslint:disable-next-line */
  if (typeof document !== 'undefined') {
    connectListeners(document);
  }
  const overlayIndex = lastId++;
  el.overlayIndex = overlayIndex;
  if (!el.hasAttribute('id')) {
    el.id = `ion-overlay-${overlayIndex}`;
  }
};
const createOverlay = (tagName, opts) => {
  /* tslint:disable-next-line */
  if (typeof customElements !== 'undefined') {
    return customElements.whenDefined(tagName).then(() => {
      const element = document.createElement(tagName);
      element.classList.add('overlay-hidden');
      // convert the passed in overlay options into props
      // that get passed down into the new overlay
      Object.assign(element, opts);
      // append the overlay element to the document body
      getAppRoot(document).appendChild(element);
      return new Promise(resolve => Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_2__["c"])(element, resolve));
    });
  }
  return Promise.resolve();
};
const focusableQueryString = '[tabindex]:not([tabindex^="-"]), input:not([type=hidden]):not([tabindex^="-"]), textarea:not([tabindex^="-"]), button:not([tabindex^="-"]), select:not([tabindex^="-"]), .ion-focusable:not([tabindex^="-"])';
const innerFocusableQueryString = 'input:not([type=hidden]), textarea, button, select';
const focusFirstDescendant = (ref, overlay) => {
  let firstInput = ref.querySelector(focusableQueryString);
  const shadowRoot = firstInput && firstInput.shadowRoot;
  if (shadowRoot) {
    // If there are no inner focusable elements, just focus the host element.
    firstInput = shadowRoot.querySelector(innerFocusableQueryString) || firstInput;
  }
  if (firstInput) {
    firstInput.focus();
  }
  else {
    // Focus overlay instead of letting focus escape
    overlay.focus();
  }
};
const focusLastDescendant = (ref, overlay) => {
  const inputs = Array.from(ref.querySelectorAll(focusableQueryString));
  let lastInput = inputs.length > 0 ? inputs[inputs.length - 1] : null;
  const shadowRoot = lastInput && lastInput.shadowRoot;
  if (shadowRoot) {
    // If there are no inner focusable elements, just focus the host element.
    lastInput = shadowRoot.querySelector(innerFocusableQueryString) || lastInput;
  }
  if (lastInput) {
    lastInput.focus();
  }
  else {
    // Focus overlay instead of letting focus escape
    overlay.focus();
  }
};
/**
 * Traps keyboard focus inside of overlay components.
 * Based on https://w3c.github.io/aria-practices/examples/dialog-modal/alertdialog.html
 * This includes the following components: Action Sheet, Alert, Loading, Modal,
 * Picker, and Popover.
 * Should NOT include: Toast
 */
const trapKeyboardFocus = (ev, doc) => {
  const lastOverlay = getOverlay(doc);
  const target = ev.target;
  // If no active overlay, ignore this event
  if (!lastOverlay || !target) {
    return;
  }
  /**
   * If we are focusing the overlay, clear
   * the last focused element so that hitting
   * tab activates the first focusable element
   * in the overlay wrapper.
   */
  if (lastOverlay === target) {
    lastOverlay.lastFocus = undefined;
    /**
     * Otherwise, we must be focusing an element
     * inside of the overlay. The two possible options
     * here are an input/button/etc or the ion-focus-trap
     * element. The focus trap element is used to prevent
     * the keyboard focus from leaving the overlay when
     * using Tab or screen assistants.
     */
  }
  else {
    /**
     * We do not want to focus the traps, so get the overlay
     * wrapper element as the traps live outside of the wrapper.
     */
    const overlayRoot = Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_2__["g"])(lastOverlay);
    if (!overlayRoot.contains(target)) {
      return;
    }
    const overlayWrapper = overlayRoot.querySelector('.ion-overlay-wrapper');
    if (!overlayWrapper) {
      return;
    }
    /**
     * If the target is inside the wrapper, let the browser
     * focus as normal and keep a log of the last focused element.
     */
    if (overlayWrapper.contains(target)) {
      lastOverlay.lastFocus = target;
    }
    else {
      /**
       * Otherwise, we must have focused one of the focus traps.
       * We need to wrap the focus to either the first element
       * or the last element.
       */
      /**
       * Once we call `focusFirstDescendant` and focus the first
       * descendant, another focus event will fire which will
       * cause `lastOverlay.lastFocus` to be updated before
       * we can run the code after that. We will cache the value
       * here to avoid that.
       */
      const lastFocus = lastOverlay.lastFocus;
      // Focus the first element in the overlay wrapper
      focusFirstDescendant(overlayWrapper, lastOverlay);
      /**
       * If the cached last focused element is the
       * same as the active element, then we need
       * to wrap focus to the last descendant. This happens
       * when the first descendant is focused, and the user
       * presses Shift + Tab. The previous line will focus
       * the same descendant again (the first one), causing
       * last focus to equal the active element.
       */
      if (lastFocus === doc.activeElement) {
        focusLastDescendant(overlayWrapper, lastOverlay);
      }
      lastOverlay.lastFocus = doc.activeElement;
    }
  }
};
const connectListeners = (doc) => {
  if (lastId === 0) {
    lastId = 1;
    doc.addEventListener('focus', ev => trapKeyboardFocus(ev, doc), true);
    // handle back-button click
    doc.addEventListener('ionBackButton', ev => {
      const lastOverlay = getOverlay(doc);
      if (lastOverlay && lastOverlay.backdropDismiss) {
        ev.detail.register(_hardware_back_button_4a6b37fb_js__WEBPACK_IMPORTED_MODULE_1__["OVERLAY_BACK_BUTTON_PRIORITY"], () => {
          return lastOverlay.dismiss(undefined, BACKDROP);
        });
      }
    });
    // handle ESC to close overlay
    doc.addEventListener('keyup', ev => {
      if (ev.key === 'Escape') {
        const lastOverlay = getOverlay(doc);
        if (lastOverlay && lastOverlay.backdropDismiss) {
          lastOverlay.dismiss(undefined, BACKDROP);
        }
      }
    });
  }
};
const dismissOverlay = (doc, data, role, overlayTag, id) => {
  const overlay = getOverlay(doc, overlayTag, id);
  if (!overlay) {
    return Promise.reject('overlay does not exist');
  }
  return overlay.dismiss(data, role);
};
const getOverlays = (doc, selector) => {
  if (selector === undefined) {
    selector = 'ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker,ion-popover,ion-toast';
  }
  return Array.from(doc.querySelectorAll(selector))
    .filter(c => c.overlayIndex > 0);
};
const getOverlay = (doc, overlayTag, id) => {
  const overlays = getOverlays(doc, overlayTag);
  return (id === undefined)
    ? overlays[overlays.length - 1]
    : overlays.find(o => o.id === id);
};
const present = async (overlay, name, iosEnterAnimation, mdEnterAnimation, opts) => {
  if (overlay.presented) {
    return;
  }
  overlay.presented = true;
  overlay.willPresent.emit();
  const mode = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_0__["b"])(overlay);
  // get the user's animation fn if one was provided
  const animationBuilder = (overlay.enterAnimation)
    ? overlay.enterAnimation
    : _ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_0__["c"].get(name, mode === 'ios' ? iosEnterAnimation : mdEnterAnimation);
  const completed = await overlayAnimation(overlay, animationBuilder, overlay.el, opts);
  if (completed) {
    overlay.didPresent.emit();
  }
  /**
   * When an overlay that steals focus
   * is dismissed, focus should be returned
   * to the element that was focused
   * prior to the overlay opening. Toast
   * does not steal focus and is excluded
   * from returning focus as a result.
   */
  if (overlay.el.tagName !== 'ION-TOAST') {
    focusPreviousElementOnDismiss(overlay.el);
  }
  if (overlay.keyboardClose) {
    overlay.el.focus();
  }
};
/**
 * When an overlay component is dismissed,
 * focus should be returned to the element
 * that presented the overlay. Otherwise
 * focus will be set on the body which
 * means that people using screen readers
 * or tabbing will need to re-navigate
 * to where they were before they
 * opened the overlay.
 */
const focusPreviousElementOnDismiss = async (overlayEl) => {
  let previousElement = document.activeElement;
  if (!previousElement) {
    return;
  }
  const shadowRoot = previousElement && previousElement.shadowRoot;
  if (shadowRoot) {
    // If there are no inner focusable elements, just focus the host element.
    previousElement = shadowRoot.querySelector(innerFocusableQueryString) || previousElement;
  }
  await overlayEl.onDidDismiss();
  previousElement.focus();
};
const dismiss = async (overlay, data, role, name, iosLeaveAnimation, mdLeaveAnimation, opts) => {
  if (!overlay.presented) {
    return false;
  }
  overlay.presented = false;
  try {
    // Overlay contents should not be clickable during dismiss
    overlay.el.style.setProperty('pointer-events', 'none');
    overlay.willDismiss.emit({ data, role });
    const mode = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_0__["b"])(overlay);
    const animationBuilder = (overlay.leaveAnimation)
      ? overlay.leaveAnimation
      : _ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_0__["c"].get(name, mode === 'ios' ? iosLeaveAnimation : mdLeaveAnimation);
    // If dismissed via gesture, no need to play leaving animation again
    if (role !== 'gesture') {
      await overlayAnimation(overlay, animationBuilder, overlay.el, opts);
    }
    overlay.didDismiss.emit({ data, role });
    activeAnimations.delete(overlay);
  }
  catch (err) {
    console.error(err);
  }
  overlay.el.remove();
  return true;
};
const getAppRoot = (doc) => {
  return doc.querySelector('ion-app') || doc.body;
};
const overlayAnimation = async (overlay, animationBuilder, baseEl, opts) => {
  // Make overlay visible in case it's hidden
  baseEl.classList.remove('overlay-hidden');
  const aniRoot = baseEl.shadowRoot || overlay.el;
  const animation = animationBuilder(aniRoot, opts);
  if (!overlay.animated || !_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_0__["c"].getBoolean('animated', true)) {
    animation.duration(0);
  }
  if (overlay.keyboardClose) {
    animation.beforeAddWrite(() => {
      const activeElement = baseEl.ownerDocument.activeElement;
      if (activeElement && activeElement.matches('input, ion-input, ion-textarea')) {
        activeElement.blur();
      }
    });
  }
  const activeAni = activeAnimations.get(overlay) || [];
  activeAnimations.set(overlay, [...activeAni, animation]);
  await animation.play();
  return true;
};
const eventMethod = (element, eventName) => {
  let resolve;
  const promise = new Promise(r => resolve = r);
  onceEvent(element, eventName, (event) => {
    resolve(event.detail);
  });
  return promise;
};
const onceEvent = (element, eventName, callback) => {
  const handler = (ev) => {
    Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_2__["b"])(element, eventName, handler);
    callback(ev);
  };
  Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_2__["a"])(element, eventName, handler);
};
const isCancel = (role) => {
  return role === 'cancel' || role === BACKDROP;
};
const defaultGate = (h) => h();
const safeCall = (handler, arg) => {
  if (typeof handler === 'function') {
    const jmp = _ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_0__["c"].get('_zoneGate', defaultGate);
    return jmp(() => {
      try {
        return handler(arg);
      }
      catch (e) {
        console.error(e);
      }
    });
  }
  return undefined;
};
const BACKDROP = 'backdrop';




/***/ }),

/***/ "B4Jq":
/*!****************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/hardware-back-button-4a6b37fb.js ***!
  \****************************************************************************/
/*! exports provided: MENU_BACK_BUTTON_PRIORITY, OVERLAY_BACK_BUTTON_PRIORITY, blockHardwareBackButton, startHardwareBackButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENU_BACK_BUTTON_PRIORITY", function() { return MENU_BACK_BUTTON_PRIORITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OVERLAY_BACK_BUTTON_PRIORITY", function() { return OVERLAY_BACK_BUTTON_PRIORITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockHardwareBackButton", function() { return blockHardwareBackButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startHardwareBackButton", function() { return startHardwareBackButton; });
/**
 * When hardwareBackButton: false in config,
 * we need to make sure we also block the default
 * webview behavior. If we don't then it will be
 * possible for users to navigate backward while
 * an overlay is still open. Additionally, it will
 * give the appearance that the hardwareBackButton
 * config is not working as the page transition
 * will still happen.
 */
const blockHardwareBackButton = () => {
  document.addEventListener('backbutton', () => { }); // tslint:disable-line
};
const startHardwareBackButton = () => {
  const doc = document;
  let busy = false;
  doc.addEventListener('backbutton', () => {
    if (busy) {
      return;
    }
    let index = 0;
    let handlers = [];
    const ev = new CustomEvent('ionBackButton', {
      bubbles: false,
      detail: {
        register(priority, handler) {
          handlers.push({ priority, handler, id: index++ });
        }
      }
    });
    doc.dispatchEvent(ev);
    const executeAction = async (handlerRegister) => {
      try {
        if (handlerRegister && handlerRegister.handler) {
          const result = handlerRegister.handler(processHandlers);
          if (result != null) {
            await result;
          }
        }
      }
      catch (e) {
        console.error(e);
      }
    };
    const processHandlers = () => {
      if (handlers.length > 0) {
        let selectedHandler = {
          priority: Number.MIN_SAFE_INTEGER,
          handler: () => undefined,
          id: -1
        };
        handlers.forEach(handler => {
          if (handler.priority >= selectedHandler.priority) {
            selectedHandler = handler;
          }
        });
        busy = true;
        handlers = handlers.filter(handler => handler.id !== selectedHandler.id);
        executeAction(selectedHandler).then(() => busy = false);
      }
    };
    processHandlers();
  });
};
const OVERLAY_BACK_BUTTON_PRIORITY = 100;
const MENU_BACK_BUTTON_PRIORITY = 99; // 1 less than overlay priority since menu is displayed behind overlays




/***/ }),

/***/ "E/Mt":
/*!********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ionic-global-63a97a32.js ***!
  \********************************************************************/
/*! exports provided: a, b, c, g, i */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isPlatform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getIonMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getPlatforms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return initialize; });
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ "wEJo");


const getPlatforms = (win) => setupPlatforms(win);
const isPlatform = (winOrPlatform, platform) => {
  if (typeof winOrPlatform === 'string') {
    platform = winOrPlatform;
    winOrPlatform = undefined;
  }
  return getPlatforms(winOrPlatform).includes(platform);
};
const setupPlatforms = (win = window) => {
  if (typeof win === 'undefined') {
    return [];
  }
  win.Ionic = win.Ionic || {};
  let platforms = win.Ionic.platforms;
  if (platforms == null) {
    platforms = win.Ionic.platforms = detectPlatforms(win);
    platforms.forEach(p => win.document.documentElement.classList.add(`plt-${p}`));
  }
  return platforms;
};
const detectPlatforms = (win) => Object.keys(PLATFORMS_MAP).filter(p => PLATFORMS_MAP[p](win));
const isMobileWeb = (win) => isMobile(win) && !isHybrid(win);
const isIpad = (win) => {
  // iOS 12 and below
  if (testUserAgent(win, /iPad/i)) {
    return true;
  }
  // iOS 13+
  if (testUserAgent(win, /Macintosh/i) && isMobile(win)) {
    return true;
  }
  return false;
};
const isIphone = (win) => testUserAgent(win, /iPhone/i);
const isIOS = (win) => testUserAgent(win, /iPhone|iPod/i) || isIpad(win);
const isAndroid = (win) => testUserAgent(win, /android|sink/i);
const isAndroidTablet = (win) => {
  return isAndroid(win) && !testUserAgent(win, /mobile/i);
};
const isPhablet = (win) => {
  const width = win.innerWidth;
  const height = win.innerHeight;
  const smallest = Math.min(width, height);
  const largest = Math.max(width, height);
  return (smallest > 390 && smallest < 520) &&
    (largest > 620 && largest < 800);
};
const isTablet = (win) => {
  const width = win.innerWidth;
  const height = win.innerHeight;
  const smallest = Math.min(width, height);
  const largest = Math.max(width, height);
  return (isIpad(win) ||
    isAndroidTablet(win) ||
    ((smallest > 460 && smallest < 820) &&
      (largest > 780 && largest < 1400)));
};
const isMobile = (win) => matchMedia(win, '(any-pointer:coarse)');
const isDesktop = (win) => !isMobile(win);
const isHybrid = (win) => isCordova(win) || isCapacitorNative(win);
const isCordova = (win) => !!(win['cordova'] || win['phonegap'] || win['PhoneGap']);
const isCapacitorNative = (win) => {
  const capacitor = win['Capacitor'];
  return !!(capacitor && capacitor.isNative);
};
const isElectron = (win) => testUserAgent(win, /electron/i);
const isPWA = (win) => !!(win.matchMedia('(display-mode: standalone)').matches || win.navigator.standalone);
const testUserAgent = (win, expr) => expr.test(win.navigator.userAgent);
const matchMedia = (win, query) => win.matchMedia(query).matches;
const PLATFORMS_MAP = {
  'ipad': isIpad,
  'iphone': isIphone,
  'ios': isIOS,
  'android': isAndroid,
  'phablet': isPhablet,
  'tablet': isTablet,
  'cordova': isCordova,
  'capacitor': isCapacitorNative,
  'electron': isElectron,
  'pwa': isPWA,
  'mobile': isMobile,
  'mobileweb': isMobileWeb,
  'desktop': isDesktop,
  'hybrid': isHybrid
};

class Config {
  constructor() {
    this.m = new Map();
  }
  reset(configObj) {
    this.m = new Map(Object.entries(configObj));
  }
  get(key, fallback) {
    const value = this.m.get(key);
    return value !== undefined ? value : fallback;
  }
  getBoolean(key, fallback = false) {
    const val = this.m.get(key);
    if (val === undefined) {
      return fallback;
    }
    if (typeof val === 'string') {
      return val === 'true';
    }
    return !!val;
  }
  getNumber(key, fallback) {
    const val = parseFloat(this.m.get(key));
    return isNaN(val) ? (fallback !== undefined ? fallback : NaN) : val;
  }
  set(key, value) {
    this.m.set(key, value);
  }
}
const config = /*@__PURE__*/ new Config();
const configFromSession = (win) => {
  try {
    const configStr = win.sessionStorage.getItem(IONIC_SESSION_KEY);
    return configStr !== null ? JSON.parse(configStr) : {};
  }
  catch (e) {
    return {};
  }
};
const saveConfig = (win, c) => {
  try {
    win.sessionStorage.setItem(IONIC_SESSION_KEY, JSON.stringify(c));
  }
  catch (e) {
    return;
  }
};
const configFromURL = (win) => {
  const configObj = {};
  win.location.search
    .slice(1)
    .split('&')
    .map(entry => entry.split('='))
    .map(([key, value]) => [decodeURIComponent(key), decodeURIComponent(value)])
    .filter(([key]) => startsWith(key, IONIC_PREFIX))
    .map(([key, value]) => [key.slice(IONIC_PREFIX.length), value])
    .forEach(([key, value]) => {
    configObj[key] = value;
  });
  return configObj;
};
const startsWith = (input, search) => {
  return input.substr(0, search.length) === search;
};
const IONIC_PREFIX = 'ionic:';
const IONIC_SESSION_KEY = 'ionic-persist-config';

let defaultMode;
const getIonMode = (ref) => {
  return (ref && Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["g"])(ref)) || defaultMode;
};
const initialize = (userConfig = {}) => {
  if (typeof window === 'undefined') {
    return;
  }
  const doc = window.document;
  const win = window;
  const Ionic = win.Ionic = win.Ionic || {};
  // Setup platforms
  setupPlatforms(win);
  // create the Ionic.config from raw config object (if it exists)
  // and convert Ionic.config into a ConfigApi that has a get() fn
  const configObj = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, configFromSession(win)), { persistConfig: false }), Ionic.config), configFromURL(win)), userConfig);
  config.reset(configObj);
  if (config.getBoolean('persistConfig')) {
    saveConfig(win, configObj);
  }
  // first see if the mode was set as an attribute on <html>
  // which could have been set by the user, or by pre-rendering
  // otherwise get the mode via config settings, and fallback to md
  Ionic.config = config;
  Ionic.mode = defaultMode = config.get('mode', (doc.documentElement.getAttribute('mode')) || (isPlatform(win, 'ios') ? 'ios' : 'md'));
  config.set('mode', defaultMode);
  doc.documentElement.setAttribute('mode', defaultMode);
  doc.documentElement.classList.add(defaultMode);
  if (config.getBoolean('_testing')) {
    config.set('animated', false);
  }
  const isIonicElement = (elm) => elm.tagName && elm.tagName.startsWith('ION-');
  const isAllowedIonicModeValue = (elmMode) => ['ios', 'md'].includes(elmMode);
  Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["s"])((elm) => {
    while (elm) {
      const elmMode = elm.mode || elm.getAttribute('mode');
      if (elmMode) {
        if (isAllowedIonicModeValue(elmMode)) {
          return elmMode;
        }
        else if (isIonicElement(elm)) {
          console.warn('Invalid ionic mode: "' + elmMode + '", expected: "ios" or "md"');
        }
      }
      elm = elm.parentElement;
    }
    return defaultMode;
  });
};




/***/ }),

/***/ "FBKn":
/*!*******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/app-globals-fd807b9a.js ***!
  \*******************************************************************/
/*! exports provided: g */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return globalScripts; });
/* harmony import */ var _ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ionic-global-63a97a32.js */ "E/Mt");


const globalScripts = _ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_0__["i"];




/***/ }),

/***/ "O1h7":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/angular/node_modules/tslib/tslib.es6.js ***!
  \*********************************************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "RQGG":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/md.transition-464fd4a8.js ***!
  \*********************************************************************/
/*! exports provided: mdTransitionAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mdTransitionAnimation", function() { return mdTransitionAnimation; });
/* harmony import */ var _animation_096c6391_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation-096c6391.js */ "meiF");
/* harmony import */ var _index_c3ff7f2e_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-c3ff7f2e.js */ "k4ps");
/* harmony import */ var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers-dd7e4b7b.js */ "1vRN");
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ "wEJo");





const mdTransitionAnimation = (_, opts) => {
  const OFF_BOTTOM = '40px';
  const CENTER = '0px';
  const backDirection = (opts.direction === 'back');
  const enteringEl = opts.enteringEl;
  const leavingEl = opts.leavingEl;
  const ionPageElement = Object(_index_c3ff7f2e_js__WEBPACK_IMPORTED_MODULE_1__["g"])(enteringEl);
  const enteringToolbarEle = ionPageElement.querySelector('ion-toolbar');
  const rootTransition = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
  rootTransition
    .addElement(ionPageElement)
    .fill('both')
    .beforeRemoveClass('ion-page-invisible');
  // animate the component itself
  if (backDirection) {
    rootTransition
      .duration(opts.duration || 200)
      .easing('cubic-bezier(0.47,0,0.745,0.715)');
  }
  else {
    rootTransition
      .duration(opts.duration || 280)
      .easing('cubic-bezier(0.36,0.66,0.04,1)')
      .fromTo('transform', `translateY(${OFF_BOTTOM})`, `translateY(${CENTER})`)
      .fromTo('opacity', 0.01, 1);
  }
  // Animate toolbar if it's there
  if (enteringToolbarEle) {
    const enteringToolBar = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
    enteringToolBar.addElement(enteringToolbarEle);
    rootTransition.addAnimation(enteringToolBar);
  }
  // setup leaving view
  if (leavingEl && backDirection) {
    // leaving content
    rootTransition
      .duration(opts.duration || 200)
      .easing('cubic-bezier(0.47,0,0.745,0.715)');
    const leavingPage = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
    leavingPage
      .addElement(Object(_index_c3ff7f2e_js__WEBPACK_IMPORTED_MODULE_1__["g"])(leavingEl))
      .onFinish(currentStep => {
      if (currentStep === 1 && leavingPage.elements.length > 0) {
        leavingPage.elements[0].style.setProperty('display', 'none');
      }
    })
      .fromTo('transform', `translateY(${CENTER})`, `translateY(${OFF_BOTTOM})`)
      .fromTo('opacity', 1, 0);
    rootTransition.addAnimation(leavingPage);
  }
  return rootTransition;
};




/***/ }),

/***/ "b1qR":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/polyfills/index.js ***!
  \**************************************************************/
/*! exports provided: applyPolyfills */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyPolyfills", function() { return applyPolyfills; });
function applyPolyfills() {
  var promises = [];
  if (typeof window !== 'undefined') {
    var win = window;

    if (!win.customElements ||
      (win.Element && (!win.Element.prototype.closest || !win.Element.prototype.matches || !win.Element.prototype.remove || !win.Element.prototype.getRootNode))) {
      promises.push(__webpack_require__.e(/*! import() | polyfills-dom */ "polyfills-dom").then(__webpack_require__.t.bind(null, /*! ./dom.js */ "QdDj", 7)));
    }

    var checkIfURLIsSupported = function() {
      try {
        var u = new URL('b', 'http://a');
        u.pathname = 'c%20d';
        return (u.href === 'http://a/c%20d') && u.searchParams;
      } catch (e) {
        return false;
      }
    };

    if (
      'function' !== typeof Object.assign || !Object.entries ||
      !Array.prototype.find || !Array.prototype.includes ||
      !String.prototype.startsWith || !String.prototype.endsWith ||
      (win.NodeList && !win.NodeList.prototype.forEach) ||
      !win.fetch ||
      !checkIfURLIsSupported() ||
      typeof WeakMap == 'undefined'
    ) {
      promises.push(__webpack_require__.e(/*! import() | polyfills-core-js */ "polyfills-core-js").then(__webpack_require__.t.bind(null, /*! ./core-js.js */ "t6o4", 7)));
    }
  }
  return Promise.all(promises);
}


/***/ }),

/***/ "bC4P":
/*!********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/cubic-bezier-eea9a7a9.js ***!
  \********************************************************************/
/*! exports provided: g */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getTimeGivenProgression; });
/**
 * Based on:
 * https://stackoverflow.com/questions/7348009/y-coordinate-for-a-given-x-cubic-bezier
 * https://math.stackexchange.com/questions/26846/is-there-an-explicit-form-for-cubic-b%C3%A9zier-curves
 * TODO: Reduce rounding error
 */
/**
 * EXPERIMENTAL
 * Given a cubic-bezier curve, get the x value (time) given
 * the y value (progression).
 * Ex: cubic-bezier(0.32, 0.72, 0, 1);
 * P0: (0, 0)
 * P1: (0.32, 0.72)
 * P2: (0, 1)
 * P3: (1, 1)
 *
 * If you give a cubic bezier curve that never reaches the
 * provided progression, this function will return an empty array.
 */
const getTimeGivenProgression = (p0, p1, p2, p3, progression) => {
  return solveCubicBezier(p0[1], p1[1], p2[1], p3[1], progression).map(tValue => {
    return solveCubicParametricEquation(p0[0], p1[0], p2[0], p3[0], tValue);
  });
};
/**
 * Solve a cubic equation in one dimension (time)
 */
const solveCubicParametricEquation = (p0, p1, p2, p3, t) => {
  const partA = (3 * p1) * Math.pow(t - 1, 2);
  const partB = (-3 * p2 * t) + (3 * p2) + (p3 * t);
  const partC = p0 * Math.pow(t - 1, 3);
  return t * (partA + (t * partB)) - partC;
};
/**
 * Find the `t` value for a cubic bezier using Cardano's formula
 */
const solveCubicBezier = (p0, p1, p2, p3, refPoint) => {
  p0 -= refPoint;
  p1 -= refPoint;
  p2 -= refPoint;
  p3 -= refPoint;
  const roots = solveCubicEquation(p3 - 3 * p2 + 3 * p1 - p0, 3 * p2 - 6 * p1 + 3 * p0, 3 * p1 - 3 * p0, p0);
  return roots.filter(root => root >= 0 && root <= 1);
};
const solveQuadraticEquation = (a, b, c) => {
  const discriminant = b * b - 4 * a * c;
  if (discriminant < 0) {
    return [];
  }
  else {
    return [
      (-b + Math.sqrt(discriminant)) / (2 * a),
      (-b - Math.sqrt(discriminant)) / (2 * a)
    ];
  }
};
const solveCubicEquation = (a, b, c, d) => {
  if (a === 0) {
    return solveQuadraticEquation(b, c, d);
  }
  b /= a;
  c /= a;
  d /= a;
  const p = (3 * c - b * b) / 3;
  const q = (2 * b * b * b - 9 * b * c + 27 * d) / 27;
  if (p === 0) {
    return [Math.pow(-q, 1 / 3)];
  }
  else if (q === 0) {
    return [Math.sqrt(-p), -Math.sqrt(-p)];
  }
  const discriminant = Math.pow(q / 2, 2) + Math.pow(p / 3, 3);
  if (discriminant === 0) {
    return [Math.pow(q / 2, 1 / 2) - b / 3];
  }
  else if (discriminant > 0) {
    return [Math.pow(-(q / 2) + Math.sqrt(discriminant), 1 / 3) - Math.pow((q / 2) + Math.sqrt(discriminant), 1 / 3) - b / 3];
  }
  const r = Math.sqrt(Math.pow(-(p / 3), 3));
  const phi = Math.acos(-(q / (2 * Math.sqrt(Math.pow(-(p / 3), 3)))));
  const s = 2 * Math.pow(r, 1 / 3);
  return [
    s * Math.cos(phi / 3) - b / 3,
    s * Math.cos((phi + 2 * Math.PI) / 3) - b / 3,
    s * Math.cos((phi + 4 * Math.PI) / 3) - b / 3
  ];
};




/***/ }),

/***/ "iWo5":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-f49d994d.js ***!
  \*************************************************************/
/*! exports provided: GESTURE_CONTROLLER, createGesture */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGesture", function() { return createGesture; });
/* harmony import */ var _gesture_controller_31cb6bb9_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gesture-controller-31cb6bb9.js */ "y08P");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GESTURE_CONTROLLER", function() { return _gesture_controller_31cb6bb9_js__WEBPACK_IMPORTED_MODULE_0__["G"]; });




const addEventListener = (el, eventName, callback, opts) => {
  // use event listener options when supported
  // otherwise it's just a boolean for the "capture" arg
  const listenerOpts = supportsPassive(el) ? {
    'capture': !!opts.capture,
    'passive': !!opts.passive,
  } : !!opts.capture;
  let add;
  let remove;
  if (el['__zone_symbol__addEventListener']) {
    add = '__zone_symbol__addEventListener';
    remove = '__zone_symbol__removeEventListener';
  }
  else {
    add = 'addEventListener';
    remove = 'removeEventListener';
  }
  el[add](eventName, callback, listenerOpts);
  return () => {
    el[remove](eventName, callback, listenerOpts);
  };
};
const supportsPassive = (node) => {
  if (_sPassive === undefined) {
    try {
      const opts = Object.defineProperty({}, 'passive', {
        get: () => {
          _sPassive = true;
        }
      });
      node.addEventListener('optsTest', () => { return; }, opts);
    }
    catch (e) {
      _sPassive = false;
    }
  }
  return !!_sPassive;
};
let _sPassive;

const MOUSE_WAIT = 2000;
const createPointerEvents = (el, pointerDown, pointerMove, pointerUp, options) => {
  let rmTouchStart;
  let rmTouchMove;
  let rmTouchEnd;
  let rmTouchCancel;
  let rmMouseStart;
  let rmMouseMove;
  let rmMouseUp;
  let lastTouchEvent = 0;
  const handleTouchStart = (ev) => {
    lastTouchEvent = Date.now() + MOUSE_WAIT;
    if (!pointerDown(ev)) {
      return;
    }
    if (!rmTouchMove && pointerMove) {
      rmTouchMove = addEventListener(el, 'touchmove', pointerMove, options);
    }
    if (!rmTouchEnd) {
      rmTouchEnd = addEventListener(el, 'touchend', handleTouchEnd, options);
    }
    if (!rmTouchCancel) {
      rmTouchCancel = addEventListener(el, 'touchcancel', handleTouchEnd, options);
    }
  };
  const handleMouseDown = (ev) => {
    if (lastTouchEvent > Date.now()) {
      return;
    }
    if (!pointerDown(ev)) {
      return;
    }
    if (!rmMouseMove && pointerMove) {
      rmMouseMove = addEventListener(getDocument(el), 'mousemove', pointerMove, options);
    }
    if (!rmMouseUp) {
      rmMouseUp = addEventListener(getDocument(el), 'mouseup', handleMouseUp, options);
    }
  };
  const handleTouchEnd = (ev) => {
    stopTouch();
    if (pointerUp) {
      pointerUp(ev);
    }
  };
  const handleMouseUp = (ev) => {
    stopMouse();
    if (pointerUp) {
      pointerUp(ev);
    }
  };
  const stopTouch = () => {
    if (rmTouchMove) {
      rmTouchMove();
    }
    if (rmTouchEnd) {
      rmTouchEnd();
    }
    if (rmTouchCancel) {
      rmTouchCancel();
    }
    rmTouchMove = rmTouchEnd = rmTouchCancel = undefined;
  };
  const stopMouse = () => {
    if (rmMouseMove) {
      rmMouseMove();
    }
    if (rmMouseUp) {
      rmMouseUp();
    }
    rmMouseMove = rmMouseUp = undefined;
  };
  const stop = () => {
    stopTouch();
    stopMouse();
  };
  const enable = (isEnabled = true) => {
    if (!isEnabled) {
      if (rmTouchStart) {
        rmTouchStart();
      }
      if (rmMouseStart) {
        rmMouseStart();
      }
      rmTouchStart = rmMouseStart = undefined;
      stop();
    }
    else {
      if (!rmTouchStart) {
        rmTouchStart = addEventListener(el, 'touchstart', handleTouchStart, options);
      }
      if (!rmMouseStart) {
        rmMouseStart = addEventListener(el, 'mousedown', handleMouseDown, options);
      }
    }
  };
  const destroy = () => {
    enable(false);
    pointerUp = pointerMove = pointerDown = undefined;
  };
  return {
    enable,
    stop,
    destroy
  };
};
const getDocument = (node) => {
  return node instanceof Document ? node : node.ownerDocument;
};

const createPanRecognizer = (direction, thresh, maxAngle) => {
  const radians = maxAngle * (Math.PI / 180);
  const isDirX = direction === 'x';
  const maxCosine = Math.cos(radians);
  const threshold = thresh * thresh;
  let startX = 0;
  let startY = 0;
  let dirty = false;
  let isPan = 0;
  return {
    start(x, y) {
      startX = x;
      startY = y;
      isPan = 0;
      dirty = true;
    },
    detect(x, y) {
      if (!dirty) {
        return false;
      }
      const deltaX = (x - startX);
      const deltaY = (y - startY);
      const distance = deltaX * deltaX + deltaY * deltaY;
      if (distance < threshold) {
        return false;
      }
      const hypotenuse = Math.sqrt(distance);
      const cosine = (isDirX ? deltaX : deltaY) / hypotenuse;
      if (cosine > maxCosine) {
        isPan = 1;
      }
      else if (cosine < -maxCosine) {
        isPan = -1;
      }
      else {
        isPan = 0;
      }
      dirty = false;
      return true;
    },
    isGesture() {
      return isPan !== 0;
    },
    getDirection() {
      return isPan;
    }
  };
};

const createGesture = (config) => {
  let hasCapturedPan = false;
  let hasStartedPan = false;
  let hasFiredStart = true;
  let isMoveQueued = false;
  const finalConfig = Object.assign({ disableScroll: false, direction: 'x', gesturePriority: 0, passive: true, maxAngle: 40, threshold: 10 }, config);
  const canStart = finalConfig.canStart;
  const onWillStart = finalConfig.onWillStart;
  const onStart = finalConfig.onStart;
  const onEnd = finalConfig.onEnd;
  const notCaptured = finalConfig.notCaptured;
  const onMove = finalConfig.onMove;
  const threshold = finalConfig.threshold;
  const passive = finalConfig.passive;
  const blurOnStart = finalConfig.blurOnStart;
  const detail = {
    type: 'pan',
    startX: 0,
    startY: 0,
    startTime: 0,
    currentX: 0,
    currentY: 0,
    velocityX: 0,
    velocityY: 0,
    deltaX: 0,
    deltaY: 0,
    currentTime: 0,
    event: undefined,
    data: undefined
  };
  const pan = createPanRecognizer(finalConfig.direction, finalConfig.threshold, finalConfig.maxAngle);
  const gesture = _gesture_controller_31cb6bb9_js__WEBPACK_IMPORTED_MODULE_0__["G"].createGesture({
    name: config.gestureName,
    priority: config.gesturePriority,
    disableScroll: config.disableScroll
  });
  const pointerDown = (ev) => {
    const timeStamp = now(ev);
    if (hasStartedPan || !hasFiredStart) {
      return false;
    }
    updateDetail(ev, detail);
    detail.startX = detail.currentX;
    detail.startY = detail.currentY;
    detail.startTime = detail.currentTime = timeStamp;
    detail.velocityX = detail.velocityY = detail.deltaX = detail.deltaY = 0;
    detail.event = ev;
    // Check if gesture can start
    if (canStart && canStart(detail) === false) {
      return false;
    }
    // Release fallback
    gesture.release();
    // Start gesture
    if (!gesture.start()) {
      return false;
    }
    hasStartedPan = true;
    if (threshold === 0) {
      return tryToCapturePan();
    }
    pan.start(detail.startX, detail.startY);
    return true;
  };
  const pointerMove = (ev) => {
    // fast path, if gesture is currently captured
    // do minimum job to get user-land even dispatched
    if (hasCapturedPan) {
      if (!isMoveQueued && hasFiredStart) {
        isMoveQueued = true;
        calcGestureData(detail, ev);
        requestAnimationFrame(fireOnMove);
      }
      return;
    }
    // gesture is currently being detected
    calcGestureData(detail, ev);
    if (pan.detect(detail.currentX, detail.currentY)) {
      if (!pan.isGesture() || !tryToCapturePan()) {
        abortGesture();
      }
    }
  };
  const fireOnMove = () => {
    // Since fireOnMove is called inside a RAF, onEnd() might be called,
    // we must double check hasCapturedPan
    if (!hasCapturedPan) {
      return;
    }
    isMoveQueued = false;
    if (onMove) {
      onMove(detail);
    }
  };
  const tryToCapturePan = () => {
    if (gesture && !gesture.capture()) {
      return false;
    }
    hasCapturedPan = true;
    hasFiredStart = false;
    // reset start position since the real user-land event starts here
    // If the pan detector threshold is big, not resetting the start position
    // will cause a jump in the animation equal to the detector threshold.
    // the array of positions used to calculate the gesture velocity does not
    // need to be cleaned, more points in the positions array always results in a
    // more accurate value of the velocity.
    detail.startX = detail.currentX;
    detail.startY = detail.currentY;
    detail.startTime = detail.currentTime;
    if (onWillStart) {
      onWillStart(detail).then(fireOnStart);
    }
    else {
      fireOnStart();
    }
    return true;
  };
  const blurActiveElement = () => {
    /* tslint:disable-next-line */
    if (typeof document !== 'undefined') {
      const activeElement = document.activeElement;
      if (activeElement !== null && activeElement.blur) {
        activeElement.blur();
      }
    }
  };
  const fireOnStart = () => {
    if (blurOnStart) {
      blurActiveElement();
    }
    if (onStart) {
      onStart(detail);
    }
    hasFiredStart = true;
  };
  const reset = () => {
    hasCapturedPan = false;
    hasStartedPan = false;
    isMoveQueued = false;
    hasFiredStart = true;
    gesture.release();
  };
  // END *************************
  const pointerUp = (ev) => {
    const tmpHasCaptured = hasCapturedPan;
    const tmpHasFiredStart = hasFiredStart;
    reset();
    if (!tmpHasFiredStart) {
      return;
    }
    calcGestureData(detail, ev);
    // Try to capture press
    if (tmpHasCaptured) {
      if (onEnd) {
        onEnd(detail);
      }
      return;
    }
    // Not captured any event
    if (notCaptured) {
      notCaptured(detail);
    }
  };
  const pointerEvents = createPointerEvents(finalConfig.el, pointerDown, pointerMove, pointerUp, {
    capture: false,
    passive
  });
  const abortGesture = () => {
    reset();
    pointerEvents.stop();
    if (notCaptured) {
      notCaptured(detail);
    }
  };
  return {
    enable(enable = true) {
      if (!enable) {
        if (hasCapturedPan) {
          pointerUp(undefined);
        }
        reset();
      }
      pointerEvents.enable(enable);
    },
    destroy() {
      gesture.destroy();
      pointerEvents.destroy();
    }
  };
};
const calcGestureData = (detail, ev) => {
  if (!ev) {
    return;
  }
  const prevX = detail.currentX;
  const prevY = detail.currentY;
  const prevT = detail.currentTime;
  updateDetail(ev, detail);
  const currentX = detail.currentX;
  const currentY = detail.currentY;
  const timestamp = detail.currentTime = now(ev);
  const timeDelta = timestamp - prevT;
  if (timeDelta > 0 && timeDelta < 100) {
    const velocityX = (currentX - prevX) / timeDelta;
    const velocityY = (currentY - prevY) / timeDelta;
    detail.velocityX = velocityX * 0.7 + detail.velocityX * 0.3;
    detail.velocityY = velocityY * 0.7 + detail.velocityY * 0.3;
  }
  detail.deltaX = currentX - detail.startX;
  detail.deltaY = currentY - detail.startY;
  detail.event = ev;
};
const updateDetail = (ev, detail) => {
  // get X coordinates for either a mouse click
  // or a touch depending on the given event
  let x = 0;
  let y = 0;
  if (ev) {
    const changedTouches = ev.changedTouches;
    if (changedTouches && changedTouches.length > 0) {
      const touch = changedTouches[0];
      x = touch.clientX;
      y = touch.clientY;
    }
    else if (ev.pageX !== undefined) {
      x = ev.pageX;
      y = ev.pageY;
    }
  }
  detail.currentX = x;
  detail.currentY = y;
};
const now = (ev) => {
  return ev.timeStamp || Date.now();
};




/***/ }),

/***/ "k4ps":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-c3ff7f2e.js ***!
  \*************************************************************/
/*! exports provided: L, a, b, c, d, e, g, l, s, t */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return LIFECYCLE_WILL_ENTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LIFECYCLE_DID_ENTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LIFECYCLE_WILL_LEAVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LIFECYCLE_DID_LEAVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LIFECYCLE_WILL_UNLOAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return deepReady; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getIonPageElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return lifecycle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return setPageHidden; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return transition; });
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ "wEJo");
/* harmony import */ var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers-dd7e4b7b.js */ "1vRN");



const LIFECYCLE_WILL_ENTER = 'ionViewWillEnter';
const LIFECYCLE_DID_ENTER = 'ionViewDidEnter';
const LIFECYCLE_WILL_LEAVE = 'ionViewWillLeave';
const LIFECYCLE_DID_LEAVE = 'ionViewDidLeave';
const LIFECYCLE_WILL_UNLOAD = 'ionViewWillUnload';

const iosTransitionAnimation = () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./ios.transition-48010460.js */ "lTIg"));
const mdTransitionAnimation = () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./md.transition-464fd4a8.js */ "RQGG"));
const transition = (opts) => {
  return new Promise((resolve, reject) => {
    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => {
      beforeTransition(opts);
      runTransition(opts).then(result => {
        if (result.animation) {
          result.animation.destroy();
        }
        afterTransition(opts);
        resolve(result);
      }, error => {
        afterTransition(opts);
        reject(error);
      });
    });
  });
};
const beforeTransition = (opts) => {
  const enteringEl = opts.enteringEl;
  const leavingEl = opts.leavingEl;
  setZIndex(enteringEl, leavingEl, opts.direction);
  if (opts.showGoBack) {
    enteringEl.classList.add('can-go-back');
  }
  else {
    enteringEl.classList.remove('can-go-back');
  }
  setPageHidden(enteringEl, false);
  if (leavingEl) {
    setPageHidden(leavingEl, false);
  }
};
const runTransition = async (opts) => {
  const animationBuilder = await getAnimationBuilder(opts);
  const ani = (animationBuilder && _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["B"].isBrowser)
    ? animation(animationBuilder, opts)
    : noAnimation(opts); // fast path for no animation
  return ani;
};
const afterTransition = (opts) => {
  const enteringEl = opts.enteringEl;
  const leavingEl = opts.leavingEl;
  enteringEl.classList.remove('ion-page-invisible');
  if (leavingEl !== undefined) {
    leavingEl.classList.remove('ion-page-invisible');
  }
};
const getAnimationBuilder = async (opts) => {
  if (!opts.leavingEl || !opts.animated || opts.duration === 0) {
    return undefined;
  }
  if (opts.animationBuilder) {
    return opts.animationBuilder;
  }
  const getAnimation = (opts.mode === 'ios')
    ? (await iosTransitionAnimation()).iosTransitionAnimation
    : (await mdTransitionAnimation()).mdTransitionAnimation;
  return getAnimation;
};
const animation = async (animationBuilder, opts) => {
  await waitForReady(opts, true);
  const trans = animationBuilder(opts.baseEl, opts);
  fireWillEvents(opts.enteringEl, opts.leavingEl);
  const didComplete = await playTransition(trans, opts);
  if (opts.progressCallback) {
    opts.progressCallback(undefined);
  }
  if (didComplete) {
    fireDidEvents(opts.enteringEl, opts.leavingEl);
  }
  return {
    hasCompleted: didComplete,
    animation: trans
  };
};
const noAnimation = async (opts) => {
  const enteringEl = opts.enteringEl;
  const leavingEl = opts.leavingEl;
  await waitForReady(opts, false);
  fireWillEvents(enteringEl, leavingEl);
  fireDidEvents(enteringEl, leavingEl);
  return {
    hasCompleted: true
  };
};
const waitForReady = async (opts, defaultDeep) => {
  const deep = opts.deepWait !== undefined ? opts.deepWait : defaultDeep;
  const promises = deep ? [
    deepReady(opts.enteringEl),
    deepReady(opts.leavingEl),
  ] : [
    shallowReady(opts.enteringEl),
    shallowReady(opts.leavingEl),
  ];
  await Promise.all(promises);
  await notifyViewReady(opts.viewIsReady, opts.enteringEl);
};
const notifyViewReady = async (viewIsReady, enteringEl) => {
  if (viewIsReady) {
    await viewIsReady(enteringEl);
  }
};
const playTransition = (trans, opts) => {
  const progressCallback = opts.progressCallback;
  const promise = new Promise(resolve => {
    trans.onFinish((currentStep) => resolve(currentStep === 1));
  });
  // cool, let's do this, start the transition
  if (progressCallback) {
    // this is a swipe to go back, just get the transition progress ready
    // kick off the swipe animation start
    trans.progressStart(true);
    progressCallback(trans);
  }
  else {
    // only the top level transition should actually start "play"
    // kick it off and let it play through
    // ******** DOM WRITE ****************
    trans.play();
  }
  // create a callback for when the animation is done
  return promise;
};
const fireWillEvents = (enteringEl, leavingEl) => {
  lifecycle(leavingEl, LIFECYCLE_WILL_LEAVE);
  lifecycle(enteringEl, LIFECYCLE_WILL_ENTER);
};
const fireDidEvents = (enteringEl, leavingEl) => {
  lifecycle(enteringEl, LIFECYCLE_DID_ENTER);
  lifecycle(leavingEl, LIFECYCLE_DID_LEAVE);
};
const lifecycle = (el, eventName) => {
  if (el) {
    const ev = new CustomEvent(eventName, {
      bubbles: false,
      cancelable: false,
    });
    el.dispatchEvent(ev);
  }
};
const shallowReady = (el) => {
  if (el) {
    return new Promise(resolve => Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_1__["c"])(el, resolve));
  }
  return Promise.resolve();
};
const deepReady = async (el) => {
  const element = el;
  if (element) {
    if (element.componentOnReady != null) {
      const stencilEl = await element.componentOnReady();
      if (stencilEl != null) {
        return;
      }
    }
    await Promise.all(Array.from(element.children).map(deepReady));
  }
};
const setPageHidden = (el, hidden) => {
  if (hidden) {
    el.setAttribute('aria-hidden', 'true');
    el.classList.add('ion-page-hidden');
  }
  else {
    el.hidden = false;
    el.removeAttribute('aria-hidden');
    el.classList.remove('ion-page-hidden');
  }
};
const setZIndex = (enteringEl, leavingEl, direction) => {
  if (enteringEl !== undefined) {
    enteringEl.style.zIndex = (direction === 'back')
      ? '99'
      : '101';
  }
  if (leavingEl !== undefined) {
    leavingEl.style.zIndex = '100';
  }
};
const getIonPageElement = (element) => {
  if (element.classList.contains('ion-page')) {
    return element;
  }
  const ionPage = element.querySelector(':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs');
  if (ionPage) {
    return ionPage;
  }
  // idk, return the original element so at least something animates and we don't have a null pointer
  return element;
};




/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "lTIg":
/*!**********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ios.transition-48010460.js ***!
  \**********************************************************************/
/*! exports provided: iosTransitionAnimation, shadow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iosTransitionAnimation", function() { return iosTransitionAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shadow", function() { return shadow; });
/* harmony import */ var _animation_096c6391_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation-096c6391.js */ "meiF");
/* harmony import */ var _index_c3ff7f2e_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-c3ff7f2e.js */ "k4ps");
/* harmony import */ var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers-dd7e4b7b.js */ "1vRN");
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ "wEJo");





const DURATION = 540;
const getClonedElement = (tagName) => {
  return document.querySelector(`${tagName}.ion-cloned-element`);
};
const shadow = (el) => {
  return el.shadowRoot || el;
};
const getLargeTitle = (refEl) => {
  const tabs = (refEl.tagName === 'ION-TABS') ? refEl : refEl.querySelector('ion-tabs');
  const query = 'ion-content ion-header:not(.header-collapse-condense-inactive) ion-title.title-large';
  if (tabs != null) {
    const activeTab = tabs.querySelector('ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)');
    return (activeTab != null) ? activeTab.querySelector(query) : null;
  }
  return refEl.querySelector(query);
};
const getBackButton = (refEl, backDirection) => {
  const tabs = (refEl.tagName === 'ION-TABS') ? refEl : refEl.querySelector('ion-tabs');
  let buttonsList = [];
  if (tabs != null) {
    const activeTab = tabs.querySelector('ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)');
    if (activeTab != null) {
      buttonsList = activeTab.querySelectorAll('ion-buttons');
    }
  }
  else {
    buttonsList = refEl.querySelectorAll('ion-buttons');
  }
  for (const buttons of buttonsList) {
    const parentHeader = buttons.closest('ion-header');
    const activeHeader = parentHeader && !parentHeader.classList.contains('header-collapse-condense-inactive');
    const backButton = buttons.querySelector('ion-back-button');
    const buttonsCollapse = buttons.classList.contains('buttons-collapse');
    const startSlot = buttons.slot === 'start' || buttons.slot === '';
    if (backButton !== null && startSlot && ((buttonsCollapse && activeHeader && backDirection) || !buttonsCollapse)) {
      return backButton;
    }
  }
  return null;
};
const createLargeTitleTransition = (rootAnimation, rtl, backDirection, enteringEl, leavingEl) => {
  const enteringBackButton = getBackButton(enteringEl, backDirection);
  const leavingLargeTitle = getLargeTitle(leavingEl);
  const enteringLargeTitle = getLargeTitle(enteringEl);
  const leavingBackButton = getBackButton(leavingEl, backDirection);
  const shouldAnimationForward = enteringBackButton !== null && leavingLargeTitle !== null && !backDirection;
  const shouldAnimationBackward = enteringLargeTitle !== null && leavingBackButton !== null && backDirection;
  if (shouldAnimationForward) {
    const leavingLargeTitleBox = leavingLargeTitle.getBoundingClientRect();
    const enteringBackButtonBox = enteringBackButton.getBoundingClientRect();
    animateLargeTitle(rootAnimation, rtl, backDirection, leavingLargeTitle, leavingLargeTitleBox, enteringBackButtonBox);
    animateBackButton(rootAnimation, rtl, backDirection, enteringBackButton, leavingLargeTitleBox, enteringBackButtonBox);
  }
  else if (shouldAnimationBackward) {
    const enteringLargeTitleBox = enteringLargeTitle.getBoundingClientRect();
    const leavingBackButtonBox = leavingBackButton.getBoundingClientRect();
    animateLargeTitle(rootAnimation, rtl, backDirection, enteringLargeTitle, enteringLargeTitleBox, leavingBackButtonBox);
    animateBackButton(rootAnimation, rtl, backDirection, leavingBackButton, enteringLargeTitleBox, leavingBackButtonBox);
  }
  return {
    forward: shouldAnimationForward,
    backward: shouldAnimationBackward
  };
};
const animateBackButton = (rootAnimation, rtl, backDirection, backButtonEl, largeTitleBox, backButtonBox) => {
  const BACK_BUTTON_START_OFFSET = (rtl) ? `calc(100% - ${backButtonBox.right + 4}px)` : `${backButtonBox.left - 4}px`;
  const START_TEXT_TRANSLATE = (rtl) ? '7px' : '-7px';
  const END_TEXT_TRANSLATE = (rtl) ? '-4px' : '4px';
  const ICON_TRANSLATE = (rtl) ? '-4px' : '4px';
  const TEXT_ORIGIN_X = (rtl) ? 'right' : 'left';
  const ICON_ORIGIN_X = (rtl) ? 'left' : 'right';
  const FORWARD_TEXT_KEYFRAMES = [
    { offset: 0, opacity: 0, transform: `translate3d(${START_TEXT_TRANSLATE}, ${largeTitleBox.top - 40}px, 0) scale(2.1)` },
    { offset: 1, opacity: 1, transform: `translate3d(${END_TEXT_TRANSLATE}, ${backButtonBox.top - 46}px, 0) scale(1)` }
  ];
  const BACKWARD_TEXT_KEYFRAMES = [
    { offset: 0, opacity: 1, transform: `translate3d(${END_TEXT_TRANSLATE}, ${backButtonBox.top - 46}px, 0) scale(1)` },
    { offset: 0.6, opacity: 0 },
    { offset: 1, opacity: 0, transform: `translate3d(${START_TEXT_TRANSLATE}, ${largeTitleBox.top - 40}px, 0) scale(2.1)` }
  ];
  const TEXT_KEYFRAMES = (backDirection) ? BACKWARD_TEXT_KEYFRAMES : FORWARD_TEXT_KEYFRAMES;
  const FORWARD_ICON_KEYFRAMES = [
    { offset: 0, opacity: 0, transform: `translate3d(${ICON_TRANSLATE}, ${backButtonBox.top - 41}px, 0) scale(0.6)` },
    { offset: 1, opacity: 1, transform: `translate3d(${ICON_TRANSLATE}, ${backButtonBox.top - 46}px, 0) scale(1)` }
  ];
  const BACKWARD_ICON_KEYFRAMES = [
    { offset: 0, opacity: 1, transform: `translate3d(${ICON_TRANSLATE}, ${backButtonBox.top - 46}px, 0) scale(1)` },
    { offset: 0.2, opacity: 0, transform: `translate3d(${ICON_TRANSLATE}, ${backButtonBox.top - 41}px, 0) scale(0.6)` },
    { offset: 1, opacity: 0, transform: `translate3d(${ICON_TRANSLATE}, ${backButtonBox.top - 41}px, 0) scale(0.6)` }
  ];
  const ICON_KEYFRAMES = (backDirection) ? BACKWARD_ICON_KEYFRAMES : FORWARD_ICON_KEYFRAMES;
  const enteringBackButtonTextAnimation = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
  const enteringBackButtonIconAnimation = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
  const clonedBackButtonEl = getClonedElement('ion-back-button');
  const backButtonTextEl = shadow(clonedBackButtonEl).querySelector('.button-text');
  const backButtonIconEl = shadow(clonedBackButtonEl).querySelector('ion-icon');
  clonedBackButtonEl.text = backButtonEl.text;
  clonedBackButtonEl.mode = backButtonEl.mode;
  clonedBackButtonEl.icon = backButtonEl.icon;
  clonedBackButtonEl.color = backButtonEl.color;
  clonedBackButtonEl.disabled = backButtonEl.disabled;
  clonedBackButtonEl.style.setProperty('display', 'block');
  clonedBackButtonEl.style.setProperty('position', 'fixed');
  enteringBackButtonIconAnimation.addElement(backButtonIconEl);
  enteringBackButtonTextAnimation.addElement(backButtonTextEl);
  enteringBackButtonTextAnimation
    .beforeStyles({
    'transform-origin': `${TEXT_ORIGIN_X} center`
  })
    .beforeAddWrite(() => {
    backButtonEl.style.setProperty('display', 'none');
    clonedBackButtonEl.style.setProperty(TEXT_ORIGIN_X, BACK_BUTTON_START_OFFSET);
  })
    .afterAddWrite(() => {
    backButtonEl.style.setProperty('display', '');
    clonedBackButtonEl.style.setProperty('display', 'none');
    clonedBackButtonEl.style.removeProperty(TEXT_ORIGIN_X);
  })
    .keyframes(TEXT_KEYFRAMES);
  enteringBackButtonIconAnimation
    .beforeStyles({
    'transform-origin': `${ICON_ORIGIN_X} center`
  })
    .keyframes(ICON_KEYFRAMES);
  rootAnimation.addAnimation([enteringBackButtonTextAnimation, enteringBackButtonIconAnimation]);
};
const animateLargeTitle = (rootAnimation, rtl, backDirection, largeTitleEl, largeTitleBox, backButtonBox) => {
  const TITLE_START_OFFSET = (rtl) ? `calc(100% - ${largeTitleBox.right}px)` : `${largeTitleBox.left}px`;
  const START_TRANSLATE = (rtl) ? '-18px' : '18px';
  const ORIGIN_X = (rtl) ? 'right' : 'left';
  const BACKWARDS_KEYFRAMES = [
    { offset: 0, opacity: 0, transform: `translate3d(${START_TRANSLATE}, ${backButtonBox.top - 4}px, 0) scale(0.49)` },
    { offset: 0.1, opacity: 0 },
    { offset: 1, opacity: 1, transform: `translate3d(0, ${largeTitleBox.top - 2}px, 0) scale(1)` }
  ];
  const FORWARDS_KEYFRAMES = [
    { offset: 0, opacity: 0.99, transform: `translate3d(0, ${largeTitleBox.top - 2}px, 0) scale(1)` },
    { offset: 0.6, opacity: 0 },
    { offset: 1, opacity: 0, transform: `translate3d(${START_TRANSLATE}, ${backButtonBox.top - 4}px, 0) scale(0.5)` }
  ];
  const KEYFRAMES = (backDirection) ? BACKWARDS_KEYFRAMES : FORWARDS_KEYFRAMES;
  const clonedTitleEl = getClonedElement('ion-title');
  const clonedLargeTitleAnimation = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
  clonedTitleEl.innerText = largeTitleEl.innerText;
  clonedTitleEl.size = largeTitleEl.size;
  clonedTitleEl.color = largeTitleEl.color;
  clonedLargeTitleAnimation.addElement(clonedTitleEl);
  clonedLargeTitleAnimation
    .beforeStyles({
    'transform-origin': `${ORIGIN_X} center`,
    'height': '46px',
    'display': '',
    'position': 'relative',
    [ORIGIN_X]: TITLE_START_OFFSET
  })
    .beforeAddWrite(() => {
    largeTitleEl.style.setProperty('display', 'none');
  })
    .afterAddWrite(() => {
    largeTitleEl.style.setProperty('display', '');
    clonedTitleEl.style.setProperty('display', 'none');
  })
    .keyframes(KEYFRAMES);
  rootAnimation.addAnimation(clonedLargeTitleAnimation);
};
const iosTransitionAnimation = (navEl, opts) => {
  try {
    const EASING = 'cubic-bezier(0.32,0.72,0,1)';
    const OPACITY = 'opacity';
    const TRANSFORM = 'transform';
    const CENTER = '0%';
    const OFF_OPACITY = 0.8;
    const isRTL = navEl.ownerDocument.dir === 'rtl';
    const OFF_RIGHT = isRTL ? '-99.5%' : '99.5%';
    const OFF_LEFT = isRTL ? '33%' : '-33%';
    const enteringEl = opts.enteringEl;
    const leavingEl = opts.leavingEl;
    const backDirection = (opts.direction === 'back');
    const contentEl = enteringEl.querySelector(':scope > ion-content');
    const headerEls = enteringEl.querySelectorAll(':scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *');
    const enteringToolBarEls = enteringEl.querySelectorAll(':scope > ion-header > ion-toolbar');
    const rootAnimation = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
    const enteringContentAnimation = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
    rootAnimation
      .addElement(enteringEl)
      .duration(opts.duration || DURATION)
      .easing(opts.easing || EASING)
      .fill('both')
      .beforeRemoveClass('ion-page-invisible');
    if (leavingEl && navEl) {
      const navDecorAnimation = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
      navDecorAnimation.addElement(navEl);
      rootAnimation.addAnimation(navDecorAnimation);
    }
    if (!contentEl && enteringToolBarEls.length === 0 && headerEls.length === 0) {
      enteringContentAnimation.addElement(enteringEl.querySelector(':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs')); // REVIEW
    }
    else {
      enteringContentAnimation.addElement(contentEl); // REVIEW
      enteringContentAnimation.addElement(headerEls);
    }
    rootAnimation.addAnimation(enteringContentAnimation);
    if (backDirection) {
      enteringContentAnimation
        .beforeClearStyles([OPACITY])
        .fromTo('transform', `translateX(${OFF_LEFT})`, `translateX(${CENTER})`)
        .fromTo(OPACITY, OFF_OPACITY, 1);
    }
    else {
      // entering content, forward direction
      enteringContentAnimation
        .beforeClearStyles([OPACITY])
        .fromTo('transform', `translateX(${OFF_RIGHT})`, `translateX(${CENTER})`);
    }
    if (contentEl) {
      const enteringTransitionEffectEl = shadow(contentEl).querySelector('.transition-effect');
      if (enteringTransitionEffectEl) {
        const enteringTransitionCoverEl = enteringTransitionEffectEl.querySelector('.transition-cover');
        const enteringTransitionShadowEl = enteringTransitionEffectEl.querySelector('.transition-shadow');
        const enteringTransitionEffect = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
        const enteringTransitionCover = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
        const enteringTransitionShadow = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
        enteringTransitionEffect
          .addElement(enteringTransitionEffectEl)
          .beforeStyles({ opacity: '1', display: 'block' })
          .afterStyles({ opacity: '', display: '' });
        enteringTransitionCover
          .addElement(enteringTransitionCoverEl) // REVIEW
          .beforeClearStyles([OPACITY])
          .fromTo(OPACITY, 0, 0.1);
        enteringTransitionShadow
          .addElement(enteringTransitionShadowEl) // REVIEW
          .beforeClearStyles([OPACITY])
          .fromTo(OPACITY, 0.03, 0.70);
        enteringTransitionEffect.addAnimation([enteringTransitionCover, enteringTransitionShadow]);
        enteringContentAnimation.addAnimation([enteringTransitionEffect]);
      }
    }
    const enteringContentHasLargeTitle = enteringEl.querySelector('ion-header.header-collapse-condense');
    const { forward, backward } = createLargeTitleTransition(rootAnimation, isRTL, backDirection, enteringEl, leavingEl);
    enteringToolBarEls.forEach(enteringToolBarEl => {
      const enteringToolBar = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
      enteringToolBar.addElement(enteringToolBarEl);
      rootAnimation.addAnimation(enteringToolBar);
      const enteringTitle = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
      enteringTitle.addElement(enteringToolBarEl.querySelector('ion-title')); // REVIEW
      const enteringToolBarButtons = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
      const buttons = Array.from(enteringToolBarEl.querySelectorAll('ion-buttons,[menuToggle]'));
      const parentHeader = enteringToolBarEl.closest('ion-header');
      const inactiveHeader = parentHeader && parentHeader.classList.contains('header-collapse-condense-inactive');
      let buttonsToAnimate;
      if (backDirection) {
        buttonsToAnimate = buttons.filter(button => {
          const isCollapseButton = button.classList.contains('buttons-collapse');
          return (isCollapseButton && !inactiveHeader) || !isCollapseButton;
        });
      }
      else {
        buttonsToAnimate = buttons.filter(button => !button.classList.contains('buttons-collapse'));
      }
      enteringToolBarButtons.addElement(buttonsToAnimate);
      const enteringToolBarItems = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
      enteringToolBarItems.addElement(enteringToolBarEl.querySelectorAll(':scope > *:not(ion-title):not(ion-buttons):not([menuToggle])'));
      const enteringToolBarBg = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
      enteringToolBarBg.addElement(shadow(enteringToolBarEl).querySelector('.toolbar-background')); // REVIEW
      const enteringBackButton = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
      const backButtonEl = enteringToolBarEl.querySelector('ion-back-button');
      if (backButtonEl) {
        enteringBackButton.addElement(backButtonEl);
      }
      enteringToolBar.addAnimation([enteringTitle, enteringToolBarButtons, enteringToolBarItems, enteringToolBarBg, enteringBackButton]);
      enteringToolBarButtons.fromTo(OPACITY, 0.01, 1);
      enteringToolBarItems.fromTo(OPACITY, 0.01, 1);
      if (backDirection) {
        if (!inactiveHeader) {
          enteringTitle
            .fromTo('transform', `translateX(${OFF_LEFT})`, `translateX(${CENTER})`)
            .fromTo(OPACITY, 0.01, 1);
        }
        enteringToolBarItems.fromTo('transform', `translateX(${OFF_LEFT})`, `translateX(${CENTER})`);
        // back direction, entering page has a back button
        enteringBackButton.fromTo(OPACITY, 0.01, 1);
      }
      else {
        // entering toolbar, forward direction
        if (!enteringContentHasLargeTitle) {
          enteringTitle
            .fromTo('transform', `translateX(${OFF_RIGHT})`, `translateX(${CENTER})`)
            .fromTo(OPACITY, 0.01, 1);
        }
        enteringToolBarItems.fromTo('transform', `translateX(${OFF_RIGHT})`, `translateX(${CENTER})`);
        enteringToolBarBg.beforeClearStyles([OPACITY, 'transform']);
        const translucentHeader = parentHeader === null || parentHeader === void 0 ? void 0 : parentHeader.translucent;
        if (!translucentHeader) {
          enteringToolBarBg.fromTo(OPACITY, 0.01, 'var(--opacity)');
        }
        else {
          enteringToolBarBg.fromTo('transform', (isRTL ? 'translateX(-100%)' : 'translateX(100%)'), 'translateX(0px)');
        }
        // forward direction, entering page has a back button
        if (!forward) {
          enteringBackButton.fromTo(OPACITY, 0.01, 1);
        }
        if (backButtonEl && !forward) {
          const enteringBackBtnText = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
          enteringBackBtnText
            .addElement(shadow(backButtonEl).querySelector('.button-text')) // REVIEW
            .fromTo(`transform`, (isRTL ? 'translateX(-100px)' : 'translateX(100px)'), 'translateX(0px)');
          enteringToolBar.addAnimation(enteringBackBtnText);
        }
      }
    });
    // setup leaving view
    if (leavingEl) {
      const leavingContent = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
      const leavingContentEl = leavingEl.querySelector(':scope > ion-content');
      const leavingToolBarEls = leavingEl.querySelectorAll(':scope > ion-header > ion-toolbar');
      const leavingHeaderEls = leavingEl.querySelectorAll(':scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *');
      if (!leavingContentEl && leavingToolBarEls.length === 0 && leavingHeaderEls.length === 0) {
        leavingContent.addElement(leavingEl.querySelector(':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs')); // REVIEW
      }
      else {
        leavingContent.addElement(leavingContentEl); // REVIEW
        leavingContent.addElement(leavingHeaderEls);
      }
      rootAnimation.addAnimation(leavingContent);
      if (backDirection) {
        // leaving content, back direction
        leavingContent
          .beforeClearStyles([OPACITY])
          .fromTo('transform', `translateX(${CENTER})`, (isRTL ? 'translateX(-100%)' : 'translateX(100%)'));
        const leavingPage = Object(_index_c3ff7f2e_js__WEBPACK_IMPORTED_MODULE_1__["g"])(leavingEl);
        rootAnimation.afterAddWrite(() => {
          if (rootAnimation.getDirection() === 'normal') {
            leavingPage.style.setProperty('display', 'none');
          }
        });
      }
      else {
        // leaving content, forward direction
        leavingContent
          .fromTo('transform', `translateX(${CENTER})`, `translateX(${OFF_LEFT})`)
          .fromTo(OPACITY, 1, OFF_OPACITY);
      }
      if (leavingContentEl) {
        const leavingTransitionEffectEl = shadow(leavingContentEl).querySelector('.transition-effect');
        if (leavingTransitionEffectEl) {
          const leavingTransitionCoverEl = leavingTransitionEffectEl.querySelector('.transition-cover');
          const leavingTransitionShadowEl = leavingTransitionEffectEl.querySelector('.transition-shadow');
          const leavingTransitionEffect = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
          const leavingTransitionCover = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
          const leavingTransitionShadow = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
          leavingTransitionEffect
            .addElement(leavingTransitionEffectEl)
            .beforeStyles({ opacity: '1', display: 'block' })
            .afterStyles({ opacity: '', display: '' });
          leavingTransitionCover
            .addElement(leavingTransitionCoverEl) // REVIEW
            .beforeClearStyles([OPACITY])
            .fromTo(OPACITY, 0.1, 0);
          leavingTransitionShadow
            .addElement(leavingTransitionShadowEl) // REVIEW
            .beforeClearStyles([OPACITY])
            .fromTo(OPACITY, 0.70, 0.03);
          leavingTransitionEffect.addAnimation([leavingTransitionCover, leavingTransitionShadow]);
          leavingContent.addAnimation([leavingTransitionEffect]);
        }
      }
      leavingToolBarEls.forEach(leavingToolBarEl => {
        const leavingToolBar = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
        leavingToolBar.addElement(leavingToolBarEl);
        const leavingTitle = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
        leavingTitle.addElement(leavingToolBarEl.querySelector('ion-title')); // REVIEW
        const leavingToolBarButtons = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
        const buttons = leavingToolBarEl.querySelectorAll('ion-buttons,[menuToggle]');
        const parentHeader = leavingToolBarEl.closest('ion-header');
        const inactiveHeader = parentHeader && parentHeader.classList.contains('header-collapse-condense-inactive');
        const buttonsToAnimate = Array.from(buttons).filter(button => {
          const isCollapseButton = button.classList.contains('buttons-collapse');
          return (isCollapseButton && !inactiveHeader) || !isCollapseButton;
        });
        leavingToolBarButtons.addElement(buttonsToAnimate);
        const leavingToolBarItems = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
        const leavingToolBarItemEls = leavingToolBarEl.querySelectorAll(':scope > *:not(ion-title):not(ion-buttons):not([menuToggle])');
        if (leavingToolBarItemEls.length > 0) {
          leavingToolBarItems.addElement(leavingToolBarItemEls);
        }
        const leavingToolBarBg = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
        leavingToolBarBg.addElement(shadow(leavingToolBarEl).querySelector('.toolbar-background')); // REVIEW
        const leavingBackButton = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
        const backButtonEl = leavingToolBarEl.querySelector('ion-back-button');
        if (backButtonEl) {
          leavingBackButton.addElement(backButtonEl);
        }
        leavingToolBar.addAnimation([leavingTitle, leavingToolBarButtons, leavingToolBarItems, leavingBackButton, leavingToolBarBg]);
        rootAnimation.addAnimation(leavingToolBar);
        // fade out leaving toolbar items
        leavingBackButton.fromTo(OPACITY, 0.99, 0);
        leavingToolBarButtons.fromTo(OPACITY, 0.99, 0);
        leavingToolBarItems.fromTo(OPACITY, 0.99, 0);
        if (backDirection) {
          if (!inactiveHeader) {
            // leaving toolbar, back direction
            leavingTitle
              .fromTo('transform', `translateX(${CENTER})`, (isRTL ? 'translateX(-100%)' : 'translateX(100%)'))
              .fromTo(OPACITY, 0.99, 0);
          }
          leavingToolBarItems.fromTo('transform', `translateX(${CENTER})`, (isRTL ? 'translateX(-100%)' : 'translateX(100%)'));
          leavingToolBarBg.beforeClearStyles([OPACITY, 'transform']);
          // leaving toolbar, back direction, and there's no entering toolbar
          // should just slide out, no fading out
          const translucentHeader = parentHeader === null || parentHeader === void 0 ? void 0 : parentHeader.translucent;
          if (!translucentHeader) {
            leavingToolBarBg.fromTo(OPACITY, 'var(--opacity)', 0);
          }
          else {
            leavingToolBarBg.fromTo('transform', 'translateX(0px)', (isRTL ? 'translateX(-100%)' : 'translateX(100%)'));
          }
          if (backButtonEl && !backward) {
            const leavingBackBtnText = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
            leavingBackBtnText
              .addElement(shadow(backButtonEl).querySelector('.button-text')) // REVIEW
              .fromTo('transform', `translateX(${CENTER})`, `translateX(${(isRTL ? -124 : 124) + 'px'})`);
            leavingToolBar.addAnimation(leavingBackBtnText);
          }
        }
        else {
          // leaving toolbar, forward direction
          if (!inactiveHeader) {
            leavingTitle
              .fromTo('transform', `translateX(${CENTER})`, `translateX(${OFF_LEFT})`)
              .fromTo(OPACITY, 0.99, 0)
              .afterClearStyles([TRANSFORM, OPACITY]);
          }
          leavingToolBarItems
            .fromTo('transform', `translateX(${CENTER})`, `translateX(${OFF_LEFT})`)
            .afterClearStyles([TRANSFORM, OPACITY]);
          leavingBackButton.afterClearStyles([OPACITY]);
          leavingTitle.afterClearStyles([OPACITY]);
          leavingToolBarButtons.afterClearStyles([OPACITY]);
        }
      });
    }
    return rootAnimation;
  }
  catch (err) {
    throw err;
  }
};




/***/ }),

/***/ "lg1s":
/*!*****************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/loader.js ***!
  \*****************************************************/
/*! exports provided: defineCustomElements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineCustomElements", function() { return defineCustomElements; });
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ "wEJo");
/* harmony import */ var _app_globals_fd807b9a_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-globals-fd807b9a.js */ "FBKn");
/* harmony import */ var _ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ionic-global-63a97a32.js */ "E/Mt");




/*
 Stencil Client Patch Esm v2.5.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    // NOTE!! This fn cannot use async/await!
    // @ts-ignore
    if (!(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["C"] && _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["C"].supports && _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["C"].supports('color', 'var(--c)'))) {
        // @ts-ignore
        return __webpack_require__.e(/*! import() | polyfills-css-shim */ "polyfills-css-shim").then(__webpack_require__.t.bind(null, /*! ./css-shim-2ccf4dec.js */ "9qUq", 7)).then(() => {
            if ((_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["p"].$cssShim$ = _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["w"].__cssshim)) {
                return _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["p"].$cssShim$.i();
            }
            else {
                // for better minification
                return 0;
            }
        });
    }
    return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["a"])();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  Object(_app_globals_fd807b9a_js__WEBPACK_IMPORTED_MODULE_1__["g"])();
  return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["b"])(JSON.parse("[[\"ion-select_3\",[[2,\"ion-select-popover\",{\"header\":[1],\"subHeader\":[1,\"sub-header\"],\"message\":[1],\"options\":[16]},[[0,\"ionChange\",\"onSelect\"]]],[33,\"ion-select\",{\"disabled\":[4],\"cancelText\":[1,\"cancel-text\"],\"okText\":[1,\"ok-text\"],\"placeholder\":[1],\"name\":[1],\"selectedText\":[1,\"selected-text\"],\"multiple\":[4],\"interface\":[1],\"interfaceOptions\":[8,\"interface-options\"],\"compareWith\":[1,\"compare-with\"],\"value\":[1032],\"isExpanded\":[32],\"open\":[64]}],[1,\"ion-select-option\",{\"disabled\":[4],\"value\":[8]}]]],[\"ion-menu_3\",[[33,\"ion-menu-button\",{\"color\":[1],\"disabled\":[4],\"menu\":[1],\"autoHide\":[4,\"auto-hide\"],\"type\":[1],\"visible\":[32]},[[16,\"ionMenuChange\",\"visibilityChanged\"],[16,\"ionSplitPaneVisible\",\"visibilityChanged\"]]],[33,\"ion-menu\",{\"contentId\":[513,\"content-id\"],\"menuId\":[513,\"menu-id\"],\"type\":[1025],\"disabled\":[1028],\"side\":[513],\"swipeGesture\":[4,\"swipe-gesture\"],\"maxEdgeStart\":[2,\"max-edge-start\"],\"isPaneVisible\":[32],\"isEndSide\":[32],\"isOpen\":[64],\"isActive\":[64],\"open\":[64],\"close\":[64],\"toggle\":[64],\"setOpen\":[64]},[[16,\"ionSplitPaneVisible\",\"onSplitPaneChanged\"],[2,\"click\",\"onBackdropClick\"]]],[1,\"ion-menu-toggle\",{\"menu\":[1],\"autoHide\":[4,\"auto-hide\"],\"visible\":[32]},[[16,\"ionMenuChange\",\"visibilityChanged\"],[16,\"ionSplitPaneVisible\",\"visibilityChanged\"]]]]],[\"ion-action-sheet\",[[34,\"ion-action-sheet\",{\"overlayIndex\":[2,\"overlay-index\"],\"keyboardClose\":[4,\"keyboard-close\"],\"enterAnimation\":[16],\"leaveAnimation\":[16],\"buttons\":[16],\"cssClass\":[1,\"css-class\"],\"backdropDismiss\":[4,\"backdrop-dismiss\"],\"header\":[1],\"subHeader\":[1,\"sub-header\"],\"translucent\":[4],\"animated\":[4],\"present\":[64],\"dismiss\":[64],\"onDidDismiss\":[64],\"onWillDismiss\":[64]}]]],[\"ion-fab_3\",[[33,\"ion-fab-button\",{\"color\":[1],\"activated\":[4],\"disabled\":[4],\"download\":[1],\"href\":[1],\"rel\":[1],\"routerDirection\":[1,\"router-direction\"],\"routerAnimation\":[16],\"target\":[1],\"show\":[4],\"translucent\":[4],\"type\":[1],\"size\":[1],\"closeIcon\":[1,\"close-icon\"]}],[1,\"ion-fab\",{\"horizontal\":[1],\"vertical\":[1],\"edge\":[4],\"activated\":[1028],\"close\":[64]}],[1,\"ion-fab-list\",{\"activated\":[4],\"side\":[1]}]]],[\"ion-refresher_2\",[[0,\"ion-refresher-content\",{\"pullingIcon\":[1025,\"pulling-icon\"],\"pullingText\":[1,\"pulling-text\"],\"refreshingSpinner\":[1025,\"refreshing-spinner\"],\"refreshingText\":[1,\"refreshing-text\"]}],[32,\"ion-refresher\",{\"pullMin\":[2,\"pull-min\"],\"pullMax\":[2,\"pull-max\"],\"closeDuration\":[1,\"close-duration\"],\"snapbackDuration\":[1,\"snapback-duration\"],\"pullFactor\":[2,\"pull-factor\"],\"disabled\":[4],\"nativeRefresher\":[32],\"state\":[32],\"complete\":[64],\"cancel\":[64],\"getProgress\":[64]}]]],[\"ion-alert\",[[34,\"ion-alert\",{\"overlayIndex\":[2,\"overlay-index\"],\"keyboardClose\":[4,\"keyboard-close\"],\"enterAnimation\":[16],\"leaveAnimation\":[16],\"cssClass\":[1,\"css-class\"],\"header\":[1],\"subHeader\":[1,\"sub-header\"],\"message\":[1],\"buttons\":[16],\"inputs\":[1040],\"backdropDismiss\":[4,\"backdrop-dismiss\"],\"translucent\":[4],\"animated\":[4],\"present\":[64],\"dismiss\":[64],\"onDidDismiss\":[64],\"onWillDismiss\":[64]},[[4,\"keydown\",\"onKeydown\"]]]]],[\"ion-back-button\",[[33,\"ion-back-button\",{\"color\":[1],\"defaultHref\":[1025,\"default-href\"],\"disabled\":[516],\"icon\":[1],\"text\":[1],\"type\":[1],\"routerAnimation\":[16]}]]],[\"ion-loading\",[[34,\"ion-loading\",{\"overlayIndex\":[2,\"overlay-index\"],\"keyboardClose\":[4,\"keyboard-close\"],\"enterAnimation\":[16],\"leaveAnimation\":[16],\"message\":[1],\"cssClass\":[1,\"css-class\"],\"duration\":[2],\"backdropDismiss\":[4,\"backdrop-dismiss\"],\"showBackdrop\":[4,\"show-backdrop\"],\"spinner\":[1025],\"translucent\":[4],\"animated\":[4],\"present\":[64],\"dismiss\":[64],\"onDidDismiss\":[64],\"onWillDismiss\":[64]}]]],[\"ion-toast\",[[33,\"ion-toast\",{\"overlayIndex\":[2,\"overlay-index\"],\"color\":[1],\"enterAnimation\":[16],\"leaveAnimation\":[16],\"cssClass\":[1,\"css-class\"],\"duration\":[2],\"header\":[1],\"message\":[1],\"keyboardClose\":[4,\"keyboard-close\"],\"position\":[1],\"buttons\":[16],\"translucent\":[4],\"animated\":[4],\"present\":[64],\"dismiss\":[64],\"onDidDismiss\":[64],\"onWillDismiss\":[64]}]]],[\"ion-card_5\",[[33,\"ion-card\",{\"color\":[1],\"button\":[4],\"type\":[1],\"disabled\":[4],\"download\":[1],\"href\":[1],\"rel\":[1],\"routerDirection\":[1,\"router-direction\"],\"routerAnimation\":[16],\"target\":[1]}],[32,\"ion-card-content\"],[33,\"ion-card-header\",{\"color\":[1],\"translucent\":[4]}],[33,\"ion-card-subtitle\",{\"color\":[1]}],[33,\"ion-card-title\",{\"color\":[1]}]]],[\"ion-item-option_3\",[[33,\"ion-item-option\",{\"color\":[1],\"disabled\":[4],\"download\":[1],\"expandable\":[4],\"href\":[1],\"rel\":[1],\"target\":[1],\"type\":[1]}],[32,\"ion-item-options\",{\"side\":[1],\"fireSwipeEvent\":[64]}],[0,\"ion-item-sliding\",{\"disabled\":[4],\"state\":[32],\"getOpenAmount\":[64],\"getSlidingRatio\":[64],\"open\":[64],\"close\":[64],\"closeOpened\":[64]}]]],[\"ion-infinite-scroll_2\",[[32,\"ion-infinite-scroll-content\",{\"loadingSpinner\":[1025,\"loading-spinner\"],\"loadingText\":[1,\"loading-text\"]}],[0,\"ion-infinite-scroll\",{\"threshold\":[1],\"disabled\":[4],\"position\":[1],\"isLoading\":[32],\"complete\":[64]}]]],[\"ion-reorder_2\",[[33,\"ion-reorder\",null,[[2,\"click\",\"onClick\"]]],[0,\"ion-reorder-group\",{\"disabled\":[4],\"state\":[32],\"complete\":[64]}]]],[\"ion-segment_2\",[[33,\"ion-segment-button\",{\"disabled\":[4],\"layout\":[1],\"type\":[1],\"value\":[1],\"checked\":[32]}],[33,\"ion-segment\",{\"color\":[1],\"disabled\":[4],\"scrollable\":[4],\"swipeGesture\":[4,\"swipe-gesture\"],\"value\":[1025],\"activated\":[32]}]]],[\"ion-tab-bar_2\",[[33,\"ion-tab-button\",{\"disabled\":[4],\"download\":[1],\"href\":[1],\"rel\":[1],\"layout\":[1025],\"selected\":[1028],\"tab\":[1],\"target\":[1]},[[8,\"ionTabBarChanged\",\"onTabBarChanged\"]]],[33,\"ion-tab-bar\",{\"color\":[1],\"selectedTab\":[1,\"selected-tab\"],\"translucent\":[4],\"keyboardVisible\":[32]}]]],[\"ion-chip\",[[33,\"ion-chip\",{\"color\":[1],\"outline\":[4],\"disabled\":[4]}]]],[\"ion-modal\",[[34,\"ion-modal\",{\"overlayIndex\":[2,\"overlay-index\"],\"delegate\":[16],\"keyboardClose\":[4,\"keyboard-close\"],\"enterAnimation\":[16],\"leaveAnimation\":[16],\"component\":[1],\"componentProps\":[16],\"cssClass\":[1,\"css-class\"],\"backdropDismiss\":[4,\"backdrop-dismiss\"],\"showBackdrop\":[4,\"show-backdrop\"],\"animated\":[4],\"swipeToClose\":[4,\"swipe-to-close\"],\"presentingElement\":[16],\"present\":[64],\"dismiss\":[64],\"onDidDismiss\":[64],\"onWillDismiss\":[64]}]]],[\"ion-popover\",[[34,\"ion-popover\",{\"delegate\":[16],\"overlayIndex\":[2,\"overlay-index\"],\"enterAnimation\":[16],\"leaveAnimation\":[16],\"component\":[1],\"componentProps\":[16],\"keyboardClose\":[4,\"keyboard-close\"],\"cssClass\":[1,\"css-class\"],\"backdropDismiss\":[4,\"backdrop-dismiss\"],\"event\":[8],\"showBackdrop\":[4,\"show-backdrop\"],\"translucent\":[4],\"animated\":[4],\"present\":[64],\"dismiss\":[64],\"onDidDismiss\":[64],\"onWillDismiss\":[64]}]]],[\"ion-searchbar\",[[34,\"ion-searchbar\",{\"color\":[1],\"animated\":[4],\"autocomplete\":[1],\"autocorrect\":[1],\"cancelButtonIcon\":[1,\"cancel-button-icon\"],\"cancelButtonText\":[1,\"cancel-button-text\"],\"clearIcon\":[1,\"clear-icon\"],\"debounce\":[2],\"disabled\":[4],\"inputmode\":[1],\"enterkeyhint\":[1],\"placeholder\":[1],\"searchIcon\":[1,\"search-icon\"],\"showCancelButton\":[1,\"show-cancel-button\"],\"showClearButton\":[1,\"show-clear-button\"],\"spellcheck\":[4],\"type\":[1],\"value\":[1025],\"focused\":[32],\"noAnimate\":[32],\"setFocus\":[64],\"getInputElement\":[64]}]]],[\"ion-app_8\",[[0,\"ion-app\"],[34,\"ion-buttons\",{\"collapse\":[4]}],[1,\"ion-content\",{\"color\":[1],\"fullscreen\":[4],\"forceOverscroll\":[1028,\"force-overscroll\"],\"scrollX\":[4,\"scroll-x\"],\"scrollY\":[4,\"scroll-y\"],\"scrollEvents\":[4,\"scroll-events\"],\"getScrollElement\":[64],\"scrollToTop\":[64],\"scrollToBottom\":[64],\"scrollByPoint\":[64],\"scrollToPoint\":[64]},[[8,\"appload\",\"onAppLoad\"],[2,\"click\",\"onClick\"]]],[36,\"ion-footer\",{\"translucent\":[4]}],[36,\"ion-header\",{\"collapse\":[1],\"translucent\":[4]}],[1,\"ion-router-outlet\",{\"mode\":[1025],\"delegate\":[16],\"animated\":[4],\"animation\":[16],\"swipeHandler\":[16],\"commit\":[64],\"setRouteId\":[64],\"getRouteId\":[64]}],[33,\"ion-title\",{\"color\":[1],\"size\":[1]}],[33,\"ion-toolbar\",{\"color\":[1]},[[0,\"ionStyle\",\"childrenStyle\"]]]]],[\"ion-route_4\",[[0,\"ion-route\",{\"url\":[1],\"component\":[1],\"componentProps\":[16],\"beforeLeave\":[16],\"beforeEnter\":[16]}],[0,\"ion-route-redirect\",{\"from\":[1],\"to\":[1]}],[0,\"ion-router\",{\"root\":[1],\"useHash\":[4,\"use-hash\"],\"canTransition\":[64],\"push\":[64],\"back\":[64],\"printDebug\":[64],\"navChanged\":[64]},[[8,\"popstate\",\"onPopState\"],[4,\"ionBackButton\",\"onBackButton\"]]],[1,\"ion-router-link\",{\"color\":[1],\"href\":[1],\"rel\":[1],\"routerDirection\":[1,\"router-direction\"],\"routerAnimation\":[16],\"target\":[1]}]]],[\"ion-avatar_3\",[[33,\"ion-avatar\"],[33,\"ion-badge\",{\"color\":[1]}],[1,\"ion-thumbnail\"]]],[\"ion-col_3\",[[1,\"ion-col\",{\"offset\":[1],\"offsetXs\":[1,\"offset-xs\"],\"offsetSm\":[1,\"offset-sm\"],\"offsetMd\":[1,\"offset-md\"],\"offsetLg\":[1,\"offset-lg\"],\"offsetXl\":[1,\"offset-xl\"],\"pull\":[1],\"pullXs\":[1,\"pull-xs\"],\"pullSm\":[1,\"pull-sm\"],\"pullMd\":[1,\"pull-md\"],\"pullLg\":[1,\"pull-lg\"],\"pullXl\":[1,\"pull-xl\"],\"push\":[1],\"pushXs\":[1,\"push-xs\"],\"pushSm\":[1,\"push-sm\"],\"pushMd\":[1,\"push-md\"],\"pushLg\":[1,\"push-lg\"],\"pushXl\":[1,\"push-xl\"],\"size\":[1],\"sizeXs\":[1,\"size-xs\"],\"sizeSm\":[1,\"size-sm\"],\"sizeMd\":[1,\"size-md\"],\"sizeLg\":[1,\"size-lg\"],\"sizeXl\":[1,\"size-xl\"]},[[9,\"resize\",\"onResize\"]]],[1,\"ion-grid\",{\"fixed\":[4]}],[1,\"ion-row\"]]],[\"ion-nav_2\",[[1,\"ion-nav\",{\"delegate\":[16],\"swipeGesture\":[1028,\"swipe-gesture\"],\"animated\":[4],\"animation\":[16],\"rootParams\":[16],\"root\":[1],\"push\":[64],\"insert\":[64],\"insertPages\":[64],\"pop\":[64],\"popTo\":[64],\"popToRoot\":[64],\"removeIndex\":[64],\"setRoot\":[64],\"setPages\":[64],\"setRouteId\":[64],\"getRouteId\":[64],\"getActive\":[64],\"getByIndex\":[64],\"canGoBack\":[64],\"getPrevious\":[64]}],[0,\"ion-nav-link\",{\"component\":[1],\"componentProps\":[16],\"routerDirection\":[1,\"router-direction\"],\"routerAnimation\":[16]}]]],[\"ion-slide_2\",[[0,\"ion-slide\"],[36,\"ion-slides\",{\"options\":[8],\"pager\":[4],\"scrollbar\":[4],\"update\":[64],\"updateAutoHeight\":[64],\"slideTo\":[64],\"slideNext\":[64],\"slidePrev\":[64],\"getActiveIndex\":[64],\"getPreviousIndex\":[64],\"length\":[64],\"isEnd\":[64],\"isBeginning\":[64],\"startAutoplay\":[64],\"stopAutoplay\":[64],\"lockSwipeToNext\":[64],\"lockSwipeToPrev\":[64],\"lockSwipes\":[64],\"getSwiper\":[64]}]]],[\"ion-tab_2\",[[1,\"ion-tab\",{\"active\":[1028],\"delegate\":[16],\"tab\":[1],\"component\":[1],\"setActive\":[64]}],[1,\"ion-tabs\",{\"useRouter\":[1028,\"use-router\"],\"selectedTab\":[32],\"select\":[64],\"getTab\":[64],\"getSelected\":[64],\"setRouteId\":[64],\"getRouteId\":[64]}]]],[\"ion-checkbox\",[[33,\"ion-checkbox\",{\"color\":[1],\"name\":[1],\"checked\":[1028],\"indeterminate\":[1028],\"disabled\":[4],\"value\":[1]}]]],[\"ion-img\",[[1,\"ion-img\",{\"alt\":[1],\"src\":[1],\"loadSrc\":[32],\"loadError\":[32]}]]],[\"ion-input\",[[34,\"ion-input\",{\"fireFocusEvents\":[4,\"fire-focus-events\"],\"color\":[1],\"accept\":[1],\"autocapitalize\":[1],\"autocomplete\":[1],\"autocorrect\":[1],\"autofocus\":[4],\"clearInput\":[4,\"clear-input\"],\"clearOnEdit\":[4,\"clear-on-edit\"],\"debounce\":[2],\"disabled\":[4],\"enterkeyhint\":[1],\"inputmode\":[1],\"max\":[1],\"maxlength\":[2],\"min\":[1],\"minlength\":[2],\"multiple\":[4],\"name\":[1],\"pattern\":[1],\"placeholder\":[1],\"readonly\":[4],\"required\":[4],\"spellcheck\":[4],\"step\":[1],\"size\":[2],\"type\":[1],\"value\":[1032],\"hasFocus\":[32],\"setFocus\":[64],\"setBlur\":[64],\"getInputElement\":[64]}]]],[\"ion-progress-bar\",[[33,\"ion-progress-bar\",{\"type\":[1],\"reversed\":[4],\"value\":[2],\"buffer\":[2],\"color\":[1]}]]],[\"ion-range\",[[33,\"ion-range\",{\"color\":[1],\"debounce\":[2],\"name\":[1],\"dualKnobs\":[4,\"dual-knobs\"],\"min\":[2],\"max\":[2],\"pin\":[4],\"snaps\":[4],\"step\":[2],\"ticks\":[4],\"disabled\":[4],\"value\":[1026],\"ratioA\":[32],\"ratioB\":[32],\"pressedKnob\":[32]}]]],[\"ion-split-pane\",[[33,\"ion-split-pane\",{\"contentId\":[513,\"content-id\"],\"disabled\":[4],\"when\":[8],\"visible\":[32]}]]],[\"ion-text\",[[1,\"ion-text\",{\"color\":[1]}]]],[\"ion-textarea\",[[34,\"ion-textarea\",{\"fireFocusEvents\":[4,\"fire-focus-events\"],\"color\":[1],\"autocapitalize\":[1],\"autofocus\":[4],\"clearOnEdit\":[1028,\"clear-on-edit\"],\"debounce\":[2],\"disabled\":[4],\"inputmode\":[1],\"enterkeyhint\":[1],\"maxlength\":[2],\"minlength\":[2],\"name\":[1],\"placeholder\":[1],\"readonly\":[4],\"required\":[4],\"spellcheck\":[4],\"cols\":[2],\"rows\":[2],\"wrap\":[1],\"autoGrow\":[4,\"auto-grow\"],\"value\":[1025],\"hasFocus\":[32],\"setFocus\":[64],\"setBlur\":[64],\"getInputElement\":[64]}]]],[\"ion-toggle\",[[33,\"ion-toggle\",{\"color\":[1],\"name\":[1],\"checked\":[1028],\"disabled\":[4],\"value\":[1],\"activated\":[32]}]]],[\"ion-virtual-scroll\",[[0,\"ion-virtual-scroll\",{\"approxItemHeight\":[2,\"approx-item-height\"],\"approxHeaderHeight\":[2,\"approx-header-height\"],\"approxFooterHeight\":[2,\"approx-footer-height\"],\"headerFn\":[16],\"footerFn\":[16],\"items\":[16],\"itemHeight\":[16],\"headerHeight\":[16],\"footerHeight\":[16],\"renderItem\":[16],\"renderHeader\":[16],\"renderFooter\":[16],\"nodeRender\":[16],\"domRender\":[16],\"totalHeight\":[32],\"positionForItem\":[64],\"checkRange\":[64],\"checkEnd\":[64]},[[9,\"resize\",\"onResize\"]]]]],[\"ion-datetime_3\",[[34,\"ion-picker\",{\"overlayIndex\":[2,\"overlay-index\"],\"keyboardClose\":[4,\"keyboard-close\"],\"enterAnimation\":[16],\"leaveAnimation\":[16],\"buttons\":[16],\"columns\":[16],\"cssClass\":[1,\"css-class\"],\"duration\":[2],\"showBackdrop\":[4,\"show-backdrop\"],\"backdropDismiss\":[4,\"backdrop-dismiss\"],\"animated\":[4],\"presented\":[32],\"present\":[64],\"dismiss\":[64],\"onDidDismiss\":[64],\"onWillDismiss\":[64],\"getColumn\":[64]}],[33,\"ion-datetime\",{\"name\":[1],\"disabled\":[4],\"readonly\":[4],\"min\":[1025],\"max\":[1025],\"displayFormat\":[1,\"display-format\"],\"displayTimezone\":[1,\"display-timezone\"],\"pickerFormat\":[1,\"picker-format\"],\"cancelText\":[1,\"cancel-text\"],\"doneText\":[1,\"done-text\"],\"yearValues\":[8,\"year-values\"],\"monthValues\":[8,\"month-values\"],\"dayValues\":[8,\"day-values\"],\"hourValues\":[8,\"hour-values\"],\"minuteValues\":[8,\"minute-values\"],\"monthNames\":[1,\"month-names\"],\"monthShortNames\":[1,\"month-short-names\"],\"dayNames\":[1,\"day-names\"],\"dayShortNames\":[1,\"day-short-names\"],\"pickerOptions\":[16],\"placeholder\":[1],\"value\":[1025],\"isExpanded\":[32],\"open\":[64]}],[32,\"ion-picker-column\",{\"col\":[16]}]]],[\"ion-radio_2\",[[33,\"ion-radio\",{\"color\":[1],\"name\":[1],\"disabled\":[4],\"value\":[8],\"checked\":[32],\"buttonTabindex\":[32],\"setFocus\":[64],\"setButtonTabindex\":[64]}],[0,\"ion-radio-group\",{\"allowEmptySelection\":[4,\"allow-empty-selection\"],\"name\":[1],\"value\":[1032]},[[4,\"keydown\",\"onKeydown\"]]]]],[\"ion-spinner\",[[1,\"ion-spinner\",{\"color\":[1],\"duration\":[2],\"name\":[1],\"paused\":[4]}]]],[\"ion-backdrop\",[[33,\"ion-backdrop\",{\"visible\":[4],\"tappable\":[4],\"stopPropagation\":[4,\"stop-propagation\"]},[[2,\"click\",\"onMouseDown\"]]]]],[\"ion-ripple-effect\",[[1,\"ion-ripple-effect\",{\"type\":[1],\"addRipple\":[64]}]]],[\"ion-button_2\",[[33,\"ion-button\",{\"color\":[1],\"buttonType\":[1025,\"button-type\"],\"disabled\":[516],\"expand\":[513],\"fill\":[1537],\"routerDirection\":[1,\"router-direction\"],\"routerAnimation\":[16],\"download\":[1],\"href\":[1],\"rel\":[1],\"shape\":[513],\"size\":[513],\"strong\":[4],\"target\":[1],\"type\":[1]}],[1,\"ion-icon\",{\"mode\":[1025],\"color\":[1],\"ariaLabel\":[1537,\"aria-label\"],\"ariaHidden\":[513,\"aria-hidden\"],\"ios\":[1],\"md\":[1],\"flipRtl\":[4,\"flip-rtl\"],\"name\":[1],\"src\":[1],\"icon\":[8],\"size\":[1],\"lazy\":[4],\"sanitize\":[4],\"svgContent\":[32],\"isVisible\":[32]}]]],[\"ion-item_8\",[[33,\"ion-item-divider\",{\"color\":[1],\"sticky\":[4]}],[32,\"ion-item-group\"],[33,\"ion-note\",{\"color\":[1]}],[1,\"ion-skeleton-text\",{\"animated\":[4]}],[49,\"ion-item\",{\"color\":[1],\"button\":[4],\"detail\":[4],\"detailIcon\":[1,\"detail-icon\"],\"disabled\":[4],\"download\":[1],\"href\":[1],\"rel\":[1],\"lines\":[1],\"routerAnimation\":[16],\"routerDirection\":[1,\"router-direction\"],\"target\":[1],\"type\":[1],\"multipleInputs\":[32]},[[0,\"ionColor\",\"labelColorChanged\"],[0,\"ionStyle\",\"itemStyle\"]]],[34,\"ion-label\",{\"color\":[1],\"position\":[1],\"noAnimate\":[32]}],[32,\"ion-list\",{\"lines\":[1],\"inset\":[4],\"closeSlidingItems\":[64]}],[33,\"ion-list-header\",{\"color\":[1],\"lines\":[1]}]]]]"), options);
  });
};




/***/ }),

/***/ "meiF":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/animation-096c6391.js ***!
  \*****************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createAnimation; });
/* harmony import */ var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-dd7e4b7b.js */ "1vRN");


let animationPrefix;
/**
 * Web Animations requires hyphenated CSS properties
 * to be written in camelCase when animating
 */
const processKeyframes = (keyframes) => {
  keyframes.forEach(keyframe => {
    for (const key in keyframe) {
      if (keyframe.hasOwnProperty(key)) {
        const value = keyframe[key];
        if (key === 'easing') {
          const newKey = 'animation-timing-function';
          keyframe[newKey] = value;
          delete keyframe[key];
        }
        else {
          const newKey = convertCamelCaseToHypen(key);
          if (newKey !== key) {
            keyframe[newKey] = value;
            delete keyframe[key];
          }
        }
      }
    }
  });
  return keyframes;
};
const convertCamelCaseToHypen = (str) => {
  return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
};
const getAnimationPrefix = (el) => {
  if (animationPrefix === undefined) {
    const supportsUnprefixed = el.style.animationName !== undefined;
    const supportsWebkitPrefix = el.style.webkitAnimationName !== undefined;
    animationPrefix = (!supportsUnprefixed && supportsWebkitPrefix) ? '-webkit-' : '';
  }
  return animationPrefix;
};
const setStyleProperty = (element, propertyName, value) => {
  const prefix = propertyName.startsWith('animation') ? getAnimationPrefix(element) : '';
  element.style.setProperty(prefix + propertyName, value);
};
const removeStyleProperty = (element, propertyName) => {
  const prefix = propertyName.startsWith('animation') ? getAnimationPrefix(element) : '';
  element.style.removeProperty(prefix + propertyName);
};
const animationEnd = (el, callback) => {
  let unRegTrans;
  const opts = { passive: true };
  const unregister = () => {
    if (unRegTrans) {
      unRegTrans();
    }
  };
  const onTransitionEnd = (ev) => {
    if (el === ev.target) {
      unregister();
      callback(ev);
    }
  };
  if (el) {
    el.addEventListener('webkitAnimationEnd', onTransitionEnd, opts);
    el.addEventListener('animationend', onTransitionEnd, opts);
    unRegTrans = () => {
      el.removeEventListener('webkitAnimationEnd', onTransitionEnd, opts);
      el.removeEventListener('animationend', onTransitionEnd, opts);
    };
  }
  return unregister;
};
const generateKeyframeRules = (keyframes = []) => {
  return keyframes.map(keyframe => {
    const offset = keyframe.offset;
    const frameString = [];
    for (const property in keyframe) {
      if (keyframe.hasOwnProperty(property) && property !== 'offset') {
        frameString.push(`${property}: ${keyframe[property]};`);
      }
    }
    return `${offset * 100}% { ${frameString.join(' ')} }`;
  }).join(' ');
};
const keyframeIds = [];
const generateKeyframeName = (keyframeRules) => {
  let index = keyframeIds.indexOf(keyframeRules);
  if (index < 0) {
    index = (keyframeIds.push(keyframeRules) - 1);
  }
  return `ion-animation-${index}`;
};
const getStyleContainer = (element) => {
  const rootNode = element.getRootNode();
  return (rootNode.head || rootNode);
};
const createKeyframeStylesheet = (keyframeName, keyframeRules, element) => {
  const styleContainer = getStyleContainer(element);
  const keyframePrefix = getAnimationPrefix(element);
  const existingStylesheet = styleContainer.querySelector('#' + keyframeName);
  if (existingStylesheet) {
    return existingStylesheet;
  }
  const stylesheet = (element.ownerDocument || document).createElement('style');
  stylesheet.id = keyframeName;
  stylesheet.textContent = `@${keyframePrefix}keyframes ${keyframeName} { ${keyframeRules} } @${keyframePrefix}keyframes ${keyframeName}-alt { ${keyframeRules} }`;
  styleContainer.appendChild(stylesheet);
  return stylesheet;
};
const addClassToArray = (classes = [], className) => {
  if (className !== undefined) {
    const classNameToAppend = (Array.isArray(className)) ? className : [className];
    return [...classes, ...classNameToAppend];
  }
  return classes;
};

const createAnimation = (animationId) => {
  let _delay;
  let _duration;
  let _easing;
  let _iterations;
  let _fill;
  let _direction;
  let _keyframes = [];
  let beforeAddClasses = [];
  let beforeRemoveClasses = [];
  let initialized = false;
  let parentAnimation;
  let beforeStylesValue = {};
  let afterAddClasses = [];
  let afterRemoveClasses = [];
  let afterStylesValue = {};
  let numAnimationsRunning = 0;
  let shouldForceLinearEasing = false;
  let shouldForceSyncPlayback = false;
  let cssAnimationsTimerFallback;
  let forceDirectionValue;
  let forceDurationValue;
  let forceDelayValue;
  let willComplete = true;
  let finished = false;
  let shouldCalculateNumAnimations = true;
  let keyframeName;
  let ani;
  const id = animationId;
  const onFinishCallbacks = [];
  const onFinishOneTimeCallbacks = [];
  const elements = [];
  const childAnimations = [];
  const stylesheets = [];
  const _beforeAddReadFunctions = [];
  const _beforeAddWriteFunctions = [];
  const _afterAddReadFunctions = [];
  const _afterAddWriteFunctions = [];
  const webAnimations = [];
  const supportsAnimationEffect = (typeof AnimationEffect === 'function' || typeof window.AnimationEffect === 'function');
  const supportsWebAnimations = (typeof Element === 'function') && (typeof Element.prototype.animate === 'function') && supportsAnimationEffect;
  const ANIMATION_END_FALLBACK_PADDING_MS = 100;
  const getWebAnimations = () => {
    return webAnimations;
  };
  const destroy = (clearStyleSheets) => {
    childAnimations.forEach(childAnimation => {
      childAnimation.destroy(clearStyleSheets);
    });
    cleanUp(clearStyleSheets);
    elements.length = 0;
    childAnimations.length = 0;
    _keyframes.length = 0;
    clearOnFinish();
    initialized = false;
    shouldCalculateNumAnimations = true;
    return ani;
  };
  /**
   * Cancels any Web Animations, removes
   * any animation properties from the
   * animation's elements, and removes the
   * animation's stylesheets from the DOM.
   */
  const cleanUp = (clearStyleSheets) => {
    cleanUpElements();
    if (clearStyleSheets) {
      cleanUpStyleSheets();
    }
  };
  const resetFlags = () => {
    shouldForceLinearEasing = false;
    shouldForceSyncPlayback = false;
    shouldCalculateNumAnimations = true;
    forceDirectionValue = undefined;
    forceDurationValue = undefined;
    forceDelayValue = undefined;
    numAnimationsRunning = 0;
    finished = false;
    willComplete = true;
  };
  const onFinish = (callback, opts) => {
    const callbacks = (opts && opts.oneTimeCallback) ? onFinishOneTimeCallbacks : onFinishCallbacks;
    callbacks.push({ c: callback, o: opts });
    return ani;
  };
  const clearOnFinish = () => {
    onFinishCallbacks.length = 0;
    onFinishOneTimeCallbacks.length = 0;
    return ani;
  };
  /**
   * Cancels any Web Animations and removes
   * any animation properties from the
   * the animation's elements.
   */
  const cleanUpElements = () => {
    if (supportsWebAnimations) {
      webAnimations.forEach(animation => {
        animation.cancel();
      });
      webAnimations.length = 0;
    }
    else {
      const elementsArray = elements.slice();
      Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["r"])(() => {
        elementsArray.forEach(element => {
          removeStyleProperty(element, 'animation-name');
          removeStyleProperty(element, 'animation-duration');
          removeStyleProperty(element, 'animation-timing-function');
          removeStyleProperty(element, 'animation-iteration-count');
          removeStyleProperty(element, 'animation-delay');
          removeStyleProperty(element, 'animation-play-state');
          removeStyleProperty(element, 'animation-fill-mode');
          removeStyleProperty(element, 'animation-direction');
        });
      });
    }
  };
  /**
   * Removes the animation's stylesheets
   * from the DOM.
   */
  const cleanUpStyleSheets = () => {
    stylesheets.forEach(stylesheet => {
      /**
       * When sharing stylesheets, it's possible
       * for another animation to have already
       * cleaned up a particular stylesheet
       */
      if (stylesheet && stylesheet.parentNode) {
        stylesheet.parentNode.removeChild(stylesheet);
      }
    });
    stylesheets.length = 0;
  };
  const beforeAddRead = (readFn) => {
    _beforeAddReadFunctions.push(readFn);
    return ani;
  };
  const beforeAddWrite = (writeFn) => {
    _beforeAddWriteFunctions.push(writeFn);
    return ani;
  };
  const afterAddRead = (readFn) => {
    _afterAddReadFunctions.push(readFn);
    return ani;
  };
  const afterAddWrite = (writeFn) => {
    _afterAddWriteFunctions.push(writeFn);
    return ani;
  };
  const beforeAddClass = (className) => {
    beforeAddClasses = addClassToArray(beforeAddClasses, className);
    return ani;
  };
  const beforeRemoveClass = (className) => {
    beforeRemoveClasses = addClassToArray(beforeRemoveClasses, className);
    return ani;
  };
  /**
   * Set CSS inline styles to the animation's
   * elements before the animation begins.
   */
  const beforeStyles = (styles = {}) => {
    beforeStylesValue = styles;
    return ani;
  };
  /**
   * Clear CSS inline styles from the animation's
   * elements before the animation begins.
   */
  const beforeClearStyles = (propertyNames = []) => {
    for (const property of propertyNames) {
      beforeStylesValue[property] = '';
    }
    return ani;
  };
  const afterAddClass = (className) => {
    afterAddClasses = addClassToArray(afterAddClasses, className);
    return ani;
  };
  const afterRemoveClass = (className) => {
    afterRemoveClasses = addClassToArray(afterRemoveClasses, className);
    return ani;
  };
  const afterStyles = (styles = {}) => {
    afterStylesValue = styles;
    return ani;
  };
  const afterClearStyles = (propertyNames = []) => {
    for (const property of propertyNames) {
      afterStylesValue[property] = '';
    }
    return ani;
  };
  const getFill = () => {
    if (_fill !== undefined) {
      return _fill;
    }
    if (parentAnimation) {
      return parentAnimation.getFill();
    }
    return 'both';
  };
  const getDirection = () => {
    if (forceDirectionValue !== undefined) {
      return forceDirectionValue;
    }
    if (_direction !== undefined) {
      return _direction;
    }
    if (parentAnimation) {
      return parentAnimation.getDirection();
    }
    return 'normal';
  };
  const getEasing = () => {
    if (shouldForceLinearEasing) {
      return 'linear';
    }
    if (_easing !== undefined) {
      return _easing;
    }
    if (parentAnimation) {
      return parentAnimation.getEasing();
    }
    return 'linear';
  };
  const getDuration = () => {
    if (shouldForceSyncPlayback) {
      return 0;
    }
    if (forceDurationValue !== undefined) {
      return forceDurationValue;
    }
    if (_duration !== undefined) {
      return _duration;
    }
    if (parentAnimation) {
      return parentAnimation.getDuration();
    }
    return 0;
  };
  const getIterations = () => {
    if (_iterations !== undefined) {
      return _iterations;
    }
    if (parentAnimation) {
      return parentAnimation.getIterations();
    }
    return 1;
  };
  const getDelay = () => {
    if (forceDelayValue !== undefined) {
      return forceDelayValue;
    }
    if (_delay !== undefined) {
      return _delay;
    }
    if (parentAnimation) {
      return parentAnimation.getDelay();
    }
    return 0;
  };
  const getKeyframes = () => {
    return _keyframes;
  };
  const direction = (animationDirection) => {
    _direction = animationDirection;
    update(true);
    return ani;
  };
  const fill = (animationFill) => {
    _fill = animationFill;
    update(true);
    return ani;
  };
  const delay = (animationDelay) => {
    _delay = animationDelay;
    update(true);
    return ani;
  };
  const easing = (animationEasing) => {
    _easing = animationEasing;
    update(true);
    return ani;
  };
  const duration = (animationDuration) => {
    /**
     * CSS Animation Durations of 0ms work fine on Chrome
     * but do not run on Safari, so force it to 1ms to
     * get it to run on both platforms.
     */
    if (!supportsWebAnimations && animationDuration === 0) {
      animationDuration = 1;
    }
    _duration = animationDuration;
    update(true);
    return ani;
  };
  const iterations = (animationIterations) => {
    _iterations = animationIterations;
    update(true);
    return ani;
  };
  const parent = (animation) => {
    parentAnimation = animation;
    return ani;
  };
  const addElement = (el) => {
    if (el != null) {
      if (el.nodeType === 1) {
        elements.push(el);
      }
      else if (el.length >= 0) {
        for (let i = 0; i < el.length; i++) {
          elements.push(el[i]);
        }
      }
      else {
        console.error('Invalid addElement value');
      }
    }
    return ani;
  };
  const addAnimation = (animationToAdd) => {
    if (animationToAdd != null) {
      if (Array.isArray(animationToAdd)) {
        for (const animation of animationToAdd) {
          animation.parent(ani);
          childAnimations.push(animation);
        }
      }
      else {
        animationToAdd.parent(ani);
        childAnimations.push(animationToAdd);
      }
    }
    return ani;
  };
  const keyframes = (keyframeValues) => {
    _keyframes = keyframeValues;
    return ani;
  };
  /**
   * Run all "before" animation hooks.
   */
  const beforeAnimation = () => {
    // Runs all before read callbacks
    _beforeAddReadFunctions.forEach(callback => callback());
    // Runs all before write callbacks
    _beforeAddWriteFunctions.forEach(callback => callback());
    // Updates styles and classes before animation runs
    const addClasses = beforeAddClasses;
    const removeClasses = beforeRemoveClasses;
    const styles = beforeStylesValue;
    elements.forEach(el => {
      const elementClassList = el.classList;
      addClasses.forEach(c => elementClassList.add(c));
      removeClasses.forEach(c => elementClassList.remove(c));
      for (const property in styles) {
        if (styles.hasOwnProperty(property)) {
          setStyleProperty(el, property, styles[property]);
        }
      }
    });
  };
  /**
   * Run all "after" animation hooks.
   */
  const afterAnimation = () => {
    clearCSSAnimationsTimeout();
    // Runs all after read callbacks
    _afterAddReadFunctions.forEach(callback => callback());
    // Runs all after write callbacks
    _afterAddWriteFunctions.forEach(callback => callback());
    // Updates styles and classes before animation ends
    const currentStep = willComplete ? 1 : 0;
    const addClasses = afterAddClasses;
    const removeClasses = afterRemoveClasses;
    const styles = afterStylesValue;
    elements.forEach(el => {
      const elementClassList = el.classList;
      addClasses.forEach(c => elementClassList.add(c));
      removeClasses.forEach(c => elementClassList.remove(c));
      for (const property in styles) {
        if (styles.hasOwnProperty(property)) {
          setStyleProperty(el, property, styles[property]);
        }
      }
    });
    onFinishCallbacks.forEach(onFinishCallback => {
      return onFinishCallback.c(currentStep, ani);
    });
    onFinishOneTimeCallbacks.forEach(onFinishCallback => {
      return onFinishCallback.c(currentStep, ani);
    });
    onFinishOneTimeCallbacks.length = 0;
    shouldCalculateNumAnimations = true;
    if (willComplete) {
      finished = true;
    }
    willComplete = true;
  };
  const animationFinish = () => {
    if (numAnimationsRunning === 0) {
      return;
    }
    numAnimationsRunning--;
    if (numAnimationsRunning === 0) {
      afterAnimation();
      if (parentAnimation) {
        parentAnimation.animationFinish();
      }
    }
  };
  const initializeCSSAnimation = (toggleAnimationName = true) => {
    cleanUpStyleSheets();
    const processedKeyframes = processKeyframes(_keyframes);
    elements.forEach(element => {
      if (processedKeyframes.length > 0) {
        const keyframeRules = generateKeyframeRules(processedKeyframes);
        keyframeName = (animationId !== undefined) ? animationId : generateKeyframeName(keyframeRules);
        const stylesheet = createKeyframeStylesheet(keyframeName, keyframeRules, element);
        stylesheets.push(stylesheet);
        setStyleProperty(element, 'animation-duration', `${getDuration()}ms`);
        setStyleProperty(element, 'animation-timing-function', getEasing());
        setStyleProperty(element, 'animation-delay', `${getDelay()}ms`);
        setStyleProperty(element, 'animation-fill-mode', getFill());
        setStyleProperty(element, 'animation-direction', getDirection());
        const iterationsCount = (getIterations() === Infinity)
          ? 'infinite'
          : getIterations().toString();
        setStyleProperty(element, 'animation-iteration-count', iterationsCount);
        setStyleProperty(element, 'animation-play-state', 'paused');
        if (toggleAnimationName) {
          setStyleProperty(element, 'animation-name', `${stylesheet.id}-alt`);
        }
        Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["r"])(() => {
          setStyleProperty(element, 'animation-name', stylesheet.id || null);
        });
      }
    });
  };
  const initializeWebAnimation = () => {
    elements.forEach(element => {
      const animation = element.animate(_keyframes, {
        id,
        delay: getDelay(),
        duration: getDuration(),
        easing: getEasing(),
        iterations: getIterations(),
        fill: getFill(),
        direction: getDirection()
      });
      animation.pause();
      webAnimations.push(animation);
    });
    if (webAnimations.length > 0) {
      webAnimations[0].onfinish = () => {
        animationFinish();
      };
    }
  };
  const initializeAnimation = (toggleAnimationName = true) => {
    beforeAnimation();
    if (_keyframes.length > 0) {
      if (supportsWebAnimations) {
        initializeWebAnimation();
      }
      else {
        initializeCSSAnimation(toggleAnimationName);
      }
    }
    initialized = true;
  };
  const setAnimationStep = (step) => {
    step = Math.min(Math.max(step, 0), 0.9999);
    if (supportsWebAnimations) {
      webAnimations.forEach(animation => {
        animation.currentTime = animation.effect.getComputedTiming().delay + (getDuration() * step);
        animation.pause();
      });
    }
    else {
      const animationDuration = `-${getDuration() * step}ms`;
      elements.forEach(element => {
        if (_keyframes.length > 0) {
          setStyleProperty(element, 'animation-delay', animationDuration);
          setStyleProperty(element, 'animation-play-state', 'paused');
        }
      });
    }
  };
  const updateWebAnimation = (step) => {
    webAnimations.forEach(animation => {
      animation.effect.updateTiming({
        delay: getDelay(),
        duration: getDuration(),
        easing: getEasing(),
        iterations: getIterations(),
        fill: getFill(),
        direction: getDirection()
      });
    });
    if (step !== undefined) {
      setAnimationStep(step);
    }
  };
  const updateCSSAnimation = (toggleAnimationName = true, step) => {
    Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["r"])(() => {
      elements.forEach(element => {
        setStyleProperty(element, 'animation-name', keyframeName || null);
        setStyleProperty(element, 'animation-duration', `${getDuration()}ms`);
        setStyleProperty(element, 'animation-timing-function', getEasing());
        setStyleProperty(element, 'animation-delay', (step !== undefined) ? `-${step * getDuration()}ms` : `${getDelay()}ms`);
        setStyleProperty(element, 'animation-fill-mode', getFill() || null);
        setStyleProperty(element, 'animation-direction', getDirection() || null);
        const iterationsCount = (getIterations() === Infinity)
          ? 'infinite'
          : getIterations().toString();
        setStyleProperty(element, 'animation-iteration-count', iterationsCount);
        if (toggleAnimationName) {
          setStyleProperty(element, 'animation-name', `${keyframeName}-alt`);
        }
        Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["r"])(() => {
          setStyleProperty(element, 'animation-name', keyframeName || null);
        });
      });
    });
  };
  const update = (deep = false, toggleAnimationName = true, step) => {
    if (deep) {
      childAnimations.forEach(animation => {
        animation.update(deep, toggleAnimationName, step);
      });
    }
    if (supportsWebAnimations) {
      updateWebAnimation(step);
    }
    else {
      updateCSSAnimation(toggleAnimationName, step);
    }
    return ani;
  };
  const progressStart = (forceLinearEasing = false, step) => {
    childAnimations.forEach(animation => {
      animation.progressStart(forceLinearEasing, step);
    });
    pauseAnimation();
    shouldForceLinearEasing = forceLinearEasing;
    if (!initialized) {
      initializeAnimation();
    }
    else {
      update(false, true, step);
    }
    return ani;
  };
  const progressStep = (step) => {
    childAnimations.forEach(animation => {
      animation.progressStep(step);
    });
    setAnimationStep(step);
    return ani;
  };
  const progressEnd = (playTo, step, dur) => {
    shouldForceLinearEasing = false;
    childAnimations.forEach(animation => {
      animation.progressEnd(playTo, step, dur);
    });
    if (dur !== undefined) {
      forceDurationValue = dur;
    }
    finished = false;
    // tslint:disable-next-line: strict-boolean-conditions
    willComplete = true;
    if (playTo === 0) {
      forceDirectionValue = (getDirection() === 'reverse') ? 'normal' : 'reverse';
      if (forceDirectionValue === 'reverse') {
        willComplete = false;
      }
      if (supportsWebAnimations) {
        update();
        setAnimationStep(1 - step);
      }
      else {
        forceDelayValue = ((1 - step) * getDuration()) * -1;
        update(false, false);
      }
    }
    else if (playTo === 1) {
      if (supportsWebAnimations) {
        update();
        setAnimationStep(step);
      }
      else {
        forceDelayValue = (step * getDuration()) * -1;
        update(false, false);
      }
    }
    if (playTo !== undefined) {
      onFinish(() => {
        forceDurationValue = undefined;
        forceDirectionValue = undefined;
        forceDelayValue = undefined;
      }, {
        oneTimeCallback: true
      });
      if (!parentAnimation) {
        play();
      }
    }
    return ani;
  };
  const pauseAnimation = () => {
    if (initialized) {
      if (supportsWebAnimations) {
        webAnimations.forEach(animation => {
          animation.pause();
        });
      }
      else {
        elements.forEach(element => {
          setStyleProperty(element, 'animation-play-state', 'paused');
        });
      }
    }
  };
  const pause = () => {
    childAnimations.forEach(animation => {
      animation.pause();
    });
    pauseAnimation();
    return ani;
  };
  const onAnimationEndFallback = () => {
    cssAnimationsTimerFallback = undefined;
    animationFinish();
  };
  const clearCSSAnimationsTimeout = () => {
    if (cssAnimationsTimerFallback) {
      clearTimeout(cssAnimationsTimerFallback);
    }
  };
  const playCSSAnimations = () => {
    clearCSSAnimationsTimeout();
    Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["r"])(() => {
      elements.forEach(element => {
        if (_keyframes.length > 0) {
          setStyleProperty(element, 'animation-play-state', 'running');
        }
      });
    });
    if (_keyframes.length === 0 || elements.length === 0) {
      animationFinish();
    }
    else {
      /**
       * This is a catchall in the event that a CSS Animation did not finish.
       * The Web Animations API has mechanisms in place for preventing this.
       * CSS Animations will not fire an `animationend` event
       * for elements with `display: none`. The Web Animations API
       * accounts for this, but using raw CSS Animations requires
       * this workaround.
       */
      const animationDelay = getDelay() || 0;
      const animationDuration = getDuration() || 0;
      const animationIterations = getIterations() || 1;
      // No need to set a timeout when animation has infinite iterations
      if (isFinite(animationIterations)) {
        cssAnimationsTimerFallback = setTimeout(onAnimationEndFallback, animationDelay + (animationDuration * animationIterations) + ANIMATION_END_FALLBACK_PADDING_MS);
      }
      animationEnd(elements[0], () => {
        clearCSSAnimationsTimeout();
        /**
         * Ensure that clean up
         * is always done a frame
         * before the onFinish handlers
         * are fired. Otherwise, there
         * may be flickering if a new
         * animation is started on the same
         * element too quickly
         *
         * TODO: Is there a cleaner way to do this?
         */
        Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["r"])(() => {
          clearCSSAnimationPlayState();
          Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["r"])(animationFinish);
        });
      });
    }
  };
  const clearCSSAnimationPlayState = () => {
    elements.forEach(element => {
      removeStyleProperty(element, 'animation-duration');
      removeStyleProperty(element, 'animation-delay');
      removeStyleProperty(element, 'animation-play-state');
    });
  };
  const playWebAnimations = () => {
    webAnimations.forEach(animation => {
      animation.play();
    });
    if (_keyframes.length === 0 || elements.length === 0) {
      animationFinish();
    }
  };
  const resetAnimation = () => {
    if (supportsWebAnimations) {
      setAnimationStep(0);
      updateWebAnimation();
    }
    else {
      updateCSSAnimation();
    }
  };
  const play = (opts) => {
    return new Promise(resolve => {
      if (opts && opts.sync) {
        shouldForceSyncPlayback = true;
        onFinish(() => shouldForceSyncPlayback = false, { oneTimeCallback: true });
      }
      if (!initialized) {
        initializeAnimation();
      }
      if (finished) {
        resetAnimation();
        finished = false;
      }
      if (shouldCalculateNumAnimations) {
        numAnimationsRunning = childAnimations.length + 1;
        shouldCalculateNumAnimations = false;
      }
      onFinish(() => resolve(), { oneTimeCallback: true });
      childAnimations.forEach(animation => {
        animation.play();
      });
      if (supportsWebAnimations) {
        playWebAnimations();
      }
      else {
        playCSSAnimations();
      }
    });
  };
  const stop = () => {
    childAnimations.forEach(animation => {
      animation.stop();
    });
    if (initialized) {
      cleanUpElements();
      initialized = false;
    }
    resetFlags();
  };
  const from = (property, value) => {
    const firstFrame = _keyframes[0];
    if (firstFrame !== undefined && (firstFrame.offset === undefined || firstFrame.offset === 0)) {
      firstFrame[property] = value;
    }
    else {
      _keyframes = [
        { offset: 0, [property]: value },
        ..._keyframes
      ];
    }
    return ani;
  };
  const to = (property, value) => {
    const lastFrame = _keyframes[_keyframes.length - 1];
    if (lastFrame !== undefined && (lastFrame.offset === undefined || lastFrame.offset === 1)) {
      lastFrame[property] = value;
    }
    else {
      _keyframes = [
        ..._keyframes,
        { offset: 1, [property]: value }
      ];
    }
    return ani;
  };
  const fromTo = (property, fromValue, toValue) => {
    return from(property, fromValue).to(property, toValue);
  };
  return ani = {
    parentAnimation,
    elements,
    childAnimations,
    id,
    animationFinish,
    from,
    to,
    fromTo,
    parent,
    play,
    pause,
    stop,
    destroy,
    keyframes,
    addAnimation,
    addElement,
    update,
    fill,
    direction,
    iterations,
    duration,
    easing,
    delay,
    getWebAnimations,
    getKeyframes,
    getFill,
    getDirection,
    getDelay,
    getIterations,
    getEasing,
    getDuration,
    afterAddRead,
    afterAddWrite,
    afterClearStyles,
    afterStyles,
    afterRemoveClass,
    afterAddClass,
    beforeAddRead,
    beforeAddWrite,
    beforeClearStyles,
    beforeStyles,
    beforeRemoveClass,
    beforeAddClass,
    onFinish,
    progressStart,
    progressStep,
    progressEnd
  };
};




/***/ }),

/***/ "r7QR":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-0d58a5bf.js ***!
  \*************************************************************/
/*! exports provided: m */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return menuController; });
/* harmony import */ var _hardware_back_button_4a6b37fb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hardware-back-button-4a6b37fb.js */ "B4Jq");
/* harmony import */ var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers-dd7e4b7b.js */ "1vRN");
/* harmony import */ var _ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ionic-global-63a97a32.js */ "E/Mt");
/* harmony import */ var _animation_096c6391_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animation-096c6391.js */ "meiF");





/**
 * baseAnimation
 * Base class which is extended by the various types. Each
 * type will provide their own animations for open and close
 * and registers itself with Menu.
 */
const baseAnimation = (isIos) => {
  // https://material.io/guidelines/motion/movement.html#movement-movement-in-out-of-screen-bounds
  // https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves
  /**
   * "Apply the sharp curve to items temporarily leaving the screen that may return
   * from the same exit point. When they return, use the deceleration curve. On mobile,
   * this transition typically occurs over 300ms" -- MD Motion Guide
   */
  return Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_3__["c"])().duration(isIos ? 400 : 300);
};

/**
 * Menu Overlay Type
 * The menu slides over the content. The content
 * itself, which is under the menu, does not move.
 */
const menuOverlayAnimation = (menu) => {
  let closedX;
  let openedX;
  const width = menu.width + 8;
  const menuAnimation = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
  const backdropAnimation = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
  if (menu.isEndSide) {
    // right side
    closedX = width + 'px';
    openedX = '0px';
  }
  else {
    // left side
    closedX = -width + 'px';
    openedX = '0px';
  }
  menuAnimation
    .addElement(menu.menuInnerEl)
    .fromTo('transform', `translateX(${closedX})`, `translateX(${openedX})`);
  const mode = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_2__["b"])(menu);
  const isIos = mode === 'ios';
  const opacity = isIos ? 0.2 : 0.25;
  backdropAnimation
    .addElement(menu.backdropEl)
    .fromTo('opacity', 0.01, opacity);
  return baseAnimation(isIos).addAnimation([menuAnimation, backdropAnimation]);
};

/**
 * Menu Push Type
 * The content slides over to reveal the menu underneath.
 * The menu itself also slides over to reveal its bad self.
 */
const menuPushAnimation = (menu) => {
  let contentOpenedX;
  let menuClosedX;
  const mode = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_2__["b"])(menu);
  const width = menu.width;
  if (menu.isEndSide) {
    contentOpenedX = -width + 'px';
    menuClosedX = width + 'px';
  }
  else {
    contentOpenedX = width + 'px';
    menuClosedX = -width + 'px';
  }
  const menuAnimation = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_3__["c"])()
    .addElement(menu.menuInnerEl)
    .fromTo('transform', `translateX(${menuClosedX})`, 'translateX(0px)');
  const contentAnimation = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_3__["c"])()
    .addElement(menu.contentEl)
    .fromTo('transform', 'translateX(0px)', `translateX(${contentOpenedX})`);
  const backdropAnimation = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_3__["c"])()
    .addElement(menu.backdropEl)
    .fromTo('opacity', 0.01, 0.32);
  return baseAnimation(mode === 'ios').addAnimation([menuAnimation, contentAnimation, backdropAnimation]);
};

/**
 * Menu Reveal Type
 * The content slides over to reveal the menu underneath.
 * The menu itself, which is under the content, does not move.
 */
const menuRevealAnimation = (menu) => {
  const mode = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_2__["b"])(menu);
  const openedX = (menu.width * (menu.isEndSide ? -1 : 1)) + 'px';
  const contentOpen = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_3__["c"])()
    .addElement(menu.contentEl) // REVIEW
    .fromTo('transform', 'translateX(0px)', `translateX(${openedX})`);
  return baseAnimation(mode === 'ios').addAnimation(contentOpen);
};

const createMenuController = () => {
  const menuAnimations = new Map();
  const menus = [];
  const open = async (menu) => {
    const menuEl = await get(menu);
    if (menuEl) {
      return menuEl.open();
    }
    return false;
  };
  const close = async (menu) => {
    const menuEl = await (menu !== undefined ? get(menu) : getOpen());
    if (menuEl !== undefined) {
      return menuEl.close();
    }
    return false;
  };
  const toggle = async (menu) => {
    const menuEl = await get(menu);
    if (menuEl) {
      return menuEl.toggle();
    }
    return false;
  };
  const enable = async (shouldEnable, menu) => {
    const menuEl = await get(menu);
    if (menuEl) {
      menuEl.disabled = !shouldEnable;
    }
    return menuEl;
  };
  const swipeGesture = async (shouldEnable, menu) => {
    const menuEl = await get(menu);
    if (menuEl) {
      menuEl.swipeGesture = shouldEnable;
    }
    return menuEl;
  };
  const isOpen = async (menu) => {
    if (menu != null) {
      const menuEl = await get(menu);
      return (menuEl !== undefined && menuEl.isOpen());
    }
    else {
      const menuEl = await getOpen();
      return menuEl !== undefined;
    }
  };
  const isEnabled = async (menu) => {
    const menuEl = await get(menu);
    if (menuEl) {
      return !menuEl.disabled;
    }
    return false;
  };
  const get = async (menu) => {
    await waitUntilReady();
    if (menu === 'start' || menu === 'end') {
      // there could be more than one menu on the same side
      // so first try to get the enabled one
      const menuRef = find(m => m.side === menu && !m.disabled);
      if (menuRef) {
        return menuRef;
      }
      // didn't find a menu side that is enabled
      // so try to get the first menu side found
      return find(m => m.side === menu);
    }
    else if (menu != null) {
      // the menuId was not left or right
      // so try to get the menu by its "id"
      return find(m => m.menuId === menu);
    }
    // return the first enabled menu
    const menuEl = find(m => !m.disabled);
    if (menuEl) {
      return menuEl;
    }
    // get the first menu in the array, if one exists
    return menus.length > 0 ? menus[0].el : undefined;
  };
  /**
   * Get the instance of the opened menu. Returns `null` if a menu is not found.
   */
  const getOpen = async () => {
    await waitUntilReady();
    return _getOpenSync();
  };
  /**
   * Get all menu instances.
   */
  const getMenus = async () => {
    await waitUntilReady();
    return getMenusSync();
  };
  /**
   * Get whether or not a menu is animating. Returns `true` if any
   * menu is currently animating.
   */
  const isAnimating = async () => {
    await waitUntilReady();
    return isAnimatingSync();
  };
  const registerAnimation = (name, animation) => {
    menuAnimations.set(name, animation);
  };
  const _register = (menu) => {
    if (menus.indexOf(menu) < 0) {
      if (!menu.disabled) {
        _setActiveMenu(menu);
      }
      menus.push(menu);
    }
  };
  const _unregister = (menu) => {
    const index = menus.indexOf(menu);
    if (index > -1) {
      menus.splice(index, 1);
    }
  };
  const _setActiveMenu = (menu) => {
    // if this menu should be enabled
    // then find all the other menus on this same side
    // and automatically disable other same side menus
    const side = menu.side;
    menus
      .filter(m => m.side === side && m !== menu)
      .forEach(m => m.disabled = true);
  };
  const _setOpen = async (menu, shouldOpen, animated) => {
    if (isAnimatingSync()) {
      return false;
    }
    if (shouldOpen) {
      const openedMenu = await getOpen();
      if (openedMenu && menu.el !== openedMenu) {
        await openedMenu.setOpen(false, false);
      }
    }
    return menu._setOpen(shouldOpen, animated);
  };
  const _createAnimation = (type, menuCmp) => {
    const animationBuilder = menuAnimations.get(type);
    if (!animationBuilder) {
      throw new Error('animation not registered');
    }
    const animation = animationBuilder(menuCmp);
    return animation;
  };
  const _getOpenSync = () => {
    return find(m => m._isOpen);
  };
  const getMenusSync = () => {
    return menus.map(menu => menu.el);
  };
  const isAnimatingSync = () => {
    return menus.some(menu => menu.isAnimating);
  };
  const find = (predicate) => {
    const instance = menus.find(predicate);
    if (instance !== undefined) {
      return instance.el;
    }
    return undefined;
  };
  const waitUntilReady = () => {
    return Promise.all(Array.from(document.querySelectorAll('ion-menu'))
      .map(menu => new Promise(resolve => Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_1__["c"])(menu, resolve))));
  };
  registerAnimation('reveal', menuRevealAnimation);
  registerAnimation('push', menuPushAnimation);
  registerAnimation('overlay', menuOverlayAnimation);
  /* tslint:disable-next-line */
  if (typeof document !== 'undefined') {
    document.addEventListener('ionBackButton', (ev) => {
      const openMenu = _getOpenSync();
      if (openMenu) {
        ev.detail.register(_hardware_back_button_4a6b37fb_js__WEBPACK_IMPORTED_MODULE_0__["MENU_BACK_BUTTON_PRIORITY"], () => {
          return openMenu.close();
        });
      }
    });
  }
  return {
    registerAnimation,
    get,
    getMenus,
    getOpen,
    isEnabled,
    swipeGesture,
    isAnimating,
    isOpen,
    enable,
    toggle,
    close,
    open,
    _getOpenSync,
    _createAnimation,
    _register,
    _unregister,
    _setOpen,
    _setActiveMenu,
  };
};
const menuController = /*@__PURE__*/ createMenuController();




/***/ }),

/***/ "sZkV":
/*!***************************************************************!*\
  !*** ./node_modules/@ionic/angular/fesm2015/ionic-angular.js ***!
  \***************************************************************/
/*! exports provided: IonicSafeString, createAnimation, getPlatforms, iosTransitionAnimation, isPlatform, mdTransitionAnimation, ActionSheetController, AlertController, AngularDelegate, AnimationController, BooleanValueAccessor, Config, DomController, GestureController, IonApp, IonAvatar, IonBackButton, IonBackButtonDelegate, IonBackdrop, IonBadge, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCheckbox, IonChip, IonCol, IonContent, IonDatetime, IonFab, IonFabButton, IonFabList, IonFooter, IonGrid, IonHeader, IonIcon, IonImg, IonInfiniteScroll, IonInfiniteScrollContent, IonInput, IonItem, IonItemDivider, IonItemGroup, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonListHeader, IonMenu, IonMenuButton, IonMenuToggle, IonNav, IonNavLink, IonNote, IonProgressBar, IonRadio, IonRadioGroup, IonRange, IonRefresher, IonRefresherContent, IonReorder, IonReorderGroup, IonRippleEffect, IonRouterOutlet, IonRow, IonSearchbar, IonSegment, IonSegmentButton, IonSelect, IonSelectOption, IonSkeletonText, IonSlide, IonSlides, IonSpinner, IonSplitPane, IonTabBar, IonTabButton, IonTabs, IonText, IonTextarea, IonThumbnail, IonTitle, IonToggle, IonToolbar, IonVirtualScroll, IonicModule, IonicRouteStrategy, LoadingController, MenuController, ModalController, NavController, NavDelegate, NavParams, NumericValueAccessor, PickerController, Platform, PopoverController, RadioValueAccessor, RouterLinkDelegate, SelectValueAccessor, TextValueAccessor, ToastController, VirtualFooter, VirtualHeader, VirtualItem, ɵa, ɵb, ɵc, ɵe, ɵf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSheetController", function() { return ActionSheetController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertController", function() { return AlertController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularDelegate", function() { return AngularDelegate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationController", function() { return AnimationController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooleanValueAccessor", function() { return BooleanValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Config", function() { return Config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomController", function() { return DomController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GestureController", function() { return GestureController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonApp", function() { return IonApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonAvatar", function() { return IonAvatar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonBackButton", function() { return IonBackButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonBackButtonDelegate", function() { return IonBackButtonDelegate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonBackdrop", function() { return IonBackdrop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonBadge", function() { return IonBadge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonButton", function() { return IonButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonButtons", function() { return IonButtons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonCard", function() { return IonCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonCardContent", function() { return IonCardContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonCardHeader", function() { return IonCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonCardSubtitle", function() { return IonCardSubtitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonCardTitle", function() { return IonCardTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonCheckbox", function() { return IonCheckbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonChip", function() { return IonChip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonCol", function() { return IonCol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonContent", function() { return IonContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonDatetime", function() { return IonDatetime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonFab", function() { return IonFab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonFabButton", function() { return IonFabButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonFabList", function() { return IonFabList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonFooter", function() { return IonFooter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonGrid", function() { return IonGrid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonHeader", function() { return IonHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonIcon", function() { return IonIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonImg", function() { return IonImg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonInfiniteScroll", function() { return IonInfiniteScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonInfiniteScrollContent", function() { return IonInfiniteScrollContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonInput", function() { return IonInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonItem", function() { return IonItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonItemDivider", function() { return IonItemDivider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonItemGroup", function() { return IonItemGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonItemOption", function() { return IonItemOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonItemOptions", function() { return IonItemOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonItemSliding", function() { return IonItemSliding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonLabel", function() { return IonLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonList", function() { return IonList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonListHeader", function() { return IonListHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonMenu", function() { return IonMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonMenuButton", function() { return IonMenuButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonMenuToggle", function() { return IonMenuToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonNav", function() { return IonNav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonNavLink", function() { return IonNavLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonNote", function() { return IonNote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonProgressBar", function() { return IonProgressBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonRadio", function() { return IonRadio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonRadioGroup", function() { return IonRadioGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonRange", function() { return IonRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonRefresher", function() { return IonRefresher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonRefresherContent", function() { return IonRefresherContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonReorder", function() { return IonReorder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonReorderGroup", function() { return IonReorderGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonRippleEffect", function() { return IonRippleEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonRouterOutlet", function() { return IonRouterOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonRow", function() { return IonRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonSearchbar", function() { return IonSearchbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonSegment", function() { return IonSegment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonSegmentButton", function() { return IonSegmentButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonSelect", function() { return IonSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonSelectOption", function() { return IonSelectOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonSkeletonText", function() { return IonSkeletonText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonSlide", function() { return IonSlide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonSlides", function() { return IonSlides; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonSpinner", function() { return IonSpinner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonSplitPane", function() { return IonSplitPane; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonTabBar", function() { return IonTabBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonTabButton", function() { return IonTabButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonTabs", function() { return IonTabs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonText", function() { return IonText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonTextarea", function() { return IonTextarea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonThumbnail", function() { return IonThumbnail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonTitle", function() { return IonTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonToggle", function() { return IonToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonToolbar", function() { return IonToolbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonVirtualScroll", function() { return IonVirtualScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonicModule", function() { return IonicModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonicRouteStrategy", function() { return IonicRouteStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingController", function() { return LoadingController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuController", function() { return MenuController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalController", function() { return ModalController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavController", function() { return NavController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavDelegate", function() { return NavDelegate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavParams", function() { return NavParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumericValueAccessor", function() { return NumericValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PickerController", function() { return PickerController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Platform", function() { return Platform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverController", function() { return PopoverController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioValueAccessor", function() { return RadioValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterLinkDelegate", function() { return RouterLinkDelegate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectValueAccessor", function() { return SelectValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextValueAccessor", function() { return TextValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastController", function() { return ToastController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VirtualFooter", function() { return VirtualFooter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VirtualHeader", function() { return VirtualHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VirtualItem", function() { return VirtualItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return ConfigToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return ValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return ProxyCmp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return OverlayBaseController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return appInitialize; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "O1h7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ionic_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/core */ "1Bn7");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IonicSafeString", function() { return _ionic_core__WEBPACK_IMPORTED_MODULE_5__["IonicSafeString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createAnimation", function() { return _ionic_core__WEBPACK_IMPORTED_MODULE_5__["createAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPlatforms", function() { return _ionic_core__WEBPACK_IMPORTED_MODULE_5__["getPlatforms"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "iosTransitionAnimation", function() { return _ionic_core__WEBPACK_IMPORTED_MODULE_5__["iosTransitionAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPlatform", function() { return _ionic_core__WEBPACK_IMPORTED_MODULE_5__["isPlatform"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mdTransitionAnimation", function() { return _ionic_core__WEBPACK_IMPORTED_MODULE_5__["mdTransitionAnimation"]; });

/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _ionic_core_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/core/loader */ "ybVP");










const _c0 = ["*"];
const _c1 = ["outlet"];
const _c2 = [[["", "slot", "top"]], "*"];
const _c3 = ["[slot=top]", "*"];





const raf = (h) => {
    if (typeof __zone_symbol__requestAnimationFrame === 'function') {
        return __zone_symbol__requestAnimationFrame(h);
    }
    if (typeof requestAnimationFrame === 'function') {
        return requestAnimationFrame(h);
    }
    return setTimeout(h);
};

class ValueAccessor {
    constructor(injector, el) {
        this.injector = injector;
        this.el = el;
        this.onChange = () => { };
        this.onTouched = () => { };
    }
    writeValue(value) {
        /**
         * TODO for Ionic 6:
         * Change `value == null ? '' : value;`
         * to `value`. This was a fix for IE9, but IE9
         * is no longer supported; however, this change
         * is potentially a breaking change
         */
        this.el.nativeElement.value = this.lastValue = value == null ? '' : value;
        setIonicClasses(this.el);
    }
    handleChangeEvent(el, value) {
        if (el === this.el.nativeElement) {
            if (value !== this.lastValue) {
                this.lastValue = value;
                this.onChange(value);
            }
            setIonicClasses(this.el);
        }
    }
    _handleBlurEvent(el) {
        if (el === this.el.nativeElement) {
            this.onTouched();
            setIonicClasses(this.el);
        }
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.el.nativeElement.disabled = isDisabled;
    }
    ngOnDestroy() {
        if (this.statusChanges) {
            this.statusChanges.unsubscribe();
        }
    }
    ngAfterViewInit() {
        let ngControl;
        try {
            ngControl = this.injector.get(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]);
        }
        catch ( /* No FormControl or ngModel binding */_a) { /* No FormControl or ngModel binding */ }
        if (!ngControl) {
            return;
        }
        // Listen for changes in validity, disabled, or pending states
        if (ngControl.statusChanges) {
            this.statusChanges = ngControl.statusChanges.subscribe(() => setIonicClasses(this.el));
        }
        /**
         * TODO Remove this in favor of https://github.com/angular/angular/issues/10887
         * whenever it is implemented. Currently, Ionic's form status classes
         * do not react to changes when developers manually call
         * Angular form control methods such as markAsTouched.
         * This results in Ionic's form status classes being out
         * of sync with the ng form status classes.
         * This patches the methods to manually sync
         * the classes until this feature is implemented in Angular.
         */
        const formControl = ngControl.control;
        if (formControl) {
            const methodsToPatch = ['markAsTouched', 'markAllAsTouched', 'markAsUntouched', 'markAsDirty', 'markAsPristine'];
            methodsToPatch.forEach(method => {
                if (formControl[method]) {
                    const oldFn = formControl[method].bind(formControl);
                    formControl[method] = (...params) => {
                        oldFn(...params);
                        setIonicClasses(this.el);
                    };
                }
            });
        }
    }
}
ValueAccessor.ɵfac = function ValueAccessor_Factory(t) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinvalidFactory"](); };
ValueAccessor.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: ValueAccessor, hostBindings: function ValueAccessor_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionBlur", function ValueAccessor_ionBlur_HostBindingHandler($event) { return ctx._handleBlurEvent($event.target); });
    } } });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('ionBlur', ['$event.target'])
], ValueAccessor.prototype, "_handleBlurEvent", null);
const setIonicClasses = (element) => {
    raf(() => {
        const input = element.nativeElement;
        const classes = getClasses(input);
        setClasses(input, classes);
        const item = input.closest('ion-item');
        if (item) {
            setClasses(item, classes);
        }
    });
};
const getClasses = (element) => {
    const classList = element.classList;
    const classes = [];
    for (let i = 0; i < classList.length; i++) {
        const item = classList.item(i);
        if (item !== null && startsWith(item, 'ng-')) {
            classes.push(`ion-${item.substr(3)}`);
        }
    }
    return classes;
};
const ɵ0 = getClasses;
const setClasses = (element, classes) => {
    const classList = element.classList;
    [
        'ion-valid',
        'ion-invalid',
        'ion-touched',
        'ion-untouched',
        'ion-dirty',
        'ion-pristine'
    ].forEach(c => classList.remove(c));
    classes.forEach(c => classList.add(c));
};
const ɵ1 = setClasses;
const startsWith = (input, search) => {
    return input.substr(0, search.length) === search;
};
const ɵ2 = startsWith;

var BooleanValueAccessor_1;
let BooleanValueAccessor = BooleanValueAccessor_1 = class BooleanValueAccessor extends ValueAccessor {
    constructor(injector, el) {
        super(injector, el);
    }
    writeValue(value) {
        this.el.nativeElement.checked = this.lastValue = value == null ? false : value;
        setIonicClasses(this.el);
    }
    _handleIonChange(el) {
        this.handleChangeEvent(el, el.checked);
    }
};
BooleanValueAccessor.ɵfac = function BooleanValueAccessor_Factory(t) { return new (t || BooleanValueAccessor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])); };
BooleanValueAccessor.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: BooleanValueAccessor, selectors: [["ion-checkbox"], ["ion-toggle"]], hostBindings: function BooleanValueAccessor_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function BooleanValueAccessor_ionChange_HostBindingHandler($event) { return ctx._handleIonChange($event.target); });
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                useExisting: BooleanValueAccessor_1,
                multi: true
            }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
BooleanValueAccessor.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('ionChange', ['$event.target'])
], BooleanValueAccessor.prototype, "_handleIonChange", null);

var NumericValueAccessor_1;
let NumericValueAccessor = NumericValueAccessor_1 = class NumericValueAccessor extends ValueAccessor {
    constructor(injector, el) {
        super(injector, el);
    }
    _handleIonChange(el) {
        this.handleChangeEvent(el, el.value);
    }
    registerOnChange(fn) {
        super.registerOnChange(value => {
            fn(value === '' ? null : parseFloat(value));
        });
    }
};
NumericValueAccessor.ɵfac = function NumericValueAccessor_Factory(t) { return new (t || NumericValueAccessor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])); };
NumericValueAccessor.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: NumericValueAccessor, selectors: [["ion-input", "type", "number"]], hostBindings: function NumericValueAccessor_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function NumericValueAccessor_ionChange_HostBindingHandler($event) { return ctx._handleIonChange($event.target); });
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                useExisting: NumericValueAccessor_1,
                multi: true
            }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
NumericValueAccessor.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('ionChange', ['$event.target'])
], NumericValueAccessor.prototype, "_handleIonChange", null);

var RadioValueAccessor_1;
let RadioValueAccessor = RadioValueAccessor_1 = class RadioValueAccessor extends ValueAccessor {
    constructor(injector, el) {
        super(injector, el);
    }
    _handleIonSelect(el) {
        this.handleChangeEvent(el, el.checked);
    }
};
RadioValueAccessor.ɵfac = function RadioValueAccessor_Factory(t) { return new (t || RadioValueAccessor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])); };
RadioValueAccessor.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: RadioValueAccessor, selectors: [["ion-radio"]], hostBindings: function RadioValueAccessor_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionSelect", function RadioValueAccessor_ionSelect_HostBindingHandler($event) { return ctx._handleIonSelect($event.target); });
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                useExisting: RadioValueAccessor_1,
                multi: true
            }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
RadioValueAccessor.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('ionSelect', ['$event.target'])
], RadioValueAccessor.prototype, "_handleIonSelect", null);

var SelectValueAccessor_1;
let SelectValueAccessor = SelectValueAccessor_1 = class SelectValueAccessor extends ValueAccessor {
    constructor(injector, el) {
        super(injector, el);
    }
    _handleChangeEvent(el) {
        this.handleChangeEvent(el, el.value);
    }
};
SelectValueAccessor.ɵfac = function SelectValueAccessor_Factory(t) { return new (t || SelectValueAccessor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])); };
SelectValueAccessor.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: SelectValueAccessor, selectors: [["ion-range"], ["ion-select"], ["ion-radio-group"], ["ion-segment"], ["ion-datetime"]], hostBindings: function SelectValueAccessor_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function SelectValueAccessor_ionChange_HostBindingHandler($event) { return ctx._handleChangeEvent($event.target); });
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                useExisting: SelectValueAccessor_1,
                multi: true
            }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
SelectValueAccessor.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('ionChange', ['$event.target'])
], SelectValueAccessor.prototype, "_handleChangeEvent", null);

var TextValueAccessor_1;
let TextValueAccessor = TextValueAccessor_1 = class TextValueAccessor extends ValueAccessor {
    constructor(injector, el) {
        super(injector, el);
    }
    _handleInputEvent(el) {
        this.handleChangeEvent(el, el.value);
    }
};
TextValueAccessor.ɵfac = function TextValueAccessor_Factory(t) { return new (t || TextValueAccessor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])); };
TextValueAccessor.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: TextValueAccessor, selectors: [["ion-input", 3, "type", "number"], ["ion-textarea"], ["ion-searchbar"]], hostBindings: function TextValueAccessor_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function TextValueAccessor_ionChange_HostBindingHandler($event) { return ctx._handleInputEvent($event.target); });
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                useExisting: TextValueAccessor_1,
                multi: true
            }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
TextValueAccessor.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('ionChange', ['$event.target'])
], TextValueAccessor.prototype, "_handleInputEvent", null);

let Platform = class Platform {
    constructor(doc, zone) {
        this.doc = doc;
        /**
         * @hidden
         */
        this.backButton = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        /**
         * The keyboardDidShow event emits when the
         * on-screen keyboard is presented.
         */
        this.keyboardDidShow = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        /**
         * The keyboardDidHide event emits when the
         * on-screen keyboard is hidden.
         */
        this.keyboardDidHide = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        /**
         * The pause event emits when the native platform puts the application
         * into the background, typically when the user switches to a different
         * application. This event would emit when a Cordova app is put into
         * the background, however, it would not fire on a standard web browser.
         */
        this.pause = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        /**
         * The resume event emits when the native platform pulls the application
         * out from the background. This event would emit when a Cordova app comes
         * out from the background, however, it would not fire on a standard web browser.
         */
        this.resume = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        /**
         * The resize event emits when the browser window has changed dimensions. This
         * could be from a browser window being physically resized, or from a device
         * changing orientation.
         */
        this.resize = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        zone.run(() => {
            this.win = doc.defaultView;
            this.backButton.subscribeWithPriority = function (priority, callback) {
                return this.subscribe(ev => {
                    return ev.register(priority, processNextHandler => zone.run(() => callback(processNextHandler)));
                });
            };
            proxyEvent(this.pause, doc, 'pause');
            proxyEvent(this.resume, doc, 'resume');
            proxyEvent(this.backButton, doc, 'ionBackButton');
            proxyEvent(this.resize, this.win, 'resize');
            proxyEvent(this.keyboardDidShow, this.win, 'ionKeyboardDidShow');
            proxyEvent(this.keyboardDidHide, this.win, 'ionKeyboardDidHide');
            let readyResolve;
            this._readyPromise = new Promise(res => { readyResolve = res; });
            if (this.win && this.win['cordova']) {
                doc.addEventListener('deviceready', () => {
                    readyResolve('cordova');
                }, { once: true });
            }
            else {
                readyResolve('dom');
            }
        });
    }
    /**
     * @returns returns true/false based on platform.
     * @description
     * Depending on the platform the user is on, `is(platformName)` will
     * return `true` or `false`. Note that the same app can return `true`
     * for more than one platform name. For example, an app running from
     * an iPad would return `true` for the platform names: `mobile`,
     * `ios`, `ipad`, and `tablet`. Additionally, if the app was running
     * from Cordova then `cordova` would be true, and if it was running
     * from a web browser on the iPad then `mobileweb` would be `true`.
     *
     * ```
     * import { Platform } from 'ionic-angular';
     *
     * @Component({...})
     * export MyPage {
     *   constructor(public platform: Platform) {
     *     if (this.platform.is('ios')) {
     *       // This will only print when on iOS
     *       console.log('I am an iOS device!');
     *     }
     *   }
     * }
     * ```
     *
     * | Platform Name   | Description                        |
     * |-----------------|------------------------------------|
     * | android         | on a device running Android.       |
     * | cordova         | on a device running Cordova.       |
     * | ios             | on a device running iOS.           |
     * | ipad            | on an iPad device.                 |
     * | iphone          | on an iPhone device.               |
     * | phablet         | on a phablet device.               |
     * | tablet          | on a tablet device.                |
     * | electron        | in Electron on a desktop device.   |
     * | pwa             | as a PWA app.                      |
     * | mobile          | on a mobile device.                |
     * | mobileweb       | on a mobile device in a browser.   |
     * | desktop         | on a desktop device.               |
     * | hybrid          | is a cordova or capacitor app.     |
     *
     */
    is(platformName) {
        return Object(_ionic_core__WEBPACK_IMPORTED_MODULE_5__["isPlatform"])(this.win, platformName);
    }
    /**
     * @returns the array of platforms
     * @description
     * Depending on what device you are on, `platforms` can return multiple values.
     * Each possible value is a hierarchy of platforms. For example, on an iPhone,
     * it would return `mobile`, `ios`, and `iphone`.
     *
     * ```
     * import { Platform } from 'ionic-angular';
     *
     * @Component({...})
     * export MyPage {
     *   constructor(public platform: Platform) {
     *     // This will print an array of the current platforms
     *     console.log(this.platform.platforms());
     *   }
     * }
     * ```
     */
    platforms() {
        return Object(_ionic_core__WEBPACK_IMPORTED_MODULE_5__["getPlatforms"])(this.win);
    }
    /**
     * Returns a promise when the platform is ready and native functionality
     * can be called. If the app is running from within a web browser, then
     * the promise will resolve when the DOM is ready. When the app is running
     * from an application engine such as Cordova, then the promise will
     * resolve when Cordova triggers the `deviceready` event.
     *
     * The resolved value is the `readySource`, which states which platform
     * ready was used. For example, when Cordova is ready, the resolved ready
     * source is `cordova`. The default ready source value will be `dom`. The
     * `readySource` is useful if different logic should run depending on the
     * platform the app is running from. For example, only Cordova can execute
     * the status bar plugin, so the web should not run status bar plugin logic.
     *
     * ```
     * import { Component } from '@angular/core';
     * import { Platform } from 'ionic-angular';
     *
     * @Component({...})
     * export MyApp {
     *   constructor(public platform: Platform) {
     *     this.platform.ready().then((readySource) => {
     *       console.log('Platform ready from', readySource);
     *       // Platform now ready, execute any required native code
     *     });
     *   }
     * }
     * ```
     */
    ready() {
        return this._readyPromise;
    }
    /**
     * Returns if this app is using right-to-left language direction or not.
     * We recommend the app's `index.html` file already has the correct `dir`
     * attribute value set, such as `<html dir="ltr">` or `<html dir="rtl">`.
     * [W3C: Structural markup and right-to-left text in HTML](http://www.w3.org/International/questions/qa-html-dir)
     */
    get isRTL() {
        return this.doc.dir === 'rtl';
    }
    /**
     * Get the query string parameter
     */
    getQueryParam(key) {
        return readQueryParam(this.win.location.href, key);
    }
    /**
     * Returns `true` if the app is in landscape mode.
     */
    isLandscape() {
        return !this.isPortrait();
    }
    /**
     * Returns `true` if the app is in portait mode.
     */
    isPortrait() {
        return this.win.matchMedia && this.win.matchMedia('(orientation: portrait)').matches;
    }
    testUserAgent(expression) {
        const nav = this.win.navigator;
        return !!(nav && nav.userAgent && nav.userAgent.indexOf(expression) >= 0);
    }
    /**
     * Get the current url.
     */
    url() {
        return this.win.location.href;
    }
    /**
     * Gets the width of the platform's viewport using `window.innerWidth`.
     */
    width() {
        return this.win.innerWidth;
    }
    /**
     * Gets the height of the platform's viewport using `window.innerHeight`.
     */
    height() {
        return this.win.innerHeight;
    }
};
Platform.ɵfac = function Platform_Factory(t) { return new (t || Platform)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
Platform.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: Platform, factory: function (t) { return Platform.ɵfac(t); }, providedIn: 'root' });
Platform.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
Platform.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function Platform_Factory() { return new Platform(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); }, token: Platform, providedIn: "root" });
Platform = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([ Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]))
], Platform);
const readQueryParam = (url, key) => {
    key = key.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + key + '=([^&#]*)');
    const results = regex.exec(url);
    return results ? decodeURIComponent(results[1].replace(/\+/g, ' ')) : null;
};
const ɵ0$1 = readQueryParam;
const proxyEvent = (emitter, el, eventName) => {
    if (el) {
        el.addEventListener(eventName, (ev) => {
            // ?? cordova might emit "null" events
            emitter.next(ev != null ? ev.detail : undefined);
        });
    }
};
const ɵ1$1 = proxyEvent;

let NavController = class NavController {
    constructor(platform, location, serializer, router) {
        this.location = location;
        this.serializer = serializer;
        this.router = router;
        this.direction = DEFAULT_DIRECTION;
        this.animated = DEFAULT_ANIMATED;
        this.guessDirection = 'forward';
        this.lastNavId = -1;
        // Subscribe to router events to detect direction
        if (router) {
            router.events.subscribe(ev => {
                if (ev instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationStart"]) {
                    const id = (ev.restoredState) ? ev.restoredState.navigationId : ev.id;
                    this.guessDirection = id < this.lastNavId ? 'back' : 'forward';
                    this.guessAnimation = !ev.restoredState ? this.guessDirection : undefined;
                    this.lastNavId = this.guessDirection === 'forward' ? ev.id : id;
                }
            });
        }
        // Subscribe to backButton events
        platform.backButton.subscribeWithPriority(0, processNextHandler => {
            this.pop();
            processNextHandler();
        });
    }
    /**
     * This method uses Angular's [Router](https://angular.io/api/router/Router) under the hood,
     * it's equivalent to calling `this.router.navigateByUrl()`, but it's explicit about the **direction** of the transition.
     *
     * Going **forward** means that a new page is going to be pushed to the stack of the outlet (ion-router-outlet),
     * and that it will show a "forward" animation by default.
     *
     * Navigating forward can also be triggered in a declarative manner by using the `[routerDirection]` directive:
     *
     * ```html
     * <a routerLink="/path/to/page" routerDirection="forward">Link</a>
     * ```
     */
    navigateForward(url, options = {}) {
        this.setDirection('forward', options.animated, options.animationDirection, options.animation);
        return this.navigate(url, options);
    }
    /**
     * This method uses Angular's [Router](https://angular.io/api/router/Router) under the hood,
     * it's equivalent to calling:
     *
     * ```ts
     * this.navController.setDirection('back');
     * this.router.navigateByUrl(path);
     * ```
     *
     * Going **back** means that all the pages in the stack until the navigated page is found will be popped,
     * and that it will show a "back" animation by default.
     *
     * Navigating back can also be triggered in a declarative manner by using the `[routerDirection]` directive:
     *
     * ```html
     * <a routerLink="/path/to/page" routerDirection="back">Link</a>
     * ```
     */
    navigateBack(url, options = {}) {
        this.setDirection('back', options.animated, options.animationDirection, options.animation);
        return this.navigate(url, options);
    }
    /**
     * This method uses Angular's [Router](https://angular.io/api/router/Router) under the hood,
     * it's equivalent to calling:
     *
     * ```ts
     * this.navController.setDirection('root');
     * this.router.navigateByUrl(path);
     * ```
     *
     * Going **root** means that all existing pages in the stack will be removed,
     * and the navigated page will become the single page in the stack.
     *
     * Navigating root can also be triggered in a declarative manner by using the `[routerDirection]` directive:
     *
     * ```html
     * <a routerLink="/path/to/page" routerDirection="root">Link</a>
     * ```
     */
    navigateRoot(url, options = {}) {
        this.setDirection('root', options.animated, options.animationDirection, options.animation);
        return this.navigate(url, options);
    }
    /**
     * Same as [Location](https://angular.io/api/common/Location)'s back() method.
     * It will use the standard `window.history.back()` under the hood, but featuring a `back` animation
     * by default.
     */
    back(options = { animated: true, animationDirection: 'back' }) {
        this.setDirection('back', options.animated, options.animationDirection, options.animation);
        return this.location.back();
    }
    /**
     * This methods goes back in the context of Ionic's stack navigation.
     *
     * It recursively finds the top active `ion-router-outlet` and calls `pop()`.
     * This is the recommended way to go back when you are using `ion-router-outlet`.
     */
    pop() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let outlet = this.topOutlet;
            while (outlet) {
                if (yield outlet.pop()) {
                    break;
                }
                else {
                    outlet = outlet.parentOutlet;
                }
            }
        });
    }
    /**
     * This methods specifies the direction of the next navigation performed by the Angular router.
     *
     * `setDirection()` does not trigger any transition, it just sets some flags to be consumed by `ion-router-outlet`.
     *
     * It's recommended to use `navigateForward()`, `navigateBack()` and `navigateRoot()` instead of `setDirection()`.
     */
    setDirection(direction, animated, animationDirection, animationBuilder) {
        this.direction = direction;
        this.animated = getAnimation(direction, animated, animationDirection);
        this.animationBuilder = animationBuilder;
    }
    /**
     * @internal
     */
    setTopOutlet(outlet) {
        this.topOutlet = outlet;
    }
    /**
     * @internal
     */
    consumeTransition() {
        let direction = 'root';
        let animation;
        const animationBuilder = this.animationBuilder;
        if (this.direction === 'auto') {
            direction = this.guessDirection;
            animation = this.guessAnimation;
        }
        else {
            animation = this.animated;
            direction = this.direction;
        }
        this.direction = DEFAULT_DIRECTION;
        this.animated = DEFAULT_ANIMATED;
        this.animationBuilder = undefined;
        return {
            direction,
            animation,
            animationBuilder
        };
    }
    navigate(url, options) {
        if (Array.isArray(url)) {
            return this.router.navigate(url, options);
        }
        else {
            /**
             * navigateByUrl ignores any properties that
             * would change the url, so things like queryParams
             * would be ignored unless we create a url tree
             * More Info: https://github.com/angular/angular/issues/18798
             */
            const urlTree = this.serializer.parse(url.toString());
            if (options.queryParams !== undefined) {
                urlTree.queryParams = Object.assign({}, options.queryParams);
            }
            if (options.fragment !== undefined) {
                urlTree.fragment = options.fragment;
            }
            /**
             * `navigateByUrl` will still apply `NavigationExtras` properties
             * that do not modify the url, such as `replaceUrl` which is why
             * `options` is passed in here.
             */
            return this.router.navigateByUrl(urlTree, options);
        }
    }
};
NavController.ɵfac = function NavController_Factory(t) { return new (t || NavController)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](Platform), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["UrlSerializer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], 8)); };
NavController.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: NavController, factory: function (t) { return NavController.ɵfac(t); }, providedIn: 'root' });
NavController.ctorParameters = () => [
    { type: Platform },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["UrlSerializer"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] }
];
NavController.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function NavController_Factory() { return new NavController(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(Platform), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_router__WEBPACK_IMPORTED_MODULE_4__["UrlSerializer"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], 8)); }, token: NavController, providedIn: "root" });
NavController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([ Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])())
], NavController);
const getAnimation = (direction, animated, animationDirection) => {
    if (animated === false) {
        return undefined;
    }
    if (animationDirection !== undefined) {
        return animationDirection;
    }
    if (direction === 'forward' || direction === 'back') {
        return direction;
    }
    else if (direction === 'root' && animated === true) {
        return 'forward';
    }
    return undefined;
};
const ɵ0$2 = getAnimation;
const DEFAULT_DIRECTION = 'auto';
const DEFAULT_ANIMATED = undefined;

/* eslint-disable */
const proxyInputs = (Cmp, inputs) => {
    const Prototype = Cmp.prototype;
    inputs.forEach(item => {
        Object.defineProperty(Prototype, item, {
            get() {
                return this.el[item];
            },
            set(val) {
                this.z.runOutsideAngular(() => (this.el[item] = val));
            }
        });
    });
};
const proxyMethods = (Cmp, methods) => {
    const Prototype = Cmp.prototype;
    methods.forEach(methodName => {
        Prototype[methodName] = function () {
            const args = arguments;
            return this.z.runOutsideAngular(() => this.el[methodName].apply(this.el, args));
        };
    });
};
const proxyOutputs = (instance, el, events) => {
    events.forEach(eventName => instance[eventName] = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(el, eventName));
};
function ProxyCmp(opts) {
    const decorator = function (cls) {
        if (opts.inputs) {
            proxyInputs(cls, opts.inputs);
        }
        if (opts.methods) {
            proxyMethods(cls, opts.methods);
        }
        return cls;
    };
    return decorator;
}

let IonApp = class IonApp {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
IonApp.ɵfac = function IonApp_Factory(t) { return new (t || IonApp)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
IonApp.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IonApp, selectors: [["ion-app"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function IonApp_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
IonApp.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
let IonAvatar = class IonAvatar {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
IonAvatar.ɵfac = function IonAvatar_Factory(t) { return new (t || IonAvatar)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
IonAvatar.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IonAvatar, selectors: [["ion-avatar"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function IonAvatar_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
IonAvatar.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
let IonBackButton = class IonBackButton {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
IonBackButton.ɵfac = function IonBackButton_Factory(t) { return new (t || IonBackButton)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
IonBackButton.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IonBackButton, selectors: [["ion-back-button"]], inputs: { color: "color", defaultHref: "defaultHref", disabled: "disabled", icon: "icon", mode: "mode", routerAnimation: "routerAnimation", text: "text", type: "type" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function IonBackButton_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
IonBackButton.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
IonBackButton = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    ProxyCmp({ inputs: ["color", "defaultHref", "disabled", "icon", "mode", "routerAnimation", "text", "type"] }),
], IonBackButton);
let IonBackdrop = class IonBackdrop {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionBackdropTap"]);
    }
};
IonBackdrop.ɵfac = function IonBackdrop_Factory(t) { return new (t || IonBackdrop)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
IonBackdrop.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IonBackdrop, selectors: [["ion-backdrop"]], inputs: { stopPropagation: "stopPropagation", tappable: "tappable", visible: "visible" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function IonBackdrop_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
IonBackdrop.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
IonBackdrop = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    ProxyCmp({ inputs: ["stopPropagation", "tappable", "visible"] }),
], IonBackdrop);
let IonBadge = class IonBadge {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
IonBadge.ɵfac = function IonBadge_Factory(t) { return new (t || IonBadge)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
IonBadge.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IonBadge, selectors: [["ion-badge"]], inputs: { color: "color", mode: "mode" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function IonBadge_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
IonBadge.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
IonBadge = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    ProxyCmp({ inputs: ["color", "mode"] }),
], IonBadge);
let IonButton = class IonButton {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionFocus", "ionBlur"]);
    }
};
IonButton.ɵfac = function IonButton_Factory(t) { return new (t || IonButton)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
IonButton.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IonButton, selectors: [["ion-button"]], inputs: { buttonType: "buttonType", color: "color", disabled: "disabled", download: "download", expand: "expand", fill: "fill", href: "href", mode: "mode", rel: "rel", routerAnimation: "routerAnimation", routerDirection: "routerDirection", shape: "shape", size: "size", strong: "strong", target: "target", type: "type" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function IonButton_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
IonButton.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
IonButton = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    ProxyCmp({ inputs: ["buttonType", "color", "disabled", "download", "expand", "fill", "href", "mode", "rel", "routerAnimation", "routerDirection", "shape", "size", "strong", "target", "type"] }),
], IonButton);
let IonButtons = class IonButtons {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
IonButtons.ɵfac = function IonButtons_Factory(t) { return new (t || IonButtons)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
IonButtons.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IonButtons, selectors: [["ion-buttons"]], inputs: { collapse: "collapse" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function IonButtons_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
IonButtons.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
IonButtons = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    ProxyCmp({ inputs: ["collapse"] }),
], IonButtons);
let IonCard = class IonCard {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
IonCard.ɵfac = function IonCard_Factory(t) { return new (t || IonCard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
IonCard.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IonCard, selectors: [["ion-card"]], inputs: { button: "button", color: "color", disabled: "disabled", download: "download", href: "href", mode: "mode", rel: "rel", routerAnimation: "routerAnimation", routerDirection: "routerDirection", target: "target", type: "type" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function IonCard_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
IonCard.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
IonCard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    ProxyCmp({ inputs: ["button", "color", "disabled", "download", "href", "mode", "rel", "routerAnimation", "routerDirection", "target", "type"] }),
], IonCard);
let IonCardContent = class IonCardContent {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
IonCardContent.ɵfac = function IonCardContent_Factory(t) { return new (t || IonCardContent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
IonCardContent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IonCardContent, selectors: [["ion-card-content"]], inputs: { mode: "mode" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function IonCardContent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
IonCardContent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
IonCardContent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    ProxyCmp({ inputs: ["mode"] }),
], IonCardContent);
let IonCardHeader = class IonCardHeader {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
IonCardHeader.ɵfac = function IonCardHeader_Factory(t) { return new (t || IonCardHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
IonCardHeader.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IonCardHeader, selectors: [["ion-card-header"]], inputs: { color: "color", mode: "mode", translucent: "translucent" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function IonCardHeader_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
IonCardHeader.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
IonCardHeader = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    ProxyCmp({ inputs: ["color", "mode", "translucent"] }),
], IonCardHeader);
let IonCardSubtitle = class IonCardSubtitle {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
IonCardSubtitle.ɵfac = function IonCardSubtitle_Factory(t) { return new (t || IonCardSubtitle)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
IonCardSubtitle.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IonCardSubtitle, selectors: [["ion-card-subtitle"]], inputs: { color: "color", mode: "mode" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function IonCardSubtitle_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
IonCardSubtitle.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
IonCardSubtitle = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    ProxyCmp({ inputs: ["color", "mode"] }),
], IonCardSubtitle);
let IonCardTitle = class IonCardTitle {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
IonCardTitle.ɵfac = function IonCardTitle_Factory(t) { return new (t || IonCardTitle)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
IonCardTitle.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IonCardTitle, selectors: [["ion-card-title"]], inputs: { color: "color", mode: "mode" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function IonCardTitle_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
IonCardTitle.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
IonCardTitle = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    ProxyCmp({ inputs: ["color", "mode"] }),
], IonCardTitle);
let IonCheckbox = class IonCheckbox {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionChange", "ionFocus", "ionBlur"]);
    }
};
IonCheckbox.ɵfac = function IonCheckbox_Factory(t) { return new (t || IonCheckbox)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
IonCheckbox.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IonCheckbox, selectors: [["ion-checkbox"]], inputs: { checked: "checked", color: "color", disabled: "disabled", indeterminate: "indeterminate", mode: "mode", name: "name", value: "value" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function IonCheckbox_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
IonCheckbox.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
IonCheckbox = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    ProxyCmp({ inputs: ["checked", "color", "disabled", "indeterminate", "mode", "name", "value"] }),
], IonCheckbox);
let IonChip = class IonChip {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
IonChip.ɵfac = function IonChip_Factory(t) { return new (t || IonChip)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
IonChip.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IonChip, selectors: [["ion-chip"]], inputs: { color: "color", disabled: "disabled", mode: "mode", outline: "outline" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function IonChip_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
IonChip.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
IonChip = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    ProxyCmp({ inputs: ["color", "disabled", "mode", "outline"] }),
], IonChip);
let IonCol = class IonCol {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
IonCol.ɵfac = function IonCol_Factory(t) { return new (t || IonCol)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
IonCol.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IonCol, selectors: [["ion-col"]], inputs: { offset: "offset", offsetLg: "offsetLg", offsetMd: "offsetMd", offsetSm: "offsetSm", offsetXl: "offsetXl", offsetXs: "offsetXs", pull: "pull", pullLg: "pullLg", pullMd: "pullMd", pullSm: "pullSm", pullXl: "pullXl", pullXs: "pullXs", push: "push", pushLg: "pushLg", pushMd: "pushMd", pushSm: "pushSm", pushXl: "pushXl", pushXs: "pushXs", size: "size", sizeLg: "sizeLg", sizeMd: "sizeMd", sizeSm: "sizeSm", sizeXl: "sizeXl", sizeXs: "sizeXs" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function IonCol_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
IonCol.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
IonCol = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    ProxyCmp({ inputs: ["offset", "offsetLg", "offsetMd", "offsetSm", "offsetXl", "offsetXs", "pull", "pullLg", "pullMd", "pullSm", "pullXl", "pullXs", "push", "pushLg", "pushMd", "pushSm", "pushXl", "pushXs", "size", "sizeLg", "sizeMd", "sizeSm", "sizeXl", "sizeXs"] }),
], IonCol);
let IonContent = class IonContent {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionScrollStart", "ionScroll", "ionScrollEnd"]);
    }
};
IonContent.ɵfac = function IonContent_Factory(t) { return new (t || IonContent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
IonContent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IonContent, selectors: [["ion-content"]], inputs: { color: "color", forceOverscroll: "forceOverscroll", fullscreen: "fullscreen", scrollEvents: "scrollEvents", scrollX: "scrollX", scrollY: "scrollY" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function IonContent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
IonContent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
IonContent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    ProxyCmp({ inputs: ["color", "forceOverscroll", "fullscreen", "scrollEvents", "scrollX", "scrollY"], "methods": ["getScrollElement", "scrollToTop", "scrollToBottom", "scrollByPoint", "scrollToPoint"] }),
], IonContent);
let IonDatetime = class IonDatetime {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionCancel", "ionChange", "ionFocus", "ionBlur"]);
    }
};
IonDatetime.ɵfac = function IonDatetime_Factory(t) { return new (t || IonDatetime)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
IonDatetime.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IonDatetime, selectors: [["ion-datetime"]], inputs: { cancelText: "cancelText", dayNames: "dayNames", dayShortNames: "dayShortNames", dayValues: "dayValues", disabled: "disabled", displayFormat: "displayFormat", displayTimezone: "displayTimezone", doneText: "doneText", hourValues: "hourValues", max: "max", min: "min", minuteValues: "minuteValues", mode: "mode", monthNames: "monthNames", monthShortNames: "monthShortNames", monthValues: "monthValues", name: "name", pickerFormat: "pickerFormat", pickerOptions: "pickerOptions", placeholder: "placeholder", readonly: "readonly", value: "value", yearValues: "yearValues" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function IonDatetime_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
IonDatetime.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
IonDatetime = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    ProxyCmp({ inputs: ["cancelText", "dayNames", "dayShortNames", "dayValues", "disabled", "displayFormat", "displayTimezone", "doneText", "hourValues", "max", "min", "minuteValues", "mode", "monthNames", "monthShortNames", "monthValues", "name", "pickerFormat", "pickerOptions", "placeholder", "readonly", "value", "yearValues"], "methods": ["open"] }),
], IonDatetime);
let IonFab = class IonFab {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
IonFab.ɵfac = function IonFab_Factory(t) { return new (t || IonFab)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
IonFab.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IonFab, selectors: [["ion-fab"]], inputs: { activated: "activated", edge: "edge", horizontal: "horizontal", vertical: "vertical" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function IonFab_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
IonFab.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
IonFab = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    ProxyCmp({ inputs: ["activated", "edge", "horizontal", "vertical"], "methods": ["close"] }),
], IonFab);
let IonFabButton = class IonFabButton {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionFocus", "ionBlur"]);
    }
};
IonFabButton.ɵfac = function IonFabButton_Factory(t) { return new (t || IonFabButton)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
IonFabButton.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IonFabButton, selectors: [["ion-fab-button"]], inputs: { activated: "activated", closeIcon: "closeIcon", color: "color", disabled: "disabled", download: "download", href: "href", mode: "mode", rel: "rel", routerAnimation: "routerAnimation", routerDirection: "routerDirection", show: "show", size: "size", target: "target", translucent: "translucent", type: "type" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function IonFabButton_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
IonFabButton.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
IonFabButton = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    ProxyCmp({ inputs: ["activated", "closeIcon", "color", "disabled", "download", "href", "mode", "rel", "routerAnimation", "routerDirection", "show", "size", "target", "translucent", "type"] }),
], IonFabButton);
let IonFabList = class IonFabList {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
IonFabList.ɵfac = function IonFabList_Factory(t) { return new (t || IonFabList)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
IonFabList.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IonFabList, selectors: [["ion-fab-list"]], inputs: { activated: "activated", side: "side" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function IonFabList_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
IonFabList.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
IonFabList = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    ProxyCmp({ inputs: ["activated", "side"] }),
], IonFabList);
let IonFooter = class IonFooter {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
IonFooter.ɵfac = function IonFooter_Factory(t) { return new (t || IonFooter)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
IonFooter.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IonFooter, selectors: [["ion-footer"]], inputs: { mode: "mode", translucent: "translucent" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function IonFooter_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
IonFooter.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
IonFooter = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    ProxyCmp({ inputs: ["mode", "translucent"] }),
], IonFooter);
let IonGrid = class IonGrid {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
IonGrid.ɵfac = function IonGrid_Factory(t) { return new (t || IonGrid)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
IonGrid.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IonGrid, selectors: [["ion-grid"]], inputs: { fixed: "fixed" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function IonGrid_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
IonGrid.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
IonGrid = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    ProxyCmp({ inputs: ["fixed"] }),
], IonGrid);
let IonHeader = class IonHeader {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
IonHeader.ɵfac = function IonHeader_Factory(t) { return new (t || IonHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
IonHeader.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IonHeader, selectors: [["ion-header"]], inputs: { collapse: "collapse", mode: "mode", translucent: "translucent" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function IonHeader_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
IonHeader.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
IonHeader = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    ProxyCmp({ inputs: ["collapse", "mode", "translucent"] }),
], IonHeader);
let IonIcon = class IonIcon {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
IonIcon.ɵfac = function IonIcon_Factory(t) { return new (t || IonIcon)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
IonIcon.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IonIcon, selectors: [["ion-icon"]], inputs: { ariaHidden: "ariaHidden", ariaLabel: "ariaLabel", color: "color", flipRtl: "flipRtl", icon: "icon", ios: "ios", lazy: "lazy", md: "md", mode: "mode", name: "name", sanitize: "sanitize", size: "size", src: "src" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function IonIcon_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
IonIcon.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
IonIcon = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    ProxyCmp({ inputs: ["ariaHidden", "ariaLabel", "color", "flipRtl", "icon", "ios", "lazy", "md", "mode", "name", "sanitize", "size", "src"] }),
], IonIcon);
let IonImg = class IonImg {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionImgWillLoad", "ionImgDidLoad", "ionError"]);
    }
};
IonImg.ɵfac = function IonImg_Factory(t) { return new (t || IonImg)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
IonImg.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IonImg, selectors: [["ion-img"]], inputs: { alt: "alt", src: "src" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function IonImg_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
IonImg.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
IonImg = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    ProxyCmp({ inputs: ["alt", "src"] }),
], IonImg);
let IonInfiniteScroll = class IonInfiniteScroll {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionInfinite"]);
    }
};
IonInfiniteScroll.ɵfac = function IonInfiniteScroll_Factory(t) { return new (t || IonInfiniteScroll)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
IonInfiniteScroll.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IonInfiniteScroll, selectors: [["ion-infinite-scroll"]], inputs: { disabled: "disabled", position: "position", threshold: "threshold" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function IonInfiniteScroll_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
IonInfiniteScroll.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
IonInfiniteScroll = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    ProxyCmp({ inputs: ["disabled", "position", "threshold"], "methods": ["complete"] }),
], IonInfiniteScroll);
let IonInfiniteScrollContent = class IonInfiniteScrollContent {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
IonInfiniteScrollContent.ɵfac = function IonInfiniteScrollContent_Factory(t) { return new (t || IonInfiniteScrollContent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
IonInfiniteScrollContent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IonInfiniteScrollContent, selectors: [["ion-infinite-scroll-content"]], inputs: { loadingSpinner: "loadingSpinner", loadingText: "loadingText" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function IonInfiniteScrollContent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
IonInfiniteScrollContent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
IonInfiniteScrollContent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    ProxyCmp({ inputs: ["loadingSpinner", "loadingText"] }),
], IonInfiniteScrollContent);
let IonInput = class IonInput {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionInput", "ionChange", "ionBlur", "ionFocus"]);
    }
};
IonInput.ɵfac = function IonInput_Factory(t) { return new (t || IonInput)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
IonInput.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IonInput, selectors: [["ion-input"]], inputs: { accept: "accept", autocapitalize: "autocapitalize", autocomplete: "autocomplete", autocorrect: "autocorrect", autofocus: "autofocus", clearInput: "clearInput", clearOnEdit: "clearOnEdit", color: "color", debounce: "debounce", disabled: "disabled", enterkeyhint: "enterkeyhint", inputmode: "inputmode", max: "max", maxlength: "maxlength", min: "min", minlength: "minlength", mode: "mode", multiple: "multiple", name: "name", pattern: "pattern", placeholder: "placeholder", readonly: "readonly", required: "required", size: "size", spellcheck: "spellcheck", step: "step", type: "type", value: "value" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function IonInput_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
IonInput.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
IonInput = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    ProxyCmp({ inputs: ["accept", "autocapitalize", "autocomplete", "autocorrect", "autofocus", "clearInput", "clearOnEdit", "color", "debounce", "disabled", "enterkeyhint", "inputmode", "max", "maxlength", "min", "minlength", "mode", "multiple", "name", "pattern", "placeholder", "readonly", "required", "size", "spellcheck", "step", "type", "value"], "methods": ["setFocus", "getInputElement"] }),
], IonInput);
let IonItem = class IonItem {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
IonItem.ɵfac = function IonItem_Factory(t) { return new (t || IonItem)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
IonItem.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IonItem, selectors: [["ion-item"]], inputs: { button: "button", color: "color", detail: "detail", detailIcon: "detailIcon", disabled: "disabled", download: "download", href: "href", lines: "lines", mode: "mode", rel: "rel", routerAnimation: "routerAnimation", routerDirection: "routerDirection", target: "target", type: "type" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function IonItem_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
IonItem.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
IonItem = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    ProxyCmp({ inputs: ["button", "color", "detail", "detailIcon", "disabled", "download", "href", "lines", "mode", "rel", "routerAnimation", "routerDirection", "target", "type"] }),
], IonItem);
let IonItemDivider = class IonItemDivider {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
IonItemDivider.ɵfac = function IonItemDivider_Factory(t) { return new (t || IonItemDivider)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
IonItemDivider.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IonItemDivider, selectors: [["ion-item-divider"]], inputs: { color: "color", mode: "mode", sticky: "sticky" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function IonItemDivider_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
IonItemDivider.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
IonItemDivider = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    ProxyCmp({ inputs: ["color", "mode", "sticky"] }),
], IonItemDivider);
let IonItemGroup = class IonItemGroup {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
IonItemGroup.ɵfac = function IonItemGroup_Factory(t) { return new (t || IonItemGroup)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
IonItemGroup.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IonItemGroup, selectors: [["ion-item-group"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function IonItemGroup_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
IonItemGroup.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
let IonItemOption = class IonItemOption {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
IonItemOption.ɵfac = function IonItemOption_Factory(t) { return new (t || IonItemOption)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
IonItemOption.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IonItemOption, selectors: [["ion-item-option"]], inputs: { color: "color", disabled: "disabled", download: "download", expandable: "expandable", href: "href", mode: "mode", rel: "rel", target: "target", type: "type" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function IonItemOption_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
IonItemOption.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
IonItemOption = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    ProxyCmp({ inputs: ["color", "disabled", "download", "expandable", "href", "mode", "rel", "target", "type"] }),
], IonItemOption);
let IonItemOptions = class IonItemOptions {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionSwipe"]);
    }
};
IonItemOptions.ɵfac = function IonItemOptions_Factory(t) { return new (t || IonItemOptions)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
IonItemOptions.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IonItemOptions, selectors: [["ion-item-options"]], inputs: { side: "side" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function IonItemOptions_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
IonItemOptions.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
IonItemOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    ProxyCmp({ inputs: ["side"] }),
], IonItemOptions);
let IonItemSliding = class IonItemSliding {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionDrag"]);
    }
};
IonItemSliding.ɵfac = function IonItemSliding_Factory(t) { return new (t || IonItemSliding)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
IonItemSliding.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IonItemSliding, selectors: [["ion-item-sliding"]], inputs: { disabled: "disabled" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function IonItemSliding_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
IonItemSliding.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
IonItemSliding = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    ProxyCmp({ inputs: ["disabled"], "methods": ["getOpenAmount", "getSlidingRatio", "open", "close", "closeOpened"] }),
], IonItemSliding);
let IonLabel = class IonLabel {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
IonLabel.ɵfac = function IonLabel_Factory(t) { return new (t || IonLabel)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
IonLabel.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IonLabel, selectors: [["ion-label"]], inputs: { color: "color", mode: "mode", position: "position" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function IonLabel_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
IonLabel.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
IonLabel = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    ProxyCmp({ inputs: ["color", "mode", "position"] }),
], IonLabel);
let IonList = class IonList {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
IonList.ɵfac = function IonList_Factory(t) { return new (t || IonList)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
IonList.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IonList, selectors: [["ion-list"]], inputs: { inset: "inset", lines: "lines", mode: "mode" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function IonList_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
IonList.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
IonList = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    ProxyCmp({ inputs: ["inset", "lines", "mode"], "methods": ["closeSlidingItems"] }),
], IonList);
let IonListHeader = class IonListHeader {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
IonListHeader.ɵfac = function IonListHeader_Factory(t) { return new (t || IonListHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
IonListHeader.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IonListHeader, selectors: [["ion-list-header"]], inputs: { color: "color", lines: "lines", mode: "mode" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function IonListHeader_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
IonListHeader.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
IonListHeader = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    ProxyCmp({ inputs: ["color", "lines", "mode"] }),
], IonListHeader);
let IonMenu = class IonMenu {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionWillOpen", "ionWillClose", "ionDidOpen", "ionDidClose"]);
    }
};
IonMenu.ɵfac = function IonMenu_Factory(t) { return new (t || IonMenu)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
IonMenu.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IonMenu, selectors: [["ion-menu"]], inputs: { contentId: "contentId", disabled: "disabled", maxEdgeStart: "maxEdgeStart", menuId: "menuId", side: "side", swipeGesture: "swipeGesture", type: "type" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function IonMenu_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
IonMenu.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
IonMenu = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    ProxyCmp({ inputs: ["contentId", "disabled", "maxEdgeStart", "menuId", "side", "swipeGesture", "type"], "methods": ["isOpen", "isActive", "open", "close", "toggle", "setOpen"] }),
], IonMenu);
let IonMenuButton = class IonMenuButton {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
IonMenuButton.ɵfac = function IonMenuButton_Factory(t) { return new (t || IonMenuButton)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
IonMenuButton.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IonMenuButton, selectors: [["ion-menu-button"]], inputs: { autoHide: "autoHide", color: "color", disabled: "disabled", menu: "menu", mode: "mode", type: "type" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function IonMenuButton_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
IonMenuButton.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
IonMenuButton = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    ProxyCmp({ inputs: ["autoHide", "color", "disabled", "menu", "mode", "type"] }),
], IonMenuButton);
let IonMenuToggle = class IonMenuToggle {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
IonMenuToggle.ɵfac = function IonMenuToggle_Factory(t) { return new (t || IonMenuToggle)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
IonMenuToggle.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IonMenuToggle, selectors: [["ion-menu-toggle"]], inputs: { autoHide: "autoHide", menu: "menu" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function IonMenuToggle_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
IonMenuToggle.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
IonMenuToggle = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    ProxyCmp({ inputs: ["autoHide", "menu"] }),
], IonMenuToggle);
let IonNav = class IonNav {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionNavWillChange", "ionNavDidChange"]);
    }
};
IonNav.ɵfac = function IonNav_Factory(t) { return new (t || IonNav)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
IonNav.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IonNav, selectors: [["ion-nav"]], inputs: { animated: "animated", animation: "animation", root: "root", rootParams: "rootParams", swipeGesture: "swipeGesture" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function IonNav_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
IonNav.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
IonNav = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    ProxyCmp({ inputs: ["animated", "animation", "root", "rootParams", "swipeGesture"], "methods": ["push", "insert", "insertPages", "pop", "popTo", "popToRoot", "removeIndex", "setRoot", "setPages", "getActive", "getByIndex", "canGoBack", "getPrevious"] }),
], IonNav);
let IonNavLink = class IonNavLink {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
IonNavLink.ɵfac = function IonNavLink_Factory(t) { return new (t || IonNavLink)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
IonNavLink.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IonNavLink, selectors: [["ion-nav-link"]], inputs: { component: "component", componentProps: "componentProps", routerAnimation: "routerAnimation", routerDirection: "routerDirection" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function IonNavLink_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
IonNavLink.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
IonNavLink = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    ProxyCmp({ inputs: ["component", "componentProps", "routerAnimation", "routerDirection"] }),
], IonNavLink);
let IonNote = class IonNote {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
IonNote.ɵfac = function IonNote_Factory(t) { return new (t || IonNote)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
IonNote.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IonNote, selectors: [["ion-note"]], inputs: { color: "color", mode: "mode" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function IonNote_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
IonNote.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
IonNote = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    ProxyCmp({ inputs: ["color", "mode"] }),
], IonNote);
let IonProgressBar = class IonProgressBar {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
IonProgressBar.ɵfac = function IonProgressBar_Factory(t) { return new (t || IonProgressBar)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
IonProgressBar.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IonProgressBar, selectors: [["ion-progress-bar"]], inputs: { buffer: "buffer", color: "color", mode: "mode", reversed: "reversed", type: "type", value: "value" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function IonProgressBar_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
IonProgressBar.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
IonProgressBar = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    ProxyCmp({ inputs: ["buffer", "color", "mode", "reversed", "type", "value"] }),
], IonProgressBar);
let IonRadio = class IonRadio {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionFocus", "ionBlur"]);
    }
};
IonRadio.ɵfac = function IonRadio_Factory(t) { return new (t || IonRadio)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
IonRadio.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IonRadio, selectors: [["ion-radio"]], inputs: { color: "color", disabled: "disabled", mode: "mode", name: "name", value: "value" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function IonRadio_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
IonRadio.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
IonRadio = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    ProxyCmp({ inputs: ["color", "disabled", "mode", "name", "value"] }),
], IonRadio);
let IonRadioGroup = class IonRadioGroup {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionChange"]);
    }
};
IonRadioGroup.ɵfac = function IonRadioGroup_Factory(t) { return new (t || IonRadioGroup)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
IonRadioGroup.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IonRadioGroup, selectors: [["ion-radio-group"]], inputs: { allowEmptySelection: "allowEmptySelection", name: "name", value: "value" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function IonRadioGroup_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
IonRadioGroup.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
IonRadioGroup = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    ProxyCmp({ inputs: ["allowEmptySelection", "name", "value"] }),
], IonRadioGroup);
let IonRange = class IonRange {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionChange", "ionFocus", "ionBlur"]);
    }
};
IonRange.ɵfac = function IonRange_Factory(t) { return new (t || IonRange)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
IonRange.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IonRange, selectors: [["ion-range"]], inputs: { color: "color", debounce: "debounce", disabled: "disabled", dualKnobs: "dualKnobs", max: "max", min: "min", mode: "mode", name: "name", pin: "pin", snaps: "snaps", step: "step", ticks: "ticks", value: "value" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function IonRange_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
IonRange.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
IonRange = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    ProxyCmp({ inputs: ["color", "debounce", "disabled", "dualKnobs", "max", "min", "mode", "name", "pin", "snaps", "step", "ticks", "value"] }),
], IonRange);
let IonRefresher = class IonRefresher {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionRefresh", "ionPull", "ionStart"]);
    }
};
IonRefresher.ɵfac = function IonRefresher_Factory(t) { return new (t || IonRefresher)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
IonRefresher.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IonRefresher, selectors: [["ion-refresher"]], inputs: { closeDuration: "closeDuration", disabled: "disabled", pullFactor: "pullFactor", pullMax: "pullMax", pullMin: "pullMin", snapbackDuration: "snapbackDuration" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function IonRefresher_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
IonRefresher.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
IonRefresher = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    ProxyCmp({ inputs: ["closeDuration", "disabled", "pullFactor", "pullMax", "pullMin", "snapbackDuration"], "methods": ["complete", "cancel", "getProgress"] }),
], IonRefresher);
let IonRefresherContent = class IonRefresherContent {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
IonRefresherContent.ɵfac = function IonRefresherContent_Factory(t) { return new (t || IonRefresherContent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
IonRefresherContent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IonRefresherContent, selectors: [["ion-refresher-content"]], inputs: { pullingIcon: "pullingIcon", pullingText: "pullingText", refreshingSpinner: "refreshingSpinner", refreshingText: "refreshingText" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function IonRefresherContent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
IonRefresherContent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
IonRefresherContent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    ProxyCmp({ inputs: ["pullingIcon", "pullingText", "refreshingSpinner", "refreshingText"] }),
], IonRefresherContent);
let IonReorder = class IonReorder {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
IonReorder.ɵfac = function IonReorder_Factory(t) { return new (t || IonReorder)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
IonReorder.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IonReorder, selectors: [["ion-reorder"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function IonReorder_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
IonReorder.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
let IonReorderGroup = class IonReorderGroup {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionItemReorder"]);
    }
};
IonReorderGroup.ɵfac = function IonReorderGroup_Factory(t) { return new (t || IonReorderGroup)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
IonReorderGroup.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IonReorderGroup, selectors: [["ion-reorder-group"]], inputs: { disabled: "disabled" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function IonReorderGroup_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
IonReorderGroup.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
IonReorderGroup = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    ProxyCmp({ inputs: ["disabled"], "methods": ["complete"] }),
], IonReorderGroup);
let IonRippleEffect = class IonRippleEffect {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
IonRippleEffect.ɵfac = function IonRippleEffect_Factory(t) { return new (t || IonRippleEffect)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
IonRippleEffect.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IonRippleEffect, selectors: [["ion-ripple-effect"]], inputs: { type: "type" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function IonRippleEffect_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
IonRippleEffect.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
IonRippleEffect = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    ProxyCmp({ inputs: ["type"], "methods": ["addRipple"] }),
], IonRippleEffect);
let IonRow = class IonRow {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
IonRow.ɵfac = function IonRow_Factory(t) { return new (t || IonRow)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
IonRow.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IonRow, selectors: [["ion-row"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function IonRow_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
IonRow.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
let IonSearchbar = class IonSearchbar {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionInput", "ionChange", "ionCancel", "ionClear", "ionBlur", "ionFocus"]);
    }
};
IonSearchbar.ɵfac = function IonSearchbar_Factory(t) { return new (t || IonSearchbar)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
IonSearchbar.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IonSearchbar, selectors: [["ion-searchbar"]], inputs: { animated: "animated", autocomplete: "autocomplete", autocorrect: "autocorrect", cancelButtonIcon: "cancelButtonIcon", cancelButtonText: "cancelButtonText", clearIcon: "clearIcon", color: "color", debounce: "debounce", disabled: "disabled", enterkeyhint: "enterkeyhint", inputmode: "inputmode", mode: "mode", placeholder: "placeholder", searchIcon: "searchIcon", showCancelButton: "showCancelButton", showClearButton: "showClearButton", spellcheck: "spellcheck", type: "type", value: "value" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function IonSearchbar_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
IonSearchbar.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
IonSearchbar = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    ProxyCmp({ inputs: ["animated", "autocomplete", "autocorrect", "cancelButtonIcon", "cancelButtonText", "clearIcon", "color", "debounce", "disabled", "enterkeyhint", "inputmode", "mode", "placeholder", "searchIcon", "showCancelButton", "showClearButton", "spellcheck", "type", "value"], "methods": ["setFocus", "getInputElement"] }),
], IonSearchbar);
let IonSegment = class IonSegment {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionChange"]);
    }
};
IonSegment.ɵfac = function IonSegment_Factory(t) { return new (t || IonSegment)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
IonSegment.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IonSegment, selectors: [["ion-segment"]], inputs: { color: "color", disabled: "disabled", mode: "mode", scrollable: "scrollable", swipeGesture: "swipeGesture", value: "value" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function IonSegment_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
IonSegment.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
IonSegment = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    ProxyCmp({ inputs: ["color", "disabled", "mode", "scrollable", "swipeGesture", "value"] }),
], IonSegment);
let IonSegmentButton = class IonSegmentButton {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
IonSegmentButton.ɵfac = function IonSegmentButton_Factory(t) { return new (t || IonSegmentButton)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
IonSegmentButton.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IonSegmentButton, selectors: [["ion-segment-button"]], inputs: { disabled: "disabled", layout: "layout", mode: "mode", type: "type", value: "value" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function IonSegmentButton_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
IonSegmentButton.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
IonSegmentButton = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    ProxyCmp({ inputs: ["disabled", "layout", "mode", "type", "value"] }),
], IonSegmentButton);
let IonSelect = class IonSelect {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionChange", "ionCancel", "ionFocus", "ionBlur"]);
    }
};
IonSelect.ɵfac = function IonSelect_Factory(t) { return new (t || IonSelect)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
IonSelect.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IonSelect, selectors: [["ion-select"]], inputs: { cancelText: "cancelText", compareWith: "compareWith", disabled: "disabled", interface: "interface", interfaceOptions: "interfaceOptions", mode: "mode", multiple: "multiple", name: "name", okText: "okText", placeholder: "placeholder", selectedText: "selectedText", value: "value" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function IonSelect_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
IonSelect.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
IonSelect = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    ProxyCmp({ inputs: ["cancelText", "compareWith", "disabled", "interface", "interfaceOptions", "mode", "multiple", "name", "okText", "placeholder", "selectedText", "value"], "methods": ["open"] }),
], IonSelect);
let IonSelectOption = class IonSelectOption {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
IonSelectOption.ɵfac = function IonSelectOption_Factory(t) { return new (t || IonSelectOption)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
IonSelectOption.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IonSelectOption, selectors: [["ion-select-option"]], inputs: { disabled: "disabled", value: "value" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function IonSelectOption_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
IonSelectOption.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
IonSelectOption = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    ProxyCmp({ inputs: ["disabled", "value"] }),
], IonSelectOption);
let IonSkeletonText = class IonSkeletonText {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
IonSkeletonText.ɵfac = function IonSkeletonText_Factory(t) { return new (t || IonSkeletonText)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
IonSkeletonText.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IonSkeletonText, selectors: [["ion-skeleton-text"]], inputs: { animated: "animated" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function IonSkeletonText_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
IonSkeletonText.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
IonSkeletonText = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    ProxyCmp({ inputs: ["animated"] }),
], IonSkeletonText);
let IonSlide = class IonSlide {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
IonSlide.ɵfac = function IonSlide_Factory(t) { return new (t || IonSlide)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
IonSlide.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IonSlide, selectors: [["ion-slide"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function IonSlide_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
IonSlide.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
let IonSlides = class IonSlides {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionSlidesDidLoad", "ionSlideTap", "ionSlideDoubleTap", "ionSlideWillChange", "ionSlideDidChange", "ionSlideNextStart", "ionSlidePrevStart", "ionSlideNextEnd", "ionSlidePrevEnd", "ionSlideTransitionStart", "ionSlideTransitionEnd", "ionSlideDrag", "ionSlideReachStart", "ionSlideReachEnd", "ionSlideTouchStart", "ionSlideTouchEnd"]);
    }
};
IonSlides.ɵfac = function IonSlides_Factory(t) { return new (t || IonSlides)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
IonSlides.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IonSlides, selectors: [["ion-slides"]], inputs: { mode: "mode", options: "options", pager: "pager", scrollbar: "scrollbar" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function IonSlides_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
IonSlides.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
IonSlides = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    ProxyCmp({ inputs: ["mode", "options", "pager", "scrollbar"], "methods": ["update", "updateAutoHeight", "slideTo", "slideNext", "slidePrev", "getActiveIndex", "getPreviousIndex", "length", "isEnd", "isBeginning", "startAutoplay", "stopAutoplay", "lockSwipeToNext", "lockSwipeToPrev", "lockSwipes", "getSwiper"] }),
], IonSlides);
let IonSpinner = class IonSpinner {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
IonSpinner.ɵfac = function IonSpinner_Factory(t) { return new (t || IonSpinner)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
IonSpinner.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IonSpinner, selectors: [["ion-spinner"]], inputs: { color: "color", duration: "duration", name: "name", paused: "paused" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function IonSpinner_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
IonSpinner.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
IonSpinner = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    ProxyCmp({ inputs: ["color", "duration", "name", "paused"] }),
], IonSpinner);
let IonSplitPane = class IonSplitPane {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionSplitPaneVisible"]);
    }
};
IonSplitPane.ɵfac = function IonSplitPane_Factory(t) { return new (t || IonSplitPane)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
IonSplitPane.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IonSplitPane, selectors: [["ion-split-pane"]], inputs: { contentId: "contentId", disabled: "disabled", when: "when" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function IonSplitPane_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
IonSplitPane.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
IonSplitPane = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    ProxyCmp({ inputs: ["contentId", "disabled", "when"] }),
], IonSplitPane);
let IonTabBar = class IonTabBar {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
IonTabBar.ɵfac = function IonTabBar_Factory(t) { return new (t || IonTabBar)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
IonTabBar.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IonTabBar, selectors: [["ion-tab-bar"]], inputs: { color: "color", mode: "mode", selectedTab: "selectedTab", translucent: "translucent" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function IonTabBar_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
IonTabBar.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
IonTabBar = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    ProxyCmp({ inputs: ["color", "mode", "selectedTab", "translucent"] }),
], IonTabBar);
let IonTabButton = class IonTabButton {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
IonTabButton.ɵfac = function IonTabButton_Factory(t) { return new (t || IonTabButton)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
IonTabButton.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IonTabButton, selectors: [["ion-tab-button"]], inputs: { disabled: "disabled", download: "download", href: "href", layout: "layout", mode: "mode", rel: "rel", selected: "selected", tab: "tab", target: "target" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function IonTabButton_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
IonTabButton.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
IonTabButton = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    ProxyCmp({ inputs: ["disabled", "download", "href", "layout", "mode", "rel", "selected", "tab", "target"] }),
], IonTabButton);
let IonText = class IonText {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
IonText.ɵfac = function IonText_Factory(t) { return new (t || IonText)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
IonText.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IonText, selectors: [["ion-text"]], inputs: { color: "color", mode: "mode" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function IonText_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
IonText.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
IonText = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    ProxyCmp({ inputs: ["color", "mode"] }),
], IonText);
let IonTextarea = class IonTextarea {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionChange", "ionInput", "ionBlur", "ionFocus"]);
    }
};
IonTextarea.ɵfac = function IonTextarea_Factory(t) { return new (t || IonTextarea)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
IonTextarea.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IonTextarea, selectors: [["ion-textarea"]], inputs: { autoGrow: "autoGrow", autocapitalize: "autocapitalize", autofocus: "autofocus", clearOnEdit: "clearOnEdit", color: "color", cols: "cols", debounce: "debounce", disabled: "disabled", enterkeyhint: "enterkeyhint", inputmode: "inputmode", maxlength: "maxlength", minlength: "minlength", mode: "mode", name: "name", placeholder: "placeholder", readonly: "readonly", required: "required", rows: "rows", spellcheck: "spellcheck", value: "value", wrap: "wrap" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function IonTextarea_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
IonTextarea.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
IonTextarea = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    ProxyCmp({ inputs: ["autoGrow", "autocapitalize", "autofocus", "clearOnEdit", "color", "cols", "debounce", "disabled", "enterkeyhint", "inputmode", "maxlength", "minlength", "mode", "name", "placeholder", "readonly", "required", "rows", "spellcheck", "value", "wrap"], "methods": ["setFocus", "getInputElement"] }),
], IonTextarea);
let IonThumbnail = class IonThumbnail {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
IonThumbnail.ɵfac = function IonThumbnail_Factory(t) { return new (t || IonThumbnail)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
IonThumbnail.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IonThumbnail, selectors: [["ion-thumbnail"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function IonThumbnail_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
IonThumbnail.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
let IonTitle = class IonTitle {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
IonTitle.ɵfac = function IonTitle_Factory(t) { return new (t || IonTitle)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
IonTitle.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IonTitle, selectors: [["ion-title"]], inputs: { color: "color", size: "size" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function IonTitle_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
IonTitle.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
IonTitle = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    ProxyCmp({ inputs: ["color", "size"] }),
], IonTitle);
let IonToggle = class IonToggle {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionChange", "ionFocus", "ionBlur"]);
    }
};
IonToggle.ɵfac = function IonToggle_Factory(t) { return new (t || IonToggle)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
IonToggle.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IonToggle, selectors: [["ion-toggle"]], inputs: { checked: "checked", color: "color", disabled: "disabled", mode: "mode", name: "name", value: "value" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function IonToggle_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
IonToggle.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
IonToggle = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    ProxyCmp({ inputs: ["checked", "color", "disabled", "mode", "name", "value"] }),
], IonToggle);
let IonToolbar = class IonToolbar {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
IonToolbar.ɵfac = function IonToolbar_Factory(t) { return new (t || IonToolbar)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
IonToolbar.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IonToolbar, selectors: [["ion-toolbar"]], inputs: { color: "color", mode: "mode" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function IonToolbar_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
IonToolbar.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
IonToolbar = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    ProxyCmp({ inputs: ["color", "mode"] }),
], IonToolbar);

let Config = class Config {
    get(key, fallback) {
        const c = getConfig();
        if (c) {
            return c.get(key, fallback);
        }
        return null;
    }
    getBoolean(key, fallback) {
        const c = getConfig();
        if (c) {
            return c.getBoolean(key, fallback);
        }
        return false;
    }
    getNumber(key, fallback) {
        const c = getConfig();
        if (c) {
            return c.getNumber(key, fallback);
        }
        return 0;
    }
    set(key, value) {
        console.warn(`[DEPRECATION][Config]: The Config.set() method is deprecated and will be removed in Ionic Framework 6.0. Please see https://ionicframework.com/docs/angular/config for alternatives.`);
        const c = getConfig();
        if (c) {
            c.set(key, value);
        }
    }
};
Config.ɵfac = function Config_Factory(t) { return new (t || Config)(); };
Config.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: Config, factory: function (t) { return Config.ɵfac(t); }, providedIn: 'root' });
Config.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function Config_Factory() { return new Config(); }, token: Config, providedIn: "root" });
const ConfigToken = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('USERCONFIG');
const getConfig = () => {
    if (typeof window !== 'undefined') {
        const Ionic = window.Ionic;
        if (Ionic && Ionic.config) {
            return Ionic.config;
        }
    }
    return null;
};
const ɵ0$3 = getConfig;

/**
 * @description
 * NavParams are an object that exists on a page and can contain data for that particular view.
 * Similar to how data was pass to a view in V1 with `$stateParams`, NavParams offer a much more flexible
 * option with a simple `get` method.
 *
 * @usage
 * ```ts
 * import { NavParams } from '@ionic/angular';
 *
 * export class MyClass{
 *
 *  constructor(navParams: NavParams){
 *    // userParams is an object we have in our nav-parameters
 *    navParams.get('userParams');
 *  }
 *
 * }
 * ```
 */
class NavParams {
    constructor(data = {}) {
        this.data = data;
    }
    /**
     * Get the value of a nav-parameter for the current view
     *
     * ```ts
     * import { NavParams } from 'ionic-angular';
     *
     * export class MyClass{
     *  constructor(public navParams: NavParams){
     *    // userParams is an object we have in our nav-parameters
     *    this.navParams.get('userParams');
     *  }
     * }
     * ```
     *
     * @param param Which param you want to look up
     */
    get(param) {
        return this.data[param];
    }
}

let AngularDelegate = class AngularDelegate {
    constructor(zone, appRef) {
        this.zone = zone;
        this.appRef = appRef;
    }
    create(resolver, injector, location) {
        return new AngularFrameworkDelegate(resolver, injector, location, this.appRef, this.zone);
    }
};
AngularDelegate.ɵfac = function AngularDelegate_Factory(t) { return new (t || AngularDelegate)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"])); };
AngularDelegate.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AngularDelegate, factory: function (t) { return AngularDelegate.ɵfac(t); } });
AngularDelegate.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"] }
];
class AngularFrameworkDelegate {
    constructor(resolver, injector, location, appRef, zone) {
        this.resolver = resolver;
        this.injector = injector;
        this.location = location;
        this.appRef = appRef;
        this.zone = zone;
        this.elRefMap = new WeakMap();
        this.elEventsMap = new WeakMap();
    }
    attachViewToDom(container, component, params, cssClasses) {
        return this.zone.run(() => {
            return new Promise(resolve => {
                const el = attachView(this.zone, this.resolver, this.injector, this.location, this.appRef, this.elRefMap, this.elEventsMap, container, component, params, cssClasses);
                resolve(el);
            });
        });
    }
    removeViewFromDom(_container, component) {
        return this.zone.run(() => {
            return new Promise(resolve => {
                const componentRef = this.elRefMap.get(component);
                if (componentRef) {
                    componentRef.destroy();
                    this.elRefMap.delete(component);
                    const unbindEvents = this.elEventsMap.get(component);
                    if (unbindEvents) {
                        unbindEvents();
                        this.elEventsMap.delete(component);
                    }
                }
                resolve();
            });
        });
    }
}
const attachView = (zone, resolver, injector, location, appRef, elRefMap, elEventsMap, container, component, params, cssClasses) => {
    const factory = resolver.resolveComponentFactory(component);
    const childInjector = _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"].create({
        providers: getProviders(params),
        parent: injector
    });
    const componentRef = (location)
        ? location.createComponent(factory, location.length, childInjector)
        : factory.create(childInjector);
    const instance = componentRef.instance;
    const hostElement = componentRef.location.nativeElement;
    if (params) {
        Object.assign(instance, params);
    }
    if (cssClasses) {
        for (const clazz of cssClasses) {
            hostElement.classList.add(clazz);
        }
    }
    const unbindEvents = bindLifecycleEvents(zone, instance, hostElement);
    container.appendChild(hostElement);
    if (!location) {
        appRef.attachView(componentRef.hostView);
    }
    componentRef.changeDetectorRef.reattach();
    elRefMap.set(hostElement, componentRef);
    elEventsMap.set(hostElement, unbindEvents);
    return hostElement;
};
const LIFECYCLES = [
    _ionic_core__WEBPACK_IMPORTED_MODULE_5__["LIFECYCLE_WILL_ENTER"],
    _ionic_core__WEBPACK_IMPORTED_MODULE_5__["LIFECYCLE_DID_ENTER"],
    _ionic_core__WEBPACK_IMPORTED_MODULE_5__["LIFECYCLE_WILL_LEAVE"],
    _ionic_core__WEBPACK_IMPORTED_MODULE_5__["LIFECYCLE_DID_LEAVE"],
    _ionic_core__WEBPACK_IMPORTED_MODULE_5__["LIFECYCLE_WILL_UNLOAD"]
];
const bindLifecycleEvents = (zone, instance, element) => {
    return zone.run(() => {
        const unregisters = LIFECYCLES
            .filter(eventName => typeof instance[eventName] === 'function')
            .map(eventName => {
            const handler = (ev) => instance[eventName](ev.detail);
            element.addEventListener(eventName, handler);
            return () => element.removeEventListener(eventName, handler);
        });
        return () => unregisters.forEach(fn => fn());
    });
};
const NavParamsToken = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('NavParamsToken');
const getProviders = (params) => {
    return [
        {
            provide: NavParamsToken, useValue: params
        },
        {
            provide: NavParams, useFactory: provideNavParamsInjectable, deps: [NavParamsToken]
        }
    ];
};
const ɵ0$4 = getProviders;
const provideNavParamsInjectable = (params) => {
    return new NavParams(params);
};
const ɵ1$2 = provideNavParamsInjectable;

const insertView = (views, view, direction) => {
    if (direction === 'root') {
        return setRoot(views, view);
    }
    else if (direction === 'forward') {
        return setForward(views, view);
    }
    else {
        return setBack(views, view);
    }
};
const setRoot = (views, view) => {
    views = views.filter(v => v.stackId !== view.stackId);
    views.push(view);
    return views;
};
const ɵ0$5 = setRoot;
const setForward = (views, view) => {
    const index = views.indexOf(view);
    if (index >= 0) {
        views = views.filter(v => v.stackId !== view.stackId || v.id <= view.id);
    }
    else {
        views.push(view);
    }
    return views;
};
const ɵ1$3 = setForward;
const setBack = (views, view) => {
    const index = views.indexOf(view);
    if (index >= 0) {
        return views.filter(v => v.stackId !== view.stackId || v.id <= view.id);
    }
    else {
        return setRoot(views, view);
    }
};
const ɵ2$1 = setBack;
const getUrl = (router, activatedRoute) => {
    const urlTree = router.createUrlTree(['.'], { relativeTo: activatedRoute });
    return router.serializeUrl(urlTree);
};
const isTabSwitch = (enteringView, leavingView) => {
    if (!leavingView) {
        return true;
    }
    return enteringView.stackId !== leavingView.stackId;
};
const computeStackId = (prefixUrl, url) => {
    if (!prefixUrl) {
        return undefined;
    }
    const segments = toSegments(url);
    for (let i = 0; i < segments.length; i++) {
        if (i >= prefixUrl.length) {
            return segments[i];
        }
        if (segments[i] !== prefixUrl[i]) {
            return undefined;
        }
    }
    return undefined;
};
const toSegments = (path) => {
    return path
        .split('/')
        .map(s => s.trim())
        .filter(s => s !== '');
};
const destroyView = (view) => {
    if (view) {
        // TODO lifecycle event
        view.ref.destroy();
        view.unlistenEvents();
    }
};

class StackController {
    constructor(tabsPrefix, containerEl, router, navCtrl, zone, location) {
        this.containerEl = containerEl;
        this.router = router;
        this.navCtrl = navCtrl;
        this.zone = zone;
        this.location = location;
        this.views = [];
        this.skipTransition = false;
        this.nextId = 0;
        this.tabsPrefix = tabsPrefix !== undefined ? toSegments(tabsPrefix) : undefined;
    }
    createView(ref, activatedRoute) {
        const url = getUrl(this.router, activatedRoute);
        const element = (ref && ref.location && ref.location.nativeElement);
        const unlistenEvents = bindLifecycleEvents(this.zone, ref.instance, element);
        return {
            id: this.nextId++,
            stackId: computeStackId(this.tabsPrefix, url),
            unlistenEvents,
            element,
            ref,
            url,
        };
    }
    getExistingView(activatedRoute) {
        const activatedUrlKey = getUrl(this.router, activatedRoute);
        const view = this.views.find(vw => vw.url === activatedUrlKey);
        if (view) {
            view.ref.changeDetectorRef.reattach();
        }
        return view;
    }
    setActive(enteringView) {
        const consumeResult = this.navCtrl.consumeTransition();
        let { direction, animation, animationBuilder } = consumeResult;
        const leavingView = this.activeView;
        const tabSwitch = isTabSwitch(enteringView, leavingView);
        if (tabSwitch) {
            direction = 'back';
            animation = undefined;
        }
        const viewsSnapshot = this.views.slice();
        let currentNavigation;
        const router = this.router;
        // Angular >= 7.2.0
        if (router.getCurrentNavigation) {
            currentNavigation = router.getCurrentNavigation();
            // Angular < 7.2.0
        }
        else if (router.navigations &&
            router.navigations.value) {
            currentNavigation = router.navigations.value;
        }
        /**
         * If the navigation action
         * sets `replaceUrl: true`
         * then we need to make sure
         * we remove the last item
         * from our views stack
         */
        if (currentNavigation &&
            currentNavigation.extras &&
            currentNavigation.extras.replaceUrl) {
            if (this.views.length > 0) {
                this.views.splice(-1, 1);
            }
        }
        const reused = this.views.includes(enteringView);
        const views = this.insertView(enteringView, direction);
        // Trigger change detection before transition starts
        // This will call ngOnInit() the first time too, just after the view
        // was attached to the dom, but BEFORE the transition starts
        if (!reused) {
            enteringView.ref.changeDetectorRef.detectChanges();
        }
        /**
         * If we are going back from a page that
         * was presented using a custom animation
         * we should default to using that
         * unless the developer explicitly
         * provided another animation.
         */
        const customAnimation = enteringView.animationBuilder;
        if (animationBuilder === undefined &&
            direction === 'back' &&
            !tabSwitch &&
            customAnimation !== undefined) {
            animationBuilder = customAnimation;
        }
        /**
         * Save any custom animation so that navigating
         * back will use this custom animation by default.
         */
        if (leavingView) {
            leavingView.animationBuilder = animationBuilder;
        }
        // Wait until previous transitions finish
        return this.zone.runOutsideAngular(() => {
            return this.wait(() => {
                // disconnect leaving page from change detection to
                // reduce jank during the page transition
                if (leavingView) {
                    leavingView.ref.changeDetectorRef.detach();
                }
                // In case the enteringView is the same as the leavingPage we need to reattach()
                enteringView.ref.changeDetectorRef.reattach();
                return this.transition(enteringView, leavingView, animation, this.canGoBack(1), false, animationBuilder)
                    .then(() => cleanupAsync(enteringView, views, viewsSnapshot, this.location))
                    .then(() => ({
                    enteringView,
                    direction,
                    animation,
                    tabSwitch
                }));
            });
        });
    }
    canGoBack(deep, stackId = this.getActiveStackId()) {
        return this.getStack(stackId).length > deep;
    }
    pop(deep, stackId = this.getActiveStackId()) {
        return this.zone.run(() => {
            const views = this.getStack(stackId);
            if (views.length <= deep) {
                return Promise.resolve(false);
            }
            const view = views[views.length - deep - 1];
            let url = view.url;
            const viewSavedData = view.savedData;
            if (viewSavedData) {
                const primaryOutlet = viewSavedData.get('primary');
                if (primaryOutlet &&
                    primaryOutlet.route &&
                    primaryOutlet.route._routerState &&
                    primaryOutlet.route._routerState.snapshot &&
                    primaryOutlet.route._routerState.snapshot.url) {
                    url = primaryOutlet.route._routerState.snapshot.url;
                }
            }
            const { animationBuilder } = this.navCtrl.consumeTransition();
            return this.navCtrl.navigateBack(url, Object.assign({}, view.savedExtras, { animation: animationBuilder })).then(() => true);
        });
    }
    startBackTransition() {
        const leavingView = this.activeView;
        if (leavingView) {
            const views = this.getStack(leavingView.stackId);
            const enteringView = views[views.length - 2];
            const customAnimation = enteringView.animationBuilder;
            return this.wait(() => {
                return this.transition(enteringView, // entering view
                leavingView, // leaving view
                'back', this.canGoBack(2), true, customAnimation);
            });
        }
        return Promise.resolve();
    }
    endBackTransition(shouldComplete) {
        if (shouldComplete) {
            this.skipTransition = true;
            this.pop(1);
        }
        else if (this.activeView) {
            cleanup(this.activeView, this.views, this.views, this.location);
        }
    }
    getLastUrl(stackId) {
        const views = this.getStack(stackId);
        return views.length > 0 ? views[views.length - 1] : undefined;
    }
    /**
     * @internal
     */
    getRootUrl(stackId) {
        const views = this.getStack(stackId);
        return views.length > 0 ? views[0] : undefined;
    }
    getActiveStackId() {
        return this.activeView ? this.activeView.stackId : undefined;
    }
    destroy() {
        this.containerEl = undefined;
        this.views.forEach(destroyView);
        this.activeView = undefined;
        this.views = [];
    }
    getStack(stackId) {
        return this.views.filter(v => v.stackId === stackId);
    }
    insertView(enteringView, direction) {
        this.activeView = enteringView;
        this.views = insertView(this.views, enteringView, direction);
        return this.views.slice();
    }
    transition(enteringView, leavingView, direction, showGoBack, progressAnimation, animationBuilder) {
        if (this.skipTransition) {
            this.skipTransition = false;
            return Promise.resolve(false);
        }
        if (leavingView === enteringView) {
            return Promise.resolve(false);
        }
        const enteringEl = enteringView ? enteringView.element : undefined;
        const leavingEl = leavingView ? leavingView.element : undefined;
        const containerEl = this.containerEl;
        if (enteringEl && enteringEl !== leavingEl) {
            enteringEl.classList.add('ion-page');
            enteringEl.classList.add('ion-page-invisible');
            if (enteringEl.parentElement !== containerEl) {
                containerEl.appendChild(enteringEl);
            }
            if (containerEl.commit) {
                return containerEl.commit(enteringEl, leavingEl, {
                    deepWait: true,
                    duration: direction === undefined ? 0 : undefined,
                    direction,
                    showGoBack,
                    progressAnimation,
                    animationBuilder
                });
            }
        }
        return Promise.resolve(false);
    }
    wait(task) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.runningTask !== undefined) {
                yield this.runningTask;
                this.runningTask = undefined;
            }
            const promise = this.runningTask = task();
            return promise;
        });
    }
}
const cleanupAsync = (activeRoute, views, viewsSnapshot, location) => {
    if (typeof requestAnimationFrame === 'function') {
        return new Promise(resolve => {
            requestAnimationFrame(() => {
                cleanup(activeRoute, views, viewsSnapshot, location);
                resolve();
            });
        });
    }
    return Promise.resolve();
};
const ɵ0$6 = cleanupAsync;
const cleanup = (activeRoute, views, viewsSnapshot, location) => {
    viewsSnapshot
        .filter(view => !views.includes(view))
        .forEach(destroyView);
    views.forEach(view => {
        /**
         * In the event that a user navigated multiple
         * times in rapid succession, we want to make sure
         * we don't pre-emptively detach a view while
         * it is in mid-transition.
         *
         * In this instance we also do not care about query
         * params or fragments as it will be the same view regardless
         */
        const locationWithoutParams = location.path().split('?')[0];
        const locationWithoutFragment = locationWithoutParams.split('#')[0];
        if (view !== activeRoute && view.url !== locationWithoutFragment) {
            const element = view.element;
            element.setAttribute('aria-hidden', 'true');
            element.classList.add('ion-page-hidden');
            view.ref.changeDetectorRef.detach();
        }
    });
};
const ɵ1$4 = cleanup;

let IonRouterOutlet = class IonRouterOutlet {
    constructor(parentContexts, location, resolver, name, tabs, config, navCtrl, commonLocation, elementRef, router, zone, activatedRoute, parentOutlet) {
        this.parentContexts = parentContexts;
        this.location = location;
        this.resolver = resolver;
        this.config = config;
        this.navCtrl = navCtrl;
        this.parentOutlet = parentOutlet;
        this.activated = null;
        this.activatedView = null;
        this._activatedRoute = null;
        // Maintain map of activated route proxies for each component instance
        this.proxyMap = new WeakMap();
        // Keep the latest activated route in a subject for the proxy routes to switch map to
        this.currentActivatedRoute$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](null);
        this.stackEvents = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.activateEvents = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.deactivateEvents = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.nativeEl = elementRef.nativeElement;
        this.name = name || _angular_router__WEBPACK_IMPORTED_MODULE_4__["PRIMARY_OUTLET"];
        this.tabsPrefix = tabs === 'true' ? getUrl(router, activatedRoute) : undefined;
        this.stackCtrl = new StackController(this.tabsPrefix, this.nativeEl, router, navCtrl, zone, commonLocation);
        parentContexts.onChildOutletCreated(this.name, this);
    }
    set animation(animation) {
        this.nativeEl.animation = animation;
    }
    set animated(animated) {
        this.nativeEl.animated = animated;
    }
    set swipeGesture(swipe) {
        this._swipeGesture = swipe;
        this.nativeEl.swipeHandler = swipe ? {
            canStart: () => this.stackCtrl.canGoBack(1),
            onStart: () => this.stackCtrl.startBackTransition(),
            onEnd: shouldContinue => this.stackCtrl.endBackTransition(shouldContinue)
        } : undefined;
    }
    ngOnDestroy() {
        this.stackCtrl.destroy();
    }
    getContext() {
        return this.parentContexts.getContext(this.name);
    }
    ngOnInit() {
        if (!this.activated) {
            // If the outlet was not instantiated at the time the route got activated we need to populate
            // the outlet when it is initialized (ie inside a NgIf)
            const context = this.getContext();
            if (context && context.route) {
                this.activateWith(context.route, context.resolver || null);
            }
        }
        new Promise(resolve => Object(_ionic_core__WEBPACK_IMPORTED_MODULE_5__["componentOnReady"])(this.nativeEl, resolve)).then(() => {
            if (this._swipeGesture === undefined) {
                this.swipeGesture = this.config.getBoolean('swipeBackEnabled', this.nativeEl.mode === 'ios');
            }
        });
    }
    get isActivated() {
        return !!this.activated;
    }
    get component() {
        if (!this.activated) {
            throw new Error('Outlet is not activated');
        }
        return this.activated.instance;
    }
    get activatedRoute() {
        if (!this.activated) {
            throw new Error('Outlet is not activated');
        }
        return this._activatedRoute;
    }
    get activatedRouteData() {
        if (this._activatedRoute) {
            return this._activatedRoute.snapshot.data;
        }
        return {};
    }
    /**
     * Called when the `RouteReuseStrategy` instructs to detach the subtree
     */
    detach() {
        throw new Error('incompatible reuse strategy');
    }
    /**
     * Called when the `RouteReuseStrategy` instructs to re-attach a previously detached subtree
     */
    attach(_ref, _activatedRoute) {
        throw new Error('incompatible reuse strategy');
    }
    deactivate() {
        if (this.activated) {
            if (this.activatedView) {
                this.activatedView.savedData = new Map(this.getContext().children['contexts']);
                /**
                 * Ensure we are saving the NavigationExtras
                 * data otherwise it will be lost
                 */
                this.activatedView.savedExtras = {};
                const context = this.getContext();
                if (context.route) {
                    const contextSnapshot = context.route.snapshot;
                    this.activatedView.savedExtras.queryParams = contextSnapshot.queryParams;
                    this.activatedView.savedExtras.fragment = contextSnapshot.fragment;
                }
            }
            const c = this.component;
            this.activatedView = null;
            this.activated = null;
            this._activatedRoute = null;
            this.deactivateEvents.emit(c);
        }
    }
    activateWith(activatedRoute, resolver) {
        if (this.isActivated) {
            throw new Error('Cannot activate an already activated outlet');
        }
        this._activatedRoute = activatedRoute;
        let cmpRef;
        let enteringView = this.stackCtrl.getExistingView(activatedRoute);
        if (enteringView) {
            cmpRef = this.activated = enteringView.ref;
            const saved = enteringView.savedData;
            if (saved) {
                // self-restore
                const context = this.getContext();
                context.children['contexts'] = saved;
            }
            // Updated activated route proxy for this component
            this.updateActivatedRouteProxy(cmpRef.instance, activatedRoute);
        }
        else {
            const snapshot = activatedRoute._futureSnapshot;
            const component = snapshot.routeConfig.component;
            resolver = resolver || this.resolver;
            const factory = resolver.resolveComponentFactory(component);
            const childContexts = this.parentContexts.getOrCreateContext(this.name).children;
            // We create an activated route proxy object that will maintain future updates for this component
            // over its lifecycle in the stack.
            const component$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](null);
            const activatedRouteProxy = this.createActivatedRouteProxy(component$, activatedRoute);
            const injector = new OutletInjector(activatedRouteProxy, childContexts, this.location.injector);
            cmpRef = this.activated = this.location.createComponent(factory, this.location.length, injector);
            // Once the component is created we can push it to our local subject supplied to the proxy
            component$.next(cmpRef.instance);
            // Calling `markForCheck` to make sure we will run the change detection when the
            // `RouterOutlet` is inside a `ChangeDetectionStrategy.OnPush` component.
            enteringView = this.stackCtrl.createView(this.activated, activatedRoute);
            // Store references to the proxy by component
            this.proxyMap.set(cmpRef.instance, activatedRouteProxy);
            this.currentActivatedRoute$.next({ component: cmpRef.instance, activatedRoute });
        }
        this.activatedView = enteringView;
        this.stackCtrl.setActive(enteringView).then(data => {
            this.navCtrl.setTopOutlet(this);
            this.activateEvents.emit(cmpRef.instance);
            this.stackEvents.emit(data);
        });
    }
    /**
     * Returns `true` if there are pages in the stack to go back.
     */
    canGoBack(deep = 1, stackId) {
        return this.stackCtrl.canGoBack(deep, stackId);
    }
    /**
     * Resolves to `true` if it the outlet was able to sucessfully pop the last N pages.
     */
    pop(deep = 1, stackId) {
        return this.stackCtrl.pop(deep, stackId);
    }
    /**
     * Returns the URL of the active page of each stack.
     */
    getLastUrl(stackId) {
        const active = this.stackCtrl.getLastUrl(stackId);
        return active ? active.url : undefined;
    }
    /**
     * Returns the RouteView of the active page of each stack.
     * @internal
     */
    getLastRouteView(stackId) {
        return this.stackCtrl.getLastUrl(stackId);
    }
    /**
     * Returns the root view in the tab stack.
     * @internal
     */
    getRootView(stackId) {
        return this.stackCtrl.getRootUrl(stackId);
    }
    /**
     * Returns the active stack ID. In the context of ion-tabs, it means the active tab.
     */
    getActiveStackId() {
        return this.stackCtrl.getActiveStackId();
    }
    /**
     * Since the activated route can change over the life time of a component in an ion router outlet, we create
     * a proxy so that we can update the values over time as a user navigates back to components already in the stack.
     */
    createActivatedRouteProxy(component$, activatedRoute) {
        const proxy = new _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]();
        proxy._futureSnapshot = activatedRoute._futureSnapshot;
        proxy._routerState = activatedRoute._routerState;
        proxy.snapshot = activatedRoute.snapshot;
        proxy.outlet = activatedRoute.outlet;
        proxy.component = activatedRoute.component;
        // Setup wrappers for the observables so consumers don't have to worry about switching to new observables as the state updates
        proxy._paramMap = this.proxyObservable(component$, 'paramMap');
        proxy._queryParamMap = this.proxyObservable(component$, 'queryParamMap');
        proxy.url = this.proxyObservable(component$, 'url');
        proxy.params = this.proxyObservable(component$, 'params');
        proxy.queryParams = this.proxyObservable(component$, 'queryParams');
        proxy.fragment = this.proxyObservable(component$, 'fragment');
        proxy.data = this.proxyObservable(component$, 'data');
        return proxy;
    }
    /**
     * Create a wrapped observable that will switch to the latest activated route matched by the given component
     */
    proxyObservable(component$, path) {
        return component$.pipe(
        // First wait until the component instance is pushed
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(component => !!component), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(component => this.currentActivatedRoute$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(current => current !== null && current.component === component), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(current => current && current.activatedRoute[path]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])())));
    }
    /**
     * Updates the activated route proxy for the given component to the new incoming router state
     */
    updateActivatedRouteProxy(component, activatedRoute) {
        const proxy = this.proxyMap.get(component);
        if (!proxy) {
            throw new Error(`Could not find activated route proxy for view`);
        }
        proxy._futureSnapshot = activatedRoute._futureSnapshot;
        proxy._routerState = activatedRoute._routerState;
        proxy.snapshot = activatedRoute.snapshot;
        proxy.outlet = activatedRoute.outlet;
        proxy.component = activatedRoute.component;
        this.currentActivatedRoute$.next({ component, activatedRoute });
    }
};
IonRouterOutlet.ɵfac = function IonRouterOutlet_Factory(t) { return new (t || IonRouterOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ChildrenOutletContexts"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinjectAttribute"]('name'), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinjectAttribute"]('tabs'), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](Config), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](NavController), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](IonRouterOutlet, 12)); };
IonRouterOutlet.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: IonRouterOutlet, selectors: [["ion-router-outlet"]], inputs: { animated: "animated", animation: "animation", swipeGesture: "swipeGesture" }, outputs: { stackEvents: "stackEvents", activateEvents: "activate", deactivateEvents: "deactivate" }, exportAs: ["outlet"] });
IonRouterOutlet.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ChildrenOutletContexts"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"], args: ['name',] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"], args: ['tabs',] }] },
    { type: Config },
    { type: NavController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: IonRouterOutlet, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], IonRouterOutlet.prototype, "stackEvents", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('activate')
], IonRouterOutlet.prototype, "activateEvents", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('deactivate')
], IonRouterOutlet.prototype, "deactivateEvents", void 0);
IonRouterOutlet = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([ Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"])('name')),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"])('tabs')),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(12, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(12, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])())
], IonRouterOutlet);
class OutletInjector {
    constructor(route, childContexts, parent) {
        this.route = route;
        this.childContexts = childContexts;
        this.parent = parent;
    }
    get(token, notFoundValue) {
        if (token === _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]) {
            return this.route;
        }
        if (token === _angular_router__WEBPACK_IMPORTED_MODULE_4__["ChildrenOutletContexts"]) {
            return this.childContexts;
        }
        // tslint:disable-next-line
        return this.parent.get(token, notFoundValue);
    }
}

let IonTabs = class IonTabs {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
        this.ionTabsWillChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.ionTabsDidChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    /**
     * @internal
     */
    onPageSelected(detail) {
        const stackId = detail.enteringView.stackId;
        if (detail.tabSwitch && stackId !== undefined) {
            if (this.tabBar) {
                this.tabBar.selectedTab = stackId;
            }
            this.ionTabsWillChange.emit({ tab: stackId });
            this.ionTabsDidChange.emit({ tab: stackId });
        }
    }
    /**
     * When a tab button is clicked, there are several scenarios:
     * 1. If the selected tab is currently active (the tab button has been clicked
     *    again), then it should go to the root view for that tab.
     *
     *   a. Get the saved root view from the router outlet. If the saved root view
     *      matches the tabRootUrl, set the route view to this view including the
     *      navigation extras.
     *   b. If the saved root view from the router outlet does
     *      not match, navigate to the tabRootUrl. No navigation extras are
     *      included.
     *
     * 2. If the current tab tab is not currently selected, get the last route
     *    view from the router outlet.
     *
     *   a. If the last route view exists, navigate to that view including any
     *      navigation extras
     *   b. If the last route view doesn't exist, then navigate
     *      to the default tabRootUrl
     */
    select(tab) {
        const alreadySelected = this.outlet.getActiveStackId() === tab;
        const tabRootUrl = `${this.outlet.tabsPrefix}/${tab}`;
        if (alreadySelected) {
            const activeStackId = this.outlet.getActiveStackId();
            const activeView = this.outlet.getLastRouteView(activeStackId);
            // If on root tab, do not navigate to root tab again
            if (activeView.url === tabRootUrl) {
                return;
            }
            const rootView = this.outlet.getRootView(tab);
            const navigationExtras = rootView && tabRootUrl === rootView.url && rootView.savedExtras;
            return this.navCtrl.navigateRoot(tabRootUrl, Object.assign({}, (navigationExtras), { animated: true, animationDirection: 'back' }));
        }
        else {
            const lastRoute = this.outlet.getLastRouteView(tab);
            /**
             * If there is a lastRoute, goto that, otherwise goto the fallback url of the
             * selected tab
             */
            const url = lastRoute && lastRoute.url || tabRootUrl;
            const navigationExtras = lastRoute && lastRoute.savedExtras;
            return this.navCtrl.navigateRoot(url, Object.assign({}, (navigationExtras), { animated: true, animationDirection: 'back' }));
        }
    }
    getSelected() {
        return this.outlet.getActiveStackId();
    }
};
IonTabs.ɵfac = function IonTabs_Factory(t) { return new (t || IonTabs)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](NavController)); };
IonTabs.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IonTabs, selectors: [["ion-tabs"]], contentQueries: function IonTabs_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, IonTabBar, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.tabBar = _t.first);
    } }, viewQuery: function IonTabs_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 1, IonRouterOutlet);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.outlet = _t.first);
    } }, hostBindings: function IonTabs_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionTabButtonClick", function IonTabs_ionTabButtonClick_HostBindingHandler($event) { return ctx.select($event.detail.tab); });
    } }, outputs: { ionTabsWillChange: "ionTabsWillChange", ionTabsDidChange: "ionTabsDidChange" }, ngContentSelectors: _c3, decls: 5, vars: 0, consts: [[1, "tabs-inner"], ["tabs", "true", 3, "stackEvents"], ["outlet", ""]], template: function IonTabs_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-router-outlet", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("stackEvents", function IonTabs_Template_ion_router_outlet_stackEvents_2_listener($event) { return ctx.onPageSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](4, 1);
    } }, directives: [IonRouterOutlet], styles: ["[_nghost-%COMP%] {\n      display: flex;\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n\n      flex-direction: column;\n\n      width: 100%;\n      height: 100%;\n\n      contain: layout size style;\n      z-index: $z-index-page-container;\n    }\n    .tabs-inner[_ngcontent-%COMP%] {\n      position: relative;\n\n      flex: 1;\n\n      contain: layout size style;\n    }"] });
IonTabs.ctorParameters = () => [
    { type: NavController }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('outlet', { read: IonRouterOutlet, static: false })
], IonTabs.prototype, "outlet", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(IonTabBar, { static: false })
], IonTabs.prototype, "tabBar", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], IonTabs.prototype, "ionTabsWillChange", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], IonTabs.prototype, "ionTabsDidChange", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('ionTabButtonClick', ['$event.detail.tab'])
], IonTabs.prototype, "select", null);

let IonBackButtonDelegate = class IonBackButtonDelegate {
    constructor(routerOutlet, navCtrl, config) {
        this.routerOutlet = routerOutlet;
        this.navCtrl = navCtrl;
        this.config = config;
    }
    /**
     * @internal
     */
    onClick(ev) {
        const defaultHref = this.defaultHref || this.config.get('backButtonDefaultHref');
        if (this.routerOutlet && this.routerOutlet.canGoBack()) {
            this.navCtrl.setDirection('back', undefined, undefined, this.routerAnimation);
            this.routerOutlet.pop();
            ev.preventDefault();
        }
        else if (defaultHref != null) {
            this.navCtrl.navigateBack(defaultHref, { animation: this.routerAnimation });
            ev.preventDefault();
        }
    }
};
IonBackButtonDelegate.ɵfac = function IonBackButtonDelegate_Factory(t) { return new (t || IonBackButtonDelegate)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](IonRouterOutlet, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](NavController), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](Config)); };
IonBackButtonDelegate.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: IonBackButtonDelegate, selectors: [["ion-back-button"]], hostBindings: function IonBackButtonDelegate_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IonBackButtonDelegate_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } }, inputs: { defaultHref: "defaultHref", routerAnimation: "routerAnimation" } });
IonBackButtonDelegate.ctorParameters = () => [
    { type: IonRouterOutlet, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] },
    { type: NavController },
    { type: Config }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event'])
], IonBackButtonDelegate.prototype, "onClick", null);
IonBackButtonDelegate = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([ Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])())
], IonBackButtonDelegate);

let NavDelegate = class NavDelegate {
    constructor(ref, resolver, injector, angularDelegate, location) {
        this.el = ref.nativeElement;
        ref.nativeElement.delegate = angularDelegate.create(resolver, injector, location);
        proxyOutputs(this, this.el, ['ionNavDidChange', 'ionNavWillChange']);
    }
};
NavDelegate.ɵfac = function NavDelegate_Factory(t) { return new (t || NavDelegate)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](AngularDelegate), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"])); };
NavDelegate.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: NavDelegate, selectors: [["ion-nav"]] });
NavDelegate.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: AngularDelegate },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }
];
NavDelegate = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    ProxyCmp({
        inputs: ['animated', 'animation', 'root', 'rootParams', 'swipeGesture'],
        methods: ['push', 'insert', 'insertPages', 'pop', 'popTo', 'popToRoot', 'removeIndex', 'setRoot', 'setPages', 'getActive', 'getByIndex', 'canGoBack', 'getPrevious']
    }),
], NavDelegate);

let RouterLinkDelegate = class RouterLinkDelegate {
    constructor(locationStrategy, navCtrl, elementRef, router, routerLink) {
        this.locationStrategy = locationStrategy;
        this.navCtrl = navCtrl;
        this.elementRef = elementRef;
        this.router = router;
        this.routerLink = routerLink;
        this.routerDirection = 'forward';
    }
    ngOnInit() {
        this.updateTargetUrlAndHref();
    }
    ngOnChanges() {
        this.updateTargetUrlAndHref();
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    updateTargetUrlAndHref() {
        if (this.routerLink) {
            const href = this.locationStrategy.prepareExternalUrl(this.router.serializeUrl(this.routerLink.urlTree));
            this.elementRef.nativeElement.href = href;
        }
    }
    /**
     * @internal
     */
    onClick(ev) {
        this.navCtrl.setDirection(this.routerDirection, undefined, undefined, this.routerAnimation);
        ev.preventDefault();
    }
};
RouterLinkDelegate.ɵfac = function RouterLinkDelegate_Factory(t) { return new (t || RouterLinkDelegate)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](NavController), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], 8)); };
RouterLinkDelegate.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: RouterLinkDelegate, selectors: [["", "routerLink", ""]], hostBindings: function RouterLinkDelegate_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RouterLinkDelegate_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } }, inputs: { routerDirection: "routerDirection", routerAnimation: "routerAnimation" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]] });
RouterLinkDelegate.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"] },
    { type: NavController },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event'])
], RouterLinkDelegate.prototype, "onClick", null);
RouterLinkDelegate = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([ Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])())
], RouterLinkDelegate);

/**
 * @hidden
 */
let VirtualFooter = class VirtualFooter {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
};
VirtualFooter.ɵfac = function VirtualFooter_Factory(t) { return new (t || VirtualFooter)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])); };
VirtualFooter.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: VirtualFooter, selectors: [["", "virtualFooter", ""]] });
VirtualFooter.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }
];

/**
 * @hidden
 */
let VirtualHeader = class VirtualHeader {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
};
VirtualHeader.ɵfac = function VirtualHeader_Factory(t) { return new (t || VirtualHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])); };
VirtualHeader.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: VirtualHeader, selectors: [["", "virtualHeader", ""]] });
VirtualHeader.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }
];

/**
 * @hidden
 */
let VirtualItem = class VirtualItem {
    constructor(templateRef, viewContainer) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
    }
};
VirtualItem.ɵfac = function VirtualItem_Factory(t) { return new (t || VirtualItem)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"])); };
VirtualItem.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: VirtualItem, selectors: [["", "virtualItem", ""]] });
VirtualItem.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }
];

let IonVirtualScroll = class IonVirtualScroll {
    constructor(z, iterableDiffers, elementRef) {
        this.z = z;
        this.iterableDiffers = iterableDiffers;
        this.refMap = new WeakMap();
        this.el = elementRef.nativeElement;
        this.el.nodeRender = this.nodeRender.bind(this);
    }
    ngOnChanges(changes) {
        if (this.trackBy && 'items' in changes) {
            // React on virtualScroll changes only once all inputs have been initialized
            const value = changes['items'].currentValue;
            if (this.differ === undefined && value != null) {
                try {
                    this.differ = this.iterableDiffers.find(value).create(this.trackBy);
                }
                catch (e) {
                    throw new Error(`Cannot find a differ supporting object '${value}'. VirtualScroll only supports binding to Iterables such as Arrays.`);
                }
            }
        }
    }
    ngDoCheck() {
        // and if there actually are changes
        const changes = this.differ !== undefined && this.items ? this.differ.diff(this.items) : null;
        if (changes === null) {
            return;
        }
        // TODO: optimize
        this.checkRange(0);
    }
    nodeRender(el, cell, index) {
        return this.z.run(() => {
            let node;
            if (!el) {
                node = this.itmTmp.viewContainer.createEmbeddedView(this.getComponent(cell.type), { $implicit: cell.value, index }, index);
                el = getElement(node);
                this.refMap.set(el, node);
            }
            else {
                node = this.refMap.get(el);
                const ctx = node.context;
                ctx.$implicit = cell.value;
                ctx.index = cell.index;
            }
            // run sync change detections
            node.detectChanges();
            return el;
        });
    }
    getComponent(type) {
        switch (type) {
            case 'item': return this.itmTmp.templateRef;
            case 'header': return this.hdrTmp.templateRef;
            case 'footer': return this.ftrTmp.templateRef;
        }
        throw new Error('template for virtual item was not provided');
    }
};
IonVirtualScroll.ɵfac = function IonVirtualScroll_Factory(t) { return new (t || IonVirtualScroll)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])); };
IonVirtualScroll.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IonVirtualScroll, selectors: [["ion-virtual-scroll"]], contentQueries: function IonVirtualScroll_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, VirtualItem, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, VirtualHeader, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, VirtualFooter, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.itmTmp = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.hdrTmp = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.ftrTmp = _t.first);
    } }, inputs: { approxItemHeight: "approxItemHeight", approxHeaderHeight: "approxHeaderHeight", approxFooterHeight: "approxFooterHeight", headerFn: "headerFn", footerFn: "footerFn", items: "items", itemHeight: "itemHeight", headerHeight: "headerHeight", footerHeight: "footerHeight", trackBy: "trackBy" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function IonVirtualScroll_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
IonVirtualScroll.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(VirtualItem, { static: false })
], IonVirtualScroll.prototype, "itmTmp", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(VirtualHeader, { static: false })
], IonVirtualScroll.prototype, "hdrTmp", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(VirtualFooter, { static: false })
], IonVirtualScroll.prototype, "ftrTmp", void 0);
IonVirtualScroll = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    ProxyCmp({
        inputs: ['approxItemHeight', 'approxHeaderHeight', 'approxFooterHeight', 'headerFn', 'footerFn', 'items', 'itemHeight', 'headerHeight', 'footerHeight'],
        methods: ['checkEnd', 'checkRange', 'positionForItem']
    }),
], IonVirtualScroll);
const getElement = (view) => {
    const rootNodes = view.rootNodes;
    for (let i = 0; i < rootNodes.length; i++) {
        if (rootNodes[i].nodeType === 1) {
            return rootNodes[i];
        }
    }
    throw new Error('virtual element was not created');
};
const ɵ0$7 = getElement;

class OverlayBaseController {
    constructor(ctrl) {
        this.ctrl = ctrl;
    }
    /**
     * Creates a new overlay
     */
    create(opts) {
        // TODO: next major release opts is not optional
        return this.ctrl.create((opts || {}));
    }
    /**
     * When `id` is not provided, it dismisses the top overlay.
     */
    dismiss(data, role, id) {
        return this.ctrl.dismiss(data, role, id);
    }
    /**
     * Returns the top overlay.
     */
    getTop() {
        return this.ctrl.getTop();
    }
}

let ActionSheetController = class ActionSheetController extends OverlayBaseController {
    constructor() {
        super(_ionic_core__WEBPACK_IMPORTED_MODULE_5__["actionSheetController"]);
    }
};
ActionSheetController.ɵfac = function ActionSheetController_Factory(t) { return new (t || ActionSheetController)(); };
ActionSheetController.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ActionSheetController, factory: function (t) { return ActionSheetController.ɵfac(t); }, providedIn: 'root' });
ActionSheetController.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function ActionSheetController_Factory() { return new ActionSheetController(); }, token: ActionSheetController, providedIn: "root" });

let AlertController = class AlertController extends OverlayBaseController {
    constructor() {
        super(_ionic_core__WEBPACK_IMPORTED_MODULE_5__["alertController"]);
    }
};
AlertController.ɵfac = function AlertController_Factory(t) { return new (t || AlertController)(); };
AlertController.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AlertController, factory: function (t) { return AlertController.ɵfac(t); }, providedIn: 'root' });
AlertController.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function AlertController_Factory() { return new AlertController(); }, token: AlertController, providedIn: "root" });

let LoadingController = class LoadingController extends OverlayBaseController {
    constructor() {
        super(_ionic_core__WEBPACK_IMPORTED_MODULE_5__["loadingController"]);
    }
};
LoadingController.ɵfac = function LoadingController_Factory(t) { return new (t || LoadingController)(); };
LoadingController.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LoadingController, factory: function (t) { return LoadingController.ɵfac(t); }, providedIn: 'root' });
LoadingController.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function LoadingController_Factory() { return new LoadingController(); }, token: LoadingController, providedIn: "root" });

let MenuController = class MenuController {
    /**
     * Programmatically open the Menu.
     * @param [menuId]  Optionally get the menu by its id, or side.
     * @return returns a promise when the menu is fully opened
     */
    open(menuId) {
        return _ionic_core__WEBPACK_IMPORTED_MODULE_5__["menuController"].open(menuId);
    }
    /**
     * Programmatically close the Menu. If no `menuId` is given as the first
     * argument then it'll close any menu which is open. If a `menuId`
     * is given then it'll close that exact menu.
     * @param [menuId]  Optionally get the menu by its id, or side.
     * @return returns a promise when the menu is fully closed
     */
    close(menuId) {
        return _ionic_core__WEBPACK_IMPORTED_MODULE_5__["menuController"].close(menuId);
    }
    /**
     * Toggle the menu. If it's closed, it will open, and if opened, it
     * will close.
     * @param [menuId]  Optionally get the menu by its id, or side.
     * @return returns a promise when the menu has been toggled
     */
    toggle(menuId) {
        return _ionic_core__WEBPACK_IMPORTED_MODULE_5__["menuController"].toggle(menuId);
    }
    /**
     * Used to enable or disable a menu. For example, there could be multiple
     * left menus, but only one of them should be able to be opened at the same
     * time. If there are multiple menus on the same side, then enabling one menu
     * will also automatically disable all the others that are on the same side.
     * @param [menuId]  Optionally get the menu by its id, or side.
     * @return Returns the instance of the menu, which is useful for chaining.
     */
    enable(shouldEnable, menuId) {
        return _ionic_core__WEBPACK_IMPORTED_MODULE_5__["menuController"].enable(shouldEnable, menuId);
    }
    /**
     * Used to enable or disable the ability to swipe open the menu.
     * @param shouldEnable  True if it should be swipe-able, false if not.
     * @param [menuId]  Optionally get the menu by its id, or side.
     * @return Returns the instance of the menu, which is useful for chaining.
     */
    swipeGesture(shouldEnable, menuId) {
        return _ionic_core__WEBPACK_IMPORTED_MODULE_5__["menuController"].swipeGesture(shouldEnable, menuId);
    }
    /**
     * @param [menuId] Optionally get the menu by its id, or side.
     * @return Returns true if the specified menu is currently open, otherwise false.
     * If the menuId is not specified, it returns true if ANY menu is currenly open.
     */
    isOpen(menuId) {
        return _ionic_core__WEBPACK_IMPORTED_MODULE_5__["menuController"].isOpen(menuId);
    }
    /**
     * @param [menuId]  Optionally get the menu by its id, or side.
     * @return Returns true if the menu is currently enabled, otherwise false.
     */
    isEnabled(menuId) {
        return _ionic_core__WEBPACK_IMPORTED_MODULE_5__["menuController"].isEnabled(menuId);
    }
    /**
     * Used to get a menu instance. If a `menuId` is not provided then it'll
     * return the first menu found. If a `menuId` is `left` or `right`, then
     * it'll return the enabled menu on that side. Otherwise, if a `menuId` is
     * provided, then it'll try to find the menu using the menu's `id`
     * property. If a menu is not found then it'll return `null`.
     * @param [menuId]  Optionally get the menu by its id, or side.
     * @return Returns the instance of the menu if found, otherwise `null`.
     */
    get(menuId) {
        return _ionic_core__WEBPACK_IMPORTED_MODULE_5__["menuController"].get(menuId);
    }
    /**
     * @return Returns the instance of the menu already opened, otherwise `null`.
     */
    getOpen() {
        return _ionic_core__WEBPACK_IMPORTED_MODULE_5__["menuController"].getOpen();
    }
    /**
     * @return Returns an array of all menu instances.
     */
    getMenus() {
        return _ionic_core__WEBPACK_IMPORTED_MODULE_5__["menuController"].getMenus();
    }
};
MenuController.ɵfac = function MenuController_Factory(t) { return new (t || MenuController)(); };
MenuController.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MenuController, factory: function (t) { return MenuController.ɵfac(t); }, providedIn: 'root' });
MenuController.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function MenuController_Factory() { return new MenuController(); }, token: MenuController, providedIn: "root" });

let PickerController = class PickerController extends OverlayBaseController {
    constructor() {
        super(_ionic_core__WEBPACK_IMPORTED_MODULE_5__["pickerController"]);
    }
};
PickerController.ɵfac = function PickerController_Factory(t) { return new (t || PickerController)(); };
PickerController.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PickerController, factory: function (t) { return PickerController.ɵfac(t); }, providedIn: 'root' });
PickerController.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function PickerController_Factory() { return new PickerController(); }, token: PickerController, providedIn: "root" });

let ModalController = class ModalController extends OverlayBaseController {
    constructor(angularDelegate, resolver, injector) {
        super(_ionic_core__WEBPACK_IMPORTED_MODULE_5__["modalController"]);
        this.angularDelegate = angularDelegate;
        this.resolver = resolver;
        this.injector = injector;
    }
    create(opts) {
        return super.create(Object.assign({}, opts, { delegate: this.angularDelegate.create(this.resolver, this.injector) }));
    }
};
ModalController.ɵfac = function ModalController_Factory(t) { return new (t || ModalController)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](AngularDelegate), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"])); };
ModalController.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ModalController, factory: function (t) { return ModalController.ɵfac(t); } });
ModalController.ctorParameters = () => [
    { type: AngularDelegate },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];

let PopoverController = class PopoverController extends OverlayBaseController {
    constructor(angularDelegate, resolver, injector) {
        super(_ionic_core__WEBPACK_IMPORTED_MODULE_5__["popoverController"]);
        this.angularDelegate = angularDelegate;
        this.resolver = resolver;
        this.injector = injector;
    }
    create(opts) {
        return super.create(Object.assign({}, opts, { delegate: this.angularDelegate.create(this.resolver, this.injector) }));
    }
};
PopoverController.ɵfac = function PopoverController_Factory(t) { return new (t || PopoverController)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](AngularDelegate), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"])); };
PopoverController.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PopoverController, factory: function (t) { return PopoverController.ɵfac(t); } });
PopoverController.ctorParameters = () => [
    { type: AngularDelegate },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];

let ToastController = class ToastController extends OverlayBaseController {
    constructor() {
        super(_ionic_core__WEBPACK_IMPORTED_MODULE_5__["toastController"]);
    }
};
ToastController.ɵfac = function ToastController_Factory(t) { return new (t || ToastController)(); };
ToastController.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ToastController, factory: function (t) { return ToastController.ɵfac(t); }, providedIn: 'root' });
ToastController.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function ToastController_Factory() { return new ToastController(); }, token: ToastController, providedIn: "root" });

let DomController = class DomController {
    /**
     * Schedules a task to run during the READ phase of the next frame.
     * This task should only read the DOM, but never modify it.
     */
    read(cb) {
        getQueue().read(cb);
    }
    /**
     * Schedules a task to run during the WRITE phase of the next frame.
     * This task should write the DOM, but never READ it.
     */
    write(cb) {
        getQueue().write(cb);
    }
};
DomController.ɵfac = function DomController_Factory(t) { return new (t || DomController)(); };
DomController.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DomController, factory: function (t) { return DomController.ɵfac(t); }, providedIn: 'root' });
DomController.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function DomController_Factory() { return new DomController(); }, token: DomController, providedIn: "root" });
const getQueue = () => {
    const win = typeof window !== 'undefined' ? window : null;
    if (win != null) {
        const Ionic = win.Ionic;
        if (Ionic && Ionic.queue) {
            return Ionic.queue;
        }
        return {
            read: (cb) => win.requestAnimationFrame(cb),
            write: (cb) => win.requestAnimationFrame(cb)
        };
    }
    return {
        read: (cb) => cb(),
        write: (cb) => cb()
    };
};
const ɵ0$8 = getQueue;

let AnimationController = class AnimationController {
    /**
     * Create a new animation
     */
    create(animationId) {
        return Object(_ionic_core__WEBPACK_IMPORTED_MODULE_5__["createAnimation"])(animationId);
    }
    /**
     * EXPERIMENTAL
     *
     * Given a progression and a cubic bezier function,
     * this utility returns the time value(s) at which the
     * cubic bezier reaches the given time progression.
     *
     * If the cubic bezier never reaches the progression
     * the result will be an empty array.
     *
     * This is most useful for switching between easing curves
     * when doing a gesture animation (i.e. going from linear easing
     * during a drag, to another easing when `progressEnd` is called)
     */
    easingTime(p0, p1, p2, p3, progression) {
        return Object(_ionic_core__WEBPACK_IMPORTED_MODULE_5__["getTimeGivenProgression"])(p0, p1, p2, p3, progression);
    }
};
AnimationController.ɵfac = function AnimationController_Factory(t) { return new (t || AnimationController)(); };
AnimationController.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AnimationController, factory: function (t) { return AnimationController.ɵfac(t); }, providedIn: 'root' });
AnimationController.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function AnimationController_Factory() { return new AnimationController(); }, token: AnimationController, providedIn: "root" });

let GestureController = class GestureController {
    constructor(zone) {
        this.zone = zone;
    }
    /**
     * Create a new gesture
     */
    create(opts, runInsideAngularZone = false) {
        if (runInsideAngularZone) {
            Object.getOwnPropertyNames(opts).forEach(key => {
                if (typeof opts[key] === 'function') {
                    const fn = opts[key];
                    opts[key] = (...props) => this.zone.run(() => fn(...props));
                }
            });
        }
        return Object(_ionic_core__WEBPACK_IMPORTED_MODULE_5__["createGesture"])(opts);
    }
};
GestureController.ɵfac = function GestureController_Factory(t) { return new (t || GestureController)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
GestureController.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: GestureController, factory: function (t) { return GestureController.ɵfac(t); }, providedIn: 'root' });
GestureController.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
GestureController.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function GestureController_Factory() { return new GestureController(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); }, token: GestureController, providedIn: "root" });

class IonicRouteStrategy {
    shouldDetach(_route) {
        return false;
    }
    shouldAttach(_route) {
        return false;
    }
    store(_route, _detachedTree) {
        return;
    }
    retrieve(_route) {
        return null;
    }
    shouldReuseRoute(future, curr) {
        if (future.routeConfig !== curr.routeConfig) {
            return false;
        }
        // checking router params
        const futureParams = future.params;
        const currentParams = curr.params;
        const keysA = Object.keys(futureParams);
        const keysB = Object.keys(currentParams);
        if (keysA.length !== keysB.length) {
            return false;
        }
        // Test for A's keys different from B.
        for (const key of keysA) {
            if (currentParams[key] !== futureParams[key]) {
                return false;
            }
        }
        return true;
    }
}

let didInitialize = false;
const appInitialize = (config, doc, zone) => {
    return () => {
        const win = doc.defaultView;
        if (win && typeof window !== 'undefined') {
            if (didInitialize) {
                console.warn('Ionic Angular was already initialized. Make sure IonicModule.forRoot() is just called once.');
            }
            didInitialize = true;
            const Ionic = win.Ionic = win.Ionic || {};
            Ionic.config = Object.assign({}, config, { _zoneGate: (h) => zone.run(h) });
            const aelFn = '__zone_symbol__addEventListener' in doc.body
                ? '__zone_symbol__addEventListener'
                : 'addEventListener';
            return Object(_ionic_core_loader__WEBPACK_IMPORTED_MODULE_8__["applyPolyfills"])().then(() => {
                return Object(_ionic_core_loader__WEBPACK_IMPORTED_MODULE_8__["defineCustomElements"])(win, {
                    exclude: ['ion-tabs', 'ion-tab'],
                    syncQueue: true,
                    raf,
                    jmp: (h) => zone.runOutsideAngular(h),
                    ael(elm, eventName, cb, opts) {
                        elm[aelFn](eventName, cb, opts);
                    },
                    rel(elm, eventName, cb, opts) {
                        elm.removeEventListener(eventName, cb, opts);
                    }
                });
            });
        }
    };
};

var IonicModule_1;
const DECLARATIONS = [
    // proxies
    IonApp,
    IonAvatar,
    IonBackButton,
    IonBackdrop,
    IonBadge,
    IonButton,
    IonButtons,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCheckbox,
    IonChip,
    IonCol,
    IonContent,
    IonDatetime,
    IonFab,
    IonFabButton,
    IonFabList,
    IonFooter,
    IonGrid,
    IonHeader,
    IonIcon,
    IonImg,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    IonInput,
    IonItem,
    IonItemDivider,
    IonItemGroup,
    IonItemOption,
    IonItemOptions,
    IonItemSliding,
    IonLabel,
    IonList,
    IonListHeader,
    IonMenu,
    IonMenuButton,
    IonMenuToggle,
    IonNav,
    IonNavLink,
    IonNote,
    IonProgressBar,
    IonRadio,
    IonRadioGroup,
    IonRange,
    IonRefresher,
    IonRefresherContent,
    IonReorder,
    IonReorderGroup,
    IonRippleEffect,
    IonRow,
    IonSearchbar,
    IonSegment,
    IonSegmentButton,
    IonSelect,
    IonSelectOption,
    IonSkeletonText,
    IonSlide,
    IonSlides,
    IonSpinner,
    IonSplitPane,
    IonTabBar,
    IonTabButton,
    IonText,
    IonTextarea,
    IonThumbnail,
    IonToggle,
    IonToolbar,
    IonTitle,
    IonTabs,
    // ngModel accessors
    BooleanValueAccessor,
    NumericValueAccessor,
    RadioValueAccessor,
    SelectValueAccessor,
    TextValueAccessor,
    // navigation
    IonRouterOutlet,
    IonBackButtonDelegate,
    NavDelegate,
    RouterLinkDelegate,
    // virtual scroll
    VirtualFooter,
    VirtualHeader,
    VirtualItem,
    IonVirtualScroll
];
let IonicModule = IonicModule_1 = class IonicModule {
    static forRoot(config) {
        return {
            ngModule: IonicModule_1,
            providers: [
                {
                    provide: ConfigToken,
                    useValue: config
                },
                {
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"],
                    useFactory: appInitialize,
                    multi: true,
                    deps: [
                        ConfigToken,
                        _angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
                    ]
                }
            ]
        };
    }
};
IonicModule.ɵfac = function IonicModule_Factory(t) { return new (t || IonicModule)(); };
IonicModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: IonicModule });
IonicModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ providers: [AngularDelegate, ModalController, PopoverController], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]]] });

(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BooleanValueAccessor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                /* tslint:disable-next-line:directive-selector */
                selector: 'ion-checkbox,ion-toggle',
                providers: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                        useExisting: BooleanValueAccessor_1,
                        multi: true
                    }
                ]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }]; }, { _handleIonChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['ionChange', ['$event.target']]
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NumericValueAccessor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                /* tslint:disable-next-line:directive-selector */
                selector: 'ion-input[type=number]',
                providers: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                        useExisting: NumericValueAccessor_1,
                        multi: true
                    }
                ]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }]; }, { _handleIonChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['ionChange', ['$event.target']]
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RadioValueAccessor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                /* tslint:disable-next-line:directive-selector */
                selector: 'ion-radio',
                providers: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                        useExisting: RadioValueAccessor_1,
                        multi: true
                    }
                ]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }]; }, { _handleIonSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['ionSelect', ['$event.target']]
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SelectValueAccessor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                /* tslint:disable-next-line:directive-selector */
                selector: 'ion-range, ion-select, ion-radio-group, ion-segment, ion-datetime',
                providers: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                        useExisting: SelectValueAccessor_1,
                        multi: true
                    }
                ]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }]; }, { _handleChangeEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['ionChange', ['$event.target']]
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TextValueAccessor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                /* tslint:disable-next-line:directive-selector */
                selector: 'ion-input:not([type=number]),ion-textarea,ion-searchbar',
                providers: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                        useExisting: TextValueAccessor_1,
                        multi: true
                    }
                ]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }]; }, { _handleInputEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['ionChange', ['$event.target']]
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Platform, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NavController, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: Platform }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["UrlSerializer"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IonApp, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{ selector: "ion-app", changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush, template: "<ng-content></ng-content>" }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IonAvatar, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{ selector: "ion-avatar", changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush, template: "<ng-content></ng-content>" }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IonBackButton, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{ selector: "ion-back-button", changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush, template: "<ng-content></ng-content>", inputs: ["color", "defaultHref", "disabled", "icon", "mode", "routerAnimation", "text", "type"] }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IonBackdrop, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{ selector: "ion-backdrop", changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush, template: "<ng-content></ng-content>", inputs: ["stopPropagation", "tappable", "visible"] }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IonBadge, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{ selector: "ion-badge", changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush, template: "<ng-content></ng-content>", inputs: ["color", "mode"] }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IonButton, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{ selector: "ion-button", changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush, template: "<ng-content></ng-content>", inputs: ["buttonType", "color", "disabled", "download", "expand", "fill", "href", "mode", "rel", "routerAnimation", "routerDirection", "shape", "size", "strong", "target", "type"] }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IonButtons, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{ selector: "ion-buttons", changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush, template: "<ng-content></ng-content>", inputs: ["collapse"] }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IonCard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{ selector: "ion-card", changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush, template: "<ng-content></ng-content>", inputs: ["button", "color", "disabled", "download", "href", "mode", "rel", "routerAnimation", "routerDirection", "target", "type"] }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IonCardContent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{ selector: "ion-card-content", changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush, template: "<ng-content></ng-content>", inputs: ["mode"] }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IonCardHeader, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{ selector: "ion-card-header", changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush, template: "<ng-content></ng-content>", inputs: ["color", "mode", "translucent"] }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IonCardSubtitle, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{ selector: "ion-card-subtitle", changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush, template: "<ng-content></ng-content>", inputs: ["color", "mode"] }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IonCardTitle, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{ selector: "ion-card-title", changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush, template: "<ng-content></ng-content>", inputs: ["color", "mode"] }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IonCheckbox, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{ selector: "ion-checkbox", changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush, template: "<ng-content></ng-content>", inputs: ["checked", "color", "disabled", "indeterminate", "mode", "name", "value"] }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IonChip, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{ selector: "ion-chip", changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush, template: "<ng-content></ng-content>", inputs: ["color", "disabled", "mode", "outline"] }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IonCol, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{ selector: "ion-col", changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush, template: "<ng-content></ng-content>", inputs: ["offset", "offsetLg", "offsetMd", "offsetSm", "offsetXl", "offsetXs", "pull", "pullLg", "pullMd", "pullSm", "pullXl", "pullXs", "push", "pushLg", "pushMd", "pushSm", "pushXl", "pushXs", "size", "sizeLg", "sizeMd", "sizeSm", "sizeXl", "sizeXs"] }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IonContent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{ selector: "ion-content", changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush, template: "<ng-content></ng-content>", inputs: ["color", "forceOverscroll", "fullscreen", "scrollEvents", "scrollX", "scrollY"] }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IonDatetime, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{ selector: "ion-datetime", changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush, template: "<ng-content></ng-content>", inputs: ["cancelText", "dayNames", "dayShortNames", "dayValues", "disabled", "displayFormat", "displayTimezone", "doneText", "hourValues", "max", "min", "minuteValues", "mode", "monthNames", "monthShortNames", "monthValues", "name", "pickerFormat", "pickerOptions", "placeholder", "readonly", "value", "yearValues"] }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IonFab, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{ selector: "ion-fab", changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush, template: "<ng-content></ng-content>", inputs: ["activated", "edge", "horizontal", "vertical"] }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IonFabButton, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{ selector: "ion-fab-button", changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush, template: "<ng-content></ng-content>", inputs: ["activated", "closeIcon", "color", "disabled", "download", "href", "mode", "rel", "routerAnimation", "routerDirection", "show", "size", "target", "translucent", "type"] }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IonFabList, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{ selector: "ion-fab-list", changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush, template: "<ng-content></ng-content>", inputs: ["activated", "side"] }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IonFooter, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{ selector: "ion-footer", changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush, template: "<ng-content></ng-content>", inputs: ["mode", "translucent"] }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IonGrid, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{ selector: "ion-grid", changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush, template: "<ng-content></ng-content>", inputs: ["fixed"] }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IonHeader, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{ selector: "ion-header", changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush, template: "<ng-content></ng-content>", inputs: ["collapse", "mode", "translucent"] }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IonIcon, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{ selector: "ion-icon", changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush, template: "<ng-content></ng-content>", inputs: ["ariaHidden", "ariaLabel", "color", "flipRtl", "icon", "ios", "lazy", "md", "mode", "name", "sanitize", "size", "src"] }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IonImg, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{ selector: "ion-img", changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush, template: "<ng-content></ng-content>", inputs: ["alt", "src"] }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IonInfiniteScroll, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{ selector: "ion-infinite-scroll", changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush, template: "<ng-content></ng-content>", inputs: ["disabled", "position", "threshold"] }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IonInfiniteScrollContent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{ selector: "ion-infinite-scroll-content", changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush, template: "<ng-content></ng-content>", inputs: ["loadingSpinner", "loadingText"] }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IonInput, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{ selector: "ion-input", changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush, template: "<ng-content></ng-content>", inputs: ["accept", "autocapitalize", "autocomplete", "autocorrect", "autofocus", "clearInput", "clearOnEdit", "color", "debounce", "disabled", "enterkeyhint", "inputmode", "max", "maxlength", "min", "minlength", "mode", "multiple", "name", "pattern", "placeholder", "readonly", "required", "size", "spellcheck", "step", "type", "value"] }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IonItem, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{ selector: "ion-item", changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush, template: "<ng-content></ng-content>", inputs: ["button", "color", "detail", "detailIcon", "disabled", "download", "href", "lines", "mode", "rel", "routerAnimation", "routerDirection", "target", "type"] }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IonItemDivider, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{ selector: "ion-item-divider", changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush, template: "<ng-content></ng-content>", inputs: ["color", "mode", "sticky"] }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IonItemGroup, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{ selector: "ion-item-group", changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush, template: "<ng-content></ng-content>" }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IonItemOption, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{ selector: "ion-item-option", changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush, template: "<ng-content></ng-content>", inputs: ["color", "disabled", "download", "expandable", "href", "mode", "rel", "target", "type"] }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IonItemOptions, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{ selector: "ion-item-options", changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush, template: "<ng-content></ng-content>", inputs: ["side"] }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IonItemSliding, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{ selector: "ion-item-sliding", changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush, template: "<ng-content></ng-content>", inputs: ["disabled"] }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IonLabel, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{ selector: "ion-label", changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush, template: "<ng-content></ng-content>", inputs: ["color", "mode", "position"] }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IonList, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{ selector: "ion-list", changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush, template: "<ng-content></ng-content>", inputs: ["inset", "lines", "mode"] }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IonListHeader, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{ selector: "ion-list-header", changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush, template: "<ng-content></ng-content>", inputs: ["color", "lines", "mode"] }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IonMenu, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{ selector: "ion-menu", changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush, template: "<ng-content></ng-content>", inputs: ["contentId", "disabled", "maxEdgeStart", "menuId", "side", "swipeGesture", "type"] }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IonMenuButton, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{ selector: "ion-menu-button", changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush, template: "<ng-content></ng-content>", inputs: ["autoHide", "color", "disabled", "menu", "mode", "type"] }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IonMenuToggle, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{ selector: "ion-menu-toggle", changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush, template: "<ng-content></ng-content>", inputs: ["autoHide", "menu"] }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IonNav, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{ selector: "ion-nav", changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush, template: "<ng-content></ng-content>", inputs: ["animated", "animation", "root", "rootParams", "swipeGesture"] }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IonNavLink, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{ selector: "ion-nav-link", changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush, template: "<ng-content></ng-content>", inputs: ["component", "componentProps", "routerAnimation", "routerDirection"] }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IonNote, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{ selector: "ion-note", changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush, template: "<ng-content></ng-content>", inputs: ["color", "mode"] }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IonProgressBar, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{ selector: "ion-progress-bar", changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush, template: "<ng-content></ng-content>", inputs: ["buffer", "color", "mode", "reversed", "type", "value"] }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IonRadio, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{ selector: "ion-radio", changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush, template: "<ng-content></ng-content>", inputs: ["color", "disabled", "mode", "name", "value"] }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IonRadioGroup, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{ selector: "ion-radio-group", changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush, template: "<ng-content></ng-content>", inputs: ["allowEmptySelection", "name", "value"] }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IonRange, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{ selector: "ion-range", changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush, template: "<ng-content></ng-content>", inputs: ["color", "debounce", "disabled", "dualKnobs", "max", "min", "mode", "name", "pin", "snaps", "step", "ticks", "value"] }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IonRefresher, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{ selector: "ion-refresher", changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush, template: "<ng-content></ng-content>", inputs: ["closeDuration", "disabled", "pullFactor", "pullMax", "pullMin", "snapbackDuration"] }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IonRefresherContent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{ selector: "ion-refresher-content", changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush, template: "<ng-content></ng-content>", inputs: ["pullingIcon", "pullingText", "refreshingSpinner", "refreshingText"] }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IonReorder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{ selector: "ion-reorder", changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush, template: "<ng-content></ng-content>" }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IonReorderGroup, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{ selector: "ion-reorder-group", changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush, template: "<ng-content></ng-content>", inputs: ["disabled"] }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IonRippleEffect, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{ selector: "ion-ripple-effect", changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush, template: "<ng-content></ng-content>", inputs: ["type"] }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IonRow, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{ selector: "ion-row", changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush, template: "<ng-content></ng-content>" }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IonSearchbar, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{ selector: "ion-searchbar", changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush, template: "<ng-content></ng-content>", inputs: ["animated", "autocomplete", "autocorrect", "cancelButtonIcon", "cancelButtonText", "clearIcon", "color", "debounce", "disabled", "enterkeyhint", "inputmode", "mode", "placeholder", "searchIcon", "showCancelButton", "showClearButton", "spellcheck", "type", "value"] }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IonSegment, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{ selector: "ion-segment", changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush, template: "<ng-content></ng-content>", inputs: ["color", "disabled", "mode", "scrollable", "swipeGesture", "value"] }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IonSegmentButton, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{ selector: "ion-segment-button", changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush, template: "<ng-content></ng-content>", inputs: ["disabled", "layout", "mode", "type", "value"] }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IonSelect, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{ selector: "ion-select", changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush, template: "<ng-content></ng-content>", inputs: ["cancelText", "compareWith", "disabled", "interface", "interfaceOptions", "mode", "multiple", "name", "okText", "placeholder", "selectedText", "value"] }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IonSelectOption, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{ selector: "ion-select-option", changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush, template: "<ng-content></ng-content>", inputs: ["disabled", "value"] }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IonSkeletonText, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{ selector: "ion-skeleton-text", changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush, template: "<ng-content></ng-content>", inputs: ["animated"] }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IonSlide, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{ selector: "ion-slide", changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush, template: "<ng-content></ng-content>" }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IonSlides, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{ selector: "ion-slides", changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush, template: "<ng-content></ng-content>", inputs: ["mode", "options", "pager", "scrollbar"] }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IonSpinner, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{ selector: "ion-spinner", changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush, template: "<ng-content></ng-content>", inputs: ["color", "duration", "name", "paused"] }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IonSplitPane, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{ selector: "ion-split-pane", changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush, template: "<ng-content></ng-content>", inputs: ["contentId", "disabled", "when"] }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IonTabBar, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{ selector: "ion-tab-bar", changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush, template: "<ng-content></ng-content>", inputs: ["color", "mode", "selectedTab", "translucent"] }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IonTabButton, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{ selector: "ion-tab-button", changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush, template: "<ng-content></ng-content>", inputs: ["disabled", "download", "href", "layout", "mode", "rel", "selected", "tab", "target"] }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IonText, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{ selector: "ion-text", changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush, template: "<ng-content></ng-content>", inputs: ["color", "mode"] }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IonTextarea, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{ selector: "ion-textarea", changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush, template: "<ng-content></ng-content>", inputs: ["autoGrow", "autocapitalize", "autofocus", "clearOnEdit", "color", "cols", "debounce", "disabled", "enterkeyhint", "inputmode", "maxlength", "minlength", "mode", "name", "placeholder", "readonly", "required", "rows", "spellcheck", "value", "wrap"] }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IonThumbnail, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{ selector: "ion-thumbnail", changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush, template: "<ng-content></ng-content>" }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IonTitle, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{ selector: "ion-title", changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush, template: "<ng-content></ng-content>", inputs: ["color", "size"] }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IonToggle, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{ selector: "ion-toggle", changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush, template: "<ng-content></ng-content>", inputs: ["checked", "color", "disabled", "mode", "name", "value"] }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IonToolbar, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{ selector: "ion-toolbar", changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush, template: "<ng-content></ng-content>", inputs: ["color", "mode"] }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Config, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AngularDelegate, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IonRouterOutlet, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: 'ion-router-outlet',
                exportAs: 'outlet',
                inputs: ['animated', 'animation', 'swipeGesture']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ChildrenOutletContexts"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
                args: ['name']
            }] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
                args: ['tabs']
            }] }, { type: Config }, { type: NavController }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: IonRouterOutlet, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }] }]; }, { stackEvents: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], activateEvents: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
            args: ['activate']
        }], deactivateEvents: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
            args: ['deactivate']
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IonTabs, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'ion-tabs',
                template: `
    <ng-content select="[slot=top]"></ng-content>
    <div class="tabs-inner">
      <ion-router-outlet #outlet tabs="true" (stackEvents)="onPageSelected($event)"></ion-router-outlet>
    </div>
    <ng-content></ng-content>`,
                styles: [`
    :host {
      display: flex;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;

      flex-direction: column;

      width: 100%;
      height: 100%;

      contain: layout size style;
      z-index: $z-index-page-container;
    }
    .tabs-inner {
      position: relative;

      flex: 1;

      contain: layout size style;
    }`]
            }]
    }], function () { return [{ type: NavController }]; }, { ionTabsWillChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], ionTabsDidChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], 
    /**
     * When a tab button is clicked, there are several scenarios:
     * 1. If the selected tab is currently active (the tab button has been clicked
     *    again), then it should go to the root view for that tab.
     *
     *   a. Get the saved root view from the router outlet. If the saved root view
     *      matches the tabRootUrl, set the route view to this view including the
     *      navigation extras.
     *   b. If the saved root view from the router outlet does
     *      not match, navigate to the tabRootUrl. No navigation extras are
     *      included.
     *
     * 2. If the current tab tab is not currently selected, get the last route
     *    view from the router outlet.
     *
     *   a. If the last route view exists, navigate to that view including any
     *      navigation extras
     *   b. If the last route view doesn't exist, then navigate
     *      to the default tabRootUrl
     */
    select: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['ionTabButtonClick', ['$event.detail.tab']]
        }], outlet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['outlet', { read: IonRouterOutlet, static: false }]
        }], tabBar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [IonTabBar, { static: false }]
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IonBackButtonDelegate, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: 'ion-back-button',
                inputs: ['defaultHref', 'routerAnimation']
            }]
    }], function () { return [{ type: IonRouterOutlet, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }] }, { type: NavController }, { type: Config }]; }, { 
    /**
     * @internal
     */
    onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['click', ['$event']]
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NavDelegate, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: 'ion-nav'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }, { type: AngularDelegate }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RouterLinkDelegate, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[routerLink]',
                inputs: ['routerDirection', 'routerAnimation']
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"] }, { type: NavController }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }] }]; }, { 
    /**
     * @internal
     */
    onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['click', ['$event']]
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](VirtualFooter, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{ selector: '[virtualFooter]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](VirtualHeader, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{ selector: '[virtualHeader]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](VirtualItem, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{ selector: '[virtualItem]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IonVirtualScroll, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'ion-virtual-scroll',
                template: '<ng-content></ng-content>',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                inputs: [
                    'approxItemHeight',
                    'approxHeaderHeight',
                    'approxFooterHeight',
                    'headerFn',
                    'footerFn',
                    'items',
                    'itemHeight',
                    'headerHeight',
                    'footerHeight',
                    'trackBy'
                ]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }]; }, { itmTmp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [VirtualItem, { static: false }]
        }], hdrTmp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [VirtualHeader, { static: false }]
        }], ftrTmp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [VirtualFooter, { static: false }]
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ActionSheetController, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AlertController, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LoadingController, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MenuController, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PickerController, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ModalController, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: AngularDelegate }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PopoverController, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: AngularDelegate }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ToastController, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DomController, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AnimationController, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GestureController, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](IonicModule, { declarations: function () { return [IonApp, IonAvatar, IonBackButton, IonBackdrop, IonBadge, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCheckbox, IonChip, IonCol, IonContent, IonDatetime, IonFab, IonFabButton, IonFabList, IonFooter, IonGrid, IonHeader, IonIcon, IonImg, IonInfiniteScroll, IonInfiniteScrollContent, IonInput, IonItem, IonItemDivider, IonItemGroup, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonListHeader, IonMenu, IonMenuButton, IonMenuToggle, IonNav, IonNavLink, IonNote, IonProgressBar, IonRadio, IonRadioGroup, IonRange, IonRefresher, IonRefresherContent, IonReorder, IonReorderGroup, IonRippleEffect, IonRow, IonSearchbar, IonSegment, IonSegmentButton, IonSelect, IonSelectOption, IonSkeletonText, IonSlide, IonSlides, IonSpinner, IonSplitPane, IonTabBar, IonTabButton, IonText, IonTextarea, IonThumbnail, IonToggle, IonToolbar, IonTitle, IonTabs, BooleanValueAccessor, NumericValueAccessor, RadioValueAccessor, SelectValueAccessor, TextValueAccessor, IonRouterOutlet, IonBackButtonDelegate, NavDelegate, RouterLinkDelegate, VirtualFooter, VirtualHeader, VirtualItem, IonVirtualScroll]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]]; }, exports: function () { return [IonApp, IonAvatar, IonBackButton, IonBackdrop, IonBadge, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCheckbox, IonChip, IonCol, IonContent, IonDatetime, IonFab, IonFabButton, IonFabList, IonFooter, IonGrid, IonHeader, IonIcon, IonImg, IonInfiniteScroll, IonInfiniteScrollContent, IonInput, IonItem, IonItemDivider, IonItemGroup, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonListHeader, IonMenu, IonMenuButton, IonMenuToggle, IonNav, IonNavLink, IonNote, IonProgressBar, IonRadio, IonRadioGroup, IonRange, IonRefresher, IonRefresherContent, IonReorder, IonReorderGroup, IonRippleEffect, IonRow, IonSearchbar, IonSegment, IonSegmentButton, IonSelect, IonSelectOption, IonSkeletonText, IonSlide, IonSlides, IonSpinner, IonSplitPane, IonTabBar, IonTabButton, IonText, IonTextarea, IonThumbnail, IonToggle, IonToolbar, IonTitle, IonTabs, BooleanValueAccessor, NumericValueAccessor, RadioValueAccessor, SelectValueAccessor, TextValueAccessor, IonRouterOutlet, IonBackButtonDelegate, NavDelegate, RouterLinkDelegate, VirtualFooter, VirtualHeader, VirtualItem, IonVirtualScroll]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IonicModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: DECLARATIONS,
                exports: DECLARATIONS,
                providers: [AngularDelegate, ModalController, PopoverController],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]]
            }]
    }], null, null); })();

// DIRECTIVES

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ionic-angular.js.map

/***/ }),

/***/ "wEJo":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-7a8b7a1c.js ***!
  \*************************************************************/
/*! exports provided: B, C, H, N, a, b, c, d, e, f, g, h, i, j, k, p, r, s, w */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return Build; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return CSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return Host; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return NAMESPACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return promiseResolve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return bootstrapLazy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return writeTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return doc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return createEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return readTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return forceUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return getAssetPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return plt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return registerInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return setMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return win; });
const NAMESPACE = 'ionic';

let scopeId;
let contentRef;
let hostTagName;
let useNativeShadowDom = false;
let checkSlotFallbackVisibility = false;
let checkSlotRelocate = false;
let isSvgMode = false;
let queuePending = false;
const win = typeof window !== 'undefined' ? window : {};
const CSS = win.CSS ;
const doc = win.document || { head: {} };
const plt = {
    $flags$: 0,
    $resourcesUrl$: '',
    jmp: h => h(),
    raf: h => requestAnimationFrame(h),
    ael: (el, eventName, listener, opts) => el.addEventListener(eventName, listener, opts),
    rel: (el, eventName, listener, opts) => el.removeEventListener(eventName, listener, opts),
    ce: (eventName, opts) => new CustomEvent(eventName, opts),
};
const supportsShadow = /*@__PURE__*/ (() => (doc.head.attachShadow + '').indexOf('[native') > -1)() ;
const promiseResolve = (v) => Promise.resolve(v);
const supportsConstructibleStylesheets = /*@__PURE__*/ (() => {
        try {
            new CSSStyleSheet();
            return typeof (new CSSStyleSheet()).replace === 'function';
        }
        catch (e) { }
        return false;
    })()
    ;
const addHostEventListeners = (elm, hostRef, listeners, attachParentListeners) => {
    if (listeners) {
        listeners.map(([flags, name, method]) => {
            const target = getHostListenerTarget(elm, flags) ;
            const handler = hostListenerProxy(hostRef, method);
            const opts = hostListenerOpts(flags);
            plt.ael(target, name, handler, opts);
            (hostRef.$rmListeners$ = hostRef.$rmListeners$ || []).push(() => plt.rel(target, name, handler, opts));
        });
    }
};
const hostListenerProxy = (hostRef, methodName) => (ev) => {
    try {
        {
            if (hostRef.$flags$ & 256 /* isListenReady */) {
                // instance is ready, let's call it's member method for this event
                hostRef.$lazyInstance$[methodName](ev);
            }
            else {
                (hostRef.$queuedListeners$ = hostRef.$queuedListeners$ || []).push([methodName, ev]);
            }
        }
    }
    catch (e) {
        consoleError(e);
    }
};
const getHostListenerTarget = (elm, flags) => {
    if (flags & 4 /* TargetDocument */)
        return doc;
    if (flags & 8 /* TargetWindow */)
        return win;
    if (flags & 16 /* TargetBody */)
        return doc.body;
    return elm;
};
// prettier-ignore
const hostListenerOpts = (flags) => (flags & 2 /* Capture */) !== 0;
const CONTENT_REF_ID = 'r';
const ORG_LOCATION_ID = 'o';
const SLOT_NODE_ID = 's';
const TEXT_NODE_ID = 't';
const HYDRATE_ID = 's-id';
const HYDRATED_STYLE_ID = 'sty-id';
const HYDRATE_CHILD_ID = 'c-id';
const HYDRATED_CSS = '{visibility:hidden}.hydrated{visibility:inherit}';
const XLINK_NS = 'http://www.w3.org/1999/xlink';
const createTime = (fnName, tagName = '') => {
    {
        return () => {
            return;
        };
    }
};
const uniqueTime = (key, measureText) => {
    {
        return () => {
            return;
        };
    }
};
const rootAppliedStyles = new WeakMap();
const registerStyle = (scopeId, cssText, allowCS) => {
    let style = styles.get(scopeId);
    if (supportsConstructibleStylesheets && allowCS) {
        style = (style || new CSSStyleSheet());
        style.replace(cssText);
    }
    else {
        style = cssText;
    }
    styles.set(scopeId, style);
};
const addStyle = (styleContainerNode, cmpMeta, mode, hostElm) => {
    let scopeId = getScopeId(cmpMeta, mode);
    let style = styles.get(scopeId);
    // if an element is NOT connected then getRootNode() will return the wrong root node
    // so the fallback is to always use the document for the root node in those cases
    styleContainerNode = styleContainerNode.nodeType === 11 /* DocumentFragment */ ? styleContainerNode : doc;
    if (style) {
        if (typeof style === 'string') {
            styleContainerNode = styleContainerNode.head || styleContainerNode;
            let appliedStyles = rootAppliedStyles.get(styleContainerNode);
            let styleElm;
            if (!appliedStyles) {
                rootAppliedStyles.set(styleContainerNode, (appliedStyles = new Set()));
            }
            if (!appliedStyles.has(scopeId)) {
                if (styleContainerNode.host && (styleElm = styleContainerNode.querySelector(`[${HYDRATED_STYLE_ID}="${scopeId}"]`))) {
                    // This is only happening on native shadow-dom, do not needs CSS var shim
                    styleElm.innerHTML = style;
                }
                else {
                    if (plt.$cssShim$) {
                        styleElm = plt.$cssShim$.createHostStyle(hostElm, scopeId, style, !!(cmpMeta.$flags$ & 10 /* needsScopedEncapsulation */));
                        const newScopeId = styleElm['s-sc'];
                        if (newScopeId) {
                            scopeId = newScopeId;
                            // we don't want to add this styleID to the appliedStyles Set
                            // since the cssVarShim might need to apply several different
                            // stylesheets for the same component
                            appliedStyles = null;
                        }
                    }
                    else {
                        styleElm = doc.createElement('style');
                        styleElm.innerHTML = style;
                    }
                    styleContainerNode.insertBefore(styleElm, styleContainerNode.querySelector('link'));
                }
                if (appliedStyles) {
                    appliedStyles.add(scopeId);
                }
            }
        }
        else if (!styleContainerNode.adoptedStyleSheets.includes(style)) {
            styleContainerNode.adoptedStyleSheets = [...styleContainerNode.adoptedStyleSheets, style];
        }
    }
    return scopeId;
};
const attachStyles = (hostRef) => {
    const cmpMeta = hostRef.$cmpMeta$;
    const elm = hostRef.$hostElement$;
    const flags = cmpMeta.$flags$;
    const endAttachStyles = createTime('attachStyles', cmpMeta.$tagName$);
    const scopeId = addStyle(supportsShadow && elm.shadowRoot ? elm.shadowRoot : elm.getRootNode(), cmpMeta, hostRef.$modeName$, elm);
    if (flags & 10 /* needsScopedEncapsulation */) {
        // only required when we're NOT using native shadow dom (slot)
        // or this browser doesn't support native shadow dom
        // and this host element was NOT created with SSR
        // let's pick out the inner content for slot projection
        // create a node to represent where the original
        // content was first placed, which is useful later on
        // DOM WRITE!!
        elm['s-sc'] = scopeId;
        elm.classList.add(scopeId + '-h');
        if (flags & 2 /* scopedCssEncapsulation */) {
            elm.classList.add(scopeId + '-s');
        }
    }
    endAttachStyles();
};
const getScopeId = (cmp, mode) => 'sc-' + (mode && cmp.$flags$ & 32 /* hasMode */ ? cmp.$tagName$ + '-' + mode : cmp.$tagName$);
const convertScopedToShadow = (css) => css.replace(/\/\*!@([^\/]+)\*\/[^\{]+\{/g, '$1{');
// Private
const computeMode = (elm) => modeResolutionChain.map(h => h(elm)).find(m => !!m);
// Public
const setMode = (handler) => modeResolutionChain.push(handler);
const getMode = (ref) => getHostRef(ref).$modeName$;
/**
 * Default style mode id
 */
/**
 * Reusable empty obj/array
 * Don't add values to these!!
 */
const EMPTY_OBJ = {};
/**
 * Namespaces
 */
const SVG_NS = 'http://www.w3.org/2000/svg';
const HTML_NS = 'http://www.w3.org/1999/xhtml';
const isDef = (v) => v != null;
const isComplexType = (o) => {
    // https://jsperf.com/typeof-fn-object/5
    o = typeof o;
    return o === 'object' || o === 'function';
};
/**
 * Production h() function based on Preact by
 * Jason Miller (@developit)
 * Licensed under the MIT License
 * https://github.com/developit/preact/blob/master/LICENSE
 *
 * Modified for Stencil's compiler and vdom
 */
// const stack: any[] = [];
// export function h(nodeName: string | d.FunctionalComponent, vnodeData: d.PropsType, child?: d.ChildType): d.VNode;
// export function h(nodeName: string | d.FunctionalComponent, vnodeData: d.PropsType, ...children: d.ChildType[]): d.VNode;
const h = (nodeName, vnodeData, ...children) => {
    let child = null;
    let key = null;
    let slotName = null;
    let simple = false;
    let lastSimple = false;
    let vNodeChildren = [];
    const walk = (c) => {
        for (let i = 0; i < c.length; i++) {
            child = c[i];
            if (Array.isArray(child)) {
                walk(child);
            }
            else if (child != null && typeof child !== 'boolean') {
                if ((simple = typeof nodeName !== 'function' && !isComplexType(child))) {
                    child = String(child);
                }
                if (simple && lastSimple) {
                    // If the previous child was simple (string), we merge both
                    vNodeChildren[vNodeChildren.length - 1].$text$ += child;
                }
                else {
                    // Append a new vNode, if it's text, we create a text vNode
                    vNodeChildren.push(simple ? newVNode(null, child) : child);
                }
                lastSimple = simple;
            }
        }
    };
    walk(children);
    if (vnodeData) {
        // normalize class / classname attributes
        if (vnodeData.key) {
            key = vnodeData.key;
        }
        if (vnodeData.name) {
            slotName = vnodeData.name;
        }
        {
            const classData = vnodeData.className || vnodeData.class;
            if (classData) {
                vnodeData.class =
                    typeof classData !== 'object'
                        ? classData
                        : Object.keys(classData)
                            .filter(k => classData[k])
                            .join(' ');
            }
        }
    }
    if (typeof nodeName === 'function') {
        // nodeName is a functional component
        return nodeName(vnodeData === null ? {} : vnodeData, vNodeChildren, vdomFnUtils);
    }
    const vnode = newVNode(nodeName, null);
    vnode.$attrs$ = vnodeData;
    if (vNodeChildren.length > 0) {
        vnode.$children$ = vNodeChildren;
    }
    {
        vnode.$key$ = key;
    }
    {
        vnode.$name$ = slotName;
    }
    return vnode;
};
const newVNode = (tag, text) => {
    const vnode = {
        $flags$: 0,
        $tag$: tag,
        $text$: text,
        $elm$: null,
        $children$: null,
    };
    {
        vnode.$attrs$ = null;
    }
    {
        vnode.$key$ = null;
    }
    {
        vnode.$name$ = null;
    }
    return vnode;
};
const Host = {};
const isHost = (node) => node && node.$tag$ === Host;
const vdomFnUtils = {
    forEach: (children, cb) => children.map(convertToPublic).forEach(cb),
    map: (children, cb) => children.map(convertToPublic).map(cb).map(convertToPrivate),
};
const convertToPublic = (node) => ({
    vattrs: node.$attrs$,
    vchildren: node.$children$,
    vkey: node.$key$,
    vname: node.$name$,
    vtag: node.$tag$,
    vtext: node.$text$,
});
const convertToPrivate = (node) => {
    if (typeof node.vtag === 'function') {
        const vnodeData = Object.assign({}, node.vattrs);
        if (node.vkey) {
            vnodeData.key = node.vkey;
        }
        if (node.vname) {
            vnodeData.name = node.vname;
        }
        return h(node.vtag, vnodeData, ...(node.vchildren || []));
    }
    const vnode = newVNode(node.vtag, node.vtext);
    vnode.$attrs$ = node.vattrs;
    vnode.$children$ = node.vchildren;
    vnode.$key$ = node.vkey;
    vnode.$name$ = node.vname;
    return vnode;
};
/**
 * Production setAccessor() function based on Preact by
 * Jason Miller (@developit)
 * Licensed under the MIT License
 * https://github.com/developit/preact/blob/master/LICENSE
 *
 * Modified for Stencil's compiler and vdom
 */
const setAccessor = (elm, memberName, oldValue, newValue, isSvg, flags) => {
    if (oldValue !== newValue) {
        let isProp = isMemberInElement(elm, memberName);
        let ln = memberName.toLowerCase();
        if (memberName === 'class') {
            const classList = elm.classList;
            const oldClasses = parseClassList(oldValue);
            const newClasses = parseClassList(newValue);
            classList.remove(...oldClasses.filter(c => c && !newClasses.includes(c)));
            classList.add(...newClasses.filter(c => c && !oldClasses.includes(c)));
        }
        else if (memberName === 'style') {
            // update style attribute, css properties and values
            {
                for (const prop in oldValue) {
                    if (!newValue || newValue[prop] == null) {
                        if (prop.includes('-')) {
                            elm.style.removeProperty(prop);
                        }
                        else {
                            elm.style[prop] = '';
                        }
                    }
                }
            }
            for (const prop in newValue) {
                if (!oldValue || newValue[prop] !== oldValue[prop]) {
                    if (prop.includes('-')) {
                        elm.style.setProperty(prop, newValue[prop]);
                    }
                    else {
                        elm.style[prop] = newValue[prop];
                    }
                }
            }
        }
        else if (memberName === 'key')
            ;
        else if (memberName === 'ref') {
            // minifier will clean this up
            if (newValue) {
                newValue(elm);
            }
        }
        else if ((!isProp ) && memberName[0] === 'o' && memberName[1] === 'n') {
            // Event Handlers
            // so if the member name starts with "on" and the 3rd characters is
            // a capital letter, and it's not already a member on the element,
            // then we're assuming it's an event listener
            if (memberName[2] === '-') {
                // on- prefixed events
                // allows to be explicit about the dom event to listen without any magic
                // under the hood:
                // <my-cmp on-click> // listens for "click"
                // <my-cmp on-Click> // listens for "Click"
                // <my-cmp on-ionChange> // listens for "ionChange"
                // <my-cmp on-EVENTS> // listens for "EVENTS"
                memberName = memberName.slice(3);
            }
            else if (isMemberInElement(win, ln)) {
                // standard event
                // the JSX attribute could have been "onMouseOver" and the
                // member name "onmouseover" is on the window's prototype
                // so let's add the listener "mouseover", which is all lowercased
                memberName = ln.slice(2);
            }
            else {
                // custom event
                // the JSX attribute could have been "onMyCustomEvent"
                // so let's trim off the "on" prefix and lowercase the first character
                // and add the listener "myCustomEvent"
                // except for the first character, we keep the event name case
                memberName = ln[2] + memberName.slice(3);
            }
            if (oldValue) {
                plt.rel(elm, memberName, oldValue, false);
            }
            if (newValue) {
                plt.ael(elm, memberName, newValue, false);
            }
        }
        else {
            // Set property if it exists and it's not a SVG
            const isComplex = isComplexType(newValue);
            if ((isProp || (isComplex && newValue !== null)) && !isSvg) {
                try {
                    if (!elm.tagName.includes('-')) {
                        let n = newValue == null ? '' : newValue;
                        // Workaround for Safari, moving the <input> caret when re-assigning the same valued
                        if (memberName === 'list') {
                            isProp = false;
                            // tslint:disable-next-line: triple-equals
                        }
                        else if (oldValue == null || elm[memberName] != n) {
                            elm[memberName] = n;
                        }
                    }
                    else {
                        elm[memberName] = newValue;
                    }
                }
                catch (e) { }
            }
            /**
             * Need to manually update attribute if:
             * - memberName is not an attribute
             * - if we are rendering the host element in order to reflect attribute
             * - if it's a SVG, since properties might not work in <svg>
             * - if the newValue is null/undefined or 'false'.
             */
            let xlink = false;
            {
                if (ln !== (ln = ln.replace(/^xlink\:?/, ''))) {
                    memberName = ln;
                    xlink = true;
                }
            }
            if (newValue == null || newValue === false) {
                if (newValue !== false || elm.getAttribute(memberName) === '') {
                    if (xlink) {
                        elm.removeAttributeNS(XLINK_NS, memberName);
                    }
                    else {
                        elm.removeAttribute(memberName);
                    }
                }
            }
            else if ((!isProp || flags & 4 /* isHost */ || isSvg) && !isComplex) {
                newValue = newValue === true ? '' : newValue;
                if (xlink) {
                    elm.setAttributeNS(XLINK_NS, memberName, newValue);
                }
                else {
                    elm.setAttribute(memberName, newValue);
                }
            }
        }
    }
};
const parseClassListRegex = /\s/;
const parseClassList = (value) => (!value ? [] : value.split(parseClassListRegex));
const updateElement = (oldVnode, newVnode, isSvgMode, memberName) => {
    // if the element passed in is a shadow root, which is a document fragment
    // then we want to be adding attrs/props to the shadow root's "host" element
    // if it's not a shadow root, then we add attrs/props to the same element
    const elm = newVnode.$elm$.nodeType === 11 /* DocumentFragment */ && newVnode.$elm$.host ? newVnode.$elm$.host : newVnode.$elm$;
    const oldVnodeAttrs = (oldVnode && oldVnode.$attrs$) || EMPTY_OBJ;
    const newVnodeAttrs = newVnode.$attrs$ || EMPTY_OBJ;
    {
        // remove attributes no longer present on the vnode by setting them to undefined
        for (memberName in oldVnodeAttrs) {
            if (!(memberName in newVnodeAttrs)) {
                setAccessor(elm, memberName, oldVnodeAttrs[memberName], undefined, isSvgMode, newVnode.$flags$);
            }
        }
    }
    // add new & update changed attributes
    for (memberName in newVnodeAttrs) {
        setAccessor(elm, memberName, oldVnodeAttrs[memberName], newVnodeAttrs[memberName], isSvgMode, newVnode.$flags$);
    }
};
const createElm = (oldParentVNode, newParentVNode, childIndex, parentElm) => {
    // tslint:disable-next-line: prefer-const
    let newVNode = newParentVNode.$children$[childIndex];
    let i = 0;
    let elm;
    let childNode;
    let oldVNode;
    if (!useNativeShadowDom) {
        // remember for later we need to check to relocate nodes
        checkSlotRelocate = true;
        if (newVNode.$tag$ === 'slot') {
            if (scopeId) {
                // scoped css needs to add its scoped id to the parent element
                parentElm.classList.add(scopeId + '-s');
            }
            newVNode.$flags$ |= newVNode.$children$
                ? // slot element has fallback content
                    2 /* isSlotFallback */
                : // slot element does not have fallback content
                    1 /* isSlotReference */;
        }
    }
    if (newVNode.$text$ !== null) {
        // create text node
        elm = newVNode.$elm$ = doc.createTextNode(newVNode.$text$);
    }
    else if (newVNode.$flags$ & 1 /* isSlotReference */) {
        // create a slot reference node
        elm = newVNode.$elm$ = doc.createTextNode('');
    }
    else {
        if (!isSvgMode) {
            isSvgMode = newVNode.$tag$ === 'svg';
        }
        // create element
        elm = newVNode.$elm$ = (doc.createElementNS(isSvgMode ? SVG_NS : HTML_NS, newVNode.$flags$ & 2 /* isSlotFallback */ ? 'slot-fb' : newVNode.$tag$)
            );
        if (isSvgMode && newVNode.$tag$ === 'foreignObject') {
            isSvgMode = false;
        }
        // add css classes, attrs, props, listeners, etc.
        {
            updateElement(null, newVNode, isSvgMode);
        }
        if (isDef(scopeId) && elm['s-si'] !== scopeId) {
            // if there is a scopeId and this is the initial render
            // then let's add the scopeId as a css class
            elm.classList.add((elm['s-si'] = scopeId));
        }
        if (newVNode.$children$) {
            for (i = 0; i < newVNode.$children$.length; ++i) {
                // create the node
                childNode = createElm(oldParentVNode, newVNode, i, elm);
                // return node could have been null
                if (childNode) {
                    // append our new node
                    elm.appendChild(childNode);
                }
            }
        }
        {
            if (newVNode.$tag$ === 'svg') {
                // Only reset the SVG context when we're exiting <svg> element
                isSvgMode = false;
            }
            else if (elm.tagName === 'foreignObject') {
                // Reenter SVG context when we're exiting <foreignObject> element
                isSvgMode = true;
            }
        }
    }
    {
        elm['s-hn'] = hostTagName;
        if (newVNode.$flags$ & (2 /* isSlotFallback */ | 1 /* isSlotReference */)) {
            // remember the content reference comment
            elm['s-sr'] = true;
            // remember the content reference comment
            elm['s-cr'] = contentRef;
            // remember the slot name, or empty string for default slot
            elm['s-sn'] = newVNode.$name$ || '';
            // check if we've got an old vnode for this slot
            oldVNode = oldParentVNode && oldParentVNode.$children$ && oldParentVNode.$children$[childIndex];
            if (oldVNode && oldVNode.$tag$ === newVNode.$tag$ && oldParentVNode.$elm$) {
                // we've got an old slot vnode and the wrapper is being replaced
                // so let's move the old slot content back to it's original location
                putBackInOriginalLocation(oldParentVNode.$elm$, false);
            }
        }
    }
    return elm;
};
const putBackInOriginalLocation = (parentElm, recursive) => {
    plt.$flags$ |= 1 /* isTmpDisconnected */;
    const oldSlotChildNodes = parentElm.childNodes;
    for (let i = oldSlotChildNodes.length - 1; i >= 0; i--) {
        const childNode = oldSlotChildNodes[i];
        if (childNode['s-hn'] !== hostTagName && childNode['s-ol']) {
            // // this child node in the old element is from another component
            // // remove this node from the old slot's parent
            // childNode.remove();
            // and relocate it back to it's original location
            parentReferenceNode(childNode).insertBefore(childNode, referenceNode(childNode));
            // remove the old original location comment entirely
            // later on the patch function will know what to do
            // and move this to the correct spot in need be
            childNode['s-ol'].remove();
            childNode['s-ol'] = undefined;
            checkSlotRelocate = true;
        }
        if (recursive) {
            putBackInOriginalLocation(childNode, recursive);
        }
    }
    plt.$flags$ &= ~1 /* isTmpDisconnected */;
};
const addVnodes = (parentElm, before, parentVNode, vnodes, startIdx, endIdx) => {
    let containerElm = ((parentElm['s-cr'] && parentElm['s-cr'].parentNode) || parentElm);
    let childNode;
    if (containerElm.shadowRoot && containerElm.tagName === hostTagName) {
        containerElm = containerElm.shadowRoot;
    }
    for (; startIdx <= endIdx; ++startIdx) {
        if (vnodes[startIdx]) {
            childNode = createElm(null, parentVNode, startIdx, parentElm);
            if (childNode) {
                vnodes[startIdx].$elm$ = childNode;
                containerElm.insertBefore(childNode, referenceNode(before) );
            }
        }
    }
};
const removeVnodes = (vnodes, startIdx, endIdx, vnode, elm) => {
    for (; startIdx <= endIdx; ++startIdx) {
        if ((vnode = vnodes[startIdx])) {
            elm = vnode.$elm$;
            callNodeRefs(vnode);
            {
                // we're removing this element
                // so it's possible we need to show slot fallback content now
                checkSlotFallbackVisibility = true;
                if (elm['s-ol']) {
                    // remove the original location comment
                    elm['s-ol'].remove();
                }
                else {
                    // it's possible that child nodes of the node
                    // that's being removed are slot nodes
                    putBackInOriginalLocation(elm, true);
                }
            }
            // remove the vnode's element from the dom
            elm.remove();
        }
    }
};
const updateChildren = (parentElm, oldCh, newVNode, newCh) => {
    let oldStartIdx = 0;
    let newStartIdx = 0;
    let idxInOld = 0;
    let i = 0;
    let oldEndIdx = oldCh.length - 1;
    let oldStartVnode = oldCh[0];
    let oldEndVnode = oldCh[oldEndIdx];
    let newEndIdx = newCh.length - 1;
    let newStartVnode = newCh[0];
    let newEndVnode = newCh[newEndIdx];
    let node;
    let elmToMove;
    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
        if (oldStartVnode == null) {
            // Vnode might have been moved left
            oldStartVnode = oldCh[++oldStartIdx];
        }
        else if (oldEndVnode == null) {
            oldEndVnode = oldCh[--oldEndIdx];
        }
        else if (newStartVnode == null) {
            newStartVnode = newCh[++newStartIdx];
        }
        else if (newEndVnode == null) {
            newEndVnode = newCh[--newEndIdx];
        }
        else if (isSameVnode(oldStartVnode, newStartVnode)) {
            patch(oldStartVnode, newStartVnode);
            oldStartVnode = oldCh[++oldStartIdx];
            newStartVnode = newCh[++newStartIdx];
        }
        else if (isSameVnode(oldEndVnode, newEndVnode)) {
            patch(oldEndVnode, newEndVnode);
            oldEndVnode = oldCh[--oldEndIdx];
            newEndVnode = newCh[--newEndIdx];
        }
        else if (isSameVnode(oldStartVnode, newEndVnode)) {
            // Vnode moved right
            if ((oldStartVnode.$tag$ === 'slot' || newEndVnode.$tag$ === 'slot')) {
                putBackInOriginalLocation(oldStartVnode.$elm$.parentNode, false);
            }
            patch(oldStartVnode, newEndVnode);
            parentElm.insertBefore(oldStartVnode.$elm$, oldEndVnode.$elm$.nextSibling);
            oldStartVnode = oldCh[++oldStartIdx];
            newEndVnode = newCh[--newEndIdx];
        }
        else if (isSameVnode(oldEndVnode, newStartVnode)) {
            // Vnode moved left
            if ((oldStartVnode.$tag$ === 'slot' || newEndVnode.$tag$ === 'slot')) {
                putBackInOriginalLocation(oldEndVnode.$elm$.parentNode, false);
            }
            patch(oldEndVnode, newStartVnode);
            parentElm.insertBefore(oldEndVnode.$elm$, oldStartVnode.$elm$);
            oldEndVnode = oldCh[--oldEndIdx];
            newStartVnode = newCh[++newStartIdx];
        }
        else {
            // createKeyToOldIdx
            idxInOld = -1;
            {
                for (i = oldStartIdx; i <= oldEndIdx; ++i) {
                    if (oldCh[i] && oldCh[i].$key$ !== null && oldCh[i].$key$ === newStartVnode.$key$) {
                        idxInOld = i;
                        break;
                    }
                }
            }
            if (idxInOld >= 0) {
                elmToMove = oldCh[idxInOld];
                if (elmToMove.$tag$ !== newStartVnode.$tag$) {
                    node = createElm(oldCh && oldCh[newStartIdx], newVNode, idxInOld, parentElm);
                }
                else {
                    patch(elmToMove, newStartVnode);
                    oldCh[idxInOld] = undefined;
                    node = elmToMove.$elm$;
                }
                newStartVnode = newCh[++newStartIdx];
            }
            else {
                // new element
                node = createElm(oldCh && oldCh[newStartIdx], newVNode, newStartIdx, parentElm);
                newStartVnode = newCh[++newStartIdx];
            }
            if (node) {
                {
                    parentReferenceNode(oldStartVnode.$elm$).insertBefore(node, referenceNode(oldStartVnode.$elm$));
                }
            }
        }
    }
    if (oldStartIdx > oldEndIdx) {
        addVnodes(parentElm, newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].$elm$, newVNode, newCh, newStartIdx, newEndIdx);
    }
    else if (newStartIdx > newEndIdx) {
        removeVnodes(oldCh, oldStartIdx, oldEndIdx);
    }
};
const isSameVnode = (vnode1, vnode2) => {
    // compare if two vnode to see if they're "technically" the same
    // need to have the same element tag, and same key to be the same
    if (vnode1.$tag$ === vnode2.$tag$) {
        if (vnode1.$tag$ === 'slot') {
            return vnode1.$name$ === vnode2.$name$;
        }
        {
            return vnode1.$key$ === vnode2.$key$;
        }
    }
    return false;
};
const referenceNode = (node) => {
    // this node was relocated to a new location in the dom
    // because of some other component's slot
    // but we still have an html comment in place of where
    // it's original location was according to it's original vdom
    return (node && node['s-ol']) || node;
};
const parentReferenceNode = (node) => (node['s-ol'] ? node['s-ol'] : node).parentNode;
const patch = (oldVNode, newVNode) => {
    const elm = (newVNode.$elm$ = oldVNode.$elm$);
    const oldChildren = oldVNode.$children$;
    const newChildren = newVNode.$children$;
    const tag = newVNode.$tag$;
    const text = newVNode.$text$;
    let defaultHolder;
    if (text === null) {
        {
            // test if we're rendering an svg element, or still rendering nodes inside of one
            // only add this to the when the compiler sees we're using an svg somewhere
            isSvgMode = tag === 'svg' ? true : tag === 'foreignObject' ? false : isSvgMode;
        }
        // element node
        {
            if (tag === 'slot')
                ;
            else {
                // either this is the first render of an element OR it's an update
                // AND we already know it's possible it could have changed
                // this updates the element's css classes, attrs, props, listeners, etc.
                updateElement(oldVNode, newVNode, isSvgMode);
            }
        }
        if (oldChildren !== null && newChildren !== null) {
            // looks like there's child vnodes for both the old and new vnodes
            updateChildren(elm, oldChildren, newVNode, newChildren);
        }
        else if (newChildren !== null) {
            // no old child vnodes, but there are new child vnodes to add
            if (oldVNode.$text$ !== null) {
                // the old vnode was text, so be sure to clear it out
                elm.textContent = '';
            }
            // add the new vnode children
            addVnodes(elm, null, newVNode, newChildren, 0, newChildren.length - 1);
        }
        else if (oldChildren !== null) {
            // no new child vnodes, but there are old child vnodes to remove
            removeVnodes(oldChildren, 0, oldChildren.length - 1);
        }
        if (isSvgMode && tag === 'svg') {
            isSvgMode = false;
        }
    }
    else if ((defaultHolder = elm['s-cr'])) {
        // this element has slotted content
        defaultHolder.parentNode.textContent = text;
    }
    else if (oldVNode.$text$ !== text) {
        // update the text content for the text only vnode
        // and also only if the text is different than before
        elm.data = text;
    }
};
const updateFallbackSlotVisibility = (elm) => {
    // tslint:disable-next-line: prefer-const
    let childNodes = elm.childNodes;
    let childNode;
    let i;
    let ilen;
    let j;
    let slotNameAttr;
    let nodeType;
    for (i = 0, ilen = childNodes.length; i < ilen; i++) {
        childNode = childNodes[i];
        if (childNode.nodeType === 1 /* ElementNode */) {
            if (childNode['s-sr']) {
                // this is a slot fallback node
                // get the slot name for this slot reference node
                slotNameAttr = childNode['s-sn'];
                // by default always show a fallback slot node
                // then hide it if there are other slots in the light dom
                childNode.hidden = false;
                for (j = 0; j < ilen; j++) {
                    nodeType = childNodes[j].nodeType;
                    if (childNodes[j]['s-hn'] !== childNode['s-hn'] || slotNameAttr !== '') {
                        // this sibling node is from a different component OR is a named fallback slot node
                        if (nodeType === 1 /* ElementNode */ && slotNameAttr === childNodes[j].getAttribute('slot')) {
                            childNode.hidden = true;
                            break;
                        }
                    }
                    else {
                        // this is a default fallback slot node
                        // any element or text node (with content)
                        // should hide the default fallback slot node
                        if (nodeType === 1 /* ElementNode */ ||
                            (nodeType === 3 /* TextNode */ && childNodes[j].textContent.trim() !== '')) {
                            childNode.hidden = true;
                            break;
                        }
                    }
                }
            }
            // keep drilling down
            updateFallbackSlotVisibility(childNode);
        }
    }
};
const relocateNodes = [];
const relocateSlotContent = (elm) => {
    // tslint:disable-next-line: prefer-const
    let childNode;
    let node;
    let hostContentNodes;
    let slotNameAttr;
    let relocateNodeData;
    let j;
    let i = 0;
    let childNodes = elm.childNodes;
    let ilen = childNodes.length;
    for (; i < ilen; i++) {
        childNode = childNodes[i];
        if (childNode['s-sr'] && (node = childNode['s-cr']) && node.parentNode) {
            // first got the content reference comment node
            // then we got it's parent, which is where all the host content is in now
            hostContentNodes = node.parentNode.childNodes;
            slotNameAttr = childNode['s-sn'];
            for (j = hostContentNodes.length - 1; j >= 0; j--) {
                node = hostContentNodes[j];
                if (!node['s-cn'] && !node['s-nr'] && node['s-hn'] !== childNode['s-hn']) {
                    // let's do some relocating to its new home
                    // but never relocate a content reference node
                    // that is suppose to always represent the original content location
                    if (isNodeLocatedInSlot(node, slotNameAttr)) {
                        // it's possible we've already decided to relocate this node
                        relocateNodeData = relocateNodes.find(r => r.$nodeToRelocate$ === node);
                        // made some changes to slots
                        // let's make sure we also double check
                        // fallbacks are correctly hidden or shown
                        checkSlotFallbackVisibility = true;
                        node['s-sn'] = node['s-sn'] || slotNameAttr;
                        if (relocateNodeData) {
                            // previously we never found a slot home for this node
                            // but turns out we did, so let's remember it now
                            relocateNodeData.$slotRefNode$ = childNode;
                        }
                        else {
                            // add to our list of nodes to relocate
                            relocateNodes.push({
                                $slotRefNode$: childNode,
                                $nodeToRelocate$: node,
                            });
                        }
                        if (node['s-sr']) {
                            relocateNodes.map(relocateNode => {
                                if (isNodeLocatedInSlot(relocateNode.$nodeToRelocate$, node['s-sn'])) {
                                    relocateNodeData = relocateNodes.find(r => r.$nodeToRelocate$ === node);
                                    if (relocateNodeData && !relocateNode.$slotRefNode$) {
                                        relocateNode.$slotRefNode$ = relocateNodeData.$slotRefNode$;
                                    }
                                }
                            });
                        }
                    }
                    else if (!relocateNodes.some(r => r.$nodeToRelocate$ === node)) {
                        // so far this element does not have a slot home, not setting slotRefNode on purpose
                        // if we never find a home for this element then we'll need to hide it
                        relocateNodes.push({
                            $nodeToRelocate$: node,
                        });
                    }
                }
            }
        }
        if (childNode.nodeType === 1 /* ElementNode */) {
            relocateSlotContent(childNode);
        }
    }
};
const isNodeLocatedInSlot = (nodeToRelocate, slotNameAttr) => {
    if (nodeToRelocate.nodeType === 1 /* ElementNode */) {
        if (nodeToRelocate.getAttribute('slot') === null && slotNameAttr === '') {
            return true;
        }
        if (nodeToRelocate.getAttribute('slot') === slotNameAttr) {
            return true;
        }
        return false;
    }
    if (nodeToRelocate['s-sn'] === slotNameAttr) {
        return true;
    }
    return slotNameAttr === '';
};
const callNodeRefs = (vNode) => {
    {
        vNode.$attrs$ && vNode.$attrs$.ref && vNode.$attrs$.ref(null);
        vNode.$children$ && vNode.$children$.map(callNodeRefs);
    }
};
const renderVdom = (hostRef, renderFnResults) => {
    const hostElm = hostRef.$hostElement$;
    const cmpMeta = hostRef.$cmpMeta$;
    const oldVNode = hostRef.$vnode$ || newVNode(null, null);
    const rootVnode = isHost(renderFnResults) ? renderFnResults : h(null, null, renderFnResults);
    hostTagName = hostElm.tagName;
    if (cmpMeta.$attrsToReflect$) {
        rootVnode.$attrs$ = rootVnode.$attrs$ || {};
        cmpMeta.$attrsToReflect$.map(([propName, attribute]) => (rootVnode.$attrs$[attribute] = hostElm[propName]));
    }
    rootVnode.$tag$ = null;
    rootVnode.$flags$ |= 4 /* isHost */;
    hostRef.$vnode$ = rootVnode;
    rootVnode.$elm$ = oldVNode.$elm$ = (hostElm.shadowRoot || hostElm );
    {
        scopeId = hostElm['s-sc'];
    }
    {
        contentRef = hostElm['s-cr'];
        useNativeShadowDom = supportsShadow && (cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) !== 0;
        // always reset
        checkSlotFallbackVisibility = false;
    }
    // synchronous patch
    patch(oldVNode, rootVnode);
    {
        // while we're moving nodes around existing nodes, temporarily disable
        // the disconnectCallback from working
        plt.$flags$ |= 1 /* isTmpDisconnected */;
        if (checkSlotRelocate) {
            relocateSlotContent(rootVnode.$elm$);
            let relocateData;
            let nodeToRelocate;
            let orgLocationNode;
            let parentNodeRef;
            let insertBeforeNode;
            let refNode;
            let i = 0;
            for (; i < relocateNodes.length; i++) {
                relocateData = relocateNodes[i];
                nodeToRelocate = relocateData.$nodeToRelocate$;
                if (!nodeToRelocate['s-ol']) {
                    // add a reference node marking this node's original location
                    // keep a reference to this node for later lookups
                    orgLocationNode = doc.createTextNode('');
                    orgLocationNode['s-nr'] = nodeToRelocate;
                    nodeToRelocate.parentNode.insertBefore((nodeToRelocate['s-ol'] = orgLocationNode), nodeToRelocate);
                }
            }
            for (i = 0; i < relocateNodes.length; i++) {
                relocateData = relocateNodes[i];
                nodeToRelocate = relocateData.$nodeToRelocate$;
                if (relocateData.$slotRefNode$) {
                    // by default we're just going to insert it directly
                    // after the slot reference node
                    parentNodeRef = relocateData.$slotRefNode$.parentNode;
                    insertBeforeNode = relocateData.$slotRefNode$.nextSibling;
                    orgLocationNode = nodeToRelocate['s-ol'];
                    while ((orgLocationNode = orgLocationNode.previousSibling)) {
                        refNode = orgLocationNode['s-nr'];
                        if (refNode && refNode['s-sn'] === nodeToRelocate['s-sn'] && parentNodeRef === refNode.parentNode) {
                            refNode = refNode.nextSibling;
                            if (!refNode || !refNode['s-nr']) {
                                insertBeforeNode = refNode;
                                break;
                            }
                        }
                    }
                    if ((!insertBeforeNode && parentNodeRef !== nodeToRelocate.parentNode) || nodeToRelocate.nextSibling !== insertBeforeNode) {
                        // we've checked that it's worth while to relocate
                        // since that the node to relocate
                        // has a different next sibling or parent relocated
                        if (nodeToRelocate !== insertBeforeNode) {
                            if (!nodeToRelocate['s-hn'] && nodeToRelocate['s-ol']) {
                                // probably a component in the index.html that doesn't have it's hostname set
                                nodeToRelocate['s-hn'] = nodeToRelocate['s-ol'].parentNode.nodeName;
                            }
                            // add it back to the dom but in its new home
                            parentNodeRef.insertBefore(nodeToRelocate, insertBeforeNode);
                        }
                    }
                }
                else {
                    // this node doesn't have a slot home to go to, so let's hide it
                    if (nodeToRelocate.nodeType === 1 /* ElementNode */) {
                        nodeToRelocate.hidden = true;
                    }
                }
            }
        }
        if (checkSlotFallbackVisibility) {
            updateFallbackSlotVisibility(rootVnode.$elm$);
        }
        // done moving nodes around
        // allow the disconnect callback to work again
        plt.$flags$ &= ~1 /* isTmpDisconnected */;
        // always reset
        relocateNodes.length = 0;
    }
};
const getElement = (ref) => (getHostRef(ref).$hostElement$ );
const createEvent = (ref, name, flags) => {
    const elm = getElement(ref);
    return {
        emit: (detail) => {
            return emitEvent(elm, name, {
                bubbles: !!(flags & 4 /* Bubbles */),
                composed: !!(flags & 2 /* Composed */),
                cancelable: !!(flags & 1 /* Cancellable */),
                detail,
            });
        },
    };
};
const emitEvent = (elm, name, opts) => {
    const ev = plt.ce(name, opts);
    elm.dispatchEvent(ev);
    return ev;
};
const attachToAncestor = (hostRef, ancestorComponent) => {
    if (ancestorComponent && !hostRef.$onRenderResolve$ && ancestorComponent['s-p']) {
        ancestorComponent['s-p'].push(new Promise(r => (hostRef.$onRenderResolve$ = r)));
    }
};
const scheduleUpdate = (hostRef, isInitialLoad) => {
    {
        hostRef.$flags$ |= 16 /* isQueuedForUpdate */;
    }
    if (hostRef.$flags$ & 4 /* isWaitingForChildren */) {
        hostRef.$flags$ |= 512 /* needsRerender */;
        return;
    }
    attachToAncestor(hostRef, hostRef.$ancestorComponent$);
    // there is no ancestor component or the ancestor component
    // has already fired off its lifecycle update then
    // fire off the initial update
    const dispatch = () => dispatchHooks(hostRef, isInitialLoad);
    return writeTask(dispatch) ;
};
const dispatchHooks = (hostRef, isInitialLoad) => {
    const endSchedule = createTime('scheduleUpdate', hostRef.$cmpMeta$.$tagName$);
    const instance = hostRef.$lazyInstance$ ;
    let promise;
    if (isInitialLoad) {
        {
            hostRef.$flags$ |= 256 /* isListenReady */;
            if (hostRef.$queuedListeners$) {
                hostRef.$queuedListeners$.map(([methodName, event]) => safeCall(instance, methodName, event));
                hostRef.$queuedListeners$ = null;
            }
        }
        {
            promise = safeCall(instance, 'componentWillLoad');
        }
    }
    {
        promise = then(promise, () => safeCall(instance, 'componentWillRender'));
    }
    endSchedule();
    return then(promise, () => updateComponent(hostRef, instance, isInitialLoad));
};
const updateComponent = async (hostRef, instance, isInitialLoad) => {
    // updateComponent
    const elm = hostRef.$hostElement$;
    const endUpdate = createTime('update', hostRef.$cmpMeta$.$tagName$);
    const rc = elm['s-rc'];
    if (isInitialLoad) {
        // DOM WRITE!
        attachStyles(hostRef);
    }
    const endRender = createTime('render', hostRef.$cmpMeta$.$tagName$);
    {
        callRender(hostRef, instance);
    }
    if (plt.$cssShim$) {
        plt.$cssShim$.updateHost(elm);
    }
    if (rc) {
        // ok, so turns out there are some child host elements
        // waiting on this parent element to load
        // let's fire off all update callbacks waiting
        rc.map(cb => cb());
        elm['s-rc'] = undefined;
    }
    endRender();
    endUpdate();
    {
        const childrenPromises = elm['s-p'];
        const postUpdate = () => postUpdateComponent(hostRef);
        if (childrenPromises.length === 0) {
            postUpdate();
        }
        else {
            Promise.all(childrenPromises).then(postUpdate);
            hostRef.$flags$ |= 4 /* isWaitingForChildren */;
            childrenPromises.length = 0;
        }
    }
};
const callRender = (hostRef, instance, elm) => {
    try {
        instance = instance.render && instance.render();
        {
            hostRef.$flags$ &= ~16 /* isQueuedForUpdate */;
        }
        {
            hostRef.$flags$ |= 2 /* hasRendered */;
        }
        {
            {
                // looks like we've got child nodes to render into this host element
                // or we need to update the css class/attrs on the host element
                // DOM WRITE!
                {
                    renderVdom(hostRef, instance);
                }
            }
        }
    }
    catch (e) {
        consoleError(e, hostRef.$hostElement$);
    }
    return null;
};
const postUpdateComponent = (hostRef) => {
    const tagName = hostRef.$cmpMeta$.$tagName$;
    const elm = hostRef.$hostElement$;
    const endPostUpdate = createTime('postUpdate', tagName);
    const instance = hostRef.$lazyInstance$ ;
    const ancestorComponent = hostRef.$ancestorComponent$;
    if (!(hostRef.$flags$ & 64 /* hasLoadedComponent */)) {
        hostRef.$flags$ |= 64 /* hasLoadedComponent */;
        {
            // DOM WRITE!
            addHydratedFlag(elm);
        }
        {
            safeCall(instance, 'componentDidLoad');
        }
        endPostUpdate();
        {
            hostRef.$onReadyResolve$(elm);
            if (!ancestorComponent) {
                appDidLoad();
            }
        }
    }
    else {
        {
            safeCall(instance, 'componentDidUpdate');
        }
        endPostUpdate();
    }
    {
        hostRef.$onInstanceResolve$(elm);
    }
    // load events fire from bottom to top
    // the deepest elements load first then bubbles up
    {
        if (hostRef.$onRenderResolve$) {
            hostRef.$onRenderResolve$();
            hostRef.$onRenderResolve$ = undefined;
        }
        if (hostRef.$flags$ & 512 /* needsRerender */) {
            nextTick(() => scheduleUpdate(hostRef, false));
        }
        hostRef.$flags$ &= ~(4 /* isWaitingForChildren */ | 512 /* needsRerender */);
    }
    // ( •_•)
    // ( •_•)>⌐■-■
    // (⌐■_■)
};
const forceUpdate = (ref) => {
    {
        const hostRef = getHostRef(ref);
        const isConnected = hostRef.$hostElement$.isConnected;
        if (isConnected && (hostRef.$flags$ & (2 /* hasRendered */ | 16 /* isQueuedForUpdate */)) === 2 /* hasRendered */) {
            scheduleUpdate(hostRef, false);
        }
        // Returns "true" when the forced update was successfully scheduled
        return isConnected;
    }
};
const appDidLoad = (who) => {
    // on appload
    // we have finish the first big initial render
    {
        addHydratedFlag(doc.documentElement);
    }
    nextTick(() => emitEvent(win, 'appload', { detail: { namespace: NAMESPACE } }));
};
const safeCall = (instance, method, arg) => {
    if (instance && instance[method]) {
        try {
            return instance[method](arg);
        }
        catch (e) {
            consoleError(e);
        }
    }
    return undefined;
};
const then = (promise, thenFn) => {
    return promise && promise.then ? promise.then(thenFn) : thenFn();
};
const addHydratedFlag = (elm) => (elm.classList.add('hydrated') );
const initializeClientHydrate = (hostElm, tagName, hostId, hostRef) => {
    const endHydrate = createTime('hydrateClient', tagName);
    const shadowRoot = hostElm.shadowRoot;
    const childRenderNodes = [];
    const slotNodes = [];
    const shadowRootNodes = shadowRoot ? [] : null;
    const vnode = (hostRef.$vnode$ = newVNode(tagName, null));
    if (!plt.$orgLocNodes$) {
        initializeDocumentHydrate(doc.body, (plt.$orgLocNodes$ = new Map()));
    }
    hostElm[HYDRATE_ID] = hostId;
    hostElm.removeAttribute(HYDRATE_ID);
    clientHydrate(vnode, childRenderNodes, slotNodes, shadowRootNodes, hostElm, hostElm, hostId);
    childRenderNodes.map(c => {
        const orgLocationId = c.$hostId$ + '.' + c.$nodeId$;
        const orgLocationNode = plt.$orgLocNodes$.get(orgLocationId);
        const node = c.$elm$;
        if (orgLocationNode && supportsShadow && orgLocationNode['s-en'] === '') {
            orgLocationNode.parentNode.insertBefore(node, orgLocationNode.nextSibling);
        }
        if (!shadowRoot) {
            node['s-hn'] = tagName;
            if (orgLocationNode) {
                node['s-ol'] = orgLocationNode;
                node['s-ol']['s-nr'] = node;
            }
        }
        plt.$orgLocNodes$.delete(orgLocationId);
    });
    if (shadowRoot) {
        shadowRootNodes.map(shadowRootNode => {
            if (shadowRootNode) {
                shadowRoot.appendChild(shadowRootNode);
            }
        });
    }
    endHydrate();
};
const clientHydrate = (parentVNode, childRenderNodes, slotNodes, shadowRootNodes, hostElm, node, hostId) => {
    let childNodeType;
    let childIdSplt;
    let childVNode;
    let i;
    if (node.nodeType === 1 /* ElementNode */) {
        childNodeType = node.getAttribute(HYDRATE_CHILD_ID);
        if (childNodeType) {
            // got the node data from the element's attribute
            // `${hostId}.${nodeId}.${depth}.${index}`
            childIdSplt = childNodeType.split('.');
            if (childIdSplt[0] === hostId || childIdSplt[0] === '0') {
                childVNode = {
                    $flags$: 0,
                    $hostId$: childIdSplt[0],
                    $nodeId$: childIdSplt[1],
                    $depth$: childIdSplt[2],
                    $index$: childIdSplt[3],
                    $tag$: node.tagName.toLowerCase(),
                    $elm$: node,
                    $attrs$: null,
                    $children$: null,
                    $key$: null,
                    $name$: null,
                    $text$: null,
                };
                childRenderNodes.push(childVNode);
                node.removeAttribute(HYDRATE_CHILD_ID);
                // this is a new child vnode
                // so ensure its parent vnode has the vchildren array
                if (!parentVNode.$children$) {
                    parentVNode.$children$ = [];
                }
                // add our child vnode to a specific index of the vnode's children
                parentVNode.$children$[childVNode.$index$] = childVNode;
                // this is now the new parent vnode for all the next child checks
                parentVNode = childVNode;
                if (shadowRootNodes && childVNode.$depth$ === '0') {
                    shadowRootNodes[childVNode.$index$] = childVNode.$elm$;
                }
            }
        }
        // recursively drill down, end to start so we can remove nodes
        for (i = node.childNodes.length - 1; i >= 0; i--) {
            clientHydrate(parentVNode, childRenderNodes, slotNodes, shadowRootNodes, hostElm, node.childNodes[i], hostId);
        }
        if (node.shadowRoot) {
            // keep drilling down through the shadow root nodes
            for (i = node.shadowRoot.childNodes.length - 1; i >= 0; i--) {
                clientHydrate(parentVNode, childRenderNodes, slotNodes, shadowRootNodes, hostElm, node.shadowRoot.childNodes[i], hostId);
            }
        }
    }
    else if (node.nodeType === 8 /* CommentNode */) {
        // `${COMMENT_TYPE}.${hostId}.${nodeId}.${depth}.${index}`
        childIdSplt = node.nodeValue.split('.');
        if (childIdSplt[1] === hostId || childIdSplt[1] === '0') {
            // comment node for either the host id or a 0 host id
            childNodeType = childIdSplt[0];
            childVNode = {
                $flags$: 0,
                $hostId$: childIdSplt[1],
                $nodeId$: childIdSplt[2],
                $depth$: childIdSplt[3],
                $index$: childIdSplt[4],
                $elm$: node,
                $attrs$: null,
                $children$: null,
                $key$: null,
                $name$: null,
                $tag$: null,
                $text$: null,
            };
            if (childNodeType === TEXT_NODE_ID) {
                childVNode.$elm$ = node.nextSibling;
                if (childVNode.$elm$ && childVNode.$elm$.nodeType === 3 /* TextNode */) {
                    childVNode.$text$ = childVNode.$elm$.textContent;
                    childRenderNodes.push(childVNode);
                    // remove the text comment since it's no longer needed
                    node.remove();
                    if (!parentVNode.$children$) {
                        parentVNode.$children$ = [];
                    }
                    parentVNode.$children$[childVNode.$index$] = childVNode;
                    if (shadowRootNodes && childVNode.$depth$ === '0') {
                        shadowRootNodes[childVNode.$index$] = childVNode.$elm$;
                    }
                }
            }
            else if (childVNode.$hostId$ === hostId) {
                // this comment node is specifcally for this host id
                if (childNodeType === SLOT_NODE_ID) {
                    // `${SLOT_NODE_ID}.${hostId}.${nodeId}.${depth}.${index}.${slotName}`;
                    childVNode.$tag$ = 'slot';
                    if (childIdSplt[5]) {
                        node['s-sn'] = childVNode.$name$ = childIdSplt[5];
                    }
                    else {
                        node['s-sn'] = '';
                    }
                    node['s-sr'] = true;
                    if (shadowRootNodes) {
                        // browser support shadowRoot and this is a shadow dom component
                        // create an actual slot element
                        childVNode.$elm$ = doc.createElement(childVNode.$tag$);
                        if (childVNode.$name$) {
                            // add the slot name attribute
                            childVNode.$elm$.setAttribute('name', childVNode.$name$);
                        }
                        // insert the new slot element before the slot comment
                        node.parentNode.insertBefore(childVNode.$elm$, node);
                        // remove the slot comment since it's not needed for shadow
                        node.remove();
                        if (childVNode.$depth$ === '0') {
                            shadowRootNodes[childVNode.$index$] = childVNode.$elm$;
                        }
                    }
                    slotNodes.push(childVNode);
                    if (!parentVNode.$children$) {
                        parentVNode.$children$ = [];
                    }
                    parentVNode.$children$[childVNode.$index$] = childVNode;
                }
                else if (childNodeType === CONTENT_REF_ID) {
                    // `${CONTENT_REF_ID}.${hostId}`;
                    if (shadowRootNodes) {
                        // remove the content ref comment since it's not needed for shadow
                        node.remove();
                    }
                    else {
                        hostElm['s-cr'] = node;
                        node['s-cn'] = true;
                    }
                }
            }
        }
    }
    else if (parentVNode && parentVNode.$tag$ === 'style') {
        const vnode = newVNode(null, node.textContent);
        vnode.$elm$ = node;
        vnode.$index$ = '0';
        parentVNode.$children$ = [vnode];
    }
};
const initializeDocumentHydrate = (node, orgLocNodes) => {
    if (node.nodeType === 1 /* ElementNode */) {
        let i = 0;
        for (; i < node.childNodes.length; i++) {
            initializeDocumentHydrate(node.childNodes[i], orgLocNodes);
        }
        if (node.shadowRoot) {
            for (i = 0; i < node.shadowRoot.childNodes.length; i++) {
                initializeDocumentHydrate(node.shadowRoot.childNodes[i], orgLocNodes);
            }
        }
    }
    else if (node.nodeType === 8 /* CommentNode */) {
        const childIdSplt = node.nodeValue.split('.');
        if (childIdSplt[0] === ORG_LOCATION_ID) {
            orgLocNodes.set(childIdSplt[1] + '.' + childIdSplt[2], node);
            node.nodeValue = '';
            // useful to know if the original location is
            // the root light-dom of a shadow dom component
            node['s-en'] = childIdSplt[3];
        }
    }
};
const parsePropertyValue = (propValue, propType) => {
    // ensure this value is of the correct prop type
    if (propValue != null && !isComplexType(propValue)) {
        if (propType & 4 /* Boolean */) {
            // per the HTML spec, any string value means it is a boolean true value
            // but we'll cheat here and say that the string "false" is the boolean false
            return propValue === 'false' ? false : propValue === '' || !!propValue;
        }
        if (propType & 2 /* Number */) {
            // force it to be a number
            return parseFloat(propValue);
        }
        if (propType & 1 /* String */) {
            // could have been passed as a number or boolean
            // but we still want it as a string
            return String(propValue);
        }
        // redundant return here for better minification
        return propValue;
    }
    // not sure exactly what type we want
    // so no need to change to a different type
    return propValue;
};
const getValue = (ref, propName) => getHostRef(ref).$instanceValues$.get(propName);
const setValue = (ref, propName, newVal, cmpMeta) => {
    // check our new property value against our internal value
    const hostRef = getHostRef(ref);
    const elm = hostRef.$hostElement$ ;
    const oldVal = hostRef.$instanceValues$.get(propName);
    const flags = hostRef.$flags$;
    const instance = hostRef.$lazyInstance$ ;
    newVal = parsePropertyValue(newVal, cmpMeta.$members$[propName][0]);
    if ((!(flags & 8 /* isConstructingInstance */) || oldVal === undefined) && newVal !== oldVal) {
        // gadzooks! the property's value has changed!!
        // set our new value!
        hostRef.$instanceValues$.set(propName, newVal);
        if (instance) {
            // get an array of method names of watch functions to call
            if (cmpMeta.$watchers$ && flags & 128 /* isWatchReady */) {
                const watchMethods = cmpMeta.$watchers$[propName];
                if (watchMethods) {
                    // this instance is watching for when this property changed
                    watchMethods.map(watchMethodName => {
                        try {
                            // fire off each of the watch methods that are watching this property
                            instance[watchMethodName](newVal, oldVal, propName);
                        }
                        catch (e) {
                            consoleError(e, elm);
                        }
                    });
                }
            }
            if ((flags & (2 /* hasRendered */ | 16 /* isQueuedForUpdate */)) === 2 /* hasRendered */) {
                // looks like this value actually changed, so we've got work to do!
                // but only if we've already rendered, otherwise just chill out
                // queue that we need to do an update, but don't worry about queuing
                // up millions cuz this function ensures it only runs once
                scheduleUpdate(hostRef, false);
            }
        }
    }
};
const proxyComponent = (Cstr, cmpMeta, flags) => {
    if (cmpMeta.$members$) {
        if (Cstr.watchers) {
            cmpMeta.$watchers$ = Cstr.watchers;
        }
        // It's better to have a const than two Object.entries()
        const members = Object.entries(cmpMeta.$members$);
        const prototype = Cstr.prototype;
        members.map(([memberName, [memberFlags]]) => {
            if ((memberFlags & 31 /* Prop */ || ((flags & 2 /* proxyState */) && memberFlags & 32 /* State */))) {
                // proxyComponent - prop
                Object.defineProperty(prototype, memberName, {
                    get() {
                        // proxyComponent, get value
                        return getValue(this, memberName);
                    },
                    set(newValue) {
                        // proxyComponent, set value
                        setValue(this, memberName, newValue, cmpMeta);
                    },
                    configurable: true,
                    enumerable: true,
                });
            }
            else if (flags & 1 /* isElementConstructor */ && memberFlags & 64 /* Method */) {
                // proxyComponent - method
                Object.defineProperty(prototype, memberName, {
                    value(...args) {
                        const ref = getHostRef(this);
                        return ref.$onInstancePromise$.then(() => ref.$lazyInstance$[memberName](...args));
                    },
                });
            }
        });
        if ((flags & 1 /* isElementConstructor */)) {
            const attrNameToPropName = new Map();
            prototype.attributeChangedCallback = function (attrName, _oldValue, newValue) {
                plt.jmp(() => {
                    const propName = attrNameToPropName.get(attrName);
                    this[propName] = newValue === null && typeof this[propName] === 'boolean' ? false : newValue;
                });
            };
            // create an array of attributes to observe
            // and also create a map of html attribute name to js property name
            Cstr.observedAttributes = members
                .filter(([_, m]) => m[0] & 15 /* HasAttribute */) // filter to only keep props that should match attributes
                .map(([propName, m]) => {
                const attrName = m[1] || propName;
                attrNameToPropName.set(attrName, propName);
                if (m[0] & 512 /* ReflectAttr */) {
                    cmpMeta.$attrsToReflect$.push([propName, attrName]);
                }
                return attrName;
            });
        }
    }
    return Cstr;
};
const initializeComponent = async (elm, hostRef, cmpMeta, hmrVersionId, Cstr) => {
    // initializeComponent
    if ((hostRef.$flags$ & 32 /* hasInitializedComponent */) === 0) {
        {
            // we haven't initialized this element yet
            hostRef.$flags$ |= 32 /* hasInitializedComponent */;
            // lazy loaded components
            // request the component's implementation to be
            // wired up with the host element
            Cstr = loadModule(cmpMeta);
            if (Cstr.then) {
                // Await creates a micro-task avoid if possible
                const endLoad = uniqueTime();
                Cstr = await Cstr;
                endLoad();
            }
            if (!Cstr.isProxied) {
                // we'eve never proxied this Constructor before
                // let's add the getters/setters to its prototype before
                // the first time we create an instance of the implementation
                {
                    cmpMeta.$watchers$ = Cstr.watchers;
                }
                proxyComponent(Cstr, cmpMeta, 2 /* proxyState */);
                Cstr.isProxied = true;
            }
            const endNewInstance = createTime('createInstance', cmpMeta.$tagName$);
            // ok, time to construct the instance
            // but let's keep track of when we start and stop
            // so that the getters/setters don't incorrectly step on data
            {
                hostRef.$flags$ |= 8 /* isConstructingInstance */;
            }
            // construct the lazy-loaded component implementation
            // passing the hostRef is very important during
            // construction in order to directly wire together the
            // host element and the lazy-loaded instance
            try {
                new Cstr(hostRef);
            }
            catch (e) {
                consoleError(e);
            }
            {
                hostRef.$flags$ &= ~8 /* isConstructingInstance */;
            }
            {
                hostRef.$flags$ |= 128 /* isWatchReady */;
            }
            endNewInstance();
            fireConnectedCallback(hostRef.$lazyInstance$);
        }
        if (Cstr.style) {
            // this component has styles but we haven't registered them yet
            let style = Cstr.style;
            if (typeof style !== 'string') {
                style = style[(hostRef.$modeName$ = computeMode(elm))];
            }
            const scopeId = getScopeId(cmpMeta, hostRef.$modeName$);
            if (!styles.has(scopeId)) {
                const endRegisterStyles = createTime('registerStyles', cmpMeta.$tagName$);
                if (cmpMeta.$flags$ & 8 /* needsShadowDomShim */) {
                    style = await __webpack_require__.e(/*! import() | shadow-css-a3f00b33-js */ "shadow-css-a3f00b33-js").then(__webpack_require__.bind(null, /*! ./shadow-css-a3f00b33.js */ "JmUR")).then(m => m.scopeCss(style, scopeId, false));
                }
                registerStyle(scopeId, style, !!(cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */));
                endRegisterStyles();
            }
        }
    }
    // we've successfully created a lazy instance
    const ancestorComponent = hostRef.$ancestorComponent$;
    const schedule = () => scheduleUpdate(hostRef, true);
    if (ancestorComponent && ancestorComponent['s-rc']) {
        // this is the intial load and this component it has an ancestor component
        // but the ancestor component has NOT fired its will update lifecycle yet
        // so let's just cool our jets and wait for the ancestor to continue first
        // this will get fired off when the ancestor component
        // finally gets around to rendering its lazy self
        // fire off the initial update
        ancestorComponent['s-rc'].push(schedule);
    }
    else {
        schedule();
    }
};
const fireConnectedCallback = (instance) => {
    {
        safeCall(instance, 'connectedCallback');
    }
};
const connectedCallback = (elm) => {
    if ((plt.$flags$ & 1 /* isTmpDisconnected */) === 0) {
        const hostRef = getHostRef(elm);
        const cmpMeta = hostRef.$cmpMeta$;
        const endConnected = createTime('connectedCallback', cmpMeta.$tagName$);
        if (!(hostRef.$flags$ & 1 /* hasConnected */)) {
            // first time this component has connected
            hostRef.$flags$ |= 1 /* hasConnected */;
            let hostId;
            {
                hostId = elm.getAttribute(HYDRATE_ID);
                if (hostId) {
                    if (supportsShadow && cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) {
                        const scopeId = addStyle(elm.shadowRoot, cmpMeta, elm.getAttribute('s-mode')) ;
                        elm.classList.remove(scopeId + '-h', scopeId + '-s');
                    }
                    initializeClientHydrate(elm, cmpMeta.$tagName$, hostId, hostRef);
                }
            }
            if (!hostId) {
                // initUpdate
                // if the slot polyfill is required we'll need to put some nodes
                // in here to act as original content anchors as we move nodes around
                // host element has been connected to the DOM
                if ((cmpMeta.$flags$ & (4 /* hasSlotRelocation */ | 8 /* needsShadowDomShim */))) {
                    setContentReference(elm);
                }
            }
            {
                // find the first ancestor component (if there is one) and register
                // this component as one of the actively loading child components for its ancestor
                let ancestorComponent = elm;
                while ((ancestorComponent = ancestorComponent.parentNode || ancestorComponent.host)) {
                    // climb up the ancestors looking for the first
                    // component that hasn't finished its lifecycle update yet
                    if ((ancestorComponent.nodeType === 1 /* ElementNode */ && ancestorComponent.hasAttribute('s-id') && ancestorComponent['s-p']) ||
                        ancestorComponent['s-p']) {
                        // we found this components first ancestor component
                        // keep a reference to this component's ancestor component
                        attachToAncestor(hostRef, (hostRef.$ancestorComponent$ = ancestorComponent));
                        break;
                    }
                }
            }
            // Lazy properties
            // https://developers.google.com/web/fundamentals/web-components/best-practices#lazy-properties
            if (cmpMeta.$members$) {
                Object.entries(cmpMeta.$members$).map(([memberName, [memberFlags]]) => {
                    if (memberFlags & 31 /* Prop */ && elm.hasOwnProperty(memberName)) {
                        const value = elm[memberName];
                        delete elm[memberName];
                        elm[memberName] = value;
                    }
                });
            }
            {
                // connectedCallback, taskQueue, initialLoad
                // angular sets attribute AFTER connectCallback
                // https://github.com/angular/angular/issues/18909
                // https://github.com/angular/angular/issues/19940
                nextTick(() => initializeComponent(elm, hostRef, cmpMeta));
            }
        }
        else {
            // not the first time this has connected
            // reattach any event listeners to the host
            // since they would have been removed when disconnected
            addHostEventListeners(elm, hostRef, cmpMeta.$listeners$);
            // fire off connectedCallback() on component instance
            fireConnectedCallback(hostRef.$lazyInstance$);
        }
        endConnected();
    }
};
const setContentReference = (elm) => {
    // only required when we're NOT using native shadow dom (slot)
    // or this browser doesn't support native shadow dom
    // and this host element was NOT created with SSR
    // let's pick out the inner content for slot projection
    // create a node to represent where the original
    // content was first placed, which is useful later on
    const contentRefElm = (elm['s-cr'] = doc.createComment(''));
    contentRefElm['s-cn'] = true;
    elm.insertBefore(contentRefElm, elm.firstChild);
};
const disconnectedCallback = (elm) => {
    if ((plt.$flags$ & 1 /* isTmpDisconnected */) === 0) {
        const hostRef = getHostRef(elm);
        const instance = hostRef.$lazyInstance$ ;
        {
            if (hostRef.$rmListeners$) {
                hostRef.$rmListeners$.map(rmListener => rmListener());
                hostRef.$rmListeners$ = undefined;
            }
        }
        // clear CSS var-shim tracking
        if (plt.$cssShim$) {
            plt.$cssShim$.removeHost(elm);
        }
        {
            safeCall(instance, 'disconnectedCallback');
        }
    }
};
const bootstrapLazy = (lazyBundles, options = {}) => {
    const endBootstrap = createTime();
    const cmpTags = [];
    const exclude = options.exclude || [];
    const customElements = win.customElements;
    const head = doc.head;
    const metaCharset = /*@__PURE__*/ head.querySelector('meta[charset]');
    const visibilityStyle = /*@__PURE__*/ doc.createElement('style');
    const deferredConnectedCallbacks = [];
    const styles = /*@__PURE__*/ doc.querySelectorAll(`[${HYDRATED_STYLE_ID}]`);
    let appLoadFallback;
    let isBootstrapping = true;
    let i = 0;
    Object.assign(plt, options);
    plt.$resourcesUrl$ = new URL(options.resourcesUrl || './', doc.baseURI).href;
    {
        // If the app is already hydrated there is not point to disable the
        // async queue. This will improve the first input delay
        plt.$flags$ |= 2 /* appLoaded */;
    }
    {
        for (; i < styles.length; i++) {
            registerStyle(styles[i].getAttribute(HYDRATED_STYLE_ID), convertScopedToShadow(styles[i].innerHTML), true);
        }
    }
    lazyBundles.map(lazyBundle => lazyBundle[1].map(compactMeta => {
        const cmpMeta = {
            $flags$: compactMeta[0],
            $tagName$: compactMeta[1],
            $members$: compactMeta[2],
            $listeners$: compactMeta[3],
        };
        {
            cmpMeta.$members$ = compactMeta[2];
        }
        {
            cmpMeta.$listeners$ = compactMeta[3];
        }
        {
            cmpMeta.$attrsToReflect$ = [];
        }
        {
            cmpMeta.$watchers$ = {};
        }
        if (!supportsShadow && cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) {
            cmpMeta.$flags$ |= 8 /* needsShadowDomShim */;
        }
        const tagName = cmpMeta.$tagName$;
        const HostElement = class extends HTMLElement {
            // StencilLazyHost
            constructor(self) {
                // @ts-ignore
                super(self);
                self = this;
                registerHost(self, cmpMeta);
                if (cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) {
                    // this component is using shadow dom
                    // and this browser supports shadow dom
                    // add the read-only property "shadowRoot" to the host element
                    // adding the shadow root build conditionals to minimize runtime
                    if (supportsShadow) {
                        {
                            self.attachShadow({
                                mode: 'open',
                                delegatesFocus: !!(cmpMeta.$flags$ & 16 /* shadowDelegatesFocus */),
                            });
                        }
                    }
                    else if (!('shadowRoot' in self)) {
                        self.shadowRoot = self;
                    }
                }
            }
            connectedCallback() {
                if (appLoadFallback) {
                    clearTimeout(appLoadFallback);
                    appLoadFallback = null;
                }
                if (isBootstrapping) {
                    // connectedCallback will be processed once all components have been registered
                    deferredConnectedCallbacks.push(this);
                }
                else {
                    plt.jmp(() => connectedCallback(this));
                }
            }
            disconnectedCallback() {
                plt.jmp(() => disconnectedCallback(this));
            }
            componentOnReady() {
                return getHostRef(this).$onReadyPromise$;
            }
        };
        cmpMeta.$lazyBundleId$ = lazyBundle[0];
        if (!exclude.includes(tagName) && !customElements.get(tagName)) {
            cmpTags.push(tagName);
            customElements.define(tagName, proxyComponent(HostElement, cmpMeta, 1 /* isElementConstructor */));
        }
    }));
    {
        visibilityStyle.innerHTML = cmpTags + HYDRATED_CSS;
        visibilityStyle.setAttribute('data-styles', '');
        head.insertBefore(visibilityStyle, metaCharset ? metaCharset.nextSibling : head.firstChild);
    }
    // Process deferred connectedCallbacks now all components have been registered
    isBootstrapping = false;
    if (deferredConnectedCallbacks.length) {
        deferredConnectedCallbacks.map(host => host.connectedCallback());
    }
    else {
        {
            plt.jmp(() => (appLoadFallback = setTimeout(appDidLoad, 30)));
        }
    }
    // Fallback appLoad event
    endBootstrap();
};
const getAssetPath = (path) => {
    const assetUrl = new URL(path, plt.$resourcesUrl$);
    return assetUrl.origin !== win.location.origin ? assetUrl.href : assetUrl.pathname;
};
const hostRefs = new WeakMap();
const getHostRef = (ref) => hostRefs.get(ref);
const registerInstance = (lazyInstance, hostRef) => hostRefs.set((hostRef.$lazyInstance$ = lazyInstance), hostRef);
const registerHost = (elm, cmpMeta) => {
    const hostRef = {
        $flags$: 0,
        $hostElement$: elm,
        $cmpMeta$: cmpMeta,
        $instanceValues$: new Map(),
    };
    {
        hostRef.$onInstancePromise$ = new Promise(r => (hostRef.$onInstanceResolve$ = r));
    }
    {
        hostRef.$onReadyPromise$ = new Promise(r => (hostRef.$onReadyResolve$ = r));
        elm['s-p'] = [];
        elm['s-rc'] = [];
    }
    addHostEventListeners(elm, hostRef, cmpMeta.$listeners$);
    return hostRefs.set(elm, hostRef);
};
const isMemberInElement = (elm, memberName) => memberName in elm;
const consoleError = (e, el) => (0, console.error)(e, el);
const cmpModules = /*@__PURE__*/ new Map();
const loadModule = (cmpMeta, hostRef, hmrVersionId) => {
    // loadModuleImport
    const exportName = cmpMeta.$tagName$.replace(/-/g, '_');
    const bundleId = cmpMeta.$lazyBundleId$;
    const module = cmpModules.get(bundleId) ;
    if (module) {
        return module[exportName];
    }
    return __webpack_require__("kLfG")(`./${bundleId}.entry.js`).then(importedModule => {
        {
            cmpModules.set(bundleId, importedModule);
        }
        return importedModule[exportName];
    }, consoleError);
};
const styles = new Map();
const modeResolutionChain = [];
const queueDomReads = [];
const queueDomWrites = [];
const queueTask = (queue, write) => (cb) => {
    queue.push(cb);
    if (!queuePending) {
        queuePending = true;
        if (write && plt.$flags$ & 4 /* queueSync */) {
            nextTick(flush);
        }
        else {
            plt.raf(flush);
        }
    }
};
const consume = (queue) => {
    for (let i = 0; i < queue.length; i++) {
        try {
            queue[i](performance.now());
        }
        catch (e) {
            consoleError(e);
        }
    }
    queue.length = 0;
};
const flush = () => {
    // always force a bunch of medium callbacks to run, but still have
    // a throttle on how many can run in a certain time
    // DOM READS!!!
    consume(queueDomReads);
    // DOM WRITES!!!
    {
        consume(queueDomWrites);
        if ((queuePending = queueDomReads.length > 0)) {
            // still more to do yet, but we've run out of time
            // let's let this thing cool off and try again in the next tick
            plt.raf(flush);
        }
    }
};
const nextTick = /*@__PURE__*/ (cb) => promiseResolve().then(cb);
const readTask = /*@__PURE__*/ queueTask(queueDomReads, false);
const writeTask = /*@__PURE__*/ queueTask(queueDomWrites, true);
const Build = {
    isDev: false,
    isBrowser: true,
    isServer: false,
    isTesting: false,
};




/***/ }),

/***/ "y08P":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/gesture-controller-31cb6bb9.js ***!
  \**************************************************************************/
/*! exports provided: G */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return GESTURE_CONTROLLER; });
class GestureController {
  constructor() {
    this.gestureId = 0;
    this.requestedStart = new Map();
    this.disabledGestures = new Map();
    this.disabledScroll = new Set();
  }
  /**
   * Creates a gesture delegate based on the GestureConfig passed
   */
  createGesture(config) {
    return new GestureDelegate(this, this.newID(), config.name, config.priority || 0, !!config.disableScroll);
  }
  /**
   * Creates a blocker that will block any other gesture events from firing. Set in the ion-gesture component.
   */
  createBlocker(opts = {}) {
    return new BlockerDelegate(this, this.newID(), opts.disable, !!opts.disableScroll);
  }
  start(gestureName, id, priority) {
    if (!this.canStart(gestureName)) {
      this.requestedStart.delete(id);
      return false;
    }
    this.requestedStart.set(id, priority);
    return true;
  }
  capture(gestureName, id, priority) {
    if (!this.start(gestureName, id, priority)) {
      return false;
    }
    const requestedStart = this.requestedStart;
    let maxPriority = -10000;
    requestedStart.forEach(value => {
      maxPriority = Math.max(maxPriority, value);
    });
    if (maxPriority === priority) {
      this.capturedId = id;
      requestedStart.clear();
      const event = new CustomEvent('ionGestureCaptured', { detail: { gestureName } });
      document.dispatchEvent(event);
      return true;
    }
    requestedStart.delete(id);
    return false;
  }
  release(id) {
    this.requestedStart.delete(id);
    if (this.capturedId === id) {
      this.capturedId = undefined;
    }
  }
  disableGesture(gestureName, id) {
    let set = this.disabledGestures.get(gestureName);
    if (set === undefined) {
      set = new Set();
      this.disabledGestures.set(gestureName, set);
    }
    set.add(id);
  }
  enableGesture(gestureName, id) {
    const set = this.disabledGestures.get(gestureName);
    if (set !== undefined) {
      set.delete(id);
    }
  }
  disableScroll(id) {
    this.disabledScroll.add(id);
    if (this.disabledScroll.size === 1) {
      document.body.classList.add(BACKDROP_NO_SCROLL);
    }
  }
  enableScroll(id) {
    this.disabledScroll.delete(id);
    if (this.disabledScroll.size === 0) {
      document.body.classList.remove(BACKDROP_NO_SCROLL);
    }
  }
  canStart(gestureName) {
    if (this.capturedId !== undefined) {
      // a gesture already captured
      return false;
    }
    if (this.isDisabled(gestureName)) {
      return false;
    }
    return true;
  }
  isCaptured() {
    return this.capturedId !== undefined;
  }
  isScrollDisabled() {
    return this.disabledScroll.size > 0;
  }
  isDisabled(gestureName) {
    const disabled = this.disabledGestures.get(gestureName);
    if (disabled && disabled.size > 0) {
      return true;
    }
    return false;
  }
  newID() {
    this.gestureId++;
    return this.gestureId;
  }
}
class GestureDelegate {
  constructor(ctrl, id, name, priority, disableScroll) {
    this.id = id;
    this.name = name;
    this.disableScroll = disableScroll;
    this.priority = priority * 1000000 + id;
    this.ctrl = ctrl;
  }
  canStart() {
    if (!this.ctrl) {
      return false;
    }
    return this.ctrl.canStart(this.name);
  }
  start() {
    if (!this.ctrl) {
      return false;
    }
    return this.ctrl.start(this.name, this.id, this.priority);
  }
  capture() {
    if (!this.ctrl) {
      return false;
    }
    const captured = this.ctrl.capture(this.name, this.id, this.priority);
    if (captured && this.disableScroll) {
      this.ctrl.disableScroll(this.id);
    }
    return captured;
  }
  release() {
    if (this.ctrl) {
      this.ctrl.release(this.id);
      if (this.disableScroll) {
        this.ctrl.enableScroll(this.id);
      }
    }
  }
  destroy() {
    this.release();
    this.ctrl = undefined;
  }
}
class BlockerDelegate {
  constructor(ctrl, id, disable, disableScroll) {
    this.id = id;
    this.disable = disable;
    this.disableScroll = disableScroll;
    this.ctrl = ctrl;
  }
  block() {
    if (!this.ctrl) {
      return;
    }
    if (this.disable) {
      for (const gesture of this.disable) {
        this.ctrl.disableGesture(gesture, this.id);
      }
    }
    if (this.disableScroll) {
      this.ctrl.disableScroll(this.id);
    }
  }
  unblock() {
    if (!this.ctrl) {
      return;
    }
    if (this.disable) {
      for (const gesture of this.disable) {
        this.ctrl.enableGesture(gesture, this.id);
      }
    }
    if (this.disableScroll) {
      this.ctrl.enableScroll(this.id);
    }
  }
  destroy() {
    this.unblock();
    this.ctrl = undefined;
  }
}
const BACKDROP_NO_SCROLL = 'backdrop-no-scroll';
const GESTURE_CONTROLLER = new GestureController();




/***/ }),

/***/ "ybVP":
/*!*********************************************************!*\
  !*** ./node_modules/@ionic/core/loader/index.es2017.js ***!
  \*********************************************************/
/*! exports provided: applyPolyfills, defineCustomElements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dist_esm_polyfills_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dist/esm/polyfills/index.js */ "b1qR");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyPolyfills", function() { return _dist_esm_polyfills_index_js__WEBPACK_IMPORTED_MODULE_0__["applyPolyfills"]; });

/* harmony import */ var _dist_esm_loader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dist/esm/loader.js */ "lg1s");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defineCustomElements", function() { return _dist_esm_loader_js__WEBPACK_IMPORTED_MODULE_1__["defineCustomElements"]; });






/***/ })

}]);
//# sourceMappingURL=default~shlomit-alerts~shlomit-dashboard~shlomit-hours-report.js.map