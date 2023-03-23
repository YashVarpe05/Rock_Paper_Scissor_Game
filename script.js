// todo : get element from DOM
const gameContainer = document.querySelector(".container"),
	userResult = document.querySelector(".user_result img"),
	cpuResult = document.querySelector(".cpu_result img"),
	result = document.querySelector(".result "),
	optionImage = document.querySelectorAll(".option_image");

// * Loop through each option image element

optionImage.forEach((image, index) => {
	image.addEventListener("click", (e) => {
		image.classList.add("active");

		userResult.src = cpuResult.src = "/noun-fist-477914.svg";
		result.textContent = " please Wait ....";
		// ! loop through each option image again
		optionImage.forEach((image2, index2) => {
			index !== index2 && image2.classList.remove("active");
		});
		gameContainer.classList.add("start");

		// ! set timeout to delay the result calculation
		let time = setTimeout(() => {
			gameContainer.classList.remove("start");

			// ? get the source of the clicked option image
			let imageSrc = e.target.querySelector("img").src;
			//! set the user image to the clicked option image
			userResult.src = imageSrc;
			// console.log(imageSrc);
			// * Generate a random number between 0 and 2
			let randomNumber = Math.floor(Math.random() * 3);
			// ** create a array of cpu image options
			let cpuImages = [
				"/noun-fist-477914.svg",
				"/noun-wave-477912.svg",
				"/noun-scissors-477919.svg",
			];
			//! set the CPU image  to a random option form the array of cpu image options
			cpuResult.src = cpuImages[randomNumber];
			// Assign the values of cpu options (R for rock P for paper S for Scissors)
			let cpuValue = ["R", "P", "S"][randomNumber];
			// assign a letter value to the clicked option (based on index )
			let userValue = ["R", "P", "S"][index];
			// create an object with all possible outcomes
			let outcome = {
				RR: "Draw",
				RP: "CPU",
				RS: "User",
				PP: "Draw",
				PR: "User",
				PS: "Cpu",
				SS: "Draw",
				SR: "Cpu",
				SP: "User",
			};

			let outComeValue = outcome[userValue + cpuValue];
			result.textContent =
				userValue === cpuValue ? "Match Draw" : `${outComeValue} Won!!!`;
		}, 2500);
	});
});
