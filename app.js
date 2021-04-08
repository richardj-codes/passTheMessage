// hello world -> display none, if message diplay block
// grab input Message
// create click event listener on button
// show message when clicked

(function () {
	let message = document.querySelector("input");
	let btn = document.querySelector("button");
	let message2 = document.querySelector(".messageReveal");

	btn.addEventListener("click", () => {
		if (message.value === "") {
			alert("You have to type in a word first 🙂");
		} else {
			message2.innerHTML = message.value;
			message.value = "";
		}
	});
})();
