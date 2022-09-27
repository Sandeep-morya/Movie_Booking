let array=JSON.parse(localStorage.getItem("buy-list")) || [];
let tbody = document.querySelector("tbody");
tbody.innerHTML = null;
array.forEach((e, i) => {
  let tr = document.createElement("tr");

  let name = document.createElement("td");
  name.innerText = e.name;

  let actor = document.createElement("td");
  actor.innerText = e.actor;

  let description = document.createElement("td");
  description.innerText = e.discription;

  let release = document.createElement("td");
  release.innerText = e.release;

  let category = document.createElement("td");
  category.innerText = e.category;

  let price = document.createElement("td");
  price.innerText = e.price;

  tr.append(name, actor, description, release, category, price);
  tbody.append(tr);
});
