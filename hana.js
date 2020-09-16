var hana = document.createElement("img");
hana.src = browser.runtime.getURL("assets/hana.png");
hana.style.cssText = "z-index: 100; position: fixed; right: -50%; bottom: 0px; height: 80%; transition-property: right; transition-timing-function: cubic-bezier(.18,.85,.15,.98); transition-duration: 3s;"
document.body.appendChild(hana);

var audio = new Audio(browser.runtime.getURL("assets/hana.mp3"));
var played = false;
var tweet = document.createElement("a");
var nuclearCodes = document.URL.replace(/\D/g, "");

tweet.className = "btn btn-secondary btn-disabled tooltip";
tweet.innerHTML = "Share on Twitter";
tweet.style.cssText = "background-color: #1da1f2;";
tweet.setAttribute("onclick", 
		`window.open("https://twitter.com/intent/tweet?text=${nuclearCodes}%20%23HanaNuclearCodes", "_blank")`);

var tooltip = document.createElement("div");
tooltip.className = "top";
tooltip.innerHTML = "Tweet the nuclear codes <i></i>";
tweet.appendChild(tooltip);


document.addEventListener("click", function(){
	if (!played) {
		audio.play();
		hana.style.right = "-15%"
		played = true;
		setTimeout(function(){
			document.getElementsByClassName("buttons")[0].appendChild(tweet);
		}, 10000);
	}
});
