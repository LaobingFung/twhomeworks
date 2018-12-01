function alertLi() {
  var ev = ev || window.event;
  var target = ev.target || ev.srcElement;
  if (target.nodeName.toLowerCase() == 'li') {
    alert(target.innerHTML);
  }
}