let i = 2;
function changeContent(){
  i++;
  document.querySelectorAll("h4")[1].innerHTML = i + ". Go out to eat";
}
setInterval(changeContent, 1000)
