# Resi-Review(A House Review WebApp)

A web app that shows the reviews of houses available for rent and the user can rate the house as well. It aims to help people searching for different rental house which can help to decide which house is best according to their needs and the environment of the house.

## Demo

A simple frontend design to see how the frontend looks like
[Demo Link](https://romanpoudel.github.io/resi-review/)

## Screenshots

![App Screenshot](<https://github.com/romanpoudel/resi-review/blob/main/Screenshot%20(62).png?raw=true>)

![App Screenshot](<https://github.com/romanpoudel/resi-review/blob/main/Screenshot%20(61).png?raw=true>)

![App Screenshot](<https://github.com/romanpoudel/resi-review/blob/main/Screenshot%20(58).png?raw=true>)

![App Screenshot](<https://github.com/romanpoudel/resi-review/blob/main/Screenshot%20(59).png?raw=true>)

![App Screenshot](<https://github.com/romanpoudel/resi-review/blob/main/Screenshot%20(60).png?raw=true>)

## Database design

![App Screenshot](https://github.com/romanpoudel/resi-review/blob/main/datamodeling.png?raw=true)

## Installation

Install my-project with npm

clone the project with `https://github.com/romanpoudel/resi-review.git`

```bash
  cd client for frontend / cd server for backend
  npm install
  npm run dev
```

Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.

Open [http://localhost:3000](http://localhost:3000) with your browser to see if backend is running.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

| Key                   | Value              |
| --------------------- | ------------------ |
| ACCESS_TOKEN_SECRET   | accesstokensecret  |
| REFRESH_TOKEN_SECRET  | refreshtokensecret |
| DB_NAME               | pg                 |
| DB_HOST               | '127.0.0.1'        |
| DB_USER               | postgres           |
| DB_PASSWORD           | password           |
| DB_PORT               | 5432               |
| NODE_ENV              | development        |
| CLOUDINARY_CLOUD_NAME | Cadsfdf            |
| CLOUDINARY_API_KEY    | randonkey          |
| CLOUDINARY_API_SECRET | randomsecret       |
| SERVER_PORT           | 3000               |

`see .env.sample to copy template env file`

## Tech Stack

**Client:** `HTML, SCSS, Vite, eslint, Axios, Typescript, Web Components.`

**Server:** `Node, Express, Typescript, eslint, Postgres, Knex.js, JWT, Cookies, Multer,  Cloudinary, joi, Winston, bcrypt.`

## Features

- Responsive design
- JWT Authentication handled completely by backend

## Lessons Learned

- I got a error in postman which was not able to upload multiple images of different fields. At the end of the day discussion with the mentor we found out it was the error of vscodes `postman` extension and `ThunderClient` gave the output as required.

- I decided to upload frontend in github pages but it was not accepting multiple `html` files, I solved looking to different documentations and `StackOverflow` by configuring `vite.config.ts`. But still github pages was not showing the details pages as `href` it was inside `web components` but the `vite preview` was running successfully.

- Researching how can I make components and found the concept of web components which include shadowDOM concept. But my project has a sass which is centralized so used a basic web component without using shadowDOM as shadowDOM restricts outer styling.

- Configuring eslint in backend to escape error when any declared value is not used like when `res:Response` is not used, append `_res:Response` so it doesnot show error.

## Improvements

-Lazy Loading

-Pagination

-More details in profile page
