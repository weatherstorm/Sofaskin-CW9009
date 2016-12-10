/* checkDiff
 *
 * Check if the
 */

function checkDiff(datestr) {
    var date = new Date();
    var refreshed = new Date(datestr);
    var diff = 30 * 60 * 1000; /* 30 min diff is OK without a warning*/
    var text = document.createElement('div');
    // Fixme: Add "icon"
    if (date - refreshed > diff) {
        text.innerHTML = "<i class='fa fa-exclamation-triangle m-orange'></i><b> Old Weather Data </b>";
//  } else {
//    text.innerHTML = "<i class=''></i> Fresh Weather";
    }
    document.getElementById('freshweather').appendChild(text);
}
