# Viaplay Shows List Application
## Installation
Prerequisite: The application requires the installation of Node 8.3 at least in order to run it.
The application can be run and compiled by following the steps below:
  - Import the folder,  open the Terminal and navigate to the directory of your folder
  - Install the node dependencies by using 'npm install'
  - Run the application by using 'npm run start'
  - Use the URL http://localhost:8080/ to access the application

## Design Decisions
The task requires me to design a client end-to-end application that displays a list of shows from the Viaplay API. However, based on the data extracted, I decided to display extra information about each show on the application. The extra information being displayed is the IMDB rating together with its URL and the number of seasons for each show.

### Application Set Up

The application is written in React 16 together with Redux to handle the state management. It also uses React-Router-DOM to handle routing within the application. The application also uses Webpack to bundle and compile all the assets in the application. Other setup methods are described as follows:
  - Babel 6 is used to process the JavaScript code and its extension babel-polyfill and polyfilling are used to handle Promises.
  - SASS, PostCSS and Autofixer are used to handle styling of the application
  - ESLint and their corresponding plugins are used to automatically check the styling of the code and detect if there are any mistakes and if there are any inconsistencies
  - Babel plugins for decorator and Object Rest Spread Support
  - The application is written in ES6 


### Main Page
The main page of the application can be found in the client folder under main/ListView.js. This is where all the shows' thumbnails are displayed. This page composes of three components which are header, ShowList Component and footer. On hover, each thumbnail displays two metadata which are the IMDb rating of the show with its corresponding external link and the number of seasons for each show.

### Application Architecture
As mentioned earlier, this application is developed by using a combination of both React & Redux. Thus, the JS files are separated as as follows:

  - client/main - This is the main file of the application also known as the smart component
  - client/components - These are the dummy components
  - client/containers - This contains a provider component that has access to the store and/or redux actions and a file that handles the shows' data

There is also a utils folder that contains the actions, reducer and store modules for the redux and a file to handle fetching from the API.

The way the application works is that the store manages the states and the provider components listens to store and re-renders the application each time the store changes. The provider components then send data to the smart components that pulls property of data and sends the data as props to the dummy components. Both the dumb and smart components trigger the action 'UPDATE_SHOWS' this data is then modified by the reducer and sent to the store and the application is re-rendered again.

### State Management, Data Fetching & Error Handling

Data is fetched once by using a Higher-Order-Component (HOC) found at 'clients/containers/hoc. This component also handles error and loading handling. It is used in the ListView file as a decorator.
Axios is used for data fetching to save development time.

>
