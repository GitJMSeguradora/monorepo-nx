import addDays from 'date-fns/addDays';
import addMonths from 'date-fns/addMonths';
import addYears from 'date-fns/addYears';
import differenceInDays from 'date-fns/differenceInDays';
import eachDayOfInterval from 'date-fns/eachDayOfInterval';
import endOfDay from 'date-fns/endOfDay';
import endOfWeek from 'date-fns/endOfWeek';
import endOfYear from 'date-fns/endOfYear';
import format from 'date-fns/format';
import getHours from 'date-fns/getHours';
import getSeconds from 'date-fns/getSeconds';
import getYear from 'date-fns/getYear';
import isAfter from 'date-fns/isAfter';
import isBefore from 'date-fns/isBefore';
import isEqual from 'date-fns/isEqual';
import isSameDay from 'date-fns/isSameDay';
import isValid from 'date-fns/isValid';
import dateFnsParse from 'date-fns/parse';
import setHours from 'date-fns/setHours';
import setMinutes from 'date-fns/setMinutes';
import setMonth from 'date-fns/setMonth';
import setSeconds from 'date-fns/setSeconds';
import setYear from 'date-fns/setYear';
import startOfDay from 'date-fns/startOfDay';
import startOfMonth from 'date-fns/startOfMonth';
import endOfMonth from 'date-fns/endOfMonth';
import startOfWeek from 'date-fns/startOfWeek';
import startOfYear from 'date-fns/startOfYear';
import ptBR from 'date-fns/locale/pt-BR';

export const DEFAULT_OPTIONS = {
  locale: ptBR,
  yearFormat: 'yyyy',
  yearMonthFormat: 'LLLL yyyy',
  dateTime12hFormat: 'dd/MM hh:mm aaaa',
  dateTime24hFormat: 'dd/MM HH:mm',
  time12hFormat: 'hh:mm a',
  time24hFormat: 'HH:mm',
  dateFormat: 'dd/MM/yyyy'
};

class DateUtils {
  constructor(props = {}) {
    const options = { ...DEFAULT_OPTIONS, ...props };

    this.locale = options.locale;
    this.yearFormat = options.yearFormat;
    this.yearMonthFormat = options.yearMonthFormat;
    this.dateTime12hFormat = options.dateTime12hFormat;
    this.dateTime24hFormat = options.dateTime24hFormat;
    this.time12hFormat = options.time12hFormat;
    this.time24hFormat = options.time24hFormat;
    this.dateFormat = options.dateFormat;
  }

  getOptions() {
    return {
      locale: this.locale,
      yearFormat: this.yearFormat,
      yearMonthFormat: this.yearMonthFormat,
      dateTime12hFormat: this.dateTime12hFormat,
      dateTime24hFormat: this.dateTime24hFormat,
      time12hFormat: this.time12hFormat,
      time24hFormat: this.time24hFormat,
      dateFormat: this.dateFormat
    };
  }

  addDays(value, count) {
    return addDays(value, count);
  }

  isValid(value) {
    return isValid(this.date(value));
  }

  getDiff(value, comparing) {
    return differenceInDays(this.date(value), this.date(comparing));
  }

  isAfter(value, comparing) {
    return isAfter(value, endOfDay(comparing));
  }

  isBefore(value, comparing) {
    return isBefore(value, startOfDay(comparing));
  }

  startOfDay(value) {
    return startOfDay(value);
  }

  endOfDay(value) {
    return endOfDay(value);
  }

  getHours(value) {
    return getHours(value);
  }

  setHours(value, count) {
    return setHours(value, count);
  }

  setMinutes(value, count) {
    return setMinutes(value, count);
  }

  getSeconds(value) {
    return getSeconds(value);
  }

  setSeconds(value, count) {
    return setSeconds(value, count);
  }

  isSameDay(value, comparing) {
    return isSameDay(value, comparing);
  }

  startOfMonth(value) {
    return startOfMonth(value);
  }

  endOfMonth(value) {
    return endOfMonth(value);
  }

  getYear(value) {
    return getYear(value);
  }

  setYear(value, count) {
    return setYear(value, count);
  }

