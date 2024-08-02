// for hamburger nav

const hamburger = document.querySelector('.hamburger-menu');
const listNav = document.querySelector('.list-nav');

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    listNav.classList.toggle("active");
})

document.querySelectorAll(".portlink").forEach(n => n.addEventListener ("click", () => {
        hamburger.classList.remove("active");
        listNav.classList.remove("active");
}))



// fixed navigation
// Top sticky nav
window.addEventListener("scroll", function (){
    var Header = document.querySelector("header");
    Header.classList.toggle("newheader", window.scrollY > 500);
})


// Active link current link
// Get the container element
var btnContainer = document.getElementById("allnav");

var linksNav = btnContainer.getElementsByClassName("portlink");

for (var i = 0; i < linksNav.length; i++) {
  linksNav[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    this.className += "active";
  });
}


// Send Email
var formBtn = document.getElementById('form-btn');
formBtn.addEventListener('click', function(e){
  e.preventDefault()
  console.log('hii');
  var name = document.getElementById('formname').value;
  var email = document.getElementById('formemail').value;
  var message = document.getElementById('formmessage').value;
  var body = 'name: '+name + '<br/> email: ' + email +  '<br/> message: '+ message;


  Email.send({
    SecureToken : "7b4c3bfc-bd0c-4cfd-b66a-802800684854",
    To : "ghkalengo@gmail.com",
    From : "alltruth97@gmail.com",
    Subject : "Contact Message",
    Body : body
}).then(
  message => alert(message)
);
})