/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * date-time.class
 */
import { Inject, Input, Optional } from '@angular/core';
import { coerceBooleanProperty, coerceNumberProperty } from '@angular/cdk/coercion';
import { DateTimeAdapter } from './adapter/date-time-adapter.class';
import { OWL_DATE_TIME_FORMATS } from './adapter/date-time-format.class';
/** @type {?} */
let nextUniqueId = 0;
/**
 * @abstract
 * @template T
 */
export class OwlDateTime {
    /**
     * @param {?} dateTimeAdapter
     * @param {?} dateTimeFormats
     */
    constructor(dateTimeAdapter, dateTimeFormats) {
        this.dateTimeAdapter = dateTimeAdapter;
        this.dateTimeFormats = dateTimeFormats;
        /**
         * Whether to show the second's timer
         */
        this._showSecondsTimer = false;
        /**
         * Whether the timer is in hour12 format
         */
        this._hour12Timer = false;
        /**
         * The view that the calendar should start in.
         */
        this.startView = 'month';
        /**
         * Hours to change per step
         */
        this._stepHour = 1;
        /**
         * Minutes to change per step
         */
        this._stepMinute = 1;
        /**
         * Seconds to change per step
         */
        this._stepSecond = 1;
        /**
         * Set the first day of week
         */
        this._firstDayOfWeek = 0;
        /**
         * Whether to hide dates in other months at the start or end of the current month.
         */
        this._hideOtherMonths = false;
        /**
         * Date Time Checker to check if the give dateTime is selectable
         */
        this.dateTimeChecker = (/**
         * @param {?} dateTime
         * @return {?}
         */
        (dateTime) => {
            return (!!dateTime &&
                (!this.dateTimeFilter || this.dateTimeFilter(dateTime)) &&
                (!this.minDateTime ||
                    this.dateTimeAdapter.compare(dateTime, this.minDateTime) >=
                        0) &&
                (!this.maxDateTime ||
                    this.dateTimeAdapter.compare(dateTime, this.maxDateTime) <= 0));
        });
        if (!this.dateTimeAdapter) {
            throw Error(`OwlDateTimePicker: No provider found for DateTimeAdapter. You must import one of the following ` +
                `modules at your application root: OwlNativeDateTimeModule, OwlMomentDateTimeModule, or provide a ` +
                `custom implementation.`);
        }
        if (!this.dateTimeFormats) {
            throw Error(`OwlDateTimePicker: No provider found for OWL_DATE_TIME_FORMATS. You must import one of the following ` +
                `modules at your application root: OwlNativeDateTimeModule, OwlMomentDateTimeModule, or provide a ` +
                `custom implementation.`);
        }
        this._id = `owl-dt-picker-${nextUniqueId++}`;
    }
    /**
     * @return {?}
     */
    get showSecondsTimer() {
        return this._showSecondsTimer;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set showSecondsTimer(val) {
        this._showSecondsTimer = coerceBooleanProperty(val);
    }
    /**
     * @return {?}
     */
    get hour12Timer() {
        return this._hour12Timer;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set hour12Timer(val) {
        this._hour12Timer = coerceBooleanProperty(val);
    }
    /**
     * @return {?}
     */
    get stepHour() {
        return this._stepHour;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set stepHour(val) {
        this._stepHour = coerceNumberProperty(val, 1);
    }
    /**
     * @return {?}
     */
    get stepMinute() {
        return this._stepMinute;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set stepMinute(val) {
        this._stepMinute = coerceNumberProperty(val, 1);
    }
    /**
     * @return {?}
     */
    get stepSecond() {
        return this._stepSecond;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set stepSecond(val) {
        this._stepSecond = coerceNumberProperty(val, 1);
    }
    /**
     * @return {?}
     */
    get firstDayOfWeek() {
        return this._firstDayOfWeek;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set firstDayOfWeek(value) {
        value = coerceNumberProperty(value, 0);
        if (value > 6 || value < 0) {
            this._firstDayOfWeek = 0;
        }
        else {
            this._firstDayOfWeek = value;
        }
    }
    /**
     * @return {?}
     */
    get hideOtherMonths() {
        return this._hideOtherMonths;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set hideOtherMonths(val) {
        this._hideOtherMonths = coerceBooleanProperty(val);
    }
    /**
     * @return {?}
     */
    get id() {
        return this._id;
    }
    /**
     * @return {?}
     */
    get formatString() {
        return this.pickerType === 'both'
            ? this.dateTimeFormats.fullPickerInput
            : this.pickerType === 'calendar'
                ? this.dateTimeFormats.datePickerInput
                : this.dateTimeFormats.timePickerInput;
    }
    /**
     * @return {?}
     */
    get disabled() {
        return false;
    }
    /**
     * @protected
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
/** @nocollapse */
OwlDateTime.ctorParameters = () => [
    { type: DateTimeAdapter, decorators: [{ type: Optional }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [OWL_DATE_TIME_FORMATS,] }] }
];
OwlDateTime.propDecorators = {
    showSecondsTimer: [{ type: Input }],
    hour12Timer: [{ type: Input }],
    startView: [{ type: Input }],
    stepHour: [{ type: Input }],
    stepMinute: [{ type: Input }],
    stepSecond: [{ type: Input }],
    firstDayOfWeek: [{ type: Input }],
    hideOtherMonths: [{ type: Input }]
};
if (false) {
    /**
     * Whether to show the second's timer
     * @type {?}
     * @private
     */
    OwlDateTime.prototype._showSecondsTimer;
    /**
     * Whether the timer is in hour12 format
     * @type {?}
     * @private
     */
    OwlDateTime.prototype._hour12Timer;
    /**
     * The view that the calendar should start in.
     * @type {?}
     */
    OwlDateTime.prototype.startView;
    /**
     * Hours to change per step
     * @type {?}
     * @private
     */
    OwlDateTime.prototype._stepHour;
    /**
     * Minutes to change per step
     * @type {?}
     * @private
     */
    OwlDateTime.prototype._stepMinute;
    /**
     * Seconds to change per step
     * @type {?}
     * @private
     */
    OwlDateTime.prototype._stepSecond;
    /**
     * Set the first day of week
     * @type {?}
     * @private
     */
    OwlDateTime.prototype._firstDayOfWeek;
    /**
     * Whether to hide dates in other months at the start or end of the current month.
     * @type {?}
     * @private
     */
    OwlDateTime.prototype._hideOtherMonths;
    /**
     * @type {?}
     * @private
     */
    OwlDateTime.prototype._id;
    /** @type {?} */
    OwlDateTime.prototype.yearSelected;
    /** @type {?} */
    OwlDateTime.prototype.monthSelected;
    /**
     * Date Time Checker to check if the give dateTime is selectable
     * @type {?}
     */
    OwlDateTime.prototype.dateTimeChecker;
    /**
     * @type {?}
     * @protected
     */
    OwlDateTime.prototype.dateTimeAdapter;
    /**
     * @type {?}
     * @protected
     */
    OwlDateTime.prototype.dateTimeFormats;
    /**
     * @abstract
     * @return {?}
     */
    OwlDateTime.prototype.selected = function () { };
    /**
     * @abstract
     * @return {?}
     */
    OwlDateTime.prototype.selecteds = function () { };
    /**
     * @abstract
     * @return {?}
     */
    OwlDateTime.prototype.dateTimeFilter = function () { };
    /**
     * @abstract
     * @return {?}
     */
    OwlDateTime.prototype.maxDateTime = function () { };
    /**
     * @abstract
     * @return {?}
     */
    OwlDateTime.prototype.minDateTime = function () { };
    /**
     * @abstract
     * @return {?}
     */
    OwlDateTime.prototype.selectMode = function () { };
    /**
     * @abstract
     * @return {?}
     */
    OwlDateTime.prototype.startAt = function () { };
    /**
     * @abstract
     * @return {?}
     */
    OwlDateTime.prototype.opened = function () { };
    /**
     * @abstract
     * @return {?}
     */
    OwlDateTime.prototype.pickerMode = function () { };
    /**
     * @abstract
     * @return {?}
     */
    OwlDateTime.prototype.pickerType = function () { };
    /**
     * @abstract
     * @return {?}
     */
    OwlDateTime.prototype.isInSingleMode = function () { };
    /**
     * @abstract
     * @return {?}
     */
    OwlDateTime.prototype.isInRangeMode = function () { };
    /**
     * @abstract
     * @param {?} date
     * @return {?}
     */
    OwlDateTime.prototype.select = function (date) { };
    /**
     * @abstract
     * @param {?} normalizedYear
     * @return {?}
     */
    OwlDateTime.prototype.selectYear = function (normalizedYear) { };
    /**
     * @abstract
     * @param {?} normalizedMonth
     * @return {?}
     */
    OwlDateTime.prototype.selectMonth = function (normalizedMonth) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS10aW1lLmNsYXNzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcGljay1kYXRldGltZS8iLCJzb3VyY2VzIjpbImxpYi9kYXRlLXRpbWUvZGF0ZS10aW1lLmNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQSxPQUFPLEVBQWdCLE1BQU0sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RFLE9BQU8sRUFDSCxxQkFBcUIsRUFDckIsb0JBQW9CLEVBQ3ZCLE1BQU0sdUJBQXVCLENBQUM7QUFDL0IsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3BFLE9BQU8sRUFDSCxxQkFBcUIsRUFFeEIsTUFBTSxrQ0FBa0MsQ0FBQzs7SUFFdEMsWUFBWSxHQUFHLENBQUM7Ozs7O0FBUXBCLE1BQU0sT0FBZ0IsV0FBVzs7Ozs7SUF5SzdCLFlBQzBCLGVBQW1DLEVBRy9DLGVBQW1DO1FBSHZCLG9CQUFlLEdBQWYsZUFBZSxDQUFvQjtRQUcvQyxvQkFBZSxHQUFmLGVBQWUsQ0FBb0I7Ozs7UUF6S3pDLHNCQUFpQixHQUFHLEtBQUssQ0FBQzs7OztRQWExQixpQkFBWSxHQUFHLEtBQUssQ0FBQzs7OztRQWM3QixjQUFTLEdBQXFDLE9BQU8sQ0FBQzs7OztRQUs5QyxjQUFTLEdBQUcsQ0FBQyxDQUFDOzs7O1FBYWQsZ0JBQVcsR0FBRyxDQUFDLENBQUM7Ozs7UUFhaEIsZ0JBQVcsR0FBRyxDQUFDLENBQUM7Ozs7UUFhaEIsb0JBQWUsR0FBRyxDQUFDLENBQUM7Ozs7UUFrQnBCLHFCQUFnQixHQUFHLEtBQUssQ0FBQzs7OztRQTREMUIsb0JBQWU7Ozs7UUFBRyxDQUFDLFFBQVcsRUFBRSxFQUFFO1lBQ3JDLE9BQU8sQ0FDSCxDQUFDLENBQUMsUUFBUTtnQkFDVixDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN2RCxD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QWtDOzs7OztJQUVsQyxrREFBcUM7Ozs7O0lBRXJDLHVEQUEyRDs7Ozs7SUFFM0Qsb0RBQXFDOzs7OztJQUVyQyxvREFBcUM7Ozs7O0lBRXJDLG1EQUFzQzs7Ozs7SUFFdEMsZ0RBQWlDOzs7OztJQUVqQywrQ0FBK0I7Ozs7O0lBRS9CLG1EQUFzQzs7Ozs7SUFFdEMsbURBQXNDOzs7OztJQUV0Qyx1REFBdUM7Ozs7O0lBRXZDLHNEQUFzQzs7Ozs7O0lBRXRDLG1EQUFxQzs7Ozs7O0lBTXJDLGlFQUE2Qzs7Ozs7O0lBRTdDLG1FQUErQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBkYXRlLXRpbWUuY2xhc3NcclxuICovXHJcbmltcG9ydCB7IEV2ZW50RW1pdHRlciwgSW5qZWN0LCBJbnB1dCwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtcclxuICAgIGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSxcclxuICAgIGNvZXJjZU51bWJlclByb3BlcnR5XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcclxuaW1wb3J0IHsgRGF0ZVRpbWVBZGFwdGVyIH0gZnJvbSAnLi9hZGFwdGVyL2RhdGUtdGltZS1hZGFwdGVyLmNsYXNzJztcclxuaW1wb3J0IHtcclxuICAgIE9XTF9EQVRFX1RJTUVfRk9STUFUUyxcclxuICAgIE93bERhdGVUaW1lRm9ybWF0c1xyXG59IGZyb20gJy4vYWRhcHRlci9kYXRlLXRpbWUtZm9ybWF0LmNsYXNzJztcclxuXHJcbmxldCBuZXh0VW5pcXVlSWQgPSAwO1xyXG5cclxuZXhwb3J0IHR5cGUgUGlja2VyVHlwZSA9ICdib3RoJyB8ICdjYWxlbmRhcicgfCAndGltZXInO1xyXG5cclxuZXhwb3J0IHR5cGUgUGlja2VyTW9kZSA9ICdwb3B1cCcgfCAnZGlhbG9nJyB8ICdpbmxpbmUnO1xyXG5cclxuZXhwb3J0IHR5cGUgU2VsZWN0TW9kZSA9ICdzaW5nbGUnIHwgJ3JhbmdlJyB8ICdyYW5nZUZyb20nIHwgJ3JhbmdlVG8nO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE93bERhdGVUaW1lPFQ+IHtcclxuICAgIC8qKlxyXG4gICAgICogV2hldGhlciB0byBzaG93IHRoZSBzZWNvbmQncyB0aW1lclxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9zaG93U2Vjb25kc1RpbWVyID0gZmFsc2U7XHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHNob3dTZWNvbmRzVGltZXIoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Nob3dTZWNvbmRzVGltZXI7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHNob3dTZWNvbmRzVGltZXIodmFsOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2hvd1NlY29uZHNUaW1lciA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWwpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogV2hldGhlciB0aGUgdGltZXIgaXMgaW4gaG91cjEyIGZvcm1hdFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9ob3VyMTJUaW1lciA9IGZhbHNlO1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBob3VyMTJUaW1lcigpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faG91cjEyVGltZXI7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGhvdXIxMlRpbWVyKHZhbDogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX2hvdXIxMlRpbWVyID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgdmlldyB0aGF0IHRoZSBjYWxlbmRhciBzaG91bGQgc3RhcnQgaW4uXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBzdGFydFZpZXc6ICdtb250aCcgfCAneWVhcicgfCAnbXVsdGkteWVhcnMnID0gJ21vbnRoJztcclxuXHJcbiAgICAvKipcclxuICAgICAqIEhvdXJzIHRvIGNoYW5nZSBwZXIgc3RlcFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9zdGVwSG91ciA9IDE7XHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHN0ZXBIb3VyKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0ZXBIb3VyO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBzdGVwSG91cih2YWw6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3N0ZXBIb3VyID0gY29lcmNlTnVtYmVyUHJvcGVydHkodmFsLCAxKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE1pbnV0ZXMgdG8gY2hhbmdlIHBlciBzdGVwXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX3N0ZXBNaW51dGUgPSAxO1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzdGVwTWludXRlKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0ZXBNaW51dGU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHN0ZXBNaW51dGUodmFsOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zdGVwTWludXRlID0gY29lcmNlTnVtYmVyUHJvcGVydHkodmFsLCAxKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNlY29uZHMgdG8gY2hhbmdlIHBlciBzdGVwXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX3N0ZXBTZWNvbmQgPSAxO1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzdGVwU2Vjb25kKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0ZXBTZWNvbmQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHN0ZXBTZWNvbmQodmFsOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zdGVwU2Vjb25kID0gY29lcmNlTnVtYmVyUHJvcGVydHkodmFsLCAxKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldCB0aGUgZmlyc3QgZGF5IG9mIHdlZWtcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfZmlyc3REYXlPZldlZWsgPSAwO1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBmaXJzdERheU9mV2VlaygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZmlyc3REYXlPZldlZWs7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGZpcnN0RGF5T2ZXZWVrKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB2YWx1ZSA9IGNvZXJjZU51bWJlclByb3BlcnR5KHZhbHVlLCAwKTtcclxuICAgICAgICBpZiAodmFsdWUgPiA2IHx8IHZhbHVlIDwgMCkge1xyXG4gICAgICAgICAgICB0aGlzLl9maXJzdERheU9mV2VlayA9IDA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fZmlyc3REYXlPZldlZWsgPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBXaGV0aGVyIHRvIGhpZGUgZGF0ZXMgaW4gb3RoZXIgbW9udGhzIGF0IHRoZSBzdGFydCBvciBlbmQgb2YgdGhlIGN1cnJlbnQgbW9udGguXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX2hpZGVPdGhlck1vbnRocyA9IGZhbHNlO1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBoaWRlT3RoZXJNb250aHMoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hpZGVPdGhlck1vbnRocztcclxuICAgIH1cclxuXHJcbiAgICBzZXQgaGlkZU90aGVyTW9udGhzKHZhbDogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX2hpZGVPdGhlck1vbnRocyA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWwpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2lkOiBzdHJpbmc7XHJcbiAgICBnZXQgaWQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faWQ7XHJcbiAgICB9XHJcblxyXG4gICAgYWJzdHJhY3QgZ2V0IHNlbGVjdGVkKCk6IFQgfCBudWxsO1xyXG5cclxuICAgIGFic3RyYWN0IGdldCBzZWxlY3RlZHMoKTogVFtdIHwgbnVsbDtcclxuXHJcbiAgICBhYnN0cmFjdCBnZXQgZGF0ZVRpbWVGaWx0ZXIoKTogKGRhdGU6IFQgfCBudWxsKSA9PiBib29sZWFuO1xyXG5cclxuICAgIGFic3RyYWN0IGdldCBtYXhEYXRlVGltZSgpOiBUIHwgbnVsbDtcclxuXHJcbiAgICBhYnN0cmFjdCBnZXQgbWluRGF0ZVRpbWUoKTogVCB8IG51bGw7XHJcblxyXG4gICAgYWJzdHJhY3QgZ2V0IHNlbGVjdE1vZGUoKTogU2VsZWN0TW9kZTtcclxuXHJcbiAgICBhYnN0cmFjdCBnZXQgc3RhcnRBdCgpOiBUIHwgbnVsbDtcclxuXHJcbiAgICBhYnN0cmFjdCBnZXQgb3BlbmVkKCk6IGJvb2xlYW47XHJcblxyXG4gICAgYWJzdHJhY3QgZ2V0IHBpY2tlck1vZGUoKTogUGlja2VyTW9kZTtcclxuXHJcbiAgICBhYnN0cmFjdCBnZXQgcGlja2VyVHlwZSgpOiBQaWNrZXJUeXBlO1xyXG5cclxuICAgIGFic3RyYWN0IGdldCBpc0luU2luZ2xlTW9kZSgpOiBib29sZWFuO1xyXG5cclxuICAgIGFic3RyYWN0IGdldCBpc0luUmFuZ2VNb2RlKCk6IGJvb2xlYW47XHJcblxyXG4gICAgYWJzdHJhY3Qgc2VsZWN0KGRhdGU6IFQgfCBUW10pOiB2b2lkO1xyXG5cclxuICAgIGFic3RyYWN0IHllYXJTZWxlY3RlZDogRXZlbnRFbWl0dGVyPFQ+O1xyXG5cclxuICAgIGFic3RyYWN0IG1vbnRoU2VsZWN0ZWQ6IEV2ZW50RW1pdHRlcjxUPjtcclxuXHJcbiAgICBhYnN0cmFjdCBzZWxlY3RZZWFyKG5vcm1hbGl6ZWRZZWFyOiBUKTogdm9pZDtcclxuXHJcbiAgICBhYnN0cmFjdCBzZWxlY3RNb250aChub3JtYWxpemVkTW9udGg6IFQpOiB2b2lkO1xyXG5cclxuICAgIGdldCBmb3JtYXRTdHJpbmcoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5waWNrZXJUeXBlID09PSAnYm90aCdcclxuICAgICAgICAgICAgPyB0aGlzLmRhdGVUaW1lRm9ybWF0cy5mdWxsUGlja2VySW5wdXRcclxuICAgICAgICAgICAgOiB0aGlzLnBpY2tlclR5cGUgPT09ICdjYWxlbmRhcidcclxuICAgICAgICAgICAgICAgID8gdGhpcy5kYXRlVGltZUZvcm1hdHMuZGF0ZVBpY2tlcklucHV0XHJcbiAgICAgICAgICAgICAgICA6IHRoaXMuZGF0ZVRpbWVGb3JtYXRzLnRpbWVQaWNrZXJJbnB1dDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERhdGUgVGltZSBDaGVja2VyIHRvIGNoZWNrIGlmIHRoZSBnaXZlIGRhdGVUaW1lIGlzIHNlbGVjdGFibGVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGRhdGVUaW1lQ2hlY2tlciA9IChkYXRlVGltZTogVCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICEhZGF0ZVRpbWUgJiZcclxuICAgICAgICAgICAgKCF0aGlzLmRhdGVUaW1lRmlsdGVyIHx8IHRoaXMuZGF0ZVRpbWVGaWx0ZXIoZGF0ZVRpbWUpKSAmJlxyXG4gICAgICAgICAgICAoIXRoaXMubWluRGF0ZVRpbWUgfHxcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmNvbXBhcmUoZGF0ZVRpbWUsIHRoaXMubWluRGF0ZVRpbWUpID49XHJcbiAgICAgICAgICAgICAgICAgICAgMCkgJiZcclxuICAgICAgICAgICAgKCF0aGlzLm1heERhdGVUaW1lIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGVUaW1lQWRhcHRlci5jb21wYXJlKGRhdGVUaW1lLCB0aGlzLm1heERhdGVUaW1lKSA8PSAwKVxyXG4gICAgICAgICk7XHJcbiAgICB9O1xyXG5cclxuICAgIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgQE9wdGlvbmFsKCkgcHJvdGVjdGVkIGRhdGVUaW1lQWRhcHRlcjogRGF0ZVRpbWVBZGFwdGVyPFQ+LFxyXG4gICAgICAgIEBPcHRpb25hbCgpXHJcbiAgICAgICAgQEluamVjdChPV0xfREFURV9USU1FX0ZPUk1BVFMpXHJcbiAgICAgICAgcHJvdGVjdGVkIGRhdGVUaW1lRm9ybWF0czogT3dsRGF0ZVRpbWVGb3JtYXRzXHJcbiAgICApIHtcclxuICAgICAgICBpZiAoIXRoaXMuZGF0ZVRpbWVBZGFwdGVyKSB7XHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKFxyXG4gICAgICAgICAgICAgICAgYE93bERhdGVUaW1lUGlja2VyOiBObyBwcm92aWRlciBmb3VuZCBmb3IgRGF0ZVRpbWVBZGFwdGVyLiBZb3UgbXVzdCBpbXBvcnQgb25lIG9mIHRoZSBmb2xsb3dpbmcgYCArXHJcbiAgICAgICAgICAgICAgICAgICAgYG1vZHVsZXMgYXQgeW91ciBhcHBsaWNhdGlvbiByb290OiBPd2xOYXRpdmVEYXRlVGltZU1vZHVsZSwgT3dsTW9tZW50RGF0ZVRpbWVNb2R1bGUsIG9yIHByb3ZpZGUgYSBgICtcclxuICAgICAgICAgICAgICAgICAgICBgY3VzdG9tIGltcGxlbWVudGF0aW9uLmBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5kYXRlVGltZUZvcm1hdHMpIHtcclxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoXHJcbiAgICAgICAgICAgICAgICBgT3dsRGF0ZVRpbWVQaWNrZXI6IE5vIHByb3ZpZGVyIGZvdW5kIGZvciBPV0xfREFURV9USU1FX0ZPUk1BVFMuIFlvdSBtdXN0IGltcG9ydCBvbmUgb2YgdGhlIGZvbGxvd2luZyBgICtcclxuICAgICAgICAgICAgICAgICAgICBgbW9kdWxlcyBhdCB5b3VyIGFwcGxpY2F0aW9uIHJvb3Q6IE93bE5hdGl2ZURhdGVUaW1lTW9kdWxlLCBPd2xNb21lbnREYXRlVGltZU1vZHVsZSwgb3IgcHJvdmlkZSBhIGAgK1xyXG4gICAgICAgICAgICAgICAgICAgIGBjdXN0b20gaW1wbGVtZW50YXRpb24uYFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5faWQgPSBgb3dsLWR0LXBpY2tlci0ke25leHRVbmlxdWVJZCsrfWA7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGdldFZhbGlkRGF0ZShvYmo6IGFueSk6IFQgfCBudWxsIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRlVGltZUFkYXB0ZXIuaXNEYXRlSW5zdGFuY2Uob2JqKSAmJlxyXG4gICAgICAgICAgICB0aGlzLmRhdGVUaW1lQWRhcHRlci5pc1ZhbGlkKG9iailcclxuICAgICAgICAgICAgPyBvYmpcclxuICAgICAgICAgICAgOiBudWxsO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==