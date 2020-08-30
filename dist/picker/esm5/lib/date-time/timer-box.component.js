/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * timer-box.component
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { coerceNumberProperty } from '@angular/cdk/coercion';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
var OwlTimerBoxComponent = /** @class */ (function () {
    function OwlTimerBoxComponent() {
        this.showDivider = false;
        this.step = 1;
        this.valueChange = new EventEmitter();
        this.inputChange = new EventEmitter();
        this.inputStream = new Subject();
        this.inputStreamSub = Subscription.EMPTY;
    }
    Object.defineProperty(OwlTimerBoxComponent.prototype, "displayValue", {
        get: /**
         * @return {?}
         */
        function () {
            return this.boxValue || this.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlTimerBoxComponent.prototype, "owlDTTimerBoxClass", {
        get: /**
         * @return {?}
         */
        function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    OwlTimerBoxComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.inputStreamSub = this.inputStream.pipe(debounceTime(500), distinctUntilChanged()).subscribe((/**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (val) {
                /** @type {?} */
                var inputValue = coerceNumberProperty(val, 0);
                _this.updateValueViaInput(inputValue);
            }
        }));
    };
    /**
     * @return {?}
     */
    OwlTimerBoxComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.inputStreamSub.unsubscribe();
    };
    /**
     * @return {?}
     */
    OwlTimerBoxComponent.prototype.upBtnClicked = /**
     * @return {?}
     */
    function () {
        this.updateValue(this.value + this.step);
    };
    /**
     * @return {?}
     */
    OwlTimerBoxComponent.prototype.downBtnClicked = /**
     * @return {?}
     */
    function () {
        this.updateValue(this.value - this.step);
    };
    /**
     * @param {?} val
     * @return {?}
     */
    OwlTimerBoxComponent.prototype.handleInputChange = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this.inputStream.next(val);
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    OwlTimerBoxComponent.prototype.updateValue = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.valueChange.emit(value);
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    OwlTimerBoxComponent.prototype.updateValueViaInput = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value > this.max || value < this.min) {
            return;
        }
        this.inputChange.emit(value);
    };
    OwlTimerBoxComponent.decorators = [
        { type: Component, args: [{
                    exportAs: 'owlDateTimeTimerBox',
                    selector: 'owl-date-time-timer-box',
                    template: "<div *ngIf=\"showDivider\" class=\"owl-dt-timer-divider\" aria-hidden=\"true\"></div>\r\n<button class=\"owl-dt-control-button owl-dt-control-arrow-button\"\r\n        type=\"button\" tabindex=\"-1\"\r\n        [disabled]=\"upBtnDisabled\"\r\n        [attr.aria-label]=\"upBtnAriaLabel\"\r\n        (click)=\"upBtnClicked()\">\r\n    <span class=\"owl-dt-control-button-content\" tabindex=\"-1\">\r\n        <!-- <editor-fold desc=\"SVG Arrow Up\"> -->\r\n    <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n                 version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 451.847 451.846\"\r\n                 style=\"enable-background:new 0 0 451.847 451.846;\" xml:space=\"preserve\"\r\n                 width=\"100%\" height=\"100%\">\r\n                    <path d=\"M248.292,106.406l194.281,194.29c12.365,12.359,12.365,32.391,0,44.744c-12.354,12.354-32.391,12.354-44.744,0\r\n                        L225.923,173.529L54.018,345.44c-12.36,12.354-32.395,12.354-44.748,0c-12.359-12.354-12.359-32.391,0-44.75L203.554,106.4\r\n                        c6.18-6.174,14.271-9.259,22.369-9.259C234.018,97.141,242.115,100.232,248.292,106.406z\"/>\r\n                </svg>\r\n        <!-- </editor-fold> -->\r\n    </span>\r\n</button>\r\n<label class=\"owl-dt-timer-content\">\r\n    <input class=\"owl-dt-timer-input\" maxlength=\"2\"\r\n           [value]=\"displayValue | numberFixedLen : 2\"\r\n           (input)=\"handleInputChange(valueInput.value)\" #valueInput>\r\n    <span class=\"owl-hidden-accessible\">{{inputLabel}}</span>\r\n</label>\r\n<button class=\"owl-dt-control-button owl-dt-control-arrow-button\"\r\n        type=\"button\" tabindex=\"-1\"\r\n        [disabled]=\"downBtnDisabled\"\r\n        [attr.aria-label]=\"downBtnAriaLabel\"\r\n        (click)=\"downBtnClicked()\">\r\n    <span class=\"owl-dt-control-button-content\" tabindex=\"-1\">\r\n        <!-- <editor-fold desc=\"SVG Arrow Down\"> -->\r\n    <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n                 version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 451.847 451.846\"\r\n                 style=\"enable-background:new 0 0 451.847 451.846;\" xml:space=\"preserve\"\r\n                 width=\"100%\" height=\"100%\">\r\n                    <path d=\"M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751\r\n                        c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0\r\n                        c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z\"/>\r\n                </svg>\r\n        <!-- </editor-fold> -->\r\n    </span>\r\n</button>\r\n",
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    host: {
                        '[class.owl-dt-timer-box]': 'owlDTTimerBoxClass'
                    },
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    OwlTimerBoxComponent.ctorParameters = function () { return []; };
    OwlTimerBoxComponent.propDecorators = {
        showDivider: [{ type: Input }],
        upBtnAriaLabel: [{ type: Input }],
        upBtnDisabled: [{ type: Input }],
        downBtnAriaLabel: [{ type: Input }],
        downBtnDisabled: [{ type: Input }],
        boxValue: [{ type: Input }],
        value: [{ type: Input }],
        min: [{ type: Input }],
        max: [{ type: Input }],
        step: [{ type: Input }],
        inputLabel: [{ type: Input }],
        valueChange: [{ type: Output }],
        inputChange: [{ type: Output }]
    };
    return OwlTimerBoxComponent;
}());
export { OwlTimerBoxComponent };
if (false) {
    /** @type {?} */
    OwlTimerBoxComponent.prototype.showDivider;
    /** @type {?} */
    OwlTimerBoxComponent.prototype.upBtnAriaLabel;
    /** @type {?} */
    OwlTimerBoxComponent.prototype.upBtnDisabled;
    /** @type {?} */
    OwlTimerBoxComponent.prototype.downBtnAriaLabel;
    /** @type {?} */
    OwlTimerBoxComponent.prototype.downBtnDisabled;
    /**
     * Value would be displayed in the box
     * If it is null, the box would display [value]
     *
     * @type {?}
     */
    OwlTimerBoxComponent.prototype.boxValue;
    /** @type {?} */
    OwlTimerBoxComponent.prototype.value;
    /** @type {?} */
    OwlTimerBoxComponent.prototype.min;
    /** @type {?} */
    OwlTimerBoxComponent.prototype.max;
    /** @type {?} */
    OwlTimerBoxComponent.prototype.step;
    /** @type {?} */
    OwlTimerBoxComponent.prototype.inputLabel;
    /** @type {?} */
    OwlTimerBoxComponent.prototype.valueChange;
    /** @type {?} */
    OwlTimerBoxComponent.prototype.inputChange;
    /**
     * @type {?}
     * @private
     */
    OwlTimerBoxComponent.prototype.inputStream;
    /**
     * @type {?}
     * @private
     */
    OwlTimerBoxComponent.prototype.inputStreamSub;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXItYm94LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXBpY2stZGF0ZXRpbWUvIiwic291cmNlcyI6WyJsaWIvZGF0ZS10aW1lL3RpbWVyLWJveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLE9BQU8sRUFDSCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUNULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzdELE9BQU8sRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVwRTtJQXdESTtRQTFDUyxnQkFBVyxHQUFHLEtBQUssQ0FBQztRQXNCcEIsU0FBSSxHQUFHLENBQUMsQ0FBQztRQUlSLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUV6QyxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFFM0MsZ0JBQVcsR0FBRyxJQUFJLE9BQU8sRUFBVSxDQUFDO1FBRXBDLG1CQUFjLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQztJQVc1QyxDQUFDO0lBVEQsc0JBQUksOENBQVk7Ozs7UUFBaEI7WUFDSSxPQUFPLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN2QyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLG9EQUFrQjs7OztRQUF0QjtZQUNJLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7OztPQUFBOzs7O0lBS00sdUNBQVE7OztJQUFmO1FBQUEsaUJBVUM7UUFURyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUN2QyxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQ2pCLG9CQUFvQixFQUFFLENBQ3pCLENBQUMsU0FBUzs7OztRQUFDLFVBQUUsR0FBVztZQUNyQixJQUFJLEdBQUcsRUFBRTs7b0JBQ0MsVUFBVSxHQUFHLG9CQUFvQixDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7Z0JBQy9DLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUN4QztRQUNMLENBQUMsRUFBQyxDQUFBO0lBQ04sQ0FBQzs7OztJQUVNLDBDQUFXOzs7SUFBbEI7UUFDSSxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3RDLENBQUM7Ozs7SUFFTSwyQ0FBWTs7O0lBQW5CO1FBQ0ksSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7O0lBRU0sNkNBQWM7OztJQUFyQjtRQUNJLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7Ozs7SUFFTSxnREFBaUI7Ozs7SUFBeEIsVUFBMEIsR0FBVztRQUNqQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMvQixDQUFDOzs7Ozs7SUFFTywwQ0FBVzs7Ozs7SUFBbkIsVUFBcUIsS0FBYTtRQUM5QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7Ozs7SUFFTyxrREFBbUI7Ozs7O0lBQTNCLFVBQTZCLEtBQWE7UUFDdEMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUN0QyxPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDOztnQkFoR0osU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLFFBQVEsRUFBRSx5QkFBeUI7b0JBQ25DLG12RkFBeUM7b0JBRXpDLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxJQUFJLEVBQUU7d0JBQ0YsMEJBQTBCLEVBQUUsb0JBQW9CO3FCQUNuRDs7aUJBQ0o7Ozs7OzhCQUlJLEtBQUs7aUNBRUwsS0FBSztnQ0FFTCxLQUFLO21DQUVMLEtBQUs7a0NBRUwsS0FBSzsyQkFNTCxLQUFLO3dCQUVMLEtBQUs7c0JBRUwsS0FBSztzQkFFTCxLQUFLO3VCQUVMLEtBQUs7NkJBRUwsS0FBSzs4QkFFTCxNQUFNOzhCQUVOLE1BQU07O0lBdURYLDJCQUFDO0NBQUEsQUFqR0QsSUFpR0M7U0FyRlksb0JBQW9COzs7SUFFN0IsMkNBQTZCOztJQUU3Qiw4Q0FBZ0M7O0lBRWhDLDZDQUFnQzs7SUFFaEMsZ0RBQWtDOztJQUVsQywrQ0FBa0M7Ozs7Ozs7SUFNbEMsd0NBQTBCOztJQUUxQixxQ0FBdUI7O0lBRXZCLG1DQUFxQjs7SUFFckIsbUNBQXFCOztJQUVyQixvQ0FBa0I7O0lBRWxCLDBDQUE0Qjs7SUFFNUIsMkNBQW1EOztJQUVuRCwyQ0FBbUQ7Ozs7O0lBRW5ELDJDQUE0Qzs7Ozs7SUFFNUMsOENBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIHRpbWVyLWJveC5jb21wb25lbnRcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gICAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBFdmVudEVtaXR0ZXIsXHJcbiAgICBJbnB1dCxcclxuICAgIE9uRGVzdHJveSxcclxuICAgIE9uSW5pdCxcclxuICAgIE91dHB1dFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBjb2VyY2VOdW1iZXJQcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XHJcbmltcG9ydCB7IFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGRpc3RpbmN0VW50aWxDaGFuZ2VkIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBleHBvcnRBczogJ293bERhdGVUaW1lVGltZXJCb3gnLFxyXG4gICAgc2VsZWN0b3I6ICdvd2wtZGF0ZS10aW1lLXRpbWVyLWJveCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vdGltZXItYm94LmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL3RpbWVyLWJveC5jb21wb25lbnQuc2NzcyddLFxyXG4gICAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICAgIGhvc3Q6IHtcclxuICAgICAgICAnW2NsYXNzLm93bC1kdC10aW1lci1ib3hdJzogJ293bERUVGltZXJCb3hDbGFzcydcclxuICAgIH1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBPd2xUaW1lckJveENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHJcbiAgICBASW5wdXQoKSBzaG93RGl2aWRlciA9IGZhbHNlO1xyXG5cclxuICAgIEBJbnB1dCgpIHVwQnRuQXJpYUxhYmVsOiBzdHJpbmc7XHJcblxyXG4gICAgQElucHV0KCkgdXBCdG5EaXNhYmxlZDogYm9vbGVhbjtcclxuXHJcbiAgICBASW5wdXQoKSBkb3duQnRuQXJpYUxhYmVsOiBzdHJpbmc7XHJcblxyXG4gICAgQElucHV0KCkgZG93bkJ0bkRpc2FibGVkOiBib29sZWFuO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVmFsdWUgd291bGQgYmUgZGlzcGxheWVkIGluIHRoZSBib3hcclxuICAgICAqIElmIGl0IGlzIG51bGwsIHRoZSBib3ggd291bGQgZGlzcGxheSBbdmFsdWVdXHJcbiAgICAgKiAqL1xyXG4gICAgQElucHV0KCkgYm94VmFsdWU6IG51bWJlcjtcclxuXHJcbiAgICBASW5wdXQoKSB2YWx1ZTogbnVtYmVyO1xyXG5cclxuICAgIEBJbnB1dCgpIG1pbjogbnVtYmVyO1xyXG5cclxuICAgIEBJbnB1dCgpIG1heDogbnVtYmVyO1xyXG5cclxuICAgIEBJbnB1dCgpIHN0ZXAgPSAxO1xyXG5cclxuICAgIEBJbnB1dCgpIGlucHV0TGFiZWw6IHN0cmluZztcclxuXHJcbiAgICBAT3V0cHV0KCkgdmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcclxuXHJcbiAgICBAT3V0cHV0KCkgaW5wdXRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcclxuXHJcbiAgICBwcml2YXRlIGlucHV0U3RyZWFtID0gbmV3IFN1YmplY3Q8c3RyaW5nPigpO1xyXG5cclxuICAgIHByaXZhdGUgaW5wdXRTdHJlYW1TdWIgPSBTdWJzY3JpcHRpb24uRU1QVFk7XHJcblxyXG4gICAgZ2V0IGRpc3BsYXlWYWx1ZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJveFZhbHVlIHx8IHRoaXMudmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG93bERUVGltZXJCb3hDbGFzcygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5pbnB1dFN0cmVhbVN1YiA9IHRoaXMuaW5wdXRTdHJlYW0ucGlwZShcclxuICAgICAgICAgICAgZGVib3VuY2VUaW1lKDUwMCksXHJcbiAgICAgICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcclxuICAgICAgICApLnN1YnNjcmliZSgoIHZhbDogc3RyaW5nICkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodmFsKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbnB1dFZhbHVlID0gY29lcmNlTnVtYmVyUHJvcGVydHkodmFsLCAwKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWVWaWFJbnB1dChpbnB1dFZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaW5wdXRTdHJlYW1TdWIudW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBCdG5DbGlja2VkKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudXBkYXRlVmFsdWUodGhpcy52YWx1ZSArIHRoaXMuc3RlcCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRvd25CdG5DbGlja2VkKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudXBkYXRlVmFsdWUodGhpcy52YWx1ZSAtIHRoaXMuc3RlcCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGhhbmRsZUlucHV0Q2hhbmdlKCB2YWw6IHN0cmluZyApOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmlucHV0U3RyZWFtLm5leHQodmFsKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVwZGF0ZVZhbHVlKCB2YWx1ZTogbnVtYmVyICk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdCh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVWYWx1ZVZpYUlucHV0KCB2YWx1ZTogbnVtYmVyICk6IHZvaWQge1xyXG4gICAgICAgIGlmICh2YWx1ZSA+IHRoaXMubWF4IHx8IHZhbHVlIDwgdGhpcy5taW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmlucHV0Q2hhbmdlLmVtaXQodmFsdWUpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==