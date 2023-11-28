let a=3,
b = 5,
c = () => {
    return a + b;
};
let d = a + c() + '1';
alert(d);