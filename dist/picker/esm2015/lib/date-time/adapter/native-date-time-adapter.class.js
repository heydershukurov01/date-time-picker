/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * native-date-time-adapter.class
 */
import { Inject, Injectable, Optional } from '@angular/core';
import { Platform } from '@angular/cdk/platform';
import { DateTimeAdapter, OWL_DATE_TIME_LOCALE } from './date-time-adapter.class';
/**
 * The default month names to use if Intl API is not available.
 * @type {?}
 */
const DEFAULT_MONTH_NAMES = {
    long: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ],
    short: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
    ],
    narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D']
};
/**
 * The default day of the week names to use if Intl API is not available.
 * @type {?}
 */
const DEFAULT_DAY_OF_WEEK_NAMES = {
    long: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ],
    short: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S']
};
const ɵ0 = /**
 * @param {?} i
 * @return {?}
 */
i => String(i + 1);
/**
 * The default date names to use if Intl API is not available.
 * @type {?}
 */
const DEFAULT_DATE_NAMES = range(31, (ɵ0));
/**
 * Whether the browser supports the Intl API.
 * @type {?}
 */
const SUPPORTS_INTL_API = typeof Intl !== 'undefined';
/**
 * Matches strings that have the form of a valid RFC 3339 string
 * (https://tools.ietf.org/html/rfc3339). Note that the string may not actually be a valid date
 * because the regex will match strings an with out of bounds month, date, etc.
 * @type {?}
 */
const ISO_8601_REGEX = /^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/;
/**
 * Creates an array and fills it with values.
 * @template T
 * @param {?} length
 * @param {?} valueFunction
 * @return {?}
 */
