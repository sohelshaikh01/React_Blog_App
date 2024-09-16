# File Structure

Comparing the create-react-app and vite-react-app

## Create React App

After we understand this comparison and flow 

we can make app through any way like create-react-app, vite, parcel or any other library.

goal is about understanding this is how react is get injected inside the html

+ It doesn't matter if this files presend or not, it will not make change to your app: 

- Inside node_modules: all dependencies available after its installation
- Inside gitignore: It contains the files that should get ignored by github
- Package.lock.json: All dependancies lock mean this app will work only on this version of dependencies, lock all stable version of dependencies to run the project

- Readme: Basic introduction, file related documentation
- manifest.js: Open app in mobile like web app then meta tags are readable from this file


All Work getting done in 'source/src' folder

Most important and which matters in app is: 

`index.html`: It is SPA (Single Page Application) because there is only one page and one div inside it.

here the `javascript` comes from the `index.js`

Main two libraries are most useful in `index.js`
+ `Import React` work to get all references
- It is core foundation library
+ `Import ReactDOM` it is react implementation on web

### About DOM
- DOM is know as Document Object Model
-  It is tree like structure which contain elements
- React creates it own DOM then compare it with main DOM and onlul update the area which is changed

### About index.js
In `index.js` we find one element by its Id
+ Taking its reference into a root variable like `const root = `
+ Where react create its own DOM to make comparisons
+ Then render the `App` component using root variable
+ Where we `App` is html element, this is rendering the html element through JavaScript in `index.js`
+ Where `App` itself a function which return html and rendering this `App` as the html where it is imported
+ It gives programming capabilities in html
+ The library `react-script` inject the script inside the page / index.html
It is mentioned in package.json


## Vite React App

It Doesn't provide the `react-script` inside the package.json then how script is injected in `index.html` ?

`index.html` is out of public folder

placing the file inside folder or outside is okay because it is library where this are on your choice rather than the framework

here `main.jsx` is directly linked inside the index.html

`.jsx` doesn't affect anything the app.
It can also be in create-react-app.

In Vite components name must be with `.jsx`

Similar import of libraries: React and ReactDOM

In `main.jsx` it directly render the App Component in root without taking root reference inside the variable

## This work both for method of project

```javascript
    // always use component name capitalize while import and using in jsx
    <Navbar/>

    // If more element are used in component without nesting then wrap them as follow
    // you can use only one element at the outer side of html in component
    <>
        <Elem1/>
        <Elem2/>
    </>
    // It is know as returning the fragment

    // It is good practice to name the component, function and component in import to capitalise

    // Reload after it showerr command pallete >re
```


