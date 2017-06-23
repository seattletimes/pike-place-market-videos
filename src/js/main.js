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

  var youtube = this.getAttribute("data-youtube");

if (window.navigator.userAgent.match(/i(phone|pad)/i)) {
  window.open("https://youtu.be/" + youtube);
} else {
  lightbox.style.display = "block";
  listItem.forEach(el => el.classList.remove("active")); //removes highlight from list item
  this.classList.add("active"); //highlights list item
  video.setAttribute("src", `https://www.youtube.com/embed/${youtube}?ecver=1&autoplay=1&showinfo=0&rel=0`);
  //for dots
  var id = this.getAttribute("data-id");

  var activeItem = $.one(`.list-item[data-id="${id}"]`);
  activeItem.classList.add("active");
}

};

var hoverEffects = function(h) {

  var id = this.getAttribute("data-id");
  points.forEach(el => el.classList.remove("hover-dot"));

  var hoverDot = $.one(`.dot[data-id="${id}"]`);
  hoverDot.classList.add("hover-dot");

};

// var safariVideo = function(v) {
//   if 

//   console.log("hello");
//   if (window.navigator.standalone) {
//     window.open("https://www.youtube.com/" + youtube);
//   }
// };

var closeWindow = function(e) {
lightbox.style.display = "none";
video.setAttribute("src", "");
listItem.forEach(el => el.classList.remove("active")); //removes highlight from list item
};

points.forEach(l => l.addEventListener("click", displayVideo));
listItem.forEach(l => l.addEventListener("click", displayVideo));
close.addEventListener("click", closeWindow);
listItem.forEach(l => l.addEventListener("mouseover", hoverEffects));

// video.addEventListener("click", safariVideo);