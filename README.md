# Sofaskin-CW9009
CW9009 Meridian code modifications to Sofaskin web page for Weewx originally developed by Sven at http://neoground.com/projects/weewx. Please see the readme for dependency requirements to use this skin. An Italian version of these directions are available at http://micae.it/2017/12/28/sofaskin-italiano/. 

Sofaskin V1.1 is developed by Sven at Neoground: https://neoground.com/portfolio/neowx/. ***Sven no longer supports the original skin.*** This is a great template but I made some modifications to suit my needs. I also added some code from another template by <a href="http://www.dajda.net">dajda.net</a> to make the history and NOAA Tables. There is also code additions from <a href=http://www.torkel.se/weather/index.html> Björn Torkelsson</a>. A list of the changes are listed below along with instructions to setup the history tables. 

- Added more variables in the skin.conf files to help customize the pages. 
- Removed monthly and yearly summary drop down list and added a separate summaries page. 
- Used all-time records weewx variables to create records table.
- Added a station page for station information along with links to weather networks where data is sent.  
- Added Menu button for smaller screens.
- Auto page refresh every ten minutes.
- Added code from the dajda.net to produce history tables.The historygenerator.py script must be added to WeeWx in order for the - tables to work.
- Created a PHP page template to view the NOAA climate text files.
- Add warning if the weather data is old (more than 30 min old). (Written by Björn Torkelsson) 
- Replaced javascript code in the web camera section of index.html with CSS slideshow to allow for more than two web cameras

<b>Responsive Menu:</b><br>
I added a better responsive menu system that would use less vertical space on smaller screen sizes.

![screenshot_20161127-062548](https://cloud.githubusercontent.com/assets/22601363/20864991/f2f14eb8-b9c2-11e6-8bba-b4043f425bbb.png)
![screenshot_20161201-124209](https://cloud.githubusercontent.com/assets/22601363/20864992/f4b96654-b9c2-11e6-8346-650fee6db484.png)
<br><br>
<b>History Table:</b><br>
The historygenerator.py script was part of a template developed by http://www.dajda.net/index.html. More information on the template is available at http://www.dajda.net/about.html and the original template is available on GitHub at 
https://github.com/brewster76/fuzzy-archer. I modify the code in historygenerator.py to create the right html links in the NOAA climate summary table and wrote a php page to view the summary. 

![template](https://cloud.githubusercontent.com/assets/22601363/20864962/3f40b91c-b9c2-11e6-8298-75bec529dc40.jpg)
<br><br>
<b>Old Data Alert:</b><br>
Displays an alert message in the header when weather data is X minutes old. The default is 30 minutes but this can be adjusted in the checkdiff.js file in the js folder. 

![olddata](https://cloud.githubusercontent.com/assets/22601363/21075763/496c385c-bed7-11e6-82e8-789ffa300601.jpg)
<br><br>
<b>Installation instructions:</b><br>
To install the Sofaskin V1.1 template on your Weewx weather station, please follow the instructions below:

1. Download the skin files from the GitHub repository.

2. Extract the downloaded files and copy the "Sofaskin" folder to the /etc/weewx/skins directory on your Weewx weather station.

3. Open the "weewx.conf" file located in the /etc/weewx/ directory, find the "[[StandardReport]]" section, and change the "skin" variable to "Sofaskin".

Example:
[[StandardReport]]
skin = Sofaskin

4. Download the "historygenerator.py" script from the following GitHub repository: https://github.com/brewster76/fuzzy-archer/blob/master/user/historygenerator.py

5. Copy the "historygenerator.py" script to the /usr/share/weewx/user directory on your Weewx weather station.

6. Open the "skin.conf" file located in the /etc/weewx/skins/Sofaskin directory and update the variables in the [Extras] section to match your station information.

<b>IMPORTANT:</b>
You should update the variables in the EXTRA section of the skin.conf file to match your station information. Example section below:

```
[Extras]
    # Template Extras
 
    # Website URL
    #web_url = 

    # radar
    #radar = '<iframe class="iframe" src="https://embed.windy.com/embed2.html?lat=43.555&lon=-116.348&zoom=9&level=surface&overlay=radar&menu=&message=&marker=&calendar=&pressure=&type=map&location=coordinates&detail=&detailLat=43.555&detailLon=-116.348&metricWind=default&metricTemp=default&radarRange=-1"></iframe>'

    # Lightning map and hyperlink
    #lightning_map = http://images.lightningmaps.org/blitzortung/america/index.php?map=usa&period=0.25
    #lightning_url = http://www.lightningmaps.org/realtime 

    # You. Only shows up in footer
    #you = 
    #emailname = 
    #email =  
   
    # Camera link
    # camera and cameratitle are arrays of the camera links and camera names. 
    #cameratitle = "Hwy 69 - Amity", "Victory - Five Mile", "Reflection Ridge", "Bridgeview South"
    #camera = http://www.achdidaho.org/ATIS/CCTV/CCTV_588.jpg, http://www.achdidaho.org/ATIS/CCTV/CCTV_649.jpg, https://icons.wunderground.com/webcamramdisk/l/a/lakearrowheadnw/3/current.jpg?1535944393, https://icons.wunderground.com/webcamramdisk/m/i/miralem77/4/current.jpg?1536106630  
    
    # Google Analytics ID
    #googleAnalyticsId = 

    #CWOP
    #cwop = 
    #cwop_url = 
```
If you have problems, you can email me at josh@centuryfarmweather.com  
