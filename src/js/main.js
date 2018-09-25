// sign-up login form
$(".form")
  .find("input, textarea")
  .on("keyup blur focus", function(e) {
    var $this = $(this),
      label = $this.prev("label");
    if (e.type === "keyup") {
      if ($this.val() === "") {
        label.removeClass("active highlight");
      } else {
        label.addClass("active highlight");
      }
    } else if (e.type === "blur") {
      if ($this.val() === "") {
        label.removeClass("active highlight");
      } else {
        label.removeClass("highlight");
      }
    } else if (e.type === "focus") {
      if ($this.val() === "") {
        label.removeClass("highlight");
      } else if ($this.val() !== "") {
        label.addClass("highlight");
      }
    }
  });
$(".tab a").on("click", function(e) {
  e.preventDefault();
  $(this)
    .parent()
    .addClass("active");
  $(this)
    .parent()
    .siblings()
    .removeClass("active");
  target = $(this).attr("href");
  $(".tab-content > div")
    .not(target)
    .hide();
  $(target).fadeIn(600);
});
//topnav icon
function topNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
//slide texts
$(document).ready(function() {
  $(function() {
    $(".text .slides:gt(0)").hide();
    setInterval(function() {
      $(".text :first-child")
        .fadeOut(0)
        .next(".slides")
        .fadeIn(4000)
        .end()
        .appendTo(".text");
    }, 7000);
  });
});

// EVENTS
("use strict");
$(document).ready(function() {
  var eventList = [
    {
      title: "Hackathon",
      date: "August 1 | 1am - 7pm",
      desc: "Bring codes to life.",
      address: "1 Vulkanstr, 10367, Berlin",
      image: "https://picsum.photos/200?image=979",
      month: "Aug",
      day: "1",
      important: true,
      upcoming: false
    },
    {
      title: "Coding",
      date: "August 2 | 2am - 7pm",
      desc: "Be the change.",
      address: "1 Vulkanstr, 10367, Berlin",
      image: "https://picsum.photos/200?image=979",
      important: false,
      upcoming: true
    },
    {
      title: "Barbeque",
      date: "August 3 | 3am - 7pm",
      desc: "Get it flow.",
      address: "1 Vulkanstr, 10367, Berlin",
      image: "https://picsum.photos/200?image=979",
      important: false,
      upcoming: true
    },
    {
      title: "Presentation",
      date: "August 4 | 4am - 7pm",
      desc: "See what matters.",
      address: "1 Vulkanstr, 10367, Berlin",
      image: "https://picsum.photos/200?image=979",
      important: true,
      upcoming: true
    },
    {
      title: "Musik show",
      date: "August 5 | 5am - 7pm",
      desc: "Bring your dancing shoes.",
      address: "1 Vulkanstr, 10367, Berlin",
      image: "https://picsum.photos/200?image=979",
      important: false,
      upcoming: false
    },
    {
      title: "Bootcamp",
      date: "August 6 | 6am - 7pm",
      desc: "Code code code.",
      address: "1 Vulkanstr, 10367, Berlin",
      image: "https://picsum.photos/200?image=979",
      important: true,
      upcoming: false
    },
    {
      title: "Sports",
      date: "August 7 | 7am - 7pm",
      desc: "Bring sports materials.",
      address: "1 Vulkanstr, 10367, Berlin",
      image: "https://picsum.photos/200?image=979",
      important: false,
      upcoming: true
    },
    {
      title: "Coding",
      date: "August 8 | 8am - 7pm",
      desc: "Write what u should.",
      address: "1 Vulkanstr, 10367, Berlin",
      image: "https://picsum.photos/200?image=979",
      important: true,
      upcoming: false
    },
    {
      title: "Get together",
      date: "August 9 | 9am - 7pm",
      desc: "Party like there is no tomorrow.",
      address: "1 Vulkanstr, 10367, Berlin",
      image: "https://picsum.photos/200?image=979",
      important: false,
      upcoming: true
    }
  ];
  let events = (document.getElementById("events").innerHTML = "");

  for (let event of eventList) {
    const myEvents = `
      <div class="card">
        <img src="${event.image}" alt="${event.title}">
        <div class="content">
          <h2>${event.title}</h2>
          <h3>${event.desc}</h3>
          <p>${event.date}</p>
          <p>${event.address}</p>
        </div>
      </div>`;
    events += myEvents;
  }
  $("#events").append(events);
});

// SEARCH
function myPassword() {
    var x = document.getElementById("pass");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}
