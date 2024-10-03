// ES6
// common JS pattern

// module.exports = {add:add, sub:sub}
export const PI = 3.14;

export const add = (a, b) => {
    return a + b    ;
}

export const sub = (a, b) => a - b;

// const math = {
//     add,
//     sub,
//     PI
// };

// export default math;

// named export
export function myFun() {
    return 101;
}