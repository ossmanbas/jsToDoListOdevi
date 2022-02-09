var toastSuccess = document.querySelector("#liveToastSuccess")
var toastError = document.querySelector("#liveToastError")
var myStorage = localStorage.getItem("myStorage");

var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "sil";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var sil = document.getElementsByClassName("sil");
var i;
for (i = 0; i < sil.length; i++) {
  sil[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('yapildi');
  }
}, false);

function newElement() {
  var liDOM = document.createElement("li");
  var inputValue = document.getElementById("task").value;
  var newTask = document.createTextNode(inputValue);
  liDOM.appendChild(newTask);
  if (inputValue.length == 0) {
    toastError.classList.remove('hide');
    toastError.classList.add('show')
  }
  else {
    toastSuccess.classList.remove('hide');
    toastSuccess.classList.add('show')
    document.getElementById("Tasks").appendChild(liDOM);
    document.getElementById("Tasks").value = myStorage;
    var myStorage = document.getElementById("Tasks").value;
    localStorage.setItem("myStorage" , liDOM.outerHTML);
  }
  document.getElementById("task").value = " ";
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "sil";
  span.appendChild(txt);
  liDOM.appendChild(span);

  for (i = 0; i < sil.length; i++) {
    sil[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}