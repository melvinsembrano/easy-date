import { easyDate, EasyDate } from '../easy-date'

describe('Date', function() {
  it('will get the date today', function() {
    var now = new Date();
    var today = EasyDate.today();
    expect(today.getDate()).toBe(now.getDate());
    expect(today.getFullYear()).toBe(now.getFullYear());
    expect(today.getMonth()).toBe(now.getMonth());
  });

  it('will get the date tommorrow', function() {
    var now = easyDate(1).day().fromNow()
    var today = EasyDate.tomorrow();
    expect(today.getDate()).toBe(now.getDate());
    expect(today.getFullYear()).toBe(now.getFullYear());
    expect(today.getMonth()).toBe(now.getMonth());
  });

  it('will get the date yesterday', function() {
    var now = easyDate(1).day().ago()
    var today = EasyDate.yesterday();
    expect(today.getDate()).toBe(now.getDate());
    expect(today.getFullYear()).toBe(now.getFullYear());
    expect(today.getMonth()).toBe(now.getMonth());
  });
});
