# Install Node.js

Backend runtime environment to execute JavaScript outside a browser
- nodejs.org

Terminal on project folder
-npm create vite@latest
-name project
-select react framework
-JavaScript
-Run the commands listed

Open again the project (Restart the server)
Terminal on project folder
-cd my-react-app
-npm run dev

Open from another computer
The node_modudes is not included in the repository for it size
-cd my-react-app
rm -rf node_modules package-lock.json (cleans all the node_modules folder and package-lock.json)
-npm install
this installs the dependencies listed in the package.json