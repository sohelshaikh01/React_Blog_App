<!-- This contains the Documentation of App -->

It is an app which contains
- Notes
- Images
- Title and Details

<!-- FeatureImage Typo may problem later -->

1: Mega Project Overview
2: Appwrite Backend Service
3: ENV and Appwrite
4: Build Authentication Service with Appwrite
5: Appwrite Database, File Uploads and Custom Queries
6: Redux Toolkit Configuration
7: Production Grade Components
8: How to use Hook Form
9: Adding form and slug values
10: Building Pages in React
11: CORS and Debugging in Applications
12: Deploy app in production

## 1: Mega Project Overview

**Uploading images**
**Images Preview**
**Formating text and Saving**

- State Manage - Redux
- Database Url - Id security

## 2: Appwrite As Backend

- Using Databases
- Api of Appwrite
- Using `tinymce` for text formating
- Using `html-react-parser`
- Using `React Hook Form`
- Understanding `env` variables

## 3: ENV and App Write

### First Create Project in Folder

`Blog-App` in Vite
- npx create vite@latest
- Project name: Blog_App
- cd Blog_App
- npm install

### Install Additional Packages

`npm i @reduxjs/toolkit, react-redux, react-router-dom, appwrite, @tinymce/tinymce-react, html-react-parser, react-hook-form`

- Appwrite to make easy request
Installation may depends on need

### Environment Variables

- Create some variable as system variable
- At Time of deployment they are passed to secred manager of deploying services

**Rules for Creating Env File**

- Create in root Directory
- Name Start with 'dot' `.env`
- Write Variable in File with `CAPITAL` Letter
- Adding prefix `REACT_APP_` or `VITE_`
- Names can be written in small cap, Capitalize is to get easily spot.
- Don't use `semicolon ;` at last.

    `VITE_APPWRITE_URL="test environment"`
    `VITE_APPWRITE_URL=test-environment`
    <!-- both are same format -->
    `REACT_APP_APPWRITE_URL="test environment"`
    <!-- This is for react -->

- Never push file on github/deployment server
- Put file in gitignore

- Create `.env.sample`
- To get easily variables for developer
- Put all Variable in it, but without values

**Accessing the env**

- `process.env.REACT_APP_VAR_NAME`;
- `import.meta.env.REACT_APP_VAR_NAME`;
- `console.log(process.env.REACT_APP_VAR_NAME)`;

### Create & Setup Project on Appwrite

**Go on Project Overview / setting**
- get `Project Id` from it.
- get `ApiEndpoint` means `Project Url` in env Variable

**Go on `Auth` Section then settings**
- Enable all methods

Creating Database - `page`
- Get Database Id
Create Table / Collection - `articles`
- Get Collection Id

**Giving Permissions:**
- Collection Setting > permission > All User > CRUD

**Creating Artibutes of Collection**
- Create Attribute from attribute Section

`title, content, featuredImage, status, userId`
- Give `Field, its Types, Size and Required or not`.
- Also Given `userId` for mapping

**Also index creating for filtering**
- Create index from indexes section in Collection
- Give name, key, and Attribute to apply.


### To get Bucket Id

Go in Storage Section
- Create Bucket `images`
- Configure Bucket Permissions in setting
- Set Permission to All Users (Login User)

### Discussion on Good Practise

Better Way to access ENV Variable used in production grade apps to avoid errors
- Creating `conf` folder
- Create conf.js / config.js file
- Create and Export Object from this file


## 4: Build Authentication Service with Appwrite

Creating Services using class and method which makes app to usable with any backend

- Creating Clients 

- Go on Appwrite Authentication Docs
- Get SignUp Docs Code

- Create A class for code improvement 
- Directly import an object in it

- Create Methods in This
- remaining from getCurrentUser methods

## 5: Appwrite Database, File Uploads and Custom Queries

Create appwrite/config.js
- written method for post such CRUD

Documents
- Appwrite / Documentation / Documents / options
- Appwrite / Documentation / Storage / Methods

## 6: Redux Toolkit Configuration / Setup of Store

**Assignment** Put the post in state (create new slice), redux toolkit
For logout and login state
- store.js can also be root directory

- Created src/ store/ store.js
- Using configureStore from reduxjs not from react-redux.

