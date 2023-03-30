let video = document.querySelector('video');

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	console.log("Auto play is set to false");
	video.loop = false;
	console.log("Loop is set to false");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.getElementById('volume').textContent = document.getElementById('slider').value + "%"
	video.volume = document.getElementById('slider').value;
});

document.querySelector("#pause").addEventListener("click", function(){
	console.log("Pause Video");
	document.querySelector('video').pause();
});

document.querySelector("#slower").addEventListener("click", function(){
	console.log("Slow down Video");
	video.playbackRate *= 0.9;
	console.log("Speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function(){
	console.log("Speed up Video");
	video.playbackRate *= (1 + 1/9);
	console.log("Speed is " + video.playbackRate);
});

// Advance the current video by 10 seconds.  If the video length has been exceeded go back to the start of the video - no farther.   Log the current location of the video.
document.querySelector("#skip").addEventListener("click", function(){
	console.log("Skip Ahead");
	if ((video.currentTime + 10) > video.duration){
		video.currentTime = 0;
	} else {
		video.currentTime += 10
	}
	console.log("Video current time is " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function(){
	let muteButton = document.querySelector("#mute");
	if (video.muted){
		console.log("Mute");
		video.muted = false;
		muteButton.textContent = "Mute";
	} else {
		console.log("Unmute");
		video.muted = true;
		muteButton.textContent = "Unmute";
	}
});

document.querySelector("#slider").addEventListener("input", function(){
	const volume = this.value;
	document.getElementById('volume').textContent  = volume + "%";
	video.volume = volume / 100;
	console.log("The current value is " + volume);
	console.log(document.getElementById('volume'));
});

document.querySelector("#vintage").addEventListener("click",function(){
	video.classList.add('oldSchool');
})

document.querySelector("#orig").addEventListener("click",function(){
	video.classList.remove('oldSchool');
})



