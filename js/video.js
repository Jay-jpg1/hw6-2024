

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});
let video; 
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
	console.log("Autoplay and loop turned off")
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});
document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.90;
	console.log("New speed is " + video.playbackRate);
});
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= 0.95;
	console.log("New speed is " + video.playbackRate);
});
// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

