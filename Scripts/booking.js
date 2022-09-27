let booking=JSON.parse(localStorage.getItem("movie-list"))||[];
document.querySelector("#movie-count").innerText=booking.length;
function display_table(array){
    let tbody=document.querySelector("tbody");
    tbody.innerHTML=null;
    array.forEach((e,i) => {
        let tr=document.createElement("tr");

        let name=document.createElement("td");
        name.innerText=e.name;

        let actor=document.createElement("td");
        actor.innerText=e.actor;

        let description=document.createElement("td");
        description.innerText=e.discription;

        let release=document.createElement("td");
        release.innerText=e.release;

        let category=document.createElement("td");
        category.innerText=e.category;

        let price=document.createElement("td");
        price.innerText=e.price;

        let buy=document.createElement("td");
        buy.innerText="Buy";
        buy.style.backgroundColor="#007F00";
        buy.style.color="white";
        buy.style.cursor="pointer";
        buy.addEventListener("click",el=>{
            el.target.parentNode.remove();
            booked(i);
        })

        tr.append(name,actor,description,release,category,price,buy);
        tbody.append(tr);
    });
}

function booked(i){
    let arr=JSON.parse(localStorage.getItem("buy-list")) || [];
    arr.push(booking[i]);
    localStorage.setItem("buy-list",JSON.stringify(arr));

    booking.splice(i,1);
    localStorage.setItem("movie-list",JSON.stringify(booking));
}

let select_box=document.querySelector("select");
if(select_box.value==""){
    display_table(booking);
}
select_box.addEventListener("change",e=>{
    let selected=e.target.value;
    if(selected==""){
        display_table(booking);
    }else{
        let arr=booking.filter(e=>e.category==selected);
        display_table(arr);
    }
})