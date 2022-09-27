document.querySelector("form").addEventListener("submit", (e) => {
  console.log(e);
  let obj = {
    name: e.target[0].value,
    actor: e.target[1].value,
    discription: e.target[2].value,
    release: e.target[3].value,
    category: e.target[4].value,
    price: e.target[5].value,
  };
  let booking=JSON.parse(localStorage.getItem("movie-list"))||[];
  booking.push(obj);
  localStorage.setItem("movie-list",JSON.stringify(booking));
});
