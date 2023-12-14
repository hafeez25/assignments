/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Wait 1 resolve in ${t} seconds`);
    }, t * 1000);
  });
}

function wait2(t) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Wait 2 resolve in ${t} seconds`);
    }, t * 1000);
  });
}

function wait3(t) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Wait 3 resolve in ${t} seconds`);
    }, t * 1000);
  });
}

function calculateTime(t1, t2, t3) {
  const start = new Date();
  const p1 = wait1(t1);
  const p2 = wait2(t2);
  const p3 = wait3(t3);

  const promise_all = Promise.all([p1, p2, p3]);
  return promise_all.then(() => {
    const end = new Date();
    const difference = end - start;
    // console.log(difference);
    return difference;
    // return 0;
  });
}
const resp = calculateTime(1, 2, 3);
console.log(resp);

module.exports = calculateTime;
