EasyDate = (value, type) ->
  types =
    0: "day"
    1: "week"
    2: "month"
    3: "year"
    4: "hour"
    5: "minute"
    6: "second"

  @value = parseInt(value)
  @type = types[type]

  return

EasyDate.prototype.toString = ->
  "#{ @value } #{ @type }#{ if @value > 1 then 's' else '' }"


EasyDate.prototype.fromNow = ->
  switch @type
    when "day" then @_daysFromNow()
    when "month" then @_monthsFromNow()
    else console.warn "EasyDate: #{ @type }().fromNow() not yet implemented."

EasyDate.prototype.ago = ->
  switch @type
    when "day" then @_daysAgo()
    when "month" then @_monthsAgo()
    else console.warn "EasyDate: #{ @type }().ago() not yet implemented."


EasyDate.prototype.since = (date) ->
  @now = date
  @fromNow()

EasyDate.prototype.until = (date) ->
  @now = date
  @ago()

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


days = ->
  new EasyDate(this, 0)
months = ->
  new EasyDate(this, 2)


Number.prototype.day = days
Number.prototype.days = days
Number.prototype.month = months
Number.prototype.months = months

