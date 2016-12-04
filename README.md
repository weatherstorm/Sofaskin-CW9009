# Sofaskin-CW9009
CW9009 Meridian code modifications to Sofaskin web page for Weewx originally developed by Sven at http://neoground.com/projects/weewx. Please see the readme for dependency requirements to use this skin. 

Sofaskin V1.1 is developed by Sven at Neoground: http://neoground.com/projects/weewx. This is a great template but I made some modifications to his code to suit my purpose. I also added some code from another template by http://www.dajda.net to make the history and NOAA Tables. A list of changes are listed below along with how to setup the history tables. 

- Added more variables in the skin.conf files to help customize the pages. 
- Removed monthly and yearly summary drop down list and added a separate summaries page. 
- Used all-time records weewx variables to create records table.
- Added a station page for station history and information along with links to weather networks where data is sent.  
- Added Menu button for smaller screens.
- Auto page refresh every ten minutes.
- Added code from the dajda.net to produce history tables.The historygenerator.py script must be added to WeeWx in order for the - tables to work.
- Created a PHP page template to view the NOAA climate text files.

Responsive Menu:
I wanted to added a better responsive menu system that would use less vertical space on smartphones. I added code to make a menu button when viewed on using smaller screens.

![screenshot_20161127-062548](https://cloud.githubusercontent.com/assets/22601363/20864991/f2f14eb8-b9c2-11e6-8bba-b4043f425bbb.png)
![screenshot_20161201-124209](https://cloud.githubusercontent.com/assets/22601363/20864992/f4b96654-b9c2-11e6-8346-650fee6db484.png)

History Table:
The historygenerator.py script was part of a template developed by http://www.dajda.net/index.html. More information on the template is available at http://www.dajda.net/about.html and the original template is available on GitHub at 
https://github.com/brewster76/fuzzy-archer. I had to modify the code in historygenerator.py to create the right html links in the NOAA climate summary table. I wrote a php page to display the summary. 

![template](https://cloud.githubusercontent.com/assets/22601363/20864962/3f40b91c-b9c2-11e6-8298-75bec529dc40.jpg)

Installation instructions:
Installing the template is just like installing most other skins. You need to place the skin files in it’s own folder in the /etc/weewx/skins directory. You also need to change the skin variable to the new skin directory name in the weewx.conf file under Standard Reports. 

Example:
[[StandardReport]]
skin = Sofaskin 

Lastly, you need to put the historygenerator.py python script, in the bin/user folder, in the /usr/share/weewx/user directory. The skin.conf already as the code to use the tables so you don’t need to mess with that unless you want to changes the colors. You should update the variables in the skin.conf file to match your station information. More information on historygenerator.py and how to use the tables is available through the links below.
https://github.com/brewster76/fuzzy-archer/blob/master/INSTALL

If you have problems, you can email me at josh@cw9009.x10host.com  
