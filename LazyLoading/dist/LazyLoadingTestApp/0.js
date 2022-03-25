(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./src/app/feature-module-example/demo-component/demo-component.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/feature-module-example/demo-component/demo-component.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  Demo Component Loaded \n</p>\n"

/***/ }),

/***/ "./src/app/feature-module-example/demo-component/demo-component.component.sass":
/*!*************************************************************************************!*\
  !*** ./src/app/feature-module-example/demo-component/demo-component.component.sass ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmUtbW9kdWxlLWV4YW1wbGUvZGVtby1jb21wb25lbnQvZGVtby1jb21wb25lbnQuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/feature-module-example/demo-component/demo-component.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/feature-module-example/demo-component/demo-component.component.ts ***!
  \***********************************************************************************/
/*! exports provided: DemoComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoComponentComponent", function() { return DemoComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DemoComponentComponent = class DemoComponentComponent {
    constructor() { }
    ngOnInit() {
    }
};
DemoComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-demo-component',
        template: __webpack_require__(/*! ./demo-component.component.html */ "./src/app/feature-module-example/demo-component/demo-component.component.html"),
        styles: [__webpack_require__(/*! ./demo-component.component.sass */ "./src/app/feature-module-example/demo-component/demo-component.component.sass")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], DemoComponentComponent);



/***/ }),

/***/ "./src/app/feature-module-example/feature-module-example-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/feature-module-example/feature-module-example-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: FeatureModuleExampleRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureModuleExampleRoutingModule", function() { return FeatureModuleExampleRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _demo_component_demo_component_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./demo-component/demo-component.component */ "./src/app/feature-module-example/demo-component/demo-component.component.ts");




const routes = [
    { path: 'test', component: _demo_component_demo_component_component__WEBPACK_IMPORTED_MODULE_3__["DemoComponentComponent"] }
];
let FeatureModuleExampleRoutingModule = class FeatureModuleExampleRoutingModule {
};
FeatureModuleExampleRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], FeatureModuleExampleRoutingModule);



/***/ }),

/***/ "./src/app/feature-module-example/feature-module-example.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/feature-module-example/feature-module-example.module.ts ***!
  \*************************************************************************/
/*! exports provided: FeatureModuleExampleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureModuleExampleModule", function() { return FeatureModuleExampleModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _demo_component_demo_component_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./demo-component/demo-component.component */ "./src/app/feature-module-example/demo-component/demo-component.component.ts");
/* harmony import */ var _feature_module_example_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./feature-module-example-routing.module */ "./src/app/feature-module-example/feature-module-example-routing.module.ts");





let FeatureModuleExampleModule = class FeatureModuleExampleModule {
};
FeatureModuleExampleModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_demo_component_demo_component_component__WEBPACK_IMPORTED_MODULE_3__["DemoComponentComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _feature_module_example_routing_module__WEBPACK_IMPORTED_MODULE_4__["FeatureModuleExampleRoutingModule"]
        ]
    })
], FeatureModuleExampleModule);



/***/ })

}]);
//# sourceMappingURL=0.js.map