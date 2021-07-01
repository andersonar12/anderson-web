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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_contacto_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/contacto/contacto/contacto.component */ "./src/app/pages/contacto/contacto/contacto.component.ts");
/* harmony import */ var _pages_home_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/home/home.component */ "./src/app/pages/home/home/home.component.ts");
/* harmony import */ var _pages_portafolio_portafolio_portafolio_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/portafolio/portafolio/portafolio.component */ "./src/app/pages/portafolio/portafolio/portafolio.component.ts");
/* harmony import */ var _pages_skills_skills_skills_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/skills/skills/skills.component */ "./src/app/pages/skills/skills/skills.component.ts");








const routes = [
    { path: 'home', component: _pages_home_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], data: { animation: 'isLeft' } },
    { path: 'skills', component: _pages_skills_skills_skills_component__WEBPACK_IMPORTED_MODULE_5__["SkillsComponent"], data: { animation: 'enter' } },
    { path: 'portafolio', component: _pages_portafolio_portafolio_portafolio_component__WEBPACK_IMPORTED_MODULE_4__["PortafolioComponent"], data: { animation: 'trigger' } },
    { path: 'contacto', component: _pages_contacto_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_2__["ContactoComponent"], data: { animation: 'isRight' } },
    { path: '**', pathMatch: 'full', redirectTo: 'home', data: { animation: 'enter' } }
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_route_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/route-animations */ "./src/app/route-animations.ts");
/* harmony import */ var _components_navbar_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/navbar/navbar/navbar.component */ "./src/app/components/navbar/navbar/navbar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





class AppComponent {
    prepareRoute(outlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 1, consts: [["outlet", "outlet"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@routeAnimations", ctx.prepareRoute(_r0));
    } }, directives: [_components_navbar_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"], data: { animation: [
            src_app_route_animations__WEBPACK_IMPORTED_MODULE_1__["fader"]
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css'],
                animations: [
                    src_app_route_animations__WEBPACK_IMPORTED_MODULE_1__["fader"]
                ]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/navbar/navbar/navbar.component */ "./src/app/components/navbar/navbar/navbar.component.ts");
/* harmony import */ var _pages_home_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/home/home/home.component */ "./src/app/pages/home/home/home.component.ts");
/* harmony import */ var _pages_skills_skills_skills_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/skills/skills/skills.component */ "./src/app/pages/skills/skills/skills.component.ts");
/* harmony import */ var _pages_portafolio_portafolio_portafolio_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/portafolio/portafolio/portafolio.component */ "./src/app/pages/portafolio/portafolio/portafolio.component.ts");
/* harmony import */ var _pages_contacto_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/contacto/contacto/contacto.component */ "./src/app/pages/contacto/contacto/contacto.component.ts");
/* harmony import */ var _components_footer_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/footer/footer/footer.component */ "./src/app/components/footer/footer/footer.component.ts");
/* harmony import */ var _components_cards_cards_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/cards/cards.component */ "./src/app/components/cards/cards.component.ts");
/* harmony import */ var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/projects/projects.component */ "./src/app/components/projects/projects.component.ts");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");












/* import { GalleryModule } from 'ng-gallery';
import { LightboxModule } from  'ng-gallery/lightbox'; */




