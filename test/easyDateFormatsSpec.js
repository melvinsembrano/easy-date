import { easyDate, EasyDate } from '../easy-date'

describe('EasyDate Formats', function() {
  it('dates will have a default format function', function() {
    var now = new Date(2015, 11,1);
    expect(now.format()).toBe("Tue Dec 01 2015 00:00:00");
  });

  describe('#fromNow', function() {
    it('will return formatted date string if mask is passed', function () {
      var now = easyDate(2).days().fromNow();
      expect(easyDate(2).days().fromNow("yyyy")).toBe(now.getFullYear().toString());
    });
    it('will return the actual date object if now masked is passed', function() {
      var now = easyDate(2).days().fromNow();
      expect(easyDate(2).days().fromNow() instanceof Date).toBe(true);
    });
  });

  describe('#since', function() {
    it('will return formatted date string if mask is passed', function () {
      var now = easyDate(2).days().since(Date.now());
      expect(easyDate(2).days().since(Date.now(), "yyyy")).toBe(now.getFullYear().toString());
    });
    it('will return the actual date object if now masked is passed', function() {
      var now = easyDate(2).days().since(Date.now());
      expect(easyDate(2).days().since(Date.now()) instanceof Date).toBe(true);
    });
  });

  describe('#ago', function() {
    it('will return formatted date string if mask is passed', function () {
      var now = easyDate(2).days().ago();
      expect(easyDate(2).days().ago("yyyy")).toBe(now.getFullYear().toString());
    });
    it('will return the actual date object if now masked is passed', function() {
      var now = easyDate(2).days().ago();
      expect(easyDate(2).days().ago() instanceof Date).toBe(true);
    });
  });

  describe('#until', function() {
    it('will return formatted date string if mask is passed', function () {
      var now = easyDate(2).days().until(EasyDate.today());
      expect(easyDate(2).days().until(EasyDate.today(), "yyyy")).toBe(now.getFullYear().toString());
    });

    it('will return the actual date object if now masked is passed', function() {
      var now = easyDate(2).days().until(EasyDate.today());
      expect(easyDate(2).days().until(EasyDate.today()) instanceof Date).toBe(true);
    });
  });

});
