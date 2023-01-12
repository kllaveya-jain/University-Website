// to display the drop down menu
function display(e) {
   var name = e.target.getAttribute("id");
   var num = name[name.length - 1];
   var dd = document.getElementById("dropdown" + num);
   dd.style.display = "inline";
   e.target.style.color = "#379237";
   e.target.style.fontWeight = "bold";
   e.target.style.textDecoration = "underline";
}
// to make the drop down menu invisible
function displayout(e) {
   var name = e.target.getAttribute("id");
   var num = name[name.length - 1];
   var dd = document.getElementById("dropdown" + num);
   dd.style.display = "none";
   e.target.style.color = "#FFFFFF";
   e.target.style.fontWeight = "normal";
   e.target.style.textDecoration = "none";
}
function displaytr(e) {
   if (e.target.tagName.toLowerCase() == "table") {
      e.target.style.display = "inline";
   }
}
function displayouttr(e) {
   if (e.target.class == "dropdown"){
      
      e.target.style.display = "none";
   }
}
function start () {
   for (var i = 1; i <= 7; i++) {
      document.getElementById("dd" + i).addEventListener("mouseover", display);
   }
   for (var i = 1; i <= 7; i++) {
      document.getElementById("dd" + i).addEventListener("mouseout", displayout);
   }
   var tr = document.getElementsByClassName("dropdown");
   for (t of tr) {
      t.addEventListener("mouseover", displaytr);
   }
   for (t of tr) {
      t.addEventListener("mouseout", displayouttr);
   }
}
window.addEventListener("load", start, false);