/* checkDiff
 *
 * Check if the
 */

function checkDiff(datestr) {
    var newdate = new Date();
    var refreshed = new Date(datestr);
    var dtz = date.geTtimezoneOffset()/60;
    var sdtz = refreshed.getTimezoneOffset()/60;

    if (dtz == sdtz ) {
    	var date = newdate;
    } else {
	var date = new Date(newdate.getTime() + sdtz);
    }

    var diff = 30 * 60 * 1000; /* 30 min diff is OK without a warning*/
    var text = document.createElement('div');

    // Fixme: Add "icon"
    if (date - refreshed > diff) {
        text.innerHTML = "<i class='fa-solid fa-triangle-exclamation m-orange'></i><b> Old Weather Data </b>";
    }

    document.getElementById('freshweather').appendChild(text);
}
