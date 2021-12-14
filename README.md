## Goal

This project is a test- / playground for learning vue.js (Version 3) in combination with Typescript and [vitejs](https://vitejs.dev/)

The requirements of the application were defined in the Dev-Jam discord community which can be found at [https://devjam.vercel.app/](https://devjam.vercel.app/). If you want some challenge for your evolving development skills, come and join us!

### Requirements

- [x] User can start the quiz by pressing a button
- [x] User can see a question with 4 possible answers
- [x] After selecting an answer, display the next question to the User. Do this until the quiz is finished
- [x] At the end, the User can see the following statistics
  - Time it took to finish the quiz
  - How many correct answers did he get
  - A message showing if he passed or failed the quiz

### ⭐ Bonus features (optional)
- [ ] User can share the result of a quiz on social media
- [x] Add multiple quizzes to the application. User can select which one to take
- [ ] User can create an account and have all the scores saved in his dashboard. User can complete a quiz multiple times
- [ ] User can create their own quizzes

## Project Setup

### Local Development

- If you haven't installed yarn on your system yet, install it by running

  `$ npm i -g yarn`
- `$ yarn`
- `$ yarn dev`
- Open your browser at [http://localhost:3000](http://localhost:3000)

### Publishing

I recommend [https://surge.sh](https://surge.sh) for deploying static web applications without a local database as it is so easy.

run `surge` to deploy the application to a subdomain of your choosing at `surge.sh`