class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabsModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components_navbar_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
        _pages_home_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
        _pages_skills_skills_skills_component__WEBPACK_IMPORTED_MODULE_7__["SkillsComponent"],
        _pages_portafolio_portafolio_portafolio_component__WEBPACK_IMPORTED_MODULE_8__["PortafolioComponent"],
        _pages_contacto_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_9__["ContactoComponent"],
        _components_footer_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
        _components_cards_cards_component__WEBPACK_IMPORTED_MODULE_11__["CardsComponent"],
        _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_12__["ProjectsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabsModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _components_navbar_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                    _pages_home_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                    _pages_skills_skills_skills_component__WEBPACK_IMPORTED_MODULE_7__["SkillsComponent"],
                    _pages_portafolio_portafolio_portafolio_component__WEBPACK_IMPORTED_MODULE_8__["PortafolioComponent"],
                    _pages_contacto_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_9__["ContactoComponent"],
                    _components_footer_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
                    _components_cards_cards_component__WEBPACK_IMPORTED_MODULE_11__["CardsComponent"],
                    _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_12__["ProjectsComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabsModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/cards/cards.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/cards/cards.component.ts ***!
  \*****************************************************/
/*! exports provided: CardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsComponent", function() { return CardsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_skills_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/skills.service */ "./src/app/services/skills.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");




function CardsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skill_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", skill_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", skill_r1.porc + "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-valuenow", skill_r1.porc);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", skill_r1.porc, "%");
} }
class CardsComponent {
    constructor(skillsService) {
        this.skillsService = skillsService;
        this.skills = [];
    }
    ngOnInit() {
        this.skills = this.skillsService.getSkills();
    }
}
CardsComponent.ɵfac = function CardsComponent_Factory(t) { return new (t || CardsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_skills_service__WEBPACK_IMPORTED_MODULE_1__["SkillsService"])); };
CardsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardsComponent, selectors: [["app-cards"]], decls: 2, vars: 1, consts: [[1, "row", "d-flex", "justify-content-center"], ["class", "col-md-2 p-0 m-2 card-col", 4, "ngFor", "ngForOf"], [1, "col-md-2", "p-0", "m-2", "card-col"], [1, "card", "hvr-shutter-in-vertical"], ["alt", "Card image cap", 1, "img-fluid", 3, "src"], [1, "card-body"], [1, "card-title", "text-center"], [1, "p-2"], [1, "progress"], ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-striped", "progress-bar-animated"]], template: function CardsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CardsComponent_div_1_Template, 11, 6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.skills);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".card[_ngcontent-%COMP%]{\n    border: 3px solid rgb(0 110 221);\n    border-radius: 0.75rem;\n    box-shadow: 4px 5px 12px 1px #000000;\n}\n\n.card[_ngcontent-%COMP%]:hover{\n    cursor: pointer;\n}\n\n.card-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\n    margin-bottom: 0px!important;\n}\n\n@media screen and (min-width: 601px) and (max-width: 1000px) {\n    \n\n    .card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\n        font-size: 35px!important;\n    }\n  }\n\n@media screen and (min-width: 200px) and (max-width: 600px) {\n\n    .card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\n        font-size: 20px!important;\n    }\n    .row[_ngcontent-%COMP%]   .card-col[_ngcontent-%COMP%] {\n        margin: 2.5rem!important;\n  }\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJkcy9jYXJkcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0NBQWdDO0lBQ2hDLHNCQUFzQjtJQUN0QixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUdBOzs7SUFHSTtRQUNJLHlCQUF5QjtJQUM3QjtFQUNGOztBQUVGOztJQUVJO1FBQ0kseUJBQXlCO0lBQzdCO0lBQ0E7UUFDSSx3QkFBd0I7RUFDOUI7O0FBRUYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NhcmRzL2NhcmRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZHtcbiAgICBib3JkZXI6IDNweCBzb2xpZCByZ2IoMCAxMTAgMjIxKTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjc1cmVtO1xuICAgIGJveC1zaGFkb3c6IDRweCA1cHggMTJweCAxcHggIzAwMDAwMDtcbn1cblxuLmNhcmQ6aG92ZXJ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2FyZC10aXRsZSBoM3tcbiAgICBtYXJnaW4tYm90dG9tOiAwcHghaW1wb3J0YW50O1xufVxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMXB4KSBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gICAgXG5cbiAgICAuY2FyZCBoM3tcbiAgICAgICAgZm9udC1zaXplOiAzNXB4IWltcG9ydGFudDtcbiAgICB9XG4gIH1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMjAwcHgpIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuXG4gICAgLmNhcmQgaDN7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweCFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5yb3cgLmNhcmQtY29sIHtcbiAgICAgICAgbWFyZ2luOiAyLjVyZW0haW1wb3J0YW50O1xuICB9XG5cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cards',
                templateUrl: './cards.component.html',
                styleUrls: ['./cards.component.css']
            }]
    }], function () { return [{ type: _services_skills_service__WEBPACK_IMPORTED_MODULE_1__["SkillsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/footer/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/footer/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const _c0 = function () { return ["/contacto"]; };
class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 38, vars: 2, consts: [[1, "bg-primary", "footer", "mt-5"], [1, "container-fluid"], [1, "row", "d-flex", "justify-content-around"], [1, "col-md-4", "col-xs-6", "mt-5", "mb-3", "d-flex", "align-items-center", "justify-content-center"], ["src", "assets/img/logo-anderson-footer.png", "alt", "", "srcset", "", 1, "img-fluid", 2, "height", "95px", "background-color", "white", "border-radius", "48px"], [1, "col-md-4", "col-xs-6", "mt-5", "mb-3", "text-center"], [1, "text-white"], [1, "text-primary"], [1, "fas", "fa-code", "pr-1", "pl-1", "pt-2", "pb-2", "bg-light"], [1, "col-md-4", "col-xs-6", "mt-5", "mb-3", "text-white"], [1, "text-center"], [1, "btn", "btn-outline-primary", 3, "routerLink"], [1, "pl-1", "pr-1"], [1, "fas", "fa-address-card", "pr-1"], [1, "made-with"], [1, "row", "d-flex", "justify-content-center", "pt-3", "text-center"], [1, "col-12", "col-sm-12", "col-md-2", "pb-3", "d-flex", "align-items-center", "justify-content-center"], [1, "mb-0", "text-white"], [1, "col-4", "col-sm-6", "col-md-2", "pb-3"], ["src", "assets/img/angular.png", "width", "40px", "alt", "", "srcset", ""], ["src", "assets/img/bootstrap.png", "width", "40px", "alt", "", "srcset", ""], ["src", "assets/img/typescript.png", "width", "37px", "alt", "", "srcset", ""], [1, "col-6", "col-sm-6", "col-md-2", "pb-3"], ["src", "assets/img/firebase.png", "width", "40px", "alt", "", "srcset", ""], [1, "col-6", "col-sm-12", "col-md-2", "pb-3"], ["src", "assets/img/font_awesome_logo.png", "width", "40px", "alt", "", "srcset", ""]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \"Living, learning, & leveling up one day at a time\". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Start a project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Interested in working together? You can contact me and ask me what you need.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Contact me! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h4", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Made with:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".footer[_ngcontent-%COMP%]{\nbox-shadow: 1px 1px 13px 1px rgba(0,0,0,0.75);\n}\n\n.footer[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\n    border-radius: 35px;\n}\n\n.btn[_ngcontent-%COMP%]{\n    border-radius: 20px;\n}\n\n.btn-outline-primary[_ngcontent-%COMP%] {\n    color: #ffffff;\n    border-color: #ffffff;\n}\n\n.btn-outline-primary[_ngcontent-%COMP%]:hover {\n    color: #006fdd;;\n    background-color: #ffffff;;\n    border-color:  #006fdd;;\n}\n\n.made-with[_ngcontent-%COMP%]{\n    background-color: #0054a4!important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBR0EsNkNBQTZDO0FBQzdDOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksbUNBQW1DO0FBQ3ZDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlcntcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAtNXB4IDEzcHggLTFweCByZ2JhKDAsMCwwLDAuNzUpO1xuLW1vei1ib3gtc2hhZG93OiAxcHggMXB4IDEzcHggMXB4IHJnYmEoMCwwLDAsMC43NSk7XG5ib3gtc2hhZG93OiAxcHggMXB4IDEzcHggMXB4IHJnYmEoMCwwLDAsMC43NSk7XG59XG5cbi5mb290ZXIgaDEgaXtcbiAgICBib3JkZXItcmFkaXVzOiAzNXB4O1xufVxuXG4uYnRue1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi5idG4tb3V0bGluZS1wcmltYXJ5IHtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBib3JkZXItY29sb3I6ICNmZmZmZmY7XG59XG5cbi5idG4tb3V0bGluZS1wcmltYXJ5OmhvdmVyIHtcbiAgICBjb2xvcjogIzAwNmZkZDs7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjs7XG4gICAgYm9yZGVyLWNvbG9yOiAgIzAwNmZkZDs7XG59XG5cbi5tYWRlLXdpdGh7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTRhNCFpbXBvcnRhbnQ7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/navbar/navbar/navbar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/navbar/navbar/navbar.component.ts ***!
  \**************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const _c0 = function () { return ["home"]; };
const _c1 = function () { return ["skills"]; };
const _c2 = function () { return ["portafolio"]; };
const _c3 = function () { return ["contacto"]; };
class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
    click() {
        $(".navbar-collapse").collapse('hide');
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 26, vars: 10, consts: [[1, "header", "bg-light"], [1, "container-fluid"], [1, "navbar", "fixed-top", "navbar-expand-lg", "navbar-light", "bg-light", "d-flex", "justify-content-around", "pt-1", "pb-1"], [1, "navbar-brand", 3, "routerLink"], ["alt", "link", "src", "assets/img/logo-anderson.png", 1, "img-fluid", 2, "height", "55px"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarColor02", "aria-controls", "navbarColor02", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarColor02", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "w-100", "d-flex", "justify-content-center"], ["routerLinkActive", "active", 1, "nav-item", "pl-2", "pr-2", "text-center"], [1, "nav-link", "hvr-float-shadow", 3, "routerLink", "click"], [1, "fas", "fa-home", "pr-1"], [1, "fas", "fa-laptop-code", "pr-1"], [1, "fas", "fa-file-invoice", "pr-1"], [1, "nav-item", "pl-2", "pr-2", "text-center"], [1, "btn", "btn-primary", "nav-link", "hvr-grow-shadow", 3, "routerLink", "click"], [1, "text-white", "pl-1", "pr-1"], [1, "fas", "fa-address-card", "pr-1"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_10_listener() { return ctx.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " HOME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_14_listener() { return ctx.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " SKILLS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_18_listener() { return ctx.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " PORTAFOLIO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_22_listener() { return ctx.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " CONTACTO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c3));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: [".navbar-light[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {\n    color: rgb(49 13 13);\n    border-color:  #006fdd!important;\n}\n\n@media (max-width: 991px){\n    .header[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n        text-align: center!important;\n    }\n    }\n\nnav[_ngcontent-%COMP%]{\n    border-bottom: 3px solid  #006fdd;\n}\n\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\n    font-size: 20px!important;\n}\n\n.btn-primary[_ngcontent-%COMP%]{\n    border-radius: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQW9CO0lBQ3BCLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJO1FBQ0ksNEJBQTRCO0lBQ2hDO0lBQ0E7O0FBRUo7SUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyLWxpZ2h0IC5uYXZiYXItdG9nZ2xlciB7XG4gICAgY29sb3I6IHJnYig0OSAxMyAxMyk7XG4gICAgYm9yZGVyLWNvbG9yOiAgIzAwNmZkZCFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCl7XG4gICAgLmhlYWRlciB1bCBsaSBhe1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXIhaW1wb3J0YW50O1xuICAgIH1cbiAgICB9XG5cbm5hdntcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgICMwMDZmZGQ7XG59XG5cbm5hdiBhIGl7XG4gICAgZm9udC1zaXplOiAyMHB4IWltcG9ydGFudDtcbn1cblxuLmJ0bi1wcmltYXJ5e1xuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/projects/projects.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/projects/projects.component.ts ***!
  \***********************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");






function ProjectsComponent_mat_tab_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsComponent_mat_tab_3_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const image_r1 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.imagePreview(image_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const image_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("label", i_r2 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", image_r1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class ProjectsComponent {
    constructor() {
        this.selectIndex = 0;
    }
    ngOnInit() {
        this.tabsAutoPlay();
    }
    imagePreview(imagen) {
        Swal.fire({
            imageUrl: imagen,
            width: 'auto',
        });
    }
    selected(event) {
        /* console.log(event); */
    }
    tabsAutoPlay() {
        this.intervalSub = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(3000).subscribe(() => {
            if (this.images.length - 1 == this.selectIndex) {
                this.selectIndex = 0;
                return;
            }
            this.selectIndex++;
        });
    }
    ngOnDestroy() {
        this.intervalSub.unsubscribe();
        /*  console.log('Interval Cleaned'); */
    }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) { return new (t || ProjectsComponent)(); };
ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectsComponent, selectors: [["app-projects"]], inputs: { images: "images" }, decls: 4, vars: 2, consts: [["dynamicHeight", "", 3, "selectedIndex", "focusChange", "selectedIndexChange"], [3, "label", 4, "ngFor", "ngForOf"], [3, "label"], ["alt", "", "width", "100%", "srcset", "", 1, "", 3, "src", "click"]], template: function ProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-tab-group", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focusChange", function ProjectsComponent_Template_mat_tab_group_focusChange_2_listener($event) { return ctx.selected($event); })("selectedIndexChange", function ProjectsComponent_Template_mat_tab_group_selectedIndexChange_2_listener($event) { return ctx.selectIndex = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProjectsComponent_mat_tab_3_Template, 2, 2, "mat-tab", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedIndex", ctx.selectIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.images);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabGroup"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTab"]], styles: ["img[_ngcontent-%COMP%]:hover{\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZzpob3ZlcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-projects',
                templateUrl: './projects.component.html',
                styleUrls: ['./projects.component.css'],
            }]
    }], function () { return []; }, { images: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['images']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/contacto/contacto/contacto.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/contacto/contacto/contacto.component.ts ***!
  \***************************************************************/
/*! exports provided: ContactoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactoComponent", function() { return ContactoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _components_footer_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/footer/footer/footer.component */ "./src/app/components/footer/footer/footer.component.ts");




function ContactoComponent_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Cargando...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ContactoComponent {
    constructor() {
        this.spinner = true;
        this.time = 1000;
    }
    ngOnInit() {
        hbspt.forms.create({
            portalId: "8490019",
            formId: "96e9b86e-4ef9-44e1-958d-7270f28ad9c4",
            target: "#hubspotForm"
        });
        setInterval(() => {
            const elemento = document.getElementsByTagName('iframe');
            if (elemento) {
                this.spinner = false;
                clearInterval(this.time);
            }
        }, this.time);
    }
}
ContactoComponent.ɵfac = function ContactoComponent_Factory(t) { return new (t || ContactoComponent)(); };
ContactoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactoComponent, selectors: [["app-contacto"]], decls: 47, vars: 1, consts: [[1, "contacto"], [1, "container-fluid", "pt-4"], [1, "row", "d-flex", "justify-content-arround"], [1, "col-md-5", "d-flex", "align-items-center", "justify-content-center"], [1, "text-primary", "text-center"], [1, "row"], [1, "col", "item", "p-3", "m-2", "text-center", "hvr-grow-shadow"], [1, "text-primary"], ["src", "assets/img/location.png", "alt", "", "height", "60px", "srcset", "", 1, ""], ["href", "https://wa.me/+584241835074?texto=Hello%20i%20am%20interested%20in%20working%20with%20you", "target", "_blank"], ["src", "assets/img/phone.png", "alt", "", "height", "60px", "srcset", "", 1, ""], ["target", "_blank", "href", "https://www.linkedin.com/in/anderson-webdev-29340523/"], ["src", "assets/img/linkedin.png", "alt", "", "height", "60px", "srcset", "", 1, ""], ["target", "_blank", "href", "mailto:aromerocangri.14@gmail.com"], ["src", "assets/img/email.png", "alt", "", "height", "60px", "srcset", "", 1, ""], [1, "col-md-6", "formulario", "p-3", "m-2"], [1, "col"], ["class", "col text-center pt-5", 4, "ngIf"], ["id", "hubspotForm", 1, "text-center"], [1, "col", "text-center", "pt-5"], ["role", "status", 1, "spinner-border", "text-success", 2, "width", "5rem", "height", "5rem"], [1, "sr-only"]], template: function ContactoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "CONTACT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Location ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Zulia, Venezuela");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Phone Number ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "+58 424 1835074");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " LinkedIn ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Anderson Romero");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "aromerocangri.14@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Send Me! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, ContactoComponent_div_43_Template, 6, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.spinner);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _components_footer_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]], styles: [".contacto[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]{\n    border: 3px solid #006edd;\n    border-radius: 30px;\n    box-shadow: 4px 5px 12px 1px #000000;\n}   \n\n.contacto[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{\n    border: 3px solid #006edd;\n    border-radius: 30px;\n}   \n\n.contacto[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover{\n    cursor: pointer;\n}   \n\n.contacto[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n    color: black;\n}   \n\n.contacto[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\n    text-decoration: none;\n}   \n\np[_ngcontent-%COMP%]{\n    margin-bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udGFjdG8vY29udGFjdG8vY29udGFjdG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUdBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY29udGFjdG8vY29udGFjdG8vY29udGFjdG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWN0byAuZm9ybXVsYXJpb3tcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjMDA2ZWRkO1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgYm94LXNoYWRvdzogNHB4IDVweCAxMnB4IDFweCAjMDAwMDAwO1xufSAgIFxuXG4uY29udGFjdG8gLml0ZW17XG4gICAgYm9yZGVyOiAzcHggc29saWQgIzAwNmVkZDtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xufVxuXG4uY29udGFjdG8gLml0ZW06aG92ZXJ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY29udGFjdG8gLml0ZW0gYXtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi5jb250YWN0byAuaXRlbSBhOmhvdmVye1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuXG5we1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contacto',
                templateUrl: './contacto.component.html',
                styleUrls: ['./contacto.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/home/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/home/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_footer_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/footer/footer/footer.component */ "./src/app/components/footer/footer/footer.component.ts");




const _c0 = function () { return ["/skills"]; };
const _c1 = function () { return ["/portafolio"]; };
class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 94, vars: 4, consts: [["id", "carouselExampleControls", "data-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-inner"], [1, "carousel-item", "active"], ["src", "assets/img/1_ZeixM2OCyy_xUEKMnSp_bQ.jpg", "alt", "First slide", 1, "d-block", "w-100"], [1, "carousel-caption", "slider-1"], [1, "imagen-dev"], ["src", "assets/img/profile.jpg", "alt", "", "srcset", "", 1, "img-fluid", "imagen-1"], [1, "carousel-label"], [1, "carousel-item"], ["src", "assets/img/gray-laptop-computer-showing-html-codes-in-shallow-focus-160107-scaled.jpg", "alt", "Second slide", 1, "d-block", "w-100"], [1, "carousel-caption", "slider-2"], [1, ""], [1, "fas", "fa-code", "pr-2", "pl-2", "pt-3", "pb-3", "bg-primary", "icono"], ["src", "assets/img/1_ee9Ji2ToUxeYfj3YUQ1xsA.jpeg", "alt", "Third slide", 1, "d-block", "w-100"], [1, "carousel-caption", "slider-3"], ["src", "assets/img/Web-design-600x600 modified.png", "alt", "", "srcset", "", 1, "img-fluid", "imagen-3"], [1, "carousel-label", "mt-3"], ["href", "#carouselExampleControls", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "sr-only"], ["href", "#carouselExampleControls", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], [1, "about", "container"], [1, "row", "d-flex", "justify-content-around", "pt-5"], [1, "col-md-5", "col-lg-5", "orden", "imagen", "d-flex", "align-items-center", "justify-content-center"], ["alt", "link", "src", "assets/img/aboutme.jpg", 1, "img-fluid"], [1, "col-md-5", "d-flex", "align-items-center"], [1, "text-center"], [1, "mt-5", "text-primary"], [1, "pl-5", "pr-5"], [1, "btn", "btn-primary", "mb-5", "hvr-grow-shadow", 3, "routerLink"], [1, "text-white", "pl-5", "pr-5"], [1, "container"], [1, "col-md-5", "col-lg-5", "imagen", "d-flex", "align-items-center", "justify-content-center"], ["alt", "link", "src", "assets/img/front-end-developer-role-74120a0c.png", 1, "img-fluid"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Anderson Romero");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Web Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h5", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "from Venezuela");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " I like to code things from scratch and enjoy bringing ideas to life in digital interfaces in the browser.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h2", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Websites with a user-friendly ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "interface and fully adaptable to the screens. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h3", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "ABOUT ME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "I am a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Systems Engineer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Web Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " about 2 years i have specialized in client-side web development technologies with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, ", hybrid (mobile) or PWA applications with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Ionic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, ", also i have made sites with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Wordpress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "PHP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " projects. Transforming digital ideas from sketches and prototypes. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "MORE INFO...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h3", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "PROJECTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "You can check my ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, ", where you can see each of the work done in a practical way and those done to clients, start-ups and companies. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "MORE INFO...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _components_footer_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]], styles: [".imagen-dev[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    border-radius: 120px;\n    border: 10px solid  #006fdd; \n    box-shadow: 0px 0px 15px 5px #000000; \n}\n\n.slider-3[_ngcontent-%COMP%]   .imagen-dev[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    border-radius: 60px;\n    border: 10px solid  #006fdd; \n    box-shadow: 0px 0px 15px 5px #000000; \n}\n\n.carousel[_ngcontent-%COMP%]{\n    box-shadow: -3px -3px 30px 4px #000000;\n}\n\n.carousel-caption[_ngcontent-%COMP%]{\n    bottom: 25%!important;\n}\n\n.carousel-caption.slider-1[_ngcontent-%COMP%]{\n    bottom: 20%!important;\n}\n\n.carousel-label[_ngcontent-%COMP%]{\n    font-size: 60px;\n    text-shadow: 2px 2px 4px #000000!important;\n}\n\n.carousel-item[_ngcontent-%COMP%]   .icono[_ngcontent-%COMP%]{\n    font-size: 60px!important;\n    border-radius: 50px!important;\n    box-shadow: 2px 2px 4px #000000!important;\n}\n\n.carousel-caption[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\n    font-size: 45px!important;\n}\n\n.carousel-caption[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{\n    font-size: 35px!important;\n}\n\n.about[_ngcontent-%COMP%]   .imagen[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    border-radius: 70px;\n    border: 4px solid  #006fdd;\n    box-shadow: 0px 0px 15px 5px #000000; \n}\n\n.about[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    font-size: 20px;\n}\n\n.about[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\n    font-size: 35px;\n    letter-spacing: 0.30rem;\n}\n\n.about[_ngcontent-%COMP%]   .orden[_ngcontent-%COMP%]{\n    order: 1;\n}\n\n@media (min-width:768px) {\n    .about[_ngcontent-%COMP%]   .orden[_ngcontent-%COMP%]{\n        order: unset;\n    }\n}\n\n@media screen and (min-width: 955px) and (max-width: 1125px) {\n    \n    .carousel-caption[_ngcontent-%COMP%]{\n        bottom: 18%!important;\n    }\n    \n    .carousel-caption.slider-1[_ngcontent-%COMP%]{\n        bottom: 12%!important;\n    }\n\n    .carousel-caption[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\n        font-size: 40px!important;\n    }\n\n    .carousel-caption[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{\n        font-size: 30px!important;\n    }\n\n    .carousel-item[_ngcontent-%COMP%]   .imagen-1[_ngcontent-%COMP%]{\n        width: 200px;\n    }\n\n    .carousel-item[_ngcontent-%COMP%]   .imagen-3[_ngcontent-%COMP%]{\n        width: 260px;\n    }\n    \n  }\n\n@media screen and (min-width: 750px) and (max-width: 955px) {\n    \n\n    .carousel-caption[_ngcontent-%COMP%]{\n        bottom: 17%!important;\n    }\n    \n    .carousel-caption.slider-1[_ngcontent-%COMP%]{\n        bottom: 11%!important;\n    }\n\n    .carousel-caption[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n        font-size: 40px!important;\n    }\n\n    .carousel-caption[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\n        font-size: 35px!important;\n    }\n\n    .carousel-caption[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{\n        font-size: 25px!important;\n    }\n\n    .carousel-item[_ngcontent-%COMP%]   .imagen-1[_ngcontent-%COMP%]{\n        width: 170px;\n    }\n\n    .carousel-item[_ngcontent-%COMP%]   .imagen-3[_ngcontent-%COMP%]{\n        width: 230px;\n    }\n  }\n\n@media screen and (min-width: 645px) and (max-width: 750px) {\n    \n\n    .carousel-caption[_ngcontent-%COMP%]{\n        bottom: 16%!important;\n    }\n    \n    .carousel-caption.slider-1[_ngcontent-%COMP%]{\n        bottom: 10%!important;\n    }\n\n    .carousel-caption.slider-3[_ngcontent-%COMP%]{\n        bottom: 8%!important;\n    }\n\n   \n    .carousel-caption[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n        font-size: 35px!important;\n    }\n\n    .carousel-caption[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\n        font-size: 30px!important;\n    }\n\n    .carousel-caption[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{\n        font-size: 20px!important;\n    }\n\n    .carousel-item[_ngcontent-%COMP%]   .imagen-1[_ngcontent-%COMP%]{\n        width: 130px;\n    }\n\n    .carousel-item[_ngcontent-%COMP%]   .imagen-3[_ngcontent-%COMP%]{\n        width: 200px;\n    }\n  }\n\n@media screen and (min-width: 400px) and (max-width: 644px) {\n    \n\n    .carousel-caption[_ngcontent-%COMP%]{\n        bottom: 0%!important;\n    }\n    \n    .carousel-caption.slider-1[_ngcontent-%COMP%]{\n        bottom: 0%!important;\n    }\n\n    .carousel-caption.slider-3[_ngcontent-%COMP%]{\n        bottom: -11%!important;\n    }\n    .slider-3[_ngcontent-%COMP%]   .carousel-label[_ngcontent-%COMP%]{\n        margin-top: 0px!important;\n    }\n    .carousel-item[_ngcontent-%COMP%]   .icono[_ngcontent-%COMP%]{\n        font-size: 20px!important;\n        padding-top: 10px!important;\n        padding-bottom: 10px!important;\n    }\n    .carousel-caption[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n        font-size: 26px!important;\n    }\n\n    .carousel-caption[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\n        font-size: 21px!important;\n    }\n\n    .carousel-caption[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{\n        font-size: 13px!important;\n    }\n\n    .carousel-item[_ngcontent-%COMP%]   .imagen-1[_ngcontent-%COMP%]{\n        width: 80px;\n    }\n\n    .carousel-item[_ngcontent-%COMP%]   .imagen-3[_ngcontent-%COMP%]{\n        width: 150px;\n    }\n  }\n\n@media screen and (min-width: 50px) and (max-width: 399px) {\n    \n    .carousel-caption[_ngcontent-%COMP%]{\n        bottom: 1%!important;\n    }\n    \n    .carousel-caption.slider-1[_ngcontent-%COMP%]{\n        bottom: 0%!important;\n    }\n    .carousel-caption.slider-3[_ngcontent-%COMP%]{\n        bottom: 0%!important;\n    }\n\n    .imagen-dev[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n        border: 4px solid  #006fdd;  \n    }\n\n    .slider-3[_ngcontent-%COMP%]   .imagen-dev[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n        border: 4px solid  #006fdd; \n    }\n    .carousel-caption[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n        font-size: 20px!important;\n    }\n    .carousel-item[_ngcontent-%COMP%]   .icono[_ngcontent-%COMP%]{\n        font-size: 20px!important;\n        padding-top: 10px!important;\n        padding-bottom: 10px!important;\n    }\n    .carousel-caption[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\n        font-size: 16px!important;\n    }\n\n    .carousel-caption[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{\n        font-size: 9px!important;\n    }\n\n    .carousel-item[_ngcontent-%COMP%]   .imagen-1[_ngcontent-%COMP%]{\n        width: 80px;\n    }\n\n    .carousel-item[_ngcontent-%COMP%]   .imagen-3[_ngcontent-%COMP%]{\n        width: 95px;\n    }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9CQUFvQjtJQUNwQiwyQkFBMkI7SUFFM0Isb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUUzQixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxzQ0FBc0M7QUFDMUM7O0FBR0E7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsMENBQTBDO0FBQzlDOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLDZCQUE2QjtJQUM3Qix5Q0FBeUM7QUFDN0M7O0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsMEJBQTBCO0lBQzFCLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksUUFBUTtBQUNaOztBQUVBO0lBQ0k7UUFDSSxZQUFZO0lBQ2hCO0FBQ0o7O0FBR0E7O0lBRUk7UUFDSSxxQkFBcUI7SUFDekI7O0lBRUE7UUFDSSxxQkFBcUI7SUFDekI7O0lBRUE7UUFDSSx5QkFBeUI7SUFDN0I7O0lBRUE7UUFDSSx5QkFBeUI7SUFDN0I7O0lBRUE7UUFDSSxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksWUFBWTtJQUNoQjs7RUFFRjs7QUFFRjs7O0lBR0k7UUFDSSxxQkFBcUI7SUFDekI7O0lBRUE7UUFDSSxxQkFBcUI7SUFDekI7O0lBRUE7UUFDSSx5QkFBeUI7SUFDN0I7O0lBRUE7UUFDSSx5QkFBeUI7SUFDN0I7O0lBRUE7UUFDSSx5QkFBeUI7SUFDN0I7O0lBRUE7UUFDSSxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksWUFBWTtJQUNoQjtFQUNGOztBQUVGOzs7SUFHSTtRQUNJLHFCQUFxQjtJQUN6Qjs7SUFFQTtRQUNJLHFCQUFxQjtJQUN6Qjs7SUFFQTtRQUNJLG9CQUFvQjtJQUN4Qjs7O0lBR0E7UUFDSSx5QkFBeUI7SUFDN0I7O0lBRUE7UUFDSSx5QkFBeUI7SUFDN0I7O0lBRUE7UUFDSSx5QkFBeUI7SUFDN0I7O0lBRUE7UUFDSSxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksWUFBWTtJQUNoQjtFQUNGOztBQUVGOzs7SUFHSTtRQUNJLG9CQUFvQjtJQUN4Qjs7SUFFQTtRQUNJLG9CQUFvQjtJQUN4Qjs7SUFFQTtRQUNJLHNCQUFzQjtJQUMxQjtJQUNBO1FBQ0kseUJBQXlCO0lBQzdCO0lBQ0E7UUFDSSx5QkFBeUI7UUFDekIsMkJBQTJCO1FBQzNCLDhCQUE4QjtJQUNsQztJQUNBO1FBQ0kseUJBQXlCO0lBQzdCOztJQUVBO1FBQ0kseUJBQXlCO0lBQzdCOztJQUVBO1FBQ0kseUJBQXlCO0lBQzdCOztJQUVBO1FBQ0ksV0FBVztJQUNmOztJQUVBO1FBQ0ksWUFBWTtJQUNoQjtFQUNGOztBQUVBOztJQUVFO1FBQ0ksb0JBQW9CO0lBQ3hCOztJQUVBO1FBQ0ksb0JBQW9CO0lBQ3hCO0lBQ0E7UUFDSSxvQkFBb0I7SUFDeEI7O0lBRUE7UUFDSSwwQkFBMEI7SUFDOUI7O0lBRUE7UUFDSSwwQkFBMEI7SUFDOUI7SUFDQTtRQUNJLHlCQUF5QjtJQUM3QjtJQUNBO1FBQ0kseUJBQXlCO1FBQ3pCLDJCQUEyQjtRQUMzQiw4QkFBOEI7SUFDbEM7SUFDQTtRQUNJLHlCQUF5QjtJQUM3Qjs7SUFFQTtRQUNJLHdCQUF3QjtJQUM1Qjs7SUFFQTtRQUNJLFdBQVc7SUFDZjs7SUFFQTtRQUNJLFdBQVc7SUFDZjtFQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWFnZW4tZGV2IGltZ3tcbiAgICBib3JkZXItcmFkaXVzOiAxMjBweDtcbiAgICBib3JkZXI6IDEwcHggc29saWQgICMwMDZmZGQ7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDE1cHggNXB4ICMwMDAwMDA7IFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTVweCA1cHggIzAwMDAwMDsgXG59XG5cbi5zbGlkZXItMyAuaW1hZ2VuLWRldiBpbWd7XG4gICAgYm9yZGVyLXJhZGl1czogNjBweDtcbiAgICBib3JkZXI6IDEwcHggc29saWQgICMwMDZmZGQ7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDE1cHggNXB4ICMwMDAwMDA7IFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTVweCA1cHggIzAwMDAwMDsgXG59XG5cbi5jYXJvdXNlbHtcbiAgICBib3gtc2hhZG93OiAtM3B4IC0zcHggMzBweCA0cHggIzAwMDAwMDtcbn1cblxuXG4uY2Fyb3VzZWwtY2FwdGlvbntcbiAgICBib3R0b206IDI1JSFpbXBvcnRhbnQ7XG59XG5cbi5jYXJvdXNlbC1jYXB0aW9uLnNsaWRlci0xe1xuICAgIGJvdHRvbTogMjAlIWltcG9ydGFudDtcbn1cblxuLmNhcm91c2VsLWxhYmVse1xuICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCA0cHggIzAwMDAwMCFpbXBvcnRhbnQ7XG59XG5cbi5jYXJvdXNlbC1pdGVtIC5pY29ub3tcbiAgICBmb250LXNpemU6IDYwcHghaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHghaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IDJweCAycHggNHB4ICMwMDAwMDAhaW1wb3J0YW50O1xufVxuLmNhcm91c2VsLWNhcHRpb24gaDJ7XG4gICAgZm9udC1zaXplOiA0NXB4IWltcG9ydGFudDtcbn1cblxuLmNhcm91c2VsLWNhcHRpb24gaDV7XG4gICAgZm9udC1zaXplOiAzNXB4IWltcG9ydGFudDtcbn1cblxuLmFib3V0IC5pbWFnZW4gaW1ne1xuICAgIGJvcmRlci1yYWRpdXM6IDcwcHg7XG4gICAgYm9yZGVyOiA0cHggc29saWQgICMwMDZmZGQ7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IDVweCAjMDAwMDAwOyBcbn1cblxuLmFib3V0IHB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uYWJvdXQgaDN7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjMwcmVtO1xufVxuXG4uYWJvdXQgLm9yZGVue1xuICAgIG9yZGVyOiAxO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDo3NjhweCkge1xuICAgIC5hYm91dCAub3JkZW57XG4gICAgICAgIG9yZGVyOiB1bnNldDtcbiAgICB9XG59XG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTU1cHgpIGFuZCAobWF4LXdpZHRoOiAxMTI1cHgpIHtcbiAgICBcbiAgICAuY2Fyb3VzZWwtY2FwdGlvbntcbiAgICAgICAgYm90dG9tOiAxOCUhaW1wb3J0YW50O1xuICAgIH1cbiAgICBcbiAgICAuY2Fyb3VzZWwtY2FwdGlvbi5zbGlkZXItMXtcbiAgICAgICAgYm90dG9tOiAxMiUhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5jYXJvdXNlbC1jYXB0aW9uIGgye1xuICAgICAgICBmb250LXNpemU6IDQwcHghaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5jYXJvdXNlbC1jYXB0aW9uIGg1e1xuICAgICAgICBmb250LXNpemU6IDMwcHghaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5jYXJvdXNlbC1pdGVtIC5pbWFnZW4tMXtcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgIH1cblxuICAgIC5jYXJvdXNlbC1pdGVtIC5pbWFnZW4tM3tcbiAgICAgICAgd2lkdGg6IDI2MHB4O1xuICAgIH1cbiAgICBcbiAgfVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NTBweCkgYW5kIChtYXgtd2lkdGg6IDk1NXB4KSB7XG4gICAgXG5cbiAgICAuY2Fyb3VzZWwtY2FwdGlvbntcbiAgICAgICAgYm90dG9tOiAxNyUhaW1wb3J0YW50O1xuICAgIH1cbiAgICBcbiAgICAuY2Fyb3VzZWwtY2FwdGlvbi5zbGlkZXItMXtcbiAgICAgICAgYm90dG9tOiAxMSUhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5jYXJvdXNlbC1jYXB0aW9uIGgxe1xuICAgICAgICBmb250LXNpemU6IDQwcHghaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5jYXJvdXNlbC1jYXB0aW9uIGgye1xuICAgICAgICBmb250LXNpemU6IDM1cHghaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5jYXJvdXNlbC1jYXB0aW9uIGg1e1xuICAgICAgICBmb250LXNpemU6IDI1cHghaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5jYXJvdXNlbC1pdGVtIC5pbWFnZW4tMXtcbiAgICAgICAgd2lkdGg6IDE3MHB4O1xuICAgIH1cblxuICAgIC5jYXJvdXNlbC1pdGVtIC5pbWFnZW4tM3tcbiAgICAgICAgd2lkdGg6IDIzMHB4O1xuICAgIH1cbiAgfVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NDVweCkgYW5kIChtYXgtd2lkdGg6IDc1MHB4KSB7XG4gICAgXG5cbiAgICAuY2Fyb3VzZWwtY2FwdGlvbntcbiAgICAgICAgYm90dG9tOiAxNiUhaW1wb3J0YW50O1xuICAgIH1cbiAgICBcbiAgICAuY2Fyb3VzZWwtY2FwdGlvbi5zbGlkZXItMXtcbiAgICAgICAgYm90dG9tOiAxMCUhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5jYXJvdXNlbC1jYXB0aW9uLnNsaWRlci0ze1xuICAgICAgICBib3R0b206IDglIWltcG9ydGFudDtcbiAgICB9XG5cbiAgIFxuICAgIC5jYXJvdXNlbC1jYXB0aW9uIGgxe1xuICAgICAgICBmb250LXNpemU6IDM1cHghaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5jYXJvdXNlbC1jYXB0aW9uIGgye1xuICAgICAgICBmb250LXNpemU6IDMwcHghaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5jYXJvdXNlbC1jYXB0aW9uIGg1e1xuICAgICAgICBmb250LXNpemU6IDIwcHghaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5jYXJvdXNlbC1pdGVtIC5pbWFnZW4tMXtcbiAgICAgICAgd2lkdGg6IDEzMHB4O1xuICAgIH1cblxuICAgIC5jYXJvdXNlbC1pdGVtIC5pbWFnZW4tM3tcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgIH1cbiAgfVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MDBweCkgYW5kIChtYXgtd2lkdGg6IDY0NHB4KSB7XG4gICAgXG5cbiAgICAuY2Fyb3VzZWwtY2FwdGlvbntcbiAgICAgICAgYm90dG9tOiAwJSFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIFxuICAgIC5jYXJvdXNlbC1jYXB0aW9uLnNsaWRlci0xe1xuICAgICAgICBib3R0b206IDAlIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuY2Fyb3VzZWwtY2FwdGlvbi5zbGlkZXItM3tcbiAgICAgICAgYm90dG9tOiAtMTElIWltcG9ydGFudDtcbiAgICB9XG4gICAgLnNsaWRlci0zIC5jYXJvdXNlbC1sYWJlbHtcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4IWltcG9ydGFudDtcbiAgICB9XG4gICAgLmNhcm91c2VsLWl0ZW0gLmljb25ve1xuICAgICAgICBmb250LXNpemU6IDIwcHghaW1wb3J0YW50O1xuICAgICAgICBwYWRkaW5nLXRvcDogMTBweCFpbXBvcnRhbnQ7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4IWltcG9ydGFudDtcbiAgICB9XG4gICAgLmNhcm91c2VsLWNhcHRpb24gaDF7XG4gICAgICAgIGZvbnQtc2l6ZTogMjZweCFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmNhcm91c2VsLWNhcHRpb24gaDJ7XG4gICAgICAgIGZvbnQtc2l6ZTogMjFweCFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmNhcm91c2VsLWNhcHRpb24gaDV7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweCFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmNhcm91c2VsLWl0ZW0gLmltYWdlbi0xe1xuICAgICAgICB3aWR0aDogODBweDtcbiAgICB9XG5cbiAgICAuY2Fyb3VzZWwtaXRlbSAuaW1hZ2VuLTN7XG4gICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICB9XG4gIH1cblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MHB4KSBhbmQgKG1heC13aWR0aDogMzk5cHgpIHtcbiAgICBcbiAgICAuY2Fyb3VzZWwtY2FwdGlvbntcbiAgICAgICAgYm90dG9tOiAxJSFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIFxuICAgIC5jYXJvdXNlbC1jYXB0aW9uLnNsaWRlci0xe1xuICAgICAgICBib3R0b206IDAlIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmNhcm91c2VsLWNhcHRpb24uc2xpZGVyLTN7XG4gICAgICAgIGJvdHRvbTogMCUhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5pbWFnZW4tZGV2IGltZ3tcbiAgICAgICAgYm9yZGVyOiA0cHggc29saWQgICMwMDZmZGQ7ICBcbiAgICB9XG5cbiAgICAuc2xpZGVyLTMgLmltYWdlbi1kZXYgaW1ne1xuICAgICAgICBib3JkZXI6IDRweCBzb2xpZCAgIzAwNmZkZDsgXG4gICAgfVxuICAgIC5jYXJvdXNlbC1jYXB0aW9uIGgxe1xuICAgICAgICBmb250LXNpemU6IDIwcHghaW1wb3J0YW50O1xuICAgIH1cbiAgICAuY2Fyb3VzZWwtaXRlbSAuaWNvbm97XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweCFpbXBvcnRhbnQ7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4IWltcG9ydGFudDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHghaW1wb3J0YW50O1xuICAgIH1cbiAgICAuY2Fyb3VzZWwtY2FwdGlvbiBoMntcbiAgICAgICAgZm9udC1zaXplOiAxNnB4IWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuY2Fyb3VzZWwtY2FwdGlvbiBoNXtcbiAgICAgICAgZm9udC1zaXplOiA5cHghaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5jYXJvdXNlbC1pdGVtIC5pbWFnZW4tMXtcbiAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgfVxuXG4gICAgLmNhcm91c2VsLWl0ZW0gLmltYWdlbi0ze1xuICAgICAgICB3aWR0aDogOTVweDtcbiAgICB9XG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/portafolio/portafolio/portafolio.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/portafolio/portafolio/portafolio.component.ts ***!
  \*********************************************************************/
/*! exports provided: PortafolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortafolioComponent", function() { return PortafolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_projects_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/projects.service */ "./src/app/services/projects.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _components_footer_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/footer/footer/footer.component */ "./src/app/components/footer/footer/footer.component.ts");
/* harmony import */ var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/projects/projects.component */ "./src/app/components/projects/projects.component.ts");






function PortafolioComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-projects", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("images", project_r1.images);
} }
class PortafolioComponent {
    constructor(projectServices) {
        this.projectServices = projectServices;
        this.projects = [];
        this.projects = this.projectServices.projects;
    }
    ngOnInit() {
        /* const galleryRef = this.gallery.ref('gallery-2');
        galleryRef.load(this.images) */
    }
    processImages(images) {
        /* return images.map(item => new ImageItem({ src: item, thumb: item })); */
        return images.map(item => {
            return { small: item, medium: item, big: item };
        });
    }
}
PortafolioComponent.ɵfac = function PortafolioComponent_Factory(t) { return new (t || PortafolioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_projects_service__WEBPACK_IMPORTED_MODULE_1__["ProjectsService"])); };
PortafolioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PortafolioComponent, selectors: [["app-portafolio"]], decls: 27, vars: 1, consts: [[1, "container"], [1, "row"], [1, "col-md-6", "d-flex", "align-items-center", "pt-4"], [1, "text-center"], [1, "mt-5", "text-primary"], [1, ""], ["href", "https://github.com/andersonar12?tab=repositories", 1, "btn", "btn-primary", "mb-5", "hvr-bob", "pl-4", "pr-4"], ["src", "assets/img/github-logo.png", "width", "30px", "alt", "", "srcset", ""], [1, "text-white"], [1, "col-md-6", "text-center", "pt-4"], ["src", "assets/img/web-development.jpg", "alt", "", "srcset", "", 1, "img-fluid"], [1, "col"], [1, "text-primary", "mb-4", "mt-5", "text-center"], [1, "row", "d-flex", "justify-content-around"], ["class", "col-12 col-sm-12 col-md-5 m-2 card", 4, "ngFor", "ngForOf"], [1, "col-12", "col-sm-12", "col-md-5", "m-2", "card"], [1, "mt-3", "text-center"], [3, "images"]], template: function PortafolioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "PORTFOLIO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " I currently use GitHub as a portfolio of projects and developments, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Click on the button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " for redirection. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "GitHub");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h4", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Some of the Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, PortafolioComponent_div_25_Template, 7, 3, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projects);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _components_footer_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"], _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_4__["ProjectsComponent"]], styles: ["h3[_ngcontent-%COMP%]{\n    font-size: 40px;\n}\n\np[_ngcontent-%COMP%]{\n    font-size: 20px;\n}\n\n.github[_ngcontent-%COMP%]{\n    border-radius: 75px;\n    box-shadow: 4px 5px 12px 1px #000000;\n}\n\n.github[_ngcontent-%COMP%]:hover{\n    cursor: pointer;\n}\n\n.card[_ngcontent-%COMP%] {\n    border: 3px solid rgb(0 110 221);\n    border-radius: 0.75rem;\n    box-shadow: 4px 5px 12px 1px #000000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcG9ydGFmb2xpby9wb3J0YWZvbGlvL3BvcnRhZm9saW8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBR0E7SUFDSSxnQ0FBZ0M7SUFDaEMsc0JBQXNCO0lBQ3RCLG9DQUFvQztBQUN4QyIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BvcnRhZm9saW8vcG9ydGFmb2xpby9wb3J0YWZvbGlvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoM3tcbiAgICBmb250LXNpemU6IDQwcHg7XG59XG5cbnB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uZ2l0aHVie1xuICAgIGJvcmRlci1yYWRpdXM6IDc1cHg7XG4gICAgYm94LXNoYWRvdzogNHB4IDVweCAxMnB4IDFweCAjMDAwMDAwO1xufVxuXG4uZ2l0aHViOmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuXG4uY2FyZCB7XG4gICAgYm9yZGVyOiAzcHggc29saWQgcmdiKDAgMTEwIDIyMSk7XG4gICAgYm9yZGVyLXJhZGl1czogMC43NXJlbTtcbiAgICBib3gtc2hhZG93OiA0cHggNXB4IDEycHggMXB4ICMwMDAwMDA7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortafolioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-portafolio',
                templateUrl: './portafolio.component.html',
                styleUrls: ['./portafolio.component.css'],
            }]
    }], function () { return [{ type: _services_projects_service__WEBPACK_IMPORTED_MODULE_1__["ProjectsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/skills/skills/skills.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/skills/skills/skills.component.ts ***!
  \*********************************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _components_cards_cards_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/cards/cards.component */ "./src/app/components/cards/cards.component.ts");
/* harmony import */ var _components_footer_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/footer/footer/footer.component */ "./src/app/components/footer/footer/footer.component.ts");




class SkillsComponent {
    constructor() { }
    ngOnInit() {
    }
}
SkillsComponent.ɵfac = function SkillsComponent_Factory(t) { return new (t || SkillsComponent)(); };
SkillsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SkillsComponent, selectors: [["app-skills"]], decls: 3, vars: 0, consts: [[1, "container-fluid", "pt-5", "text-center"]], template: function SkillsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-cards");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
    } }, directives: [_components_cards_cards_component__WEBPACK_IMPORTED_MODULE_1__["CardsComponent"], _components_footer_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]], styles: ["@media screen and (min-width: 400px) and (max-width: 644px) {\n    \n    .m-2[_ngcontent-%COMP%] {\n        margin: 2.5rem!important;\n    }\n   \n  }\n\n\n@media screen and (min-width: 50px) and (max-width: 399px) {\n\n    .m-2[_ngcontent-%COMP%] {\n        margin: 2.5rem!important;\n    }\n\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2tpbGxzL3NraWxscy9za2lsbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSTtRQUNJLHdCQUF3QjtJQUM1Qjs7RUFFRjs7O0FBR0Y7O0lBRUk7UUFDSSx3QkFBd0I7SUFDNUI7O0VBRUYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9za2lsbHMvc2tpbGxzL3NraWxscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDAwcHgpIGFuZCAobWF4LXdpZHRoOiA2NDRweCkge1xuICAgIFxuICAgIC5tLTIge1xuICAgICAgICBtYXJnaW46IDIuNXJlbSFpbXBvcnRhbnQ7XG4gICAgfVxuICAgXG4gIH1cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MHB4KSBhbmQgKG1heC13aWR0aDogMzk5cHgpIHtcblxuICAgIC5tLTIge1xuICAgICAgICBtYXJnaW46IDIuNXJlbSFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-skills',
                templateUrl: './skills.component.html',
                styleUrls: ['./skills.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/route-animations.ts":
/*!*************************************!*\
  !*** ./src/app/route-animations.ts ***!
  \*************************************/
/*! exports provided: slider, fader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slider", function() { return slider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fader", function() { return fader; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");

const slider = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimations', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => isLeft', slideTo('left')),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => isRight', slideTo('right')),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('isRight => *', slideTo('left')),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('isLeft => *', slideTo('right'))
]);
function slideTo(direction) {
    const optional = { optional: true };
    return [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: 0,
                [direction]: 0,
                width: '100%'
            })
        ], optional),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ [direction]: '-100%' })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('600ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ [direction]: '100%' }))
            ], optional),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('600ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ [direction]: '0%' }))
            ])
        ]),
        // Normalize the page style... Might not be necessary
        // Required only if you have child animations on the page
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
    ];
}
const fader = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimations', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* <=> *', [
        // Set a default  style for enter and leave
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                left: 0,
                width: '100%',
                opacity: 0,
                transform: 'scale(0) translateY(100%)',
            }),
        ]),
        // Animate the new page in
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('600ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'scale(1) translateY(0)' })),
        ])
    ]),
]);


/***/ }),

