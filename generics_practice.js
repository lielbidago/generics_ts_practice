function CountProperty(arrOfElements) {
    let counter = 0;
    arrOfElements.forEach((e) => {
        if (e === null || e === void 0 ? void 0 : e.property) {
            counter = +1;
        }
    });
}
class Odd {
}
class Person {
}
