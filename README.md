# FRIEND FINDER APP

## Overview

In this project, a compatibility-based "FriendFinder" application (basically a dating app) is build. This full-stack site takes in results which users survey, then compare their answers with those from other users. The app then displays the name and picture of the user with the best overall match.

Express is used to handle routing. The app is deployed to Heroku so other users can fill it out.

## Procedure
* Create a folder called FriendFinder. Inside the folder, organize the  directories so it matches the following:

```
 FriendFinder
 	- app
 		- data
 			- friends.js
 		- public
 			- home.html
 			- survey.html
 		- routing
 			- apiRoutes.js
 			- htmlRoutes.js
 	- node_modules
 	- package.json
 	- server.js
```

* The survey has 10 questions. Each answer is on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.

* The ```server.js``` file should require these basic npm packages: express, body-parser and path.

* The ```htmlRoutes.js``` file includes two routes:

  * A GET Route to /survey which displays the survey page: 
  * A default USE route that leads to home.html which displays the home page.

* The apiRoutes.js file should contain two routes:
  * A GET route with the url /api/friends. This is used to display a JSON of all possible friends.
  * A POST routes /api/friends. This is used to handle incoming survey results. This route is also used to handle the compatibility logic.

* The data is savedin the app as an array of objects. Each of these objects follows the format below.

```
 {
   "name":"Ahmed",
   "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
   "scores":[
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
 }
 ```
The following is used as guide to determine the user's most compatible friend:

* Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
* With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the totalDifference.
Example:
User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
Total Difference: 2 + 1 + 2 = 5
* Use the absolute value of the differences. Put another way: no negative solutions! 

* Closest match will be the user with the least amount of difference.
* Once the current user's most compatible friend is found, display the result as a modal pop-up.

The modal should display both the name and picture of the closest match.
