(() => {
	console.log("fired! ready to jam");
	//event object created from event
	function playDrumKitSound(event) {
		//debugger;
		//select the corresponding audio element and make it play
		let audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);

		//debugging / error handling
		// if we dont have a matching audio element kill the code
		// 
		// ! means audio = null audio = "" not operator or a bang
		if (!audio) { return; } //stops code execution

		//rewind audio on every click and make it play
		audio.currentTime = 0;
		audio.play();

	}

	window.addEventListener("keydown", playDrumKitSound);
})();