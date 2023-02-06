const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  const new_div = document.createElement('div');
  new_div.innerHTML = "안녕!";
  document.body.append(new_div);
})