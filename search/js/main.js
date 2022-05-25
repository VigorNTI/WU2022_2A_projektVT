function map(input, input_start, input_end, output_start, output_end) {
	return output_start + ((output_end - output_start) / (input_end - input_start)) * (input - input_start);
}

cover 		= document.getElementById("cover");
searchbar 	= document.getElementById("searchbar");
search_btn 	= document.getElementById("search_btn");
sort_btn 	= document.getElementById("sort_btn");
nav_sort	= document.getElementById("nav-sort");
options_sort 	= document.getElementById("options-sort");

function openItem(name) {
	cover.className = "";
	setTimeout(function() {
		window.location.href = "/item#name=" + name;
	}, 500);
}

function search_href() {
	val = searchbar.value;
	cover.className = "";
	setTimeout(function() {
		window.location.href = "/search#q=" + val;
	}, 500); // this function will be executed 500ms later
}

function href(location) {
	cover.className = "";
	setTimeout(function() {
		window.location.href = location;
	}, 500); // this function will be executed 500ms later
}

searchbar.addEventListener("keypress", event => {
	if (event.key === 'Enter') {
		search_href();
	}
});

search_btn.addEventListener("click", event => {
	search_href();
});

sort_btn.addEventListener("click", event => {
	nav_sort.classList.toggle("active");
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
var hashParams = window.location.hash.substr(1).split('&'); // substr(1) to remove the `#`
for(var i = 0; i < hashParams.length; i++){ // iterate over values
	var p = hashParams[i].split('=');
	if (p[0] == "q") { // if we find the parameter "q", load that into the searchbar
		document.getElementById("searchbar").value = decodeURIComponent(p[1]);
		break; // we've found what we were looking for, exit the for loop
	}
}

for (var i = 0; i < options_sort.children.length; i++) {
	child = options_sort.children[i];
	child.addEventListener("click", event => {
		for (var i = 0; i < options_sort.children.length; i++) {
			child = options_sort.children[i];
			if (child != event.target)
				child.classList.remove("active");
		}
		event.target.classList.toggle("active");
		if (!event.target.classList.contains("active"))
			options_sort.children[0].classList.add("active");
	});
}
