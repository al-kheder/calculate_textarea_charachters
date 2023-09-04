var count = document.getElementById("count"),
  textarea = document.getElementById("text"),
  maxLength = textarea.getAttribute("maxLength");

textarea.oninput = function () {
  count.innerHTML = maxLength - this.value.length;
  counterClass = count.classList;
  count.innerHTML == 0 ? counterClass.add("zero") : counterClass.remove("zero");
};
