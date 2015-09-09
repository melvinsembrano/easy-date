###
# EasyDate
# is a Javascript extension for easy dates manipulations which is heavily inspired by Rails ActiveSupport::Duration class.
# Copyright (c) 2015 Melvin Sembrano (melvinsembrano@gmail.com)
# License: MIT
###
EasyDate = (value, type) ->
  types =
    0: "day"
    1: "week"
    2: "month"
    3: "year"
    4: "hour"

  @value = parseInt(value)
  @type = types[type]

  return

EasyDate.prototype.toString = ->
  "#{ @value } #{ @type }#{ if @value > 1 then 's' else '' }"


EasyDate.prototype.fromNow = (mask) ->
  switch @type
    when "day" then @_daysFromNow(mask)
    when "month" then @_monthsFromNow(mask)
    when "year" then @_yearsFromNow(mask)
    when "hour" then @_hoursFromNow(mask)
    else console.warn "EasyDate: #{ @type }().fromNow() not yet implemented."

EasyDate.prototype.ago =  (mask) ->
  switch @type
    when "day" then @_daysAgo(mask)
    when "month" then @_monthsAgo(mask)
    when "year" then @_yearsAgo(mask)
    when "hour" then @_hoursAgo(mask)
    else console.warn "EasyDate: #{ @type }().ago() not yet implemented."


EasyDate.prototype.since = (date, mask) ->
  @now = new Date(date.valueOf())
  @fromNow(mask)

EasyDate.prototype.until = (date, mask) ->
  @now = new Date(date.valueOf())
  @ago(mask)

EasyDate.prototype.before = (date, mask) ->
  @until(date, mask)

EasyDate.prototype._daysFromNow = (mask) ->
  now = @now || new Date()
  now.setDate(now.getDate() + @value)
  formatDate(now, mask)

EasyDate.prototype._daysAgo = (mask) ->
  now = @now || new Date()
  now.setDate(now.getDate() - @value)
  formatDate(now, mask)

EasyDate.prototype._monthsFromNow = (mask) ->
  now = @now || new Date()
  now.setMonth(now.getMonth() + @value)
  formatDate(now, mask)

EasyDate.prototype._monthsAgo = (mask) ->
  now = @now || new Date()
  now.setMonth(now.getMonth() - @value)
  formatDate(now, mask)

EasyDate.prototype._yearsFromNow = (mask) ->
  now = @now || new Date()
  now.setFullYear(now.getFullYear() + @value)
  formatDate(now, mask)

EasyDate.prototype._yearsAgo = (mask) ->
  now = @now || new Date()
  now.setFullYear(now.getFullYear() - @value)
  formatDate(now, mask)

EasyDate.prototype._hoursFromNow = (mask) ->
  now = @now || new Date()
  now.setHours(now.getHours() + @value)
  formatDate(now, mask)

EasyDate.prototype._hoursAgo = (mask) ->
  now = @now || new Date()
  now.setHours(now.getHours() - @value)
  formatDate(now, mask)

formatDate = (date, mask) ->
  if mask is undefined
    date
  else
    date.format(mask)

days = ->
  new EasyDate(this, 0)
months = ->
  new EasyDate(this, 2)
years = ->
  new EasyDate(this, 3)

hours = ->
  new EasyDate(this, 4)

Number.prototype.day = days
Number.prototype.days = days
Number.prototype.month = months
Number.prototype.months = months
Number.prototype.years = years
Number.prototype.year = years
Number.prototype.hours = hours
Number.prototype.hour = hours

Date.today = (mask) ->
  formatDate((new this()), mask)

Date.yesterday = (mask) ->
  1.day().ago(mask)

Date.tommorrow = (mask) ->
  1.day().fromNow(mask)

