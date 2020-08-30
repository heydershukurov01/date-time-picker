/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * timer.component
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, NgZone, Optional, Output } from '@angular/core';
import { OwlDateTimeIntl } from './date-time-picker-intl.service';
import { DateTimeAdapter } from './adapter/date-time-adapter.class';
import { take } from 'rxjs/operators';
/**
 * @template T
 */
export class OwlTimerComponent {
    /**
     * @param {?} ngZone
     * @param {?} elmRef
     * @param {?} pickerIntl
     * @param {?} cdRef
     * @param {?} dateTimeAdapter
     */
    constructor(ngZone, elmRef, pickerIntl, cdRef, dateTimeAdapter) {
        this.ngZone = ngZone;
        this.elmRef = elmRef;
        this.pickerIntl = pickerIntl;
        this.cdRef = cdRef;
        this.dateTimeAdapter = dateTimeAdapter;
        this.isPM = false; // a flag indicates the current timer moment is in PM or AM
        /**
         * Hours to change per step
         */
        this.stepHour = 1;
        /**
         * Minutes to change per step
         */
        this.stepMinute = 1;
        /**
         * Seconds to change per step
         */
        this.stepSecond = 1;
        this.selectedChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get pickerMoment() {
        return this._pickerMoment;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set pickerMoment(value) {
        value = this.dateTimeAdapter.deserialize(value);
        this._pickerMoment =
            this.getValidDate(value) || this.dateTimeAdapter.now();
    }
    /**
     * @return {?}
     */
    get minDateTime() {
        return this._minDateTime;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set minDateTime(value) {
        value = this.dateTimeAdapter.deserialize(value);
        this._minDateTime = this.getValidDate(value);
    }
    /**
     * @return {?}
     */
    get maxDateTime() {
        return this._maxDateTime;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set maxDateTime(value) {
        value = this.dateTimeAdapter.deserialize(value);
        this._maxDateTime = this.getValidDate(value);
    }
    /**
     * @return {?}
     */
    get hourValue() {
        return this.dateTimeAdapter.getHours(this.pickerMoment);
    }
    /**
     * The value would be displayed in hourBox.
     * We need this because the value displayed in hourBox it not
     * the same as the hourValue when the timer is in hour12Timer mode.
     *
     * @return {?}
     */
    get hourBoxValue() {
        /** @type {?} */
        let hours = this.hourValue;
        if (!this.hour12Timer) {
            return hours;
        }
        else {
            if (hours === 0) {
                hours = 12;
                this.isPM = false;
            }
            else if (hours > 0 && hours < 12) {
                this.isPM = false;
            }
            else if (hours === 12) {
                this.isPM = true;
            }
            else if (hours > 12 && hours < 24) {
                hours = hours - 12;
                this.isPM = true;
            }
            return hours;
        }
    }
    /**
     * @return {?}
     */
    get minuteValue() {
        return this.dateTimeAdapter.getMinutes(this.pickerMoment);
    }
    /**
     * @return {?}
     */
    get secondValue() {
        return this.dateTimeAdapter.getSeconds(this.pickerMoment);
    }
    /**
     * @return {?}
     */
    get upHourButtonLabel() {
        return this.pickerIntl.upHourLabel;
    }
    /**
     * @return {?}
     */
    get downHourButtonLabel() {
        return this.pickerIntl.downHourLabel;
    }
    /**
     * @return {?}
     */
    get upMinuteButtonLabel() {
        return this.pickerIntl.upMinuteLabel;
    }
    /**
     * @return {?}
     */
    get downMinuteButtonLabel() {
        return this.pickerIntl.downMinuteLabel;
    }
    /**
     * @return {?}
     */
    get upSecondButtonLabel() {
        return this.pickerIntl.upSecondLabel;
    }
    /**
     * @return {?}
     */
    get downSecondButtonLabel() {
        return this.pickerIntl.downSecondLabel;
    }
    /**
     * @return {?}
     */
    get hour12ButtonLabel() {
        return this.isPM
            ? this.pickerIntl.hour12PMLabel
            : this.pickerIntl.hour12AMLabel;
    }
    /**
     * @return {?}
     */
    get owlDTTimerClass() {
        return true;
    }
    /**
     * @return {?}
     */
    get owlDTTimeTabIndex() {
        return -1;
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * Focus to the host element
     *
     * @return {?}
     */
    focus() {
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            this.ngZone.onStable
                .asObservable()
                .pipe(take(1))
                .subscribe((/**
             * @return {?}
             */
            () => {
                this.elmRef.nativeElement.focus();
            }));
        }));
    }
    /**
     * Set the hour value via typing into timer box input
     * We need this to handle the hour value when the timer is in hour12 mode
     *
     * @param {?} hours
     * @return {?}
     */
    setHourValueViaInput(hours) {
        if (this.hour12Timer && this.isPM && hours >= 1 && hours <= 11) {
            hours = hours + 12;
        }
        else if (this.hour12Timer && !this.isPM && hours === 12) {
            hours = 0;
        }
        this.setHourValue(hours);
    }
    /**
     * @param {?} hours
     * @return {?}
     */
    setHourValue(hours) {
        /** @type {?} */
        const m = this.dateTimeAdapter.setHours(this.pickerMoment, hours);
        this.selectedChange.emit(m);
        this.cdRef.markForCheck();
    }
    /**
     * @param {?} minutes
     * @return {?}
     */
    setMinuteValue(minutes) {
        /** @type {?} */
        const m = this.dateTimeAdapter.setMinutes(this.pickerMoment, minutes);
        this.selectedChange.emit(m);
        this.cdRef.markForCheck();
    }
    /**
     * @param {?} seconds
     * @return {?}
     */
    setSecondValue(seconds) {
        /** @type {?} */
        const m = this.dateTimeAdapter.setSeconds(this.pickerMoment, seconds);
        this.selectedChange.emit(m);
        this.cdRef.markForCheck();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    setMeridiem(event) {
        this.isPM = !this.isPM;
        /** @type {?} */
        let hours = this.hourValue;
        if (this.isPM) {
            hours = hours + 12;
        }
        else {
            hours = hours - 12;
        }
        if (hours >= 0 && hours <= 23) {
            this.setHourValue(hours);
        }
        this.cdRef.markForCheck();
        event.preventDefault();
    }
    /**
     * Check if the up hour button is enabled
     * @return {?}
     */
    upHourEnabled() {
        return (!this.maxDateTime ||
            this.compareHours(this.stepHour, this.maxDateTime) < 1);
    }
    /**
     * Check if the down hour button is enabled
     * @return {?}
     */
    downHourEnabled() {
        return (!this.minDateTime ||
            this.compareHours(-this.stepHour, this.minDateTime) > -1);
    }
    /**
     * Check if the up minute button is enabled
     * @return {?}
     */
    upMinuteEnabled() {
        return (!this.maxDateTime ||
            this.compareMinutes(this.stepMinute, this.maxDateTime) < 1);
    }
    /**
     * Check if the down minute button is enabled
     * @return {?}
     */
    downMinuteEnabled() {
        return (!this.minDateTime ||
            this.compareMinutes(-this.stepMinute, this.minDateTime) > -1);
    }
    /**
     * Check if the up second button is enabled
     * @return {?}
     */
    upSecondEnabled() {
        return (!this.maxDateTime ||
            this.compareSeconds(this.stepSecond, this.maxDateTime) < 1);
    }
    /**
     * Check if the down second button is enabled
     * @return {?}
     */
    downSecondEnabled() {
        return (!this.minDateTime ||
            this.compareSeconds(-this.stepSecond, this.minDateTime) > -1);
    }
    /**
     * PickerMoment's hour value +/- certain amount and compare it to the give date
     * 1 is after the comparedDate
     * -1 is before the comparedDate
     * 0 is equal the comparedDate
     *
     * @private
     * @param {?} amount
     * @param {?} comparedDate
     * @return {?}
     */
    compareHours(amount, comparedDate) {
        /** @type {?} */
        const hours = this.dateTimeAdapter.getHours(this.pickerMoment) + amount;
        /** @type {?} */
        const result = this.dateTimeAdapter.setHours(this.pickerMoment, hours);
        return this.dateTimeAdapter.compare(result, comparedDate);
    }
    /**
     * PickerMoment's minute value +/- certain amount and compare it to the give date
     * 1 is after the comparedDate
     * -1 is before the comparedDate
     * 0 is equal the comparedDate
     *
     * @private
     * @param {?} amount
     * @param {?} comparedDate
     * @return {?}
     */
    compareMinutes(amount, comparedDate) {
        /** @type {?} */
        const minutes = this.dateTimeAdapter.getMinutes(this.pickerMoment) + amount;
        /** @type {?} */
        const result = this.dateTimeAdapter.setMinutes(this.pickerMoment, minutes);
        return this.dateTimeAdapter.compare(result, comparedDate);
    }
    /**
     * PickerMoment's second value +/- certain amount and compare it to the give date
     * 1 is after the comparedDate
     * -1 is before the comparedDate
     * 0 is equal the comparedDate
     *
     * @private
     * @param {?} amount
     * @param {?} comparedDate
     * @return {?}
     */
    compareSeconds(amount, comparedDate) {
        /** @type {?} */
        const seconds = this.dateTimeAdapter.getSeconds(this.pickerMoment) + amount;
        /** @type {?} */
        const result = this.dateTimeAdapter.setSeconds(this.pickerMoment, seconds);
        return this.dateTimeAdapter.compare(result, comparedDate);
    }
    /**
     * Get a valid date object
     * @private
     * @param {?} obj
     * @return {?}
     */
    getValidDate(obj) {
        return this.dateTimeAdapter.isDateInstance(obj) &&
            this.dateTimeAdapter.isValid(obj)
            ? obj
            : null;
    }
}
OwlTimerComponent.decorators = [
    { type: Component, args: [{
                exportAs: 'owlDateTimeTimer',
                selector: 'owl-date-time-timer',
                template: "<owl-date-time-timer-box\r\n        [upBtnAriaLabel]=\"upHourButtonLabel\"\r\n        [downBtnAriaLabel]=\"downHourButtonLabel\"\r\n        [upBtnDisabled]=\"!upHourEnabled()\"\r\n        [downBtnDisabled]=\"!downHourEnabled()\"\r\n        [boxValue]=\"hourBoxValue\"\r\n        [value]=\"hourValue\" [min]=\"0\" [max]=\"23\"\r\n        [step]=\"stepHour\" [inputLabel]=\"'Hour'\"\r\n        (inputChange)=\"setHourValueViaInput($event)\"\r\n        (valueChange)=\"setHourValue($event)\"></owl-date-time-timer-box>\r\n<owl-date-time-timer-box\r\n        [showDivider]=\"true\"\r\n        [upBtnAriaLabel]=\"upMinuteButtonLabel\"\r\n        [downBtnAriaLabel]=\"downMinuteButtonLabel\"\r\n        [upBtnDisabled]=\"!upMinuteEnabled()\"\r\n        [downBtnDisabled]=\"!downMinuteEnabled()\"\r\n        [value]=\"minuteValue\" [min]=\"0\" [max]=\"59\"\r\n        [step]=\"stepMinute\" [inputLabel]=\"'Minute'\"\r\n        (inputChange)=\"setMinuteValue($event)\"\r\n        (valueChange)=\"setMinuteValue($event)\"></owl-date-time-timer-box>\r\n<owl-date-time-timer-box\r\n        *ngIf=\"showSecondsTimer\"\r\n        [showDivider]=\"true\"\r\n        [upBtnAriaLabel]=\"upSecondButtonLabel\"\r\n        [downBtnAriaLabel]=\"downSecondButtonLabel\"\r\n        [upBtnDisabled]=\"!upSecondEnabled()\"\r\n        [downBtnDisabled]=\"!downSecondEnabled()\"\r\n        [value]=\"secondValue\" [min]=\"0\" [max]=\"59\"\r\n        [step]=\"stepSecond\" [inputLabel]=\"'Second'\"\r\n        (inputChange)=\"setSecondValue($event)\"\r\n        (valueChange)=\"setSecondValue($event)\"></owl-date-time-timer-box>\r\n\r\n<div *ngIf=\"hour12Timer\" class=\"owl-dt-timer-hour12\">\r\n    <button class=\"owl-dt-control-button owl-dt-timer-hour12-box\"\r\n            type=\"button\" tabindex=\"0\"\r\n            (click)=\"setMeridiem($event)\">\r\n        <span class=\"owl-dt-control-button-content\" tabindex=\"-1\">\r\n            {{hour12ButtonLabel}}\r\n        </span>\r\n    </button>\r\n</div>\r\n",
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    '[class.owl-dt-timer]': 'owlDTTimerClass',
                    '[attr.tabindex]': 'owlDTTimeTabIndex'
                },
                styles: [""]
            }] }
];
/** @nocollapse */
OwlTimerComponent.ctorParameters = () => [
    { type: NgZone },
    { type: ElementRef },
    { type: OwlDateTimeIntl },
    { type: ChangeDetectorRef },
    { type: DateTimeAdapter, decorators: [{ type: Optional }] }
];
OwlTimerComponent.propDecorators = {
    pickerMoment: [{ type: Input }],
    minDateTime: [{ type: Input }],
    maxDateTime: [{ type: Input }],
    showSecondsTimer: [{ type: Input }],
    hour12Timer: [{ type: Input }],
    stepHour: [{ type: Input }],
    stepMinute: [{ type: Input }],
    stepSecond: [{ type: Input }],
    selectedChange: [{ type: Output }]
};
if (false) {
    /**
     * The current picker moment
     * @type {?}
     * @private
     */
    OwlTimerComponent.prototype._pickerMoment;
    /**
     * The minimum selectable date time.
     * @type {?}
     * @private
     */
    OwlTimerComponent.prototype._minDateTime;
    /**
     * The maximum selectable date time.
     * @type {?}
     * @private
     */
    OwlTimerComponent.prototype._maxDateTime;
    /**
     * @type {?}
     * @private
     */
    OwlTimerComponent.prototype.isPM;
    /**
     * Whether to show the second's timer
     * @type {?}
     */
    OwlTimerComponent.prototype.showSecondsTimer;
    /**
     * Whether the timer is in hour12 format
     * @type {?}
     */
    OwlTimerComponent.prototype.hour12Timer;
    /**
     * Hours to change per step
     * @type {?}
     */
    OwlTimerComponent.prototype.stepHour;
    /**
     * Minutes to change per step
     * @type {?}
     */
    OwlTimerComponent.prototype.stepMinute;
    /**
     * Seconds to change per step
     * @type {?}
     */
    OwlTimerComponent.prototype.stepSecond;
    /** @type {?} */
    OwlTimerComponent.prototype.selectedChange;
    /**
     * @type {?}
     * @private
     */
    OwlTimerComponent.prototype.ngZone;
    /**
     * @type {?}
     * @private
     */
    OwlTimerComponent.prototype.elmRef;
    /**
     * @type {?}
     * @private
     */
    OwlTimerComponent.prototype.pickerIntl;
    /**
     * @type {?}
     * @private
     */
    OwlTimerComponent.prototype.cdRef;
    /**
     * @type {?}
     * @private
     */
    OwlTimerComponent.prototype.dateTimeAdapter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcGljay1kYXRldGltZS8iLCJzb3VyY2VzIjpbImxpYi9kYXRlLXRpbWUvdGltZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQ0gsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUVOLFFBQVEsRUFDUixNQUFNLEVBQ1QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNwRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFjdEMsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7Ozs7SUFzSjFCLFlBQ1ksTUFBYyxFQUNkLE1BQWtCLEVBQ2xCLFVBQTJCLEVBQzNCLEtBQXdCLEVBQ1osZUFBbUM7UUFKL0MsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFdBQU0sR0FBTixNQUFNLENBQVk7UUFDbEIsZUFBVSxHQUFWLFVBQVUsQ0FBaUI7UUFDM0IsVUFBSyxHQUFMLEtBQUssQ0FBbUI7UUFDWixvQkFBZSxHQUFmLGVBQWUsQ0FBb0I7UUFySG5ELFNBQUksR0FBWSxLQUFLLENBQUMsQ0FBQywyREFBMkQ7Ozs7UUFrQjFGLGFBQVEsR0FBRyxDQUFDLENBQUM7Ozs7UUFNYixlQUFVLEdBQUcsQ0FBQyxDQUFDOzs7O1FBTWYsZUFBVSxHQUFHLENBQUMsQ0FBQztRQXdFZixtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFLLENBQUM7SUFnQnBDLENBQUM7Ozs7SUF6SkosSUFDSSxZQUFZO1FBQ1osT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzlCLENBQUM7Ozs7O0lBRUQsSUFBSSxZQUFZLENBQUMsS0FB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LGtDQUFnQzs7Ozs7SUFDaEMsNENBQXVEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIHRpbWVyLmNvbXBvbmVudFxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICAgIENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgRWxlbWVudFJlZixcclxuICAgIEV2ZW50RW1pdHRlcixcclxuICAgIElucHV0LFxyXG4gICAgTmdab25lLFxyXG4gICAgT25Jbml0LFxyXG4gICAgT3B0aW9uYWwsXHJcbiAgICBPdXRwdXRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT3dsRGF0ZVRpbWVJbnRsIH0gZnJvbSAnLi9kYXRlLXRpbWUtcGlja2VyLWludGwuc2VydmljZSc7XHJcbmltcG9ydCB7IERhdGVUaW1lQWRhcHRlciB9IGZyb20gJy4vYWRhcHRlci9kYXRlLXRpbWUtYWRhcHRlci5jbGFzcyc7XHJcbmltcG9ydCB7IHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIGV4cG9ydEFzOiAnb3dsRGF0ZVRpbWVUaW1lcicsXHJcbiAgICBzZWxlY3RvcjogJ293bC1kYXRlLXRpbWUtdGltZXInLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3RpbWVyLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL3RpbWVyLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gICAgaG9zdDoge1xyXG4gICAgICAgICdbY2xhc3Mub3dsLWR0LXRpbWVyXSc6ICdvd2xEVFRpbWVyQ2xhc3MnLFxyXG4gICAgICAgICdbYXR0ci50YWJpbmRleF0nOiAnb3dsRFRUaW1lVGFiSW5kZXgnXHJcbiAgICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBPd2xUaW1lckNvbXBvbmVudDxUPiBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICAvKiogVGhlIGN1cnJlbnQgcGlja2VyIG1vbWVudCAqL1xyXG4gICAgcHJpdmF0ZSBfcGlja2VyTW9tZW50OiBUO1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBwaWNrZXJNb21lbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BpY2tlck1vbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgcGlja2VyTW9tZW50KHZhbHVlOiBUKSB7XHJcbiAgICAgICAgdmFsdWUgPSB0aGlzLmRhdGVUaW1lQWRhcHRlci5kZXNlcmlhbGl6ZSh2YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5fcGlja2VyTW9tZW50ID1cclxuICAgICAgICAgICAgdGhpcy5nZXRWYWxpZERhdGUodmFsdWUpIHx8IHRoaXMuZGF0ZVRpbWVBZGFwdGVyLm5vdygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBUaGUgbWluaW11bSBzZWxlY3RhYmxlIGRhdGUgdGltZS4gKi9cclxuICAgIHByaXZhdGUgX21pbkRhdGVUaW1lOiBUIHwgbnVsbDtcclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgbWluRGF0ZVRpbWUoKTogVCB8IG51bGwge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9taW5EYXRlVGltZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgbWluRGF0ZVRpbWUodmFsdWU6IFQgfCBudWxsKSB7XHJcbiAgICAgICAgdmFsdWUgPSB0aGlzLmRhdGVUaW1lQWRhcHRlci5kZXNlcmlhbGl6ZSh2YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5fbWluRGF0ZVRpbWUgPSB0aGlzLmdldFZhbGlkRGF0ZSh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIFRoZSBtYXhpbXVtIHNlbGVjdGFibGUgZGF0ZSB0aW1lLiAqL1xyXG4gICAgcHJpdmF0ZSBfbWF4RGF0ZVRpbWU6IFQgfCBudWxsO1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBtYXhEYXRlVGltZSgpOiBUIHwgbnVsbCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21heERhdGVUaW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBtYXhEYXRlVGltZSh2YWx1ZTogVCB8IG51bGwpIHtcclxuICAgICAgICB2YWx1ZSA9IHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmRlc2VyaWFsaXplKHZhbHVlKTtcclxuICAgICAgICB0aGlzLl9tYXhEYXRlVGltZSA9IHRoaXMuZ2V0VmFsaWREYXRlKHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGlzUE06IGJvb2xlYW4gPSBmYWxzZTsgLy8gYSBmbGFnIGluZGljYXRlcyB0aGUgY3VycmVudCB0aW1lciBtb21lbnQgaXMgaW4gUE0gb3IgQU1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFdoZXRoZXIgdG8gc2hvdyB0aGUgc2Vjb25kJ3MgdGltZXJcclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIHNob3dTZWNvbmRzVGltZXI6IGJvb2xlYW47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBXaGV0aGVyIHRoZSB0aW1lciBpcyBpbiBob3VyMTIgZm9ybWF0XHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBob3VyMTJUaW1lcjogYm9vbGVhbjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEhvdXJzIHRvIGNoYW5nZSBwZXIgc3RlcFxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgc3RlcEhvdXIgPSAxO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogTWludXRlcyB0byBjaGFuZ2UgcGVyIHN0ZXBcclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIHN0ZXBNaW51dGUgPSAxO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2Vjb25kcyB0byBjaGFuZ2UgcGVyIHN0ZXBcclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIHN0ZXBTZWNvbmQgPSAxO1xyXG5cclxuICAgIGdldCBob3VyVmFsdWUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRlVGltZUFkYXB0ZXIuZ2V0SG91cnModGhpcy5waWNrZXJNb21lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIHZhbHVlIHdvdWxkIGJlIGRpc3BsYXllZCBpbiBob3VyQm94LlxyXG4gICAgICogV2UgbmVlZCB0aGlzIGJlY2F1c2UgdGhlIHZhbHVlIGRpc3BsYXllZCBpbiBob3VyQm94IGl0IG5vdFxyXG4gICAgICogdGhlIHNhbWUgYXMgdGhlIGhvdXJWYWx1ZSB3aGVuIHRoZSB0aW1lciBpcyBpbiBob3VyMTJUaW1lciBtb2RlLlxyXG4gICAgICogKi9cclxuICAgIGdldCBob3VyQm94VmFsdWUoKTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgaG91cnMgPSB0aGlzLmhvdXJWYWx1ZTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmhvdXIxMlRpbWVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBob3VycztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoaG91cnMgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIGhvdXJzID0gMTI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzUE0gPSBmYWxzZTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChob3VycyA+IDAgJiYgaG91cnMgPCAxMikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1BNID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaG91cnMgPT09IDEyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzUE0gPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGhvdXJzID4gMTIgJiYgaG91cnMgPCAyNCkge1xyXG4gICAgICAgICAgICAgICAgaG91cnMgPSBob3VycyAtIDEyO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1BNID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGhvdXJzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXQgbWludXRlVmFsdWUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRlVGltZUFkYXB0ZXIuZ2V0TWludXRlcyh0aGlzLnBpY2tlck1vbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNlY29uZFZhbHVlKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmdldFNlY29uZHModGhpcy5waWNrZXJNb21lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB1cEhvdXJCdXR0b25MYWJlbCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBpY2tlckludGwudXBIb3VyTGFiZWw7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGRvd25Ib3VyQnV0dG9uTGFiZWwoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5waWNrZXJJbnRsLmRvd25Ib3VyTGFiZWw7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHVwTWludXRlQnV0dG9uTGFiZWwoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5waWNrZXJJbnRsLnVwTWludXRlTGFiZWw7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGRvd25NaW51dGVCdXR0b25MYWJlbCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBpY2tlckludGwuZG93bk1pbnV0ZUxhYmVsO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB1cFNlY29uZEJ1dHRvbkxhYmVsKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGlja2VySW50bC51cFNlY29uZExhYmVsO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBkb3duU2Vjb25kQnV0dG9uTGFiZWwoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5waWNrZXJJbnRsLmRvd25TZWNvbmRMYWJlbDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaG91cjEyQnV0dG9uTGFiZWwoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pc1BNXHJcbiAgICAgICAgICAgID8gdGhpcy5waWNrZXJJbnRsLmhvdXIxMlBNTGFiZWxcclxuICAgICAgICAgICAgOiB0aGlzLnBpY2tlckludGwuaG91cjEyQU1MYWJlbDtcclxuICAgIH1cclxuXHJcbiAgICBAT3V0cHV0KClcclxuICAgIHNlbGVjdGVkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxUPigpO1xyXG5cclxuICAgIGdldCBvd2xEVFRpbWVyQ2xhc3MoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG93bERUVGltZVRhYkluZGV4KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXHJcbiAgICAgICAgcHJpdmF0ZSBlbG1SZWY6IEVsZW1lbnRSZWYsXHJcbiAgICAgICAgcHJpdmF0ZSBwaWNrZXJJbnRsOiBPd2xEYXRlVGltZUludGwsXHJcbiAgICAgICAgcHJpdmF0ZSBjZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICAgICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBkYXRlVGltZUFkYXB0ZXI6IERhdGVUaW1lQWRhcHRlcjxUPlxyXG4gICAgKSB7fVxyXG5cclxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHt9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGb2N1cyB0byB0aGUgaG9zdCBlbGVtZW50XHJcbiAgICAgKiAqL1xyXG4gICAgcHVibGljIGZvY3VzKCkge1xyXG4gICAgICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5uZ1pvbmUub25TdGFibGVcclxuICAgICAgICAgICAgICAgIC5hc09ic2VydmFibGUoKVxyXG4gICAgICAgICAgICAgICAgLnBpcGUodGFrZSgxKSlcclxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWxtUmVmLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0IHRoZSBob3VyIHZhbHVlIHZpYSB0eXBpbmcgaW50byB0aW1lciBib3ggaW5wdXRcclxuICAgICAqIFdlIG5lZWQgdGhpcyB0byBoYW5kbGUgdGhlIGhvdXIgdmFsdWUgd2hlbiB0aGUgdGltZXIgaXMgaW4gaG91cjEyIG1vZGVcclxuICAgICAqICovXHJcbiAgICBwdWJsaWMgc2V0SG91clZhbHVlVmlhSW5wdXQoaG91cnM6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmhvdXIxMlRpbWVyICYmIHRoaXMuaXNQTSAmJiBob3VycyA+PSAxICYmIGhvdXJzIDw9IDExKSB7XHJcbiAgICAgICAgICAgIGhvdXJzID0gaG91cnMgKyAxMjtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaG91cjEyVGltZXIgJiYgIXRoaXMuaXNQTSAmJiBob3VycyA9PT0gMTIpIHtcclxuICAgICAgICAgICAgaG91cnMgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZXRIb3VyVmFsdWUoaG91cnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRIb3VyVmFsdWUoaG91cnM6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IG0gPSB0aGlzLmRhdGVUaW1lQWRhcHRlci5zZXRIb3Vycyh0aGlzLnBpY2tlck1vbWVudCwgaG91cnMpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRDaGFuZ2UuZW1pdChtKTtcclxuICAgICAgICB0aGlzLmNkUmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRNaW51dGVWYWx1ZShtaW51dGVzOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBtID0gdGhpcy5kYXRlVGltZUFkYXB0ZXIuc2V0TWludXRlcyh0aGlzLnBpY2tlck1vbWVudCwgbWludXRlcyk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZENoYW5nZS5lbWl0KG0pO1xyXG4gICAgICAgIHRoaXMuY2RSZWYubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFNlY29uZFZhbHVlKHNlY29uZHM6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IG0gPSB0aGlzLmRhdGVUaW1lQWRhcHRlci5zZXRTZWNvbmRzKHRoaXMucGlja2VyTW9tZW50LCBzZWNvbmRzKTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkQ2hhbmdlLmVtaXQobSk7XHJcbiAgICAgICAgdGhpcy5jZFJlZi5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0TWVyaWRpZW0oZXZlbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaXNQTSA9ICF0aGlzLmlzUE07XHJcblxyXG4gICAgICAgIGxldCBob3VycyA9IHRoaXMuaG91clZhbHVlO1xyXG4gICAgICAgIGlmICh0aGlzLmlzUE0pIHtcclxuICAgICAgICAgICAgaG91cnMgPSBob3VycyArIDEyO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGhvdXJzID0gaG91cnMgLSAxMjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChob3VycyA+PSAwICYmIGhvdXJzIDw9IDIzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0SG91clZhbHVlKGhvdXJzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY2RSZWYubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENoZWNrIGlmIHRoZSB1cCBob3VyIGJ1dHRvbiBpcyBlbmFibGVkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB1cEhvdXJFbmFibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICF0aGlzLm1heERhdGVUaW1lIHx8XHJcbiAgICAgICAgICAgIHRoaXMuY29tcGFyZUhvdXJzKHRoaXMuc3RlcEhvdXIsIHRoaXMubWF4RGF0ZVRpbWUpIDwgMVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVjayBpZiB0aGUgZG93biBob3VyIGJ1dHRvbiBpcyBlbmFibGVkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBkb3duSG91ckVuYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgIXRoaXMubWluRGF0ZVRpbWUgfHxcclxuICAgICAgICAgICAgdGhpcy5jb21wYXJlSG91cnMoLXRoaXMuc3RlcEhvdXIsIHRoaXMubWluRGF0ZVRpbWUpID4gLTFcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2sgaWYgdGhlIHVwIG1pbnV0ZSBidXR0b24gaXMgZW5hYmxlZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdXBNaW51dGVFbmFibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICF0aGlzLm1heERhdGVUaW1lIHx8XHJcbiAgICAgICAgICAgIHRoaXMuY29tcGFyZU1pbnV0ZXModGhpcy5zdGVwTWludXRlLCB0aGlzLm1heERhdGVUaW1lKSA8IDFcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2sgaWYgdGhlIGRvd24gbWludXRlIGJ1dHRvbiBpcyBlbmFibGVkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBkb3duTWludXRlRW5hYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAhdGhpcy5taW5EYXRlVGltZSB8fFxyXG4gICAgICAgICAgICB0aGlzLmNvbXBhcmVNaW51dGVzKC10aGlzLnN0ZXBNaW51dGUsIHRoaXMubWluRGF0ZVRpbWUpID4gLTFcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2sgaWYgdGhlIHVwIHNlY29uZCBidXR0b24gaXMgZW5hYmxlZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdXBTZWNvbmRFbmFibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICF0aGlzLm1heERhdGVUaW1lIHx8XHJcbiAgICAgICAgICAgIHRoaXMuY29tcGFyZVNlY29uZHModGhpcy5zdGVwU2Vjb25kLCB0aGlzLm1heERhdGVUaW1lKSA8IDFcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2sgaWYgdGhlIGRvd24gc2Vjb25kIGJ1dHRvbiBpcyBlbmFibGVkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBkb3duU2Vjb25kRW5hYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAhdGhpcy5taW5EYXRlVGltZSB8fFxyXG4gICAgICAgICAgICB0aGlzLmNvbXBhcmVTZWNvbmRzKC10aGlzLnN0ZXBTZWNvbmQsIHRoaXMubWluRGF0ZVRpbWUpID4gLTFcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUGlja2VyTW9tZW50J3MgaG91ciB2YWx1ZSArLy0gY2VydGFpbiBhbW91bnQgYW5kIGNvbXBhcmUgaXQgdG8gdGhlIGdpdmUgZGF0ZVxyXG4gICAgICogMSBpcyBhZnRlciB0aGUgY29tcGFyZWREYXRlXHJcbiAgICAgKiAtMSBpcyBiZWZvcmUgdGhlIGNvbXBhcmVkRGF0ZVxyXG4gICAgICogMCBpcyBlcXVhbCB0aGUgY29tcGFyZWREYXRlXHJcbiAgICAgKiAqL1xyXG4gICAgcHJpdmF0ZSBjb21wYXJlSG91cnMoYW1vdW50OiBudW1iZXIsIGNvbXBhcmVkRGF0ZTogVCk6IG51bWJlciB7XHJcbiAgICAgICAgY29uc3QgaG91cnMgPSB0aGlzLmRhdGVUaW1lQWRhcHRlci5nZXRIb3Vycyh0aGlzLnBpY2tlck1vbWVudCkgKyBhbW91bnQ7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5kYXRlVGltZUFkYXB0ZXIuc2V0SG91cnModGhpcy5waWNrZXJNb21lbnQsIGhvdXJzKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRlVGltZUFkYXB0ZXIuY29tcGFyZShyZXN1bHQsIGNvbXBhcmVkRGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQaWNrZXJNb21lbnQncyBtaW51dGUgdmFsdWUgKy8tIGNlcnRhaW4gYW1vdW50IGFuZCBjb21wYXJlIGl0IHRvIHRoZSBnaXZlIGRhdGVcclxuICAgICAqIDEgaXMgYWZ0ZXIgdGhlIGNvbXBhcmVkRGF0ZVxyXG4gICAgICogLTEgaXMgYmVmb3JlIHRoZSBjb21wYXJlZERhdGVcclxuICAgICAqIDAgaXMgZXF1YWwgdGhlIGNvbXBhcmVkRGF0ZVxyXG4gICAgICogKi9cclxuICAgIHByaXZhdGUgY29tcGFyZU1pbnV0ZXMoYW1vdW50OiBudW1iZXIsIGNvbXBhcmVkRGF0ZTogVCk6IG51bWJlciB7XHJcbiAgICAgICAgY29uc3QgbWludXRlcyA9XHJcbiAgICAgICAgICAgIHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmdldE1pbnV0ZXModGhpcy5waWNrZXJNb21lbnQpICsgYW1vdW50O1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuZGF0ZVRpbWVBZGFwdGVyLnNldE1pbnV0ZXMoXHJcbiAgICAgICAgICAgIHRoaXMucGlja2VyTW9tZW50LFxyXG4gICAgICAgICAgICBtaW51dGVzXHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRlVGltZUFkYXB0ZXIuY29tcGFyZShyZXN1bHQsIGNvbXBhcmVkRGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQaWNrZXJNb21lbnQncyBzZWNvbmQgdmFsdWUgKy8tIGNlcnRhaW4gYW1vdW50IGFuZCBjb21wYXJlIGl0IHRvIHRoZSBnaXZlIGRhdGVcclxuICAgICAqIDEgaXMgYWZ0ZXIgdGhlIGNvbXBhcmVkRGF0ZVxyXG4gICAgICogLTEgaXMgYmVmb3JlIHRoZSBjb21wYXJlZERhdGVcclxuICAgICAqIDAgaXMgZXF1YWwgdGhlIGNvbXBhcmVkRGF0ZVxyXG4gICAgICogKi9cclxuICAgIHByaXZhdGUgY29tcGFyZVNlY29uZHMoYW1vdW50OiBudW1iZXIsIGNvbXBhcmVkRGF0ZTogVCk6IG51bWJlciB7XHJcbiAgICAgICAgY29uc3Qgc2Vjb25kcyA9XHJcbiAgICAgICAgICAgIHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmdldFNlY29uZHModGhpcy5waWNrZXJNb21lbnQpICsgYW1vdW50O1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuZGF0ZVRpbWVBZGFwdGVyLnNldFNlY29uZHMoXHJcbiAgICAgICAgICAgIHRoaXMucGlja2VyTW9tZW50LFxyXG4gICAgICAgICAgICBzZWNvbmRzXHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRlVGltZUFkYXB0ZXIuY29tcGFyZShyZXN1bHQsIGNvbXBhcmVkRGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgYSB2YWxpZCBkYXRlIG9iamVjdFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGdldFZhbGlkRGF0ZShvYmo6IGFueSk6IFQgfCBudWxsIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRlVGltZUFkYXB0ZXIuaXNEYXRlSW5zdGFuY2Uob2JqKSAmJlxyXG4gICAgICAgICAgICB0aGlzLmRhdGVUaW1lQWRhcHRlci5pc1ZhbGlkKG9iailcclxuICAgICAgICAgICAgPyBvYmpcclxuICAgICAgICAgICAgOiBudWxsO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==