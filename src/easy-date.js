// @flow
import dateFormat from './date-format'
export type ConversionType = "day" | "week" | "month" | "year" | "hour"

export type TypeProcessor = {
  ago: () => Date | string,
  fromNow: () => Date | string,
}

export class EasyDate {
  now: ?Date
  value: number
  conversionType: ConversionType

  constructor(value: any, conversionType: ConversionType) {
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
    return new EasyDate(1, 'day').ago(mask)
  }

  static tomorrow(mask?: string) {
    return new EasyDate(1, 'day').fromNow(mask)
  }
}

export function easyDate(value: Number) {
  const days = function() {
    return new EasyDate(value, 'day')
  }

  const months = function() {
    return new EasyDate(value, 'month')
  }

  const years = function() {
    return new EasyDate(value, 'year')
  }

  const hours = function() {
    return new EasyDate(value, 'hour')
  }

  return {
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

export function backwardCompatibility() {

  const days = function() {
    return new EasyDate(this, 'day')
  }

  const months = function() {
    return new EasyDate(this, 'month')
  }

  const years = function() {
    return new EasyDate(this, 'year')
  }

  const hours = function() {
    return new EasyDate(this, 'hour')
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



export default {
  EasyDate,
  easyDate,
  backwardCompatibility,
}
