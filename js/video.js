

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
/*plays the video */
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

/*pauses the video */
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});
/*slows the video down by a factor of 10 */
document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= .9;
	console.log("New speed is " + video.playbackRate);
});

/*speeds the video up by a factor of 10 */
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= 0.9;
	console.log("New speed is " + video.playbackRate);
});

/*skips ahead 10 seconds */
document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime += 10;
    if (video.currentTime >= video.duration) {
        video.currentTime = 0;
    }
	console.log("Current time is " + video.currentTime);
});

/*mutes the video */
let player = document.getElementById("player1");
let muteButton = document.getElementById("mute");

muteButton.addEventListener("click", function() {
    player.muted = !player.muted;
    muteButton.textContent = player.muted ? "Unmute" : "Mute";
    console.log(`Video is now ${player.muted ? "muted" : "unmuted"}`);
});

/*changes the volume of the video */
let slider = document.getElementById("slider");
let volumeInfo = document.getElementById("volume");

slider.addEventListener("input", function() {
    player.volume = slider.value / 100;
    volumeInfo.textContent = Math.round(player.volume * 100) + "%";
});


/*changes the video to the old school video */
let oldSchoolButton = document.getElementById("vintage");
oldSchoolButton.addEventListener("click", function() {
    player.classList.toggle("oldSchool");
});

/*changes the video to the original video */
let originalButton = document.getElementById("orig");
originalButton.addEventListener("click", function() {
    player.classList.remove("oldSchool"); // Remove the oldSchool class
    console.log("Old School mode is disabled, back to original.");
});
// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

