const inputArg = process.argv
  .slice(2)
  .filter(time => !isNaN(time))
  .filter(time => time >= 0);

inputArg.forEach((time) => {
  setTimeout(() => {
    process.stdout.write('.\n'); //sound file wasnt working for me
  }, time * 1000);
});