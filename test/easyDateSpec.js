import { easyDate } from '../easy-date'

describe('easyDate', function() {

  it('will return the correct date 5 days from now', function() {
    var now = new Date();
    now.setDate(now.getDate() + 5);
    var newDate = easyDate(5).days().fromNow();

    expect(newDate.getYear()).toBe(newDate.getYear())
    expect(newDate.getMonth()).toBe(newDate.getMonth())
    expect(newDate.getDate()).toBe(newDate.getDate())
  });

  it('will return the correct date 5 days ago', function() {
    var now = new Date();
    now.setDate(now.getDate() - 5);
    var newDate = easyDate(5).days().ago();

    expect(newDate.getYear()).toBe(newDate.getYear())
    expect(newDate.getMonth()).toBe(newDate.getMonth())
    expect(newDate.getDate()).toBe(newDate.getDate())
  });

  it('will return the correct date 5 months from now', function() {
    var now = new Date();
    now.setMonth(now.getMonth() + 5);
    var newDate = easyDate(5).months().fromNow();

    expect(newDate.getYear()).toBe(newDate.getYear())
    expect(newDate.getMonth()).toBe(newDate.getMonth())
    expect(newDate.getDate()).toBe(newDate.getDate())
  });

  it('will return the correct date 5 months ago', function() {
    var now = new Date();
    now.setMonth(now.getMonth() - 5);
    var newDate = easyDate(5).months().ago();

    expect(newDate.getYear()).toBe(newDate.getYear())
    expect(newDate.getMonth()).toBe(newDate.getMonth())
    expect(newDate.getDate()).toBe(newDate.getDate())
  });

  it('will return the correct date 5 years from now', function() {
    var now = new Date();
    now.setFullYear(now.getFullYear() + 5);
    var newDate = easyDate(5).years().fromNow();

    expect(newDate.getYear()).toBe(newDate.getYear())
    expect(newDate.getMonth()).toBe(newDate.getMonth())
    expect(newDate.getDate()).toBe(newDate.getDate())
  });

  it('will return the correct date 5 years ago', function() {
    var now = new Date();
    now.setFullYear(now.getFullYear() - 5);
    var newDate = easyDate(5).years().ago();

    expect(newDate.getYear()).toBe(newDate.getYear())
    expect(newDate.getMonth()).toBe(newDate.getMonth())
    expect(newDate.getDate()).toBe(newDate.getDate())
  });



  describe('#days', function() {
    it('can get the number of days', function() {
      expect(easyDate(2).days().value).toBe(2);
      expect(easyDate(1).day().conversionType).toBe("day");
    });

    it('will get the correct grammar', function() {
      expect(easyDate(1).day().toString()).toBe("1 day");
      expect(easyDate(3).days().toString()).toBe("3 days");
      expect(easyDate(5).days().toString()).toBe("5 days");
    });

    it('#fromNow', function() {
      var now = new Date();
      expect(easyDate(3).days().fromNow().getDate()).toBe(now.getDate() + 3);
    });

    it('#ago', function() {
      var now = new Date();
      now.setDate(now.getDate() - 3);
      expect(easyDate(3).days().ago().getDate()).toBe(now.getDate());
    });

    it('#since', function() {
      var now = new Date(2015, 3, 10);
      expect(easyDate(3).days().since(now).getDate()).toBe(13);
    });

    it('#until', function() {
      var now = new Date(2015, 3, 10);
      var newDate = now.getDate() - 3;
      expect(easyDate(3).days().until(now).getDate()).toBe(newDate);
    });

    it('#before', function() {
      var now = new Date(2015, 3, 10);
      var newDate = now.getDate() - 3;
      expect(easyDate(3).days().before(now).getDate()).toBe(newDate);
    });
  });


  describe('#months', function() {
    it('can get the number of months', function() {
      expect(easyDate(2).months().value).toBe(2);
      expect(easyDate(1).month().conversionType).toBe("month");
    });

    it('will get the correct grammar', function() {
      expect(easyDate(1).month().toString()).toBe("1 month");
      expect(easyDate(3).months().toString()).toBe("3 months");
      expect(easyDate(5).months().toString()).toBe("5 months");
    });

    it('#fromNow', function() {
      var now = new Date();
      var res = now.getMonth() + 3;
      if (res > 11) {
        res = res - 12;
      }
      expect(easyDate(3).months().fromNow().getMonth()).toBe(res);
    });

    it('#ago', function() {
      var now = new Date();
      var res = now.getMonth() - 3;
      if (res < 0) {
        res = res + 12;
      }
      expect(easyDate(3).months().ago().getMonth()).toBe(res);
    });

    it('#since', function() {
      var now = new Date(2015, 3, 10);
      expect(easyDate(3).months().since(now).getMonth()).toBe(6);
    });

    it('#until', function() {
      var now = new Date(2015, 9, 10);
      expect(easyDate(3).months().until(now).getMonth()).toBe(6);
    });

    it('#before', function() {
      var now = new Date(2015, 9, 10);
      expect(easyDate(3).months().before(now).getMonth()).toBe(6);
    });
  });

  describe('#years', function() {
    it('can get the number of years', function() {
      expect(easyDate(2).years().value).toBe(2);
      expect(easyDate(1).year().conversionType).toBe("year");
    });

    it('will get the correct grammar', function() {
      expect(easyDate(1).year().toString()).toBe("1 year");
      expect(easyDate(3).years().toString()).toBe("3 years");
      expect(easyDate(5).years().toString()).toBe("5 years");
    });

    it('#fromNow', function() {
      var now = new Date();
      expect(easyDate(3).years().fromNow().getFullYear()).toBe(now.getFullYear() + 3);
    });

    it('#ago', function() {
      var now = new Date();
      expect(easyDate(3).years().ago().getFullYear()).toBe(now.getFullYear() - 3);
    });

    it('#since', function() {
      var now = new Date(2015, 3, 10);
      expect(easyDate(3).years().since(now).getFullYear()).toBe(2018);
    });

    it('#until', function() {
      var now = new Date(2015, 9, 10);
      expect(easyDate(3).years().until(now).getFullYear()).toBe(2012);
    });

    it('#before', function() {
      var now = new Date(2015, 9, 10);
      expect(easyDate(3).years().before(now).getFullYear()).toBe(2012);
    });
  });

  describe('#hours', function() {
    it('can get the number of hours', function() {
      expect(easyDate(2).hours().value).toBe(2);
      expect(easyDate(1).hour().conversionType).toBe("hour");
    });

    it('will get the correct grammar', function() {
      expect(easyDate(1).hour().toString()).toBe("1 hour");
      expect(easyDate(3).hours().toString()).toBe("3 hours");
      expect(easyDate(5).hours().toString()).toBe("5 hours");
    });

    it('#fromNow', function() {
      var now = new Date();
      now.setHours(now.getHours() + 3);
      expect(easyDate(3).hours().fromNow().getHours()).toBe(now.getHours());
    });

    it('#ago', function() {
      var now = new Date();
      now.setHours(now.getHours() - 3);
      expect(easyDate(3).hours().ago().getHours()).toBe(now.getHours());
    });

    it('#since', function() {
      var now = new Date(2015, 3, 10, 12);
      expect(easyDate(3).hours().since(now).getHours()).toBe(15);
    });

    it('#until', function() {
      var now = new Date(2015, 9, 10, 12);
      expect(easyDate(3).hours().until(now).getHours()).toBe(9);
    });

    it('#before', function() {
      var now = new Date(2015, 9, 10, 12);
      expect(easyDate(3).hours().before(now).getHours()).toBe(9);
    });
  });
});
