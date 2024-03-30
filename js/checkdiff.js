/* checkDiff */

function checkDiff(datestr) {
    // Parse the input date string
    var parts = datestr.match(/(\d+)\/(\d+)\/(\d+) (\d+):(\d+):(\d+) (AM|PM) \((\w+)\)/);
    if (!parts) {
        console.error("Invalid date format");
        return;
    }

    // Extract date components
    var month = parseInt(parts[1], 10);
    var day = parseInt(parts[2], 10);
    var year = parseInt(parts[3], 10);
    var hour = parseInt(parts[4], 10);
    var minute = parseInt(parts[5], 10);
    var second = parseInt(parts[6], 10);
    var period = parts[7];
    var timezone = parts[8];

    // Adjust hour if in PM
    if (period === "PM" && hour < 12) {
        hour += 12;
    }

    // Create Date object
    var refreshed = new Date(year, month - 1, day, hour, minute, second);

    // Adjust for timezone if needed
    if (timezone !== "UTC") {
        var dtz = new Date().getTimezoneOffset() / 60;
        var sdtz = timezone === "MDT" ? 6 : 7; // Example for MDT and MST, adjust accordingly
        var adjustedTime = refreshed.getTime() + (sdtz - dtz) * 60 * 60 * 1000;
        refreshed.setTime(adjustedTime);
    }

    var diff = 30 * 60 * 1000; /* 30 min diff is OK without a warning*/
    var text = document.createElement('div');

    // Fixme: Add "icon"
    if (Date.now() - refreshed > diff) {
        text.innerHTML = "<i class='fa-solid fa-triangle-exclamation m-orange'></i><b> Old Weather Data </b>";
    }

    var freshWeatherElement = document.getElementById('freshweather');
    if (freshWeatherElement) {
        freshWeatherElement.appendChild(text);
    } else {
        console.error("Element with ID 'freshweather' not found.");
    }
}
