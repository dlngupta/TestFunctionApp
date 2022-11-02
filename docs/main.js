(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\LakshmiD\Angular\Projects\TestApp\src\main.ts */"zUnb");


/***/ }),

/***/ "1W4x":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared-service.service */ "HU1P");


class RegisterComponent {
    constructor(sharedService) {
        this.sharedService = sharedService;
    }
    ngOnInit() {
    }
    goToLogin() {
        this.sharedService.goToLogin();
    }
    goToLogin1() {
        alert("User Registered successfully ");
        this.sharedService.goToLogin();
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_service_service__WEBPACK_IMPORTED_MODULE_1__["SharedServiceService"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 18, vars: 0, consts: [[1, "login-form"], [1, "content"], [1, "input-field"], ["type", "text", "placeholder", "First Name", "autocomplete", "nope"], ["type", "text", "placeholder", "Last Name", "autocomplete", "nope"], ["type", "password", "placeholder", "Password", "autocomplete", "new-password"], [1, "link", 2, "cursor", "pointer", 3, "click"], [1, "action"], [2, "background", "#2d3b55", "color", "#fff", "border-bottom-left-radius", "0", "border-bottom-right-radius", "4px", 3, "click"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Already have an account ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_a_click_11_listener() { return ctx.goToLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_15_listener() { return ctx.goToLogin1(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["*[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    -webkit-font-smoothing: antialiased;\r\n  }\r\n  \r\n  body[_ngcontent-%COMP%] {\r\n    background: #e35869;\r\n    font-family: 'Rubik', sans-serif;\r\n  }\r\n  \r\n  .login-form[_ngcontent-%COMP%] {\r\n    background: #fff;\r\n    width: 500px;\r\n    margin: 65px auto;\r\n    display: flex;\r\n    flex-direction: column;\r\n    border-radius: 4px;\r\n    box-shadow: 0 2px 25px rgba(0, 0, 0, 0.2);\r\n  }\r\n  \r\n  .login-form[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    padding: 35px 35px 0 35px;\r\n    font-weight: 300;\r\n  }\r\n  \r\n  .login-form[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n    padding: 35px;\r\n    text-align: center;\r\n  }\r\n  \r\n  .login-form[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%] {\r\n    padding: 12px 5px;\r\n  }\r\n  \r\n  .login-form[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    display: block;\r\n    font-family: 'Rubik', sans-serif;\r\n    width: 100%;\r\n    padding: 10px 1px;\r\n    border: 0;\r\n    border-bottom: 1px solid #747474;\r\n    outline: none;\r\n    transition: all .2s;\r\n  }\r\n  \r\n  .login-form[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\r\n    text-transform: uppercase;\r\n  }\r\n  \r\n  .login-form[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\r\n    border-color: #222;\r\n  }\r\n  \r\n  .login-form[_ngcontent-%COMP%]   a.link[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    color: #747474;\r\n    letter-spacing: 0.2px;\r\n    text-transform: uppercase;\r\n    display: inline-block;\r\n    margin-top: 20px;\r\n  }\r\n  \r\n  .login-form[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n  }\r\n  \r\n  .login-form[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    border: none;\r\n    padding: 18px;\r\n    font-family: 'Rubik', sans-serif;\r\n    cursor: pointer;\r\n    text-transform: uppercase;\r\n    background: #e8e9ec;\r\n    color: #777;\r\n    border-bottom-left-radius: 4px;\r\n    border-bottom-right-radius: 0;\r\n    letter-spacing: 0.2px;\r\n    outline: 0;\r\n    transition: all .3s;\r\n  }\r\n  \r\n  .login-form[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n    background: #d8d8d8;\r\n  }\r\n  \r\n  .login-form[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(2) {\r\n    background: #2d3b55;\r\n    color: #fff;\r\n    border-bottom-left-radius: 0;\r\n    border-bottom-right-radius: 4px;\r\n  }\r\n  \r\n  .login-form[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(2):hover {\r\n    background: #3c4d6d;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixtQ0FBbUM7RUFDckM7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsZ0NBQWdDO0VBQ2xDOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixpQkFBaUI7SUFFakIsYUFBYTtJQUdMLHNCQUFzQjtJQUM5QixrQkFBa0I7SUFDbEIseUNBQXlDO0VBQzNDOztFQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLGdCQUFnQjtFQUNsQjs7RUFDQTtJQUNFLGFBQWE7SUFDYixrQkFBa0I7RUFDcEI7O0VBQ0E7SUFDRSxpQkFBaUI7RUFDbkI7O0VBQ0E7SUFDRSxlQUFlO0lBQ2YsY0FBYztJQUNkLGdDQUFnQztJQUNoQyxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLFNBQVM7SUFDVCxnQ0FBZ0M7SUFDaEMsYUFBYTtJQUViLG1CQUFtQjtFQUNyQjs7RUFhQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFDQTtJQUNFLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsZ0JBQWdCO0VBQ2xCOztFQUNBO0lBRUUsYUFBYTtJQUdMLG1CQUFtQjtFQUM3Qjs7RUFDQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLGdDQUFnQztJQUNoQyxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsOEJBQThCO0lBQzlCLDZCQUE2QjtJQUM3QixxQkFBcUI7SUFDckIsVUFBVTtJQUVWLG1CQUFtQjtFQUNyQjs7RUFDQTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFDQTtJQUNFLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsNEJBQTRCO0lBQzVCLCtCQUErQjtFQUNqQzs7RUFDQTtJQUNFLG1CQUFtQjtFQUNyQiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gIH1cclxuICBcclxuICBib2R5IHtcclxuICAgIGJhY2tncm91bmQ6ICNlMzU4Njk7XHJcbiAgICBmb250LWZhbWlseTogJ1J1YmlrJywgc2Fucy1zZXJpZjtcclxuICB9XHJcbiAgXHJcbiAgLmxvZ2luLWZvcm0ge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIG1hcmdpbjogNjVweCBhdXRvO1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggMjVweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgfVxyXG4gIC5sb2dpbi1mb3JtIGgxIHtcclxuICAgIHBhZGRpbmc6IDM1cHggMzVweCAwIDM1cHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gIH1cclxuICAubG9naW4tZm9ybSAuY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAzNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAubG9naW4tZm9ybSAuaW5wdXQtZmllbGQge1xyXG4gICAgcGFkZGluZzogMTJweCA1cHg7XHJcbiAgfVxyXG4gIC5sb2dpbi1mb3JtIC5pbnB1dC1maWVsZCBpbnB1dCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtZmFtaWx5OiAnUnViaWsnLCBzYW5zLXNlcmlmO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDFweDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNzQ3NDc0O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4ycztcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMnM7XHJcbiAgfVxyXG4gIC5sb2dpbi1mb3JtIC5pbnB1dC1maWVsZCBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIH1cclxuICAubG9naW4tZm9ybSAuaW5wdXQtZmllbGQgaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB9XHJcbiAgLmxvZ2luLWZvcm0gLmlucHV0LWZpZWxkIGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIH1cclxuICAubG9naW4tZm9ybSAuaW5wdXQtZmllbGQgaW5wdXQ6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIH1cclxuICAubG9naW4tZm9ybSAuaW5wdXQtZmllbGQgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgfVxyXG4gIC5sb2dpbi1mb3JtIC5pbnB1dC1maWVsZCBpbnB1dDpmb2N1cyB7XHJcbiAgICBib3JkZXItY29sb3I6ICMyMjI7XHJcbiAgfVxyXG4gIC5sb2dpbi1mb3JtIGEubGluayB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogIzc0NzQ3NDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjJweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIH1cclxuICAubG9naW4tZm9ybSAuYWN0aW9uIHtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC13ZWJraXQtYm94LW9yaWVudDogaG9yaXpvbnRhbDtcclxuICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIH1cclxuICAubG9naW4tZm9ybSAuYWN0aW9uIGJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDE4cHg7XHJcbiAgICBmb250LWZhbWlseTogJ1J1YmlrJywgc2Fucy1zZXJpZjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZThlOWVjO1xyXG4gICAgY29sb3I6ICM3Nzc7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0cHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjJweDtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuM3M7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xyXG4gIH1cclxuICAubG9naW4tZm9ybSAuYWN0aW9uIGJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZDhkOGQ4O1xyXG4gIH1cclxuICAubG9naW4tZm9ybSAuYWN0aW9uIGJ1dHRvbjpudGgtY2hpbGQoMikge1xyXG4gICAgYmFja2dyb3VuZDogIzJkM2I1NTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0cHg7XHJcbiAgfVxyXG4gIC5sb2dpbi1mb3JtIC5hY3Rpb24gYnV0dG9uOm50aC1jaGlsZCgyKTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjM2M0ZDZkO1xyXG4gIH0iXX0= */"] });


/***/ }),

/***/ "2rt+":
/*!********************************************************!*\
  !*** ./src/app/forgot-email/forgot-email.component.ts ***!
  \********************************************************/
/*! exports provided: ForgotEmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotEmailComponent", function() { return ForgotEmailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ForgotEmailComponent {
    constructor() { }
    ngOnInit() {
    }
}
ForgotEmailComponent.ɵfac = function ForgotEmailComponent_Factory(t) { return new (t || ForgotEmailComponent)(); };
ForgotEmailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ForgotEmailComponent, selectors: [["app-forgot-email"]], decls: 2, vars: 0, template: function ForgotEmailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "forgot-email works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3Jnb3QtZW1haWwuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared-service.service */ "HU1P");



class HomeComponent {
    constructor(router, sharedService) {
        this.router = router;
        this.sharedService = sharedService;
    }
    ngOnInit() {
    }
    goToLogin() {
        this.sharedService.goToLogin();
    }
    goToRegister() {
        this.sharedService.goToRegister();
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_service_service__WEBPACK_IMPORTED_MODULE_2__["SharedServiceService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 5, vars: 0, consts: [[2, "margin-top", "100px", "float", "right"], [3, "click"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_1_listener() { return ctx.goToLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_3_listener() { return ctx.goToRegister(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "AytR":
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

/***/ "EIQW":
/*!************************************************************!*\
  !*** ./src/app/reset-password/reset-password.component.ts ***!
  \************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared-service.service */ "HU1P");


class ResetPasswordComponent {
    constructor(sharedService) {
        this.sharedService = sharedService;
    }
    ngOnInit() {
    }
    goToResetSuccessfull() {
        this.sharedService.ResetSuccessfull();
    }
}
ResetPasswordComponent.ɵfac = function ResetPasswordComponent_Factory(t) { return new (t || ResetPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_service_service__WEBPACK_IMPORTED_MODULE_1__["SharedServiceService"])); };
ResetPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResetPasswordComponent, selectors: [["app-reset-password"]], decls: 12, vars: 0, consts: [[1, "login-form"], [1, "content"], [1, "input-field"], ["type", "text", "placeholder", "Enter New Password", "autocomplete", "new-password"], ["type", "password", "placeholder", "Confirm Password", "autocomplete", "confirm-password"], [1, "action"], [2, "background", "#2d3b55", "color", "#fff", "border-bottom-left-radius", "0", "border-bottom-right-radius", "4px", 3, "click"]], template: function ResetPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Reset Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResetPasswordComponent_Template_button_click_10_listener() { return ctx.goToResetSuccessfull(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Reset Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["*[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    -webkit-font-smoothing: antialiased;\r\n  }\r\n  \r\n  body[_ngcontent-%COMP%] {\r\n    background: #e35869;\r\n    font-family: 'Rubik', sans-serif;\r\n  }\r\n  \r\n  .login-form[_ngcontent-%COMP%] {\r\n    background: #fff;\r\n    width: 500px;\r\n    margin: 65px auto;\r\n    display: flex;\r\n    flex-direction: column;\r\n    border-radius: 4px;\r\n    box-shadow: 0 2px 25px rgba(0, 0, 0, 0.2);\r\n  }\r\n  \r\n  .login-form[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    padding: 35px 35px 0 35px;\r\n    font-weight: 300;\r\n  }\r\n  \r\n  .login-form[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n    padding: 35px;\r\n    text-align: center;\r\n  }\r\n  \r\n  .login-form[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%] {\r\n    padding: 12px 5px;\r\n  }\r\n  \r\n  .login-form[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    display: block;\r\n    font-family: 'Rubik', sans-serif;\r\n    width: 100%;\r\n    padding: 10px 1px;\r\n    border: 0;\r\n    border-bottom: 1px solid #747474;\r\n    outline: none;\r\n    transition: all .2s;\r\n  }\r\n  \r\n  .login-form[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\r\n    text-transform: uppercase;\r\n  }\r\n  \r\n  .login-form[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\r\n    border-color: #222;\r\n  }\r\n  \r\n  .login-form[_ngcontent-%COMP%]   a.link[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    color: #747474;\r\n    letter-spacing: 0.2px;\r\n    text-transform: uppercase;\r\n    display: inline-block;\r\n    margin-top: 20px;\r\n  }\r\n  \r\n  .login-form[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n  }\r\n  \r\n  .login-form[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    border: none;\r\n    padding: 18px;\r\n    font-family: 'Rubik', sans-serif;\r\n    cursor: pointer;\r\n    text-transform: uppercase;\r\n    background: #e8e9ec;\r\n    color: #777;\r\n    border-bottom-left-radius: 4px;\r\n    border-bottom-right-radius: 0;\r\n    letter-spacing: 0.2px;\r\n    outline: 0;\r\n    transition: all .3s;\r\n  }\r\n  \r\n  .login-form[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n    background: #d8d8d8;\r\n  }\r\n  \r\n  .login-form[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(2) {\r\n    background: #2d3b55;\r\n    color: #fff;\r\n    border-bottom-left-radius: 0;\r\n    border-bottom-right-radius: 4px;\r\n  }\r\n  \r\n  .login-form[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(2):hover {\r\n    background: #3c4d6d;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixtQ0FBbUM7RUFDckM7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsZ0NBQWdDO0VBQ2xDOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixpQkFBaUI7SUFFakIsYUFBYTtJQUdMLHNCQUFzQjtJQUM5QixrQkFBa0I7SUFDbEIseUNBQXlDO0VBQzNDOztFQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLGdCQUFnQjtFQUNsQjs7RUFDQTtJQUNFLGFBQWE7SUFDYixrQkFBa0I7RUFDcEI7O0VBQ0E7SUFDRSxpQkFBaUI7RUFDbkI7O0VBQ0E7SUFDRSxlQUFlO0lBQ2YsY0FBYztJQUNkLGdDQUFnQztJQUNoQyxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLFNBQVM7SUFDVCxnQ0FBZ0M7SUFDaEMsYUFBYTtJQUViLG1CQUFtQjtFQUNyQjs7RUFhQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFDQTtJQUNFLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsZ0JBQWdCO0VBQ2xCOztFQUNBO0lBRUUsYUFBYTtJQUdMLG1CQUFtQjtFQUM3Qjs7RUFDQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLGdDQUFnQztJQUNoQyxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsOEJBQThCO0lBQzlCLDZCQUE2QjtJQUM3QixxQkFBcUI7SUFDckIsVUFBVTtJQUVWLG1CQUFtQjtFQUNyQjs7RUFDQTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFDQTtJQUNFLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsNEJBQTRCO0lBQzVCLCtCQUErQjtFQUNqQzs7RUFDQTtJQUNFLG1CQUFtQjtFQUNyQiIsImZpbGUiOiJyZXNldC1wYXNzd29yZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gIH1cclxuICBcclxuICBib2R5IHtcclxuICAgIGJhY2tncm91bmQ6ICNlMzU4Njk7XHJcbiAgICBmb250LWZhbWlseTogJ1J1YmlrJywgc2Fucy1zZXJpZjtcclxuICB9XHJcbiAgXHJcbiAgLmxvZ2luLWZvcm0ge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIG1hcmdpbjogNjVweCBhdXRvO1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggMjVweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgfVxyXG4gIC5sb2dpbi1mb3JtIGgxIHtcclxuICAgIHBhZGRpbmc6IDM1cHggMzVweCAwIDM1cHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gIH1cclxuICAubG9naW4tZm9ybSAuY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAzNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAubG9naW4tZm9ybSAuaW5wdXQtZmllbGQge1xyXG4gICAgcGFkZGluZzogMTJweCA1cHg7XHJcbiAgfVxyXG4gIC5sb2dpbi1mb3JtIC5pbnB1dC1maWVsZCBpbnB1dCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtZmFtaWx5OiAnUnViaWsnLCBzYW5zLXNlcmlmO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDFweDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNzQ3NDc0O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4ycztcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMnM7XHJcbiAgfVxyXG4gIC5sb2dpbi1mb3JtIC5pbnB1dC1maWVsZCBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIH1cclxuICAubG9naW4tZm9ybSAuaW5wdXQtZmllbGQgaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB9XHJcbiAgLmxvZ2luLWZvcm0gLmlucHV0LWZpZWxkIGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIH1cclxuICAubG9naW4tZm9ybSAuaW5wdXQtZmllbGQgaW5wdXQ6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIH1cclxuICAubG9naW4tZm9ybSAuaW5wdXQtZmllbGQgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgfVxyXG4gIC5sb2dpbi1mb3JtIC5pbnB1dC1maWVsZCBpbnB1dDpmb2N1cyB7XHJcbiAgICBib3JkZXItY29sb3I6ICMyMjI7XHJcbiAgfVxyXG4gIC5sb2dpbi1mb3JtIGEubGluayB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogIzc0NzQ3NDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjJweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIH1cclxuICAubG9naW4tZm9ybSAuYWN0aW9uIHtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC13ZWJraXQtYm94LW9yaWVudDogaG9yaXpvbnRhbDtcclxuICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIH1cclxuICAubG9naW4tZm9ybSAuYWN0aW9uIGJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDE4cHg7XHJcbiAgICBmb250LWZhbWlseTogJ1J1YmlrJywgc2Fucy1zZXJpZjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZThlOWVjO1xyXG4gICAgY29sb3I6ICM3Nzc7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0cHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjJweDtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuM3M7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xyXG4gIH1cclxuICAubG9naW4tZm9ybSAuYWN0aW9uIGJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZDhkOGQ4O1xyXG4gIH1cclxuICAubG9naW4tZm9ybSAuYWN0aW9uIGJ1dHRvbjpudGgtY2hpbGQoMikge1xyXG4gICAgYmFja2dyb3VuZDogIzJkM2I1NTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0cHg7XHJcbiAgfVxyXG4gIC5sb2dpbi1mb3JtIC5hY3Rpb24gYnV0dG9uOm50aC1jaGlsZCgyKTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjM2M0ZDZkO1xyXG4gIH0iXX0= */"] });


/***/ }),

/***/ "HU1P":
/*!*******************************************!*\
  !*** ./src/app/shared-service.service.ts ***!
  \*******************************************/
/*! exports provided: SharedServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedServiceService", function() { return SharedServiceService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class SharedServiceService {
    constructor(router) {
        this.router = router;
        this.header = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]({ header1: null, header2: null, stepSize: 0 });
        this.headerData = this.header.asObservable();
    }
    updateHeader(headerObj) {
        this.header.next(headerObj);
    }
    goToLogin() {
        this.updateHeader({ header1: "Home", header2: "Login", stepSize: 1 });
        this.router.navigate(['/login']);
    }
    goToRegister() {
        this.updateHeader({ header1: "Home", header2: "Register", stepSize: 1 });
        this.router.navigate(['/register']);
    }
    forgotPassword() {
        this.updateHeader({ header1: "Home", header2: "Forgot Password", stepSize: 1 });
        this.router.navigate(['/forgot']);
    }
    ResetPassword() {
        this.updateHeader({ header1: "Home", header2: "Reset Password", stepSize: 1 });
        this.router.navigate(['/reset']);
    }
    ResetSuccessfull() {
        this.updateHeader({ header1: "Home", header2: "Reset Password Success", stepSize: 1 });
        this.router.navigate(['/reset-success']);
    }
}
SharedServiceService.ɵfac = function SharedServiceService_Factory(t) { return new (t || SharedServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
SharedServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SharedServiceService, factory: SharedServiceService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "NfFs":
/*!****************************************************!*\
  !*** ./src/app/app-header/app-header.component.ts ***!
  \****************************************************/
/*! exports provided: AppHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppHeaderComponent", function() { return AppHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared-service.service */ "HU1P");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function AppHeaderComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppHeaderComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r1.header1, " > ", ctx_r1.header2, " ");
} }
class AppHeaderComponent {
    constructor(sharedService) {
        this.sharedService = sharedService;
        this.header1 = "";
        this.header2 = "";
        this.stepSize = 0;
        this.sharedService.headerData.subscribe(data => {
            let value = data;
            this.header1 = value.header1;
            this.header2 = value.header2;
            this.stepSize = value.stepSize;
        });
    }
    ngOnInit() {
    }
}
AppHeaderComponent.ɵfac = function AppHeaderComponent_Factory(t) { return new (t || AppHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_service_service__WEBPACK_IMPORTED_MODULE_1__["SharedServiceService"])); };
AppHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppHeaderComponent, selectors: [["app-app-header"]], decls: 13, vars: 2, consts: [["role", "banner", 1, "toolbar"], ["width", "40", "alt", "Angular Logo", "src", "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg=="], [4, "ngIf"], [1, "spacer"], ["aria-label", "Angular on twitter", "target", "_blank", "rel", "noopener", "href", "https://twitter.com/angular", "title", "Twitter"], ["id", "twitter-logo", "height", "24", "data-name", "Logo", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 400 400"], ["width", "400", "height", "400", "fill", "none"], ["d", "M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23", "fill", "#fff"], ["aria-label", "Angular on YouTube", "target", "_blank", "rel", "noopener", "href", "https://youtube.com/angular", "title", "YouTube"], ["id", "youtube-logo", "height", "24", "width", "24", "data-name", "Logo", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "#fff"], ["d", "M0 0h24v24H0V0z", "fill", "none"], ["d", "M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM10 15V9l5.2 3-5.2 3z"]], template: function AppHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppHeaderComponent_span_2_Template, 2, 0, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppHeaderComponent_span_3_Template, 2, 2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "rect", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "svg", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.stepSize == 0 || ctx.stepSize == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.stepSize == 1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["[_nghost-%COMP%] {\r\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\r\n    font-size: 14px;\r\n    color: #333;\r\n    box-sizing: border-box;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n  }\r\n\r\n  h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\r\n    margin: 8px 0;\r\n  }\r\n\r\n  p[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n  }\r\n\r\n  .spacer[_ngcontent-%COMP%] {\r\n    flex: 1;\r\n  }\r\n\r\n  .toolbar[_ngcontent-%COMP%] {\r\n    \r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    height: 60px;\r\n    display: flex;\r\n    align-items: center;\r\n    background-color: #1976d2;\r\n    color: white;\r\n    font-weight: 600;\r\n  }\r\n\r\n  .toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    margin: 0 16px;\r\n  }\r\n\r\n  .toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%] {\r\n    height: 40px;\r\n    margin: 0 8px;\r\n  }\r\n\r\n  .toolbar[_ngcontent-%COMP%]   #youtube-logo[_ngcontent-%COMP%] {\r\n    height: 40px;\r\n    margin: 0 16px;\r\n  }\r\n\r\n  .toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%]:hover, .toolbar[_ngcontent-%COMP%]   #youtube-logo[_ngcontent-%COMP%]:hover {\r\n    opacity: 0.8;\r\n  }\r\n\r\n  .content[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    margin: 82px auto 32px;\r\n    padding: 0 16px;\r\n    max-width: 960px;\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n\r\n  svg.material-icons[_ngcontent-%COMP%] {\r\n    height: 24px;\r\n    width: auto;\r\n  }\r\n\r\n  svg.material-icons[_ngcontent-%COMP%]:not(:last-child) {\r\n    margin-right: 8px;\r\n  }\r\n\r\n  .card[_ngcontent-%COMP%]   svg.material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\r\n    fill: #888;\r\n  }\r\n\r\n  .card-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    margin-top: 16px;\r\n  }\r\n\r\n  .card[_ngcontent-%COMP%] {\r\n    border-radius: 4px;\r\n    border: 1px solid #eee;\r\n    background-color: #fafafa;\r\n    height: 40px;\r\n    width: 200px;\r\n    margin: 0 8px 16px;\r\n    padding: 16px;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n    transition: all 0.2s ease-in-out;\r\n    line-height: 24px;\r\n  }\r\n\r\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(:last-child) {\r\n    margin-right: 0;\r\n  }\r\n\r\n  .card.card-small[_ngcontent-%COMP%] {\r\n    height: 16px;\r\n    width: 168px;\r\n  }\r\n\r\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card) {\r\n    cursor: pointer;\r\n  }\r\n\r\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover {\r\n    transform: translateY(-3px);\r\n    box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);\r\n  }\r\n\r\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover   .material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\r\n    fill: rgb(105, 103, 103);\r\n  }\r\n\r\n  .card.highlight-card[_ngcontent-%COMP%] {\r\n    background-color: #1976d2;\r\n    color: white;\r\n    font-weight: 600;\r\n    border: none;\r\n    width: auto;\r\n    min-width: 30%;\r\n    position: relative;\r\n  }\r\n\r\n  .card.card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    margin-left: 60px;\r\n  }\r\n\r\n  svg#rocket[_ngcontent-%COMP%] {\r\n    width: 80px;\r\n    position: absolute;\r\n    left: -10px;\r\n    top: -24px;\r\n  }\r\n\r\n  svg#rocket-smoke[_ngcontent-%COMP%] {\r\n    height: calc(100vh - 95px);\r\n    position: absolute;\r\n    top: 10px;\r\n    right: 180px;\r\n    z-index: -10;\r\n  }\r\n\r\n  a[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover {\r\n    color: #1976d2;\r\n    text-decoration: none;\r\n  }\r\n\r\n  a[_ngcontent-%COMP%]:hover {\r\n    color: #125699;\r\n  }\r\n\r\n  .terminal[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 80%;\r\n    max-width: 600px;\r\n    border-radius: 6px;\r\n    padding-top: 45px;\r\n    margin-top: 8px;\r\n    overflow: hidden;\r\n    background-color: rgb(15, 15, 16);\r\n  }\r\n\r\n  .terminal[_ngcontent-%COMP%]::before {\r\n    content: \"\\2022 \\2022 \\2022\";\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    height: 4px;\r\n    background: rgb(58, 58, 58);\r\n    color: #c2c3c4;\r\n    width: 100%;\r\n    font-size: 2rem;\r\n    line-height: 0;\r\n    padding: 14px 0;\r\n    text-indent: 4px;\r\n  }\r\n\r\n  .terminal[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\r\n    font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\r\n    color: white;\r\n    padding: 0 1rem 1rem;\r\n    margin: 0;\r\n  }\r\n\r\n  .circle-link[_ngcontent-%COMP%] {\r\n    height: 40px;\r\n    width: 40px;\r\n    border-radius: 40px;\r\n    margin: 8px;\r\n    background-color: white;\r\n    border: 1px solid #eeeeee;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    cursor: pointer;\r\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\r\n    transition: 1s ease-out;\r\n  }\r\n\r\n  .circle-link[_ngcontent-%COMP%]:hover {\r\n    transform: translateY(-0.25rem);\r\n    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\r\n  }\r\n\r\n  footer[_ngcontent-%COMP%] {\r\n    margin-top: 8px;\r\n    display: flex;\r\n    align-items: center;\r\n    line-height: 20px;\r\n  }\r\n\r\n  footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n\r\n  .github-star-badge[_ngcontent-%COMP%] {\r\n    color: #24292e;\r\n    display: flex;\r\n    align-items: center;\r\n    font-size: 12px;\r\n    padding: 3px 10px;\r\n    border: 1px solid rgba(27,31,35,.2);\r\n    border-radius: 3px;\r\n    background-image: linear-gradient(-180deg,#fafbfc,#eff3f6 90%);\r\n    margin-left: 4px;\r\n    font-weight: 600;\r\n    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;\r\n  }\r\n\r\n  .github-star-badge[_ngcontent-%COMP%]:hover {\r\n    background-image: linear-gradient(-180deg,#f0f3f6,#e6ebf1 90%);\r\n    border-color: rgba(27,31,35,.35);\r\n    background-position: -.5em;\r\n  }\r\n\r\n  .github-star-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\r\n    height: 16px;\r\n    width: 16px;\r\n    margin-right: 4px;\r\n  }\r\n\r\n  svg#clouds[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    bottom: -160px;\r\n    left: -230px;\r\n    z-index: -10;\r\n    width: 1920px;\r\n  }\r\n\r\n  \r\n\r\n  @media screen and (max-width: 767px) {\r\n\r\n    .card-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(.circle-link), .terminal[_ngcontent-%COMP%] {\r\n      width: 100%;\r\n    }\r\n\r\n    .card[_ngcontent-%COMP%]:not(.highlight-card) {\r\n      height: 16px;\r\n      margin: 8px 0;\r\n    }\r\n\r\n    .card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n      margin-left: 72px;\r\n    }\r\n\r\n    svg#rocket-smoke[_ngcontent-%COMP%] {\r\n      right: 120px;\r\n      transform: rotate(-5deg);\r\n    }\r\n  }\r\n\r\n  @media screen and (max-width: 575px) {\r\n    svg#rocket-smoke[_ngcontent-%COMP%] {\r\n      display: none;\r\n      visibility: hidden;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC1oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDBKQUEwSjtJQUMxSixlQUFlO0lBQ2YsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixtQ0FBbUM7SUFDbkMsa0NBQWtDO0VBQ3BDOztFQUVBOzs7Ozs7SUFNRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxTQUFTO0VBQ1g7O0VBRUE7SUFDRSxPQUFPO0VBQ1Q7O0VBRUE7O0lBRUUsTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0lBQ1IsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFlBQVk7SUFDWixjQUFjO0VBQ2hCOztFQUVBOztJQUVFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGFBQWE7SUFDYixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZ0NBQWdDO0lBQ2hDLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osWUFBWTtFQUNkOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLDJCQUEyQjtJQUMzQiwwQ0FBMEM7RUFDNUM7O0VBRUE7SUFDRSx3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osV0FBVztJQUNYLGNBQWM7SUFDZCxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxVQUFVO0VBQ1o7O0VBRUE7SUFDRSwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxZQUFZO0lBQ1osWUFBWTtFQUNkOztFQUVBOzs7SUFHRSxjQUFjO0lBQ2QscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQ0FBaUM7RUFDbkM7O0VBRUE7SUFDRSw0QkFBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLDJCQUEyQjtJQUMzQixjQUFjO0lBQ2QsV0FBVztJQUNYLGVBQWU7SUFDZixjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLG9FQUFvRTtJQUNwRSxZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLFNBQVM7RUFDWDs7RUFFQTtJQUNFLFlBQVk7SUFDWixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZix3RUFBd0U7SUFDeEUsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsK0JBQStCO0lBQy9CLDJDQUEyQztFQUM3Qzs7RUFFQTtJQUNFLGVBQWU7SUFDZixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG1DQUFtQztJQUNuQyxrQkFBa0I7SUFDbEIsOERBQThEO0lBQzlELGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsa0lBQWtJO0VBQ3BJOztFQUVBO0lBQ0UsOERBQThEO0lBQzlELGdDQUFnQztJQUNoQywwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osV0FBVztJQUNYLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixjQUFjO0lBQ2QsWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0VBQ2Y7O0VBR0Esc0JBQXNCOztFQUN0Qjs7SUFFRTs7TUFFRSxXQUFXO0lBQ2I7O0lBRUE7TUFDRSxZQUFZO01BQ1osYUFBYTtJQUNmOztJQUVBO01BQ0UsaUJBQWlCO0lBQ25COztJQUVBO01BQ0UsWUFBWTtNQUNaLHdCQUF3QjtJQUMxQjtFQUNGOztFQUVBO0lBQ0U7TUFDRSxhQUFhO01BQ2Isa0JBQWtCO0lBQ3BCO0VBQ0YiLCJmaWxlIjoiYXBwLWhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gIH1cclxuXHJcbiAgaDEsXHJcbiAgaDIsXHJcbiAgaDMsXHJcbiAgaDQsXHJcbiAgaDUsXHJcbiAgaDYge1xyXG4gICAgbWFyZ2luOiA4cHggMDtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuXHJcbiAgLnNwYWNlciB7XHJcbiAgICBmbGV4OiAxO1xyXG4gIH1cclxuXHJcbiAgLnRvb2xiYXIge1xyXG4gICAgXHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTc2ZDI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxuXHJcbiAgLnRvb2xiYXIgaW1nIHtcclxuICAgIG1hcmdpbjogMCAxNnB4O1xyXG4gIH1cclxuXHJcbiAgLnRvb2xiYXIgI3R3aXR0ZXItbG9nbyB7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBtYXJnaW46IDAgOHB4O1xyXG4gIH1cclxuXHJcbiAgLnRvb2xiYXIgI3lvdXR1YmUtbG9nbyB7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBtYXJnaW46IDAgMTZweDtcclxuICB9XHJcblxyXG4gIC50b29sYmFyICN0d2l0dGVyLWxvZ286aG92ZXIsXHJcbiAgLnRvb2xiYXIgI3lvdXR1YmUtbG9nbzpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbiAgfVxyXG5cclxuICAuY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luOiA4MnB4IGF1dG8gMzJweDtcclxuICAgIHBhZGRpbmc6IDAgMTZweDtcclxuICAgIG1heC13aWR0aDogOTYwcHg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIHN2Zy5tYXRlcmlhbC1pY29ucyB7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICB9XHJcblxyXG4gIHN2Zy5tYXRlcmlhbC1pY29uczpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gIH1cclxuXHJcbiAgLmNhcmQgc3ZnLm1hdGVyaWFsLWljb25zIHBhdGgge1xyXG4gICAgZmlsbDogIzg4ODtcclxuICB9XHJcblxyXG4gIC5jYXJkLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gIH1cclxuXHJcbiAgLmNhcmQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBtYXJnaW46IDAgOHB4IDE2cHg7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQuY2FyZC1zbWFsbCB7XHJcbiAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICB3aWR0aDogMTY4cHg7XHJcbiAgfVxyXG5cclxuICAuY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCkge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDE3cHggcmdiYSgwLCAwLCAwLCAwLjM1KTtcclxuICB9XHJcblxyXG4gIC5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKTpob3ZlciAubWF0ZXJpYWwtaWNvbnMgcGF0aCB7XHJcbiAgICBmaWxsOiByZ2IoMTA1LCAxMDMsIDEwMyk7XHJcbiAgfVxyXG5cclxuICAuY2FyZC5oaWdobGlnaHQtY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgbWluLXdpZHRoOiAzMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG5cclxuICAuY2FyZC5jYXJkLmhpZ2hsaWdodC1jYXJkIHNwYW4ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDYwcHg7XHJcbiAgfVxyXG5cclxuICBzdmcjcm9ja2V0IHtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogLTEwcHg7XHJcbiAgICB0b3A6IC0yNHB4O1xyXG4gIH1cclxuXHJcbiAgc3ZnI3JvY2tldC1zbW9rZSB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA5NXB4KTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTBweDtcclxuICAgIHJpZ2h0OiAxODBweDtcclxuICAgIHotaW5kZXg6IC0xMDtcclxuICB9XHJcblxyXG4gIGEsXHJcbiAgYTp2aXNpdGVkLFxyXG4gIGE6aG92ZXIge1xyXG4gICAgY29sb3I6ICMxOTc2ZDI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG5cclxuICBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMTI1Njk5O1xyXG4gIH1cclxuXHJcbiAgLnRlcm1pbmFsIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgcGFkZGluZy10b3A6IDQ1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1LCAxNSwgMTYpO1xyXG4gIH1cclxuXHJcbiAgLnRlcm1pbmFsOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcXDIwMjIgXFwyMDIyIFxcMjAyMlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGhlaWdodDogNHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDU4LCA1OCwgNTgpO1xyXG4gICAgY29sb3I6ICNjMmMzYzQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAwO1xyXG4gICAgcGFkZGluZzogMTRweCAwO1xyXG4gICAgdGV4dC1pbmRlbnQ6IDRweDtcclxuICB9XHJcblxyXG4gIC50ZXJtaW5hbCBwcmUge1xyXG4gICAgZm9udC1mYW1pbHk6IFNGTW9uby1SZWd1bGFyLENvbnNvbGFzLExpYmVyYXRpb24gTW9ubyxNZW5sbyxtb25vc3BhY2U7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAwIDFyZW0gMXJlbTtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcblxyXG4gIC5jaXJjbGUtbGluayB7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgICBtYXJnaW46IDhweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZWVlZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XHJcbiAgICB0cmFuc2l0aW9uOiAxcyBlYXNlLW91dDtcclxuICB9XHJcblxyXG4gIC5jaXJjbGUtbGluazpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuMjVyZW0pO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDNweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICB9XHJcblxyXG4gIGZvb3RlciB7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgZm9vdGVyIGEge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuZ2l0aHViLXN0YXItYmFkZ2Uge1xyXG4gICAgY29sb3I6ICMyNDI5MmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHBhZGRpbmc6IDNweCAxMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNywzMSwzNSwuMik7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTE4MGRlZywjZmFmYmZjLCNlZmYzZjYgOTAlKTtcclxuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFNlZ29lIFVJLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmLEFwcGxlIENvbG9yIEVtb2ppLFNlZ29lIFVJIEVtb2ppLFNlZ29lIFVJIFN5bWJvbDtcclxuICB9XHJcblxyXG4gIC5naXRodWItc3Rhci1iYWRnZTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTE4MGRlZywjZjBmM2Y2LCNlNmViZjEgOTAlKTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNywzMSwzNSwuMzUpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLS41ZW07XHJcbiAgfVxyXG5cclxuICAuZ2l0aHViLXN0YXItYmFkZ2UgLm1hdGVyaWFsLWljb25zIHtcclxuICAgIGhlaWdodDogMTZweDtcclxuICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgfVxyXG5cclxuICBzdmcjY2xvdWRzIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogLTE2MHB4O1xyXG4gICAgbGVmdDogLTIzMHB4O1xyXG4gICAgei1pbmRleDogLTEwO1xyXG4gICAgd2lkdGg6IDE5MjBweDtcclxuICB9XHJcblxyXG5cclxuICAvKiBSZXNwb25zaXZlIFN0eWxlcyAqL1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcblxyXG4gICAgLmNhcmQtY29udGFpbmVyID4gKjpub3QoLmNpcmNsZS1saW5rKSAsXHJcbiAgICAudGVybWluYWwge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKSB7XHJcbiAgICAgIGhlaWdodDogMTZweDtcclxuICAgICAgbWFyZ2luOiA4cHggMDtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZC5oaWdobGlnaHQtY2FyZCBzcGFuIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDcycHg7XHJcbiAgICB9XHJcblxyXG4gICAgc3ZnI3JvY2tldC1zbW9rZSB7XHJcbiAgICAgIHJpZ2h0OiAxMjBweDtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTVkZWcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICAgIHN2ZyNyb2NrZXQtc21va2Uge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICB9XHJcbiAgfSJdfQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_header_app_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-header/app-header.component */ "NfFs");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'TestApp';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_app_header_app_header_component__WEBPACK_IMPORTED_MODULE_1__["AppHeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "TLCw":
/*!**********************************************************!*\
  !*** ./src/app/reset-success/reset-success.component.ts ***!
  \**********************************************************/
/*! exports provided: ResetSuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetSuccessComponent", function() { return ResetSuccessComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared-service.service */ "HU1P");


class ResetSuccessComponent {
    constructor(sharedService) {
        this.sharedService = sharedService;
    }
    ngOnInit() {
    }
    goToLogin() {
        this.sharedService.goToLogin();
    }
}
ResetSuccessComponent.ɵfac = function ResetSuccessComponent_Factory(t) { return new (t || ResetSuccessComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_service_service__WEBPACK_IMPORTED_MODULE_1__["SharedServiceService"])); };
ResetSuccessComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResetSuccessComponent, selectors: [["app-reset-success"]], decls: 7, vars: 0, consts: [[1, "login-form"], [1, "action"], [2, "background", "#2d3b55", "color", "#fff", "border-bottom-left-radius", "0", "border-bottom-right-radius", "4px", 3, "click"]], template: function ResetSuccessComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Reset Password Successfully");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResetSuccessComponent_Template_button_click_5_listener() { return ctx.goToLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["*[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    -webkit-font-smoothing: antialiased;\r\n  }\r\n  \r\n  body[_ngcontent-%COMP%] {\r\n    background: #e35869;\r\n    font-family: 'Rubik', sans-serif;\r\n  }\r\n  \r\n  .login-form[_ngcontent-%COMP%] {\r\n    background: #fff;\r\n    width: 500px;\r\n    margin: 65px auto;\r\n    display: flex;\r\n    flex-direction: column;\r\n    border-radius: 4px;\r\n    box-shadow: 0 2px 25px rgba(0, 0, 0, 0.2);\r\n  }\r\n  \r\n  .login-form[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    padding: 35px 35px 0 35px;\r\n    font-weight: 300;\r\n  }\r\n  \r\n  .login-form[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n    padding: 35px;\r\n    text-align: center;\r\n  }\r\n  \r\n  .login-form[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%] {\r\n    padding: 12px 5px;\r\n  }\r\n  \r\n  .login-form[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    display: block;\r\n    font-family: 'Rubik', sans-serif;\r\n    width: 100%;\r\n    padding: 10px 1px;\r\n    border: 0;\r\n    border-bottom: 1px solid #747474;\r\n    outline: none;\r\n    transition: all .2s;\r\n  }\r\n  \r\n  .login-form[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\r\n    text-transform: uppercase;\r\n  }\r\n  \r\n  .login-form[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\r\n    border-color: #222;\r\n  }\r\n  \r\n  .login-form[_ngcontent-%COMP%]   a.link[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    color: #747474;\r\n    letter-spacing: 0.2px;\r\n    text-transform: uppercase;\r\n    display: inline-block;\r\n    margin-top: 20px;\r\n  }\r\n  \r\n  .login-form[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n  }\r\n  \r\n  .login-form[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    border: none;\r\n    padding: 18px;\r\n    font-family: 'Rubik', sans-serif;\r\n    cursor: pointer;\r\n    text-transform: uppercase;\r\n    background: #e8e9ec;\r\n    color: #777;\r\n    border-bottom-left-radius: 4px;\r\n    border-bottom-right-radius: 0;\r\n    letter-spacing: 0.2px;\r\n    outline: 0;\r\n    transition: all .3s;\r\n  }\r\n  \r\n  .login-form[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n    background: #d8d8d8;\r\n  }\r\n  \r\n  .login-form[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(2) {\r\n    background: #2d3b55;\r\n    color: #fff;\r\n    border-bottom-left-radius: 0;\r\n    border-bottom-right-radius: 4px;\r\n  }\r\n  \r\n  .login-form[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(2):hover {\r\n    background: #3c4d6d;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc2V0LXN1Y2Nlc3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLG1DQUFtQztFQUNyQzs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixnQ0FBZ0M7RUFDbEM7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGlCQUFpQjtJQUVqQixhQUFhO0lBR0wsc0JBQXNCO0lBQzlCLGtCQUFrQjtJQUNsQix5Q0FBeUM7RUFDM0M7O0VBQ0E7SUFDRSx5QkFBeUI7SUFDekIsZ0JBQWdCO0VBQ2xCOztFQUNBO0lBQ0UsYUFBYTtJQUNiLGtCQUFrQjtFQUNwQjs7RUFDQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFDQTtJQUNFLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0NBQWdDO0lBQ2hDLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsU0FBUztJQUNULGdDQUFnQztJQUNoQyxhQUFhO0lBRWIsbUJBQW1CO0VBQ3JCOztFQWFBO0lBQ0UseUJBQXlCO0VBQzNCOztFQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUNBO0lBQ0UscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixnQkFBZ0I7RUFDbEI7O0VBQ0E7SUFFRSxhQUFhO0lBR0wsbUJBQW1CO0VBQzdCOztFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsZ0NBQWdDO0lBQ2hDLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCw4QkFBOEI7SUFDOUIsNkJBQTZCO0lBQzdCLHFCQUFxQjtJQUNyQixVQUFVO0lBRVYsbUJBQW1CO0VBQ3JCOztFQUNBO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUNBO0lBQ0UsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCw0QkFBNEI7SUFDNUIsK0JBQStCO0VBQ2pDOztFQUNBO0lBQ0UsbUJBQW1CO0VBQ3JCIiwiZmlsZSI6InJlc2V0LXN1Y2Nlc3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICB9XHJcbiAgXHJcbiAgYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTM1ODY5O1xyXG4gICAgZm9udC1mYW1pbHk6ICdSdWJpaycsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2dpbi1mb3JtIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICBtYXJnaW46IDY1cHggYXV0bztcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIH1cclxuICAubG9naW4tZm9ybSBoMSB7XHJcbiAgICBwYWRkaW5nOiAzNXB4IDM1cHggMCAzNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICB9XHJcbiAgLmxvZ2luLWZvcm0gLmNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMzVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLmxvZ2luLWZvcm0gLmlucHV0LWZpZWxkIHtcclxuICAgIHBhZGRpbmc6IDEycHggNXB4O1xyXG4gIH1cclxuICAubG9naW4tZm9ybSAuaW5wdXQtZmllbGQgaW5wdXQge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LWZhbWlseTogJ1J1YmlrJywgc2Fucy1zZXJpZjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTBweCAxcHg7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzc0NzQ3NDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuMnM7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzO1xyXG4gIH1cclxuICAubG9naW4tZm9ybSAuaW5wdXQtZmllbGQgaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB9XHJcbiAgLmxvZ2luLWZvcm0gLmlucHV0LWZpZWxkIGlucHV0OjotbW96LXBsYWNlaG9sZGVyIHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgfVxyXG4gIC5sb2dpbi1mb3JtIC5pbnB1dC1maWVsZCBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB9XHJcbiAgLmxvZ2luLWZvcm0gLmlucHV0LWZpZWxkIGlucHV0OjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB9XHJcbiAgLmxvZ2luLWZvcm0gLmlucHV0LWZpZWxkIGlucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIH1cclxuICAubG9naW4tZm9ybSAuaW5wdXQtZmllbGQgaW5wdXQ6Zm9jdXMge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMjIyO1xyXG4gIH1cclxuICAubG9naW4tZm9ybSBhLmxpbmsge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICM3NDc0NzQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICB9XHJcbiAgLmxvZ2luLWZvcm0gLmFjdGlvbiB7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IGhvcml6b250YWw7XHJcbiAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICB9XHJcbiAgLmxvZ2luLWZvcm0gLmFjdGlvbiBidXR0b24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAxOHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdSdWJpaycsIHNhbnMtc2VyaWY7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgYmFja2dyb3VuZDogI2U4ZTllYztcclxuICAgIGNvbG9yOiAjNzc3O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjNzO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcztcclxuICB9XHJcbiAgLmxvZ2luLWZvcm0gLmFjdGlvbiBidXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2Q4ZDhkODtcclxuICB9XHJcbiAgLmxvZ2luLWZvcm0gLmFjdGlvbiBidXR0b246bnRoLWNoaWxkKDIpIHtcclxuICAgIGJhY2tncm91bmQ6ICMyZDNiNTU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNHB4O1xyXG4gIH1cclxuICAubG9naW4tZm9ybSAuYWN0aW9uIGJ1dHRvbjpudGgtY2hpbGQoMik6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzNjNGQ2ZDtcclxuICB9Il19 */"] });


/***/ }),

