function showForm(){
document.getElementById("bookingForm").style.display="block";
}

function sendWhatsApp(event){

event.preventDefault();

let firstName = document.getElementById("firstName").value;
let lastName = document.getElementById("lastName").value;
let phone = document.getElementById("phone").value;
let people = document.getElementById("people").value;
let arrival = document.getElementById("arrival").value;
let departure = document.getElementById("departure").value;

let message =
"حجز جديد - Babel Camp\n"+
"الاسم: "+firstName+" "+lastName+"\n"+
"الهاتف: "+phone+"\n"+
"عدد الأفراد: "+people+"\n"+
"الوصول: "+arrival+"\n"+
"المغادرة: "+departure;

let number = "201288452212";

window.open(`https://wa.me/${number}?text=${encodeURIComponent(message)}`);

}
