(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/lPB":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/guilds/guild-settings/bot-list/bot-list.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-settings-sidebar\n  tabType=\"guild\"\n  [id]=\"guild?._id\">\n  <div class=\"content\">\n    <div class=\"row\">\n      <div class=\"col-3 side-nav navbar-dark\">\n        <div class=\"navbar-nav\">\n          <!-- TODO: use member-username -->\n          <a\n            *ngFor=\"let app of apps\"\n            (click)=\"selectedApp = app\"\n            routerLinkActive=\"active\"\n            class=\"nav-item nav-link\">{{ app.user.username }}</a>\n          <div class=\"float-right\"></div>\n        </div>\n\n        <hr class=\"my-4\">\n\n        <p class=\"text-muted\">Bots can do <code>cool</code> things for your guilds.</p>\n      </div>\n      <div\n        *ngIf=\"selectedApp\"\n        class=\"col-9 role-details\">\n        <img\n          [src]=\"selectedApp.user.avatarURL\"\n          [alt]=\"selectedApp.user.username + ' Avatar'\"\n          class=\"rounded-lg float-left mr-4\">\n        <h1>{{ selectedApp.user.username }}</h1>\n        <hr>\n        <p class=\"lead text-muted\">{{ selectedApp.description }}</p>\n        \n        <div class=\"mt-3\">\n          <button\n            *ngIf=\"!botInGuild\"\n            (click)=\"addBot(selectedApp.user._id)\"\n            class=\"bg-success rounded\"\n            mat-button>Add</button>\n          <button\n            *ngIf=\"botInGuild\"\n            (click)=\"removeBot(selectedApp.user._id)\"\n            class=\"bg-danger rounded\"\n            mat-button>Remove</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</app-settings-sidebar>");

/***/ }),

/***/ "/mpL":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/profile/profile.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\n  *ngIf=\"!isSelf\"\n  class=\"d-flex justify-content-center float-right\">\n  <button\n    *ngIf=\"!isFriend && !sentRequest\"\n    (click)=\"addFriend()\"\n    matTooltip=\"Add Friend\"\n    class=\"bg-success mr-2\"\n    mat-button>\n    <i class=\"fas fa-user-plus text-dark\"></i>\n    <span></span>\n  </button>\n  <button\n    *ngIf=\"isFriend || sentRequest\"\n    (click)=\"removeFriend()\"\n    [matTooltip]=\"(isFriend) ? 'Remove Friend' : 'Cancel Request'\"\n    class=\"bg-danger mr-2\"\n    mat-button>\n    <i class=\"fas fa-times\"></i>\n    <span></span>\n  </button>\n\n  <button\n    [routerLink]=\"'/channels/@me/' + dmChannel?._id\"\n    [disabled]=\"!isFriend\"\n    matTooltip=\"Message\"\n    class=\"bg-primary\"\n    mat-button>\n    <i class=\"fas fa-comment-alt\"></i>\n    <span></span>\n  </button>\n</div>\n\n<app-avatar-url\n  [user]=\"data.user\"\n  class=\"mr-2\"></app-avatar-url>\n<h1 mat-dialog-title>{{ data.user.username }}</h1>\n\n<hr>\n\n<div\n  *ngIf=\"mutualGuilds.length >= 0\"\n  mat-dialog-content>\n  <h6>Mutual Guilds—{{ mutualGuilds.length }}</h6>\n  <div class=\"ml-4\">\n    <app-guild-icon \n      *ngFor=\"let guild of mutualGuilds; else noMutualGuilds\"\n      class=\"float-left\"\n      style=\"margin-left: -25px;\"\n      [matTooltip]=\"guild.name\"\n      [guild]=\"guild\"></app-guild-icon>\n  </div>\n  <hr>\n</div>\n\n<hr>\n\n<div\n  *ngIf=\"mutualFriends.length >= 0\"\n  mat-dialog-content>\n  <h6>Mutual Friends—{{ mutualFriends.length }}</h6>\n  <div class=\"ml-4\">\n    <app-avatar-url \n      *ngFor=\"let friend of mutualFriends\"\n      class=\"float-left cursor-pointer\"\n      size=\"52px\"\n      style=\"margin-left: -25px;\"\n      [matTooltip]=\"friend.username\"\n      [user]=\"friend\"></app-avatar-url>\n  </div>\n</div>\n");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/adamjr/Documents/projects/code/accord/website/src/main.ts */"zUnb");


/***/ }),

/***/ "026r":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cool/lighthouse/lighthouse.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- https://codepen.io/chrisota/pen/sugId -->\n<div id=\"lighthouse\">\n  <div id=\"top\"></div>\n  <div id=\"glass\"></div>\n  <div id=\"balcony\"></div>\n  <div class=\"row\"></div>\n  <div class=\"row\"></div>\n  <div class=\"row\"></div>\n  <div class=\"row\"></div>\n</div>\n");

/***/ }),

/***/ "0FLu":
/*!*****************************************************!*\
  !*** ./src/app/utils/spinner/spinner.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* credit - https://codepen.io/JesGraPa/pen/Hyaiw */\r\n.spinner {\r\n    width: 40px;\r\n    height: 40px;\r\n    border-radius: 5px;\r\n    background-color: var(--font);\r\n\r\n    margin: 100px auto;\r\n    -webkit-animation: sk-rotateplane 1.2s infinite ease-in-out;\r\n    animation: sk-rotateplane 1.2s infinite ease-in-out;\r\n}\r\n@-webkit-keyframes sk-rotateplane {\r\n    0% { -webkit-transform: perspective(120px) }\r\n    50% { -webkit-transform: perspective(120px) rotateY(180deg) }\r\n    100% { -webkit-transform: perspective(120px) rotateY(180deg)  rotateX(180deg) }\r\n}\r\n@keyframes sk-rotateplane {\r\n    0% { \r\n        transform: perspective(120px) rotateX(0deg) rotateY(0deg);\r\n        -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg) \r\n    } 50% { \r\n        transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\r\n        -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg) \r\n    } 100% { \r\n        transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\r\n        -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\r\n    }\r\n}\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\nbody, html {\r\n    margin: 10px auto;\r\n    text-align: center;\r\n    background: #1c1c1d;\r\n}\r\n* {\r\n    color: #666;\r\n}\r\nspan {\r\n    display: inline-block;\r\n    height: 15px;\r\n    width: 15px;\r\n    background: #2FAC9B;\r\n    border-radius: 0px;\r\n}\r\n.border-radius {\r\n    border-radius: 500px;\r\n}\r\n#spinner {\r\n    margin-bottom: 30px;\r\n}\r\n#spinner span:nth-child(1) {\r\n    -webkit-animation: rotateX 2s 0.1s infinite cubic-bezier(0.650,0.030,0.735,0.045);\r\n            animation: rotateX 2s 0.1s infinite cubic-bezier(0.650,0.030,0.735,0.045);\r\n}\r\n#spinner span:nth-child(2) {\r\n    -webkit-animation: rotateX 2s 0.2s infinite cubic-bezier(0.650,0.030,0.735,0.045);\r\n            animation: rotateX 2s 0.2s infinite cubic-bezier(0.650,0.030,0.735,0.045);\r\n}\r\n#spinner span:nth-child(3) {\r\n    -webkit-animation: rotateX 2s 0.3s infinite cubic-bezier(0.650,0.030,0.735,0.045);\r\n            animation: rotateX 2s 0.3s infinite cubic-bezier(0.650,0.030,0.735,0.045);\r\n}\r\n#spinner span:nth-child(4) {\r\n    -webkit-animation: rotateX 2s 0.4s infinite cubic-bezier(0.650,0.030,0.735,0.045);\r\n            animation: rotateX 2s 0.4s infinite cubic-bezier(0.650,0.030,0.735,0.045);\r\n}\r\n#spinner span:nth-child(5) {\r\n    -webkit-animation: rotateX 2s 0.5s infinite cubic-bezier(0.650,0.030,0.735,0.045);\r\n            animation: rotateX 2s 0.5s infinite cubic-bezier(0.650,0.030,0.735,0.045);\r\n}\r\n@-webkit-keyframes scale {\r\n    0% {\r\n        transform: scale(0.0);\r\n   }\r\n    25% {\r\n        transform: scale(0.9,0.9);\r\n        background: #93e1d7;\r\n   }\r\n    50% {\r\n        transform: scale(1,1);\r\n        margin: 0 3px;\r\n        background: #2FAC9B;\r\n   }\r\n    100% {\r\n        transform: scale(0.0);\r\n   }\r\n}\r\n@keyframes scale {\r\n    0% {\r\n        transform: scale(0.0);\r\n   }\r\n    25% {\r\n        transform: scale(0.9,0.9);\r\n        background: #93e1d7;\r\n   }\r\n    50% {\r\n        transform: scale(1,1);\r\n        margin: 0 3px;\r\n        background: #2FAC9B;\r\n   }\r\n    100% {\r\n        transform: scale(0.0);\r\n   }\r\n}\r\n@-webkit-keyframes rotateY {\r\n    0% {\r\n        transform: rotateY(0deg);\r\n   }\r\n    50% {\r\n        transform: rotateY(90deg);\r\n        background: #93e1d7;\r\n   }\r\n    100% {\r\n        transform: rotateY(0deg);\r\n   }\r\n}\r\n@keyframes rotateY {\r\n    0% {\r\n        transform: rotateY(0deg);\r\n   }\r\n    50% {\r\n        transform: rotateY(90deg);\r\n        background: #93e1d7;\r\n   }\r\n    100% {\r\n        transform: rotateY(0deg);\r\n   }\r\n}\r\n@-webkit-keyframes rotateX {\r\n    0% {\r\n        transform: rotateX(0deg);\r\n   }\r\n    50% {\r\n        transform: rotateX(90deg) scale(0.5,0.5);\r\n        background: #93e1d7;\r\n   }\r\n    100% {\r\n        transform: rotateX(0deg);\r\n   }\r\n}\r\n@keyframes rotateX {\r\n    0% {\r\n        transform: rotateX(0deg);\r\n   }\r\n    50% {\r\n        transform: rotateX(90deg) scale(0.5,0.5);\r\n        background: #93e1d7;\r\n   }\r\n    100% {\r\n        transform: rotateX(0deg);\r\n   }\r\n}\r\n@-webkit-keyframes push {\r\n    0% {\r\n        transform: translateX(0px) scale(0.9,0.6);\r\n   }\r\n    50% {\r\n        transform: translateY(-20px) scale(0.7,1.1);\r\n        background: #6bd6c8;\r\n   }\r\n    100% {\r\n        transform: translateX(0px) scale(0.9,0.6);\r\n   }\r\n}\r\n@keyframes push {\r\n    0% {\r\n        transform: translateX(0px) scale(0.9,0.6);\r\n   }\r\n    50% {\r\n        transform: translateY(-20px) scale(0.7,1.1);\r\n        background: #6bd6c8;\r\n   }\r\n    100% {\r\n        transform: translateX(0px) scale(0.9,0.6);\r\n   }\r\n}\r\n@-webkit-keyframes rotateZ {\r\n    0% {\r\n        transform: rotateZ(-20deg);\r\n   }\r\n    50% {\r\n        transform: rotateZ(20deg) scaleY(1.2);\r\n        background: #6bd6c8;\r\n   }\r\n    100% {\r\n        transform: rotateZ(-20deg);\r\n   }\r\n}\r\n@keyframes rotateZ {\r\n    0% {\r\n        transform: rotateZ(-20deg);\r\n   }\r\n    50% {\r\n        transform: rotateZ(20deg) scaleY(1.2);\r\n        background: #6bd6c8;\r\n   }\r\n    100% {\r\n        transform: rotateZ(-20deg);\r\n   }\r\n}\r\n@-webkit-keyframes cuve {\r\n    0% {\r\n        transform: rotateY(-90deg) perspective(50px);\r\n        background: #195c53;\r\n   }\r\n    50% {\r\n        transform: rotateY(0deg);\r\n        background: #6bd6c8;\r\n   }\r\n    100% {\r\n        transform: rotateY(90deg) perspective(50px);\r\n        transform-origin: 100% 50%;\r\n        background: #195c53;\r\n   }\r\n}\r\n@keyframes cuve {\r\n    0% {\r\n        transform: rotateY(-90deg) perspective(50px);\r\n        background: #195c53;\r\n   }\r\n    50% {\r\n        transform: rotateY(0deg);\r\n        background: #6bd6c8;\r\n   }\r\n    100% {\r\n        transform: rotateY(90deg) perspective(50px);\r\n        transform-origin: 100% 50%;\r\n        background: #195c53;\r\n   }\r\n}\r\n@-webkit-keyframes temp {\r\n    50% {\r\n        transform: scale(1,5);\r\n        background: #195c53;\r\n   }\r\n}\r\n@keyframes temp {\r\n    50% {\r\n        transform: scale(1,5);\r\n        background: #195c53;\r\n   }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwaW5uZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxtREFBbUQ7QUFDbkQ7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQiw2QkFBNkI7O0lBRTdCLGtCQUFrQjtJQUNsQiwyREFBMkQ7SUFDM0QsbURBQW1EO0FBQ3ZEO0FBRUE7SUFDSSxLQUFLLHNDQUFzQztJQUMzQyxNQUFNLHNEQUFzRDtJQUM1RCxPQUFPLHVFQUF1RTtBQUNsRjtBQUVBO0lBQ0k7UUFDSSx5REFBeUQ7UUFDekQ7SUFDSixFQUFFO1FBQ0UsOERBQThEO1FBQzlEO0lBQ0osRUFBRTtRQUNFLGlFQUFpRTtRQUNqRSx5RUFBeUU7SUFDN0U7QUFDSjtBQUNBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osV0FBVztJQUNYLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxpRkFBeUU7WUFBekUseUVBQXlFO0FBQzdFO0FBQ0E7SUFDSSxpRkFBeUU7WUFBekUseUVBQXlFO0FBQzdFO0FBQ0E7SUFDSSxpRkFBeUU7WUFBekUseUVBQXlFO0FBQzdFO0FBQ0E7SUFDSSxpRkFBeUU7WUFBekUseUVBQXlFO0FBQzdFO0FBQ0E7SUFDSSxpRkFBeUU7WUFBekUseUVBQXlFO0FBQzdFO0FBRUE7SUFDSTtRQUNJLHFCQUFxQjtHQUMxQjtJQUNDO1FBQ0kseUJBQXlCO1FBQ3pCLG1CQUFtQjtHQUN4QjtJQUNDO1FBQ0kscUJBQXFCO1FBQ3JCLGFBQWE7UUFDYixtQkFBbUI7R0FDeEI7SUFDQztRQUNJLHFCQUFxQjtHQUMxQjtBQUNIO0FBaEJBO0lBQ0k7UUFDSSxxQkFBcUI7R0FDMUI7SUFDQztRQUNJLHlCQUF5QjtRQUN6QixtQkFBbUI7R0FDeEI7SUFDQztRQUNJLHFCQUFxQjtRQUNyQixhQUFhO1FBQ2IsbUJBQW1CO0dBQ3hCO0lBQ0M7UUFDSSxxQkFBcUI7R0FDMUI7QUFDSDtBQUNBO0lBQ0k7UUFDSSx3QkFBd0I7R0FDN0I7SUFDQztRQUNJLHlCQUF5QjtRQUN6QixtQkFBbUI7R0FDeEI7SUFDQztRQUNJLHdCQUF3QjtHQUM3QjtBQUNIO0FBWEE7SUFDSTtRQUNJLHdCQUF3QjtHQUM3QjtJQUNDO1FBQ0kseUJBQXlCO1FBQ3pCLG1CQUFtQjtHQUN4QjtJQUNDO1FBQ0ksd0JBQXdCO0dBQzdCO0FBQ0g7QUFDQTtJQUNJO1FBQ0ksd0JBQXdCO0dBQzdCO0lBQ0M7UUFDSSx3Q0FBd0M7UUFDeEMsbUJBQW1CO0dBQ3hCO0lBQ0M7UUFDSSx3QkFBd0I7R0FDN0I7QUFDSDtBQVhBO0lBQ0k7UUFDSSx3QkFBd0I7R0FDN0I7SUFDQztRQUNJLHdDQUF3QztRQUN4QyxtQkFBbUI7R0FDeEI7SUFDQztRQUNJLHdCQUF3QjtHQUM3QjtBQUNIO0FBQ0E7SUFDSTtRQUNJLHlDQUF5QztHQUM5QztJQUNDO1FBQ0ksMkNBQTJDO1FBQzNDLG1CQUFtQjtHQUN4QjtJQUNDO1FBQ0kseUNBQXlDO0dBQzlDO0FBQ0g7QUFYQTtJQUNJO1FBQ0kseUNBQXlDO0dBQzlDO0lBQ0M7UUFDSSwyQ0FBMkM7UUFDM0MsbUJBQW1CO0dBQ3hCO0lBQ0M7UUFDSSx5Q0FBeUM7R0FDOUM7QUFDSDtBQUNBO0lBQ0k7UUFDSSwwQkFBMEI7R0FDL0I7SUFDQztRQUNJLHFDQUFxQztRQUNyQyxtQkFBbUI7R0FDeEI7SUFDQztRQUNJLDBCQUEwQjtHQUMvQjtBQUNIO0FBWEE7SUFDSTtRQUNJLDBCQUEwQjtHQUMvQjtJQUNDO1FBQ0kscUNBQXFDO1FBQ3JDLG1CQUFtQjtHQUN4QjtJQUNDO1FBQ0ksMEJBQTBCO0dBQy9CO0FBQ0g7QUFDQTtJQUNJO1FBQ0ksNENBQTRDO1FBQzVDLG1CQUFtQjtHQUN4QjtJQUNDO1FBQ0ksd0JBQXdCO1FBQ3hCLG1CQUFtQjtHQUN4QjtJQUNDO1FBQ0ksMkNBQTJDO1FBQzNDLDBCQUEwQjtRQUMxQixtQkFBbUI7R0FDeEI7QUFDSDtBQWRBO0lBQ0k7UUFDSSw0Q0FBNEM7UUFDNUMsbUJBQW1CO0dBQ3hCO0lBQ0M7UUFDSSx3QkFBd0I7UUFDeEIsbUJBQW1CO0dBQ3hCO0lBQ0M7UUFDSSwyQ0FBMkM7UUFDM0MsMEJBQTBCO1FBQzFCLG1CQUFtQjtHQUN4QjtBQUNIO0FBQ0E7SUFDSTtRQUNJLHFCQUFxQjtRQUNyQixtQkFBbUI7R0FDeEI7QUFDSDtBQUxBO0lBQ0k7UUFDSSxxQkFBcUI7UUFDckIsbUJBQW1CO0dBQ3hCO0FBQ0giLCJmaWxlIjoic3Bpbm5lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogY3JlZGl0IC0gaHR0cHM6Ly9jb2RlcGVuLmlvL0plc0dyYVBhL3Blbi9IeWFpdyAqL1xyXG4uc3Bpbm5lciB7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQpO1xyXG5cclxuICAgIG1hcmdpbjogMTAwcHggYXV0bztcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzay1yb3RhdGVwbGFuZSAxLjJzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xyXG4gICAgYW5pbWF0aW9uOiBzay1yb3RhdGVwbGFuZSAxLjJzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2stcm90YXRlcGxhbmUge1xyXG4gICAgMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTIwcHgpIH1cclxuICAgIDUwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMjBweCkgcm90YXRlWSgxODBkZWcpIH1cclxuICAgIDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTIwcHgpIHJvdGF0ZVkoMTgwZGVnKSAgcm90YXRlWCgxODBkZWcpIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzay1yb3RhdGVwbGFuZSB7XHJcbiAgICAwJSB7IFxyXG4gICAgICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTIwcHgpIHJvdGF0ZVgoMGRlZykgcm90YXRlWSgwZGVnKTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTIwcHgpIHJvdGF0ZVgoMGRlZykgcm90YXRlWSgwZGVnKSBcclxuICAgIH0gNTAlIHsgXHJcbiAgICAgICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMjBweCkgcm90YXRlWCgtMTgwLjFkZWcpIHJvdGF0ZVkoMGRlZyk7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEyMHB4KSByb3RhdGVYKC0xODAuMWRlZykgcm90YXRlWSgwZGVnKSBcclxuICAgIH0gMTAwJSB7IFxyXG4gICAgICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTIwcHgpIHJvdGF0ZVgoLTE4MGRlZykgcm90YXRlWSgtMTc5LjlkZWcpO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMjBweCkgcm90YXRlWCgtMTgwZGVnKSByb3RhdGVZKC0xNzkuOWRlZyk7XHJcbiAgICB9XHJcbn1cclxuKiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5ib2R5LCBodG1sIHtcclxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogIzFjMWMxZDtcclxufVxyXG4qIHtcclxuICAgIGNvbG9yOiAjNjY2O1xyXG59XHJcbnNwYW4ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgd2lkdGg6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMkZBQzlCO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG59XHJcbi5ib3JkZXItcmFkaXVzIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwMHB4O1xyXG59XHJcbiNzcGlubmVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuI3NwaW5uZXIgc3BhbjpudGgtY2hpbGQoMSkge1xyXG4gICAgYW5pbWF0aW9uOiByb3RhdGVYIDJzIDAuMXMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKDAuNjUwLDAuMDMwLDAuNzM1LDAuMDQ1KTtcclxufVxyXG4jc3Bpbm5lciBzcGFuOm50aC1jaGlsZCgyKSB7XHJcbiAgICBhbmltYXRpb246IHJvdGF0ZVggMnMgMC4ycyBpbmZpbml0ZSBjdWJpYy1iZXppZXIoMC42NTAsMC4wMzAsMC43MzUsMC4wNDUpO1xyXG59XHJcbiNzcGlubmVyIHNwYW46bnRoLWNoaWxkKDMpIHtcclxuICAgIGFuaW1hdGlvbjogcm90YXRlWCAycyAwLjNzIGluZmluaXRlIGN1YmljLWJlemllcigwLjY1MCwwLjAzMCwwLjczNSwwLjA0NSk7XHJcbn1cclxuI3NwaW5uZXIgc3BhbjpudGgtY2hpbGQoNCkge1xyXG4gICAgYW5pbWF0aW9uOiByb3RhdGVYIDJzIDAuNHMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKDAuNjUwLDAuMDMwLDAuNzM1LDAuMDQ1KTtcclxufVxyXG4jc3Bpbm5lciBzcGFuOm50aC1jaGlsZCg1KSB7XHJcbiAgICBhbmltYXRpb246IHJvdGF0ZVggMnMgMC41cyBpbmZpbml0ZSBjdWJpYy1iZXppZXIoMC42NTAsMC4wMzAsMC43MzUsMC4wNDUpO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNjYWxlIHtcclxuICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMCk7XHJcbiAgIH1cclxuICAgIDI1JSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjksMC45KTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjOTNlMWQ3O1xyXG4gICB9XHJcbiAgICA1MCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwxKTtcclxuICAgICAgICBtYXJnaW46IDAgM3B4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMyRkFDOUI7XHJcbiAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC4wKTtcclxuICAgfVxyXG59XHJcbkBrZXlmcmFtZXMgcm90YXRlWSB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xyXG4gICB9XHJcbiAgICA1MCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSg5MGRlZyk7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzkzZTFkNztcclxuICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xyXG4gICB9XHJcbn1cclxuQGtleWZyYW1lcyByb3RhdGVYIHtcclxuICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XHJcbiAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKSBzY2FsZSgwLjUsMC41KTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjOTNlMWQ3O1xyXG4gICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XHJcbiAgIH1cclxufVxyXG5Aa2V5ZnJhbWVzIHB1c2gge1xyXG4gICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpIHNjYWxlKDAuOSwwLjYpO1xyXG4gICB9XHJcbiAgICA1MCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCkgc2NhbGUoMC43LDEuMSk7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzZiZDZjODtcclxuICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCkgc2NhbGUoMC45LDAuNik7XHJcbiAgIH1cclxufVxyXG5Aa2V5ZnJhbWVzIHJvdGF0ZVoge1xyXG4gICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWigtMjBkZWcpO1xyXG4gICB9XHJcbiAgICA1MCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWigyMGRlZykgc2NhbGVZKDEuMik7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzZiZDZjODtcclxuICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKC0yMGRlZyk7XHJcbiAgIH1cclxufVxyXG5Aa2V5ZnJhbWVzIGN1dmUge1xyXG4gICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgtOTBkZWcpIHBlcnNwZWN0aXZlKDUwcHgpO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMxOTVjNTM7XHJcbiAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICM2YmQ2Yzg7XHJcbiAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSg5MGRlZykgcGVyc3BlY3RpdmUoNTBweCk7XHJcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMTAwJSA1MCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzE5NWM1MztcclxuICAgfVxyXG59XHJcbkBrZXlmcmFtZXMgdGVtcCB7XHJcbiAgICA1MCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSw1KTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMTk1YzUzO1xyXG4gICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "0RKo":
/*!****************************************************************************!*\
  !*** ./src/app/dashboard/components/channel-tab/channel-tab.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".channel-settings {\n  margin: 6px 10px 0 0;\n  opacity: 0;\n}\na:hover .channel-settings {\n  transition: opacity .3s ease-in-out;\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYW5uZWwtdGFiLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBb0I7RUFDcEIsVUFBVTtBQUNaO0FBQ0E7RUFDRSxtQ0FBbUM7RUFDbkMsVUFBVTtBQUNaIiwiZmlsZSI6ImNoYW5uZWwtdGFiLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhbm5lbC1zZXR0aW5ncyB7XG4gIG1hcmdpbjogNnB4IDEwcHggMCAwO1xuICBvcGFjaXR5OiAwO1xufVxuYTpob3ZlciAuY2hhbm5lbC1zZXR0aW5ncyB7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjNzIGVhc2UtaW4tb3V0O1xuICBvcGFjaXR5OiAxO1xufSJdfQ== */");

/***/ }),

/***/ "0myy":
/*!************************************************************************************!*\
  !*** ./src/app/dashboard/components/member-username/member-username.component.css ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".member-username,\r\n.username-wrapper {\r\n  border-radius: 5px;\r\n  width: 100%;\r\n}\r\n.username-wrapper {\r\n  padding: 4px;\r\n}\r\n.active, div:hover {\r\n  background-color: var(--background-primary);\r\n}\r\nimg {\r\n  width: 32px;\r\n  height: 32px;\r\n  margin-right: 10px;\r\n\r\n  float: left;\r\n}\r\n.username {\r\n  padding: 4px;\r\n  max-width: 200px;\r\n\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}\r\n.username-text {\r\n  width: 70% !important;  \r\n\r\n  text-overflow: ellipsis;\r\n}\r\n.status-override {\r\n  font-size: smaller;\r\n  margin-top: -5px;\r\n}\r\ni.fa-crown {\r\n  color: gold;\r\n  font-size: small;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbWJlci11c2VybmFtZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsMkNBQTJDO0FBQzdDO0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjs7RUFFbEIsV0FBVztBQUNiO0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCOztFQUVoQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UscUJBQXFCOztFQUVyQix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoibWVtYmVyLXVzZXJuYW1lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVtYmVyLXVzZXJuYW1lLFxyXG4udXNlcm5hbWUtd3JhcHBlciB7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi51c2VybmFtZS13cmFwcGVyIHtcclxuICBwYWRkaW5nOiA0cHg7XHJcbn1cclxuLmFjdGl2ZSwgZGl2OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLXByaW1hcnkpO1xyXG59XHJcblxyXG5pbWcge1xyXG4gIHdpZHRoOiAzMnB4O1xyXG4gIGhlaWdodDogMzJweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcblxyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4udXNlcm5hbWUge1xyXG4gIHBhZGRpbmc6IDRweDtcclxuICBtYXgtd2lkdGg6IDIwMHB4O1xyXG5cclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn1cclxuLnVzZXJuYW1lLXRleHQge1xyXG4gIHdpZHRoOiA3MCUgIWltcG9ydGFudDsgIFxyXG5cclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG4uc3RhdHVzLW92ZXJyaWRlIHtcclxuICBmb250LXNpemU6IHNtYWxsZXI7XHJcbiAgbWFyZ2luLXRvcDogLTVweDtcclxufVxyXG5pLmZhLWNyb3duIHtcclxuICBjb2xvcjogZ29sZDtcclxuICBmb250LXNpemU6IHNtYWxsO1xyXG59Il19 */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _guild_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guild.service */ "4bjJ");
/* harmony import */ var _http_wrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./http-wrapper */ "R0x+");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user.service */ "qfBg");
/* harmony import */ var _ws_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ws.service */ "Swid");








let ChannelService = class ChannelService extends _http_wrapper__WEBPACK_IMPORTED_MODULE_5__["HTTPWrapper"] {
    constructor(http, ws, guildService, userService) {
        super(http, ws);
        this.guildService = guildService;
        this.userService = userService;
        this.endpoint = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].endpoint}/channels`;
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
        const isSelf = this.userService.self._id === userId;
        if (isSelf)
            return;
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
};
ChannelService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _ws_service__WEBPACK_IMPORTED_MODULE_7__["WSService"] },
    { type: _guild_service__WEBPACK_IMPORTED_MODULE_4__["GuildService"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] }
];
ChannelService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' })
], ChannelService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.component.html */ "aSPh");
/* harmony import */ var _home_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component.css */ "s9Fo");
/* harmony import */ var _home_component_mobile_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component.mobile.css */ "D3iP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "AytR");






let HomeComponent = class HomeComponent {
    constructor() {
        this.version = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].version;
        document.title = 'Accord - Like Discord, But Customizable';
    }
};
HomeComponent.ctorParameters = () => [];
HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_component_css__WEBPACK_IMPORTED_MODULE_2__["default"], _home_component_mobile_css__WEBPACK_IMPORTED_MODULE_3__["default"]]
    })
], HomeComponent);



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
/* harmony import */ var _raw_loader_friends_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./friends-list.component.html */ "fu0z");
/* harmony import */ var _friends_list_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./friends-list.component.css */ "BeKi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_channel_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/channel.service */ "0xJi");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_app_services_ws_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/ws.service */ "Swid");







let FriendsListComponent = class FriendsListComponent {
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
};
FriendsListComponent.ctorParameters = () => [
    { type: src_app_services_channel_service__WEBPACK_IMPORTED_MODULE_4__["ChannelService"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: src_app_services_ws_service__WEBPACK_IMPORTED_MODULE_6__["WSService"] }
];
FriendsListComponent.propDecorators = {
    tab: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
FriendsListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'friends-list',
        template: _raw_loader_friends_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_friends_list_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FriendsListComponent);



/***/ }),

/***/ "2Dz2":
/*!******************************************************************!*\
  !*** ./src/app/dashboard/messages/message/message.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("app-avatar-url {\r\n\tflex-shrink:0;\r\n\tmargin-top:-2px;\r\n\tmargin-right:20px;\r\n}\t\r\n\r\n.message-group {\r\n\tword-wrap:break-word;\r\n\tdisplay:flex;\r\n\tmargin-top:15px;\r\n\tborder-bottom:1px solid #eceeef;\r\n\tbox-sizing:border-box;\r\n\t-webkit-user-select:text;\r\n\t-moz-user-select:text;\r\n\tuser-select:text;\r\n\tpadding:10px 20px 0;\r\n\t}\t\r\n\r\n.username {\r\n\tcursor:pointer;\r\n\tpadding-bottom:5px;\r\n}\t\r\n\r\n.username:hover {\r\n\ttext-decoration:underline;\r\n}\t\r\n\r\n.message-group:last-of-type,.message-group:last-of-type:after {\r\n\tborder-bottom:none;\r\n}\t\r\n\r\n.message-group h2 {\r\n\tmargin:0;\r\n\tpadding:0;\r\n}\t\r\n\r\n.message-group h2 strong {\r\n\tfont-size:16px;\r\n\tfont-weight:600;\r\n\tletter-spacing:0;\r\n\tcolor:var(--heading);\r\n}\t\r\n\r\n.message-group h2 .timestamp {\r\n\tcolor:#99aab5;\r\n\tfont-size:12px;\r\n\tletter-spacing:0;\r\n\tfont-weight:500;\r\n\ttext-transform:none;\r\n\tmargin-left:6px;\r\n}\t\r\n\r\n.message-group .highlight-separator {\r\n\topacity:0;\r\n\twidth:0;\r\n\tdisplay:inline-block;\r\n\tcolor:#99aab5;\r\n}\t\r\n\r\n.message-group .comment {\r\n\tflex:1;\r\n\tmargin-right:20px;\r\n\tmin-width:0;\r\n}\t\r\n\r\n.message-group h2 span {\r\n\tcolor:hsla(0,0%,100%,.2);\r\n}\t\r\n\r\n.message-group {\r\n\tpadding-top: 10px;\r\n}\t\r\n\r\n.extra-message {\r\n\tcolor:var(--font);\r\n\tpadding:0 80px;\r\n}\t\r\n\r\n.extra-message .timestamp {\r\n\tfont-size:small;\r\n\tfloat:left;\r\n\tposition:relative;\r\n\tcursor:default;\r\n\tcolor:transparent;\r\n\tmargin:3px 0 0 -55px;\r\n}\t\r\n\r\n.extra-message:hover .timestamp {\r\n\tcolor:gray;\r\n}\t\r\n\r\n.messages-wrapper,\r\n.messages-wrapper .scroller-wrap,\r\n.hide-overflow {\r\n\toverflow:hidden;\r\n}\t\r\n\r\n.message-group:hover,\r\n.extra-message:hover {\r\n\tbackground-color:rgba(46,48,54,.3);\r\n}\t\r\n\r\n.edit-indicator {\r\n\tdisplay: none;\r\n\tfont-size: 16px !important;\r\n}\t\r\n\r\n.extra-message .edit-indicator {\r\n\tdisplay: none;\r\n\tfont-size: 12px !important;\r\n}\t\r\n\r\n.message-group:hover .edit-indicator,\r\n.extra-message:hover .edit-indicator {\r\n\tdisplay: inline;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUVDLGFBQWE7Q0FDYixlQUFlO0NBQ2YsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0Msb0JBQW9CO0NBQ3BCLFlBQVk7Q0FDWixlQUFlO0NBQ2YsK0JBQStCO0NBQy9CLHFCQUFxQjtDQUNyQix3QkFBd0I7Q0FDeEIscUJBQXFCO0NBRXJCLGdCQUFnQjtDQUNoQixtQkFBbUI7Q0FDbkI7O0FBRUQ7Q0FDQyxjQUFjO0NBQ2Qsa0JBQWtCO0FBQ25COztBQUNBO0NBQ0MseUJBQXlCO0FBQzFCOztBQUVBO0NBQ0Msa0JBQWtCO0FBQ25COztBQUNBO0NBQ0MsUUFBUTtDQUNSLFNBQVM7QUFDVjs7QUFDQTtDQUNDLGNBQWM7Q0FDZCxlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLG9CQUFvQjtBQUNyQjs7QUFDQTtDQUNDLGFBQWE7Q0FDYixjQUFjO0NBQ2QsZ0JBQWdCO0NBQ2hCLGVBQWU7Q0FDZixtQkFBbUI7Q0FDbkIsZUFBZTtBQUNoQjs7QUFDQTtDQUNDLFNBQVM7Q0FDVCxPQUFPO0NBQ1Asb0JBQW9CO0NBQ3BCLGFBQWE7QUFDZDs7QUFDQTtDQUdDLE1BQU07Q0FDTixpQkFBaUI7Q0FDakIsV0FBVztBQUNaOztBQUNBO0NBQ0Msd0JBQXdCO0FBQ3pCOztBQUNBO0NBQ0MsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLGNBQWM7QUFDZjs7QUFDQTtDQUNDLGVBQWU7Q0FDZixVQUFVO0NBQ1YsaUJBQWlCO0NBQ2pCLGNBQWM7Q0FDZCxpQkFBaUI7Q0FDakIsb0JBQW9CO0FBQ3JCOztBQUVBO0NBQ0MsVUFBVTtBQUNYOztBQUVBOzs7Q0FHQyxlQUFlO0FBQ2hCOztBQUVBOztDQUVDLGtDQUFrQztBQUNuQzs7QUFFQTtDQUNDLGFBQWE7Q0FDYiwwQkFBMEI7QUFDM0I7O0FBQ0E7Q0FDQyxhQUFhO0NBQ2IsMEJBQTBCO0FBQzNCOztBQUVBOztDQUVDLGVBQWU7QUFDaEIiLCJmaWxlIjoibWVzc2FnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWF2YXRhci11cmwge1xyXG5cdC1tcy1mbGV4LW5lZ2F0aXZlOjA7XHJcblx0ZmxleC1zaHJpbms6MDtcclxuXHRtYXJnaW4tdG9wOi0ycHg7XHJcblx0bWFyZ2luLXJpZ2h0OjIwcHg7XHJcbn1cdFxyXG5cclxuLm1lc3NhZ2UtZ3JvdXAge1xyXG5cdHdvcmQtd3JhcDpicmVhay13b3JkO1xyXG5cdGRpc3BsYXk6ZmxleDtcclxuXHRtYXJnaW4tdG9wOjE1cHg7XHJcblx0Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2VjZWVlZjtcclxuXHRib3gtc2l6aW5nOmJvcmRlci1ib3g7XHJcblx0LXdlYmtpdC11c2VyLXNlbGVjdDp0ZXh0O1xyXG5cdC1tb3otdXNlci1zZWxlY3Q6dGV4dDtcclxuXHQtbXMtdXNlci1zZWxlY3Q6dGV4dDtcclxuXHR1c2VyLXNlbGVjdDp0ZXh0O1xyXG5cdHBhZGRpbmc6MTBweCAyMHB4IDA7XHJcblx0fVxyXG5cdFxyXG4udXNlcm5hbWUge1xyXG5cdGN1cnNvcjpwb2ludGVyO1xyXG5cdHBhZGRpbmctYm90dG9tOjVweDtcclxufVxyXG4udXNlcm5hbWU6aG92ZXIge1xyXG5cdHRleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmU7XHJcbn1cclxuXHRcclxuLm1lc3NhZ2UtZ3JvdXA6bGFzdC1vZi10eXBlLC5tZXNzYWdlLWdyb3VwOmxhc3Qtb2YtdHlwZTphZnRlciB7XHJcblx0Ym9yZGVyLWJvdHRvbTpub25lO1xyXG59XHJcbi5tZXNzYWdlLWdyb3VwIGgyIHtcclxuXHRtYXJnaW46MDtcclxuXHRwYWRkaW5nOjA7XHJcbn1cdFxyXG4ubWVzc2FnZS1ncm91cCBoMiBzdHJvbmcge1xyXG5cdGZvbnQtc2l6ZToxNnB4O1xyXG5cdGZvbnQtd2VpZ2h0OjYwMDtcclxuXHRsZXR0ZXItc3BhY2luZzowO1xyXG5cdGNvbG9yOnZhcigtLWhlYWRpbmcpO1xyXG59XHRcclxuLm1lc3NhZ2UtZ3JvdXAgaDIgLnRpbWVzdGFtcCB7XHJcblx0Y29sb3I6Izk5YWFiNTtcclxuXHRmb250LXNpemU6MTJweDtcclxuXHRsZXR0ZXItc3BhY2luZzowO1xyXG5cdGZvbnQtd2VpZ2h0OjUwMDtcclxuXHR0ZXh0LXRyYW5zZm9ybTpub25lO1xyXG5cdG1hcmdpbi1sZWZ0OjZweDtcclxufVxyXG4ubWVzc2FnZS1ncm91cCAuaGlnaGxpZ2h0LXNlcGFyYXRvciB7XHJcblx0b3BhY2l0eTowO1xyXG5cdHdpZHRoOjA7XHJcblx0ZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcblx0Y29sb3I6Izk5YWFiNTtcclxufVx0XHJcbi5tZXNzYWdlLWdyb3VwIC5jb21tZW50IHtcclxuXHQtd2Via2l0LWJveC1mbGV4OjE7XHJcblx0LW1zLWZsZXg6MTtcclxuXHRmbGV4OjE7XHJcblx0bWFyZ2luLXJpZ2h0OjIwcHg7XHJcblx0bWluLXdpZHRoOjA7XHJcbn1cdFxyXG4ubWVzc2FnZS1ncm91cCBoMiBzcGFuIHtcclxuXHRjb2xvcjpoc2xhKDAsMCUsMTAwJSwuMik7XHJcbn1cclxuLm1lc3NhZ2UtZ3JvdXAge1xyXG5cdHBhZGRpbmctdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uZXh0cmEtbWVzc2FnZSB7XHJcblx0Y29sb3I6dmFyKC0tZm9udCk7XHJcblx0cGFkZGluZzowIDgwcHg7XHJcbn1cdFxyXG4uZXh0cmEtbWVzc2FnZSAudGltZXN0YW1wIHtcclxuXHRmb250LXNpemU6c21hbGw7XHJcblx0ZmxvYXQ6bGVmdDtcclxuXHRwb3NpdGlvbjpyZWxhdGl2ZTtcclxuXHRjdXJzb3I6ZGVmYXVsdDtcclxuXHRjb2xvcjp0cmFuc3BhcmVudDtcclxuXHRtYXJnaW46M3B4IDAgMCAtNTVweDtcclxufVxyXG5cdFxyXG4uZXh0cmEtbWVzc2FnZTpob3ZlciAudGltZXN0YW1wIHtcclxuXHRjb2xvcjpncmF5O1xyXG59XHJcblx0XHJcbi5tZXNzYWdlcy13cmFwcGVyLFxyXG4ubWVzc2FnZXMtd3JhcHBlciAuc2Nyb2xsZXItd3JhcCxcclxuLmhpZGUtb3ZlcmZsb3cge1xyXG5cdG92ZXJmbG93OmhpZGRlbjtcclxufVxyXG5cdFxyXG4ubWVzc2FnZS1ncm91cDpob3ZlcixcclxuLmV4dHJhLW1lc3NhZ2U6aG92ZXIge1xyXG5cdGJhY2tncm91bmQtY29sb3I6cmdiYSg0Niw0OCw1NCwuMyk7XHJcbn1cclxuXHJcbi5lZGl0LWluZGljYXRvciB7XHJcblx0ZGlzcGxheTogbm9uZTtcclxuXHRmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcclxufVxyXG4uZXh0cmEtbWVzc2FnZSAuZWRpdC1pbmRpY2F0b3Ige1xyXG5cdGRpc3BsYXk6IG5vbmU7XHJcblx0Zm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tZXNzYWdlLWdyb3VwOmhvdmVyIC5lZGl0LWluZGljYXRvcixcclxuLmV4dHJhLW1lc3NhZ2U6aG92ZXIgLmVkaXQtaW5kaWNhdG9yIHtcclxuXHRkaXNwbGF5OiBpbmxpbmU7XHJcbn1cclxuIl19 */");

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
/* harmony import */ var _raw_loader_sign_up_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./sign-up.component.html */ "Yoah");
/* harmony import */ var _sign_up_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sign-up.component.css */ "hwZO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_user_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/user-auth.service */ "hZP9");
/* harmony import */ var _password_validators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./password.validators */ "Tyil");
/* harmony import */ var _username_validators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./username.validators */ "IrsS");
/* harmony import */ var src_app_types_entity_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/types/entity-types */ "h8Xa");
/* harmony import */ var src_app_utils_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/utils/utils */ "oCjk");











let SignUpComponent = class SignUpComponent {
    constructor(route, router, auth, usernameValidators) {
        this.route = route;
        this.router = router;
        this.auth = auth;
        this.usernameValidators = usernameValidators;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](Object(src_app_utils_utils__WEBPACK_IMPORTED_MODULE_10__["generateUsername"])(), [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(32),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(src_app_types_entity_types__WEBPACK_IMPORTED_MODULE_9__["patterns"].username),
            ], this.usernameValidators.shouldBeUnique.bind(this.usernameValidators)),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(8),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(src_app_types_entity_types__WEBPACK_IMPORTED_MODULE_9__["patterns"].password),
            ]),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
        }, { validators: _password_validators__WEBPACK_IMPORTED_MODULE_7__["PasswordValidators"].passwordsShouldMatch });
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
};
SignUpComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _services_user_auth_service__WEBPACK_IMPORTED_MODULE_6__["UserAuthService"] },
    { type: _username_validators__WEBPACK_IMPORTED_MODULE_8__["UsernameValidators"] }
];
SignUpComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'sign-up',
        template: _raw_loader_sign_up_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_sign_up_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SignUpComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_guild_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./guild-navbar.component.html */ "U5Eg");
/* harmony import */ var _guild_navbar_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guild-navbar.component.css */ "FJPe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let GuildNavbarComponent = class GuildNavbarComponent {
    constructor() {
        this.toggleMemberList = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
};
GuildNavbarComponent.propDecorators = {
    activeChannel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    guild: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    toggleMemberList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
GuildNavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-guild-navbar',
        template: _raw_loader_guild_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_guild_navbar_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], GuildNavbarComponent);



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
/* harmony import */ var _raw_loader_message_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./message.component.html */ "RC36");
/* harmony import */ var _message_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message.component.css */ "2Dz2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var discord_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! discord-markdown */ "oKB2");
/* harmony import */ var discord_markdown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(discord_markdown__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var markdown_to_text_emoji__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! markdown-to-text-emoji */ "s99U");
/* harmony import */ var markdown_to_text_emoji__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(markdown_to_text_emoji__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/dialog.service */ "CzQJ");
/* harmony import */ var src_app_services_guild_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/guild.service */ "4bjJ");
/* harmony import */ var src_app_services_log_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/log.service */ "iXKo");
/* harmony import */ var src_app_services_permissions_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/permissions.service */ "tEUU");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_app_services_ws_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/ws.service */ "Swid");












let MessageComponent = class MessageComponent {
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
        const getRole = (id) => { var _a; return (_a = this.guild) === null || _a === void 0 ? void 0 : _a.roles.find(r => r._id === id); };
        const getUser = (id) => this.userService.getAsync(id);
        const getMention = (html, condition) => {
            return (condition)
                ? `<span matTooltip="test" class="self-mention">${html}</span>`
                : html;
        };
        const recipientHasRole = (_b = this.guildService
            .getMember((_a = this.guild) === null || _a === void 0 ? void 0 : _a._id, this.userService.self._id)) === null || _b === void 0 ? void 0 : _b.roleIds.some(id => { var _a; return (_a = this.guild) === null || _a === void 0 ? void 0 : _a.roles.some(r => r._id === id); });
        return Object(discord_markdown__WEBPACK_IMPORTED_MODULE_4__["toHTML"])(Object(markdown_to_text_emoji__WEBPACK_IMPORTED_MODULE_5__["textEmoji"])(this.message.content), {
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
};
MessageComponent.ctorParameters = () => [
    { type: src_app_services_log_service__WEBPACK_IMPORTED_MODULE_8__["LogService"] },
    { type: src_app_services_guild_service__WEBPACK_IMPORTED_MODULE_7__["GuildService"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"] },
    { type: src_app_services_ws_service__WEBPACK_IMPORTED_MODULE_11__["WSService"] },
    { type: src_app_services_permissions_service__WEBPACK_IMPORTED_MODULE_9__["PermissionsService"] },
    { type: src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"] }
];
MessageComponent.propDecorators = {
    message: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    isExtra: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    guild: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    member: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    avatarURL: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    newMessage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['newMessage',] }],
    contextMenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['contextMenu',] }]
};
MessageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'message',
        template: _raw_loader_message_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_message_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MessageComponent);



/***/ }),

/***/ "3lqB":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/utils/coming-soon/coming-soon.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<navbar></navbar>\n\n<app-lighthouse></app-lighthouse>\n<waves></waves>\n\n<section class=\"main\">\n  <div class=\"text-center\">\n    <h1>Coming Soon</h1>\n    <h2 class=\"text-secondary\">...</h2>\n  </div>\n\n  <app-submarine></app-submarine>\n</section>\n");

/***/ }),

/***/ "4UnV":
/*!******************************************************************!*\
  !*** ./src/app/dashboard/me/me-sidebar/me-sidebar.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h4 {\r\n  margin-bottom: 35px;\r\n  cursor: pointer;\r\n}\r\n\r\nimg {\r\n  padding: 0;\r\n  background: var(--background-tertiary);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lLXNpZGViYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLHNDQUFzQztBQUN4QyIsImZpbGUiOiJtZS1zaWRlYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoNCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgcGFkZGluZzogMDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLXRlcnRpYXJ5KTtcclxufSJdfQ== */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.service */ "qfBg");
/* harmony import */ var _http_wrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./http-wrapper */ "R0x+");
/* harmony import */ var _ws_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ws.service */ "Swid");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/utils */ "oCjk");








let GuildService = class GuildService extends _http_wrapper__WEBPACK_IMPORTED_MODULE_5__["HTTPWrapper"] {
    constructor(http, ws, userService) {
        super(http, ws);
        this.userService = userService;
        this.endpoint = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].endpoint + '/guilds';
        this._arr = [];
    }
    get guilds() {
        return this._arr.filter(_utils_utils__WEBPACK_IMPORTED_MODULE_7__["array"].distinctBy('_id'));
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
};
GuildService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ws_service__WEBPACK_IMPORTED_MODULE_6__["WSService"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
];
GuildService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], GuildService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_guild_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/guild.service */ "4bjJ");
/* harmony import */ var _services_log_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/log.service */ "iXKo");
/* harmony import */ var _services_ping_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/ping.service */ "TLdK");
/* harmony import */ var _services_permissions_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/permissions.service */ "tEUU");
/* harmony import */ var _services_sound_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/sound.service */ "V9p5");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/user.service */ "qfBg");
/* harmony import */ var _services_ws_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/ws.service */ "Swid");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/message.service */ "tZre");
/* harmony import */ var _services_channel_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/channel.service */ "0xJi");













let TextBasedChannel = class TextBasedChannel {
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
        this.chatBox = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
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
};
TextBasedChannel.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _services_channel_service__WEBPACK_IMPORTED_MODULE_12__["ChannelService"] },
    { type: _services_message_service__WEBPACK_IMPORTED_MODULE_11__["MessageService"] },
    { type: _services_guild_service__WEBPACK_IMPORTED_MODULE_4__["GuildService"] },
    { type: _services_log_service__WEBPACK_IMPORTED_MODULE_5__["LogService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_permissions_service__WEBPACK_IMPORTED_MODULE_7__["PermissionsService"] },
    { type: _services_ping_service__WEBPACK_IMPORTED_MODULE_6__["PingService"] },
    { type: _services_sound_service__WEBPACK_IMPORTED_MODULE_8__["SoundService"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"] },
    { type: _services_ws_service__WEBPACK_IMPORTED_MODULE_10__["WSService"] }
];
TextBasedChannel.propDecorators = {
    messageInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['message',] }]
};
TextBasedChannel = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ template: '' })
], TextBasedChannel);



/***/ }),

/***/ "4zpt":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/guilds/text-channel/text-channel.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\n  *ngIf=\"channel && messages\"\n  (click)=\"onClick($event)\">\n  <div\n    class=\"messages\"\n    infiniteScroll\n    [scrollWindow]=\"false\"\n    (scrolledUp)=\"false && loadMoreMessages()\">\n    <div *ngIf=\"loadedAllMessages\"\n      class=\"jumbotron pb-0\">\n      <p class=\"lead\">Start of {{ title }} message history.</p>\n      <hr>\n    </div>\n    <spinner *ngIf=\"!loadedAllMessages\"></spinner>\n  \n    <div\n      *ngFor=\"let message of messages; index as i; trackBy: identifyMessage\"\n      class=\"message\"\n      [id]=\"'message' + message._id\">\n      <message\n        [message]=\"message\"\n        [isExtra]=\"shouldCombine(i)\"\n        [member]=\"guildService.getMember(guild?._id, message.authorId)\"\n        [guild]=\"guild\"></message>\n    </div>\n  </div>\n  \n  <div\n    *ngIf=\"channel\"\n    class=\"footer\">\n    <emoji-mart\n      *ngIf=\"emojiPickerOpen\"\n      class=\"float-right\"\n      emoji=\"joy\"\n      title=\"Pick an Emoji\"\n      (click)=\"emojiPickerOpen = !emojiPickerOpen\"\n      (emojiClick)=\"addEmoji($event)\"></emoji-mart>\n  \n    <mat-form-field\n      autoFocus\n      (keyup)=\"emitTyping()\"\n      (keyup.enter)=\"chat(message.value)\"\n      appearance=\"fill\"\n      class=\"d-block\">\n      <mat-label>Message {{ title }}</mat-label>\n      <textarea\n        [disabled]=\"guild && !perms.can(guild._id, 'SEND_MESSAGES')\"\n        id=\"chatBox\"\n        matInput\n        #message></textarea>\n  \n      <mat-icon\n        (click)=\"emojiPickerOpen = true\"\n        class=\"cursor-pointer emoji-icon mb-3\"\n        align=\"end\"\n        matSuffix>\n        <i class=\"fas fa-surprise\"></i>\n      </mat-icon>\n    </mat-form-field>\n  \n    <div\n      *ngIf=\"typingUsernames.length <= 0\"\n      class=\"pt-3\"></div>\n    <div\n      *ngIf=\"typingUsernames.length > 0\"\n      class=\"typing\">\n      <strong>{{ typingUsernames.join(', ') }}</strong> {{ typingUsernames.length > 1 ? 'are' : 'is' }} typing...\n    </div>\n  </div>\n  <div *ngIf=\"!channel\">\n    <spinner></spinner>\n  </div>  \n</div>");

/***/ }),

/***/ "5+EO":
/*!**************************************************************************************!*\
  !*** ./src/app/dashboard/components/settings-sidebar/settings-sidebar.component.css ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".side, .main, .main .content {\n  min-height: 100%;\n}\n\n.side .category {\n  margin-left: 10px;  \n}\n\n.side a {\n  padding-right: 10px !important;\n  cursor: pointer;\n}\n\n.side {\n  float: left;\n  width: 25%;\n  \n  position: fixed;\n\n  background-color: var(--background-secondary);\n}\n\n.side .category {\n  color: var(--secondary);\n  padding-left: 5px;\n}\n\n.side .navbar-nav {\n  padding: 35px;\n  padding-top: 40px;\n}\n\n.side hr {\n  color: var(--font);\n}\n\n.main-content {\n  padding: 60px 40px;\n  width: 90%;  \n}\n\n.main {\n  float: right;\n  width: 75%;\n}\n\n.close-container {\n  position: absolute;\n  top: 25px;\n  right: -50px;\n}\n\n.close {\n  text-shadow: unset;\n\n  border: 1px solid var(--tertiary);\n  padding: 8px;\n  padding-top: 12px;\n  width: 48px;\n  height: 48px;\n}\n\n.close i {\n  color: var(--font); \n}\n\n.close:hover {\n  background-color: var(--tertiary);\n}\n\n.close-container {\n  margin: 50px 7.5vw;\n}\n\n.nav-item i {\n  width: 20px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmdzLXNpZGViYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLDhCQUE4QjtFQUM5QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFVBQVU7O0VBRVYsZUFBZTs7RUFFZiw2Q0FBNkM7QUFDL0M7O0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0VBQ1osVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7O0VBRWxCLGlDQUFpQztFQUNqQyxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEIiLCJmaWxlIjoic2V0dGluZ3Mtc2lkZWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGUsIC5tYWluLCAubWFpbiAuY29udGVudCB7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG59XG5cbi5zaWRlIC5jYXRlZ29yeSB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4OyAgXG59XG4uc2lkZSBhIHtcbiAgcGFkZGluZy1yaWdodDogMTBweCAhaW1wb3J0YW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zaWRlIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAyNSU7XG4gIFxuICBwb3NpdGlvbjogZml4ZWQ7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1zZWNvbmRhcnkpO1xufVxuLnNpZGUgLmNhdGVnb3J5IHtcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xufVxuLnNpZGUgLm5hdmJhci1uYXYge1xuICBwYWRkaW5nOiAzNXB4O1xuICBwYWRkaW5nLXRvcDogNDBweDtcbn1cbi5zaWRlIGhyIHtcbiAgY29sb3I6IHZhcigtLWZvbnQpO1xufVxuXG4ubWFpbi1jb250ZW50IHtcbiAgcGFkZGluZzogNjBweCA0MHB4O1xuICB3aWR0aDogOTAlOyAgXG59XG5cbi5tYWluIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB3aWR0aDogNzUlO1xufVxuXG4uY2xvc2UtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDI1cHg7XG4gIHJpZ2h0OiAtNTBweDtcbn1cblxuLmNsb3NlIHtcbiAgdGV4dC1zaGFkb3c6IHVuc2V0O1xuXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRlcnRpYXJ5KTtcbiAgcGFkZGluZzogOHB4O1xuICBwYWRkaW5nLXRvcDogMTJweDtcbiAgd2lkdGg6IDQ4cHg7XG4gIGhlaWdodDogNDhweDtcbn1cbi5jbG9zZSBpIHtcbiAgY29sb3I6IHZhcigtLWZvbnQpOyBcbn1cbi5jbG9zZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRlcnRpYXJ5KTtcbn1cbi5jbG9zZS1jb250YWluZXIge1xuICBtYXJnaW46IDUwcHggNy41dnc7XG59XG5cbi5uYXYtaXRlbSBpIHtcbiAgd2lkdGg6IDIwcHggIWltcG9ydGFudDtcbn0iXX0= */");

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
/* harmony import */ var _channel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../channel.service */ "0xJi");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../message.service */ "tZre");
/* harmony import */ var _sound_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sound.service */ "V9p5");





let ChannelEventService = class ChannelEventService {
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
};
ChannelEventService.ctorParameters = () => [
    { type: _sound_service__WEBPACK_IMPORTED_MODULE_4__["SoundService"] },
    { type: _channel_service__WEBPACK_IMPORTED_MODULE_2__["ChannelService"] },
    { type: _message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"] }
];
ChannelEventService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ChannelEventService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let MiniDatePipe = class MiniDatePipe {
    transform(dateString, ...args) {
        const date = new Date(dateString);
        return `${date.getDate()}/${(date.getMonth() + 1)}`;
    }
};
MiniDatePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'miniDate'
    })
], MiniDatePipe);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_guild_icon_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./guild-icon.component.html */ "lBzy");
/* harmony import */ var _guild_icon_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guild-icon.component.css */ "DMKY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/dialog.service */ "CzQJ");
/* harmony import */ var src_app_services_guild_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/guild.service */ "4bjJ");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");







let GuildIconComponent = class GuildIconComponent {
    constructor(dialogs, guildService, userService) {
        this.dialogs = dialogs;
        this.guildService = guildService;
        this.userService = userService;
    }
};
GuildIconComponent.ctorParameters = () => [
    { type: src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_4__["DialogService"] },
    { type: src_app_services_guild_service__WEBPACK_IMPORTED_MODULE_5__["GuildService"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] }
];
GuildIconComponent.propDecorators = {
    guild: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
GuildIconComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-guild-icon',
        template: _raw_loader_guild_icon_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_guild_icon_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], GuildIconComponent);



/***/ }),

/***/ "6Rdy":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/guilds/guild-overview/guild-overview.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<guild-sidebar>\r\n  <app-guild-navbar\r\n    [activeChannel]=\"textChannel.channel\"\r\n    [guild]=\"guild\"\r\n    (toggleMemberList)=\"memberList.isExpanded = !memberList.isExpanded\"></app-guild-navbar>\r\n\r\n  <div class=\"row\">\r\n    <div\r\n      class=\"text-channel-container\"\r\n      [class]=\"(memberList.isExpanded) ? 'col-lg-7 col-md-5 col-xl-9': 'col-12'\">\r\n      <section\r\n        *ngIf=\"!activeChannel\"\r\n        class=\"jumbotron\">\r\n        <p class=\"lead\">\r\n          <i class=\"fas fa-directions mr-1\"></i>\r\n          <span>Nothing here yet.</span>\r\n        </p>\r\n        <hr>\r\n        <p>No channels here, just emptiness.</p>\r\n      </section>\r\n\r\n      <app-text-channel #textChannel></app-text-channel>\r\n    </div>\r\n\r\n    <div\r\n      [hidden]=\"!memberList.isExpanded\"\r\n      class=\"col-xl-3 col-lg-5 col-md-7\">\r\n      <app-member-list\r\n        [guild]=\"guild\"\r\n        #memberList></app-member-list>\r\n    </div>\r\n  </div>\r\n</guild-sidebar>\r\n");

/***/ }),

/***/ "6kS/":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/components/avatar-url/avatar-url.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<img\n  [src]=\"user.avatarURL\" \n  [alt]=\"user.username + '\\'s Avatar'\"\n  [style.width]=\"size\"\n  [style.height]=\"size\"\n  class=\"d-inline cursor-pointer\"\n  #img>\n");

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

/***/ "7HDu":
/*!****************************************************************************!*\
  !*** ./src/app/dashboard/guilds/voice-channel/voice-channel.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("member-username {\r\n  scale: 0.75;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZvaWNlLWNoYW5uZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJ2b2ljZS1jaGFubmVsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtZW1iZXItdXNlcm5hbWUge1xyXG4gIHNjYWxlOiAwLjc1O1xyXG59Il19 */");

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
/* harmony import */ var _raw_loader_create_channel_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./create-channel.component.html */ "RaNy");
/* harmony import */ var _create_channel_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-channel.component.css */ "pLCM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_services_ws_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/ws.service */ "Swid");
/* harmony import */ var src_app_types_entity_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/types/entity-types */ "h8Xa");








let CreateChannelComponent = class CreateChannelComponent {
    constructor(dialogRef, data, ws) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.ws = ws;
        // TODO: use different form for voice channel
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('chat', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(src_app_types_entity_types__WEBPACK_IMPORTED_MODULE_7__["patterns"].textChannelName),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
            ]),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('TEXT'),
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
};
CreateChannelComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"],] }] },
    { type: src_app_services_ws_service__WEBPACK_IMPORTED_MODULE_6__["WSService"] }
];
CreateChannelComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-create-channel',
        template: _raw_loader_create_channel_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_create_channel_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CreateChannelComponent);



/***/ }),

/***/ "A3xY":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".popup {\n  z-index: 1;\n  position: static;\n}\n\n#successPopup {\n  background-color: var(--success);\n  color: var(--dark);\n}\n\n#errorPopup {\n  background-color: var(--danger);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSwrQkFBK0I7QUFDakMiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9wdXAge1xuICB6LWluZGV4OiAxO1xuICBwb3NpdGlvbjogc3RhdGljO1xufVxuXG4jc3VjY2Vzc1BvcHVwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VjY2Vzcyk7XG4gIGNvbG9yOiB2YXIoLS1kYXJrKTtcbn1cbiNlcnJvclBvcHVwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFuZ2VyKTtcbn0iXX0= */");

/***/ }),

/***/ "A5jb":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/components/sidebar/sidebar.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-sidenav-container fullscreen>\r\n  <mat-sidenav mode=\"side\" opened #drawer>\r\n    <div class=\"guilds px-2\">\r\n      <div class=\"user\">\r\n        <div\r\n          routerLinkActive=\"active\"\r\n          routerLink=\"/channels/@me\"\r\n          class=\"guild-icon\">\r\n          <app-avatar-url\r\n            [user]=\"user\"\r\n            [size]=\"'52px'\"></app-avatar-url>\r\n        </div>\r\n        <span class=\"d-flex justify-content-center\">\r\n          <h5 class=\"text-muted\">.</h5>\r\n        </span>\r\n      </div>\r\n      <app-guild-icon\r\n        *ngFor=\"let guild of guilds\"\r\n        [guild]=\"guild\"\r\n        [matTooltip]=\"guild.name\"></app-guild-icon>\r\n      <div\r\n        (click)=\"dialog.createGuild()\"\r\n        class=\"guild-icon add-guild bg-transparent cursor-pointer\"\r\n        matTooltip=\"Add a Guild\">\r\n        <span class=\"add-guild pt-0 d-flex justify-content-center flex-column\">+</span>\r\n      </div>\r\n    </div>\r\n    <div class=\"options\">\r\n      <ng-content select=\".side-nav\"></ng-content>\r\n\r\n      <footer class=\"d-flex\">\r\n        <app-avatar-url\r\n          [user]=\"user\"\r\n          size=\"48px\"\r\n          class=\"pt-2\"></app-avatar-url>\r\n        <h6 class=\"username text-overflow-ellipsis\">{{ user.username }}</h6>\r\n\r\n        <div class=\"ml-auto\">\r\n          <button\r\n            id=\"settingsButton\"\r\n            matTooltip=\"Settings\"\r\n            routerLink=\"/channels/@me/settings\"\r\n            class=\"mr-2 p-2\"\r\n            mat-button>\r\n            <i class=\"fas fa-cogs\"></i>          \r\n          </button>\r\n        </div>\r\n      </footer>\r\n    </div>\r\n  </mat-sidenav>\r\n  <mat-sidenav-content>\r\n    <ng-content select=\"#content\"></ng-content>\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>");

/***/ }),

/***/ "AH1W":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cool/submarine/submarine.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- credit: https://codepen.io/akhil_001/details/gQwJPJ -->\n<div class=\"seaContainer\">\n  <div class=\"submarine__container\">\n    <div class=\"submarine__sail\">\n      <div class=\"submarine__sail-shadow dark1\">\n      </div>\n      <div class=\"submarine__sail-shadow light1\"></div>\n      <div class=\"submarine__sail-shadow dark2\"></div>\n    </div>\n    <div class=\"submarine__body\">\n      <div class=\"submarine__window one\">\n\n      </div>\n      <div class=\"submarine__window two\">\n\n      </div>\n      <div class=\"submarine__shadow-dark\"></div>\n      <div class=\"submarine__shadow-light\"></div>\n      <div class=\"submarine__shadow-arcLight\"></div>\n    </div>\n    <div class=\"bubbles__container\">\n      <span class=\"bubbles bubble-1\"></span>\n      <span class=\"bubbles bubble-2\"></span>\n      <span class=\"bubbles bubble-3\"></span>\n      <span class=\"bubbles bubble-4\"></span>\n    </div>\n    <div class=\"submarine__propeller\">\n      <div class=\"propeller__perspective\">\n      <div class=\"submarine__propeller-parts darkOne\"></div>\n      <div class=\"submarine__propeller-parts lightOne\"></div>\n      </div>        \n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "AkLZ":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/utils/zippy/zippy.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container>\r\n  <div class=\"zippy\">\r\n    <div class=\"zippy-heading\"\r\n      [class.expanded]=\"expanded\" \r\n      (click)=\"toggle()\">\r\n      {{ title }}\r\n      <span>\r\n        <i class=\"float-right fa fa-chevron-down\"></i>\r\n      </span>\r\n    </div>\r\n    <div\r\n      class=\"zippy-body\"\r\n      [@expandCollapse]=\"(expanded) ? 'expanded' : 'collapsed'\">\r\n      <ng-content></ng-content>\r\n    </div>\r\n  </div>\r\n</ng-container>");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_message_embed_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./message-embed.component.html */ "Q/dq");
/* harmony import */ var _message_embed_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message-embed.component.css */ "FJxH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let MessageEmbedComponent = class MessageEmbedComponent {
    constructor() {
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
};
MessageEmbedComponent.propDecorators = {
    message: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    close: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    canManage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
MessageEmbedComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'message-embed',
        template: _raw_loader_message_embed_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_message_embed_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MessageEmbedComponent);



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




let GuildEventService = class GuildEventService {
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
};
GuildEventService.ctorParameters = () => [
    { type: _guild_service__WEBPACK_IMPORTED_MODULE_2__["GuildService"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
];
GuildEventService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], GuildEventService);



/***/ }),

/***/ "BeKi":
/*!**********************************************************************!*\
  !*** ./src/app/dashboard/me/friends-list/friends-list.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button.round {\r\n  width: 36px;\r\n  height: 36px;\r\n\r\n  background-color: var(--background-tertiary);\r\n  color: var(--heading)\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyaWVuZHMtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7O0VBRVosNENBQTRDO0VBQzVDO0FBQ0YiLCJmaWxlIjoiZnJpZW5kcy1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ucm91bmQge1xyXG4gIHdpZHRoOiAzNnB4O1xyXG4gIGhlaWdodDogMzZweDtcclxuXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC10ZXJ0aWFyeSk7XHJcbiAgY29sb3I6IHZhcigtLWhlYWRpbmcpXHJcbn0iXX0= */");

/***/ }),

/***/ "C5ax":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/add-friend/add-friend.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>Add Friend</h1>\n<p class=\"text-muted\">Add a friend by their username.</p>\n\n<form\n  #f=\"ngForm\"\n  [formGroup]=\"addFriendForm\"\n  class=\"d-flex justify-content-center\"\n  (keyup.enter)=\"sendFriendRequest()\">\n  <mat-form-field appearance=\"outline\">\n    <mat-label>Username</mat-label>\n    <input formControlName=\"username\" type=\"text\" matInput>\n  </mat-form-field>\n</form>\n\n<div class=\"d-flex justify-content-center\" mat-dialog-actions>\n  <button\n    (click)=\"sendFriendRequest()\"\n    class=\"bg-success send-friend-request text-dark\"\n    mat-button\n    matSuffix>Send Request</button>\n</div>");

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
/* harmony import */ var _raw_loader_user_account_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./user-account.component.html */ "Gbek");
/* harmony import */ var _user_account_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-account.component.css */ "IhpV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_authentication_sign_up_password_validators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/authentication/sign-up/password.validators */ "Tyil");
/* harmony import */ var src_app_authentication_sign_up_username_validators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/authentication/sign-up/username.validators */ "IrsS");
/* harmony import */ var src_app_services_log_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/log.service */ "iXKo");
/* harmony import */ var src_app_services_user_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/user-auth.service */ "hZP9");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_app_types_entity_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/types/entity-types */ "h8Xa");











let UserAccountComponent = class UserAccountComponent {
    constructor(userService, usernameValidators, userAuthService, log) {
        this.userService = userService;
        this.usernameValidators = usernameValidators;
        this.userAuthService = userAuthService;
        this.log = log;
        this.passwordForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            oldPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            newPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(src_app_types_entity_types__WEBPACK_IMPORTED_MODULE_10__["patterns"].password),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
            ]),
        }, [src_app_authentication_sign_up_password_validators__WEBPACK_IMPORTED_MODULE_5__["PasswordValidators"].newPasswordShouldNotMatch]);
        this.processingEmail = false;
        this.processingPassword = false;
    }
    buildForm(user) {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](user.email, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(src_app_types_entity_types__WEBPACK_IMPORTED_MODULE_10__["patterns"].email),
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
};
UserAccountComponent.ctorParameters = () => [
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"] },
    { type: src_app_authentication_sign_up_username_validators__WEBPACK_IMPORTED_MODULE_6__["UsernameValidators"] },
    { type: src_app_services_user_auth_service__WEBPACK_IMPORTED_MODULE_8__["UserAuthService"] },
    { type: src_app_services_log_service__WEBPACK_IMPORTED_MODULE_7__["LogService"] }
];
UserAccountComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-user-account',
        template: _raw_loader_user_account_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_user_account_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], UserAccountComponent);



/***/ }),

/***/ "Cn2O":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/login/login.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<navbar></navbar>\n<section class=\"container text-center pb-5\">\n  <div class=\"py-2 mt-5 d-none d-sm-block\"></div>\n\n  <h2 class=\"display-4 mb-4 mt-5\">Login</h2>\n\n  <form\n    #f=\"ngForm\"\n    [formGroup]=\"form\"\n    (ngSubmit)=\"login()\">\n    <input\n      value=\"username\"\n      type=\"hidden\"\n      #loginWith>\n\n    <div class=\"form-group\">\n      <mat-form-field\n        *ngIf=\"loginWith.value === 'username'\"\n        appearance=\"outline\">\n        <mat-label for=\"username\">Username</mat-label>\n        <input formControlName=\"username\"\n          id=\"username\" type=\"text\" autocomplete=\"username\" matInput>\n        <mat-error *ngIf=\"username.errors?.pattern\">Username is invalid.</mat-error>\n      </mat-form-field>\n\n      <mat-form-field\n        *ngIf=\"loginWith.value === 'email'\"\n        appearance=\"outline\">\n        <mat-label for=\"email\">Email</mat-label>\n        <input formControlName=\"email\"\n          id=\"email\" type=\"email\" autocomplete=\"email\" matInput>\n        <mat-error *ngIf=\"email.errors?.pattern\">Email is invalid.</mat-error>\n      </mat-form-field>\n\n      <a (click)=\"toggleLoginWith()\"\n        class=\"cursor-pointer d-block\">\n        Login with {{ (loginWith.value === 'email') ? 'Username' : 'Email' }}\n      </a>\n    </div>\n    <div class=\"form-group\">\n      <mat-form-field appearance=\"outline\">\n        <mat-label for=\"password\">Password</mat-label>\n        <input formControlName=\"password\"\n          id=\"password\" type=\"password\" autocomplete=\"current-password\" matInput>\n        <mat-error *ngIf=\"password.errors\">Password is required.</mat-error>\n      </mat-form-field>\n    </div>\n\n    <button\n      [disabled]=\"processing\"\n      class=\"bg-primary mb-2\"\n      type=\"submit\"\n      mat-button>\n      <span\n        *ngIf=\"processing\"\n        class=\"spinner-border spinner-border-sm\"\n        role=\"status\"\n        aria-hidden=\"true\"></span>\n      Login\n    </button>\n    <div>Or <a\n      [routerLink]=\"['/sign-up']\"\n      [queryParams]=\"{ redirect: redirect }\">create an account</a>.</div>\n  </form>\n</section>");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _dialog_add_friend_add_friend_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dialog/add-friend/add-friend.component */ "PMD9");
/* harmony import */ var _dialog_create_channel_create_channel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dialog/create-channel/create-channel.component */ "9uiD");
/* harmony import */ var _dialog_create_guild_create_guild_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dialog/create-guild/create-guild.component */ "FwYx");
/* harmony import */ var _dialog_create_invite_create_invite_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dialog/create-invite/create-invite.component */ "zswv");
/* harmony import */ var _dialog_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../dialog/profile/profile.component */ "rEt/");








let DialogService = class DialogService {
    constructor(dialog) {
        this.dialog = dialog;
    }
    openMenu(event, menuTrigger) {
        event.preventDefault();
        menuTrigger.openMenu();
    }
    createInvite(data) {
        this.dialog.open(_dialog_create_invite_create_invite_component__WEBPACK_IMPORTED_MODULE_6__["CreateInviteComponent"], { width: '500px', data });
    }
    createChannel(data) {
        this.dialog.open(_dialog_create_channel_create_channel_component__WEBPACK_IMPORTED_MODULE_4__["CreateChannelComponent"], { width: '350px', data });
    }
    profile(data) {
        this.dialog.open(_dialog_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"], { width: '500px', data });
    }
    createGuild() {
        this.dialog.open(_dialog_create_guild_create_guild_component__WEBPACK_IMPORTED_MODULE_5__["CreateGuildComponent"], { width: '500px' });
    }
    addFriend() {
        this.dialog.open(_dialog_add_friend_add_friend_component__WEBPACK_IMPORTED_MODULE_3__["AddFriendComponent"], { width: '350px' });
    }
};
DialogService.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
DialogService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DialogService);



/***/ }),

/***/ "D3iP":
/*!******************************************************!*\
  !*** ./src/app/pages/home/home.component.mobile.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Small devices (landscape phones, 576px and up) */\n@media (max-width: 576px) {\n  * {\n    overflow-x: hidden;\n  }\n  img {\n    width: 300px;\n    height: auto;\n  }\n}\n/* Medium devices (tablets, 768px and up) */\n@media (max-width: 768px) {\n\n}\n/* Large devices (desktops, 992px and up) */\n@media (max-width: 992px) {\n\n}\n/* X-Large devices (large desktops, 1200px and up) */\n@media (max-width: 1200px) {\n\n}\n/* XX-Large devices (larger desktops, 1400px and up) */\n@media (max-width: 1400px) {\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50Lm1vYmlsZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbURBQW1EO0FBQ25EO0VBQ0U7SUFDRSxrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLFlBQVk7SUFDWixZQUFZO0VBQ2Q7QUFDRjtBQUVBLDJDQUEyQztBQUMzQzs7QUFFQTtBQUVBLDJDQUEyQztBQUMzQzs7QUFFQTtBQUVBLG9EQUFvRDtBQUNwRDs7QUFFQTtBQUVBLHNEQUFzRDtBQUN0RDs7QUFFQSIsImZpbGUiOiJob21lLmNvbXBvbmVudC5tb2JpbGUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogU21hbGwgZGV2aWNlcyAobGFuZHNjYXBlIHBob25lcywgNTc2cHggYW5kIHVwKSAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICoge1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgfVxuICBpbWcge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbn1cblxuLyogTWVkaXVtIGRldmljZXMgKHRhYmxldHMsIDc2OHB4IGFuZCB1cCkgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuXG59XG5cbi8qIExhcmdlIGRldmljZXMgKGRlc2t0b3BzLCA5OTJweCBhbmQgdXApICovXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcblxufVxuXG4vKiBYLUxhcmdlIGRldmljZXMgKGxhcmdlIGRlc2t0b3BzLCAxMjAwcHggYW5kIHVwKSAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xuXG59XG5cbi8qIFhYLUxhcmdlIGRldmljZXMgKGxhcmdlciBkZXNrdG9wcywgMTQwMHB4IGFuZCB1cCkgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiAxNDAwcHgpIHtcblxufSJdfQ== */");

/***/ }),

/***/ "DIg/":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1 {\r\n  font-size: 32px;\r\n}\r\n\r\nnav.navbar {\r\n  background-color: transparent;\r\n  color: var(--font);\r\n}\r\n\r\nimg:not(.icon) {\r\n  width: 32px;\r\n  height: auto;\r\n}\r\n\r\nimg.icon {\r\n  height: 32px;\r\n}\r\n\r\n.dropdown-menu {\r\n  background: var(--background-secondary);\r\n}\r\n\r\n.dropdown-menu a {  \r\n  color: var(--font);\r\n}\r\n\r\n.dropdown-menu a:hover {\r\n  background-color: var(--background-primary);\r\n}\r\n\r\na {\r\n  cursor: pointer;\r\n  font-weight: 800;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUNBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcclxuICBmb250LXNpemU6IDMycHg7XHJcbn1cclxuXHJcbm5hdi5uYXZiYXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiB2YXIoLS1mb250KTtcclxufVxyXG5cclxuaW1nOm5vdCguaWNvbikge1xyXG4gIHdpZHRoOiAzMnB4O1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG5pbWcuaWNvbiB7XHJcbiAgaGVpZ2h0OiAzMnB4O1xyXG59XHJcblxyXG4uZHJvcGRvd24tbWVudSB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1zZWNvbmRhcnkpO1xyXG59XHJcblxyXG4uZHJvcGRvd24tbWVudSBhIHsgIFxyXG4gIGNvbG9yOiB2YXIoLS1mb250KTtcclxufVxyXG5cclxuLmRyb3Bkb3duLW1lbnUgYTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1wcmltYXJ5KTtcclxufVxyXG5cclxuYSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn0iXX0= */");

/***/ }),

/***/ "DMKY":
/*!**************************************************************************!*\
  !*** ./src/app/dashboard/components/guild-icon/guild-icon.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".guild-icon {\n  border-radius: 50%;\n\n  margin: 5px;\n  width: 52px;\n  height: 52px;\n\n  background-color: var(--background-primary);\n  transition: all .35s;\n\n  cursor: pointer;\n}\n\n.guild-icon img:hover,\n.guild-icon:hover,\n.guild-icon span:hover {\n  border-radius: 25%;\n}\n\n.guild-icon span {\n  text-align: center;\n  font-size: 18px;\n\n  transition: all .35s;\n\n  width: 52px;\n  height: 48px;\n  padding-top: 14px;\n}\n\n.guild-icon img {\n  width: 52px;\n  height: 52px;\n\n  border-radius: 50%;\n  transition: all .35s;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImd1aWxkLWljb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjs7RUFFbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZOztFQUVaLDJDQUEyQztFQUMzQyxvQkFBb0I7O0VBRXBCLGVBQWU7QUFDakI7O0FBRUE7OztFQUdFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlOztFQUVmLG9CQUFvQjs7RUFFcEIsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTs7RUFFWixrQkFBa0I7RUFDbEIsb0JBQW9CO0FBQ3RCIiwiZmlsZSI6Imd1aWxkLWljb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ndWlsZC1pY29uIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuXG4gIG1hcmdpbjogNXB4O1xuICB3aWR0aDogNTJweDtcbiAgaGVpZ2h0OiA1MnB4O1xuXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtcHJpbWFyeSk7XG4gIHRyYW5zaXRpb246IGFsbCAuMzVzO1xuXG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmd1aWxkLWljb24gaW1nOmhvdmVyLFxuLmd1aWxkLWljb246aG92ZXIsXG4uZ3VpbGQtaWNvbiBzcGFuOmhvdmVyIHtcbiAgYm9yZGVyLXJhZGl1czogMjUlO1xufVxuXG4uZ3VpbGQtaWNvbiBzcGFuIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG5cbiAgdHJhbnNpdGlvbjogYWxsIC4zNXM7XG5cbiAgd2lkdGg6IDUycHg7XG4gIGhlaWdodDogNDhweDtcbiAgcGFkZGluZy10b3A6IDE0cHg7XG59XG5cbi5ndWlsZC1pY29uIGltZyB7XG4gIHdpZHRoOiA1MnB4O1xuICBoZWlnaHQ6IDUycHg7XG5cbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0cmFuc2l0aW9uOiBhbGwgLjM1cztcbn1cbiJdfQ== */");

/***/ }),

/***/ "Db/I":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/invite/invite.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<navbar></navbar>\n\n<waves></waves>\n\n<section class=\"main\">\n  <div *ngIf=\"guild && userService.self\" class=\"text-center\">\n    <p class=\"lead\">You have been invited to</p>\n    <h1>{{ guild._id }}</h1>\n    <hr>\n    <button (click)=\"join()\" class=\"bg-primary\" mat-button>Join</button>\n  </div>\n\n  <div *ngIf=\"guild && !userService.self\" >\n    <p class=\"lead\">You have been invited to</p>\n    <h1>{{ guild._id }}</h1>\n    <hr>\n    <button [routerLink]=\"'/sign-up&redirect=/invite/' + invite._id\" class=\"bg-success\" mat-button>Join</button>\n  </div>\n  \n  <div *ngIf=\"!guild\" class=\"text-center\">\n    <p class=\"lead\">This invite is</p>\n    <h1 class=\"text-danger\">Invalid</h1>\n  </div>\n\n  <app-submarine></app-submarine>\n</section>\n");

/***/ }),

/***/ "DbLH":
/*!*************************************************!*\
  !*** ./src/app/utils/waves/waves.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".waves {\r\n    position:relative;\r\n    width: 100%;\r\n    height:5vh;\r\n    margin-bottom:-7px; /*Fix for safari gap*/\r\n    min-height:50px;\r\n    max-height:75px;\r\n  }\r\n  \r\n.content {\r\n  position:relative;\r\n  height:10vh;\r\n  text-align:center;\r\n  background-color: var(--background-secondary);\r\n}\r\n  \r\n/* Animation */\r\n  \r\n.parallax > use {\r\n  -webkit-animation: move-forever 25s cubic-bezier(.55,.5,.45,.5) infinite;\r\n          animation: move-forever 25s cubic-bezier(.55,.5,.45,.5) infinite;\r\n}\r\n  \r\n.parallax > use:nth-child(1) {\r\n  -webkit-animation-delay: -2s;\r\n          animation-delay: -2s;\r\n  -webkit-animation-duration: 7s;\r\n          animation-duration: 7s;\r\n}\r\n  \r\n.parallax > use:nth-child(2) {\r\n  -webkit-animation-delay: -3s;\r\n          animation-delay: -3s;\r\n  -webkit-animation-duration: 10s;\r\n          animation-duration: 10s;\r\n}\r\n  \r\n.parallax > use:nth-child(3) {\r\n  -webkit-animation-delay: -4s;\r\n          animation-delay: -4s;\r\n  -webkit-animation-duration: 13s;\r\n          animation-duration: 13s;\r\n}\r\n  \r\n.parallax > use:nth-child(4) {\r\n  -webkit-animation-delay: -5s;\r\n          animation-delay: -5s;\r\n  -webkit-animation-duration: 20s;\r\n          animation-duration: 20s;\r\n}\r\n  \r\n@-webkit-keyframes move-forever {\r\n  0% {\r\n    transform: translate3d(-90px,0,0);\r\n  }\r\n  100% { \r\n    transform: translate3d(85px,0,0);\r\n  }\r\n}\r\n  \r\n@keyframes move-forever {\r\n  0% {\r\n    transform: translate3d(-90px,0,0);\r\n  }\r\n  100% { \r\n    transform: translate3d(85px,0,0);\r\n  }\r\n}\r\n  \r\n/*Shrinking for mobile*/\r\n  \r\n@media (max-width: 768px) {\r\n  .waves {\r\n    height:40px;\r\n    min-height:40px;\r\n  }\r\n  .content {\r\n    height:30vh;\r\n  }\r\n  h1 {\r\n    font-size:24px;\r\n  }\r\n}\r\n  \r\n#gentle-wave {\r\n  fill: var(--background-secondary);\r\n}\r\n  \r\n#wave1 {\r\n  fill-opacity: 0.7;\r\n}\r\n  \r\n#wave2 {\r\n  fill-opacity: 0.5;\r\n}\r\n  \r\n#wave3 {\r\n  fill-opacity: 0.3;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhdmVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLFVBQVU7SUFDVixrQkFBa0IsRUFBRSxxQkFBcUI7SUFDekMsZUFBZTtJQUNmLGVBQWU7RUFDakI7O0FBRUY7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQiw2Q0FBNkM7QUFDL0M7O0FBRUEsY0FBYzs7QUFFZDtFQUNFLHdFQUFnRTtVQUFoRSxnRUFBZ0U7QUFDbEU7O0FBQ0E7RUFDRSw0QkFBb0I7VUFBcEIsb0JBQW9CO0VBQ3BCLDhCQUFzQjtVQUF0QixzQkFBc0I7QUFDeEI7O0FBQ0E7RUFDRSw0QkFBb0I7VUFBcEIsb0JBQW9CO0VBQ3BCLCtCQUF1QjtVQUF2Qix1QkFBdUI7QUFDekI7O0FBQ0E7RUFDRSw0QkFBb0I7VUFBcEIsb0JBQW9CO0VBQ3BCLCtCQUF1QjtVQUF2Qix1QkFBdUI7QUFDekI7O0FBQ0E7RUFDRSw0QkFBb0I7VUFBcEIsb0JBQW9CO0VBQ3BCLCtCQUF1QjtVQUF2Qix1QkFBdUI7QUFDekI7O0FBQ0E7RUFDRTtJQUNFLGlDQUFpQztFQUNuQztFQUNBO0lBQ0UsZ0NBQWdDO0VBQ2xDO0FBQ0Y7O0FBUEE7RUFDRTtJQUNFLGlDQUFpQztFQUNuQztFQUNBO0lBQ0UsZ0NBQWdDO0VBQ2xDO0FBQ0Y7O0FBQ0EsdUJBQXVCOztBQUN2QjtFQUNFO0lBQ0UsV0FBVztJQUNYLGVBQWU7RUFDakI7RUFDQTtJQUNFLFdBQVc7RUFDYjtFQUNBO0lBQ0UsY0FBYztFQUNoQjtBQUNGOztBQUVBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6IndhdmVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2F2ZXMge1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDo1dmg7XHJcbiAgICBtYXJnaW4tYm90dG9tOi03cHg7IC8qRml4IGZvciBzYWZhcmkgZ2FwKi9cclxuICAgIG1pbi1oZWlnaHQ6NTBweDtcclxuICAgIG1heC1oZWlnaHQ6NzVweDtcclxuICB9XHJcbiAgXHJcbi5jb250ZW50IHtcclxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICBoZWlnaHQ6MTB2aDtcclxuICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLXNlY29uZGFyeSk7XHJcbn1cclxuXHJcbi8qIEFuaW1hdGlvbiAqL1xyXG5cclxuLnBhcmFsbGF4ID4gdXNlIHtcclxuICBhbmltYXRpb246IG1vdmUtZm9yZXZlciAyNXMgY3ViaWMtYmV6aWVyKC41NSwuNSwuNDUsLjUpIGluZmluaXRlO1xyXG59XHJcbi5wYXJhbGxheCA+IHVzZTpudGgtY2hpbGQoMSkge1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLTJzO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogN3M7XHJcbn1cclxuLnBhcmFsbGF4ID4gdXNlOm50aC1jaGlsZCgyKSB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAtM3M7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxMHM7XHJcbn1cclxuLnBhcmFsbGF4ID4gdXNlOm50aC1jaGlsZCgzKSB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAtNHM7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxM3M7XHJcbn1cclxuLnBhcmFsbGF4ID4gdXNlOm50aC1jaGlsZCg0KSB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAtNXM7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAyMHM7XHJcbn1cclxuQGtleWZyYW1lcyBtb3ZlLWZvcmV2ZXIge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTkwcHgsMCwwKTtcclxuICB9XHJcbiAgMTAwJSB7IFxyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg4NXB4LDAsMCk7XHJcbiAgfVxyXG59XHJcbi8qU2hyaW5raW5nIGZvciBtb2JpbGUqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAud2F2ZXMge1xyXG4gICAgaGVpZ2h0OjQwcHg7XHJcbiAgICBtaW4taGVpZ2h0OjQwcHg7XHJcbiAgfVxyXG4gIC5jb250ZW50IHtcclxuICAgIGhlaWdodDozMHZoO1xyXG4gIH1cclxuICBoMSB7XHJcbiAgICBmb250LXNpemU6MjRweDtcclxuICB9XHJcbn1cclxuXHJcbiNnZW50bGUtd2F2ZSB7XHJcbiAgZmlsbDogdmFyKC0tYmFja2dyb3VuZC1zZWNvbmRhcnkpO1xyXG59XHJcbiAgXHJcbiN3YXZlMSB7XHJcbiAgZmlsbC1vcGFjaXR5OiAwLjc7XHJcbn1cclxuI3dhdmUyIHtcclxuICBmaWxsLW9wYWNpdHk6IDAuNTtcclxufVxyXG4jd2F2ZTMge1xyXG4gIGZpbGwtb3BhY2l0eTogMC4zO1xyXG59Il19 */");

/***/ }),

/***/ "DwGd":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/guilds/guild-sidebar/guild-sidebar.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sidebar>\r\n  <div\r\n    *ngIf=\"guild\"\r\n    class=\"side-nav navbar-dark\">\r\n    <div class=\"header\">\r\n      <div class=\"dropdown\">\r\n        <button\r\n          id=\"heftyButton\"\r\n          [matMenuTriggerFor]=\"guildMenu\"\r\n          class=\"btn bg-transparent\"\r\n          type=\"button\">\r\n          <h6 class=\"pt-2\">\r\n            <strong>{{ guild.name }}</strong>\r\n            <i class=\"fas fa-sort-down\"></i>\r\n          </h6>\r\n        </button>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"category\">Channels—{{ textChannels.length }}</div>\r\n    <div\r\n      *ngIf=\"perms.can(guild._id, 'VIEW_CHANNELS')\"\r\n      class=\"navbar-nav\">\r\n      <app-channel-tab\r\n        *ngFor=\"let channel of textChannels\"\r\n        [channel]=\"channel\"></app-channel-tab>\r\n    </div>\r\n  </div>\r\n    \r\n  <div id=\"content\">    \r\n    <div *ngIf=\"loaded\">\r\n      <ng-content></ng-content>\r\n    </div>\r\n    <div *ngIf=\"!loaded\">\r\n      <spinner></spinner>\r\n    </div>\r\n  </div>\r\n</sidebar>\r\n\r\n<mat-menu #guildMenu=\"matMenu\">\r\n  <a *ngIf=\"perms.can(guild._id, 'CREATE_INVITE')\"\r\n    (click)=\"dialog.createInvite({ guild: guild })\"\r\n    class=\"dropdown-item invite\"\r\n    mat-menu-item>Invite People <i class=\"fas fa-user-plus\"></i></a>\r\n    \r\n  <a *ngIf=\"perms.can(guild._id, 'MANAGE_GUILD')\"\r\n    class=\"dropdown-item\"\r\n    [routerLink]=\"'/channels/' + guild._id + '/settings'\"\r\n    mat-menu-item>Guild Settings <i class=\"fas fa-cogs\"></i></a>\r\n    \r\n  <a *ngIf=\"perms.can(guild._id, 'MANAGE_CHANNELS')\"\r\n    (click)=\"dialog.createChannel({ guild: guild })\"\r\n    class=\"dropdown-item\"\r\n    mat-menu-item>Create Channel <i class=\"fas fa-plus-circle\"></i></a>\r\n</mat-menu>\r\n");

/***/ }),

/***/ "DxrB":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/create-invite/create-invite.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>Invite Friends to {{ data.guild.name }}</h1>\n\n<div class=\"text-center\" mat-dialog-content>\n  <mat-form-field appearance=\"outline\" class=\"float-left\">\n    <mat-label>Invite Link</mat-label>\n    <input type=\"text\"\n      [value]=\"invite?._id\" matInput>\n  </mat-form-field>\n\n  <div class=\"ml-3 float-left\">\n    <button\n      (click)=\"copyToClipboard()\"\n      matTooltip=\"Copy\"\n      class=\"btn p-3 mt-1 bg-primary\"\n      color=\"primary\">\n      <i class=\"fas fa-clipboard\"></i>\n    </button>\n  </div>\n</div>\n\n<hr>\n\n<a (click)=\"showOptions.value = true\"\n  *ngIf=\"!showOptions.value\"\n  class=\"cursor-pointer\">Show Options</a>\n\n<input type=\"hidden\" #showOptions>\n\n<div *ngIf=\"showOptions.value\">\n  <h6 class=\"text-center\">Options</h6>\n  <form #f=\"ngForm\" [formGroup]=\"form\">\n    <mat-form-field appearance=\"outline\">\n      <mat-label>Max Uses</mat-label>\n      <input\n        type=\"number\"\n        formControlName=\"maxUses\" matInput>\n    </mat-form-field>\n\n    <mat-form-field appearance=\"outline\" class=\"ml-2\">\n      <mat-label>Expires At</mat-label>\n      <input\n        type=\"datetime-local\"\n        formControlName=\"expiresAt\" matInput>\n    </mat-form-field>\n  </form>\n\n  <div class=\"d-flex justify-content-center\" mat-dialog-actions>\n    <button\n      [disabled]=\"!recentlyUpdated\"\n      class=\"bg-success text-dark\"\n      (click)=\"updateInvite()\"\n      mat-button>Update</button>\n  </div>\n</div>");

/***/ }),

/***/ "EEkj":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/me/me-sidebar/me-sidebar.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sidebar>\r\n  <div class=\"side-nav navbar-dark\">\r\n    <div class=\"header\">\r\n      <a routerLink=\"/channels/@me\"\r\n        routerLinkActive=\"active\"\r\n        [routerLinkActiveOptions]=\"{exact: true}\"\r\n        class=\"nav-item nav-link mt-2\">\r\n        <i class=\"fa fa-user-friends pr-2\" aria-hidden=\"true\"></i> Friends\r\n      </a>\r\n    </div>\r\n    <div class=\"navbar-nav\">\r\n      <div class=\"category\">Direct Messages—{{ channelService.dmChannels.length }}</div>\r\n      <div \r\n        *ngFor=\"let channel of channelService.dmChannels\"\r\n        class=\"mx-2 mb-1\">\r\n        <member-username\r\n          *ngIf=\"channel && getRecipient(channel)\"\r\n          class=\"cursor-pointer\"\r\n          [routerLink]=\"'/channels/@me/' + channel._id\"\r\n          [user]=\"getRecipient(channel)\"></member-username>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div id=\"content\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</sidebar>");

/***/ }),

/***/ "EW/g":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/utils/waves/waves.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg\r\n  class=\"waves\"\r\n  xmlns=\"http://www.w3.org/2000/svg\"\r\n  xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n  viewBox=\"0 24 150 28\"\r\n  preserveAspectRatio=\"none\"\r\n  shape-rendering=\"auto\"\r\n  [style.transform]=\"inverted ? 'rotate(180deg)' : ''\">\r\n  <defs>\r\n    <path [attr.fill]=\"color\" id=\"gentle-wave\" d=\"M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z\" />\r\n  </defs>\r\n  <g class=\"parallax\">\r\n    <use id=\"wave1\" xlink:href=\"#gentle-wave\" x=\"48\" y=\"0\" />\r\n    <use id=\"wave2\" xlink:href=\"#gentle-wave\" x=\"48\" y=\"3\" />\r\n    <use id=\"wave3\" xlink:href=\"#gentle-wave\" x=\"48\" y=\"5\" />\r\n    <use id=\"wave4\" xlink:href=\"#gentle-wave\" x=\"48\" y=\"7\" />\r\n  </g>\r\n</svg>");

/***/ }),

/***/ "FJPe":
/*!******************************************************************************!*\
  !*** ./src/app/dashboard/components/guild-navbar/guild-navbar.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJndWlsZC1uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "FJxH":
/*!******************************************************************************!*\
  !*** ./src/app/dashboard/messages/message-embed/message-embed.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".embed {\r\n  border-radius: 5px;\r\n\tbackground-color: var(--background-secondary);\r\n\tborder-left: 5px solid gray;\r\n\r\n\tmargin-top: 5px;\r\n  padding: 10px;\r\n\tmargin-bottom: 5px;\r\n\r\n\tmax-width: 500px;\r\n}\r\n.embed .title {\r\n\tfont-weight: bold;\r\n\tpadding-bottom: 5px;\r\n}\r\n.embed .description {\r\n\tpadding-bottom: 5px;\t\r\n}\r\n.embed img, .embed video {\r\n\tmax-width: 100%;\r\n\tborder-radius: 5px;\r\n\r\n\toutline: none !important;\r\n}\r\n.embed a {\r\n\tcolor: var(--tertiary);\r\n\ttext-decoration: none;\r\n}\r\n.hide-embed {\r\n\tfont-size: larger;\r\n\tdisplay: none;\r\n\r\n\tfloat: right;\r\n}\r\n.embed-wrapper:hover .hide-embed {\r\n\tdisplay: block;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2UtZW1iZWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtDQUNuQiw2Q0FBNkM7Q0FDN0MsMkJBQTJCOztDQUUzQixlQUFlO0VBQ2QsYUFBYTtDQUNkLGtCQUFrQjs7Q0FFbEIsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxpQkFBaUI7Q0FDakIsbUJBQW1CO0FBQ3BCO0FBQ0E7Q0FDQyxtQkFBbUI7QUFDcEI7QUFDQTtDQUNDLGVBQWU7Q0FDZixrQkFBa0I7O0NBRWxCLHdCQUF3QjtBQUN6QjtBQUNBO0NBQ0Msc0JBQXNCO0NBQ3RCLHFCQUFxQjtBQUN0QjtBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLGFBQWE7O0NBRWIsWUFBWTtBQUNiO0FBQ0E7Q0FDQyxjQUFjO0FBQ2YiLCJmaWxlIjoibWVzc2FnZS1lbWJlZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVtYmVkIHtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1zZWNvbmRhcnkpO1xyXG5cdGJvcmRlci1sZWZ0OiA1cHggc29saWQgZ3JheTtcclxuXHJcblx0bWFyZ2luLXRvcDogNXB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcblx0bWFyZ2luLWJvdHRvbTogNXB4O1xyXG5cclxuXHRtYXgtd2lkdGg6IDUwMHB4O1xyXG59XHJcbi5lbWJlZCAudGl0bGUge1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbn1cclxuLmVtYmVkIC5kZXNjcmlwdGlvbiB7XHJcblx0cGFkZGluZy1ib3R0b206IDVweDtcdFxyXG59XHJcbi5lbWJlZCBpbWcsIC5lbWJlZCB2aWRlbyB7XHJcblx0bWF4LXdpZHRoOiAxMDAlO1xyXG5cdGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHJcblx0b3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbi5lbWJlZCBhIHtcclxuXHRjb2xvcjogdmFyKC0tdGVydGlhcnkpO1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmhpZGUtZW1iZWQge1xyXG5cdGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG5cdGRpc3BsYXk6IG5vbmU7XHJcblxyXG5cdGZsb2F0OiByaWdodDtcclxufVxyXG4uZW1iZWQtd3JhcHBlcjpob3ZlciAuaGlkZS1lbWJlZCB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcbn0iXX0= */");

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
/* harmony import */ var _raw_loader_create_guild_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./create-guild.component.html */ "I79J");
/* harmony import */ var _create_guild_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-guild.component.css */ "Y0Rr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_app_services_ws_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/ws.service */ "Swid");








let CreateGuildComponent = class CreateGuildComponent {
    constructor(dialogRef, userService, ws) {
        this.dialogRef = dialogRef;
        this.userService = userService;
        this.ws = ws;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](`${this.userService.self.username}'s Guild`, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(32)
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
        this.dialogRef.close();
        this.ws.emit('GUILD_MEMBER_ADD', {
            inviteCode: this.inviteInput.nativeElement.value,
        }, this);
    }
};
CreateGuildComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { type: src_app_services_ws_service__WEBPACK_IMPORTED_MODULE_7__["WSService"] }
];
CreateGuildComponent.propDecorators = {
    inviteInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['inviteInput',] }]
};
CreateGuildComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-create-guild',
        template: _raw_loader_create_guild_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_create_guild_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CreateGuildComponent);



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
/* harmony import */ var _raw_loader_guild_sidebar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./guild-sidebar.component.html */ "DwGd");
/* harmony import */ var _guild_sidebar_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guild-sidebar.component.css */ "qVEa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_permissions_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/permissions.service */ "tEUU");
/* harmony import */ var _services_guild_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/guild.service */ "4bjJ");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_app_services_ping_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/ping.service */ "TLdK");
/* harmony import */ var src_app_services_channel_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/channel.service */ "0xJi");
/* harmony import */ var src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/dialog.service */ "CzQJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_ws_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/ws.service */ "Swid");












let GuildSidebarComponent = class GuildSidebarComponent {
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
};
GuildSidebarComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"] },
    { type: src_app_services_channel_service__WEBPACK_IMPORTED_MODULE_8__["ChannelService"] },
    { type: _services_guild_service__WEBPACK_IMPORTED_MODULE_5__["GuildService"] },
    { type: src_app_services_permissions_service__WEBPACK_IMPORTED_MODULE_4__["PermissionsService"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { type: src_app_services_ping_service__WEBPACK_IMPORTED_MODULE_7__["PingService"] },
    { type: src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_9__["DialogService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] },
    { type: src_app_services_ws_service__WEBPACK_IMPORTED_MODULE_11__["WSService"] }
];
GuildSidebarComponent.propDecorators = {
    loaded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['waitFor',] }]
};
GuildSidebarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'guild-sidebar',
        template: _raw_loader_guild_sidebar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_guild_sidebar_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], GuildSidebarComponent);



/***/ }),

/***/ "Gbek":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/me/user-account/user-account.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-settings-sidebar\n  *ngIf=\"userService.self\"\n  tabType=\"user\">\n  <div class=\"content\">\n    <h5 class=\"mb-4\">Your Account</h5>\n    <div class=\"row\">\n      <div class=\"col-lg-6 col-md-12\">\n        <form\n          *ngIf=\"form\"\n          #f=\"ngForm\"\n          (submit)=\"changeEmail()\"\n          [formGroup]=\"form\">\n          <h6>Change Email</h6>\n          <mat-form-field appearance=\"outline\">\n            <mat-label>Email</mat-label>\n            <input formControlName=\"email\" type=\"email\" matInput>\n            <mat-hint *ngIf=\"form.get('email').pending\"><i class=\"fas fa-circle-notch fa-spin\"></i> Checking</mat-hint>\n            <mat-error *ngIf=\"form.get('email').errors?.emailInUse\">Email is already in use.</mat-error>\n            <mat-error *ngIf=\"form.get('email').errors?.pattern\">Email must be valid.</mat-error>\n          </mat-form-field>\n\n          <button\n            [disabled]=\"processingEmail\"\n            class=\"ml-2\"\n            color=\"success\"\n            mat-button>Send Email</button>\n        </form>\n\n        <div>\n          <span\n            *ngIf=\"userService.self.verified\"\n            class=\"border border-success rounded p-3\">\n            <i class=\"fas fa-check-circle text-success\"></i>\n            <span> Your account is verified by email.</span>\n          </span>\n          <span\n            *ngIf=\"!userService.self.verified\"\n            class=\"border border-warning rounded p-3\">\n            <i class=\"fas fa-times-circle text-danger\"></i>\n            <span> Your email is not verified.</span>\n          </span>\n        </div>\n      </div>\n\n      <div class=\"col-lg-6 col-md-12\">\n        <form\n          #f=\"ngForm\"\n          (submit)=\"changePassword()\"\n          [formGroup]=\"passwordForm\">\n          <h6>Change Password</h6>\n          <mat-form-field\n            class=\"mr-2\"\n            appearance=\"outline\">\n            <mat-label>Old Password</mat-label>\n            <mat-error *ngIf=\"passwordForm.get('oldPassword').errors?.required\">Old password is required.</mat-error>\n            <input formControlName=\"oldPassword\" type=\"password\" matInput>\n          </mat-form-field>\n\n          <mat-form-field appearance=\"outline\">\n            <mat-label>New Password</mat-label>\n            <input formControlName=\"newPassword\" type=\"password\" matInput>\n            <mat-error *ngIf=\"passwordForm.get('newPassword').errors?.required\">New password is required.</mat-error>\n            <mat-error *ngIf=\"passwordForm.get('newPassword').errors?.pattern\">New password must be valid.</mat-error>\n          </mat-form-field>\n          \n          <button\n            [disabled]=\"processingPassword\"\n            class=\"bg-warning float-right mt-3 mr-3\"\n            mat-button>Change</button>\n\n          <mat-error\n            *ngIf=\"passwordForm.get('newPassword').dirty\n              && passwordForm.errors?.passwordMatch\"\n            class=\"mb-2\">New password should not equal old password.</mat-error>\n        </form>\n      </div>\n\n      <hr>\n\n      <div class=\"col-lg-6 col-md-12 mt-5\">\n        <h5>More Settings</h5>\n        <div>\n          <button\n            routerLink=\"/logout\"\n            class=\"bg-danger\"\n            mat-button>Logout</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</app-settings-sidebar>\n");

/***/ }),

/***/ "GmjE":
/*!**********************************************************!*\
  !*** ./src/app/authentication/login/login.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "GrJd":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/components/settings-sidebar/settings-sidebar.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"side side-nav navbar-dark\">\n  <div class=\"navbar-nav float-right\">\n    <h2 class=\"category text-secondary\">{{ tabCategory }}</h2>\n\n    <a *ngFor=\"let tab of tabs[tabType]\"\n      [routerLinkActiveOptions]=\"{exact:true}\"\n      [routerLink]=\"canAccess(tab) ? tab.href() : './'\"\n      [class.disabled]=\"!canAccess(tab)\"\n      routerLinkActive=\"active\"\n      class=\"nav-item nav-link\">\n      <i class=\"mr-1\" [class]=\"tab.icon\"></i>\n      <span>{{ tab.name }}</span>\n    </a>\n\n    <div *ngIf=\"tabType === 'user'\">\n      <hr>\n      <a routerLink=\"/logout\"\n        class=\"text-danger nav-item nav-link\">\n        <i class=\"fas fa-user-alt-slash\"></i>\n        <span> Logout</span>\n      </a>\n    </div>\n  </div>\n</div>\n\n<div class=\"main\">\n  <div class=\"close-container\">\n    <div\n      (click)=\"close()\"\n      class=\"close round btn float-right\"\n      mat-button><i class=\"fas fa-times\"></i></div>\n  </div>\n\n  <div class=\"main-content\">\n    <ng-content select=\".content\"></ng-content></div>\n</div>");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/utils */ "oCjk");



let CamelToSentenceCasePipe = class CamelToSentenceCasePipe {
    transform(words) {
        return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["camelToSentenceCase"])(words);
    }
};
CamelToSentenceCasePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'camelToSentenceCase' })
], CamelToSentenceCasePipe);



/***/ }),

/***/ "H6pZ":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/guilds/guild-settings/roles/roles.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-settings-sidebar\n  tabType=\"guild\"\n  *ngIf=\"guild\"\n  [id]=\"guild._id\">\n  <div class=\"content\">\n    <div class=\"row\">\n      <div class=\"col-lg-3 side-nav navbar-dark\">\n        <div class=\"navbar-nav\">\n          <a\n            *ngFor=\"let role of guild.roles\"\n            (click)=\"selectRole(role)\"\n            [style.color]=\"role.color + '!important'\"\n            [class.active]=\"selectedRole._id === role._id\"\n            class=\"cursor-pointer nav-item nav-link\">{{ role.name }}</a>\n          <div class=\"float-right\">\n            <button\n              (click)=\"newRole()\"\n              class=\"btn bg-transparent bg-success text-dark mt-2 mx-3\"\n              mat-button>New Role</button>\n          </div>\n        </div>\n\n        <hr class=\"my-4\">\n\n        <p class=\"text-muted\">Members use the color of the highest role they have in this list.</p>\n      </div>\n      <div class=\"col-lg-9 role-details\">\n        <form\n          *ngIf=\"selectedRole\"\n          #f=\"ngForm\"\n          [formGroup]=\"form\">\n          <p>Roles decide what members can do in {{ guild.name }}.</p>\n          \n          <hr>\n\n          <div>\n            <div class=\"row\">\n              <div class=\"col-lg-4 col-md-12\">\n                <mat-form-field appearance=\"outline\">\n                  <mat-label>Role Name</mat-label>\n                  <input\n                    [readonly]=\"isEveryone\"\n                    formControlName=\"name\"\n                    type=\"text\"\n                    matInput>\n                </mat-form-field>\n              </div>\n\n              <div class=\"col-lg-4 col-md-12\">\n                <mat-form-field appearance=\"outline\">\n                  <mat-label>Role Color</mat-label>            \n                  <input\n                    (colorPickerChange)=\"openSaveChanges()\"\n                    (colorPickerChange)=\"form.get('color').setValue($event)\"\n                    [(colorPicker)]=\"presetColors[1]\"\n                    [cpPresetColors]=\"presetColors\"\n                    formControlName=\"color\"\n                    matInput>\n                </mat-form-field>\n              </div>\n            </div>\n\n            <p class=\"category text-muted pl-0\">Role</p>\n\n            <div>\n              <span>Display role members separately</span>\n              <mat-slide-toggle \n                [disabled]=\"isEveryone\"\n                formControlName=\"hoisted\"\n                class=\"float-right\"></mat-slide-toggle>\n              <hr>\n            </div>\n            <div>\n              <span>Allow anyone to <span class=\"d-mention p-1 rounded\">@mention</span> this role</span>\n              <mat-slide-toggle\n                [disabled]=\"isEveryone\"\n                formControlName=\"mentionable\"\n                class=\"float-right\"></mat-slide-toggle>\n            </div>\n            <hr>\n          </div>\n        </form>\n\n        <form\n          *ngIf=\"selectedRole\"\n          #f=\"ngForm\"\n          [formGroup]=\"permissionsForm\">\n          \n          <div *ngFor=\"let container of description | keyvalue\">\n            <p class=\"category text-muted pl-0\">{{ container.key | snakeToSentenceCase }}</p>\n            <div\n              [formGroupName]=\"container.key\"\n              class=\"form-group\">\n              <div *ngFor=\"let item of description[container.key] | keyvalue\">\n                <span [matTooltip]=\"item.value\" class=\"cursor-pointer\">\n                  <i class=\"fas fa-info-circle mr-1\"></i>\n                </span>\n                <span>{{ item.key | snakeToSentenceCase }}</span>\n                <mat-slide-toggle \n                  [formControlName]=\"item.key\"\n                  class=\"float-right\"></mat-slide-toggle>\n                <hr>\n              </div>\n            </div>\n          </div>\n\n          <div>\n            <button\n              (click)=\"setPermissions(0)\"\n              class=\"bg-light text-dark\"\n              mat-button>Clear Permissions</button>\n              <button\n                (click)=\"setPermissions()\"\n                class=\"bg-warning text-dark ml-2\"\n                mat-button>Default Permissions</button>\n            <button\n              *ngIf=\"!isEveryone\"\n              (click)=\"deleteRole()\"\n              class=\"btn bg-danger text-light ml-2\"\n              mat-button>Delete Role</button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</app-settings-sidebar>");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let CountdownPipe = class CountdownPipe {
    transform(value) { }
};
CountdownPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'countdown'
    })
], CountdownPipe);



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
/* harmony import */ var _raw_loader_logout_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./logout.component.html */ "fYtv");
/* harmony import */ var _logout_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logout.component.css */ "p3Uk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_guild_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/guild.service */ "4bjJ");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/user.service */ "qfBg");







let LogoutComponent = class LogoutComponent {
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
};
LogoutComponent.ctorParameters = () => [
    { type: _services_guild_service__WEBPACK_IMPORTED_MODULE_5__["GuildService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] }
];
LogoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-logout',
        template: _raw_loader_logout_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_logout_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LogoutComponent);



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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "qfBg");
/* harmony import */ var _services_guild_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/guild.service */ "4bjJ");
/* harmony import */ var _services_user_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/user-auth.service */ "hZP9");






let DashboardAuthGuard = class DashboardAuthGuard {
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
};
DashboardAuthGuard.ctorParameters = () => [
    { type: _services_guild_service__WEBPACK_IMPORTED_MODULE_4__["GuildService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _services_user_auth_service__WEBPACK_IMPORTED_MODULE_5__["UserAuthService"] }
];
DashboardAuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], DashboardAuthGuard);



/***/ }),

/***/ "I79J":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/create-guild/create-guild.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h5 id=\"addGuildLabel\" mat-dialog-title>Add Guild</h5>\n\n<div mat-dialog-content>\n  <h4 class=\"text-center\">Create a Guild</h4>\n  <div class=\"d-flex justify-content-center\">\n    <form\n      #f=\"ngForm\"\n      [formGroup]=\"form\"\n      (submit)=\"create()\">\n      <mat-form-field appearance=\"outline\">\n        <mat-label>Server Name</mat-label>\n        <input\n          formControlName=\"name\"\n          type=\"text\"\n          matInput>\n        <mat-error *ngIf=\"form.get('name').invalid\">Required, and should be less than 32 characters.</mat-error>\n      </mat-form-field>\n      <div class=\"d-flex justify-content-center\">\n        <button\n          class=\"bg-primary mt-2 mb-4\"\n          mat-button>Create</button>\n      </div>\n    </form>\n  </div>\n</div>\n\n<div mat-dialog-footer>\n  <h4 class=\"text-center\">Already have an invite?</h4>\n  <div class=\"d-flex justify-content-center\">\n    <mat-form-field appearance=\"outline\">\n      <mat-label>Invite</mat-label>\n      <input type=\"text\" matInput #inviteInput>\n    </mat-form-field>\n  </div>\n</div>\n\n<div class=\"d-flex justify-content-center\" mat-dialog-actions>\n  <button\n    (click)=\"joinGuild()\"\n    id=\"joinGuildButton\"\n    type=\"button\"\n    class=\"bg-secondary\"\n    mat-button>Join a Guild</button>\n</div>\n");

/***/ }),

/***/ "IDvP":
/*!*************************************************!*\
  !*** ./src/app/utils/zippy/zippy.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("span { cursor: pointer; }\r\n\r\n.expanded { background-color: var(--background-secondary); }\r\n\r\n.zippy {\r\n    margin: 15px 0;\r\n    border: 1px solid #f0f0f0;\r\n    border-radius: 5px;\r\n}\r\n\r\n.zippy-heading\r\n{\r\n    font-weight: bold;\r\n    padding: 20px;\r\n    cursor: pointer;\r\n}\r\n\r\n.zippy-body \r\n{\r\n    padding: 20px;\r\n    overflow-y: hidden;\r\n}\r\n\r\n.expanded i {\r\n    transform: rotate(180deg);\r\n}\r\n\r\ni {\r\n    transition: 300ms all ease;\r\n    transform: rotate(0deg);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInppcHB5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxlQUFlLEVBQUU7O0FBRXhCLFlBQVksNkNBQTZDLEVBQUU7O0FBQzNEO0lBQ0ksY0FBYztJQUNkLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEI7O0FBQ0E7O0lBRUksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixlQUFlO0FBQ25COztBQUNBOztJQUVJLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSwwQkFBMEI7SUFDMUIsdUJBQXVCO0FBQzNCIiwiZmlsZSI6InppcHB5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzcGFuIHsgY3Vyc29yOiBwb2ludGVyOyB9XHJcblxyXG4uZXhwYW5kZWQgeyBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLXNlY29uZGFyeSk7IH1cclxuLnppcHB5IHtcclxuICAgIG1hcmdpbjogMTVweCAwO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2YwZjBmMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4uemlwcHktaGVhZGluZ1xyXG57XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnppcHB5LWJvZHkgXHJcbntcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbn1cclxuXHJcbi5leHBhbmRlZCBpIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbn1cclxuaSB7XHJcbiAgICB0cmFuc2l0aW9uOiAzMDBtcyBhbGwgZWFzZTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG59Il19 */");

/***/ }),

/***/ "IhpV":
/*!**********************************************************************!*\
  !*** ./src/app/dashboard/me/user-account/user-account.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWFjY291bnQuY29tcG9uZW50LmNzcyJ9 */");

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



let UsernameValidators = class UsernameValidators {
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
};
UsernameValidators.ctorParameters = () => [
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
];
UsernameValidators = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], UsernameValidators);



/***/ }),

/***/ "Jmw7":
/*!**************************************************************************!*\
  !*** ./src/app/dashboard/components/avatar-url/avatar-url.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\n  border-radius: 50%;\n  transition: border-radius .3s ease;\n}\n\nimg:hover {\n  border-radius: 25%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF2YXRhci11cmwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoiYXZhdGFyLXVybC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0cmFuc2l0aW9uOiBib3JkZXItcmFkaXVzIC4zcyBlYXNlO1xufVxuXG5pbWc6aG92ZXIge1xuICBib3JkZXItcmFkaXVzOiAyNSU7XG59Il19 */");

/***/ }),

/***/ "KAPb":
/*!********************************************************!*\
  !*** ./src/app/authentication/auth/auth.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRoLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "KFy7":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/guilds/voice-channel/voice-channel.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"cursor-pointer\" hidden>\n  <a (click)=\"join()\" \n    routerLinkActive=\"active\"\n    class=\"nav-item nav-link\">\n    <i class=\"fas fa-volume-up text-muted\"></i> {{ channel.name }}</a>\n    <div *ngFor=\"let id of channel.memberIds\"\n      class=\"ml-4\">\n      <member-username\n        [user]=\"userService.getCached(id)\"\n        [voice]=\"true\"></member-username>\n    </div>\n</div>");

/***/ }),

/***/ "KSQI":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/me/dmchannel/dm.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<dashboard-sidebar>\n  <dashboard-navbar>      \n    <i class=\"fas fa-at pr-2 text-muted\"></i>\n    <strong>me</strong>\n\n    <i class=\"fas fa-plus mx-2\"></i>\n    <i class=\"fas fa-at pr-2 text-muted\"></i>\n    <strong>{{ channelService.getRecipient(activeChannel._id)?.username }}</strong>\n  </dashboard-navbar>\n\n  <app-text-channel></app-text-channel>\n</dashboard-sidebar>\n");

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
/* harmony import */ var _raw_loader_me_sidebar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./me-sidebar.component.html */ "EEkj");
/* harmony import */ var _me_sidebar_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./me-sidebar.component.css */ "4UnV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/user.service */ "qfBg");
/* harmony import */ var src_app_services_channel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/channel.service */ "0xJi");






let MeSidebarComponent = class MeSidebarComponent {
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
};
MeSidebarComponent.ctorParameters = () => [
    { type: src_app_services_channel_service__WEBPACK_IMPORTED_MODULE_5__["ChannelService"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
];
MeSidebarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'dashboard-sidebar',
        template: _raw_loader_me_sidebar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_me_sidebar_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MeSidebarComponent);



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
/* harmony import */ var _raw_loader_member_username_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./member-username.component.html */ "gT7g");
/* harmony import */ var _member_username_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./member-username.component.css */ "0myy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_channel_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/channel.service */ "0xJi");
/* harmony import */ var src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/dialog.service */ "CzQJ");
/* harmony import */ var src_app_services_guild_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/guild.service */ "4bjJ");
/* harmony import */ var src_app_services_permissions_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/permissions.service */ "tEUU");
/* harmony import */ var src_app_services_ping_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/ping.service */ "TLdK");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_app_services_ws_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/ws.service */ "Swid");











let MemberUsernameComponent = class MemberUsernameComponent {
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
            const everyoneRole = this.guildRoles[0];
            const roleIds = []
                .concat(everyoneRole)
                .concat(this.rolesInput.value)
                .filter(id => id);
            if (JSON.stringify(roleIds) === JSON.stringify(this.member.roleIds))
                return;
            this.member.roleIds = roleIds;
            yield this.ws.emitAsync('GUILD_MEMBER_UPDATE', {
                partialMember: { roleIds: this.member.roleIds },
                memberId: this.member._id,
            }, this);
        });
    }
    openMenu(event, menuTrigger) {
        event.preventDefault();
        menuTrigger.openMenu();
    }
};
MemberUsernameComponent.ctorParameters = () => [
    { type: src_app_services_channel_service__WEBPACK_IMPORTED_MODULE_4__["ChannelService"] },
    { type: src_app_services_permissions_service__WEBPACK_IMPORTED_MODULE_7__["PermissionsService"] },
    { type: src_app_services_ping_service__WEBPACK_IMPORTED_MODULE_8__["PingService"] },
    { type: src_app_services_guild_service__WEBPACK_IMPORTED_MODULE_6__["GuildService"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"] },
    { type: src_app_services_ws_service__WEBPACK_IMPORTED_MODULE_10__["WSService"] },
    { type: src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"] }
];
MemberUsernameComponent.propDecorators = {
    user: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    guild: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    withAvatar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    voice: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    statusOverride: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    routerLink: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    rolesInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['rolesInput',] }]
};
MemberUsernameComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'member-username',
        template: _raw_loader_member_username_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_member_username_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MemberUsernameComponent);



/***/ }),

/***/ "N/3I":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/developers/application/application.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-3\">\n    <div class=\"developer-sidebar\">\n      <header\n        routerLink=\"/developers\"\n        class=\"cursor-pointer my-5\">\n        <a class=\"p-2 text-muted\" routerLink=\"/developers\">\n          <i class=\"fas fa-arrow-left mt-2\"></i>\n          <strong class=\"pl-2\">DASHBOARD</strong>\n        </a>\n      </header>\n      \n      <nav class=\"side-nav mt-3\">\n        <a routerLinkActive=\"active\"\n          class=\"nav-link\"\n          [routerLink]=\"'/developers/applications/' + app._id\">\n          <i class=\"fas fa-eye\"></i> Overview</a>\n        <a routerLinkActive=\"active\"\n          class=\"nav-link\"\n          [routerLink]=\"'/developers/applications/' + app._id + '/user'\">\n          <i class=\"fas fa-robot\"></i> User</a>\n      </nav>\n    </div>\n  </div>\n\n  <div\n    *ngIf=\"app; else loading\"\n    class=\"col-6 m-4 mt-5\">\n    <header>\n      <h2>Overview</h2>\n      <p class=\"lead\">Public info about your bot listing.</p>\n    </header>\n    <form #f=\"ngForm\" [formGroup]=\"form\">\n      <mat-form-field appearance=\"outline\">\n        <mat-label>Name</mat-label>\n        <input formControlName=\"name\" type=\"text\" [value]=\"app.name\" matInput>\n      </mat-form-field>\n\n      <mat-form-field appearance=\"outline\" class=\"ml-2\">\n        <mat-label>Description</mat-label>\n        <textarea formControlName=\"description\" matInput>{{ app.description }}</textarea>\n      </mat-form-field>\n    </form>\n  </div>\n\n  <ng-template\n    class=\"col-6 d-flex justify-content-center\"\n    #loading>\n    <spinner></spinner>\n  </ng-template>\n</div>\n");

/***/ }),

/***/ "OMz0":
/*!*********************************************************!*\
  !*** ./src/app/pages/not-found/not-found.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\r\nVIEW IN FULL SCREEN MODE\r\nFULL SCREEN MODE: http://salehriaz.com/404Page/404.html\r\n\r\nDRIBBBLE: https://dribbble.com/shots/4330167-404-Page-Lost-In-Space\r\n*/\r\n\r\n@-webkit-keyframes rocket-movement {100% {-webkit-transform: translate(1200px,-600px); } }\r\n\r\n@keyframes rocket-movement { 100% {transform: translate(1200px,-600px);} }\r\n\r\n@-webkit-keyframes spin-earth { 100% { -webkit-transform: rotate(-360deg); transition: transform 20s;  } }\r\n\r\n@keyframes spin-earth{ 100% { transform:rotate(-360deg); transition: transform 20s; } }\r\n\r\n@-webkit-keyframes move-astronaut {\r\n  100% { -webkit-transform: translate(-160px, -160px);}\r\n}\r\n\r\n@keyframes move-astronaut{\r\n  100% { transform:translate(-160px, -160px); }\r\n}\r\n\r\n@-webkit-keyframes rotate-astronaut {\r\n  100% { -webkit-transform: rotate(-720deg);}\r\n}\r\n\r\n@keyframes rotate-astronaut{\r\n  100% { transform:rotate(-720deg); }\r\n}\r\n\r\n@-webkit-keyframes glow-star {\r\n  40% { -webkit-opacity: 0.3;}\r\n  90%,100% { -webkit-opacity: 1; -webkit-transform: scale(1.2);}\r\n}\r\n\r\n@keyframes glow-star{\r\n  40% { -webkit-opacity: 0.3; opacity: 0.3;  }\r\n  90%,100% { -webkit-opacity: 1; opacity: 1; transform: scale(1.2); border-radius: 999999px;}\r\n}\r\n\r\n.spin-earth-on-hover{\r\n  transition: ease 200s !important;\r\n  transform: rotate(-3600deg) !important;\r\n}\r\n\r\nhtml, body{\r\n  margin: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  font-weight: 300;\r\n  -webkit-user-select: none; /* Safari 3.1+ */\r\n  -moz-user-select: none; /* Firefox 2+ */ /* IE 10+ */\r\n  user-select: none; /* Standard syntax */\r\n}\r\n\r\nbody {\r\n  background: url(http://salehriaz.com/404Page/img/bg_purple.png);\r\n  background-repeat: repeat-x;\r\n  background-size: cover;\r\n  background-position: left top;\r\n  height: 100%;\r\n  overflow: hidden;  \r\n}\r\n\r\n.btn-go-home{\r\n  cursor: pointer;\r\n  position: relative;\r\n  z-index: 200;\r\n  margin: 15px auto;\r\n  width: 100px;\r\n  padding: 10px 15px;\r\n  border: 1px solid var(--primary);\r\n  border-radius: 5px;\r\n  font-weight: 400;\r\n  display: block;\r\n  color: var(--font);\r\n  text-align: center;\r\n  text-decoration: none;\r\n  letter-spacing : 2px;\r\n  font-size: 11px;\r\n  transition: all 0.3s ease-in;\r\n}\r\n\r\n.btn-go-home:hover{\r\n  background-color: var(--primary);\r\n  color: var(--dark) !important;\r\n  transform: scale(1.05);\r\n  box-shadow: 0px 20px 20px rgba(0,0,0,0.1);\r\n}\r\n\r\n.central-body{\r\n/*  width: 100%;*/\r\n  padding: 17% 5% 10% 5%;\r\n  z-index: 1;\r\n  text-align: center;\r\n}\r\n\r\nh1 {\r\n  font-size: 128px;\r\n}\r\n\r\nh1 + p {\r\n  font-size: 32px;\r\n}\r\n\r\n.objects img{\r\n  z-index: 90;\r\n  pointer-events: none;\r\n}\r\n\r\n.object_rocket{\r\n  z-index: 95;\r\n  position: absolute;\r\n  transform: translateX(-50px);\r\n  top: 75%;\r\n  pointer-events: none;\r\n  -webkit-animation: rocket-movement 200s linear infinite both running;\r\n          animation: rocket-movement 200s linear infinite both running;\r\n}\r\n\r\n.object_earth{\r\n  position: absolute;\r\n  top: 20%;\r\n  left: 15%;\r\n  z-index: 90;\r\n/*  animation: spin-earth 100s infinite linear both;*/\r\n}\r\n\r\n.object_moon{\r\n  position: absolute;\r\n  top: 12%;\r\n  left: 25%;\r\n/*\r\n  transform: rotate(0deg);\r\n  transition: transform ease-in 99999999999s;\r\n*/\r\n}\r\n\r\n.object_mars {\r\n  position: absolute;\r\n  width: 150px;\r\n  right: 20%;\r\n  top: 35%;\r\n  transform: rotate(-11deg);\r\n}\r\n\r\n.object_astronaut{\r\n  -webkit-animation: rotate-astronaut 200s infinite linear both alternate;\r\n          animation: rotate-astronaut 200s infinite linear both alternate;\r\n}\r\n\r\n.box_astronaut{\r\n  z-index: 110 !important;\r\n  position: absolute;\r\n  top: 60%;\r\n  right: 20%;\r\n  will-change: transform;\r\n  -webkit-animation: move-astronaut 50s infinite linear both alternate;\r\n          animation: move-astronaut 50s infinite linear both alternate;\r\n}\r\n\r\n.image-404{\r\n  position: relative;\r\n  z-index: 100;\r\n  pointer-events: none;\r\n}\r\n\r\n.stars{\r\n  background: url('overlay-stars.svg');\r\n  background-repeat: repeat;\r\n  background-size: contain;\r\n  background-position: left top;\r\n}\r\n\r\n.glowing_stars .star{\r\n  position: absolute;\r\n  border-radius: 100%;\r\n  background-color: #fff;\r\n  width: 3px;\r\n  height: 3px;\r\n  opacity: 0.3;\r\n  will-change: opacity;\r\n}\r\n\r\n.glowing_stars .star:nth-child(1){\r\n  top: 80%;\r\n  left: 25%;\r\n  -webkit-animation: glow-star 2s infinite ease-in-out alternate 1s;\r\n          animation: glow-star 2s infinite ease-in-out alternate 1s;\r\n}\r\n\r\n.glowing_stars .star:nth-child(2){\r\n  top: 20%;\r\n  left: 40%;\r\n  -webkit-animation: glow-star 2s infinite ease-in-out alternate 3s;\r\n          animation: glow-star 2s infinite ease-in-out alternate 3s;\r\n}\r\n\r\n.glowing_stars .star:nth-child(3){\r\n  top: 25%;\r\n  left: 25%;\r\n  -webkit-animation: glow-star 2s infinite ease-in-out alternate 5s;\r\n          animation: glow-star 2s infinite ease-in-out alternate 5s;\r\n}\r\n\r\n.glowing_stars .star:nth-child(4){\r\n  top: 75%;\r\n  left: 80%;\r\n  -webkit-animation: glow-star 2s infinite ease-in-out alternate 7s;\r\n          animation: glow-star 2s infinite ease-in-out alternate 7s;\r\n}\r\n\r\n.glowing_stars .star:nth-child(5){\r\n  top: 90%;\r\n  left: 50%;\r\n  -webkit-animation: glow-star 2s infinite ease-in-out alternate 9s;\r\n          animation: glow-star 2s infinite ease-in-out alternate 9s;\r\n}\r\n\r\n@media only screen and (max-width: 600px){\r\n  .navbar-links{\r\n    display: none;\r\n  }\r\n  \r\n  .custom-navbar{\r\n    text-align: center;\r\n  }\r\n  \r\n  .brand-logo img{\r\n    width: 120px;\r\n  }\r\n  \r\n  .box_astronaut{\r\n    top: 70%;\r\n  }\r\n  \r\n  .central-body{\r\n    padding-top: 25%;\r\n  }\r\n}\r\n\r\nfooter {\r\n  font-size: x-small;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdC1mb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztDQUtDOztBQUdELG9DQUFvQyxNQUFNLDJDQUEyQyxFQUFFLEVBQUU7O0FBQ3pGLDZCQUE2QixNQUFNLG1DQUFtQyxDQUFDLEVBQUU7O0FBRXpFLGdDQUFnQyxPQUFPLGtDQUFrQyxFQUFFLHlCQUF5QixHQUFHLEVBQUU7O0FBQ3pHLHVCQUF1QixPQUEyQyx5QkFBeUIsRUFBRSx5QkFBeUIsRUFBRSxFQUFFOztBQUsxSDtFQUNFLE9BQU8sNENBQTRDLENBQUM7QUFDdEQ7O0FBQ0E7RUFDRSxPQUFxRCxtQ0FBbUMsRUFBRTtBQUM1Rjs7QUFJQTtFQUNFLE9BQU8sa0NBQWtDLENBQUM7QUFDNUM7O0FBQ0E7RUFDRSxPQUEyQyx5QkFBeUIsRUFBRTtBQUN4RTs7QUFNQTtFQUNFLE1BQU0sb0JBQW9CLENBQUM7RUFDM0IsV0FBVyxrQkFBa0IsRUFBRSw2QkFBNkIsQ0FBQztBQUMvRDs7QUFDQTtFQUNFLE1BQU0sb0JBQW9CLEVBQUUsWUFBWSxHQUFHO0VBQzNDLFdBQVcsa0JBQWtCLEVBQUUsVUFBVSxFQUFpQyxxQkFBcUIsRUFBRSx1QkFBdUIsQ0FBQztBQUMzSDs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIseUJBQXlCLEVBQUUsZ0JBQWdCO0VBQzNDLHNCQUFzQixFQUFFLGVBQWUsRUFDaEIsV0FBVztFQUNsQyxpQkFBaUIsRUFBRSxvQkFBb0I7QUFDekM7O0FBRUE7RUFDRSwrREFBK0Q7RUFDL0QsMkJBQTJCO0VBQzNCLHNCQUFzQjtFQUN0Qiw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdDQUFnQztFQUNoQyxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixvQkFBb0I7RUFDcEIsZUFBZTtFQU1mLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyw2QkFBNkI7RUFDN0Isc0JBQXNCO0VBQ3RCLHlDQUF5QztBQUMzQzs7QUFFQTtBQUNBLGlCQUFpQjtFQUNmLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLDRCQUE0QjtFQUM1QixRQUFRO0VBQ1Isb0JBQW9CO0VBQ3BCLG9FQUE0RDtVQUE1RCw0REFBNEQ7QUFDOUQ7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxXQUFXO0FBQ2IscURBQXFEO0FBQ3JEOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0FBQ1g7OztDQUdDO0FBQ0Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFVBQVU7RUFDVixRQUFRO0VBQ1IseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsdUVBQStEO1VBQS9ELCtEQUErRDtBQUNqRTs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsb0VBQTREO1VBQTVELDREQUE0RDtBQUM5RDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usb0NBQXdEO0VBQ3hELHlCQUF5QjtFQUN6Qix3QkFBd0I7RUFDeEIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsUUFBUTtFQUNSLFNBQVM7RUFDVCxpRUFBeUQ7VUFBekQseURBQXlEO0FBQzNEOztBQUNBO0VBQ0UsUUFBUTtFQUNSLFNBQVM7RUFDVCxpRUFBeUQ7VUFBekQseURBQXlEO0FBQzNEOztBQUNBO0VBQ0UsUUFBUTtFQUNSLFNBQVM7RUFDVCxpRUFBeUQ7VUFBekQseURBQXlEO0FBQzNEOztBQUNBO0VBQ0UsUUFBUTtFQUNSLFNBQVM7RUFDVCxpRUFBeUQ7VUFBekQseURBQXlEO0FBQzNEOztBQUNBO0VBQ0UsUUFBUTtFQUNSLFNBQVM7RUFDVCxpRUFBeUQ7VUFBekQseURBQXlEO0FBQzNEOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxRQUFRO0VBQ1Y7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJub3QtZm91bmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcblZJRVcgSU4gRlVMTCBTQ1JFRU4gTU9ERVxyXG5GVUxMIFNDUkVFTiBNT0RFOiBodHRwOi8vc2FsZWhyaWF6LmNvbS80MDRQYWdlLzQwNC5odG1sXHJcblxyXG5EUklCQkJMRTogaHR0cHM6Ly9kcmliYmJsZS5jb20vc2hvdHMvNDMzMDE2Ny00MDQtUGFnZS1Mb3N0LUluLVNwYWNlXHJcbiovXHJcblxyXG5ALW1vei1rZXlmcmFtZXMgcm9ja2V0LW1vdmVtZW50IHsgMTAwJSB7LW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMjAwcHgsLTYwMHB4KTt9IH1cclxuQC13ZWJraXQta2V5ZnJhbWVzIHJvY2tldC1tb3ZlbWVudCB7MTAwJSB7LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMjAwcHgsLTYwMHB4KTsgfSB9XHJcbkBrZXlmcmFtZXMgcm9ja2V0LW1vdmVtZW50IHsgMTAwJSB7dHJhbnNmb3JtOiB0cmFuc2xhdGUoMTIwMHB4LC02MDBweCk7fSB9XHJcbkAtbW96LWtleWZyYW1lcyBzcGluLWVhcnRoIHsgMTAwJSB7IC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTM2MGRlZyk7IHRyYW5zaXRpb246IHRyYW5zZm9ybSAyMHM7ICB9IH1cclxuQC13ZWJraXQta2V5ZnJhbWVzIHNwaW4tZWFydGggeyAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMzYwZGVnKTsgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDIwczsgIH0gfVxyXG5Aa2V5ZnJhbWVzIHNwaW4tZWFydGh7IDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0zNjBkZWcpOyB0cmFuc2Zvcm06cm90YXRlKC0zNjBkZWcpOyB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjBzOyB9IH1cclxuXHJcbkAtbW96LWtleWZyYW1lcyBtb3ZlLWFzdHJvbmF1dCB7XHJcbiAgMTAwJSB7IC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTE2MHB4LCAtMTYwcHgpO31cclxufVxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgbW92ZS1hc3Ryb25hdXQge1xyXG4gIDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0xNjBweCwgLTE2MHB4KTt9XHJcbn1cclxuQGtleWZyYW1lcyBtb3ZlLWFzdHJvbmF1dHtcclxuICAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTYwcHgsIC0xNjBweCk7IHRyYW5zZm9ybTp0cmFuc2xhdGUoLTE2MHB4LCAtMTYwcHgpOyB9XHJcbn1cclxuQC1tb3ota2V5ZnJhbWVzIHJvdGF0ZS1hc3Ryb25hdXQge1xyXG4gIDEwMCUgeyAtbW96LXRyYW5zZm9ybTogcm90YXRlKC03MjBkZWcpO31cclxufVxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgcm90YXRlLWFzdHJvbmF1dCB7XHJcbiAgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTcyMGRlZyk7fVxyXG59XHJcbkBrZXlmcmFtZXMgcm90YXRlLWFzdHJvbmF1dHtcclxuICAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNzIwZGVnKTsgdHJhbnNmb3JtOnJvdGF0ZSgtNzIwZGVnKTsgfVxyXG59XHJcblxyXG5ALW1vei1rZXlmcmFtZXMgZ2xvdy1zdGFyIHtcclxuICA0MCUgeyAtbW96LW9wYWNpdHk6IDAuMzt9XHJcbiAgOTAlLDEwMCUgeyAtbW96LW9wYWNpdHk6IDE7IC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjIpO31cclxufVxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZ2xvdy1zdGFyIHtcclxuICA0MCUgeyAtd2Via2l0LW9wYWNpdHk6IDAuMzt9XHJcbiAgOTAlLDEwMCUgeyAtd2Via2l0LW9wYWNpdHk6IDE7IC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjIpO31cclxufVxyXG5Aa2V5ZnJhbWVzIGdsb3ctc3RhcntcclxuICA0MCUgeyAtd2Via2l0LW9wYWNpdHk6IDAuMzsgb3BhY2l0eTogMC4zOyAgfVxyXG4gIDkwJSwxMDAlIHsgLXdlYmtpdC1vcGFjaXR5OiAxOyBvcGFjaXR5OiAxOyAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4yKTsgdHJhbnNmb3JtOiBzY2FsZSgxLjIpOyBib3JkZXItcmFkaXVzOiA5OTk5OTlweDt9XHJcbn1cclxuXHJcbi5zcGluLWVhcnRoLW9uLWhvdmVye1xyXG4gIHRyYW5zaXRpb246IGVhc2UgMjAwcyAhaW1wb3J0YW50O1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKC0zNjAwZGVnKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5odG1sLCBib2R5e1xyXG4gIG1hcmdpbjogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyAvKiBTYWZhcmkgMy4xKyAqL1xyXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7IC8qIEZpcmVmb3ggMisgKi9cclxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIElFIDEwKyAqL1xyXG4gIHVzZXItc2VsZWN0OiBub25lOyAvKiBTdGFuZGFyZCBzeW50YXggKi9cclxufVxyXG5cclxuYm9keSB7XHJcbiAgYmFja2dyb3VuZDogdXJsKGh0dHA6Ly9zYWxlaHJpYXouY29tLzQwNFBhZ2UvaW1nL2JnX3B1cnBsZS5wbmcpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgdG9wO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuOyAgXHJcbn1cclxuXHJcbi5idG4tZ28taG9tZXtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDIwMDtcclxuICBtYXJnaW46IDE1cHggYXV0bztcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByaW1hcnkpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGNvbG9yOiB2YXIoLS1mb250KTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGxldHRlci1zcGFjaW5nIDogMnB4O1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW47XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluO1xyXG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluO1xyXG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW47XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbjtcclxufVxyXG5cclxuLmJ0bi1nby1ob21lOmhvdmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xyXG4gIGNvbG9yOiB2YXIoLS1kYXJrKSAhaW1wb3J0YW50O1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbiAgYm94LXNoYWRvdzogMHB4IDIwcHggMjBweCByZ2JhKDAsMCwwLDAuMSk7XHJcbn1cclxuXHJcbi5jZW50cmFsLWJvZHl7XHJcbi8qICB3aWR0aDogMTAwJTsqL1xyXG4gIHBhZGRpbmc6IDE3JSA1JSAxMCUgNSU7XHJcbiAgei1pbmRleDogMTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmgxIHtcclxuICBmb250LXNpemU6IDEyOHB4O1xyXG59XHJcbmgxICsgcCB7XHJcbiAgZm9udC1zaXplOiAzMnB4O1xyXG59XHJcblxyXG4ub2JqZWN0cyBpbWd7XHJcbiAgei1pbmRleDogOTA7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbi5vYmplY3Rfcm9ja2V0e1xyXG4gIHotaW5kZXg6IDk1O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwcHgpO1xyXG4gIHRvcDogNzUlO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIGFuaW1hdGlvbjogcm9ja2V0LW1vdmVtZW50IDIwMHMgbGluZWFyIGluZmluaXRlIGJvdGggcnVubmluZztcclxufVxyXG5cclxuLm9iamVjdF9lYXJ0aHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAyMCU7XHJcbiAgbGVmdDogMTUlO1xyXG4gIHotaW5kZXg6IDkwO1xyXG4vKiAgYW5pbWF0aW9uOiBzcGluLWVhcnRoIDEwMHMgaW5maW5pdGUgbGluZWFyIGJvdGg7Ki9cclxufVxyXG5cclxuLm9iamVjdF9tb29ue1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDEyJTtcclxuICBsZWZ0OiAyNSU7XHJcbi8qXHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIGVhc2UtaW4gOTk5OTk5OTk5OTlzO1xyXG4qL1xyXG59XHJcblxyXG4ub2JqZWN0X21hcnMge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgcmlnaHQ6IDIwJTtcclxuICB0b3A6IDM1JTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTFkZWcpO1xyXG59XHJcblxyXG4ub2JqZWN0X2FzdHJvbmF1dHtcclxuICBhbmltYXRpb246IHJvdGF0ZS1hc3Ryb25hdXQgMjAwcyBpbmZpbml0ZSBsaW5lYXIgYm90aCBhbHRlcm5hdGU7XHJcbn1cclxuXHJcbi5ib3hfYXN0cm9uYXV0e1xyXG4gIHotaW5kZXg6IDExMCAhaW1wb3J0YW50O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDYwJTtcclxuICByaWdodDogMjAlO1xyXG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XHJcbiAgYW5pbWF0aW9uOiBtb3ZlLWFzdHJvbmF1dCA1MHMgaW5maW5pdGUgbGluZWFyIGJvdGggYWx0ZXJuYXRlO1xyXG59XHJcblxyXG4uaW1hZ2UtNDA0e1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxMDA7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbi5zdGFyc3tcclxuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvb3ZlcmxheS1zdGFycy5zdmcnKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IHRvcDtcclxufVxyXG5cclxuLmdsb3dpbmdfc3RhcnMgLnN0YXJ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICB3aWR0aDogM3B4O1xyXG4gIGhlaWdodDogM3B4O1xyXG4gIG9wYWNpdHk6IDAuMztcclxuICB3aWxsLWNoYW5nZTogb3BhY2l0eTtcclxufVxyXG5cclxuLmdsb3dpbmdfc3RhcnMgLnN0YXI6bnRoLWNoaWxkKDEpe1xyXG4gIHRvcDogODAlO1xyXG4gIGxlZnQ6IDI1JTtcclxuICBhbmltYXRpb246IGdsb3ctc3RhciAycyBpbmZpbml0ZSBlYXNlLWluLW91dCBhbHRlcm5hdGUgMXM7XHJcbn1cclxuLmdsb3dpbmdfc3RhcnMgLnN0YXI6bnRoLWNoaWxkKDIpe1xyXG4gIHRvcDogMjAlO1xyXG4gIGxlZnQ6IDQwJTtcclxuICBhbmltYXRpb246IGdsb3ctc3RhciAycyBpbmZpbml0ZSBlYXNlLWluLW91dCBhbHRlcm5hdGUgM3M7XHJcbn1cclxuLmdsb3dpbmdfc3RhcnMgLnN0YXI6bnRoLWNoaWxkKDMpe1xyXG4gIHRvcDogMjUlO1xyXG4gIGxlZnQ6IDI1JTtcclxuICBhbmltYXRpb246IGdsb3ctc3RhciAycyBpbmZpbml0ZSBlYXNlLWluLW91dCBhbHRlcm5hdGUgNXM7XHJcbn1cclxuLmdsb3dpbmdfc3RhcnMgLnN0YXI6bnRoLWNoaWxkKDQpe1xyXG4gIHRvcDogNzUlO1xyXG4gIGxlZnQ6IDgwJTtcclxuICBhbmltYXRpb246IGdsb3ctc3RhciAycyBpbmZpbml0ZSBlYXNlLWluLW91dCBhbHRlcm5hdGUgN3M7XHJcbn1cclxuLmdsb3dpbmdfc3RhcnMgLnN0YXI6bnRoLWNoaWxkKDUpe1xyXG4gIHRvcDogOTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICBhbmltYXRpb246IGdsb3ctc3RhciAycyBpbmZpbml0ZSBlYXNlLWluLW91dCBhbHRlcm5hdGUgOXM7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpe1xyXG4gIC5uYXZiYXItbGlua3N7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICBcclxuICAuY3VzdG9tLW5hdmJhcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmJyYW5kLWxvZ28gaW1ne1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gIH1cclxuICBcclxuICAuYm94X2FzdHJvbmF1dHtcclxuICAgIHRvcDogNzAlO1xyXG4gIH1cclxuICBcclxuICAuY2VudHJhbC1ib2R5e1xyXG4gICAgcGFkZGluZy10b3A6IDI1JTtcclxuICB9XHJcbn1cclxuXHJcbmZvb3RlciB7XHJcbiAgZm9udC1zaXplOiB4LXNtYWxsO1xyXG59Il19 */");

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
/* harmony import */ var _raw_loader_roles_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./roles.component.html */ "H6pZ");
/* harmony import */ var _roles_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./roles.component.css */ "iAMl");
/* harmony import */ var _overview_guild_settings_component_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../overview/guild-settings.component.css */ "wPW8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_dashboard_components_module_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/dashboard/components/module-config */ "cmOr");
/* harmony import */ var src_app_services_guild_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/guild.service */ "4bjJ");
/* harmony import */ var src_app_services_log_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/log.service */ "iXKo");
/* harmony import */ var src_app_services_ws_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/ws.service */ "Swid");
/* harmony import */ var src_app_utils_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/utils/utils */ "oCjk");
/* harmony import */ var _types_entity_types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../types/entity-types */ "h8Xa");














let RolesComponent = class RolesComponent extends src_app_dashboard_components_module_config__WEBPACK_IMPORTED_MODULE_8__["ModuleConfig"] {
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
        this.permissionType = Object.keys(_types_entity_types__WEBPACK_IMPORTED_MODULE_13__["PermissionTypes"].All);
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
                    ? _types_entity_types__WEBPACK_IMPORTED_MODULE_13__["PermissionTypes"].General[key] || _types_entity_types__WEBPACK_IMPORTED_MODULE_13__["PermissionTypes"].Text[key] || _types_entity_types__WEBPACK_IMPORTED_MODULE_13__["PermissionTypes"].Voice[key]
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
            this.guild.roles.sort(src_app_utils_utils__WEBPACK_IMPORTED_MODULE_12__["array"].descendingBy('_id'));
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
        var _a;
        if (!this.selectedRole)
            return new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({});
        const role = guild.roles.find(r => r._id === this.selectedRole._id);
        this.permissionsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            general: this.permissionGroup(role, _types_entity_types__WEBPACK_IMPORTED_MODULE_13__["PermissionTypes"].General),
            text: this.permissionGroup(role, _types_entity_types__WEBPACK_IMPORTED_MODULE_13__["PermissionTypes"].Text),
            voice: this.permissionGroup(role, _types_entity_types__WEBPACK_IMPORTED_MODULE_13__["PermissionTypes"].Voice),
        });
        this.permissionsForm.valueChanges
            .subscribe(() => this.openSaveChanges());
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            color: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({
                disabled: this.isEveryone,
                value: role.color,
            }),
            hoisted: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({
                disabled: this.isEveryone,
                value: this.isEveryone ? false : role.mentionable,
            }),
            mentionable: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({
                disabled: this.isEveryone,
                value: this.isEveryone ? false : role.mentionable,
            }),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({
                disabled: this.isEveryone,
                value: (_a = role.name) !== null && _a !== void 0 ? _a : '',
            }, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(32),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(/^(?!everyone|here|someone).*$/),
            ]),
            position: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.getPosition(role)),
        });
    }
    getPosition(role) {
        return this.guild.roles.findIndex(r => r._id == role._id);
    }
    permissionGroup(role, type) {
        const hasPermission = (perm) => Boolean(role.permissions & perm);
        const group = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({});
        for (const perm in type) {
            if (Number.parseInt(perm))
                continue;
            group.setControl(perm, new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](hasPermission(type[perm])));
        }
        return group;
    }
    setPermissions(permissions = _types_entity_types__WEBPACK_IMPORTED_MODULE_13__["PermissionTypes"].defaultPermissions) {
        for (const formGroupName in this.permissionsForm.value)
            for (const key in this.permissionsForm.get(formGroupName).value) {
                const hasPerm = Boolean(permissions & _types_entity_types__WEBPACK_IMPORTED_MODULE_13__["PermissionTypes"].All[key]);
                this.permissionsForm
                    .get(formGroupName)
                    .get(key)
                    .setValue(hasPerm);
            }
    }
    submit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.form.valid)
                return;
            this.form.value.permissions = this.permissions;
            for (const key in this.form.value)
                this.selectedRole[key] = this.form.value[key];
            yield this.updateRole();
        });
    }
    updateRole() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const roleId = this.selectedRole._id;
            this.ws.on('GUILD_ROLE_UPDATE', () => {
                const index = this.guild.roles.findIndex(r => r._id === roleId);
                this.selectedRole = this.guild.roles[index] = Object.assign(Object.assign({}, this.guild.roles[index]), this.form.value);
            }, this);
            this.ws.emit('GUILD_ROLE_UPDATE', {
                roleId,
                guildId: this.guildId,
                partialRole: this.form.value,
            }, this);
            this.originalGuild = Object.assign({}, this.guild);
        });
    }
    newRole() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.ws.on('GUILD_ROLE_CREATE', ({ role }) => {
                this.guild.roles.push(role);
                this.selectedRole = role;
            }, this);
            this.ws.emit('GUILD_ROLE_CREATE', {
                guildId: this.guildId,
                partialRole: Object.assign(Object.assign({}, this.form.value), { name: 'New Role' }),
            }, this);
        });
    }
    deleteRole() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const roleId = this.selectedRole._id;
            this.ws.emit('GUILD_ROLE_DELETE', { roleId, guildId: this.guildId }, this);
            const index = this.guild.roles.findIndex(r => r._id === roleId);
            this.guild.roles.splice(index, 1);
            this.originalGuild = Object.assign({}, this.guild);
            yield this.selectRole(this.guild.roles[0]);
        });
    }
};
RolesComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: src_app_services_guild_service__WEBPACK_IMPORTED_MODULE_9__["GuildService"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] },
    { type: src_app_services_ws_service__WEBPACK_IMPORTED_MODULE_11__["WSService"] },
    { type: src_app_services_log_service__WEBPACK_IMPORTED_MODULE_10__["LogService"] }
];
RolesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-roles-component',
        template: _raw_loader_roles_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_roles_component_css__WEBPACK_IMPORTED_MODULE_2__["default"], _overview_guild_settings_component_css__WEBPACK_IMPORTED_MODULE_3__["default"]]
    })
], RolesComponent);



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
/* harmony import */ var _raw_loader_add_friend_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-friend.component.html */ "C5ax");
/* harmony import */ var _add_friend_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-friend.component.css */ "fAPl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_services_log_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/log.service */ "iXKo");
/* harmony import */ var src_app_services_ws_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/ws.service */ "Swid");
/* harmony import */ var src_app_types_entity_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/types/entity-types */ "h8Xa");









let AddFriendComponent = class AddFriendComponent {
    constructor(dialogRef, log, ws) {
        this.dialogRef = dialogRef;
        this.log = log;
        this.ws = ws;
        this.addFriendForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(32),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(src_app_types_entity_types__WEBPACK_IMPORTED_MODULE_8__["patterns"].username),
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
};
AddFriendComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"] },
    { type: src_app_services_log_service__WEBPACK_IMPORTED_MODULE_6__["LogService"] },
    { type: src_app_services_ws_service__WEBPACK_IMPORTED_MODULE_7__["WSService"] }
];
AddFriendComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-friend',
        template: _raw_loader_add_friend_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_friend_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AddFriendComponent);



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
/* harmony import */ var _raw_loader_guild_settings_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./guild-settings.component.html */ "ubaq");
/* harmony import */ var _guild_settings_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guild-settings.component.css */ "wPW8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_dashboard_components_module_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/dashboard/components/module-config */ "cmOr");
/* harmony import */ var src_app_services_guild_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/guild.service */ "4bjJ");
/* harmony import */ var src_app_services_log_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/log.service */ "iXKo");
/* harmony import */ var src_app_services_ws_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/ws.service */ "Swid");











let GuildSettingsComponent = class GuildSettingsComponent extends src_app_dashboard_components_module_config__WEBPACK_IMPORTED_MODULE_7__["ModuleConfig"] {
    constructor(route, router, guildService, snackbar, ws, log) {
        super(guildService, route, snackbar, ws, log, router);
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
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            iconURL: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](guild.iconURL),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](guild.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(32)]),
        });
    }
};
GuildSettingsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: src_app_services_guild_service__WEBPACK_IMPORTED_MODULE_8__["GuildService"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] },
    { type: src_app_services_ws_service__WEBPACK_IMPORTED_MODULE_10__["WSService"] },
    { type: src_app_services_log_service__WEBPACK_IMPORTED_MODULE_9__["LogService"] }
];
GuildSettingsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-guild-settings',
        template: _raw_loader_guild_settings_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_guild_settings_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], GuildSettingsComponent);



/***/ }),

/***/ "Q/dq":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/messages/message-embed/message-embed.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"embed-wrapper\" *ngIf=\"message.embed\">\n    <span *ngIf=\"canManage\"\n        (click)=\"close.emit(message._id)\"\n        class=\"hide-embed text-muted cursor-pointer\">×</span>\n    <div class=\"embed\">\n      <a class=\"title\" [href]=\"message.embed.url\">{{ message.embed.title || 'Untitled' }}</a>\n      <div *ngIf=\"message.embed.description\"\n          class=\"description\">{{ message.embed.description }}</div>\n      <img *ngIf=\"message.embed.image\"\n          [src]=\"message.embed.image\" onerror=\"this.onerror=null;this.hidden = true\">\n    </div>\n</div>");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_member_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./member-list.component.html */ "tXpb");
/* harmony import */ var _member_list_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./member-list.component.css */ "dGeP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/config */ "Vx+w");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _member_list_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./member-list.animations */ "3JO2");







let MemberListComponent = class MemberListComponent {
    constructor(userService) {
        this.userService = userService;
        this.isExpanded || (this.isExpanded = Object(src_app_config__WEBPACK_IMPORTED_MODULE_4__["getConfig"])('memberListExpanded'));
    }
    get isExpanded() {
        return this._expanded;
    }
    set isExpanded(value) {
        Object(src_app_config__WEBPACK_IMPORTED_MODULE_4__["setConfig"])('memberListExpanded', this._expanded = value);
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
};
MemberListComponent.ctorParameters = () => [
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }
];
MemberListComponent.propDecorators = {
    guild: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    isExpanded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['expanded',] }]
};
MemberListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-member-list',
        template: _raw_loader_member_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        animations: [_member_list_animations__WEBPACK_IMPORTED_MODULE_6__["widthExpandCollapse"]],
        styles: [_member_list_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MemberListComponent);



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
/* harmony import */ var _raw_loader_application_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./application.component.html */ "N/3I");
/* harmony import */ var _application_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./application.component.css */ "aHdX");
/* harmony import */ var _developers_component_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../developers.component.css */ "TiMe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_dashboard_components_save_changes_save_changes_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/dashboard/components/save-changes/save-changes.component */ "qigX");
/* harmony import */ var src_app_services_developers_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/developers.service */ "RXH7");










let ApplicationComponent = class ApplicationComponent {
    constructor(route, saveChanges, service) {
        this.route = route;
        this.saveChanges = saveChanges;
        this.service = service;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
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
            .openFromComponent(src_app_dashboard_components_save_changes_save_changes_component__WEBPACK_IMPORTED_MODULE_8__["SaveChangesComponent"])
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
};
ApplicationComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] },
    { type: src_app_services_developers_service__WEBPACK_IMPORTED_MODULE_9__["DevelopersService"] }
];
ApplicationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-application',
        template: _raw_loader_application_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_application_component_css__WEBPACK_IMPORTED_MODULE_2__["default"], _developers_component_css__WEBPACK_IMPORTED_MODULE_3__["default"]]
    })
], ApplicationComponent);



/***/ }),

/***/ "QWa4":
/*!***************************************************!*\
  !*** ./src/app/pages/invite/invite.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\n  overflow-y: hidden;\n}\n\n.main {\n  padding-top: 25vh;\n  height: 90vh;\n  background-image: \n    linear-gradient(\n      to bottom,\n      var(--background-secondary),\n      var(--background-tertiary) 50%\n    );\n}\n\napp-submarine {\n  position: absolute;\n  bottom: 15vh;\n  transform: scale(0.5);\n\n  -webkit-animation: moveLeft 150s infinite;\n\n          animation: moveLeft 150s infinite;\n}\n\n@-webkit-keyframes moveLeft {\n  0% {\n    left: 90%;\n  }\n  100% {\n    left: 10%;\n  }\n}\n\n@keyframes moveLeft {\n  0% {\n    left: 90%;\n  }\n  100% {\n    left: 10%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludml0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWjs7Ozs7S0FLRztBQUNMOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixxQkFBcUI7O0VBRXJCLHlDQUFpQzs7VUFBakMsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0U7SUFDRSxTQUFTO0VBQ1g7RUFDQTtJQUNFLFNBQVM7RUFDWDtBQUNGOztBQVBBO0VBQ0U7SUFDRSxTQUFTO0VBQ1g7RUFDQTtJQUNFLFNBQVM7RUFDWDtBQUNGIiwiZmlsZSI6Imludml0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbn1cblxuLm1haW4ge1xuICBwYWRkaW5nLXRvcDogMjV2aDtcbiAgaGVpZ2h0OiA5MHZoO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBcbiAgICBsaW5lYXItZ3JhZGllbnQoXG4gICAgICB0byBib3R0b20sXG4gICAgICB2YXIoLS1iYWNrZ3JvdW5kLXNlY29uZGFyeSksXG4gICAgICB2YXIoLS1iYWNrZ3JvdW5kLXRlcnRpYXJ5KSA1MCVcbiAgICApO1xufVxuXG5hcHAtc3VibWFyaW5lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDE1dmg7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcblxuICBhbmltYXRpb246IG1vdmVMZWZ0IDE1MHMgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgbW92ZUxlZnQge1xuICAwJSB7XG4gICAgbGVmdDogOTAlO1xuICB9XG4gIDEwMCUge1xuICAgIGxlZnQ6IDEwJTtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "QeHQ":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/components/channel-tab/channel-tab.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\n  #menuTrigger=\"matMenuTrigger\"\n  [matMenuTriggerFor]=\"channelMenu\"\n  (contextmenu)=\"openMenu($event, menuTrigger)\">\n  <div *ngIf=\"channel.type === 'TEXT'\">\n    <a (click)=\"$event.stopPropagation()\"\n      class=\"nav-item nav-link\"\n      [routerLink]=\"'/channels/' + guild._id + '/' + channel._id\"\n      routerLinkActive=\"active\">        \n      <span class=\"float-right text-muted p-1\">\n        <i *ngIf=\"pings.isUnread(channel._id)\"\n          matTooltip=\"Unread Pings\"\n          class=\"fas fa-circle\"></i>\n      </span>\n    \n      <i class=\"fas fa-hashtag pr-1\"\n        [ngClass]=\"{\n          'text-muted': userService.self.ignored.channelIds.includes(channel._id),\n          'text-warning': pings.isUnread(channel._id)\n        }\"></i>\n      <span>{{ channel.name }}</span>\n      <span *ngIf=\"pings.isUnread(channel._id)\" class=\"ml-2\">\n        <i class=\"fas fa-circle text-danger\"></i>\n      </span>\n    </a>\n  </div>\n    \n  <div *ngIf=\"channel.type === 'VOICE'\">\n    <voice-channel\n      (click)=\"$event.stopPropagation()\"\n      [channel]=\"channel\"\n      [guild]=\"guild\"></voice-channel>\n  </div>\n</div>\n\n<mat-menu\n  #channelMenu=\"matMenu\"\n  matMenuContent>\n  <div (click)=\"$event.stopPropagation()\">\n    <button\n      *ngIf=\"perms.can(guild._id, 'MANAGE_CHANNELS')\"\n      (click)=\"delete()\"\n      class=\"text-danger\"\n      mat-menu-item>\n      <i class=\"fas fa-trash\" aria-hidden=\"true\"></i>\n      <span class=\"ml-2\">Delete</span>\n    </button>\n    \n    <hr>\n    <div class=\"p-2\">\n      <strong>ID: </strong>\n      <code>{{ channel._id }}</code>\n    </div>\n  </div>\n</mat-menu>\n");

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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ws_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ws.service */ "Swid");




// convention over configuration
let HTTPWrapper = class HTTPWrapper {
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
            this.arr;
        this.arr.push(val);
        return this.arr;
    }
    delete(id) {
        var _a;
        const index = (_a = this.arr) === null || _a === void 0 ? void 0 : _a.findIndex(i => i._id === id);
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
};
HTTPWrapper.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _ws_service__WEBPACK_IMPORTED_MODULE_3__["WSService"] }
];
HTTPWrapper = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' })
], HTTPWrapper);



/***/ }),

/***/ "RC36":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/messages/message/message.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\r\n  *ngIf=\"author\"\r\n  #menuTrigger=\"matMenuTrigger\"\r\n  [matMenuTriggerFor]=\"contextMenu\"\r\n  (contextmenu)=\"openMenu($event, menuTrigger)\">\r\n  <div\r\n    *ngIf=\"!isExtra; else extraMessage\"\r\n    [id]=\"'message-' + message._id\"\r\n    (click)=\"$event.stopPropagation()\">\r\n    <div\r\n      class=\"message-group\"\r\n      [ngClass]=\"{ 'd-mention': isMentioned }\">\r\n      <app-avatar-url\r\n        (click)=\"dialog.profile({ user: author })\"\r\n        matTooltip=\"View Profile\"\r\n        size=\"40px\"\r\n        [user]=\"(avatarURL) ? { username: author.username, avatarURL: avatarURL } : author\"></app-avatar-url>\r\n      <div class=\"comment\">\r\n        <div class=\"message first\">\r\n          <h2 style=\"line-height: 16px;\">\r\n            <span class=\"username-wrapper v-btm\">\r\n              <strong\r\n                [style.color]=\"roleColor\"\r\n                class=\"username\">{{ author.username }}</strong>\r\n              <div *ngIf=\"author.bot && author.username !== '2PG'\"\r\n                class=\"username-badge badge badge-secondary ml-1\">BOT</div>\r\n              <div *ngIf=\"author.bot && author.username === '2PG'\"\r\n                class=\"username-badge badge badge-secondary ml-1\">SYSTEM</div>\r\n            </span>\r\n            <span class=\"highlight-separator\"> - </span>\r\n            <span class=\"timestamp\">{{ message.createdAt | timestamp }}</span>\r\n            <ng-container *ngTemplateOutlet=\"edited\"></ng-container>\r\n          </h2>\r\n\r\n          <ng-container *ngTemplateOutlet=\"messageContent\"></ng-container>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #extraMessage>\r\n  <div\r\n    [id]=\"'message-' + message._id\"\r\n    class=\"extra-message\"\r\n    [ngClass]=\"{ 'd-mention': isMentioned }\"\r\n    (click)=\"$event.stopPropagation()\">\r\n    <span class=\"content\">\r\n      <span\r\n        class=\"timestamp no-select\"\r\n        [matTooltip]=\"message.createdAt\">\r\n        <span>{{ timeString }}</span>\r\n        <ng-container *ngTemplateOutlet=\"edited\"></ng-container>\r\n      </span>\r\n      <ng-container *ngTemplateOutlet=\"messageContent\"></ng-container>\r\n    </span>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #edited>\r\n  <span\r\n    *ngIf=\"message.updatedAt\"\r\n    [matTooltip]=\"'Edited - ' + updatedAt\"\r\n    class=\"edit-indicator cursor-pointer ml-1\"\r\n    #edited>\r\n    <i class=\"fas fa-pencil-alt text-muted\"></i>\r\n  </span>\r\n</ng-template>\r\n\r\n<ng-template #messageContent>\r\n  <div\r\n    (keydown)=\"toggleEditing($event)\"\r\n    [contentEditable]=\"isEditing && canManage\"\r\n    [innerHtml]=\"processed\"\r\n    class=\"message-text d-inline\"\r\n    #newMessage>\r\n  </div>\r\n\r\n  <message-embed\r\n    (close)=\"removeEmbed()\"\r\n    [canManage]=\"canManage\"\r\n    [message]=\"message\"></message-embed>\r\n</ng-template>\r\n\r\n<mat-menu\r\n  [style.left]=\"contextMenuPosition.x\"\r\n  [style.top]=\"contextMenuPosition.y\"\r\n  #contextMenu>\r\n  <div *ngIf=\"canManage && author._id === userService.self._id\">\r\n    <button\r\n      (click)=\"toggleEditing()\"\r\n      mat-menu-item>\r\n      <i class=\"fas fa-pencil-alt text-warning mr-1\"></i>\r\n      <span>{{ (isEditing) ? 'Finish Editing' : 'Edit' }}</span>\r\n    </button>\r\n  </div>\r\n  <div *ngIf=\"canManage\">\r\n    <button\r\n      (click)=\"delete()\"\r\n      mat-menu-item>\r\n      <i class=\"fas fa-times-circle text-danger mr-1\"></i>\r\n      <span>Delete</span>\r\n    </button>\r\n  \r\n    <hr>\r\n  </div>\r\n\r\n  <div (click)=\"$event.stopPropagation()\" class=\"p-2\">\r\n    <strong>ID: </strong>\r\n    <code>{{ message._id }}</code>\r\n  </div>\r\n</mat-menu>\r\n");

/***/ }),

/***/ "RSRa":
/*!************************************************************!*\
  !*** ./src/app/authentication/verify/verify.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZXJpZnkuY29tcG9uZW50LmNzcyJ9 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _http_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http-wrapper */ "R0x+");




let DevelopersService = class DevelopersService extends _http_wrapper__WEBPACK_IMPORTED_MODULE_3__["HTTPWrapper"] {
    constructor() {
        super(...arguments);
        this.endpoint = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].endpoint}/developers/applications`;
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
};
DevelopersService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DevelopersService);



/***/ }),

/***/ "RaNy":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/create-channel/create-channel.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 class=\"text-center\" mat-dialog-title>Create Channel</h1>\n\n<div class=\"text-center\" mat-dialog-content>\n  <form\n    (keyup.enter)=\"create()\"\n    #f=\"ngForm\"\n    [formGroup]=\"form\">\n    <mat-form-field appearance=\"outline\">\n      <mat-label>Name</mat-label>\n      <input formControlName=\"name\" type=\"text\" matInput #nameInput>\n      <mat-error *ngIf=\"form.get('name').invalid\">Required, and should be less than 32 characters.</mat-error>\n    </mat-form-field>\n\n    <mat-form-field appearance=\"outline\">\n      <mat-label>Type</mat-label>\n      <mat-select\n        formControlName=\"type\"\n        (select)=\"nameInput.setValue('')\">\n        <mat-option value=\"TEXT\" selected>Text</mat-option>\n        <!-- <mat-option value=\"VOICE\">Voice</mat-option> -->\n      </mat-select>\n    </mat-form-field>\n  </form>\n</div>\n\n<div class=\"d-flex justify-content-center\" mat-dialog-actions>\n  <button\n    id=\"createChannelButton\"\n    (click)=\"create()\"\n    class=\"btn btn-success mt-2\"\n    [disabled]=\"processing\">Create</button>\n</div>");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let CleanDateTimePipe = class CleanDateTimePipe {
    transform(dateString, ...args) {
        const date = new Date(dateString);
        let hours = date.getHours().toString().padStart(2, '0');
        let minutes = date.getMinutes().toString().padStart(2, '0');
        let day = date.getDate().toString().padStart(2, '0');
        const month = date.toLocaleString('default', { month: 'long' });
        return `${month} ${day} ${date.getFullYear()}, ${hours}:${minutes}`;
    }
};
CleanDateTimePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'cleanDateTime' })
], CleanDateTimePipe);



/***/ }),

/***/ "RhSN":
/*!********************************************************************!*\
  !*** ./src/app/dashboard/components/sidebar/sidebar.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".guild-icon {\r\n  border-radius: 50%;\r\n\r\n  margin: 5px;\r\n  width: 52px;\r\n  height: 52px;\r\n\r\n  background-color: var(--background-primary);\r\n  transition: all .35s;\r\n\r\n  cursor: pointer;\r\n}\r\n\r\n.guild-icon img:hover,\r\n.guild-icon:hover,\r\n.guild-icon span:hover,\r\n.guild-icon.active img,\r\n.guild-icon.active span {\r\n  border-radius: 25%;\r\n}\r\n\r\n.guild-icon span {\r\n  text-align: center;\r\n  font-size: 18px;\r\n\r\n  transition: all .35s;\r\n\r\n  width: 52px;\r\n  height: 48px;\r\n  padding-top: 14px;\r\n}\r\n\r\nbutton {\r\n  background: transparent;\r\n  border: none;\r\n  color: var(--font);\r\n\r\n  font-size: 32px;\r\n}\r\n\r\n.guilds {\r\n  background-color: var(--background-tertiary);\r\n  float: left;\r\n  height: inherit;\r\n  padding-top: 12px;\r\n}\r\n\r\n.options {\r\n  background-color: var(--background-secondary) !important;\r\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\r\n  overflow-x: hidden;\r\n\r\n  width: 275px;\r\n  height: inherit;\r\n\r\n  margin-left: 75px;\r\n}\r\n\r\n.toggle {\r\n  position: absolute;\r\n  bottom: 0;\r\n\r\n  visibility: visible;\r\n\r\n  margin: 50px 0 0 15px;\r\n}\r\n\r\n/* Large devices (desktops, 992px and up) */\r\n\r\n@media (min-width: 992px) {\r\n  .toggle {\r\n    visibility: hidden;\r\n  }\r\n}\r\n\r\nmat-sidenav {\r\n  height: 100vh;\r\n  background-color: var(--background-tertiary);\r\n}\r\n\r\n.guild-icon .add-guild {\r\n  font-size: 40px;\r\n  color: var(--tertiary);\r\n}\r\n\r\n.add-guild:hover {\r\n  background-color: var(--primary);\r\n}\r\n\r\n.guild-seperator {\r\n  height: 2px;\r\n  width: 32px;\r\n  border-radius: 1px;\r\n\r\n  border-color: var(--background-secondary);\r\n}\r\n\r\nfooter {  \r\n  background-color: rgba(0, 0, 0, 0.05);\r\n\r\n  margin-left: 0px;\r\n  padding: 10px;\r\n  width: 275px;\r\n\r\n  position: absolute;\r\n  bottom: 0;\r\n}\r\n\r\n.guilds .active {\r\n  background-color: var(--primary);\r\n  border-radius: 15px !important;\r\n}\r\n\r\n.connected-to {\r\n  font-size: small;\r\n}\r\n\r\nfooter i {\r\n  font-size: 20px;\r\n}\r\n\r\nfooter button {\r\n  margin-top: 150x;\r\n}\r\n\r\n.username {\r\n  padding-top: 25px;\r\n  padding-left: 10px;\r\n\r\n  max-width: 142px;\r\n  max-height: 42px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGViYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjs7RUFFbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZOztFQUVaLDJDQUEyQztFQUMzQyxvQkFBb0I7O0VBRXBCLGVBQWU7QUFDakI7O0FBRUE7Ozs7O0VBS0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7O0VBRWYsb0JBQW9COztFQUVwQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osa0JBQWtCOztFQUVsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsNENBQTRDO0VBQzVDLFdBQVc7RUFDWCxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usd0RBQXdEO0VBQ3hELDJFQUEyRTtFQUMzRSxrQkFBa0I7O0VBRWxCLFlBQVk7RUFDWixlQUFlOztFQUVmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTOztFQUVULG1CQUFtQjs7RUFFbkIscUJBQXFCO0FBQ3ZCOztBQUNBLDJDQUEyQzs7QUFDM0M7RUFDRTtJQUNFLGtCQUFrQjtFQUNwQjtBQUNGOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLGVBQWU7RUFDZixzQkFBc0I7QUFDeEI7O0FBQ0E7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQjs7RUFFbEIseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UscUNBQXFDOztFQUVyQyxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFlBQVk7O0VBRVosa0JBQWtCO0VBQ2xCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjs7RUFFbEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzaWRlYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3VpbGQtaWNvbiB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG5cclxuICBtYXJnaW46IDVweDtcclxuICB3aWR0aDogNTJweDtcclxuICBoZWlnaHQ6IDUycHg7XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtcHJpbWFyeSk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4zNXM7XHJcblxyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmd1aWxkLWljb24gaW1nOmhvdmVyLFxyXG4uZ3VpbGQtaWNvbjpob3ZlcixcclxuLmd1aWxkLWljb24gc3Bhbjpob3ZlcixcclxuLmd1aWxkLWljb24uYWN0aXZlIGltZyxcclxuLmd1aWxkLWljb24uYWN0aXZlIHNwYW4ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1JTtcclxufVxyXG5cclxuLmd1aWxkLWljb24gc3BhbiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuXHJcbiAgdHJhbnNpdGlvbjogYWxsIC4zNXM7XHJcblxyXG4gIHdpZHRoOiA1MnB4O1xyXG4gIGhlaWdodDogNDhweDtcclxuICBwYWRkaW5nLXRvcDogMTRweDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6IHZhcigtLWZvbnQpO1xyXG5cclxuICBmb250LXNpemU6IDMycHg7XHJcbn1cclxuXHJcbi5ndWlsZHMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtdGVydGlhcnkpO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGhlaWdodDogaW5oZXJpdDtcclxuICBwYWRkaW5nLXRvcDogMTJweDtcclxufVxyXG5cclxuLm9wdGlvbnMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtc2Vjb25kYXJ5KSAhaW1wb3J0YW50O1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4xKSwgMCAxcHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA2KTtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcblxyXG4gIHdpZHRoOiAyNzVweDtcclxuICBoZWlnaHQ6IGluaGVyaXQ7XHJcblxyXG4gIG1hcmdpbi1sZWZ0OiA3NXB4O1xyXG59XHJcblxyXG4udG9nZ2xlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG5cclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG5cclxuICBtYXJnaW46IDUwcHggMCAwIDE1cHg7XHJcbn1cclxuLyogTGFyZ2UgZGV2aWNlcyAoZGVza3RvcHMsIDk5MnB4IGFuZCB1cCkgKi9cclxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgLnRvZ2dsZSB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgfVxyXG59XHJcblxyXG5tYXQtc2lkZW5hdiB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLXRlcnRpYXJ5KTtcclxufVxyXG5cclxuLmd1aWxkLWljb24gLmFkZC1ndWlsZCB7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIGNvbG9yOiB2YXIoLS10ZXJ0aWFyeSk7XHJcbn1cclxuLmFkZC1ndWlsZDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbn1cclxuXHJcbi5ndWlsZC1zZXBlcmF0b3Ige1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIHdpZHRoOiAzMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDFweDtcclxuXHJcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLXNlY29uZGFyeSk7XHJcbn1cclxuXHJcbmZvb3RlciB7ICBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG5cclxuICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgd2lkdGg6IDI3NXB4O1xyXG5cclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG59XHJcblxyXG4uZ3VpbGRzIC5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNvbm5lY3RlZC10byB7XHJcbiAgZm9udC1zaXplOiBzbWFsbDtcclxufVxyXG5cclxuZm9vdGVyIGkge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5mb290ZXIgYnV0dG9uIHtcclxuICBtYXJnaW4tdG9wOiAxNTB4O1xyXG59XHJcbi51c2VybmFtZSB7XHJcbiAgcGFkZGluZy10b3A6IDI1cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG5cclxuICBtYXgtd2lkdGg6IDE0MnB4O1xyXG4gIG1heC1oZWlnaHQ6IDQycHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "S6iF":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-md\">\r\n  <a class=\"navbar-brand\" routerLink=\"/\">\r\n    <h1>\r\n      <span>accord</span>\r\n      <span class=\"text-tertiary\">.</span>\r\n      <span class=\"text-secondary\">app</span>\r\n    </h1>\r\n  </a>\r\n  <button\r\n    class=\"navbar-toggler\"\r\n    type=\"button\"\r\n    data-toggle=\"collapse\"\r\n    data-target=\"#navbarSupportedContent\"\r\n    aria-controls=\"navbarSupportedContent\"\r\n    aria-expanded=\"false\"\r\n    aria-label=\"Toggle navigation\">\r\n    <i class=\"fas fa-bars\"></i>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <div class=\"nav navbar-nav\">\r\n      <a class=\"nav-item nav-link\" \r\n        routerLink=\"/docs\" \r\n        routerLinkActive=\"active\">\r\n        <i class=\"fas fa-book\" aria-hidden=\"true\"></i> Docs\r\n      </a>\r\n    </div>\r\n  \r\n    <div class=\"nav navbar-nav ml-auto\">\r\n      <div class=\"d-md-none d-block mt-2\"></div>\r\n      <div *ngIf=\"!user\">\r\n        <a class=\"nav-item nav-link\" routerLink=\"/login\">\r\n          <i class=\"fas fa-user\" aria-hidden=\"true\"></i> Login\r\n        </a>\r\n      </div>\r\n      <div *ngIf=\"user\">\r\n        <mat-button\r\n          class=\"nav-item nav-link bg-primary text-light rounded cursor-pointer mr-3\"\r\n          routerLink=\"/channels/@me\">\r\n          <i class=\"fas fa-chevron-circle-right\" aria-hidden=\"true\"></i>\r\n          <strong> Open</strong>\r\n        </mat-button>     \r\n      </div>\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n<mat-menu #menu=\"matMenu\">\r\n  <button routerLink=\"/channels/@me\" mat-menu-item>\r\n    <i class=\"fas fa-cog\"></i> Open\r\n  </button>\r\n  <hr>\r\n  <button routerLink=\"/developers\" mat-menu-item>\r\n    <i class=\"fas fa-code\"></i> Developers\r\n  </button>\r\n  <button routerLink=\"/logout\" mat-menu-item>\r\n    <i class=\"fas fa-sign-out-alt\"></i> Logout\r\n  </button>\r\n</mat-menu>\r\n");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_dashboard_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./dashboard-navbar.component.html */ "uwnf");
/* harmony import */ var _dashboard_navbar_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard-navbar.component.css */ "rY0o");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let DashboardNavbarComponent = class DashboardNavbarComponent {
};
DashboardNavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'dashboard-navbar',
        template: _raw_loader_dashboard_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_dashboard_navbar_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DashboardNavbarComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


function externalRedirect(url) {
    let RedirectComponent = class RedirectComponent {
        constructor() {
            window.location.href = url;
        }
    };
    RedirectComponent.ctorParameters = () => [];
    RedirectComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: ''
        })
    ], RedirectComponent);
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_guild_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/guild.service */ "4bjJ");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "qfBg");





let GuildAuthGuard = class GuildAuthGuard {
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
};
GuildAuthGuard.ctorParameters = () => [
    { type: _services_guild_service__WEBPACK_IMPORTED_MODULE_3__["GuildService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
];
GuildAuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], GuildAuthGuard);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ "jifJ");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _log_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./log.service */ "iXKo");
/* harmony import */ var _types_ws_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../types/ws-types */ "w7rA");
/* empty/unused harmony star reexport */




let WSService = class WSService {
    constructor(log) {
        this.log = log;
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_3___default.a.connect(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].rootEndpoint, {
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
};
WSService.ctorParameters = () => [
    { type: _log_service__WEBPACK_IMPORTED_MODULE_4__["LogService"] }
];
WSService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], WSService);




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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_text_channel_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./text-channel.component.html */ "4zpt");
/* harmony import */ var _text_channel_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./text-channel.component.css */ "lPaH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _text_based_channel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../text-based-channel */ "4wK4");





let TextChannelComponent = class TextChannelComponent extends _text_based_channel__WEBPACK_IMPORTED_MODULE_4__["TextBasedChannel"] {
};
TextChannelComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-text-channel',
        template: _raw_loader_text_channel_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_text_channel_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TextChannelComponent);



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
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.css */ "A3xY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/user.service */ "qfBg");
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/theme.service */ "WPWp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_log_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/log.service */ "iXKo");
/* harmony import */ var devtools_detect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! devtools-detect */ "26JY");
/* harmony import */ var devtools_detect__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(devtools_detect__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _services_events_event_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/events/event.service */ "gP/n");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./config */ "Vx+w");











let AppComponent = class AppComponent {
    constructor(eventService, themeService, userService, route, log) {
        this.eventService = eventService;
        this.themeService = themeService;
        this.userService = userService;
        this.route = route;
        this.log = log;
    }
    get sfxEnabled() {
        return Object(_config__WEBPACK_IMPORTED_MODULE_10__["getConfig"])('sfxEnabled');
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
            if (!devtools_detect__WEBPACK_IMPORTED_MODULE_8___default.a.isOpen)
                return;
            this.log.consoleWarning();
            clearInterval(interval);
        }, 100);
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_events_event_service__WEBPACK_IMPORTED_MODULE_9__["EventService"] },
    { type: _services_theme_service__WEBPACK_IMPORTED_MODULE_5__["ThemeService"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _services_log_service__WEBPACK_IMPORTED_MODULE_7__["LogService"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



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




let PingService = class PingService {
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
};
PingService.ctorParameters = () => [
    { type: _sound_service__WEBPACK_IMPORTED_MODULE_2__["SoundService"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
];
PingService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PingService);



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
/* harmony import */ var _raw_loader_bot_user_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./bot-user.component.html */ "jXGe");
/* harmony import */ var _application_application_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../application/application.component.css */ "aHdX");
/* harmony import */ var _developers_component_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../developers.component.css */ "TiMe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_authentication_sign_up_username_validators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/authentication/sign-up/username.validators */ "IrsS");
/* harmony import */ var src_app_dashboard_components_save_changes_save_changes_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/dashboard/components/save-changes/save-changes.component */ "qigX");
/* harmony import */ var src_app_services_developers_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/developers.service */ "RXH7");
/* harmony import */ var src_app_services_sound_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/sound.service */ "V9p5");
/* harmony import */ var src_app_services_ws_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/ws.service */ "Swid");
/* harmony import */ var src_app_types_entity_types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/types/entity-types */ "h8Xa");














let BotUserComponent = class BotUserComponent {
    constructor(route, saveChanges, service, sounds, ws, usernameValidators) {
        this.route = route;
        this.saveChanges = saveChanges;
        this.service = service;
        this.sounds = sounds;
        this.ws = ws;
        this.usernameValidators = usernameValidators;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            avatarURL: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(src_app_types_entity_types__WEBPACK_IMPORTED_MODULE_13__["patterns"].username),
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
            .openFromComponent(src_app_dashboard_components_save_changes_save_changes_component__WEBPACK_IMPORTED_MODULE_9__["SaveChangesComponent"])
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
};
BotUserComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] },
    { type: src_app_services_developers_service__WEBPACK_IMPORTED_MODULE_10__["DevelopersService"] },
    { type: src_app_services_sound_service__WEBPACK_IMPORTED_MODULE_11__["SoundService"] },
    { type: src_app_services_ws_service__WEBPACK_IMPORTED_MODULE_12__["WSService"] },
    { type: src_app_authentication_sign_up_username_validators__WEBPACK_IMPORTED_MODULE_8__["UsernameValidators"] }
];
BotUserComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-bot-user',
        template: _raw_loader_bot_user_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_application_application_component_css__WEBPACK_IMPORTED_MODULE_2__["default"], _developers_component_css__WEBPACK_IMPORTED_MODULE_3__["default"]]
    })
], BotUserComponent);



/***/ }),

/***/ "TgTN":
/*!*************************************************************!*\
  !*** ./src/app/utils/coming-soon/coming-soon.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1 {\n  z-index: 1;\n}\n\n.main {\n  margin-top: 27.5vh;\n  padding-top: 25vh;\n  height: 90vh;\n\n  background-image: \n    linear-gradient(\n      to bottom,\n      var(--background-secondary),\n      var(--background-tertiary) 50%\n    );\n}\n\nwaves {\n  position: absolute;\n  top: 30vh;\n  width: 100vw;\n  z-index: -1;\n}\n\napp-lighthouse {\n  top: 7.5vh;\n  right: 50%;\n  transform: scale(.75);\n  position: absolute !important;\n\n  height: 100px;\n  width: 100px;\n}\n\napp-submarine {\n  position: absolute;\n  bottom: 15vh;\n  transform: scale(0.5);\n\n  -webkit-animation: moveLeft 150s infinite;\n\n          animation: moveLeft 150s infinite;\n}\n\n@-webkit-keyframes moveLeft {\n  0% {\n    left: 90%;\n  }\n  100% {\n    left: 10%;\n  }\n}\n\n@keyframes moveLeft {\n  0% {\n    left: 90%;\n  }\n  100% {\n    left: 10%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbWluZy1zb29uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFlBQVk7O0VBRVo7Ozs7O0tBS0c7QUFDTDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFVBQVU7RUFDVixVQUFVO0VBQ1YscUJBQXFCO0VBQ3JCLDZCQUE2Qjs7RUFFN0IsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1oscUJBQXFCOztFQUVyQix5Q0FBaUM7O1VBQWpDLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFO0lBQ0UsU0FBUztFQUNYO0VBQ0E7SUFDRSxTQUFTO0VBQ1g7QUFDRjs7QUFQQTtFQUNFO0lBQ0UsU0FBUztFQUNYO0VBQ0E7SUFDRSxTQUFTO0VBQ1g7QUFDRiIsImZpbGUiOiJjb21pbmctc29vbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xuICB6LWluZGV4OiAxO1xufVxuXG4ubWFpbiB7XG4gIG1hcmdpbi10b3A6IDI3LjV2aDtcbiAgcGFkZGluZy10b3A6IDI1dmg7XG4gIGhlaWdodDogOTB2aDtcblxuICBiYWNrZ3JvdW5kLWltYWdlOiBcbiAgICBsaW5lYXItZ3JhZGllbnQoXG4gICAgICB0byBib3R0b20sXG4gICAgICB2YXIoLS1iYWNrZ3JvdW5kLXNlY29uZGFyeSksXG4gICAgICB2YXIoLS1iYWNrZ3JvdW5kLXRlcnRpYXJ5KSA1MCVcbiAgICApO1xufVxuXG53YXZlcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzMHZoO1xuICB3aWR0aDogMTAwdnc7XG4gIHotaW5kZXg6IC0xO1xufVxuXG5hcHAtbGlnaHRob3VzZSB7XG4gIHRvcDogNy41dmg7XG4gIHJpZ2h0OiA1MCU7XG4gIHRyYW5zZm9ybTogc2NhbGUoLjc1KTtcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG5cbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMHB4O1xufVxuXG5hcHAtc3VibWFyaW5lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDE1dmg7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcblxuICBhbmltYXRpb246IG1vdmVMZWZ0IDE1MHMgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgbW92ZUxlZnQge1xuICAwJSB7XG4gICAgbGVmdDogOTAlO1xuICB9XG4gIDEwMCUge1xuICAgIGxlZnQ6IDEwJTtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "TiMe":
/*!***********************************************************!*\
  !*** ./src/app/pages/developers/developers.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\n  height: 32px;\n}\n\n* {\n  overflow-y: hidden !important;\n}\n\na {\n  padding: 10px;\n}\n\n.developer-sidebar {\n  background-color: var(--background-secondary);\n}\n\n.icon {\n  font-size: 64px;\n  color: var(--primary);\n  background-color: var(--background-tertiary);\n  overflow-x: hidden;\n  padding: 50px;\n}\n\n.applications button {\n  font-size: 32px;\n  padding: 16px 24px;\n}\n\n.developer-sidebar,\n.applications {\n  height: 100vh;\n  padding: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldmVsb3BlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDZDQUE2QztBQUMvQzs7QUFFQTtFQUNFLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsNENBQTRDO0VBQzVDLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLGFBQWE7RUFDYixhQUFhO0FBQ2YiLCJmaWxlIjoiZGV2ZWxvcGVycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcbiAgaGVpZ2h0OiAzMnB4O1xufVxuXG4qIHtcbiAgb3ZlcmZsb3cteTogaGlkZGVuICFpbXBvcnRhbnQ7XG59XG5cbmEge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uZGV2ZWxvcGVyLXNpZGViYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLXNlY29uZGFyeSk7XG59XG5cbi5pY29uIHtcbiAgZm9udC1zaXplOiA2NHB4O1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtdGVydGlhcnkpO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIHBhZGRpbmc6IDUwcHg7XG59XG5cbi5hcHBsaWNhdGlvbnMgYnV0dG9uIHtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBwYWRkaW5nOiAxNnB4IDI0cHg7XG59XG5cbi5kZXZlbG9wZXItc2lkZWJhcixcbi5hcHBsaWNhdGlvbnMge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBwYWRkaW5nOiAyNXB4O1xufSJdfQ== */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let PasswordValidators = class PasswordValidators {
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
};
PasswordValidators = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], PasswordValidators);



/***/ }),

/***/ "U53u":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/me/user-settings/user-settings.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-settings-sidebar\n  *ngIf=\"user\"\n  tabType=\"user\">\n  <div class=\"content\">\n    <h5 class=\"mb-4\">User Overview</h5>\n    <div class=\"row\">\n      <div class=\"col-xl-6 col-12\">\n        <div\n          routerLinkActive=\"active\"\n          class=\"user-icon round\">\n          <app-avatar-url\n            class=\"pl-2 pb-3 ml-4 mt-3\"\n            [user]=\"avatarUser\"\n            size=\"128px\"></app-avatar-url>\n        </div>\n\n        <form\n          *ngIf=\"form\"\n          #f=\"ngForm\"\n          [formGroup]=\"form\">\n          <mat-form-field appearance=\"outline\" class=\"ml-5\">\n            <mat-label>Avatar URL</mat-label>\n            <input formControlName=\"avatarURL\" type=\"url\" matInput>\n          </mat-form-field>\n\n          <mat-form-field appearance=\"outline\" class=\"ml-5\">\n            <mat-label>Username</mat-label>\n            <input formControlName=\"username\" type=\"text\" matInput>\n            <mat-hint *ngIf=\"form.get('username').pending\"><i class=\"fas fa-circle-notch fa-spin\"></i> Checking</mat-hint>\n            <mat-error *ngIf=\"form.get('username').errors?.required\">Username is required.</mat-error>\n            <mat-error *ngIf=\"form.get('username').errors?.minlength\">Username should be minimum {{ form.get('username').errors?.minlength.requiredLength }} characters.</mat-error>\n            <mat-error *ngIf=\"form.get('username').errors?.shouldBeUnique\">Username is already taken.</mat-error>\n            <mat-error *ngIf=\"form.get('username').errors?.pattern\">Username should follow the <a routerLink=\"/docs/usernames\">username rules</a>.</mat-error>\n          </mat-form-field>\n        </form>\n      </div>\n\n      <div class=\"col-lg-6 col-12\">\n        <div class=\"avatars rounded p-3\">\n          <div class=\"row\">\n            <div class=\"col-12\">\n              <h5 class=\"pl-2\">Choose an Avatar</h5>\n            </div>\n            <div\n              *ngFor=\"let name of avatarNames\"\n              class=\"col-xl-3 col-sm-4 col-12\">\n              <img (click)=\"setAvatar(name)\"\n                [src]=\"environment.endpoint + '/avatars/' + name + '.png'\" [alt]=\"name\">\n            </div>\n          </div>\n        </div>\n      </div>\n      \n      <div class=\"col-lg-6 col-12 mt-4\">\n        <h6>Message Preview</h6>\n        <message\n          [message]=\"previewMessages[0]\"\n          [avatarURL]=\"form.get('avatarURL').value\"></message>\n        <message\n          [message]=\"previewMessages[1]\"\n          [isExtra]=\"true\"\n          [avatarURL]=\"form.get('avatarURL').value\"></message>\n        <message\n          [message]=\"previewMessages[2]\"\n          [avatarURL]=\"form.get('avatarURL').value\"></message>\n      </div>\n    </div>\n\n    <hr>\n\n    <div class=\"row\">\n      <div class=\"col-lg-3 col-md-4 col-6\">    \n        <mat-form-field appearance=\"outline\" class=\"ml-3 m-2\">\n          <mat-label>Theme</mat-label>\n          <mat-select\n            [value]=\"currentTheme\"\n            (selectionChange)=\"themes.changeTheme(themeSelect.value)\"\n            #themeSelect>\n              <mat-option value=\"CHOCOLATE\">Chocolate</mat-option>\n              <mat-option value=\"CLONE\">Clone</mat-option>\n              <mat-option value=\"COSMIC\">Cosmic</mat-option>\n              <mat-option value=\"DISCORD\">Discord</mat-option>\n              <mat-option value=\"HORIZON\">Horizon (Default)</mat-option>\n              <mat-option value=\"IONIC\" selected>Ionic</mat-option>\n              <mat-option value=\"PAIN\">Pain</mat-option>\n              <mat-option value=\"TWILIGHT\">Twilight</mat-option>\n          </mat-select>\n        </mat-form-field>\n      </div>\n  \n      <div class=\"col-lg-3 col-md-4 col-6\">\n        <div class=\"pt-4\">\n          <label for=\"sfxEnabled\">Enable Sound Effects</label>\n          <mat-checkbox\n            id=\"sfxEnabled\"\n            (input)=\"toggleSounds(sfxEnabledInput.checked)\"\n            [checked]=\"sfxEnabled\"\n            class=\"ml-2\"\n            #sfxEnabledInput></mat-checkbox>\n        </div>\n      </div>\n    </div>\n  </div>\n</app-settings-sidebar>\n");

/***/ }),

/***/ "U5Eg":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/components/guild-navbar/guild-navbar.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<dashboard-navbar *ngIf=\"guild\">\n  <strong>{{ guild.name }}</strong>\n  \n  <span *ngIf=\"activeChannel\">\n    <i class=\"fas fa-chevron-right mx-2\"></i>\n    <i class=\"fas fa-hashtag text-muted pr-1\"></i>\n    <strong>{{ activeChannel.name }}</strong>\n  </span>\n\n  <div class=\"float-right\">\n    <i (click)=\"toggleMemberList.emit()\"\n      matTooltip=\"Toggle Members\"\n      class=\"fas fa-users cursor-pointer\"></i>\n  </div>\n</dashboard-navbar>");

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
/* harmony import */ var _raw_loader_auth_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./auth.component.html */ "Xix0");
/* harmony import */ var _auth_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.component.css */ "KAPb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_log_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/log.service */ "iXKo");
/* harmony import */ var _services_guild_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/guild.service */ "4bjJ");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/user.service */ "qfBg");








let AuthComponent = class AuthComponent {
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
};
AuthComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _services_guild_service__WEBPACK_IMPORTED_MODULE_6__["GuildService"] },
    { type: src_app_services_log_service__WEBPACK_IMPORTED_MODULE_5__["LogService"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] }
];
AuthComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-auth',
        template: _raw_loader_auth_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_auth_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AuthComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "Vx+w");



let SoundService = class SoundService {
    get sfxEnabled() {
        return Object(_config__WEBPACK_IMPORTED_MODULE_2__["getConfig"])('sfxEnabled');
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
};
SoundService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SoundService);



/***/ }),

/***/ "Vpfs":
/*!********************************************************!*\
  !*** ./src/app/cool/submarine/submarine.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".submarine__container {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 400px;\n  height: 200px;\n  transform: translate(-50%, -50%);\n}\n.submarine__body {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 250px;\n  height: 80px;\n  background: #e30449;\n  border-radius: 50px;\n  transform: translate(-50%, -50%);\n}\n.submarine__propeller {\n  position: absolute;\n  left: 80%;\n  top: 50%;\n  width: 30px;\n  height: 50px;\n  transform: translate(0%, -50%);\n  perspective: 600px;\n}\n.propeller__perspective {\n  width: 100%;\n  height: 100%;\n  transition: transform 1s;\n  transform-style: preserve-3d;\n  -webkit-animation: rotateInfinite 1s linear infinite;\n          animation: rotateInfinite 1s linear infinite;\n  cursor: pointer;\n}\n.submarine__propeller-parts {\n  position: absolute;\n  left: 0%;\n  width: 100%;\n  height: 100%;\n  top: 0%;\n  perspective: 1000px;\n  transform-style: preserve-3d;\n}\n.darkOne {\n  top: 0%;\n  background: #f7ac08;\n  transform: rotateY(180deg) rotateX(225deg);\n}\n.lightOne {\n  top: 0%;\n  background: #f7e349;\n  transform: rotateX(45deg);\n}\n.submarine__sail {\n  position: absolute;\n  top: 40%;\n  left: 50%;\n  width: 90px;\n  height: 50px;\n  transform: translate(-50%, -100%);\n  background: #c6003d;\n  -webkit-clip-path: polygon(0% 0%, 70% 0%, 100% 100%, 0% 100%);\n          clip-path: polygon(0% 0%, 70% 0%, 100% 100%, 0% 100%);\n}\n.submarine__sail-shadow {\n  position: absolute;\n  width: 160%;\n  height: 10%;\n  background: #a10532;\n  border-radius: 5px;\n}\n.dark1 {\n  left: 0%;\n  top: 0%;\n  transform: translate(0%, -33%);\n}\n.dark2 {\n  left: 0%;\n  top: 50%;\n}\n.light1 {\n  left: 20%;\n  top: 20%;\n  width: 50%;\n  background: #ef689e;\n}\n.submarine__window {\n  width: 25px;\n  height: 25px;\n  border-radius: 100%;\n  background-image: linear-gradient(45deg, #c9e5d9, #fff);\n  border: 8px solid #a10532;\n  z-index: 10;\n  -webkit-animation: shadow-change 1s linear infinite;\n          animation: shadow-change 1s linear infinite;\n}\n.one, .two {\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n.one {\n  left: 40%;\n}\n.two {\n  left: 20%;\n}\n.submarine__shadow-dark {\n  position: absolute;\n  left: 70%;\n  top: 50%;\n  width: 70px;\n  height: 10px;\n  border-radius: 5px;\n  transform: translate(-50%, -50%);\n  background: #a10532;\n}\n.submarine__shadow-light {\n  position: absolute;\n  left: 35%;\n  top: 13%;\n  width: 100px;\n  height: 6px;\n  border-radius: 5px;\n  transform: translate(-50%, -50%);\n  background: #ef689e;\n}\n.submarine__shadow-arcLight {\n  position: absolute;\n  top: 65%;\n  left: 80%;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background: #ef689e;\n}\n.submarine__periscope {\n  position: absolute;\n  top: 0%;\n  left: 40%;\n  width: 20px;\n  height: 50px;\n  border-right: 10px solid #e92d77;\n  border-top: 10px solid #c6003d;\n  border-left: 0px solid transparent;\n  border-bottom: 0px solid transparent;\n  border-top-right-radius: 10px;\n}\n.submarine__periscope-glass {\n  position: absolute;\n  left: 40%;\n  top: 0%;\n  width: 5px;\n  height: 15px;\n  background: #f7ac08;\n  transform: translate(-50%, -15%);\n}\n.light {\n  position: absolute;\n  top: 0%;\n  left: 0%;\n  width: 500px;\n  height: 100px;\n  background: linear-gradient(to left, #817e97, #130560);\n /* The points are: centered top, left bottom, right bottom */\n  -webkit-clip-path: polygon(0% 0%, 50% 45%, 50% 55%, 0% 100%);\n          clip-path: polygon(0% 0%, 50% 45%, 50% 55%, 0% 100%);\n  transform: translate(-18%, -45%);\n}\n.bubbles__container {\n  position: absolute;\n  top: 50%;\n  left: 55%;\n  width: 100px;\n  height: 50px;\n  transform: translate(100%, -50%);\n}\n.bubbles {\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  border-radius: 100%;\n  left: 5%;\n  top: 5%;\n  background: #fff;\n  opacity: 0.8;\n}\n.bubble-1 {\n  top: 15%;\n  left: 1%;\n  opacity: 0;\n  -webkit-animation: move-right 1s infinite linear;\n          animation: move-right 1s infinite linear;\n  -webkit-animation-delay: 0.25s;\n          animation-delay: 0.25s;\n}\n.bubble-2 {\n  top: 30%;\n  left: 1%;\n  opacity: 0;\n  -webkit-animation: move-right 1s infinite linear;\n          animation: move-right 1s infinite linear;\n  -webkit-animation-delay: 0.5s;\n          animation-delay: 0.5s;\n}\n.bubble-3 {\n  top: 45%;\n  left: 1%;\n  opacity: 0;\n  -webkit-animation: move-right 1s infinite linear;\n          animation: move-right 1s infinite linear;\n  -webkit-animation-delay: 0.75s;\n          animation-delay: 0.75s;\n}\n.bubble-4 {\n  top: 60%;\n  left: 1%;\n  opacity: 0;\n  -webkit-animation: move-right 1s infinite linear;\n          animation: move-right 1s infinite linear;\n  -webkit-animation-delay: 1s;\n          animation-delay: 1s;\n}\n.ground__container {\n  position: absolute;\n  top: 75%;\n  left: 0%;\n  width: 100%;\n  height: 25%;\n  background: #08003b;\n  margin-top: 20px;\n}\n.ground1 {\n  top: 75%;\n  height: 100%;\n  background: #0c0051;\n}\n.ground2 {\n  position: absolute;\n  top: 35%;\n  width: 100%;\n  height: 100%;\n  background: #08003b;\n}\n.ground span {\n  position: absolute;\n  width: 60px;\n  height: 60px;\n  border-radius: 100%;\n}\n.ground1 span {\n  background: #0c0051;\n}\n.ground2 span {\n  background: #08003b;\n  width: 80px;\n  height: 80px;\n  border-radius: 100%;\n  transform: translateY(30%);\n}\n.up-1 {\n  left: 0%;\n  top: -2px;\n  -webkit-animation: moveThegroundRight 3s infinite linear;\n          animation: moveThegroundRight 3s infinite linear;\n}\n.up-2 {\n  left: -10%;\n  top: -4px;\n  -webkit-animation: moveThegroundRight 4s infinite linear;\n          animation: moveThegroundRight 4s infinite linear;\n}\n.up-3 {\n  left: -20%;\n  top: -6px;\n  -webkit-animation: moveThegroundRight 5s infinite linear;\n          animation: moveThegroundRight 5s infinite linear;\n}\n.up-4 {\n  left: -30%;\n  top: -8px;\n  -webkit-animation: moveThegroundRight 6s infinite linear;\n          animation: moveThegroundRight 6s infinite linear;\n}\n.up-5 {\n  left: -40%;\n  top: -10px;\n  -webkit-animation: moveThegroundRight 7s infinite linear;\n          animation: moveThegroundRight 7s infinite linear;\n}\n.up-6 {\n  left: -50%;\n  top: -12px;\n  -webkit-animation: moveThegroundRight 8s infinite linear;\n          animation: moveThegroundRight 8s infinite linear;\n}\n.up-7 {\n  left: -60%;\n  top: -14px;\n  -webkit-animation: moveThegroundRight 9s infinite linear;\n          animation: moveThegroundRight 9s infinite linear;\n}\n.up-8 {\n  left: -70%;\n  top: -16px;\n  -webkit-animation: moveThegroundRight 10s infinite linear;\n          animation: moveThegroundRight 10s infinite linear;\n}\n.up-9 {\n  left: -80%;\n  top: -18px;\n  -webkit-animation: moveThegroundRight 11s infinite linear;\n          animation: moveThegroundRight 11s infinite linear;\n}\n.up-10 {\n  left: -90%;\n  top: -20px;\n  -webkit-animation: moveThegroundRight 12s infinite linear;\n          animation: moveThegroundRight 12s infinite linear;\n}\n.up-11 {\n  left: -100%;\n  top: -22px;\n  -webkit-animation: moveThegroundRight 13s infinite linear;\n          animation: moveThegroundRight 13s infinite linear;\n}\n.up-12 {\n  left: -110%;\n  top: -24px;\n  -webkit-animation: moveThegroundRight 14s infinite linear;\n          animation: moveThegroundRight 14s infinite linear;\n}\n.up-13 {\n  left: -120%;\n  top: -26px;\n  -webkit-animation: moveThegroundRight 15s infinite linear;\n          animation: moveThegroundRight 15s infinite linear;\n}\n.up-14 {\n  left: -130%;\n  top: -28px;\n  -webkit-animation: moveThegroundRight 16s infinite linear;\n          animation: moveThegroundRight 16s infinite linear;\n}\n.up-15 {\n  left: -140%;\n  top: -30px;\n  -webkit-animation: moveThegroundRight 17s infinite linear;\n          animation: moveThegroundRight 17s infinite linear;\n}\n.up-16 {\n  left: -150%;\n  top: -32px;\n  -webkit-animation: moveThegroundRight 18s infinite linear;\n          animation: moveThegroundRight 18s infinite linear;\n}\n.up-17 {\n  left: -160%;\n  top: -34px;\n  -webkit-animation: moveThegroundRight 19s infinite linear;\n          animation: moveThegroundRight 19s infinite linear;\n}\n.up-18 {\n  left: -170%;\n  top: -36px;\n  -webkit-animation: moveThegroundRight 20s infinite linear;\n          animation: moveThegroundRight 20s infinite linear;\n}\n.up-19 {\n  left: -180%;\n  top: -38px;\n  -webkit-animation: moveThegroundRight 21s infinite linear;\n          animation: moveThegroundRight 21s infinite linear;\n}\n.up-20 {\n  left: -190%;\n  top: -40px;\n  -webkit-animation: moveThegroundRight 22s infinite linear;\n          animation: moveThegroundRight 22s infinite linear;\n}\n@-webkit-keyframes shadow-change {\n  0%, 100% {\n    background-image: linear-gradient(45deg, #c9e5d9 0%, #c9e5d9 20%, #fff 21%, #fff 39%, #c9e5d9 40%, #fff 41%, #fff 59%, #c9e5d9 60%);\n }\n  20% {\n    background-image: linear-gradient(45deg, #c9e5d9 20%, #c9e5d9 40%, #fff 41%, #fff 59%, #c9e5d9 60%, #fff 61%, #fff 79%, #c9e5d9 80%);\n }\n  40% {\n    background-image: linear-gradient(45deg, #c9e5d9 40%, #c9e5d9 60%, #fff 61%, #fff 79%, #c9e5d9 80%, #fff 81%, #fff 99%, #c9e5d9 0%);\n }\n  60% {\n    background-image: linear-gradient(45deg, #c9e5d9 60%, #c9e5d9 80%, #fff 81%, #fff 99%, #c9e5d9 0%, #fff 1%, #fff 19%, #c9e5d9 20%);\n }\n  80% {\n    background-image: linear-gradient(45deg, #c9e5d9 80%, #c9e5d9 0%, #fff 1%, #fff 19%, #c9e5d9 20%, #fff 21%, #fff 39%, #c9e5d9 40%);\n }\n}\n@keyframes shadow-change {\n  0%, 100% {\n    background-image: linear-gradient(45deg, #c9e5d9 0%, #c9e5d9 20%, #fff 21%, #fff 39%, #c9e5d9 40%, #fff 41%, #fff 59%, #c9e5d9 60%);\n }\n  20% {\n    background-image: linear-gradient(45deg, #c9e5d9 20%, #c9e5d9 40%, #fff 41%, #fff 59%, #c9e5d9 60%, #fff 61%, #fff 79%, #c9e5d9 80%);\n }\n  40% {\n    background-image: linear-gradient(45deg, #c9e5d9 40%, #c9e5d9 60%, #fff 61%, #fff 79%, #c9e5d9 80%, #fff 81%, #fff 99%, #c9e5d9 0%);\n }\n  60% {\n    background-image: linear-gradient(45deg, #c9e5d9 60%, #c9e5d9 80%, #fff 81%, #fff 99%, #c9e5d9 0%, #fff 1%, #fff 19%, #c9e5d9 20%);\n }\n  80% {\n    background-image: linear-gradient(45deg, #c9e5d9 80%, #c9e5d9 0%, #fff 1%, #fff 19%, #c9e5d9 20%, #fff 21%, #fff 39%, #c9e5d9 40%);\n }\n}\n@-webkit-keyframes move-right {\n  0% {\n    opacity: 0;\n }\n  10% {\n    opacity: 0.4;\n    transform: translate(10%, 10%);\n }\n  50% {\n    opacity: 0.2;\n    transform: translate(450%, 25%);\n }\n  80% {\n    opacity: 0;\n    transform: translateX(555%);\n }\n  100% {\n    opacity: 0;\n    left: 0%;\n    top: 0%;\n }\n}\n@keyframes move-right {\n  0% {\n    opacity: 0;\n }\n  10% {\n    opacity: 0.4;\n    transform: translate(10%, 10%);\n }\n  50% {\n    opacity: 0.2;\n    transform: translate(450%, 25%);\n }\n  80% {\n    opacity: 0;\n    transform: translateX(555%);\n }\n  100% {\n    opacity: 0;\n    left: 0%;\n    top: 0%;\n }\n}\n@-webkit-keyframes rotateInfinite {\n  0% {\n    transform: rotateX(0deg);\n }\n  50% {\n    transform: rotateX(180deg);\n }\n  100% {\n    transform: rotateX(360deg);\n }\n}\n@keyframes rotateInfinite {\n  0% {\n    transform: rotateX(0deg);\n }\n  50% {\n    transform: rotateX(180deg);\n }\n  100% {\n    transform: rotateX(360deg);\n }\n}\n@-webkit-keyframes moveThegroundRight {\n  90% {\n    opacity: 1;\n    left: 100%;\n }\n  95%, 100% {\n    left: 1050%;\n    opacity: 0;\n }\n}\n@keyframes moveThegroundRight {\n  90% {\n    opacity: 1;\n    left: 100%;\n }\n  95%, 100% {\n    left: 1050%;\n    opacity: 0;\n }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1Ym1hcmluZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsWUFBWTtFQUNaLGFBQWE7RUFDYixnQ0FBZ0M7QUFDbEM7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULFlBQVk7RUFDWixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixnQ0FBZ0M7QUFDbEM7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsUUFBUTtFQUNSLFdBQVc7RUFDWCxZQUFZO0VBQ1osOEJBQThCO0VBQzlCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsNEJBQTRCO0VBQzVCLG9EQUE0QztVQUE1Qyw0Q0FBNEM7RUFDNUMsZUFBZTtBQUNqQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixXQUFXO0VBQ1gsWUFBWTtFQUNaLE9BQU87RUFDUCxtQkFBbUI7RUFDbkIsNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSxPQUFPO0VBQ1AsbUJBQW1CO0VBQ25CLDBDQUEwQztBQUM1QztBQUNBO0VBQ0UsT0FBTztFQUNQLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZO0VBQ1osaUNBQWlDO0VBQ2pDLG1CQUFtQjtFQUNuQiw2REFBcUQ7VUFBckQscURBQXFEO0FBQ3ZEO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxRQUFRO0VBQ1IsT0FBTztFQUNQLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsUUFBUTtFQUNSLFFBQVE7QUFDVjtBQUNBO0VBQ0UsU0FBUztFQUNULFFBQVE7RUFDUixVQUFVO0VBQ1YsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix1REFBdUQ7RUFDdkQseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxtREFBMkM7VUFBM0MsMkNBQTJDO0FBQzdDO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLGdDQUFnQztBQUNsQztBQUNBO0VBQ0UsU0FBUztBQUNYO0FBQ0E7RUFDRSxTQUFTO0FBQ1g7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsUUFBUTtFQUNSLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdDQUFnQztFQUNoQyxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsUUFBUTtFQUNSLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGdDQUFnQztFQUNoQyxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7RUFDWixnQ0FBZ0M7RUFDaEMsOEJBQThCO0VBQzlCLGtDQUFrQztFQUNsQyxvQ0FBb0M7RUFDcEMsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULE9BQU87RUFDUCxVQUFVO0VBQ1YsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixnQ0FBZ0M7QUFDbEM7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsUUFBUTtFQUNSLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0RBQXNEO0NBQ3ZELDREQUE0RDtFQUMzRCw0REFBb0Q7VUFBcEQsb0RBQW9EO0VBQ3BELGdDQUFnQztBQUNsQztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsWUFBWTtFQUNaLFlBQVk7RUFDWixnQ0FBZ0M7QUFDbEM7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixRQUFRO0VBQ1IsT0FBTztFQUNQLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLFFBQVE7RUFDUixRQUFRO0VBQ1IsVUFBVTtFQUNWLGdEQUF3QztVQUF4Qyx3Q0FBd0M7RUFDeEMsOEJBQXNCO1VBQXRCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsUUFBUTtFQUNSLFFBQVE7RUFDUixVQUFVO0VBQ1YsZ0RBQXdDO1VBQXhDLHdDQUF3QztFQUN4Qyw2QkFBcUI7VUFBckIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxRQUFRO0VBQ1IsUUFBUTtFQUNSLFVBQVU7RUFDVixnREFBd0M7VUFBeEMsd0NBQXdDO0VBQ3hDLDhCQUFzQjtVQUF0QixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLFFBQVE7RUFDUixRQUFRO0VBQ1IsVUFBVTtFQUNWLGdEQUF3QztVQUF4Qyx3Q0FBd0M7RUFDeEMsMkJBQW1CO1VBQW5CLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixRQUFRO0VBQ1IsV0FBVztFQUNYLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxRQUFRO0VBQ1IsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQiwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLFFBQVE7RUFDUixTQUFTO0VBQ1Qsd0RBQWdEO1VBQWhELGdEQUFnRDtBQUNsRDtBQUNBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCx3REFBZ0Q7VUFBaEQsZ0RBQWdEO0FBQ2xEO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULHdEQUFnRDtVQUFoRCxnREFBZ0Q7QUFDbEQ7QUFDQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1Qsd0RBQWdEO1VBQWhELGdEQUFnRDtBQUNsRDtBQUNBO0VBQ0UsVUFBVTtFQUNWLFVBQVU7RUFDVix3REFBZ0Q7VUFBaEQsZ0RBQWdEO0FBQ2xEO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsVUFBVTtFQUNWLHdEQUFnRDtVQUFoRCxnREFBZ0Q7QUFDbEQ7QUFDQTtFQUNFLFVBQVU7RUFDVixVQUFVO0VBQ1Ysd0RBQWdEO1VBQWhELGdEQUFnRDtBQUNsRDtBQUNBO0VBQ0UsVUFBVTtFQUNWLFVBQVU7RUFDVix5REFBaUQ7VUFBakQsaURBQWlEO0FBQ25EO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsVUFBVTtFQUNWLHlEQUFpRDtVQUFqRCxpREFBaUQ7QUFDbkQ7QUFDQTtFQUNFLFVBQVU7RUFDVixVQUFVO0VBQ1YseURBQWlEO1VBQWpELGlEQUFpRDtBQUNuRDtBQUNBO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVix5REFBaUQ7VUFBakQsaURBQWlEO0FBQ25EO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLHlEQUFpRDtVQUFqRCxpREFBaUQ7QUFDbkQ7QUFDQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1YseURBQWlEO1VBQWpELGlEQUFpRDtBQUNuRDtBQUNBO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVix5REFBaUQ7VUFBakQsaURBQWlEO0FBQ25EO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLHlEQUFpRDtVQUFqRCxpREFBaUQ7QUFDbkQ7QUFDQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1YseURBQWlEO1VBQWpELGlEQUFpRDtBQUNuRDtBQUNBO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVix5REFBaUQ7VUFBakQsaURBQWlEO0FBQ25EO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLHlEQUFpRDtVQUFqRCxpREFBaUQ7QUFDbkQ7QUFDQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1YseURBQWlEO1VBQWpELGlEQUFpRDtBQUNuRDtBQUNBO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVix5REFBaUQ7VUFBakQsaURBQWlEO0FBQ25EO0FBQ0E7RUFDRTtJQUNFLG1JQUFtSTtDQUN0STtFQUNDO0lBQ0Usb0lBQW9JO0NBQ3ZJO0VBQ0M7SUFDRSxtSUFBbUk7Q0FDdEk7RUFDQztJQUNFLGtJQUFrSTtDQUNySTtFQUNDO0lBQ0Usa0lBQWtJO0NBQ3JJO0FBQ0Q7QUFoQkE7RUFDRTtJQUNFLG1JQUFtSTtDQUN0STtFQUNDO0lBQ0Usb0lBQW9JO0NBQ3ZJO0VBQ0M7SUFDRSxtSUFBbUk7Q0FDdEk7RUFDQztJQUNFLGtJQUFrSTtDQUNySTtFQUNDO0lBQ0Usa0lBQWtJO0NBQ3JJO0FBQ0Q7QUFDQTtFQUNFO0lBQ0UsVUFBVTtDQUNiO0VBQ0M7SUFDRSxZQUFZO0lBQ1osOEJBQThCO0NBQ2pDO0VBQ0M7SUFDRSxZQUFZO0lBQ1osK0JBQStCO0NBQ2xDO0VBQ0M7SUFDRSxVQUFVO0lBQ1YsMkJBQTJCO0NBQzlCO0VBQ0M7SUFDRSxVQUFVO0lBQ1YsUUFBUTtJQUNSLE9BQU87Q0FDVjtBQUNEO0FBckJBO0VBQ0U7SUFDRSxVQUFVO0NBQ2I7RUFDQztJQUNFLFlBQVk7SUFDWiw4QkFBOEI7Q0FDakM7RUFDQztJQUNFLFlBQVk7SUFDWiwrQkFBK0I7Q0FDbEM7RUFDQztJQUNFLFVBQVU7SUFDViwyQkFBMkI7Q0FDOUI7RUFDQztJQUNFLFVBQVU7SUFDVixRQUFRO0lBQ1IsT0FBTztDQUNWO0FBQ0Q7QUFDQTtFQUNFO0lBQ0Usd0JBQXdCO0NBQzNCO0VBQ0M7SUFDRSwwQkFBMEI7Q0FDN0I7RUFDQztJQUNFLDBCQUEwQjtDQUM3QjtBQUNEO0FBVkE7RUFDRTtJQUNFLHdCQUF3QjtDQUMzQjtFQUNDO0lBQ0UsMEJBQTBCO0NBQzdCO0VBQ0M7SUFDRSwwQkFBMEI7Q0FDN0I7QUFDRDtBQUNBO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsVUFBVTtDQUNiO0VBQ0M7SUFDRSxXQUFXO0lBQ1gsVUFBVTtDQUNiO0FBQ0Q7QUFUQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLFVBQVU7Q0FDYjtFQUNDO0lBQ0UsV0FBVztJQUNYLFVBQVU7Q0FDYjtBQUNEIiwiZmlsZSI6InN1Ym1hcmluZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN1Ym1hcmluZV9fY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB3aWR0aDogNDAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuLnN1Ym1hcmluZV9fYm9keSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgd2lkdGg6IDI1MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIGJhY2tncm91bmQ6ICNlMzA0NDk7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuLnN1Ym1hcmluZV9fcHJvcGVsbGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA4MCU7XG4gIHRvcDogNTAlO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XG4gIHBlcnNwZWN0aXZlOiA2MDBweDtcbn1cbi5wcm9wZWxsZXJfX3BlcnNwZWN0aXZlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzO1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICBhbmltYXRpb246IHJvdGF0ZUluZmluaXRlIDFzIGxpbmVhciBpbmZpbml0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnN1Ym1hcmluZV9fcHJvcGVsbGVyLXBhcnRzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAwJTtcbiAgcGVyc3BlY3RpdmU6IDEwMDBweDtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbn1cbi5kYXJrT25lIHtcbiAgdG9wOiAwJTtcbiAgYmFja2dyb3VuZDogI2Y3YWMwODtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZykgcm90YXRlWCgyMjVkZWcpO1xufVxuLmxpZ2h0T25lIHtcbiAgdG9wOiAwJTtcbiAgYmFja2dyb3VuZDogI2Y3ZTM0OTtcbiAgdHJhbnNmb3JtOiByb3RhdGVYKDQ1ZGVnKTtcbn1cbi5zdWJtYXJpbmVfX3NhaWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDAlO1xuICBsZWZ0OiA1MCU7XG4gIHdpZHRoOiA5MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0xMDAlKTtcbiAgYmFja2dyb3VuZDogI2M2MDAzZDtcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDAlIDAlLCA3MCUgMCUsIDEwMCUgMTAwJSwgMCUgMTAwJSk7XG59XG4uc3VibWFyaW5lX19zYWlsLXNoYWRvdyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDE2MCU7XG4gIGhlaWdodDogMTAlO1xuICBiYWNrZ3JvdW5kOiAjYTEwNTMyO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uZGFyazEge1xuICBsZWZ0OiAwJTtcbiAgdG9wOiAwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC0zMyUpO1xufVxuLmRhcmsyIHtcbiAgbGVmdDogMCU7XG4gIHRvcDogNTAlO1xufVxuLmxpZ2h0MSB7XG4gIGxlZnQ6IDIwJTtcbiAgdG9wOiAyMCU7XG4gIHdpZHRoOiA1MCU7XG4gIGJhY2tncm91bmQ6ICNlZjY4OWU7XG59XG4uc3VibWFyaW5lX193aW5kb3cge1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNjOWU1ZDksICNmZmYpO1xuICBib3JkZXI6IDhweCBzb2xpZCAjYTEwNTMyO1xuICB6LWluZGV4OiAxMDtcbiAgYW5pbWF0aW9uOiBzaGFkb3ctY2hhbmdlIDFzIGxpbmVhciBpbmZpbml0ZTtcbn1cbi5vbmUsIC50d28ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbi5vbmUge1xuICBsZWZ0OiA0MCU7XG59XG4udHdvIHtcbiAgbGVmdDogMjAlO1xufVxuLnN1Ym1hcmluZV9fc2hhZG93LWRhcmsge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDcwJTtcbiAgdG9wOiA1MCU7XG4gIHdpZHRoOiA3MHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGJhY2tncm91bmQ6ICNhMTA1MzI7XG59XG4uc3VibWFyaW5lX19zaGFkb3ctbGlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDM1JTtcbiAgdG9wOiAxMyU7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiA2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGJhY2tncm91bmQ6ICNlZjY4OWU7XG59XG4uc3VibWFyaW5lX19zaGFkb3ctYXJjTGlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNjUlO1xuICBsZWZ0OiA4MCU7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogI2VmNjg5ZTtcbn1cbi5zdWJtYXJpbmVfX3BlcmlzY29wZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwJTtcbiAgbGVmdDogNDAlO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmlnaHQ6IDEwcHggc29saWQgI2U5MmQ3NztcbiAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCAjYzYwMDNkO1xuICBib3JkZXItbGVmdDogMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiAwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xufVxuLnN1Ym1hcmluZV9fcGVyaXNjb3BlLWdsYXNzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA0MCU7XG4gIHRvcDogMCU7XG4gIHdpZHRoOiA1cHg7XG4gIGhlaWdodDogMTVweDtcbiAgYmFja2dyb3VuZDogI2Y3YWMwODtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTE1JSk7XG59XG4ubGlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMCU7XG4gIGxlZnQ6IDAlO1xuICB3aWR0aDogNTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjODE3ZTk3LCAjMTMwNTYwKTtcbiAvKiBUaGUgcG9pbnRzIGFyZTogY2VudGVyZWQgdG9wLCBsZWZ0IGJvdHRvbSwgcmlnaHQgYm90dG9tICovXG4gIGNsaXAtcGF0aDogcG9seWdvbigwJSAwJSwgNTAlIDQ1JSwgNTAlIDU1JSwgMCUgMTAwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xOCUsIC00NSUpO1xufVxuLmJ1YmJsZXNfX2NvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDU1JTtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwMCUsIC01MCUpO1xufVxuLmJ1YmJsZXMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGxlZnQ6IDUlO1xuICB0b3A6IDUlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBvcGFjaXR5OiAwLjg7XG59XG4uYnViYmxlLTEge1xuICB0b3A6IDE1JTtcbiAgbGVmdDogMSU7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogbW92ZS1yaWdodCAxcyBpbmZpbml0ZSBsaW5lYXI7XG4gIGFuaW1hdGlvbi1kZWxheTogMC4yNXM7XG59XG4uYnViYmxlLTIge1xuICB0b3A6IDMwJTtcbiAgbGVmdDogMSU7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogbW92ZS1yaWdodCAxcyBpbmZpbml0ZSBsaW5lYXI7XG4gIGFuaW1hdGlvbi1kZWxheTogMC41cztcbn1cbi5idWJibGUtMyB7XG4gIHRvcDogNDUlO1xuICBsZWZ0OiAxJTtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBtb3ZlLXJpZ2h0IDFzIGluZmluaXRlIGxpbmVhcjtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjc1cztcbn1cbi5idWJibGUtNCB7XG4gIHRvcDogNjAlO1xuICBsZWZ0OiAxJTtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBtb3ZlLXJpZ2h0IDFzIGluZmluaXRlIGxpbmVhcjtcbiAgYW5pbWF0aW9uLWRlbGF5OiAxcztcbn1cbi5ncm91bmRfX2NvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA3NSU7XG4gIGxlZnQ6IDAlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNSU7XG4gIGJhY2tncm91bmQ6ICMwODAwM2I7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4uZ3JvdW5kMSB7XG4gIHRvcDogNzUlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICMwYzAwNTE7XG59XG4uZ3JvdW5kMiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzNSU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICMwODAwM2I7XG59XG4uZ3JvdW5kIHNwYW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG59XG4uZ3JvdW5kMSBzcGFuIHtcbiAgYmFja2dyb3VuZDogIzBjMDA1MTtcbn1cbi5ncm91bmQyIHNwYW4ge1xuICBiYWNrZ3JvdW5kOiAjMDgwMDNiO1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMzAlKTtcbn1cbi51cC0xIHtcbiAgbGVmdDogMCU7XG4gIHRvcDogLTJweDtcbiAgYW5pbWF0aW9uOiBtb3ZlVGhlZ3JvdW5kUmlnaHQgM3MgaW5maW5pdGUgbGluZWFyO1xufVxuLnVwLTIge1xuICBsZWZ0OiAtMTAlO1xuICB0b3A6IC00cHg7XG4gIGFuaW1hdGlvbjogbW92ZVRoZWdyb3VuZFJpZ2h0IDRzIGluZmluaXRlIGxpbmVhcjtcbn1cbi51cC0zIHtcbiAgbGVmdDogLTIwJTtcbiAgdG9wOiAtNnB4O1xuICBhbmltYXRpb246IG1vdmVUaGVncm91bmRSaWdodCA1cyBpbmZpbml0ZSBsaW5lYXI7XG59XG4udXAtNCB7XG4gIGxlZnQ6IC0zMCU7XG4gIHRvcDogLThweDtcbiAgYW5pbWF0aW9uOiBtb3ZlVGhlZ3JvdW5kUmlnaHQgNnMgaW5maW5pdGUgbGluZWFyO1xufVxuLnVwLTUge1xuICBsZWZ0OiAtNDAlO1xuICB0b3A6IC0xMHB4O1xuICBhbmltYXRpb246IG1vdmVUaGVncm91bmRSaWdodCA3cyBpbmZpbml0ZSBsaW5lYXI7XG59XG4udXAtNiB7XG4gIGxlZnQ6IC01MCU7XG4gIHRvcDogLTEycHg7XG4gIGFuaW1hdGlvbjogbW92ZVRoZWdyb3VuZFJpZ2h0IDhzIGluZmluaXRlIGxpbmVhcjtcbn1cbi51cC03IHtcbiAgbGVmdDogLTYwJTtcbiAgdG9wOiAtMTRweDtcbiAgYW5pbWF0aW9uOiBtb3ZlVGhlZ3JvdW5kUmlnaHQgOXMgaW5maW5pdGUgbGluZWFyO1xufVxuLnVwLTgge1xuICBsZWZ0OiAtNzAlO1xuICB0b3A6IC0xNnB4O1xuICBhbmltYXRpb246IG1vdmVUaGVncm91bmRSaWdodCAxMHMgaW5maW5pdGUgbGluZWFyO1xufVxuLnVwLTkge1xuICBsZWZ0OiAtODAlO1xuICB0b3A6IC0xOHB4O1xuICBhbmltYXRpb246IG1vdmVUaGVncm91bmRSaWdodCAxMXMgaW5maW5pdGUgbGluZWFyO1xufVxuLnVwLTEwIHtcbiAgbGVmdDogLTkwJTtcbiAgdG9wOiAtMjBweDtcbiAgYW5pbWF0aW9uOiBtb3ZlVGhlZ3JvdW5kUmlnaHQgMTJzIGluZmluaXRlIGxpbmVhcjtcbn1cbi51cC0xMSB7XG4gIGxlZnQ6IC0xMDAlO1xuICB0b3A6IC0yMnB4O1xuICBhbmltYXRpb246IG1vdmVUaGVncm91bmRSaWdodCAxM3MgaW5maW5pdGUgbGluZWFyO1xufVxuLnVwLTEyIHtcbiAgbGVmdDogLTExMCU7XG4gIHRvcDogLTI0cHg7XG4gIGFuaW1hdGlvbjogbW92ZVRoZWdyb3VuZFJpZ2h0IDE0cyBpbmZpbml0ZSBsaW5lYXI7XG59XG4udXAtMTMge1xuICBsZWZ0OiAtMTIwJTtcbiAgdG9wOiAtMjZweDtcbiAgYW5pbWF0aW9uOiBtb3ZlVGhlZ3JvdW5kUmlnaHQgMTVzIGluZmluaXRlIGxpbmVhcjtcbn1cbi51cC0xNCB7XG4gIGxlZnQ6IC0xMzAlO1xuICB0b3A6IC0yOHB4O1xuICBhbmltYXRpb246IG1vdmVUaGVncm91bmRSaWdodCAxNnMgaW5maW5pdGUgbGluZWFyO1xufVxuLnVwLTE1IHtcbiAgbGVmdDogLTE0MCU7XG4gIHRvcDogLTMwcHg7XG4gIGFuaW1hdGlvbjogbW92ZVRoZWdyb3VuZFJpZ2h0IDE3cyBpbmZpbml0ZSBsaW5lYXI7XG59XG4udXAtMTYge1xuICBsZWZ0OiAtMTUwJTtcbiAgdG9wOiAtMzJweDtcbiAgYW5pbWF0aW9uOiBtb3ZlVGhlZ3JvdW5kUmlnaHQgMThzIGluZmluaXRlIGxpbmVhcjtcbn1cbi51cC0xNyB7XG4gIGxlZnQ6IC0xNjAlO1xuICB0b3A6IC0zNHB4O1xuICBhbmltYXRpb246IG1vdmVUaGVncm91bmRSaWdodCAxOXMgaW5maW5pdGUgbGluZWFyO1xufVxuLnVwLTE4IHtcbiAgbGVmdDogLTE3MCU7XG4gIHRvcDogLTM2cHg7XG4gIGFuaW1hdGlvbjogbW92ZVRoZWdyb3VuZFJpZ2h0IDIwcyBpbmZpbml0ZSBsaW5lYXI7XG59XG4udXAtMTkge1xuICBsZWZ0OiAtMTgwJTtcbiAgdG9wOiAtMzhweDtcbiAgYW5pbWF0aW9uOiBtb3ZlVGhlZ3JvdW5kUmlnaHQgMjFzIGluZmluaXRlIGxpbmVhcjtcbn1cbi51cC0yMCB7XG4gIGxlZnQ6IC0xOTAlO1xuICB0b3A6IC00MHB4O1xuICBhbmltYXRpb246IG1vdmVUaGVncm91bmRSaWdodCAyMnMgaW5maW5pdGUgbGluZWFyO1xufVxuQGtleWZyYW1lcyBzaGFkb3ctY2hhbmdlIHtcbiAgMCUsIDEwMCUge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgI2M5ZTVkOSAwJSwgI2M5ZTVkOSAyMCUsICNmZmYgMjElLCAjZmZmIDM5JSwgI2M5ZTVkOSA0MCUsICNmZmYgNDElLCAjZmZmIDU5JSwgI2M5ZTVkOSA2MCUpO1xuIH1cbiAgMjAlIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNjOWU1ZDkgMjAlLCAjYzllNWQ5IDQwJSwgI2ZmZiA0MSUsICNmZmYgNTklLCAjYzllNWQ5IDYwJSwgI2ZmZiA2MSUsICNmZmYgNzklLCAjYzllNWQ5IDgwJSk7XG4gfVxuICA0MCUge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgI2M5ZTVkOSA0MCUsICNjOWU1ZDkgNjAlLCAjZmZmIDYxJSwgI2ZmZiA3OSUsICNjOWU1ZDkgODAlLCAjZmZmIDgxJSwgI2ZmZiA5OSUsICNjOWU1ZDkgMCUpO1xuIH1cbiAgNjAlIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNjOWU1ZDkgNjAlLCAjYzllNWQ5IDgwJSwgI2ZmZiA4MSUsICNmZmYgOTklLCAjYzllNWQ5IDAlLCAjZmZmIDElLCAjZmZmIDE5JSwgI2M5ZTVkOSAyMCUpO1xuIH1cbiAgODAlIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNjOWU1ZDkgODAlLCAjYzllNWQ5IDAlLCAjZmZmIDElLCAjZmZmIDE5JSwgI2M5ZTVkOSAyMCUsICNmZmYgMjElLCAjZmZmIDM5JSwgI2M5ZTVkOSA0MCUpO1xuIH1cbn1cbkBrZXlmcmFtZXMgbW92ZS1yaWdodCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuIH1cbiAgMTAlIHtcbiAgICBvcGFjaXR5OiAwLjQ7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTAlLCAxMCUpO1xuIH1cbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAwLjI7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNDUwJSwgMjUlKTtcbiB9XG4gIDgwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTU1JSk7XG4gfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGxlZnQ6IDAlO1xuICAgIHRvcDogMCU7XG4gfVxufVxuQGtleWZyYW1lcyByb3RhdGVJbmZpbml0ZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XG4gfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpO1xuIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKDM2MGRlZyk7XG4gfVxufVxuQGtleWZyYW1lcyBtb3ZlVGhlZ3JvdW5kUmlnaHQge1xuICA5MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgbGVmdDogMTAwJTtcbiB9XG4gIDk1JSwgMTAwJSB7XG4gICAgbGVmdDogMTA1MCU7XG4gICAgb3BhY2l0eTogMDtcbiB9XG59XG4iXX0= */");

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

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"errorPopup\" class=\"rounded popup p-2\" hidden></div>\n<div id=\"successPopup\" class=\"rounded popup p-2\" hidden></div>\n\n<router-outlet></router-outlet>\n");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/utils */ "oCjk");



let TimestampPipe = class TimestampPipe {
    transform(value) {
        return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["timestamp"])(value);
    }
};
TimestampPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'timestamp'
    })
], TimestampPipe);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "Vx+w");



let ThemeService = class ThemeService {
    get defaultTheme() {
        return Object(_config__WEBPACK_IMPORTED_MODULE_2__["getConfigValue"])('theme');
    }
    changeTheme(theme) {
        Object(_config__WEBPACK_IMPORTED_MODULE_2__["setConfig"])('theme', theme);
        this.updateTheme();
    }
    updateTheme() {
        document
            .querySelector('html')
            .setAttribute('theme', Object(_config__WEBPACK_IMPORTED_MODULE_2__["getConfigValue"])('theme'));
    }
};
ThemeService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], ThemeService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_why_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./why.component.html */ "bRFE");
/* harmony import */ var _why_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./why.component.css */ "j3jg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let WhyComponent = class WhyComponent {
    constructor() { }
    ngOnInit() {
    }
};
WhyComponent.ctorParameters = () => [];
WhyComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-why',
        template: _raw_loader_why_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_why_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], WhyComponent);



/***/ }),

/***/ "Xix0":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/auth/auth.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<spinner></spinner>");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let SnakeToSentenceCasePipe = class SnakeToSentenceCasePipe {
    transform(words) {
        var _a;
        return (_a = words === null || words === void 0 ? void 0 : words.split('_').map(w => w[0] + w.slice(1).toLowerCase()).join(' ')) !== null && _a !== void 0 ? _a : '';
    }
};
SnakeToSentenceCasePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'snakeToSentenceCase'
    })
], SnakeToSentenceCasePipe);



/***/ }),

/***/ "XvCU":
/*!*******************************************************************************!*\
  !*** ./src/app/dashboard/guilds/guild-settings/invites/invites.component.css ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".side, .main, .main .content {\r\n  height: 100%;\r\n}\r\n\r\n.side {\r\n  float: left;\r\n  width: 25%;\r\n\r\n  background-color: var(--background-secondary);\r\n}\r\n\r\n.side a {\r\n  cursor: pointer;\r\n}\r\n\r\n.side .category {\r\n  color: var(--secondary);\r\n  padding-left: 5px;\r\n}\r\n\r\n.side .navbar-nav {\r\n  padding: 15px;\r\n  padding-top: 40px;\r\n}\r\n\r\n.side hr {\r\n  color: var(--font);\r\n}\r\n\r\n.main {\r\n  float: right;\r\n  width: 75%;\r\n}\r\n\r\n.main .content {\r\n  padding: 60px 40px;\r\n  width: 85%;\r\n}\r\n\r\n.main .close {\r\n  border: 1px solid var(--secondary);\r\n  color: var(--heading); \r\n\r\n  width: 48px;\r\n  height: 48px;\r\n\r\n  padding: 8px;\r\n  padding-top: 12px;\r\n}\r\n\r\n.main .close:hover {\r\n  background-color: var(--tertiary);\r\n}\r\n\r\n.main .guild-icon {\r\n  width: 100px;\r\n  height: 100px;\r\n\r\n  font-size: 40px;\r\n\r\n  color: var(--heading);\r\n  background-color: var(--primary);\r\n}\r\n\r\n.main .guild-icon span {\r\n  text-align: center;\r\n\r\n  font-size: 32px;\r\n  padding-top: 28px;\r\n\r\n  transition: all .35s;\r\n}\r\n\r\n.main .guild-icon img {    \r\n  border-radius: 50%;\r\n\r\n  transition: all .35s;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludml0ZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxVQUFVOztFQUVWLDZDQUE2QztBQUMvQzs7QUFDQTtFQUNFLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixVQUFVO0FBQ1o7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUNBO0VBQ0Usa0NBQWtDO0VBQ2xDLHFCQUFxQjs7RUFFckIsV0FBVztFQUNYLFlBQVk7O0VBRVosWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhOztFQUViLGVBQWU7O0VBRWYscUJBQXFCO0VBQ3JCLGdDQUFnQztBQUNsQzs7QUFDQTtFQUNFLGtCQUFrQjs7RUFFbEIsZUFBZTtFQUNmLGlCQUFpQjs7RUFFakIsb0JBQW9CO0FBQ3RCOztBQUNBO0VBQ0Usa0JBQWtCOztFQUVsQixvQkFBb0I7QUFDdEIiLCJmaWxlIjoiaW52aXRlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGUsIC5tYWluLCAubWFpbiAuY29udGVudCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uc2lkZSB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDI1JTtcclxuXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1zZWNvbmRhcnkpO1xyXG59XHJcbi5zaWRlIGEge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uc2lkZSAuY2F0ZWdvcnkge1xyXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xyXG4gIHBhZGRpbmctbGVmdDogNXB4O1xyXG59XHJcbi5zaWRlIC5uYXZiYXItbmF2IHtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIHBhZGRpbmctdG9wOiA0MHB4O1xyXG59XHJcbi5zaWRlIGhyIHtcclxuICBjb2xvcjogdmFyKC0tZm9udCk7XHJcbn1cclxuXHJcbi5tYWluIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgd2lkdGg6IDc1JTtcclxufVxyXG4ubWFpbiAuY29udGVudCB7XHJcbiAgcGFkZGluZzogNjBweCA0MHB4O1xyXG4gIHdpZHRoOiA4NSU7XHJcbn1cclxuLm1haW4gLmNsb3NlIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnkpO1xyXG4gIGNvbG9yOiB2YXIoLS1oZWFkaW5nKTsgXHJcblxyXG4gIHdpZHRoOiA0OHB4O1xyXG4gIGhlaWdodDogNDhweDtcclxuXHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIHBhZGRpbmctdG9wOiAxMnB4O1xyXG59XHJcbi5tYWluIC5jbG9zZTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVydGlhcnkpO1xyXG59XHJcblxyXG4ubWFpbiAuZ3VpbGQtaWNvbiB7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGhlaWdodDogMTAwcHg7XHJcblxyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuXHJcbiAgY29sb3I6IHZhcigtLWhlYWRpbmcpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xyXG59XHJcbi5tYWluIC5ndWlsZC1pY29uIHNwYW4ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgZm9udC1zaXplOiAzMnB4O1xyXG4gIHBhZGRpbmctdG9wOiAyOHB4O1xyXG5cclxuICB0cmFuc2l0aW9uOiBhbGwgLjM1cztcclxufVxyXG4ubWFpbiAuZ3VpbGQtaWNvbiBpbWcgeyAgICBcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcblxyXG4gIHRyYW5zaXRpb246IGFsbCAuMzVzO1xyXG59Il19 */");

/***/ }),

/***/ "Y0Rr":
/*!****************************************************************!*\
  !*** ./src/app/dialog/create-guild/create-guild.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtZ3VpbGQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "YgWb":
/*!*********************************************************************************!*\
  !*** ./src/app/dashboard/guilds/guild-settings/bot-list/bot-list.component.css ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\r\n  max-height: 196px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvdC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoiYm90LWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XHJcbiAgbWF4LWhlaWdodDogMTk2cHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "Yoah":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/sign-up/sign-up.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<navbar></navbar>\n<section class=\"container text-center pb-5\">\n  <div class=\"py-2 mt-5 d-none d-sm-block\"></div>\n\n  <div class=\"text-info mt-5\">\n    <i class=\"fas fa-info-circle text-info\"></i>\n    Max users have been reached for Alpha testing and sign-up may be available in the near future.\n    <br>If you cannot sign-up then this is why.\n  </div>\n\n  <form\n    #f=\"ngForm\"\n    [formGroup]=\"form\"\n    (ngSubmit)=\"signUp()\"\n    class=\"mt-5\">\n    <h2 class=\"display-4 mb-4\">Sign Up</h2>\n    <div class=\"form-group\">\n      <mat-form-field appearance=\"outline\">\n        <mat-label for=\"username\">Username</mat-label>\n        <input formControlName=\"username\"\n          id=\"username\" type=\"text\" autocomplete=\"username\" matInput>\n        <mat-hint *ngIf=\"username.pending\"><i class=\"fas fa-circle-notch fa-spin\"></i> Checking</mat-hint>\n        <mat-error *ngIf=\"username.errors?.required\">Username is required.</mat-error>\n        <mat-error *ngIf=\"username.errors?.minlength\">Username should be minimum {{ username.errors.minlength.requiredLength }} characters.</mat-error>\n        <mat-error *ngIf=\"username.errors?.shouldBeUnique\">Username is already taken.</mat-error>\n        <mat-error *ngIf=\"username.errors?.pattern\">Username should follow the <a routerLink=\"/docs/usernames\">username rules</a>.</mat-error>\n      </mat-form-field>\n    </div>\n\n    <div class=\"form-group\">\n      <mat-form-field appearance=\"outline\">\n        <mat-label for=\"password\">Password</mat-label>\n        <input formControlName=\"password\"\n          id=\"password\" type=\"password\" autocomplete=\"new-password\" matInput>\n        <mat-hint>Minimum 8 characters.</mat-hint>\n        <mat-error *ngIf=\"password.errors?.required\">Password is required.</mat-error>\n        <mat-error *ngIf=\"password.errors?.minlength\">Password should be minimum {{ password.errors.minlength.requiredLength }} characters.</mat-error>\n        <mat-error *ngIf=\"password.errors?.pattern?.requiredPattern === '/(?=.*[a-z])/gm'\">Password should include lowercase characters.</mat-error>\n        <mat-error *ngIf=\"password.errors?.pattern?.requiredPattern === '/(?=.*[A-Z])/gm'\">Password should include uppercase characters.</mat-error>\n        <mat-error *ngIf=\"password.errors?.pattern?.requiredPattern === '/(?=.*[0-9])/gm'\">Password should include numbers.</mat-error>\n        <mat-error *ngIf=\"password.errors?.pattern?.requiredPattern === '/(?=.*[!@#$%^&*])/gm'\">Password should include symbols.</mat-error>\n      </mat-form-field>\n    </div>\n\n    <div class=\"form-group\">\n      <mat-form-field appearance=\"outline\">\n        <mat-label for=\"confirmPassword\">Confirm Password</mat-label>\n        <input formControlName=\"confirmPassword\"\n          id=\"confirmPassword\" type=\"password\"  autocomplete=\"new-password\" matInput>\n        <mat-hint>Repeat password.</mat-hint>\n        <mat-error *ngIf=\"confirmPassword.errors?.required\">Confirm Password is required.</mat-error>\n      </mat-form-field>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"agreed\"></label>\n      <mat-checkbox id=\"agreed\" class=\"mr-2\" #agreed></mat-checkbox>\n      <span>I agree to the <a href=\"https://docs.accord.app/legal/alpha\">Alpha Terms</a>, <a routerLink=\"/terms\">TOS</a>, and <a routerLink=\"/privacy\">privacy policy</a>.</span>\n    </div>\n\n    <div\n      *ngIf=\"form.errors\"\n      class=\"mb-4\">\n      <span\n        *ngIf=\"form.get('confirmPassword').dirty && form.errors?.passwordMismatch\"\n        class=\"text-warning rounded alert border-warning\">Passwords should match.</span>\n    </div>\n\n    <button\n      [disabled]=\"!agreed.checked\"\n      class=\"bg-primary text-center\"\n      type=\"submit\"\n      mat-button>Sign Up</button>\n  </form>\n</section>");

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







































































let AlertErrorHandler = class AlertErrorHandler {
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
};
AlertErrorHandler = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], AlertErrorHandler);

let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
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
            _pipes_timestamp_pipe__WEBPACK_IMPORTED_MODULE_70__["TimestampPipe"],
        ],
        imports: [
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_20__["MaterialModule"],
            ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_38__["InfiniteScrollModule"],
            _ctrl_ngx_emoji_mart__WEBPACK_IMPORTED_MODULE_39__["PickerModule"]
        ],
        providers: [
            { provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ErrorHandler"], useClass: AlertErrorHandler },
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"], useClass: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ShowOnDirtyErrorStateMatcher"] },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "a332":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/developers/developers.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-3\">\n    <div class=\"developer-sidebar\">\n      <header\n        routerLink=\"/developers\"\n        class=\"cursor-pointer my-5\">\n        <img src=\"/assets/img/icon.png\" alt=\"Accord Icon\">\n        <span class=\"p-2\">Developer Dashboard</span>\n      </header>\n      \n      <nav class=\"side-nav mt-3\">\n        <a routerLinkActive=\"active\"\n          class=\"nav-link\"\n          routerLink=\"/developers\">\n          <i class=\"fas fa-code pt-2\"></i>\n          <span>Apps</span>\n        </a>\n        <a routerLinkActive=\"active\"\n          class=\"nav-link\"\n          [href]=\"environment.docsURL\"\n          target=\"#\">\n          <i class=\"fas fa-book-open pt-2\"></i>\n          <span>Docs</span>\n        </a>\n      </nav>\n    </div>\n  </div>\n\n  <div class=\"col-8\">\n    <div class=\"row mt-2\">\n      <div class=\"col-10\"></div>\n      <div class=\"col-2\">\n        <button mat-button [matMenuTriggerFor]=\"menu\" class=\"p-1\">\n          <app-avatar-url [user]=\"userService.self\"></app-avatar-url>\n          <span class=\"pl-1\">{{ userService.self.username }}</span>\n        </button>\n      </div>\n    </div>\n\n    <mat-menu #menu=\"matMenu\">\n      <button routerLink=\"/channels/@me\" mat-menu-item>\n        <i class=\"fas fa-cog\"></i> Open\n      </button>\n      <hr>\n      <button routerLink=\"/developers\" mat-menu-item>\n        <i class=\"fas fa-code\"></i> Developers\n      </button>\n      <button routerLink=\"/logout\" mat-menu-item>\n        <i class=\"fas fa-sign-out-alt\"></i> Logout\n      </button>\n    </mat-menu>\n    \n    <div class=\"applications\">\n      <header class=\"mt-5\">\n        <button\n          (click)=\"create()\"\n          class=\"float-right round bg-primary-gradient\"\n          matTooltip=\"New Application\"\n          mat-button>\n          <strong><i class=\"fas fa-plus text-light pt-2\"></i></strong>\n        </button>\n        <h1>Applications</h1>\n        <p class=\"lead\">Manage bot applications in the Accord developer dashboard.</p>\n      </header>\n      <div\n        *ngIf=\"applications; else applicationsLoading\"\n        class=\"row pt-2\">\n        <div\n          *ngFor=\"let app of applications\" class=\"col-sm-6 col-lg-3 my-2\"\n          [routerLink]=\"'/developers/applications/' + app._id\">\n          <div\n            [matTooltip]=\"app.name\"\n            class=\"icon rounded-lg cursor-pointer text-center\">{{ getAbbr(app.name) }}</div>\n        </div>\n      </div>\n    </div>\n\n    <ng-template #applicationsLoading>\n      <spinner></spinner>\n    </ng-template>\n  </div>\n</div>\n");

/***/ }),

/***/ "aHdX":
/*!************************************************************************!*\
  !*** ./src/app/pages/developers/application/application.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBsaWNhdGlvbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "aSPh":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<navbar></navbar>\r\n\r\n<header class=\"container\">\r\n  <div class=\"jumbotron\">\r\n    <h1 class=\"display-4\">Chat With Ease</h1>\r\n    <p class=\"lead\">\r\n      Seamlessly chat with friends within seconds. <br>\r\n      Accord is easy to use, and customizable.\r\n    </p>\r\n    <button routerLink=\"/login\" class=\"bg-success text-dark\" mat-button>Get Started</button>\r\n    <a href=\"#features\">\r\n      <button class=\"bg-info ml-2 text-light\" mat-button>Features</button>\r\n    </a>\r\n  </div>\r\n</header>\r\n\r\n<waves></waves>\r\n<section id=\"features\" class=\"main\">\r\n  <div class=\"container\">\r\n    <div class=\"text-center\">\r\n      <h2 class=\"display-4\">\r\n        <span class=\"text-muted\">Ditch </span>\r\n        <span class=\"text-light\">Discord</span>\r\n        <span class=\"text-secondary\">, Go </span>\r\n        <span>Accord</span>\r\n        <span class=\"text-muted\">.</span>\r\n      </h2>\r\n      <p class=\"lead\"></p>\r\n    </div>\r\n    <hr>\r\n  \r\n    <div class=\"row\">\r\n      <div class=\"mt-5 col-md-6 col-sm-12\">\r\n        <mat-card class=\"bg-transparent shadow-none\">\r\n          <img\r\n            src=\"assets/img/home/themes.webp\"\r\n            alt=\"Themes\"\r\n            mat-card-image>\r\n          <mat-card-title>\r\n            <i class=\"fas fa-paint-roller\"></i>\r\n            <span> Customize to Your <strong>Accord</strong></span>\r\n          </mat-card-title>\r\n          <mat-card-subtitle>Choose from a wide range of premade themes to customize your experience.</mat-card-subtitle>\r\n        </mat-card>\r\n      </div>\r\n    \r\n      <div class=\"mt-5 col-md-6 col-sm-12\">\r\n        <mat-card class=\"bg-transparent shadow-none\">\r\n          <img\r\n            src=\"assets/img/home/manage_guilds.webp\"\r\n            alt=\"Themes\"\r\n            mat-card-image>\r\n          <mat-card-title>\r\n            <i class=\"fas fa-hashtag\"></i> \r\n            <span> Manage Your Guilds</span>\r\n          </mat-card-title>\r\n          <mat-card-subtitle>Manage your guilds to your accord, and chat with your friends, or others.</mat-card-subtitle>\r\n        </mat-card>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <hr>\r\n\r\n  <div class=\"col-12\">\r\n    <div class=\"d-flex justify-content-center\">\r\n      <button\r\n        routerLink=\"/login\"\r\n        class=\"bg-success text-dark\"\r\n        mat-button>Get Started</button>\r\n    </div>\r\n  </div>\r\n\r\n  <app-submarine></app-submarine>\r\n</section>\r\n  \r\n<footer>\r\n  <span>&copy; 2021 accord.app</span>\r\n  <span class=\"float-right text-secondary cursor-pointer\">{{ version }}</span>\r\n</footer>");

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
/* harmony import */ var _raw_loader_invite_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./invite.component.html */ "Db/I");
/* harmony import */ var _invite_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./invite.component.css */ "QWa4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_guild_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/guild.service */ "4bjJ");
/* harmony import */ var src_app_services_invite_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/invite.service */ "s4IJ");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_app_services_ws_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/ws.service */ "Swid");









let InviteComponent = class InviteComponent {
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
};
InviteComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_guild_service__WEBPACK_IMPORTED_MODULE_5__["GuildService"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
    { type: src_app_services_invite_service__WEBPACK_IMPORTED_MODULE_6__["InviteService"] },
    { type: src_app_services_ws_service__WEBPACK_IMPORTED_MODULE_8__["WSService"] }
];
InviteComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-invite',
        template: _raw_loader_invite_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_invite_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], InviteComponent);



/***/ }),

/***/ "bH3+":
/*!************************************************************************!*\
  !*** ./src/app/dashboard/me/user-settings/user-settings.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".avatars {\r\n  max-width: 385px;\r\n  background-color: var(--background-secondary);\r\n}\r\n.avatars img {\r\n  border-radius: 10px;\r\n  max-height: 64px;\r\n  margin: 5px;\r\n\r\n  cursor: pointer;\r\n  transition: 0.3s box-shadow ease-in-out;\r\n}\r\n.avatars img:hover {\r\n  box-shadow: var(--primary) 0px 0px 3px 3px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItc2V0dGluZ3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQiw2Q0FBNkM7QUFDL0M7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsV0FBVzs7RUFFWCxlQUFlO0VBQ2YsdUNBQXVDO0FBQ3pDO0FBQ0E7RUFDRSwwQ0FBMEM7QUFDNUMiLCJmaWxlIjoidXNlci1zZXR0aW5ncy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF2YXRhcnMge1xyXG4gIG1heC13aWR0aDogMzg1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1zZWNvbmRhcnkpO1xyXG59XHJcbi5hdmF0YXJzIGltZyB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBtYXgtaGVpZ2h0OiA2NHB4O1xyXG4gIG1hcmdpbjogNXB4O1xyXG5cclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogMC4zcyBib3gtc2hhZG93IGVhc2UtaW4tb3V0O1xyXG59XHJcbi5hdmF0YXJzIGltZzpob3ZlciB7XHJcbiAgYm94LXNoYWRvdzogdmFyKC0tcHJpbWFyeSkgMHB4IDBweCAzcHggM3B4O1xyXG59Il19 */");

/***/ }),

/***/ "bRFE":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/why/why.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_channel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/channel.service */ "0xJi");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "qfBg");





let DMChannelAuthGuard = class DMChannelAuthGuard {
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
};
DMChannelAuthGuard.ctorParameters = () => [
    { type: _services_channel_service__WEBPACK_IMPORTED_MODULE_3__["ChannelService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
];
DMChannelAuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DMChannelAuthGuard);



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
/* harmony import */ var _raw_loader_verify_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./verify.component.html */ "rmd6");
/* harmony import */ var _verify_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./verify.component.css */ "RSRa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_user_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/user-auth.service */ "hZP9");







let VerifyComponent = class VerifyComponent {
    constructor(authService, route, router) {
        this.authService = authService;
        this.route = route;
        this.router = router;
        this.processing = false;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            code: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(7),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(7),
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
};
VerifyComponent.ctorParameters = () => [
    { type: src_app_services_user_auth_service__WEBPACK_IMPORTED_MODULE_6__["UserAuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
VerifyComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-verify',
        template: _raw_loader_verify_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_verify_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], VerifyComponent);



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
/* harmony import */ var _raw_loader_developers_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./developers.component.html */ "a332");
/* harmony import */ var _developers_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./developers.component.css */ "TiMe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_developers_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/developers.service */ "RXH7");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "AytR");








let DevelopersComponent = class DevelopersComponent {
    constructor(router, service, userService) {
        this.router = router;
        this.service = service;
        this.userService = userService;
        this.applications = [];
        this.environment = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"];
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
};
DevelopersComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_developers_service__WEBPACK_IMPORTED_MODULE_5__["DevelopersService"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] }
];
DevelopersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-developers',
        template: _raw_loader_developers_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_developers_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DevelopersComponent);



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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _save_changes_save_changes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save-changes/save-changes.component */ "qigX");
/* harmony import */ var _services_guild_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/guild.service */ "4bjJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_ws_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/ws.service */ "Swid");
/* harmony import */ var _services_log_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/log.service */ "iXKo");








let ModuleConfig = class ModuleConfig {
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
            yield this.guildService.init();
            this.guild = this.guildService.getCached(this.guildId);
            this.originalGuild = JSON.parse(JSON.stringify(this.guild));
            yield this.resetForm();
            this.valueChanges$ = this.form.valueChanges
                .subscribe(() => this.openSaveChanges());
        });
    }
    resetForm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.guild = JSON.parse(JSON.stringify(this.originalGuild));
            this.form = yield this.buildForm(this.guild);
        });
    }
    openSaveChanges() {
        const snackBarRef = this.saveChanges._openedSnackBarRef;
        if (!this.form.valid || snackBarRef)
            return;
        this.saveChanges$ = this.saveChanges.openFromComponent(_save_changes_save_changes_component__WEBPACK_IMPORTED_MODULE_3__["SaveChangesComponent"]).afterOpened()
            .subscribe(() => {
            const component = this.saveChanges._openedSnackBarRef.instance;
            component.onSave.subscribe(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { return yield this.submit(); }));
            component.onReset.subscribe(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { return yield this.reset(); }));
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
            catch (_a) {
                alert('An error occurred when submitting the form - check console');
            }
        });
    }
    /**
     * Reset form values, and rebuild form.
     */
    reset() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.resetForm();
            this.guild = JSON.parse(JSON.stringify(this.originalGuild));
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
};
ModuleConfig.ctorParameters = () => [
    { type: _services_guild_service__WEBPACK_IMPORTED_MODULE_4__["GuildService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
    { type: _services_ws_service__WEBPACK_IMPORTED_MODULE_6__["WSService"] },
    { type: _services_log_service__WEBPACK_IMPORTED_MODULE_7__["LogService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
ModuleConfig = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Directive"])()
], ModuleConfig);



/***/ }),

/***/ "cms+":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/guilds/guild-settings/invites/invites.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-settings-sidebar\n  tabType=\"guild\"\n  [id]=\"guild?._id\">\n  <div class=\"content\">\n    <h5 class=\"mb-4\">Invites</h5>\n    <div class=\"row\">\n      <div\n        *ngFor=\"let invite of invites\"\n        class=\"col-12\">\n        <zippy [title]=\"invite._id\">\n          <div class=\"row\">\n            <div class=\"col-md-4\">\n              <span>Created By</span>\n              <member-username [user]=\"userService.getCached(invite.inviterId)\"></member-username>              \n            </div>\n            <div class=\"col-md-2\">\n              <div><strong>Uses</strong></div>\n              <code>{{ usesString(invite) }}</code>\n            </div>\n            <div class=\"col-md-2\">\n              <div><strong>Created At</strong></div>\n              <code>{{ invite.createdAt | date:'medium' }}</code>\n            </div>\n            <div class=\"col-md-2\">\n              <div><strong>Expires</strong></div>\n              <code>{{ (invite.options.expiresAt | date) || 'Never' }}</code>\n            </div>\n            <div class=\"col-md-2\">\n              <div\n                (click)=\"delete(invite._id)\"\n                matTooltip=\"Delete\"\n                class=\"float-right\">\n                <button class=\"bg-danger\" mat-button>\n                  <i class=\"fas fa-times-circle text-light\"></i>\n                </button>\n              </div>\n            </div>\n          </div>\n        </zippy>\n      </div>\n\n      <div *ngIf=\"invites?.length <= 0\">\n        <span>\n          <i class=\"fas fa-info-circle mr-2\"></i>\n          <span>No invites created yet.</span>\n        </span>\n      </div>\n    </div>\n  </div>\n</app-settings-sidebar>");

/***/ }),

/***/ "dGeP":
/*!************************************************************************!*\
  !*** ./src/app/dashboard/guilds/member-list/member-list.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".member-list {\n  background-color: var(--background-secondary);\n\n  width: 100%;\n  height: 95vh;\n  padding-left: 10px;\n  padding-right: 16px;\n}\n.member-list .category {\n  padding-left: 10px;\n}\n.offline {\n  opacity: 0.5;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbWJlci1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2Q0FBNkM7O0VBRTdDLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoibWVtYmVyLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW1iZXItbGlzdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtc2Vjb25kYXJ5KTtcblxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA5NXZoO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG59XG4ubWVtYmVyLWxpc3QgLmNhdGVnb3J5IHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4ub2ZmbGluZSB7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "eCGk":
/*!********************************************************************!*\
  !*** ./src/app/dashboard/me/me-overview/me-overview.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".nav-link {\r\n  cursor: pointer;\r\n\r\n  padding: 0 10px;\r\n}\r\n.nav-link:hover:not(.add-friend) {\r\n  background-color: rgba(255, 255, 255, 0.025);\r\n}\r\n.nav-link.active {\r\n  background-color: rgba(255, 255, 255, 0.05);\r\n  color: var(--success) !important;\r\n}\r\n.nav-item {\r\n  margin-right: 15px;\r\n\r\n  border-radius: 5px;\r\n}\r\nbutton.send-friend-request {\r\n  background-color: var(--primary);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lLW92ZXJ2aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlOztFQUVmLGVBQWU7QUFDakI7QUFDQTtFQUNFLDRDQUE0QztBQUM5QztBQUNBO0VBQ0UsMkNBQTJDO0VBQzNDLGdDQUFnQztBQUNsQztBQUVBO0VBQ0Usa0JBQWtCOztFQUVsQixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGdDQUFnQztBQUNsQyIsImZpbGUiOiJtZS1vdmVydmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdi1saW5rIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gIHBhZGRpbmc6IDAgMTBweDtcclxufVxyXG4ubmF2LWxpbms6aG92ZXI6bm90KC5hZGQtZnJpZW5kKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAyNSk7XHJcbn1cclxuLm5hdi1saW5rLmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KTtcclxuICBjb2xvcjogdmFyKC0tc3VjY2VzcykgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5hdi1pdGVtIHtcclxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcblxyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuYnV0dG9uLnNlbmQtZnJpZW5kLXJlcXVlc3Qge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xyXG59Il19 */");

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
/* harmony import */ var _raw_loader_guild_overview_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./guild-overview.component.html */ "6Rdy");
/* harmony import */ var _guild_overview_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guild-overview.component.css */ "io1Z");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_channel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/channel.service */ "0xJi");
/* harmony import */ var _services_guild_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/guild.service */ "4bjJ");







let GuildOverviewComponent = class GuildOverviewComponent {
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
};
GuildOverviewComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_services_channel_service__WEBPACK_IMPORTED_MODULE_5__["ChannelService"] },
    { type: _services_guild_service__WEBPACK_IMPORTED_MODULE_6__["GuildService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
GuildOverviewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-guild-overview',
        template: _raw_loader_guild_overview_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_guild_overview_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], GuildOverviewComponent);



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
/* harmony import */ var _raw_loader_dm_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./dm.component.html */ "KSQI");
/* harmony import */ var _dm_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dm.component.css */ "f5eh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_channel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/channel.service */ "0xJi");






let DMComponent = class DMComponent {
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
};
DMComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_services_channel_service__WEBPACK_IMPORTED_MODULE_5__["ChannelService"] }
];
DMComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-dm',
        template: _raw_loader_dm_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_dm_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DMComponent);



/***/ }),

/***/ "f5eh":
/*!*********************************************************!*\
  !*** ./src/app/dashboard/me/dmchannel/dm.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkbS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "fAPl":
/*!************************************************************!*\
  !*** ./src/app/dialog/add-friend/add-friend.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtZnJpZW5kLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "fBlL":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/me/me-overview/me-overview.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<dashboard-sidebar>\r\n  <dashboard-navbar>\r\n    <i class=\"fas fa-user-friends pr-2\"></i>\r\n    <strong>Friends</strong>\r\n\r\n    <span class=\"mx-3 py-1\"></span>\r\n\r\n    <ul class=\"nav nav-pills float-right\">\r\n      <li class=\"nav-item\">\r\n        <a (click)=\"tab = 'ONLINE'\" \r\n          [class.active]=\"tab === 'ONLINE'\"\r\n          class=\"nav-link active\">Online</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a (click)=\"tab = 'ALL'\" \r\n          [class.active]=\"tab === 'ALL'\"\r\n          class=\"nav-link\">All</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a (click)=\"tab = 'PENDING'\" \r\n          [class.active]=\"tab === 'PENDING'\"\r\n          class=\"nav-link\">Pending</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a (click)=\"tab = 'BLOCKED'\" \r\n          [class.active]=\"tab === 'BLOCKED'\"\r\n          class=\"nav-link text-warning\">Blocked</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a (click)=\"dialog.addFriend()\"\r\n          class=\"nav-link bg-success text-dark\">Add Friend</a>\r\n      </li>\r\n    </ul>\r\n  </dashboard-navbar>\r\n\r\n  <friends-list [tab]=\"tab\"></friends-list>\r\n</dashboard-sidebar>\r\n");

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
/* harmony import */ var _raw_loader_channel_tab_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./channel-tab.component.html */ "QeHQ");
/* harmony import */ var _channel_tab_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./channel-tab.component.css */ "0RKo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_guild_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/guild.service */ "4bjJ");
/* harmony import */ var src_app_services_log_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/log.service */ "iXKo");
/* harmony import */ var src_app_services_permissions_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/permissions.service */ "tEUU");
/* harmony import */ var src_app_services_ping_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/ping.service */ "TLdK");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_app_services_ws_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/ws.service */ "Swid");











let ChannelTabComponent = class ChannelTabComponent {
    constructor(guildService, log, perms, pings, router, userService, ws) {
        this.guildService = guildService;
        this.log = log;
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
};
ChannelTabComponent.ctorParameters = () => [
    { type: src_app_services_guild_service__WEBPACK_IMPORTED_MODULE_5__["GuildService"] },
    { type: src_app_services_log_service__WEBPACK_IMPORTED_MODULE_6__["LogService"] },
    { type: src_app_services_permissions_service__WEBPACK_IMPORTED_MODULE_7__["PermissionsService"] },
    { type: src_app_services_ping_service__WEBPACK_IMPORTED_MODULE_8__["PingService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"] },
    { type: src_app_services_ws_service__WEBPACK_IMPORTED_MODULE_10__["WSService"] }
];
ChannelTabComponent.propDecorators = {
    channel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ChannelTabComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-channel-tab',
        template: _raw_loader_channel_tab_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_channel_tab_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ChannelTabComponent);



/***/ }),

/***/ "fYtv":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/logout/logout.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<spinner></spinner>");

/***/ }),

/***/ "fu0z":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/me/friends-list/friends-list.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"px-4\">\r\n  <div [ngSwitch]=\"tab\">\r\n    <div *ngSwitchCase=\"'ONLINE'\">\r\n      <div class=\"category pl-0 mb-2\">Online—{{ onlineFriends.length }}</div>\r\n      \r\n      <div *ngFor=\"let friend of onlineFriends\">\r\n        <div class=\"float-right\">\r\n          <button\r\n            [routerLink]=\"'/channels/@me/' + channelService.getDM(friend._id)?._id\"\r\n            matTooltip=\"Message\"\r\n            class=\"round px-0\" mat-button>\r\n            <i class=\"fas fa-comment-alt\"></i>\r\n          </button>\r\n          <button\r\n            matTooltip=\"Remove Friend\"\r\n            (click)=\"remove(friend._id)\"\r\n            class=\"round px-0 ml-2\" mat-button><i class=\"fas fa-times\"></i></button>\r\n        </div>\r\n        <member-username\r\n          [routerLink]=\"'/channels/@me/' + channelService.getDM(friend._id)?._id\"\r\n          [user]=\"users.getCached(friend._id)\"></member-username>\r\n      </div>\r\n      <div\r\n        *ngIf=\"users.friends.length <= 0\"\r\n        class=\"text-muted\">\r\n        <i class=\"fas fa-info-circle mr-2\"></i>\r\n        <span>No friends online.</span>\r\n      </div>  \r\n    </div>\r\n    \r\n    <div *ngSwitchCase=\"'ALL'\">\r\n      <div class=\"category pl-0 mb-2\">All—{{ users.friends.length }}</div>\r\n\r\n      <div *ngFor=\"let friend of users.friends\">\r\n        <div class=\"float-right\">\r\n          <button\r\n            [routerLink]=\"'/channels/@me/' + channelService.getDM(friend._id)?._id\"\r\n            matTooltip=\"Message\"\r\n            class=\"round px-0\" mat-button>\r\n            <i class=\"fas fa-comment-alt\"></i>\r\n          </button>\r\n          <button\r\n            matTooltip=\"Remove Friend\"\r\n            (click)=\"remove(friend._id)\"\r\n            class=\"round px-0 ml-2\" mat-button><i class=\"fas fa-times\"></i></button>\r\n        </div>\r\n        <member-username [user]=\"users.getCached(friend._id)\"></member-username>\r\n      </div>\r\n\r\n      <div\r\n        *ngIf=\"users.friends.length <= 0\"\r\n        class=\"text-muted\">\r\n        <i class=\"fas fa-info-circle mr-2\"></i>\r\n        <span>No friends here yet.</span>\r\n      </div>  \r\n    </div>\r\n     \r\n    <div *ngSwitchCase=\"'PENDING'\">\r\n      <div class=\"category pl-0 mb-2\">Pending—{{ users.friendRequests.length }}</div>\r\n\r\n      <div *ngFor=\"let friend of users.friendRequests\">\r\n        <div class=\"float-right\">\r\n          <button\r\n            *ngIf=\"!isOutgoing(friend)\"\r\n            (click)=\"add(friend.username)\"\r\n            class=\"round bg-success px-0\" mat-button>\r\n            <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\r\n          </button>\r\n\r\n          <button\r\n            (click)=\"remove(friend._id)\"\r\n            class=\"round px-0 ml-2\" mat-button>\r\n            <i class=\"fas fa-times\"></i>\r\n          </button>\r\n        </div>\r\n        \r\n        <span class=\"badge badge-secondary\">{{ isOutgoing(friend) ? 'OUTGOING' : 'INCOMING' }}</span>\r\n        <member-username\r\n          [user]=\"friend\"\r\n          [statusOverride]=\"isOutgoing(friend) ? 'Outgoing Friend Request' : 'Incoming Friend Request'\"></member-username>\r\n      </div>\r\n        \r\n      <div\r\n        *ngIf=\"users.friendRequests.length <= 0\"\r\n        class=\"text-muted\">\r\n        <i class=\"fas fa-info-circle mr-2\"></i>\r\n        <span>No friend requests sent.</span>\r\n      </div>\r\n    </div>\r\n       \r\n    <div *ngSwitchCase=\"'BLOCKED'\">\r\n      <div class=\"category pl-0 mb-2\">Blocked—{{ blockedUsers.length }}</div>\r\n\r\n      <div *ngFor=\"let user of blockedUsers\">\r\n        <div class=\"float-right\">\r\n          <i (click)=\"users.unblock(user._id)\"\r\n            matTooltip=\"Unblock\"\r\n            class=\"cursor-pointer fas fa-times-circle\"></i>\r\n        </div>\r\n        <member-username [user]=\"user\"></member-username>\r\n      </div>\r\n\r\n      <div\r\n        *ngIf=\"blockedUsers.length <= 0\"\r\n        class=\"text-muted\">\r\n        <i class=\"fas fa-info-circle mr-2\"></i>\r\n        <span>No blocked users.</span>\r\n      </div>      \r\n    </div>\r\n  </div>\r\n</div>");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_coming_soon_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./coming-soon.component.html */ "3lqB");
/* harmony import */ var _coming_soon_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./coming-soon.component.css */ "TgTN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ComingSoonComponent = class ComingSoonComponent {
    constructor() { }
    ngOnInit() {
    }
};
ComingSoonComponent.ctorParameters = () => [];
ComingSoonComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-coming-soon',
        template: _raw_loader_coming_soon_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_coming_soon_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ComingSoonComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _channel_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./channel-event.service */ "5UOI");
/* harmony import */ var _my_event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-event.service */ "pzsc");
/* harmony import */ var _ws_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ws.service */ "Swid");
/* harmony import */ var _guild_event_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guild-event.service */ "BUNz");






let EventService = class EventService {
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
};
EventService.ctorParameters = () => [
    { type: _my_event_service__WEBPACK_IMPORTED_MODULE_3__["MyEventService"] },
    { type: _channel_event_service__WEBPACK_IMPORTED_MODULE_2__["ChannelEventService"] },
    { type: _guild_event_service__WEBPACK_IMPORTED_MODULE_5__["GuildEventService"] },
    { type: _ws_service__WEBPACK_IMPORTED_MODULE_4__["WSService"] }
];
EventService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], EventService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let TruncatedPipe = class TruncatedPipe {
    transform(words, max) {
        return words.substring(0, max) + '...';
    }
};
TruncatedPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'truncated'
    })
], TruncatedPipe);



/***/ }),

/***/ "gT7g":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/components/member-username/member-username.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\r\n  *ngIf=\"user\"\r\n  [matMenuTriggerFor]=\"contextMenu\"\r\n  #menuTrigger=\"matMenuTrigger\"\r\n  (contextmenu)=\"openMenu($event, menuTrigger)\"\r\n  class=\"member-username\"\r\n  [title]=\"user.username\"\r\n  [class]=\"(guild) ? 'user-' + user._id + ' ' + user.status?.toLowerCase() : ''\">\r\n  <div\r\n    [routerLink]=\"routerLink || './'\"\r\n    class=\"username-wrapper\"\r\n    (click)=\"$event.stopPropagation()\">\r\n    <app-avatar-url\r\n      *ngIf=\"withAvatar\"\r\n      [user]=\"user\"></app-avatar-url>\r\n    <span\r\n      class=\"status round\"\r\n      [class]=\"user.status?.toLowerCase()\"></span>\r\n    <div\r\n      [style.color]=\"member ? roleColor : 'var(--light)'\"\r\n      class=\"username\">\r\n      <span class=\"float-right text-muted\">\r\n        <i *ngIf=\"pings.isUnread(dmChannelId)\"\r\n          matTooltip=\"Unread Pings\"\r\n          class=\"fas fa-circle text-danger\"></i>\r\n      </span>\r\n  \r\n      <span class=\"username-text\">{{ user.username }}</span>\r\n      <span\r\n        *ngIf=\"user.bot\"\r\n        textContent=\"user.username === 'Accord' ? 'SYSTEM' : 'BOT'\"\r\n        class=\"ml-1 badge badge-secondary\"></span>\r\n      <span\r\n        *ngIf=\"user._id === guild?.ownerId\"\r\n        matTooltip=\"Guild Owner\"\r\n        class=\"crown pl-1\">\r\n        <i class=\"fas fa-crown\"></i>\r\n      </span>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<mat-menu\r\n  (closed)=\"guild\r\n    && perms.canManage(guild._id, user._id, 'MANAGE_ROLES')\r\n    && update()\"\r\n  #contextMenu>\r\n  <h6 class=\"pt-2 text-center\">{{ user.username }}</h6>\r\n\r\n  <div *ngIf=\"guild\">\r\n    <mat-form-field\r\n      *ngIf=\"perms.canManage(guild._id, user._id, 'MANAGE_ROLES')\"  \r\n      (click)=\"$event.stopPropagation()\"\r\n      appearance=\"outline\">\r\n      <mat-label>Roles</mat-label>\r\n      <mat-select\r\n        [value]=\"member.roleIds\"\r\n        multiple\r\n        #rolesInput>\r\n        <mat-option\r\n          *ngFor=\"let role of guildRoles\"\r\n          [value]=\"role._id\"\r\n          [style.color]=\"role.color\"\r\n          [attr.selected]=\"member.roleIds.includes(role._id)\">{{ role.name }}</mat-option>\r\n      </mat-select> \r\n    </mat-form-field>\r\n\r\n  </div>\r\n  <div *ngIf=\"guild\">\r\n    <button\r\n      *ngIf=\"perms.canPunish(guild._id, user._id, 'KICK_MEMBERS')\"\r\n      (click)=\"guildService.kick(guild._id, user._id)\"\r\n      mat-menu-item>\r\n      <i class=\"fas fa-times text-danger mr-1\"></i>\r\n      <span>Kick</span>\r\n    </button>\r\n  </div>\r\n  \r\n  <hr class=\"my-2\">\r\n\r\n  <button\r\n    (click)=\"dialog.profile({ user: user })\"\r\n    mat-menu-item>\r\n    <i class=\"fas fa-user text-muted mr-1\"></i>\r\n    <span>View Profile</span>\r\n  </button>\r\n\r\n  <button\r\n    *ngIf=\"isBlocked && user._id !== userService.self._id\"  \r\n    (click)=\"userService.unblock(user._id)\"\r\n    mat-menu-item>\r\n    <i class=\"fas fa-ban text-muted mr-1\"></i>\r\n    <span>Unblock</span>\r\n  </button>\r\n  <button\r\n    *ngIf=\"!isBlocked && user._id !== userService.self._id\"  \r\n    (click)=\"userService.block(user._id)\"\r\n    mat-menu-item>\r\n    <i class=\"fas fa-ban text-danger mr-1\"></i>\r\n    <span>Block</span>\r\n  </button>\r\n  \r\n  <hr class=\"my-2\">\r\n\r\n  <div (click)=\"$event.stopPropagation()\" class=\"p-2\">\r\n    <strong>ID: </strong>\r\n    <code>{{ user._id }}</code>\r\n  </div>\r\n</mat-menu>\r\n");

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
/* harmony import */ var _raw_loader_user_settings_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./user-settings.component.html */ "U53u");
/* harmony import */ var _user_settings_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-settings.component.css */ "bH3+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_log_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/log.service */ "iXKo");
/* harmony import */ var src_app_services_theme_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/theme.service */ "WPWp");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_app_services_ws_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/ws.service */ "Swid");
/* harmony import */ var src_app_authentication_sign_up_username_validators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/authentication/sign-up/username.validators */ "IrsS");
/* harmony import */ var src_app_dashboard_components_user_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/dashboard/components/user-config */ "tya+");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var src_app_types_entity_types__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/types/entity-types */ "h8Xa");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! faker */ "NZy3");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var src_app_config__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/config */ "Vx+w");

















let UserSettingsComponent = class UserSettingsComponent extends src_app_dashboard_components_user_config__WEBPACK_IMPORTED_MODULE_12__["UserConfig"] {
    constructor(route, router, userService, snackbar, ws, log, themes, usernameValidators) {
        super(userService, route, snackbar, ws, log, router);
        this.themes = themes;
        this.usernameValidators = usernameValidators;
        this.environment = src_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"];
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
        return Object(src_app_config__WEBPACK_IMPORTED_MODULE_16__["getConfig"])('sfxEnabled');
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
                    content: faker__WEBPACK_IMPORTED_MODULE_15___default.a.lorem.sentence(),
                    channelId: '',
                    createdAt: new Date(),
                });
            (_a = this.themeSelect) === null || _a === void 0 ? void 0 : _a.writeValue((_b = localStorage
                .getItem('theme')) !== null && _b !== void 0 ? _b : this.themes.defaultTheme);
            this.themes.updateTheme();
        });
    }
    buildForm(user) {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            avatarURL: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](user.avatarURL, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
            ]),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](user.username, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(32),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(src_app_types_entity_types__WEBPACK_IMPORTED_MODULE_14__["patterns"].username),
            ], [this.usernameValidators.shouldBeUnique.bind(this.usernameValidators)]),
        });
    }
    toggleSounds(enabled) {
        Object(src_app_config__WEBPACK_IMPORTED_MODULE_16__["setConfig"])('sfxEnabled', enabled);
    }
    setAvatar(name) {
        this.form
            .get('avatarURL')
            .setValue(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].endpoint}/avatars/${name}.png`);
    }
};
UserSettingsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] },
    { type: src_app_services_ws_service__WEBPACK_IMPORTED_MODULE_10__["WSService"] },
    { type: src_app_services_log_service__WEBPACK_IMPORTED_MODULE_7__["LogService"] },
    { type: src_app_services_theme_service__WEBPACK_IMPORTED_MODULE_8__["ThemeService"] },
    { type: src_app_authentication_sign_up_username_validators__WEBPACK_IMPORTED_MODULE_11__["UsernameValidators"] }
];
UserSettingsComponent.propDecorators = {
    themeSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['themeSelect',] }]
};
UserSettingsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-user-settings',
        template: _raw_loader_user_settings_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_user_settings_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], UserSettingsComponent);



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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "Nm8O");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user.service */ "qfBg");
/* harmony import */ var _ws_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ws.service */ "Swid");







let UserAuthService = class UserAuthService {
    constructor(http, userService, ws) {
        this.http = http;
        this.userService = userService;
        this.ws = ws;
        this.endpoint = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].endpoint;
    }
    get loggedIn() {
        const expired = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]().isTokenExpired(this.key);
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
};
UserAuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: _ws_service__WEBPACK_IMPORTED_MODULE_6__["WSService"] }
];
UserAuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' })
], UserAuthService);



/***/ }),

/***/ "hlrx":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/utils/spinner/spinner.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"spinner\" class=\"text-center\">\n  <span></span><span></span><span></span><span></span><span></span>\n</div>");

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
/* harmony import */ var _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./navbar.component.html */ "S6iF");
/* harmony import */ var _navbar_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar.component.css */ "DIg/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ "qfBg");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "AytR");






let NavbarComponent = class NavbarComponent {
    constructor(userService) {
        this.userService = userService;
        this.githubURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].githubURL;
    }
    get user() { return this.userService.self; }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.userService.init();
        });
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
];
NavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'navbar',
        template: _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_navbar_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NavbarComponent);



/***/ }),

/***/ "hwZO":
/*!**************************************************************!*\
  !*** ./src/app/authentication/sign-up/sign-up.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWduLXVwLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "iAMl":
/*!***************************************************************************!*\
  !*** ./src/app/dashboard/guilds/guild-settings/roles/roles.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb2xlcy5jb21wb25lbnQuY3NzIn0= */");

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



let LogService = class LogService {
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
};
LogService.ctorParameters = () => [
    { type: _sound_service__WEBPACK_IMPORTED_MODULE_2__["SoundService"] }
];
LogService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], LogService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_spinner_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./spinner.component.html */ "hlrx");
/* harmony import */ var _spinner_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spinner.component.css */ "0FLu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let SpinnerComponent = class SpinnerComponent {
    constructor() { }
    ngOnInit() {
    }
};
SpinnerComponent.ctorParameters = () => [];
SpinnerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'spinner',
        template: _raw_loader_spinner_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_spinner_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SpinnerComponent);



/***/ }),

/***/ "io1Z":
/*!******************************************************************************!*\
  !*** ./src/app/dashboard/guilds/guild-overview/guild-overview.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".text-channel-container {\n  padding-right: 0;\n}\n.text-channel-container + div {\n  padding-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImd1aWxkLW92ZXJ2aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJndWlsZC1vdmVydmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQtY2hhbm5lbC1jb250YWluZXIge1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xufVxuLnRleHQtY2hhbm5lbC1jb250YWluZXIgKyBkaXYge1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn0iXX0= */");

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
/* harmony import */ var _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./sidebar.component.html */ "A5jb");
/* harmony import */ var _sidebar_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar.component.css */ "RhSN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/user.service */ "qfBg");
/* harmony import */ var _services_guild_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/guild.service */ "4bjJ");
/* harmony import */ var src_app_services_channel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/channel.service */ "0xJi");
/* harmony import */ var src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/dialog.service */ "CzQJ");








let SidebarComponent = class SidebarComponent {
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
};
SidebarComponent.ctorParameters = () => [
    { type: src_app_services_channel_service__WEBPACK_IMPORTED_MODULE_6__["ChannelService"] },
    { type: _services_guild_service__WEBPACK_IMPORTED_MODULE_5__["GuildService"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_7__["DialogService"] }
];
SidebarComponent.propDecorators = {
    drawer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['drawer',] }]
};
SidebarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'sidebar',
        template: _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_sidebar_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SidebarComponent);



/***/ }),

/***/ "j3jg":
/*!*********************************************!*\
  !*** ./src/app/pages/why/why.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3aHkuY29tcG9uZW50LmNzcyJ9 */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-color-picker */ "R9Cn");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/table */ "f6nW");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");























let MaterialModule = class MaterialModule {
};
MaterialModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        exports: [
            ngx_color_picker__WEBPACK_IMPORTED_MODULE_15__["ColorPickerModule"],
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_16__["CdkTableModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__["MatDialogModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatRippleModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__["MatSortModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_18__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__["MatSlideToggleModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__["MatTooltipModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__["MatMenuModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_21__["MatCardModule"],
        ]
    })
], MaterialModule);

/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */ 


/***/ }),

/***/ "jXGe":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/developers/bot-user/bot-user.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-3\">\n    <div class=\"developer-sidebar\">\n      <header\n        routerLink=\"/developers\"\n        class=\"cursor-pointer my-5\">\n        <a class=\"p-2 text-muted\" routerLink=\"/developers\">\n          <i class=\"fas fa-arrow-left mt-2\"></i>\n          <strong class=\"pl-2\">DASHBOARD</strong>\n        </a>\n      </header>\n      \n      <nav *ngIf=\"app\" class=\"side-nav mt-3\">\n        <a routerLinkActive=\"active\"\n          class=\"nav-link\"\n          [routerLink]=\"'/developers/applications/' + app._id\">\n          <i class=\"fas fa-eye\"></i> Overview</a>\n        <a routerLinkActive=\"active\"\n          class=\"nav-link\"\n          [routerLink]=\"'/developers/applications/' + app._id + '/user'\">\n          <i class=\"fas fa-robot\"></i> User</a>\n      </nav>\n    </div>\n  </div>\n\n  <div\n    *ngIf=\"app; else loading\"\n    class=\"col-8 m-4 mt-5\">\n    <header>\n      <h2>Bot User</h2>\n      <p class=\"lead\">General info about your bot user.</p>\n    </header>\n\n    <form #f=\"ngForm\" [formGroup]=\"form\" class=\"overflow-hidden\">\n      <div class=\"row\">\n        <div class=\"col-6\">\n          <app-avatar-url\n            [user]=\"{ avatarURL: form.get('avatarURL').value }\"\n            size=\"96px\"></app-avatar-url>\n    \n          <mat-form-field appearance=\"outline\" class=\"ml-3\">\n            <mat-label>Avatar URL</mat-label>\n            <input\n              formControlName=\"avatarURL\"\n              type=\"url\"\n              matInput>\n          </mat-form-field>\n        </div>\n        \n        <div class=\"col-6\">\n          <mat-form-field appearance=\"outline\">\n            <mat-label>Username</mat-label>\n            <input formControlName=\"username\" type=\"text\" matInput>\n            <mat-hint *ngIf=\"form.get('username').pending\"><i class=\"fas fa-circle-notch fa-spin\"></i> Checking</mat-hint>\n            <mat-error *ngIf=\"form.get('username').errors?.required\">Username is required.</mat-error>\n            <mat-error *ngIf=\"form.get('username').errors?.shouldBeUnique\">Username is already taken.</mat-error>\n            <mat-error *ngIf=\"form.get('username').errors?.pattern\">Username should follow the <a routerLink=\"/docs/usernames\">username rules</a>.</mat-error>\n          </mat-form-field>\n        </div>\n\n        <div class=\"col-6\">\n          <h3>Token</h3>\n          <p class=\"lead\">Use this to log into the bot. Keep this safe!</p>\n          <input type=\"hidden\" value=\"hidden\" #shown>\n          <div class=\"token\" [hidden]=\"shown.value === 'hidden'\">{{ app.token }}</div>\n          <div class=\"buttons\">\n            <button\n              type=\"button\"\n              class=\"text-info\"\n              (click)=\"shown.value = (shown.value === 'shown') ? 'hidden' : 'shown'\"\n              [textContent]=\"(shown.value === 'shown') ? 'Hide' : 'Show'\"\n              mat-button></button>\n            <button\n              type=\"button\"\n              class=\"text-success\"\n              (click)=\"copyToken()\"\n              mat-button>Copy</button>\n            <button\n              type=\"button\"\n              class=\"text-danger\"\n              (click)=\"regenToken()\"\n              mat-button>Regen</button>\n          </div>\n        </div>\n\n        <div class=\"col-6\">\n          <div>\n            <mat-form-field appearance=\"outline\">\n              <mat-label>Client ID</mat-label>\n              <input [value]=\"app._id\" type=\"text\" disabled matInput>\n            </mat-form-field>\n          </div>\n          <div>\n            <mat-form-field appearance=\"outline\">\n              <mat-label>Bot ID</mat-label>\n              <input [value]=\"app.user._id\" type=\"text\" disabled matInput>\n            </mat-form-field>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n\n  <ng-template\n    class=\"col-6 d-flex justify-content-center\"\n    #loading>\n    <spinner></spinner>\n  </ng-template>\n</div>\n");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_avatar_url_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./avatar-url.component.html */ "6kS/");
/* harmony import */ var _avatar_url_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./avatar-url.component.css */ "Jmw7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "AytR");





let AvatarUrlComponent = class AvatarUrlComponent {
    constructor() {
        this.size = '32px';
        this.unknownImageURL = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].endpoint}/avatars/unknown.png`;
    }
    ngAfterViewInit() {
        const image = this.img.nativeElement;
        image.onerror = () => image.src = this.unknownImageURL;
    }
};
AvatarUrlComponent.propDecorators = {
    user: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['user',] }],
    size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['size',] }],
    img: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['img',] }]
};
AvatarUrlComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-avatar-url',
        template: _raw_loader_avatar_url_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_avatar_url_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AvatarUrlComponent);



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
/* harmony import */ var _raw_loader_voice_channel_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./voice-channel.component.html */ "KFy7");
/* harmony import */ var _voice_channel_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./voice-channel.component.css */ "7HDu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");





let VoiceChannelComponent = class VoiceChannelComponent {
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
};
VoiceChannelComponent.ctorParameters = () => [
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
];
VoiceChannelComponent.propDecorators = {
    channel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    guild: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
VoiceChannelComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'voice-channel',
        template: _raw_loader_voice_channel_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_voice_channel_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], VoiceChannelComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lighthouse_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lighthouse.component.html */ "026r");
/* harmony import */ var _lighthouse_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lighthouse.component.css */ "sm5L");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let LighthouseComponent = class LighthouseComponent {
};
LighthouseComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-lighthouse',
        template: _raw_loader_lighthouse_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lighthouse_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LighthouseComponent);



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
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.component.html */ "Cn2O");
/* harmony import */ var _login_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component.css */ "GmjE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_types_entity_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/types/entity-types */ "h8Xa");
/* harmony import */ var _services_user_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/user-auth.service */ "hZP9");
/* harmony import */ var _sign_up_password_validators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../sign-up/password.validators */ "Tyil");









let LoginComponent = class LoginComponent {
    constructor(auth, route, router) {
        this.auth = auth;
        this.route = route;
        this.router = router;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(src_app_types_entity_types__WEBPACK_IMPORTED_MODULE_6__["patterns"].username),
            ]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(src_app_types_entity_types__WEBPACK_IMPORTED_MODULE_6__["patterns"].email),
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(src_app_types_entity_types__WEBPACK_IMPORTED_MODULE_6__["patterns"].password),
            ]),
        }, [_sign_up_password_validators__WEBPACK_IMPORTED_MODULE_8__["PasswordValidators"].emailOrUsernameRequired]);
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
            catch (_a) {
                this.processing = false;
                this.form.setErrors({ invalidLogin: true });
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
};
LoginComponent.ctorParameters = () => [
    { type: _services_user_auth_service__WEBPACK_IMPORTED_MODULE_7__["UserAuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
LoginComponent.propDecorators = {
    loginWith: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['loginWith',] }]
};
LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'login',
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoginComponent);



/***/ }),

/***/ "lBzy":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/components/guild-icon/guild-icon.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\n  class=\"guild-icon\"\n  (contextmenu)=\"dialogs.openMenu($event, menuTrigger)\"\n  [matMenuTriggerFor]=\"contextMenu\"\n  routerLinkActive=\"active\"\n  #menuTrigger=\"matMenuTrigger\">\n  <div\n    (click)=\"$event.stopPropagation()\"\n    [routerLink]=\"'/channels/' + guild._id\">\n    <img\n      *ngIf=\"guild.iconURL\"\n      [src]=\"guild.iconURL\"\n      [alt]=\"guild.name\">\n    <span *ngIf=\"!guild.iconURL\"\n      class=\"d-flex justify-content-center\">{{ guild.nameAcronym }}</span>\n  </div>\n</div>\n\n\n<mat-menu\n  matMenuContent\n  #contextMenu>\n  <div *ngIf=\"guild.ownerId !== userService.self._id\">\n    <button\n      (click)=\"guildService.leave(guild._id)\"\n      class=\"text-danger p-2\"\n      mat-menu-item>\n      <i class=\"fas fa-door-open\"></i>\n      <span> Leave</span>\n    </button>\n    \n    <hr>\n  </div>\n\n  <div (click)=\"$event.stopPropagation()\" class=\"p-2\">\n    <strong>ID: </strong>\n    <code>{{ guild._id }}</code>\n  </div>\n</mat-menu>");

/***/ }),

/***/ "lPaH":
/*!**************************************************************************!*\
  !*** ./src/app/dashboard/guilds/text-channel/text-channel.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".footer {\r\n  padding: 10px 15px 0 15px;\r\n}\r\n\r\n.messages {\r\n  overflow-y: auto;\r\n\r\n  margin-top: 5px;\r\n  padding-bottom: 1vh;\r\n  height: 82.5vh;\r\n}\r\n\r\n.typing {\r\n  font-size: small;\r\n  margin-top: -3px;\r\n}\r\n\r\n.emoji-icon {\r\n  transition: transform .3s ease;\r\n}\r\n\r\n.emoji-icon:hover {\r\n  color: gold;\r\n  transform: scale(1.1);\r\n}\r\n\r\n/* custom ctx menu */\r\n\r\n.ctx-menu {\r\n  border-radius: 5px;\r\n  display: none;\r\n  position: absolute;\r\n\r\n  background-color: var(--background-tertiary);\r\n\r\n  padding: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRleHQtY2hhbm5lbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZ0JBQWdCOztFQUVoQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUNBO0VBQ0UsV0FBVztFQUNYLHFCQUFxQjtBQUN2Qjs7QUFFQSxvQkFBb0I7O0FBQ3BCO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixrQkFBa0I7O0VBRWxCLDRDQUE0Qzs7RUFFNUMsYUFBYTtBQUNmIiwiZmlsZSI6InRleHQtY2hhbm5lbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XHJcbiAgcGFkZGluZzogMTBweCAxNXB4IDAgMTVweDtcclxufVxyXG5cclxuLm1lc3NhZ2VzIHtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG5cclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDF2aDtcclxuICBoZWlnaHQ6IDgyLjV2aDtcclxufVxyXG5cclxuLnR5cGluZyB7XHJcbiAgZm9udC1zaXplOiBzbWFsbDtcclxuICBtYXJnaW4tdG9wOiAtM3B4O1xyXG59XHJcbi5lbW9qaS1pY29uIHtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjNzIGVhc2U7XHJcbn1cclxuLmVtb2ppLWljb246aG92ZXIge1xyXG4gIGNvbG9yOiBnb2xkO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxufVxyXG5cclxuLyogY3VzdG9tIGN0eCBtZW51ICovXHJcbi5jdHgtbWVudSB7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG5cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLXRlcnRpYXJ5KTtcclxuXHJcbiAgcGFkZGluZzogMTBweDtcclxufSJdfQ== */");

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
/* harmony import */ var _raw_loader_invites_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./invites.component.html */ "cms+");
/* harmony import */ var _invites_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./invites.component.css */ "XvCU");
/* harmony import */ var _overview_guild_settings_component_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../overview/guild-settings.component.css */ "wPW8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_guild_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/guild.service */ "4bjJ");
/* harmony import */ var src_app_services_log_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/log.service */ "iXKo");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_app_services_ws_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/ws.service */ "Swid");










let InvitesComponent = class InvitesComponent {
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
};
InvitesComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: src_app_services_guild_service__WEBPACK_IMPORTED_MODULE_6__["GuildService"] },
    { type: src_app_services_log_service__WEBPACK_IMPORTED_MODULE_7__["LogService"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] },
    { type: src_app_services_ws_service__WEBPACK_IMPORTED_MODULE_9__["WSService"] }
];
InvitesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-invites',
        template: _raw_loader_invites_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_invites_component_css__WEBPACK_IMPORTED_MODULE_2__["default"], _overview_guild_settings_component_css__WEBPACK_IMPORTED_MODULE_3__["default"]]
    })
], InvitesComponent);



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

/***/ "p3Uk":
/*!************************************************************!*\
  !*** ./src/app/authentication/logout/logout.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dvdXQuY29tcG9uZW50LmNzcyJ9 */");

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
/* harmony import */ var _raw_loader_bot_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./bot-list.component.html */ "/lPB");
/* harmony import */ var _bot_list_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bot-list.component.css */ "YgWb");
/* harmony import */ var _guild_settings_overview_guild_settings_component_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../guild-settings/overview/guild-settings.component.css */ "wPW8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_dashboard_components_module_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/dashboard/components/module-config */ "cmOr");
/* harmony import */ var src_app_services_developers_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/developers.service */ "RXH7");
/* harmony import */ var src_app_services_guild_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/guild.service */ "4bjJ");
/* harmony import */ var src_app_services_log_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/log.service */ "iXKo");
/* harmony import */ var src_app_services_ws_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/ws.service */ "Swid");













let BotListComponent = class BotListComponent extends src_app_dashboard_components_module_config__WEBPACK_IMPORTED_MODULE_8__["ModuleConfig"] {
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
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({});
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
};
BotListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: src_app_services_guild_service__WEBPACK_IMPORTED_MODULE_10__["GuildService"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] },
    { type: src_app_services_ws_service__WEBPACK_IMPORTED_MODULE_12__["WSService"] },
    { type: src_app_services_log_service__WEBPACK_IMPORTED_MODULE_11__["LogService"] },
    { type: src_app_services_developers_service__WEBPACK_IMPORTED_MODULE_9__["DevelopersService"] }
];
BotListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-bot-list',
        template: _raw_loader_bot_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_bot_list_component_css__WEBPACK_IMPORTED_MODULE_2__["default"], _guild_settings_overview_guild_settings_component_css__WEBPACK_IMPORTED_MODULE_3__["default"]]
    })
], BotListComponent);



/***/ }),

/***/ "pLCM":
/*!********************************************************************!*\
  !*** ./src/app/dialog/create-channel/create-channel.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtY2hhbm5lbC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _channel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../channel.service */ "0xJi");
/* harmony import */ var _guild_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../guild.service */ "4bjJ");
/* harmony import */ var _sound_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sound.service */ "V9p5");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../user.service */ "qfBg");







let MyEventService = class MyEventService {
    constructor(channelService, guildService, router, sounds, userService) {
        this.channelService = channelService;
        this.guildService = guildService;
        this.router = router;
        this.sounds = sounds;
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
            yield this.sounds.success();
        });
    }
    updatePresence({ userId, status }) {
        this.userService.upsert(userId, { status });
    }
    updateUser(args) {
        const user = this.userService.self;
        this.userService.upsert(user._id, args.partialUser);
    }
};
MyEventService.ctorParameters = () => [
    { type: _channel_service__WEBPACK_IMPORTED_MODULE_3__["ChannelService"] },
    { type: _guild_service__WEBPACK_IMPORTED_MODULE_4__["GuildService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _sound_service__WEBPACK_IMPORTED_MODULE_5__["SoundService"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] }
];
MyEventService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MyEventService);



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
/* harmony import */ var _raw_loader_settings_sidebar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./settings-sidebar.component.html */ "GrJd");
/* harmony import */ var _settings_sidebar_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings-sidebar.component.css */ "5+EO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_permissions_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/permissions.service */ "tEUU");
/* harmony import */ var src_app_types_entity_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/types/entity-types */ "h8Xa");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_app_services_guild_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/guild.service */ "4bjJ");









let SettingsSidebarComponent = class SettingsSidebarComponent {
    constructor(guildService, perms, router, userService) {
        this.guildService = guildService;
        this.perms = perms;
        this.router = router;
        this.userService = userService;
        this.tabs = {
            guild: [
                {
                    name: 'General',
                    icon: 'fas fa-eye',
                    href: () => `/channels/${this.guildId}/settings`,
                    permission: src_app_types_entity_types__WEBPACK_IMPORTED_MODULE_6__["PermissionTypes"].General.MANAGE_GUILD,
                },
                // {
                //   name: 'Bots',
                //   icon: 'fas fa-robot',
                //   href: () => `/channels/${this.guildId}/bots`,
                //   permission: PermissionTypes.General.MANAGE_GUILD, 
                // },
                {
                    name: 'Invites',
                    icon: 'fas fa-user-plus',
                    href: () => `/channels/${this.guildId}/invites`,
                    permission: src_app_types_entity_types__WEBPACK_IMPORTED_MODULE_6__["PermissionTypes"].General.MANAGE_GUILD,
                },
                {
                    name: 'Roles',
                    icon: 'fas fa-at',
                    href: () => `/channels/${this.guildId}/roles`,
                    permission: src_app_types_entity_types__WEBPACK_IMPORTED_MODULE_6__["PermissionTypes"].General.MANAGE_ROLES,
                },
            ],
            user: [
                { name: 'Overview', icon: 'fas fa-eye', href: () => '/channels/@me/settings' },
                { name: 'Account', icon: 'fas fa-lock', href: () => '/channels/@me/settings/account' },
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
};
SettingsSidebarComponent.ctorParameters = () => [
    { type: src_app_services_guild_service__WEBPACK_IMPORTED_MODULE_8__["GuildService"] },
    { type: src_app_services_permissions_service__WEBPACK_IMPORTED_MODULE_5__["PermissionsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] }
];
SettingsSidebarComponent.propDecorators = {
    tabType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    guildId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['id',] }]
};
SettingsSidebarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-settings-sidebar',
        template: _raw_loader_settings_sidebar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_settings_sidebar_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SettingsSidebarComponent);



/***/ }),

/***/ "qVEa":
/*!****************************************************************************!*\
  !*** ./src/app/dashboard/guilds/guild-sidebar/guild-sidebar.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h4 {\r\n  margin-bottom: 35px;\r\n  cursor: pointer;\r\n}\r\n\r\nimg {\r\n  padding: 0;\r\n}\r\n\r\n.alt-name {\r\n  border-radius: 50%;\r\n  background-color: var(--background-primary);\r\n\r\n  width: 96px;\r\n  height: 96px;\r\n}\r\n\r\n.alt-name span {\r\n  font-size: 32px;\r\n}\r\n\r\n.header h1 {\r\n  font-size: large;\r\n}\r\n\r\n.header h1::after {\r\n  padding-top: 10px;\r\n}\r\n\r\n#heftyButton {\r\n  outline: none !important;\r\n\r\n  height: 50px !important; \r\n  width: 270px !important;\r\n\r\n  color: var(--heading);\r\n}\r\n\r\n#heftyButton:focus {\r\n  outline: none !important;\r\n}\r\n\r\n.dropdown-menu {\r\n  background-color: var(--background-tertiary);\r\n  width: 265px;\r\n  padding: 5px;\r\n}\r\n\r\na.dropdown-item {\r\n  cursor: pointer;\r\n\r\n  color: var(--font);\r\n\r\n  padding-right: 10px;\r\n  max-width: 95%;\r\n}\r\n\r\na.dropdown-item.invite {\r\n  color: var(--primary) !important;\r\n}\r\n\r\na.dropdown-item:hover {\r\n  color: var(--heading) !important;\r\n}\r\n\r\na.dropdown-item:hover i {\r\n  color: var(--heading) !important;\r\n}\r\n\r\n.dropdown i {\r\n  float: right;\r\n  color: gray;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImd1aWxkLXNpZGViYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLDJDQUEyQzs7RUFFM0MsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx3QkFBd0I7O0VBRXhCLHVCQUF1QjtFQUN2Qix1QkFBdUI7O0VBRXZCLHFCQUFxQjtBQUN2Qjs7QUFDQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLDRDQUE0QztFQUM1QyxZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTs7RUFFZixrQkFBa0I7O0VBRWxCLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOztBQUNBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUNBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYiIsImZpbGUiOiJndWlsZC1zaWRlYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoNCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmFsdC1uYW1lIHtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1wcmltYXJ5KTtcclxuXHJcbiAgd2lkdGg6IDk2cHg7XHJcbiAgaGVpZ2h0OiA5NnB4O1xyXG59XHJcblxyXG4uYWx0LW5hbWUgc3BhbiB7XHJcbiAgZm9udC1zaXplOiAzMnB4O1xyXG59XHJcblxyXG4uaGVhZGVyIGgxIHtcclxuICBmb250LXNpemU6IGxhcmdlO1xyXG59XHJcbi5oZWFkZXIgaDE6OmFmdGVyIHtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG5cclxuI2hlZnR5QnV0dG9uIHtcclxuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcblxyXG4gIGhlaWdodDogNTBweCAhaW1wb3J0YW50OyBcclxuICB3aWR0aDogMjcwcHggIWltcG9ydGFudDtcclxuXHJcbiAgY29sb3I6IHZhcigtLWhlYWRpbmcpO1xyXG59XHJcbiNoZWZ0eUJ1dHRvbjpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZHJvcGRvd24tbWVudSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC10ZXJ0aWFyeSk7XHJcbiAgd2lkdGg6IDI2NXB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuYS5kcm9wZG93bi1pdGVtIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gIGNvbG9yOiB2YXIoLS1mb250KTtcclxuXHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICBtYXgtd2lkdGg6IDk1JTtcclxufVxyXG5hLmRyb3Bkb3duLWl0ZW0uaW52aXRlIHtcclxuICBjb2xvcjogdmFyKC0tcHJpbWFyeSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuYS5kcm9wZG93bi1pdGVtOmhvdmVyIHtcclxuICBjb2xvcjogdmFyKC0taGVhZGluZykgIWltcG9ydGFudDtcclxufVxyXG5hLmRyb3Bkb3duLWl0ZW06aG92ZXIgaSB7XHJcbiAgY29sb3I6IHZhcigtLWhlYWRpbmcpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kcm9wZG93biBpIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgY29sb3I6IGdyYXk7XHJcbn0iXX0= */");

/***/ }),

/***/ "qbjZ":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/components/save-changes/save-changes.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n  <div class=\"text col-lg-8 col-sm-12 p-lg-1\">\r\n    Careful - You have unsaved changes!\r\n  </div>\r\n  <div class=\"col-lg-4 col-sm-12 d-flex justify-content-center\">\r\n    <button\r\n    (click)=\"reset()\"\r\n      id=\"reset\"\r\n      type=\"submit\" \r\n      class=\"text-danger\"\r\n      mat-button>Reset</button>\r\n    <button\r\n      (click)=\"save()\"\r\n      id=\"save\"\r\n      type=\"submit\"\r\n      mat-button>Save</button>\r\n  </div>\r\n</div>");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/utils */ "oCjk");
/* harmony import */ var _http_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./http-wrapper */ "R0x+");





let UserService = class UserService extends _http_wrapper__WEBPACK_IMPORTED_MODULE_4__["HTTPWrapper"] {
    constructor() {
        super(...arguments);
        this.endpoint = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].endpoint}/users`;
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
            .filter(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["array"].distinctBy('_id'));
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
};
UserService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], UserService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_save_changes_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./save-changes.component.html */ "qbjZ");
/* harmony import */ var _save_changes_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save-changes.component.css */ "zPex");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");





let SaveChangesComponent = class SaveChangesComponent {
    constructor(snackBar) {
        this.snackBar = snackBar;
        this.onReset = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.onSave = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
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
};
SaveChangesComponent.ctorParameters = () => [
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }
];
SaveChangesComponent.propDecorators = {
    onReset: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    onSave: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
SaveChangesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'save-changes',
        template: _raw_loader_save_changes_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_save_changes_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SaveChangesComponent);



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
/* harmony import */ var _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./profile.component.html */ "/mpL");
/* harmony import */ var _profile_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.component.css */ "wcK0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_services_channel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/channel.service */ "0xJi");
/* harmony import */ var src_app_services_log_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/log.service */ "iXKo");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_app_services_ws_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/ws.service */ "Swid");









let ProfileComponent = class ProfileComponent {
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
};
ProfileComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] },
    { type: src_app_services_channel_service__WEBPACK_IMPORTED_MODULE_5__["ChannelService"] },
    { type: src_app_services_log_service__WEBPACK_IMPORTED_MODULE_6__["LogService"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
    { type: src_app_services_ws_service__WEBPACK_IMPORTED_MODULE_8__["WSService"] }
];
ProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-profile',
        template: _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_profile_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProfileComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let CanDeactivateDashboard = class CanDeactivateDashboard {
    canDeactivate(component, currentRoute, currentState, nextState) {
        var _a;
        return !Boolean((_a = component.saveChanges) === null || _a === void 0 ? void 0 : _a._openedSnackBarRef);
    }
};
CanDeactivateDashboard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CanDeactivateDashboard);



/***/ }),

/***/ "rY0o":
/*!**************************************************************************************!*\
  !*** ./src/app/dashboard/components/dashboard-navbar/dashboard-navbar.component.css ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".navbar {\r\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\r\n}\r\n\r\n.navbar-brand {\r\n  font-size: 18px;\r\n  width: 100vw !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC1uYXZiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJFQUEyRTtBQUM3RTs7QUFFQTtFQUNFLGVBQWU7RUFDZix1QkFBdUI7QUFDekIiLCJmaWxlIjoiZGFzaGJvYXJkLW5hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhciB7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDFweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xyXG59XHJcblxyXG4ubmF2YmFyLWJyYW5kIHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgd2lkdGg6IDEwMHZ3ICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "rmd6":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/verify/verify.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<navbar></navbar>\n\n<header class=\"text-center\">\n  <h1 class=\"mt-5\">Enter Code</h1>\n  <p class=\"lead\">Check the email associated with this account for the verification code.</p>\n</header>\n\n<section class=\"text-center\">\n  <form \n  #f=\"ngForm\"\n  [formGroup]=\"form\"\n  (ngSubmit)=\"submit()\">\n    <mat-form-field appearance=\"outline\">\n      <mat-label>Code</mat-label>\n      <input formControlName=\"code\" type=\"text\" matInput>\n    </mat-form-field>\n\n    <div>\n      <div\n        *ngIf=\"form.errors?.invalidCode\"\n        class=\"text-danger m-2\">Code is invalid</div>\n    \n      <button\n        *ngIf=\"!processing\"\n        color=\"success\"\n        mat-button>Verify</button>\n    </div>\n  </form>\n</section>");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_me_overview_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./me-overview.component.html */ "fBlL");
/* harmony import */ var _me_overview_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./me-overview.component.css */ "eCGk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/dialog.service */ "CzQJ");





let DashboardOverviewComponent = class DashboardOverviewComponent {
    constructor(dialog) {
        this.dialog = dialog;
        this.tab = 'ONLINE';
        document.title = 'Accord - Dashboard';
        this.tab = 'ONLINE';
    }
};
DashboardOverviewComponent.ctorParameters = () => [
    { type: src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_4__["DialogService"] }
];
DashboardOverviewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-dashboard',
        template: _raw_loader_me_overview_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_me_overview_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DashboardOverviewComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");




let InviteService = class InviteService {
    constructor(http) {
        this.http = http;
        this.endpoint = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].rootEndpoint}/invites`;
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
};
InviteService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
InviteService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], InviteService);



/***/ }),

/***/ "s9Fo":
/*!***********************************************!*\
  !*** ./src/app/pages/home/home.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("header {\r\n  background: none;\r\n  text-align: center;\r\n  \r\n  margin-top: 15vh;\r\n  margin-bottom: 300px;\r\n}\r\n\r\n.main {\r\n  background-color: var(--background-secondary) !important;\r\n\r\n  padding-top: 150px;\r\n  padding-bottom: 150px;\r\n  min-height: 750px;\r\n}\r\n\r\nmat-card {\r\n  transition: transform .5s ease;\r\n  cursor: pointer;\r\n}\r\n\r\nmat-card:hover {\r\n  transform: scale(1.1);\r\n}\r\n\r\nmat-card {\r\n  text-align: center;\r\n}\r\n\r\nmat-card-subtitle {\r\n  font-weight: bold;\r\n}\r\n\r\nmat-card-subtitle,\r\nmat-card-content {\r\n  color: var(--secondary);\r\n}\r\n\r\n#features *:not(app-submarine) { \r\n  z-index: 1;\r\n}\r\n\r\napp-submarine {\r\n  position: absolute;\r\n  top: 1500px;\r\n  transform: scale(0.5);\r\n\r\n  -webkit-animation: moveLeft 150s infinite;\r\n\r\n          animation: moveLeft 150s infinite;\r\n}\r\n\r\nmat-card-title {\r\n  font-size: 32px;\r\n}\r\n\r\nmat-card-subtitle {\r\n  font-size: 20px;\r\n}\r\n\r\nimg {\r\n  height: 250px;\r\n  width: auto;\r\n\r\n  image-rendering: auto;\r\n}\r\n\r\n@-webkit-keyframes moveLeft {\r\n  0% {\r\n    left: 85%;\r\n  }\r\n  100% {\r\n    left: 0%;\r\n  }\r\n}\r\n\r\n@keyframes moveLeft {\r\n  0% {\r\n    left: 85%;\r\n  }\r\n  100% {\r\n    left: 0%;\r\n  }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7O0VBRWxCLGdCQUFnQjtFQUNoQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSx3REFBd0Q7O0VBRXhELGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7O0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7O0FBQ0E7O0VBRUUsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxxQkFBcUI7O0VBRXJCLHlDQUFpQzs7VUFBakMsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVzs7RUFFWCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRTtJQUNFLFNBQVM7RUFDWDtFQUNBO0lBQ0UsUUFBUTtFQUNWO0FBQ0Y7O0FBUEE7RUFDRTtJQUNFLFNBQVM7RUFDWDtFQUNBO0lBQ0UsUUFBUTtFQUNWO0FBQ0YiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBcclxuICBtYXJnaW4tdG9wOiAxNXZoO1xyXG4gIG1hcmdpbi1ib3R0b206IDMwMHB4O1xyXG59XHJcblxyXG4ubWFpbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1zZWNvbmRhcnkpICFpbXBvcnRhbnQ7XHJcblxyXG4gIHBhZGRpbmctdG9wOiAxNTBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTUwcHg7XHJcbiAgbWluLWhlaWdodDogNzUwcHg7XHJcbn1cclxuXHJcbm1hdC1jYXJkIHtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjVzIGVhc2U7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbm1hdC1jYXJkOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbn1cclxubWF0LWNhcmQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5tYXQtY2FyZC1zdWJ0aXRsZSB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxubWF0LWNhcmQtc3VidGl0bGUsXHJcbm1hdC1jYXJkLWNvbnRlbnQge1xyXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xyXG59XHJcblxyXG4jZmVhdHVyZXMgKjpub3QoYXBwLXN1Ym1hcmluZSkgeyBcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG5hcHAtc3VibWFyaW5lIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxNTAwcHg7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xyXG5cclxuICBhbmltYXRpb246IG1vdmVMZWZ0IDE1MHMgaW5maW5pdGU7XHJcbn1cclxuXHJcbm1hdC1jYXJkLXRpdGxlIHtcclxuICBmb250LXNpemU6IDMycHg7XHJcbn1cclxubWF0LWNhcmQtc3VidGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuaW1nIHtcclxuICBoZWlnaHQ6IDI1MHB4O1xyXG4gIHdpZHRoOiBhdXRvO1xyXG5cclxuICBpbWFnZS1yZW5kZXJpbmc6IGF1dG87XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbW92ZUxlZnQge1xyXG4gIDAlIHtcclxuICAgIGxlZnQ6IDg1JTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBsZWZ0OiAwJTtcclxuICB9XHJcbn0iXX0= */");

/***/ }),

/***/ "sm5L":
/*!**********************************************************!*\
  !*** ./src/app/cool/lighthouse/lighthouse.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("*:before, *:after {\n  content: '';\n  display: block;\n  position: absolute;\n}\n#lighthouse {\n  position: absolute;\n}\n#lighthouse:before {\n  right: 30px;\n  left: 0;\n  margin: 0 auto;\n  height: 24px;\n  width: 12px;\n  background: #4f1c15;\n  bottom: 0;\n  z-index: 1;\n  border-radius: 6px 6px 0 0;\n}\n#lighthouse:after {\n  right: 0;\n  left: 0;\n  margin: 0 auto;\n  background: #8f8f8f;\n  width: 98px;\n  bottom: -16px;\n  height: 16px;\n  box-shadow: inset 58px 0 0 0 #b0b0b0;\n}\n#balcony {\n  margin: 0 auto;\n  position: relative;\n  border-top: 16px solid #8f8f8f;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n  width: 76px;\n}\n#balcony:after {\n  left: -10px;\n  right: 0;\n  margin: 0 auto;\n  width: 76px;\n  top: -28px;\n  height: 2px;\n  background: #636363;\n}\n#balcony:before {\n  width: 2px;\n  height: 12px;\n  background: #636363;\n  left: -10px;\n  top: -28px;\n  box-shadow: 9px 0 0 #636363, 18px 0 0 #636363, 27px 0 0 #636363, 37px 0 0 #636363, 47px 0 0 #636363, 56px 0 0 #636363, 65px 0 0 #636363, 74px 0 0 #636363;\n}\n#glass {\n  width: 50px;\n  height: 32px;\n  margin: 0 auto;\n  background: #b0b0b0;\n  box-shadow: 0 -26px 0 -6px #b2daed, 0 -30px 0 -6px #999;\n}\n#glass:before {\n  width: 2px;\n  height: 20px;\n  background: #f2f2f2;\n  left: -36px;\n  right: 0;\n  margin: 0 auto;\n  top: 22px;\n  box-shadow: 12px 0 0 #f2f2f2, 24px 0 0 #f2f2f2, 36px 0 0 #f2f2f2;\n}\n#top {\n  width: 38px;\n  height: 18px;\n  background: #8d3c46;\n  border-radius: 18px 18px 0 0;\n  margin: 0 auto 24px;\n  position: relative;\n}\n#top:before {\n  background: #8d3c46;\n  height: 30px;\n  width: 2px;\n  right: 0;\n  left: 0;\n  margin: auto;\n  top: -30px;\n}\n/* Univ Level Rules */\n.row {\n  height: 0;\n  position: relative;\n  margin: 0 auto;\n  border-left: 3px solid transparent;\n  border-right: 3px solid transparent;\n}\n.row:before, .row:after {\n  border-style: inherit;\n}\n.row:before {\n  left: -3px;\n  border-top-color: transparent;\n  border-right-color: transparent;\n  border-left-color: transparent;\n}\n.row:after {\n  border-left: 0 solid transparent;\n  border-right: 3px solid transparent;\n  border-bottom: 50px solid rgba(0, 0, 0, 0.1);\n}\n/* Specific Levels - Widths are 1px wider on some areas to cover ugly rendering. I also can't get nth-child to work. */\n.row {\n  width: 60px;\n  border-bottom: 50px solid #8d3c46;\n}\n.row:before {\n  border-bottom-color: #f2f2f2;\n  border-width: 0 3px 50px 58px;\n}\n.row:after {\n  left: 30px;\n  width: 28px;\n}\n.row + .row {\n  width: 66px;\n  border-bottom: 50px solid #f2f2f2;\n}\n.row + .row:before {\n  border-bottom-color: #8d3c46;\n  border-width: 0 3px 50px 64px;\n}\n.row + .row:after {\n  left: 33px;\n  width: 31px;\n}\n.row + .row + .row {\n  width: 72px;\n  border-bottom: 50px solid #8d3c46;\n}\n.row + .row + .row:before {\n  border-bottom-color: #f2f2f2;\n  border-width: 0 3px 50px 70px;\n}\n.row + .row + .row:after {\n  left: 36px;\n  width: 34px;\n}\n.row + .row + .row + .row {\n  width: 78px;\n  border-bottom: 50px solid #f2f2f2;\n}\n.row + .row + .row + .row:before {\n  border-bottom-color: #8d3c46;\n  border-width: 0 3px 50px 76px;\n}\n.row + .row + .row + .row:after {\n  left: 39px;\n  width: 36px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpZ2h0aG91c2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxPQUFPO0VBQ1AsY0FBYztFQUNkLFlBQVk7RUFDWixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxVQUFVO0VBQ1YsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSxRQUFRO0VBQ1IsT0FBTztFQUNQLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGFBQWE7RUFDYixZQUFZO0VBQ1osb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLDhCQUE4QjtFQUM5QixtQ0FBbUM7RUFDbkMsb0NBQW9DO0VBQ3BDLFdBQVc7QUFDYjtBQUNBO0VBQ0UsV0FBVztFQUNYLFFBQVE7RUFDUixjQUFjO0VBQ2QsV0FBVztFQUNYLFVBQVU7RUFDVixXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsVUFBVTtFQUNWLHlKQUF5SjtBQUMzSjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLHVEQUF1RDtBQUN6RDtBQUNBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFFBQVE7RUFDUixjQUFjO0VBQ2QsU0FBUztFQUNULGdFQUFnRTtBQUNsRTtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsNEJBQTRCO0VBQzVCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osVUFBVTtFQUNWLFFBQVE7RUFDUixPQUFPO0VBQ1AsWUFBWTtFQUNaLFVBQVU7QUFDWjtBQUNBLHFCQUFxQjtBQUNyQjtFQUNFLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGtDQUFrQztFQUNsQyxtQ0FBbUM7QUFDckM7QUFDQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsVUFBVTtFQUNWLDZCQUE2QjtFQUM3QiwrQkFBK0I7RUFDL0IsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSxnQ0FBZ0M7RUFDaEMsbUNBQW1DO0VBQ25DLDRDQUE0QztBQUM5QztBQUNBLHNIQUFzSDtBQUN0SDtFQUNFLFdBQVc7RUFDWCxpQ0FBaUM7QUFDbkM7QUFDQTtFQUNFLDRCQUE0QjtFQUM1Qiw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLFVBQVU7RUFDVixXQUFXO0FBQ2I7QUFDQTtFQUNFLFdBQVc7RUFDWCxpQ0FBaUM7QUFDbkM7QUFDQTtFQUNFLDRCQUE0QjtFQUM1Qiw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLFVBQVU7RUFDVixXQUFXO0FBQ2I7QUFDQTtFQUNFLFdBQVc7RUFDWCxpQ0FBaUM7QUFDbkM7QUFDQTtFQUNFLDRCQUE0QjtFQUM1Qiw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLFVBQVU7RUFDVixXQUFXO0FBQ2I7QUFDQTtFQUNFLFdBQVc7RUFDWCxpQ0FBaUM7QUFDbkM7QUFDQTtFQUNFLDRCQUE0QjtFQUM1Qiw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLFVBQVU7RUFDVixXQUFXO0FBQ2IiLCJmaWxlIjoibGlnaHRob3VzZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKjpiZWZvcmUsICo6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbiNsaWdodGhvdXNlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuI2xpZ2h0aG91c2U6YmVmb3JlIHtcbiAgcmlnaHQ6IDMwcHg7XG4gIGxlZnQ6IDA7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBoZWlnaHQ6IDI0cHg7XG4gIHdpZHRoOiAxMnB4O1xuICBiYWNrZ3JvdW5kOiAjNGYxYzE1O1xuICBib3R0b206IDA7XG4gIHotaW5kZXg6IDE7XG4gIGJvcmRlci1yYWRpdXM6IDZweCA2cHggMCAwO1xufVxuI2xpZ2h0aG91c2U6YWZ0ZXIge1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJhY2tncm91bmQ6ICM4ZjhmOGY7XG4gIHdpZHRoOiA5OHB4O1xuICBib3R0b206IC0xNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIGJveC1zaGFkb3c6IGluc2V0IDU4cHggMCAwIDAgI2IwYjBiMDtcbn1cbiNiYWxjb255IHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXRvcDogMTZweCBzb2xpZCAjOGY4ZjhmO1xuICBib3JkZXItbGVmdDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICB3aWR0aDogNzZweDtcbn1cbiNiYWxjb255OmFmdGVyIHtcbiAgbGVmdDogLTEwcHg7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDc2cHg7XG4gIHRvcDogLTI4cHg7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kOiAjNjM2MzYzO1xufVxuI2JhbGNvbnk6YmVmb3JlIHtcbiAgd2lkdGg6IDJweDtcbiAgaGVpZ2h0OiAxMnB4O1xuICBiYWNrZ3JvdW5kOiAjNjM2MzYzO1xuICBsZWZ0OiAtMTBweDtcbiAgdG9wOiAtMjhweDtcbiAgYm94LXNoYWRvdzogOXB4IDAgMCAjNjM2MzYzLCAxOHB4IDAgMCAjNjM2MzYzLCAyN3B4IDAgMCAjNjM2MzYzLCAzN3B4IDAgMCAjNjM2MzYzLCA0N3B4IDAgMCAjNjM2MzYzLCA1NnB4IDAgMCAjNjM2MzYzLCA2NXB4IDAgMCAjNjM2MzYzLCA3NHB4IDAgMCAjNjM2MzYzO1xufVxuI2dsYXNzIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogMzJweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJhY2tncm91bmQ6ICNiMGIwYjA7XG4gIGJveC1zaGFkb3c6IDAgLTI2cHggMCAtNnB4ICNiMmRhZWQsIDAgLTMwcHggMCAtNnB4ICM5OTk7XG59XG4jZ2xhc3M6YmVmb3JlIHtcbiAgd2lkdGg6IDJweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICBsZWZ0OiAtMzZweDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0b3A6IDIycHg7XG4gIGJveC1zaGFkb3c6IDEycHggMCAwICNmMmYyZjIsIDI0cHggMCAwICNmMmYyZjIsIDM2cHggMCAwICNmMmYyZjI7XG59XG4jdG9wIHtcbiAgd2lkdGg6IDM4cHg7XG4gIGhlaWdodDogMThweDtcbiAgYmFja2dyb3VuZDogIzhkM2M0NjtcbiAgYm9yZGVyLXJhZGl1czogMThweCAxOHB4IDAgMDtcbiAgbWFyZ2luOiAwIGF1dG8gMjRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuI3RvcDpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiAjOGQzYzQ2O1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAycHg7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICBtYXJnaW46IGF1dG87XG4gIHRvcDogLTMwcHg7XG59XG4vKiBVbml2IExldmVsIFJ1bGVzICovXG4ucm93IHtcbiAgaGVpZ2h0OiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cbi5yb3c6YmVmb3JlLCAucm93OmFmdGVyIHtcbiAgYm9yZGVyLXN0eWxlOiBpbmhlcml0O1xufVxuLnJvdzpiZWZvcmUge1xuICBsZWZ0OiAtM3B4O1xuICBib3JkZXItdG9wLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWxlZnQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLnJvdzphZnRlciB7XG4gIGJvcmRlci1sZWZ0OiAwIHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogNTBweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG4vKiBTcGVjaWZpYyBMZXZlbHMgLSBXaWR0aHMgYXJlIDFweCB3aWRlciBvbiBzb21lIGFyZWFzIHRvIGNvdmVyIHVnbHkgcmVuZGVyaW5nLiBJIGFsc28gY2FuJ3QgZ2V0IG50aC1jaGlsZCB0byB3b3JrLiAqL1xuLnJvdyB7XG4gIHdpZHRoOiA2MHB4O1xuICBib3JkZXItYm90dG9tOiA1MHB4IHNvbGlkICM4ZDNjNDY7XG59XG4ucm93OmJlZm9yZSB7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICNmMmYyZjI7XG4gIGJvcmRlci13aWR0aDogMCAzcHggNTBweCA1OHB4O1xufVxuLnJvdzphZnRlciB7XG4gIGxlZnQ6IDMwcHg7XG4gIHdpZHRoOiAyOHB4O1xufVxuLnJvdyArIC5yb3cge1xuICB3aWR0aDogNjZweDtcbiAgYm9yZGVyLWJvdHRvbTogNTBweCBzb2xpZCAjZjJmMmYyO1xufVxuLnJvdyArIC5yb3c6YmVmb3JlIHtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzhkM2M0NjtcbiAgYm9yZGVyLXdpZHRoOiAwIDNweCA1MHB4IDY0cHg7XG59XG4ucm93ICsgLnJvdzphZnRlciB7XG4gIGxlZnQ6IDMzcHg7XG4gIHdpZHRoOiAzMXB4O1xufVxuLnJvdyArIC5yb3cgKyAucm93IHtcbiAgd2lkdGg6IDcycHg7XG4gIGJvcmRlci1ib3R0b206IDUwcHggc29saWQgIzhkM2M0Njtcbn1cbi5yb3cgKyAucm93ICsgLnJvdzpiZWZvcmUge1xuICBib3JkZXItYm90dG9tLWNvbG9yOiAjZjJmMmYyO1xuICBib3JkZXItd2lkdGg6IDAgM3B4IDUwcHggNzBweDtcbn1cbi5yb3cgKyAucm93ICsgLnJvdzphZnRlciB7XG4gIGxlZnQ6IDM2cHg7XG4gIHdpZHRoOiAzNHB4O1xufVxuLnJvdyArIC5yb3cgKyAucm93ICsgLnJvdyB7XG4gIHdpZHRoOiA3OHB4O1xuICBib3JkZXItYm90dG9tOiA1MHB4IHNvbGlkICNmMmYyZjI7XG59XG4ucm93ICsgLnJvdyArIC5yb3cgKyAucm93OmJlZm9yZSB7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICM4ZDNjNDY7XG4gIGJvcmRlci13aWR0aDogMCAzcHggNTBweCA3NnB4O1xufVxuLnJvdyArIC5yb3cgKyAucm93ICsgLnJvdzphZnRlciB7XG4gIGxlZnQ6IDM5cHg7XG4gIHdpZHRoOiAzNnB4O1xufVxuIl19 */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _types_entity_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types/entity-types */ "h8Xa");
/* harmony import */ var _guild_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guild.service */ "4bjJ");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.service */ "qfBg");





let PermissionsService = class PermissionsService {
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
            || this.hasPermission(this.getTotalPerms(guild, member), _types_entity_types__WEBPACK_IMPORTED_MODULE_2__["PermissionTypes"].All[permission]);
    }
    getTotalPerms(guild, member) {
        return guild.roles
            .filter(r => member === null || member === void 0 ? void 0 : member.roleIds.includes(r._id))
            .reduce((acc, value) => value.permissions | acc, 0);
    }
    hasPermission(totalPerms, permission) {
        return Boolean(totalPerms & permission)
            || Boolean(totalPerms & _types_entity_types__WEBPACK_IMPORTED_MODULE_2__["PermissionTypes"].General.ADMINISTRATOR);
    }
    canManage(guildId, userId, permission) {
        const selfMember = this.guildService.getSelfMember(guildId);
        const userMember = this.guildService.getMember(guildId, userId);
        if (!selfMember || !userMember)
            return false;
        return this.userService.self._id === userMember.userId
            || (this.isHigher(guildId, selfMember.roleIds, userMember.roleIds)
                && this.can(guildId, permission));
    }
    canPunish(guildId, userId, permission) {
        return this.userService.self._id !== userId
            && this.can(guildId, permission)
            && this.canManage(guildId, userId, permission);
    }
    isHigher(guildId, firstRoleIds, secondRoleIds) {
        const uniqueIds = Array.from(new Set(firstRoleIds.concat(secondRoleIds)));
        const guild = this.guildService.getCached(guildId);
        const highestRole = guild.roles
            .filter(r => uniqueIds.includes(r._id))
            .sort((a, b) => (a.position > b.position) ? 1 : -1)[0];
        return firstRoleIds.includes(highestRole === null || highestRole === void 0 ? void 0 : highestRole._id);
    }
};
PermissionsService.ctorParameters = () => [
    { type: _guild_service__WEBPACK_IMPORTED_MODULE_3__["GuildService"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
];
PermissionsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], PermissionsService);



/***/ }),

/***/ "tQiX":
/*!******************************************************************!*\
  !*** ./src/app/dialog/create-invite/create-invite.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".modal-content {\r\n  background-color: var(--light);\r\n}\r\n\r\n.modal-content div {\r\n  border: none !important;\r\n}\r\n\r\n.close {\r\n  color: var(--heading) !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1pbnZpdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQyIsImZpbGUiOiJjcmVhdGUtaW52aXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwtY29udGVudCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQpO1xyXG59XHJcblxyXG4ubW9kYWwtY29udGVudCBkaXYge1xyXG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2xvc2Uge1xyXG4gIGNvbG9yOiB2YXIoLS1oZWFkaW5nKSAhaW1wb3J0YW50O1xyXG59Il19 */");

/***/ }),

/***/ "tXpb":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/guilds/member-list/member-list.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\n  *ngIf=\"guild\"\n  [@expandCollapse]=\"(isExpanded) ? 'expanded' : 'collapsed'\"\n  class=\"float-right member-list\">\n  <div class=\"category\">Online—{{ onlineMembers.length }}</div>\n  <div>\n    <member-username\n      *ngFor=\"let member of onlineMembers\"\n      class=\"cursor-pointer\"\n      [user]=\"userService.getCached(member.userId)\"\n      [guild]=\"guild\"></member-username>\n  </div>\n\n  <div\n    *ngIf=\"offlineMembers.length\"\n    class=\"category\">Offline—{{ offlineMembers.length }}</div>\n  <div>\n    <member-username\n      *ngFor=\"let member of offlineMembers\"\n      class=\"cursor-pointer\"\n      [user]=\"userService.getCached(member.userId)\"\n      [guild]=\"guild\"></member-username>\n  </div>\n</div>\n");

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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _http_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./http-wrapper */ "R0x+");
/* harmony import */ var _ws_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ws.service */ "Swid");






let MessageService = class MessageService extends _http_wrapper__WEBPACK_IMPORTED_MODULE_4__["HTTPWrapper"] {
    constructor(http, ws) {
        super(http, ws);
        this.endpoint = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].endpoint + '/channels';
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
};
MessageService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _ws_service__WEBPACK_IMPORTED_MODULE_5__["WSService"] }
];
MessageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], MessageService);



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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _save_changes_save_changes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save-changes/save-changes.component */ "qigX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_ws_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/ws.service */ "Swid");
/* harmony import */ var _services_log_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/log.service */ "iXKo");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/user.service */ "qfBg");








let UserConfig = class UserConfig {
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
            .openFromComponent(_save_changes_save_changes_component__WEBPACK_IMPORTED_MODULE_3__["SaveChangesComponent"])
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
};
UserConfig.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
    { type: _services_ws_service__WEBPACK_IMPORTED_MODULE_5__["WSService"] },
    { type: _services_log_service__WEBPACK_IMPORTED_MODULE_6__["LogService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
UserConfig = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"])()
], UserConfig);



/***/ }),

/***/ "ubaq":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/guilds/guild-settings/overview/guild-settings.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-settings-sidebar\n  tabType=\"guild\"\n  [id]=\"guild?._id\">\n  <div *ngIf=\"guild\" class=\"content\">\n    <h5 class=\"mb-4\">Guild Overview</h5>\n\n    <form *ngIf=\"form\"\n      #f=\"ngForm\" [formGroup]=\"form\">\n      <div class=\"row\">\n        <div class=\"col-xl-3 col-lg-4 col-md-6\">\n          <div class=\"guild-icon round my-2\">\n            <img\n              *ngIf=\"guild.iconURL\"\n              [src]=\"guild.iconURL\"\n              [alt]=\"guild.name\">\n            <span\n              *ngIf=\"!guild.iconURL\"\n              class=\"d-flex justify-content-center\">{{ guild.nameAcronym }}</span>\n          </div>\n        </div>\n        \n        <div class=\"col-xl-3 col-lg-4 col-md-6\">\n          <mat-form-field appearance=\"outline\">\n            <mat-label>Icon URL</mat-label>\n            <input formControlName=\"iconURL\" type=\"text\" matInput>\n          </mat-form-field>          \n        </div>\n\n        <div class=\"col-xl-3 col-lg-4 col-md-6\">\n          <mat-form-field appearance=\"outline\">\n            <mat-label>Name</mat-label>\n            <input formControlName=\"name\" type=\"text\" matInput>\n          </mat-form-field>\n        </div>\n      </div>\n    </form>\n\n    <div class=\"my-5\"></div>\n    <h5 class=\"mb-4\">Advanced Settings</h5>\n\n    <div class=\"row\">\n      <div class=\"col-lg-4 col-md-6\">\n        <div>\n          <button\n            (click)=\"deleteGuild()\"\n            class=\"nav-item nav-link bg-danger\"\n            mat-button>\n            <i class=\"fas fa-trash mr-1\"></i>\n            <span>Delete Guild</span>\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>  \n</app-settings-sidebar>");

/***/ }),

/***/ "uwnf":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/components/dashboard-navbar/dashboard-navbar.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand navbar-dark\">\n  <a class=\"navbar-brand\">\n    <ng-content></ng-content>\n  </a>\n</nav>\n");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_not_found_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./not-found.component.html */ "w0H6");
/* harmony import */ var _not_found_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./not-found.component.css */ "OMz0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let NotFoundComponent = class NotFoundComponent {
};
NotFoundComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-not-found',
        template: _raw_loader_not_found_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_not_found_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NotFoundComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let DurationStringPipe = class DurationStringPipe {
    transform(value) {
        const seconds = Number(value);
        return `${Math.floor(seconds / 60)}:${Math.floor(seconds % 60).toString().padStart(2, '0')}`;
    }
};
DurationStringPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'durationString'
    })
], DurationStringPipe);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_zippy_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./zippy.component.html */ "AkLZ");
/* harmony import */ var _zippy_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./zippy.component.css */ "IDvP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _zippy_component_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./zippy.component.animations */ "6lfv");





let ZippyComponent = class ZippyComponent {
    constructor() {
        this.title = 'Title';
        this.expanded = false;
        this.toggle = () => this.expanded = !this.expanded;
    }
};
ZippyComponent.propDecorators = {
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ZippyComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'zippy',
        template: _raw_loader_zippy_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        animations: [_zippy_component_animations__WEBPACK_IMPORTED_MODULE_4__["expandCollapse"]],
        styles: [_zippy_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ZippyComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/not-found/not-found.component */ "v2M4");
/* harmony import */ var _authentication_auth_auth_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./authentication/auth/auth.component */ "UxaF");
/* harmony import */ var _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./authentication/login/login.component */ "kuBs");
/* harmony import */ var _authentication_logout_logout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./authentication/logout/logout.component */ "HZi2");
/* harmony import */ var _dashboard_me_me_overview_me_overview_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/me/me-overview/me-overview.component */ "rpeu");
/* harmony import */ var _dashboard_guilds_guild_overview_guild_overview_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/guilds/guild-overview/guild-overview.component */ "eepR");
/* harmony import */ var _guards_dashboard_auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./guards/dashboard-auth.guard */ "HfTq");
/* harmony import */ var _guards_guild_auth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./guards/guild-auth.guard */ "Sova");
/* harmony import */ var _guards_can_deactivate_dashboard_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./guards/can-deactivate-dashboard.guard */ "rTQu");
/* harmony import */ var _authentication_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./authentication/sign-up/sign-up.component */ "3RvI");
/* harmony import */ var _dashboard_guilds_guild_settings_overview_guild_settings_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dashboard/guilds/guild-settings/overview/guild-settings.component */ "PT5O");
/* harmony import */ var _dashboard_guilds_guild_settings_invites_invites_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dashboard/guilds/guild-settings/invites/invites.component */ "nHKN");
/* harmony import */ var _dashboard_guilds_guild_settings_roles_roles_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dashboard/guilds/guild-settings/roles/roles.component */ "OY6s");
/* harmony import */ var _guards_dmchannel_auth_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./guards/dmchannel-auth.guard */ "bYG1");
/* harmony import */ var _dashboard_me_dmchannel_dm_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./dashboard/me/dmchannel/dm.component */ "f1HG");
/* harmony import */ var _dashboard_me_user_settings_user_settings_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./dashboard/me/user-settings/user-settings.component */ "h1rg");
/* harmony import */ var _pages_developers_developers_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/developers/developers.component */ "cFTX");
/* harmony import */ var _pages_developers_application_application_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/developers/application/application.component */ "QRQu");
/* harmony import */ var _pages_developers_bot_user_bot_user_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/developers/bot-user/bot-user.component */ "TOw+");
/* harmony import */ var _guards_developers_auth_guard__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./guards/developers-auth.guard */ "w0XD");
/* harmony import */ var _authentication_verify_verify_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./authentication/verify/verify.component */ "cDDQ");
/* harmony import */ var _dashboard_me_user_account_user_account_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./dashboard/me/user-account/user-account.component */ "Ce9m");
/* harmony import */ var _pages_invite_invite_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/invite/invite.component */ "b1Gg");
/* harmony import */ var _utils_external_redirect__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./utils/external-redirect */ "Sh9F");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _utils_coming_soon_coming_soon_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./utils/coming-soon/coming-soon.component */ "g8CY");






























const routes = [
    { path: '', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], },
    { path: 'auth/verify', component: _authentication_verify_verify_component__WEBPACK_IMPORTED_MODULE_24__["VerifyComponent"], },
    { path: 'auth', component: _authentication_auth_auth_component__WEBPACK_IMPORTED_MODULE_5__["AuthComponent"], },
    { path: 'changelog', component: Object(_utils_external_redirect__WEBPACK_IMPORTED_MODULE_27__["externalRedirect"])(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_28__["environment"].docsURL}/general/changelog`), },
    { path: 'docs', component: Object(_utils_external_redirect__WEBPACK_IMPORTED_MODULE_27__["externalRedirect"])(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_28__["environment"].docsURL}`), },
    { path: 'privacy', component: Object(_utils_external_redirect__WEBPACK_IMPORTED_MODULE_27__["externalRedirect"])(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_28__["environment"].docsURL}/legal/privacy`), },
    { path: 'terms', component: Object(_utils_external_redirect__WEBPACK_IMPORTED_MODULE_27__["externalRedirect"])(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_28__["environment"].docsURL}/legal/terms`), },
    {
        path: 'channels/@me',
        component: _dashboard_me_me_overview_me_overview_component__WEBPACK_IMPORTED_MODULE_8__["DashboardOverviewComponent"],
        canActivate: [_guards_dashboard_auth_guard__WEBPACK_IMPORTED_MODULE_10__["DashboardAuthGuard"]],
    },
    {
        path: 'channels/@me/settings',
        component: _dashboard_me_user_settings_user_settings_component__WEBPACK_IMPORTED_MODULE_19__["UserSettingsComponent"],
        canActivate: [_guards_dashboard_auth_guard__WEBPACK_IMPORTED_MODULE_10__["DashboardAuthGuard"]],
    },
    {
        path: 'channels/@me/settings/account',
        component: _dashboard_me_user_account_user_account_component__WEBPACK_IMPORTED_MODULE_25__["UserAccountComponent"],
        canActivate: [_guards_dashboard_auth_guard__WEBPACK_IMPORTED_MODULE_10__["DashboardAuthGuard"]],
    },
    {
        path: 'channels/@me/:channelId',
        component: _dashboard_me_dmchannel_dm_component__WEBPACK_IMPORTED_MODULE_18__["DMComponent"],
        canActivate: [_guards_dashboard_auth_guard__WEBPACK_IMPORTED_MODULE_10__["DashboardAuthGuard"], _guards_dmchannel_auth_guard__WEBPACK_IMPORTED_MODULE_17__["DMChannelAuthGuard"]],
    },
    {
        path: 'channels/:guildId',
        component: _dashboard_guilds_guild_overview_guild_overview_component__WEBPACK_IMPORTED_MODULE_9__["GuildOverviewComponent"],
        canActivate: [_guards_dashboard_auth_guard__WEBPACK_IMPORTED_MODULE_10__["DashboardAuthGuard"], _guards_guild_auth_guard__WEBPACK_IMPORTED_MODULE_11__["GuildAuthGuard"]],
        canDeactivate: [_guards_can_deactivate_dashboard_guard__WEBPACK_IMPORTED_MODULE_12__["CanDeactivateDashboard"]],
    },
    {
        path: 'channels/:guildId/settings',
        component: _dashboard_guilds_guild_settings_overview_guild_settings_component__WEBPACK_IMPORTED_MODULE_14__["GuildSettingsComponent"],
        canActivate: [_guards_dashboard_auth_guard__WEBPACK_IMPORTED_MODULE_10__["DashboardAuthGuard"], _guards_guild_auth_guard__WEBPACK_IMPORTED_MODULE_11__["GuildAuthGuard"]],
        canDeactivate: [_guards_can_deactivate_dashboard_guard__WEBPACK_IMPORTED_MODULE_12__["CanDeactivateDashboard"]],
    },
    {
        path: 'channels/:guildId/roles',
        component: _dashboard_guilds_guild_settings_roles_roles_component__WEBPACK_IMPORTED_MODULE_16__["RolesComponent"],
        canActivate: [_guards_dashboard_auth_guard__WEBPACK_IMPORTED_MODULE_10__["DashboardAuthGuard"], _guards_guild_auth_guard__WEBPACK_IMPORTED_MODULE_11__["GuildAuthGuard"]],
        canDeactivate: [_guards_can_deactivate_dashboard_guard__WEBPACK_IMPORTED_MODULE_12__["CanDeactivateDashboard"]],
    },
    {
        path: 'channels/:guildId/bots',
        component: _utils_coming_soon_coming_soon_component__WEBPACK_IMPORTED_MODULE_29__["ComingSoonComponent"],
    },
    {
        path: 'channels/:guildId/invites',
        component: _dashboard_guilds_guild_settings_invites_invites_component__WEBPACK_IMPORTED_MODULE_15__["InvitesComponent"],
        canActivate: [_guards_dashboard_auth_guard__WEBPACK_IMPORTED_MODULE_10__["DashboardAuthGuard"], _guards_guild_auth_guard__WEBPACK_IMPORTED_MODULE_11__["GuildAuthGuard"]],
        canDeactivate: [_guards_can_deactivate_dashboard_guard__WEBPACK_IMPORTED_MODULE_12__["CanDeactivateDashboard"]],
    },
    {
        path: 'channels/:guildId/:channelId',
        component: _dashboard_guilds_guild_overview_guild_overview_component__WEBPACK_IMPORTED_MODULE_9__["GuildOverviewComponent"],
        canActivate: [_guards_dashboard_auth_guard__WEBPACK_IMPORTED_MODULE_10__["DashboardAuthGuard"], _guards_guild_auth_guard__WEBPACK_IMPORTED_MODULE_11__["GuildAuthGuard"]],
        canDeactivate: [_guards_can_deactivate_dashboard_guard__WEBPACK_IMPORTED_MODULE_12__["CanDeactivateDashboard"]],
    },
    { path: 'developers', component: _utils_coming_soon_coming_soon_component__WEBPACK_IMPORTED_MODULE_29__["ComingSoonComponent"], },
    {
        path: `developers/applications/:id/user`,
        canActivate: [_guards_developers_auth_guard__WEBPACK_IMPORTED_MODULE_23__["DevelopersAuthGuard"]],
        component: _pages_developers_bot_user_bot_user_component__WEBPACK_IMPORTED_MODULE_22__["BotUserComponent"],
    },
    {
        path: `developers/applications/:id`,
        canActivate: [_guards_developers_auth_guard__WEBPACK_IMPORTED_MODULE_23__["DevelopersAuthGuard"]],
        component: _pages_developers_application_application_component__WEBPACK_IMPORTED_MODULE_21__["ApplicationComponent"],
    },
    { path: `developers/applications`, redirectTo: 'developers', },
    {
        path: 'developers',
        canActivate: [_guards_developers_auth_guard__WEBPACK_IMPORTED_MODULE_23__["DevelopersAuthGuard"]],
        component: _pages_developers_developers_component__WEBPACK_IMPORTED_MODULE_20__["DevelopersComponent"],
    },
    { path: 'invite/:id', component: _pages_invite_invite_component__WEBPACK_IMPORTED_MODULE_26__["InviteComponent"], },
    { path: 'login', component: _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], },
    { path: 'logout', component: _authentication_logout_logout_component__WEBPACK_IMPORTED_MODULE_7__["LogoutComponent"], },
    { path: 'sign-up', component: _authentication_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_13__["SignUpComponent"], },
    { path: '**', component: _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"], },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
                initialNavigation: 'enabled',
                relativeLinkResolution: 'legacy',
            })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "w0H6":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/not-found/not-found.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"stars\">\r\n  <div class=\"central-body\">\r\n    <h1 class=\"text-light\">404</h1>\r\n    <p class=\"text-light\">Looks like you are lost in space...</p>\r\n    <a class=\"btn-go-home\" routerLink=\"/\">RETURN HOME</a>\r\n  </div>\r\n  <div class=\"objects\">\r\n    <img class=\"object_rocket\" src=\"/assets/img/rocket.svg\" width=\"40px\">\r\n    <div class=\"earth-moon\">\r\n      <img class=\"object_earth\" src=\"/assets/img/earth.svg\" width=\"100px\">\r\n      <img class=\"object_moon\" src=\"/assets/img/moon.svg\" width=\"80px\">\r\n      <img class=\"object_mars\" src=\"/assets/img/mars.svg\">\r\n    </div>\r\n    <div class=\"box_astronaut\">\r\n      <img class=\"object_astronaut\" src=\"/assets/img/2pg-plus-avatar-transparent.png\" width=\"140px\">\r\n    </div>\r\n  </div>\r\n  <div class=\"glowing_stars\">\r\n    <div class=\"star\"></div>\r\n    <div class=\"star\"></div>\r\n    <div class=\"star\"></div>\r\n    <div class=\"star\"></div>\r\n    <div class=\"star\"></div>\r\n  </div>\r\n</div>\r\n<footer>\r\n  <p class=\"float-right text-muted\"><strong>SVGs</strong>: Saleh Riaz + photo3idea_studio from www.flaticon.com</p>\r\n</footer>");

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




let DevelopersAuthGuard = class DevelopersAuthGuard {
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
};
DevelopersAuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
];
DevelopersAuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DevelopersAuthGuard);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_submarine_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./submarine.component.html */ "AH1W");
/* harmony import */ var _submarine_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./submarine.component.css */ "Vpfs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let SubmarineComponent = class SubmarineComponent {
};
SubmarineComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-submarine',
        template: _raw_loader_submarine_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_submarine_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SubmarineComponent);



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

/***/ "wPW8":
/*!***************************************************************************************!*\
  !*** ./src/app/dashboard/guilds/guild-settings/overview/guild-settings.component.css ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".guild-icon {\r\n  width: 96px;\r\n  height: 96px;\r\n\r\n  font-size: 40px;\r\n\r\n  color: var(--font);\r\n  background-color: var(--primary);\r\n}\r\n.guild-icon span {\r\n  text-align: center;\r\n\r\n  font-size: 32px;\r\n  padding-top: 28px;\r\n\r\n  transition: all .35s;\r\n}\r\n.guild-icon img {    \r\n  width: 96px;\r\n  height: 96px;\r\n  border-radius: 50%;\r\n\r\n  transition: all .35s;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImd1aWxkLXNldHRpbmdzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTs7RUFFWixlQUFlOztFQUVmLGtCQUFrQjtFQUNsQixnQ0FBZ0M7QUFDbEM7QUFDQTtFQUNFLGtCQUFrQjs7RUFFbEIsZUFBZTtFQUNmLGlCQUFpQjs7RUFFakIsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjs7RUFFbEIsb0JBQW9CO0FBQ3RCIiwiZmlsZSI6Imd1aWxkLXNldHRpbmdzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3VpbGQtaWNvbiB7XHJcbiAgd2lkdGg6IDk2cHg7XHJcbiAgaGVpZ2h0OiA5NnB4O1xyXG5cclxuICBmb250LXNpemU6IDQwcHg7XHJcblxyXG4gIGNvbG9yOiB2YXIoLS1mb250KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxufVxyXG4uZ3VpbGQtaWNvbiBzcGFuIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIGZvbnQtc2l6ZTogMzJweDtcclxuICBwYWRkaW5nLXRvcDogMjhweDtcclxuXHJcbiAgdHJhbnNpdGlvbjogYWxsIC4zNXM7XHJcbn1cclxuLmd1aWxkLWljb24gaW1nIHsgICAgXHJcbiAgd2lkdGg6IDk2cHg7XHJcbiAgaGVpZ2h0OiA5NnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHJcbiAgdHJhbnNpdGlvbjogYWxsIC4zNXM7XHJcbn0iXX0= */");

/***/ }),

/***/ "wcK0":
/*!******************************************************!*\
  !*** ./src/app/dialog/profile/profile.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_waves_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./waves.component.html */ "EW/g");
/* harmony import */ var _waves_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./waves.component.css */ "DbLH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let WavesComponent = class WavesComponent {
    constructor() {
        this.inverted = false;
        this.color = 'var(--background-secondary)';
    }
};
WavesComponent.propDecorators = {
    inverted: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
WavesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'waves',
        template: _raw_loader_waves_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_waves_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], WavesComponent);



/***/ }),

/***/ "zPex":
/*!******************************************************************************!*\
  !*** ./src/app/dashboard/components/save-changes/save-changes.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".text {\r\n  text-align: left;\r\n  padding-bottom: 15px;\r\n}\r\nbutton, .text {\r\n  color: var(--light);  \r\n}\r\n#save {\r\n  margin-left: 5px;\r\n  color: var(--dark);\r\n  background-color: var(--success);\r\n}\r\n/* Small devices (landscape phones, 576px and up) */\r\n@media (min-width: 576px) {\r\n  .text {\r\n    text-align: center;\r\n  }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhdmUtY2hhbmdlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdDQUFnQztBQUNsQztBQUVBLG1EQUFtRDtBQUNuRDtFQUNFO0lBQ0Usa0JBQWtCO0VBQ3BCO0FBQ0YiLCJmaWxlIjoic2F2ZS1jaGFuZ2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dCB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxufVxyXG5idXR0b24sIC50ZXh0IHtcclxuICBjb2xvcjogdmFyKC0tbGlnaHQpOyAgXHJcbn1cclxuI3NhdmUge1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgY29sb3I6IHZhcigtLWRhcmspO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1Y2Nlc3MpO1xyXG59XHJcblxyXG4vKiBTbWFsbCBkZXZpY2VzIChsYW5kc2NhcGUgcGhvbmVzLCA1NzZweCBhbmQgdXApICovXHJcbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xyXG4gIC50ZXh0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbn0iXX0= */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
document.addEventListener('DOMContentLoaded', () => {
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_create_invite_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./create-invite.component.html */ "DxrB");
/* harmony import */ var _create_invite_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-invite.component.css */ "tQiX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_services_ws_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/ws.service */ "Swid");







let CreateInviteComponent = class CreateInviteComponent {
    constructor(dialogRef, data, ws) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.ws = ws;
        this.recentlyUpdated = false;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            maxUses: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].max(1000)]),
            expiresAt: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
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
};
CreateInviteComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"],] }] },
    { type: src_app_services_ws_service__WEBPACK_IMPORTED_MODULE_6__["WSService"] }
];
CreateInviteComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-create-invite',
        template: _raw_loader_create_invite_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_create_invite_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CreateInviteComponent);



/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map