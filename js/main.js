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

		// grab the div and animate it
		let key = document.querySelector(`div[data-key="${event.keyCode}"]`);
		key.classList.add('playing');
	}

	function removePlayingClass(event) {
		//debugger;
		if (event.propertyName !== "transform") {
			return;
		} else {
			//remove the playing class here
			console.log('transition is done');
			event.target.classList.remove('playing');
		}
	}

	const keys = Array.from(document.querySelectorAll('.keys'));

	keys.forEach(key => key.addEventListener('transitionend', removePlayingClass));

	window.addEventListener("keydown", playDrumKitSound);
})();