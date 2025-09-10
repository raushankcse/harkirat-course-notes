// terminal clock


function displayClock(){
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();


  minutes=minutes<10?'0'+minutes:minutes;
  seconds = seconds<10?'0'+seconds:seconds;


  process.stdout.clearLine(0);
  process.stdout.cursorTo(0);
  process.stdout.write(`${hours}:${minutes}:${seconds}`);
  
}

setInterval(displayClock,1*1000);

displayClock();