/***/ "XY6P":
/*!**************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.component.ts ***!
  \**************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared-service.service */ "HU1P");


class ForgotPasswordComponent {
    constructor(sharedService) {
        this.sharedService = sharedService;
    }
    ngOnInit() {
    }
    goToLogin() {
        this.sharedService.goToLogin();
    }
    goToLogin1() {
        alert("Password updated sucessfully");
        this.sharedService.goToLogin();
    }
    goToReset() {
        this.sharedService.ResetPassword();
    }
}
ForgotPasswordComponent.ɵfac = function ForgotPasswordComponent_Factory(t) { return new (t || ForgotPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_service_service__WEBPACK_IMPORTED_MODULE_1__["SharedServiceService"])); };
ForgotPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ForgotPasswordComponent, selectors: [["app-forgot-password"]], decls: 12, vars: 0, consts: [[1, "login-form"], [1, "content"], [1, "input-field"], ["type", "email", "placeholder", "Enter your Email", "autocomplete", "email"], [1, "action"], [3, "click"]], template: function ForgotPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Forgot Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForgotPasswordComponent_Template_button_click_8_listener() { return ctx.goToLogin1(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForgotPasswordComponent_Template_button_click_10_listener() { return ctx.goToReset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Reset Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["*[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    -webkit-font-smoothing: antialiased;\r\n  }\r\n  \r\n  body[_ngcontent-%COMP%] {\r\n    background: #e35869;\r\n    font-family: 'Rubik', sans-serif;\r\n  }\r\n  \r\n  .login-form[_ngcontent-%COMP%] {\r\n    background: #fff;\r\n    width: 500px;\r\n    margin: 65px auto;\r\n    display: flex;\r\n    flex-direction: column;\r\n    border-radius: 4px;\r\n    box-shadow: 0 2px 25px rgba(0, 0, 0, 0.2);\r\n  }\r\n  \r\n  .login-form[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    padding: 35px 35px 0 35px;\r\n    font-weight: 300;\r\n  }\r\n  \r\n  .login-form[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n    padding: 35px;\r\n    text-align: center;\r\n  }\r\n  \r\n  .login-form[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%] {\r\n    padding: 12px 5px;\r\n  }\r\n  \r\n  .login-form[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    display: block;\r\n    font-family: 'Rubik', sans-serif;\r\n    width: 100%;\r\n    padding: 10px 1px;\r\n    border: 0;\r\n    border-bottom: 1px solid #747474;\r\n    outline: none;\r\n    transition: all .2s;\r\n  }\r\n  \r\n  .login-form[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\r\n    text-transform: uppercase;\r\n  }\r\n  \r\n  .login-form[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\r\n    border-color: #222;\r\n  }\r\n  \r\n  .login-form[_ngcontent-%COMP%]   a.link[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    color: #747474;\r\n    letter-spacing: 0.2px;\r\n    text-transform: uppercase;\r\n    display: inline-block;\r\n    margin-top: 20px;\r\n  }\r\n  \r\n  .login-form[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n  }\r\n  \r\n  .login-form[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    border: none;\r\n    padding: 18px;\r\n    font-family: 'Rubik', sans-serif;\r\n    cursor: pointer;\r\n    text-transform: uppercase;\r\n    background: #e8e9ec;\r\n    color: #777;\r\n    border-bottom-left-radius: 4px;\r\n    border-bottom-right-radius: 0;\r\n    letter-spacing: 0.2px;\r\n    outline: 0;\r\n    transition: all .3s;\r\n  }\r\n  \r\n  .login-form[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n    background: #d8d8d8;\r\n  }\r\n  \r\n  .login-form[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(2) {\r\n    background: #2d3b55;\r\n    color: #fff;\r\n    border-bottom-left-radius: 0;\r\n    border-bottom-right-radius: 4px;\r\n  }\r\n  \r\n  .login-form[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(2):hover {\r\n    background: #3c4d6d;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsbUNBQW1DO0VBQ3JDOztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLGdDQUFnQztFQUNsQzs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osaUJBQWlCO0lBRWpCLGFBQWE7SUFHTCxzQkFBc0I7SUFDOUIsa0JBQWtCO0lBQ2xCLHlDQUF5QztFQUMzQzs7RUFDQTtJQUNFLHlCQUF5QjtJQUN6QixnQkFBZ0I7RUFDbEI7O0VBQ0E7SUFDRSxhQUFhO0lBQ2Isa0JBQWtCO0VBQ3BCOztFQUNBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUNBO0lBQ0UsZUFBZTtJQUNmLGNBQWM7SUFDZCxnQ0FBZ0M7SUFDaEMsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixTQUFTO0lBQ1QsZ0NBQWdDO0lBQ2hDLGFBQWE7SUFFYixtQkFBbUI7RUFDckI7O0VBYUE7SUFDRSx5QkFBeUI7RUFDM0I7O0VBQ0E7SUFDRSxrQkFBa0I7RUFDcEI7O0VBQ0E7SUFDRSxxQkFBcUI7SUFDckIsY0FBYztJQUNkLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLGdCQUFnQjtFQUNsQjs7RUFDQTtJQUVFLGFBQWE7SUFHTCxtQkFBbUI7RUFDN0I7O0VBQ0E7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixnQ0FBZ0M7SUFDaEMsZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLDhCQUE4QjtJQUM5Qiw2QkFBNkI7SUFDN0IscUJBQXFCO0lBQ3JCLFVBQVU7SUFFVixtQkFBbUI7RUFDckI7O0VBQ0E7SUFDRSxtQkFBbUI7RUFDckI7O0VBQ0E7SUFDRSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLDRCQUE0QjtJQUM1QiwrQkFBK0I7RUFDakM7O0VBQ0E7SUFDRSxtQkFBbUI7RUFDckIiLCJmaWxlIjoiZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgfVxyXG4gIFxyXG4gIGJvZHkge1xyXG4gICAgYmFja2dyb3VuZDogI2UzNTg2OTtcclxuICAgIGZvbnQtZmFtaWx5OiAnUnViaWsnLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICBcclxuICAubG9naW4tZm9ybSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgbWFyZ2luOiA2NXB4IGF1dG87XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCAyNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICB9XHJcbiAgLmxvZ2luLWZvcm0gaDEge1xyXG4gICAgcGFkZGluZzogMzVweCAzNXB4IDAgMzVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgfVxyXG4gIC5sb2dpbi1mb3JtIC5jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDM1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5sb2dpbi1mb3JtIC5pbnB1dC1maWVsZCB7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDVweDtcclxuICB9XHJcbiAgLmxvZ2luLWZvcm0gLmlucHV0LWZpZWxkIGlucHV0IHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSdWJpaycsIHNhbnMtc2VyaWY7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEwcHggMXB4O1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM3NDc0NzQ7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjJzO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycztcclxuICB9XHJcbiAgLmxvZ2luLWZvcm0gLmlucHV0LWZpZWxkIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgfVxyXG4gIC5sb2dpbi1mb3JtIC5pbnB1dC1maWVsZCBpbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIH1cclxuICAubG9naW4tZm9ybSAuaW5wdXQtZmllbGQgaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgfVxyXG4gIC5sb2dpbi1mb3JtIC5pbnB1dC1maWVsZCBpbnB1dDo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgfVxyXG4gIC5sb2dpbi1mb3JtIC5pbnB1dC1maWVsZCBpbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB9XHJcbiAgLmxvZ2luLWZvcm0gLmlucHV0LWZpZWxkIGlucHV0OmZvY3VzIHtcclxuICAgIGJvcmRlci1jb2xvcjogIzIyMjtcclxuICB9XHJcbiAgLmxvZ2luLWZvcm0gYS5saW5rIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjNzQ3NDc0O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgfVxyXG4gIC5sb2dpbi1mb3JtIC5hY3Rpb24ge1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiBob3Jpem9udGFsO1xyXG4gICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgfVxyXG4gIC5sb2dpbi1mb3JtIC5hY3Rpb24gYnV0dG9uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZzogMThweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUnViaWsnLCBzYW5zLXNlcmlmO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGJhY2tncm91bmQ6ICNlOGU5ZWM7XHJcbiAgICBjb2xvcjogIzc3NztcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xyXG4gICAgb3V0bGluZTogMDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4zcztcclxuICAgIHRyYW5zaXRpb246IGFsbCAuM3M7XHJcbiAgfVxyXG4gIC5sb2dpbi1mb3JtIC5hY3Rpb24gYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNkOGQ4ZDg7XHJcbiAgfVxyXG4gIC5sb2dpbi1mb3JtIC5hY3Rpb24gYnV0dG9uOm50aC1jaGlsZCgyKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMmQzYjU1O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDRweDtcclxuICB9XHJcbiAgLmxvZ2luLWZvcm0gLmFjdGlvbiBidXR0b246bnRoLWNoaWxkKDIpOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMzYzRkNmQ7XHJcbiAgfSJdfQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_header_app_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-header/app-header.component */ "NfFs");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register/register.component */ "1W4x");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "XY6P");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "EIQW");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _reset_success_reset_success_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reset-success/reset-success.component */ "TLCw");
/* harmony import */ var _forgot_email_forgot_email_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./forgot-email/forgot-email.component */ "2rt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");












class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _app_header_app_header_component__WEBPACK_IMPORTED_MODULE_3__["AppHeaderComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
        _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"],
        _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordComponent"],
        _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_7__["ResetPasswordComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
        _reset_success_reset_success_component__WEBPACK_IMPORTED_MODULE_9__["ResetSuccessComponent"],
        _forgot_email_forgot_email_component__WEBPACK_IMPORTED_MODULE_10__["ForgotEmailComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _forgot_email_forgot_email_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot-email/forgot-email.component */ "2rt+");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "XY6P");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register/register.component */ "1W4x");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "EIQW");
/* harmony import */ var _reset_success_reset_success_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reset-success/reset-success.component */ "TLCw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");










const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"] },
    { path: 'forgot', component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_2__["ForgotPasswordComponent"] },
    { path: 'reset', component: _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_6__["ResetPasswordComponent"] },
    { path: 'reset-success', component: _reset_success_reset_success_component__WEBPACK_IMPORTED_MODULE_7__["ResetSuccessComponent"] },
    { path: 'forgot-email', component: _forgot_email_forgot_email_component__WEBPACK_IMPORTED_MODULE_1__["ForgotEmailComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared-service.service */ "HU1P");


class LoginComponent {
    constructor(sharedService) {
        this.sharedService = sharedService;
    }
    ngOnInit() {
    }
    goToRegister() {
        this.sharedService.goToRegister();
    }
    goToForgot() {
        this.sharedService.forgotPassword();
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_service_service__WEBPACK_IMPORTED_MODULE_1__["SharedServiceService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 16, vars: 0, consts: [[1, "login-form"], [1, "content"], [1, "input-field"], ["type", "email", "placeholder", "Email", "autocomplete", "nope"], ["type", "password", "placeholder", "Password", "autocomplete", "new-password"], [1, "link", 2, "cursor", "pointer", 3, "click"], [1, "action"], [3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_9_listener() { return ctx.goToForgot(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Forgot Your Password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_12_listener() { return ctx.goToRegister(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["*[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    -webkit-font-smoothing: antialiased;\r\n  }\r\n  \r\n  body[_ngcontent-%COMP%] {\r\n    background: #e35869;\r\n    font-family: 'Rubik', sans-serif;\r\n  }\r\n  \r\n  .login-form[_ngcontent-%COMP%] {\r\n    background: #fff;\r\n    width: 500px;\r\n    margin: 65px auto;\r\n    display: flex;\r\n    flex-direction: column;\r\n    border-radius: 4px;\r\n    box-shadow: 0 2px 25px rgba(0, 0, 0, 0.2);\r\n  }\r\n  \r\n  .login-form[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    padding: 35px 35px 0 35px;\r\n    font-weight: 300;\r\n  }\r\n  \r\n  .login-form[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n    padding: 35px;\r\n    text-align: center;\r\n  }\r\n  \r\n  .login-form[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%] {\r\n    padding: 12px 5px;\r\n  }\r\n  \r\n  .login-form[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    display: block;\r\n    font-family: 'Rubik', sans-serif;\r\n    width: 100%;\r\n    padding: 10px 1px;\r\n    border: 0;\r\n    border-bottom: 1px solid #747474;\r\n    outline: none;\r\n    transition: all .2s;\r\n  }\r\n  \r\n  .login-form[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\r\n    text-transform: uppercase;\r\n  }\r\n  \r\n  .login-form[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\r\n    border-color: #222;\r\n  }\r\n  \r\n  .login-form[_ngcontent-%COMP%]   a.link[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    color: #747474;\r\n    letter-spacing: 0.2px;\r\n    text-transform: uppercase;\r\n    display: inline-block;\r\n    margin-top: 20px;\r\n  }\r\n  \r\n  .login-form[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n  }\r\n  \r\n  .login-form[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    border: none;\r\n    padding: 18px;\r\n    font-family: 'Rubik', sans-serif;\r\n    cursor: pointer;\r\n    text-transform: uppercase;\r\n    background: #e8e9ec;\r\n    color: #777;\r\n    border-bottom-left-radius: 4px;\r\n    border-bottom-right-radius: 0;\r\n    letter-spacing: 0.2px;\r\n    outline: 0;\r\n    transition: all .3s;\r\n  }\r\n  \r\n  .login-form[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n    background: #d8d8d8;\r\n  }\r\n  \r\n  .login-form[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(2) {\r\n    background: #2d3b55;\r\n    color: #fff;\r\n    border-bottom-left-radius: 0;\r\n    border-bottom-right-radius: 4px;\r\n  }\r\n  \r\n  .login-form[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(2):hover {\r\n    background: #3c4d6d;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixtQ0FBbUM7RUFDckM7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsZ0NBQWdDO0VBQ2xDOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixpQkFBaUI7SUFFakIsYUFBYTtJQUdMLHNCQUFzQjtJQUM5QixrQkFBa0I7SUFDbEIseUNBQXlDO0VBQzNDOztFQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLGdCQUFnQjtFQUNsQjs7RUFDQTtJQUNFLGFBQWE7SUFDYixrQkFBa0I7RUFDcEI7O0VBQ0E7SUFDRSxpQkFBaUI7RUFDbkI7O0VBQ0E7SUFDRSxlQUFlO0lBQ2YsY0FBYztJQUNkLGdDQUFnQztJQUNoQyxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLFNBQVM7SUFDVCxnQ0FBZ0M7SUFDaEMsYUFBYTtJQUViLG1CQUFtQjtFQUNyQjs7RUFhQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFDQTtJQUNFLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsZ0JBQWdCO0VBQ2xCOztFQUNBO0lBRUUsYUFBYTtJQUdMLG1CQUFtQjtFQUM3Qjs7RUFDQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLGdDQUFnQztJQUNoQyxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsOEJBQThCO0lBQzlCLDZCQUE2QjtJQUM3QixxQkFBcUI7SUFDckIsVUFBVTtJQUVWLG1CQUFtQjtFQUNyQjs7RUFDQTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFDQTtJQUNFLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsNEJBQTRCO0lBQzVCLCtCQUErQjtFQUNqQzs7RUFDQTtJQUNFLG1CQUFtQjtFQUNyQiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gIH1cclxuICBcclxuICBib2R5IHtcclxuICAgIGJhY2tncm91bmQ6ICNlMzU4Njk7XHJcbiAgICBmb250LWZhbWlseTogJ1J1YmlrJywgc2Fucy1zZXJpZjtcclxuICB9XHJcbiAgXHJcbiAgLmxvZ2luLWZvcm0ge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIG1hcmdpbjogNjVweCBhdXRvO1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggMjVweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgfVxyXG4gIC5sb2dpbi1mb3JtIGgxIHtcclxuICAgIHBhZGRpbmc6IDM1cHggMzVweCAwIDM1cHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gIH1cclxuICAubG9naW4tZm9ybSAuY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAzNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAubG9naW4tZm9ybSAuaW5wdXQtZmllbGQge1xyXG4gICAgcGFkZGluZzogMTJweCA1cHg7XHJcbiAgfVxyXG4gIC5sb2dpbi1mb3JtIC5pbnB1dC1maWVsZCBpbnB1dCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtZmFtaWx5OiAnUnViaWsnLCBzYW5zLXNlcmlmO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDFweDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNzQ3NDc0O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4ycztcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMnM7XHJcbiAgfVxyXG4gIC5sb2dpbi1mb3JtIC5pbnB1dC1maWVsZCBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIH1cclxuICAubG9naW4tZm9ybSAuaW5wdXQtZmllbGQgaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB9XHJcbiAgLmxvZ2luLWZvcm0gLmlucHV0LWZpZWxkIGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIH1cclxuICAubG9naW4tZm9ybSAuaW5wdXQtZmllbGQgaW5wdXQ6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIH1cclxuICAubG9naW4tZm9ybSAuaW5wdXQtZmllbGQgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgfVxyXG4gIC5sb2dpbi1mb3JtIC5pbnB1dC1maWVsZCBpbnB1dDpmb2N1cyB7XHJcbiAgICBib3JkZXItY29sb3I6ICMyMjI7XHJcbiAgfVxyXG4gIC5sb2dpbi1mb3JtIGEubGluayB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogIzc0NzQ3NDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjJweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIH1cclxuICAubG9naW4tZm9ybSAuYWN0aW9uIHtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC13ZWJraXQtYm94LW9yaWVudDogaG9yaXpvbnRhbDtcclxuICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIH1cclxuICAubG9naW4tZm9ybSAuYWN0aW9uIGJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDE4cHg7XHJcbiAgICBmb250LWZhbWlseTogJ1J1YmlrJywgc2Fucy1zZXJpZjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZThlOWVjO1xyXG4gICAgY29sb3I6ICM3Nzc7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0cHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjJweDtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuM3M7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xyXG4gIH1cclxuICAubG9naW4tZm9ybSAuYWN0aW9uIGJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZDhkOGQ4O1xyXG4gIH1cclxuICAubG9naW4tZm9ybSAuYWN0aW9uIGJ1dHRvbjpudGgtY2hpbGQoMikge1xyXG4gICAgYmFja2dyb3VuZDogIzJkM2I1NTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0cHg7XHJcbiAgfVxyXG4gIC5sb2dpbi1mb3JtIC5hY3Rpb24gYnV0dG9uOm50aC1jaGlsZCgyKTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjM2M0ZDZkO1xyXG4gIH0iXX0= */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


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