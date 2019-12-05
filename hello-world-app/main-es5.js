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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<!--The content below is only a placeholder and can be replaced.-->\n<!-- <div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n Hello {{FirstName+\" \"+LastName }}\n <br>\n Contact: {{Contact}}\n <br>\n City: {{City}}\n</div> -->\n<app-slider></app-slider>\n<router-outlet></router-outlet>\n\n\n<!-- \n<app-table></app-table>\n<app-form></app-form>\n<app-panel></app-panel>\n<app-contact></app-contact>\n<hr/>\n<app-user1></app-user1>\n<hr/>\n<hr>\n<app-signup></app-signup>\n<hr> -->\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/contact/contact.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/contact/contact.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"contact\">\n<div class=\"container\">\n        <h2>Contact form</h2>\n        <form action=\"/action_page.php\">\n          <div class=\"form-group\">\n            <label for=\"email\">Email:</label>\n            <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Enter email\" name=\"email\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"pwd\">Password:</label>\n            <input type=\"password\" class=\"form-control\" id=\"pwd\" placeholder=\"Enter password\" name=\"pswd\">\n          </div>\n          <div class=\"form-group form-check\">\n            <label class=\"form-check-label\">\n              <input class=\"form-check-input\" type=\"checkbox\" name=\"remember\"> Remember me\n            </label>\n          </div>\n          <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n        </form>\n      </div>\n    </section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/form/form.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/form/form.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <form action=\"/action_page.php\">\n    <div class=\"form-group\">\n      <label for=\"email\">Email address:</label>\n      <input type=\"email\" class=\"form-control\" id=\"email\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"pwd\">Password:</label>\n      <input type=\"password\" class=\"form-control\" id=\"pwd\">\n    </div>\n    <div class=\"checkbox\">\n      <label><input type=\"checkbox\"> Remember me</label>\n    </div>\n    <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n  </form>\n   -->\n   <section id=\"abt\">   <div class=\"About\">\n        <div class=\"container\">\n     <h1>About Us</h1>\n     \n     <div class=\"row\">\n       <div class=\"col-sm\">\n         <img src=\"assets\\images\\robert-shunev-mS1nlYbq1kA-unsplash.jpg\">\n       </div>\n       <div class=\"col-md\">\n          <h2>Nature Photography</h2>\n          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n          <button type=\"button\" class=\"btn btn-outline-info\">Know More</button>\n        </div>\n\n \n     </div>\n    \n     \n    </div>\n  </div>\n</section>\n\n<div class=\"container\">\n  <h2>Employees Table</h2>\n  <p></p>            \n  <table class=\"table table-bordered\">\n    <thead>\n      <tr>\n        <th>Firstname</th>\n        <th>Lastname</th>\n        <th>Contact</th>\n        <th>City</th>\n      </tr>\n    </thead>\n    <tbody *ngFor=\"let emp of employee\"> \n      <tr>\n        <td>{{emp.firstName}}</td>\n        <td>{{emp.lastName}}</td>\n        <td>{{emp.contact}}</td>\n        <td>{{emp.city}}</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/header/header.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body data-spy=\"scroll\" data-target=\"mynav\" data-offset=\"500\">\n\n<nav id=\"mynav\"class=\"navbar navbar-expand-lg navbar-dark bg-dark sticky fixed-top\">\n  <a class=\"navbar-brand\" href=\"#\">Nature Photography</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav ml-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" >Home </a>\n      </li>\n      <li class=\"nav-item\">\n        <a routerLink=\"abt\" class=\"nav-link\">About Us</a>\n      </li>\n      <li class=\"nav-item\">\n        <a routerLink=\"gallery\" class=\"nav-link\">Gallery</a>\n      </li>\n      <li class=\"nav-item\">\n        <a routerLink=\"Table\" class=\"nav-link\">Contact Us</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/panel/panel.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/panel/panel.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container\">\n    <h2>Panel Heading</h2>\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\">Panel Heading</div>\n      <div class=\"panel-body\">Panel Content</div>\n    </div>\n  </div> -->\n  <section id=\"gallery\">\n      <h1>Image Gallery</h1>\n\n\n<div class=\"responsive\">\n  <div class=\"gallery\">\n    <a target=\"_blank\" href=\"assets\\images\\4.jpg\">\n      <img src=\"assets\\images\\4.jpg\" alt=\"Cinque Terre\" width=\"600\" height=\"400\">\n    </a>\n    <div class=\"desc\">Add a description of the image here</div>\n  </div>\n</div>\n\n\n<div class=\"responsive\">\n  <div class=\"gallery\">\n    <a target=\"_blank\" href=\"assets\\images\\3.jpg\">\n      <img src=\"assets\\images\\3.jpg\" alt=\"Forest\" width=\"600\" height=\"400\">\n    </a>\n    <div class=\"desc\">Add a description of the image here</div>\n  </div>\n</div>\n\n<div class=\"responsive\">\n  <div class=\"gallery\">\n    <a target=\"_blank\" href=\"assets\\images\\2.jpg\">\n      <img src=\"assets\\images\\2.jpg\" alt=\"Northern Lights\" width=\"600\" height=\"400\">\n    </a>\n    <div class=\"desc\">Add a description of the image here</div>\n  </div>\n</div>\n\n<div class=\"responsive\">\n  <div class=\"gallery\">\n    <a target=\"_blank\" href=\"assets\\images\\1.jpg\">\n      <img src=\"assets\\images\\1.jpg\" alt=\"Mountains\" width=\"600\" height=\"400\">\n    </a>\n    <div class=\"desc\">Add a description of the image here</div>\n  </div>\n</div>\n</section>\n\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/signup/signup.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/signup/signup.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>signup works!</p>\n\n<form>\n    <div class=\"form-group\">\n      <label>First Name:</label>\n      <input  class=\"form-control\" [(ngModel)]='firstName' name=\"firstName\">\n    </div>\n    <div class=\"form-group\">\n      <label>Last Name:</label>\n      <input [(ngModel)]='lastName' class=\"form-control\" name=\"lastName\">\n    </div>\n    \n    <button (click)=\"saveData()\" class=\"btn btn-primary\">Submit</button>\n  </form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/slider/slider.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/slider/slider.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\">\n    <div class=\"carousel-inner\">\n      <div class=\"carousel-item active\">\n        <img class=\"d-block w-100\" src=\"assets\\images\\banner-2143727_1920.jpg\" alt=\"First slide\">\n      </div>\n      <div class=\"carousel-item\">\n        <img class=\"d-block w-100\" src=\"assets\\images\\nature-2531761_1920.jpg\" alt=\"Second slide\">\n      </div>\n      <div class=\"carousel-item\">\n        <img class=\"d-block w-100\" src=\"assets\\images\\sunset-1645103_1920.jpg\" alt=\"Third slide\">\n      </div>\n    </div>\n    <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/table/table.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/table/table.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container\">\n    <h2>Contextual Classes</h2>\n    <p>Contextual classes can be used to color table rows or table cells. The classes that can be used are: .active, .success, .info, .warning, and .danger.</p>\n    <table class=\"table\">\n      <thead>\n        <tr>\n          <th>Firstname</th>\n          <th>Lastname</th>\n          <th>Email</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>Default</td>\n          <td>Defaultson</td>\n          <td>def@somemail.com</td>\n        </tr>      \n        <tr class=\"success\">\n          <td>Success</td>\n          <td>Doe</td>\n          <td>john@example.com</td>\n        </tr>\n        <tr class=\"danger\">\n          <td>Danger</td>\n          <td>Moe</td>\n          <td>mary@example.com</td>\n        </tr>\n        <tr class=\"info\">\n          <td>Info</td>\n          <td>Dooley</td>\n          <td>july@example.com</td>\n        </tr>\n        <tr class=\"warning\">\n          <td>Warning</td>\n          <td>Refs</td>\n          <td>bo@example.com</td>\n        </tr>\n        <tr class=\"active\">\n          <td>Active</td>\n          <td>Activeson</td>\n          <td>act@example.com</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n   -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/user.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/user.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Table from User</p>\n\n\n<div class=\"container\">\n    <h2>Contextual Classes</h2>\n    <p>Contextual classes can be used to color table rows or table cells. The classes that can be used are: .active, .success, .info, .warning, and .danger.</p>\n    <table class=\"table\">\n      <thead>\n        <tr>\n          <th>Firstname</th>\n          <th>Lastname</th>\n          <th>Email</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>Default</td>\n          <td>Defaultson</td>\n          <td>def@somemail.com</td>\n        </tr>      \n        <tr class=\"success\">\n          <td>Success</td>\n          <td>Doe</td>\n          <td>john@example.com</td>\n        </tr>\n        <tr class=\"danger\">\n          <td>Danger</td>\n          <td>Moe</td>\n          <td>mary@example.com</td>\n        </tr>\n        <tr class=\"info\">\n          <td>Info</td>\n          <td>Dooley</td>\n          <td>july@example.com</td>\n        </tr>\n        <tr class=\"warning\">\n          <td>Warning</td>\n          <td>Refs</td>\n          <td>bo@example.com</td>\n        </tr>\n        <tr class=\"active\">\n          <td>Active</td>\n          <td>Activeson</td>\n          <td>act@example.com</td>\n        </tr>\n      </tbody>\n    </table>\n    \n  </div>\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user1/user1.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user1/user1.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h2>Hello</h2>\n    <div class=\"panel panel-default\">\n       \n        Firs Name: {{firstName}}\n        <br>\n        Last Name: {{lastName}}\n        <br>\n        \n        Contact: {{contact}}\n        <br>\n        City: {{city}}\n        <br>\n        \n    </div>\n  </div>\n  <!-- <div *ngFor='let emp of employees'>              For NgFor Loop\n\n    {{emp.firstName}}\n    {{emp.lastName}}\n    {{emp.contact}}\n  </div> -->\n  \n  <div class=\"container\">\n    <h2>Employees Table</h2>\n    <p></p>            \n    <table class=\"table table-bordered\">\n      <thead>\n        <tr>\n          <th>Firstname</th>\n          <th>Lastname</th>\n          <th>Contact</th>\n          <th>City</th>\n        </tr>\n      </thead>\n      <tbody *ngFor=\"let emp of employees\"> \n        <tr>\n          <td>{{emp.name}}</td>\n          <td>{{emp.username}}</td>\n          <td>{{emp.phone}}</td>\n          <td>{{emp.address.city}}</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  \n\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'hello-Rahul-app';
        this.FirstName = 'Nikhil';
        this.LastName = 'Borde';
        this.Contact = '9404485777';
        this.City = 'Pune';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./form/form.component */ "./src/app/form/form.component.ts");
/* harmony import */ var _panel_panel_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./panel/panel.component */ "./src/app/panel/panel.component.ts");
/* harmony import */ var _table_table_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./table/table.component */ "./src/app/table/table.component.ts");
/* harmony import */ var _slider_slider_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./slider/slider.component */ "./src/app/slider/slider.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _user1_user1_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./user1/user1.component */ "./src/app/user1/user1.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_8__["UserComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
                _form_form_component__WEBPACK_IMPORTED_MODULE_10__["FormComponent"],
                _panel_panel_component__WEBPACK_IMPORTED_MODULE_11__["PanelComponent"],
                _table_table_component__WEBPACK_IMPORTED_MODULE_12__["TableComponent"],
                _slider_slider_component__WEBPACK_IMPORTED_MODULE_13__["SliderComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_14__["ContactComponent"],
                _user1_user1_component__WEBPACK_IMPORTED_MODULE_15__["User1Component"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_16__["SignupComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                    {
                        path: 'Table',
                        component: _user1_user1_component__WEBPACK_IMPORTED_MODULE_15__["User1Component"]
                    },
                    {
                        path: 'gallery',
                        component: _panel_panel_component__WEBPACK_IMPORTED_MODULE_11__["PanelComponent"]
                    },
                    {
                        path: 'abt',
                        component: _form_form_component__WEBPACK_IMPORTED_MODULE_10__["FormComponent"]
                    },
                ])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/index.js!./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        })
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var DataService = /** @class */ (function () {
    function DataService(httpClient) {
        this.httpClient = httpClient;
        this.myUrl = '../assets/mydata.json';
    }
    DataService.prototype.getData = function () {
        return this.httpClient.get('https://jsonplaceholder.typicode.com/users');
    };
    DataService.prototype.displayName = function () {
        alert("Hello World");
    };
    DataService.prototype.displayHello = function () {
        alert("Hello");
    };
    DataService.prototype.getEmployees = function () {
        return this.httpClient.get(this.myUrl);
    };
    DataService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/form/form.component.css":
/*!*****************************************!*\
  !*** ./src/app/form/form.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0vZm9ybS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/form/form.component.ts":
/*!****************************************!*\
  !*** ./src/app/form/form.component.ts ***!
  \****************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");



var FormComponent = /** @class */ (function () {
    function FormComponent(dataservice) {
        this.dataservice = dataservice;
    }
    FormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataservice.getEmployees().subscribe(function (res) {
            console.log(res);
            _this.employee = res;
        });
        this.dataservice.displayName();
    };
    FormComponent.ctorParameters = function () { return [
        { type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
    ]; };
    FormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-form',
            template: __webpack_require__(/*! raw-loader!./form.component.html */ "./node_modules/raw-loader/index.js!./src/app/form/form.component.html"),
            styles: [__webpack_require__(/*! ./form.component.css */ "./src/app/form/form.component.css")]
        })
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/panel/panel.component.css":
/*!*******************************************!*\
  !*** ./src/app/panel/panel.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhbmVsL3BhbmVsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/panel/panel.component.ts":
/*!******************************************!*\
  !*** ./src/app/panel/panel.component.ts ***!
  \******************************************/
/*! exports provided: PanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelComponent", function() { return PanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PanelComponent = /** @class */ (function () {
    function PanelComponent() {
    }
    PanelComponent.prototype.ngOnInit = function () {
    };
    PanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-panel',
            template: __webpack_require__(/*! raw-loader!./panel.component.html */ "./node_modules/raw-loader/index.js!./src/app/panel/panel.component.html"),
            styles: [__webpack_require__(/*! ./panel.component.css */ "./src/app/panel/panel.component.css")]
        })
    ], PanelComponent);
    return PanelComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SignupComponent = /** @class */ (function () {
    function SignupComponent() {
        this.firstName = '';
        this.lastName = '';
        this.contact = '';
        this.city = '';
    }
    SignupComponent.prototype.saveData = function () {
        alert(" welcome Onboard Mr " + this.firstName + " " + this.lastName);
    };
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/index.js!./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        })
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/slider/slider.component.css":
/*!*********************************************!*\
  !*** ./src/app/slider/slider.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NsaWRlci9zbGlkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/slider/slider.component.ts":
/*!********************************************!*\
  !*** ./src/app/slider/slider.component.ts ***!
  \********************************************/
