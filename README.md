## To run this project
Note: Updated this with Material UI upgrade and no longer using previous material-table that deprecated. 

1.  Within project directory in a terminal, run `npm install`

2.  Navigate to /server directory and run `npm install -g json-server`.
    Then run `npm start`. Navigate to http://localhost:4000/employees to see the data. You can also see changes reflected in db.json as you make updates.

3.  Then open another terminal and make sure you're at the root level of project.
    Run `npm start`

## Notes about the creation of this project

I decided to use React for this project, so I started everything off with creating a directory and running `npx create-react-app .` within the directory.

Then I generated random data through https://www.mockaroo.com/ with the specific fields I wanted. After that I then performed a map over the data to randomly generate pictures from https://randomuser.me/.
Once I had my data in a clean json format, I added it to a db.json file to then run json-server for my mock-api.

When it came to the state of the data itself, I made use of the useState and useEffect hooks as well as props to then pass data to other components.

I felt it made sense to create a table, and in my experience I've used Material for
populating a table that readily had sort, filter, pagination, search, edit, and such.
With that said I decided to install `material-table`. I followed the examples to achieve (as close as possible) what I wanted to do for this table. Then I tested the api calls with different actions (add, edit, delete) within the table. To clarify, I used the fetch API for these calls. Furthermore, I felt it best to put all the requests in a separate service file.

I really wanted to add routing, so I figured it'd be fun to add a grid view as well.
I installed `react-router-dom` in order to achieve this and followed the documentation. Before that, I created a GridView component and moved the MaterialTable code into its own TableView component in order to achieve simple routing.

Along the way, I added styling and animations with css and Material (and Material UI).

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
