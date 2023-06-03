/*
  Client-server Architecture
    - is a computing model wherein a server hosts, delivers and manages resources that a client consumes

  Client 
    - is an application which create requests for resources from a server. A client will trigger an action and response from the server

  Server 
    - is able to host and deliver resources requested by the client. A server can even answer to multiple clients

  Node.JS
    - was created because JavaScript was originally created and conceptualized to be used for Front-end development. Node.JS is an open source environment which allows to create backend applications using JavaScript(JS)

    Note: Front-end is usually the page that we're seeing, it is usually a client that request resources from a Back-end

    Back-end is usually a server or api that serves and responds to the Front-end

    Why is Node.JS popular?
     - Performance 
       - Node.JS is one of the most performing environment for creating back-end for JS

       - NPM (Node Package Manager)
         - it is one of the largest registry for packages. Packages are methods, functions, codes that greatly helps or adds with application 

       - Familiarity
         - JS is one of the most popular programming languages and Node.JS uses JS as its primary language
*/

// Create a 'require' directive to load the HTTP module of node JS

// http contains methods and other codes which allow to create servers that lets client and servers communicated throguht HTTP. HTTP is a node.js module
let http = require("http");

// console.log(http);

/*
  We used require()method to load Node.JS modules 
   - a module is a software component or part of a program which contains one or more routine

   - the http module let node.js transfer data or let our client and server to exchange data via hypertext transfer protocol

   protocol => http://localhost:4000 <= domain
   Client and Servers communicate by sending and receiving message from each other

   Client send messages to our servers to trigger an action and these action called 'requests'.

   Servers send messages to our clients as a response. This response will contain message and resources that the client requested for.
*/

/*
  From our http module we were able to use and create a server with .createServer() method. This method allowed to create server that handles request from our clients and responds accordingly

  .createServer() has an anonymous function that handles our client requests and server response. This anonymouse function actually recieves a request object which contains details about a client's request and a response object which contains details and methods for server response

  .listen() allows us to assign a port to a server. There are several tasks and process in our computers which are also designated into their specific ports

  port is a virtual point where connection start and end 
  http://localhost:4000 - localhost is your current machine: 4000 is the port assigned to where the process/server is listening from. This is the port assigned where our server is ran. Port 4000 is popularly used for backend application. 
*/
http.createServer(function(req, res){
  console.log(req.url);
  // Routing is the way which we handle our client's request based on their endpoints

  if(req.url === "/"){
  	// .writeHead() is a method of the response object. This will allow us to address headers which are additional information about the server's response. The ifrst argument of the writeHead() is HTTP status for our response. 200 - OK

  	// The second argument is header. Content-Type allows us to tell the client that the incoming

  	// .end() ends the response of the server and sends the data or message to the client
  	res.writeHead(200, {'Content-Type': 'text/plain'})
  	res.end('Hello, mabuhay. Welcome to Philippines')
  } else if(req.url === "/Charles"){
  	res.writeHead(200, {'Content-Type': 'text/plain'})
  	res.end('Hi, I am Charles')
  } else {
  	// This will be our response if an endpoint passed in client's request is not recognized or there is no designated route for this endpoint
  	res.writeHead(404, {'Content-Type': 'text/plain'})
  	res.end('Resource cannot be found')
  }
}).listen(4000);
console.log(`Server is running at localhost:4000`);

/*
	ctrl + C = to terminate server
*/

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

