var video;
// var prev_speed;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
	console.log("Autoplay is set to " + video.autoplay);
	console.log("Looping is set to " + video.loop);
});

// play button
document.querySelector("#play").addEventListener("click", function() {
	video = document.querySelector("#player1");
	// play the video
	console.log("Play Video");
	video.play();
	// update volume information
	
});

// pause button
document.querySelector("#pause").addEventListener("click", function() {
	video = document.querySelector("#player1");
	// pause the video
	console.log("Pause Video");
	video.pause();
});

// slow down
document.querySelector("#slower").addEventListener("click", function() {
	video = document.querySelector("#player1");
	// slow the current video speed by 10% each time the button is clicked
	console.log("Slow down video");
	// prev_speed = video.playbackRate;
	video.playbackRate -= (video.playbackRate * 0.10);
	// log the new speed to the console
	console.log("Speed is " + video.playbackRate);
});

// speed up
document.querySelector("#faster").addEventListener("click", function() {
	video = document.querySelector("#player1");
	// increment the current video speed each time the button is clicked
	console.log("Speed up video");
	// video.playbackRate += (prev_speed - video.playbackRate);
	video.playbackRate += video.playbackRate*0.10;
	// log the new speed to the console
	console.log("Speed is " + video.playbackRate);
	// prev_speed = video.playbackRate*1.10;
});

// skip ahead
document.querySelector("#skip").addEventListener("click", function() {
	video = document.querySelector("#player1");
	// advance the current position by 10 seconds
	console.log("Skip ahead");
	if (video.currentTime >= video.duration) {
		video.currentTime = 0;
	}
	else {
		video.currentTime += 10;
	}
	// if the video length has been exceeded go back to the start of the video
	// log the current location of the video
	console.log("Video current time is " + video.currentTime);
});

// mute
document.querySelector("#mute").addEventListener("click", function() {
	video = document.querySelector("#player1");
	// mute/unmute the video
	// update the text in the button
	if (video.muted) {
		console.log("Unmute");
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
	}
	else {
		console.log("Mute");
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
	}
});

// volume slider
document.querySelector("#slider").addEventListener("change", function() {
	video = document.querySelector("#player1");
	// change the volume based on the slider
	video.volume = this.value / 100;
	// update the volume information
	console.log("The volume is at " + video.volume);
});

// styled
document.querySelector("#vintage").addEventListener("click", function() {
	// utilize the existing oldSchool class on the video element
	video.classList.add("oldSchool");
});

// original
document.querySelector("#orig").addEventListener("click", function() {
	// remove the oldSchool class from the video
	video.classList.remove("oldSchool");
});