  date(value) {
    if (typeof value === 'undefined') {
      return new Date();
    }

    if (value === null) {
      return null;
    }

    return new Date(value);
  }

  parse(value, formatString = DEFAULT_OPTIONS.dateFormat) {
    if (!value) {
      return null;
    }

    return dateFnsParse(value, formatString, new Date(), { locale: this.locale });
  }

  format(date, formatString = DEFAULT_OPTIONS.dateFormat) {
    return format(this.date(date), formatString, { locale: this.locale });
  }

  isEqual(date, comparing) {
    if (date === null && comparing === null) {
      return true;
    }

    return isEqual(date, comparing);
  }

  isNull(date) {
    return date === null;
  }

  isAfterDay(date, value) {
    return isAfter(date, endOfDay(value));
  }

  isBeforeDay(date, value) {
    return isBefore(date, startOfDay(value));
  }

  isBeforeYear(date, value) {
    return isBefore(date, startOfYear(value));
  }

  isAfterYear(date, value) {
    return isAfter(date, endOfYear(value));
  }

  formatNumber(numberToFormat) {
    return numberToFormat;
  }

  getMinutes(date) {
    return date.getMinutes();
  }

  getMonth(date) {
    return date.getMonth();
  }

  setMonth(date, count) {
    return setMonth(date, count);
  }

  getMeridiemText(ampm) {
    return ampm === 'am' ? 'AM' : 'PM';
  }

  getNextMonth(date) {
    return addMonths(date, 1);
  }

  getPreviousMonth(date) {
    return addMonths(date, -1);
  }

  getMonthArray(date) {
    const firstMonth = startOfYear(date);
    const monthArray = [firstMonth];

    while (monthArray.length < 12) {
      const prevMonth = monthArray[monthArray.length - 1];
      monthArray.push(this.getNextMonth(prevMonth));
    }

    return monthArray;
  }

  mergeDateAndTime(date, time) {
    return this.setMinutes(this.setHours(date, this.getHours(time)), this.getMinutes(time));
  }

  getWeekdays(weekFormat = 'EEEEEE') {
    const now = new Date();
    return eachDayOfInterval({
      start: startOfWeek(now, { locale: this.locale }),
      end: endOfWeek(now, { locale: this.locale })
    }).map(day => format(day, weekFormat, { locale: this.locale }));
  }

  getWeekArray(date) {
    const start = startOfWeek(startOfMonth(date), { locale: this.locale });
    const end = endOfWeek(endOfMonth(date), { locale: this.locale });

    let count = 0;
    let current = start;
    const nestedWeeks = [];

    while (isBefore(current, end)) {
      const weekNumber = Math.floor(count / 7);
      nestedWeeks[weekNumber] = nestedWeeks[weekNumber] || [];
      nestedWeeks[weekNumber].push(current);
      current = addDays(current, 1);
      count += 1;
    }

    return nestedWeeks;
  }

  getYearRange(start, end) {
    const startDate = startOfYear(start);
    const endDate = endOfYear(end);
    const years = [];

    let current = startDate;
    while (isBefore(current, endDate)) {
      years.push(current);
      current = addYears(current, 1);
    }

    return years;
  }

  // displaying methpds
  getCalendarHeaderText(date) {
    return format(date, this.yearMonthFormat, { locale: this.locale });
  }

  getYearText(date, locale = DEFAULT_OPTIONS.locale) {
    return format(date, 'yyyy', { locale });
  }

  getDatePickerHeaderText(date) {
    return format(date, 'EEE, MMM d', { locale: this.locale });
  }

  getDateTimePickerHeaderText(date) {
    return format(date, 'MMM d', { locale: this.locale });
  }

  getMonthText(date) {
    return format(date, 'MMMM', { locale: this.locale });
  }

  getDayText(date) {
    return format(date, 'd', { locale: this.locale });
  }

  getHourText(date, ampm) {
    return format(date, ampm ? 'hh' : 'HH', { locale: this.locale });
  }

  getMinuteText(date) {
    return format(date, 'mm', { locale: this.locale });
  }

  getSecondText(date) {
    return format(date, 'ss', { locale: this.locale });
  }
}

export default DateUtils;
