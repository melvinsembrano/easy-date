describe('EasyDate Formats', function() {
  it('dates will have a default format function', function() {
    var now = new Date(2015, 11,1);
    expect(now.format()).toBe("Tue Dec 01 2015 00:00:00");
  });
});
