## Project title/ Assaignment given/ approx time spent on build
project name: Bleak Times

Assaignment: TakeHome Challenge 

[specHere](https://mod4.turing.edu/projects/take_home/take_home_fe) 

## Motivation

The app is a news aggregator that displays the current top news in the US. Users can click on a news story to read more and are redirected to the New York Times website. The app provides a convenient way for users to stay up-to-date with the latest news and easily access in-depth coverage from a reputable source.
 
## Screenshots / deployment link if applicable
![ BleakTimesApp](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjFkNjdkNTQzNDI0ZDc4NTQ0ODY5ZDc0ZDNkZWVkODk2YmU3YjYzOSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/K3Pu2qydFi6GcyTq9N/giphy.gif)

## Tech/framework used
<div>
  <img src="https://img.shields.io/badge/-react-333333?logo=react&style=for-the-badge" width="100" height="30"/>
  <img src="https://img.shields.io/badge/-react%20router-f44250?logo=react%20router&logoColor=white&style=for-the-badge" width="100" height="30"/>
  <img src="https://img.shields.io/badge/-CSS3-315780?logo=css3&style=for-the-badge" width="100" height="30"/>
  <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" width="100" height="30" />
</div>

## Features
- A user can see a display of current new articles
- A user can use the search bar and filter by title
- A user can go to a detailed page and link to the NY times

## Installation
## Setup Instructions
1. Fork the Repo from the [BLEAK TIMES APP ](https://github.com/AndrewCerveny/BleakTimes)
2. Clone the repo
   ```sh
   git clone git@github.com:AndrewCerveny/BleakTimes.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Run npm start
   ```sh
   npm start
   ```
5. Use the Link that is given in the Terminal & Open in Browser
   ```sh
   Example: http://localhost:3000/
   ```

## API Reference

https://api.nytimes.com/svc/topstories/v2/us.json?api-key=yourkey 
- Key is given with subscrption and hidden in files. 

## Future extension
- The app is deployed but the api was not given permission to be used from NY times as free source. Therefor usability of the app is limited to those with the api key access. 

## challenges 

- Still need more expierence with React hooks
- I used class based components for state management
- I added another property to the article state called title Abr to filter the search bar without altering the titles be rendered to the screen
- Alloted time allowed for the project to be complete was 8-10hr max.
