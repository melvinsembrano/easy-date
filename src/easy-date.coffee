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


EasyDate.prototype.fromNow = ->
  switch @type
    when "day" then @_daysFromNow()
    when "month" then @_monthsFromNow()
    when "year" then @_yearsFromNow()
    when "hour" then @_hoursFromNow()
    else console.warn "EasyDate: #{ @type }().fromNow() not yet implemented."

EasyDate.prototype.ago = ->
  switch @type
    when "day" then @_daysAgo()
    when "month" then @_monthsAgo()
    when "year" then @_yearsAgo()
    when "hour" then @_hoursAgo()
    else console.warn "EasyDate: #{ @type }().ago() not yet implemented."


EasyDate.prototype.since = (date) ->
  @now = new Date(date.valueOf())
  @fromNow()

EasyDate.prototype.until = (date) ->
  @now = new Date(date.valueOf())
  @ago()

EasyDate.prototype.before = (date) ->
  @until(date)

EasyDate.prototype._daysFromNow = ->
  now = @now || new Date()
  now.setDate(now.getDate() + @value)
  now

EasyDate.prototype._daysAgo = ->
  now = @now || new Date()
  now.setDate(now.getDate() - @value)
  now

EasyDate.prototype._monthsFromNow = ->
  now = @now || new Date()
  now.setMonth(now.getMonth() + @value)
  now

EasyDate.prototype._monthsAgo = ->
  now = @now || new Date()
  now.setMonth(now.getMonth() - @value)
  now

EasyDate.prototype._yearsFromNow = ->
  now = @now || new Date()
  now.setFullYear(now.getFullYear() + @value)
  now

EasyDate.prototype._yearsAgo = ->
  now = @now || new Date()
  now.setFullYear(now.getFullYear() - @value)
  now

EasyDate.prototype._hoursFromNow = ->
  now = @now || new Date()
  now.setHours(now.getHours() + @value)
  now

EasyDate.prototype._hoursAgo = ->
  now = @now || new Date()
  now.setHours(now.getHours() - @value)
  now


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

Date.today = ->
  new this()

Date.yesterday = ->
  1.day().ago()

Date.tommorrow = ->
  1.day().fromNow()
