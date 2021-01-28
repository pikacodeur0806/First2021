var by_2A452_SId = SId;
var by_2A452_root;


function by_2A452_track(url){
	var by_tracking = document.createElement('img');
	by_tracking.style.width = '1px';
	by_tracking.style.height = '1px';
	by_tracking.src = url;
	document.body.appendChild(by_tracking);
}

function  by_2A452_ShowCode(){
	document.querySelector(".by_voir").style.display = "none";
	document.querySelector(".by_free-code").style.display = "";
	by_2A452_track('https://www.casaneo.fr/scripts/h7hol2c4?a_aid=5cb89c9674646&a_bid=25b8fc46');


}



function by_2A452_copy(btn){
	var code = btn.parentNode.querySelector('.by-js-code');
	if( ! code ) return;

	var range = document.createRange();
	range.selectNode(code);
	window.getSelection().removeAllRanges();
	window.getSelection().addRange(range);

	try {
		var successful = document.execCommand('copy');
		if ( ! successful) return;

		btn.innerHTML = "Code copié";
	} catch (err) {}

	window.getSelection().removeAllRanges();
}