/***/ "./src/app/services/projects.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/projects.service.ts ***!
  \**********************************************/
/*! exports provided: ProjectsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsService", function() { return ProjectsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


class ProjectsService {
    constructor() {
        /* Proyectos a reenderizar en la pagina de portafolio */
        this.projects = [
            {
                images: [
                    'assets/img/projects/backoffice-tandem/1.png',
                    'assets/img/projects/backoffice-tandem/2.png',
                    'assets/img/projects/backoffice-tandem/3.png',
                    'assets/img/projects/backoffice-tandem/4.png',
                    'assets/img/projects/backoffice-tandem/5.png',
                    'assets/img/projects/backoffice-tandem/6.png',
                    'assets/img/projects/backoffice-tandem/7.png',
                    'assets/img/projects/backoffice-tandem/8.png',
                    'assets/img/projects/backoffice-tandem/9.png',
                ],
                title: 'Statistics Administration and Management Platform (Angular)',
                description: 'Implementation of graphics, consumption of WebSockets for Geolocation, filtering of global data by company, export of data to PDF and Excel, components based on Angular Material, integration with: API REST backend Elixir, Qlick Sense, Angular Google Maps. In this project Rxjs operators are widely used.',
                url: '',
            },
            {
                images: [
                    'assets/img/projects/cms-tandem/1.png',
                    'assets/img/projects/cms-tandem/2.png',
                    'assets/img/projects/cms-tandem/3.png',
                    'assets/img/projects/cms-tandem/4.png',
                    'assets/img/projects/cms-tandem/5.png',
                    'assets/img/projects/cms-tandem/6.png',
                ],
                title: 'CMS (Angular) for the Tandem website',
                description: 'CMS made for loading and managing the content of the TANDEM company’s website, type backoffice, used Angular Material, Bootstrap for the grid, Sweet Alert. Integration with backend made in Elixir.',
                url: '',
            },
            {
                images: [
                    'assets/img/projects/movies-app/1.png',
                    'assets/img/projects/movies-app/2.png',
                    'assets/img/projects/movies-app/3.png',
                    'assets/img/projects/movies-app/4.png',
                    'assets/img/projects/movies-app/5.png',
                    'assets/img/projects/movies-app/6.png',
                    'assets/img/projects/movies-app/7.png',
                    'assets/img/projects/movies-app/8.png',
                    'assets/img/projects/movies-app/9.png',
                ],
                title: 'Peliculas App (Ionic)',
                description: 'To watch movies in billboards, popular, recent movies, has a section to look for any type, and the section Favorites to organize them by gender. Each time a movie is selected a modal is shown with the corresponding information. API The Movies DB and APK generates with Capacitor.',
                url: '',
            },
            {
                images: [
                    'assets/img/projects/qr-scanner/1.png',
                    'assets/img/projects/qr-scanner/2.png',
                    'assets/img/projects/qr-scanner/3.png',
                    'assets/img/projects/qr-scanner/4.png',
                    'assets/img/projects/qr-scanner/5.png',
                    'assets/img/projects/qr-scanner/6.png',
                    'assets/img/projects/qr-scanner/7.png',
                ],
                title: 'Barcode Scanner (Ionic)',
                description: 'Application that allows to scan QR or barcode, has scan history, internal browser, that is if you scan a URL the application opens the built-in browser. Geolocation scan and display location via Mapbox (in 3D). This application is made with the Capacitor plugin.',
                url: '',
            },
            {
                images: [
                    'assets/img/projects/wit-web/1.png',
                    'assets/img/projects/wit-web/2.png',
                    'assets/img/projects/wit-web/3.png',
                    'assets/img/projects/wit-web/4.png',
                ],
                title: 'Wit Web (HTML, CSS, Javascript)',
                description: 'Website made in HTML, CSS and Vanila Javascript, fully responsive.',
                url: '',
            },
            {
                images: [
                    'assets/img/projects/web-page-tandem/1.png',
                    'assets/img/projects/web-page-tandem/2.png',
                    'assets/img/projects/web-page-tandem/3.png',
                    'assets/img/projects/web-page-tandem/4.png',
                    'assets/img/projects/web-page-tandem/5.png',
                ],
                title: 'TANDEM Web Page (HTML, CSS, Javascript)',
                description: 'Page made in HTML, CSS and Vanila Javascript, fully responsive, with CMS integration.',
                url: '',
            },
            {
                images: [
                    'assets/img/projects/la-pizzeria/1.jpg',
                    'assets/img/projects/la-pizzeria/2.jpg',
                    'assets/img/projects/la-pizzeria/3.png',
                ],
                title: 'Pizzeria Theme (Wordpress-PHP)',
                description: 'Made with: ACF, Gutemberg Blocks, Slicknav, CSS3 Jquery, Advanced Custom Post Types',
                url: '',
            },
            {
                images: [
                    'assets/img/projects/gym-fitness/1.jpg',
                    'assets/img/projects/gym-fitness/2.png',
                    'assets/img/projects/gym-fitness/3.jpg',
                    'assets/img/projects/gym-fitness/4.png',
                ],
                title: 'Gym Fitness (Wordpress-PHP)',
                description: 'Bootstrap, Javascript.Plugins: ACF, Custom Post Types UI, ACF Leafleft,Regenerate Thumbnails, Contact Form 7',
                url: '',
            },
            {
                images: [
                    'assets/img/projects/around-world/1.jpg',
                    'assets/img/projects/around-world/2.jpg',
                    'assets/img/projects/around-world/3.jpg',
                    'assets/img/projects/around-world/4.jpg',
                    'assets/img/projects/around-world/5.png',
                ],
                title: 'Around World (Wordpress-PHP)',
                description: 'Made with: HTML, CSS3, BxSlider, Lightbox. Plugins: Advanced Custom Fields: Gallery Field - Repeater, Catch IDs, Contact Form 7, Custom Post Type UI, Regenerate Thumbnails, ShareThis Follow Buttons.',
                url: '',
            },
        ];
    }
    getProjects() {
        return this.projects;
    }
}
ProjectsService.ɵfac = function ProjectsService_Factory(t) { return new (t || ProjectsService)(); };
ProjectsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProjectsService, factory: ProjectsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/skills.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/skills.service.ts ***!
  \********************************************/
