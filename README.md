# RateYourRep

RateYourRep was created to provide a voice for the public on their local, state, and federal representatives through a ratings and review system that scores a representative on their transparency, public engagement, and if they align with the reviewer’s values. RateYourRep prompts a user for if they identify as Black or African American, allowing them to have their opinions shine and further their importance in changing how our representatives impact different communities.

## Technologies Used

Built with: React, Redux, Node, Express, PostgreSQL, Material-UI, Google Civic Information API

## Features

1. On sign up, you can select if you identify as Black or African American so your rating is counted towards a legislator's separate overall rating with others who also identify as Black or African American.
2. On sign up, your address determines which legislators you may review. In this way, only those who are actually represented by the legislator can start a dialogue and form a community-wide voice.
3. Based on your registered address, all local, state, and federal representatives associated with you will be displayed in a list.
4. Selecting a legislator displays both their overall score from all users and their overall score for users who identify as Black or African American. You will also see a listing of all other user ratings for that legislator.
5. View a legislator's political details and contact info on their profile.
6. Add a rating with sliders to score a legislator based on their transparency, public engagement, and if they align with the your values.

## Setup

1.  Clone the repo to your local machine.
2.  Run `npm install` to install packages.
3.  Create a PostgreSQL database.

```
createdb rateyourrep
```

4.  Run `npm run seed` to populate your database with initial dummy data.
5.  Run `npm run build` to bundle and build the app for production.
6.  Run `npm run dev` to start the server up on `localhost:5000`.
7.  Run `npm run start` to start the front-end up on `localhost:3000` in development mode.

## Credits

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

[Google Civic Information API](https://developers.google.com/civic-information)

[Material-UI](https://material-ui.com/)
