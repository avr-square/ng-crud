(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"container\">\n  <h1 class=\"font-weight-bold my-5 text-center\">Welcome to the test SPA</h1>\n  <router-outlet></router-outlet>\n</div>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/action/action.component.html":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/action/action.component.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsActionActionComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<button class=\"btn btn-primary btn-sm font-weight-bold py-0\" title=\"Click the button to open the action menu\" [ngbPopover]=\"actionMenuPopover\" container=\"body\" popoverClass=\"custom-popover\">---</button>\n<ng-template #actionMenuPopover>\n  <ul class=\"list-group list-group-flush\">\n    <li class=\"list-group-item p-2 cursor-pointer\" [title]=\"'Edit this ' + (isItemListing ? 'item' : 'user')\" (click)=\"edit.emit(item)\">Edit {{isItemListing ? 'Item' : 'User'}}</li>\n    <li class=\"list-group-item p-2 cursor-pointer\" [title]=\"'Delete this ' + (isItemListing ? 'item' : 'user')\" (click)=\"rowRemoved.emit(item)\">Delete {{isItemListing ? 'Item' : 'User'}}</li>\n  </ul>\n</ng-template>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/items/edit/edit-item.component.html":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/items/edit/edit-item.component.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsItemsEditEditItemComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<form (submit)=\"onFormSubmit()\" #form=\"ngForm\">\n  <div class=\"modal-body\">\n    <div class=\"form-group\">\n      <label for=\"itemName\" class=\"font-weight-medium\">Name of the item</label>\n      <input type=\"text\" name=\"name\" [(ngModel)]=\"item.name\" required id=\"itemName\" class=\"form-control\" #name=\"ngModel\">\n      <small class=\"text-danger\" *ngIf=\"name.invalid && form.submitted\">Required</small>\n    </div>\n    <div class=\"text-right\">\n      <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"ngbActiveModal.close()\">Cancel</button>\n      <button type=\"submit\" class=\"btn btn-primary ml-2\">Save Changes</button>\n    </div>\n  </div>\n</form>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/items/items.component.html":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/items/items.component.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsItemsItemsComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h5 class=\"font-weight-bold d-flex align-items-center justify-content-between\">\n  <span>Items for {{user?.name}}:-</span>\n  <button class=\"btn btn-primary btn-sm\" routerLink=\"/users\">Go back</button>\n</h5>\n<app-listing [rows]=\"user?.items || []\" [isItemListing]=\"true\" (edit)=\"editItem($event)\" (remove)=\"removeItem($event)\"></app-listing>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/listing/listing.component.html":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/listing/listing.component.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsListingListingComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ng-container *ngIf=\"rows && rows.length; else noRows\">\n  <div class=\"table-responsive border rounded\">\n    <table class=\"table mb-0\">\n      <thead>\n        <tr>\n          <th>Name</th>\n          <ng-container *ngIf=\"!isItemListing\">\n            <th>Phone number</th>\n            <th>Address</th>\n          </ng-container>\n          <th>Action</th>\n        </tr>\n      </thead>\n      <tbody>\n        <ng-template ngFor let-row [ngForOf]=\"rows\" let-i=\"index\">\n          <tr>\n            <td>\n              <span class=\"cursor-pointer\" [ngbTooltip]=\"!isItemListing ? (row.items.length + ' items available') : null\" [routerLink]=\"!isItemListing ? ('/items/' + row.id) : null\">\n                <img *ngIf=\"isItemListing\" [src]=\"row.image\" [alt]=\"row.name\" class=\"img-item shadow rounded-circle mr-1\">\n                {{row.name}}\n              </span>\n            </td>\n            <ng-container *ngIf=\"!isItemListing\">\n              <td>{{row.phoneNumber}}</td>\n              <td>{{row.address}}</td>\n            </ng-container>\n            <td>\n              <app-action-menu [isItemListing]=\"isItemListing\" [item]=\"row\" [index]=\"i\" (rowRemoved)=\"remove.emit($event)\" (edit)=\"edit.emit($event)\"></app-action-menu>\n            </td>\n          </tr>\n        </ng-template>\n      </tbody>\n    </table>\n  </div>\n</ng-container>\n<ng-template #noRows>\n  <div class=\"border-dashed rounded p-5\">\n    <p class=\"lead mb-0 text-center font-weight-medium\">Sorry..! No {{isItemListing ? 'item' : 'user'}} available.</p>\n  </div>\n</ng-template>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/users/edit/edit-user.component.html":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/users/edit/edit-user.component.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsUsersEditEditUserComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<form (submit)=\"onFormSubmit()\" #form=\"ngForm\">\n  <div class=\"modal-body\">\n    <div class=\"form-group\">\n      <label for=\"name\" class=\"font-weight-medium\">Name</label>\n      <input type=\"text\" name=\"name\" [(ngModel)]=\"user.name\" required id=\"name\" class=\"form-control\" #name=\"ngModel\">\n      <small class=\"text-danger\" *ngIf=\"name.invalid && form.submitted\">Required</small>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"phoneNumber\" class=\"font-weight-medium\">Phone number</label>\n      <input type=\"text\" name=\"phoneNumber\" [(ngModel)]=\"user.phoneNumber\" required pattern=\"^\\d+$\" id=\"phoneNumber\" maxlength=\"10\" class=\"form-control\" #phoneNumber=\"ngModel\">\n      <small class=\"text-danger\" *ngIf=\"phoneNumber.invalid && !!phoneNumber.errors?.required && form.submitted\">Required</small>\n      <small class=\"text-danger\" *ngIf=\"phoneNumber.invalid && !!phoneNumber.errors?.pattern && form.submitted\">Enter digits only</small>\n      <small class=\"text-danger\" *ngIf=\"phoneNumber.invalid && !!phoneNumber.errors?.maxlength && form.submitted\">Enter 10 digits only</small>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"address\" class=\"font-weight-medium\">Address</label>\n      <input type=\"text\" name=\"address\" [(ngModel)]=\"user.address\" required id=\"address\" class=\"form-control\" #address=\"ngModel\">\n      <small class=\"text-danger\" *ngIf=\"address.invalid && form.submitted\">Required</small>\n    </div>\n    <div class=\"text-right\">\n      <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"ngbActiveModal.close()\">Cancel</button>\n      <button type=\"submit\" class=\"btn btn-primary ml-2\">Save Changes</button>\n    </div>\n  </div>\n</form>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/users/users.component.html":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/users/users.component.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsUsersUsersComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h5 class=\"font-weight-bold\">Users:-</h5>\n<app-listing [rows]=\"users\" [isItemListing]=\"false\" (edit)=\"editItem($event)\" (remove)=\"removeItem($event)\"></app-listing>\n";
      /***/
    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./app.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"]
      })], AppComponent);
      /***/
    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _app_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.routing */
      "./src/app/app.routing.ts");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _components_listing_listing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/listing/listing.component */
      "./src/app/components/listing/listing.component.ts");
      /* harmony import */


      var _components_action_action_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/action/action.component */
      "./src/app/components/action/action.component.ts");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var _components_items_edit_edit_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./components/items/edit/edit-item.component */
      "./src/app/components/items/edit/edit-item.component.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _components_users_edit_edit_user_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./components/users/edit/edit-user.component */
      "./src/app/components/users/edit/edit-user.component.ts");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _app_routing__WEBPACK_IMPORTED_MODULE_3__["appComponents"], _components_listing_listing_component__WEBPACK_IMPORTED_MODULE_6__["ListingComponent"], _components_action_action_component__WEBPACK_IMPORTED_MODULE_7__["ActionComponent"], _components_users_edit_edit_user_component__WEBPACK_IMPORTED_MODULE_11__["EditUserComponent"], _components_items_edit_edit_item_component__WEBPACK_IMPORTED_MODULE_9__["EditItemComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _app_routing__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbPopoverModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbTooltipModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModalModule"]],
        entryComponents: [_components_users_edit_edit_user_component__WEBPACK_IMPORTED_MODULE_11__["EditUserComponent"], _components_items_edit_edit_item_component__WEBPACK_IMPORTED_MODULE_9__["EditItemComponent"]],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "./src/app/app.routing.ts":
    /*!********************************!*\
      !*** ./src/app/app.routing.ts ***!
      \********************************/

    /*! exports provided: appComponents, AppRoutingModule */

    /***/
    function srcAppAppRoutingTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "appComponents", function () {
        return appComponents;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _components_users_users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/users/users.component */
      "./src/app/components/users/users.component.ts");
      /* harmony import */


      var _components_users_users_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/users/users.resolver */
      "./src/app/components/users/users.resolver.ts");
      /* harmony import */


      var _components_items_items_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/items/items.component */
      "./src/app/components/items/items.component.ts");

      var routes = [{
        path: '',
        redirectTo: '/users',
        pathMatch: 'full'
      }, {
        path: 'users',
        component: _components_users_users_component__WEBPACK_IMPORTED_MODULE_3__["UsersComponent"],
        resolve: {
          users: _components_users_users_resolver__WEBPACK_IMPORTED_MODULE_4__["UsersResolver"]
        }
      }, {
        path: 'items/:userId',
        component: _components_items_items_component__WEBPACK_IMPORTED_MODULE_5__["ItemsComponent"],
        resolve: {
          users: _components_users_users_resolver__WEBPACK_IMPORTED_MODULE_4__["UsersResolver"]
        }
      }];
      var appComponents = [_components_users_users_component__WEBPACK_IMPORTED_MODULE_3__["UsersComponent"], _components_items_items_component__WEBPACK_IMPORTED_MODULE_5__["ItemsComponent"]];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        providers: [_components_users_users_resolver__WEBPACK_IMPORTED_MODULE_4__["UsersResolver"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "./src/app/components/action/action.component.ts":
    /*!*******************************************************!*\
      !*** ./src/app/components/action/action.component.ts ***!
      \*******************************************************/

    /*! exports provided: ActionComponent */

    /***/
    function srcAppComponentsActionActionComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ActionComponent", function () {
        return ActionComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var ActionComponent = function ActionComponent() {
        _classCallCheck(this, ActionComponent);

        this.isItemListing = false;
        this.item = null;
        this.index = 0;
        this.rowRemoved = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.edit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      };

      ActionComponent.ctorParameters = function () {
        return [];
      };

      ActionComponent.propDecorators = {
        isItemListing: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        item: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        index: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        rowRemoved: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        edit: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      };
      ActionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-action-menu',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./action.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/action/action.component.html"))["default"]
      })], ActionComponent);
      /***/
    },

    /***/
    "./src/app/components/items/edit/edit-item.component.ts":
    /*!**************************************************************!*\
      !*** ./src/app/components/items/edit/edit-item.component.ts ***!
      \**************************************************************/

    /*! exports provided: EditItemComponent */

    /***/
    function srcAppComponentsItemsEditEditItemComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditItemComponent", function () {
        return EditItemComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_models_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/models/user.model */
      "./src/app/models/user.model.ts");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var src_app_services_main_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/main.service */
      "./src/app/services/main.service.ts");

      var EditItemComponent = /*#__PURE__*/function () {
        function EditItemComponent(_NgbActiveModal, _MainService) {
          _classCallCheck(this, EditItemComponent);

          this._NgbActiveModal = _NgbActiveModal;
          this._MainService = _MainService;
          this.userId = 0;
          this.item = new src_app_models_user_model__WEBPACK_IMPORTED_MODULE_2__["Item"]();
        }

        _createClass(EditItemComponent, [{
          key: "onFormSubmit",
          value: function onFormSubmit() {
            var _this = this;

            if (this.form.valid) {
              var users = this._MainService.getAllUsers().map(function (user) {
                if ("".concat(user.id) === "".concat(_this.userId)) {
                  user.items = user.items.map(function (item) {
                    return "".concat(item.id) === "".concat(_this.item.id) ? Object.assign(Object.assign({}, item), _this.item) : item;
                  });
                }

                return user;
              });

              this._MainService.setAllUsers(users);

              this._NgbActiveModal.close();
            }
          }
        }, {
          key: "ngbActiveModal",
          get: function get() {
            return this._NgbActiveModal;
          }
        }]);

        return EditItemComponent;
      }();

      EditItemComponent.ctorParameters = function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"]
        }, {
          type: src_app_services_main_service__WEBPACK_IMPORTED_MODULE_4__["MainService"]
        }];
      };

      EditItemComponent.propDecorators = {
        userId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        item: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        form: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['form', {
            "static": true
          }]
        }]
      };
      EditItemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-item',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./edit-item.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/items/edit/edit-item.component.html"))["default"]
      })], EditItemComponent);
      /***/
    },

    /***/
    "./src/app/components/items/items.component.ts":
    /*!*****************************************************!*\
      !*** ./src/app/components/items/items.component.ts ***!
      \*****************************************************/

    /*! exports provided: ItemsComponent */

    /***/
    function srcAppComponentsItemsItemsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ItemsComponent", function () {
        return ItemsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var src_app_services_main_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/main.service */
      "./src/app/services/main.service.ts");
      /* harmony import */


      var _edit_edit_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./edit/edit-item.component */
      "./src/app/components/items/edit/edit-item.component.ts");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

      var ItemsComponent = /*#__PURE__*/function () {
        function ItemsComponent(_ActivatedRoute, _MainService, _NgbModalService) {
          _classCallCheck(this, ItemsComponent);

          this._ActivatedRoute = _ActivatedRoute;
          this._MainService = _MainService;
          this._NgbModalService = _NgbModalService;
          this.user = null;
          this.userId = 0;
          this.alive = true;
        }

        _createClass(ItemsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.userId = this._ActivatedRoute.snapshot.params.userId;

            this._MainService.getAllUsersAsObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeWhile"])(function () {
              return _this2.alive;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (users) {
              return users.find(function (user) {
                return "".concat(_this2.userId) === "".concat(user.id);
              }) || null;
            })).subscribe(function (user) {
              return _this2.user = user;
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.alive = false;
          }
        }, {
          key: "editItem",
          value: function editItem(item) {
            var modelRef = this._NgbModalService.open(_edit_edit_item_component__WEBPACK_IMPORTED_MODULE_5__["EditItemComponent"], {
              ariaLabelledBy: 'Edit item',
              centered: true
            });

            modelRef.componentInstance.userId = this.userId;
            modelRef.componentInstance.item = Object.assign({}, item);
          }
        }, {
          key: "removeItem",
          value: function removeItem(item) {
            var _this3 = this;

            this.user.items.forEach(function (val, index, array) {
              return "".concat(val.id) === "".concat(item.id) && array.splice(index, 1);
            });

            var users = this._MainService.getAllUsers().map(function (user) {
              return "".concat(user.id) === "".concat(_this3.userId) ? _this3.user : user;
            });

            this._MainService.setAllUsers(users);
          }
        }]);

        return ItemsComponent;
      }();

      ItemsComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: src_app_services_main_service__WEBPACK_IMPORTED_MODULE_4__["MainService"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]
        }];
      };

      ItemsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-items',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./items.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/items/items.component.html"))["default"]
      })], ItemsComponent);
      /***/
    },

    /***/
    "./src/app/components/listing/listing.component.ts":
    /*!*********************************************************!*\
      !*** ./src/app/components/listing/listing.component.ts ***!
      \*********************************************************/

    /*! exports provided: ListingComponent */

    /***/
    function srcAppComponentsListingListingComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListingComponent", function () {
        return ListingComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var ListingComponent = function ListingComponent() {
        _classCallCheck(this, ListingComponent);

        this.rows = [];
        this.isItemListing = false;
        this.edit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.remove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      };

      ListingComponent.ctorParameters = function () {
        return [];
      };

      ListingComponent.propDecorators = {
        rows: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        isItemListing: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        edit: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        remove: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      };
      ListingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-listing',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./listing.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/listing/listing.component.html"))["default"]
      })], ListingComponent);
      /***/
    },

    /***/
    "./src/app/components/users/edit/edit-user.component.ts":
    /*!**************************************************************!*\
      !*** ./src/app/components/users/edit/edit-user.component.ts ***!
      \**************************************************************/

    /*! exports provided: EditUserComponent */

    /***/
    function srcAppComponentsUsersEditEditUserComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditUserComponent", function () {
        return EditUserComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_models_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/models/user.model */
      "./src/app/models/user.model.ts");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var src_app_services_main_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/main.service */
      "./src/app/services/main.service.ts");

      var EditUserComponent = /*#__PURE__*/function () {
        function EditUserComponent(_NgbActiveModal, _MainService) {
          _classCallCheck(this, EditUserComponent);

          this._NgbActiveModal = _NgbActiveModal;
          this._MainService = _MainService;
          this.user = new src_app_models_user_model__WEBPACK_IMPORTED_MODULE_2__["User"]();
        }

        _createClass(EditUserComponent, [{
          key: "onFormSubmit",
          value: function onFormSubmit() {
            var _this4 = this;

            if (this.form.valid) {
              var users = this._MainService.getAllUsers().map(function (user) {
                return "".concat(user.id) === "".concat(_this4.user.id) ? Object.assign(Object.assign({}, user), _this4.user) : user;
              });

              this._MainService.setAllUsers(users);

              this._NgbActiveModal.close();
            }
          }
        }, {
          key: "ngbActiveModal",
          get: function get() {
            return this._NgbActiveModal;
          }
        }]);

        return EditUserComponent;
      }();

      EditUserComponent.ctorParameters = function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"]
        }, {
          type: src_app_services_main_service__WEBPACK_IMPORTED_MODULE_4__["MainService"]
        }];
      };

      EditUserComponent.propDecorators = {
        user: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        form: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['form', {
            "static": true
          }]
        }]
      };
      EditUserComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-user',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./edit-user.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/users/edit/edit-user.component.html"))["default"]
      })], EditUserComponent);
      /***/
    },

    /***/
    "./src/app/components/users/users.component.ts":
    /*!*****************************************************!*\
      !*** ./src/app/components/users/users.component.ts ***!
      \*****************************************************/

    /*! exports provided: UsersComponent */

    /***/
    function srcAppComponentsUsersUsersComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsersComponent", function () {
        return UsersComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var src_app_services_main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/main.service */
      "./src/app/services/main.service.ts");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var _edit_edit_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./edit/edit-user.component */
      "./src/app/components/users/edit/edit-user.component.ts");

      var UsersComponent = /*#__PURE__*/function () {
        function UsersComponent(_MainService, _NgbModalService) {
          _classCallCheck(this, UsersComponent);

          this._MainService = _MainService;
          this._NgbModalService = _NgbModalService;
          this.users = [];
          this.alive = true;
        }

        _createClass(UsersComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            this._MainService.getAllUsersAsObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeWhile"])(function () {
              return _this5.alive;
            })).subscribe(function (users) {
              return _this5.users = users && users.length ? users : [];
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.alive = false;
          }
        }, {
          key: "editItem",
          value: function editItem(user) {
            var modelRef = this._NgbModalService.open(_edit_edit_user_component__WEBPACK_IMPORTED_MODULE_5__["EditUserComponent"], {
              ariaLabelledBy: 'Edit user',
              centered: true
            });

            modelRef.componentInstance.user = Object.assign({}, user);
          }
        }, {
          key: "removeItem",
          value: function removeItem(user) {
            this.users.forEach(function (val, index, array) {
              return "".concat(val.id) === "".concat(user.id) && array.splice(index, 1);
            });

            this._MainService.setAllUsers(this.users);
          }
        }]);

        return UsersComponent;
      }();

      UsersComponent.ctorParameters = function () {
        return [{
          type: src_app_services_main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]
        }];
      };

      UsersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-users',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./users.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/users/users.component.html"))["default"]
      })], UsersComponent);
      /***/
    },

    /***/
    "./src/app/components/users/users.resolver.ts":
    /*!****************************************************!*\
      !*** ./src/app/components/users/users.resolver.ts ***!
      \****************************************************/

    /*! exports provided: UsersResolver */

    /***/
    function srcAppComponentsUsersUsersResolverTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsersResolver", function () {
        return UsersResolver;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var src_app_services_main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/main.service */
      "./src/app/services/main.service.ts");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");

      var UsersResolver = /*#__PURE__*/function () {
        function UsersResolver(_MainService) {
          _classCallCheck(this, UsersResolver);

          this._MainService = _MainService;
        }

        _createClass(UsersResolver, [{
          key: "resolve",
          value: function resolve() {
            var _this6 = this;

            var users = this._MainService.getAllUsers();

            if (users && users.length) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])([users]);
            }

            return this._MainService.getAllUsersFromAPI().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (allUsers) {
              return _this6._MainService.setAllUsers(allUsers);
            }));
          }
        }]);

        return UsersResolver;
      }();

      UsersResolver.ctorParameters = function () {
        return [{
          type: src_app_services_main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"]
        }];
      };

      UsersResolver = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], UsersResolver);
      /***/
    },

    /***/
    "./src/app/models/user.model.ts":
    /*!**************************************!*\
      !*** ./src/app/models/user.model.ts ***!
      \**************************************/

    /*! exports provided: User, Item */

    /***/
    function srcAppModelsUserModelTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "User", function () {
        return User;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Item", function () {
        return Item;
      });

      var User = function User() {
        _classCallCheck(this, User);

        this.id = 0;
        this.name = '';
        this.phoneNumber = '';
        this.address = '';
        this.items = [];
      };

      var Item = function Item() {
        _classCallCheck(this, Item);

        this.id = 0;
        this.image = '';
        this.name = '';
      };
      /***/

    },

    /***/
    "./src/app/services/main.service.ts":
    /*!******************************************!*\
      !*** ./src/app/services/main.service.ts ***!
      \******************************************/

    /*! exports provided: MainService */

    /***/
    function srcAppServicesMainServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MainService", function () {
        return MainService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");

      var MainService = /*#__PURE__*/function () {
        function MainService(_HttpClient) {
          _classCallCheck(this, MainService);

          this._HttpClient = _HttpClient;
          this.users = [];
          this.usersSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        }

        _createClass(MainService, [{
          key: "getAllUsersFromAPI",
          value: function getAllUsersFromAPI() {
            return this._HttpClient.get('/assets/data.json');
          }
        }, {
          key: "getAllUsers",
          value: function getAllUsers() {
            return _toConsumableArray(this.users);
          }
        }, {
          key: "getAllUsersAsObservable",
          value: function getAllUsersAsObservable() {
            return this.usersSubject.asObservable();
          }
        }, {
          key: "setAllUsers",
          value: function setAllUsers(users) {
            this.users = _toConsumableArray(users);
            this.usersSubject.next(_toConsumableArray(users));
          }
        }]);

        return MainService;
      }();

      MainService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      MainService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], MainService);
      /***/
    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
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

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /home/runner/work/ng-crud/ng-crud/src/main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map