/*! exports provided: SkillsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsService", function() { return SkillsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


class SkillsService {
    constructor() {
        this.skills = [
            {
                title: 'Angular',
                img: 'assets/img/skills/angular.png',
                porc: 90,
            },
            {
                title: 'Ionic',
                img: 'assets/img/skills/ionic.png',
                porc: 80,
            },
            {
                title: 'Typescript',
                img: 'assets/img/skills/typescript.png',
                porc: 75,
            },
            {
                title: 'Javascript',
                img: 'assets/img/skills/javascript.png',
                porc: 85,
            },
            {
                title: 'Bootstrap',
                img: 'assets/img/skills/bootstrap.png',
                porc: 95,
            },
            {
                title: 'WordPress',
                img: 'assets/img/skills/wordpress.png',
                porc: 55,
            },
            {
                title: 'PHP',
                img: 'assets/img/skills/php.png',
                porc: 65,
            },
            {
                title: 'HTML',
                img: 'assets/img/skills/html.png',
                porc: 100,
            },
            {
                title: 'CSS',
                img: 'assets/img/skills/css.png',
                porc: 75,
            },
            {
                title: "API's",
                img: 'assets/img/skills/api.png',
                porc: 90,
            },
            {
                title: 'Jquery',
                img: 'assets/img/skills/jquery.png',
                porc: 90,
            },
            {
                title: 'Firebase',
                img: 'assets/img/skills/firebase.png',
                porc: 40,
            },
            {
                title: 'GIT',
                img: 'assets/img/skills/github.png',
                porc: 75,
            },
        ];
    }
    getSkills() {
        return this.skills;
    }
}
SkillsService.ɵfac = function SkillsService_Factory(t) { return new (t || SkillsService)(); };
SkillsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SkillsService, factory: SkillsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");




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

module.exports = __webpack_require__(/*! /home/anderson/Escritorio/Proyectos de Angular/anderson-web/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map