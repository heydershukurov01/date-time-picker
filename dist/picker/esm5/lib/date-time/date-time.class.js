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
var nextUniqueId = 0;
/**
 * @abstract
 * @template T
 */
var OwlDateTime = /** @class */ (function () {
    function OwlDateTime(dateTimeAdapter, dateTimeFormats) {
        var _this = this;
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
        function (dateTime) {
            return (!!dateTime &&
                (!_this.dateTimeFilter || _this.dateTimeFilter(dateTime)) &&
                (!_this.minDateTime ||
                    _this.dateTimeAdapter.compare(dateTime, _this.minDateTime) >=
                        0) &&
                (!_this.maxDateTime ||
                    _this.dateTimeAdapter.compare(dateTime, _this.maxDateTime) <= 0));
        });
        if (!this.dateTimeAdapter) {
            throw Error("OwlDateTimePicker: No provider found for DateTimeAdapter. You must import one of the following " +
                "modules at your application root: OwlNativeDateTimeModule, OwlMomentDateTimeModule, or provide a " +
                "custom implementation.");
        }
        if (!this.dateTimeFormats) {
            throw Error("OwlDateTimePicker: No provider found for OWL_DATE_TIME_FORMATS. You must import one of the following " +
                "modules at your application root: OwlNativeDateTimeModule, OwlMomentDateTimeModule, or provide a " +
                "custom implementation.");
        }
        this._id = "owl-dt-picker-" + nextUniqueId++;
    }
    Object.defineProperty(OwlDateTime.prototype, "showSecondsTimer", {
        get: /**
         * @return {?}
         */
        function () {
            return this._showSecondsTimer;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._showSecondsTimer = coerceBooleanProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTime.prototype, "hour12Timer", {
        get: /**
         * @return {?}
         */
        function () {
            return this._hour12Timer;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._hour12Timer = coerceBooleanProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTime.prototype, "stepHour", {
        get: /**
         * @return {?}
         */
        function () {
            return this._stepHour;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._stepHour = coerceNumberProperty(val, 1);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTime.prototype, "stepMinute", {
        get: /**
         * @return {?}
         */
        function () {
            return this._stepMinute;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._stepMinute = coerceNumberProperty(val, 1);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTime.prototype, "stepSecond", {
        get: /**
         * @return {?}
         */
        function () {
            return this._stepSecond;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._stepSecond = coerceNumberProperty(val, 1);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTime.prototype, "firstDayOfWeek", {
        get: /**
         * @return {?}
         */
        function () {
            return this._firstDayOfWeek;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            value = coerceNumberProperty(value, 0);
            if (value > 6 || value < 0) {
                this._firstDayOfWeek = 0;
            }
            else {
                this._firstDayOfWeek = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTime.prototype, "hideOtherMonths", {
        get: /**
         * @return {?}
         */
        function () {
            return this._hideOtherMonths;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._hideOtherMonths = coerceBooleanProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTime.prototype, "id", {
        get: /**
         * @return {?}
         */
        function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTime.prototype, "formatString", {
        get: /**
         * @return {?}
         */
        function () {
            return this.pickerType === 'both'
                ? this.dateTimeFormats.fullPickerInput
                : this.pickerType === 'calendar'
                    ? this.dateTimeFormats.datePickerInput
                    : this.dateTimeFormats.timePickerInput;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTime.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @protected
     * @param {?} obj
     * @return {?}
     */
    OwlDateTime.prototype.getValidDate = /**
     * @protected
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        return this.dateTimeAdapter.isDateInstance(obj) &&
            this.dateTimeAdapter.isValid(obj)
            ? obj
            : null;
    };
    /** @nocollapse */
    OwlDateTime.ctorParameters = function () { return [
        { type: DateTimeAdapter, decorators: [{ type: Optional }] },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [OWL_DATE_TIME_FORMATS,] }] }
    ]; };
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
    return OwlDateTime;
}());
export { OwlDateTime };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS10aW1lLmNsYXNzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcGljay1kYXRldGltZS8iLCJzb3VyY2VzIjpbImxpYi9kYXRlLXRpbWUvZGF0ZS10aW1lLmNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQSxPQUFPLEVBQWdCLE1BQU0sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RFLE9BQU8sRUFDSCxxQkFBcUIsRUFDckIsb0JBQW9CLEVBQ3ZCLE1BQU0sdUJBQXVCLENBQUM7QUFDL0IsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3BFLE9BQU8sRUFDSCxxQkFBcUIsRUFFeEIsTUFBTSxrQ0FBa0MsQ0FBQzs7SUFFdEMsWUFBWSxHQUFHLENBQUM7Ozs7O0FBUXBCO0lBeUtJLHFCQUMwQixlQUFtQyxFQUcvQyxlQUFtQztRQUpqRCxpQkF1QkM7UUF0QnlCLG9CQUFlLEdBQWYsZUFBZSxDQUFvQjtRQUcvQyxvQkFBZSxHQUFmLGVBQWUsQ0FBb0I7Ozs7UUF6S3pDLHNCQUFpQixHQUFHLEtBQUssQ0FBQzs7OztRQWExQixpQkFBWSxHQUFHLEtBQUssQ0FBQzs7OztRQWM3QixjQUFTLEdBQXFDLE9BQU8sQ0FBQzs7OztRQUs5QyxjQUFTLEdBQUcsQ0FBQyxDQUFDOzs7O1FBYWQsZ0JBQVcsR0FBRyxDQUFDLENBQUM7Ozs7UUFhaEIsZ0JBQVcsR0FBRyxDQUFDLENBQUM7Ozs7UUFhaEIsb0JBQWUsR0FBRyxDQUFDLENBQUM7Ozs7UUFrQnBCLHFCQUFnQixHQUFHLEtBQUssQ0FBQzs7OztRQTREMUIsb0JBQWU7Ozs7UUFBRyxVQUFDLFFBQVc7WUFDakMsT0FBTyxDQUNILENBQUMsQ0FBQyxRQUFRO2dCQUNWLENBQUMsQ0FBQyxLQUFJLENBQUMsY0FBYyxJQUFJLEtBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3ZELENBQUMsQ0FBQyxLQUFJLENB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Qzs7Ozs7SUFVakMsMEJBQW9COztJQStCcEIsbUNBQXVDOztJQUV2QyxvQ0FBd0M7Ozs7O0lBaUJ4QyxzQ0FVRTs7Ozs7SUFPRSxzQ0FBeUQ7Ozs7O0lBQ3pELHNDQUU2Qzs7Ozs7SUFqRWpELGlEQUFrQzs7Ozs7SUFFbEMsa0RBQXFDOzs7OztJQUVyQyx1REFBMkQ7Ozs7O0lBRTNELG9EQUFxQzs7Ozs7SUFFckMsb0RBQXFDOzs7OztJQUVyQyxtREFBc0M7Ozs7O0lBRXRDLGdEQUFpQzs7Ozs7SUFFakMsK0NBQStCOzs7OztJQUUvQixtREFBc0M7Ozs7O0lBRXRDLG1EQUFzQzs7Ozs7SUFFdEMsdURBQXVDOzs7OztJQUV2QyxzREFBc0M7Ozs7OztJQUV0QyxtREFBcUM7Ozs7OztJQU1yQyxpRUFBNkM7Ozs7OztJQUU3QyxtRUFBK0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogZGF0ZS10aW1lLmNsYXNzXHJcbiAqL1xyXG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIsIEluamVjdCwgSW5wdXQsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgICBjb2VyY2VCb29sZWFuUHJvcGVydHksXHJcbiAgICBjb2VyY2VOdW1iZXJQcm9wZXJ0eVxyXG59IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XHJcbmltcG9ydCB7IERhdGVUaW1lQWRhcHRlciB9IGZyb20gJy4vYWRhcHRlci9kYXRlLXRpbWUtYWRhcHRlci5jbGFzcyc7XHJcbmltcG9ydCB7XHJcbiAgICBPV0xfREFURV9USU1FX0ZPUk1BVFMsXHJcbiAgICBPd2xEYXRlVGltZUZvcm1hdHNcclxufSBmcm9tICcuL2FkYXB0ZXIvZGF0ZS10aW1lLWZvcm1hdC5jbGFzcyc7XHJcblxyXG5sZXQgbmV4dFVuaXF1ZUlkID0gMDtcclxuXHJcbmV4cG9ydCB0eXBlIFBpY2tlclR5cGUgPSAnYm90aCcgfCAnY2FsZW5kYXInIHwgJ3RpbWVyJztcclxuXHJcbmV4cG9ydCB0eXBlIFBpY2tlck1vZGUgPSAncG9wdXAnIHwgJ2RpYWxvZycgfCAnaW5saW5lJztcclxuXHJcbmV4cG9ydCB0eXBlIFNlbGVjdE1vZGUgPSAnc2luZ2xlJyB8ICdyYW5nZScgfCAncmFuZ2VGcm9tJyB8ICdyYW5nZVRvJztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBPd2xEYXRlVGltZTxUPiB7XHJcbiAgICAvKipcclxuICAgICAqIFdoZXRoZXIgdG8gc2hvdyB0aGUgc2Vjb25kJ3MgdGltZXJcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfc2hvd1NlY29uZHNUaW1lciA9IGZhbHNlO1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzaG93U2Vjb25kc1RpbWVyKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zaG93U2Vjb25kc1RpbWVyO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBzaG93U2Vjb25kc1RpbWVyKHZhbDogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3Nob3dTZWNvbmRzVGltZXIgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFdoZXRoZXIgdGhlIHRpbWVyIGlzIGluIGhvdXIxMiBmb3JtYXRcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfaG91cjEyVGltZXIgPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgaG91cjEyVGltZXIoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hvdXIxMlRpbWVyO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBob3VyMTJUaW1lcih2YWw6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9ob3VyMTJUaW1lciA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWwpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIHZpZXcgdGhhdCB0aGUgY2FsZW5kYXIgc2hvdWxkIHN0YXJ0IGluLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgc3RhcnRWaWV3OiAnbW9udGgnIHwgJ3llYXInIHwgJ211bHRpLXllYXJzJyA9ICdtb250aCc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIb3VycyB0byBjaGFuZ2UgcGVyIHN0ZXBcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfc3RlcEhvdXIgPSAxO1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzdGVwSG91cigpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdGVwSG91cjtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgc3RlcEhvdXIodmFsOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zdGVwSG91ciA9IGNvZXJjZU51bWJlclByb3BlcnR5KHZhbCwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNaW51dGVzIHRvIGNoYW5nZSBwZXIgc3RlcFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9zdGVwTWludXRlID0gMTtcclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc3RlcE1pbnV0ZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdGVwTWludXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBzdGVwTWludXRlKHZhbDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc3RlcE1pbnV0ZSA9IGNvZXJjZU51bWJlclByb3BlcnR5KHZhbCwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZWNvbmRzIHRvIGNoYW5nZSBwZXIgc3RlcFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9zdGVwU2Vjb25kID0gMTtcclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc3RlcFNlY29uZCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdGVwU2Vjb25kO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBzdGVwU2Vjb25kKHZhbDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc3RlcFNlY29uZCA9IGNvZXJjZU51bWJlclByb3BlcnR5KHZhbCwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgdGhlIGZpcnN0IGRheSBvZiB3ZWVrXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX2ZpcnN0RGF5T2ZXZWVrID0gMDtcclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZmlyc3REYXlPZldlZWsoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZpcnN0RGF5T2ZXZWVrO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBmaXJzdERheU9mV2Vlayh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdmFsdWUgPSBjb2VyY2VOdW1iZXJQcm9wZXJ0eSh2YWx1ZSwgMCk7XHJcbiAgICAgICAgaWYgKHZhbHVlID4gNiB8fCB2YWx1ZSA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy5fZmlyc3REYXlPZldlZWsgPSAwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2ZpcnN0RGF5T2ZXZWVrID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogV2hldGhlciB0byBoaWRlIGRhdGVzIGluIG90aGVyIG1vbnRocyBhdCB0aGUgc3RhcnQgb3IgZW5kIG9mIHRoZSBjdXJyZW50IG1vbnRoLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9oaWRlT3RoZXJNb250aHMgPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgaGlkZU90aGVyTW9udGhzKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9oaWRlT3RoZXJNb250aHM7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGhpZGVPdGhlck1vbnRocyh2YWw6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9oaWRlT3RoZXJNb250aHMgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9pZDogc3RyaW5nO1xyXG4gICAgZ2V0IGlkKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lkO1xyXG4gICAgfVxyXG5cclxuICAgIGFic3RyYWN0IGdldCBzZWxlY3RlZCgpOiBUIHwgbnVsbDtcclxuXHJcbiAgICBhYnN0cmFjdCBnZXQgc2VsZWN0ZWRzKCk6IFRbXSB8IG51bGw7XHJcblxyXG4gICAgYWJzdHJhY3QgZ2V0IGRhdGVUaW1lRmlsdGVyKCk6IChkYXRlOiBUIHwgbnVsbCkgPT4gYm9vbGVhbjtcclxuXHJcbiAgICBhYnN0cmFjdCBnZXQgbWF4RGF0ZVRpbWUoKTogVCB8IG51bGw7XHJcblxyXG4gICAgYWJzdHJhY3QgZ2V0IG1pbkRhdGVUaW1lKCk6IFQgfCBudWxsO1xyXG5cclxuICAgIGFic3RyYWN0IGdldCBzZWxlY3RNb2RlKCk6IFNlbGVjdE1vZGU7XHJcblxyXG4gICAgYWJzdHJhY3QgZ2V0IHN0YXJ0QXQoKTogVCB8IG51bGw7XHJcblxyXG4gICAgYWJzdHJhY3QgZ2V0IG9wZW5lZCgpOiBib29sZWFuO1xyXG5cclxuICAgIGFic3RyYWN0IGdldCBwaWNrZXJNb2RlKCk6IFBpY2tlck1vZGU7XHJcblxyXG4gICAgYWJzdHJhY3QgZ2V0IHBpY2tlclR5cGUoKTogUGlja2VyVHlwZTtcclxuXHJcbiAgICBhYnN0cmFjdCBnZXQgaXNJblNpbmdsZU1vZGUoKTogYm9vbGVhbjtcclxuXHJcbiAgICBhYnN0cmFjdCBnZXQgaXNJblJhbmdlTW9kZSgpOiBib29sZWFuO1xyXG5cclxuICAgIGFic3RyYWN0IHNlbGVjdChkYXRlOiBUIHwgVFtdKTogdm9pZDtcclxuXHJcbiAgICBhYnN0cmFjdCB5ZWFyU2VsZWN0ZWQ6IEV2ZW50RW1pdHRlcjxUPjtcclxuXHJcbiAgICBhYnN0cmFjdCBtb250aFNlbGVjdGVkOiBFdmVudEVtaXR0ZXI8VD47XHJcblxyXG4gICAgYWJzdHJhY3Qgc2VsZWN0WWVhcihub3JtYWxpemVkWWVhcjogVCk6IHZvaWQ7XHJcblxyXG4gICAgYWJzdHJhY3Qgc2VsZWN0TW9udGgobm9ybWFsaXplZE1vbnRoOiBUKTogdm9pZDtcclxuXHJcbiAgICBnZXQgZm9ybWF0U3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGlja2VyVHlwZSA9PT0gJ2JvdGgnXHJcbiAgICAgICAgICAgID8gdGhpcy5kYXRlVGltZUZvcm1hdHMuZnVsbFBpY2tlcklucHV0XHJcbiAgICAgICAgICAgIDogdGhpcy5waWNrZXJUeXBlID09PSAnY2FsZW5kYXInXHJcbiAgICAgICAgICAgICAgICA/IHRoaXMuZGF0ZVRpbWVGb3JtYXRzLmRhdGVQaWNrZXJJbnB1dFxyXG4gICAgICAgICAgICAgICAgOiB0aGlzLmRhdGVUaW1lRm9ybWF0cy50aW1lUGlja2VySW5wdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEYXRlIFRpbWUgQ2hlY2tlciB0byBjaGVjayBpZiB0aGUgZ2l2ZSBkYXRlVGltZSBpcyBzZWxlY3RhYmxlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBkYXRlVGltZUNoZWNrZXIgPSAoZGF0ZVRpbWU6IFQpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAhIWRhdGVUaW1lICYmXHJcbiAgICAgICAgICAgICghdGhpcy5kYXRlVGltZUZpbHRlciB8fCB0aGlzLmRhdGVUaW1lRmlsdGVyKGRhdGVUaW1lKSkgJiZcclxuICAgICAgICAgICAgKCF0aGlzLm1pbkRhdGVUaW1lIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGVUaW1lQWRhcHRlci5jb21wYXJlKGRhdGVUaW1lLCB0aGlzLm1pbkRhdGVUaW1lKSA+PVxyXG4gICAgICAgICAgICAgICAgICAgIDApICYmXHJcbiAgICAgICAgICAgICghdGhpcy5tYXhEYXRlVGltZSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRlVGltZUFkYXB0ZXIuY29tcGFyZShkYXRlVGltZSwgdGhpcy5tYXhEYXRlVGltZSkgPD0gMClcclxuICAgICAgICApO1xyXG4gICAgfTtcclxuXHJcbiAgICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIEBPcHRpb25hbCgpIHByb3RlY3RlZCBkYXRlVGltZUFkYXB0ZXI6IERhdGVUaW1lQWRhcHRlcjxUPixcclxuICAgICAgICBAT3B0aW9uYWwoKVxyXG4gICAgICAgIEBJbmplY3QoT1dMX0RBVEVfVElNRV9GT1JNQVRTKVxyXG4gICAgICAgIHByb3RlY3RlZCBkYXRlVGltZUZvcm1hdHM6IE93bERhdGVUaW1lRm9ybWF0c1xyXG4gICAgKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmRhdGVUaW1lQWRhcHRlcikge1xyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcclxuICAgICAgICAgICAgICAgIGBPd2xEYXRlVGltZVBpY2tlcjogTm8gcHJvdmlkZXIgZm91bmQgZm9yIERhdGVUaW1lQWRhcHRlci4gWW91IG11c3QgaW1wb3J0IG9uZSBvZiB0aGUgZm9sbG93aW5nIGAgK1xyXG4gICAgICAgICAgICAgICAgICAgIGBtb2R1bGVzIGF0IHlvdXIgYXBwbGljYXRpb24gcm9vdDogT3dsTmF0aXZlRGF0ZVRpbWVNb2R1bGUsIE93bE1vbWVudERhdGVUaW1lTW9kdWxlLCBvciBwcm92aWRlIGEgYCArXHJcbiAgICAgICAgICAgICAgICAgICAgYGN1c3RvbSBpbXBsZW1lbnRhdGlvbi5gXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMuZGF0ZVRpbWVGb3JtYXRzKSB7XHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKFxyXG4gICAgICAgICAgICAgICAgYE93bERhdGVUaW1lUGlja2VyOiBObyBwcm92aWRlciBmb3VuZCBmb3IgT1dMX0RBVEVfVElNRV9GT1JNQVRTLiBZb3UgbXVzdCBpbXBvcnQgb25lIG9mIHRoZSBmb2xsb3dpbmcgYCArXHJcbiAgICAgICAgICAgICAgICAgICAgYG1vZHVsZXMgYXQgeW91ciBhcHBsaWNhdGlvbiByb290OiBPd2xOYXRpdmVEYXRlVGltZU1vZHVsZSwgT3dsTW9tZW50RGF0ZVRpbWVNb2R1bGUsIG9yIHByb3ZpZGUgYSBgICtcclxuICAgICAgICAgICAgICAgICAgICBgY3VzdG9tIGltcGxlbWVudGF0aW9uLmBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2lkID0gYG93bC1kdC1waWNrZXItJHtuZXh0VW5pcXVlSWQrK31gO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBnZXRWYWxpZERhdGUob2JqOiBhbnkpOiBUIHwgbnVsbCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmlzRGF0ZUluc3RhbmNlKG9iaikgJiZcclxuICAgICAgICAgICAgdGhpcy5kYXRlVGltZUFkYXB0ZXIuaXNWYWxpZChvYmopXHJcbiAgICAgICAgICAgID8gb2JqXHJcbiAgICAgICAgICAgIDogbnVsbDtcclxuICAgIH1cclxufVxyXG4iXX0=