// @flow
import dateFormat from './date-format'

type ConversionType = "day" | "week" | "month" | "year" | "hour" | "minute"

type TypeProcessor = {
  ago: () => Date | string,
  fromNow: () => Date | string,
}

class EasyDate {
  _date: Date

  constructor(date: Date | string) {
    if (typeof date === 'string') {
      this._date = new Date(date)
    } else {
      this._date = date
    }
  }

  getDate() {
    return this._date
  }

  format(mask: string) {
    return dateFormat(this._date, mask)
  }

  static formatDate(date: Date, mask?: string): Date | string {
    if (!!mask) {
      return dateFormat(date, mask)
    } else {
      return date
    }
  }

  static today(mask?: string) {
    return EasyDate.formatDate(new Date(), mask)
  }

  static yesterday(mask?: string) {
    return new EasyD(1, 'day').ago(mask)
  }

  static tomorrow(mask?: string) {
    return new EasyD(1, 'day').fromNow(mask)
  }
}

class EasyD {
  now: ?Date
  value: number
  conversionType: ConversionType

  constructor(value: number, conversionType: ConversionType) {
    this.value = parseInt(value)
    this.conversionType = conversionType
  }

  fromNow(mask?: string): Date | string {
    const processor = this.process(mask)
    if (processor) {
      return processor.fromNow()
    } else {
      return `Processor not found.`
    }
  }

  ago(mask?: string): Date | string {
    const processor = this.process(mask)
    if (processor) {
      return processor.ago()
    } else {
      return `Processor not found.`
    }
  }

  since(date: Date, mask?: string): Date | string {
    this.now = new Date(date.valueOf())
    return this.fromNow(mask)
  }

  until(date: Date, mask?: string): Date | string {
    this.now = new Date(date.valueOf());
    return this.ago(mask)
  }

  before(date: Date, mask?: string): Date | string {
    return this.until(date, mask)
  }

  toString(): string {
    return `${ this.value } ${ this.conversionType }${ this.value > 1 ? 's' : '' }`;
  }

  process(mask?: string): ?TypeProcessor {
    const { conversionType, timeProcessor } = this
    let now = this.now || new Date()
    return {
      minute(): ?TypeProcessor {
        return timeProcessor(now, now.setMinutes, now.getMinutes, mask)
      },
      hour(): ?TypeProcessor {
        return timeProcessor(now, now.setHours, now.getHours, mask)
      },
      day(): TypeProcessor {
        return timeProcessor(now, now.setDate, now.getDate, mask)
      },
      week(): ?TypeProcessor {
        return null
      },
      month(): ?TypeProcessor {
        return timeProcessor(now, now.setMonth, now.getMonth, mask)
      },
      year(): ?TypeProcessor {
        return timeProcessor(now, now.setFullYear, now.getFullYear, mask)
      },
    }[conversionType]()
  }

  timeProcessor = (now: Date, set: any, get: any, mask?: string): TypeProcessor => {
    const { value } = this
    return {
      ago(): Date | string  {
        set.call(now, get.call(now) - value)
        return EasyDate.formatDate(now, mask);
      },

      fromNow(): Date | string {
        set.call(now, get.call(now) + value)
        return EasyDate.formatDate(now, mask);
      }
    }
  }


}

function easyDate(value: number) {
  const days = function() {
    return new EasyD(value, 'day')
  }

  const months = function() {
    return new EasyD(value, 'month')
  }

  const years = function() {
    return new EasyD(value, 'year')
  }

  const hours = function() {
    return new EasyD(value, 'hour')
  }

  const minutes = function() {
    return new EasyD(value, 'minute')
  }

  return {
    minute: minutes,
    minutes: minutes,
    hour: hours,
    hours,
    day: days,
    days,
    month: months,
    months,
    year: years,
    years,
  }
}

function backwardCompatibility() {

  const days = function() {
    return new EasyD(this, 'day')
  }

  const months = function() {
    return new EasyD(this, 'month')
  }

  const years = function() {
    return new EasyD(this, 'year')
  }

  const hours = function() {
    return new EasyD(this, 'hour')
  }

  const minutes = function() {
    return new EasyD(this, 'minute')
  }

  // $FlowFixMe
  Number.prototype.day = days;
  // $FlowFixMe
  Number.prototype.days = days;
  // $FlowFixMe
  Number.prototype.month = months;
  // $FlowFixMe
  Number.prototype.months = months;
  // $FlowFixMe
  Number.prototype.years = years;
  // $FlowFixMe
  Number.prototype.year = years;
  // $FlowFixMe
  Number.prototype.hours = hours;
  // $FlowFixMe
  Number.prototype.hour = hours;
  // $FlowFixMe
  Number.prototype.minute = minutes;

  // $FlowFixMe
  Object.assign(Date, {

    today(mask?: string) {
      return EasyDate.today(mask);
    },

    yesterday(mask?: string) {
      return EasyDate.yesterday(mask)
    },

    tomorrow(mask?: string) {
      return EasyDate.tomorrow(mask)
    },

    tommorrow(mask?: string) {
      return EasyDate.tomorrow(mask)
    },

  })
}



export {
  EasyDate,
  easyDate,
  backwardCompatibility,
}
