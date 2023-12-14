let counter = 0;
setTimeout(() => {
  setInterval(() => {
    console.log(counter++);
  }, 1000);
}, 1000);
