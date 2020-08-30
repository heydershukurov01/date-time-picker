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
export class OwlTimerBoxComponent {
    constructor() {
        this.showDivider = false;
        this.step = 1;
        this.valueChange = new EventEmitter();
        this.inputChange = new EventEmitter();
        this.inputStream = new Subject();
        this.inputStreamSub = Subscription.EMPTY;
    }
    /**
     * @return {?}
     */
    get displayValue() {
        return this.boxValue || this.value;
    }
    /**
     * @return {?}
     */
    get owlDTTimerBoxClass() {
        return true;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.inputStreamSub = this.inputStream.pipe(debounceTime(500), distinctUntilChanged()).subscribe((/**
         * @param {?} val
         * @return {?}
         */
        (val) => {
            if (val) {
                /** @type {?} */
                const inputValue = coerceNumberProperty(val, 0);
                this.updateValueViaInput(inputValue);
            }
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.inputStreamSub.unsubscribe();
    }
    /**
     * @return {?}
     */
    upBtnClicked() {
        this.updateValue(this.value + this.step);
    }
    /**
     * @return {?}
     */
    downBtnClicked() {
        this.updateValue(this.value - this.step);
    }
    /**
     * @param {?} val
     * @return {?}
     */
    handleInputChange(val) {
        this.inputStream.next(val);
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    updateValue(value) {
        this.valueChange.emit(value);
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    updateValueViaInput(value) {
        if (value > this.max || value < this.min) {
            return;
        }
        this.inputChange.emit(value);
    }
}
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
OwlTimerBoxComponent.ctorParameters = () => [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXItYm94LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXBpY2stZGF0ZXRpbWUvIiwic291cmNlcyI6WyJsaWIvZGF0ZS10aW1lL3RpbWVyLWJveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLE9BQU8sRUFDSCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUNULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzdELE9BQU8sRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQWNwRSxNQUFNLE9BQU8sb0JBQW9CO0lBNEM3QjtRQTFDUyxnQkFBVyxHQUFHLEtBQUssQ0FBQztRQXNCcEIsU0FBSSxHQUFHLENBQUMsQ0FBQztRQUlSLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUV6QyxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFFM0MsZ0JBQVcsR0FBRyxJQUFJLE9BQU8sRUFBVSxDQUFDO1FBRXBDLG1CQUFjLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQztJQVc1QyxDQUFDOzs7O0lBVEQsSUFBSSxZQUFZO1FBQ1osT0FBTyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDdkMsQ0FBQzs7OztJQUVELElBQUksa0JBQWtCO1FBQ2xCLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7Ozs7SUFLTSxRQUFRO1FBQ1gsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FDdkMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUNqQixvQkFBb0IsRUFBRSxDQUN6QixDQUFDLFNBQVM7Ozs7UUFBQyxDQUFFLEdBQVcsRUFBRyxFQUFFO1lBQzFCLElBQUksR0FBRyxFQUFFOztzQkFDQyxVQUFVLEdBQUcsb0JBQW9CLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztnQkFDL0MsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQ3hDO1FBQ0wsQ0FBQyxFQUFDLENBQUE7SUFDTixDQUFDOzs7O0lBRU0sV0FBVztRQUNkLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdEMsQ0FBQzs7OztJQUVNLFlBQVk7UUFDZixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7SUFFTSxjQUFjO1FBQ2pCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7Ozs7SUFFTSxpQkFBaUIsQ0FBRSxHQUFXO1FBQ2pDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQy9CLENBQUM7Ozs7OztJQUVPLFdBQVcsQ0FBRSxLQUFhO1FBQzlCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Ozs7OztJQUVPLG1CQUFtQixDQUFFLEtBQWE7UUFDdEMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUN0QyxPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7WUFoR0osU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLG12RkFBeUM7Z0JBRXpDLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxJQUFJLEVBQUU7b0JBQ0YsMEJBQTBCLEVBQUUsb0JBQW9CO2lCQUNuRDs7YUFDSjs7Ozs7MEJBSUksS0FBSzs2QkFFTCxLQUFLOzRCQUVMLEtBQUs7K0JBRUwsS0FBSzs4QkFFTCxLQUFLO3VCQU1MLEtBQUs7b0JBRUwsS0FBSztrQkFFTCxLQUFLO2tCQUVMLEtBQUs7bUJBRUwsS0FBSzt5QkFFTCxLQUFLOzBCQUVMLE1BQU07MEJBRU4sTUFBTTs7OztJQTVCUCwyQ0FBNkI7O0lBRTdCLDhDQUFnQzs7SUFFaEMsNkNBQWdDOztJQUVoQyxnREFBa0M7O0lBRWxDLCtDQUFrQzs7Ozs7OztJQU1sQyx3Q0FBMEI7O0lBRTFCLHFDQUF1Qjs7SUFFdkIsbUNBQXFCOztJQUVyQixtQ0FBcUI7O0lBRXJCLG9DQUFrQjs7SUFFbEIsMENBQTRCOztJQUU1QiwyQ0FBbUQ7O0lBRW5ELDJDQUFtRDs7Ozs7SUFFbkQsMkNBQTRDOzs7OztJQUU1Qyw4Q0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogdGltZXItYm94LmNvbXBvbmVudFxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICAgIENvbXBvbmVudCxcclxuICAgIEV2ZW50RW1pdHRlcixcclxuICAgIElucHV0LFxyXG4gICAgT25EZXN0cm95LFxyXG4gICAgT25Jbml0LFxyXG4gICAgT3V0cHV0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGNvZXJjZU51bWJlclByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcclxuaW1wb3J0IHsgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgZGlzdGluY3RVbnRpbENoYW5nZWQgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIGV4cG9ydEFzOiAnb3dsRGF0ZVRpbWVUaW1lckJveCcsXHJcbiAgICBzZWxlY3RvcjogJ293bC1kYXRlLXRpbWUtdGltZXItYm94JyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi90aW1lci1ib3guY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vdGltZXItYm94LmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gICAgaG9zdDoge1xyXG4gICAgICAgICdbY2xhc3Mub3dsLWR0LXRpbWVyLWJveF0nOiAnb3dsRFRUaW1lckJveENsYXNzJ1xyXG4gICAgfVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE93bFRpbWVyQm94Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICAgIEBJbnB1dCgpIHNob3dEaXZpZGVyID0gZmFsc2U7XHJcblxyXG4gICAgQElucHV0KCkgdXBCdG5BcmlhTGFiZWw6IHN0cmluZztcclxuXHJcbiAgICBASW5wdXQoKSB1cEJ0bkRpc2FibGVkOiBib29sZWFuO1xyXG5cclxuICAgIEBJbnB1dCgpIGRvd25CdG5BcmlhTGFiZWw6IHN0cmluZztcclxuXHJcbiAgICBASW5wdXQoKSBkb3duQnRuRGlzYWJsZWQ6IGJvb2xlYW47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBWYWx1ZSB3b3VsZCBiZSBkaXNwbGF5ZWQgaW4gdGhlIGJveFxyXG4gICAgICogSWYgaXQgaXMgbnVsbCwgdGhlIGJveCB3b3VsZCBkaXNwbGF5IFt2YWx1ZV1cclxuICAgICAqICovXHJcbiAgICBASW5wdXQoKSBib3hWYWx1ZTogbnVtYmVyO1xyXG5cclxuICAgIEBJbnB1dCgpIHZhbHVlOiBudW1iZXI7XHJcblxyXG4gICAgQElucHV0KCkgbWluOiBudW1iZXI7XHJcblxyXG4gICAgQElucHV0KCkgbWF4OiBudW1iZXI7XHJcblxyXG4gICAgQElucHV0KCkgc3RlcCA9IDE7XHJcblxyXG4gICAgQElucHV0KCkgaW5wdXRMYWJlbDogc3RyaW5nO1xyXG5cclxuICAgIEBPdXRwdXQoKSB2YWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xyXG5cclxuICAgIEBPdXRwdXQoKSBpbnB1dENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xyXG5cclxuICAgIHByaXZhdGUgaW5wdXRTdHJlYW0gPSBuZXcgU3ViamVjdDxzdHJpbmc+KCk7XHJcblxyXG4gICAgcHJpdmF0ZSBpbnB1dFN0cmVhbVN1YiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcclxuXHJcbiAgICBnZXQgZGlzcGxheVZhbHVlKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYm94VmFsdWUgfHwgdGhpcy52YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgb3dsRFRUaW1lckJveENsYXNzKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmlucHV0U3RyZWFtU3ViID0gdGhpcy5pbnB1dFN0cmVhbS5waXBlKFxyXG4gICAgICAgICAgICBkZWJvdW5jZVRpbWUoNTAwKSxcclxuICAgICAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxyXG4gICAgICAgICkuc3Vic2NyaWJlKCggdmFsOiBzdHJpbmcgKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh2YWwpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0VmFsdWUgPSBjb2VyY2VOdW1iZXJQcm9wZXJ0eSh2YWwsIDApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZVZpYUlucHV0KGlucHV0VmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pbnB1dFN0cmVhbVN1Yi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cEJ0bkNsaWNrZWQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVWYWx1ZSh0aGlzLnZhbHVlICsgdGhpcy5zdGVwKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZG93bkJ0bkNsaWNrZWQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVWYWx1ZSh0aGlzLnZhbHVlIC0gdGhpcy5zdGVwKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaGFuZGxlSW5wdXRDaGFuZ2UoIHZhbDogc3RyaW5nICk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaW5wdXRTdHJlYW0ubmV4dCh2YWwpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlVmFsdWUoIHZhbHVlOiBudW1iZXIgKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVwZGF0ZVZhbHVlVmlhSW5wdXQoIHZhbHVlOiBudW1iZXIgKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHZhbHVlID4gdGhpcy5tYXggfHwgdmFsdWUgPCB0aGlzLm1pbikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaW5wdXRDaGFuZ2UuZW1pdCh2YWx1ZSk7XHJcbiAgICB9XHJcbn1cclxuIl19