/*! exports provided: SliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function() { return SliderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SliderComponent = /** @class */ (function () {
    function SliderComponent() {
    }
    SliderComponent.prototype.ngOnInit = function () {
    };
    SliderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-slider',
            template: __webpack_require__(/*! raw-loader!./slider.component.html */ "./node_modules/raw-loader/index.js!./src/app/slider/slider.component.html"),
            styles: [__webpack_require__(/*! ./slider.component.css */ "./src/app/slider/slider.component.css")]
        })
    ], SliderComponent);
    return SliderComponent;
}());



/***/ }),

/***/ "./src/app/table/table.component.css":
/*!*******************************************!*\
  !*** ./src/app/table/table.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYmxlL3RhYmxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/table/table.component.ts":
/*!******************************************!*\
  !*** ./src/app/table/table.component.ts ***!
  \******************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TableComponent = /** @class */ (function () {
    function TableComponent() {
    }
    TableComponent.prototype.ngOnInit = function () {
    };
    TableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-table',
            template: __webpack_require__(/*! raw-loader!./table.component.html */ "./node_modules/raw-loader/index.js!./src/app/table/table.component.html"),
            styles: [__webpack_require__(/*! ./table.component.css */ "./src/app/table/table.component.css")]
        })
    ], TableComponent);
    return TableComponent;
}());



