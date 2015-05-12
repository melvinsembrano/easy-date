describe('EasyDate', function() {

  describe('#days', function() {
    it('can get the number of days', function() {
      expect(2..days().value).toBe(2);
      expect(1..day().type).toBe("day");
    });

    it('will get the correct grammar', function() {
      expect(1..day().toString()).toBe("1 day");
      expect(3..days().toString()).toBe("3 days");
      expect(5..days().toString()).toBe("5 days");
    });

    it('#fromNow', function() {
      var now = new Date();
      expect(3..days().fromNow().getDate()).toBe(now.getDate() + 3);
    });

    it('#ago', function() {
      var now = new Date();
      expect(3..days().ago().getDate()).toBe(now.getDate() - 3);
    });

    it('#since', function() {
      var now = new Date(2015, 3, 10);
      expect(3..days().since(now).getDate()).toBe(13);
    });

    it('#until', function() {
      var now = new Date(2015, 3, 10);
      var newDate = now.getDate() - 3;
      expect(3..days().until(now).getDate()).toBe(newDate);
    });

  });


  describe('#months', function() {
    it('can get the number of months', function() {
      expect(2..months().value).toBe(2);
      expect(1..month().type).toBe("month");
    });

    it('will get the correct grammar', function() {
      expect(1..month().toString()).toBe("1 month");
      expect(3..months().toString()).toBe("3 months");
      expect(5..months().toString()).toBe("5 months");
    });

    it('#fromNow', function() {
      var now = new Date();
      expect(3..months().fromNow().getMonth()).toBe(now.getMonth() + 3);
    });

    it('#ago', function() {
      var now = new Date();
      expect(3..months().ago().getMonth()).toBe(now.getMonth() - 3);
    });

    it('#since', function() {
      var now = new Date(2015, 3, 10);
      expect(3..months().since(now).getMonth()).toBe(6);
    });

    it('#until', function() {
      var now = new Date(2015, 9, 10);
      expect(3..months().until(now).getMonth()).toBe(6);
    });
  });

  describe('#years', function() {
    it('can get the number of months', function() {
      expect(2..years().value).toBe(2);
      expect(1..year().type).toBe("year");
    });

    it('will get the correct grammar', function() {
      expect(1..year().toString()).toBe("1 year");
      expect(3..years().toString()).toBe("3 years");
      expect(5..years().toString()).toBe("5 years");
    });

    it('#fromNow', function() {
      var now = new Date();
      expect(3..years().fromNow().getFullYear()).toBe(now.getFullYear() + 3);
    });

    it('#ago', function() {
      var now = new Date();
      expect(3..years().ago().getFullYear()).toBe(now.getFullYear() - 3);
    });

    it('#since', function() {
      var now = new Date(2015, 3, 10);
      expect(3..years().since(now).getFullYear()).toBe(2018);
    });

    it('#until', function() {
      var now = new Date(2015, 9, 10);
      expect(3..years().until(now).getFullYear()).toBe(2012);
    });
  });
});

