(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/adamjr/Documents/projects/code/accord/website/src/main.ts */"zUnb");


/***/ }),

/***/ "0xJi":
/*!*********************************************!*\
  !*** ./src/app/services/channel.service.ts ***!
  \*********************************************/
/*! exports provided: ChannelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelService", function() { return ChannelService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _http_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http-wrapper */ "R0x+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ws_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ws.service */ "Swid");
/* harmony import */ var _guild_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guild.service */ "4bjJ");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user.service */ "qfBg");







class ChannelService extends _http_wrapper__WEBPACK_IMPORTED_MODULE_1__["HTTPWrapper"] {
    constructor(http, ws, guildService, userService) {
        super(http, ws);
        this.guildService = guildService;
        this.userService = userService;
        this.endpoint = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].endpoint}/channels`;
        this.typingUserIds = new Map();
        this._arr = [];
    }
    get channels() {
        return this._arr = this.guildService.guilds
            .flatMap(c => c.channels)
            .concat(this._arr);
    }
    get dmChannels() {
        return this.channels.filter(c => c.type === 'DM');
    }
    getDM(recipientId) {
        return this.dmChannels.find(c => c.memberIds.includes(recipientId)
            && c.memberIds.includes(this.userService.self._id));
    }
    startTyping(channelId, userId) {
        // const isSelf = this.userService.self._id === userId;
        // if (isSelf) return;
        this.getTyping(channelId).push(userId);
        setTimeout(() => this.stopTyping(channelId, userId), 5.1 * 1000);
    }
    stopTyping(channelId, userId) {
        const channelUsers = this.getTyping(channelId);
        const index = channelUsers.indexOf(userId);
        channelUsers.splice(index, 1);
    }
    getTyping(channelId) {
        var _a;
        return (_a = this.typingUserIds.get(channelId)) !== null && _a !== void 0 ? _a : this.typingUserIds
            .set(channelId, [])
            .get(channelId);
    }
    getRecipient(channelId) {
        const channel = this.getCached(channelId);
        const recipientId = channel.memberIds
            .find(id => id !== this.userService.self._id);
        return this.userService.getCached(recipientId);
    }
}
ChannelService.ɵfac = function ChannelService_Factory(t) { return new (t || ChannelService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ws_service__WEBPACK_IMPORTED_MODULE_4__["WSService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_guild_service__WEBPACK_IMPORTED_MODULE_5__["GuildService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"])); };
ChannelService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ChannelService, factory: ChannelService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "1LmZ":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _utils_waves_waves_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/waves/waves.component */ "y7Ka");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _cool_submarine_submarine_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../cool/submarine/submarine.component */ "w4JF");








class HomeComponent {
    constructor() {
        this.version = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].version;
        document.title = 'Accord - Like Discord, But Customizable';
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 63, vars: 1, consts: [[1, "container"], [1, "jumbotron"], [1, "display-4"], [1, "lead"], ["routerLink", "/login", "mat-button", "", 1, "bg-success", "text-dark"], ["href", "#features"], ["mat-button", "", 1, "bg-info", "ml-2", "text-light"], ["id", "features", 1, "main"], [1, "text-center"], [1, "text-muted"], [1, "text-light"], [1, "text-secondary"], [1, "row"], [1, "mt-5", "col-md-6", "col-sm-12"], [1, "bg-transparent", "shadow-none"], ["src", "assets/img/home/themes.webp", "alt", "Themes", "mat-card-image", ""], [1, "lni", "lni-paint-roller"], ["src", "assets/img/home/manage_guilds.webp", "alt", "Themes", "mat-card-image", ""], [1, "fas", "fa-hashtag"], [1, "col-12"], [1, "d-flex", "justify-content-center"], [1, "float-right", "text-secondary", "cursor-pointer"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Chat With Ease");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Seamlessly chat with friends within seconds. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Accord is easy to use, and customizable. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Get Started");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Features");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "waves");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "section", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Ditch ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Discord");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, ", Go ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Accord");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "mat-card", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, " Customize to Your ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Accord");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Choose from a wide range of premade themes to customize your experience.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "mat-card", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, " Manage Your Guilds");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Manage your guilds to your accord, and chat with your friends, or others.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Get Started");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "app-submarine");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "\u00A9 2021 accord.app");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.version);
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _utils_waves_waves_component__WEBPACK_IMPORTED_MODULE_5__["WavesComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardSubtitle"], _cool_submarine_submarine_component__WEBPACK_IMPORTED_MODULE_7__["SubmarineComponent"]], styles: ["header[_ngcontent-%COMP%] {\r\n  background: none;\r\n  text-align: center;\r\n  \r\n  margin-top: 15vh;\r\n  margin-bottom: 300px;\r\n}\r\n\r\n.main[_ngcontent-%COMP%] {\r\n  background-color: var(--background-secondary) !important;\r\n\r\n  padding-top: 150px;\r\n  padding-bottom: 150px;\r\n  min-height: 750px;\r\n}\r\n\r\nmat-card[_ngcontent-%COMP%] {\r\n  transition: transform .5s ease;\r\n  cursor: pointer;\r\n}\r\n\r\nmat-card[_ngcontent-%COMP%]:hover {\r\n  transform: scale(1.1);\r\n}\r\n\r\nmat-card[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\nmat-card-subtitle[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n}\r\n\r\nmat-card-subtitle[_ngcontent-%COMP%], mat-card-content[_ngcontent-%COMP%] {\r\n  color: var(--secondary);\r\n}\r\n\r\n#features[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:not(app-submarine) { \r\n  z-index: 1;\r\n}\r\n\r\napp-submarine[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 1500px;\r\n  transform: scale(0.5);\r\n\r\n  -webkit-animation: moveLeft 150s infinite;\r\n\r\n          animation: moveLeft 150s infinite;\r\n}\r\n\r\nmat-card-title[_ngcontent-%COMP%] {\r\n  font-size: 32px;\r\n}\r\n\r\nmat-card-subtitle[_ngcontent-%COMP%] {\r\n  font-size: 20px;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n  height: 250px;\r\n  width: auto;\r\n\r\n  image-rendering: auto;\r\n}\r\n\r\n@-webkit-keyframes moveLeft {\r\n  0% {\r\n    left: 85%;\r\n  }\r\n  100% {\r\n    left: 0%;\r\n  }\r\n}\r\n\r\n@keyframes moveLeft {\r\n  0% {\r\n    left: 85%;\r\n  }\r\n  100% {\r\n    left: 0%;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7O0VBRWxCLGdCQUFnQjtFQUNoQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSx3REFBd0Q7O0VBRXhELGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7O0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7O0FBQ0E7O0VBRUUsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxxQkFBcUI7O0VBRXJCLHlDQUFpQzs7VUFBakMsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVzs7RUFFWCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRTtJQUNFLFNBQVM7RUFDWDtFQUNBO0lBQ0UsUUFBUTtFQUNWO0FBQ0Y7O0FBUEE7RUFDRTtJQUNFLFNBQVM7RUFDWDtFQUNBO0lBQ0UsUUFBUTtFQUNWO0FBQ0YiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBcclxuICBtYXJnaW4tdG9wOiAxNXZoO1xyXG4gIG1hcmdpbi1ib3R0b206IDMwMHB4O1xyXG59XHJcblxyXG4ubWFpbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1zZWNvbmRhcnkpICFpbXBvcnRhbnQ7XHJcblxyXG4gIHBhZGRpbmctdG9wOiAxNTBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTUwcHg7XHJcbiAgbWluLWhlaWdodDogNzUwcHg7XHJcbn1cclxuXHJcbm1hdC1jYXJkIHtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjVzIGVhc2U7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbm1hdC1jYXJkOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbn1cclxubWF0LWNhcmQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5tYXQtY2FyZC1zdWJ0aXRsZSB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxubWF0LWNhcmQtc3VidGl0bGUsXHJcbm1hdC1jYXJkLWNvbnRlbnQge1xyXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xyXG59XHJcblxyXG4jZmVhdHVyZXMgKjpub3QoYXBwLXN1Ym1hcmluZSkgeyBcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG5hcHAtc3VibWFyaW5lIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxNTAwcHg7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xyXG5cclxuICBhbmltYXRpb246IG1vdmVMZWZ0IDE1MHMgaW5maW5pdGU7XHJcbn1cclxuXHJcbm1hdC1jYXJkLXRpdGxlIHtcclxuICBmb250LXNpemU6IDMycHg7XHJcbn1cclxubWF0LWNhcmQtc3VidGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuaW1nIHtcclxuICBoZWlnaHQ6IDI1MHB4O1xyXG4gIHdpZHRoOiBhdXRvO1xyXG5cclxuICBpbWFnZS1yZW5kZXJpbmc6IGF1dG87XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbW92ZUxlZnQge1xyXG4gIDAlIHtcclxuICAgIGxlZnQ6IDg1JTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBsZWZ0OiAwJTtcclxuICB9XHJcbn0iXX0= */", "@media (max-width: 576px) {\n  *[_ngcontent-%COMP%] {\n    overflow-x: hidden;\n  }\n  img[_ngcontent-%COMP%] {\n    width: 300px;\n    height: auto;\n  }\n}\n\n@media (max-width: 768px) {\n\n}\n\n@media (max-width: 992px) {\n\n}\n\n@media (max-width: 1200px) {\n\n}\n\n@media (max-width: 1400px) {\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50Lm1vYmlsZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbURBQW1EO0FBQ25EO0VBQ0U7SUFDRSxrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLFlBQVk7SUFDWixZQUFZO0VBQ2Q7QUFDRjtBQUVBLDJDQUEyQztBQUMzQzs7QUFFQTtBQUVBLDJDQUEyQztBQUMzQzs7QUFFQTtBQUVBLG9EQUFvRDtBQUNwRDs7QUFFQTtBQUVBLHNEQUFzRDtBQUN0RDs7QUFFQSIsImZpbGUiOiJob21lLmNvbXBvbmVudC5tb2JpbGUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogU21hbGwgZGV2aWNlcyAobGFuZHNjYXBlIHBob25lcywgNTc2cHggYW5kIHVwKSAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICoge1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgfVxuICBpbWcge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbn1cblxuLyogTWVkaXVtIGRldmljZXMgKHRhYmxldHMsIDc2OHB4IGFuZCB1cCkgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuXG59XG5cbi8qIExhcmdlIGRldmljZXMgKGRlc2t0b3BzLCA5OTJweCBhbmQgdXApICovXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcblxufVxuXG4vKiBYLUxhcmdlIGRldmljZXMgKGxhcmdlIGRlc2t0b3BzLCAxMjAwcHggYW5kIHVwKSAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xuXG59XG5cbi8qIFhYLUxhcmdlIGRldmljZXMgKGxhcmdlciBkZXNrdG9wcywgMTQwMHB4IGFuZCB1cCkgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiAxNDAwcHgpIHtcblxufSJdfQ== */"] });


/***/ }),

/***/ "1nus":
/*!*********************************************************************!*\
  !*** ./src/app/dashboard/me/friends-list/friends-list.component.ts ***!
  \*********************************************************************/
/*! exports provided: FriendsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendsListComponent", function() { return FriendsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_channel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/channel.service */ "0xJi");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_app_services_ws_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ws.service */ "Swid");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_member_username_member_username_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/member-username/member-username.component */ "ME9D");










function FriendsListComponent_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FriendsListComponent_div_2_div_3_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const friend_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r7.remove(friend_r6._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "member-username", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const friend_r6 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    let tmp_0_0 = null;
    let tmp_1_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/channels/@me/" + ((tmp_0_0 = ctx_r4.channelService.getDM(friend_r6._id)) == null ? null : tmp_0_0._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/channels/@me/" + ((tmp_1_0 = ctx_r4.channelService.getDM(friend_r6._id)) == null ? null : tmp_1_0._id))("user", ctx_r4.users.getCached(friend_r6._id));
} }
function FriendsListComponent_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "No friends online.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function FriendsListComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, FriendsListComponent_div_2_div_3_Template, 7, 3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, FriendsListComponent_div_2_div_4_Template, 4, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Online\u2014", ctx_r0.onlineFriends.length, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.onlineFriends);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.users.friends.length <= 0);
} }
function FriendsListComponent_div_3_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FriendsListComponent_div_3_div_3_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const friend_r11 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r12.remove(friend_r11._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "member-username", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const friend_r11 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    let tmp_0_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/channels/@me/" + ((tmp_0_0 = ctx_r9.channelService.getDM(friend_r11._id)) == null ? null : tmp_0_0._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("user", ctx_r9.users.getCached(friend_r11._id));
} }
function FriendsListComponent_div_3_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "No friends here yet.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function FriendsListComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, FriendsListComponent_div_3_div_3_Template, 7, 2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, FriendsListComponent_div_3_div_4_Template, 4, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("All\u2014", ctx_r1.users.friends.length, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.users.friends);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.users.friends.length <= 0);
} }
function FriendsListComponent_div_4_div_3_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FriendsListComponent_div_4_div_3_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const friend_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r18.add(friend_r16.username); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function FriendsListComponent_div_4_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, FriendsListComponent_div_4_div_3_button_2_Template, 2, 0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FriendsListComponent_div_4_div_3_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const friend_r16 = ctx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r21.remove(friend_r16._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "member-username", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const friend_r16 = ctx.$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r14.isOutgoing(friend_r16));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r14.isOutgoing(friend_r16) ? "OUTGOING" : "INCOMING");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("user", friend_r16)("statusOverride", ctx_r14.isOutgoing(friend_r16) ? "Outgoing Friend Request" : "Incoming Friend Request");
} }
function FriendsListComponent_div_4_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "No friend requests sent.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function FriendsListComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, FriendsListComponent_div_4_div_3_Template, 8, 4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, FriendsListComponent_div_4_div_4_Template, 4, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Pending\u2014", ctx_r2.users.friendRequests.length, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.users.friendRequests);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.users.friendRequests.length <= 0);
} }
function FriendsListComponent_div_5_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FriendsListComponent_div_5_div_3_Template_i_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); const user_r25 = ctx.$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r26.users.unblock(user_r25._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "member-username", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("user", user_r25);
} }
function FriendsListComponent_div_5_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "No blocked users.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function FriendsListComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, FriendsListComponent_div_5_div_3_Template, 4, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, FriendsListComponent_div_5_div_4_Template, 4, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Blocked\u2014", ctx_r3.blockedUsers.length, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.blockedUsers);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.blockedUsers.length <= 0);
} }
class FriendsListComponent {
    constructor(channelService, users, ws) {
        this.channelService = channelService;
        this.users = users;
        this.ws = ws;
    }
    get blockedUsers() {
        var _a, _b;
        return (_b = (_a = this.users.self.ignored) === null || _a === void 0 ? void 0 : _a.userIds) === null || _b === void 0 ? void 0 : _b.map(id => this.users.getCached(id));
    }
    get onlineFriends() {
        return this.users.friends.filter(f => f.status !== 'OFFLINE');
    }
    add(username) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.ws.emitAsync('ADD_FRIEND', { username }, this);
        });
    }
    remove(friendId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.ws.emitAsync('REMOVE_FRIEND', { friendId }, this);
        });
    }
    isOutgoing(friend) {
        return this.users.self.friendRequestIds.includes(friend._id);
    }
}
FriendsListComponent.ɵfac = function FriendsListComponent_Factory(t) { return new (t || FriendsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_channel_service__WEBPACK_IMPORTED_MODULE_2__["ChannelService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_ws_service__WEBPACK_IMPORTED_MODULE_4__["WSService"])); };
FriendsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FriendsListComponent, selectors: [["friends-list"]], inputs: { tab: "tab" }, decls: 6, vars: 5, consts: [[1, "px-4"], [3, "ngSwitch"], [4, "ngSwitchCase"], [1, "category", "pl-0", "mb-2"], [4, "ngFor", "ngForOf"], ["class", "text-muted", 4, "ngIf"], [1, "float-right"], ["matTooltip", "Message", "mat-button", "", 1, "round", "px-0", 3, "routerLink"], [1, "lni", "lni-bubble"], ["matTooltip", "Remove Friend", "mat-button", "", 1, "round", "px-0", "ml-2", 3, "click"], [1, "lni", "lni-close"], [3, "routerLink", "user"], [1, "text-muted"], [1, "fas", "fa-info-circle", "mr-2"], [3, "user"], ["class", "round bg-success px-0", "mat-button", "", 3, "click", 4, "ngIf"], ["mat-button", "", 1, "round", "px-0", "ml-2", 3, "click"], [1, "badge", "badge-secondary"], [3, "user", "statusOverride"], ["mat-button", "", 1, "round", "bg-success", "px-0", 3, "click"], ["aria-hidden", "true", 1, "lni", "lni-checkmark-circle"], ["matTooltip", "Unblock", 1, "cursor-pointer", "lni", "lni-close", 3, "click"]], template: function FriendsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, FriendsListComponent_div_2_Template, 5, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, FriendsListComponent_div_3_Template, 5, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, FriendsListComponent_div_4_Template, 5, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, FriendsListComponent_div_5_Template, 5, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", ctx.tab);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "ONLINE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "ALL");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "PENDING");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "BLOCKED");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MatTooltip"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLink"], _components_member_username_member_username_component__WEBPACK_IMPORTED_MODULE_9__["MemberUsernameComponent"]], styles: ["button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  padding: 5px;\r\n  font-size: 20px;\r\n\r\n  color: var(--heading)\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyaWVuZHMtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7O0VBRWY7QUFDRiIsImZpbGUiOiJmcmllbmRzLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbiBpIHtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG5cclxuICBjb2xvcjogdmFyKC0taGVhZGluZylcclxufSJdfQ== */"] });


/***/ }),

/***/ "3JO2":
/*!************************************************************************!*\
  !*** ./src/app/dashboard/guilds/member-list/member-list.animations.ts ***!
  \************************************************************************/
/*! exports provided: widthExpandCollapse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "widthExpandCollapse", function() { return widthExpandCollapse; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");

const widthExpandCollapse = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('expandCollapse', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ width: '0px' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ width: '100%' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('collapsed <=> expanded', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease')]),
]);


/***/ }),

/***/ "3RvI":
/*!*************************************************************!*\
  !*** ./src/app/authentication/sign-up/sign-up.component.ts ***!
  \*************************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _password_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./password.validators */ "Tyil");
/* harmony import */ var src_app_types_entity_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/types/entity-types */ "h8Xa");
/* harmony import */ var src_app_utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utils/utils */ "oCjk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_user_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/user-auth.service */ "hZP9");
/* harmony import */ var _username_validators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./username.validators */ "IrsS");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
















function SignUpComponent_mat_hint_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Checking");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function SignUpComponent_mat_error_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Username is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function SignUpComponent_mat_error_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Username should be minimum ", ctx_r3.username.errors.minlength.requiredLength, " characters.");
} }
function SignUpComponent_mat_error_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Username is already taken.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function SignUpComponent_mat_error_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Username should follow the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "username rules");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function SignUpComponent_mat_error_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Password is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function SignUpComponent_mat_error_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Password should be minimum ", ctx_r7.password.errors.minlength.requiredLength, " characters.");
} }
function SignUpComponent_mat_error_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Password should include lowercase characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function SignUpComponent_mat_error_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Password should include uppercase characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function SignUpComponent_mat_error_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Password should include numbers.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function SignUpComponent_mat_error_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Password should include symbols.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function SignUpComponent_mat_error_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Confirm Password is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function SignUpComponent_div_58_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Passwords should match.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function SignUpComponent_div_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SignUpComponent_div_58_span_1_Template, 2, 0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r14.form.get("confirmPassword").dirty && (ctx_r14.form.errors == null ? null : ctx_r14.form.errors.passwordMismatch));
} }
class SignUpComponent {
    constructor(route, router, auth, usernameValidators) {
        this.route = route;
        this.router = router;
        this.auth = auth;
        this.usernameValidators = usernameValidators;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](Object(src_app_utils_utils__WEBPACK_IMPORTED_MODULE_4__["generateUsername"])(), [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(32),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(src_app_types_entity_types__WEBPACK_IMPORTED_MODULE_3__["patterns"].username),
            ], this.usernameValidators.shouldBeUnique.bind(this.usernameValidators)),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(src_app_types_entity_types__WEBPACK_IMPORTED_MODULE_3__["patterns"].password),
            ]),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        }, { validators: _password_validators__WEBPACK_IMPORTED_MODULE_2__["PasswordValidators"].passwordsShouldMatch });
    }
    get username() { return this.form.get('username'); }
    get password() { return this.form.get('password'); }
    get confirmPassword() { return this.form.get('confirmPassword'); }
    get redirect() {
        var _a;
        return (_a = this.route.snapshot.queryParamMap.get('redirect')) !== null && _a !== void 0 ? _a : '/channels/@me';
    }
    signUp() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const user = this.form.value;
            if (this.form.invalid)
                return;
            yield this.auth.signUp(user);
            yield this.auth.login(user);
            yield this.router.navigate([this.redirect]);
        });
    }
}
SignUpComponent.ɵfac = function SignUpComponent_Factory(t) { return new (t || SignUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_user_auth_service__WEBPACK_IMPORTED_MODULE_7__["UserAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_username_validators__WEBPACK_IMPORTED_MODULE_8__["UsernameValidators"])); };
SignUpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: SignUpComponent, selectors: [["sign-up"]], decls: 61, vars: 15, consts: [[1, "container", "text-center", "pb-5"], [1, "py-2", "mt-5", "d-none", "d-sm-block"], [1, "text-info", "mt-5"], [1, "fas", "fa-info-circle", "text-info"], [1, "mt-5", 3, "formGroup", "ngSubmit"], ["f", "ngForm"], [1, "display-4", "mb-4"], [1, "form-group"], ["appearance", "outline"], ["for", "username"], ["formControlName", "username", "id", "username", "type", "text", "autocomplete", "username", "matInput", ""], [4, "ngIf"], ["for", "password"], ["formControlName", "password", "id", "password", "type", "password", "autocomplete", "new-password", "matInput", ""], ["for", "confirmPassword"], ["formControlName", "confirmPassword", "id", "confirmPassword", "type", "password", "autocomplete", "new-password", "matInput", ""], ["for", "agreed"], ["id", "agreed", 1, "mr-2"], ["agreed", ""], ["href", "https://docs.accord.app/legal/alpha"], ["routerLink", "/terms"], ["routerLink", "/privacy"], ["class", "mb-4", 4, "ngIf"], ["type", "submit", "mat-button", "", 1, "bg-primary", "text-center", 3, "disabled"], [1, "lni", "lni-circle-notch", "fa-spin"], ["routerLink", "/docs/usernames"], [1, "mb-4"], ["class", "text-warning rounded alert border-warning", 4, "ngIf"], [1, "text-warning", "rounded", "alert", "border-warning"]], template: function SignUpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, " Max users have been reached for Alpha testing and sign-up may be available in the near future. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "If you cannot sign-up then this is why. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "form", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function SignUpComponent_Template_form_ngSubmit_8_listener() { return ctx.signUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "mat-label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, SignUpComponent_mat_hint_17_Template, 3, 0, "mat-hint", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, SignUpComponent_mat_error_18_Template, 2, 0, "mat-error", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, SignUpComponent_mat_error_19_Template, 2, 1, "mat-error", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, SignUpComponent_mat_error_20_Template, 2, 0, "mat-error", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, SignUpComponent_mat_error_21_Template, 5, 0, "mat-error", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "mat-label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](26, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "Minimum 8 characters.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, SignUpComponent_mat_error_29_Template, 2, 0, "mat-error", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, SignUpComponent_mat_error_30_Template, 2, 1, "mat-error", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, SignUpComponent_mat_error_31_Template, 2, 0, "mat-error", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](32, SignUpComponent_mat_error_32_Template, 2, 0, "mat-error", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](33, SignUpComponent_mat_error_33_Template, 2, 0, "mat-error", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](34, SignUpComponent_mat_error_34_Template, 2, 0, "mat-error", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "mat-label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](39, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, "Repeat password.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](42, SignUpComponent_mat_error_42_Template, 2, 0, "mat-error", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](44, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](45, "mat-checkbox", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48, "I agree to the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50, "Alpha Terms");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](51, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](53, "TOS");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54, ", and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56, "privacy policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](57, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](58, SignUpComponent_div_58_Template, 2, 1, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.username.pending);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.username.errors == null ? null : ctx.username.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.username.errors == null ? null : ctx.username.errors.minlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.username.errors == null ? null : ctx.username.errors.shouldBeUnique);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.username.errors == null ? null : ctx.username.errors.pattern);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.password.errors == null ? null : ctx.password.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.password.errors == null ? null : ctx.password.errors.minlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.password.errors == null ? null : ctx.password.errors.pattern == null ? null : ctx.password.errors.pattern.requiredPattern) === "/(?=.*[a-z])/gm");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.password.errors == null ? null : ctx.password.errors.pattern == null ? null : ctx.password.errors.pattern.requiredPattern) === "/(?=.*[A-Z])/gm");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.password.errors == null ? null : ctx.password.errors.pattern == null ? null : ctx.password.errors.pattern.requiredPattern) === "/(?=.*[0-9])/gm");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.password.errors == null ? null : ctx.password.errors.pattern == null ? null : ctx.password.errors.pattern.requiredPattern) === "/(?=.*[!@#$%^&*])/gm");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.confirmPassword.errors == null ? null : ctx.confirmPassword.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.form.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !_r13.checked);
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatHint"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__["MatCheckbox"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatError"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWduLXVwLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "3fd3":
/*!*****************************************************************************!*\
  !*** ./src/app/dashboard/components/guild-navbar/guild-navbar.component.ts ***!
  \*****************************************************************************/
/*! exports provided: GuildNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuildNavbarComponent", function() { return GuildNavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/config */ "Vx+w");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _dashboard_navbar_dashboard_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dashboard-navbar/dashboard-navbar.component */ "SKt3");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");






function GuildNavbarComponent_dashboard_navbar_0_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.activeChannel.name);
} }
function GuildNavbarComponent_dashboard_navbar_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "dashboard-navbar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GuildNavbarComponent_dashboard_navbar_0_span_3_Template, 5, 1, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GuildNavbarComponent_dashboard_navbar_0_Template_i_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.toggleMemberList.emit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.guild.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.activeChannel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r0.memberIcon);
} }
class GuildNavbarComponent {
    constructor() {
        this.toggleMemberList = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    get memberIcon() {
        return (Object(src_app_config__WEBPACK_IMPORTED_MODULE_1__["getConfig"])('memberListExpanded'))
            ? 'lni-users'
            : 'lni-users text-muted';
    }
}
GuildNavbarComponent.ɵfac = function GuildNavbarComponent_Factory(t) { return new (t || GuildNavbarComponent)(); };
GuildNavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GuildNavbarComponent, selectors: [["app-guild-navbar"]], inputs: { activeChannel: "activeChannel", guild: "guild" }, outputs: { toggleMemberList: "toggleMemberList" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "float-right"], ["matTooltip", "Toggle Members", 1, "lni", "cursor-pointer", 3, "click"], [1, "lni", "lni-chevron-right", "mx-2"], [1, "fas", "fa-hashtag", "text-muted", "pr-1"]], template: function GuildNavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GuildNavbarComponent_dashboard_navbar_0_Template, 6, 4, "dashboard-navbar", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.guild);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _dashboard_navbar_dashboard_navbar_component__WEBPACK_IMPORTED_MODULE_3__["DashboardNavbarComponent"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__["MatTooltip"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJndWlsZC1uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "3k1Y":
/*!*****************************************************************!*\
  !*** ./src/app/dashboard/messages/message/message.component.ts ***!
  \*****************************************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var discord_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! discord-markdown */ "oKB2");
/* harmony import */ var discord_markdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(discord_markdown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var markdown_to_text_emoji__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! markdown-to-text-emoji */ "s99U");
/* harmony import */ var markdown_to_text_emoji__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(markdown_to_text_emoji__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_log_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/log.service */ "iXKo");
/* harmony import */ var src_app_services_guild_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/guild.service */ "4bjJ");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_app_services_ws_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/ws.service */ "Swid");
/* harmony import */ var src_app_services_permissions_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/permissions.service */ "tEUU");
/* harmony import */ var src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/dialog.service */ "CzQJ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _components_avatar_url_avatar_url_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/avatar-url/avatar-url.component */ "kMH7");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _message_embed_message_embed_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../message-embed/message-embed.component */ "B9z8");
/* harmony import */ var _pipes_timestamp_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../pipes/timestamp.pipe */ "WHGX");
















const _c0 = ["newMessage"];
const _c1 = ["contextMenu"];
function MessageComponent_div_0_div_2_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "BOT");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function MessageComponent_div_0_div_2_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "SYSTEM");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function MessageComponent_div_0_div_2_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
} }
function MessageComponent_div_0_div_2_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
} }
const _c2 = function (a0) { return { "d-mention": a0 }; };
const _c3 = function (a0, a1) { return { username: a0, avatarURL: a1 }; };
function MessageComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MessageComponent_div_0_div_2_Template_div_click_0_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "app-avatar-url", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MessageComponent_div_0_div_2_Template_app_avatar_url_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r17.dialog.profile({ user: ctx_r17.author }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h2", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "strong", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, MessageComponent_div_0_div_2_div_9_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, MessageComponent_div_0_div_2_div_10_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](15, "timestamp");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, MessageComponent_div_0_div_2_ng_container_16_Template, 1, 0, "ng-container", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, MessageComponent_div_0_div_2_ng_container_17_Template, 1, 0, "ng-container", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", "message-" + ctx_r11.message._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](13, _c2, ctx_r11.isMentioned));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("user", ctx_r11.avatarURL ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](15, _c3, ctx_r11.author.username, ctx_r11.avatarURL) : ctx_r11.author);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("color", ctx_r11.roleColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r11.author.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r11.author.bot && ctx_r11.author.username !== "2PG");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r11.author.bot && ctx_r11.author.username === "2PG");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](15, 11, ctx_r11.message.createdAt));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r5);
} }
function MessageComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("contextmenu", function MessageComponent_div_0_Template_div_contextmenu_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20); const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](1); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r19.openMenu($event, _r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, MessageComponent_div_0_div_2_Template, 18, 18, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](8);
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matMenuTriggerFor", _r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r0.isExtra)("ngIfElse", _r1);
} }
function MessageComponent_ng_template_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
} }
function MessageComponent_ng_template_1_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
} }
function MessageComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MessageComponent_ng_template_1_Template_div_click_0_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, MessageComponent_ng_template_1_ng_container_5_Template, 1, 0, "ng-container", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, MessageComponent_ng_template_1_ng_container_6_Template, 1, 0, "ng-container", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", "message-" + ctx_r2.message._id)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](6, _c2, ctx_r2.isMentioned));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTooltip", ctx_r2.message.createdAt);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.timeString);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r5);
} }
function MessageComponent_ng_template_3_span_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 29, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTooltip", "Edited - " + ctx_r24.updatedAt);
} }
function MessageComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, MessageComponent_ng_template_3_span_0_Template, 3, 1, "span", 28);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.message.updatedAt);
} }
function MessageComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 31, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keydown", function MessageComponent_ng_template_5_Template_div_keydown_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r27.toggleEditing($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "message-embed", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("close", function MessageComponent_ng_template_5_Template_message_embed_close_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r28); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r29.removeEmbed(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("contentEditable", ctx_r6.isEditing && ctx_r6.canManage)("innerHtml", ctx_r6.processed, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("canManage", ctx_r6.canManage)("message", ctx_r6.message);
} }
function MessageComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MessageComponent_div_10_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r30.toggleEditing(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r8.isEditing ? "Finish Editing" : "Edit");
} }
function MessageComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MessageComponent_div_11_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r32.delete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class MessageComponent {
    constructor(log, guildService, userService, ws, perms, dialog) {
        this.log = log;
        this.guildService = guildService;
        this.userService = userService;
        this.ws = ws;
        this.perms = perms;
        this.dialog = dialog;
        this.isExtra = false;
        this.contextMenuPosition = { x: '0px', y: '0px' };
        this._isEditing = false;
    }
    get isEditing() {
        return this._isEditing;
    }
    set isEditing(value) {
        this._isEditing = value;
        const div = this.newMessage.nativeElement;
        if (value)
            div.focus();
    }
    get roleColor() {
        var _a, _b, _c;
        if (!this.guild)
            return;
        const roleId = (_a = this.member) === null || _a === void 0 ? void 0 : _a.roleIds[((_b = this.member) === null || _b === void 0 ? void 0 : _b.roleIds.length) - 1];
        return (_c = this.guild.roles.find(r => r._id == roleId)) === null || _c === void 0 ? void 0 : _c.color;
    }
    get timeString() {
        const date = new Date(this.message.createdAt);
        return `${date.toString().slice(16, 21)}`;
    }
    get isMentioned() {
        return document.querySelector(`#message-${this.message._id} .self-mention`);
    }
    get updatedAt() {
        var _a;
        return (_a = new Date(this.message.updatedAt)) === null || _a === void 0 ? void 0 : _a.toLocaleString();
    }
    get processed() {
        var _a, _b;
        if (this.isEditing)
            return this.message.content;
        const getRole = (id) => { var _a; return (_a = this.guild) === null || _a === void 0 ? void 0 : _a.roles.find(r => r._id === id); };
        const getUser = (id) => this.userService.getAsync(id);
        const getMention = (html, condition) => {
            return (condition)
                ? `<span matTooltip="test" class="self-mention">${html}</span>`
                : html;
        };
        const recipientHasRole = (_b = this.guildService
            .getMember((_a = this.guild) === null || _a === void 0 ? void 0 : _a._id, this.userService.self._id)) === null || _b === void 0 ? void 0 : _b.roleIds.some(id => { var _a; return (_a = this.guild) === null || _a === void 0 ? void 0 : _a.roles.some(r => r._id === id); });
        return Object(discord_markdown__WEBPACK_IMPORTED_MODULE_1__["toHTML"])(Object(markdown_to_text_emoji__WEBPACK_IMPORTED_MODULE_2__["textEmoji"])(this.message.content), {
            discordCallback: {
                user: (node) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    var _c, _d;
                    return getMention(`@${(_d = (_c = (yield getUser(node.id))) === null || _c === void 0 ? void 0 : _c.username) !== null && _d !== void 0 ? _d : `Invalid User`}`, this.userService.self._id === node.id);
                }),
                role: (node) => {
                    var _a, _b;
                    return getMention(`@${(_b = (_a = getRole(node.id)) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : `Invalid Role`}`, recipientHasRole);
                },
                everyone: (node) => getMention(`@everyone`, true),
                here: (node) => getMention(`@here`, this.userService.self.status !== 'OFFLINE')
            }
        });
    }
    get selfIsAuthor() {
        var _a;
        return ((_a = this.author) === null || _a === void 0 ? void 0 : _a._id) === this.userService.self._id;
    }
    get canManage() {
        return this.selfIsAuthor
            || (this.guild && this.perms.can(this.guild._id, 'MANAGE_MESSAGES'));
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.author = yield this.userService.getAsync(this.message.authorId);
        });
    }
    removeEmbed() {
        this.message.embed = null;
        this.ws.emit('MESSAGE_UPDATE', {
            messageId: this.message._id,
            partialMessage: this.message,
            withEmbed: false
        }, this);
    }
    delete() {
        var _a;
        this.ws.emit('MESSAGE_DELETE', { messageId: this.message._id }, this);
        (_a = document
            .querySelector(`#message${this.message._id}`)) === null || _a === void 0 ? void 0 : _a.remove();
        this.ws.on('MESSAGE_DELETE', ({ messageId }) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (messageId === this.message._id)
                yield this.log.success();
        }), this);
    }
    edit(value, $event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if ($event && ($event.shiftKey || $event.code !== 'Enter'))
                return;
            this.isEditing = false;
            this.message.content = value;
            this.message.updatedAt = new Date();
            this.ws.emit('MESSAGE_UPDATE', {
                messageId: this.message._id,
                partialMessage: { content: this.message.content },
                withEmbed: Boolean(this.message.embed),
            }, this);
            this.ws.on('MESSAGE_UPDATE', ({ message }) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (message.content === this.message.content)
                    yield this.log.success();
            }), this);
        });
    }
    toggleEditing($event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            (this.isEditing)
                ? yield this.edit(this.newMessage.nativeElement.innerText, $event)
                : this.isEditing = true;
        });
    }
    openMenu(event, menuTrigger) {
        event.preventDefault();
        this.contextMenuPosition.x = event.clientX + 'px';
        this.contextMenuPosition.y = event.clientY + 'px';
        menuTrigger.menu.focusFirstItem('mouse');
        menuTrigger.openMenu();
    }
}
MessageComponent.ɵfac = function MessageComponent_Factory(t) { return new (t || MessageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_log_service__WEBPACK_IMPORTED_MODULE_4__["LogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_guild_service__WEBPACK_IMPORTED_MODULE_5__["GuildService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_ws_service__WEBPACK_IMPORTED_MODULE_7__["WSService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_permissions_service__WEBPACK_IMPORTED_MODULE_8__["PermissionsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_9__["DialogService"])); };
MessageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: MessageComponent, selectors: [["message"]], viewQuery: function MessageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.newMessage = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.contextMenu = _t.first);
    } }, inputs: { message: "message", isExtra: "isExtra", guild: "guild", member: "member", avatarURL: "avatarURL" }, decls: 16, vars: 9, consts: [[3, "matMenuTriggerFor", "contextmenu", 4, "ngIf"], ["extraMessage", ""], ["edited", ""], ["messageContent", ""], ["contextMenu", ""], [1, "p-2", "text-center", "overflow-hidden", "context-content", 3, "innerHTML"], [4, "ngIf"], [1, "p-2", 3, "click"], [1, "lni", "lni-dev"], [3, "matMenuTriggerFor", "contextmenu"], ["menuTrigger", "matMenuTrigger"], [3, "id", "click", 4, "ngIf", "ngIfElse"], [3, "id", "click"], [1, "message-group", 3, "ngClass"], ["matTooltip", "View Profile", "size", "40px", 3, "user", "click"], [1, "comment"], [1, "message", "first"], [2, "line-height", "16px"], [1, "username-wrapper", "v-btm"], [1, "username"], ["class", "username-badge badge badge-secondary ml-1", 4, "ngIf"], [1, "highlight-separator"], [1, "timestamp"], [4, "ngTemplateOutlet"], [1, "username-badge", "badge", "badge-secondary", "ml-1"], [1, "extra-message", 3, "id", "ngClass", "click"], [1, "content"], [1, "timestamp", "no-select", 3, "matTooltip"], ["class", "edit-indicator cursor-pointer ml-1", 3, "matTooltip", 4, "ngIf"], [1, "edit-indicator", "cursor-pointer", "ml-1", 3, "matTooltip"], [1, "lni", "lni-pencil-alt", "text-muted"], [1, "message-text", "d-inline", 3, "contentEditable", "innerHtml", "keydown"], ["newMessage", ""], [3, "canManage", "message", "close"], ["mat-menu-item", "", 3, "click"], [1, "lni", "lni-pencil-alt", "text-warning", "mr-1"], [1, "lni", "lni-close", "text-danger", "mr-1"]], template: function MessageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, MessageComponent_div_0_Template, 3, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, MessageComponent_ng_template_1_Template, 7, 8, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, MessageComponent_ng_template_3_Template, 1, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, MessageComponent_ng_template_5_Template, 3, 4, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-menu", null, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, MessageComponent_div_10_Template, 5, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, MessageComponent_div_11_Template, 6, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MessageComponent_Template_div_click_12_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.author);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("left", ctx.contextMenuPosition.x)("top", ctx.contextMenuPosition.y);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", ctx.processed, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.canManage && (ctx.author == null ? null : ctx.author._id) === ctx.userService.self._id);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.canManage);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.message._id, "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuTrigger"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _components_avatar_url_avatar_url_component__WEBPACK_IMPORTED_MODULE_12__["AvatarUrlComponent"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgTemplateOutlet"], _message_embed_message_embed_component__WEBPACK_IMPORTED_MODULE_14__["MessageEmbedComponent"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuItem"]], pipes: [_pipes_timestamp_pipe__WEBPACK_IMPORTED_MODULE_15__["TimestampPipe"]], styles: ["app-avatar-url[_ngcontent-%COMP%] {\r\n\tflex-shrink:0;\r\n\tmargin-top:-2px;\r\n\tmargin-right:20px;\r\n}\t\r\n\r\n.message-group[_ngcontent-%COMP%] {\r\n\tword-wrap:break-word;\r\n\tdisplay:flex;\r\n\tmargin-top:15px;\r\n\tborder-bottom:1px solid #eceeef;\r\n\tbox-sizing:border-box;\r\n\t-webkit-user-select:text;\r\n\t-moz-user-select:text;\r\n\tuser-select:text;\r\n\tpadding:10px 20px 0;\r\n\t}\t\r\n\r\n.username[_ngcontent-%COMP%] {\r\n\tcursor:pointer;\r\n\tpadding-bottom:5px;\r\n}\t\r\n\r\n.username[_ngcontent-%COMP%]:hover {\r\n\ttext-decoration:underline;\r\n}\t\r\n\r\n.message-group[_ngcontent-%COMP%]:last-of-type, .message-group[_ngcontent-%COMP%]:last-of-type:after {\r\n\tborder-bottom:none;\r\n}\t\r\n\r\n.message-group[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n\tmargin:0;\r\n\tpadding:0;\r\n}\t\r\n\r\n.message-group[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\r\n\tfont-size:16px;\r\n\tfont-weight:600;\r\n\tletter-spacing:0;\r\n\tcolor:var(--heading);\r\n}\t\r\n\r\n.message-group[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   .timestamp[_ngcontent-%COMP%] {\r\n\tcolor:#99aab5;\r\n\tfont-size:12px;\r\n\tletter-spacing:0;\r\n\tfont-weight:500;\r\n\ttext-transform:none;\r\n\tmargin-left:6px;\r\n}\t\r\n\r\n.message-group[_ngcontent-%COMP%]   .highlight-separator[_ngcontent-%COMP%] {\r\n\topacity:0;\r\n\twidth:0;\r\n\tdisplay:inline-block;\r\n\tcolor:#99aab5;\r\n}\t\r\n\r\n.message-group[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%] {\r\n\tflex:1;\r\n\tmargin-right:20px;\r\n\tmin-width:0;\r\n}\t\r\n\r\n.message-group[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n\tcolor:hsla(0,0%,100%,.2);\r\n}\t\r\n\r\n.message-group[_ngcontent-%COMP%] {\r\n\tpadding-top: 10px;\r\n}\t\r\n\r\n.extra-message[_ngcontent-%COMP%] {\r\n\tcolor:var(--font);\r\n\tpadding:0 80px;\r\n}\t\r\n\r\n.extra-message[_ngcontent-%COMP%]   .timestamp[_ngcontent-%COMP%] {\r\n\tfont-size:small;\r\n\tfloat:left;\r\n\tposition:relative;\r\n\tcursor:default;\r\n\tcolor:transparent;\r\n\tmargin:3px 0 0 -55px;\r\n}\t\r\n\r\n.extra-message[_ngcontent-%COMP%]:hover   .timestamp[_ngcontent-%COMP%] {\r\n\tcolor:gray;\r\n}\t\r\n\r\n.messages-wrapper[_ngcontent-%COMP%], .messages-wrapper[_ngcontent-%COMP%]   .scroller-wrap[_ngcontent-%COMP%], .hide-overflow[_ngcontent-%COMP%] {\r\n\toverflow:hidden;\r\n}\t\r\n\r\n.message-group[_ngcontent-%COMP%]:hover, .extra-message[_ngcontent-%COMP%]:hover {\r\n\tbackground-color:rgba(46,48,54,.3);\r\n}\t\r\n\r\n.edit-indicator[_ngcontent-%COMP%] {\r\n\tdisplay: none;\r\n\tfont-size: 16px !important;\r\n}\t\r\n\r\n.extra-message[_ngcontent-%COMP%]   .edit-indicator[_ngcontent-%COMP%] {\r\n\tdisplay: none;\r\n\tfont-size: 12px !important;\r\n}\t\r\n\r\n.message-group[_ngcontent-%COMP%]:hover   .edit-indicator[_ngcontent-%COMP%], .extra-message[_ngcontent-%COMP%]:hover   .edit-indicator[_ngcontent-%COMP%] {\r\n\tdisplay: inline;\r\n}\t\r\n\r\n.context-content[_ngcontent-%COMP%] {\r\n\tmax-height: 48px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUVDLGFBQWE7Q0FDYixlQUFlO0NBQ2YsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0Msb0JBQW9CO0NBQ3BCLFlBQVk7Q0FDWixlQUFlO0NBQ2YsK0JBQStCO0NBQy9CLHFCQUFxQjtDQUNyQix3QkFBd0I7Q0FDeEIscUJBQXFCO0NBRXJCLGdCQUFnQjtDQUNoQixtQkFBbUI7Q0FDbkI7O0FBRUQ7Q0FDQyxjQUFjO0NBQ2Qsa0JBQWtCO0FBQ25COztBQUNBO0NBQ0MseUJBQXlCO0FBQzFCOztBQUVBO0NBQ0Msa0JBQWtCO0FBQ25COztBQUNBO0NBQ0MsUUFBUTtDQUNSLFNBQVM7QUFDVjs7QUFDQTtDQUNDLGNBQWM7Q0FDZCxlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLG9CQUFvQjtBQUNyQjs7QUFDQTtDQUNDLGFBQWE7Q0FDYixjQUFjO0NBQ2QsZ0JBQWdCO0NBQ2hCLGVBQWU7Q0FDZixtQkFBbUI7Q0FDbkIsZUFBZTtBQUNoQjs7QUFDQTtDQUNDLFNBQVM7Q0FDVCxPQUFPO0NBQ1Asb0JBQW9CO0NBQ3BCLGFBQWE7QUFDZDs7QUFDQTtDQUdDLE1BQU07Q0FDTixpQkFBaUI7Q0FDakIsV0FBVztBQUNaOztBQUNBO0NBQ0Msd0JBQXdCO0FBQ3pCOztBQUNBO0NBQ0MsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLGNBQWM7QUFDZjs7QUFDQTtDQUNDLGVBQWU7Q0FDZixVQUFVO0NBQ1YsaUJBQWlCO0NBQ2pCLGNBQWM7Q0FDZCxpQkFBaUI7Q0FDakIsb0JBQW9CO0FBQ3JCOztBQUVBO0NBQ0MsVUFBVTtBQUNYOztBQUVBOzs7Q0FHQyxlQUFlO0FBQ2hCOztBQUVBOztDQUVDLGtDQUFrQztBQUNuQzs7QUFFQTtDQUNDLGFBQWE7Q0FDYiwwQkFBMEI7QUFDM0I7O0FBQ0E7Q0FDQyxhQUFhO0NBQ2IsMEJBQTBCO0FBQzNCOztBQUVBOztDQUVDLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxnQkFBZ0I7QUFDakIiLCJmaWxlIjoibWVzc2FnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWF2YXRhci11cmwge1xyXG5cdC1tcy1mbGV4LW5lZ2F0aXZlOjA7XHJcblx0ZmxleC1zaHJpbms6MDtcclxuXHRtYXJnaW4tdG9wOi0ycHg7XHJcblx0bWFyZ2luLXJpZ2h0OjIwcHg7XHJcbn1cdFxyXG5cclxuLm1lc3NhZ2UtZ3JvdXAge1xyXG5cdHdvcmQtd3JhcDpicmVhay13b3JkO1xyXG5cdGRpc3BsYXk6ZmxleDtcclxuXHRtYXJnaW4tdG9wOjE1cHg7XHJcblx0Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2VjZWVlZjtcclxuXHRib3gtc2l6aW5nOmJvcmRlci1ib3g7XHJcblx0LXdlYmtpdC11c2VyLXNlbGVjdDp0ZXh0O1xyXG5cdC1tb3otdXNlci1zZWxlY3Q6dGV4dDtcclxuXHQtbXMtdXNlci1zZWxlY3Q6dGV4dDtcclxuXHR1c2VyLXNlbGVjdDp0ZXh0O1xyXG5cdHBhZGRpbmc6MTBweCAyMHB4IDA7XHJcblx0fVxyXG5cdFxyXG4udXNlcm5hbWUge1xyXG5cdGN1cnNvcjpwb2ludGVyO1xyXG5cdHBhZGRpbmctYm90dG9tOjVweDtcclxufVxyXG4udXNlcm5hbWU6aG92ZXIge1xyXG5cdHRleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmU7XHJcbn1cclxuXHRcclxuLm1lc3NhZ2UtZ3JvdXA6bGFzdC1vZi10eXBlLC5tZXNzYWdlLWdyb3VwOmxhc3Qtb2YtdHlwZTphZnRlciB7XHJcblx0Ym9yZGVyLWJvdHRvbTpub25lO1xyXG59XHJcbi5tZXNzYWdlLWdyb3VwIGgyIHtcclxuXHRtYXJnaW46MDtcclxuXHRwYWRkaW5nOjA7XHJcbn1cdFxyXG4ubWVzc2FnZS1ncm91cCBoMiBzdHJvbmcge1xyXG5cdGZvbnQtc2l6ZToxNnB4O1xyXG5cdGZvbnQtd2VpZ2h0OjYwMDtcclxuXHRsZXR0ZXItc3BhY2luZzowO1xyXG5cdGNvbG9yOnZhcigtLWhlYWRpbmcpO1xyXG59XHRcclxuLm1lc3NhZ2UtZ3JvdXAgaDIgLnRpbWVzdGFtcCB7XHJcblx0Y29sb3I6Izk5YWFiNTtcclxuXHRmb250LXNpemU6MTJweDtcclxuXHRsZXR0ZXItc3BhY2luZzowO1xyXG5cdGZvbnQtd2VpZ2h0OjUwMDtcclxuXHR0ZXh0LXRyYW5zZm9ybTpub25lO1xyXG5cdG1hcmdpbi1sZWZ0OjZweDtcclxufVxyXG4ubWVzc2FnZS1ncm91cCAuaGlnaGxpZ2h0LXNlcGFyYXRvciB7XHJcblx0b3BhY2l0eTowO1xyXG5cdHdpZHRoOjA7XHJcblx0ZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcblx0Y29sb3I6Izk5YWFiNTtcclxufVx0XHJcbi5tZXNzYWdlLWdyb3VwIC5jb21tZW50IHtcclxuXHQtd2Via2l0LWJveC1mbGV4OjE7XHJcblx0LW1zLWZsZXg6MTtcclxuXHRmbGV4OjE7XHJcblx0bWFyZ2luLXJpZ2h0OjIwcHg7XHJcblx0bWluLXdpZHRoOjA7XHJcbn1cdFxyXG4ubWVzc2FnZS1ncm91cCBoMiBzcGFuIHtcclxuXHRjb2xvcjpoc2xhKDAsMCUsMTAwJSwuMik7XHJcbn1cclxuLm1lc3NhZ2UtZ3JvdXAge1xyXG5cdHBhZGRpbmctdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uZXh0cmEtbWVzc2FnZSB7XHJcblx0Y29sb3I6dmFyKC0tZm9udCk7XHJcblx0cGFkZGluZzowIDgwcHg7XHJcbn1cdFxyXG4uZXh0cmEtbWVzc2FnZSAudGltZXN0YW1wIHtcclxuXHRmb250LXNpemU6c21hbGw7XHJcblx0ZmxvYXQ6bGVmdDtcclxuXHRwb3NpdGlvbjpyZWxhdGl2ZTtcclxuXHRjdXJzb3I6ZGVmYXVsdDtcclxuXHRjb2xvcjp0cmFuc3BhcmVudDtcclxuXHRtYXJnaW46M3B4IDAgMCAtNTVweDtcclxufVxyXG5cdFxyXG4uZXh0cmEtbWVzc2FnZTpob3ZlciAudGltZXN0YW1wIHtcclxuXHRjb2xvcjpncmF5O1xyXG59XHJcblx0XHJcbi5tZXNzYWdlcy13cmFwcGVyLFxyXG4ubWVzc2FnZXMtd3JhcHBlciAuc2Nyb2xsZXItd3JhcCxcclxuLmhpZGUtb3ZlcmZsb3cge1xyXG5cdG92ZXJmbG93OmhpZGRlbjtcclxufVxyXG5cdFxyXG4ubWVzc2FnZS1ncm91cDpob3ZlcixcclxuLmV4dHJhLW1lc3NhZ2U6aG92ZXIge1xyXG5cdGJhY2tncm91bmQtY29sb3I6cmdiYSg0Niw0OCw1NCwuMyk7XHJcbn1cclxuXHJcbi5lZGl0LWluZGljYXRvciB7XHJcblx0ZGlzcGxheTogbm9uZTtcclxuXHRmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcclxufVxyXG4uZXh0cmEtbWVzc2FnZSAuZWRpdC1pbmRpY2F0b3Ige1xyXG5cdGRpc3BsYXk6IG5vbmU7XHJcblx0Zm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tZXNzYWdlLWdyb3VwOmhvdmVyIC5lZGl0LWluZGljYXRvcixcclxuLmV4dHJhLW1lc3NhZ2U6aG92ZXIgLmVkaXQtaW5kaWNhdG9yIHtcclxuXHRkaXNwbGF5OiBpbmxpbmU7XHJcbn1cclxuXHJcbi5jb250ZXh0LWNvbnRlbnQge1xyXG5cdG1heC1oZWlnaHQ6IDQ4cHg7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "4bjJ":
/*!*******************************************!*\
  !*** ./src/app/services/guild.service.ts ***!
  \*******************************************/
/*! exports provided: GuildService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuildService", function() { return GuildService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _http_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http-wrapper */ "R0x+");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/utils */ "oCjk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ws_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ws.service */ "Swid");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user.service */ "qfBg");








class GuildService extends _http_wrapper__WEBPACK_IMPORTED_MODULE_2__["HTTPWrapper"] {
    constructor(http, ws, userService) {
        super(http, ws);
        this.userService = userService;
        this.endpoint = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].endpoint + '/guilds';
        this._arr = [];
    }
    get guilds() {
        return this._arr.filter(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["array"].distinctBy('_id'));
    }
    getGuildFromChannel(channelId) {
        var _a;
        return (_a = this.guilds) === null || _a === void 0 ? void 0 : _a.find(g => g.channels
            .find(c => c._id === channelId));
    }
    getSelfMember(guildId) {
        return this.getMember(guildId, this.userService.self._id);
    }
    getMember(guildId, userId) {
        const guild = this.getCached(guildId);
        return guild === null || guild === void 0 ? void 0 : guild.members.find(m => m.userId === userId);
    }
    getMemberInGuild(guildId, memberId) {
        const guild = this.getCached(guildId);
        return guild === null || guild === void 0 ? void 0 : guild.members.find(m => m._id === memberId);
    }
    ownsGuild(guildId, userId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const guild = yield this.getAsync(guildId);
            return guild.ownerId === userId;
        });
    }
    getInvites(guildId) {
        return this.http.get(`${this.endpoint}/${guildId}/invites`, this.headers).toPromise();
    }
    addBot(guildId, botId) {
        return this.http
            .get(`${this.endpoint}/${guildId}/authorize/user?client_id=${botId}`, this.headers)
            .toPromise();
    }
    leave(guildId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const guild = this.getCached(guildId);
            const confirmation = confirm(`Leave ${guild.name}?`);
            if (!confirmation)
                return;
            yield this.kick(guildId, this.userService.self._id);
        });
    }
    kick(guildId, userId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const member = this.getMember(guildId, userId);
            yield this.ws.emitAsync('GUILD_MEMBER_REMOVE', {
                guildId,
                memberId: member._id,
            }, this);
        });
    }
    deleteGuild(guildId) {
        return this.ws.emitAsync('GUILD_DELETE', { guildId }, this);
    }
}
GuildService.ɵfac = function GuildService_Factory(t) { return new (t || GuildService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ws_service__WEBPACK_IMPORTED_MODULE_6__["WSService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"])); };
GuildService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: GuildService, factory: GuildService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "4wK4":
/*!*************************************************!*\
  !*** ./src/app/dashboard/text-based-channel.ts ***!
  \*************************************************/
/*! exports provided: TextBasedChannel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextBasedChannel", function() { return TextBasedChannel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_channel_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/channel.service */ "0xJi");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/message.service */ "tZre");
/* harmony import */ var _services_guild_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/guild.service */ "4bjJ");
/* harmony import */ var _services_log_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/log.service */ "iXKo");
/* harmony import */ var _services_permissions_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/permissions.service */ "tEUU");
/* harmony import */ var _services_ping_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/ping.service */ "TLdK");
/* harmony import */ var _services_sound_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/sound.service */ "V9p5");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/user.service */ "qfBg");
/* harmony import */ var _services_ws_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/ws.service */ "Swid");













const _c0 = ["message"];
class TextBasedChannel {
    constructor(route, channelService, messageService, guildService, log, router, perms, pings, sounds, userService, ws) {
        this.route = route;
        this.channelService = channelService;
        this.messageService = messageService;
        this.guildService = guildService;
        this.log = log;
        this.router = router;
        this.perms = perms;
        this.pings = pings;
        this.sounds = sounds;
        this.userService = userService;
        this.ws = ws;
        this.messageBatchSize = 25;
        this.chatBox = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.emojiPickerOpen = false;
        this.ready = false;
        this.lastTypedAt = null;
    }
    get typingUsernames() {
        return this.channelService
            .getTyping(this.channel._id)
            .map(id => this.userService.getCached(id).username);
    }
    get loadedAllMessages() {
        return this.messages
            || this.messages.length <= 0
            || this.messages.length % this.messageBatchSize !== 0;
    }
    get recipient() {
        return this.channelService.getRecipient(this.channel._id);
    }
    get title() {
        return (this.channel.type === 'DM')
            ? `@me + @${this.recipient.username}`
            : `${this.guild.name} > #${this.channel.name}`;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.route.paramMap.subscribe((paramMap) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const guildId = paramMap.get('guildId');
                const channelId = paramMap.get('channelId');
                this.guild = this.guildService.getCached(guildId);
                this.channel = yield this.channelService.getAsync(channelId);
                yield this.init();
            }));
        });
    }
    init() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.channel.type === 'VOICE')
                return this.router.navigate(['..']);
            document.title = this.title;
            this.pings.markAsRead(this.channel._id);
            this.messages = yield this.messageService.getAllAsync(this.channel._id);
            this.ws.on('MESSAGE_CREATE', () => this.scrollToMessage(50), this);
            this.ready = true;
            this.scrollToMessage();
        });
    }
    scrollToMessage(timeout = 100) {
        setTimeout(() => {
            try {
                const messages = document.querySelector('.messages');
                const height = messages.scrollHeight;
                messages.scrollTop = height;
            }
            catch (_a) { }
        }, timeout);
    }
    chat(content) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!content.trim())
                return;
            const firstNewLines = /\s+/;
            const lastNewLines = /\s+$/;
            content = content
                .replace(firstNewLines, '')
                .replace(lastNewLines, '');
            this.messageInput.nativeElement.value = '';
            this.ws.emit('MESSAGE_CREATE', {
                channelId: this.channel._id,
                partialMessage: { content },
            }, this);
            yield this.sounds.message();
            this.channelService.stopTyping(this.channel._id, this.userService.self._id);
        });
    }
    loadMoreMessages() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.loadedAllMessages)
                return;
            yield this.messageService
                .overrideFetchAll(this.channel._id, {
                start: this.messages.length,
                end: this.messages.length + this.messageBatchSize
            });
            this.scrollToMessage();
        });
    }
    shouldCombine(index) {
        const lastIndex = Math.max(0, index - 1);
        const lastMessage = (index) ? this.messages[lastIndex] : null;
        if (!lastMessage)
            return false;
        const message = this.messages[index];
        const msDifference = new Date(message.createdAt).getTime() - new Date(lastMessage === null || lastMessage === void 0 ? void 0 : lastMessage.createdAt).getTime();
        const minsAgo = msDifference / 60 / 1000;
        const maxTimeDifference = 5;
        return message.authorId === (lastMessage === null || lastMessage === void 0 ? void 0 : lastMessage.authorId) && minsAgo < maxTimeDifference;
    }
    emitTyping() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const sinceLastTyped = new Date().getTime() - ((_a = this.lastTypedAt) === null || _a === void 0 ? void 0 : _a.getTime());
            if (sinceLastTyped && sinceLastTyped < 5 * 1000)
                return;
            this.lastTypedAt = new Date();
            yield this.ws.emitAsync('TYPING_START', { channelId: this.channel._id }, this);
        });
    }
    // emoji picker
    addEmoji({ emoji }) {
        this.messageInput.nativeElement.value += emoji.native;
    }
    onClick({ path }) {
        const pickerClicked = path
            .some(n => {
            var _a;
            return n
                && n.nodeName === 'EMOJI-MART'
                || ((_a = n.classList) === null || _a === void 0 ? void 0 : _a.contains('emoji-icon'));
        });
        this.emojiPickerOpen = pickerClicked;
    }
    identifyMessage(index, item) {
        return item._id;
    }
}
TextBasedChannel.ɵfac = function TextBasedChannel_Factory(t) { return new (t || TextBasedChannel)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_channel_service__WEBPACK_IMPORTED_MODULE_4__["ChannelService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_guild_service__WEBPACK_IMPORTED_MODULE_6__["GuildService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_log_service__WEBPACK_IMPORTED_MODULE_7__["LogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_permissions_service__WEBPACK_IMPORTED_MODULE_8__["PermissionsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_ping_service__WEBPACK_IMPORTED_MODULE_9__["PingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_sound_service__WEBPACK_IMPORTED_MODULE_10__["SoundService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_ws_service__WEBPACK_IMPORTED_MODULE_12__["WSService"])); };
TextBasedChannel.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TextBasedChannel, selectors: [["ng-component"]], viewQuery: function TextBasedChannel_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.messageInput = _t.first);
    } }, decls: 0, vars: 0, template: function TextBasedChannel_Template(rf, ctx) { }, encapsulation: 2 });


/***/ }),

/***/ "5UOI":
/*!**********************************************************!*\
  !*** ./src/app/services/events/channel-event.service.ts ***!
  \**********************************************************/
/*! exports provided: ChannelEventService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelEventService", function() { return ChannelEventService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _sound_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sound.service */ "V9p5");
/* harmony import */ var _channel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../channel.service */ "0xJi");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../message.service */ "tZre");





class ChannelEventService {
    constructor(sounds, channelService, messageService) {
        this.sounds = sounds;
        this.channelService = channelService;
        this.messageService = messageService;
    }
    ping(args) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.sounds.ping();
        });
    }
    addMessage({ message }) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.messageService.overrideAdd([message]);
        });
    }
    deleteMessage({ channelId, messageId }) {
        const messages = this.messageService.getAllCached(channelId);
        const index = messages.findIndex(m => m._id === messageId);
        messages.splice(index, 1);
    }
    updateMessage({ message }) {
        const messages = this.messageService.getAllCached(message.channelId);
        let index = messages.findIndex(m => m._id === message._id);
        messages[index] = message;
    }
    startTyping({ channelId, userId }) {
        this.channelService.startTyping(channelId, userId);
    }
}
ChannelEventService.ɵfac = function ChannelEventService_Factory(t) { return new (t || ChannelEventService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_sound_service__WEBPACK_IMPORTED_MODULE_2__["SoundService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_channel_service__WEBPACK_IMPORTED_MODULE_3__["ChannelService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"])); };
ChannelEventService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ChannelEventService, factory: ChannelEventService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "5jTC":
/*!*****************************************!*\
  !*** ./src/app/pipes/mini-date.pipe.ts ***!
  \*****************************************/
/*! exports provided: MiniDatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiniDatePipe", function() { return MiniDatePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class MiniDatePipe {
    transform(dateString, ...args) {
        const date = new Date(dateString);
        return `${date.getDate()}/${(date.getMonth() + 1)}`;
    }
}
MiniDatePipe.ɵfac = function MiniDatePipe_Factory(t) { return new (t || MiniDatePipe)(); };
MiniDatePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "miniDate", type: MiniDatePipe, pure: true });


/***/ }),

/***/ "698J":
/*!*************************************************************************!*\
  !*** ./src/app/dashboard/components/guild-icon/guild-icon.component.ts ***!
  \*************************************************************************/
/*! exports provided: GuildIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuildIconComponent", function() { return GuildIconComponent; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/dialog.service */ "CzQJ");
/* harmony import */ var src_app_services_guild_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/guild.service */ "4bjJ");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");








const _c0 = ["img"];
function GuildIconComponent_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 11, 12);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx_r1.size)("height", ctx_r1.size);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r1.guild.iconURL, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", ctx_r1.guild.name);
} }
function GuildIconComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx_r2.size)("height", ctx_r2.size);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.guild.nameAcronym);
} }
function GuildIconComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GuildIconComponent_div_9_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.guildService.leave(ctx_r6.guild._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Leave");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class GuildIconComponent {
    constructor(dialogs, guildService, userService) {
        this.dialogs = dialogs;
        this.guildService = guildService;
        this.userService = userService;
        this.size = '52px';
        this.unknownImageURL = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].endpoint}/avatars/unknown.png`;
    }
    ngAfterViewInit() {
        var _a;
        const image = (_a = this.img) === null || _a === void 0 ? void 0 : _a.nativeElement;
        if (image)
            image.onerror = () => image.src = this.unknownImageURL;
    }
}
GuildIconComponent.ɵfac = function GuildIconComponent_Factory(t) { return new (t || GuildIconComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_guild_service__WEBPACK_IMPORTED_MODULE_3__["GuildService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"])); };
GuildIconComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GuildIconComponent, selectors: [["app-guild-icon"]], viewQuery: function GuildIconComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.img = _t.first);
    } }, inputs: { guild: "guild", size: "size" }, decls: 14, vars: 7, consts: [["routerLinkActive", "active", 1, "guild-icon", 3, "matMenuTriggerFor", "contextmenu"], ["menuTrigger", "matMenuTrigger"], [3, "routerLink", "click"], [3, "src", "alt", "width", "height", 4, "ngIf"], ["class", "d-flex flex-column justify-content-center", 3, "width", "height", 4, "ngIf"], ["matMenuContent", ""], ["contextMenu", ""], [1, "p-2", "text-center"], [4, "ngIf"], [1, "p-2", 3, "click"], [1, "lni", "lni-dev"], [3, "src", "alt"], ["img", ""], [1, "d-flex", "flex-column", "justify-content-center"], ["mat-menu-item", "", 1, "text-danger", "p-2", 3, "click"], [1, "lni", "lni-exit"]], template: function GuildIconComponent_Template(rf, ctx) { if (rf & 1) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("contextmenu", function GuildIconComponent_Template_div_contextmenu_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1); return ctx.dialogs.openMenu($event, _r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GuildIconComponent_Template_div_click_2_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, GuildIconComponent_img_3_Template, 2, 6, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, GuildIconComponent_span_4_Template, 3, 5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-menu", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, GuildIconComponent_div_9_Template, 6, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GuildIconComponent_Template_div_click_10_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/channels/" + ctx.guild._id);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.guild.iconURL);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.guild.iconURL);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.guild.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.guild.ownerId !== ctx.userService.self._id);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.guild._id, "");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkActive"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuTrigger"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuItem"]], styles: [".guild-icon[_ngcontent-%COMP%] {\n  border-radius: 50%;\n\n  margin: 5px;\n\n  background-color: var(--background-primary);\n  transition: all .35s;\n\n  cursor: pointer;\n}\n\n.guild-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover, .guild-icon[_ngcontent-%COMP%]:hover, .guild-icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\n  border-radius: 25%;\n}\n\n.guild-icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 18px;\n\n  transition: all .35s;\n}\n\n.guild-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n\n  border-radius: 50%;\n  transition: all .35s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImd1aWxkLWljb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjs7RUFFbEIsV0FBVzs7RUFFWCwyQ0FBMkM7RUFDM0Msb0JBQW9COztFQUVwQixlQUFlO0FBQ2pCOztBQUVBOzs7RUFHRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTs7RUFFZixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTs7RUFFWixrQkFBa0I7RUFDbEIsb0JBQW9CO0FBQ3RCIiwiZmlsZSI6Imd1aWxkLWljb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ndWlsZC1pY29uIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuXG4gIG1hcmdpbjogNXB4O1xuXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtcHJpbWFyeSk7XG4gIHRyYW5zaXRpb246IGFsbCAuMzVzO1xuXG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmd1aWxkLWljb24gaW1nOmhvdmVyLFxuLmd1aWxkLWljb246aG92ZXIsXG4uZ3VpbGQtaWNvbiBzcGFuOmhvdmVyIHtcbiAgYm9yZGVyLXJhZGl1czogMjUlO1xufVxuXG4uZ3VpbGQtaWNvbiBzcGFuIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG5cbiAgdHJhbnNpdGlvbjogYWxsIC4zNXM7XG59XG5cbi5ndWlsZC1pY29uIGltZyB7XG4gIHdpZHRoOiA1MnB4O1xuICBoZWlnaHQ6IDUycHg7XG5cbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0cmFuc2l0aW9uOiBhbGwgLjM1cztcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "6lfv":
/*!***********************************************************!*\
  !*** ./src/app/utils/zippy/zippy.component.animations.ts ***!
  \***********************************************************/
/*! exports provided: expandCollapse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expandCollapse", function() { return expandCollapse; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");

const expandCollapse = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('expandCollapse', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        height: 0,
        padding: '0 20px'
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '*' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('collapsed <=> expanded', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease')]),
]);


/***/ }),

/***/ "9uiD":
/*!*******************************************************************!*\
  !*** ./src/app/dialog/create-channel/create-channel.component.ts ***!
  \*******************************************************************/
/*! exports provided: CreateChannelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateChannelComponent", function() { return CreateChannelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_types_entity_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/types/entity-types */ "h8Xa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_ws_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/ws.service */ "Swid");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "FKr1");













function CreateChannelComponent_mat_error_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Required, and should be less than 32 characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
class CreateChannelComponent {
    constructor(dialogRef, data, ws) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.ws = ws;
        // TODO: use different form for voice channel
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('chat', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(src_app_types_entity_types__WEBPACK_IMPORTED_MODULE_3__["patterns"].textChannelName),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ]),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('TEXT'),
        });
        this.processing = false;
    }
    create() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.form.invalid)
                return;
            yield this.ws.emitAsync('CHANNEL_CREATE', {
                partialChannel: this.form.value,
                guildId: this.data.guild._id
            }, this);
            this.dialogRef.close();
        });
    }
}
CreateChannelComponent.ɵfac = function CreateChannelComponent_Factory(t) { return new (t || CreateChannelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_ws_service__WEBPACK_IMPORTED_MODULE_5__["WSService"])); };
CreateChannelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: CreateChannelComponent, selectors: [["app-create-channel"]], decls: 20, vars: 3, consts: [["mat-dialog-title", "", 1, "text-center"], ["mat-dialog-content", "", 1, "text-center"], [3, "formGroup", "keyup.enter"], ["f", "ngForm"], ["appearance", "outline"], ["formControlName", "name", "type", "text", "matInput", ""], ["nameInput", ""], [4, "ngIf"], ["formControlName", "type", 3, "select"], ["value", "TEXT", "selected", ""], ["mat-dialog-actions", "", 1, "d-flex", "justify-content-center"], ["id", "createChannelButton", 1, "btn", "btn-success", "mt-2", 3, "disabled", "click"]], template: function CreateChannelComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Create Channel");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keyup.enter", function CreateChannelComponent_Template_form_keyup_enter_3_listener() { return ctx.create(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, CreateChannelComponent_mat_error_10_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "mat-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("select", function CreateChannelComponent_Template_mat_select_select_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](9); return _r1.setValue(""); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Text");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CreateChannelComponent_Template_button_click_18_listener() { return ctx.create(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Create");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.form.get("name").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.processing);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtY2hhbm5lbC5jb21wb25lbnQuY3NzIn0= */"] });


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
    docsURL: 'https://docs.accord.app',
    production: false,
    endpoint: 'http://localhost:3000/api/v1',
    rootEndpoint: 'http://localhost:3000',
    githubURL: 'https://github.com/accorddotapp',
    version: 'v0.1.8a',
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

/***/ "B9z8":
/*!*****************************************************************************!*\
  !*** ./src/app/dashboard/messages/message-embed/message-embed.component.ts ***!
  \*****************************************************************************/
/*! exports provided: MessageEmbedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageEmbedComponent", function() { return MessageEmbedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function MessageEmbedComponent_div_0_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MessageEmbedComponent_div_0_span_1_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.close.emit(ctx_r4.message._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MessageEmbedComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.message.embed.description);
} }
function MessageEmbedComponent_div_0_img_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 9);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r3.message.embed.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function MessageEmbedComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MessageEmbedComponent_div_0_span_1_Template, 2, 0, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MessageEmbedComponent_div_0_div_5_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MessageEmbedComponent_div_0_img_6_Template, 1, 1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.canManage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r0.message.embed.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.message.embed.title || "Untitled");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.message.embed.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.message.embed.image);
} }
class MessageEmbedComponent {
    constructor() {
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
}
MessageEmbedComponent.ɵfac = function MessageEmbedComponent_Factory(t) { return new (t || MessageEmbedComponent)(); };
MessageEmbedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MessageEmbedComponent, selectors: [["message-embed"]], inputs: { message: "message", canManage: "canManage" }, outputs: { close: "close" }, decls: 1, vars: 1, consts: [["class", "embed-wrapper", 4, "ngIf"], [1, "embed-wrapper"], ["class", "hide-embed text-muted cursor-pointer", 3, "click", 4, "ngIf"], [1, "embed"], [1, "title", 3, "href"], ["class", "description", 4, "ngIf"], ["onerror", "this.onerror=null;this.hidden = true", 3, "src", 4, "ngIf"], [1, "hide-embed", "text-muted", "cursor-pointer", 3, "click"], [1, "description"], ["onerror", "this.onerror=null;this.hidden = true", 3, "src"]], template: function MessageEmbedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MessageEmbedComponent_div_0_Template, 7, 5, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message.embed);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".embed[_ngcontent-%COMP%] {\r\n  border-radius: 5px;\r\n\tbackground-color: var(--background-secondary);\r\n\tborder-left: 5px solid gray;\r\n\r\n\tmargin-top: 5px;\r\n  padding: 10px;\r\n\tmargin-bottom: 5px;\r\n\r\n\tmax-width: 500px;\r\n}\r\n.embed[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\r\n\tfont-weight: bold;\r\n\tpadding-bottom: 5px;\r\n}\r\n.embed[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\r\n\tpadding-bottom: 5px;\t\r\n}\r\n.embed[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .embed[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\r\n\tmax-width: 100%;\r\n\tborder-radius: 5px;\r\n\r\n\toutline: none !important;\r\n}\r\n.embed[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n\tcolor: var(--tertiary);\r\n\ttext-decoration: none;\r\n}\r\n.hide-embed[_ngcontent-%COMP%] {\r\n\tfont-size: larger;\r\n\tdisplay: none;\r\n\r\n\tfloat: right;\r\n}\r\n.embed-wrapper[_ngcontent-%COMP%]:hover   .hide-embed[_ngcontent-%COMP%] {\r\n\tdisplay: block;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2UtZW1iZWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtDQUNuQiw2Q0FBNkM7Q0FDN0MsMkJBQTJCOztDQUUzQixlQUFlO0VBQ2QsYUFBYTtDQUNkLGtCQUFrQjs7Q0FFbEIsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxpQkFBaUI7Q0FDakIsbUJBQW1CO0FBQ3BCO0FBQ0E7Q0FDQyxtQkFBbUI7QUFDcEI7QUFDQTtDQUNDLGVBQWU7Q0FDZixrQkFBa0I7O0NBRWxCLHdCQUF3QjtBQUN6QjtBQUNBO0NBQ0Msc0JBQXNCO0NBQ3RCLHFCQUFxQjtBQUN0QjtBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLGFBQWE7O0NBRWIsWUFBWTtBQUNiO0FBQ0E7Q0FDQyxjQUFjO0FBQ2YiLCJmaWxlIjoibWVzc2FnZS1lbWJlZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVtYmVkIHtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1zZWNvbmRhcnkpO1xyXG5cdGJvcmRlci1sZWZ0OiA1cHggc29saWQgZ3JheTtcclxuXHJcblx0bWFyZ2luLXRvcDogNXB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcblx0bWFyZ2luLWJvdHRvbTogNXB4O1xyXG5cclxuXHRtYXgtd2lkdGg6IDUwMHB4O1xyXG59XHJcbi5lbWJlZCAudGl0bGUge1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbn1cclxuLmVtYmVkIC5kZXNjcmlwdGlvbiB7XHJcblx0cGFkZGluZy1ib3R0b206IDVweDtcdFxyXG59XHJcbi5lbWJlZCBpbWcsIC5lbWJlZCB2aWRlbyB7XHJcblx0bWF4LXdpZHRoOiAxMDAlO1xyXG5cdGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHJcblx0b3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbi5lbWJlZCBhIHtcclxuXHRjb2xvcjogdmFyKC0tdGVydGlhcnkpO1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmhpZGUtZW1iZWQge1xyXG5cdGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG5cdGRpc3BsYXk6IG5vbmU7XHJcblxyXG5cdGZsb2F0OiByaWdodDtcclxufVxyXG4uZW1iZWQtd3JhcHBlcjpob3ZlciAuaGlkZS1lbWJlZCB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "BUNz":
/*!********************************************************!*\
  !*** ./src/app/services/events/guild-event.service.ts ***!
  \********************************************************/
/*! exports provided: GuildEventService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuildEventService", function() { return GuildEventService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _guild_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../guild.service */ "4bjJ");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "qfBg");




class GuildEventService {
    constructor(guildService, userService) {
        this.guildService = guildService;
        this.userService = userService;
    }
    createRole({ guildId, role }) {
        const guild = this.guildService.getCached(guildId);
        guild.roles.push(role);
    }
    deleteRole({ guildId, roleId }) {
        const guild = this.guildService.getCached(guildId);
        const index = guild.roles.findIndex(r => r._id === roleId);
        guild.roles.splice(index, 1);
    }
    updateRole({ guildId, roleId, partialRole }) {
        const guild = this.guildService.getCached(guildId);
        const index = guild.roles.findIndex(r => r._id === roleId);
        guild.roles[index] = Object.assign(Object.assign({}, guild.roles[index]), partialRole);
    }
    addMember({ member }) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const newUser = yield this.userService.getAsync(member.userId);
            this.userService.add(newUser);
            const guild = this.guildService.getCached(member.guildId);
            guild.members.push(member);
        });
    }
    removeMember({ memberId, guildId }) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const guild = this.guildService.getCached(guildId);
            const index = guild.members.findIndex(m => m._id === memberId);
            guild.members.splice(index, 1);
        });
    }
    updateMember({ guildId, partialMember, memberId }) {
        const guild = this.guildService.getCached(guildId);
        const oldMember = this.guildService.getMemberInGuild(guildId, memberId);
        const index = guild.members.findIndex(m => m._id === memberId);
        return guild.members[index] = Object.assign(Object.assign({}, oldMember), partialMember);
    }
    addChannel({ channel }) {
        const guild = this.guildService.getCached(channel.guildId);
        guild.channels.push(channel);
    }
    deleteChannel({ guildId, channelId }) {
        const guild = this.guildService.getCached(guildId);
        const index = guild.channels.findIndex(c => c._id === channelId);
        guild.channels.splice(index, 1);
    }
    update({ guildId, partialGuild }) {
        this.guildService.upsert(guildId, partialGuild);
    }
    delete({ guildId }) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            while (this.guildService.getCached(guildId))
                this.guildService.delete(guildId);
        });
    }
}
GuildEventService.ɵfac = function GuildEventService_Factory(t) { return new (t || GuildEventService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_guild_service__WEBPACK_IMPORTED_MODULE_2__["GuildService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"])); };
GuildEventService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: GuildEventService, factory: GuildEventService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Ce9m":
/*!*********************************************************************!*\
  !*** ./src/app/dashboard/me/user-account/user-account.component.ts ***!
  \*********************************************************************/
/*! exports provided: UserAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAccountComponent", function() { return UserAccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_authentication_sign_up_password_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/authentication/sign-up/password.validators */ "Tyil");
/* harmony import */ var src_app_types_entity_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/types/entity-types */ "h8Xa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_app_authentication_sign_up_username_validators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/authentication/sign-up/username.validators */ "IrsS");
/* harmony import */ var src_app_services_user_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/user-auth.service */ "hZP9");
/* harmony import */ var src_app_services_log_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/log.service */ "iXKo");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_settings_sidebar_settings_sidebar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/settings-sidebar/settings-sidebar.component */ "qT/8");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
















function UserAccountComponent_app_settings_sidebar_0_form_6_mat_hint_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Checking");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function UserAccountComponent_app_settings_sidebar_0_form_6_mat_error_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Email is already in use.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function UserAccountComponent_app_settings_sidebar_0_form_6_mat_error_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Email must be valid.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function UserAccountComponent_app_settings_sidebar_0_form_6_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("submit", function UserAccountComponent_app_settings_sidebar_0_form_6_Template_form_submit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r13.changeEmail(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Change Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-form-field", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, UserAccountComponent_app_settings_sidebar_0_form_6_mat_hint_8_Template, 3, 0, "mat-hint", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, UserAccountComponent_app_settings_sidebar_0_form_6_mat_error_9_Template, 2, 0, "mat-error", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, UserAccountComponent_app_settings_sidebar_0_form_6_mat_error_10_Template, 2, 0, "mat-error", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r1.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.form.get("email").pending);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.form.get("email").errors == null ? null : ctx_r1.form.get("email").errors.emailInUse);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.form.get("email").errors == null ? null : ctx_r1.form.get("email").errors.pattern);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r1.processingEmail);
} }
function UserAccountComponent_app_settings_sidebar_0_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Your account is verified by email.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function UserAccountComponent_app_settings_sidebar_0_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Your email is not verified.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function UserAccountComponent_app_settings_sidebar_0_mat_error_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Old password is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function UserAccountComponent_app_settings_sidebar_0_mat_error_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "New password is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function UserAccountComponent_app_settings_sidebar_0_mat_error_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "New password must be valid.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function UserAccountComponent_app_settings_sidebar_0_mat_error_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "New password should not equal old password.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function UserAccountComponent_app_settings_sidebar_0_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-settings-sidebar", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h5", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Your Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, UserAccountComponent_app_settings_sidebar_0_form_6_Template, 13, 5, "form", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, UserAccountComponent_app_settings_sidebar_0_span_8_Template, 4, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, UserAccountComponent_app_settings_sidebar_0_span_9_Template, 4, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "form", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("submit", function UserAccountComponent_app_settings_sidebar_0_Template_form_submit_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r15.changePassword(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Change Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "mat-form-field", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Old Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, UserAccountComponent_app_settings_sidebar_0_mat_error_18_Template, 2, 0, "mat-error", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "mat-form-field", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "New Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, UserAccountComponent_app_settings_sidebar_0_mat_error_24_Template, 2, 0, "mat-error", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, UserAccountComponent_app_settings_sidebar_0_mat_error_25_Template, 2, 0, "mat-error", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Change");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, UserAccountComponent_app_settings_sidebar_0_mat_error_28_Template, 2, 0, "mat-error", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.userService.self.verified);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r0.userService.self.verified);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r0.passwordForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.passwordForm.get("oldPassword").errors == null ? null : ctx_r0.passwordForm.get("oldPassword").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.passwordForm.get("newPassword").errors == null ? null : ctx_r0.passwordForm.get("newPassword").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.passwordForm.get("newPassword").errors == null ? null : ctx_r0.passwordForm.get("newPassword").errors.pattern);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r0.processingPassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.passwordForm.get("newPassword").dirty && (ctx_r0.passwordForm.errors == null ? null : ctx_r0.passwordForm.errors.passwordMatch));
} }
class UserAccountComponent {
    constructor(userService, usernameValidators, userAuthService, log) {
        this.userService = userService;
        this.usernameValidators = usernameValidators;
        this.userAuthService = userAuthService;
        this.log = log;
        this.passwordForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            oldPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            newPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(src_app_types_entity_types__WEBPACK_IMPORTED_MODULE_3__["patterns"].password),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ]),
        }, [src_app_authentication_sign_up_password_validators__WEBPACK_IMPORTED_MODULE_2__["PasswordValidators"].newPasswordShouldNotMatch]);
        this.processingEmail = false;
        this.processingPassword = false;
    }
    buildForm(user) {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](user.email, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(src_app_types_entity_types__WEBPACK_IMPORTED_MODULE_3__["patterns"].email),
            ], [this.usernameValidators.emailInUse.bind(this.usernameValidators)]),
        });
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.userService.init();
            this.form = yield this.buildForm(this.userService.self);
        });
    }
    changeEmail() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                if (this.form.invalid)
                    return;
                const email = this.form.get('email').value;
                this.processingEmail = yield this.userAuthService.sendVerifyEmail(email);
                yield this.log.success('Email sent.');
            }
            catch (_a) {
                this.passwordForm.setErrors({ invalidEmail: true });
                yield this.log.error('Failed to send email.');
            }
        });
    }
    changePassword() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                if (this.passwordForm.invalid)
                    return;
                if (!this.userService.self.verified)
                    throw new TypeError('A verified email is needed to reset password.');
                const email = this.form.get('email').value;
                const oldPassword = this.passwordForm.get('oldPassword').value;
                const newPassword = this.passwordForm.get('newPassword').value;
                this.processingPassword = yield this.userAuthService
                    .changePassword(email, oldPassword, newPassword);
                yield this.log.success('Password succesfully changed.');
            }
            catch (error) {
                yield this.log.error(error.message);
                this.passwordForm.setErrors({ oldPasswordInvalid: true });
            }
        });
    }
}
UserAccountComponent.ɵfac = function UserAccountComponent_Factory(t) { return new (t || UserAccountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_authentication_sign_up_username_validators__WEBPACK_IMPORTED_MODULE_6__["UsernameValidators"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_user_auth_service__WEBPACK_IMPORTED_MODULE_7__["UserAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_log_service__WEBPACK_IMPORTED_MODULE_8__["LogService"])); };
UserAccountComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: UserAccountComponent, selectors: [["app-user-account"]], decls: 1, vars: 1, consts: [["tabType", "user", 4, "ngIf"], ["tabType", "user"], [1, "content"], [1, "mb-4"], [1, "row"], [1, "col-lg-6", "col-md-12"], [3, "formGroup", "submit", 4, "ngIf"], ["class", "border border-success rounded p-3", 4, "ngIf"], ["class", "border border-warning rounded p-3", 4, "ngIf"], [3, "formGroup", "submit"], ["f", "ngForm"], ["appearance", "outline", 1, "mr-2"], [4, "ngIf"], ["formControlName", "oldPassword", "type", "password", "matInput", ""], ["appearance", "outline"], ["formControlName", "newPassword", "type", "password", "matInput", ""], ["mat-button", "", 1, "bg-warning", "float-right", "mt-3", "mr-3", 3, "disabled"], ["class", "mb-2", 4, "ngIf"], ["formControlName", "email", "type", "email", "matInput", ""], ["matTooltip", "Send", "mat-button", "", 1, "ml-2", "bg-success", 3, "disabled"], [1, "lni", "lni-envelope", "text-dark"], [1, "lni", "lni-circle-notch", "fa-spin"], [1, "border", "border-success", "rounded", "p-3"], [1, "lni", "lni-checkmark-circle", "text-success"], [1, "border", "border-warning", "rounded", "p-3"], [1, "lni", "lni-close", "text-danger"], [1, "mb-2"]], template: function UserAccountComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, UserAccountComponent_app_settings_sidebar_0_Template, 29, 9, "app-settings-sidebar", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.userService.self);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _components_settings_sidebar_settings_sidebar_component__WEBPACK_IMPORTED_MODULE_10__["SettingsSidebarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MatTooltip"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatHint"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatError"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWFjY291bnQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "CzQJ":
/*!********************************************!*\
  !*** ./src/app/services/dialog.service.ts ***!
  \********************************************/
/*! exports provided: DialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogService", function() { return DialogService; });
/* harmony import */ var _dialog_add_friend_add_friend_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dialog/add-friend/add-friend.component */ "PMD9");
/* harmony import */ var _dialog_create_channel_create_channel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dialog/create-channel/create-channel.component */ "9uiD");
/* harmony import */ var _dialog_create_guild_create_guild_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dialog/create-guild/create-guild.component */ "FwYx");
/* harmony import */ var _dialog_create_invite_create_invite_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dialog/create-invite/create-invite.component */ "zswv");
/* harmony import */ var _dialog_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dialog/profile/profile.component */ "rEt/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");







class DialogService {
    constructor(dialog) {
        this.dialog = dialog;
    }
    openMenu(event, menuTrigger) {
        event.preventDefault();
        menuTrigger.openMenu();
    }
    createInvite(data) {
        this.dialog.open(_dialog_create_invite_create_invite_component__WEBPACK_IMPORTED_MODULE_3__["CreateInviteComponent"], { width: '500px', data });
    }
    createChannel(data) {
        this.dialog.open(_dialog_create_channel_create_channel_component__WEBPACK_IMPORTED_MODULE_1__["CreateChannelComponent"], { width: '350px', data });
    }
    profile(data) {
        this.dialog.open(_dialog_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"], { width: '500px', data });
    }
    createGuild() {
        this.dialog.open(_dialog_create_guild_create_guild_component__WEBPACK_IMPORTED_MODULE_2__["CreateGuildComponent"], { width: '500px' });
    }
    addFriend() {
        this.dialog.open(_dialog_add_friend_add_friend_component__WEBPACK_IMPORTED_MODULE_0__["AddFriendComponent"], { width: '350px' });
    }
}
DialogService.ɵfac = function DialogService_Factory(t) { return new (t || DialogService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"])); };
DialogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: DialogService, factory: DialogService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "FwYx":
/*!***************************************************************!*\
  !*** ./src/app/dialog/create-guild/create-guild.component.ts ***!
  \***************************************************************/
/*! exports provided: CreateGuildComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateGuildComponent", function() { return CreateGuildComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_services_log_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/log.service */ "iXKo");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_app_services_ws_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/ws.service */ "Swid");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");












const _c0 = ["inviteInput"];
function CreateGuildComponent_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Required, and should be less than 32 characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class CreateGuildComponent {
    constructor(dialogRef, log, userService, ws) {
        this.dialogRef = dialogRef;
        this.log = log;
        this.userService = userService;
        this.ws = ws;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](`${this.userService.self.username}'s Guild`, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(32)
            ]),
        });
    }
    create() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.form.invalid)
                return;
            this.dialogRef.close();
            this.ws.emit('GUILD_CREATE', {
                partialGuild: {
                    name: this.form.value.name,
                },
            }, this);
        });
    }
    joinGuild() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.dialogRef.close();
            yield this.ws.emitAsync('GUILD_MEMBER_ADD', {
                inviteCode: this.inviteInput.nativeElement.value,
            }, this);
            yield this.log.success();
        });
    }
}
CreateGuildComponent.ɵfac = function CreateGuildComponent_Factory(t) { return new (t || CreateGuildComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_log_service__WEBPACK_IMPORTED_MODULE_4__["LogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_ws_service__WEBPACK_IMPORTED_MODULE_6__["WSService"])); };
CreateGuildComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CreateGuildComponent, selectors: [["app-create-guild"]], viewQuery: function CreateGuildComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.inviteInput = _t.first);
    } }, decls: 28, vars: 2, consts: [["id", "addGuildLabel", "mat-dialog-title", ""], ["mat-dialog-content", ""], [1, "text-center"], [1, "d-flex", "justify-content-center"], [3, "formGroup", "submit"], ["f", "ngForm"], ["appearance", "outline"], ["formControlName", "name", "type", "text", "matInput", ""], [4, "ngIf"], ["mat-button", "", 1, "bg-primary", "mt-2", "mb-4"], ["mat-dialog-footer", ""], ["type", "text", "matInput", ""], ["inviteInput", ""], ["mat-dialog-actions", "", 1, "d-flex", "justify-content-center"], ["id", "joinGuildButton", "type", "button", "mat-button", "", 1, "bg-secondary", 3, "click"]], template: function CreateGuildComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h5", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Add Guild");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Create a Guild");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "form", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("submit", function CreateGuildComponent_Template_form_submit_6_listener() { return ctx.create(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Server Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, CreateGuildComponent_mat_error_12_Template, 2, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Create");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Already have an invite?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Invite");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreateGuildComponent_Template_button_click_26_listener() { return ctx.joinGuild(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Join a Guild");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.form.get("name").invalid);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogActions"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatError"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtZ3VpbGQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "G7KZ":
/*!***************************************************************************!*\
  !*** ./src/app/dashboard/guilds/guild-sidebar/guild-sidebar.component.ts ***!
  \***************************************************************************/
/*! exports provided: GuildSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuildSidebarComponent", function() { return GuildSidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_channel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/channel.service */ "0xJi");
/* harmony import */ var _services_guild_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/guild.service */ "4bjJ");
/* harmony import */ var src_app_services_permissions_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/permissions.service */ "tEUU");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_app_services_ping_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/ping.service */ "TLdK");
/* harmony import */ var src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/dialog.service */ "CzQJ");
/* harmony import */ var src_app_services_ws_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/ws.service */ "Swid");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/sidebar/sidebar.component */ "itJq");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _components_channel_tab_channel_tab_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/channel-tab/channel-tab.component */ "fQow");
/* harmony import */ var _utils_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../utils/spinner/spinner.component */ "ij2n");















function GuildSidebarComponent_div_1_div_10_app_channel_tab_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-channel-tab", 17);
} if (rf & 2) {
    const channel_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("channel", channel_r9);
} }
function GuildSidebarComponent_div_1_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, GuildSidebarComponent_div_1_div_10_app_channel_tab_1_Template, 1, 1, "app-channel-tab", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r7.textChannels);
} }
function GuildSidebarComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h6", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, GuildSidebarComponent_div_1_div_10_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.guild.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Channels\u2014", ctx_r0.textChannels.length, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.perms.can(ctx_r0.guild._id, "VIEW_CHANNELS"));
} }
function GuildSidebarComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function GuildSidebarComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function GuildSidebarComponent_a_7_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GuildSidebarComponent_a_7_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.dialog.createInvite({ guild: ctx_r10.guild }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Invite People");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function GuildSidebarComponent_a_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Guild Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/channels/" + ctx_r5.guild._id + "/settings");
} }
function GuildSidebarComponent_a_9_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GuildSidebarComponent_a_9_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.dialog.createChannel({ guild: ctx_r12.guild }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Create Channel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = ["*"];
class GuildSidebarComponent {
    constructor(route, channelService, guildService, perms, userService, pings, dialog, router, ws) {
        this.route = route;
        this.channelService = channelService;
        this.guildService = guildService;
        this.perms = perms;
        this.userService = userService;
        this.pings = pings;
        this.dialog = dialog;
        this.router = router;
        this.ws = ws;
        this.loaded = true;
    }
    get selectedChannel() {
        return this.channelService.self;
    }
    get textChannels() {
        return this.guild.channels.filter(c => c.type === 'TEXT');
    }
    get voiceChannels() {
        return this.guild.channels.filter(c => c.type === 'VOICE');
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.route.paramMap.subscribe((paramMap) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const guildId = paramMap.get('guildId');
                this.guild = this.guildService.getCached(guildId);
                const inGuild = this.guildService.getSelfMember(guildId);
                if (!inGuild)
                    yield this.router.navigate(['/channels/@me']);
            }));
            this.ws
                .on('GUILD_DELETE', this.returnFromGuild, this)
                .on('GUILD_LEAVE', this.returnFromGuild, this);
        });
    }
    returnFromGuild({ guildId }) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (guildId !== this.guild._id)
                return;
            yield this.router.navigate(['/channels/@me']);
        });
    }
    openMenu(event, menuTrigger) {
        event.preventDefault();
        menuTrigger.menu.focusFirstItem('mouse');
        menuTrigger.openMenu();
    }
}
GuildSidebarComponent.ɵfac = function GuildSidebarComponent_Factory(t) { return new (t || GuildSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_channel_service__WEBPACK_IMPORTED_MODULE_3__["ChannelService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_guild_service__WEBPACK_IMPORTED_MODULE_4__["GuildService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_permissions_service__WEBPACK_IMPORTED_MODULE_5__["PermissionsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_ping_service__WEBPACK_IMPORTED_MODULE_7__["PingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_8__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_ws_service__WEBPACK_IMPORTED_MODULE_9__["WSService"])); };
GuildSidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GuildSidebarComponent, selectors: [["guild-sidebar"]], inputs: { loaded: ["waitFor", "loaded"] }, ngContentSelectors: _c0, decls: 10, vars: 6, consts: [["class", "side-nav navbar-dark", 4, "ngIf"], ["id", "content"], [4, "ngIf"], ["guildMenu", "matMenu"], ["class", "dropdown-item invite", "mat-menu-item", "", 3, "click", 4, "ngIf"], ["class", "dropdown-item", "mat-menu-item", "", 3, "routerLink", 4, "ngIf"], ["class", "dropdown-item", "mat-menu-item", "", 3, "click", 4, "ngIf"], [1, "side-nav", "navbar-dark"], [1, "header"], [1, "dropdown"], ["id", "heftyButton", "type", "button", 1, "btn", "bg-transparent", "text-center", 3, "matMenuTriggerFor"], [1, "d-flex", "flex-column", "jusify-content-center", "mb-0"], [1, "lni", "lni-chevron-down", "ml-1"], [1, "category"], ["class", "navbar-nav", 4, "ngIf"], [1, "navbar-nav"], [3, "channel", 4, "ngFor", "ngForOf"], [3, "channel"], ["mat-menu-item", "", 1, "dropdown-item", "invite", 3, "click"], [1, "lni", "lni-user"], ["mat-menu-item", "", 1, "dropdown-item", 3, "routerLink"], [1, "lni", "lni-cog"], ["mat-menu-item", "", 1, "dropdown-item", 3, "click"], [1, "lni", "lni-circle-plus"]], template: function GuildSidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, GuildSidebarComponent_div_1_Template, 11, 4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, GuildSidebarComponent_div_3_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, GuildSidebarComponent_div_4_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-menu", null, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, GuildSidebarComponent_a_7_Template, 3, 0, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, GuildSidebarComponent_a_8_Template, 3, 1, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, GuildSidebarComponent_a_9_Template, 3, 0, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.guild);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.perms.can(ctx.guild._id, "CREATE_INVITE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.perms.can(ctx.guild._id, "MANAGE_GUILD"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.perms.can(ctx.guild._id, "MANAGE_CHANNELS"));
    } }, directives: [_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__["SidebarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuTrigger"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _components_channel_tab_channel_tab_component__WEBPACK_IMPORTED_MODULE_13__["ChannelTabComponent"], _utils_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_14__["SpinnerComponent"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuItem"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["h4[_ngcontent-%COMP%] {\r\n  margin-bottom: 35px;\r\n  cursor: pointer;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n}\r\n\r\n.alt-name[_ngcontent-%COMP%] {\r\n  border-radius: 50%;\r\n  background-color: var(--background-primary);\r\n\r\n  width: 96px;\r\n  height: 96px;\r\n}\r\n\r\n.alt-name[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  font-size: 32px;\r\n}\r\n\r\n.header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  font-size: large;\r\n}\r\n\r\n.header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]::after {\r\n  padding-top: 10px;\r\n}\r\n\r\n#heftyButton[_ngcontent-%COMP%] {\r\n  outline: none !important;\r\n\r\n  height: 50px !important; \r\n  width: 270px !important;\r\n\r\n  color: var(--heading);\r\n}\r\n\r\n#heftyButton[_ngcontent-%COMP%]:focus {\r\n  outline: none !important;\r\n}\r\n\r\n.dropdown-menu[_ngcontent-%COMP%] {\r\n  background-color: var(--background-tertiary);\r\n  width: 265px;\r\n  padding: 5px;\r\n}\r\n\r\na.dropdown-item[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n\r\n  color: var(--font);\r\n\r\n  padding-right: 10px;\r\n  max-width: 95%;\r\n}\r\n\r\na.dropdown-item.invite[_ngcontent-%COMP%] {\r\n  color: var(--primary) !important;\r\n}\r\n\r\na.dropdown-item[_ngcontent-%COMP%]:hover {\r\n  color: var(--heading) !important;\r\n}\r\n\r\na.dropdown-item[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\r\n  color: var(--heading) !important;\r\n}\r\n\r\n.dropdown[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  float: right;\r\n  color: gray;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImd1aWxkLXNpZGViYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLDJDQUEyQzs7RUFFM0MsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx3QkFBd0I7O0VBRXhCLHVCQUF1QjtFQUN2Qix1QkFBdUI7O0VBRXZCLHFCQUFxQjtBQUN2Qjs7QUFDQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLDRDQUE0QztFQUM1QyxZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTs7RUFFZixrQkFBa0I7O0VBRWxCLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOztBQUNBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUNBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYiIsImZpbGUiOiJndWlsZC1zaWRlYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoNCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmFsdC1uYW1lIHtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1wcmltYXJ5KTtcclxuXHJcbiAgd2lkdGg6IDk2cHg7XHJcbiAgaGVpZ2h0OiA5NnB4O1xyXG59XHJcblxyXG4uYWx0LW5hbWUgc3BhbiB7XHJcbiAgZm9udC1zaXplOiAzMnB4O1xyXG59XHJcblxyXG4uaGVhZGVyIGgxIHtcclxuICBmb250LXNpemU6IGxhcmdlO1xyXG59XHJcbi5oZWFkZXIgaDE6OmFmdGVyIHtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG5cclxuI2hlZnR5QnV0dG9uIHtcclxuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcblxyXG4gIGhlaWdodDogNTBweCAhaW1wb3J0YW50OyBcclxuICB3aWR0aDogMjcwcHggIWltcG9ydGFudDtcclxuXHJcbiAgY29sb3I6IHZhcigtLWhlYWRpbmcpO1xyXG59XHJcbiNoZWZ0eUJ1dHRvbjpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZHJvcGRvd24tbWVudSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC10ZXJ0aWFyeSk7XHJcbiAgd2lkdGg6IDI2NXB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuYS5kcm9wZG93bi1pdGVtIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gIGNvbG9yOiB2YXIoLS1mb250KTtcclxuXHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICBtYXgtd2lkdGg6IDk1JTtcclxufVxyXG5hLmRyb3Bkb3duLWl0ZW0uaW52aXRlIHtcclxuICBjb2xvcjogdmFyKC0tcHJpbWFyeSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuYS5kcm9wZG93bi1pdGVtOmhvdmVyIHtcclxuICBjb2xvcjogdmFyKC0taGVhZGluZykgIWltcG9ydGFudDtcclxufVxyXG5hLmRyb3Bkb3duLWl0ZW06aG92ZXIgaSB7XHJcbiAgY29sb3I6IHZhcigtLWhlYWRpbmcpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kcm9wZG93biBpIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgY29sb3I6IGdyYXk7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "GxHU":
/*!******************************************************!*\
  !*** ./src/app/pipes/camel-to-sentence-case.pipe.ts ***!
  \******************************************************/
/*! exports provided: CamelToSentenceCasePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CamelToSentenceCasePipe", function() { return CamelToSentenceCasePipe; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils */ "oCjk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CamelToSentenceCasePipe {
    transform(words) {
        return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["camelToSentenceCase"])(words);
    }
}
CamelToSentenceCasePipe.ɵfac = function CamelToSentenceCasePipe_Factory(t) { return new (t || CamelToSentenceCasePipe)(); };
CamelToSentenceCasePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "camelToSentenceCase", type: CamelToSentenceCasePipe, pure: true });


/***/ }),

/***/ "HEGd":
/*!***********************************!*\
  !*** ./src/app/countdown.pipe.ts ***!
  \***********************************/
/*! exports provided: CountdownPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountdownPipe", function() { return CountdownPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CountdownPipe {
    transform(value) { }
}
CountdownPipe.ɵfac = function CountdownPipe_Factory(t) { return new (t || CountdownPipe)(); };
CountdownPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "countdown", type: CountdownPipe, pure: true });


/***/ }),

/***/ "HZi2":
/*!***********************************************************!*\
  !*** ./src/app/authentication/logout/logout.component.ts ***!
  \***********************************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_guild_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/guild.service */ "4bjJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ "qfBg");
/* harmony import */ var _utils_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/spinner/spinner.component */ "ij2n");






class LogoutComponent {
    constructor(guildService, router, userService) {
        this.guildService = guildService;
        this.router = router;
        this.userService = userService;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            localStorage.removeItem('key');
            yield this.userService.updateSelf();
            yield this.guildService.fetchAll();
            this.router.navigate(['/']);
        });
    }
}
LogoutComponent.ɵfac = function LogoutComponent_Factory(t) { return new (t || LogoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_guild_service__WEBPACK_IMPORTED_MODULE_2__["GuildService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"])); };
LogoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LogoutComponent, selectors: [["app-logout"]], decls: 1, vars: 0, template: function LogoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "spinner");
    } }, directives: [_utils_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_5__["SpinnerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dvdXQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "HfTq":
/*!************************************************!*\
  !*** ./src/app/guards/dashboard-auth.guard.ts ***!
  \************************************************/
/*! exports provided: DashboardAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardAuthGuard", function() { return DashboardAuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_guild_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/guild.service */ "4bjJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "qfBg");
/* harmony import */ var _services_user_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/user-auth.service */ "hZP9");






class DashboardAuthGuard {
    constructor(guildService, router, userService, auth) {
        this.guildService = guildService;
        this.router = router;
        this.userService = userService;
        this.auth = auth;
        this.already = false;
    }
    canActivate(route, state) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.userService.init();
            yield this.guildService.init();
            const canActivate = Boolean(this.userService.self);
            if (!canActivate)
                yield this.router.navigateByUrl(`/login?redirect=${route.url.join('/')}`);
            if (!this.already) {
                this.already = true;
                yield this.auth.ready();
            }
            return canActivate;
        });
    }
}
DashboardAuthGuard.ɵfac = function DashboardAuthGuard_Factory(t) { return new (t || DashboardAuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_guild_service__WEBPACK_IMPORTED_MODULE_2__["GuildService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_user_auth_service__WEBPACK_IMPORTED_MODULE_5__["UserAuthService"])); };
DashboardAuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DashboardAuthGuard, factory: DashboardAuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "IrsS":
/*!***************************************************************!*\
  !*** ./src/app/authentication/sign-up/username.validators.ts ***!
  \***************************************************************/
/*! exports provided: UsernameValidators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsernameValidators", function() { return UsernameValidators; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");



class UsernameValidators {
    constructor(userService) {
        this.userService = userService;
    }
    shouldBeUnique(control) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const isTaken = (yield this.userService.checkUsername(control.value))
                && this.userService.self.username !== control.value;
            return (isTaken) ? { shouldBeUnique: true } : null;
        });
    }
    emailInUse(control) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const inUse = yield this.userService.checkEmail(control.value);
            return (inUse) ? { emailInUse: true } : null;
        });
    }
}
UsernameValidators.ɵfac = function UsernameValidators_Factory(t) { return new (t || UsernameValidators)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"])); };
UsernameValidators.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UsernameValidators, factory: UsernameValidators.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "LlIw":
/*!*****************************************************************!*\
  !*** ./src/app/dashboard/me/me-sidebar/me-sidebar.component.ts ***!
  \*****************************************************************/
/*! exports provided: MeSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeSidebarComponent", function() { return MeSidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_channel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/channel.service */ "0xJi");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/user.service */ "qfBg");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/sidebar/sidebar.component */ "itJq");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_member_username_member_username_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/member-username/member-username.component */ "ME9D");








function MeSidebarComponent_div_9_member_username_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "member-username", 10);
} if (rf & 2) {
    const channel_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/channels/@me/" + channel_r1._id)("user", ctx_r2.getRecipient(channel_r1));
} }
function MeSidebarComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MeSidebarComponent_div_9_member_username_1_Template, 1, 2, "member-username", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const channel_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", channel_r1 && ctx_r0.getRecipient(channel_r1));
} }
const _c0 = function () { return { exact: true }; };
const _c1 = ["*"];
class MeSidebarComponent {
    constructor(channelService, userService) {
        this.channelService = channelService;
        this.userService = userService;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.userService.init();
            yield this.channelService.init();
        });
    }
    getRecipient(channel) {
        const userId = channel.memberIds
            .filter(id => id !== this.userService.self._id)[0];
        return this.userService.getCached(userId);
    }
}
MeSidebarComponent.ɵfac = function MeSidebarComponent_Factory(t) { return new (t || MeSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_channel_service__WEBPACK_IMPORTED_MODULE_2__["ChannelService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"])); };
MeSidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MeSidebarComponent, selectors: [["dashboard-sidebar"]], ngContentSelectors: _c1, decls: 12, vars: 4, consts: [[1, "side-nav", "navbar-dark"], [1, "header"], ["routerLink", "/channels/@me", "routerLinkActive", "active", 1, "nav-item", "nav-link", "mt-2", 3, "routerLinkActiveOptions"], ["aria-hidden", "true", 1, "lni", "lni-users", "pr-2"], [1, "navbar-nav"], [1, "category"], ["class", "mx-2 mb-1", 4, "ngFor", "ngForOf"], ["id", "content"], [1, "mx-2", "mb-1"], ["class", "cursor-pointer", 3, "routerLink", "user", 4, "ngIf"], [1, "cursor-pointer", 3, "routerLink", "user"]], template: function MeSidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Friends ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, MeSidebarComponent_div_9_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Direct Messages\u2014", ctx.channelService.dmChannels.length, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.channelService.dmChannels);
    } }, directives: [_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _components_member_username_member_username_component__WEBPACK_IMPORTED_MODULE_7__["MemberUsernameComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"]], styles: ["h4[_ngcontent-%COMP%] {\r\n  margin-bottom: 35px;\r\n  cursor: pointer;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  background: var(--background-tertiary);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lLXNpZGViYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLHNDQUFzQztBQUN4QyIsImZpbGUiOiJtZS1zaWRlYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoNCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgcGFkZGluZzogMDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLXRlcnRpYXJ5KTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "ME9D":
/*!***********************************************************************************!*\
  !*** ./src/app/dashboard/components/member-username/member-username.component.ts ***!
  \***********************************************************************************/
/*! exports provided: MemberUsernameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberUsernameComponent", function() { return MemberUsernameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_channel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/channel.service */ "0xJi");
/* harmony import */ var src_app_services_permissions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/permissions.service */ "tEUU");
/* harmony import */ var src_app_services_ping_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ping.service */ "TLdK");
/* harmony import */ var src_app_services_guild_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/guild.service */ "4bjJ");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_app_services_ws_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/ws.service */ "Swid");
/* harmony import */ var src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/dialog.service */ "CzQJ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _avatar_url_avatar_url_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../avatar-url/avatar-url.component */ "kMH7");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ "FKr1");

















const _c0 = ["rolesInput"];
function MemberUsernameComponent_div_0_app_avatar_url_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-avatar-url", 22);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("user", ctx_r7.user);
} }
function MemberUsernameComponent_div_0_i_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 23);
} }
function MemberUsernameComponent_div_0_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 24);
} }
function MemberUsernameComponent_div_0_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MemberUsernameComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("contextmenu", function MemberUsernameComponent_div_0_Template_div_contextmenu_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.openMenu($event, _r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MemberUsernameComponent_div_0_Template_div_click_2_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MemberUsernameComponent_div_0_app_avatar_url_3_Template, 1, 1, "app-avatar-url", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, MemberUsernameComponent_div_0_i_7_Template, 1, 0, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, MemberUsernameComponent_div_0_span_10_Template, 1, 0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, MemberUsernameComponent_div_0_span_11_Template, 2, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r0.guild ? "user-" + ctx_r0.user._id + " " + (ctx_r0.user.status == null ? null : ctx_r0.user.status.toLowerCase()) : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r1)("title", ctx_r0.user.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx_r0.routerLink || "./");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.withAvatar);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r0.user.status == null ? null : ctx_r0.user.status.toLowerCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("color", ctx_r0.member ? ctx_r0.roleColor : "var(--light)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.pings.isUnread(ctx_r0.dmChannelId));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.user.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.user.bot);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.user._id === (ctx_r0.guild == null ? null : ctx_r0.guild.ownerId));
} }
function MemberUsernameComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MemberUsernameComponent_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.userService.unblock(ctx_r14.user._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Unblock");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MemberUsernameComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MemberUsernameComponent_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r16.userService.block(ctx_r16.user._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Block");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c1 = function (a0) { return [a0]; };
function MemberUsernameComponent_div_12_mat_form_field_1_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const role_r21 = ctx.$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("color", role_r21.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", role_r21._id)("disabled", !ctx_r20.perms.isHigher(ctx_r20.guild._id, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c1, role_r21._id)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("selected", ctx_r20.member.roleIds.includes(role_r21._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](role_r21.name);
} }
function MemberUsernameComponent_div_12_mat_form_field_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MemberUsernameComponent_div_12_mat_form_field_1_Template_mat_form_field_click_0_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Roles");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-select", 31, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, MemberUsernameComponent_div_12_mat_form_field_1_mat_option_5_Template, 2, 8, "mat-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r18.member.roleIds);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r18.guildRoles.reverse());
} }
function MemberUsernameComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MemberUsernameComponent_div_12_mat_form_field_1_Template, 6, 2, "mat-form-field", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.perms.canManage(ctx_r4.guild._id, ctx_r4.user._id, "MANAGE_ROLES"));
} }
function MemberUsernameComponent_div_13_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MemberUsernameComponent_div_13_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r24.guildService.kick(ctx_r24.guild._id, ctx_r24.user._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Kick");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MemberUsernameComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MemberUsernameComponent_div_13_button_1_Template, 4, 0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.perms.canPunish(ctx_r5.guild._id, ctx_r5.user._id, "KICK_MEMBERS"));
} }
class MemberUsernameComponent {
    constructor(channelService, perms, pings, guildService, userService, ws, dialog) {
        this.channelService = channelService;
        this.perms = perms;
        this.pings = pings;
        this.guildService = guildService;
        this.userService = userService;
        this.ws = ws;
        this.dialog = dialog;
        this.withAvatar = true;
        this.voice = false;
    }
    get guildRoles() {
        return this.guild.roles.filter(r => r.name !== '@everyone');
    }
    get member() {
        var _a;
        return (_a = this.guild) === null || _a === void 0 ? void 0 : _a.members.find(m => m.userId === this.user._id);
    }
    get roleColor() {
        if (!this.guild)
            return null;
        const lastRole = this.roles[this.roles.length - 1];
        return lastRole === null || lastRole === void 0 ? void 0 : lastRole.color;
    }
    get roles() {
        if (!this.guild)
            return null;
        return this.guild.roles
            .filter(r => this.member.roleIds.includes(r._id));
    }
    get isBlocked() {
        return this.userService.self.ignored.userIds.includes(this.user._id);
    }
    get dmChannelId() {
        var _a;
        return (_a = this.channelService.getDM(this.user._id)) === null || _a === void 0 ? void 0 : _a._id;
    }
    ngOnInit() {
        if (!this.user)
            throw new TypeError('Input user undefined');
    }
    update() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const roleIds = this.rolesInput.value
                .filter(id => id)
                .map(v => { var _a; return (_a = v._id) !== null && _a !== void 0 ? _a : v; });
            const noChange = JSON.stringify(roleIds) === JSON.stringify(this.member.roleIds);
            if (noChange)
                return;
            yield this.ws.emitAsync('GUILD_MEMBER_UPDATE', {
                partialMember: { roleIds },
                memberId: this.member._id,
            }, this);
        });
    }
    openMenu(event, menuTrigger) {
        event.preventDefault();
        menuTrigger.openMenu();
    }
}
MemberUsernameComponent.ɵfac = function MemberUsernameComponent_Factory(t) { return new (t || MemberUsernameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_channel_service__WEBPACK_IMPORTED_MODULE_2__["ChannelService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_permissions_service__WEBPACK_IMPORTED_MODULE_3__["PermissionsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_ping_service__WEBPACK_IMPORTED_MODULE_4__["PingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_guild_service__WEBPACK_IMPORTED_MODULE_5__["GuildService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_ws_service__WEBPACK_IMPORTED_MODULE_7__["WSService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_8__["DialogService"])); };
MemberUsernameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MemberUsernameComponent, selectors: [["member-username"]], viewQuery: function MemberUsernameComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.rolesInput = _t.first);
    } }, inputs: { user: "user", guild: "guild", withAvatar: "withAvatar", voice: "voice", statusOverride: "statusOverride", routerLink: "routerLink" }, decls: 19, vars: 7, consts: [["class", "member-username", 3, "matMenuTriggerFor", "title", "class", "contextmenu", 4, "ngIf"], [3, "closed"], ["contextMenu", ""], [1, "p-2", "text-center"], ["mat-menu-item", "", 3, "click"], [1, "lni", "lni-user", "text-muted", "mr-1"], ["mat-menu-item", "", 3, "click", 4, "ngIf"], [1, "my-2"], [4, "ngIf"], [1, "p-2", 3, "click"], [1, "lni", "lni-dev"], [1, "member-username", 3, "matMenuTriggerFor", "title", "contextmenu"], ["menuTrigger", "matMenuTrigger"], [1, "username-wrapper", 3, "routerLink", "click"], [3, "user", 4, "ngIf"], [1, "status", "round"], [1, "username"], [1, "float-right", "text-muted"], ["matTooltip", "Unread Pings", "class", "lni lni-circle text-danger", 4, "ngIf"], [1, "username-text"], ["textContent", "user.username === 'Accord' ? 'SYSTEM' : 'BOT'", "class", "ml-1 badge badge-secondary", 4, "ngIf"], ["matTooltip", "Guild Owner", "class", "crown pl-1", 4, "ngIf"], [3, "user"], ["matTooltip", "Unread Pings", 1, "lni", "lni-circle", "text-danger"], ["textContent", "user.username === 'Accord' ? 'SYSTEM' : 'BOT'", 1, "ml-1", "badge", "badge-secondary"], ["matTooltip", "Guild Owner", 1, "crown", "pl-1"], [1, "lni", "lni-crown", "text-warning"], [1, "lni", "lni-ban", "text-muted", "mr-1"], [1, "lni", "lni-ban", "text-danger", "mr-1"], ["appearance", "outline", 3, "click", 4, "ngIf"], ["appearance", "outline", 3, "click"], ["multiple", "", 3, "value"], ["rolesInput", ""], [3, "value", "color", "disabled", 4, "ngFor", "ngForOf"], [3, "value", "disabled"], [1, "lni", "lni-close", "text-danger", "mr-1"]], template: function MemberUsernameComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, MemberUsernameComponent_div_0_Template, 12, 14, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-menu", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("closed", function MemberUsernameComponent_Template_mat_menu_closed_1_listener() { return ctx.guild && ctx.perms.canManage(ctx.guild._id, ctx.user._id, "MANAGE_ROLES") && ctx.update(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MemberUsernameComponent_Template_button_click_5_listener() { return ctx.dialog.profile({ user: ctx.user }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "View Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, MemberUsernameComponent_button_9_Template, 4, 0, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, MemberUsernameComponent_button_10_Template, 4, 0, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "hr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, MemberUsernameComponent_div_12_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, MemberUsernameComponent_div_13_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "hr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MemberUsernameComponent_Template_div_click_15_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.user.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isBlocked && ctx.user._id !== ctx.userService.self._id);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isBlocked && ctx.user._id !== ctx.userService.self._id);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.guild);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.guild);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.user._id, "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuItem"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuTrigger"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterLink"], _avatar_url_avatar_url_component__WEBPACK_IMPORTED_MODULE_12__["AvatarUrlComponent"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltip"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatOption"]], styles: [".member-username[_ngcontent-%COMP%], .username-wrapper[_ngcontent-%COMP%] {\r\n  border-radius: 5px;\r\n  width: 100%;\r\n}\r\n.username-wrapper[_ngcontent-%COMP%] {\r\n  padding: 4px;\r\n}\r\n.active[_ngcontent-%COMP%], div[_ngcontent-%COMP%]:hover {\r\n  background-color: var(--background-primary);\r\n}\r\nimg[_ngcontent-%COMP%] {\r\n  width: 32px;\r\n  height: 32px;\r\n  margin-right: 10px;\r\n\r\n  float: left;\r\n}\r\n.username[_ngcontent-%COMP%] {\r\n  padding: 4px;\r\n  max-width: 200px;\r\n\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}\r\n.username-text[_ngcontent-%COMP%] {\r\n  width: 70% !important;  \r\n\r\n  text-overflow: ellipsis;\r\n}\r\n.status-override[_ngcontent-%COMP%] {\r\n  font-size: smaller;\r\n  margin-top: -5px;\r\n}\r\ni.fa-crown[_ngcontent-%COMP%] {\r\n  color: gold;\r\n  font-size: small;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbWJlci11c2VybmFtZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsMkNBQTJDO0FBQzdDO0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjs7RUFFbEIsV0FBVztBQUNiO0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCOztFQUVoQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UscUJBQXFCOztFQUVyQix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoibWVtYmVyLXVzZXJuYW1lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVtYmVyLXVzZXJuYW1lLFxyXG4udXNlcm5hbWUtd3JhcHBlciB7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi51c2VybmFtZS13cmFwcGVyIHtcclxuICBwYWRkaW5nOiA0cHg7XHJcbn1cclxuLmFjdGl2ZSwgZGl2OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLXByaW1hcnkpO1xyXG59XHJcblxyXG5pbWcge1xyXG4gIHdpZHRoOiAzMnB4O1xyXG4gIGhlaWdodDogMzJweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcblxyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4udXNlcm5hbWUge1xyXG4gIHBhZGRpbmc6IDRweDtcclxuICBtYXgtd2lkdGg6IDIwMHB4O1xyXG5cclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn1cclxuLnVzZXJuYW1lLXRleHQge1xyXG4gIHdpZHRoOiA3MCUgIWltcG9ydGFudDsgIFxyXG5cclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG4uc3RhdHVzLW92ZXJyaWRlIHtcclxuICBmb250LXNpemU6IHNtYWxsZXI7XHJcbiAgbWFyZ2luLXRvcDogLTVweDtcclxufVxyXG5pLmZhLWNyb3duIHtcclxuICBjb2xvcjogZ29sZDtcclxuICBmb250LXNpemU6IHNtYWxsO1xyXG59Il19 */"] });


/***/ }),

/***/ "OY6s":
/*!**************************************************************************!*\
  !*** ./src/app/dashboard/guilds/guild-settings/roles/roles.component.ts ***!
  \**************************************************************************/
/*! exports provided: RolesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesComponent", function() { return RolesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_dashboard_components_module_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dashboard/components/module-config */ "cmOr");
/* harmony import */ var _types_entity_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../types/entity-types */ "h8Xa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_guild_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/guild.service */ "4bjJ");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var src_app_services_ws_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/ws.service */ "Swid");
/* harmony import */ var src_app_services_log_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/log.service */ "iXKo");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_settings_sidebar_settings_sidebar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/settings-sidebar/settings-sidebar.component */ "qT/8");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-color-picker */ "R9Cn");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _pipes_snake_to_sentence_case_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../pipes/snake-to-sentence-case.pipe */ "XkKb");




















function RolesComponent_app_settings_sidebar_0_a_5_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RolesComponent_app_settings_sidebar_0_a_5_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const role_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r5.selectRole(role_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const role_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("color", role_r4.color + "!important");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", (ctx_r1.selectedRole == null ? null : ctx_r1.selectedRole._id) === role_r4._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](role_r4.name);
} }
function RolesComponent_app_settings_sidebar_0_form_13_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "mat-form-field", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Role Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "mat-form-field", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Role Color");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("colorPickerChange", function RolesComponent_app_settings_sidebar_0_form_13_Template_input_colorPickerChange_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r8.openSaveChanges(); })("colorPickerChange", function RolesComponent_app_settings_sidebar_0_form_13_Template_input_colorPickerChange_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r10.form.get("color").setValue($event); })("colorPickerChange", function RolesComponent_app_settings_sidebar_0_form_13_Template_input_colorPickerChange_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return (ctx_r11.presetColors[1] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Role");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Display role members separately");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "mat-slide-toggle", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Allow anyone to ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "@mention");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, " this role");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "mat-slide-toggle", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](31, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r2.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Roles decide what members can do in ", ctx_r2.guild.name, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("readonly", ctx_r2.isEveryone);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("colorPicker", ctx_r2.presetColors[1])("cpPresetColors", ctx_r2.presetColors);
} }
function RolesComponent_app_settings_sidebar_0_form_14_div_2_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "snakeToSentenceCase");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "mat-slide-toggle", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matTooltip", item_r17.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 3, item_r17.key));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControlName", item_r17.key);
} }
function RolesComponent_app_settings_sidebar_0_form_14_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "snakeToSentenceCase");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, RolesComponent_app_settings_sidebar_0_form_14_div_2_div_5_Template, 8, 5, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const container_r15 = ctx.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 3, container_r15.key));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroupName", container_r15.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 5, ctx_r13.description[container_r15.key]));
} }
function RolesComponent_app_settings_sidebar_0_form_14_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RolesComponent_app_settings_sidebar_0_form_14_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return ctx_r18.deleteRole(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Delete Role");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function RolesComponent_app_settings_sidebar_0_form_14_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, RolesComponent_app_settings_sidebar_0_form_14_div_2_Template, 7, 7, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RolesComponent_app_settings_sidebar_0_form_14_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r20.setPermissions(0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Clear Permissions");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RolesComponent_app_settings_sidebar_0_form_14_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r22.setPermissions(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Default Permissions");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, RolesComponent_app_settings_sidebar_0_form_14_button_9_Template, 2, 0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r3.permissionsForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 3, ctx_r3.description));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r3.isEveryone);
} }
function RolesComponent_app_settings_sidebar_0_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-settings-sidebar", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, RolesComponent_app_settings_sidebar_0_a_5_Template, 2, 5, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RolesComponent_app_settings_sidebar_0_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r23.newRole(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "New Role");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "hr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Members use the color of the highest role they have in this list.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, RolesComponent_app_settings_sidebar_0_form_13_Template, 32, 5, "form", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, RolesComponent_app_settings_sidebar_0_form_14_Template, 10, 5, "form", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("id", ctx_r0.guild._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.guild.roles.reverse());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.selectedRole);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.selectedRole);
} }
class RolesComponent extends src_app_dashboard_components_module_config__WEBPACK_IMPORTED_MODULE_2__["ModuleConfig"] {
    constructor(route, router, guildService, snackbar, ws, log) {
        super(guildService, route, snackbar, ws, log, router);
        this.presetColors = ['#6E8481', '#A2B6AD', '#576067'];
        this.description /**: DescriptionType */ = {
            general: {
                'ADMINISTRATOR': `Gives all permissions. This is a dangerous permission.`,
                'BAN_MEMBERS': 'Ability to ban members from the guild.',
                'CREATE_INVITE': 'Ability to create invites for users to join this guild.',
                'KICK_MEMBERS': 'Ability to kick members from this guild.',
                'MANAGE_CHANNELS': 'Ability to create, edit, or delete channels.',
                'MANAGE_GUILD': `Ability to edit general guild settings.`,
                'MANAGE_ROLES': 'Ability to manage guild roles.',
                'VIEW_CHANNELS': 'Ability to view channels.',
            },
            text: {
                'MANAGE_MESSAGES': `Ability to manage message other member's messages.`,
                'READ_MESSAGES': `Ability to read messages,`,
                'SEND_MESSAGES': 'Ability to send messages in text channels.',
            },
        };
        this.permissionType = Object.keys(_types_entity_types__WEBPACK_IMPORTED_MODULE_3__["PermissionTypes"].All);
    }
    get isEveryone() {
        var _a;
        return ((_a = this.selectedRole) === null || _a === void 0 ? void 0 : _a.name) === '@everyone';
    }
    get permissions() {
        let permissions = 0;
        for (const formGroupName in this.permissionsForm.value)
            for (const key in this.permissionsForm.get(formGroupName).value) {
                const hasPermission = this.permissionsForm
                    .get(formGroupName)
                    .get(key).value;
                permissions |= (hasPermission)
                    ? _types_entity_types__WEBPACK_IMPORTED_MODULE_3__["PermissionTypes"].General[key] || _types_entity_types__WEBPACK_IMPORTED_MODULE_3__["PermissionTypes"].Text[key] || _types_entity_types__WEBPACK_IMPORTED_MODULE_3__["PermissionTypes"].Voice[key]
                    : 0;
            }
        return permissions;
    }
    ngOnInit() {
        const _super = Object.create(null, {
            init: { get: () => super.init }
        });
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield _super.init.call(this);
            this.selectRole(this.guild.roles[0]);
        });
    }
    selectRole(role) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.selectedRole = role;
            yield this.reset();
        });
    }
    buildForm(guild) {
        if (!this.selectedRole)
            return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({});
        this.permissionsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            general: this.permissionGroup(this.selectedRole, _types_entity_types__WEBPACK_IMPORTED_MODULE_3__["PermissionTypes"].General),
            text: this.permissionGroup(this.selectedRole, _types_entity_types__WEBPACK_IMPORTED_MODULE_3__["PermissionTypes"].Text),
            voice: this.permissionGroup(this.selectedRole, _types_entity_types__WEBPACK_IMPORTED_MODULE_3__["PermissionTypes"].Voice),
        });
        this.permissionsForm.valueChanges
            .subscribe(() => this.openSaveChanges());
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            color: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({
                disabled: this.isEveryone,
                value: this.selectedRole.color,
            }),
            hoisted: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({
                disabled: this.isEveryone,
                value: (this.isEveryone) ? false : this.selectedRole.mentionable,
            }),
            mentionable: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({
                disabled: this.isEveryone,
                value: this.selectedRole.mentionable,
            }),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({
                disabled: this.isEveryone,
                value: this.selectedRole.name,
            }, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(32),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^(?!everyone|here|someone).*$/),
            ]),
        });
    }
    permissionGroup(role, type) {
        const hasPermission = (perm) => Boolean(role.permissions & perm);
        const group = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({});
        for (const perm in type) {
            if (Number.parseInt(perm))
                continue;
            group.setControl(perm, new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](hasPermission(type[perm])));
        }
        return group;
    }
    setPermissions(permissions = _types_entity_types__WEBPACK_IMPORTED_MODULE_3__["PermissionTypes"].defaultPermissions) {
        for (const formGroupName in this.permissionsForm.value)
            for (const key in this.permissionsForm.get(formGroupName).value) {
                const hasPerm = Boolean(permissions & _types_entity_types__WEBPACK_IMPORTED_MODULE_3__["PermissionTypes"].All[key]);
                this.permissionsForm
                    .get(formGroupName)
                    .get(key)
                    .setValue(hasPerm);
            }
    }
    submit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.form.invalid)
                return;
            this.form.value.permissions = this.permissions;
            for (const key in this.form.value)
                this.selectedRole[key] = this.form.value[key];
            yield this.updateRole();
        });
    }
    updateRole() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { partialRole } = yield this.ws.emitAsync('GUILD_ROLE_UPDATE', {
                roleId: this.selectedRole._id,
                guildId: this.guildId,
                partialRole: this.form.value,
            }, this);
            const index = this.guild.roles.findIndex(r => r._id === this.selectedRole._id);
            this.guild.roles[index] = Object.assign(Object.assign({}, this.guild.roles[index]), partialRole);
            this.form.patchValue(partialRole);
        });
    }
    newRole() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { role } = yield this.ws.emitAsync('GUILD_ROLE_CREATE', {
                guildId: this.guildId,
                partialRole: Object.assign(Object.assign({}, this.form.value), { name: 'New Role' }),
            }, this);
            this.selectedRole = role;
        });
    }
    deleteRole() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.ws.emitAsync('GUILD_ROLE_DELETE', {
                roleId: this.selectedRole._id,
                guildId: this.guildId,
            }, this);
            yield this.selectRole(this.guild.roles[0]);
        });
    }
}
RolesComponent.ɵfac = function RolesComponent_Factory(t) { return new (t || RolesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_guild_service__WEBPACK_IMPORTED_MODULE_6__["GuildService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_ws_service__WEBPACK_IMPORTED_MODULE_8__["WSService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_log_service__WEBPACK_IMPORTED_MODULE_9__["LogService"])); };
RolesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: RolesComponent, selectors: [["app-roles-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [["tabType", "guild", 3, "id", 4, "ngIf"], ["tabType", "guild", 3, "id"], [1, "content"], [1, "row"], [1, "col-lg-3", "side-nav", "navbar-dark"], [1, "navbar-nav"], ["class", "cursor-pointer nav-item nav-link", 3, "color", "active", "click", 4, "ngFor", "ngForOf"], [1, "float-right"], ["mat-button", "", 1, "btn", "bg-transparent", "bg-success", "text-dark", "mt-2", "mx-3", 3, "click"], [1, "my-4"], [1, "text-muted"], [1, "col-lg-9", "role-details"], [3, "formGroup", 4, "ngIf"], [1, "cursor-pointer", "nav-item", "nav-link", 3, "click"], [3, "formGroup"], ["f", "ngForm"], [1, "col-lg-4", "col-md-12"], ["appearance", "outline"], ["formControlName", "name", "type", "text", "matInput", "", "validate", "", 3, "readonly"], ["formControlName", "color", "matInput", "", "validate", "", 3, "colorPicker", "cpPresetColors", "colorPickerChange"], [1, "category", "text-muted", "pl-0"], ["formControlName", "hoisted", "validate", "", 1, "float-right"], [1, "d-mention", "p-1", "rounded"], ["formControlName", "mentionable", "validate", "", 1, "float-right"], [4, "ngFor", "ngForOf"], ["mat-button", "", 1, "bg-light", "text-dark", 3, "click"], ["mat-button", "", 1, "bg-warning", "text-dark", "ml-2", 3, "click"], ["class", "btn bg-danger text-light ml-2", "mat-button", "", 3, "click", 4, "ngIf"], [1, "form-group", 3, "formGroupName"], [1, "cursor-pointer", 3, "matTooltip"], [1, "fas", "fa-info-circle", "mr-1"], [1, "float-right", 3, "formControlName"], ["mat-button", "", 1, "btn", "bg-danger", "text-light", "ml-2", 3, "click"]], template: function RolesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, RolesComponent_app_settings_sidebar_0_Template, 15, 4, "app-settings-sidebar", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.guild);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _components_settings_sidebar_settings_sidebar_component__WEBPACK_IMPORTED_MODULE_11__["SettingsSidebarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], ngx_color_picker__WEBPACK_IMPORTED_MODULE_15__["ColorPickerDirective"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__["MatSlideToggle"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MatTooltip"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["KeyValuePipe"], _pipes_snake_to_sentence_case_pipe__WEBPACK_IMPORTED_MODULE_18__["SnakeToSentenceCasePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb2xlcy5jb21wb25lbnQuY3NzIn0= */", ".guild-icon[_ngcontent-%COMP%] {\r\n  font-size: 40px;\r\n\r\n  color: var(--font);\r\n  background-color: var(--primary);\r\n}\r\n.guild-icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n\r\n  font-size: 32px;\r\n  padding-top: 28px;\r\n\r\n  transition: all .35s;\r\n}\r\n.guild-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {    \r\n  width: 96px;\r\n  height: 96px;\r\n  border-radius: 50%;\r\n\r\n  transition: all .35s;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImd1aWxkLXNldHRpbmdzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlOztFQUVmLGtCQUFrQjtFQUNsQixnQ0FBZ0M7QUFDbEM7QUFDQTtFQUNFLGtCQUFrQjs7RUFFbEIsZUFBZTtFQUNmLGlCQUFpQjs7RUFFakIsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjs7RUFFbEIsb0JBQW9CO0FBQ3RCIiwiZmlsZSI6Imd1aWxkLXNldHRpbmdzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3VpbGQtaWNvbiB7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG5cclxuICBjb2xvcjogdmFyKC0tZm9udCk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbn1cclxuLmd1aWxkLWljb24gc3BhbiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBmb250LXNpemU6IDMycHg7XHJcbiAgcGFkZGluZy10b3A6IDI4cHg7XHJcblxyXG4gIHRyYW5zaXRpb246IGFsbCAuMzVzO1xyXG59XHJcbi5ndWlsZC1pY29uIGltZyB7ICAgIFxyXG4gIHdpZHRoOiA5NnB4O1xyXG4gIGhlaWdodDogOTZweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcblxyXG4gIHRyYW5zaXRpb246IGFsbCAuMzVzO1xyXG59Il19 */"] });


/***/ }),

/***/ "PMD9":
/*!***********************************************************!*\
  !*** ./src/app/dialog/add-friend/add-friend.component.ts ***!
  \***********************************************************/
/*! exports provided: AddFriendComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFriendComponent", function() { return AddFriendComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_types_entity_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/types/entity-types */ "h8Xa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_services_log_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/log.service */ "iXKo");
/* harmony import */ var src_app_services_ws_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/ws.service */ "Swid");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");











class AddFriendComponent {
    constructor(dialogRef, log, ws) {
        this.dialogRef = dialogRef;
        this.log = log;
        this.ws = ws;
        this.addFriendForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(32),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(src_app_types_entity_types__WEBPACK_IMPORTED_MODULE_2__["patterns"].username),
            ])
        });
    }
    sendFriendRequest() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.addFriendForm.invalid)
                return;
            yield this.ws.emitAsync('ADD_FRIEND', {
                username: this.addFriendForm.value.username,
            }, this);
            this.dialogRef.close();
        });
    }
}
AddFriendComponent.ɵfac = function AddFriendComponent_Factory(t) { return new (t || AddFriendComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_log_service__WEBPACK_IMPORTED_MODULE_5__["LogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_ws_service__WEBPACK_IMPORTED_MODULE_6__["WSService"])); };
AddFriendComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AddFriendComponent, selectors: [["app-add-friend"]], decls: 13, vars: 1, consts: [["mat-dialog-title", ""], [1, "text-muted"], [1, "d-flex", "justify-content-center", 3, "formGroup", "keyup.enter"], ["f", "ngForm"], ["appearance", "outline"], ["formControlName", "username", "type", "text", "matInput", ""], ["mat-dialog-actions", "", 1, "d-flex", "justify-content-center"], ["mat-button", "", "matSuffix", "", 1, "bg-success", "send-friend-request", "text-dark", 3, "click"]], template: function AddFriendComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Add Friend");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Add a friend by their username.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup.enter", function AddFriendComponent_Template_form_keyup_enter_4_listener() { return ctx.sendFriendRequest(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddFriendComponent_Template_button_click_11_listener() { return ctx.sendFriendRequest(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Send Request");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.addFriendForm);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatSuffix"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtZnJpZW5kLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "PT5O":
/*!**************************************************************************************!*\
  !*** ./src/app/dashboard/guilds/guild-settings/overview/guild-settings.component.ts ***!
  \**************************************************************************************/
/*! exports provided: GuildSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuildSettingsComponent", function() { return GuildSettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_dashboard_components_module_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dashboard/components/module-config */ "cmOr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_guild_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/guild.service */ "4bjJ");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var src_app_services_ws_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/ws.service */ "Swid");
/* harmony import */ var src_app_services_log_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/log.service */ "iXKo");
/* harmony import */ var _components_settings_sidebar_settings_sidebar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/settings-sidebar/settings-sidebar.component */ "qT/8");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _components_guild_icon_guild_icon_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../components/guild-icon/guild-icon.component */ "698J");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
















function GuildSettingsComponent_div_1_form_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "app-guild-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-form-field", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Icon URL");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "mat-form-field", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r1.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("guild", ctx_r1.previewGuild);
} }
function GuildSettingsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h5", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Guild Overview");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, GuildSettingsComponent_div_1_form_3_Template, 16, 2, "form", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h5", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Advanced Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GuildSettingsComponent_div_1_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r3.deleteGuild(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Delete Guild");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.form);
} }
class GuildSettingsComponent extends src_app_dashboard_components_module_config__WEBPACK_IMPORTED_MODULE_2__["ModuleConfig"] {
    constructor(route, router, guildService, snackbar, ws, log) {
        super(guildService, route, snackbar, ws, log, router);
    }
    get previewGuild() {
        return Object.assign(Object.assign({}, this.guild), { name: this.form.get('name').value || this.guild.name, iconURL: this.form.get('iconURL').value || this.guild.iconURL });
    }
    ngOnInit() {
        const _super = Object.create(null, {
            init: { get: () => super.init }
        });
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield _super.init.call(this);
        });
    }
    buildForm(guild) {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            iconURL: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](guild.iconURL),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](guild.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(32)]),
        });
    }
}
GuildSettingsComponent.ɵfac = function GuildSettingsComponent_Factory(t) { return new (t || GuildSettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_guild_service__WEBPACK_IMPORTED_MODULE_5__["GuildService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_ws_service__WEBPACK_IMPORTED_MODULE_7__["WSService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_log_service__WEBPACK_IMPORTED_MODULE_8__["LogService"])); };
GuildSettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: GuildSettingsComponent, selectors: [["app-guild-settings"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 2, consts: [["tabType", "guild", 3, "id"], ["class", "content", 4, "ngIf"], [1, "content"], [1, "mb-4"], [3, "formGroup", 4, "ngIf"], [1, "my-5"], [1, "row"], [1, "col-lg-4", "col-md-6"], ["mat-button", "", 1, "nav-item", "nav-link", "bg-danger", 3, "click"], [1, "lni", "lni-trash", "mr-1"], [3, "formGroup"], ["f", "ngForm"], [1, "col-xl-3", "col-lg-4", "col-md-6"], [1, "d-flex"], ["size", "96px", 3, "guild"], ["appearance", "outline"], ["formControlName", "iconURL", "type", "text", "matInput", ""], ["formControlName", "name", "type", "text", "matInput", ""]], template: function GuildSettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-settings-sidebar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, GuildSettingsComponent_div_1_Template, 14, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", ctx.guild == null ? null : ctx.guild._id);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.guild);
    } }, directives: [_components_settings_sidebar_settings_sidebar_component__WEBPACK_IMPORTED_MODULE_9__["SettingsSidebarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _components_guild_icon_guild_icon_component__WEBPACK_IMPORTED_MODULE_12__["GuildIconComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: [".guild-icon[_ngcontent-%COMP%] {\r\n  font-size: 40px;\r\n\r\n  color: var(--font);\r\n  background-color: var(--primary);\r\n}\r\n.guild-icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n\r\n  font-size: 32px;\r\n  padding-top: 28px;\r\n\r\n  transition: all .35s;\r\n}\r\n.guild-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {    \r\n  width: 96px;\r\n  height: 96px;\r\n  border-radius: 50%;\r\n\r\n  transition: all .35s;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImd1aWxkLXNldHRpbmdzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlOztFQUVmLGtCQUFrQjtFQUNsQixnQ0FBZ0M7QUFDbEM7QUFDQTtFQUNFLGtCQUFrQjs7RUFFbEIsZUFBZTtFQUNmLGlCQUFpQjs7RUFFakIsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjs7RUFFbEIsb0JBQW9CO0FBQ3RCIiwiZmlsZSI6Imd1aWxkLXNldHRpbmdzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3VpbGQtaWNvbiB7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG5cclxuICBjb2xvcjogdmFyKC0tZm9udCk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbn1cclxuLmd1aWxkLWljb24gc3BhbiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBmb250LXNpemU6IDMycHg7XHJcbiAgcGFkZGluZy10b3A6IDI4cHg7XHJcblxyXG4gIHRyYW5zaXRpb246IGFsbCAuMzVzO1xyXG59XHJcbi5ndWlsZC1pY29uIGltZyB7ICAgIFxyXG4gIHdpZHRoOiA5NnB4O1xyXG4gIGhlaWdodDogOTZweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcblxyXG4gIHRyYW5zaXRpb246IGFsbCAuMzVzO1xyXG59Il19 */"] });


/***/ }),

/***/ "Q3hq":
/*!***********************************************************************!*\
  !*** ./src/app/dashboard/guilds/member-list/member-list.component.ts ***!
  \***********************************************************************/
/*! exports provided: MemberListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberListComponent", function() { return MemberListComponent; });
/* harmony import */ var src_app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/config */ "Vx+w");
/* harmony import */ var _member_list_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./member-list.animations */ "3JO2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_member_username_member_username_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/member-username/member-username.component */ "ME9D");






function MemberListComponent_div_0_member_username_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "member-username", 5);
} if (rf & 2) {
    const member_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("user", ctx_r1.userService.getCached(member_r4.userId))("guild", ctx_r1.guild);
} }
function MemberListComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Offline\u2014", ctx_r2.offlineMembers.length, "");
} }
function MemberListComponent_div_0_member_username_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "member-username", 5);
} if (rf & 2) {
    const member_r5 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("user", ctx_r3.userService.getCached(member_r5.userId))("guild", ctx_r3.guild);
} }
function MemberListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, MemberListComponent_div_0_member_username_4_Template, 1, 2, "member-username", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, MemberListComponent_div_0_div_5_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, MemberListComponent_div_0_member_username_7_Template, 1, 2, "member-username", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@expandCollapse", ctx_r0.isExpanded ? "expanded" : "collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Online\u2014", ctx_r0.onlineMembers.length, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.onlineMembers);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.offlineMembers.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.offlineMembers);
} }
class MemberListComponent {
    constructor(userService) {
        this.userService = userService;
        this.isExpanded || (this.isExpanded = Object(src_app_config__WEBPACK_IMPORTED_MODULE_0__["getConfig"])('memberListExpanded'));
    }
    get isExpanded() {
        return this._expanded;
    }
    set isExpanded(value) {
        Object(src_app_config__WEBPACK_IMPORTED_MODULE_0__["setConfig"])('memberListExpanded', this._expanded = value);
    }
    get onlineMembers() {
        return this.guild.members.filter(m => {
            const user = this.userService.getCached(m.userId);
            return user.status === 'ONLINE';
        });
    }
    get offlineMembers() {
        return this.guild.members.filter(m => {
            const user = this.userService.getCached(m.userId);
            return user.status === 'OFFLINE';
        });
    }
}
MemberListComponent.ɵfac = function MemberListComponent_Factory(t) { return new (t || MemberListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"])); };
MemberListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MemberListComponent, selectors: [["app-member-list"]], inputs: { guild: "guild", isExpanded: ["expanded", "isExpanded"] }, decls: 1, vars: 1, consts: [["class", "float-right member-list", 4, "ngIf"], [1, "float-right", "member-list"], [1, "category"], ["class", "cursor-pointer", 3, "user", "guild", 4, "ngFor", "ngForOf"], ["class", "category", 4, "ngIf"], [1, "cursor-pointer", 3, "user", "guild"]], template: function MemberListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, MemberListComponent_div_0_Template, 8, 5, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.guild);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _components_member_username_member_username_component__WEBPACK_IMPORTED_MODULE_5__["MemberUsernameComponent"]], styles: [".member-list[_ngcontent-%COMP%] {\n  background-color: var(--background-secondary);\n\n  width: 100%;\n  height: 95vh;\n  padding-left: 10px;\n  padding-right: 16px;\n}\n.member-list[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%] {\n  padding-left: 10px;\n}\n.offline[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbWJlci1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2Q0FBNkM7O0VBRTdDLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoibWVtYmVyLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW1iZXItbGlzdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtc2Vjb25kYXJ5KTtcblxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA5NXZoO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG59XG4ubWVtYmVyLWxpc3QgLmNhdGVnb3J5IHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4ub2ZmbGluZSB7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbiJdfQ== */"], data: { animation: [_member_list_animations__WEBPACK_IMPORTED_MODULE_1__["widthExpandCollapse"]] } });


/***/ }),

/***/ "QRQu":
/*!***********************************************************************!*\
  !*** ./src/app/pages/developers/application/application.component.ts ***!
  \***********************************************************************/
/*! exports provided: ApplicationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationComponent", function() { return ApplicationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_dashboard_components_save_changes_save_changes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dashboard/components/save-changes/save-changes.component */ "qigX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var src_app_services_developers_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/developers.service */ "RXH7");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _utils_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../utils/spinner/spinner.component */ "ij2n");












function ApplicationComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "header");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Overview");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Public info about your bot listing.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "form", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-form-field", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "mat-form-field", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "textarea", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r0.app.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.app.description);
} }
function ApplicationComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "spinner");
} }
class ApplicationComponent {
    constructor(route, saveChanges, service) {
        this.route = route;
        this.saveChanges = saveChanges;
        this.service = service;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        });
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const appId = this.route.snapshot.paramMap.get('id');
            this.app = yield this.service.getAsync(appId);
            this.form.setValue({
                description: this.app.description,
                name: this.app.name,
            });
            this.originalForm = Object.assign({}, this.form.value);
            this.valueChanges$ = this.form.valueChanges
                .subscribe(() => this.openSaveChanges());
        });
    }
    ngOnDestroy() {
        var _a, _b;
        (_a = this.valueChanges$) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        (_b = this.saveChanges$) === null || _b === void 0 ? void 0 : _b.unsubscribe();
    }
    openSaveChanges() {
        const snackBarRef = this.saveChanges._openedSnackBarRef;
        if (!this.form.valid || snackBarRef)
            return;
        this.saveChanges$ = this.saveChanges
            .openFromComponent(src_app_dashboard_components_save_changes_save_changes_component__WEBPACK_IMPORTED_MODULE_2__["SaveChangesComponent"])
            .afterOpened()
            .subscribe(() => {
            const component = this.saveChanges._openedSnackBarRef.instance;
            if (!component)
                return;
            component.onSave.subscribe(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { return yield this.submit(); }));
            component.onReset.subscribe(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { return yield this.reset(); }));
        });
    }
    submit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                if (!this.form.valid)
                    return;
                yield this.service.update(this.app._id, this.form.value);
                this.originalForm = Object.assign({}, this.form.value);
            }
            catch (_a) {
                alert('An error occurred when submitting the form - check console');
            }
        });
    }
    reset() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.form.setValue(Object.assign({}, this.originalForm));
            this.valueChanges$ = this.form.valueChanges
                .subscribe(() => this.openSaveChanges());
        });
    }
}
ApplicationComponent.ɵfac = function ApplicationComponent_Factory(t) { return new (t || ApplicationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_developers_service__WEBPACK_IMPORTED_MODULE_6__["DevelopersService"])); };
ApplicationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ApplicationComponent, selectors: [["app-application"]], decls: 18, vars: 4, consts: [[1, "row"], [1, "col-3"], [1, "developer-sidebar"], ["routerLink", "/developers", 1, "cursor-pointer", "my-5"], ["routerLink", "/developers", 1, "p-2", "text-muted"], [1, "lni", "lni-arrow-left", "mt-2"], [1, "pl-2"], [1, "side-nav", "mt-3"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink"], [1, "lni", "lni-eye"], [1, "lni", "lni-robot"], ["class", "col-6 m-4 mt-5", 4, "ngIf", "ngIfElse"], ["class", "col-6 d-flex justify-content-center"], ["loading", ""], [1, "col-6", "m-4", "mt-5"], [1, "lead"], [3, "formGroup"], ["f", "ngForm"], ["appearance", "outline"], ["formControlName", "name", "type", "text", "matInput", "", 3, "value"], ["appearance", "outline", 1, "ml-2"], ["formControlName", "description", "matInput", ""]], template: function ApplicationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "header", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "strong", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "DASHBOARD");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "nav", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, " Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, " User");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, ApplicationComponent_div_15_Template, 17, 3, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, ApplicationComponent_ng_template_16_Template, 1, 0, "ng-template", 12, 13, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", "/developers/applications/" + ctx.app._id);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", "/developers/applications/" + ctx.app._id + "/user");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.app)("ngIfElse", _r1);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _utils_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_10__["SpinnerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBsaWNhdGlvbi5jb21wb25lbnQuY3NzIn0= */", "img[_ngcontent-%COMP%] {\n  height: 32px;\n}\n\n*[_ngcontent-%COMP%] {\n  overflow-y: hidden !important;\n}\n\na[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n\n.developer-sidebar[_ngcontent-%COMP%] {\n  background-color: var(--background-secondary);\n}\n\n.icon[_ngcontent-%COMP%] {\n  font-size: 64px;\n  color: var(--primary);\n  background-color: var(--background-tertiary);\n  overflow-x: hidden;\n  padding: 50px;\n}\n\n.applications[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 32px;\n  padding: 16px 24px;\n}\n\n.developer-sidebar[_ngcontent-%COMP%], .applications[_ngcontent-%COMP%] {\n  height: 100vh;\n  padding: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldmVsb3BlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDZDQUE2QztBQUMvQzs7QUFFQTtFQUNFLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsNENBQTRDO0VBQzVDLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLGFBQWE7RUFDYixhQUFhO0FBQ2YiLCJmaWxlIjoiZGV2ZWxvcGVycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcbiAgaGVpZ2h0OiAzMnB4O1xufVxuXG4qIHtcbiAgb3ZlcmZsb3cteTogaGlkZGVuICFpbXBvcnRhbnQ7XG59XG5cbmEge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uZGV2ZWxvcGVyLXNpZGViYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLXNlY29uZGFyeSk7XG59XG5cbi5pY29uIHtcbiAgZm9udC1zaXplOiA2NHB4O1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtdGVydGlhcnkpO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIHBhZGRpbmc6IDUwcHg7XG59XG5cbi5hcHBsaWNhdGlvbnMgYnV0dG9uIHtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBwYWRkaW5nOiAxNnB4IDI0cHg7XG59XG5cbi5kZXZlbG9wZXItc2lkZWJhcixcbi5hcHBsaWNhdGlvbnMge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBwYWRkaW5nOiAyNXB4O1xufSJdfQ== */"] });


/***/ }),

/***/ "R0x+":
/*!******************************************!*\
  !*** ./src/app/services/http-wrapper.ts ***!
  \******************************************/
/*! exports provided: HTTPWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTPWrapper", function() { return HTTPWrapper; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ws_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ws.service */ "Swid");




// convention over configuration
class HTTPWrapper {
    constructor(http, ws) {
        this.http = http;
        this.ws = ws;
    }
    get headers() {
        return {
            headers: { Authorization: `Bearer ${this.key}` }
        };
    }
    get key() {
        return localStorage.getItem('key');
    }
    get arr() {
        return this._arr;
    }
    ;
    init() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.arr.length <= 0)
                yield this.fetchAll();
            if (!this.self)
                yield ((_a = this.updateSelf) === null || _a === void 0 ? void 0 : _a.call(this));
        });
    }
    getCached(id) {
        var _a;
        return (_a = this.arr) === null || _a === void 0 ? void 0 : _a.find(i => i._id === id);
    }
    getAsync(id) {
        var _a;
        return (_a = this.getCached(id)) !== null && _a !== void 0 ? _a : this.fetch(id);
    }
    /** @deprecated */
    add(val) {
        const has = this.arr.some(v => v._id === val._id);
        if (has)
            this.delete(val._id);
        this.arr.push(val);
        return this.arr;
    }
    delete(id) {
        const index = this.arr.findIndex(v => v._id === id);
        this.arr.splice(index, 1);
        return this.arr;
    }
    upsert(id, value) {
        const index = this.arr.findIndex(g => g._id === id);
        const existing = this.arr[index];
        if (this.self && this.self._id === id)
            return this.self = Object.assign(Object.assign({}, this.self), value);
        if (!existing && !('_id' in value))
            throw new TypeError('Full object required for adding');
        ('_id' in value)
            ? this.add(value)
            : this.arr[index] = Object.assign(Object.assign({}, existing), value);
        return existing;
    }
    fetch(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!id)
                throw new TypeError('ID must be defined');
            return yield this.http.get(`${this.endpoint}/${id}`, this.headers).toPromise();
        });
    }
    fetchAll() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this._arr = (this.key)
                ? (_a = (yield this.http.get(this.endpoint, this.headers).toPromise())) !== null && _a !== void 0 ? _a : [] : [];
        });
    }
}
HTTPWrapper.ɵfac = function HTTPWrapper_Factory(t) { return new (t || HTTPWrapper)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ws_service__WEBPACK_IMPORTED_MODULE_3__["WSService"])); };
HTTPWrapper.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: HTTPWrapper, factory: HTTPWrapper.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "RXH7":
/*!************************************************!*\
  !*** ./src/app/services/developers.service.ts ***!
  \************************************************/
/*! exports provided: DevelopersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevelopersService", function() { return DevelopersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _http_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http-wrapper */ "R0x+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class DevelopersService extends _http_wrapper__WEBPACK_IMPORTED_MODULE_2__["HTTPWrapper"] {
    constructor() {
        super(...arguments);
        this.endpoint = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].endpoint}/developers/applications`;
    }
    create() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.http.get(`${this.endpoint}/applications/new`, this.headers).toPromise();
        });
    }
    update(id, value) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.http.patch(`${this.endpoint}/applications/${id}`, value, this.headers).toPromise();
        });
    }
    regenToken(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.http.get(`${this.endpoint}/applications/${id}/regen-token`, this.headers).toPromise();
        });
    }
}
DevelopersService.ɵfac = function DevelopersService_Factory(t) { return ɵDevelopersService_BaseFactory(t || DevelopersService); };
DevelopersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: DevelopersService, factory: DevelopersService.ɵfac, providedIn: 'root' });
const ɵDevelopersService_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](DevelopersService);


/***/ }),

/***/ "Rc5a":
/*!***********************************************!*\
  !*** ./src/app/pipes/clean-date-time.pipe.ts ***!
  \***********************************************/
/*! exports provided: CleanDateTimePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CleanDateTimePipe", function() { return CleanDateTimePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CleanDateTimePipe {
    transform(dateString, ...args) {
        const date = new Date(dateString);
        let hours = date.getHours().toString().padStart(2, '0');
        let minutes = date.getMinutes().toString().padStart(2, '0');
        let day = date.getDate().toString().padStart(2, '0');
        const month = date.toLocaleString('default', { month: 'long' });
        return `${month} ${day} ${date.getFullYear()}, ${hours}:${minutes}`;
    }
}
CleanDateTimePipe.ɵfac = function CleanDateTimePipe_Factory(t) { return new (t || CleanDateTimePipe)(); };
CleanDateTimePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "cleanDateTime", type: CleanDateTimePipe, pure: true });


/***/ }),

/***/ "SKt3":
/*!*************************************************************************************!*\
  !*** ./src/app/dashboard/components/dashboard-navbar/dashboard-navbar.component.ts ***!
  \*************************************************************************************/
/*! exports provided: DashboardNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardNavbarComponent", function() { return DashboardNavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

const _c0 = ["*"];
class DashboardNavbarComponent {
}
DashboardNavbarComponent.ɵfac = function DashboardNavbarComponent_Factory(t) { return new (t || DashboardNavbarComponent)(); };
DashboardNavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardNavbarComponent, selectors: [["dashboard-navbar"]], ngContentSelectors: _c0, decls: 3, vars: 0, consts: [[1, "navbar", "navbar-expand", "navbar-dark"], [1, "navbar-brand"]], template: function DashboardNavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".navbar[_ngcontent-%COMP%] {\r\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\r\n}\r\n\r\n.navbar-brand[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n  width: 100vw !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC1uYXZiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJFQUEyRTtBQUM3RTs7QUFFQTtFQUNFLGVBQWU7RUFDZix1QkFBdUI7QUFDekIiLCJmaWxlIjoiZGFzaGJvYXJkLW5hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhciB7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDFweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xyXG59XHJcblxyXG4ubmF2YmFyLWJyYW5kIHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgd2lkdGg6IDEwMHZ3ICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "Sh9F":
/*!********************************************!*\
  !*** ./src/app/utils/external-redirect.ts ***!
  \********************************************/
/*! exports provided: externalRedirect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "externalRedirect", function() { return externalRedirect; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

function externalRedirect(url) {
    class RedirectComponent {
        constructor() {
            window.location.href = url;
        }
    }
    RedirectComponent.ɵfac = function RedirectComponent_Factory(t) { return new (t || RedirectComponent)(); };
    RedirectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RedirectComponent, selectors: [["ng-component"]], decls: 0, vars: 0, template: function RedirectComponent_Template(rf, ctx) { }, encapsulation: 2 });
    return RedirectComponent;
}


/***/ }),

/***/ "Sova":
/*!********************************************!*\
  !*** ./src/app/guards/guild-auth.guard.ts ***!
  \********************************************/
/*! exports provided: GuildAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuildAuthGuard", function() { return GuildAuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_guild_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/guild.service */ "4bjJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "qfBg");





class GuildAuthGuard {
    constructor(guildService, router, userService) {
        this.guildService = guildService;
        this.router = router;
        this.userService = userService;
    }
    canActivate(next) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.userService.init();
            yield this.guildService.init();
            const guildId = next.paramMap.get('guildId');
            const guild = yield this.guildService.getAsync(guildId);
            if (!guild)
                yield this.router.navigate(['/channels/@me']);
            const defaultChannel = guild.channels.filter(c => c.type === 'TEXT')[0];
            const channelId = next.url[2];
            if (defaultChannel && !channelId)
                yield this.router.navigate([`/channels/${guildId}/${defaultChannel._id}`]);
            return true;
        });
    }
}
GuildAuthGuard.ɵfac = function GuildAuthGuard_Factory(t) { return new (t || GuildAuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_guild_service__WEBPACK_IMPORTED_MODULE_2__["GuildService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"])); };
GuildAuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: GuildAuthGuard, factory: GuildAuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Swid":
/*!****************************************!*\
  !*** ./src/app/services/ws.service.ts ***!
  \****************************************/
/*! exports provided: WSService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WSService", function() { return WSService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "jifJ");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _log_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./log.service */ "iXKo");
/* harmony import */ var _types_ws_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../types/ws-types */ "w7rA");
/* empty/unused harmony star reexport */



class WSService {
    constructor(log) {
        this.log = log;
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1___default.a.connect(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].rootEndpoint, {
            secure: true,
            path: '/ws',
        });
        this.listened = [];
        this.socket.once('message', (content) => {
            console.log(content);
            if (content.includes('Not Logged In'))
                window.location.reload();
        });
    }
    on(eventName, callback, component) {
        const componentName = this.nameOf(component);
        const eventString = `${eventName}-${componentName}`;
        if (this.listened.includes(eventString))
            return this;
        this.listened.push(eventString);
        const listener = (...args) => {
            this.log.info(`RECEIVE ${eventName} - ${componentName}`, 'ws');
            console.log(...args);
            return callback.call(component, ...args);
        };
        this.socket.on(eventName, listener);
        return this;
    }
    emitAsync(name, params, component) {
        return new Promise((resolve, reject) => {
            this.on('message', (message) => {
                if (!message.includes('Server error'))
                    return;
                // this.log.error(message);
                return reject(message);
            }, component);
            this.on(name, (args) => {
                this.log.success();
                return resolve(args);
            }, component);
            this.emit(name, params, component);
        });
    }
    emit(name, params, component) {
        this.log.info(`SEND ${name} - ${this.nameOf(component)}`, 'ws');
        this.socket.emit(name, params);
    }
    nameOf(component) {
        return component.constructor.name;
    }
}
WSService.ɵfac = function WSService_Factory(t) { return new (t || WSService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_log_service__WEBPACK_IMPORTED_MODULE_3__["LogService"])); };
WSService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: WSService, factory: WSService.ɵfac, providedIn: 'root' });



/***/ }),

/***/ "SxxY":
/*!*************************************************************************!*\
  !*** ./src/app/dashboard/guilds/text-channel/text-channel.component.ts ***!
  \*************************************************************************/
/*! exports provided: TextChannelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextChannelComponent", function() { return TextChannelComponent; });
/* harmony import */ var _text_based_channel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../text-based-channel */ "4wK4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-infinite-scroll */ "dlKe");
/* harmony import */ var _utils_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/spinner/spinner.component */ "ij2n");
/* harmony import */ var _messages_message_message_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../messages/message/message.component */ "3k1Y");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _ctrl_ngx_emoji_mart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ctrl/ngx-emoji-mart */ "KN7V");










function TextChannelComponent_div_0_div_1_spinner_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "spinner");
} }
function TextChannelComponent_div_0_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "message", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", "message" + message_r8._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("message", message_r8)("isExtra", ctx_r7.shouldCombine(i_r9))("member", ctx_r7.guildService.getMember(ctx_r7.guild == null ? null : ctx_r7.guild._id, message_r8.authorId))("guild", ctx_r7.guild);
} }
function TextChannelComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scrolledUp", function TextChannelComponent_div_0_div_1_Template_div_scrolledUp_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return  false && false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, TextChannelComponent_div_0_div_1_spinner_5_Template, 1, 0, "spinner", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, TextChannelComponent_div_0_div_1_div_6_Template, 2, 5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("scrollWindow", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Start of ", ctx_r1.title, " message history. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.loadedAllMessages);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.messages)("ngForTrackBy", ctx_r1.identifyMessage);
} }
function TextChannelComponent_div_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Message history of ", ctx_r3.title, " is hidden.");
} }
function TextChannelComponent_div_0_div_4_emoji_mart_1_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "emoji-mart", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TextChannelComponent_div_0_div_4_emoji_mart_1_Template_emoji_mart_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r16.emojiPickerOpen = !ctx_r16.emojiPickerOpen; })("emojiClick", function TextChannelComponent_div_0_div_4_emoji_mart_1_Template_emoji_mart_emojiClick_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r18.addEmoji($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TextChannelComponent_div_0_div_4_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 24);
} }
function TextChannelComponent_div_0_div_4_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r15.typingUsernames.join(", "));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r15.typingUsernames.length > 1 ? "are" : "is", " typing... ");
} }
function TextChannelComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TextChannelComponent_div_0_div_4_emoji_mart_1_Template, 1, 0, "emoji-mart", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-form-field", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function TextChannelComponent_div_0_div_4_Template_mat_form_field_keyup_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r19.emitTyping(); })("keyup.enter", function TextChannelComponent_div_0_div_4_Template_mat_form_field_keyup_enter_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r21.chat(_r13.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "textarea", 17, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TextChannelComponent_div_0_div_4_Template_mat_icon_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r22.emojiPickerOpen = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, TextChannelComponent_div_0_div_4_div_9_Template, 1, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, TextChannelComponent_div_0_div_4_div_10_Template, 4, 2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.emojiPickerOpen);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Message ", ctx_r4.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r4.guild && !ctx_r4.perms.can(ctx_r4.guild._id, "SEND_MESSAGES"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.typingUsernames.length <= 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.typingUsernames.length > 0);
} }
function TextChannelComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TextChannelComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TextChannelComponent_div_0_Template_div_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r23.onClick($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TextChannelComponent_div_0_div_1_Template, 7, 5, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TextChannelComponent_div_0_ng_template_2_Template, 7, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, TextChannelComponent_div_0_div_4_Template, 11, 5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, TextChannelComponent_div_0_div_5_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.guild && ctx_r0.loadedAllMessages || ctx_r0.guild && ctx_r0.perms.can(ctx_r0.guild._id, "READ_MESSAGES"))("ngIfElse", _r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.channel);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.channel);
} }
class TextChannelComponent extends _text_based_channel__WEBPACK_IMPORTED_MODULE_0__["TextBasedChannel"] {
}
TextChannelComponent.ɵfac = function TextChannelComponent_Factory(t) { return ɵTextChannelComponent_BaseFactory(t || TextChannelComponent); };
TextChannelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TextChannelComponent, selectors: [["app-text-channel"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [[3, "click", 4, "ngIf"], [3, "click"], ["class", "messages", "infiniteScroll", "", 3, "scrollWindow", "scrolledUp", 4, "ngIf", "ngIfElse"], ["lackingPerms", ""], ["class", "footer", 4, "ngIf"], [4, "ngIf"], ["infiniteScroll", "", 1, "messages", 3, "scrollWindow", "scrolledUp"], [1, "jumbotron", "pb-0"], [1, "lead"], ["class", "message", 3, "id", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "message", 3, "id"], [3, "message", "isExtra", "member", "guild"], [1, "messages"], [1, "lni", "lni-eye", "text-muted"], [1, "footer"], ["class", "float-right", "emoji", "joy", "title", "Pick an Emoji", 3, "click", "emojiClick", 4, "ngIf"], ["autoFocus", "", "appearance", "fill", 1, "d-block", 3, "keyup", "keyup.enter"], ["id", "chatBox", "matInput", "", 3, "disabled"], ["message", ""], ["align", "end", "matSuffix", "", 1, "cursor-pointer", "emoji-icon", "mb-3", 3, "click"], [1, "lni", "lni-emoji-happy"], ["class", "pt-3", 4, "ngIf"], ["class", "typing", 4, "ngIf"], ["emoji", "joy", "title", "Pick an Emoji", 1, "float-right", 3, "click", "emojiClick"], [1, "pt-3"], [1, "typing"]], template: function TextChannelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TextChannelComponent_div_0_Template, 6, 4, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.channel && ctx.messages);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_3__["InfiniteScrollDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _utils_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_4__["SpinnerComponent"], _messages_message_message_component__WEBPACK_IMPORTED_MODULE_5__["MessageComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatSuffix"], _ctrl_ngx_emoji_mart__WEBPACK_IMPORTED_MODULE_9__["PickerComponent"]], styles: [".footer[_ngcontent-%COMP%] {\r\n  padding: 10px 15px 0 15px;\r\n}\r\n\r\n.messages[_ngcontent-%COMP%] {\r\n  overflow-y: auto;\r\n\r\n  margin-top: 5px;\r\n  padding-bottom: 1vh;\r\n  height: 82.5vh;\r\n}\r\n\r\n.typing[_ngcontent-%COMP%] {\r\n  font-size: small;\r\n  margin-top: -3px;\r\n}\r\n\r\n.emoji-icon[_ngcontent-%COMP%] {\r\n  transition: transform .3s ease;\r\n}\r\n\r\n.emoji-icon[_ngcontent-%COMP%]:hover {\r\n  color: gold;\r\n  transform: scale(1.1);\r\n}\r\n\r\n\r\n\r\n.ctx-menu[_ngcontent-%COMP%] {\r\n  border-radius: 5px;\r\n  display: none;\r\n  position: absolute;\r\n\r\n  background-color: var(--background-tertiary);\r\n\r\n  padding: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRleHQtY2hhbm5lbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZ0JBQWdCOztFQUVoQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUNBO0VBQ0UsV0FBVztFQUNYLHFCQUFxQjtBQUN2Qjs7QUFFQSxvQkFBb0I7O0FBQ3BCO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixrQkFBa0I7O0VBRWxCLDRDQUE0Qzs7RUFFNUMsYUFBYTtBQUNmIiwiZmlsZSI6InRleHQtY2hhbm5lbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XHJcbiAgcGFkZGluZzogMTBweCAxNXB4IDAgMTVweDtcclxufVxyXG5cclxuLm1lc3NhZ2VzIHtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG5cclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDF2aDtcclxuICBoZWlnaHQ6IDgyLjV2aDtcclxufVxyXG5cclxuLnR5cGluZyB7XHJcbiAgZm9udC1zaXplOiBzbWFsbDtcclxuICBtYXJnaW4tdG9wOiAtM3B4O1xyXG59XHJcbi5lbW9qaS1pY29uIHtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjNzIGVhc2U7XHJcbn1cclxuLmVtb2ppLWljb246aG92ZXIge1xyXG4gIGNvbG9yOiBnb2xkO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxufVxyXG5cclxuLyogY3VzdG9tIGN0eCBtZW51ICovXHJcbi5jdHgtbWVudSB7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG5cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLXRlcnRpYXJ5KTtcclxuXHJcbiAgcGFkZGluZzogMTBweDtcclxufSJdfQ== */"] });
const ɵTextChannelComponent_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](TextChannelComponent);


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var devtools_detect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! devtools-detect */ "26JY");
/* harmony import */ var devtools_detect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(devtools_detect__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "Vx+w");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_events_event_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/events/event.service */ "gP/n");
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/theme.service */ "WPWp");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/user.service */ "qfBg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_log_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/log.service */ "iXKo");









class AppComponent {
    constructor(eventService, themeService, userService, route, log) {
        this.eventService = eventService;
        this.themeService = themeService;
        this.userService = userService;
        this.route = route;
        this.log = log;
    }
    get sfxEnabled() {
        return Object(_config__WEBPACK_IMPORTED_MODULE_2__["getConfig"])('sfxEnabled');
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.eventService.init();
            this.themeService.updateTheme();
            yield this.userService.updateSelf();
            this.handlePrompt();
            this.consoleWarning();
        });
    }
    handlePrompt() {
        this.route.queryParamMap.subscribe((map) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const success = map.get('success');
            const error = map.get('error');
            if (success)
                yield this.log.success(success);
            else if (error)
                yield this.log.error(error);
        }));
    }
    consoleWarning() {
        const interval = setInterval(() => {
            if (!devtools_detect__WEBPACK_IMPORTED_MODULE_1___default.a.isOpen)
                return;
            this.log.consoleWarning();
            clearInterval(interval);
        }, 100);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_events_event_service__WEBPACK_IMPORTED_MODULE_4__["EventService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_5__["ThemeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_log_service__WEBPACK_IMPORTED_MODULE_8__["LogService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [["id", "errorPopup", "hidden", "", 1, "rounded", "popup", "p-2"], ["id", "successPopup", "hidden", "", 1, "rounded", "popup", "p-2"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterOutlet"]], styles: [".popup[_ngcontent-%COMP%] {\n  z-index: 1;\n  position: static;\n}\n\n#successPopup[_ngcontent-%COMP%] {\n  background-color: var(--success);\n  color: var(--dark);\n}\n\n#errorPopup[_ngcontent-%COMP%] {\n  background-color: var(--danger);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSwrQkFBK0I7QUFDakMiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9wdXAge1xuICB6LWluZGV4OiAxO1xuICBwb3NpdGlvbjogc3RhdGljO1xufVxuXG4jc3VjY2Vzc1BvcHVwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VjY2Vzcyk7XG4gIGNvbG9yOiB2YXIoLS1kYXJrKTtcbn1cbiNlcnJvclBvcHVwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFuZ2VyKTtcbn0iXX0= */"] });


/***/ }),

/***/ "TLdK":
/*!******************************************!*\
  !*** ./src/app/services/ping.service.ts ***!
  \******************************************/
/*! exports provided: PingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PingService", function() { return PingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _sound_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sound.service */ "V9p5");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service */ "qfBg");




class PingService {
    constructor(sounds, userService) {
        this.sounds = sounds;
        this.userService = userService;
        this.unread = new Map();
    }
    markAsRead(channelId) {
        this.unread.delete(channelId);
    }
    add(channelId, lastMessageId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.unread.set(channelId, lastMessageId);
            yield this.sounds.ping();
        });
    }
    lastRead(channelId) {
        return this.unread.get(channelId);
    }
    isUnread(channelId) {
        return this.unread.has(channelId);
    }
    isIgnored(message, guildId) {
        const user = this.userService.self;
        return message.authorId === user._id
            || user.ignored.channelIds.includes(message.channelId)
            || user.ignored.guildIds.includes(guildId)
            || user.ignored.userIds.includes(message.authorId);
    }
}
PingService.ɵfac = function PingService_Factory(t) { return new (t || PingService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_sound_service__WEBPACK_IMPORTED_MODULE_2__["SoundService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"])); };
PingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PingService, factory: PingService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "TOw+":
/*!*****************************************************************!*\
  !*** ./src/app/pages/developers/bot-user/bot-user.component.ts ***!
  \*****************************************************************/
/*! exports provided: BotUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotUserComponent", function() { return BotUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_dashboard_components_save_changes_save_changes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dashboard/components/save-changes/save-changes.component */ "qigX");
/* harmony import */ var src_app_types_entity_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/types/entity-types */ "h8Xa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var src_app_services_developers_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/developers.service */ "RXH7");
/* harmony import */ var src_app_services_sound_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/sound.service */ "V9p5");
/* harmony import */ var src_app_services_ws_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/ws.service */ "Swid");
/* harmony import */ var src_app_authentication_sign_up_username_validators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/authentication/sign-up/username.validators */ "IrsS");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _dashboard_components_avatar_url_avatar_url_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../dashboard/components/avatar-url/avatar-url.component */ "kMH7");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _utils_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../utils/spinner/spinner.component */ "ij2n");


















function BotUserComponent_nav_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nav", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Overview");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " User");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", "/developers/applications/" + ctx_r0.app._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", "/developers/applications/" + ctx_r0.app._id + "/user");
} }
function BotUserComponent_div_9_mat_hint_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Checking");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function BotUserComponent_div_9_mat_error_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Username is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function BotUserComponent_div_9_mat_error_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Username is already taken.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function BotUserComponent_div_9_mat_error_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Username should follow the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "username rules");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { avatarURL: a0 }; };
function BotUserComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "header");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Bot User");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "General info about your bot user.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "form", 17, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "app-avatar-url", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "mat-form-field", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Avatar URL");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "mat-form-field", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, BotUserComponent_div_9_mat_hint_20_Template, 3, 0, "mat-hint", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, BotUserComponent_div_9_mat_error_21_Template, 2, 0, "mat-error", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, BotUserComponent_div_9_mat_error_22_Template, 2, 0, "mat-error", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, BotUserComponent_div_9_mat_error_23_Template, 5, 0, "mat-error", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Token");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Use this to log into the bot. Keep this safe!");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](29, "input", 26, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BotUserComponent_div_9_Template_button_click_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](30); return _r9.value = _r9.value === "shown" ? "hidden" : "shown"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BotUserComponent_div_9_Template_button_click_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r12.copyToken(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "Copy");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BotUserComponent_div_9_Template_button_click_37_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r13.regenToken(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "Regen");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "mat-form-field", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, "Client ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](44, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "mat-form-field", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "Bot ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](49, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](30);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r1.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("user", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](11, _c0, ctx_r1.form.get("avatarURL").value));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.form.get("username").pending);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.form.get("username").errors == null ? null : ctx_r1.form.get("username").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.form.get("username").errors == null ? null : ctx_r1.form.get("username").errors.shouldBeUnique);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.form.get("username").errors == null ? null : ctx_r1.form.get("username").errors.pattern);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hidden", _r9.value === "hidden");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.app.token);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("textContent", _r9.value === "shown" ? "Hide" : "Show");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx_r1.app._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx_r1.app.user._id);
} }
function BotUserComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "spinner");
} }
class BotUserComponent {
    constructor(route, saveChanges, service, sounds, ws, usernameValidators) {
        this.route = route;
        this.saveChanges = saveChanges;
        this.service = service;
        this.sounds = sounds;
        this.ws = ws;
        this.usernameValidators = usernameValidators;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            avatarURL: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(src_app_types_entity_types__WEBPACK_IMPORTED_MODULE_3__["patterns"].username),
            ], [this.usernameValidators.shouldBeUnique.bind(this.usernameValidators)]),
        });
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const appId = this.route.snapshot.paramMap.get('id');
            this.app = yield this.service.getAsync(appId);
            this.form.setValue({
                avatarURL: this.app.user.avatarURL,
                username: this.app.user.username,
            });
            this.originalForm = Object.assign({}, this.form.value);
            this.valueChanges$ = this.form.valueChanges
                .subscribe(() => this.openSaveChanges());
        });
    }
    ngOnDestroy() {
        var _a, _b;
        (_a = this.valueChanges$) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        (_b = this.saveChanges$) === null || _b === void 0 ? void 0 : _b.unsubscribe();
    }
    openSaveChanges() {
        const snackBarRef = this.saveChanges._openedSnackBarRef;
        if (this.form.invalid || snackBarRef)
            return;
        this.saveChanges$ = this.saveChanges
            .openFromComponent(src_app_dashboard_components_save_changes_save_changes_component__WEBPACK_IMPORTED_MODULE_2__["SaveChangesComponent"])
            .afterOpened()
            .subscribe(() => {
            const component = this.saveChanges._openedSnackBarRef.instance;
            if (!component)
                return;
            component.onSave.subscribe(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { return yield this.submit(); }));
            component.onReset.subscribe(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { return yield this.reset(); }));
        });
    }
    submit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.form.invalid)
                return;
            this.ws.emit('USER_UPDATE', {
                key: this.app.token,
                partialUser: this.form.value,
            }, this);
            this.originalForm = Object.assign({}, this.form.value);
            yield this.sounds.success();
        });
    }
    reset() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.form.setValue(Object.assign({}, this.originalForm));
            this.valueChanges$ = this.form.valueChanges
                .subscribe(() => this.openSaveChanges());
        });
    }
    regenToken() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.app.token = yield this.service.regenToken(this.app._id);
        });
    }
    copyToken() {
        navigator.clipboard.writeText(this.app.token);
    }
}
BotUserComponent.ɵfac = function BotUserComponent_Factory(t) { return new (t || BotUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_developers_service__WEBPACK_IMPORTED_MODULE_7__["DevelopersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_sound_service__WEBPACK_IMPORTED_MODULE_8__["SoundService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_ws_service__WEBPACK_IMPORTED_MODULE_9__["WSService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_authentication_sign_up_username_validators__WEBPACK_IMPORTED_MODULE_10__["UsernameValidators"])); };
BotUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: BotUserComponent, selectors: [["app-bot-user"]], decls: 12, vars: 3, consts: [[1, "row"], [1, "col-3"], [1, "developer-sidebar"], ["routerLink", "/developers", 1, "cursor-pointer", "my-5"], ["routerLink", "/developers", 1, "p-2", "text-muted"], [1, "lni", "lni-arrow-left", "mt-2"], [1, "pl-2"], ["class", "side-nav mt-3", 4, "ngIf"], ["class", "col-8 m-4 mt-5", 4, "ngIf", "ngIfElse"], ["class", "col-6 d-flex justify-content-center"], ["loading", ""], [1, "side-nav", "mt-3"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink"], [1, "lni", "lni-eye"], [1, "lni", "lni-robot"], [1, "col-8", "m-4", "mt-5"], [1, "lead"], [1, "overflow-hidden", 3, "formGroup"], ["f", "ngForm"], [1, "col-6"], ["size", "96px", 3, "user"], ["appearance", "outline", 1, "ml-3"], ["formControlName", "avatarURL", "type", "url", "matInput", ""], ["appearance", "outline"], ["formControlName", "username", "type", "text", "matInput", ""], [4, "ngIf"], ["type", "hidden", "value", "hidden"], ["shown", ""], [1, "token", 3, "hidden"], [1, "buttons"], ["type", "button", "mat-button", "", 1, "text-info", 3, "textContent", "click"], ["type", "button", "mat-button", "", 1, "text-success", 3, "click"], ["type", "button", "mat-button", "", 1, "text-danger", 3, "click"], ["type", "text", "disabled", "", "matInput", "", 3, "value"], [1, "lni", "lni-circle-notch", "fa-spin"], ["routerLink", "/docs/usernames"]], template: function BotUserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "header", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "strong", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "DASHBOARD");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, BotUserComponent_nav_8_Template, 7, 2, "nav", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, BotUserComponent_div_9_Template, 50, 13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, BotUserComponent_ng_template_10_Template, 1, 0, "ng-template", 9, 10, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.app);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.app)("ngIfElse", _r2);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkActive"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _dashboard_components_avatar_url_avatar_url_component__WEBPACK_IMPORTED_MODULE_12__["AvatarUrlComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatHint"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatError"], _utils_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_16__["SpinnerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBsaWNhdGlvbi5jb21wb25lbnQuY3NzIn0= */", "img[_ngcontent-%COMP%] {\n  height: 32px;\n}\n\n*[_ngcontent-%COMP%] {\n  overflow-y: hidden !important;\n}\n\na[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n\n.developer-sidebar[_ngcontent-%COMP%] {\n  background-color: var(--background-secondary);\n}\n\n.icon[_ngcontent-%COMP%] {\n  font-size: 64px;\n  color: var(--primary);\n  background-color: var(--background-tertiary);\n  overflow-x: hidden;\n  padding: 50px;\n}\n\n.applications[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 32px;\n  padding: 16px 24px;\n}\n\n.developer-sidebar[_ngcontent-%COMP%], .applications[_ngcontent-%COMP%] {\n  height: 100vh;\n  padding: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldmVsb3BlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDZDQUE2QztBQUMvQzs7QUFFQTtFQUNFLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsNENBQTRDO0VBQzVDLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLGFBQWE7RUFDYixhQUFhO0FBQ2YiLCJmaWxlIjoiZGV2ZWxvcGVycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcbiAgaGVpZ2h0OiAzMnB4O1xufVxuXG4qIHtcbiAgb3ZlcmZsb3cteTogaGlkZGVuICFpbXBvcnRhbnQ7XG59XG5cbmEge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uZGV2ZWxvcGVyLXNpZGViYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLXNlY29uZGFyeSk7XG59XG5cbi5pY29uIHtcbiAgZm9udC1zaXplOiA2NHB4O1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtdGVydGlhcnkpO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIHBhZGRpbmc6IDUwcHg7XG59XG5cbi5hcHBsaWNhdGlvbnMgYnV0dG9uIHtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBwYWRkaW5nOiAxNnB4IDI0cHg7XG59XG5cbi5kZXZlbG9wZXItc2lkZWJhcixcbi5hcHBsaWNhdGlvbnMge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBwYWRkaW5nOiAyNXB4O1xufSJdfQ== */"] });


/***/ }),

/***/ "Tyil":
/*!***************************************************************!*\
  !*** ./src/app/authentication/sign-up/password.validators.ts ***!
  \***************************************************************/
/*! exports provided: PasswordValidators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordValidators", function() { return PasswordValidators; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class PasswordValidators {
    static passwordsShouldMatch(control) {
        const password = control.get('password').value;
        const confirmPassword = control.get('confirmPassword').value;
        return (password !== confirmPassword)
            ? { passwordMismatch: true }
            : null;
    }
    static newPasswordShouldNotMatch(control) {
        const oldPassword = control.get('oldPassword').value;
        const newPassword = control.get('newPassword').value;
        return (oldPassword === newPassword)
            ? { passwordMatch: true }
            : null;
    }
    static emailOrUsernameRequired(control) {
        const username = control.get('username').value;
        const email = control.get('email').value;
        return (email || username)
            ? null
            : { emailOrUsernameRequired: true };
    }
}
PasswordValidators.ɵfac = function PasswordValidators_Factory(t) { return new (t || PasswordValidators)(); };
PasswordValidators.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PasswordValidators, factory: PasswordValidators.ɵfac });


/***/ }),

/***/ "UxaF":
/*!*******************************************************!*\
  !*** ./src/app/authentication/auth/auth.component.ts ***!
  \*******************************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_guild_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/guild.service */ "4bjJ");
/* harmony import */ var src_app_services_log_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/log.service */ "iXKo");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/user.service */ "qfBg");
/* harmony import */ var _utils_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/spinner/spinner.component */ "ij2n");







class AuthComponent {
    constructor(router, route, guildService, log, userService) {
        this.router = router;
        this.route = route;
        this.guildService = guildService;
        this.log = log;
        this.userService = userService;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const key = this.route.snapshot.queryParamMap.get('key');
                localStorage.setItem('key', key);
                yield this.userService.updateSelf();
                yield this.guildService.fetchAll();
                yield this.router.navigate(['/channels/@me']);
            }
            catch (error) {
                yield this.log.error(error.message);
                yield this.router.navigate(['/']);
            }
        });
    }
}
AuthComponent.ɵfac = function AuthComponent_Factory(t) { return new (t || AuthComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_guild_service__WEBPACK_IMPORTED_MODULE_3__["GuildService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_log_service__WEBPACK_IMPORTED_MODULE_4__["LogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"])); };
AuthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AuthComponent, selectors: [["app-auth"]], decls: 1, vars: 0, template: function AuthComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "spinner");
    } }, directives: [_utils_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_6__["SpinnerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRoLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "V9p5":
/*!*******************************************!*\
  !*** ./src/app/services/sound.service.ts ***!
  \*******************************************/
/*! exports provided: SoundService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoundService", function() { return SoundService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "Vx+w");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class SoundService {
    get sfxEnabled() {
        return Object(_config__WEBPACK_IMPORTED_MODULE_1__["getConfig"])('sfxEnabled');
    }
    ping() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.playSound('ping');
        });
    }
    message() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.playSound('message');
        });
    }
    success() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.playSound('success');
        });
    }
    error() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.playSound('error');
        });
    }
    playSound(name) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.sfxEnabled)
                return;
            const audio = document.createElement('audio');
            audio.setAttribute('src', `assets/audio/${name}.wav`);
            audio.onended = () => audio.remove();
            try {
                yield audio.play();
            }
            catch (_a) { }
        });
    }
}
SoundService.ɵfac = function SoundService_Factory(t) { return new (t || SoundService)(); };
SoundService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: SoundService, factory: SoundService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Vx+w":
/*!***************************!*\
  !*** ./src/app/config.ts ***!
  \***************************/
/*! exports provided: getConfig, getConfigValue, setConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConfig", function() { return getConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConfigValue", function() { return getConfigValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setConfig", function() { return setConfig; });
const defaultValues = {
    sfxEnabled: true,
    memberListExpanded: true,
    theme: 'HORIZON',
};
for (const key in defaultValues) {
    const currentValue = localStorage.getItem(key);
    if (currentValue)
        continue;
    localStorage.setItem(key, defaultValues[key].toString());
}
function getConfig(key) {
    return localStorage.getItem(key) == 'true';
}
function getConfigValue(key) {
    return localStorage.getItem(key);
}
function setConfig(key, value) {
    localStorage.setItem(key, value.toString());
}


/***/ }),

/***/ "WHGX":
/*!*****************************************!*\
  !*** ./src/app/pipes/timestamp.pipe.ts ***!
  \*****************************************/
/*! exports provided: TimestampPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimestampPipe", function() { return TimestampPipe; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils */ "oCjk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TimestampPipe {
    transform(value) {
        return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["timestamp"])(value);
    }
}
TimestampPipe.ɵfac = function TimestampPipe_Factory(t) { return new (t || TimestampPipe)(); };
TimestampPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "timestamp", type: TimestampPipe, pure: true });


/***/ }),

/***/ "WPWp":
/*!*******************************************!*\
  !*** ./src/app/services/theme.service.ts ***!
  \*******************************************/
/*! exports provided: ThemeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeService", function() { return ThemeService; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "Vx+w");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ThemeService {
    get defaultTheme() {
        return Object(_config__WEBPACK_IMPORTED_MODULE_0__["getConfigValue"])('theme');
    }
    changeTheme(theme) {
        Object(_config__WEBPACK_IMPORTED_MODULE_0__["setConfig"])('theme', theme);
        this.updateTheme();
    }
    updateTheme() {
        document
            .querySelector('html')
            .setAttribute('theme', Object(_config__WEBPACK_IMPORTED_MODULE_0__["getConfigValue"])('theme'));
    }
}
ThemeService.ɵfac = function ThemeService_Factory(t) { return new (t || ThemeService)(); };
ThemeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ThemeService, factory: ThemeService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "X5Ss":
/*!********************************************!*\
  !*** ./src/app/pages/why/why.component.ts ***!
  \********************************************/
/*! exports provided: WhyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhyComponent", function() { return WhyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class WhyComponent {
    constructor() { }
    ngOnInit() {
    }
}
WhyComponent.ɵfac = function WhyComponent_Factory(t) { return new (t || WhyComponent)(); };
WhyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WhyComponent, selectors: [["app-why"]], decls: 0, vars: 0, template: function WhyComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3aHkuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "XkKb":
/*!******************************************************!*\
  !*** ./src/app/pipes/snake-to-sentence-case.pipe.ts ***!
  \******************************************************/
/*! exports provided: SnakeToSentenceCasePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnakeToSentenceCasePipe", function() { return SnakeToSentenceCasePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SnakeToSentenceCasePipe {
    transform(words) {
        var _a;
        return (_a = words === null || words === void 0 ? void 0 : words.split('_').map(w => w[0] + w.slice(1).toLowerCase()).join(' ')) !== null && _a !== void 0 ? _a : '';
    }
}
SnakeToSentenceCasePipe.ɵfac = function SnakeToSentenceCasePipe_Factory(t) { return new (t || SnakeToSentenceCasePipe)(); };
SnakeToSentenceCasePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "snakeToSentenceCase", type: SnakeToSentenceCasePipe, pure: true });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AlertErrorHandler, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertErrorHandler", function() { return AlertErrorHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _authentication_auth_auth_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./authentication/auth/auth.component */ "UxaF");
/* harmony import */ var _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./authentication/login/login.component */ "kuBs");
/* harmony import */ var _authentication_logout_logout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./authentication/logout/logout.component */ "HZi2");
/* harmony import */ var _dashboard_me_me_overview_me_overview_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dashboard/me/me-overview/me-overview.component */ "rpeu");
/* harmony import */ var _dashboard_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dashboard/components/sidebar/sidebar.component */ "itJq");
/* harmony import */ var _dashboard_guilds_guild_overview_guild_overview_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dashboard/guilds/guild-overview/guild-overview.component */ "eepR");
/* harmony import */ var _utils_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./utils/spinner/spinner.component */ "ij2n");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _dashboard_guilds_guild_sidebar_guild_sidebar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./dashboard/guilds/guild-sidebar/guild-sidebar.component */ "G7KZ");
/* harmony import */ var _dashboard_me_me_sidebar_me_sidebar_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./dashboard/me/me-sidebar/me-sidebar.component */ "LlIw");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./material-module */ "j5wd");
/* harmony import */ var _dashboard_components_save_changes_save_changes_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./dashboard/components/save-changes/save-changes.component */ "qigX");
/* harmony import */ var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/not-found/not-found.component */ "v2M4");
/* harmony import */ var _pipes_clean_date_time_pipe__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pipes/clean-date-time.pipe */ "Rc5a");
/* harmony import */ var _dashboard_components_member_username_member_username_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./dashboard/components/member-username/member-username.component */ "ME9D");
/* harmony import */ var _utils_zippy_zippy_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./utils/zippy/zippy.component */ "vLLP");
/* harmony import */ var _pipes_mini_date_pipe__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pipes/mini-date.pipe */ "5jTC");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _pipes_snake_to_sentence_case_pipe__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pipes/snake-to-sentence-case.pipe */ "XkKb");
/* harmony import */ var _pipes_truncated_pipe__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pipes/truncated.pipe */ "gPlj");
/* harmony import */ var _pipes_duration_string_pipe__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pipes/duration-string.pipe */ "vGr5");
/* harmony import */ var _pipes_camel_to_sentence_case_pipe__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pipes/camel-to-sentence-case.pipe */ "GxHU");
/* harmony import */ var _utils_waves_waves_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./utils/waves/waves.component */ "y7Ka");
/* harmony import */ var _authentication_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./authentication/sign-up/sign-up.component */ "3RvI");
/* harmony import */ var _dashboard_components_dashboard_navbar_dashboard_navbar_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./dashboard/components/dashboard-navbar/dashboard-navbar.component */ "SKt3");
/* harmony import */ var _dashboard_guilds_text_channel_text_channel_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./dashboard/guilds/text-channel/text-channel.component */ "SxxY");
/* harmony import */ var _dashboard_guilds_voice_channel_voice_channel_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./dashboard/guilds/voice-channel/voice-channel.component */ "kVLH");
/* harmony import */ var _dialog_create_invite_create_invite_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./dialog/create-invite/create-invite.component */ "zswv");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ngx-infinite-scroll */ "dlKe");
/* harmony import */ var _ctrl_ngx_emoji_mart__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @ctrl/ngx-emoji-mart */ "KN7V");
/* harmony import */ var _dashboard_guilds_guild_settings_overview_guild_settings_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./dashboard/guilds/guild-settings/overview/guild-settings.component */ "PT5O");
/* harmony import */ var _dashboard_guilds_guild_settings_roles_roles_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./dashboard/guilds/guild-settings/roles/roles.component */ "OY6s");
/* harmony import */ var _dashboard_guilds_guild_settings_invites_invites_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./dashboard/guilds/guild-settings/invites/invites.component */ "nHKN");
/* harmony import */ var _dashboard_me_friends_list_friends_list_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./dashboard/me/friends-list/friends-list.component */ "1nus");
/* harmony import */ var _dashboard_me_dmchannel_dm_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./dashboard/me/dmchannel/dm.component */ "f1HG");
/* harmony import */ var _dashboard_me_user_settings_user_settings_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./dashboard/me/user-settings/user-settings.component */ "h1rg");
/* harmony import */ var _dashboard_guilds_guild_settings_bot_list_bot_list_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./dashboard/guilds/guild-settings/bot-list/bot-list.component */ "pHWo");
/* harmony import */ var _dashboard_messages_message_embed_message_embed_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./dashboard/messages/message-embed/message-embed.component */ "B9z8");
/* harmony import */ var _dashboard_messages_message_message_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./dashboard/messages/message/message.component */ "3k1Y");
/* harmony import */ var _dashboard_guilds_member_list_member_list_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./dashboard/guilds/member-list/member-list.component */ "Q3hq");
/* harmony import */ var _pages_developers_developers_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./pages/developers/developers.component */ "cFTX");
/* harmony import */ var _pages_developers_application_application_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./pages/developers/application/application.component */ "QRQu");
/* harmony import */ var _pages_developers_bot_user_bot_user_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./pages/developers/bot-user/bot-user.component */ "TOw+");
/* harmony import */ var _dashboard_components_avatar_url_avatar_url_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./dashboard/components/avatar-url/avatar-url.component */ "kMH7");
/* harmony import */ var _authentication_verify_verify_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./authentication/verify/verify.component */ "cDDQ");
/* harmony import */ var _dashboard_me_user_account_user_account_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./dashboard/me/user-account/user-account.component */ "Ce9m");
/* harmony import */ var _dashboard_components_settings_sidebar_settings_sidebar_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./dashboard/components/settings-sidebar/settings-sidebar.component */ "qT/8");
/* harmony import */ var _cool_submarine_submarine_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./cool/submarine/submarine.component */ "w4JF");
/* harmony import */ var _pages_invite_invite_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./pages/invite/invite.component */ "b1Gg");
/* harmony import */ var _countdown_pipe__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./countdown.pipe */ "HEGd");
/* harmony import */ var _dialog_create_channel_create_channel_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./dialog/create-channel/create-channel.component */ "9uiD");
/* harmony import */ var _dialog_create_guild_create_guild_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./dialog/create-guild/create-guild.component */ "FwYx");
/* harmony import */ var _utils_coming_soon_coming_soon_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./utils/coming-soon/coming-soon.component */ "g8CY");
/* harmony import */ var _cool_lighthouse_lighthouse_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./cool/lighthouse/lighthouse.component */ "kYtK");
/* harmony import */ var _dashboard_components_channel_tab_channel_tab_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./dashboard/components/channel-tab/channel-tab.component */ "fQow");
/* harmony import */ var _dashboard_components_guild_navbar_guild_navbar_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./dashboard/components/guild-navbar/guild-navbar.component */ "3fd3");
/* harmony import */ var _dialog_profile_profile_component__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./dialog/profile/profile.component */ "rEt/");
/* harmony import */ var _dashboard_components_guild_icon_guild_icon_component__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./dashboard/components/guild-icon/guild-icon.component */ "698J");
/* harmony import */ var _dialog_add_friend_add_friend_component__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./dialog/add-friend/add-friend.component */ "PMD9");
/* harmony import */ var _pages_why_why_component__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./pages/why/why.component */ "X5Ss");
/* harmony import */ var _pipes_timestamp_pipe__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./pipes/timestamp.pipe */ "WHGX");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");














































































class AlertErrorHandler {
    handleError(error) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                console.log(error.stack);
                const key = localStorage.getItem('key');
                yield fetch(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_27__["environment"].endpoint}/error?key=${key}`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ message: error.message }),
                });
            }
            finally {
                throw error;
            }
        });
    }
}
AlertErrorHandler.ɵfac = function AlertErrorHandler_Factory(t) { return new (t || AlertErrorHandler)(); };
AlertErrorHandler.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AlertErrorHandler, factory: AlertErrorHandler.ɵfac });
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ErrorHandler"], useClass: AlertErrorHandler },
        { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"], useClass: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ShowOnDirtyErrorStateMatcher"] },
    ], imports: [[
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_20__["MaterialModule"],
            ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_38__["InfiniteScrollModule"],
            _ctrl_ngx_emoji_mart__WEBPACK_IMPORTED_MODULE_39__["PickerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
        _pages_home_home_component__WEBPACK_IMPORTED_MODULE_17__["HomeComponent"],
        _authentication_auth_auth_component__WEBPACK_IMPORTED_MODULE_10__["AuthComponent"],
        _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
        _authentication_logout_logout_component__WEBPACK_IMPORTED_MODULE_12__["LogoutComponent"],
        _dashboard_me_me_overview_me_overview_component__WEBPACK_IMPORTED_MODULE_13__["DashboardOverviewComponent"],
        _dashboard_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_14__["SidebarComponent"],
        _dashboard_guilds_guild_overview_guild_overview_component__WEBPACK_IMPORTED_MODULE_15__["GuildOverviewComponent"],
        _utils_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_16__["SpinnerComponent"],
        _dashboard_guilds_guild_sidebar_guild_sidebar_component__WEBPACK_IMPORTED_MODULE_18__["GuildSidebarComponent"],
        _dashboard_me_me_sidebar_me_sidebar_component__WEBPACK_IMPORTED_MODULE_19__["MeSidebarComponent"],
        _dashboard_components_save_changes_save_changes_component__WEBPACK_IMPORTED_MODULE_21__["SaveChangesComponent"],
        _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_22__["NotFoundComponent"],
        _pipes_clean_date_time_pipe__WEBPACK_IMPORTED_MODULE_23__["CleanDateTimePipe"],
        _dashboard_components_member_username_member_username_component__WEBPACK_IMPORTED_MODULE_24__["MemberUsernameComponent"],
        _utils_zippy_zippy_component__WEBPACK_IMPORTED_MODULE_25__["ZippyComponent"],
        _pipes_mini_date_pipe__WEBPACK_IMPORTED_MODULE_26__["MiniDatePipe"],
        _pipes_snake_to_sentence_case_pipe__WEBPACK_IMPORTED_MODULE_28__["SnakeToSentenceCasePipe"],
        _pipes_truncated_pipe__WEBPACK_IMPORTED_MODULE_29__["TruncatedPipe"],
        _pipes_duration_string_pipe__WEBPACK_IMPORTED_MODULE_30__["DurationStringPipe"],
        _pipes_camel_to_sentence_case_pipe__WEBPACK_IMPORTED_MODULE_31__["CamelToSentenceCasePipe"],
        _dashboard_messages_message_message_component__WEBPACK_IMPORTED_MODULE_48__["MessageComponent"],
        _utils_waves_waves_component__WEBPACK_IMPORTED_MODULE_32__["WavesComponent"],
        _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
        _authentication_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_33__["SignUpComponent"],
        _dashboard_components_dashboard_navbar_dashboard_navbar_component__WEBPACK_IMPORTED_MODULE_34__["DashboardNavbarComponent"],
        _dashboard_guilds_text_channel_text_channel_component__WEBPACK_IMPORTED_MODULE_35__["TextChannelComponent"],
        _dashboard_guilds_voice_channel_voice_channel_component__WEBPACK_IMPORTED_MODULE_36__["VoiceChannelComponent"],
        _dialog_create_invite_create_invite_component__WEBPACK_IMPORTED_MODULE_37__["CreateInviteComponent"],
        _dashboard_messages_message_embed_message_embed_component__WEBPACK_IMPORTED_MODULE_47__["MessageEmbedComponent"],
        _dashboard_guilds_guild_settings_overview_guild_settings_component__WEBPACK_IMPORTED_MODULE_40__["GuildSettingsComponent"],
        _dashboard_guilds_guild_settings_roles_roles_component__WEBPACK_IMPORTED_MODULE_41__["RolesComponent"],
        _dashboard_guilds_guild_settings_invites_invites_component__WEBPACK_IMPORTED_MODULE_42__["InvitesComponent"],
        _dashboard_me_friends_list_friends_list_component__WEBPACK_IMPORTED_MODULE_43__["FriendsListComponent"],
        _dashboard_me_dmchannel_dm_component__WEBPACK_IMPORTED_MODULE_44__["DMComponent"],
        _dashboard_me_user_settings_user_settings_component__WEBPACK_IMPORTED_MODULE_45__["UserSettingsComponent"],
        _dashboard_guilds_guild_settings_bot_list_bot_list_component__WEBPACK_IMPORTED_MODULE_46__["BotListComponent"],
        _dashboard_guilds_member_list_member_list_component__WEBPACK_IMPORTED_MODULE_49__["MemberListComponent"],
        _pages_developers_developers_component__WEBPACK_IMPORTED_MODULE_50__["DevelopersComponent"],
        _pages_developers_application_application_component__WEBPACK_IMPORTED_MODULE_51__["ApplicationComponent"],
        _pages_developers_bot_user_bot_user_component__WEBPACK_IMPORTED_MODULE_52__["BotUserComponent"],
        _dashboard_components_avatar_url_avatar_url_component__WEBPACK_IMPORTED_MODULE_53__["AvatarUrlComponent"],
        _authentication_verify_verify_component__WEBPACK_IMPORTED_MODULE_54__["VerifyComponent"],
        _dashboard_me_user_account_user_account_component__WEBPACK_IMPORTED_MODULE_55__["UserAccountComponent"],
        _dashboard_components_settings_sidebar_settings_sidebar_component__WEBPACK_IMPORTED_MODULE_56__["SettingsSidebarComponent"],
        _cool_submarine_submarine_component__WEBPACK_IMPORTED_MODULE_57__["SubmarineComponent"],
        _pages_invite_invite_component__WEBPACK_IMPORTED_MODULE_58__["InviteComponent"],
        _countdown_pipe__WEBPACK_IMPORTED_MODULE_59__["CountdownPipe"],
        _dialog_create_channel_create_channel_component__WEBPACK_IMPORTED_MODULE_60__["CreateChannelComponent"],
        _dialog_create_guild_create_guild_component__WEBPACK_IMPORTED_MODULE_61__["CreateGuildComponent"],
        _utils_coming_soon_coming_soon_component__WEBPACK_IMPORTED_MODULE_62__["ComingSoonComponent"],
        _cool_lighthouse_lighthouse_component__WEBPACK_IMPORTED_MODULE_63__["LighthouseComponent"],
        _dashboard_components_channel_tab_channel_tab_component__WEBPACK_IMPORTED_MODULE_64__["ChannelTabComponent"],
        _dashboard_components_guild_navbar_guild_navbar_component__WEBPACK_IMPORTED_MODULE_65__["GuildNavbarComponent"],
        _dialog_profile_profile_component__WEBPACK_IMPORTED_MODULE_66__["ProfileComponent"],
        _dashboard_components_guild_icon_guild_icon_component__WEBPACK_IMPORTED_MODULE_67__["GuildIconComponent"],
        _dialog_add_friend_add_friend_component__WEBPACK_IMPORTED_MODULE_68__["AddFriendComponent"],
        _pages_why_why_component__WEBPACK_IMPORTED_MODULE_69__["WhyComponent"],
        _pipes_timestamp_pipe__WEBPACK_IMPORTED_MODULE_70__["TimestampPipe"]], imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _material_module__WEBPACK_IMPORTED_MODULE_20__["MaterialModule"],
        ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_38__["InfiniteScrollModule"],
        _ctrl_ngx_emoji_mart__WEBPACK_IMPORTED_MODULE_39__["PickerModule"]] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetComponentScope"](_dialog_profile_profile_component__WEBPACK_IMPORTED_MODULE_66__["ProfileComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_71__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_72__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_73__["MatTooltip"], _angular_router__WEBPACK_IMPORTED_MODULE_74__["RouterLink"], _dashboard_components_avatar_url_avatar_url_component__WEBPACK_IMPORTED_MODULE_53__["AvatarUrlComponent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_75__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_75__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_71__["NgForOf"], _dashboard_components_guild_icon_guild_icon_component__WEBPACK_IMPORTED_MODULE_67__["GuildIconComponent"]], []);


/***/ }),

/***/ "b1Gg":
/*!**************************************************!*\
  !*** ./src/app/pages/invite/invite.component.ts ***!
  \**************************************************/
/*! exports provided: InviteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InviteComponent", function() { return InviteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_guild_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/guild.service */ "4bjJ");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_app_services_invite_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/invite.service */ "s4IJ");
/* harmony import */ var src_app_services_ws_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/ws.service */ "Swid");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _utils_waves_waves_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/waves/waves.component */ "y7Ka");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _cool_submarine_submarine_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../cool/submarine/submarine.component */ "w4JF");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");












function InviteComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "You have been invited to");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InviteComponent_div_3_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.join(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Join");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.guild._id);
} }
function InviteComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "You have been invited to");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Join");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.guild._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/sign-up&redirect=/invite/" + ctx_r1.invite._id);
} }
function InviteComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "This invite is");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Invalid");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class InviteComponent {
    constructor(route, router, guildService, userService, invites, ws) {
        this.route = route;
        this.router = router;
        this.guildService = guildService;
        this.userService = userService;
        this.invites = invites;
        this.ws = ws;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const code = this.route.snapshot.paramMap.get('id');
            const invite = yield this.invites.fetch(code);
            if (this.guildService.getAsync(invite.guildId))
                return this.router.navigate([`/channels/${invite.guildId}`]);
        });
    }
    join() {
        this.ws.on('GUILD_JOIN', (args) => this.guildService.upsert(args.guild._id, args.guild), this);
        this.ws.emit('GUILD_MEMBER_ADD', { inviteCode: this.invite._id }, this);
    }
}
InviteComponent.ɵfac = function InviteComponent_Factory(t) { return new (t || InviteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_guild_service__WEBPACK_IMPORTED_MODULE_3__["GuildService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_invite_service__WEBPACK_IMPORTED_MODULE_5__["InviteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_ws_service__WEBPACK_IMPORTED_MODULE_6__["WSService"])); };
InviteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: InviteComponent, selectors: [["app-invite"]], decls: 7, vars: 3, consts: [[1, "main"], ["class", "text-center", 4, "ngIf"], [4, "ngIf"], [1, "text-center"], [1, "lead"], ["mat-button", "", 1, "bg-primary", 3, "click"], ["mat-button", "", 1, "bg-success", 3, "routerLink"], [1, "text-danger"]], template: function InviteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "waves");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, InviteComponent_div_3_Template, 8, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, InviteComponent_div_4_Template, 8, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, InviteComponent_div_5_Template, 5, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "app-submarine");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.guild && ctx.userService.self);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.guild && !ctx.userService.self);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.guild);
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"], _utils_waves_waves_component__WEBPACK_IMPORTED_MODULE_8__["WavesComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _cool_submarine_submarine_component__WEBPACK_IMPORTED_MODULE_10__["SubmarineComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: ["body[_ngcontent-%COMP%] {\n  overflow-y: hidden;\n}\n\n.main[_ngcontent-%COMP%] {\n  padding-top: 25vh;\n  height: 90vh;\n  background-image: \n    linear-gradient(\n      to bottom,\n      var(--background-secondary),\n      var(--background-tertiary) 50%\n    );\n}\n\napp-submarine[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 15vh;\n  transform: scale(0.5);\n\n  -webkit-animation: moveLeft 150s infinite;\n\n          animation: moveLeft 150s infinite;\n}\n\n@-webkit-keyframes moveLeft {\n  0% {\n    left: 90%;\n  }\n  100% {\n    left: 10%;\n  }\n}\n\n@keyframes moveLeft {\n  0% {\n    left: 90%;\n  }\n  100% {\n    left: 10%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludml0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWjs7Ozs7S0FLRztBQUNMOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixxQkFBcUI7O0VBRXJCLHlDQUFpQzs7VUFBakMsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0U7SUFDRSxTQUFTO0VBQ1g7RUFDQTtJQUNFLFNBQVM7RUFDWDtBQUNGOztBQVBBO0VBQ0U7SUFDRSxTQUFTO0VBQ1g7RUFDQTtJQUNFLFNBQVM7RUFDWDtBQUNGIiwiZmlsZSI6Imludml0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbn1cblxuLm1haW4ge1xuICBwYWRkaW5nLXRvcDogMjV2aDtcbiAgaGVpZ2h0OiA5MHZoO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBcbiAgICBsaW5lYXItZ3JhZGllbnQoXG4gICAgICB0byBib3R0b20sXG4gICAgICB2YXIoLS1iYWNrZ3JvdW5kLXNlY29uZGFyeSksXG4gICAgICB2YXIoLS1iYWNrZ3JvdW5kLXRlcnRpYXJ5KSA1MCVcbiAgICApO1xufVxuXG5hcHAtc3VibWFyaW5lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDE1dmg7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcblxuICBhbmltYXRpb246IG1vdmVMZWZ0IDE1MHMgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgbW92ZUxlZnQge1xuICAwJSB7XG4gICAgbGVmdDogOTAlO1xuICB9XG4gIDEwMCUge1xuICAgIGxlZnQ6IDEwJTtcbiAgfVxufSJdfQ== */"] });


/***/ }),

/***/ "bYG1":
/*!************************************************!*\
  !*** ./src/app/guards/dmchannel-auth.guard.ts ***!
  \************************************************/
/*! exports provided: DMChannelAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DMChannelAuthGuard", function() { return DMChannelAuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_channel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/channel.service */ "0xJi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "qfBg");





class DMChannelAuthGuard {
    constructor(channelService, router, userService) {
        this.channelService = channelService;
        this.router = router;
        this.userService = userService;
    }
    canActivate(route) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.userService.init();
            yield this.channelService.init();
            const channelId = route.paramMap.get('channelId');
            const dmChannelExists = this.channelService.dmChannels.find(c => c._id === channelId);
            if (!dmChannelExists) {
                this.router.navigate(['/channels/@me']);
                return true;
            }
            return true;
        });
    }
}
DMChannelAuthGuard.ɵfac = function DMChannelAuthGuard_Factory(t) { return new (t || DMChannelAuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_channel_service__WEBPACK_IMPORTED_MODULE_2__["ChannelService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"])); };
DMChannelAuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DMChannelAuthGuard, factory: DMChannelAuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "cDDQ":
/*!***********************************************************!*\
  !*** ./src/app/authentication/verify/verify.component.ts ***!
  \***********************************************************/
/*! exports provided: VerifyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyComponent", function() { return VerifyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_user_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user-auth.service */ "hZP9");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");











function VerifyComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Code is invalid");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function VerifyComponent_button_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Verify");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class VerifyComponent {
    constructor(authService, route, router) {
        this.authService = authService;
        this.route = route;
        this.router = router;
        this.processing = false;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            code: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(7),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(7),
            ])
        });
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const code = this.route.snapshot.queryParamMap.get('code');
            if (code) {
                this.form.get('code').setValue(code);
                yield this.submit();
            }
        });
    }
    submit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                if (this.form.invalid)
                    return;
                const code = this.form.get('code').value;
                const key = yield this.authService.verify(code);
                localStorage.setItem('key', key);
                yield this.router.navigate(['/channels/@me']);
            }
            catch (error) {
                this.form.setErrors({ invalidCode: error.message });
            }
        });
    }
}
VerifyComponent.ɵfac = function VerifyComponent_Factory(t) { return new (t || VerifyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_user_auth_service__WEBPACK_IMPORTED_MODULE_3__["UserAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
VerifyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: VerifyComponent, selectors: [["app-verify"]], decls: 16, vars: 3, consts: [[1, "text-center"], [1, "mt-5"], [1, "lead"], [3, "formGroup", "ngSubmit"], ["f", "ngForm"], ["appearance", "outline"], ["formControlName", "code", "type", "text", "matInput", ""], ["class", "text-danger m-2", 4, "ngIf"], ["color", "success", "mat-button", "", 4, "ngIf"], [1, "text-danger", "m-2"], ["color", "success", "mat-button", ""]], template: function VerifyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Enter Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Check the email associated with this account for the verification code.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function VerifyComponent_Template_form_ngSubmit_7_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, VerifyComponent_div_14_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, VerifyComponent_button_15_Template, 2, 0, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.form.errors == null ? null : ctx.form.errors.invalidCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.processing);
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZXJpZnkuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "cFTX":
/*!**********************************************************!*\
  !*** ./src/app/pages/developers/developers.component.ts ***!
  \**********************************************************/
/*! exports provided: DevelopersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevelopersComponent", function() { return DevelopersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_developers_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/developers.service */ "RXH7");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _dashboard_components_avatar_url_avatar_url_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../dashboard/components/avatar-url/avatar-url.component */ "kMH7");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _utils_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/spinner/spinner.component */ "ij2n");












function DevelopersComponent_div_45_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const app_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", "/developers/applications/" + app_r5._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matTooltip", app_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r4.getAbbr(app_r5.name));
} }
function DevelopersComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DevelopersComponent_div_45_div_1_Template, 3, 3, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.applications);
} }
function DevelopersComponent_ng_template_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "spinner");
} }
class DevelopersComponent {
    constructor(router, service, userService) {
        this.router = router;
        this.service = service;
        this.userService = userService;
        this.applications = [];
        this.environment = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"];
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.applications = yield this.service.fetchAll();
        });
    }
    create() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const app = yield this.service.create();
                yield this.router.navigate([`/developers/applications/`, app === null || app === void 0 ? void 0 : app._id]);
            }
            catch (apiError) {
                alert(apiError.message);
            }
        });
    }
    getAbbr(name) {
        return name
            .split(' ')
            .map(n => n[0].toUpperCase())
            .slice(0, 3)
            .join('');
    }
}
DevelopersComponent.ɵfac = function DevelopersComponent_Factory(t) { return new (t || DevelopersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_developers_service__WEBPACK_IMPORTED_MODULE_4__["DevelopersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"])); };
DevelopersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DevelopersComponent, selectors: [["app-developers"]], decls: 48, vars: 6, consts: [[1, "row"], [1, "col-3"], [1, "developer-sidebar"], ["routerLink", "/developers", 1, "cursor-pointer", "my-5"], ["src", "/assets/img/icon.png", "alt", "Accord Icon"], [1, "p-2"], [1, "side-nav", "mt-3"], ["routerLinkActive", "active", "routerLink", "/developers", 1, "nav-link"], [1, "lni", "lni-code", "pt-2"], ["routerLinkActive", "active", "target", "#", 1, "nav-link", 3, "href"], [1, "lni", "lni-library-open", "pt-2"], [1, "col-8"], [1, "row", "mt-2"], [1, "col-10"], [1, "col-2"], ["mat-button", "", 1, "p-1", 3, "matMenuTriggerFor"], [3, "user"], [1, "pl-1"], ["menu", "matMenu"], ["routerLink", "/channels/@me", "mat-menu-item", ""], [1, "lni", "lni-cog"], ["routerLink", "/developers", "mat-menu-item", ""], [1, "lni", "lni-code"], ["routerLink", "/logout", "mat-menu-item", ""], [1, "lni", "lni-sign-out-alt"], [1, "applications"], [1, "mt-5"], ["matTooltip", "New Application", "mat-button", "", 1, "float-right", "round", "bg-primary-gradient", 3, "click"], [1, "lni", "lni-plus", "text-light", "pt-2"], [1, "lead"], ["class", "row pt-2", 4, "ngIf", "ngIfElse"], ["applicationsLoading", ""], [1, "row", "pt-2"], ["class", "col-sm-6 col-lg-3 my-2", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "col-sm-6", "col-lg-3", "my-2", 3, "routerLink"], [1, "icon", "rounded-lg", "cursor-pointer", "text-center", 3, "matTooltip"]], template: function DevelopersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "header", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Developer Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "nav", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Apps");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Docs");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "app-avatar-url", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "mat-menu", null, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, " Open ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, " Developers ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, " Logout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "header", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DevelopersComponent_Template_button_click_38_listener() { return ctx.create(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Applications");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "Manage bot applications in the Accord developer dashboard.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](45, DevelopersComponent_div_45_Template, 2, 1, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](46, DevelopersComponent_ng_template_46_Template, 1, 0, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](25);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx.environment.docsURL, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("user", ctx.userService.self);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.userService.self.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.applications)("ngIfElse", _r2);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuTrigger"], _dashboard_components_avatar_url_avatar_url_component__WEBPACK_IMPORTED_MODULE_8__["AvatarUrlComponent"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuItem"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__["MatTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _utils_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_11__["SpinnerComponent"]], styles: ["img[_ngcontent-%COMP%] {\n  height: 32px;\n}\n\n*[_ngcontent-%COMP%] {\n  overflow-y: hidden !important;\n}\n\na[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n\n.developer-sidebar[_ngcontent-%COMP%] {\n  background-color: var(--background-secondary);\n}\n\n.icon[_ngcontent-%COMP%] {\n  font-size: 64px;\n  color: var(--primary);\n  background-color: var(--background-tertiary);\n  overflow-x: hidden;\n  padding: 50px;\n}\n\n.applications[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 32px;\n  padding: 16px 24px;\n}\n\n.developer-sidebar[_ngcontent-%COMP%], .applications[_ngcontent-%COMP%] {\n  height: 100vh;\n  padding: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldmVsb3BlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDZDQUE2QztBQUMvQzs7QUFFQTtFQUNFLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsNENBQTRDO0VBQzVDLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLGFBQWE7RUFDYixhQUFhO0FBQ2YiLCJmaWxlIjoiZGV2ZWxvcGVycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcbiAgaGVpZ2h0OiAzMnB4O1xufVxuXG4qIHtcbiAgb3ZlcmZsb3cteTogaGlkZGVuICFpbXBvcnRhbnQ7XG59XG5cbmEge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uZGV2ZWxvcGVyLXNpZGViYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLXNlY29uZGFyeSk7XG59XG5cbi5pY29uIHtcbiAgZm9udC1zaXplOiA2NHB4O1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtdGVydGlhcnkpO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIHBhZGRpbmc6IDUwcHg7XG59XG5cbi5hcHBsaWNhdGlvbnMgYnV0dG9uIHtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBwYWRkaW5nOiAxNnB4IDI0cHg7XG59XG5cbi5kZXZlbG9wZXItc2lkZWJhcixcbi5hcHBsaWNhdGlvbnMge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBwYWRkaW5nOiAyNXB4O1xufSJdfQ== */"] });


/***/ }),

/***/ "cmOr":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/components/module-config.ts ***!
  \*******************************************************/
/*! exports provided: ModuleConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleConfig", function() { return ModuleConfig; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _save_changes_save_changes_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./save-changes/save-changes.component */ "qigX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_guild_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/guild.service */ "4bjJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _services_ws_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/ws.service */ "Swid");
/* harmony import */ var _services_log_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/log.service */ "iXKo");








class ModuleConfig {
    constructor(guildService, route, saveChanges, ws, log, router) {
        this.guildService = guildService;
        this.route = route;
        this.saveChanges = saveChanges;
        this.ws = ws;
        this.log = log;
        this.router = router;
    }
    get guildId() { return this.route.snapshot.paramMap.get('guildId'); }
    /**
     * Load all required data for the form, and hook events.
     */
    init() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.guild = this.guildService.getCached(this.guildId);
            this.originalGuild = Object.assign({}, this.guild);
            yield this.resetForm();
            this.valueChanges$ = this.form.valueChanges
                .subscribe(() => this.openSaveChanges());
        });
    }
    resetForm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.guild = Object.assign({}, this.originalGuild);
            this.form = yield this.buildForm(this.guild);
        });
    }
    openSaveChanges() {
        const snackBarRef = this.saveChanges._openedSnackBarRef;
        if (this.form.invalid || snackBarRef)
            return;
        this.saveChanges$ = this.saveChanges.openFromComponent(_save_changes_save_changes_component__WEBPACK_IMPORTED_MODULE_1__["SaveChangesComponent"]).afterOpened()
            .subscribe(() => {
            const component = this.saveChanges._openedSnackBarRef.instance;
            component.onSave.subscribe(() => this.submit());
            component.onReset.subscribe(() => this.reset());
        });
    }
    /**
     * Clean up subscriptions - to prevent memory leak.
     */
    ngOnDestroy() {
        var _a, _b;
        (_a = this.valueChanges$) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        (_b = this.saveChanges$) === null || _b === void 0 ? void 0 : _b.unsubscribe();
    }
    /** Send the form data to the API. */
    submit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                if (!this.form.valid)
                    return;
                yield this.ws.emitAsync('GUILD_UPDATE', {
                    guildId: this.guildId,
                    partialGuild: this.form.value,
                }, this);
            }
            catch (error) {
                yield this.log.error(error.message);
            }
        });
    }
    /**
     * Reset form values, and rebuild form.
     */
    reset() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.resetForm();
            this.guild = Object.assign({}, this.originalGuild);
            this.form.valueChanges
                .subscribe(() => this.openSaveChanges());
        });
    }
    deleteGuild() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const confirmation = confirm(`Please confirm that you wish to delete ${this.guild.name}.`);
            if (!confirmation)
                return;
            this.guildService.deleteGuild(this.guildId);
            yield this.router.navigate(['/channels/@me']);
            yield this.log.success();
        });
    }
    // input events
    add(event, array) {
        const { value, input } = event;
        if ((value || '').trim())
            array.push(value.trim());
        if (input)
            input.value = '';
        this.openSaveChanges();
    }
    remove(item, array) {
        const index = array.indexOf(item);
        if (index >= 0)
            array.splice(index, 1);
        this.openSaveChanges();
    }
    getChannel(id) {
        return this.guild.channels.find(c => c._id === id);
    }
}
ModuleConfig.ɵfac = function ModuleConfig_Factory(t) { return new (t || ModuleConfig)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_guild_service__WEBPACK_IMPORTED_MODULE_3__["GuildService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_ws_service__WEBPACK_IMPORTED_MODULE_6__["WSService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_log_service__WEBPACK_IMPORTED_MODULE_7__["LogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
ModuleConfig.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: ModuleConfig });


/***/ }),

/***/ "eepR":
/*!*****************************************************************************!*\
  !*** ./src/app/dashboard/guilds/guild-overview/guild-overview.component.ts ***!
  \*****************************************************************************/
/*! exports provided: GuildOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuildOverviewComponent", function() { return GuildOverviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_channel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/channel.service */ "0xJi");
/* harmony import */ var _services_guild_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/guild.service */ "4bjJ");
/* harmony import */ var _guild_sidebar_guild_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../guild-sidebar/guild-sidebar.component */ "G7KZ");
/* harmony import */ var _components_guild_navbar_guild_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/guild-navbar/guild-navbar.component */ "3fd3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _text_channel_text_channel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../text-channel/text-channel.component */ "SxxY");
/* harmony import */ var _member_list_member_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../member-list/member-list.component */ "Q3hq");










function GuildOverviewComponent_section_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Nothing here yet.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "No channels here, just emptiness.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class GuildOverviewComponent {
    constructor(route, channelService, guildService, router) {
        this.route = route;
        this.channelService = channelService;
        this.guildService = guildService;
        this.router = router;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.route.paramMap.subscribe((paramMap) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const guildId = paramMap.get('guildId');
                const channelId = paramMap.get('channelId');
                this.guild = this.guildService.getCached(guildId);
                this.activeChannel = yield this.channelService.getAsync(channelId);
                const defaultChannel = this.guild.channels.filter(c => c.type === 'TEXT')[0];
                if (defaultChannel && !channelId)
                    yield this.router.navigate([`/channels/${guildId}/${defaultChannel._id}`]);
            }));
        });
    }
}
GuildOverviewComponent.ɵfac = function GuildOverviewComponent_Factory(t) { return new (t || GuildOverviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_channel_service__WEBPACK_IMPORTED_MODULE_3__["ChannelService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_guild_service__WEBPACK_IMPORTED_MODULE_4__["GuildService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
GuildOverviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GuildOverviewComponent, selectors: [["app-guild-overview"]], decls: 10, vars: 7, consts: [[3, "activeChannel", "guild", "toggleMemberList"], [1, "row"], [1, "text-channel-container"], ["class", "jumbotron", 4, "ngIf"], ["textChannel", ""], [1, "col-xl-3", "col-lg-5", "col-md-7", 3, "hidden"], [3, "guild"], ["memberList", ""], [1, "jumbotron"], [1, "lead"], [1, "lni", "lni-directions", "mr-1"]], template: function GuildOverviewComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "guild-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-guild-navbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("toggleMemberList", function GuildOverviewComponent_Template_app_guild_navbar_toggleMemberList_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9); return _r2.isExpanded = !_r2.isExpanded; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, GuildOverviewComponent_section_4_Template, 8, 0, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "app-text-channel", null, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "app-member-list", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("activeChannel", _r1.channel)("guild", ctx.guild);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](_r2.isExpanded ? "col-lg-7 col-md-5 col-xl-9" : "col-12");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.activeChannel);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !_r2.isExpanded);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("guild", ctx.guild);
    } }, directives: [_guild_sidebar_guild_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["GuildSidebarComponent"], _components_guild_navbar_guild_navbar_component__WEBPACK_IMPORTED_MODULE_6__["GuildNavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _text_channel_text_channel_component__WEBPACK_IMPORTED_MODULE_8__["TextChannelComponent"], _member_list_member_list_component__WEBPACK_IMPORTED_MODULE_9__["MemberListComponent"]], styles: [".text-channel-container[_ngcontent-%COMP%] {\n  padding-right: 0;\n}\n.text-channel-container[_ngcontent-%COMP%]    + div[_ngcontent-%COMP%] {\n  padding-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImd1aWxkLW92ZXJ2aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJndWlsZC1vdmVydmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQtY2hhbm5lbC1jb250YWluZXIge1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xufVxuLnRleHQtY2hhbm5lbC1jb250YWluZXIgKyBkaXYge1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn0iXX0= */"] });


/***/ }),

/***/ "f1HG":
/*!********************************************************!*\
  !*** ./src/app/dashboard/me/dmchannel/dm.component.ts ***!
  \********************************************************/
/*! exports provided: DMComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DMComponent", function() { return DMComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_channel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/channel.service */ "0xJi");
/* harmony import */ var _me_sidebar_me_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../me-sidebar/me-sidebar.component */ "LlIw");
/* harmony import */ var _components_dashboard_navbar_dashboard_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/dashboard-navbar/dashboard-navbar.component */ "SKt3");
/* harmony import */ var _guilds_text_channel_text_channel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../guilds/text-channel/text-channel.component */ "SxxY");







class DMComponent {
    constructor(route, channelService) {
        this.route = route;
        this.channelService = channelService;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.route.paramMap.subscribe((paramMap) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const channelId = paramMap.get('channelId');
                this.activeChannel = this.channelService.getCached(channelId);
            }));
        });
    }
}
DMComponent.ɵfac = function DMComponent_Factory(t) { return new (t || DMComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_channel_service__WEBPACK_IMPORTED_MODULE_3__["ChannelService"])); };
DMComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DMComponent, selectors: [["app-dm"]], decls: 10, vars: 1, consts: [[1, "fas", "fa-at", "pr-2", "text-muted"], [1, "lni", "lni-plus", "mx-2"]], template: function DMComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "dashboard-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "dashboard-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "me");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "app-text-channel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_0_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((tmp_0_0 = ctx.channelService.getRecipient(ctx.activeChannel._id)) == null ? null : tmp_0_0.username);
    } }, directives: [_me_sidebar_me_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["MeSidebarComponent"], _components_dashboard_navbar_dashboard_navbar_component__WEBPACK_IMPORTED_MODULE_5__["DashboardNavbarComponent"], _guilds_text_channel_text_channel_component__WEBPACK_IMPORTED_MODULE_6__["TextChannelComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkbS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "fQow":
/*!***************************************************************************!*\
  !*** ./src/app/dashboard/components/channel-tab/channel-tab.component.ts ***!
  \***************************************************************************/
/*! exports provided: ChannelTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelTabComponent", function() { return ChannelTabComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_guild_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/guild.service */ "4bjJ");
/* harmony import */ var src_app_services_permissions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/permissions.service */ "tEUU");
/* harmony import */ var src_app_services_ping_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ping.service */ "TLdK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_app_services_ws_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/ws.service */ "Swid");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _guilds_voice_channel_voice_channel_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../guilds/voice-channel/voice-channel.component */ "kVLH");












function ChannelTabComponent_div_0_div_2_i_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 16);
} }
function ChannelTabComponent_div_0_div_2_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1) { return { "text-muted": a0, "text-warning": a1 }; };
function ChannelTabComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChannelTabComponent_div_0_div_2_Template_a_click_1_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ChannelTabComponent_div_0_div_2_i_3_Template, 1, 0, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ChannelTabComponent_div_0_div_2_span_7_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/channels/" + ctx_r4.guild._id + "/" + ctx_r4.channel._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.pings.isUnread(ctx_r4.channel._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](5, _c0, ctx_r4.userService.self.ignored.channelIds.includes(ctx_r4.channel._id), ctx_r4.pings.isUnread(ctx_r4.channel._id)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.channel.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.pings.isUnread(ctx_r4.channel._id));
} }
function ChannelTabComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "voice-channel", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChannelTabComponent_div_0_div_3_Template_voice_channel_click_1_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("channel", ctx_r5.channel)("guild", ctx_r5.guild);
} }
function ChannelTabComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("contextmenu", function ChannelTabComponent_div_0_Template_div_contextmenu_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.openMenu($event, _r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ChannelTabComponent_div_0_div_2_Template, 8, 8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ChannelTabComponent_div_0_div_3_Template, 2, 2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.channel.type === "TEXT");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.channel.type === "VOICE");
} }
function ChannelTabComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChannelTabComponent_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.delete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class ChannelTabComponent {
    constructor(guildService, perms, pings, router, userService, ws) {
        this.guildService = guildService;
        this.perms = perms;
        this.pings = pings;
        this.router = router;
        this.userService = userService;
        this.ws = ws;
    }
    get guild() {
        return this.guildService.getCached(this.channel.guildId);
    }
    openMenu(event, menuTrigger) {
        event.preventDefault();
        menuTrigger.menu.focusFirstItem('mouse');
        menuTrigger.openMenu();
    }
    delete() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const confirmation = confirm(`Are you sure you want to delete channel '${this.channel.name}'?\n` +
                `Messages here will also be deleted, and cannot be recovered.`
                    .trim());
            if (!confirmation)
                return;
            yield this.ws.emitAsync('CHANNEL_DELETE', { channelId: this.channel._id }, this);
            yield this.router.navigate([`/channels/${this.guild._id}`]);
        });
    }
}
ChannelTabComponent.ɵfac = function ChannelTabComponent_Factory(t) { return new (t || ChannelTabComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_guild_service__WEBPACK_IMPORTED_MODULE_2__["GuildService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_permissions_service__WEBPACK_IMPORTED_MODULE_3__["PermissionsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_ping_service__WEBPACK_IMPORTED_MODULE_4__["PingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_ws_service__WEBPACK_IMPORTED_MODULE_7__["WSService"])); };
ChannelTabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ChannelTabComponent, selectors: [["app-channel-tab"]], inputs: { channel: "channel" }, decls: 12, vars: 4, consts: [[3, "matMenuTriggerFor", "contextmenu", 4, "ngIf"], ["matMenuContent", ""], ["channelMenu", "matMenu"], [1, "p-2", "text-center"], [3, "click"], ["class", "text-danger", "mat-menu-item", "", 3, "click", 4, "ngIf"], [1, "p-2"], [1, "lni", "lni-dev"], [3, "matMenuTriggerFor", "contextmenu"], ["menuTrigger", "matMenuTrigger"], [4, "ngIf"], ["routerLinkActive", "active", 1, "nav-item", "nav-link", 3, "routerLink", "click"], [1, "float-right", "text-muted", "p-1"], ["matTooltip", "Unread Pings", "class", "lni lni-circle", 4, "ngIf"], [1, "fas", "fa-hashtag", "pr-1", 3, "ngClass"], ["class", "ml-2", 4, "ngIf"], ["matTooltip", "Unread Pings", 1, "lni", "lni-circle"], [1, "ml-2"], [1, "lni", "lni-circle", "text-danger"], [3, "channel", "guild", "click"], ["mat-menu-item", "", 1, "text-danger", 3, "click"], ["aria-hidden", "true", 1, "lni", "lni-trash"]], template: function ChannelTabComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ChannelTabComponent_div_0_Template, 4, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-menu", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChannelTabComponent_Template_div_click_5_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ChannelTabComponent_button_6_Template, 4, 0, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.perms.can(ctx.guild._id, "VIEW_CHANNELS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("#", ctx.channel.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.perms.can(ctx.guild._id, "MANAGE_CHANNELS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.channel._id, "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuTrigger"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltip"], _guilds_voice_channel_voice_channel_component__WEBPACK_IMPORTED_MODULE_11__["VoiceChannelComponent"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuItem"]], styles: [".channel-settings[_ngcontent-%COMP%] {\n  margin: 6px 10px 0 0;\n  opacity: 0;\n}\na[_ngcontent-%COMP%]:hover   .channel-settings[_ngcontent-%COMP%] {\n  transition: opacity .3s ease-in-out;\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYW5uZWwtdGFiLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBb0I7RUFDcEIsVUFBVTtBQUNaO0FBQ0E7RUFDRSxtQ0FBbUM7RUFDbkMsVUFBVTtBQUNaIiwiZmlsZSI6ImNoYW5uZWwtdGFiLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhbm5lbC1zZXR0aW5ncyB7XG4gIG1hcmdpbjogNnB4IDEwcHggMCAwO1xuICBvcGFjaXR5OiAwO1xufVxuYTpob3ZlciAuY2hhbm5lbC1zZXR0aW5ncyB7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjNzIGVhc2UtaW4tb3V0O1xuICBvcGFjaXR5OiAxO1xufSJdfQ== */"] });


/***/ }),

/***/ "g8CY":
/*!************************************************************!*\
  !*** ./src/app/utils/coming-soon/coming-soon.component.ts ***!
  \************************************************************/
/*! exports provided: ComingSoonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComingSoonComponent", function() { return ComingSoonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _cool_lighthouse_lighthouse_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../cool/lighthouse/lighthouse.component */ "kYtK");
/* harmony import */ var _waves_waves_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../waves/waves.component */ "y7Ka");
/* harmony import */ var _cool_submarine_submarine_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../cool/submarine/submarine.component */ "w4JF");





class ComingSoonComponent {
    constructor() { }
    ngOnInit() {
    }
}
ComingSoonComponent.ɵfac = function ComingSoonComponent_Factory(t) { return new (t || ComingSoonComponent)(); };
ComingSoonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ComingSoonComponent, selectors: [["app-coming-soon"]], decls: 10, vars: 0, consts: [[1, "main"], [1, "text-center"], [1, "text-secondary"]], template: function ComingSoonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-lighthouse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "waves");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Coming Soon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-submarine");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _cool_lighthouse_lighthouse_component__WEBPACK_IMPORTED_MODULE_2__["LighthouseComponent"], _waves_waves_component__WEBPACK_IMPORTED_MODULE_3__["WavesComponent"], _cool_submarine_submarine_component__WEBPACK_IMPORTED_MODULE_4__["SubmarineComponent"]], styles: ["h1[_ngcontent-%COMP%] {\n  z-index: 1;\n}\n\n.main[_ngcontent-%COMP%] {\n  margin-top: 27.5vh;\n  padding-top: 25vh;\n  height: 90vh;\n\n  background-image: \n    linear-gradient(\n      to bottom,\n      var(--background-secondary),\n      var(--background-tertiary) 50%\n    );\n}\n\nwaves[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 30vh;\n  width: 100vw;\n  z-index: -1;\n}\n\napp-lighthouse[_ngcontent-%COMP%] {\n  top: 7.5vh;\n  right: 50%;\n  transform: scale(.75);\n  position: absolute !important;\n\n  height: 100px;\n  width: 100px;\n}\n\napp-submarine[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 15vh;\n  transform: scale(0.5);\n\n  -webkit-animation: moveLeft 150s infinite;\n\n          animation: moveLeft 150s infinite;\n}\n\n@-webkit-keyframes moveLeft {\n  0% {\n    left: 90%;\n  }\n  100% {\n    left: 10%;\n  }\n}\n\n@keyframes moveLeft {\n  0% {\n    left: 90%;\n  }\n  100% {\n    left: 10%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbWluZy1zb29uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFlBQVk7O0VBRVo7Ozs7O0tBS0c7QUFDTDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFVBQVU7RUFDVixVQUFVO0VBQ1YscUJBQXFCO0VBQ3JCLDZCQUE2Qjs7RUFFN0IsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1oscUJBQXFCOztFQUVyQix5Q0FBaUM7O1VBQWpDLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFO0lBQ0UsU0FBUztFQUNYO0VBQ0E7SUFDRSxTQUFTO0VBQ1g7QUFDRjs7QUFQQTtFQUNFO0lBQ0UsU0FBUztFQUNYO0VBQ0E7SUFDRSxTQUFTO0VBQ1g7QUFDRiIsImZpbGUiOiJjb21pbmctc29vbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xuICB6LWluZGV4OiAxO1xufVxuXG4ubWFpbiB7XG4gIG1hcmdpbi10b3A6IDI3LjV2aDtcbiAgcGFkZGluZy10b3A6IDI1dmg7XG4gIGhlaWdodDogOTB2aDtcblxuICBiYWNrZ3JvdW5kLWltYWdlOiBcbiAgICBsaW5lYXItZ3JhZGllbnQoXG4gICAgICB0byBib3R0b20sXG4gICAgICB2YXIoLS1iYWNrZ3JvdW5kLXNlY29uZGFyeSksXG4gICAgICB2YXIoLS1iYWNrZ3JvdW5kLXRlcnRpYXJ5KSA1MCVcbiAgICApO1xufVxuXG53YXZlcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzMHZoO1xuICB3aWR0aDogMTAwdnc7XG4gIHotaW5kZXg6IC0xO1xufVxuXG5hcHAtbGlnaHRob3VzZSB7XG4gIHRvcDogNy41dmg7XG4gIHJpZ2h0OiA1MCU7XG4gIHRyYW5zZm9ybTogc2NhbGUoLjc1KTtcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG5cbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMHB4O1xufVxuXG5hcHAtc3VibWFyaW5lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDE1dmg7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcblxuICBhbmltYXRpb246IG1vdmVMZWZ0IDE1MHMgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgbW92ZUxlZnQge1xuICAwJSB7XG4gICAgbGVmdDogOTAlO1xuICB9XG4gIDEwMCUge1xuICAgIGxlZnQ6IDEwJTtcbiAgfVxufSJdfQ== */"] });


/***/ }),

/***/ "gP/n":
/*!**************************************************!*\
  !*** ./src/app/services/events/event.service.ts ***!
  \**************************************************/
/*! exports provided: EventService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventService", function() { return EventService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _my_event_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-event.service */ "pzsc");
/* harmony import */ var _channel_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./channel-event.service */ "5UOI");
/* harmony import */ var _guild_event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guild-event.service */ "BUNz");
/* harmony import */ var _ws_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ws.service */ "Swid");





class EventService {
    constructor(me, channels, guilds, ws) {
        this.me = me;
        this.channels = channels;
        this.guilds = guilds;
        this.ws = ws;
    }
    init() {
        this.ws
            .on('ADD_FRIEND', this.me.addFriend, this.me)
            .on('CHANNEL_CREATE', this.guilds.addChannel, this.guilds)
            .on('CHANNEL_DELETE', this.guilds.deleteChannel, this.guilds)
            .on('GUILD_DELETE', this.guilds.delete, this.guilds)
            .on('GUILD_JOIN', this.me.joinGuild, this.me)
            .on('GUILD_LEAVE', this.guilds.delete, this.guilds)
            .on('GUILD_MEMBER_ADD', this.guilds.addMember, this.guilds)
            .on('GUILD_MEMBER_UPDATE', this.guilds.updateMember, this.guilds)
            .on('GUILD_MEMBER_REMOVE', this.guilds.removeMember, this.guilds)
            .on('GUILD_ROLE_CREATE', this.guilds.createRole, this.guilds)
            .on('GUILD_ROLE_DELETE', this.guilds.deleteRole, this.guilds)
            .on('GUILD_ROLE_UPDATE', this.guilds.updateRole, this.guilds)
            .on('GUILD_UPDATE', this.guilds.update, this.guilds)
            .on('MESSAGE_CREATE', this.channels.addMessage, this.channels)
            .on('MESSAGE_UPDATE', this.channels.updateMessage, this.channels)
            .on('MESSAGE_DELETE', this.channels.deleteMessage, this.channels)
            .on('PING', this.channels.ping, this.channels)
            .on('PRESENCE_UPDATE', this.me.updatePresence, this.me)
            .on('REMOVE_FRIEND', this.me.updateFriends, this.me)
            .on('TYPING_START', this.channels.startTyping, this.channels)
            .on('USER_UPDATE', this.me.updateUser, this.me);
    }
}
EventService.ɵfac = function EventService_Factory(t) { return new (t || EventService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_my_event_service__WEBPACK_IMPORTED_MODULE_1__["MyEventService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_channel_event_service__WEBPACK_IMPORTED_MODULE_2__["ChannelEventService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_guild_event_service__WEBPACK_IMPORTED_MODULE_3__["GuildEventService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ws_service__WEBPACK_IMPORTED_MODULE_4__["WSService"])); };
EventService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EventService, factory: EventService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "gPlj":
/*!*****************************************!*\
  !*** ./src/app/pipes/truncated.pipe.ts ***!
  \*****************************************/
/*! exports provided: TruncatedPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruncatedPipe", function() { return TruncatedPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class TruncatedPipe {
    transform(words, max) {
        return words.substring(0, max) + '...';
    }
}
TruncatedPipe.ɵfac = function TruncatedPipe_Factory(t) { return new (t || TruncatedPipe)(); };
TruncatedPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "truncated", type: TruncatedPipe, pure: true });


/***/ }),

/***/ "h1rg":
/*!***********************************************************************!*\
  !*** ./src/app/dashboard/me/user-settings/user-settings.component.ts ***!
  \***********************************************************************/
/*! exports provided: UserSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSettingsComponent", function() { return UserSettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_dashboard_components_user_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dashboard/components/user-config */ "tya+");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var src_app_types_entity_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/types/entity-types */ "h8Xa");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! faker */ "NZy3");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/config */ "Vx+w");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var src_app_services_ws_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/ws.service */ "Swid");
/* harmony import */ var src_app_services_log_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/log.service */ "iXKo");
/* harmony import */ var src_app_services_theme_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/theme.service */ "WPWp");
/* harmony import */ var src_app_authentication_sign_up_username_validators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/authentication/sign-up/username.validators */ "IrsS");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_settings_sidebar_settings_sidebar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/settings-sidebar/settings-sidebar.component */ "qT/8");
/* harmony import */ var _components_avatar_url_avatar_url_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/avatar-url/avatar-url.component */ "kMH7");
/* harmony import */ var _messages_message_message_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../messages/message/message.component */ "3k1Y");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/input */ "qFsG");

























const _c0 = ["themeSelect"];
function UserSettingsComponent_app_settings_sidebar_0_form_8_mat_hint_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Checking");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function UserSettingsComponent_app_settings_sidebar_0_form_8_mat_error_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Username is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function UserSettingsComponent_app_settings_sidebar_0_form_8_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Username should be minimum ", ctx_r8.form.get("username").errors == null ? null : ctx_r8.form.get("username").errors.minlength.requiredLength, " characters.");
} }
function UserSettingsComponent_app_settings_sidebar_0_form_8_mat_error_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Username is already taken.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function UserSettingsComponent_app_settings_sidebar_0_form_8_mat_error_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Username should follow the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "username rules");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function UserSettingsComponent_app_settings_sidebar_0_form_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "form", 33, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "mat-form-field", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Avatar URL");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "mat-form-field", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, UserSettingsComponent_app_settings_sidebar_0_form_8_mat_hint_10_Template, 3, 0, "mat-hint", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, UserSettingsComponent_app_settings_sidebar_0_form_8_mat_error_11_Template, 2, 0, "mat-error", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, UserSettingsComponent_app_settings_sidebar_0_form_8_mat_error_12_Template, 2, 1, "mat-error", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, UserSettingsComponent_app_settings_sidebar_0_form_8_mat_error_13_Template, 2, 0, "mat-error", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, UserSettingsComponent_app_settings_sidebar_0_form_8_mat_error_14_Template, 5, 0, "mat-error", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx_r1.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.form.get("username").pending);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.form.get("username").errors == null ? null : ctx_r1.form.get("username").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.form.get("username").errors == null ? null : ctx_r1.form.get("username").errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.form.get("username").errors == null ? null : ctx_r1.form.get("username").errors.shouldBeUnique);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.form.get("username").errors == null ? null : ctx_r1.form.get("username").errors.pattern);
} }
function UserSettingsComponent_app_settings_sidebar_0_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function UserSettingsComponent_app_settings_sidebar_0_div_15_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13); const name_r11 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r12.setAvatar(name_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const name_r11 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", ctx_r2.environment.endpoint + "/avatars/" + name_r11 + ".png", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"])("alt", name_r11);
} }
function UserSettingsComponent_app_settings_sidebar_0_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-settings-sidebar", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "h5", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "User Overview");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "app-avatar-url", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, UserSettingsComponent_app_settings_sidebar_0_form_8_Template, 15, 6, "form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "Choose an Avatar");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, UserSettingsComponent_app_settings_sidebar_0_div_15_Template, 2, 2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "Message Preview");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](19, "message", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](20, "message", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](21, "message", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](22, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "mat-form-field", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "Theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "mat-select", 19, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selectionChange", function UserSettingsComponent_app_settings_sidebar_0_Template_mat_select_selectionChange_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r15); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](29); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r14.themes.changeTheme(_r3.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31, "Chocolate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33, "Clone");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35, "Cosmic");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "mat-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37, "Discord");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "mat-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39, "Horizon (Default)");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "mat-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41, "Ionic");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](43, "Pain");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](45, "Twilight");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](49, "Enable Sound Effects");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "mat-checkbox", 31, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("input", function UserSettingsComponent_app_settings_sidebar_0_Template_mat_checkbox_input_50_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r15); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](51); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r16.toggleSounds(_r4.checked); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("user", ctx_r0.avatarUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r0.avatarNames);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("message", ctx_r0.previewMessages[0])("avatarURL", ctx_r0.form.get("avatarURL").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("message", ctx_r0.previewMessages[1])("isExtra", true)("avatarURL", ctx_r0.form.get("avatarURL").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("message", ctx_r0.previewMessages[2])("avatarURL", ctx_r0.form.get("avatarURL").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r0.currentTheme);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx_r0.sfxEnabled);
} }
class UserSettingsComponent extends src_app_dashboard_components_user_config__WEBPACK_IMPORTED_MODULE_2__["UserConfig"] {
    constructor(route, router, userService, snackbar, ws, log, themes, usernameValidators) {
        super(userService, route, snackbar, ws, log, router);
        this.themes = themes;
        this.usernameValidators = usernameValidators;
        this.environment = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"];
        this.previewMessages = [];
        this.avatarNames = [
            'avatar_aqua',
            'avatar_coffee',
            'avatar_fire',
            'avatar_gold',
            'avatar_grey',
            'avatar_rainbow',
            'avatar_sky',
            'avatar_tree',
        ];
    }
    get avatarUser() {
        return {
            avatarURL: this.form.get('avatarURL').value,
            username: this.user.username,
        };
    }
    get currentTheme() {
        return localStorage.getItem('theme');
    }
    get sfxEnabled() {
        return Object(src_app_config__WEBPACK_IMPORTED_MODULE_6__["getConfig"])('sfxEnabled');
    }
    ngAfterViewInit() {
        const _super = Object.create(null, {
            init: { get: () => super.init }
        });
        var _a, _b;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield _super.init.call(this);
            const messageCount = 3;
            for (let i = 0; i < messageCount; i++)
                this.previewMessages.push({
                    authorId: this.user._id,
                    content: faker__WEBPACK_IMPORTED_MODULE_5___default.a.lorem.sentence(),
                    channelId: '',
                    createdAt: new Date(),
                });
            (_a = this.themeSelect) === null || _a === void 0 ? void 0 : _a.writeValue((_b = localStorage
                .getItem('theme')) !== null && _b !== void 0 ? _b : this.themes.defaultTheme);
            this.themes.updateTheme();
        });
    }
    buildForm(user) {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            avatarURL: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](user.avatarURL, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ]),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](user.username, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(32),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(src_app_types_entity_types__WEBPACK_IMPORTED_MODULE_4__["patterns"].username),
            ], [this.usernameValidators.shouldBeUnique.bind(this.usernameValidators)]),
        });
    }
    toggleSounds(enabled) {
        Object(src_app_config__WEBPACK_IMPORTED_MODULE_6__["setConfig"])('sfxEnabled', enabled);
    }
    setAvatar(name) {
        this.form
            .get('avatarURL')
            .setValue(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].endpoint}/avatars/${name}.png`);
    }
}
UserSettingsComponent.ɵfac = function UserSettingsComponent_Factory(t) { return new (t || UserSettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_ws_service__WEBPACK_IMPORTED_MODULE_11__["WSService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_log_service__WEBPACK_IMPORTED_MODULE_12__["LogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_theme_service__WEBPACK_IMPORTED_MODULE_13__["ThemeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_authentication_sign_up_username_validators__WEBPACK_IMPORTED_MODULE_14__["UsernameValidators"])); };
UserSettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: UserSettingsComponent, selectors: [["app-user-settings"]], viewQuery: function UserSettingsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.themeSelect = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [["tabType", "user", 4, "ngIf"], ["tabType", "user"], [1, "content"], [1, "mb-4"], [1, "row"], [1, "col-xl-6", "col-12"], ["routerLinkActive", "active", 1, "user-icon", "round"], ["size", "128px", 1, "pl-2", "pb-3", "ml-4", "mt-3", 3, "user"], [3, "formGroup", 4, "ngIf"], [1, "col-lg-6", "col-12"], [1, "avatars", "rounded", "p-3"], [1, "col-12"], [1, "pl-2"], ["class", "col-xl-3 col-sm-4 col-12", 4, "ngFor", "ngForOf"], [1, "col-lg-6", "col-12", "mt-4"], [3, "message", "avatarURL"], [3, "message", "isExtra", "avatarURL"], [1, "col-lg-3", "col-md-4", "col-6"], ["appearance", "outline", 1, "ml-3", "m-2"], [3, "value", "selectionChange"], ["themeSelect", ""], ["value", "CHOCOLATE"], ["value", "CLONE"], ["value", "COSMIC"], ["value", "DISCORD"], ["value", "HORIZON"], ["value", "IONIC", "selected", ""], ["value", "PAIN"], ["value", "TWILIGHT"], [1, "pt-4"], ["for", "sfxEnabled"], ["id", "sfxEnabled", 1, "ml-2", 3, "checked", "input"], ["sfxEnabledInput", ""], [3, "formGroup"], ["f", "ngForm"], ["appearance", "outline", 1, "ml-5"], ["formControlName", "avatarURL", "type", "url", "matInput", ""], ["formControlName", "username", "type", "text", "matInput", ""], [4, "ngIf"], [1, "lni", "lni-circle-notch", "fa-spin"], ["routerLink", "/docs/usernames"], [1, "col-xl-3", "col-sm-4", "col-12"], [3, "src", "alt", "click"]], template: function UserSettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, UserSettingsComponent_app_settings_sidebar_0_Template, 52, 12, "app-settings-sidebar", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.user);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], _components_settings_sidebar_settings_sidebar_component__WEBPACK_IMPORTED_MODULE_16__["SettingsSidebarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkActive"], _components_avatar_url_avatar_url_component__WEBPACK_IMPORTED_MODULE_17__["AvatarUrlComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"], _messages_message_message_component__WEBPACK_IMPORTED_MODULE_18__["MessageComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MatOption"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__["MatCheckbox"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_23__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatHint"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatError"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"]], styles: [".avatars[_ngcontent-%COMP%] {\r\n  max-width: 385px;\r\n  background-color: var(--background-secondary);\r\n}\r\n.avatars[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  border-radius: 10px;\r\n  max-height: 64px;\r\n  margin: 5px;\r\n\r\n  cursor: pointer;\r\n  transition: 0.3s box-shadow ease-in-out;\r\n}\r\n.avatars[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\r\n  box-shadow: var(--primary) 0px 0px 3px 3px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItc2V0dGluZ3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQiw2Q0FBNkM7QUFDL0M7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsV0FBVzs7RUFFWCxlQUFlO0VBQ2YsdUNBQXVDO0FBQ3pDO0FBQ0E7RUFDRSwwQ0FBMEM7QUFDNUMiLCJmaWxlIjoidXNlci1zZXR0aW5ncy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF2YXRhcnMge1xyXG4gIG1heC13aWR0aDogMzg1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1zZWNvbmRhcnkpO1xyXG59XHJcbi5hdmF0YXJzIGltZyB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBtYXgtaGVpZ2h0OiA2NHB4O1xyXG4gIG1hcmdpbjogNXB4O1xyXG5cclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogMC4zcyBib3gtc2hhZG93IGVhc2UtaW4tb3V0O1xyXG59XHJcbi5hdmF0YXJzIGltZzpob3ZlciB7XHJcbiAgYm94LXNoYWRvdzogdmFyKC0tcHJpbWFyeSkgMHB4IDBweCAzcHggM3B4O1xyXG59Il19 */"] });


/***/ }),

/***/ "h8Xa":
/*!***************************************!*\
  !*** ./src/app/types/entity-types.ts ***!
  \***************************************/
/*! exports provided: PermissionTypes, UserTypes, patterns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionTypes", function() { return PermissionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserTypes", function() { return UserTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patterns", function() { return patterns; });
var PermissionTypes;
(function (PermissionTypes) {
    let General;
    (function (General) {
        General[General["VIEW_CHANNELS"] = 1024] = "VIEW_CHANNELS";
        General[General["MANAGE_NICKNAMES"] = 512] = "MANAGE_NICKNAMES";
        General[General["CHANGE_NICKNAME"] = 256] = "CHANGE_NICKNAME";
        General[General["CREATE_INVITE"] = 128] = "CREATE_INVITE";
        General[General["KICK_MEMBERS"] = 64] = "KICK_MEMBERS";
        General[General["BAN_MEMBERS"] = 32] = "BAN_MEMBERS";
        General[General["MANAGE_CHANNELS"] = 16] = "MANAGE_CHANNELS";
        General[General["MANAGE_ROLES"] = 8] = "MANAGE_ROLES";
        General[General["MANAGE_GUILD"] = 4] = "MANAGE_GUILD";
        General[General["VIEW_AUDIT_LOG"] = 2] = "VIEW_AUDIT_LOG";
        General[General["ADMINISTRATOR"] = 1] = "ADMINISTRATOR";
    })(General = PermissionTypes.General || (PermissionTypes.General = {}));
    let Text;
    (function (Text) {
        Text[Text["ADD_REACTIONS"] = 32768] = "ADD_REACTIONS";
        Text[Text["MENTION_EVERYONE"] = 16384] = "MENTION_EVERYONE";
        Text[Text["READ_MESSAGES"] = 8192] = "READ_MESSAGES";
        Text[Text["MANAGE_MESSAGES"] = 4096] = "MANAGE_MESSAGES";
        Text[Text["SEND_MESSAGES"] = 2048] = "SEND_MESSAGES";
    })(Text = PermissionTypes.Text || (PermissionTypes.Text = {}));
    let Voice;
    (function (Voice) {
        Voice[Voice["MOVE_MEMBERS"] = 262144] = "MOVE_MEMBERS";
        Voice[Voice["MUTE_MEMBERS"] = 131072] = "MUTE_MEMBERS";
        Voice[Voice["SPEAK"] = 65536] = "SPEAK";
        Voice[Voice["CONNECT"] = 32768] = "CONNECT";
    })(Voice = PermissionTypes.Voice || (PermissionTypes.Voice = {}));
    PermissionTypes.All = Object.assign(Object.assign(Object.assign({}, General), Text), Voice);
    PermissionTypes.defaultPermissions = PermissionTypes.General.VIEW_CHANNELS
        | PermissionTypes.General.CREATE_INVITE
        | PermissionTypes.Text.SEND_MESSAGES
        | PermissionTypes.Text.READ_MESSAGES
        | PermissionTypes.Text.ADD_REACTIONS
        | PermissionTypes.Voice.CONNECT
        | PermissionTypes.Voice.SPEAK;
})(PermissionTypes || (PermissionTypes = {}));
var UserTypes;
(function (UserTypes) {
    class Ignored {
        constructor() {
            this.channelIds = [];
            this.guildIds = [];
            this.userIds = [];
        }
    }
    UserTypes.Ignored = Ignored;
})(UserTypes || (UserTypes = {}));
const patterns = {
    email: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
    hexColor: /^#(?:[0-9a-fA-F]{3}){1,2}$/,
    password: /(?=.*[a-zA-Z0-9!@#$%^&*])/,
    snowflake: /^\d{18}$/,
    status: /^ONLINE|^BUSY$|^AFK$|^OFFLINE$/,
    textChannelName: /^[A-Za-z\-\d]{2,32}$/,
    username: /(^(?! |^everyone$|^here$|^me$|^someone$|^discordtag$)[A-Za-z\d\-\_]{2,32}(?<! )$)/,
};


/***/ }),

/***/ "hZP9":
/*!***********************************************!*\
  !*** ./src/app/services/user-auth.service.ts ***!
  \***********************************************/
/*! exports provided: UserAuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAuthService", function() { return UserAuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/angular-jwt */ "Nm8O");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user.service */ "qfBg");
/* harmony import */ var _ws_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ws.service */ "Swid");







class UserAuthService {
    constructor(http, userService, ws) {
        this.http = http;
        this.userService = userService;
        this.ws = ws;
        this.endpoint = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].endpoint;
    }
    get loggedIn() {
        const expired = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__["JwtHelperService"]().isTokenExpired(this.key);
        return this.userService.self && !expired;
    }
    get key() {
        return localStorage.getItem('key');
    }
    get headers() {
        return { headers: { 'Authorization': `Bearer ${this.key}` } };
    }
    signUp(user) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.http.post(`${this.endpoint}/users`, user).toPromise();
            if (res) {
                localStorage.setItem('key', res);
                yield this.userService.updateSelf();
            }
            return Boolean(res);
        });
    }
    login(user) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.http
                .post(`${this.endpoint}/login`, user)
                .toPromise();
            if (typeof res !== 'string')
                return res;
            localStorage.setItem('key', res);
            yield this.userService.init();
        });
    }
    verify(code) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.http
                .get(`${this.endpoint}/verify-code?code=${code}`)
                .toPromise();
            if (typeof res !== 'string')
                throw res.message;
            return res;
        });
    }
    sendVerifyEmail(email) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.http.get(`${this.endpoint}/send-verify-email?email=${email}`, this.headers).toPromise();
            return 'verify' in res;
        });
    }
    changePassword(email, oldPassword, newPassword) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.http
                .post(`${this.endpoint}/change-password`, {
                email,
                oldPassword,
                newPassword,
            }, this.headers)
                .toPromise();
            localStorage.setItem('key', res);
            return true;
        });
    }
    ready() {
        return this.ws.emitAsync('READY', { key: localStorage.getItem('key') }, this);
    }
}
UserAuthService.ɵfac = function UserAuthService_Factory(t) { return new (t || UserAuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ws_service__WEBPACK_IMPORTED_MODULE_6__["WSService"])); };
UserAuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: UserAuthService, factory: UserAuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "hrlM":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "qfBg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ "STbY");







function NavbarComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Login ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function NavbarComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Open");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class NavbarComponent {
    constructor(userService) {
        this.userService = userService;
        this.githubURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].githubURL;
    }
    get user() { return this.userService.self; }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.userService.init();
        });
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["navbar"]], decls: 32, vars: 2, consts: [[1, "navbar", "navbar-expand-md"], ["routerLink", "/", 1, "navbar-brand"], [1, "text-light"], [1, "text-tertiary"], [1, "text-secondary"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "lni", "lni-menu"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "nav", "navbar-nav"], ["routerLink", "/docs", "routerLinkActive", "active", 1, "nav-item", "nav-link"], ["aria-hidden", "true", 1, "lni", "lni-library"], [1, "nav", "navbar-nav", "ml-auto"], [1, "d-md-none", "d-block", "mt-2"], [4, "ngIf"], ["menu", "matMenu"], ["routerLink", "/channels/@me", "mat-menu-item", ""], [1, "lni", "lni-cog"], ["routerLink", "/developers", "mat-menu-item", ""], [1, "lni", "lni-code"], ["routerLink", "/logout", "mat-menu-item", ""], [1, "lni", "lni-sign-out-alt"], ["routerLink", "/login", 1, "nav-item", "nav-link"], ["aria-hidden", "true", 1, "lni", "lni-user"], ["routerLink", "/channels/@me", 1, "nav-item", "nav-link", "bg-primary", "text-light", "rounded", "cursor-pointer", "mr-3"], ["aria-hidden", "true", 1, "lni", "lni-chevron-right-circle"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "accord");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "app");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " Docs ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, NavbarComponent_div_18_Template, 4, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, NavbarComponent_div_19_Template, 5, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "mat-menu", null, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, " Open ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, " Developers ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, " Logout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.user);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenu"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuItem"]], styles: ["h1[_ngcontent-%COMP%] {\r\n  font-size: 32px;\r\n}\r\n\r\nnav.navbar[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n  color: var(--font);\r\n}\r\n\r\nimg[_ngcontent-%COMP%]:not(.icon) {\r\n  width: 32px;\r\n  height: auto;\r\n}\r\n\r\nimg.icon[_ngcontent-%COMP%] {\r\n  height: 32px;\r\n}\r\n\r\n.dropdown-menu[_ngcontent-%COMP%] {\r\n  background: var(--background-secondary);\r\n}\r\n\r\n.dropdown-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {  \r\n  color: var(--font);\r\n}\r\n\r\n.dropdown-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  background-color: var(--background-primary);\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n  font-weight: 800;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUNBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcclxuICBmb250LXNpemU6IDMycHg7XHJcbn1cclxuXHJcbm5hdi5uYXZiYXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiB2YXIoLS1mb250KTtcclxufVxyXG5cclxuaW1nOm5vdCguaWNvbikge1xyXG4gIHdpZHRoOiAzMnB4O1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG5pbWcuaWNvbiB7XHJcbiAgaGVpZ2h0OiAzMnB4O1xyXG59XHJcblxyXG4uZHJvcGRvd24tbWVudSB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1zZWNvbmRhcnkpO1xyXG59XHJcblxyXG4uZHJvcGRvd24tbWVudSBhIHsgIFxyXG4gIGNvbG9yOiB2YXIoLS1mb250KTtcclxufVxyXG5cclxuLmRyb3Bkb3duLW1lbnUgYTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1wcmltYXJ5KTtcclxufVxyXG5cclxuYSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "iXKo":
/*!*****************************************!*\
  !*** ./src/app/services/log.service.ts ***!
  \*****************************************/
/*! exports provided: LogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogService", function() { return LogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _sound_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sound.service */ "V9p5");



class LogService {
    constructor(sounds) {
        this.sounds = sounds;
        this.hidePopupMs = 3 * 1000;
    }
    get hhMMSS() {
        return new Date()
            .toTimeString()
            .split(' ')[0];
    }
    info(message, src) {
        var _a;
        console.log(`%c[${this.hhMMSS}]`, 'color: green', `[${(_a = src === null || src === void 0 ? void 0 : src.toUpperCase()) !== null && _a !== void 0 ? _a : '???'}]`, `${message}`);
    }
    warning(message, src) {
        var _a;
        console.log(`%c[${this.hhMMSS}]`, 'color: yellow', `[${(_a = src === null || src === void 0 ? void 0 : src.toUpperCase()) !== null && _a !== void 0 ? _a : '???'}]`, `${message}`);
    }
    success(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (message) {
                const popup = document.querySelector('#successPopup');
                popup.removeAttribute('hidden');
                popup.innerText = message;
                setTimeout(() => popup.toggleAttribute('hidden'), this.hidePopupMs);
            }
            yield this.sounds.success();
        });
    }
    error(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (message) {
                const popup = document.querySelector('#errorPopup');
                popup.removeAttribute('hidden');
                popup.innerText = message;
                setTimeout(() => popup.toggleAttribute('hidden'), this.hidePopupMs);
            }
            yield this.sounds.error();
        });
    }
    consoleWarning() {
        console.log(`%cAttention!`, `color: red; font-size: 32px; font-weight: 900;`);
        console.log(`%cIf someone told you to paste something in this console, it's probably against the TOS and could steal your account.`, `color: darkred; font-size: 16px; font-weight: 700;`);
    }
}
LogService.ɵfac = function LogService_Factory(t) { return new (t || LogService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_sound_service__WEBPACK_IMPORTED_MODULE_2__["SoundService"])); };
LogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LogService, factory: LogService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "ij2n":
/*!****************************************************!*\
  !*** ./src/app/utils/spinner/spinner.component.ts ***!
  \****************************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SpinnerComponent {
    constructor() { }
    ngOnInit() {
    }
}
SpinnerComponent.ɵfac = function SpinnerComponent_Factory(t) { return new (t || SpinnerComponent)(); };
SpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpinnerComponent, selectors: [["spinner"]], decls: 6, vars: 0, consts: [["id", "spinner", 1, "text-center"]], template: function SpinnerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".spinner[_ngcontent-%COMP%] {\r\n    width: 40px;\r\n    height: 40px;\r\n    border-radius: 5px;\r\n    background-color: var(--font);\r\n\r\n    margin: 100px auto;\r\n    -webkit-animation: sk-rotateplane 1.2s infinite ease-in-out;\r\n    animation: sk-rotateplane 1.2s infinite ease-in-out;\r\n}\r\n@-webkit-keyframes sk-rotateplane {\r\n    0% { -webkit-transform: perspective(120px) }\r\n    50% { -webkit-transform: perspective(120px) rotateY(180deg) }\r\n    100% { -webkit-transform: perspective(120px) rotateY(180deg)  rotateX(180deg) }\r\n}\r\n@keyframes sk-rotateplane {\r\n    0% { \r\n        transform: perspective(120px) rotateX(0deg) rotateY(0deg);\r\n        -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg) \r\n    } 50% { \r\n        transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\r\n        -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg) \r\n    } 100% { \r\n        transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\r\n        -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\r\n    }\r\n}\r\n*[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\nbody[_ngcontent-%COMP%], html[_ngcontent-%COMP%] {\r\n    margin: 10px auto;\r\n    text-align: center;\r\n    background: #1c1c1d;\r\n}\r\n*[_ngcontent-%COMP%] {\r\n    color: #666;\r\n}\r\nspan[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    height: 15px;\r\n    width: 15px;\r\n    background: #2FAC9B;\r\n    border-radius: 0px;\r\n}\r\n.border-radius[_ngcontent-%COMP%] {\r\n    border-radius: 500px;\r\n}\r\n#spinner[_ngcontent-%COMP%] {\r\n    margin-bottom: 30px;\r\n}\r\n#spinner[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1) {\r\n    -webkit-animation: rotateX 2s 0.1s infinite cubic-bezier(0.650,0.030,0.735,0.045);\r\n            animation: rotateX 2s 0.1s infinite cubic-bezier(0.650,0.030,0.735,0.045);\r\n}\r\n#spinner[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\r\n    -webkit-animation: rotateX 2s 0.2s infinite cubic-bezier(0.650,0.030,0.735,0.045);\r\n            animation: rotateX 2s 0.2s infinite cubic-bezier(0.650,0.030,0.735,0.045);\r\n}\r\n#spinner[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\r\n    -webkit-animation: rotateX 2s 0.3s infinite cubic-bezier(0.650,0.030,0.735,0.045);\r\n            animation: rotateX 2s 0.3s infinite cubic-bezier(0.650,0.030,0.735,0.045);\r\n}\r\n#spinner[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(4) {\r\n    -webkit-animation: rotateX 2s 0.4s infinite cubic-bezier(0.650,0.030,0.735,0.045);\r\n            animation: rotateX 2s 0.4s infinite cubic-bezier(0.650,0.030,0.735,0.045);\r\n}\r\n#spinner[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(5) {\r\n    -webkit-animation: rotateX 2s 0.5s infinite cubic-bezier(0.650,0.030,0.735,0.045);\r\n            animation: rotateX 2s 0.5s infinite cubic-bezier(0.650,0.030,0.735,0.045);\r\n}\r\n@-webkit-keyframes scale {\r\n    0% {\r\n        transform: scale(0.0);\r\n   }\r\n    25% {\r\n        transform: scale(0.9,0.9);\r\n        background: #93e1d7;\r\n   }\r\n    50% {\r\n        transform: scale(1,1);\r\n        margin: 0 3px;\r\n        background: #2FAC9B;\r\n   }\r\n    100% {\r\n        transform: scale(0.0);\r\n   }\r\n}\r\n@keyframes scale {\r\n    0% {\r\n        transform: scale(0.0);\r\n   }\r\n    25% {\r\n        transform: scale(0.9,0.9);\r\n        background: #93e1d7;\r\n   }\r\n    50% {\r\n        transform: scale(1,1);\r\n        margin: 0 3px;\r\n        background: #2FAC9B;\r\n   }\r\n    100% {\r\n        transform: scale(0.0);\r\n   }\r\n}\r\n@-webkit-keyframes rotateY {\r\n    0% {\r\n        transform: rotateY(0deg);\r\n   }\r\n    50% {\r\n        transform: rotateY(90deg);\r\n        background: #93e1d7;\r\n   }\r\n    100% {\r\n        transform: rotateY(0deg);\r\n   }\r\n}\r\n@keyframes rotateY {\r\n    0% {\r\n        transform: rotateY(0deg);\r\n   }\r\n    50% {\r\n        transform: rotateY(90deg);\r\n        background: #93e1d7;\r\n   }\r\n    100% {\r\n        transform: rotateY(0deg);\r\n   }\r\n}\r\n@-webkit-keyframes rotateX {\r\n    0% {\r\n        transform: rotateX(0deg);\r\n   }\r\n    50% {\r\n        transform: rotateX(90deg) scale(0.5,0.5);\r\n        background: #93e1d7;\r\n   }\r\n    100% {\r\n        transform: rotateX(0deg);\r\n   }\r\n}\r\n@keyframes rotateX {\r\n    0% {\r\n        transform: rotateX(0deg);\r\n   }\r\n    50% {\r\n        transform: rotateX(90deg) scale(0.5,0.5);\r\n        background: #93e1d7;\r\n   }\r\n    100% {\r\n        transform: rotateX(0deg);\r\n   }\r\n}\r\n@-webkit-keyframes push {\r\n    0% {\r\n        transform: translateX(0px) scale(0.9,0.6);\r\n   }\r\n    50% {\r\n        transform: translateY(-20px) scale(0.7,1.1);\r\n        background: #6bd6c8;\r\n   }\r\n    100% {\r\n        transform: translateX(0px) scale(0.9,0.6);\r\n   }\r\n}\r\n@keyframes push {\r\n    0% {\r\n        transform: translateX(0px) scale(0.9,0.6);\r\n   }\r\n    50% {\r\n        transform: translateY(-20px) scale(0.7,1.1);\r\n        background: #6bd6c8;\r\n   }\r\n    100% {\r\n        transform: translateX(0px) scale(0.9,0.6);\r\n   }\r\n}\r\n@-webkit-keyframes rotateZ {\r\n    0% {\r\n        transform: rotateZ(-20deg);\r\n   }\r\n    50% {\r\n        transform: rotateZ(20deg) scaleY(1.2);\r\n        background: #6bd6c8;\r\n   }\r\n    100% {\r\n        transform: rotateZ(-20deg);\r\n   }\r\n}\r\n@keyframes rotateZ {\r\n    0% {\r\n        transform: rotateZ(-20deg);\r\n   }\r\n    50% {\r\n        transform: rotateZ(20deg) scaleY(1.2);\r\n        background: #6bd6c8;\r\n   }\r\n    100% {\r\n        transform: rotateZ(-20deg);\r\n   }\r\n}\r\n@-webkit-keyframes cuve {\r\n    0% {\r\n        transform: rotateY(-90deg) perspective(50px);\r\n        background: #195c53;\r\n   }\r\n    50% {\r\n        transform: rotateY(0deg);\r\n        background: #6bd6c8;\r\n   }\r\n    100% {\r\n        transform: rotateY(90deg) perspective(50px);\r\n        transform-origin: 100% 50%;\r\n        background: #195c53;\r\n   }\r\n}\r\n@keyframes cuve {\r\n    0% {\r\n        transform: rotateY(-90deg) perspective(50px);\r\n        background: #195c53;\r\n   }\r\n    50% {\r\n        transform: rotateY(0deg);\r\n        background: #6bd6c8;\r\n   }\r\n    100% {\r\n        transform: rotateY(90deg) perspective(50px);\r\n        transform-origin: 100% 50%;\r\n        background: #195c53;\r\n   }\r\n}\r\n@-webkit-keyframes temp {\r\n    50% {\r\n        transform: scale(1,5);\r\n        background: #195c53;\r\n   }\r\n}\r\n@keyframes temp {\r\n    50% {\r\n        transform: scale(1,5);\r\n        background: #195c53;\r\n   }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwaW5uZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxtREFBbUQ7QUFDbkQ7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQiw2QkFBNkI7O0lBRTdCLGtCQUFrQjtJQUNsQiwyREFBMkQ7SUFDM0QsbURBQW1EO0FBQ3ZEO0FBRUE7SUFDSSxLQUFLLHNDQUFzQztJQUMzQyxNQUFNLHNEQUFzRDtJQUM1RCxPQUFPLHVFQUF1RTtBQUNsRjtBQUVBO0lBQ0k7UUFDSSx5REFBeUQ7UUFDekQ7SUFDSixFQUFFO1FBQ0UsOERBQThEO1FBQzlEO0lBQ0osRUFBRTtRQUNFLGlFQUFpRTtRQUNqRSx5RUFBeUU7SUFDN0U7QUFDSjtBQUNBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osV0FBVztJQUNYLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxpRkFBeUU7WUFBekUseUVBQXlFO0FBQzdFO0FBQ0E7SUFDSSxpRkFBeUU7WUFBekUseUVBQXlFO0FBQzdFO0FBQ0E7SUFDSSxpRkFBeUU7WUFBekUseUVBQXlFO0FBQzdFO0FBQ0E7SUFDSSxpRkFBeUU7WUFBekUseUVBQXlFO0FBQzdFO0FBQ0E7SUFDSSxpRkFBeUU7WUFBekUseUVBQXlFO0FBQzdFO0FBRUE7SUFDSTtRQUNJLHFCQUFxQjtHQUMxQjtJQUNDO1FBQ0kseUJBQXlCO1FBQ3pCLG1CQUFtQjtHQUN4QjtJQUNDO1FBQ0kscUJBQXFCO1FBQ3JCLGFBQWE7UUFDYixtQkFBbUI7R0FDeEI7SUFDQztRQUNJLHFCQUFxQjtHQUMxQjtBQUNIO0FBaEJBO0lBQ0k7UUFDSSxxQkFBcUI7R0FDMUI7SUFDQztRQUNJLHlCQUF5QjtRQUN6QixtQkFBbUI7R0FDeEI7SUFDQztRQUNJLHFCQUFxQjtRQUNyQixhQUFhO1FBQ2IsbUJBQW1CO0dBQ3hCO0lBQ0M7UUFDSSxxQkFBcUI7R0FDMUI7QUFDSDtBQUNBO0lBQ0k7UUFDSSx3QkFBd0I7R0FDN0I7SUFDQztRQUNJLHlCQUF5QjtRQUN6QixtQkFBbUI7R0FDeEI7SUFDQztRQUNJLHdCQUF3QjtHQUM3QjtBQUNIO0FBWEE7SUFDSTtRQUNJLHdCQUF3QjtHQUM3QjtJQUNDO1FBQ0kseUJBQXlCO1FBQ3pCLG1CQUFtQjtHQUN4QjtJQUNDO1FBQ0ksd0JBQXdCO0dBQzdCO0FBQ0g7QUFDQTtJQUNJO1FBQ0ksd0JBQXdCO0dBQzdCO0lBQ0M7UUFDSSx3Q0FBd0M7UUFDeEMsbUJBQW1CO0dBQ3hCO0lBQ0M7UUFDSSx3QkFBd0I7R0FDN0I7QUFDSDtBQVhBO0lBQ0k7UUFDSSx3QkFBd0I7R0FDN0I7SUFDQztRQUNJLHdDQUF3QztRQUN4QyxtQkFBbUI7R0FDeEI7SUFDQztRQUNJLHdCQUF3QjtHQUM3QjtBQUNIO0FBQ0E7SUFDSTtRQUNJLHlDQUF5QztHQUM5QztJQUNDO1FBQ0ksMkNBQTJDO1FBQzNDLG1CQUFtQjtHQUN4QjtJQUNDO1FBQ0kseUNBQXlDO0dBQzlDO0FBQ0g7QUFYQTtJQUNJO1FBQ0kseUNBQXlDO0dBQzlDO0lBQ0M7UUFDSSwyQ0FBMkM7UUFDM0MsbUJBQW1CO0dBQ3hCO0lBQ0M7UUFDSSx5Q0FBeUM7R0FDOUM7QUFDSDtBQUNBO0lBQ0k7UUFDSSwwQkFBMEI7R0FDL0I7SUFDQztRQUNJLHFDQUFxQztRQUNyQyxtQkFBbUI7R0FDeEI7SUFDQztRQUNJLDBCQUEwQjtHQUMvQjtBQUNIO0FBWEE7SUFDSTtRQUNJLDBCQUEwQjtHQUMvQjtJQUNDO1FBQ0kscUNBQXFDO1FBQ3JDLG1CQUFtQjtHQUN4QjtJQUNDO1FBQ0ksMEJBQTBCO0dBQy9CO0FBQ0g7QUFDQTtJQUNJO1FBQ0ksNENBQTRDO1FBQzVDLG1CQUFtQjtHQUN4QjtJQUNDO1FBQ0ksd0JBQXdCO1FBQ3hCLG1CQUFtQjtHQUN4QjtJQUNDO1FBQ0ksMkNBQTJDO1FBQzNDLDBCQUEwQjtRQUMxQixtQkFBbUI7R0FDeEI7QUFDSDtBQWRBO0lBQ0k7UUFDSSw0Q0FBNEM7UUFDNUMsbUJBQW1CO0dBQ3hCO0lBQ0M7UUFDSSx3QkFBd0I7UUFDeEIsbUJBQW1CO0dBQ3hCO0lBQ0M7UUFDSSwyQ0FBMkM7UUFDM0MsMEJBQTBCO1FBQzFCLG1CQUFtQjtHQUN4QjtBQUNIO0FBQ0E7SUFDSTtRQUNJLHFCQUFxQjtRQUNyQixtQkFBbUI7R0FDeEI7QUFDSDtBQUxBO0lBQ0k7UUFDSSxxQkFBcUI7UUFDckIsbUJBQW1CO0dBQ3hCO0FBQ0giLCJmaWxlIjoic3Bpbm5lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogY3JlZGl0IC0gaHR0cHM6Ly9jb2RlcGVuLmlvL0plc0dyYVBhL3Blbi9IeWFpdyAqL1xyXG4uc3Bpbm5lciB7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQpO1xyXG5cclxuICAgIG1hcmdpbjogMTAwcHggYXV0bztcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzay1yb3RhdGVwbGFuZSAxLjJzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xyXG4gICAgYW5pbWF0aW9uOiBzay1yb3RhdGVwbGFuZSAxLjJzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2stcm90YXRlcGxhbmUge1xyXG4gICAgMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTIwcHgpIH1cclxuICAgIDUwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMjBweCkgcm90YXRlWSgxODBkZWcpIH1cclxuICAgIDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTIwcHgpIHJvdGF0ZVkoMTgwZGVnKSAgcm90YXRlWCgxODBkZWcpIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzay1yb3RhdGVwbGFuZSB7XHJcbiAgICAwJSB7IFxyXG4gICAgICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTIwcHgpIHJvdGF0ZVgoMGRlZykgcm90YXRlWSgwZGVnKTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTIwcHgpIHJvdGF0ZVgoMGRlZykgcm90YXRlWSgwZGVnKSBcclxuICAgIH0gNTAlIHsgXHJcbiAgICAgICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMjBweCkgcm90YXRlWCgtMTgwLjFkZWcpIHJvdGF0ZVkoMGRlZyk7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEyMHB4KSByb3RhdGVYKC0xODAuMWRlZykgcm90YXRlWSgwZGVnKSBcclxuICAgIH0gMTAwJSB7IFxyXG4gICAgICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTIwcHgpIHJvdGF0ZVgoLTE4MGRlZykgcm90YXRlWSgtMTc5LjlkZWcpO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMjBweCkgcm90YXRlWCgtMTgwZGVnKSByb3RhdGVZKC0xNzkuOWRlZyk7XHJcbiAgICB9XHJcbn1cclxuKiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5ib2R5LCBodG1sIHtcclxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogIzFjMWMxZDtcclxufVxyXG4qIHtcclxuICAgIGNvbG9yOiAjNjY2O1xyXG59XHJcbnNwYW4ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgd2lkdGg6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMkZBQzlCO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG59XHJcbi5ib3JkZXItcmFkaXVzIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwMHB4O1xyXG59XHJcbiNzcGlubmVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuI3NwaW5uZXIgc3BhbjpudGgtY2hpbGQoMSkge1xyXG4gICAgYW5pbWF0aW9uOiByb3RhdGVYIDJzIDAuMXMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKDAuNjUwLDAuMDMwLDAuNzM1LDAuMDQ1KTtcclxufVxyXG4jc3Bpbm5lciBzcGFuOm50aC1jaGlsZCgyKSB7XHJcbiAgICBhbmltYXRpb246IHJvdGF0ZVggMnMgMC4ycyBpbmZpbml0ZSBjdWJpYy1iZXppZXIoMC42NTAsMC4wMzAsMC43MzUsMC4wNDUpO1xyXG59XHJcbiNzcGlubmVyIHNwYW46bnRoLWNoaWxkKDMpIHtcclxuICAgIGFuaW1hdGlvbjogcm90YXRlWCAycyAwLjNzIGluZmluaXRlIGN1YmljLWJlemllcigwLjY1MCwwLjAzMCwwLjczNSwwLjA0NSk7XHJcbn1cclxuI3NwaW5uZXIgc3BhbjpudGgtY2hpbGQoNCkge1xyXG4gICAgYW5pbWF0aW9uOiByb3RhdGVYIDJzIDAuNHMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKDAuNjUwLDAuMDMwLDAuNzM1LDAuMDQ1KTtcclxufVxyXG4jc3Bpbm5lciBzcGFuOm50aC1jaGlsZCg1KSB7XHJcbiAgICBhbmltYXRpb246IHJvdGF0ZVggMnMgMC41cyBpbmZpbml0ZSBjdWJpYy1iZXppZXIoMC42NTAsMC4wMzAsMC43MzUsMC4wNDUpO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNjYWxlIHtcclxuICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMCk7XHJcbiAgIH1cclxuICAgIDI1JSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjksMC45KTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjOTNlMWQ3O1xyXG4gICB9XHJcbiAgICA1MCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwxKTtcclxuICAgICAgICBtYXJnaW46IDAgM3B4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMyRkFDOUI7XHJcbiAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC4wKTtcclxuICAgfVxyXG59XHJcbkBrZXlmcmFtZXMgcm90YXRlWSB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xyXG4gICB9XHJcbiAgICA1MCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSg5MGRlZyk7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzkzZTFkNztcclxuICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xyXG4gICB9XHJcbn1cclxuQGtleWZyYW1lcyByb3RhdGVYIHtcclxuICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XHJcbiAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKSBzY2FsZSgwLjUsMC41KTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjOTNlMWQ3O1xyXG4gICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XHJcbiAgIH1cclxufVxyXG5Aa2V5ZnJhbWVzIHB1c2gge1xyXG4gICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpIHNjYWxlKDAuOSwwLjYpO1xyXG4gICB9XHJcbiAgICA1MCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCkgc2NhbGUoMC43LDEuMSk7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzZiZDZjODtcclxuICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCkgc2NhbGUoMC45LDAuNik7XHJcbiAgIH1cclxufVxyXG5Aa2V5ZnJhbWVzIHJvdGF0ZVoge1xyXG4gICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWigtMjBkZWcpO1xyXG4gICB9XHJcbiAgICA1MCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWigyMGRlZykgc2NhbGVZKDEuMik7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzZiZDZjODtcclxuICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKC0yMGRlZyk7XHJcbiAgIH1cclxufVxyXG5Aa2V5ZnJhbWVzIGN1dmUge1xyXG4gICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgtOTBkZWcpIHBlcnNwZWN0aXZlKDUwcHgpO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMxOTVjNTM7XHJcbiAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICM2YmQ2Yzg7XHJcbiAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSg5MGRlZykgcGVyc3BlY3RpdmUoNTBweCk7XHJcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMTAwJSA1MCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzE5NWM1MztcclxuICAgfVxyXG59XHJcbkBrZXlmcmFtZXMgdGVtcCB7XHJcbiAgICA1MCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSw1KTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMTk1YzUzO1xyXG4gICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "itJq":
/*!*******************************************************************!*\
  !*** ./src/app/dashboard/components/sidebar/sidebar.component.ts ***!
  \*******************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_channel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/channel.service */ "0xJi");
/* harmony import */ var _services_guild_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/guild.service */ "4bjJ");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/user.service */ "qfBg");
/* harmony import */ var src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/dialog.service */ "CzQJ");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _avatar_url_avatar_url_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../avatar-url/avatar-url.component */ "kMH7");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _guild_icon_guild_icon_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../guild-icon/guild-icon.component */ "698J");













const _c0 = ["drawer"];
function SidebarComponent_app_guild_icon_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-guild-icon", 19);
} if (rf & 2) {
    const guild_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("guild", guild_r2)("matTooltip", guild_r2.name);
} }
const _c1 = [[["", 8, "side-nav"]], [["", "id", "content"]]];
const _c2 = [".side-nav", "#content"];
class SidebarComponent {
    constructor(channelService, guildService, userService, dialog) {
        this.channelService = channelService;
        this.guildService = guildService;
        this.userService = userService;
        this.dialog = dialog;
    }
    get guilds() { return this.guildService.guilds || []; }
    get user() { return this.userService.self; }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.channelService.init();
            yield this.guildService.init();
        });
    }
    toggle() {
        const icon = document.querySelector('#nav-icon1');
        icon.classList.toggle('open');
        this.drawer.toggle();
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_channel_service__WEBPACK_IMPORTED_MODULE_2__["ChannelService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_guild_service__WEBPACK_IMPORTED_MODULE_3__["GuildService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"])); };
SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["sidebar"]], viewQuery: function SidebarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.drawer = _t.first);
    } }, ngContentSelectors: _c2, decls: 25, vars: 5, consts: [["fullscreen", ""], ["mode", "side", "opened", ""], ["drawer", ""], [1, "guilds", "px-2"], [1, "user"], ["routerLinkActive", "active", "routerLink", "/channels/@me", 1, "guild-icon"], [3, "user", "size"], [1, "d-flex", "justify-content-center"], [1, "text-muted"], [3, "guild", "matTooltip", 4, "ngFor", "ngForOf"], ["matTooltip", "Add a Guild", 1, "guild-icon", "add-guild", "bg-transparent", "cursor-pointer", 3, "click"], [1, "add-guild", "pt-0", "d-flex", "justify-content-center", "flex-column"], [1, "options"], [1, "d-flex"], ["size", "48px", 1, "pt-2", 3, "user"], [1, "username", "text-overflow-ellipsis"], [1, "ml-auto"], ["id", "settingsButton", "matTooltip", "Settings", "routerLink", "/channels/@me/settings", "mat-button", "", 1, "mr-2", "p-2"], [1, "lni", "lni-cog"], [3, "guild", "matTooltip"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-sidenav", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "app-avatar-url", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, SidebarComponent_app_guild_icon_10_Template, 1, 2, "app-guild-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidebarComponent_Template_div_click_11_listener() { return ctx.dialog.createGuild(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "footer", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "app-avatar-url", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "h6", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](24, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("user", ctx.user)("size", "52px");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.guilds);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("user", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.user.username);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenav"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"], _avatar_url_avatar_url_component__WEBPACK_IMPORTED_MODULE_8__["AvatarUrlComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltip"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavContent"], _guild_icon_guild_icon_component__WEBPACK_IMPORTED_MODULE_12__["GuildIconComponent"]], styles: [".guild-icon[_ngcontent-%COMP%] {\r\n  border-radius: 50%;\r\n\r\n  margin: 5px;\r\n  width: 52px;\r\n  height: 52px;\r\n\r\n  background-color: var(--background-primary);\r\n  transition: all .35s;\r\n\r\n  cursor: pointer;\r\n}\r\n\r\n.guild-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover, .guild-icon[_ngcontent-%COMP%]:hover, .guild-icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover, .guild-icon.active[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .guild-icon.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  border-radius: 25%;\r\n}\r\n\r\n.guild-icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  font-size: 18px;\r\n\r\n  transition: all .35s;\r\n\r\n  width: 52px;\r\n  height: 48px;\r\n  padding-top: 14px;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  background: transparent;\r\n  border: none;\r\n  color: var(--font);\r\n\r\n  font-size: 32px;\r\n}\r\n\r\n.guilds[_ngcontent-%COMP%] {\r\n  background-color: var(--background-tertiary);\r\n  float: left;\r\n  height: inherit;\r\n  padding-top: 12px;\r\n}\r\n\r\n.options[_ngcontent-%COMP%] {\r\n  background-color: var(--background-secondary) !important;\r\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\r\n  overflow-x: hidden;\r\n\r\n  width: 275px;\r\n  height: inherit;\r\n\r\n  margin-left: 75px;\r\n}\r\n\r\n.toggle[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  bottom: 0;\r\n\r\n  visibility: visible;\r\n\r\n  margin: 50px 0 0 15px;\r\n}\r\n\r\n\r\n\r\n@media (min-width: 992px) {\r\n  .toggle[_ngcontent-%COMP%] {\r\n    visibility: hidden;\r\n  }\r\n}\r\n\r\nmat-sidenav[_ngcontent-%COMP%] {\r\n  height: 100vh;\r\n  background-color: var(--background-tertiary);\r\n}\r\n\r\n.guild-icon[_ngcontent-%COMP%]   .add-guild[_ngcontent-%COMP%] {\r\n  font-size: 40px;\r\n  color: var(--tertiary);\r\n}\r\n\r\n.add-guild[_ngcontent-%COMP%]:hover {\r\n  background-color: var(--primary);\r\n}\r\n\r\n.guild-seperator[_ngcontent-%COMP%] {\r\n  height: 2px;\r\n  width: 32px;\r\n  border-radius: 1px;\r\n\r\n  border-color: var(--background-secondary);\r\n}\r\n\r\nfooter[_ngcontent-%COMP%] {  \r\n  background-color: rgba(0, 0, 0, 0.05);\r\n\r\n  margin-left: 0px;\r\n  padding: 10px;\r\n  width: 275px;\r\n\r\n  position: absolute;\r\n  bottom: 0;\r\n}\r\n\r\n.guilds[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\r\n  background-color: var(--primary);\r\n  border-radius: 15px !important;\r\n}\r\n\r\n.connected-to[_ngcontent-%COMP%] {\r\n  font-size: small;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  font-size: 20px;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  margin-top: 150x;\r\n}\r\n\r\n.username[_ngcontent-%COMP%] {\r\n  padding-top: 25px;\r\n  padding-left: 10px;\r\n\r\n  max-width: 142px;\r\n  max-height: 42px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGViYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjs7RUFFbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZOztFQUVaLDJDQUEyQztFQUMzQyxvQkFBb0I7O0VBRXBCLGVBQWU7QUFDakI7O0FBRUE7Ozs7O0VBS0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7O0VBRWYsb0JBQW9COztFQUVwQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osa0JBQWtCOztFQUVsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsNENBQTRDO0VBQzVDLFdBQVc7RUFDWCxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usd0RBQXdEO0VBQ3hELDJFQUEyRTtFQUMzRSxrQkFBa0I7O0VBRWxCLFlBQVk7RUFDWixlQUFlOztFQUVmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTOztFQUVULG1CQUFtQjs7RUFFbkIscUJBQXFCO0FBQ3ZCOztBQUNBLDJDQUEyQzs7QUFDM0M7RUFDRTtJQUNFLGtCQUFrQjtFQUNwQjtBQUNGOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLGVBQWU7RUFDZixzQkFBc0I7QUFDeEI7O0FBQ0E7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQjs7RUFFbEIseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UscUNBQXFDOztFQUVyQyxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFlBQVk7O0VBRVosa0JBQWtCO0VBQ2xCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjs7RUFFbEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzaWRlYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3VpbGQtaWNvbiB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG5cclxuICBtYXJnaW46IDVweDtcclxuICB3aWR0aDogNTJweDtcclxuICBoZWlnaHQ6IDUycHg7XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtcHJpbWFyeSk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4zNXM7XHJcblxyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmd1aWxkLWljb24gaW1nOmhvdmVyLFxyXG4uZ3VpbGQtaWNvbjpob3ZlcixcclxuLmd1aWxkLWljb24gc3Bhbjpob3ZlcixcclxuLmd1aWxkLWljb24uYWN0aXZlIGltZyxcclxuLmd1aWxkLWljb24uYWN0aXZlIHNwYW4ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1JTtcclxufVxyXG5cclxuLmd1aWxkLWljb24gc3BhbiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuXHJcbiAgdHJhbnNpdGlvbjogYWxsIC4zNXM7XHJcblxyXG4gIHdpZHRoOiA1MnB4O1xyXG4gIGhlaWdodDogNDhweDtcclxuICBwYWRkaW5nLXRvcDogMTRweDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6IHZhcigtLWZvbnQpO1xyXG5cclxuICBmb250LXNpemU6IDMycHg7XHJcbn1cclxuXHJcbi5ndWlsZHMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtdGVydGlhcnkpO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGhlaWdodDogaW5oZXJpdDtcclxuICBwYWRkaW5nLXRvcDogMTJweDtcclxufVxyXG5cclxuLm9wdGlvbnMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtc2Vjb25kYXJ5KSAhaW1wb3J0YW50O1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4xKSwgMCAxcHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA2KTtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcblxyXG4gIHdpZHRoOiAyNzVweDtcclxuICBoZWlnaHQ6IGluaGVyaXQ7XHJcblxyXG4gIG1hcmdpbi1sZWZ0OiA3NXB4O1xyXG59XHJcblxyXG4udG9nZ2xlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG5cclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG5cclxuICBtYXJnaW46IDUwcHggMCAwIDE1cHg7XHJcbn1cclxuLyogTGFyZ2UgZGV2aWNlcyAoZGVza3RvcHMsIDk5MnB4IGFuZCB1cCkgKi9cclxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgLnRvZ2dsZSB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgfVxyXG59XHJcblxyXG5tYXQtc2lkZW5hdiB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLXRlcnRpYXJ5KTtcclxufVxyXG5cclxuLmd1aWxkLWljb24gLmFkZC1ndWlsZCB7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIGNvbG9yOiB2YXIoLS10ZXJ0aWFyeSk7XHJcbn1cclxuLmFkZC1ndWlsZDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbn1cclxuXHJcbi5ndWlsZC1zZXBlcmF0b3Ige1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIHdpZHRoOiAzMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDFweDtcclxuXHJcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLXNlY29uZGFyeSk7XHJcbn1cclxuXHJcbmZvb3RlciB7ICBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG5cclxuICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgd2lkdGg6IDI3NXB4O1xyXG5cclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG59XHJcblxyXG4uZ3VpbGRzIC5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNvbm5lY3RlZC10byB7XHJcbiAgZm9udC1zaXplOiBzbWFsbDtcclxufVxyXG5cclxuZm9vdGVyIGkge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5mb290ZXIgYnV0dG9uIHtcclxuICBtYXJnaW4tdG9wOiAxNTB4O1xyXG59XHJcbi51c2VybmFtZSB7XHJcbiAgcGFkZGluZy10b3A6IDI1cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG5cclxuICBtYXgtd2lkdGg6IDE0MnB4O1xyXG4gIG1heC1oZWlnaHQ6IDQycHg7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "j5wd":
/*!************************************!*\
  !*** ./src/app/material-module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-color-picker */ "R9Cn");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/table */ "f6nW");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ "fXoL");






















class MaterialModule {
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [ngx_color_picker__WEBPACK_IMPORTED_MODULE_13__["ColorPickerModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkTableModule"],
        // DragDropModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__["MatSortModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_16__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__["MatSlideToggleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MatTooltipModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCardModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsetNgModuleScope"](MaterialModule, { exports: [ngx_color_picker__WEBPACK_IMPORTED_MODULE_13__["ColorPickerModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkTableModule"],
        // DragDropModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__["MatSortModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_16__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__["MatSlideToggleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MatTooltipModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCardModule"]] }); })();


/***/ }),

/***/ "kMH7":
/*!*************************************************************************!*\
  !*** ./src/app/dashboard/components/avatar-url/avatar-url.component.ts ***!
  \*************************************************************************/
/*! exports provided: AvatarUrlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvatarUrlComponent", function() { return AvatarUrlComponent; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


const _c0 = ["img"];
class AvatarUrlComponent {
    constructor() {
        this.size = '32px';
        this.unknownImageURL = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].endpoint}/avatars/unknown.png`;
    }
    ngAfterViewInit() {
        const image = this.img.nativeElement;
        image.onerror = () => image.src = this.unknownImageURL;
    }
}
AvatarUrlComponent.ɵfac = function AvatarUrlComponent_Factory(t) { return new (t || AvatarUrlComponent)(); };
AvatarUrlComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AvatarUrlComponent, selectors: [["app-avatar-url"]], viewQuery: function AvatarUrlComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.img = _t.first);
    } }, inputs: { user: "user", size: "size" }, decls: 2, vars: 6, consts: [[1, "d-inline", "cursor-pointer", 3, "src", "alt"], ["img", ""]], template: function AvatarUrlComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 0, 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx.size)("height", ctx.size);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.user.avatarURL, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", ctx.user.username + "'s Avatar");
    } }, styles: ["img[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  transition: border-radius .3s ease;\n}\n\nimg[_ngcontent-%COMP%]:hover {\n  border-radius: 25%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF2YXRhci11cmwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoiYXZhdGFyLXVybC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0cmFuc2l0aW9uOiBib3JkZXItcmFkaXVzIC4zcyBlYXNlO1xufVxuXG5pbWc6aG92ZXIge1xuICBib3JkZXItcmFkaXVzOiAyNSU7XG59Il19 */"] });


/***/ }),

/***/ "kVLH":
/*!***************************************************************************!*\
  !*** ./src/app/dashboard/guilds/voice-channel/voice-channel.component.ts ***!
  \***************************************************************************/
/*! exports provided: VoiceChannelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoiceChannelComponent", function() { return VoiceChannelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_member_username_member_username_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/member-username/member-username.component */ "ME9D");






function VoiceChannelComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "member-username", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const id_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("user", ctx_r0.userService.getCached(id_r1))("voice", true);
} }
class VoiceChannelComponent {
    constructor(userService) {
        this.userService = userService;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.userService.init();
        });
    }
    join() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            alert('join');
        });
    }
}
VoiceChannelComponent.ɵfac = function VoiceChannelComponent_Factory(t) { return new (t || VoiceChannelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"])); };
VoiceChannelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: VoiceChannelComponent, selectors: [["voice-channel"]], inputs: { channel: "channel", guild: "guild" }, decls: 5, vars: 2, consts: [["hidden", "", 1, "cursor-pointer"], ["routerLinkActive", "active", 1, "nav-item", "nav-link", 3, "click"], [1, "lni", "lni-volume-up", "text-muted"], ["class", "ml-4", 4, "ngFor", "ngForOf"], [1, "ml-4"], [3, "user", "voice"]], template: function VoiceChannelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VoiceChannelComponent_Template_a_click_1_listener() { return ctx.join(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, VoiceChannelComponent_div_4_Template, 2, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.channel.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.channel.memberIds);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _components_member_username_member_username_component__WEBPACK_IMPORTED_MODULE_5__["MemberUsernameComponent"]], styles: ["member-username[_ngcontent-%COMP%] {\r\n  scale: 0.75;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZvaWNlLWNoYW5uZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJ2b2ljZS1jaGFubmVsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtZW1iZXItdXNlcm5hbWUge1xyXG4gIHNjYWxlOiAwLjc1O1xyXG59Il19 */"] });


/***/ }),

/***/ "kYtK":
/*!*********************************************************!*\
  !*** ./src/app/cool/lighthouse/lighthouse.component.ts ***!
  \*********************************************************/
/*! exports provided: LighthouseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LighthouseComponent", function() { return LighthouseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class LighthouseComponent {
}
LighthouseComponent.ɵfac = function LighthouseComponent_Factory(t) { return new (t || LighthouseComponent)(); };
LighthouseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LighthouseComponent, selectors: [["app-lighthouse"]], decls: 8, vars: 0, consts: [["id", "lighthouse"], ["id", "top"], ["id", "glass"], ["id", "balcony"], [1, "row"]], template: function LighthouseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["*[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after {\n  content: '';\n  display: block;\n  position: absolute;\n}\n#lighthouse[_ngcontent-%COMP%] {\n  position: absolute;\n}\n#lighthouse[_ngcontent-%COMP%]:before {\n  right: 30px;\n  left: 0;\n  margin: 0 auto;\n  height: 24px;\n  width: 12px;\n  background: #4f1c15;\n  bottom: 0;\n  z-index: 1;\n  border-radius: 6px 6px 0 0;\n}\n#lighthouse[_ngcontent-%COMP%]:after {\n  right: 0;\n  left: 0;\n  margin: 0 auto;\n  background: #8f8f8f;\n  width: 98px;\n  bottom: -16px;\n  height: 16px;\n  box-shadow: inset 58px 0 0 0 #b0b0b0;\n}\n#balcony[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  position: relative;\n  border-top: 16px solid #8f8f8f;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n  width: 76px;\n}\n#balcony[_ngcontent-%COMP%]:after {\n  left: -10px;\n  right: 0;\n  margin: 0 auto;\n  width: 76px;\n  top: -28px;\n  height: 2px;\n  background: #636363;\n}\n#balcony[_ngcontent-%COMP%]:before {\n  width: 2px;\n  height: 12px;\n  background: #636363;\n  left: -10px;\n  top: -28px;\n  box-shadow: 9px 0 0 #636363, 18px 0 0 #636363, 27px 0 0 #636363, 37px 0 0 #636363, 47px 0 0 #636363, 56px 0 0 #636363, 65px 0 0 #636363, 74px 0 0 #636363;\n}\n#glass[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 32px;\n  margin: 0 auto;\n  background: #b0b0b0;\n  box-shadow: 0 -26px 0 -6px #b2daed, 0 -30px 0 -6px #999;\n}\n#glass[_ngcontent-%COMP%]:before {\n  width: 2px;\n  height: 20px;\n  background: #f2f2f2;\n  left: -36px;\n  right: 0;\n  margin: 0 auto;\n  top: 22px;\n  box-shadow: 12px 0 0 #f2f2f2, 24px 0 0 #f2f2f2, 36px 0 0 #f2f2f2;\n}\n#top[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 18px;\n  background: #8d3c46;\n  border-radius: 18px 18px 0 0;\n  margin: 0 auto 24px;\n  position: relative;\n}\n#top[_ngcontent-%COMP%]:before {\n  background: #8d3c46;\n  height: 30px;\n  width: 2px;\n  right: 0;\n  left: 0;\n  margin: auto;\n  top: -30px;\n}\n\n.row[_ngcontent-%COMP%] {\n  height: 0;\n  position: relative;\n  margin: 0 auto;\n  border-left: 3px solid transparent;\n  border-right: 3px solid transparent;\n}\n.row[_ngcontent-%COMP%]:before, .row[_ngcontent-%COMP%]:after {\n  border-style: inherit;\n}\n.row[_ngcontent-%COMP%]:before {\n  left: -3px;\n  border-top-color: transparent;\n  border-right-color: transparent;\n  border-left-color: transparent;\n}\n.row[_ngcontent-%COMP%]:after {\n  border-left: 0 solid transparent;\n  border-right: 3px solid transparent;\n  border-bottom: 50px solid rgba(0, 0, 0, 0.1);\n}\n\n.row[_ngcontent-%COMP%] {\n  width: 60px;\n  border-bottom: 50px solid #8d3c46;\n}\n.row[_ngcontent-%COMP%]:before {\n  border-bottom-color: #f2f2f2;\n  border-width: 0 3px 50px 58px;\n}\n.row[_ngcontent-%COMP%]:after {\n  left: 30px;\n  width: 28px;\n}\n.row[_ngcontent-%COMP%]    + .row[_ngcontent-%COMP%] {\n  width: 66px;\n  border-bottom: 50px solid #f2f2f2;\n}\n.row[_ngcontent-%COMP%]    + .row[_ngcontent-%COMP%]:before {\n  border-bottom-color: #8d3c46;\n  border-width: 0 3px 50px 64px;\n}\n.row[_ngcontent-%COMP%]    + .row[_ngcontent-%COMP%]:after {\n  left: 33px;\n  width: 31px;\n}\n.row[_ngcontent-%COMP%]    + .row[_ngcontent-%COMP%]    + .row[_ngcontent-%COMP%] {\n  width: 72px;\n  border-bottom: 50px solid #8d3c46;\n}\n.row[_ngcontent-%COMP%]    + .row[_ngcontent-%COMP%]    + .row[_ngcontent-%COMP%]:before {\n  border-bottom-color: #f2f2f2;\n  border-width: 0 3px 50px 70px;\n}\n.row[_ngcontent-%COMP%]    + .row[_ngcontent-%COMP%]    + .row[_ngcontent-%COMP%]:after {\n  left: 36px;\n  width: 34px;\n}\n.row[_ngcontent-%COMP%]    + .row[_ngcontent-%COMP%]    + .row[_ngcontent-%COMP%]    + .row[_ngcontent-%COMP%] {\n  width: 78px;\n  border-bottom: 50px solid #f2f2f2;\n}\n.row[_ngcontent-%COMP%]    + .row[_ngcontent-%COMP%]    + .row[_ngcontent-%COMP%]    + .row[_ngcontent-%COMP%]:before {\n  border-bottom-color: #8d3c46;\n  border-width: 0 3px 50px 76px;\n}\n.row[_ngcontent-%COMP%]    + .row[_ngcontent-%COMP%]    + .row[_ngcontent-%COMP%]    + .row[_ngcontent-%COMP%]:after {\n  left: 39px;\n  width: 36px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpZ2h0aG91c2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxPQUFPO0VBQ1AsY0FBYztFQUNkLFlBQVk7RUFDWixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxVQUFVO0VBQ1YsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSxRQUFRO0VBQ1IsT0FBTztFQUNQLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGFBQWE7RUFDYixZQUFZO0VBQ1osb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLDhCQUE4QjtFQUM5QixtQ0FBbUM7RUFDbkMsb0NBQW9DO0VBQ3BDLFdBQVc7QUFDYjtBQUNBO0VBQ0UsV0FBVztFQUNYLFFBQVE7RUFDUixjQUFjO0VBQ2QsV0FBVztFQUNYLFVBQVU7RUFDVixXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsVUFBVTtFQUNWLHlKQUF5SjtBQUMzSjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLHVEQUF1RDtBQUN6RDtBQUNBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFFBQVE7RUFDUixjQUFjO0VBQ2QsU0FBUztFQUNULGdFQUFnRTtBQUNsRTtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsNEJBQTRCO0VBQzVCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osVUFBVTtFQUNWLFFBQVE7RUFDUixPQUFPO0VBQ1AsWUFBWTtFQUNaLFVBQVU7QUFDWjtBQUNBLHFCQUFxQjtBQUNyQjtFQUNFLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGtDQUFrQztFQUNsQyxtQ0FBbUM7QUFDckM7QUFDQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsVUFBVTtFQUNWLDZCQUE2QjtFQUM3QiwrQkFBK0I7RUFDL0IsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSxnQ0FBZ0M7RUFDaEMsbUNBQW1DO0VBQ25DLDRDQUE0QztBQUM5QztBQUNBLHNIQUFzSDtBQUN0SDtFQUNFLFdBQVc7RUFDWCxpQ0FBaUM7QUFDbkM7QUFDQTtFQUNFLDRCQUE0QjtFQUM1Qiw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLFVBQVU7RUFDVixXQUFXO0FBQ2I7QUFDQTtFQUNFLFdBQVc7RUFDWCxpQ0FBaUM7QUFDbkM7QUFDQTtFQUNFLDRCQUE0QjtFQUM1Qiw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLFVBQVU7RUFDVixXQUFXO0FBQ2I7QUFDQTtFQUNFLFdBQVc7RUFDWCxpQ0FBaUM7QUFDbkM7QUFDQTtFQUNFLDRCQUE0QjtFQUM1Qiw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLFVBQVU7RUFDVixXQUFXO0FBQ2I7QUFDQTtFQUNFLFdBQVc7RUFDWCxpQ0FBaUM7QUFDbkM7QUFDQTtFQUNFLDRCQUE0QjtFQUM1Qiw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLFVBQVU7RUFDVixXQUFXO0FBQ2IiLCJmaWxlIjoibGlnaHRob3VzZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKjpiZWZvcmUsICo6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbiNsaWdodGhvdXNlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuI2xpZ2h0aG91c2U6YmVmb3JlIHtcbiAgcmlnaHQ6IDMwcHg7XG4gIGxlZnQ6IDA7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBoZWlnaHQ6IDI0cHg7XG4gIHdpZHRoOiAxMnB4O1xuICBiYWNrZ3JvdW5kOiAjNGYxYzE1O1xuICBib3R0b206IDA7XG4gIHotaW5kZXg6IDE7XG4gIGJvcmRlci1yYWRpdXM6IDZweCA2cHggMCAwO1xufVxuI2xpZ2h0aG91c2U6YWZ0ZXIge1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJhY2tncm91bmQ6ICM4ZjhmOGY7XG4gIHdpZHRoOiA5OHB4O1xuICBib3R0b206IC0xNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIGJveC1zaGFkb3c6IGluc2V0IDU4cHggMCAwIDAgI2IwYjBiMDtcbn1cbiNiYWxjb255IHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXRvcDogMTZweCBzb2xpZCAjOGY4ZjhmO1xuICBib3JkZXItbGVmdDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICB3aWR0aDogNzZweDtcbn1cbiNiYWxjb255OmFmdGVyIHtcbiAgbGVmdDogLTEwcHg7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDc2cHg7XG4gIHRvcDogLTI4cHg7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kOiAjNjM2MzYzO1xufVxuI2JhbGNvbnk6YmVmb3JlIHtcbiAgd2lkdGg6IDJweDtcbiAgaGVpZ2h0OiAxMnB4O1xuICBiYWNrZ3JvdW5kOiAjNjM2MzYzO1xuICBsZWZ0OiAtMTBweDtcbiAgdG9wOiAtMjhweDtcbiAgYm94LXNoYWRvdzogOXB4IDAgMCAjNjM2MzYzLCAxOHB4IDAgMCAjNjM2MzYzLCAyN3B4IDAgMCAjNjM2MzYzLCAzN3B4IDAgMCAjNjM2MzYzLCA0N3B4IDAgMCAjNjM2MzYzLCA1NnB4IDAgMCAjNjM2MzYzLCA2NXB4IDAgMCAjNjM2MzYzLCA3NHB4IDAgMCAjNjM2MzYzO1xufVxuI2dsYXNzIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogMzJweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJhY2tncm91bmQ6ICNiMGIwYjA7XG4gIGJveC1zaGFkb3c6IDAgLTI2cHggMCAtNnB4ICNiMmRhZWQsIDAgLTMwcHggMCAtNnB4ICM5OTk7XG59XG4jZ2xhc3M6YmVmb3JlIHtcbiAgd2lkdGg6IDJweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICBsZWZ0OiAtMzZweDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0b3A6IDIycHg7XG4gIGJveC1zaGFkb3c6IDEycHggMCAwICNmMmYyZjIsIDI0cHggMCAwICNmMmYyZjIsIDM2cHggMCAwICNmMmYyZjI7XG59XG4jdG9wIHtcbiAgd2lkdGg6IDM4cHg7XG4gIGhlaWdodDogMThweDtcbiAgYmFja2dyb3VuZDogIzhkM2M0NjtcbiAgYm9yZGVyLXJhZGl1czogMThweCAxOHB4IDAgMDtcbiAgbWFyZ2luOiAwIGF1dG8gMjRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuI3RvcDpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiAjOGQzYzQ2O1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAycHg7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICBtYXJnaW46IGF1dG87XG4gIHRvcDogLTMwcHg7XG59XG4vKiBVbml2IExldmVsIFJ1bGVzICovXG4ucm93IHtcbiAgaGVpZ2h0OiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cbi5yb3c6YmVmb3JlLCAucm93OmFmdGVyIHtcbiAgYm9yZGVyLXN0eWxlOiBpbmhlcml0O1xufVxuLnJvdzpiZWZvcmUge1xuICBsZWZ0OiAtM3B4O1xuICBib3JkZXItdG9wLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWxlZnQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLnJvdzphZnRlciB7XG4gIGJvcmRlci1sZWZ0OiAwIHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogNTBweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG4vKiBTcGVjaWZpYyBMZXZlbHMgLSBXaWR0aHMgYXJlIDFweCB3aWRlciBvbiBzb21lIGFyZWFzIHRvIGNvdmVyIHVnbHkgcmVuZGVyaW5nLiBJIGFsc28gY2FuJ3QgZ2V0IG50aC1jaGlsZCB0byB3b3JrLiAqL1xuLnJvdyB7XG4gIHdpZHRoOiA2MHB4O1xuICBib3JkZXItYm90dG9tOiA1MHB4IHNvbGlkICM4ZDNjNDY7XG59XG4ucm93OmJlZm9yZSB7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICNmMmYyZjI7XG4gIGJvcmRlci13aWR0aDogMCAzcHggNTBweCA1OHB4O1xufVxuLnJvdzphZnRlciB7XG4gIGxlZnQ6IDMwcHg7XG4gIHdpZHRoOiAyOHB4O1xufVxuLnJvdyArIC5yb3cge1xuICB3aWR0aDogNjZweDtcbiAgYm9yZGVyLWJvdHRvbTogNTBweCBzb2xpZCAjZjJmMmYyO1xufVxuLnJvdyArIC5yb3c6YmVmb3JlIHtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzhkM2M0NjtcbiAgYm9yZGVyLXdpZHRoOiAwIDNweCA1MHB4IDY0cHg7XG59XG4ucm93ICsgLnJvdzphZnRlciB7XG4gIGxlZnQ6IDMzcHg7XG4gIHdpZHRoOiAzMXB4O1xufVxuLnJvdyArIC5yb3cgKyAucm93IHtcbiAgd2lkdGg6IDcycHg7XG4gIGJvcmRlci1ib3R0b206IDUwcHggc29saWQgIzhkM2M0Njtcbn1cbi5yb3cgKyAucm93ICsgLnJvdzpiZWZvcmUge1xuICBib3JkZXItYm90dG9tLWNvbG9yOiAjZjJmMmYyO1xuICBib3JkZXItd2lkdGg6IDAgM3B4IDUwcHggNzBweDtcbn1cbi5yb3cgKyAucm93ICsgLnJvdzphZnRlciB7XG4gIGxlZnQ6IDM2cHg7XG4gIHdpZHRoOiAzNHB4O1xufVxuLnJvdyArIC5yb3cgKyAucm93ICsgLnJvdyB7XG4gIHdpZHRoOiA3OHB4O1xuICBib3JkZXItYm90dG9tOiA1MHB4IHNvbGlkICNmMmYyZjI7XG59XG4ucm93ICsgLnJvdyArIC5yb3cgKyAucm93OmJlZm9yZSB7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICM4ZDNjNDY7XG4gIGJvcmRlci13aWR0aDogMCAzcHggNTBweCA3NnB4O1xufVxuLnJvdyArIC5yb3cgKyAucm93ICsgLnJvdzphZnRlciB7XG4gIGxlZnQ6IDM5cHg7XG4gIHdpZHRoOiAzNnB4O1xufVxuIl19 */"] });


/***/ }),

/***/ "kuBs":
/*!*********************************************************!*\
  !*** ./src/app/authentication/login/login.component.ts ***!
  \*********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_types_entity_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/types/entity-types */ "h8Xa");
/* harmony import */ var _sign_up_password_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sign-up/password.validators */ "Tyil");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/user-auth.service */ "hZP9");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_log_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/log.service */ "iXKo");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "bTqV");














const _c0 = ["loginWith"];
function LoginComponent_mat_form_field_10_mat_error_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Username is invalid.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function LoginComponent_mat_form_field_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-form-field", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, LoginComponent_mat_form_field_10_mat_error_4_Template, 2, 0, "mat-error", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.username.errors == null ? null : ctx_r2.username.errors.pattern);
} }
function LoginComponent_mat_form_field_11_mat_error_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Email is invalid.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function LoginComponent_mat_form_field_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-form-field", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, LoginComponent_mat_form_field_11_mat_error_4_Template, 2, 0, "mat-error", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.email.errors == null ? null : ctx_r3.email.errors.pattern);
} }
function LoginComponent_mat_error_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Password is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function LoginComponent_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "span", 21);
} }
const _c1 = function () { return ["/sign-up"]; };
const _c2 = function (a0) { return { redirect: a0 }; };
class LoginComponent {
    constructor(auth, route, router, log) {
        this.auth = auth;
        this.route = route;
        this.router = router;
        this.log = log;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(src_app_types_entity_types__WEBPACK_IMPORTED_MODULE_2__["patterns"].username),
            ]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(src_app_types_entity_types__WEBPACK_IMPORTED_MODULE_2__["patterns"].email),
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(src_app_types_entity_types__WEBPACK_IMPORTED_MODULE_2__["patterns"].password),
            ]),
        }, [_sign_up_password_validators__WEBPACK_IMPORTED_MODULE_3__["PasswordValidators"].emailOrUsernameRequired]);
        this.processing = false;
    }
    get email() { return this.form.get('email'); }
    get password() { return this.form.get('password'); }
    get username() { return this.form.get('username'); }
    get redirect() {
        var _a;
        return (_a = this.route.snapshot.queryParamMap.get('redirect')) !== null && _a !== void 0 ? _a : '/channels/@me';
    }
    login() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const user = this.form.value;
            if (this.form.invalid)
                return;
            try {
                this.processing = true;
                const res = yield this.auth.login(user);
                if (res.verify)
                    return this.router.navigate([`/auth/verify`]);
                this.router.navigate([this.redirect]);
            }
            catch (error) {
                this.processing = false;
                this.form.setErrors({ invalidLogin: true });
                yield this.log.error(error.message);
            }
        });
    }
    toggleLoginWith() {
        const value = this.loginWith.nativeElement.value;
        const email = this.form.get('email');
        const username = this.form.get('username');
        if (value === 'email') {
            username.setValue(email.value);
            email.reset();
        }
        else {
            email.setValue(username.value);
            username.reset();
        }
        this.loginWith.nativeElement.value = (value === 'email')
            ? 'username'
            : 'email';
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_user_auth_service__WEBPACK_IMPORTED_MODULE_5__["UserAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_log_service__WEBPACK_IMPORTED_MODULE_7__["LogService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["login"]], viewQuery: function LoginComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.loginWith = _t.first);
    } }, decls: 28, vars: 12, consts: [[1, "container", "text-center", "pb-5"], [1, "py-2", "mt-5", "d-none", "d-sm-block"], [1, "display-4", "mb-4", "mt-5"], [3, "formGroup", "ngSubmit"], ["f", "ngForm"], ["value", "username", "type", "hidden"], ["loginWith", ""], [1, "form-group"], ["appearance", "outline", 4, "ngIf"], [1, "cursor-pointer", "d-block", 3, "click"], ["appearance", "outline"], ["for", "password"], ["formControlName", "password", "id", "password", "type", "password", "autocomplete", "current-password", "matInput", ""], [4, "ngIf"], ["type", "submit", "mat-button", "", 1, "bg-primary", "mb-2", 3, "disabled"], ["class", "spinner-border spinner-border-sm", "role", "status", "aria-hidden", "true", 4, "ngIf"], [3, "routerLink", "queryParams"], ["for", "username"], ["formControlName", "username", "id", "username", "type", "text", "autocomplete", "username", "matInput", ""], ["for", "email"], ["formControlName", "email", "id", "email", "type", "email", "autocomplete", "email", "matInput", ""], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_5_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, LoginComponent_mat_form_field_10_Template, 5, 1, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, LoginComponent_mat_form_field_11_Template, 5, 1, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_12_listener() { return ctx.toggleLoginWith(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "mat-label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, LoginComponent_mat_error_19_Template, 2, 0, "mat-error", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, LoginComponent_span_21_Template, 1, 0, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "create an account");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r1.value === "username");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r1.value === "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Login with ", _r1.value === "email" ? "Username" : "Email", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.password.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.processing);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.processing);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](9, _c1))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](10, _c2, ctx.redirect));
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatError"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "nHKN":
/*!******************************************************************************!*\
  !*** ./src/app/dashboard/guilds/guild-settings/invites/invites.component.ts ***!
  \******************************************************************************/
/*! exports provided: InvitesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvitesComponent", function() { return InvitesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_guild_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/guild.service */ "4bjJ");
/* harmony import */ var src_app_services_log_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/log.service */ "iXKo");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_app_services_ws_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/ws.service */ "Swid");
/* harmony import */ var _components_settings_sidebar_settings_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/settings-sidebar/settings-sidebar.component */ "qT/8");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _utils_zippy_zippy_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../utils/zippy/zippy.component */ "vLLP");
/* harmony import */ var _components_member_username_member_username_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/member-username/member-username.component */ "ME9D");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "bTqV");













function InvitesComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "zippy", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Created By");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "member-username", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Uses");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Created At");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Expires");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](26, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InvitesComponent_div_5_Template_div_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const invite_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.delete(invite_r2._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const invite_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", invite_r2._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("user", ctx_r0.userService.getCached(invite_r2.inviterId));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.usesString(invite_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](19, 5, invite_r2.createdAt, "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](26, 8, invite_r2.options.expiresAt) || "Never");
} }
function InvitesComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "No invites created yet.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class InvitesComponent {
    constructor(route, guildService, log, userService, ws) {
        this.route = route;
        this.guildService = guildService;
        this.log = log;
        this.userService = userService;
        this.ws = ws;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const guildId = this.route.snapshot.paramMap.get('guildId');
            this.guild = this.guildService.getCached(guildId);
            this.invites = yield this.guildService.getInvites(guildId);
            this.hookWSEvents();
        });
    }
    usesString(invite) {
        return (invite.options.maxUses)
            ? `${invite.uses}/${invite.options.maxUses}`
            : invite.uses;
    }
    hookWSEvents() {
        this.ws.on('INVITE_DELETE', ({ inviteCode }) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.log.success();
            const index = this.invites.findIndex(i => i._id === inviteCode);
            this.invites.splice(index, 1);
        }), this);
    }
    delete(inviteCode) {
        this.ws.emit('INVITE_DELETE', { inviteCode }, this);
    }
}
InvitesComponent.ɵfac = function InvitesComponent_Factory(t) { return new (t || InvitesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_guild_service__WEBPACK_IMPORTED_MODULE_3__["GuildService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_log_service__WEBPACK_IMPORTED_MODULE_4__["LogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_ws_service__WEBPACK_IMPORTED_MODULE_6__["WSService"])); };
InvitesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: InvitesComponent, selectors: [["app-invites"]], decls: 7, vars: 3, consts: [["tabType", "guild", 3, "id"], [1, "content"], [1, "mb-4"], [1, "row"], ["class", "col-12", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "col-12"], [3, "title"], [1, "col-md-4"], [3, "user"], [1, "col-md-2"], ["matTooltip", "Delete", 1, "float-right", 3, "click"], ["mat-button", "", 1, "bg-danger"], [1, "lni", "lni-close", "text-light"], [1, "fas", "fa-info-circle", "mr-2"]], template: function InvitesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-settings-sidebar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h5", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Invites");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, InvitesComponent_div_5_Template, 31, 10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, InvitesComponent_div_6_Template, 5, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx.guild == null ? null : ctx.guild._id);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.invites);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.invites == null ? null : ctx.invites.length) <= 0);
    } }, directives: [_components_settings_sidebar_settings_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SettingsSidebarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _utils_zippy_zippy_component__WEBPACK_IMPORTED_MODULE_9__["ZippyComponent"], _components_member_username_member_username_component__WEBPACK_IMPORTED_MODULE_10__["MemberUsernameComponent"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltip"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]], styles: [".side[_ngcontent-%COMP%], .main[_ngcontent-%COMP%], .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n}\r\n\r\n.side[_ngcontent-%COMP%] {\r\n  float: left;\r\n  width: 25%;\r\n\r\n  background-color: var(--background-secondary);\r\n}\r\n\r\n.side[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n}\r\n\r\n.side[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%] {\r\n  color: var(--secondary);\r\n  padding-left: 5px;\r\n}\r\n\r\n.side[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] {\r\n  padding: 15px;\r\n  padding-top: 40px;\r\n}\r\n\r\n.side[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\r\n  color: var(--font);\r\n}\r\n\r\n.main[_ngcontent-%COMP%] {\r\n  float: right;\r\n  width: 75%;\r\n}\r\n\r\n.main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n  padding: 60px 40px;\r\n  width: 85%;\r\n}\r\n\r\n.main[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\r\n  border: 1px solid var(--secondary);\r\n  color: var(--heading); \r\n\r\n  width: 48px;\r\n  height: 48px;\r\n\r\n  padding: 8px;\r\n  padding-top: 12px;\r\n}\r\n\r\n.main[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]:hover {\r\n  background-color: var(--tertiary);\r\n}\r\n\r\n.main[_ngcontent-%COMP%]   .guild-icon[_ngcontent-%COMP%] {\r\n  width: 100px;\r\n  height: 100px;\r\n\r\n  font-size: 40px;\r\n\r\n  color: var(--heading);\r\n  background-color: var(--primary);\r\n}\r\n\r\n.main[_ngcontent-%COMP%]   .guild-icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n\r\n  font-size: 32px;\r\n  padding-top: 28px;\r\n\r\n  transition: all .35s;\r\n}\r\n\r\n.main[_ngcontent-%COMP%]   .guild-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {    \r\n  border-radius: 50%;\r\n\r\n  transition: all .35s;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludml0ZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxVQUFVOztFQUVWLDZDQUE2QztBQUMvQzs7QUFDQTtFQUNFLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixVQUFVO0FBQ1o7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUNBO0VBQ0Usa0NBQWtDO0VBQ2xDLHFCQUFxQjs7RUFFckIsV0FBVztFQUNYLFlBQVk7O0VBRVosWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhOztFQUViLGVBQWU7O0VBRWYscUJBQXFCO0VBQ3JCLGdDQUFnQztBQUNsQzs7QUFDQTtFQUNFLGtCQUFrQjs7RUFFbEIsZUFBZTtFQUNmLGlCQUFpQjs7RUFFakIsb0JBQW9CO0FBQ3RCOztBQUNBO0VBQ0Usa0JBQWtCOztFQUVsQixvQkFBb0I7QUFDdEIiLCJmaWxlIjoiaW52aXRlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGUsIC5tYWluLCAubWFpbiAuY29udGVudCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uc2lkZSB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDI1JTtcclxuXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1zZWNvbmRhcnkpO1xyXG59XHJcbi5zaWRlIGEge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uc2lkZSAuY2F0ZWdvcnkge1xyXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xyXG4gIHBhZGRpbmctbGVmdDogNXB4O1xyXG59XHJcbi5zaWRlIC5uYXZiYXItbmF2IHtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIHBhZGRpbmctdG9wOiA0MHB4O1xyXG59XHJcbi5zaWRlIGhyIHtcclxuICBjb2xvcjogdmFyKC0tZm9udCk7XHJcbn1cclxuXHJcbi5tYWluIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgd2lkdGg6IDc1JTtcclxufVxyXG4ubWFpbiAuY29udGVudCB7XHJcbiAgcGFkZGluZzogNjBweCA0MHB4O1xyXG4gIHdpZHRoOiA4NSU7XHJcbn1cclxuLm1haW4gLmNsb3NlIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnkpO1xyXG4gIGNvbG9yOiB2YXIoLS1oZWFkaW5nKTsgXHJcblxyXG4gIHdpZHRoOiA0OHB4O1xyXG4gIGhlaWdodDogNDhweDtcclxuXHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIHBhZGRpbmctdG9wOiAxMnB4O1xyXG59XHJcbi5tYWluIC5jbG9zZTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVydGlhcnkpO1xyXG59XHJcblxyXG4ubWFpbiAuZ3VpbGQtaWNvbiB7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGhlaWdodDogMTAwcHg7XHJcblxyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuXHJcbiAgY29sb3I6IHZhcigtLWhlYWRpbmcpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xyXG59XHJcbi5tYWluIC5ndWlsZC1pY29uIHNwYW4ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgZm9udC1zaXplOiAzMnB4O1xyXG4gIHBhZGRpbmctdG9wOiAyOHB4O1xyXG5cclxuICB0cmFuc2l0aW9uOiBhbGwgLjM1cztcclxufVxyXG4ubWFpbiAuZ3VpbGQtaWNvbiBpbWcgeyAgICBcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcblxyXG4gIHRyYW5zaXRpb246IGFsbCAuMzVzO1xyXG59Il19 */", ".guild-icon[_ngcontent-%COMP%] {\r\n  font-size: 40px;\r\n\r\n  color: var(--font);\r\n  background-color: var(--primary);\r\n}\r\n.guild-icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n\r\n  font-size: 32px;\r\n  padding-top: 28px;\r\n\r\n  transition: all .35s;\r\n}\r\n.guild-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {    \r\n  width: 96px;\r\n  height: 96px;\r\n  border-radius: 50%;\r\n\r\n  transition: all .35s;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImd1aWxkLXNldHRpbmdzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlOztFQUVmLGtCQUFrQjtFQUNsQixnQ0FBZ0M7QUFDbEM7QUFDQTtFQUNFLGtCQUFrQjs7RUFFbEIsZUFBZTtFQUNmLGlCQUFpQjs7RUFFakIsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjs7RUFFbEIsb0JBQW9CO0FBQ3RCIiwiZmlsZSI6Imd1aWxkLXNldHRpbmdzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3VpbGQtaWNvbiB7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG5cclxuICBjb2xvcjogdmFyKC0tZm9udCk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbn1cclxuLmd1aWxkLWljb24gc3BhbiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBmb250LXNpemU6IDMycHg7XHJcbiAgcGFkZGluZy10b3A6IDI4cHg7XHJcblxyXG4gIHRyYW5zaXRpb246IGFsbCAuMzVzO1xyXG59XHJcbi5ndWlsZC1pY29uIGltZyB7ICAgIFxyXG4gIHdpZHRoOiA5NnB4O1xyXG4gIGhlaWdodDogOTZweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcblxyXG4gIHRyYW5zaXRpb246IGFsbCAuMzVzO1xyXG59Il19 */"] });


/***/ }),

/***/ "oCjk":
/*!********************************!*\
  !*** ./src/app/utils/utils.ts ***!
  \********************************/
/*! exports provided: toIterable, camelToSentenceCase, sentenceToCamelCase, kebabToCamelCase, generateUsername, uuid, timestamp, array */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toIterable", function() { return toIterable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "camelToSentenceCase", function() { return camelToSentenceCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sentenceToCamelCase", function() { return sentenceToCamelCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kebabToCamelCase", function() { return kebabToCamelCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateUsername", function() { return generateUsername; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uuid", function() { return uuid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timestamp", function() { return timestamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "array", function() { return array; });
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faker */ "NZy3");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_0__);

function toIterable(length) {
    const array = [];
    for (let i = 0; i < length; i++)
        array.push(i);
    return array;
}
function camelToSentenceCase(words) {
    const regex = /([A-Z])(?=[a-z][A-Z])|([a-z])(?=[A-Z])/g;
    return words
        .replace(regex, '$& ')[0]
        .toUpperCase() +
        words
            .replace(regex, '$& ')
            .slice(1);
}
function sentenceToCamelCase(words) {
    const capitalized = words
        .replace(/\s+(.)/g, (match, group) => group.toUpperCase());
    return capitalized[0].toLowerCase() + capitalized.slice(1);
}
function kebabToCamelCase(words) {
    const arr = words.split('-');
    const capital = arr.map((item, index) => index ? item.charAt(0).toUpperCase() + item.slice(1).toLowerCase() : item);
    const capitalized = capital.join('');
    return capitalized[0].toLowerCase() + capitalized.slice(1);
}
function generateUsername() {
    return `${faker__WEBPACK_IMPORTED_MODULE_0__["hacker"]
        .adjective()
        .replace(/ /, '')}-${faker__WEBPACK_IMPORTED_MODULE_0__["hacker"]
        .noun()
        .replace(/ /, '')}`;
}
function uuid() {
    const s4 = () => Math
        .floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    return 'u' + new Array(8)
        .fill('')
        .map(s4)
        .join('');
}
function timestamp(date) {
    date = new Date(date);
    const timestamp = date.toTimeString().slice(0, 5);
    if (getDaysAgo(date))
        return `Today at ${timestamp}`;
    else if (getDaysAgo(date, -1))
        return `Yesterday at ${timestamp}`;
    else if (getDaysAgo(date, 1))
        return `Tomorrow at ${timestamp}`;
    return date
        .toJSON()
        .slice(0, 10)
        .split('-')
        .reverse()
        .join('/');
}
function getDaysAgo(date, days = 0) {
    return date.getDate() === new Date().getDate() + days
        && date.getMonth() === new Date().getMonth()
        && date.getFullYear() === new Date().getFullYear();
}
const array = {
    ascendingBy: (key) => (a, b) => (a[key] > b[key]) ? 1 : -1,
    descendingBy: (key) => (a, b) => (a[key] < b[key]) ? 1 : -1,
    distinctBy: (key) => (value, index, self) => self.findIndex(v => v[key] === value[key]) === index,
};


/***/ }),

/***/ "pHWo":
/*!********************************************************************************!*\
  !*** ./src/app/dashboard/guilds/guild-settings/bot-list/bot-list.component.ts ***!
  \********************************************************************************/
/*! exports provided: BotListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotListComponent", function() { return BotListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_dashboard_components_module_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dashboard/components/module-config */ "cmOr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_guild_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/guild.service */ "4bjJ");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var src_app_services_ws_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/ws.service */ "Swid");
/* harmony import */ var src_app_services_log_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/log.service */ "iXKo");
/* harmony import */ var src_app_services_developers_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/developers.service */ "RXH7");
/* harmony import */ var _components_settings_sidebar_settings_sidebar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/settings-sidebar/settings-sidebar.component */ "qT/8");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "bTqV");













function BotListComponent_a_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BotListComponent_a_5_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const app_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r3.selectedApp = app_r2; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const app_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](app_r2.user.username);
} }
function BotListComponent_div_13_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BotListComponent_div_13_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r7.addBot(ctx_r7.selectedApp.user._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function BotListComponent_div_13_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BotListComponent_div_13_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r9.removeBot(ctx_r9.selectedApp.user._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function BotListComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, BotListComponent_div_13_button_8_Template, 2, 0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, BotListComponent_div_13_button_9_Template, 2, 0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r1.selectedApp.user.avatarURL, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("alt", ctx_r1.selectedApp.user.username + " Avatar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.selectedApp.user.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.selectedApp.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r1.botInGuild);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.botInGuild);
} }
class BotListComponent extends src_app_dashboard_components_module_config__WEBPACK_IMPORTED_MODULE_2__["ModuleConfig"] {
    constructor(route, router, guildService, snackbar, ws, log, dev) {
        super(guildService, route, snackbar, ws, log, router);
        this.dev = dev;
    }
    get botInGuild() {
        return this.guild.members.some(m => m.userId === this.selectedApp._id);
    }
    ngOnInit() {
        const _super = Object.create(null, {
            init: { get: () => super.init }
        });
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield _super.init.call(this);
            this.apps = yield this.dev.fetchAll();
            this.selectedApp = this.apps[0];
        });
    }
    buildForm() {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({});
    }
    addBot(botId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.guildService.addBot(this.guildId, botId);
            yield this.guildService.fetchAll();
        });
    }
    removeBot(botId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const member = this.guildService.getMember(this.guildId, botId);
            yield this.guildService.kick(this.guildId, member._id);
            yield this.guildService.fetchAll();
        });
    }
}
BotListComponent.ɵfac = function BotListComponent_Factory(t) { return new (t || BotListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_guild_service__WEBPACK_IMPORTED_MODULE_5__["GuildService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_ws_service__WEBPACK_IMPORTED_MODULE_7__["WSService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_log_service__WEBPACK_IMPORTED_MODULE_8__["LogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_developers_service__WEBPACK_IMPORTED_MODULE_9__["DevelopersService"])); };
BotListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: BotListComponent, selectors: [["app-bot-list"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 14, vars: 3, consts: [["tabType", "guild", 3, "id"], [1, "content"], [1, "row"], [1, "col-3", "side-nav", "navbar-dark"], [1, "navbar-nav"], ["routerLinkActive", "active", "class", "nav-item nav-link", 3, "click", 4, "ngFor", "ngForOf"], [1, "float-right"], [1, "my-4"], [1, "text-muted"], ["class", "col-9 role-details", 4, "ngIf"], ["routerLinkActive", "active", 1, "nav-item", "nav-link", 3, "click"], [1, "col-9", "role-details"], [1, "rounded-lg", "float-left", "mr-4", 3, "src", "alt"], [1, "lead", "text-muted"], [1, "mt-3"], ["class", "bg-success rounded", "mat-button", "", 3, "click", 4, "ngIf"], ["class", "bg-danger rounded", "mat-button", "", 3, "click", 4, "ngIf"], ["mat-button", "", 1, "bg-success", "rounded", 3, "click"], ["mat-button", "", 1, "bg-danger", "rounded", 3, "click"]], template: function BotListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-settings-sidebar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, BotListComponent_a_5_Template, 2, 1, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "hr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Bots can do ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "cool");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, " things for your guilds.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, BotListComponent_div_13_Template, 10, 6, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", ctx.guild == null ? null : ctx.guild._id);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.apps);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.selectedApp);
    } }, directives: [_components_settings_sidebar_settings_sidebar_component__WEBPACK_IMPORTED_MODULE_10__["SettingsSidebarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"]], styles: ["img[_ngcontent-%COMP%] {\r\n  max-height: 196px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvdC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoiYm90LWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XHJcbiAgbWF4LWhlaWdodDogMTk2cHg7XHJcbn1cclxuIl19 */", ".guild-icon[_ngcontent-%COMP%] {\r\n  font-size: 40px;\r\n\r\n  color: var(--font);\r\n  background-color: var(--primary);\r\n}\r\n.guild-icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n\r\n  font-size: 32px;\r\n  padding-top: 28px;\r\n\r\n  transition: all .35s;\r\n}\r\n.guild-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {    \r\n  width: 96px;\r\n  height: 96px;\r\n  border-radius: 50%;\r\n\r\n  transition: all .35s;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImd1aWxkLXNldHRpbmdzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlOztFQUVmLGtCQUFrQjtFQUNsQixnQ0FBZ0M7QUFDbEM7QUFDQTtFQUNFLGtCQUFrQjs7RUFFbEIsZUFBZTtFQUNmLGlCQUFpQjs7RUFFakIsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjs7RUFFbEIsb0JBQW9CO0FBQ3RCIiwiZmlsZSI6Imd1aWxkLXNldHRpbmdzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3VpbGQtaWNvbiB7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG5cclxuICBjb2xvcjogdmFyKC0tZm9udCk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbn1cclxuLmd1aWxkLWljb24gc3BhbiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBmb250LXNpemU6IDMycHg7XHJcbiAgcGFkZGluZy10b3A6IDI4cHg7XHJcblxyXG4gIHRyYW5zaXRpb246IGFsbCAuMzVzO1xyXG59XHJcbi5ndWlsZC1pY29uIGltZyB7ICAgIFxyXG4gIHdpZHRoOiA5NnB4O1xyXG4gIGhlaWdodDogOTZweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcblxyXG4gIHRyYW5zaXRpb246IGFsbCAuMzVzO1xyXG59Il19 */"] });


/***/ }),

/***/ "pzsc":
/*!*****************************************************!*\
  !*** ./src/app/services/events/my-event.service.ts ***!
  \*****************************************************/
/*! exports provided: MyEventService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyEventService", function() { return MyEventService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _channel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../channel.service */ "0xJi");
/* harmony import */ var _guild_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../guild.service */ "4bjJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user.service */ "qfBg");






class MyEventService {
    constructor(channelService, guildService, router, userService) {
        this.channelService = channelService;
        this.guildService = guildService;
        this.router = router;
        this.userService = userService;
    }
    addFriend({ sender, friend, dmChannel }) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.updateFriends({ sender, friend });
            if (dmChannel)
                this.channelService.add(dmChannel);
        });
    }
    updateFriends({ sender, friend }) {
        this.userService.upsert(sender._id, sender);
        this.userService.upsert(friend._id, friend);
    }
    joinGuild({ guild }) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.userService.fetchAll();
            this.guildService.add(guild);
            yield this.router.navigate([`/channels/${guild._id}`]);
        });
    }
    updatePresence({ userId, status }) {
        this.userService.upsert(userId, { status });
    }
    updateUser({ partialUser }) {
        const user = this.userService.self;
        this.userService.upsert(user._id, partialUser);
    }
}
MyEventService.ɵfac = function MyEventService_Factory(t) { return new (t || MyEventService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_channel_service__WEBPACK_IMPORTED_MODULE_2__["ChannelService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_guild_service__WEBPACK_IMPORTED_MODULE_3__["GuildService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"])); };
MyEventService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MyEventService, factory: MyEventService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "qT/8":
/*!*************************************************************************************!*\
  !*** ./src/app/dashboard/components/settings-sidebar/settings-sidebar.component.ts ***!
  \*************************************************************************************/
/*! exports provided: SettingsSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsSidebarComponent", function() { return SettingsSidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_app_types_entity_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/types/entity-types */ "h8Xa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_guild_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/guild.service */ "4bjJ");
/* harmony import */ var src_app_services_permissions_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/permissions.service */ "tEUU");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");








const _c0 = function () { return { exact: true }; };
function SettingsSidebarComponent_a_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("disabled", !ctx_r0.canAccess(tab_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](7, _c0))("routerLink", ctx_r0.canAccess(tab_r2) ? tab_r2.href() : "./");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](tab_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](tab_r2.name);
} }
function SettingsSidebarComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c1 = [[["", 8, "content"]]];
const _c2 = [".content"];
class SettingsSidebarComponent {
    constructor(guildService, perms, router, userService) {
        this.guildService = guildService;
        this.perms = perms;
        this.router = router;
        this.userService = userService;
        this.tabs = {
            guild: [
                {
                    name: 'General',
                    icon: 'lni lni-eye',
                    href: () => `/channels/${this.guildId}/settings`,
                    permission: src_app_types_entity_types__WEBPACK_IMPORTED_MODULE_1__["PermissionTypes"].General.MANAGE_GUILD,
                },
                // {
                //   name: 'Bots',
                //   icon: 'fas fa-robot',
                //   href: () => `/channels/${this.guildId}/bots`,
                //   permission: PermissionTypes.General.MANAGE_GUILD, 
                // },
                {
                    name: 'Invites',
                    icon: 'lni lni-user',
                    href: () => `/channels/${this.guildId}/invites`,
                    permission: src_app_types_entity_types__WEBPACK_IMPORTED_MODULE_1__["PermissionTypes"].General.MANAGE_GUILD,
                },
                {
                    name: 'Roles',
                    icon: 'fas fa-at',
                    href: () => `/channels/${this.guildId}/roles`,
                    permission: src_app_types_entity_types__WEBPACK_IMPORTED_MODULE_1__["PermissionTypes"].General.MANAGE_ROLES,
                },
            ],
            user: [
                { name: 'Overview', icon: 'lni lni-eye', href: () => '/channels/@me/settings' },
                { name: 'Account', icon: 'lni lni-lock', href: () => '/channels/@me/settings/account' },
            ],
        };
        document.body.onkeyup = ({ key }) => {
            if (key === 'Escape')
                this.close();
        };
    }
    get categories() {
        return Object.keys(this.tabs);
    }
    get tabCategory() {
        var _a;
        return (this.tabType === 'guild')
            ? (_a = this.guildService.getCached(this.guildId)) === null || _a === void 0 ? void 0 : _a.name : this.userService.self.username;
    }
    close() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.router.navigate([`/channels/${(_a = this.guildId) !== null && _a !== void 0 ? _a : '@me'}`]);
        });
    }
    canAccess(tab) {
        return !tab.permission || this.perms.can(this.guildId, tab.permission);
    }
}
SettingsSidebarComponent.ɵfac = function SettingsSidebarComponent_Factory(t) { return new (t || SettingsSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_guild_service__WEBPACK_IMPORTED_MODULE_3__["GuildService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_permissions_service__WEBPACK_IMPORTED_MODULE_4__["PermissionsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"])); };
SettingsSidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SettingsSidebarComponent, selectors: [["app-settings-sidebar"]], inputs: { tabType: "tabType", guildId: ["id", "guildId"] }, ngContentSelectors: _c2, decls: 12, vars: 3, consts: [[1, "side", "side-nav", "navbar-dark"], [1, "navbar-nav", "float-right"], [1, "category", "text-secondary", "overflow-ellipsis"], ["routerLinkActive", "active", "class", "nav-item nav-link", 3, "routerLinkActiveOptions", "routerLink", "disabled", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "main"], [1, "close-container"], ["mat-button", "", 1, "close", "round", "btn", "float-right", 3, "click"], [1, "lni", "lni-close"], [1, "main-content"], ["routerLinkActive", "active", 1, "nav-item", "nav-link", 3, "routerLinkActiveOptions", "routerLink"], [1, "mr-1"], ["routerLink", "/logout", 1, "text-danger", "nav-item", "nav-link"], [1, "lni", "lni-user", "text-danger"]], template: function SettingsSidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"](_c1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, SettingsSidebarComponent_a_4_Template, 4, 8, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, SettingsSidebarComponent_div_5_Template, 6, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SettingsSidebarComponent_Template_div_click_8_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.tabCategory);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.tabs[ctx.tabType]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.tabType === "user");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkActive"]], styles: [".side[_ngcontent-%COMP%], .main[_ngcontent-%COMP%], .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  min-height: 100%;\n}\n\n.side[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  max-width: 200px; \n}\n\n.side[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding-right: 10px !important;\n  cursor: pointer;\n}\n\n.side[_ngcontent-%COMP%] {\n  float: left;\n  width: 25%;\n  \n  position: fixed;\n\n  background-color: var(--background-secondary);\n}\n\n.side[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%] {\n  color: var(--secondary);\n  padding-left: 5px;\n}\n\n.side[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] {\n  padding: 35px;\n  padding-top: 40px;\n}\n\n.side[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  color: var(--font);\n}\n\n.main-content[_ngcontent-%COMP%] {\n  padding: 60px 40px;\n  width: 90%;  \n}\n\n.main[_ngcontent-%COMP%] {\n  float: right;\n  width: 75%;\n}\n\n.close-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 25px;\n  right: -50px;\n}\n\n.close[_ngcontent-%COMP%] {\n  text-shadow: unset;\n\n  border: 1px solid var(--tertiary);\n  padding: 8px;\n  padding-top: 12px;\n  width: 48px;\n  height: 48px;\n}\n\n.close[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--font); \n}\n\n.close[_ngcontent-%COMP%]:hover {\n  background-color: var(--tertiary);\n}\n\n.close-container[_ngcontent-%COMP%] {\n  margin: 50px 7.5vw;\n}\n\n.nav-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 20px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmdzLXNpZGViYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSw4QkFBOEI7RUFDOUIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxVQUFVOztFQUVWLGVBQWU7O0VBRWYsNkNBQTZDO0FBQy9DOztBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCOztFQUVsQixpQ0FBaUM7RUFDakMsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCIiwiZmlsZSI6InNldHRpbmdzLXNpZGViYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlLCAubWFpbiwgLm1haW4gLmNvbnRlbnQge1xuICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuXG4uc2lkZSAuY2F0ZWdvcnkge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWF4LXdpZHRoOiAyMDBweDsgXG59XG4uc2lkZSBhIHtcbiAgcGFkZGluZy1yaWdodDogMTBweCAhaW1wb3J0YW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zaWRlIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAyNSU7XG4gIFxuICBwb3NpdGlvbjogZml4ZWQ7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1zZWNvbmRhcnkpO1xufVxuLnNpZGUgLmNhdGVnb3J5IHtcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xufVxuLnNpZGUgLm5hdmJhci1uYXYge1xuICBwYWRkaW5nOiAzNXB4O1xuICBwYWRkaW5nLXRvcDogNDBweDtcbn1cbi5zaWRlIGhyIHtcbiAgY29sb3I6IHZhcigtLWZvbnQpO1xufVxuXG4ubWFpbi1jb250ZW50IHtcbiAgcGFkZGluZzogNjBweCA0MHB4O1xuICB3aWR0aDogOTAlOyAgXG59XG5cbi5tYWluIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB3aWR0aDogNzUlO1xufVxuXG4uY2xvc2UtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDI1cHg7XG4gIHJpZ2h0OiAtNTBweDtcbn1cblxuLmNsb3NlIHtcbiAgdGV4dC1zaGFkb3c6IHVuc2V0O1xuXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRlcnRpYXJ5KTtcbiAgcGFkZGluZzogOHB4O1xuICBwYWRkaW5nLXRvcDogMTJweDtcbiAgd2lkdGg6IDQ4cHg7XG4gIGhlaWdodDogNDhweDtcbn1cbi5jbG9zZSBpIHtcbiAgY29sb3I6IHZhcigtLWZvbnQpOyBcbn1cbi5jbG9zZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRlcnRpYXJ5KTtcbn1cbi5jbG9zZS1jb250YWluZXIge1xuICBtYXJnaW46IDUwcHggNy41dnc7XG59XG5cbi5uYXYtaXRlbSBpIHtcbiAgd2lkdGg6IDIwcHggIWltcG9ydGFudDtcbn0iXX0= */"] });


/***/ }),

/***/ "qfBg":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/utils */ "oCjk");
/* harmony import */ var _http_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http-wrapper */ "R0x+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class UserService extends _http_wrapper__WEBPACK_IMPORTED_MODULE_3__["HTTPWrapper"] {
    constructor() {
        super(...arguments);
        this.endpoint = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].endpoint}/users`;
        this._arr = [];
    }
    get friends() {
        return this.self.friendIds.map(id => this.getCached(id));
    }
    get friendRequests() {
        const isOutgoing = (u) => u.friendRequestIds.includes(this.self._id);
        return this._arr
            .filter(isOutgoing)
            .concat(this.self.friendRequestIds
            .map(id => this.getCached(id)))
            .filter(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["array"].distinctBy('_id'));
    }
    avatarURL(id) {
        return `${this.endpoint}/${id}/avatar`;
    }
    getBots() {
        return this.http.get(`${this.endpoint}/bots`).toPromise();
    }
    updateSelf() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.self = (yield this.http.get(`${this.endpoint}/self`, this.headers).toPromise());
        });
    }
    checkUsername(username) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.http.get(`${this.endpoint}/check-username?value=${username}`).toPromise();
        });
    }
    checkEmail(email) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.http.get(`${this.endpoint}/check-email?value=${email}`).toPromise();
        });
    }
    block(userId) {
        var _a, _b;
        const userIds = (_b = (_a = this.self.ignored) === null || _a === void 0 ? void 0 : _a.userIds.concat(userId)) !== null && _b !== void 0 ? _b : [userId];
        this.ws.emit('USER_UPDATE', {
            partialUser: Object.assign(Object.assign({}, this.self), { ignored: Object.assign(Object.assign({}, this.self.ignored), { userIds }) }),
            key: localStorage.getItem('key'),
        }, this);
    }
    unblock(userId) {
        var _a, _b;
        const index = (_a = this.self.ignored) === null || _a === void 0 ? void 0 : _a.userIds.indexOf(userId);
        (_b = this.self.ignored) === null || _b === void 0 ? void 0 : _b.userIds.splice(index, 1);
        this.ws.emit('USER_UPDATE', {
            partialUser: {
                ignored: this.self.ignored,
            },
            key: localStorage.getItem('key'),
        }, this);
    }
}
UserService.ɵfac = function UserService_Factory(t) { return ɵUserService_BaseFactory(t || UserService); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
const ɵUserService_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetInheritedFactory"](UserService);


/***/ }),

/***/ "qigX":
/*!*****************************************************************************!*\
  !*** ./src/app/dashboard/components/save-changes/save-changes.component.ts ***!
  \*****************************************************************************/
/*! exports provided: SaveChangesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveChangesComponent", function() { return SaveChangesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");




class SaveChangesComponent {
    constructor(snackBar) {
        this.snackBar = snackBar;
        this.onReset = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSave = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    reset() {
        this.onReset.emit();
        this.close();
    }
    save() {
        this.onSave.emit();
        this.close();
    }
    close() {
        this.snackBar.dismiss();
        this.onReset.unsubscribe();
        this.onSave.unsubscribe();
    }
}
SaveChangesComponent.ɵfac = function SaveChangesComponent_Factory(t) { return new (t || SaveChangesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"])); };
SaveChangesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SaveChangesComponent, selectors: [["save-changes"]], outputs: { onReset: "onReset", onSave: "onSave" }, decls: 8, vars: 0, consts: [[1, "row"], [1, "text", "col-lg-8", "col-sm-12", "p-lg-1"], [1, "col-lg-4", "col-sm-12", "d-flex", "justify-content-center"], ["id", "reset", "type", "submit", "mat-button", "", 1, "text-danger", 3, "click"], ["id", "save", "type", "submit", "mat-button", "", 3, "click"]], template: function SaveChangesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Careful - You have unsaved changes! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SaveChangesComponent_Template_button_click_4_listener() { return ctx.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SaveChangesComponent_Template_button_click_6_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]], styles: [".text[_ngcontent-%COMP%] {\r\n  text-align: left;\r\n  padding-bottom: 15px;\r\n}\r\nbutton[_ngcontent-%COMP%], .text[_ngcontent-%COMP%] {\r\n  color: var(--light);  \r\n}\r\n#save[_ngcontent-%COMP%] {\r\n  margin-left: 5px;\r\n  color: var(--dark);\r\n  background-color: var(--success);\r\n}\r\n\r\n@media (min-width: 576px) {\r\n  .text[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhdmUtY2hhbmdlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdDQUFnQztBQUNsQztBQUVBLG1EQUFtRDtBQUNuRDtFQUNFO0lBQ0Usa0JBQWtCO0VBQ3BCO0FBQ0YiLCJmaWxlIjoic2F2ZS1jaGFuZ2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dCB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxufVxyXG5idXR0b24sIC50ZXh0IHtcclxuICBjb2xvcjogdmFyKC0tbGlnaHQpOyAgXHJcbn1cclxuI3NhdmUge1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgY29sb3I6IHZhcigtLWRhcmspO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1Y2Nlc3MpO1xyXG59XHJcblxyXG4vKiBTbWFsbCBkZXZpY2VzIChsYW5kc2NhcGUgcGhvbmVzLCA1NzZweCBhbmQgdXApICovXHJcbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xyXG4gIC50ZXh0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ "rEt/":
/*!*****************************************************!*\
  !*** ./src/app/dialog/profile/profile.component.ts ***!
  \*****************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_channel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/channel.service */ "0xJi");
/* harmony import */ var src_app_services_log_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/log.service */ "iXKo");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_app_services_ws_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/ws.service */ "Swid");








function ProfileComponent_div_0_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProfileComponent_div_0_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r5.addFriend(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_0_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProfileComponent_div_0_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r7.removeFriend(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matTooltip", ctx_r4.isFriend ? "Remove Friend" : "Cancel Request");
} }
function ProfileComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ProfileComponent_div_0_button_1_Template, 3, 0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ProfileComponent_div_0_button_2_Template, 3, 1, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r0.isFriend && !ctx_r0.sentRequest);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.isFriend || ctx_r0.sentRequest);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", "/channels/@me/" + (ctx_r0.dmChannel == null ? null : ctx_r0.dmChannel._id))("disabled", !ctx_r0.isFriend);
} }
function ProfileComponent_div_5_app_guild_icon_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-guild-icon", 16);
} if (rf & 2) {
    const guild_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matTooltip", guild_r10.name)("guild", guild_r10);
} }
function ProfileComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ProfileComponent_div_5_app_guild_icon_4_Template, 1, 2, "app-guild-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Mutual Guilds\u2014", ctx_r1.mutualGuilds.length, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.mutualGuilds)("ngForElse", ctx_r1.noMutualGuilds);
} }
function ProfileComponent_div_7_app_avatar_url_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-avatar-url", 18);
} if (rf & 2) {
    const friend_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matTooltip", friend_r12.username)("user", friend_r12);
} }
function ProfileComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ProfileComponent_div_7_app_avatar_url_4_Template, 1, 2, "app-avatar-url", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Mutual Friends\u2014", ctx_r2.mutualFriends.length, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.mutualFriends);
} }
class ProfileComponent {
    constructor(dialogRef, data, channels, log, users, ws) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.channels = channels;
        this.log = log;
        this.users = users;
        this.ws = ws;
    }
    get mutualFriends() {
        const otherFriendIds = this.data.user.friendIds;
        return this.users.self.friendIds
            .filter(id => otherFriendIds.includes(id))
            .map(id => this.users.getCached(id));
    }
    get mutualGuilds() {
        const otherGuilds = this.data.user.guilds;
        return this.users.self.guilds
            .filter(ug => otherGuilds.some(og => og._id === ug._id));
    }
    get isSelf() {
        return this.users.self._id === this.data.user._id;
    }
    get isFriend() {
        return this.users.self.friendIds.includes(this.data.user._id);
    }
    get sentRequest() {
        return this.users.self.friendRequestIds.includes(this.data.user._id);
    }
    get dmChannel() {
        return this.channels.getDM(this.data.user._id);
    }
    addFriend() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.ws.emitAsync('ADD_FRIEND', {
                username: this.data.user.username,
            }, this);
        });
    }
    removeFriend() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.ws.emitAsync('REMOVE_FRIEND', {
                friendId: this.data.user._id,
            }, this);
        });
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_channel_service__WEBPACK_IMPORTED_MODULE_3__["ChannelService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_log_service__WEBPACK_IMPORTED_MODULE_4__["LogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_ws_service__WEBPACK_IMPORTED_MODULE_6__["WSService"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 8, vars: 5, consts: [["class", "d-flex justify-content-center float-right", 4, "ngIf"], [1, "mr-2", 3, "user"], ["mat-dialog-title", ""], ["mat-dialog-content", "", 4, "ngIf"], [1, "d-flex", "justify-content-center", "float-right"], ["matTooltip", "Add Friend", "class", "bg-success mr-2", "mat-button", "", 3, "click", 4, "ngIf"], ["class", "bg-danger mr-2", "mat-button", "", 3, "matTooltip", "click", 4, "ngIf"], ["matTooltip", "Message", "mat-button", "", 1, "bg-primary", 3, "routerLink", "disabled"], [1, "lni", "lni-bubble"], ["matTooltip", "Add Friend", "mat-button", "", 1, "bg-success", "mr-2", 3, "click"], [1, "lni", "lni-user", "text-dark"], ["mat-button", "", 1, "bg-danger", "mr-2", 3, "matTooltip", "click"], [1, "lni", "lni-close"], ["mat-dialog-content", ""], [1, "ml-4"], ["class", "float-left", "style", "margin-left: -25px;", 3, "matTooltip", "guild", 4, "ngFor", "ngForOf", "ngForElse"], [1, "float-left", 2, "margin-left", "-25px", 3, "matTooltip", "guild"], ["class", "float-left cursor-pointer", "size", "52px", "style", "margin-left: -25px;", 3, "matTooltip", "user", 4, "ngFor", "ngForOf"], ["size", "52px", 1, "float-left", "cursor-pointer", 2, "margin-left", "-25px", 3, "matTooltip", "user"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ProfileComponent_div_0_Template, 6, 4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-avatar-url", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ProfileComponent_div_5_Template, 6, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, ProfileComponent_div_7_Template, 5, 2, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isSelf);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("user", ctx.data.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.data.user.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.mutualGuilds.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.mutualFriends.length);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "rTQu":
/*!**********************************************************!*\
  !*** ./src/app/guards/can-deactivate-dashboard.guard.ts ***!
  \**********************************************************/
/*! exports provided: CanDeactivateDashboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanDeactivateDashboard", function() { return CanDeactivateDashboard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CanDeactivateDashboard {
    canDeactivate(component, currentRoute, currentState, nextState) {
        var _a;
        return !Boolean((_a = component.saveChanges) === null || _a === void 0 ? void 0 : _a._openedSnackBarRef);
    }
}
CanDeactivateDashboard.ɵfac = function CanDeactivateDashboard_Factory(t) { return new (t || CanDeactivateDashboard)(); };
CanDeactivateDashboard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CanDeactivateDashboard, factory: CanDeactivateDashboard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "rpeu":
/*!*******************************************************************!*\
  !*** ./src/app/dashboard/me/me-overview/me-overview.component.ts ***!
  \*******************************************************************/
/*! exports provided: DashboardOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardOverviewComponent", function() { return DashboardOverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/dialog.service */ "CzQJ");
/* harmony import */ var _me_sidebar_me_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../me-sidebar/me-sidebar.component */ "LlIw");
/* harmony import */ var _components_dashboard_navbar_dashboard_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/dashboard-navbar/dashboard-navbar.component */ "SKt3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _friends_list_friends_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../friends-list/friends-list.component */ "1nus");






function DashboardOverviewComponent_strong_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _r2.users.friendRequests.length, "");
} }
function DashboardOverviewComponent_strong_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _r2.blockedUsers.length, "");
} }
class DashboardOverviewComponent {
    constructor(dialog) {
        this.dialog = dialog;
        this.tab = 'ONLINE';
        document.title = 'Accord - Dashboard';
        this.tab = 'ONLINE';
    }
}
DashboardOverviewComponent.ɵfac = function DashboardOverviewComponent_Factory(t) { return new (t || DashboardOverviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_1__["DialogService"])); };
DashboardOverviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardOverviewComponent, selectors: [["app-dashboard"]], decls: 30, vars: 11, consts: [[1, "lni", "lni-users", "pr-2"], [1, "mx-3", "py-1"], [1, "nav", "nav-pills", "float-right"], [1, "nav-item"], [1, "nav-link", "active", 3, "click"], [1, "nav-link", 3, "click"], ["class", "text-primary", 4, "ngIf"], [1, "nav-link", "text-warning", 3, "click"], [1, "nav-link", "bg-success", "text-dark", 3, "click"], [3, "tab"], ["friendsList", ""], [1, "text-primary"]], template: function DashboardOverviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "dashboard-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "dashboard-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Friends");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardOverviewComponent_Template_a_click_8_listener() { return ctx.tab = "ONLINE"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Online");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardOverviewComponent_Template_a_click_12_listener() { return ctx.tab = "ALL"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardOverviewComponent_Template_a_click_16_listener() { return ctx.tab = "PENDING"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, DashboardOverviewComponent_strong_19_Template, 2, 1, "strong", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardOverviewComponent_Template_a_click_21_listener() { return ctx.tab = "BLOCKED"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Blocked");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, DashboardOverviewComponent_strong_24_Template, 2, 1, "strong", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardOverviewComponent_Template_a_click_26_listener() { return ctx.dialog.addFriend(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Add Friend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "friends-list", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.tab === "ONLINE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.tab === "ALL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.tab === "PENDING");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r2.users.friendRequests.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.tab === "BLOCKED");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r2.blockedUsers.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tab", ctx.tab);
    } }, directives: [_me_sidebar_me_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["MeSidebarComponent"], _components_dashboard_navbar_dashboard_navbar_component__WEBPACK_IMPORTED_MODULE_3__["DashboardNavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _friends_list_friends_list_component__WEBPACK_IMPORTED_MODULE_5__["FriendsListComponent"]], styles: [".nav-link[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n\r\n  padding: 0 10px;\r\n}\r\n.nav-link[_ngcontent-%COMP%]:hover:not(.add-friend) {\r\n  background-color: rgba(255, 255, 255, 0.025);\r\n}\r\n.nav-link.active[_ngcontent-%COMP%] {\r\n  background-color: rgba(255, 255, 255, 0.05);\r\n  color: var(--success) !important;\r\n}\r\n.nav-item[_ngcontent-%COMP%] {\r\n  margin-right: 15px;\r\n\r\n  border-radius: 5px;\r\n}\r\nbutton.send-friend-request[_ngcontent-%COMP%] {\r\n  background-color: var(--primary);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lLW92ZXJ2aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlOztFQUVmLGVBQWU7QUFDakI7QUFDQTtFQUNFLDRDQUE0QztBQUM5QztBQUNBO0VBQ0UsMkNBQTJDO0VBQzNDLGdDQUFnQztBQUNsQztBQUVBO0VBQ0Usa0JBQWtCOztFQUVsQixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGdDQUFnQztBQUNsQyIsImZpbGUiOiJtZS1vdmVydmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdi1saW5rIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gIHBhZGRpbmc6IDAgMTBweDtcclxufVxyXG4ubmF2LWxpbms6aG92ZXI6bm90KC5hZGQtZnJpZW5kKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAyNSk7XHJcbn1cclxuLm5hdi1saW5rLmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KTtcclxuICBjb2xvcjogdmFyKC0tc3VjY2VzcykgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5hdi1pdGVtIHtcclxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcblxyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuYnV0dG9uLnNlbmQtZnJpZW5kLXJlcXVlc3Qge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xyXG59Il19 */"] });


/***/ }),

/***/ "s4IJ":
/*!********************************************!*\
  !*** ./src/app/services/invite.service.ts ***!
  \********************************************/
/*! exports provided: InviteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InviteService", function() { return InviteService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class InviteService {
    constructor(http) {
        this.http = http;
        this.endpoint = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].rootEndpoint}/invites`;
    }
    get headers() {
        return {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('key')}`,
            }
        };
    }
    fetch(id) {
        return this.http.get(`${this.endpoint}/${id}`, this.headers).toPromise();
    }
}
InviteService.ɵfac = function InviteService_Factory(t) { return new (t || InviteService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
InviteService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: InviteService, factory: InviteService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "tEUU":
/*!*************************************************!*\
  !*** ./src/app/services/permissions.service.ts ***!
  \*************************************************/
/*! exports provided: PermissionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionsService", function() { return PermissionsService; });
/* harmony import */ var _types_entity_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/entity-types */ "h8Xa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _guild_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guild.service */ "4bjJ");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service */ "qfBg");




class PermissionsService {
    constructor(guildService, userService) {
        this.guildService = guildService;
        this.userService = userService;
    }
    can(guildId, permission) {
        const guild = this.guildService.getCached(guildId);
        if (!guild)
            throw new TypeError('Guild Not Found');
        const member = this.guildService.getSelfMember(guildId);
        return guild.ownerId == (member === null || member === void 0 ? void 0 : member.userId)
            || this.hasPermission(this.getTotalPerms(guild, member), _types_entity_types__WEBPACK_IMPORTED_MODULE_0__["PermissionTypes"].All[permission]);
    }
    getTotalPerms(guild, member) {
        return guild.roles
            .filter(r => member === null || member === void 0 ? void 0 : member.roleIds.includes(r._id))
            .reduce((acc, value) => value.permissions | acc, 0);
    }
    hasPermission(totalPerms, permission) {
        return Boolean(totalPerms & permission)
            || Boolean(totalPerms & _types_entity_types__WEBPACK_IMPORTED_MODULE_0__["PermissionTypes"].General.ADMINISTRATOR);
    }
    canManage(guildId, userId, permission) {
        const userMember = this.guildService.getMember(guildId, userId);
        if (!userMember)
            return false;
        return this.can(guildId, permission)
            && (this.userService.self._id === userMember.userId
                || (this.isHigher(guildId, userMember.roleIds)));
    }
    canPunish(guildId, userId, permission) {
        return this.userService.self._id !== userId
            && this.can(guildId, permission)
            && this.canManage(guildId, userId, permission);
    }
    isHigher(guildId, roleIds) {
        const selfMember = this.guildService.getSelfMember(guildId);
        const guild = this.guildService.getCached(guildId);
        const joinedRoles = roleIds.concat(selfMember.roleIds);
        const roles = guild.roles.filter(r => joinedRoles.includes(r._id));
        const highestRole = roles[roles.length - 1];
        return selfMember.userId === guild.ownerId
            || (selfMember.roleIds.includes(highestRole._id)
                && !roleIds.includes(highestRole._id));
    }
}
PermissionsService.ɵfac = function PermissionsService_Factory(t) { return new (t || PermissionsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_guild_service__WEBPACK_IMPORTED_MODULE_2__["GuildService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"])); };
PermissionsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PermissionsService, factory: PermissionsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "tZre":
/*!*********************************************!*\
  !*** ./src/app/services/message.service.ts ***!
  \*********************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _http_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http-wrapper */ "R0x+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ws_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ws.service */ "Swid");






class MessageService extends _http_wrapper__WEBPACK_IMPORTED_MODULE_2__["HTTPWrapper"] {
    constructor(http, ws) {
        super(http, ws);
        this.endpoint = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].endpoint + '/channels';
        this.cached = new Map();
        this.self = undefined;
    }
    get messages() {
        return this._arr = Array
            .from(this.cached.values())
            .flat();
    }
    getAllAsync(channelId) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return (_a = this.cached.get(channelId)) !== null && _a !== void 0 ? _a : yield this.overrideFetchAll(channelId);
        });
    }
    getAllCached(channelId) {
        var _a;
        return (_a = this.cached.get(channelId)) !== null && _a !== void 0 ? _a : this.cached
            .set(channelId, [])
            .get(channelId);
    }
    // TODO: eventually use override keyword
    overrideAdd(messages) {
        var _a;
        const channelId = (_a = messages[0]) === null || _a === void 0 ? void 0 : _a.channelId;
        if (!channelId)
            return [];
        const cached = this.getAllCached(channelId);
        cached.push(...messages);
        return cached;
    }
    // TODO: eventually use override keyword
    overrideFetchAll(channelId, options) {
        var _a, _b;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const query = `?start=${(_a = options === null || options === void 0 ? void 0 : options.start) !== null && _a !== void 0 ? _a : 0}&end=${(_b = options === null || options === void 0 ? void 0 : options.end) !== null && _b !== void 0 ? _b : 25}`;
            const messages = yield this.http
                .get(`${this.endpoint}/${channelId}/messages${query}`, this.headers)
                .toPromise();
            return this.overrideAdd(messages);
        });
    }
}
MessageService.ɵfac = function MessageService_Factory(t) { return new (t || MessageService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ws_service__WEBPACK_IMPORTED_MODULE_5__["WSService"])); };
MessageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: MessageService, factory: MessageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "tya+":
/*!*****************************************************!*\
  !*** ./src/app/dashboard/components/user-config.ts ***!
  \*****************************************************/
/*! exports provided: UserConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserConfig", function() { return UserConfig; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _save_changes_save_changes_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./save-changes/save-changes.component */ "qigX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "qfBg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _services_ws_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/ws.service */ "Swid");
/* harmony import */ var _services_log_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/log.service */ "iXKo");








class UserConfig {
    constructor(userService, route, saveChanges, ws, log, router) {
        this.userService = userService;
        this.route = route;
        this.saveChanges = saveChanges;
        this.ws = ws;
        this.log = log;
        this.router = router;
    }
    /**
     * Load all required data for the form, and hook events.
     */
    init() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.userService.init();
            this.user = this.userService.self;
            this.originalUser = JSON.parse(JSON.stringify(this.user));
            yield this.resetForm();
            this.valueChanges$ = this.form.valueChanges
                .subscribe(() => this.openSaveChanges());
        });
    }
    resetForm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.user = JSON.parse(JSON.stringify(this.originalUser));
            this.form = yield this.buildForm(this.user);
        });
    }
    openSaveChanges() {
        const snackBarRef = this.saveChanges._openedSnackBarRef;
        if (this.form.invalid || snackBarRef)
            return;
        this.saveChanges$ = this.saveChanges
            .openFromComponent(_save_changes_save_changes_component__WEBPACK_IMPORTED_MODULE_1__["SaveChangesComponent"])
            .afterOpened()
            .subscribe(() => {
            const component = this.saveChanges._openedSnackBarRef.instance;
            component.onSave.subscribe(() => this.submit());
            component.onReset.subscribe(() => this.reset());
        });
    }
    /**
     * Clean up subscriptions - to prevent memory leak.
     */
    ngOnDestroy() {
        var _a, _b;
        (_a = this.valueChanges$) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        (_b = this.saveChanges$) === null || _b === void 0 ? void 0 : _b.unsubscribe();
    }
    /**
     * Send the form data to the API.
     */
    submit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.form.invalid)
                return;
            this.userService.self = Object.assign(this.user, this.form.value);
            this.ws.emitAsync('USER_UPDATE', {
                key: localStorage.getItem('key'),
                partialUser: this.form.value,
            }, this);
        });
    }
    /**
     * Reset form values, and rebuild form.
     */
    reset() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.resetForm();
            this.user = JSON.parse(JSON.stringify(this.originalUser));
            this.form.valueChanges
                .subscribe(() => this.openSaveChanges());
        });
    }
    // input events
    add(event, array) {
        const { value, input } = event;
        if ((value || '').trim())
            array.push(value.trim());
        if (input)
            input.value = '';
        this.openSaveChanges();
    }
    remove(item, array) {
        const index = array.indexOf(item);
        if (index >= 0)
            array.splice(index, 1);
        this.openSaveChanges();
    }
}
UserConfig.ɵfac = function UserConfig_Factory(t) { return new (t || UserConfig)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_ws_service__WEBPACK_IMPORTED_MODULE_6__["WSService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_log_service__WEBPACK_IMPORTED_MODULE_7__["LogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
UserConfig.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: UserConfig });


/***/ }),

/***/ "v2M4":
/*!********************************************************!*\
  !*** ./src/app/pages/not-found/not-found.component.ts ***!
  \********************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class NotFoundComponent {
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 27, vars: 0, consts: [[1, "stars"], [1, "central-body"], [1, "text-light"], ["routerLink", "/", 1, "btn-go-home"], [1, "objects"], ["src", "/assets/img/rocket.svg", "width", "40px", 1, "object_rocket"], [1, "earth-moon"], ["src", "/assets/img/earth.svg", "width", "100px", 1, "object_earth"], ["src", "/assets/img/moon.svg", "width", "80px", 1, "object_moon"], ["src", "/assets/img/mars.svg", 1, "object_mars"], [1, "box_astronaut"], ["src", "/assets/img/2pg-plus-avatar-transparent.png", "width", "140px", 1, "object_astronaut"], [1, "glowing_stars"], [1, "star"], [1, "float-right", "text-muted"]], template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "404");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Looks like you are lost in space...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "RETURN HOME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "SVGs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, ": Saleh Riaz + photo3idea_studio from www.flaticon.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["@-webkit-keyframes rocket-movement {100% {-webkit-transform: translate(1200px,-600px); } }\r\n\r\n@keyframes rocket-movement { 100% {transform: translate(1200px,-600px);} }\r\n\r\n@-webkit-keyframes spin-earth { 100% { -webkit-transform: rotate(-360deg); transition: transform 20s;  } }\r\n\r\n@keyframes spin-earth{ 100% { transform:rotate(-360deg); transition: transform 20s; } }\r\n\r\n@-webkit-keyframes move-astronaut {\r\n  100% { -webkit-transform: translate(-160px, -160px);}\r\n}\r\n\r\n@keyframes move-astronaut{\r\n  100% { transform:translate(-160px, -160px); }\r\n}\r\n\r\n@-webkit-keyframes rotate-astronaut {\r\n  100% { -webkit-transform: rotate(-720deg);}\r\n}\r\n\r\n@keyframes rotate-astronaut{\r\n  100% { transform:rotate(-720deg); }\r\n}\r\n\r\n@-webkit-keyframes glow-star {\r\n  40% { -webkit-opacity: 0.3;}\r\n  90%,100% { -webkit-opacity: 1; -webkit-transform: scale(1.2);}\r\n}\r\n\r\n@keyframes glow-star{\r\n  40% { -webkit-opacity: 0.3; opacity: 0.3;  }\r\n  90%,100% { -webkit-opacity: 1; opacity: 1; transform: scale(1.2); border-radius: 999999px;}\r\n}\r\n\r\n.spin-earth-on-hover[_ngcontent-%COMP%]{\r\n  transition: ease 200s !important;\r\n  transform: rotate(-3600deg) !important;\r\n}\r\n\r\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{\r\n  margin: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  font-weight: 300;\r\n  -webkit-user-select: none; \r\n  -moz-user-select: none;  \r\n  user-select: none; \r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n  background: url(http://salehriaz.com/404Page/img/bg_purple.png);\r\n  background-repeat: repeat-x;\r\n  background-size: cover;\r\n  background-position: left top;\r\n  height: 100%;\r\n  overflow: hidden;  \r\n}\r\n\r\n.btn-go-home[_ngcontent-%COMP%]{\r\n  cursor: pointer;\r\n  position: relative;\r\n  z-index: 200;\r\n  margin: 15px auto;\r\n  width: 100px;\r\n  padding: 10px 15px;\r\n  border: 1px solid var(--primary);\r\n  border-radius: 5px;\r\n  font-weight: 400;\r\n  display: block;\r\n  color: var(--font);\r\n  text-align: center;\r\n  text-decoration: none;\r\n  letter-spacing : 2px;\r\n  font-size: 11px;\r\n  transition: all 0.3s ease-in;\r\n}\r\n\r\n.btn-go-home[_ngcontent-%COMP%]:hover{\r\n  background-color: var(--primary);\r\n  color: var(--dark) !important;\r\n  transform: scale(1.05);\r\n  box-shadow: 0px 20px 20px rgba(0,0,0,0.1);\r\n}\r\n\r\n.central-body[_ngcontent-%COMP%]{\r\n\r\n  padding: 17% 5% 10% 5%;\r\n  z-index: 1;\r\n  text-align: center;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n  font-size: 128px;\r\n}\r\n\r\nh1[_ngcontent-%COMP%]    + p[_ngcontent-%COMP%] {\r\n  font-size: 32px;\r\n}\r\n\r\n.objects[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  z-index: 90;\r\n  pointer-events: none;\r\n}\r\n\r\n.object_rocket[_ngcontent-%COMP%]{\r\n  z-index: 95;\r\n  position: absolute;\r\n  transform: translateX(-50px);\r\n  top: 75%;\r\n  pointer-events: none;\r\n  -webkit-animation: rocket-movement 200s linear infinite both running;\r\n          animation: rocket-movement 200s linear infinite both running;\r\n}\r\n\r\n.object_earth[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  top: 20%;\r\n  left: 15%;\r\n  z-index: 90;\r\n\r\n}\r\n\r\n.object_moon[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  top: 12%;\r\n  left: 25%;\r\n\r\n}\r\n\r\n.object_mars[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  width: 150px;\r\n  right: 20%;\r\n  top: 35%;\r\n  transform: rotate(-11deg);\r\n}\r\n\r\n.object_astronaut[_ngcontent-%COMP%]{\r\n  -webkit-animation: rotate-astronaut 200s infinite linear both alternate;\r\n          animation: rotate-astronaut 200s infinite linear both alternate;\r\n}\r\n\r\n.box_astronaut[_ngcontent-%COMP%]{\r\n  z-index: 110 !important;\r\n  position: absolute;\r\n  top: 60%;\r\n  right: 20%;\r\n  will-change: transform;\r\n  -webkit-animation: move-astronaut 50s infinite linear both alternate;\r\n          animation: move-astronaut 50s infinite linear both alternate;\r\n}\r\n\r\n.image-404[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  z-index: 100;\r\n  pointer-events: none;\r\n}\r\n\r\n.stars[_ngcontent-%COMP%]{\r\n  background: url('overlay-stars.svg');\r\n  background-repeat: repeat;\r\n  background-size: contain;\r\n  background-position: left top;\r\n}\r\n\r\n.glowing_stars[_ngcontent-%COMP%]   .star[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  border-radius: 100%;\r\n  background-color: #fff;\r\n  width: 3px;\r\n  height: 3px;\r\n  opacity: 0.3;\r\n  will-change: opacity;\r\n}\r\n\r\n.glowing_stars[_ngcontent-%COMP%]   .star[_ngcontent-%COMP%]:nth-child(1){\r\n  top: 80%;\r\n  left: 25%;\r\n  -webkit-animation: glow-star 2s infinite ease-in-out alternate 1s;\r\n          animation: glow-star 2s infinite ease-in-out alternate 1s;\r\n}\r\n\r\n.glowing_stars[_ngcontent-%COMP%]   .star[_ngcontent-%COMP%]:nth-child(2){\r\n  top: 20%;\r\n  left: 40%;\r\n  -webkit-animation: glow-star 2s infinite ease-in-out alternate 3s;\r\n          animation: glow-star 2s infinite ease-in-out alternate 3s;\r\n}\r\n\r\n.glowing_stars[_ngcontent-%COMP%]   .star[_ngcontent-%COMP%]:nth-child(3){\r\n  top: 25%;\r\n  left: 25%;\r\n  -webkit-animation: glow-star 2s infinite ease-in-out alternate 5s;\r\n          animation: glow-star 2s infinite ease-in-out alternate 5s;\r\n}\r\n\r\n.glowing_stars[_ngcontent-%COMP%]   .star[_ngcontent-%COMP%]:nth-child(4){\r\n  top: 75%;\r\n  left: 80%;\r\n  -webkit-animation: glow-star 2s infinite ease-in-out alternate 7s;\r\n          animation: glow-star 2s infinite ease-in-out alternate 7s;\r\n}\r\n\r\n.glowing_stars[_ngcontent-%COMP%]   .star[_ngcontent-%COMP%]:nth-child(5){\r\n  top: 90%;\r\n  left: 50%;\r\n  -webkit-animation: glow-star 2s infinite ease-in-out alternate 9s;\r\n          animation: glow-star 2s infinite ease-in-out alternate 9s;\r\n}\r\n\r\n@media only screen and (max-width: 600px){\r\n  .navbar-links[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n  \r\n  .custom-navbar[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n  }\r\n  \r\n  .brand-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 120px;\r\n  }\r\n  \r\n  .box_astronaut[_ngcontent-%COMP%]{\r\n    top: 70%;\r\n  }\r\n  \r\n  .central-body[_ngcontent-%COMP%]{\r\n    padding-top: 25%;\r\n  }\r\n}\r\n\r\nfooter[_ngcontent-%COMP%] {\r\n  font-size: x-small;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdC1mb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztDQUtDOztBQUdELG9DQUFvQyxNQUFNLDJDQUEyQyxFQUFFLEVBQUU7O0FBQ3pGLDZCQUE2QixNQUFNLG1DQUFtQyxDQUFDLEVBQUU7O0FBRXpFLGdDQUFnQyxPQUFPLGtDQUFrQyxFQUFFLHlCQUF5QixHQUFHLEVBQUU7O0FBQ3pHLHVCQUF1QixPQUEyQyx5QkFBeUIsRUFBRSx5QkFBeUIsRUFBRSxFQUFFOztBQUsxSDtFQUNFLE9BQU8sNENBQTRDLENBQUM7QUFDdEQ7O0FBQ0E7RUFDRSxPQUFxRCxtQ0FBbUMsRUFBRTtBQUM1Rjs7QUFJQTtFQUNFLE9BQU8sa0NBQWtDLENBQUM7QUFDNUM7O0FBQ0E7RUFDRSxPQUEyQyx5QkFBeUIsRUFBRTtBQUN4RTs7QUFNQTtFQUNFLE1BQU0sb0JBQW9CLENBQUM7RUFDM0IsV0FBVyxrQkFBa0IsRUFBRSw2QkFBNkIsQ0FBQztBQUMvRDs7QUFDQTtFQUNFLE1BQU0sb0JBQW9CLEVBQUUsWUFBWSxHQUFHO0VBQzNDLFdBQVcsa0JBQWtCLEVBQUUsVUFBVSxFQUFpQyxxQkFBcUIsRUFBRSx1QkFBdUIsQ0FBQztBQUMzSDs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIseUJBQXlCLEVBQUUsZ0JBQWdCO0VBQzNDLHNCQUFzQixFQUFFLGVBQWUsRUFDaEIsV0FBVztFQUNsQyxpQkFBaUIsRUFBRSxvQkFBb0I7QUFDekM7O0FBRUE7RUFDRSwrREFBK0Q7RUFDL0QsMkJBQTJCO0VBQzNCLHNCQUFzQjtFQUN0Qiw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdDQUFnQztFQUNoQyxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixvQkFBb0I7RUFDcEIsZUFBZTtFQU1mLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyw2QkFBNkI7RUFDN0Isc0JBQXNCO0VBQ3RCLHlDQUF5QztBQUMzQzs7QUFFQTtBQUNBLGlCQUFpQjtFQUNmLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLDRCQUE0QjtFQUM1QixRQUFRO0VBQ1Isb0JBQW9CO0VBQ3BCLG9FQUE0RDtVQUE1RCw0REFBNEQ7QUFDOUQ7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxXQUFXO0FBQ2IscURBQXFEO0FBQ3JEOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0FBQ1g7OztDQUdDO0FBQ0Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFVBQVU7RUFDVixRQUFRO0VBQ1IseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsdUVBQStEO1VBQS9ELCtEQUErRDtBQUNqRTs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsb0VBQTREO1VBQTVELDREQUE0RDtBQUM5RDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usb0NBQXdEO0VBQ3hELHlCQUF5QjtFQUN6Qix3QkFBd0I7RUFDeEIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsUUFBUTtFQUNSLFNBQVM7RUFDVCxpRUFBeUQ7VUFBekQseURBQXlEO0FBQzNEOztBQUNBO0VBQ0UsUUFBUTtFQUNSLFNBQVM7RUFDVCxpRUFBeUQ7VUFBekQseURBQXlEO0FBQzNEOztBQUNBO0VBQ0UsUUFBUTtFQUNSLFNBQVM7RUFDVCxpRUFBeUQ7VUFBekQseURBQXlEO0FBQzNEOztBQUNBO0VBQ0UsUUFBUTtFQUNSLFNBQVM7RUFDVCxpRUFBeUQ7VUFBekQseURBQXlEO0FBQzNEOztBQUNBO0VBQ0UsUUFBUTtFQUNSLFNBQVM7RUFDVCxpRUFBeUQ7VUFBekQseURBQXlEO0FBQzNEOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxRQUFRO0VBQ1Y7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJub3QtZm91bmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcblZJRVcgSU4gRlVMTCBTQ1JFRU4gTU9ERVxyXG5GVUxMIFNDUkVFTiBNT0RFOiBodHRwOi8vc2FsZWhyaWF6LmNvbS80MDRQYWdlLzQwNC5odG1sXHJcblxyXG5EUklCQkJMRTogaHR0cHM6Ly9kcmliYmJsZS5jb20vc2hvdHMvNDMzMDE2Ny00MDQtUGFnZS1Mb3N0LUluLVNwYWNlXHJcbiovXHJcblxyXG5ALW1vei1rZXlmcmFtZXMgcm9ja2V0LW1vdmVtZW50IHsgMTAwJSB7LW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMjAwcHgsLTYwMHB4KTt9IH1cclxuQC13ZWJraXQta2V5ZnJhbWVzIHJvY2tldC1tb3ZlbWVudCB7MTAwJSB7LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMjAwcHgsLTYwMHB4KTsgfSB9XHJcbkBrZXlmcmFtZXMgcm9ja2V0LW1vdmVtZW50IHsgMTAwJSB7dHJhbnNmb3JtOiB0cmFuc2xhdGUoMTIwMHB4LC02MDBweCk7fSB9XHJcbkAtbW96LWtleWZyYW1lcyBzcGluLWVhcnRoIHsgMTAwJSB7IC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTM2MGRlZyk7IHRyYW5zaXRpb246IHRyYW5zZm9ybSAyMHM7ICB9IH1cclxuQC13ZWJraXQta2V5ZnJhbWVzIHNwaW4tZWFydGggeyAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMzYwZGVnKTsgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDIwczsgIH0gfVxyXG5Aa2V5ZnJhbWVzIHNwaW4tZWFydGh7IDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0zNjBkZWcpOyB0cmFuc2Zvcm06cm90YXRlKC0zNjBkZWcpOyB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjBzOyB9IH1cclxuXHJcbkAtbW96LWtleWZyYW1lcyBtb3ZlLWFzdHJvbmF1dCB7XHJcbiAgMTAwJSB7IC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTE2MHB4LCAtMTYwcHgpO31cclxufVxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgbW92ZS1hc3Ryb25hdXQge1xyXG4gIDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0xNjBweCwgLTE2MHB4KTt9XHJcbn1cclxuQGtleWZyYW1lcyBtb3ZlLWFzdHJvbmF1dHtcclxuICAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTYwcHgsIC0xNjBweCk7IHRyYW5zZm9ybTp0cmFuc2xhdGUoLTE2MHB4LCAtMTYwcHgpOyB9XHJcbn1cclxuQC1tb3ota2V5ZnJhbWVzIHJvdGF0ZS1hc3Ryb25hdXQge1xyXG4gIDEwMCUgeyAtbW96LXRyYW5zZm9ybTogcm90YXRlKC03MjBkZWcpO31cclxufVxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgcm90YXRlLWFzdHJvbmF1dCB7XHJcbiAgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTcyMGRlZyk7fVxyXG59XHJcbkBrZXlmcmFtZXMgcm90YXRlLWFzdHJvbmF1dHtcclxuICAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNzIwZGVnKTsgdHJhbnNmb3JtOnJvdGF0ZSgtNzIwZGVnKTsgfVxyXG59XHJcblxyXG5ALW1vei1rZXlmcmFtZXMgZ2xvdy1zdGFyIHtcclxuICA0MCUgeyAtbW96LW9wYWNpdHk6IDAuMzt9XHJcbiAgOTAlLDEwMCUgeyAtbW96LW9wYWNpdHk6IDE7IC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjIpO31cclxufVxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZ2xvdy1zdGFyIHtcclxuICA0MCUgeyAtd2Via2l0LW9wYWNpdHk6IDAuMzt9XHJcbiAgOTAlLDEwMCUgeyAtd2Via2l0LW9wYWNpdHk6IDE7IC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjIpO31cclxufVxyXG5Aa2V5ZnJhbWVzIGdsb3ctc3RhcntcclxuICA0MCUgeyAtd2Via2l0LW9wYWNpdHk6IDAuMzsgb3BhY2l0eTogMC4zOyAgfVxyXG4gIDkwJSwxMDAlIHsgLXdlYmtpdC1vcGFjaXR5OiAxOyBvcGFjaXR5OiAxOyAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4yKTsgdHJhbnNmb3JtOiBzY2FsZSgxLjIpOyBib3JkZXItcmFkaXVzOiA5OTk5OTlweDt9XHJcbn1cclxuXHJcbi5zcGluLWVhcnRoLW9uLWhvdmVye1xyXG4gIHRyYW5zaXRpb246IGVhc2UgMjAwcyAhaW1wb3J0YW50O1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKC0zNjAwZGVnKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5odG1sLCBib2R5e1xyXG4gIG1hcmdpbjogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyAvKiBTYWZhcmkgMy4xKyAqL1xyXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7IC8qIEZpcmVmb3ggMisgKi9cclxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIElFIDEwKyAqL1xyXG4gIHVzZXItc2VsZWN0OiBub25lOyAvKiBTdGFuZGFyZCBzeW50YXggKi9cclxufVxyXG5cclxuYm9keSB7XHJcbiAgYmFja2dyb3VuZDogdXJsKGh0dHA6Ly9zYWxlaHJpYXouY29tLzQwNFBhZ2UvaW1nL2JnX3B1cnBsZS5wbmcpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgdG9wO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuOyAgXHJcbn1cclxuXHJcbi5idG4tZ28taG9tZXtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDIwMDtcclxuICBtYXJnaW46IDE1cHggYXV0bztcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByaW1hcnkpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGNvbG9yOiB2YXIoLS1mb250KTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGxldHRlci1zcGFjaW5nIDogMnB4O1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW47XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluO1xyXG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluO1xyXG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW47XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbjtcclxufVxyXG5cclxuLmJ0bi1nby1ob21lOmhvdmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xyXG4gIGNvbG9yOiB2YXIoLS1kYXJrKSAhaW1wb3J0YW50O1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbiAgYm94LXNoYWRvdzogMHB4IDIwcHggMjBweCByZ2JhKDAsMCwwLDAuMSk7XHJcbn1cclxuXHJcbi5jZW50cmFsLWJvZHl7XHJcbi8qICB3aWR0aDogMTAwJTsqL1xyXG4gIHBhZGRpbmc6IDE3JSA1JSAxMCUgNSU7XHJcbiAgei1pbmRleDogMTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmgxIHtcclxuICBmb250LXNpemU6IDEyOHB4O1xyXG59XHJcbmgxICsgcCB7XHJcbiAgZm9udC1zaXplOiAzMnB4O1xyXG59XHJcblxyXG4ub2JqZWN0cyBpbWd7XHJcbiAgei1pbmRleDogOTA7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbi5vYmplY3Rfcm9ja2V0e1xyXG4gIHotaW5kZXg6IDk1O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwcHgpO1xyXG4gIHRvcDogNzUlO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIGFuaW1hdGlvbjogcm9ja2V0LW1vdmVtZW50IDIwMHMgbGluZWFyIGluZmluaXRlIGJvdGggcnVubmluZztcclxufVxyXG5cclxuLm9iamVjdF9lYXJ0aHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAyMCU7XHJcbiAgbGVmdDogMTUlO1xyXG4gIHotaW5kZXg6IDkwO1xyXG4vKiAgYW5pbWF0aW9uOiBzcGluLWVhcnRoIDEwMHMgaW5maW5pdGUgbGluZWFyIGJvdGg7Ki9cclxufVxyXG5cclxuLm9iamVjdF9tb29ue1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDEyJTtcclxuICBsZWZ0OiAyNSU7XHJcbi8qXHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIGVhc2UtaW4gOTk5OTk5OTk5OTlzO1xyXG4qL1xyXG59XHJcblxyXG4ub2JqZWN0X21hcnMge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgcmlnaHQ6IDIwJTtcclxuICB0b3A6IDM1JTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTFkZWcpO1xyXG59XHJcblxyXG4ub2JqZWN0X2FzdHJvbmF1dHtcclxuICBhbmltYXRpb246IHJvdGF0ZS1hc3Ryb25hdXQgMjAwcyBpbmZpbml0ZSBsaW5lYXIgYm90aCBhbHRlcm5hdGU7XHJcbn1cclxuXHJcbi5ib3hfYXN0cm9uYXV0e1xyXG4gIHotaW5kZXg6IDExMCAhaW1wb3J0YW50O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDYwJTtcclxuICByaWdodDogMjAlO1xyXG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XHJcbiAgYW5pbWF0aW9uOiBtb3ZlLWFzdHJvbmF1dCA1MHMgaW5maW5pdGUgbGluZWFyIGJvdGggYWx0ZXJuYXRlO1xyXG59XHJcblxyXG4uaW1hZ2UtNDA0e1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxMDA7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbi5zdGFyc3tcclxuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvb3ZlcmxheS1zdGFycy5zdmcnKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IHRvcDtcclxufVxyXG5cclxuLmdsb3dpbmdfc3RhcnMgLnN0YXJ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICB3aWR0aDogM3B4O1xyXG4gIGhlaWdodDogM3B4O1xyXG4gIG9wYWNpdHk6IDAuMztcclxuICB3aWxsLWNoYW5nZTogb3BhY2l0eTtcclxufVxyXG5cclxuLmdsb3dpbmdfc3RhcnMgLnN0YXI6bnRoLWNoaWxkKDEpe1xyXG4gIHRvcDogODAlO1xyXG4gIGxlZnQ6IDI1JTtcclxuICBhbmltYXRpb246IGdsb3ctc3RhciAycyBpbmZpbml0ZSBlYXNlLWluLW91dCBhbHRlcm5hdGUgMXM7XHJcbn1cclxuLmdsb3dpbmdfc3RhcnMgLnN0YXI6bnRoLWNoaWxkKDIpe1xyXG4gIHRvcDogMjAlO1xyXG4gIGxlZnQ6IDQwJTtcclxuICBhbmltYXRpb246IGdsb3ctc3RhciAycyBpbmZpbml0ZSBlYXNlLWluLW91dCBhbHRlcm5hdGUgM3M7XHJcbn1cclxuLmdsb3dpbmdfc3RhcnMgLnN0YXI6bnRoLWNoaWxkKDMpe1xyXG4gIHRvcDogMjUlO1xyXG4gIGxlZnQ6IDI1JTtcclxuICBhbmltYXRpb246IGdsb3ctc3RhciAycyBpbmZpbml0ZSBlYXNlLWluLW91dCBhbHRlcm5hdGUgNXM7XHJcbn1cclxuLmdsb3dpbmdfc3RhcnMgLnN0YXI6bnRoLWNoaWxkKDQpe1xyXG4gIHRvcDogNzUlO1xyXG4gIGxlZnQ6IDgwJTtcclxuICBhbmltYXRpb246IGdsb3ctc3RhciAycyBpbmZpbml0ZSBlYXNlLWluLW91dCBhbHRlcm5hdGUgN3M7XHJcbn1cclxuLmdsb3dpbmdfc3RhcnMgLnN0YXI6bnRoLWNoaWxkKDUpe1xyXG4gIHRvcDogOTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICBhbmltYXRpb246IGdsb3ctc3RhciAycyBpbmZpbml0ZSBlYXNlLWluLW91dCBhbHRlcm5hdGUgOXM7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpe1xyXG4gIC5uYXZiYXItbGlua3N7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICBcclxuICAuY3VzdG9tLW5hdmJhcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmJyYW5kLWxvZ28gaW1ne1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gIH1cclxuICBcclxuICAuYm94X2FzdHJvbmF1dHtcclxuICAgIHRvcDogNzAlO1xyXG4gIH1cclxuICBcclxuICAuY2VudHJhbC1ib2R5e1xyXG4gICAgcGFkZGluZy10b3A6IDI1JTtcclxuICB9XHJcbn1cclxuXHJcbmZvb3RlciB7XHJcbiAgZm9udC1zaXplOiB4LXNtYWxsO1xyXG59Il19 */"] });


/***/ }),

/***/ "vGr5":
/*!***********************************************!*\
  !*** ./src/app/pipes/duration-string.pipe.ts ***!
  \***********************************************/
/*! exports provided: DurationStringPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DurationStringPipe", function() { return DurationStringPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class DurationStringPipe {
    transform(value) {
        const seconds = Number(value);
        return `${Math.floor(seconds / 60)}:${Math.floor(seconds % 60).toString().padStart(2, '0')}`;
    }
}
DurationStringPipe.ɵfac = function DurationStringPipe_Factory(t) { return new (t || DurationStringPipe)(); };
DurationStringPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "durationString", type: DurationStringPipe, pure: true });


/***/ }),

/***/ "vLLP":
/*!************************************************!*\
  !*** ./src/app/utils/zippy/zippy.component.ts ***!
  \************************************************/
/*! exports provided: ZippyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZippyComponent", function() { return ZippyComponent; });
/* harmony import */ var _zippy_component_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zippy.component.animations */ "6lfv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


const _c0 = ["*"];
class ZippyComponent {
    constructor() {
        this.title = 'Title';
        this.expanded = false;
        this.toggle = () => this.expanded = !this.expanded;
    }
}
ZippyComponent.ɵfac = function ZippyComponent_Factory(t) { return new (t || ZippyComponent)(); };
ZippyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ZippyComponent, selectors: [["zippy"]], inputs: { title: "title" }, ngContentSelectors: _c0, decls: 8, vars: 4, consts: [[1, "zippy"], [1, "zippy-heading", 3, "click"], [1, "float-right", "lni", "lni-down-chevron"], [1, "zippy-body"]], template: function ZippyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ZippyComponent_Template_div_click_2_listener() { return ctx.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("expanded", ctx.expanded);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@expandCollapse", ctx.expanded ? "expanded" : "collapsed");
    } }, styles: ["span[_ngcontent-%COMP%] { cursor: pointer; }\r\n\r\n.expanded[_ngcontent-%COMP%] { background-color: var(--background-secondary); }\r\n\r\n.zippy[_ngcontent-%COMP%] {\r\n    margin: 15px 0;\r\n    border: 1px solid #f0f0f0;\r\n    border-radius: 5px;\r\n}\r\n\r\n.zippy-heading[_ngcontent-%COMP%]\r\n{\r\n    font-weight: bold;\r\n    padding: 20px;\r\n    cursor: pointer;\r\n}\r\n\r\n.zippy-body[_ngcontent-%COMP%] \r\n{\r\n    padding: 20px;\r\n    overflow-y: hidden;\r\n}\r\n\r\n.expanded[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    transform: rotate(180deg);\r\n}\r\n\r\ni[_ngcontent-%COMP%] {\r\n    transition: 300ms all ease;\r\n    transform: rotate(0deg);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInppcHB5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxlQUFlLEVBQUU7O0FBRXhCLFlBQVksNkNBQTZDLEVBQUU7O0FBQzNEO0lBQ0ksY0FBYztJQUNkLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEI7O0FBQ0E7O0lBRUksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixlQUFlO0FBQ25COztBQUNBOztJQUVJLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSwwQkFBMEI7SUFDMUIsdUJBQXVCO0FBQzNCIiwiZmlsZSI6InppcHB5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzcGFuIHsgY3Vyc29yOiBwb2ludGVyOyB9XHJcblxyXG4uZXhwYW5kZWQgeyBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLXNlY29uZGFyeSk7IH1cclxuLnppcHB5IHtcclxuICAgIG1hcmdpbjogMTVweCAwO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2YwZjBmMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4uemlwcHktaGVhZGluZ1xyXG57XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnppcHB5LWJvZHkgXHJcbntcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbn1cclxuXHJcbi5leHBhbmRlZCBpIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbn1cclxuaSB7XHJcbiAgICB0cmFuc2l0aW9uOiAzMDBtcyBhbGwgZWFzZTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG59Il19 */"], data: { animation: [_zippy_component_animations__WEBPACK_IMPORTED_MODULE_0__["expandCollapse"]] } });


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
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/not-found/not-found.component */ "v2M4");
/* harmony import */ var _authentication_auth_auth_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication/auth/auth.component */ "UxaF");
/* harmony import */ var _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authentication/login/login.component */ "kuBs");
/* harmony import */ var _authentication_logout_logout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./authentication/logout/logout.component */ "HZi2");
/* harmony import */ var _dashboard_me_me_overview_me_overview_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/me/me-overview/me-overview.component */ "rpeu");
/* harmony import */ var _dashboard_guilds_guild_overview_guild_overview_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/guilds/guild-overview/guild-overview.component */ "eepR");
/* harmony import */ var _guards_dashboard_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./guards/dashboard-auth.guard */ "HfTq");
/* harmony import */ var _guards_guild_auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./guards/guild-auth.guard */ "Sova");
/* harmony import */ var _guards_can_deactivate_dashboard_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./guards/can-deactivate-dashboard.guard */ "rTQu");
/* harmony import */ var _authentication_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./authentication/sign-up/sign-up.component */ "3RvI");
/* harmony import */ var _dashboard_guilds_guild_settings_overview_guild_settings_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dashboard/guilds/guild-settings/overview/guild-settings.component */ "PT5O");
/* harmony import */ var _dashboard_guilds_guild_settings_invites_invites_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dashboard/guilds/guild-settings/invites/invites.component */ "nHKN");
/* harmony import */ var _dashboard_guilds_guild_settings_roles_roles_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dashboard/guilds/guild-settings/roles/roles.component */ "OY6s");
/* harmony import */ var _guards_dmchannel_auth_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./guards/dmchannel-auth.guard */ "bYG1");
/* harmony import */ var _dashboard_me_dmchannel_dm_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dashboard/me/dmchannel/dm.component */ "f1HG");
/* harmony import */ var _dashboard_me_user_settings_user_settings_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dashboard/me/user-settings/user-settings.component */ "h1rg");
/* harmony import */ var _pages_developers_developers_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/developers/developers.component */ "cFTX");
/* harmony import */ var _pages_developers_application_application_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/developers/application/application.component */ "QRQu");
/* harmony import */ var _pages_developers_bot_user_bot_user_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/developers/bot-user/bot-user.component */ "TOw+");
/* harmony import */ var _guards_developers_auth_guard__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./guards/developers-auth.guard */ "w0XD");
/* harmony import */ var _authentication_verify_verify_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./authentication/verify/verify.component */ "cDDQ");
/* harmony import */ var _dashboard_me_user_account_user_account_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./dashboard/me/user-account/user-account.component */ "Ce9m");
/* harmony import */ var _pages_invite_invite_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/invite/invite.component */ "b1Gg");
/* harmony import */ var _utils_external_redirect__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./utils/external-redirect */ "Sh9F");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _utils_coming_soon_coming_soon_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./utils/coming-soon/coming-soon.component */ "g8CY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/core */ "fXoL");






























const routes = [
    { path: '', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"], },
    { path: 'auth/verify', component: _authentication_verify_verify_component__WEBPACK_IMPORTED_MODULE_22__["VerifyComponent"], },
    { path: 'auth', component: _authentication_auth_auth_component__WEBPACK_IMPORTED_MODULE_3__["AuthComponent"], },
    { path: 'changelog', component: Object(_utils_external_redirect__WEBPACK_IMPORTED_MODULE_25__["externalRedirect"])(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_26__["environment"].docsURL}/general/changelog`), },
    { path: 'docs', component: Object(_utils_external_redirect__WEBPACK_IMPORTED_MODULE_25__["externalRedirect"])(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_26__["environment"].docsURL}`), },
    { path: 'privacy', component: Object(_utils_external_redirect__WEBPACK_IMPORTED_MODULE_25__["externalRedirect"])(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_26__["environment"].docsURL}/legal/privacy`), },
    { path: 'terms', component: Object(_utils_external_redirect__WEBPACK_IMPORTED_MODULE_25__["externalRedirect"])(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_26__["environment"].docsURL}/legal/terms`), },
    {
        path: 'channels/@me',
        component: _dashboard_me_me_overview_me_overview_component__WEBPACK_IMPORTED_MODULE_6__["DashboardOverviewComponent"],
        canActivate: [_guards_dashboard_auth_guard__WEBPACK_IMPORTED_MODULE_8__["DashboardAuthGuard"]],
    },
    {
        path: 'channels/@me/settings',
        component: _dashboard_me_user_settings_user_settings_component__WEBPACK_IMPORTED_MODULE_17__["UserSettingsComponent"],
        canActivate: [_guards_dashboard_auth_guard__WEBPACK_IMPORTED_MODULE_8__["DashboardAuthGuard"]],
    },
    {
        path: 'channels/@me/settings/account',
        component: _dashboard_me_user_account_user_account_component__WEBPACK_IMPORTED_MODULE_23__["UserAccountComponent"],
        canActivate: [_guards_dashboard_auth_guard__WEBPACK_IMPORTED_MODULE_8__["DashboardAuthGuard"]],
    },
    {
        path: 'channels/@me/:channelId',
        component: _dashboard_me_dmchannel_dm_component__WEBPACK_IMPORTED_MODULE_16__["DMComponent"],
        canActivate: [_guards_dashboard_auth_guard__WEBPACK_IMPORTED_MODULE_8__["DashboardAuthGuard"], _guards_dmchannel_auth_guard__WEBPACK_IMPORTED_MODULE_15__["DMChannelAuthGuard"]],
    },
    {
        path: 'channels/:guildId',
        component: _dashboard_guilds_guild_overview_guild_overview_component__WEBPACK_IMPORTED_MODULE_7__["GuildOverviewComponent"],
        canActivate: [_guards_dashboard_auth_guard__WEBPACK_IMPORTED_MODULE_8__["DashboardAuthGuard"], _guards_guild_auth_guard__WEBPACK_IMPORTED_MODULE_9__["GuildAuthGuard"]],
        canDeactivate: [_guards_can_deactivate_dashboard_guard__WEBPACK_IMPORTED_MODULE_10__["CanDeactivateDashboard"]],
    },
    {
        path: 'channels/:guildId/settings',
        component: _dashboard_guilds_guild_settings_overview_guild_settings_component__WEBPACK_IMPORTED_MODULE_12__["GuildSettingsComponent"],
        canActivate: [_guards_dashboard_auth_guard__WEBPACK_IMPORTED_MODULE_8__["DashboardAuthGuard"], _guards_guild_auth_guard__WEBPACK_IMPORTED_MODULE_9__["GuildAuthGuard"]],
        canDeactivate: [_guards_can_deactivate_dashboard_guard__WEBPACK_IMPORTED_MODULE_10__["CanDeactivateDashboard"]],
    },
    {
        path: 'channels/:guildId/roles',
        component: _dashboard_guilds_guild_settings_roles_roles_component__WEBPACK_IMPORTED_MODULE_14__["RolesComponent"],
        canActivate: [_guards_dashboard_auth_guard__WEBPACK_IMPORTED_MODULE_8__["DashboardAuthGuard"], _guards_guild_auth_guard__WEBPACK_IMPORTED_MODULE_9__["GuildAuthGuard"]],
        canDeactivate: [_guards_can_deactivate_dashboard_guard__WEBPACK_IMPORTED_MODULE_10__["CanDeactivateDashboard"]],
    },
    {
        path: 'channels/:guildId/bots',
        component: _utils_coming_soon_coming_soon_component__WEBPACK_IMPORTED_MODULE_27__["ComingSoonComponent"],
    },
    {
        path: 'channels/:guildId/invites',
        component: _dashboard_guilds_guild_settings_invites_invites_component__WEBPACK_IMPORTED_MODULE_13__["InvitesComponent"],
        canActivate: [_guards_dashboard_auth_guard__WEBPACK_IMPORTED_MODULE_8__["DashboardAuthGuard"], _guards_guild_auth_guard__WEBPACK_IMPORTED_MODULE_9__["GuildAuthGuard"]],
        canDeactivate: [_guards_can_deactivate_dashboard_guard__WEBPACK_IMPORTED_MODULE_10__["CanDeactivateDashboard"]],
    },
    {
        path: 'channels/:guildId/:channelId',
        component: _dashboard_guilds_guild_overview_guild_overview_component__WEBPACK_IMPORTED_MODULE_7__["GuildOverviewComponent"],
        canActivate: [_guards_dashboard_auth_guard__WEBPACK_IMPORTED_MODULE_8__["DashboardAuthGuard"], _guards_guild_auth_guard__WEBPACK_IMPORTED_MODULE_9__["GuildAuthGuard"]],
        canDeactivate: [_guards_can_deactivate_dashboard_guard__WEBPACK_IMPORTED_MODULE_10__["CanDeactivateDashboard"]],
    },
    { path: 'developers', component: _utils_coming_soon_coming_soon_component__WEBPACK_IMPORTED_MODULE_27__["ComingSoonComponent"], },
    {
        path: `developers/applications/:id/user`,
        canActivate: [_guards_developers_auth_guard__WEBPACK_IMPORTED_MODULE_21__["DevelopersAuthGuard"]],
        component: _pages_developers_bot_user_bot_user_component__WEBPACK_IMPORTED_MODULE_20__["BotUserComponent"],
    },
    {
        path: `developers/applications/:id`,
        canActivate: [_guards_developers_auth_guard__WEBPACK_IMPORTED_MODULE_21__["DevelopersAuthGuard"]],
        component: _pages_developers_application_application_component__WEBPACK_IMPORTED_MODULE_19__["ApplicationComponent"],
    },
    { path: `developers/applications`, redirectTo: 'developers', },
    {
        path: 'developers',
        canActivate: [_guards_developers_auth_guard__WEBPACK_IMPORTED_MODULE_21__["DevelopersAuthGuard"]],
        component: _pages_developers_developers_component__WEBPACK_IMPORTED_MODULE_18__["DevelopersComponent"],
    },
    { path: 'invite/:id', component: _pages_invite_invite_component__WEBPACK_IMPORTED_MODULE_24__["InviteComponent"], },
    { path: 'login', component: _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], },
    { path: 'logout', component: _authentication_logout_logout_component__WEBPACK_IMPORTED_MODULE_5__["LogoutComponent"], },
    { path: 'sign-up', component: _authentication_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_11__["SignUpComponent"], },
    { path: '**', component: _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"], },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, {
                initialNavigation: 'enabled',
                relativeLinkResolution: 'legacy',
            })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "w0XD":
/*!*************************************************!*\
  !*** ./src/app/guards/developers-auth.guard.ts ***!
  \*************************************************/
/*! exports provided: DevelopersAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevelopersAuthGuard", function() { return DevelopersAuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "qfBg");




class DevelopersAuthGuard {
    constructor(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    canActivate(route, state) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.userService.init();
            if (!this.userService.self)
                this.router.navigate(['/login'], {
                    queryParams: { redirect: route.url },
                });
            return true;
        });
    }
}
DevelopersAuthGuard.ɵfac = function DevelopersAuthGuard_Factory(t) { return new (t || DevelopersAuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"])); };
DevelopersAuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DevelopersAuthGuard, factory: DevelopersAuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "w4JF":
/*!*******************************************************!*\
  !*** ./src/app/cool/submarine/submarine.component.ts ***!
  \*******************************************************/
/*! exports provided: SubmarineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmarineComponent", function() { return SubmarineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SubmarineComponent {
}
SubmarineComponent.ɵfac = function SubmarineComponent_Factory(t) { return new (t || SubmarineComponent)(); };
SubmarineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SubmarineComponent, selectors: [["app-submarine"]], decls: 21, vars: 0, consts: [[1, "seaContainer"], [1, "submarine__container"], [1, "submarine__sail"], [1, "submarine__sail-shadow", "dark1"], [1, "submarine__sail-shadow", "light1"], [1, "submarine__sail-shadow", "dark2"], [1, "submarine__body"], [1, "submarine__window", "one"], [1, "submarine__window", "two"], [1, "submarine__shadow-dark"], [1, "submarine__shadow-light"], [1, "submarine__shadow-arcLight"], [1, "bubbles__container"], [1, "bubbles", "bubble-1"], [1, "bubbles", "bubble-2"], [1, "bubbles", "bubble-3"], [1, "bubbles", "bubble-4"], [1, "submarine__propeller"], [1, "propeller__perspective"], [1, "submarine__propeller-parts", "darkOne"], [1, "submarine__propeller-parts", "lightOne"]], template: function SubmarineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".submarine__container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 400px;\n  height: 200px;\n  transform: translate(-50%, -50%);\n}\n.submarine__body[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 250px;\n  height: 80px;\n  background: #e30449;\n  border-radius: 50px;\n  transform: translate(-50%, -50%);\n}\n.submarine__propeller[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 80%;\n  top: 50%;\n  width: 30px;\n  height: 50px;\n  transform: translate(0%, -50%);\n  perspective: 600px;\n}\n.propeller__perspective[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  transition: transform 1s;\n  transform-style: preserve-3d;\n  -webkit-animation: rotateInfinite 1s linear infinite;\n          animation: rotateInfinite 1s linear infinite;\n  cursor: pointer;\n}\n.submarine__propeller-parts[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0%;\n  width: 100%;\n  height: 100%;\n  top: 0%;\n  perspective: 1000px;\n  transform-style: preserve-3d;\n}\n.darkOne[_ngcontent-%COMP%] {\n  top: 0%;\n  background: #f7ac08;\n  transform: rotateY(180deg) rotateX(225deg);\n}\n.lightOne[_ngcontent-%COMP%] {\n  top: 0%;\n  background: #f7e349;\n  transform: rotateX(45deg);\n}\n.submarine__sail[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 40%;\n  left: 50%;\n  width: 90px;\n  height: 50px;\n  transform: translate(-50%, -100%);\n  background: #c6003d;\n  -webkit-clip-path: polygon(0% 0%, 70% 0%, 100% 100%, 0% 100%);\n          clip-path: polygon(0% 0%, 70% 0%, 100% 100%, 0% 100%);\n}\n.submarine__sail-shadow[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 160%;\n  height: 10%;\n  background: #a10532;\n  border-radius: 5px;\n}\n.dark1[_ngcontent-%COMP%] {\n  left: 0%;\n  top: 0%;\n  transform: translate(0%, -33%);\n}\n.dark2[_ngcontent-%COMP%] {\n  left: 0%;\n  top: 50%;\n}\n.light1[_ngcontent-%COMP%] {\n  left: 20%;\n  top: 20%;\n  width: 50%;\n  background: #ef689e;\n}\n.submarine__window[_ngcontent-%COMP%] {\n  width: 25px;\n  height: 25px;\n  border-radius: 100%;\n  background-image: linear-gradient(45deg, #c9e5d9, #fff);\n  border: 8px solid #a10532;\n  z-index: 10;\n  -webkit-animation: shadow-change 1s linear infinite;\n          animation: shadow-change 1s linear infinite;\n}\n.one[_ngcontent-%COMP%], .two[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n.one[_ngcontent-%COMP%] {\n  left: 40%;\n}\n.two[_ngcontent-%COMP%] {\n  left: 20%;\n}\n.submarine__shadow-dark[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 70%;\n  top: 50%;\n  width: 70px;\n  height: 10px;\n  border-radius: 5px;\n  transform: translate(-50%, -50%);\n  background: #a10532;\n}\n.submarine__shadow-light[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 35%;\n  top: 13%;\n  width: 100px;\n  height: 6px;\n  border-radius: 5px;\n  transform: translate(-50%, -50%);\n  background: #ef689e;\n}\n.submarine__shadow-arcLight[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 65%;\n  left: 80%;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background: #ef689e;\n}\n.submarine__periscope[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0%;\n  left: 40%;\n  width: 20px;\n  height: 50px;\n  border-right: 10px solid #e92d77;\n  border-top: 10px solid #c6003d;\n  border-left: 0px solid transparent;\n  border-bottom: 0px solid transparent;\n  border-top-right-radius: 10px;\n}\n.submarine__periscope-glass[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 40%;\n  top: 0%;\n  width: 5px;\n  height: 15px;\n  background: #f7ac08;\n  transform: translate(-50%, -15%);\n}\n.light[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0%;\n  left: 0%;\n  width: 500px;\n  height: 100px;\n  background: linear-gradient(to left, #817e97, #130560);\n \n  -webkit-clip-path: polygon(0% 0%, 50% 45%, 50% 55%, 0% 100%);\n          clip-path: polygon(0% 0%, 50% 45%, 50% 55%, 0% 100%);\n  transform: translate(-18%, -45%);\n}\n.bubbles__container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 55%;\n  width: 100px;\n  height: 50px;\n  transform: translate(100%, -50%);\n}\n.bubbles[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  border-radius: 100%;\n  left: 5%;\n  top: 5%;\n  background: #fff;\n  opacity: 0.8;\n}\n.bubble-1[_ngcontent-%COMP%] {\n  top: 15%;\n  left: 1%;\n  opacity: 0;\n  -webkit-animation: move-right 1s infinite linear;\n          animation: move-right 1s infinite linear;\n  -webkit-animation-delay: 0.25s;\n          animation-delay: 0.25s;\n}\n.bubble-2[_ngcontent-%COMP%] {\n  top: 30%;\n  left: 1%;\n  opacity: 0;\n  -webkit-animation: move-right 1s infinite linear;\n          animation: move-right 1s infinite linear;\n  -webkit-animation-delay: 0.5s;\n          animation-delay: 0.5s;\n}\n.bubble-3[_ngcontent-%COMP%] {\n  top: 45%;\n  left: 1%;\n  opacity: 0;\n  -webkit-animation: move-right 1s infinite linear;\n          animation: move-right 1s infinite linear;\n  -webkit-animation-delay: 0.75s;\n          animation-delay: 0.75s;\n}\n.bubble-4[_ngcontent-%COMP%] {\n  top: 60%;\n  left: 1%;\n  opacity: 0;\n  -webkit-animation: move-right 1s infinite linear;\n          animation: move-right 1s infinite linear;\n  -webkit-animation-delay: 1s;\n          animation-delay: 1s;\n}\n.ground__container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 75%;\n  left: 0%;\n  width: 100%;\n  height: 25%;\n  background: #08003b;\n  margin-top: 20px;\n}\n.ground1[_ngcontent-%COMP%] {\n  top: 75%;\n  height: 100%;\n  background: #0c0051;\n}\n.ground2[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 35%;\n  width: 100%;\n  height: 100%;\n  background: #08003b;\n}\n.ground[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 60px;\n  height: 60px;\n  border-radius: 100%;\n}\n.ground1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: #0c0051;\n}\n.ground2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: #08003b;\n  width: 80px;\n  height: 80px;\n  border-radius: 100%;\n  transform: translateY(30%);\n}\n.up-1[_ngcontent-%COMP%] {\n  left: 0%;\n  top: -2px;\n  -webkit-animation: moveThegroundRight 3s infinite linear;\n          animation: moveThegroundRight 3s infinite linear;\n}\n.up-2[_ngcontent-%COMP%] {\n  left: -10%;\n  top: -4px;\n  -webkit-animation: moveThegroundRight 4s infinite linear;\n          animation: moveThegroundRight 4s infinite linear;\n}\n.up-3[_ngcontent-%COMP%] {\n  left: -20%;\n  top: -6px;\n  -webkit-animation: moveThegroundRight 5s infinite linear;\n          animation: moveThegroundRight 5s infinite linear;\n}\n.up-4[_ngcontent-%COMP%] {\n  left: -30%;\n  top: -8px;\n  -webkit-animation: moveThegroundRight 6s infinite linear;\n          animation: moveThegroundRight 6s infinite linear;\n}\n.up-5[_ngcontent-%COMP%] {\n  left: -40%;\n  top: -10px;\n  -webkit-animation: moveThegroundRight 7s infinite linear;\n          animation: moveThegroundRight 7s infinite linear;\n}\n.up-6[_ngcontent-%COMP%] {\n  left: -50%;\n  top: -12px;\n  -webkit-animation: moveThegroundRight 8s infinite linear;\n          animation: moveThegroundRight 8s infinite linear;\n}\n.up-7[_ngcontent-%COMP%] {\n  left: -60%;\n  top: -14px;\n  -webkit-animation: moveThegroundRight 9s infinite linear;\n          animation: moveThegroundRight 9s infinite linear;\n}\n.up-8[_ngcontent-%COMP%] {\n  left: -70%;\n  top: -16px;\n  -webkit-animation: moveThegroundRight 10s infinite linear;\n          animation: moveThegroundRight 10s infinite linear;\n}\n.up-9[_ngcontent-%COMP%] {\n  left: -80%;\n  top: -18px;\n  -webkit-animation: moveThegroundRight 11s infinite linear;\n          animation: moveThegroundRight 11s infinite linear;\n}\n.up-10[_ngcontent-%COMP%] {\n  left: -90%;\n  top: -20px;\n  -webkit-animation: moveThegroundRight 12s infinite linear;\n          animation: moveThegroundRight 12s infinite linear;\n}\n.up-11[_ngcontent-%COMP%] {\n  left: -100%;\n  top: -22px;\n  -webkit-animation: moveThegroundRight 13s infinite linear;\n          animation: moveThegroundRight 13s infinite linear;\n}\n.up-12[_ngcontent-%COMP%] {\n  left: -110%;\n  top: -24px;\n  -webkit-animation: moveThegroundRight 14s infinite linear;\n          animation: moveThegroundRight 14s infinite linear;\n}\n.up-13[_ngcontent-%COMP%] {\n  left: -120%;\n  top: -26px;\n  -webkit-animation: moveThegroundRight 15s infinite linear;\n          animation: moveThegroundRight 15s infinite linear;\n}\n.up-14[_ngcontent-%COMP%] {\n  left: -130%;\n  top: -28px;\n  -webkit-animation: moveThegroundRight 16s infinite linear;\n          animation: moveThegroundRight 16s infinite linear;\n}\n.up-15[_ngcontent-%COMP%] {\n  left: -140%;\n  top: -30px;\n  -webkit-animation: moveThegroundRight 17s infinite linear;\n          animation: moveThegroundRight 17s infinite linear;\n}\n.up-16[_ngcontent-%COMP%] {\n  left: -150%;\n  top: -32px;\n  -webkit-animation: moveThegroundRight 18s infinite linear;\n          animation: moveThegroundRight 18s infinite linear;\n}\n.up-17[_ngcontent-%COMP%] {\n  left: -160%;\n  top: -34px;\n  -webkit-animation: moveThegroundRight 19s infinite linear;\n          animation: moveThegroundRight 19s infinite linear;\n}\n.up-18[_ngcontent-%COMP%] {\n  left: -170%;\n  top: -36px;\n  -webkit-animation: moveThegroundRight 20s infinite linear;\n          animation: moveThegroundRight 20s infinite linear;\n}\n.up-19[_ngcontent-%COMP%] {\n  left: -180%;\n  top: -38px;\n  -webkit-animation: moveThegroundRight 21s infinite linear;\n          animation: moveThegroundRight 21s infinite linear;\n}\n.up-20[_ngcontent-%COMP%] {\n  left: -190%;\n  top: -40px;\n  -webkit-animation: moveThegroundRight 22s infinite linear;\n          animation: moveThegroundRight 22s infinite linear;\n}\n@-webkit-keyframes shadow-change {\n  0%, 100% {\n    background-image: linear-gradient(45deg, #c9e5d9 0%, #c9e5d9 20%, #fff 21%, #fff 39%, #c9e5d9 40%, #fff 41%, #fff 59%, #c9e5d9 60%);\n }\n  20% {\n    background-image: linear-gradient(45deg, #c9e5d9 20%, #c9e5d9 40%, #fff 41%, #fff 59%, #c9e5d9 60%, #fff 61%, #fff 79%, #c9e5d9 80%);\n }\n  40% {\n    background-image: linear-gradient(45deg, #c9e5d9 40%, #c9e5d9 60%, #fff 61%, #fff 79%, #c9e5d9 80%, #fff 81%, #fff 99%, #c9e5d9 0%);\n }\n  60% {\n    background-image: linear-gradient(45deg, #c9e5d9 60%, #c9e5d9 80%, #fff 81%, #fff 99%, #c9e5d9 0%, #fff 1%, #fff 19%, #c9e5d9 20%);\n }\n  80% {\n    background-image: linear-gradient(45deg, #c9e5d9 80%, #c9e5d9 0%, #fff 1%, #fff 19%, #c9e5d9 20%, #fff 21%, #fff 39%, #c9e5d9 40%);\n }\n}\n@keyframes shadow-change {\n  0%, 100% {\n    background-image: linear-gradient(45deg, #c9e5d9 0%, #c9e5d9 20%, #fff 21%, #fff 39%, #c9e5d9 40%, #fff 41%, #fff 59%, #c9e5d9 60%);\n }\n  20% {\n    background-image: linear-gradient(45deg, #c9e5d9 20%, #c9e5d9 40%, #fff 41%, #fff 59%, #c9e5d9 60%, #fff 61%, #fff 79%, #c9e5d9 80%);\n }\n  40% {\n    background-image: linear-gradient(45deg, #c9e5d9 40%, #c9e5d9 60%, #fff 61%, #fff 79%, #c9e5d9 80%, #fff 81%, #fff 99%, #c9e5d9 0%);\n }\n  60% {\n    background-image: linear-gradient(45deg, #c9e5d9 60%, #c9e5d9 80%, #fff 81%, #fff 99%, #c9e5d9 0%, #fff 1%, #fff 19%, #c9e5d9 20%);\n }\n  80% {\n    background-image: linear-gradient(45deg, #c9e5d9 80%, #c9e5d9 0%, #fff 1%, #fff 19%, #c9e5d9 20%, #fff 21%, #fff 39%, #c9e5d9 40%);\n }\n}\n@-webkit-keyframes move-right {\n  0% {\n    opacity: 0;\n }\n  10% {\n    opacity: 0.4;\n    transform: translate(10%, 10%);\n }\n  50% {\n    opacity: 0.2;\n    transform: translate(450%, 25%);\n }\n  80% {\n    opacity: 0;\n    transform: translateX(555%);\n }\n  100% {\n    opacity: 0;\n    left: 0%;\n    top: 0%;\n }\n}\n@keyframes move-right {\n  0% {\n    opacity: 0;\n }\n  10% {\n    opacity: 0.4;\n    transform: translate(10%, 10%);\n }\n  50% {\n    opacity: 0.2;\n    transform: translate(450%, 25%);\n }\n  80% {\n    opacity: 0;\n    transform: translateX(555%);\n }\n  100% {\n    opacity: 0;\n    left: 0%;\n    top: 0%;\n }\n}\n@-webkit-keyframes rotateInfinite {\n  0% {\n    transform: rotateX(0deg);\n }\n  50% {\n    transform: rotateX(180deg);\n }\n  100% {\n    transform: rotateX(360deg);\n }\n}\n@keyframes rotateInfinite {\n  0% {\n    transform: rotateX(0deg);\n }\n  50% {\n    transform: rotateX(180deg);\n }\n  100% {\n    transform: rotateX(360deg);\n }\n}\n@-webkit-keyframes moveThegroundRight {\n  90% {\n    opacity: 1;\n    left: 100%;\n }\n  95%, 100% {\n    left: 1050%;\n    opacity: 0;\n }\n}\n@keyframes moveThegroundRight {\n  90% {\n    opacity: 1;\n    left: 100%;\n }\n  95%, 100% {\n    left: 1050%;\n    opacity: 0;\n }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1Ym1hcmluZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsWUFBWTtFQUNaLGFBQWE7RUFDYixnQ0FBZ0M7QUFDbEM7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULFlBQVk7RUFDWixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixnQ0FBZ0M7QUFDbEM7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsUUFBUTtFQUNSLFdBQVc7RUFDWCxZQUFZO0VBQ1osOEJBQThCO0VBQzlCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsNEJBQTRCO0VBQzVCLG9EQUE0QztVQUE1Qyw0Q0FBNEM7RUFDNUMsZUFBZTtBQUNqQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixXQUFXO0VBQ1gsWUFBWTtFQUNaLE9BQU87RUFDUCxtQkFBbUI7RUFDbkIsNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSxPQUFPO0VBQ1AsbUJBQW1CO0VBQ25CLDBDQUEwQztBQUM1QztBQUNBO0VBQ0UsT0FBTztFQUNQLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZO0VBQ1osaUNBQWlDO0VBQ2pDLG1CQUFtQjtFQUNuQiw2REFBcUQ7VUFBckQscURBQXFEO0FBQ3ZEO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxRQUFRO0VBQ1IsT0FBTztFQUNQLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsUUFBUTtFQUNSLFFBQVE7QUFDVjtBQUNBO0VBQ0UsU0FBUztFQUNULFFBQVE7RUFDUixVQUFVO0VBQ1YsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix1REFBdUQ7RUFDdkQseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxtREFBMkM7VUFBM0MsMkNBQTJDO0FBQzdDO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLGdDQUFnQztBQUNsQztBQUNBO0VBQ0UsU0FBUztBQUNYO0FBQ0E7RUFDRSxTQUFTO0FBQ1g7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsUUFBUTtFQUNSLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdDQUFnQztFQUNoQyxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsUUFBUTtFQUNSLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGdDQUFnQztFQUNoQyxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7RUFDWixnQ0FBZ0M7RUFDaEMsOEJBQThCO0VBQzlCLGtDQUFrQztFQUNsQyxvQ0FBb0M7RUFDcEMsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULE9BQU87RUFDUCxVQUFVO0VBQ1YsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixnQ0FBZ0M7QUFDbEM7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsUUFBUTtFQUNSLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0RBQXNEO0NBQ3ZELDREQUE0RDtFQUMzRCw0REFBb0Q7VUFBcEQsb0RBQW9EO0VBQ3BELGdDQUFnQztBQUNsQztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsWUFBWTtFQUNaLFlBQVk7RUFDWixnQ0FBZ0M7QUFDbEM7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixRQUFRO0VBQ1IsT0FBTztFQUNQLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLFFBQVE7RUFDUixRQUFRO0VBQ1IsVUFBVTtFQUNWLGdEQUF3QztVQUF4Qyx3Q0FBd0M7RUFDeEMsOEJBQXNCO1VBQXRCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsUUFBUTtFQUNSLFFBQVE7RUFDUixVQUFVO0VBQ1YsZ0RBQXdDO1VBQXhDLHdDQUF3QztFQUN4Qyw2QkFBcUI7VUFBckIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxRQUFRO0VBQ1IsUUFBUTtFQUNSLFVBQVU7RUFDVixnREFBd0M7VUFBeEMsd0NBQXdDO0VBQ3hDLDhCQUFzQjtVQUF0QixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLFFBQVE7RUFDUixRQUFRO0VBQ1IsVUFBVTtFQUNWLGdEQUF3QztVQUF4Qyx3Q0FBd0M7RUFDeEMsMkJBQW1CO1VBQW5CLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixRQUFRO0VBQ1IsV0FBVztFQUNYLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxRQUFRO0VBQ1IsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQiwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLFFBQVE7RUFDUixTQUFTO0VBQ1Qsd0RBQWdEO1VBQWhELGdEQUFnRDtBQUNsRDtBQUNBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCx3REFBZ0Q7VUFBaEQsZ0RBQWdEO0FBQ2xEO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULHdEQUFnRDtVQUFoRCxnREFBZ0Q7QUFDbEQ7QUFDQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1Qsd0RBQWdEO1VBQWhELGdEQUFnRDtBQUNsRDtBQUNBO0VBQ0UsVUFBVTtFQUNWLFVBQVU7RUFDVix3REFBZ0Q7VUFBaEQsZ0RBQWdEO0FBQ2xEO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsVUFBVTtFQUNWLHdEQUFnRDtVQUFoRCxnREFBZ0Q7QUFDbEQ7QUFDQTtFQUNFLFVBQVU7RUFDVixVQUFVO0VBQ1Ysd0RBQWdEO1VBQWhELGdEQUFnRDtBQUNsRDtBQUNBO0VBQ0UsVUFBVTtFQUNWLFVBQVU7RUFDVix5REFBaUQ7VUFBakQsaURBQWlEO0FBQ25EO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsVUFBVTtFQUNWLHlEQUFpRDtVQUFqRCxpREFBaUQ7QUFDbkQ7QUFDQTtFQUNFLFVBQVU7RUFDVixVQUFVO0VBQ1YseURBQWlEO1VBQWpELGlEQUFpRDtBQUNuRDtBQUNBO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVix5REFBaUQ7VUFBakQsaURBQWlEO0FBQ25EO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLHlEQUFpRDtVQUFqRCxpREFBaUQ7QUFDbkQ7QUFDQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1YseURBQWlEO1VBQWpELGlEQUFpRDtBQUNuRDtBQUNBO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVix5REFBaUQ7VUFBakQsaURBQWlEO0FBQ25EO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLHlEQUFpRDtVQUFqRCxpREFBaUQ7QUFDbkQ7QUFDQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1YseURBQWlEO1VBQWpELGlEQUFpRDtBQUNuRDtBQUNBO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVix5REFBaUQ7VUFBakQsaURBQWlEO0FBQ25EO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLHlEQUFpRDtVQUFqRCxpREFBaUQ7QUFDbkQ7QUFDQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1YseURBQWlEO1VBQWpELGlEQUFpRDtBQUNuRDtBQUNBO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVix5REFBaUQ7VUFBakQsaURBQWlEO0FBQ25EO0FBQ0E7RUFDRTtJQUNFLG1JQUFtSTtDQUN0STtFQUNDO0lBQ0Usb0lBQW9JO0NBQ3ZJO0VBQ0M7SUFDRSxtSUFBbUk7Q0FDdEk7RUFDQztJQUNFLGtJQUFrSTtDQUNySTtFQUNDO0lBQ0Usa0lBQWtJO0NBQ3JJO0FBQ0Q7QUFoQkE7RUFDRTtJQUNFLG1JQUFtSTtDQUN0STtFQUNDO0lBQ0Usb0lBQW9JO0NBQ3ZJO0VBQ0M7SUFDRSxtSUFBbUk7Q0FDdEk7RUFDQztJQUNFLGtJQUFrSTtDQUNySTtFQUNDO0lBQ0Usa0lBQWtJO0NBQ3JJO0FBQ0Q7QUFDQTtFQUNFO0lBQ0UsVUFBVTtDQUNiO0VBQ0M7SUFDRSxZQUFZO0lBQ1osOEJBQThCO0NBQ2pDO0VBQ0M7SUFDRSxZQUFZO0lBQ1osK0JBQStCO0NBQ2xDO0VBQ0M7SUFDRSxVQUFVO0lBQ1YsMkJBQTJCO0NBQzlCO0VBQ0M7SUFDRSxVQUFVO0lBQ1YsUUFBUTtJQUNSLE9BQU87Q0FDVjtBQUNEO0FBckJBO0VBQ0U7SUFDRSxVQUFVO0NBQ2I7RUFDQztJQUNFLFlBQVk7SUFDWiw4QkFBOEI7Q0FDakM7RUFDQztJQUNFLFlBQVk7SUFDWiwrQkFBK0I7Q0FDbEM7RUFDQztJQUNFLFVBQVU7SUFDViwyQkFBMkI7Q0FDOUI7RUFDQztJQUNFLFVBQVU7SUFDVixRQUFRO0lBQ1IsT0FBTztDQUNWO0FBQ0Q7QUFDQTtFQUNFO0lBQ0Usd0JBQXdCO0NBQzNCO0VBQ0M7SUFDRSwwQkFBMEI7Q0FDN0I7RUFDQztJQUNFLDBCQUEwQjtDQUM3QjtBQUNEO0FBVkE7RUFDRTtJQUNFLHdCQUF3QjtDQUMzQjtFQUNDO0lBQ0UsMEJBQTBCO0NBQzdCO0VBQ0M7SUFDRSwwQkFBMEI7Q0FDN0I7QUFDRDtBQUNBO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsVUFBVTtDQUNiO0VBQ0M7SUFDRSxXQUFXO0lBQ1gsVUFBVTtDQUNiO0FBQ0Q7QUFUQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLFVBQVU7Q0FDYjtFQUNDO0lBQ0UsV0FBVztJQUNYLFVBQVU7Q0FDYjtBQUNEIiwiZmlsZSI6InN1Ym1hcmluZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN1Ym1hcmluZV9fY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB3aWR0aDogNDAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuLnN1Ym1hcmluZV9fYm9keSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgd2lkdGg6IDI1MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIGJhY2tncm91bmQ6ICNlMzA0NDk7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuLnN1Ym1hcmluZV9fcHJvcGVsbGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA4MCU7XG4gIHRvcDogNTAlO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XG4gIHBlcnNwZWN0aXZlOiA2MDBweDtcbn1cbi5wcm9wZWxsZXJfX3BlcnNwZWN0aXZlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzO1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICBhbmltYXRpb246IHJvdGF0ZUluZmluaXRlIDFzIGxpbmVhciBpbmZpbml0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnN1Ym1hcmluZV9fcHJvcGVsbGVyLXBhcnRzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAwJTtcbiAgcGVyc3BlY3RpdmU6IDEwMDBweDtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbn1cbi5kYXJrT25lIHtcbiAgdG9wOiAwJTtcbiAgYmFja2dyb3VuZDogI2Y3YWMwODtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZykgcm90YXRlWCgyMjVkZWcpO1xufVxuLmxpZ2h0T25lIHtcbiAgdG9wOiAwJTtcbiAgYmFja2dyb3VuZDogI2Y3ZTM0OTtcbiAgdHJhbnNmb3JtOiByb3RhdGVYKDQ1ZGVnKTtcbn1cbi5zdWJtYXJpbmVfX3NhaWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDAlO1xuICBsZWZ0OiA1MCU7XG4gIHdpZHRoOiA5MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0xMDAlKTtcbiAgYmFja2dyb3VuZDogI2M2MDAzZDtcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDAlIDAlLCA3MCUgMCUsIDEwMCUgMTAwJSwgMCUgMTAwJSk7XG59XG4uc3VibWFyaW5lX19zYWlsLXNoYWRvdyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDE2MCU7XG4gIGhlaWdodDogMTAlO1xuICBiYWNrZ3JvdW5kOiAjYTEwNTMyO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uZGFyazEge1xuICBsZWZ0OiAwJTtcbiAgdG9wOiAwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC0zMyUpO1xufVxuLmRhcmsyIHtcbiAgbGVmdDogMCU7XG4gIHRvcDogNTAlO1xufVxuLmxpZ2h0MSB7XG4gIGxlZnQ6IDIwJTtcbiAgdG9wOiAyMCU7XG4gIHdpZHRoOiA1MCU7XG4gIGJhY2tncm91bmQ6ICNlZjY4OWU7XG59XG4uc3VibWFyaW5lX193aW5kb3cge1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNjOWU1ZDksICNmZmYpO1xuICBib3JkZXI6IDhweCBzb2xpZCAjYTEwNTMyO1xuICB6LWluZGV4OiAxMDtcbiAgYW5pbWF0aW9uOiBzaGFkb3ctY2hhbmdlIDFzIGxpbmVhciBpbmZpbml0ZTtcbn1cbi5vbmUsIC50d28ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbi5vbmUge1xuICBsZWZ0OiA0MCU7XG59XG4udHdvIHtcbiAgbGVmdDogMjAlO1xufVxuLnN1Ym1hcmluZV9fc2hhZG93LWRhcmsge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDcwJTtcbiAgdG9wOiA1MCU7XG4gIHdpZHRoOiA3MHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGJhY2tncm91bmQ6ICNhMTA1MzI7XG59XG4uc3VibWFyaW5lX19zaGFkb3ctbGlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDM1JTtcbiAgdG9wOiAxMyU7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiA2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGJhY2tncm91bmQ6ICNlZjY4OWU7XG59XG4uc3VibWFyaW5lX19zaGFkb3ctYXJjTGlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNjUlO1xuICBsZWZ0OiA4MCU7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogI2VmNjg5ZTtcbn1cbi5zdWJtYXJpbmVfX3BlcmlzY29wZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwJTtcbiAgbGVmdDogNDAlO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmlnaHQ6IDEwcHggc29saWQgI2U5MmQ3NztcbiAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCAjYzYwMDNkO1xuICBib3JkZXItbGVmdDogMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiAwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xufVxuLnN1Ym1hcmluZV9fcGVyaXNjb3BlLWdsYXNzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA0MCU7XG4gIHRvcDogMCU7XG4gIHdpZHRoOiA1cHg7XG4gIGhlaWdodDogMTVweDtcbiAgYmFja2dyb3VuZDogI2Y3YWMwODtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTE1JSk7XG59XG4ubGlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMCU7XG4gIGxlZnQ6IDAlO1xuICB3aWR0aDogNTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjODE3ZTk3LCAjMTMwNTYwKTtcbiAvKiBUaGUgcG9pbnRzIGFyZTogY2VudGVyZWQgdG9wLCBsZWZ0IGJvdHRvbSwgcmlnaHQgYm90dG9tICovXG4gIGNsaXAtcGF0aDogcG9seWdvbigwJSAwJSwgNTAlIDQ1JSwgNTAlIDU1JSwgMCUgMTAwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xOCUsIC00NSUpO1xufVxuLmJ1YmJsZXNfX2NvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDU1JTtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwMCUsIC01MCUpO1xufVxuLmJ1YmJsZXMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGxlZnQ6IDUlO1xuICB0b3A6IDUlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBvcGFjaXR5OiAwLjg7XG59XG4uYnViYmxlLTEge1xuICB0b3A6IDE1JTtcbiAgbGVmdDogMSU7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogbW92ZS1yaWdodCAxcyBpbmZpbml0ZSBsaW5lYXI7XG4gIGFuaW1hdGlvbi1kZWxheTogMC4yNXM7XG59XG4uYnViYmxlLTIge1xuICB0b3A6IDMwJTtcbiAgbGVmdDogMSU7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogbW92ZS1yaWdodCAxcyBpbmZpbml0ZSBsaW5lYXI7XG4gIGFuaW1hdGlvbi1kZWxheTogMC41cztcbn1cbi5idWJibGUtMyB7XG4gIHRvcDogNDUlO1xuICBsZWZ0OiAxJTtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBtb3ZlLXJpZ2h0IDFzIGluZmluaXRlIGxpbmVhcjtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjc1cztcbn1cbi5idWJibGUtNCB7XG4gIHRvcDogNjAlO1xuICBsZWZ0OiAxJTtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBtb3ZlLXJpZ2h0IDFzIGluZmluaXRlIGxpbmVhcjtcbiAgYW5pbWF0aW9uLWRlbGF5OiAxcztcbn1cbi5ncm91bmRfX2NvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA3NSU7XG4gIGxlZnQ6IDAlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNSU7XG4gIGJhY2tncm91bmQ6ICMwODAwM2I7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4uZ3JvdW5kMSB7XG4gIHRvcDogNzUlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICMwYzAwNTE7XG59XG4uZ3JvdW5kMiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzNSU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICMwODAwM2I7XG59XG4uZ3JvdW5kIHNwYW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG59XG4uZ3JvdW5kMSBzcGFuIHtcbiAgYmFja2dyb3VuZDogIzBjMDA1MTtcbn1cbi5ncm91bmQyIHNwYW4ge1xuICBiYWNrZ3JvdW5kOiAjMDgwMDNiO1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMzAlKTtcbn1cbi51cC0xIHtcbiAgbGVmdDogMCU7XG4gIHRvcDogLTJweDtcbiAgYW5pbWF0aW9uOiBtb3ZlVGhlZ3JvdW5kUmlnaHQgM3MgaW5maW5pdGUgbGluZWFyO1xufVxuLnVwLTIge1xuICBsZWZ0OiAtMTAlO1xuICB0b3A6IC00cHg7XG4gIGFuaW1hdGlvbjogbW92ZVRoZWdyb3VuZFJpZ2h0IDRzIGluZmluaXRlIGxpbmVhcjtcbn1cbi51cC0zIHtcbiAgbGVmdDogLTIwJTtcbiAgdG9wOiAtNnB4O1xuICBhbmltYXRpb246IG1vdmVUaGVncm91bmRSaWdodCA1cyBpbmZpbml0ZSBsaW5lYXI7XG59XG4udXAtNCB7XG4gIGxlZnQ6IC0zMCU7XG4gIHRvcDogLThweDtcbiAgYW5pbWF0aW9uOiBtb3ZlVGhlZ3JvdW5kUmlnaHQgNnMgaW5maW5pdGUgbGluZWFyO1xufVxuLnVwLTUge1xuICBsZWZ0OiAtNDAlO1xuICB0b3A6IC0xMHB4O1xuICBhbmltYXRpb246IG1vdmVUaGVncm91bmRSaWdodCA3cyBpbmZpbml0ZSBsaW5lYXI7XG59XG4udXAtNiB7XG4gIGxlZnQ6IC01MCU7XG4gIHRvcDogLTEycHg7XG4gIGFuaW1hdGlvbjogbW92ZVRoZWdyb3VuZFJpZ2h0IDhzIGluZmluaXRlIGxpbmVhcjtcbn1cbi51cC03IHtcbiAgbGVmdDogLTYwJTtcbiAgdG9wOiAtMTRweDtcbiAgYW5pbWF0aW9uOiBtb3ZlVGhlZ3JvdW5kUmlnaHQgOXMgaW5maW5pdGUgbGluZWFyO1xufVxuLnVwLTgge1xuICBsZWZ0OiAtNzAlO1xuICB0b3A6IC0xNnB4O1xuICBhbmltYXRpb246IG1vdmVUaGVncm91bmRSaWdodCAxMHMgaW5maW5pdGUgbGluZWFyO1xufVxuLnVwLTkge1xuICBsZWZ0OiAtODAlO1xuICB0b3A6IC0xOHB4O1xuICBhbmltYXRpb246IG1vdmVUaGVncm91bmRSaWdodCAxMXMgaW5maW5pdGUgbGluZWFyO1xufVxuLnVwLTEwIHtcbiAgbGVmdDogLTkwJTtcbiAgdG9wOiAtMjBweDtcbiAgYW5pbWF0aW9uOiBtb3ZlVGhlZ3JvdW5kUmlnaHQgMTJzIGluZmluaXRlIGxpbmVhcjtcbn1cbi51cC0xMSB7XG4gIGxlZnQ6IC0xMDAlO1xuICB0b3A6IC0yMnB4O1xuICBhbmltYXRpb246IG1vdmVUaGVncm91bmRSaWdodCAxM3MgaW5maW5pdGUgbGluZWFyO1xufVxuLnVwLTEyIHtcbiAgbGVmdDogLTExMCU7XG4gIHRvcDogLTI0cHg7XG4gIGFuaW1hdGlvbjogbW92ZVRoZWdyb3VuZFJpZ2h0IDE0cyBpbmZpbml0ZSBsaW5lYXI7XG59XG4udXAtMTMge1xuICBsZWZ0OiAtMTIwJTtcbiAgdG9wOiAtMjZweDtcbiAgYW5pbWF0aW9uOiBtb3ZlVGhlZ3JvdW5kUmlnaHQgMTVzIGluZmluaXRlIGxpbmVhcjtcbn1cbi51cC0xNCB7XG4gIGxlZnQ6IC0xMzAlO1xuICB0b3A6IC0yOHB4O1xuICBhbmltYXRpb246IG1vdmVUaGVncm91bmRSaWdodCAxNnMgaW5maW5pdGUgbGluZWFyO1xufVxuLnVwLTE1IHtcbiAgbGVmdDogLTE0MCU7XG4gIHRvcDogLTMwcHg7XG4gIGFuaW1hdGlvbjogbW92ZVRoZWdyb3VuZFJpZ2h0IDE3cyBpbmZpbml0ZSBsaW5lYXI7XG59XG4udXAtMTYge1xuICBsZWZ0OiAtMTUwJTtcbiAgdG9wOiAtMzJweDtcbiAgYW5pbWF0aW9uOiBtb3ZlVGhlZ3JvdW5kUmlnaHQgMThzIGluZmluaXRlIGxpbmVhcjtcbn1cbi51cC0xNyB7XG4gIGxlZnQ6IC0xNjAlO1xuICB0b3A6IC0zNHB4O1xuICBhbmltYXRpb246IG1vdmVUaGVncm91bmRSaWdodCAxOXMgaW5maW5pdGUgbGluZWFyO1xufVxuLnVwLTE4IHtcbiAgbGVmdDogLTE3MCU7XG4gIHRvcDogLTM2cHg7XG4gIGFuaW1hdGlvbjogbW92ZVRoZWdyb3VuZFJpZ2h0IDIwcyBpbmZpbml0ZSBsaW5lYXI7XG59XG4udXAtMTkge1xuICBsZWZ0OiAtMTgwJTtcbiAgdG9wOiAtMzhweDtcbiAgYW5pbWF0aW9uOiBtb3ZlVGhlZ3JvdW5kUmlnaHQgMjFzIGluZmluaXRlIGxpbmVhcjtcbn1cbi51cC0yMCB7XG4gIGxlZnQ6IC0xOTAlO1xuICB0b3A6IC00MHB4O1xuICBhbmltYXRpb246IG1vdmVUaGVncm91bmRSaWdodCAyMnMgaW5maW5pdGUgbGluZWFyO1xufVxuQGtleWZyYW1lcyBzaGFkb3ctY2hhbmdlIHtcbiAgMCUsIDEwMCUge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgI2M5ZTVkOSAwJSwgI2M5ZTVkOSAyMCUsICNmZmYgMjElLCAjZmZmIDM5JSwgI2M5ZTVkOSA0MCUsICNmZmYgNDElLCAjZmZmIDU5JSwgI2M5ZTVkOSA2MCUpO1xuIH1cbiAgMjAlIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNjOWU1ZDkgMjAlLCAjYzllNWQ5IDQwJSwgI2ZmZiA0MSUsICNmZmYgNTklLCAjYzllNWQ5IDYwJSwgI2ZmZiA2MSUsICNmZmYgNzklLCAjYzllNWQ5IDgwJSk7XG4gfVxuICA0MCUge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgI2M5ZTVkOSA0MCUsICNjOWU1ZDkgNjAlLCAjZmZmIDYxJSwgI2ZmZiA3OSUsICNjOWU1ZDkgODAlLCAjZmZmIDgxJSwgI2ZmZiA5OSUsICNjOWU1ZDkgMCUpO1xuIH1cbiAgNjAlIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNjOWU1ZDkgNjAlLCAjYzllNWQ5IDgwJSwgI2ZmZiA4MSUsICNmZmYgOTklLCAjYzllNWQ5IDAlLCAjZmZmIDElLCAjZmZmIDE5JSwgI2M5ZTVkOSAyMCUpO1xuIH1cbiAgODAlIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNjOWU1ZDkgODAlLCAjYzllNWQ5IDAlLCAjZmZmIDElLCAjZmZmIDE5JSwgI2M5ZTVkOSAyMCUsICNmZmYgMjElLCAjZmZmIDM5JSwgI2M5ZTVkOSA0MCUpO1xuIH1cbn1cbkBrZXlmcmFtZXMgbW92ZS1yaWdodCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuIH1cbiAgMTAlIHtcbiAgICBvcGFjaXR5OiAwLjQ7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTAlLCAxMCUpO1xuIH1cbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAwLjI7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNDUwJSwgMjUlKTtcbiB9XG4gIDgwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTU1JSk7XG4gfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGxlZnQ6IDAlO1xuICAgIHRvcDogMCU7XG4gfVxufVxuQGtleWZyYW1lcyByb3RhdGVJbmZpbml0ZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XG4gfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpO1xuIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKDM2MGRlZyk7XG4gfVxufVxuQGtleWZyYW1lcyBtb3ZlVGhlZ3JvdW5kUmlnaHQge1xuICA5MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgbGVmdDogMTAwJTtcbiB9XG4gIDk1JSwgMTAwJSB7XG4gICAgbGVmdDogMTA1MCU7XG4gICAgb3BhY2l0eTogMDtcbiB9XG59XG4iXX0= */"] });


/***/ }),

/***/ "w7rA":
/*!***********************************!*\
  !*** ./src/app/types/ws-types.ts ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "y7Ka":
/*!************************************************!*\
  !*** ./src/app/utils/waves/waves.component.ts ***!
  \************************************************/
/*! exports provided: WavesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WavesComponent", function() { return WavesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class WavesComponent {
    constructor() {
        this.inverted = false;
        this.color = 'var(--background-secondary)';
    }
}
WavesComponent.ɵfac = function WavesComponent_Factory(t) { return new (t || WavesComponent)(); };
WavesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WavesComponent, selectors: [["waves"]], inputs: { inverted: "inverted", color: "color" }, decls: 8, vars: 3, consts: [["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "0 24 150 28", "preserveAspectRatio", "none", "shape-rendering", "auto", 1, "waves"], ["id", "gentle-wave", "d", "M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"], [1, "parallax"], ["id", "wave1", 0, "xlink", "href", "#gentle-wave", "x", "48", "y", "0"], ["id", "wave2", 0, "xlink", "href", "#gentle-wave", "x", "48", "y", "3"], ["id", "wave3", 0, "xlink", "href", "#gentle-wave", "x", "48", "y", "5"], ["id", "wave4", 0, "xlink", "href", "#gentle-wave", "x", "48", "y", "7"]], template: function WavesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "g", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "use", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "use", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "use", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "use", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("transform", ctx.inverted ? "rotate(180deg)" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("fill", ctx.color);
    } }, styles: [".waves[_ngcontent-%COMP%] {\r\n    position:relative;\r\n    width: 100%;\r\n    height:5vh;\r\n    margin-bottom:-7px; \r\n    min-height:50px;\r\n    max-height:75px;\r\n  }\r\n  \r\n.content[_ngcontent-%COMP%] {\r\n  position:relative;\r\n  height:10vh;\r\n  text-align:center;\r\n  background-color: var(--background-secondary);\r\n}\r\n  \r\n\r\n  \r\n.parallax[_ngcontent-%COMP%]    > use[_ngcontent-%COMP%] {\r\n  -webkit-animation: move-forever 25s cubic-bezier(.55,.5,.45,.5) infinite;\r\n          animation: move-forever 25s cubic-bezier(.55,.5,.45,.5) infinite;\r\n}\r\n  \r\n.parallax[_ngcontent-%COMP%]    > use[_ngcontent-%COMP%]:nth-child(1) {\r\n  -webkit-animation-delay: -2s;\r\n          animation-delay: -2s;\r\n  -webkit-animation-duration: 7s;\r\n          animation-duration: 7s;\r\n}\r\n  \r\n.parallax[_ngcontent-%COMP%]    > use[_ngcontent-%COMP%]:nth-child(2) {\r\n  -webkit-animation-delay: -3s;\r\n          animation-delay: -3s;\r\n  -webkit-animation-duration: 10s;\r\n          animation-duration: 10s;\r\n}\r\n  \r\n.parallax[_ngcontent-%COMP%]    > use[_ngcontent-%COMP%]:nth-child(3) {\r\n  -webkit-animation-delay: -4s;\r\n          animation-delay: -4s;\r\n  -webkit-animation-duration: 13s;\r\n          animation-duration: 13s;\r\n}\r\n  \r\n.parallax[_ngcontent-%COMP%]    > use[_ngcontent-%COMP%]:nth-child(4) {\r\n  -webkit-animation-delay: -5s;\r\n          animation-delay: -5s;\r\n  -webkit-animation-duration: 20s;\r\n          animation-duration: 20s;\r\n}\r\n  \r\n@-webkit-keyframes move-forever {\r\n  0% {\r\n    transform: translate3d(-90px,0,0);\r\n  }\r\n  100% { \r\n    transform: translate3d(85px,0,0);\r\n  }\r\n}\r\n  \r\n@keyframes move-forever {\r\n  0% {\r\n    transform: translate3d(-90px,0,0);\r\n  }\r\n  100% { \r\n    transform: translate3d(85px,0,0);\r\n  }\r\n}\r\n  \r\n\r\n  \r\n@media (max-width: 768px) {\r\n  .waves[_ngcontent-%COMP%] {\r\n    height:40px;\r\n    min-height:40px;\r\n  }\r\n  .content[_ngcontent-%COMP%] {\r\n    height:30vh;\r\n  }\r\n  h1[_ngcontent-%COMP%] {\r\n    font-size:24px;\r\n  }\r\n}\r\n  \r\n#gentle-wave[_ngcontent-%COMP%] {\r\n  fill: var(--background-secondary);\r\n}\r\n  \r\n#wave1[_ngcontent-%COMP%] {\r\n  fill-opacity: 0.7;\r\n}\r\n  \r\n#wave2[_ngcontent-%COMP%] {\r\n  fill-opacity: 0.5;\r\n}\r\n  \r\n#wave3[_ngcontent-%COMP%] {\r\n  fill-opacity: 0.3;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhdmVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLFVBQVU7SUFDVixrQkFBa0IsRUFBRSxxQkFBcUI7SUFDekMsZUFBZTtJQUNmLGVBQWU7RUFDakI7O0FBRUY7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQiw2Q0FBNkM7QUFDL0M7O0FBRUEsY0FBYzs7QUFFZDtFQUNFLHdFQUFnRTtVQUFoRSxnRUFBZ0U7QUFDbEU7O0FBQ0E7RUFDRSw0QkFBb0I7VUFBcEIsb0JBQW9CO0VBQ3BCLDhCQUFzQjtVQUF0QixzQkFBc0I7QUFDeEI7O0FBQ0E7RUFDRSw0QkFBb0I7VUFBcEIsb0JBQW9CO0VBQ3BCLCtCQUF1QjtVQUF2Qix1QkFBdUI7QUFDekI7O0FBQ0E7RUFDRSw0QkFBb0I7VUFBcEIsb0JBQW9CO0VBQ3BCLCtCQUF1QjtVQUF2Qix1QkFBdUI7QUFDekI7O0FBQ0E7RUFDRSw0QkFBb0I7VUFBcEIsb0JBQW9CO0VBQ3BCLCtCQUF1QjtVQUF2Qix1QkFBdUI7QUFDekI7O0FBQ0E7RUFDRTtJQUNFLGlDQUFpQztFQUNuQztFQUNBO0lBQ0UsZ0NBQWdDO0VBQ2xDO0FBQ0Y7O0FBUEE7RUFDRTtJQUNFLGlDQUFpQztFQUNuQztFQUNBO0lBQ0UsZ0NBQWdDO0VBQ2xDO0FBQ0Y7O0FBQ0EsdUJBQXVCOztBQUN2QjtFQUNFO0lBQ0UsV0FBVztJQUNYLGVBQWU7RUFDakI7RUFDQTtJQUNFLFdBQVc7RUFDYjtFQUNBO0lBQ0UsY0FBYztFQUNoQjtBQUNGOztBQUVBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6IndhdmVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2F2ZXMge1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDo1dmg7XHJcbiAgICBtYXJnaW4tYm90dG9tOi03cHg7IC8qRml4IGZvciBzYWZhcmkgZ2FwKi9cclxuICAgIG1pbi1oZWlnaHQ6NTBweDtcclxuICAgIG1heC1oZWlnaHQ6NzVweDtcclxuICB9XHJcbiAgXHJcbi5jb250ZW50IHtcclxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICBoZWlnaHQ6MTB2aDtcclxuICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLXNlY29uZGFyeSk7XHJcbn1cclxuXHJcbi8qIEFuaW1hdGlvbiAqL1xyXG5cclxuLnBhcmFsbGF4ID4gdXNlIHtcclxuICBhbmltYXRpb246IG1vdmUtZm9yZXZlciAyNXMgY3ViaWMtYmV6aWVyKC41NSwuNSwuNDUsLjUpIGluZmluaXRlO1xyXG59XHJcbi5wYXJhbGxheCA+IHVzZTpudGgtY2hpbGQoMSkge1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLTJzO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogN3M7XHJcbn1cclxuLnBhcmFsbGF4ID4gdXNlOm50aC1jaGlsZCgyKSB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAtM3M7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxMHM7XHJcbn1cclxuLnBhcmFsbGF4ID4gdXNlOm50aC1jaGlsZCgzKSB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAtNHM7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxM3M7XHJcbn1cclxuLnBhcmFsbGF4ID4gdXNlOm50aC1jaGlsZCg0KSB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAtNXM7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAyMHM7XHJcbn1cclxuQGtleWZyYW1lcyBtb3ZlLWZvcmV2ZXIge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTkwcHgsMCwwKTtcclxuICB9XHJcbiAgMTAwJSB7IFxyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg4NXB4LDAsMCk7XHJcbiAgfVxyXG59XHJcbi8qU2hyaW5raW5nIGZvciBtb2JpbGUqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAud2F2ZXMge1xyXG4gICAgaGVpZ2h0OjQwcHg7XHJcbiAgICBtaW4taGVpZ2h0OjQwcHg7XHJcbiAgfVxyXG4gIC5jb250ZW50IHtcclxuICAgIGhlaWdodDozMHZoO1xyXG4gIH1cclxuICBoMSB7XHJcbiAgICBmb250LXNpemU6MjRweDtcclxuICB9XHJcbn1cclxuXHJcbiNnZW50bGUtd2F2ZSB7XHJcbiAgZmlsbDogdmFyKC0tYmFja2dyb3VuZC1zZWNvbmRhcnkpO1xyXG59XHJcbiAgXHJcbiN3YXZlMSB7XHJcbiAgZmlsbC1vcGFjaXR5OiAwLjc7XHJcbn1cclxuI3dhdmUyIHtcclxuICBmaWxsLW9wYWNpdHk6IDAuNTtcclxufVxyXG4jd2F2ZTMge1xyXG4gIGZpbGwtb3BhY2l0eTogMC4zO1xyXG59Il19 */"] });


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
document.addEventListener('DOMContentLoaded', () => {
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
        .catch(err => console.error(err));
});


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

/***/ }),

/***/ "zswv":
/*!*****************************************************************!*\
  !*** ./src/app/dialog/create-invite/create-invite.component.ts ***!
  \*****************************************************************/
/*! exports provided: CreateInviteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateInviteComponent", function() { return CreateInviteComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_ws_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/ws.service */ "Swid");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");











function CreateInviteComponent_a_11_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreateInviteComponent_a_11_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](13); return _r1.value = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Show Options");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CreateInviteComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h6", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Options");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-form-field", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Max Uses");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-form-field", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Expires At");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreateInviteComponent_div_14_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r6.updateInvite(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r2.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx_r2.recentlyUpdated);
} }
class CreateInviteComponent {
    constructor(dialogRef, data, ws) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.ws = ws;
        this.recentlyUpdated = false;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            maxUses: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].max(1000)]),
            expiresAt: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
        });
    }
    ngOnInit() {
        this.ws.emit('INVITE_CREATE', {
            guildId: this.data.guild._id,
            options: this.form.value,
        }, this);
        this.ws.on('INVITE_CREATE', ({ invite }) => this.invite = invite, this);
        this.form.valueChanges
            .subscribe(() => this.recentlyUpdated = this.form.valid);
    }
    onNoClick() {
        this.dialogRef.close();
    }
    updateInvite() {
        if (this.form.invalid)
            return;
        this.recentlyUpdated = true;
        this.ws.emit('INVITE_DELETE', { inviteCode: this.invite._id }, this);
        this.ws.emit('INVITE_CREATE', {
            guildId: this.data.guild._id,
            options: this.form.value,
        }, this);
    }
    copyToClipboard() {
        var _a;
        navigator.clipboard.writeText((_a = this.invite) === null || _a === void 0 ? void 0 : _a._id);
    }
}
CreateInviteComponent.ɵfac = function CreateInviteComponent_Factory(t) { return new (t || CreateInviteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_ws_service__WEBPACK_IMPORTED_MODULE_3__["WSService"])); };
CreateInviteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CreateInviteComponent, selectors: [["app-create-invite"]], decls: 15, vars: 4, consts: [["mat-dialog-title", ""], ["mat-dialog-content", "", 1, "text-center"], ["appearance", "outline", 1, "float-left"], ["type", "text", "matInput", "", 3, "value"], [1, "ml-3", "float-left"], ["matTooltip", "Copy", "color", "primary", 1, "btn", "p-3", "mt-1", "bg-primary", 3, "click"], [1, "lni", "lni-clipboard"], ["class", "cursor-pointer", 3, "click", 4, "ngIf"], ["type", "hidden"], ["showOptions", ""], [4, "ngIf"], [1, "cursor-pointer", 3, "click"], [1, "text-center"], [3, "formGroup"], ["f", "ngForm"], ["appearance", "outline"], ["type", "number", "formControlName", "maxUses", "matInput", ""], ["appearance", "outline", 1, "ml-2"], ["type", "datetime-local", "formControlName", "expiresAt", "matInput", ""], ["mat-dialog-actions", "", 1, "d-flex", "justify-content-center"], ["matTooltip", "Update", "mat-button", "", 1, "bg-success", "text-dark", 3, "disabled", "click"], [1, "lni", "lni-save", "text-dark"]], template: function CreateInviteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Invite Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreateInviteComponent_Template_button_click_8_listener() { return ctx.copyToClipboard(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, CreateInviteComponent_a_11_Template, 2, 0, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, CreateInviteComponent_div_14_Template, 16, 2, "div", 10);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Invite Friends to ", ctx.data.guild.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.invite == null ? null : ctx.invite._id);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !_r1.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r1.value);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"]], styles: [".modal-content[_ngcontent-%COMP%] {\r\n  background-color: var(--light);\r\n}\r\n\r\n.modal-content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border: none !important;\r\n}\r\n\r\n.close[_ngcontent-%COMP%] {\r\n  color: var(--heading) !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1pbnZpdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQyIsImZpbGUiOiJjcmVhdGUtaW52aXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwtY29udGVudCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQpO1xyXG59XHJcblxyXG4ubW9kYWwtY29udGVudCBkaXYge1xyXG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2xvc2Uge1xyXG4gIGNvbG9yOiB2YXIoLS1oZWFkaW5nKSAhaW1wb3J0YW50O1xyXG59Il19 */"] });


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map