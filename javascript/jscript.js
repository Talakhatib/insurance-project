window.addEventListener("scroll", function() {
let navArea = document.getElementById("navArea");

if (window.pageYOffset > 0) {
navArea.classList.add("is-sticky");
} else {
navArea.classList.remove("is-sticky");
}
var element = document.querySelector('#services'); //services title
var position = element.getBoundingClientRect();
if (position.top <= window.innerHeight) {
    $("#ourservices").addClass("animateheader");
}
var element = document.querySelector('#quote'); //title get quote
var position = element.getBoundingClientRect();
if (position.top <= window.innerHeight) {
    $("#getquotenow").addClass("animateheader");
}
var element = document.querySelector('#quote'); //sentence below get quote now
var position = element.getBoundingClientRect();
if (position.top <= window.innerHeight) {
    $("#getquotenow1").addClass("animateheader2");
}
var element = document.querySelector('#about'); //title about
var position = element.getBoundingClientRect();
if (position.top <= window.innerHeight) {
    $("#aboutus").addClass("animateheader");
}
var element = document.querySelector('#contact'); //title contact
var position = element.getBoundingClientRect();
if (position.top <= window.innerHeight) {
    $("#contactus").addClass("animateheader");
}
var element = document.querySelector('#facts'); //conuter of facts
var position = element.getBoundingClientRect();
if (position.top <= window.innerHeight) {

    $('#clients').prop('Counter',0).animate({
        Counter: 988
    }, {
        duration: 3000,
        easing: 'swing',
        step: function (now) {
          $('#clients').text(Math.ceil(now));
        }
    });

      $('.counter123').each(function () {
      $(this).prop('Counter',0).animate({
          Counter: 3
      }, {
          duration: 3000,
          easing: 'swing',
          step: function (now) {
              $(this).text(Math.ceil(now));
          }
      });
    });


      $('#percent').prop('Counter',0).animate({
        Counter: 100
      }, {
        duration: 3000,
        easing: 'swing',
        step: function (now) {
          $('#percent').text(Math.ceil(now));
        }
      });

      $('#policies').prop('Counter',0).animate({
        Counter: 30
      }, {
        duration: 3000,
        easing: 'swing',
        step: function (now) {
          $(this).text(Math.ceil(now));
        }
      });

}
var element = document.querySelector('#whoarewe'); //whoarewe
var position = element.getBoundingClientRect();
if (position.top <= window.innerHeight) {
    $("#imgwhoarewe").addClass("animate-name");
}
var element = document.querySelector('#whoarewe'); //icons of missions
var position = element.getBoundingClientRect();
if (position.top <= window.innerHeight) {
    $("#timeline").addClass("animate-name");
}
var element = document.querySelector('#ourmission'); //icons of missions
var position = element.getBoundingClientRect();
if (position.top <= window.innerHeight) {
    $("#mission").addClass("animate-name");
}
var element = document.querySelector('#ourvalue'); //icons of our value
var position = element.getBoundingClientRect();
if (position.top <= window.innerHeight) {
    $("#imgvalue").addClass("animate-name");
}
var element = document.querySelector('#serrow1'); //animation row 1
var position = element.getBoundingClientRect();
if (position.top <= window.innerHeight) {
    $("#cell1").show(500).addClass("animate-name");
    $('#cell2').show(1000).addClass("animate-name");
    $('#cell3').show(1500).addClass("animate-name");
}
    var element = document.querySelector('#serrow2'); //animation row 1
    var position = element.getBoundingClientRect();
    if (position.top <= window.innerHeight) {
    $("#cell4").show(2000).addClass("animate-name");
    $('#cell5').show(2500).addClass("animate-name");
    $('#cell6').show(3000).addClass("animate-name");
}

var element = document.querySelector('#serrow3'); //animation row 1
var position = element.getBoundingClientRect();
if (position.top <= window.innerHeight) {
    $("#cell7").show(3500).addClass("animate-name");
   $('#cell8').show(4000).addClass("animate-name");
   $('#cell9').show(4500).addClass("animate-name");
}
var element = document.querySelector('#serrow4'); //animation row 1
var position = element.getBoundingClientRect();
if (position.top <= window.innerHeight) {
   $("#cell10").show(5000).addClass("animate-name");
   $('#cell11').show(5500).addClass("animate-name");
   $('#cell12').show(6000).addClass("animate-name");
}
var element = document.querySelector('#serrow5'); //animation row 1
var position = element.getBoundingClientRect();
if (position.top <= window.innerHeight) {
   $("#cell13").show(6500).addClass("animate-name");
   $('#cell14').show(7000).addClass("animate-name");
   $('#cell15').show(7500).addClass("animate-name");
}
var element = document.querySelector('#serrow6'); //animation row 1
var position = element.getBoundingClientRect();
if (position.top <= window.innerHeight) {
   $("#cell16").show(8000).addClass("animate-name");
   $('#cell17').show(8500).addClass("animate-name");
   $('#cell18').show(9000).addClass("animate-name");
}
});
//nav responsive
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