- Create src/ store / authSlice.js for userAuthenticate or not
- This can also be in src/ features/ filename.js
- Using createSlice from reduxjs

- Creating components / Header / Header.jsx
- / Footer / Footer.jsx
- index.js to export components

- In App.jsx
Create loading state whenever need to do something on network, so which things are late
- To do conditional rendering of Loading or Data

- Created loading state, dispatch and initialize the useEffect
- Apply conditional rendering in return 

- Create Provider and Store in main.jsx to run app


## 7: Production Grade Components

- In production grade the each input fields are components
- With all set parameters
- So that it can be used any place

- Created container/container components

- Filled Footer / with premade code
- Filled Header with custom code
- container.jsx created
- LogoutBtn Created

- Header Navigation Created
- Button.jsx Creating

- Forward ref (useRef) examples
(Input & Select Component)

**UseFull**
- Different Input field, using where is Login page, but state is at Input Field which need to use at Input field

- Creating input.jsx <!-- May create function problem -->


## 8: How to use Hook Form in Production

**Assignment**
If there is nothing in pass in className then it will be null, so it is better to have empty string in className in Destructing.

- Creating Select Dropdown Btn: components/Select.jsx
- Creating Postcard: component/Postcard.jsx

Starting **react-hook-form** from This lecture.

For scalability using `React-hook-form`
- Creating SignUp Components
- Login Component

- Learning about **AuthLayout** at components/AuthLayout.jsx
Creating as protected container to provide the protection.

## 9: Adding Form and Slug Values in React

- Created RTE and then how to take its control
- Create PostFrom.jsx for post update

Interview Question: in PostFrom React.useEffect Watch Subscription.

## 10: Building Pages in React
Adding all remaining imports to components/index.js

Creating the pages in folder.
- AddPost.jsx
- AllPosts.jsx
- EditPost.jsx
- Home.jsx
- Login.jsx
- Signup.jsx
- Post.jsx


Creating router in main.jsx

## 11: CORS and Debugging

Important parts in debugging

- pages/ imports in main.jsx
- logoutHandler not used in LogoutBtn
- CORS Error handled in appwrite app
- Project > Overview > Add Platform > Web > Name: ProjectName > Hostname: localhost

Debugging Mistakes:
- Regex problem in Login and Signup
- Signup and Login Content Problem

- Also Check routes properly

- Header Navigation UI Problem
<!-- Problem in tinymce editor api -->

- Auth Reducers store declaration in empty object
- Logout li circle and Style
- post-form code problem file and userData
- RTE API Problem
- Tinymce editor problem

### More Improvement Scope

- Working on Redux
- Creating another postSlice reducer
- So getting post directly from the store without web requests

- Understanding better authLayout
- Understanding how forward ref used (two use)
- RTE understanding 'Controller'

- Image compression in appwrite/storage/compressions


## 12: Deploy App into Production

- Put App in Seprate Folder
- Create Repository on GitHub
- Push the App Folder on GitHub
- Check Properly .gitignore file ans Readme.md
- Add -> Commit -> Create Branch -> Add remote -> Push

- Go to Vercel App
- Create an Account 
- Connect or Install GitHub
- New Deployment or Choose Project
- Configuration such name, framework, build commands, etc
- Add Environment Variable
- Deploy

## 13: Assignments in React

Overview and Learnings

- Signup, Login, Logout using appwrite sdk
- Redux/context
- Routing
- CRUD in Blog text
- File handling

Summary
- Auth
- Database
- File Management

Clone any repository (ex:freeAPI)
- Then do npm install
- Creating .env from .env.sample
- Replace CORS_ORIGIN Url to localhost

Get the MongoDB Atlas Connection String
- Db Deployment -> Create -> Cluster Shared (free)
- Db Access -> Add New User -> Fill Data 
-> Read Write Any Database -> Add User
- Network Access -> Add IP Address -> '0.0.0.0' -> Confirm
- Db Deployment -> Connect -> Compass -> Copy URI 

- In App Env Replace copied MONGO_URI 
- Remove '/' At last
- Check script to run app

There are API such as backend for different categories
- First Learn from public API
- Then Go for specific category


## Further No Need to learn more things and go for project means practice on api than watching tutorials

**Learn Important About CORS**