/***/ }),

/***/ "./src/app/user/user.component.css":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserComponent = /** @class */ (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! raw-loader!./user.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        })
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/user1/user1.component.css":
/*!*******************************************!*\
  !*** ./src/app/user1/user1.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIxL3VzZXIxLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/user1/user1.component.ts":
/*!******************************************!*\
  !*** ./src/app/user1/user1.component.ts ***!
  \******************************************/
/*! exports provided: User1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User1Component", function() { return User1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");



var User1Component = /** @class */ (function () {
    function User1Component(dataservice) {
        this.dataservice = dataservice;
        this.firstName = "Nikhil";
        this.lastName = "Borde";
        this.contact = 9404485777;
        this.city = "Pune";
    }
    User1Component.prototype.ngOnInit = function () {
        var _this = this;
        this.dataservice.getData().subscribe(function (res) {
            console.log("res", res);
            _this.employees = res;
        });
        this.dataservice.displayName();
    };
    User1Component.ctorParameters = function () { return [
        { type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
    ]; };
    User1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user1',
            template: __webpack_require__(/*! raw-loader!./user1.component.html */ "./node_modules/raw-loader/index.js!./src/app/user1/user1.component.html"),
            styles: [__webpack_require__(/*! ./user1.component.css */ "./src/app/user1/user1.component.css")]
        })
    ], User1Component);
    return User1Component;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\prj\hello-world-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map