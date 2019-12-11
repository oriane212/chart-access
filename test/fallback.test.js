var access = require("../main");
var fbtxt = access.generateFallbackText("Coffees by Month", "bar");
function someTSFunc(title) {
    return title;
}
test("fallback text is as expected", function () {
    expect(fbtxt).toEqual("bar chart titled, 'Coffees by Month'.");
});
