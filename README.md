# SN-API

 [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

 ## Description
SN-API allows you to post thoughts under a user and other viewers are able to see those thoughts and leave reactions to those thoughts. Also users have the ability to add another user to their friends list. All of the data is stored in a mongoDB database and all data manipulation is handled through the mongoose npm package. All 

  ## Installation 
  Once you have cloned the SN-API repo you will run 'npm i' in your terminal to install all the dependencies required for the application to be run on Insomnia or any other platform for route testing. 

  ## Usage
Once you have installed all dependencies you can start your server by running `npm start` in the terminal in the repos directory. Once the server has successfully started you may begin by creating users on the user post route where the body should contain values for an `email` and `username`. Once you have created a user you can use the get user route to get the `id` of that user. with the user Id you are able to find, update and delete a user with the corresponding routes.

You can post a thought using the post thought route along with a user Id. The body of the thought should include values for `thoughtText:` and the user ids `username:`. With a thought you are able to then find, update and delete a thought with the thought Id. On top of the user and thought functionality you are able to add friends between users and add a reaction to a users thought. to add or delete a friend all you need is the primary user Id and the Id of the user you would like to add or remove from the friend list. Similarly with a thought id you are able to add a reaction to a thought, you are able to delete a reaction with the thought Id and the reaction Id. 

[Demo Video](https://drive.google.com/file/d/1Dw2tO6ijhbl1MsZ1AAdijnUMkAqlsB7g/view)


  ## License
  MIT License

  ## How to Contribute
  Feel free to contact me with any ideas.

  ## Questions
  [Github Profile](https://github.com/garrethil)

  For any further questions you may contact me at this email: garrethildebrandt@gmail.com