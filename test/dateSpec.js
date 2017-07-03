import '../easy-date-light'

describe('Date', function() {
  it('will get the date today', function() {
    var now = new Date();
    var today = Date.today();
    expect(today.getDate()).toBe(now.getDate());
    expect(today.getFullYear()).toBe(now.getFullYear());
    expect(today.getMonth()).toBe(now.getMonth());
  });

  it('will get the date tommorrow', function() {
    var now = 1..day().fromNow()
    var today = Date.tommorrow();
    expect(today.getDate()).toBe(now.getDate());
    expect(today.getFullYear()).toBe(now.getFullYear());
    expect(today.getMonth()).toBe(now.getMonth());
  });

  it('will get the date yesterday', function() {
    var now = 1..day().ago()
    var today = Date.yesterday();
    expect(today.getDate()).toBe(now.getDate());
    expect(today.getFullYear()).toBe(now.getFullYear());
    expect(today.getMonth()).toBe(now.getMonth());
  });
});