function servicecardhidden(){
     $("#cell1").hide();
      $('#cell2').hide();
      $('#cell3').hide();
      $("#cell4").hide();
      $('#cell5').hide();
      $('#cell6').hide();
      $("#cell7").hide();
     $('#cell8').hide();
     $('#cell9').hide();
     $("#cell10").hide();
     $('#cell11').hide();
     $('#cell12').hide();
     $("#cell13").hide();
     $('#cell14').hide();
     $('#cell15').hide();
     $("#cell16").hide();
     $('#cell17').hide();
     $('#cell18').hide();

}
//text1 animation
var text = document.getElementById('text');
        var newDom = '';
        var animationDelay = 6;

        for(let i = 0; i < text.innerText.length; i++)
        {
            newDom += '<span class="char">' + (text.innerText[i] == ' ' ? '&nbsp;' : text.innerText[i])+ '</span>';
        }

        text.innerHTML = newDom;
        var length = text.children.length;

        for(let i = 0; i < length; i++)
        {
            text.children[i].style['animation-delay'] = animationDelay * i + 'ms';
        }
//animation text2
var text = document.getElementById('text2');
        var newDom = '';
        var animationDelay = 6;

        for(let i = 0; i < text.innerText.length; i++)
        {
            newDom += '<span class="char">' + (text.innerText[i] == ' ' ? '&nbsp;' : text.innerText[i])+ '</span>';
        }

        text.innerHTML = newDom;
        var length = text.children.length;

        for(let i = 0; i < length; i++)
        {
            text.children[i].style['animation-delay'] = animationDelay * i + 'ms';
        }

//text sarl animation
var text = document.getElementById('text21');
        var newDom = '';
        var animationDelay = 6;

        for(let i = 0; i < text.innerText.length; i++)
        {
            newDom += '<span class="char">' + (text.innerText[i] == ' ' ? '&nbsp;' : text.innerText[i])+ '</span>';
        }

        text.innerHTML = newDom;
        var length = text.children.length;

        for(let i = 0; i < length; i++)
        {
            text.children[i].style['animation-delay'] = animationDelay * i + 'ms';
        }
//animation text3
var text = document.getElementById('text3');
        var newDom = '';
        var animationDelay = 6;

        for(let i = 0; i < text.innerText.length; i++)
        {
            newDom += '<span class="char">' + (text.innerText[i] == ' ' ? '&nbsp;' : text.innerText[i])+ '</span>';
        }

        text.innerHTML = newDom;
        var length = text.children.length;

        for(let i = 0; i < length; i++)
        {
            text.children[i].style['animation-delay'] = animationDelay * i + 'ms';
        }

//required fields (testing fields of quote section)
function required_fieldsgetquote(){
  var fullname=document.getElementById('fullname').value;
  var phonenb=document.getElementById('getquotephone').value;
  var email=document.getElementById('getquoteemail').value;
  var selectedservices=document.getElementById('servicesslt').value;
  var cityname=document.getElementById('city').value;
  var zipcode=document.getElementById('zipcode').value;
  //alert(fullname);
  var msg="";
   if(!/^[a-zA-Z]+ [a-zA-Z]+$/.test(fullname) || fullname==null){
    msg=msg+'Invalid name given.\n';
   }
   if(!/[0-9]{8}/.test(phonenb) || phonenb==null){
    msg=msg+'Invalid phone number.\n';
   }
   if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) || email==null){
     msg=msg+'Invalid email.\n';
   }
   if(cityname==""){
     msg=msg+'please enter your city name.\n';
   }
   if(selectedservices=='none'){
     msg=msg+'please select your need of services.\n';
   }
   if(msg==""){
     $.ajax({
      url: "php-01.php",
      type: "POST",
      data:{
          name: fullname,
          phone: phonenb,
          email: email,
          services: selectedservices,
          cityname:cityname,
          zipcode:zipcode
      },
      success: function(outputSentByServer){//result of the page names.php
       $("#divRes").html("The email was sent.Thank you for your quote.");
      //alert(outputSentByServer);
      }
    });
 }
 else{
   alert(msg);
 }
}
// required fields for contact us
function required_fieldscontactus()
{
var cname=document.getElementById('contactname').value;
var cphonenb=document.getElementById('contactphonenb').value;
var cemail=document.getElementById('contactemail').value;
var messagetext=document.getElementById('message').value;
var ccity=document.getElementById('contactcity').value;
var msg2="";
if(!/^[a-zA-Z]+ [a-zA-Z]+$/.test(cname) || cname==null){
 msg2=msg2+'Invalid name given.\n';
}
if(!/[0-9]{8}/.test(cphonenb) || cphonenb==null){
 msg2=msg2+'Invalid phone number.\n';
}
if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(cemail) || cemail==null){
  msg2=msg2+'Invalid email.\n';
}
if(ccity=="")
{
  msg2=msg2+'Please enter your city name.\n';
}
if(messagetext=="")
{
  msg2=msg2+'Please enter your message text.\n';
}
  if(msg2==""){
   $.ajax({
    url: "php-02.php",
    type: "POST",
     data:{
      cname: cname,
      cphone: cphonenb,
      cemail: cemail,
       messagetext: messagetext,
       ccity: ccity
     },
    success: function(outputSentByServer){//result of the page names.php
      $("#divRes2").html("The message was sent. Thank you for your contact.");
    // alert(outputSentByServer);
     }
   });
  }
 else{
alert(msg2);
}
}
