/*
   ================
  Main Activity
  ================
  /*
	Activity: 
	Create a new http server in activity.js using the http module of node.
	This http server should run on port 8000.

	Create routes for the following endpoints:

	/
		-write the appropriate headers for our response with writeHead()
			-status 200, Content-Type: text/plain
		-end the response with .end() and send the following message:
		"Welcome to Our Page."

	/login
		-write the appropriate headers for our response with writeHead()
			-status 200, Content-Type: text/plain
		-end the response with .end() and send the following message:
		"Welcome to the Login Page. Please log in your credentials."

	/register
		-write the appropriate headers for our response with writeHead()
			-status 200, Content-Type: text/plain
		-end the response with .end() and send the following message:
		"Welcome to the Register Page. Please register your details."

	add an else which will route for the undefined and undesignated endpoints.
		-write the appropriate headers for our response with writeHead()
			-status 404, Content-Type: text/plain
		-end the response with .end() and send the following message:
		"Resource not found."


	Pushing Instructions:

	Go to Github:
		-in your pcco107 folder and access s11 folder.
		-inside s11, create a new project/repo called activity
		-untick the readme option
		-copy the git url from the clone button of your activity repo.

	Go to Gitbash:
		-go to your pcco107_<firstLetterOfYourName><lastName>_s11 folder and access activity folder
		-initialize activity folder as a local repo: git init
		-connect your local repo to our online repo: git remote add origin <gitURLOfOnlineRepo>
		-add your updates to be committed: git add .
		-commit your changes to be pushed: git commit -m "includes nodeJS intro activity"
		-push your updates to your online repo: git push origin master

	Go to Boodle:
		-copy the url of the home page for your repo (URL on browser not the URL from clone button) and link it to laboratory canvas account main activity
*/
let http = require("http");

http.createServer(function(req, res){
	console.log(req.url);

	 if(req.url === "/"){

	res.writeHead(200, {'Content-Type': 'text/plain'})
  	res.end('Welcome to our page.')
  } else if(req.url === "/"){

  	res.writeHead(200, {'Content-Type': 'text/plain'})
  	res.end('Welcome to the Login Page. Please log in your credentials')
  } else if(req.url === "/login"){
  
  	res.writeHead(200, {'Content-Type': 'text/plain'})
  	res.end('Welcome to the Login Page. Please log in your credentials')
  } else if(req.url === "/register"){
  	res.writeHead(200, {'Content-Type': 'text/plain'})
  	res.end('Welcome to the Register Page. Please register your details.')
  } else {
  
  	res.writeHead(404, {'Content-Type': 'text/plain'})
  	res.end('Resource not found.')
  }
}).listen(8000);
console.log(`Server is running at localhost:8000`);
