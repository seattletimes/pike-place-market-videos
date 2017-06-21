// require("./lib/social");
// require("./lib/ads");
// var track = require("./lib/tracking");

require("component-responsive-frame/child");
var $ = require("./lib/qsa");

var points = $(".dot");
var videoContainer = $(".video");
var video = $.one(".video iframe");
var lightbox = $.one(".lightbox");
var close = $.one(".close");
var listItem = $(".list-item");
// var videoTitle = $.one(".title");

var displayVideo = function(e) {
// console.log(this);

lightbox.style.display = "block";
var youtube = this.getAttribute("data-youtube");
listItem.forEach(el => el.classList.remove("active")); //removes highlight from list item
this.classList.add("active"); //highlights list item
video.setAttribute("src", `https://www.youtube.com/embed/${youtube}?ecver=1&autoplay=1&showinfo=0&rel=0`);
};

var closeWindow = function(e) {
lightbox.style.display = "none";
video.setAttribute("src", "");
this.classList.remove("active");
};

points.forEach(l => l.addEventListener("click", displayVideo));
listItem.forEach(l => l.addEventListener("click", displayVideo));
close.addEventListener("click", closeWindow);