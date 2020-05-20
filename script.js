let imgN = 1;
rd.onclick = function rightSlide() {
	document.getElementById(`dot${imgN}`).style.backgroundColor = "white";
	if(imgN === 5) imgN = 0;
	imgN++;
	document.getElementById("img").setAttribute("src", `img/pic${imgN}.jpg`);
	document.getElementById(`dot${imgN}`).style.backgroundColor = "#464242c7";
}
ld.onclick = function leftSlide() {
	document.getElementById(`dot${imgN}`).style.backgroundColor = "white";
	if(imgN === 1) imgN = 6;
	imgN--;

	document.getElementById("img").setAttribute("src", `img/pic${imgN}.jpg`)
	document.getElementById(`dot${imgN}`).style.backgroundColor = "#464242c7";
}
let dots = document.getElementsByClassName("dot");
Array.from(dots).forEach(function(elem) {
	elem.onclick = function() {
		let num = elem.id[elem.id.length - 1];
		document.getElementById(`dot${imgN}`).style.backgroundColor = "white";
		imgN = num;
		document.getElementById("img").setAttribute("src", `img/pic${imgN}.jpg`);
		document.getElementById(`dot${imgN}`).style.backgroundColor = "#464242c7";
	}
})