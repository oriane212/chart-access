
let access = require("../main");

const fbtxt = access.generateFallbackText("Coffees by Month", "bar");

function someTSFunc(title: string){
    return title;
}

test("fallback text is as expected", ()=> {
    expect(fbtxt).toEqual("bar chart titled, 'Coffees by Month'.");
});