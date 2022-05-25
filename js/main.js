function map(input, input_start, input_end, output_start, output_end) {
	return output_start + ((output_end - output_start) / (input_end - input_start)) * (input - input_start);
}

explore_text = document.getElementById("explore_text");
cover = document.getElementById("cover");
searchbar = document.getElementById("searchbar");
search_btn = document.getElementById("search_btn");

explore_text.addEventListener("click", event => {
	cover.className = ""; // this will remove any classes and therefore drag cover into the viewport
	setTimeout(function() {
		window.location.href = "/explore";
	}, 500) // this function will be executed 500ms later
});

function search_href() {
	val = searchbar.value;
	search(val);
}
function search(val) {
	cover.className = ""; // this will remove any classes and therefore drag cover into the viewport
	setTimeout(function() {
		window.location.href = "/search#q=" + val;
	}, 500) // this function will be executed 500ms later
}

searchbar.addEventListener("keypress", event => {
	if (event.key === 'Enter') {
		search_href();
	}
});

search_btn.addEventListener("click", event => {
	search_href();
});
window.onload = function(){
	cover.className = "";
	cover.classList.add("uncover_right");
	setTimeout(function() {
		// when animation is done, we reset by moving our cover above the viewport and back to the left
		cover.className="";
		cover.classList.add("temp_hide");
		cover.classList.add("uncover_left");
	}, 500);
}


