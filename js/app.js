const subCount = document.getElementById("subCount");
const frame = document.getElementById("frame");

let subCountNumber = 0;

function updateSubCount() {
	fetch(
		`https://api.tipeeestream.com/v1.0/events/forever.json?apiKey=${CONFIG.apiKey}`
	)
		.then((res) => res.json())
		.then((json) => {
			subCountNumber = json.datas.subscribers;
			subCount.innerText = subCountNumber;
		});
}

function sub(subName) {
	frame.style.animationName = "subAnimation";
	frame.style.animationDuration = "11s";

	subCount.style.animationName = "backgroundSubAnimation";
	subCount.style.animationDuration = "11s";

	subCount.innerText = subName + " " + subCountNumber;

	setTimeout(() => {
		frame.style.animationName = "borderAnimation";
		frame.style.animationDuration = "5s";

		subCount.style.animationName = "backgroundAnimation";
		subCount.style.animationDuration = "5s";
		subCount.innerText = subCountNumber;
		updateSubCount();
	}, 11000);
}
updateSubCount();