function range(length, valueFunction) {
    /** @type {?} */
    const valuesArray = Array(length);
    for (let i = 0; i < length; i++) {
        valuesArray[i] = valueFunction(i);
    }
    return valuesArray;
}
export class NativeDateTimeAdapter extends DateTimeAdapter {
    /**
     * @param {?} owlDateTimeLocale
     * @param {?} platform
     */
    constructor(owlDateTimeLocale, platform) {
        super();
        this.owlDateTimeLocale = owlDateTimeLocale;
        super.setLocale(owlDateTimeLocale);
        // IE does its own time zone correction, so we disable this on IE.
        this.useUtcForDisplay = !platform.TRIDENT;
        this._clampDate = platform.TRIDENT || platform.EDGE;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getYear(date) {
        return date.getFullYear();
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getMonth(date) {
        return date.getMonth();
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getDay(date) {
        return date.getDay();
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getDate(date) {
        return date.getDate();
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getHours(date) {
        return date.getHours();
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getMinutes(date) {
        return date.getMinutes();
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getSeconds(date) {
        return date.getSeconds();
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getTime(date) {
        return date.getTime();
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getNumDaysInMonth(date) {
        /** @type {?} */
        const lastDateOfMonth = this.createDateWithOverflow(this.getYear(date), this.getMonth(date) + 1, 0);
        return this.getDate(lastDateOfMonth);
    }
    /**
     * @param {?} dateLeft
     * @param {?} dateRight
     * @return {?}
     */
    differenceInCalendarDays(dateLeft, dateRight) {
        if (this.isValid(dateLeft) && this.isValid(dateRight)) {
            /** @type {?} */
            const dateLeftStartOfDay = this.createDate(this.getYear(dateLeft), this.getMonth(dateLeft), this.getDate(dateLeft));
            /** @type {?} */
            const dateRightStartOfDay = this.createDate(this.getYear(dateRight), this.getMonth(dateRight), this.getDate(dateRight));
            /** @type {?} */
            const timeStampLeft = this.getTime(dateLeftStartOfDay) -
                dateLeftStartOfDay.getTimezoneOffset() *
                    this.milliseondsInMinute;
            /** @type {?} */
            const timeStampRight = this.getTime(dateRightStartOfDay) -
                dateRightStartOfDay.getTimezoneOffset() *
                    this.milliseondsInMinute;
            return Math.round((timeStampLeft - timeStampRight) / this.millisecondsInDay);
        }
        else {
            return null;
        }
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getYearName(date) {
        if (SUPPORTS_INTL_API) {
            /** @type {?} */
            const dtf = new Intl.DateTimeFormat(this.locale, {
                year: 'numeric',
                timeZone: 'utc'
            });
            return this.stripDirectionalityCharacters(this._format(dtf, date));
        }
        return String(this.getYear(date));
    }
    /**
     * @param {?} style
     * @return {?}
     */
    getMonthNames(style) {
        if (SUPPORTS_INTL_API) {
            /** @type {?} */
            const dtf = new Intl.DateTimeFormat(this.locale, {
                month: style,
                timeZone: 'utc'
            });
            return range(12, (/**
             * @param {?} i
             * @return {?}
             */
            i => this.stripDirectionalityCharacters(this._format(dtf, new Date(2017, i, 1)))));
        }
        return DEFAULT_MONTH_NAMES[style];
    }
    /**
     * @param {?} style
     * @return {?}
     */
    getDayOfWeekNames(style) {
        if (SUPPORTS_INTL_API) {
            /** @type {?} */
            const dtf = new Intl.DateTimeFormat(this.locale, {
                weekday: style,
                timeZone: 'utc'
            });
            return range(7, (/**
             * @param {?} i
             * @return {?}
             */
            i => this.stripDirectionalityCharacters(this._format(dtf, new Date(2017, 0, i + 1)))));
        }
        return DEFAULT_DAY_OF_WEEK_NAMES[style];
    }
    /**
     * @return {?}
     */
    getDateNames() {
        if (SUPPORTS_INTL_API) {
            /** @type {?} */
            const dtf = new Intl.DateTimeFormat(this.locale, {
                day: 'numeric',
                timeZone: 'utc'
            });
            return range(31, (/**
             * @param {?} i
             * @return {?}
             */
            i => this.stripDirectionalityCharacters(this._format(dtf, new Date(2017, 0, i + 1)))));
        }
        return DEFAULT_DATE_NAMES;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    toIso8601(date) {
        return date.toISOString();
    }
    /**
     * @param {?} dateLeft
     * @param {?} dateRight
     * @return {?}
     */
    isEqual(dateLeft, dateRight) {
        if (this.isValid(dateLeft) && this.isValid(dateRight)) {
            return dateLeft.getTime() === dateRight.getTime();
        }
        else {
            return false;
        }
    }
    /**
     * @param {?} dateLeft
     * @param {?} dateRight
     * @return {?}
     */
    isSameDay(dateLeft, dateRight) {
        if (this.isValid(dateLeft) && this.isValid(dateRight)) {
            /** @type {?} */
            const dateLeftStartOfDay = this.clone(dateLeft);
            /** @type {?} */
            const dateRightStartOfDay = this.clone(dateRight);
            dateLeftStartOfDay.setHours(0, 0, 0, 0);
            dateRightStartOfDay.setHours(0, 0, 0, 0);
            return (dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime());
        }
        else {
            return false;
        }
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isValid(date) {
        return date && !isNaN(date.getTime());
    }
    /**
     * @return {?}
     */
    invalid() {
        return new Date(NaN);
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    isDateInstance(obj) {
        return obj instanceof Date;
    }
    /**
     * @param {?} date
     * @param {?} amount
     * @return {?}
     */
    addCalendarYears(date, amount) {
        return this.addCalendarMonths(date, amount * 12);
    }
    /**
     * @param {?} date
     * @param {?} amount
     * @return {?}
     */
    addCalendarMonths(date, amount) {
        /** @type {?} */
        const result = this.clone(date);
        amount = Number(amount);
        /** @type {?} */
        const desiredMonth = result.getMonth() + amount;
        /** @type {?} */
        const dateWithDesiredMonth = new Date(0);
        dateWithDesiredMonth.setFullYear(result.getFullYear(), desiredMonth, 1);
        dateWithDesiredMonth.setHours(0, 0, 0, 0);
        /** @type {?} */
        const daysInMonth = this.getNumDaysInMonth(dateWithDesiredMonth);
        // Set the last day of the new month
        // if the original date was the last day of the longer month
        result.setMonth(desiredMonth, Math.min(daysInMonth, result.getDate()));
        return result;
    }
    /**
     * @param {?} date
     * @param {?} amount
     * @return {?}
     */
    addCalendarDays(date, amount) {
        /** @type {?} */
        const result = this.clone(date);
        amount = Number(amount);
        result.setDate(result.getDate() + amount);
        return result;
    }
    /**
     * @param {?} date
     * @param {?} amount
     * @return {?}
     */
    setHours(date, amount) {
        /** @type {?} */
        const result = this.clone(date);
        result.setHours(amount);
        return result;
    }
    /**
     * @param {?} date
     * @param {?} amount
     * @return {?}
     */
    setMinutes(date, amount) {
        /** @type {?} */
        const result = this.clone(date);
        result.setMinutes(amount);
        return result;
    }
    /**
     * @param {?} date
     * @param {?} amount
     * @return {?}
     */
    setSeconds(date, amount) {
        /** @type {?} */
        const result = this.clone(date);
        result.setSeconds(amount);
        return result;
    }
    /**
     * @param {?} year
     * @param {?} month
     * @param {?} date
     * @param {?=} hours
     * @param {?=} minutes
     * @param {?=} seconds
     * @return {?}
     */
    createDate(year, month, date, hours = 0, minutes = 0, seconds = 0) {
        if (month < 0 || month > 11) {
            throw Error(`Invalid month index "${month}". Month index has to be between 0 and 11.`);
        }
        if (date < 1) {
            throw Error(`Invalid date "${date}". Date has to be greater than 0.`);
        }
        if (hours < 0 || hours > 23) {
            throw Error(`Invalid hours "${hours}". Hours has to be between 0 and 23.`);
        }
        if (minutes < 0 || minutes > 59) {
            throw Error(`Invalid minutes "${minutes}". Minutes has to between 0 and 59.`);
        }
        if (seconds < 0 || seconds > 59) {
            throw Error(`Invalid seconds "${seconds}". Seconds has to be between 0 and 59.`);
        }
        /** @type {?} */
        const result = this.createDateWithOverflow(year, month, date, hours, minutes, seconds);
        // Check that the date wasn't above the upper bound for the month, causing the month to overflow
        // For example, createDate(2017, 1, 31) would try to create a date 2017/02/31 which is invalid
        if (result.getMonth() !== month) {
            throw Error(`Invalid date "${date}" for month with index "${month}".`);
        }
        return result;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    clone(date) {
        return this.createDate(this.getYear(date), this.getMonth(date), this.getDate(date), this.getHours(date), this.getMinutes(date), this.getSeconds(date));
    }
    /**
     * @return {?}
     */
    now() {
        return new Date();
    }
    /**
     * @param {?} date
     * @param {?} displayFormat
     * @return {?}
     */
    format(date, displayFormat) {
        if (!this.isValid(date)) {
            throw Error('JSNativeDate: Cannot format invalid date.');
        }
        if (SUPPORTS_INTL_API) {
            if (this._clampDate &&
                (date.getFullYear() < 1 || date.getFullYear() > 9999)) {
                date = this.clone(date);
                date.setFullYear(Math.max(1, Math.min(9999, date.getFullYear())));
            }
            displayFormat = Object.assign({}, displayFormat, { timeZone: 'utc' });
            /** @type {?} */
            const dtf = new Intl.DateTimeFormat(this.locale, displayFormat);
            return this.stripDirectionalityCharacters(this._format(dtf, date));
        }
        return this.stripDirectionalityCharacters(date.toDateString());
    }
    /**
     * @param {?} value
     * @param {?} parseFormat
     * @return {?}
     */
    parse(value, parseFormat) {
        // There is no way using the native JS Date to set the parse format or locale
        if (typeof value === 'number') {
            return new Date(value);
        }
        return value ? new Date(Date.parse(value)) : null;
    }
    /**
     * Returns the given value if given a valid Date or null. Deserializes valid ISO 8601 strings
     * (https://www.ietf.org/rfc/rfc3339.txt) into valid Dates and empty string into null. Returns an
     * invalid date for all other values.
     * @param {?} value
     * @return {?}
     */
    deserialize(value) {
        if (typeof value === 'string') {
            if (!value) {
                return null;
            }
            // The `Date` constructor accepts formats other than ISO 8601, so we need to make sure the
            // string is the right format first.
            if (ISO_8601_REGEX.test(value)) {
                /** @type {?} */
                const date = new Date(value);
                if (this.isValid(date)) {
                    return date;
                }
            }
        }
        return super.deserialize(value);
    }
    /**
     * Creates a date but allows the month and date to overflow.
     * @private
     * @param {?} year
     * @param {?} month
     * @param {?} date
     * @param {?=} hours
     * @param {?=} minutes
     * @param {?=} seconds
     * @return {?}
     */
    createDateWithOverflow(year, month, date, hours = 0, minutes = 0, seconds = 0) {
        /** @type {?} */
        const result = new Date(year, month, date, hours, minutes, seconds);
        if (year >= 0 && year < 100) {
            result.setFullYear(this.getYear(result) - 1900);
        }
        return result;
    }
    /**
     * Strip out unicode LTR and RTL characters. Edge and IE insert these into formatted dates while
     * other browsers do not. We remove them to make output consistent and because they interfere with
     * date parsing.
     * @private
     * @param {?} str
     * @return {?}
     */
    stripDirectionalityCharacters(str) {
        return str.replace(/[\u200e\u200f]/g, '');
    }
    /**
     * When converting Date object to string, javascript built-in functions may return wrong
     * results because it applies its internal DST rules. The DST rules around the world change
     * very frequently, and the current valid rule is not always valid in previous years though.
     * We work around this problem building a new Date object which has its internal UTC
     * representation with the local date and time.
     * @private
     * @param {?} dtf
     * @param {?} date
     * @return {?}
     */
    _format(dtf, date) {
        /** @type {?} */
        const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
        return dtf.format(d);
    }
}
NativeDateTimeAdapter.decorators = [
    { type: Injectable }
];
/** @nocollapse */
NativeDateTimeAdapter.ctorParameters = () => [
    { type: String, decorators: [{ type: Optional }, { type: Inject, args: [OWL_DATE_TIME_LOCALE,] }] },
    { type: Platform }
];
if (false) {
    /**
     * Whether to clamp the date between 1 and 9999 to avoid IE and Edge errors.
     * @type {?}
     * @private
     */
    NativeDateTimeAdapter.prototype._clampDate;
    /**
     * Whether to use `timeZone: 'utc'` with `Intl.DateTimeFormat` when formatting dates.
     * Without this `Intl.DateTimeFormat` sometimes chooses the wrong timeZone, which can throw off
     * the result. (e.g. in the en-US locale `new Date(1800, 7, 14).toLocaleDateString()`
     * will produce `'8/13/1800'`.
     * @type {?}
     */
    NativeDateTimeAdapter.prototype.useUtcForDisplay;
    /**
     * @type {?}
     * @private
     */
    NativeDateTimeAdapter.prototype.owlDateTimeLocale;
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF0aXZlLWRhdGUtdGltZS1hZGFwdGVyLmNsYXNzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcGljay1kYXRldGltZS8iLCJzb3VyY2VzIjpbImxpYi9kYXRlLXRpbWUvYWRhcHRlci9uYXRpdmUtZGF0ZS10aW1lLWFkYXB0ZXIuY2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUNILGVBQWUsRUFDZixvQkFBb0IsRUFDdkIsTUFBTSwyQkFBMkIsQ0FBQzs7Ozs7TUFHN0IsbUJBQW1CLEdBQUc7SUFDeEIsSUFBSSxFQUFFO1FBQ0YsU0FBUztRQUNULFVBQVU7UUFDVixPQUFPO1FBQ1AsT0FBTztRQUNQLEtBQUs7UUFDTCxNQUFNO1FBQ04sTUFBTTtRQUNOLFFBQVE7UUFDUixXQUFXO1FBQ1gsU0FBUztRQUNULFVBQVU7UUFDVixVQUFVO0tBQ2I7SUFDRCxLQUFLLEVBQUU7UUFDSCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7S0FDUjtJQUNELE1BQU0sRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQ3ZFOzs7OztNQUdLLHlCQUF5QixHQUFHO0lBQzlCLElBQUksRUFBRTtRQUNGLFFBQVE7UUFDUixRQUFRO1FBQ1IsU0FBUztRQUNULFdBQVc7UUFDWCxVQUFVO1FBQ1YsUUFBUTtR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Q25CLFVBQWtCLENBQUM7O2NBRWIsTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDO1FBRW5FLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLEdBQUcsR0FBRyxFQUFFO1lBQ3pCLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztTQUNuRDtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7Ozs7Ozs7OztJQU9PLDZCQUE2QixDQUFDLEdBQVc7UUFDN0MsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLGlCQUFpQixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzlDLENBQUM7Ozs7Ozs7Ozs7OztJQVNPLE9BQU8sQ0FBQyxHQUF3QixFQUFFLElBQVU7O2NBQzFDLENBQUMsR0FBRyxJQUFJLElBQUksQ0FDZCxJQUFJLENBQUMsR0FBRyxDQUNKLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFDbEIsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUNmLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFDZCxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQ2YsSUFBSSxDQUFDLFVBQVUsRUFBRSxFQUNqQixJQUFJLENBQUMsVUFBVSxFQUFFLEVBQ2pCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FDekIsQ0FDSjtRQUNELE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN6QixDQUFDOzs7WUE3WkosVUFBVTs7Ozt5Q0FjRixRQUFRLFlBQ1IsTUFBTSxTQUFDLG9CQUFvQjtZQTNGM0IsUUFBUTs7Ozs7Ozs7SUErRWIsMkNBQXFDOzs7Ozs7OztJQVFyQyxpREFBMEI7Ozs7O0lBR3RCLGtEQUVpQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBuYXRpdmUtZGF0ZS10aW1lLWFkYXB0ZXIuY2xhc3NcclxuICovXHJcblxyXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcclxuaW1wb3J0IHtcclxuICAgIERhdGVUaW1lQWRhcHRlcixcclxuICAgIE9XTF9EQVRFX1RJTUVfTE9DQUxFXHJcbn0gZnJvbSAnLi9kYXRlLXRpbWUtYWRhcHRlci5jbGFzcyc7XHJcblxyXG4vKiogVGhlIGRlZmF1bHQgbW9udGggbmFtZXMgdG8gdXNlIGlmIEludGwgQVBJIGlzIG5vdCBhdmFpbGFibGUuICovXHJcbmNvbnN0IERFRkFVTFRfTU9OVEhfTkFNRVMgPSB7XHJcbiAgICBsb25nOiBbXHJcbiAgICAgICAgJ0phbnVhcnknLFxyXG4gICAgICAgICdGZWJydWFyeScsXHJcbiAgICAgICAgJ01hcmNoJyxcclxuICAgICAgICAnQXByaWwnLFxyXG4gICAgICAgICdNYXknLFxyXG4gICAgICAgICdKdW5lJyxcclxuICAgICAgICAnSnVseScsXHJcbiAgICAgICAgJ0F1Z3VzdCcsXHJcbiAgICAgICAgJ1NlcHRlbWJlcicsXHJcbiAgICAgICAgJ09jdG9iZXInLFxyXG4gICAgICAgICdOb3ZlbWJlcicsXHJcbiAgICAgICAgJ0RlY2VtYmVyJ1xyXG4gICAgXSxcclxuICAgIHNob3J0OiBbXHJcbiAgICAgICAgJ0phbicsXHJcbiAgICAgICAgJ0ZlYicsXHJcbiAgICAgICAgJ01hcicsXHJcbiAgICAgICAgJ0FwcicsXHJcbiAgICAgICAgJ01heScsXHJcbiAgICAgICAgJ0p1bicsXHJcbiAgICAgICAgJ0p1bCcsXHJcbiAgICAgICAgJ0F1ZycsXHJcbiAgICAgICAgJ1NlcCcsXHJcbiAgICAgICAgJ09jdCcsXHJcbiAgICAgICAgJ05vdicsXHJcbiAgICAgICAgJ0RlYydcclxuICAgIF0sXHJcbiAgICBuYXJyb3c6IFsnSicsICdGJywgJ00nLCAnQScsICdNJywgJ0onLCAnSicsICdBJywgJ1MnLCAnTycsICdOJywgJ0QnXVxyXG59O1xyXG5cclxuLyoqIFRoZSBkZWZhdWx0IGRheSBvZiB0aGUgd2VlayBuYW1lcyB0byB1c2UgaWYgSW50bCBBUEkgaXMgbm90IGF2YWlsYWJsZS4gKi9cclxuY29uc3QgREVGQVVMVF9EQVlfT0ZfV0VFS19OQU1FUyA9IHtcclxuICAgIGxvbmc6IFtcclxuICAgICAgICAnU3VuZGF5JyxcclxuICAgICAgICAnTW9uZGF5JyxcclxuICAgICAgICAnVHVlc2RheScsXHJcbiAgICAgICAgJ1dlZG5lc2RheScsXHJcbiAgICAgICAgJ1RodXJzZGF5JyxcclxuICAgICAgICAnRnJpZGF5JyxcclxuICAgICAgICAnU2F0dXJkYXknXHJcbiAgICBdLFxyXG4gICAgc2hvcnQ6IFsnU3VuJywgJ01vbicsICdUdWUnLCAnV2VkJywgJ1RodScsICdGcmknLCAnU2F0J10sXHJcbiAgICBuYXJyb3c6IFsnUycsICdNJywgJ1QnLCAnVycsICdUJywgJ0YnLCAnUyddXHJcbn07XHJcblxyXG4vKiogVGhlIGRlZmF1bHQgZGF0ZSBuYW1lcyB0byB1c2UgaWYgSW50bCBBUEkgaXMgbm90IGF2YWlsYWJsZS4gKi9cclxuY29uc3QgREVGQVVMVF9EQVRFX05BTUVTID0gcmFuZ2UoMzEsIGkgPT4gU3RyaW5nKGkgKyAxKSk7XHJcblxyXG4vKiogV2hldGhlciB0aGUgYnJvd3NlciBzdXBwb3J0cyB0aGUgSW50bCBBUEkuICovXHJcbmNvbnN0IFNVUFBPUlRTX0lOVExfQVBJID0gdHlwZW9mIEludGwgIT09ICd1bmRlZmluZWQnO1xyXG5cclxuLyoqXHJcbiAqIE1hdGNoZXMgc3RyaW5ncyB0aGF0IGhhdmUgdGhlIGZvcm0gb2YgYSB2YWxpZCBSRkMgMzMzOSBzdHJpbmdcclxuICogKGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMzMzM5KS4gTm90ZSB0aGF0IHRoZSBzdHJpbmcgbWF5IG5vdCBhY3R1YWxseSBiZSBhIHZhbGlkIGRhdGVcclxuICogYmVjYXVzZSB0aGUgcmVnZXggd2lsbCBtYXRjaCBzdHJpbmdzIGFuIHdpdGggb3V0IG9mIGJvdW5kcyBtb250aCwgZGF0ZSwgZXRjLlxyXG4gKi9cclxuY29uc3QgSVNPXzg2MDFfUkVHRVggPSAvXlxcZHs0fS1cXGR7Mn0tXFxkezJ9KD86VFxcZHsyfTpcXGR7Mn06XFxkezJ9KD86XFwuXFxkKyk/KD86WnwoPzooPzpcXCt8LSlcXGR7Mn06XFxkezJ9KSk/KT8kLztcclxuXHJcbi8qKiBDcmVhdGVzIGFuIGFycmF5IGFuZCBmaWxscyBpdCB3aXRoIHZhbHVlcy4gKi9cclxuZnVuY3Rpb24gcmFuZ2U8VD4obGVuZ3RoOiBudW1iZXIsIHZhbHVlRnVuY3Rpb246IChpbmRleDogbnVtYmVyKSA9PiBUKTogVFtdIHtcclxuICAgIGNvbnN0IHZhbHVlc0FycmF5ID0gQXJyYXkobGVuZ3RoKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB2YWx1ZXNBcnJheVtpXSA9IHZhbHVlRnVuY3Rpb24oaSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmFsdWVzQXJyYXk7XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE5hdGl2ZURhdGVUaW1lQWRhcHRlciBleHRlbmRzIERhdGVUaW1lQWRhcHRlcjxEYXRlPiB7XHJcbiAgICAvKiogV2hldGhlciB0byBjbGFtcCB0aGUgZGF0ZSBiZXR3ZWVuIDEgYW5kIDk5OTkgdG8gYXZvaWQgSUUgYW5kIEVkZ2UgZXJyb3JzLiAqL1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfY2xhbXBEYXRlOiBib29sZWFuO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogV2hldGhlciB0byB1c2UgYHRpbWVab25lOiAndXRjJ2Agd2l0aCBgSW50bC5EYXRlVGltZUZvcm1hdGAgd2hlbiBmb3JtYXR0aW5nIGRhdGVzLlxyXG4gICAgICogV2l0aG91dCB0aGlzIGBJbnRsLkRhdGVUaW1lRm9ybWF0YCBzb21ldGltZXMgY2hvb3NlcyB0aGUgd3JvbmcgdGltZVpvbmUsIHdoaWNoIGNhbiB0aHJvdyBvZmZcclxuICAgICAqIHRoZSByZXN1bHQuIChlLmcuIGluIHRoZSBlbi1VUyBsb2NhbGUgYG5ldyBEYXRlKDE4MDAsIDcsIDE0KS50b0xvY2FsZURhdGVTdHJpbmcoKWBcclxuICAgICAqIHdpbGwgcHJvZHVjZSBgJzgvMTMvMTgwMCdgLlxyXG4gICAgICovXHJcbiAgICB1c2VVdGNGb3JEaXNwbGF5OiBib29sZWFuO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIEBPcHRpb25hbCgpXHJcbiAgICAgICAgQEluamVjdChPV0xfREFURV9USU1FX0xPQ0FMRSlcclxuICAgICAgICBwcml2YXRlIG93bERhdGVUaW1lTG9jYWxlOiBzdHJpbmcsXHJcbiAgICAgICAgcGxhdGZvcm06IFBsYXRmb3JtXHJcbiAgICApIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHN1cGVyLnNldExvY2FsZShvd2xEYXRlVGltZUxvY2FsZSk7XHJcblxyXG4gICAgICAgIC8vIElFIGRvZXMgaXRzIG93biB0aW1lIHpvbmUgY29ycmVjdGlvbiwgc28gd2UgZGlzYWJsZSB0aGlzIG9uIElFLlxyXG4gICAgICAgIHRoaXMudXNlVXRjRm9yRGlzcGxheSA9ICFwbGF0Zm9ybS5UUklERU5UO1xyXG4gICAgICAgIHRoaXMuX2NsYW1wRGF0ZSA9IHBsYXRmb3JtLlRSSURFTlQgfHwgcGxhdGZvcm0uRURHRTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0WWVhcihkYXRlOiBEYXRlKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRNb250aChkYXRlOiBEYXRlKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gZGF0ZS5nZXRNb250aCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXREYXkoZGF0ZTogRGF0ZSk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIGRhdGUuZ2V0RGF5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldERhdGUoZGF0ZTogRGF0ZSk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIGRhdGUuZ2V0RGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRIb3VycyhkYXRlOiBEYXRlKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gZGF0ZS5nZXRIb3VycygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRNaW51dGVzKGRhdGU6IERhdGUpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBkYXRlLmdldE1pbnV0ZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0U2Vjb25kcyhkYXRlOiBEYXRlKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gZGF0ZS5nZXRTZWNvbmRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFRpbWUoZGF0ZTogRGF0ZSk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIGRhdGUuZ2V0VGltZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXROdW1EYXlzSW5Nb250aChkYXRlOiBEYXRlKTogbnVtYmVyIHtcclxuICAgICAgICBjb25zdCBsYXN0RGF0ZU9mTW9udGggPSB0aGlzLmNyZWF0ZURhdGVXaXRoT3ZlcmZsb3coXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0WWVhcihkYXRlKSxcclxuICAgICAgICAgICAgdGhpcy5nZXRNb250aChkYXRlKSArIDEsXHJcbiAgICAgICAgICAgIDBcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5nZXREYXRlKGxhc3REYXRlT2ZNb250aCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhkYXRlTGVmdDogRGF0ZSwgZGF0ZVJpZ2h0OiBEYXRlKTogbnVtYmVyIHtcclxuICAgICAgICBpZiAodGhpcy5pc1ZhbGlkKGRhdGVMZWZ0KSAmJiB0aGlzLmlzVmFsaWQoZGF0ZVJpZ2h0KSkge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRlTGVmdFN0YXJ0T2ZEYXkgPSB0aGlzLmNyZWF0ZURhdGUoXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldFllYXIoZGF0ZUxlZnQpLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRNb250aChkYXRlTGVmdCksXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldERhdGUoZGF0ZUxlZnQpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGVSaWdodFN0YXJ0T2ZEYXkgPSB0aGlzLmNyZWF0ZURhdGUoXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldFllYXIoZGF0ZVJpZ2h0KSxcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0TW9udGgoZGF0ZVJpZ2h0KSxcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0RGF0ZShkYXRlUmlnaHQpXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0aW1lU3RhbXBMZWZ0ID1cclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0VGltZShkYXRlTGVmdFN0YXJ0T2ZEYXkpIC1cclxuICAgICAgICAgICAgICAgIGRhdGVMZWZ0U3RhcnRPZkRheS5nZXRUaW1lem9uZU9mZnNldCgpICpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1pbGxpc2VvbmRzSW5NaW51dGU7XHJcbiAgICAgICAgICAgIGNvbnN0IHRpbWVTdGFtcFJpZ2h0ID1cclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0VGltZShkYXRlUmlnaHRTdGFydE9mRGF5KSAtXHJcbiAgICAgICAgICAgICAgICBkYXRlUmlnaHRTdGFydE9mRGF5LmdldFRpbWV6b25lT2Zmc2V0KCkgKlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWlsbGlzZW9uZHNJbk1pbnV0ZTtcclxuICAgICAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoXHJcbiAgICAgICAgICAgICAgICAodGltZVN0YW1wTGVmdCAtIHRpbWVTdGFtcFJpZ2h0KSAvIHRoaXMubWlsbGlzZWNvbmRzSW5EYXlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFllYXJOYW1lKGRhdGU6IERhdGUpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmIChTVVBQT1JUU19JTlRMX0FQSSkge1xyXG4gICAgICAgICAgICBjb25zdCBkdGYgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCh0aGlzLmxvY2FsZSwge1xyXG4gICAgICAgICAgICAgICAgeWVhcjogJ251bWVyaWMnLFxyXG4gICAgICAgICAgICAgICAgdGltZVpvbmU6ICd1dGMnXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdHJpcERpcmVjdGlvbmFsaXR5Q2hhcmFjdGVycyh0aGlzLl9mb3JtYXQoZHRmLCBkYXRlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBTdHJpbmcodGhpcy5nZXRZZWFyKGRhdGUpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0TW9udGhOYW1lcyhzdHlsZTogJ2xvbmcnIHwgJ3Nob3J0JyB8ICduYXJyb3cnKTogc3RyaW5nW10ge1xyXG4gICAgICAgIGlmIChTVVBQT1JUU19JTlRMX0FQSSkge1xyXG4gICAgICAgICAgICBjb25zdCBkdGYgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCh0aGlzLmxvY2FsZSwge1xyXG4gICAgICAgICAgICAgICAgbW9udGg6IHN0eWxlLFxyXG4gICAgICAgICAgICAgICAgdGltZVpvbmU6ICd1dGMnXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gcmFuZ2UoMTIsIGkgPT5cclxuICAgICAgICAgICAgICAgIHRoaXMuc3RyaXBEaXJlY3Rpb25hbGl0eUNoYXJhY3RlcnMoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZm9ybWF0KGR0ZiwgbmV3IERhdGUoMjAxNywgaSwgMSkpXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBERUZBVUxUX01PTlRIX05BTUVTW3N0eWxlXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0RGF5T2ZXZWVrTmFtZXMoc3R5bGU6ICdsb25nJyB8ICdzaG9ydCcgfCAnbmFycm93Jyk6IHN0cmluZ1tdIHtcclxuICAgICAgICBpZiAoU1VQUE9SVFNfSU5UTF9BUEkpIHtcclxuICAgICAgICAgICAgY29uc3QgZHRmID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQodGhpcy5sb2NhbGUsIHtcclxuICAgICAgICAgICAgICAgIHdlZWtkYXk6IHN0eWxlLFxyXG4gICAgICAgICAgICAgICAgdGltZVpvbmU6ICd1dGMnXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gcmFuZ2UoNywgaSA9PlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdHJpcERpcmVjdGlvbmFsaXR5Q2hhcmFjdGVycyhcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9mb3JtYXQoZHRmLCBuZXcgRGF0ZSgyMDE3LCAwLCBpICsgMSkpXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gREVGQVVMVF9EQVlfT0ZfV0VFS19OQU1FU1tzdHlsZV07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldERhdGVOYW1lcygpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgaWYgKFNVUFBPUlRTX0lOVExfQVBJKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGR0ZiA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KHRoaXMubG9jYWxlLCB7XHJcbiAgICAgICAgICAgICAgICBkYXk6ICdudW1lcmljJyxcclxuICAgICAgICAgICAgICAgIHRpbWVab25lOiAndXRjJ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJhbmdlKDMxLCBpID0+XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0cmlwRGlyZWN0aW9uYWxpdHlDaGFyYWN0ZXJzKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2Zvcm1hdChkdGYsIG5ldyBEYXRlKDIwMTcsIDAsIGkgKyAxKSlcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIERFRkFVTFRfREFURV9OQU1FUztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9Jc284NjAxKGRhdGU6IERhdGUpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBkYXRlLnRvSVNPU3RyaW5nKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzRXF1YWwoZGF0ZUxlZnQ6IERhdGUsIGRhdGVSaWdodDogRGF0ZSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0aGlzLmlzVmFsaWQoZGF0ZUxlZnQpICYmIHRoaXMuaXNWYWxpZChkYXRlUmlnaHQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRlTGVmdC5nZXRUaW1lKCkgPT09IGRhdGVSaWdodC5nZXRUaW1lKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNTYW1lRGF5KGRhdGVMZWZ0OiBEYXRlLCBkYXRlUmlnaHQ6IERhdGUpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodGhpcy5pc1ZhbGlkKGRhdGVMZWZ0KSAmJiB0aGlzLmlzVmFsaWQoZGF0ZVJpZ2h0KSkge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRlTGVmdFN0YXJ0T2ZEYXkgPSB0aGlzLmNsb25lKGRhdGVMZWZ0KTtcclxuICAgICAgICAgICAgY29uc3QgZGF0ZVJpZ2h0U3RhcnRPZkRheSA9IHRoaXMuY2xvbmUoZGF0ZVJpZ2h0KTtcclxuICAgICAgICAgICAgZGF0ZUxlZnRTdGFydE9mRGF5LnNldEhvdXJzKDAsIDAsIDAsIDApO1xyXG4gICAgICAgICAgICBkYXRlUmlnaHRTdGFydE9mRGF5LnNldEhvdXJzKDAsIDAsIDAsIDApO1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgZGF0ZUxlZnRTdGFydE9mRGF5LmdldFRpbWUoKSA9PT0gZGF0ZVJpZ2h0U3RhcnRPZkRheS5nZXRUaW1lKClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc1ZhbGlkKGRhdGU6IERhdGUpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gZGF0ZSAmJiAhaXNOYU4oZGF0ZS5nZXRUaW1lKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbnZhbGlkKCk6IERhdGUge1xyXG4gICAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc0RhdGVJbnN0YW5jZShvYmo6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBEYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRDYWxlbmRhclllYXJzKGRhdGU6IERhdGUsIGFtb3VudDogbnVtYmVyKTogRGF0ZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkQ2FsZW5kYXJNb250aHMoZGF0ZSwgYW1vdW50ICogMTIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRDYWxlbmRhck1vbnRocyhkYXRlOiBEYXRlLCBhbW91bnQ6IG51bWJlcik6IERhdGUge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuY2xvbmUoZGF0ZSk7XHJcbiAgICAgICAgYW1vdW50ID0gTnVtYmVyKGFtb3VudCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGRlc2lyZWRNb250aCA9IHJlc3VsdC5nZXRNb250aCgpICsgYW1vdW50O1xyXG4gICAgICAgIGNvbnN0IGRhdGVXaXRoRGVzaXJlZE1vbnRoID0gbmV3IERhdGUoMCk7XHJcbiAgICAgICAgZGF0ZVdpdGhEZXNpcmVkTW9udGguc2V0RnVsbFllYXIocmVzdWx0LmdldEZ1bGxZZWFyKCksIGRlc2lyZWRNb250aCwgMSk7XHJcbiAgICAgICAgZGF0ZVdpdGhEZXNpcmVkTW9udGguc2V0SG91cnMoMCwgMCwgMCwgMCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGRheXNJbk1vbnRoID0gdGhpcy5nZXROdW1EYXlzSW5Nb250aChkYXRlV2l0aERlc2lyZWRNb250aCk7XHJcbiAgICAgICAgLy8gU2V0IHRoZSBsYXN0IGRheSBvZiB0aGUgbmV3IG1vbnRoXHJcbiAgICAgICAgLy8gaWYgdGhlIG9yaWdpbmFsIGRhdGUgd2FzIHRoZSBsYXN0IGRheSBvZiB0aGUgbG9uZ2VyIG1vbnRoXHJcbiAgICAgICAgcmVzdWx0LnNldE1vbnRoKGRlc2lyZWRNb250aCwgTWF0aC5taW4oZGF5c0luTW9udGgsIHJlc3VsdC5nZXREYXRlKCkpKTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRDYWxlbmRhckRheXMoZGF0ZTogRGF0ZSwgYW1vdW50OiBudW1iZXIpOiBEYXRlIHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLmNsb25lKGRhdGUpO1xyXG4gICAgICAgIGFtb3VudCA9IE51bWJlcihhbW91bnQpO1xyXG4gICAgICAgIHJlc3VsdC5zZXREYXRlKHJlc3VsdC5nZXREYXRlKCkgKyBhbW91bnQpO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldEhvdXJzKGRhdGU6IERhdGUsIGFtb3VudDogbnVtYmVyKTogRGF0ZSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5jbG9uZShkYXRlKTtcclxuICAgICAgICByZXN1bHQuc2V0SG91cnMoYW1vdW50KTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRNaW51dGVzKGRhdGU6IERhdGUsIGFtb3VudDogbnVtYmVyKTogRGF0ZSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5jbG9uZShkYXRlKTtcclxuICAgICAgICByZXN1bHQuc2V0TWludXRlcyhhbW91bnQpO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFNlY29uZHMoZGF0ZTogRGF0ZSwgYW1vdW50OiBudW1iZXIpOiBEYXRlIHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLmNsb25lKGRhdGUpO1xyXG4gICAgICAgIHJlc3VsdC5zZXRTZWNvbmRzKGFtb3VudCk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY3JlYXRlRGF0ZShcclxuICAgICAgICB5ZWFyOiBudW1iZXIsXHJcbiAgICAgICAgbW9udGg6IG51bWJlcixcclxuICAgICAgICBkYXRlOiBudW1iZXIsXHJcbiAgICAgICAgaG91cnM6IG51bWJlciA9IDAsXHJcbiAgICAgICAgbWludXRlczogbnVtYmVyID0gMCxcclxuICAgICAgICBzZWNvbmRzOiBudW1iZXIgPSAwXHJcbiAgICApOiBEYXRlIHtcclxuICAgICAgICBpZiAobW9udGggPCAwIHx8IG1vbnRoID4gMTEpIHtcclxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoXHJcbiAgICAgICAgICAgICAgICBgSW52YWxpZCBtb250aCBpbmRleCBcIiR7bW9udGh9XCIuIE1vbnRoIGluZGV4IGhhcyB0byBiZSBiZXR3ZWVuIDAgYW5kIDExLmBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChkYXRlIDwgMSkge1xyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcclxuICAgICAgICAgICAgICAgIGBJbnZhbGlkIGRhdGUgXCIke2RhdGV9XCIuIERhdGUgaGFzIHRvIGJlIGdyZWF0ZXIgdGhhbiAwLmBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChob3VycyA8IDAgfHwgaG91cnMgPiAyMykge1xyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcclxuICAgICAgICAgICAgICAgIGBJbnZhbGlkIGhvdXJzIFwiJHtob3Vyc31cIi4gSG91cnMgaGFzIHRvIGJlIGJldHdlZW4gMCBhbmQgMjMuYFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG1pbnV0ZXMgPCAwIHx8IG1pbnV0ZXMgPiA1OSkge1xyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcclxuICAgICAgICAgICAgICAgIGBJbnZhbGlkIG1pbnV0ZXMgXCIke21pbnV0ZXN9XCIuIE1pbnV0ZXMgaGFzIHRvIGJldHdlZW4gMCBhbmQgNTkuYFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHNlY29uZHMgPCAwIHx8IHNlY29uZHMgPiA1OSkge1xyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcclxuICAgICAgICAgICAgICAgIGBJbnZhbGlkIHNlY29uZHMgXCIke3NlY29uZHN9XCIuIFNlY29uZHMgaGFzIHRvIGJlIGJldHdlZW4gMCBhbmQgNTkuYFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5jcmVhdGVEYXRlV2l0aE92ZXJmbG93KFxyXG4gICAgICAgICAgICB5ZWFyLFxyXG4gICAgICAgICAgICBtb250aCxcclxuICAgICAgICAgICAgZGF0ZSxcclxuICAgICAgICAgICAgaG91cnMsXHJcbiAgICAgICAgICAgIG1pbnV0ZXMsXHJcbiAgICAgICAgICAgIHNlY29uZHNcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICAvLyBDaGVjayB0aGF0IHRoZSBkYXRlIHdhc24ndCBhYm92ZSB0aGUgdXBwZXIgYm91bmQgZm9yIHRoZSBtb250aCwgY2F1c2luZyB0aGUgbW9udGggdG8gb3ZlcmZsb3dcclxuICAgICAgICAvLyBGb3IgZXhhbXBsZSwgY3JlYXRlRGF0ZSgyMDE3LCAxLCAzMSkgd291bGQgdHJ5IHRvIGNyZWF0ZSBhIGRhdGUgMjAxNy8wMi8zMSB3aGljaCBpcyBpbnZhbGlkXHJcbiAgICAgICAgaWYgKHJlc3VsdC5nZXRNb250aCgpICE9PSBtb250aCkge1xyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcclxuICAgICAgICAgICAgICAgIGBJbnZhbGlkIGRhdGUgXCIke2RhdGV9XCIgZm9yIG1vbnRoIHdpdGggaW5kZXggXCIke21vbnRofVwiLmBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsb25lKGRhdGU6IERhdGUpOiBEYXRlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVEYXRlKFxyXG4gICAgICAgICAgICB0aGlzLmdldFllYXIoZGF0ZSksXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0TW9udGgoZGF0ZSksXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0RGF0ZShkYXRlKSxcclxuICAgICAgICAgICAgdGhpcy5nZXRIb3VycyhkYXRlKSxcclxuICAgICAgICAgICAgdGhpcy5nZXRNaW51dGVzKGRhdGUpLFxyXG4gICAgICAgICAgICB0aGlzLmdldFNlY29uZHMoZGF0ZSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBub3coKTogRGF0ZSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZvcm1hdChkYXRlOiBEYXRlLCBkaXNwbGF5Rm9ybWF0OiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICghdGhpcy5pc1ZhbGlkKGRhdGUpKSB7XHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdKU05hdGl2ZURhdGU6IENhbm5vdCBmb3JtYXQgaW52YWxpZCBkYXRlLicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKFNVUFBPUlRTX0lOVExfQVBJKSB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NsYW1wRGF0ZSAmJlxyXG4gICAgICAgICAgICAgICAgKGRhdGUuZ2V0RnVsbFllYXIoKSA8IDEgfHwgZGF0ZS5nZXRGdWxsWWVhcigpID4gOTk5OSlcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRlID0gdGhpcy5jbG9uZShkYXRlKTtcclxuICAgICAgICAgICAgICAgIGRhdGUuc2V0RnVsbFllYXIoXHJcbiAgICAgICAgICAgICAgICAgICAgTWF0aC5tYXgoMSwgTWF0aC5taW4oOTk5OSwgZGF0ZS5nZXRGdWxsWWVhcigpKSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGRpc3BsYXlGb3JtYXQgPSB7IC4uLmRpc3BsYXlGb3JtYXQsIHRpbWVab25lOiAndXRjJyB9O1xyXG4gICAgICAgICAgICBjb25zdCBkdGYgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCh0aGlzLmxvY2FsZSwgZGlzcGxheUZvcm1hdCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0cmlwRGlyZWN0aW9uYWxpdHlDaGFyYWN0ZXJzKHRoaXMuX2Zvcm1hdChkdGYsIGRhdGUpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnN0cmlwRGlyZWN0aW9uYWxpdHlDaGFyYWN0ZXJzKGRhdGUudG9EYXRlU3RyaW5nKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwYXJzZSh2YWx1ZTogYW55LCBwYXJzZUZvcm1hdDogYW55KTogRGF0ZSB8IG51bGwge1xyXG4gICAgICAgIC8vIFRoZXJlIGlzIG5vIHdheSB1c2luZyB0aGUgbmF0aXZlIEpTIERhdGUgdG8gc2V0IHRoZSBwYXJzZSBmb3JtYXQgb3IgbG9jYWxlXHJcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlID8gbmV3IERhdGUoRGF0ZS5wYXJzZSh2YWx1ZSkpIDogbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIGdpdmVuIHZhbHVlIGlmIGdpdmVuIGEgdmFsaWQgRGF0ZSBvciBudWxsLiBEZXNlcmlhbGl6ZXMgdmFsaWQgSVNPIDg2MDEgc3RyaW5nc1xyXG4gICAgICogKGh0dHBzOi8vd3d3LmlldGYub3JnL3JmYy9yZmMzMzM5LnR4dCkgaW50byB2YWxpZCBEYXRlcyBhbmQgZW1wdHkgc3RyaW5nIGludG8gbnVsbC4gUmV0dXJucyBhblxyXG4gICAgICogaW52YWxpZCBkYXRlIGZvciBhbGwgb3RoZXIgdmFsdWVzLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZGVzZXJpYWxpemUodmFsdWU6IGFueSk6IERhdGUgfCBudWxsIHtcclxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBUaGUgYERhdGVgIGNvbnN0cnVjdG9yIGFjY2VwdHMgZm9ybWF0cyBvdGhlciB0aGFuIElTTyA4NjAxLCBzbyB3ZSBuZWVkIHRvIG1ha2Ugc3VyZSB0aGVcclxuICAgICAgICAgICAgLy8gc3RyaW5nIGlzIHRoZSByaWdodCBmb3JtYXQgZmlyc3QuXHJcbiAgICAgICAgICAgIGlmIChJU09fODYwMV9SRUdFWC50ZXN0KHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzVmFsaWQoZGF0ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3VwZXIuZGVzZXJpYWxpemUodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIGRhdGUgYnV0IGFsbG93cyB0aGUgbW9udGggYW5kIGRhdGUgdG8gb3ZlcmZsb3cuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgY3JlYXRlRGF0ZVdpdGhPdmVyZmxvdyhcclxuICAgICAgICB5ZWFyOiBudW1iZXIsXHJcbiAgICAgICAgbW9udGg6IG51bWJlcixcclxuICAgICAgICBkYXRlOiBudW1iZXIsXHJcbiAgICAgICAgaG91cnM6IG51bWJlciA9IDAsXHJcbiAgICAgICAgbWludXRlczogbnVtYmVyID0gMCxcclxuICAgICAgICBzZWNvbmRzOiBudW1iZXIgPSAwXHJcbiAgICApOiBEYXRlIHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgZGF0ZSwgaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMpO1xyXG5cclxuICAgICAgICBpZiAoeWVhciA+PSAwICYmIHllYXIgPCAxMDApIHtcclxuICAgICAgICAgICAgcmVzdWx0LnNldEZ1bGxZZWFyKHRoaXMuZ2V0WWVhcihyZXN1bHQpIC0gMTkwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTdHJpcCBvdXQgdW5pY29kZSBMVFIgYW5kIFJUTCBjaGFyYWN0ZXJzLiBFZGdlIGFuZCBJRSBpbnNlcnQgdGhlc2UgaW50byBmb3JtYXR0ZWQgZGF0ZXMgd2hpbGVcclxuICAgICAqIG90aGVyIGJyb3dzZXJzIGRvIG5vdC4gV2UgcmVtb3ZlIHRoZW0gdG8gbWFrZSBvdXRwdXQgY29uc2lzdGVudCBhbmQgYmVjYXVzZSB0aGV5IGludGVyZmVyZSB3aXRoXHJcbiAgICAgKiBkYXRlIHBhcnNpbmcuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc3RyaXBEaXJlY3Rpb25hbGl0eUNoYXJhY3RlcnMoc3RyOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1tcXHUyMDBlXFx1MjAwZl0vZywgJycpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogV2hlbiBjb252ZXJ0aW5nIERhdGUgb2JqZWN0IHRvIHN0cmluZywgamF2YXNjcmlwdCBidWlsdC1pbiBmdW5jdGlvbnMgbWF5IHJldHVybiB3cm9uZ1xyXG4gICAgICogcmVzdWx0cyBiZWNhdXNlIGl0IGFwcGxpZXMgaXRzIGludGVybmFsIERTVCBydWxlcy4gVGhlIERTVCBydWxlcyBhcm91bmQgdGhlIHdvcmxkIGNoYW5nZVxyXG4gICAgICogdmVyeSBmcmVxdWVudGx5LCBhbmQgdGhlIGN1cnJlbnQgdmFsaWQgcnVsZSBpcyBub3QgYWx3YXlzIHZhbGlkIGluIHByZXZpb3VzIHllYXJzIHRob3VnaC5cclxuICAgICAqIFdlIHdvcmsgYXJvdW5kIHRoaXMgcHJvYmxlbSBidWlsZGluZyBhIG5ldyBEYXRlIG9iamVjdCB3aGljaCBoYXMgaXRzIGludGVybmFsIFVUQ1xyXG4gICAgICogcmVwcmVzZW50YXRpb24gd2l0aCB0aGUgbG9jYWwgZGF0ZSBhbmQgdGltZS5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfZm9ybWF0KGR0ZjogSW50bC5EYXRlVGltZUZvcm1hdCwgZGF0ZTogRGF0ZSkge1xyXG4gICAgICAgIGNvbnN0IGQgPSBuZXcgRGF0ZShcclxuICAgICAgICAgICAgRGF0ZS5VVEMoXHJcbiAgICAgICAgICAgICAgICBkYXRlLmdldEZ1bGxZZWFyKCksXHJcbiAgICAgICAgICAgICAgICBkYXRlLmdldE1vbnRoKCksXHJcbiAgICAgICAgICAgICAgICBkYXRlLmdldERhdGUoKSxcclxuICAgICAgICAgICAgICAgIGRhdGUuZ2V0SG91cnMoKSxcclxuICAgICAgICAgICAgICAgIGRhdGUuZ2V0TWludXRlcygpLFxyXG4gICAgICAgICAgICAgICAgZGF0ZS5nZXRTZWNvbmRzKCksXHJcbiAgICAgICAgICAgICAgICBkYXRlLmdldE1pbGxpc2Vjb25kcygpXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiBkdGYuZm9ybWF0KGQpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==