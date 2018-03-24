# E2E headless testing with Nightwatch and Selenium mocking the api server 

## Test your ReactJs application in isolation within a Dockerized environment

`Selenium` has defined the standard for the browser automation creating the `WebDriver API`, which are now a `W3C` specification. The `Selenium Server` communicates with clients over the http protocol and runs automated tests against all major browsers.

Some of these browsers offer the possibility to run in headless mode without displaying any UI and executing our operations in the background.
This mode reduces the execution time of the e2e tests improving our performance.

Among other interesting products which use Selenium/Webdriver, `Nightwatch` stands out for its flexibility and has a pretty simple and clean syntax.
The `Selenium` configuration is part of `Nightwatch` configuration file. For a complete example watch the file `docker/dev/e2eTest/nightwatch/nightwatch.json`. 

In this case, the headless browser is `Chrome` and Selenium isn't kicked off by the Nightwatch instance.
Selenium and Nightwatch are run on two differents Docker containers and are part of the same network with the web server container. The docker compose file for this network is `docker/dev/e2eTest/docker-compose.yml`.

The mocked data defined for this environment are set off on a json file `eseTestData.json` and compiled into the application with the `Webpack` `externals` configuration property. Their consumer is an in-memory db compiled by the preprocessor expressly for the `e2e-test` app version and used as a data repository. 
For the other compilations, development and production, the repositories are api provided by a simple api server written in `Node.js/Express`.  

The data repositories are isolated from the rest of the application and managed with my [pure-src](https://github.com/claclacla/PureSrc-A-functional-programming-approach-to-the-repository-pattern) pattern. For a repository example, open the file `src/repositories/pure-src/products.js`.

The compilation commands for development, e2e headless test and production are defined in `package.json`.

--------------------------------------------------------------------------------

### Prerequisites

What things you need to install the software

```
docker 17+
docker-compose 1.19.0+
```

--------------------------------------------------------------------------------

### Installing

```
# Get the latest snapshot
git clone https://github.com/claclacla/E2E-headless-testing-with-Nightwatch-and-Selenium-mocking-the-api-server

# Change directory
cd E2E-headless-testing-with-Nightwatch-and-Selenium-mocking-the-api-server

# Download the node docker image 
sudo docker pull node:9.2-slim

# Run a node 9.2 container
sudo docker run -d -v /your-path-to/E2E-headless-testing-with-Nightwatch-and-Selenium-mocking-the-api-server:/usr/src/app --name Node9.2 -it node:9.2-slim

# Install node packages
sudo docker exec Node9.2 npm i --prefix /usr/src/app

# Download PureSrc from the github repo
git submodule update --init --recursive

```

--------------------------------------------------------------------------------

### E2E headless testing

```
# Go to the docker e2e test folder
cd docker/e2eTest

# Create a .env file with your nightwatch folder
# and the public folder
echo "NIGHTWATCH_FOLDER=/your-path-to-the/docker/e2eTest/nightwatch
WEB_SERVER_FOLDER=/your-path-to-the/public" > .env

# Compose the docker containers
sudo docker-compose up -d

# Compile the application for production using webpack 
sudo docker exec Node9.2 npm run e2e-test --prefix /usr/src/app

# Run nightwatch tests 
sudo docker exec -it Nightwatch nightwatch -c /usr/src/app/nightwatch.json

```

--------------------------------------------------------------------------------

### Development

```
# Go to the docker dev folder
cd docker/dev

# Create a .env file with your local absolute path to the api server folder
# and the public folder
echo "API_SERVER_FOLDER=/your-path-to-the/docker/dev/apiServer
WEB_SERVER_FOLDER=/your-path-to-the/public" > .env

# Compose the docker containers
sudo docker-compose up -d

# Launch webpack 
sudo docker exec Node9.2 npm start --prefix /usr/src/app

# Open the following page on your browser
http://127.0.0.1:8080

```

--------------------------------------------------------------------------------

### Production

```
# Compile the application for production using webpack 
sudo docker exec Node9.2 npm run build --prefix /usr/src/app

```

--------------------------------------------------------------------------------

## Authors

- **Simone Adelchino** - [_claclacla_](https://twitter.com/_claclacla_)

--------------------------------------------------------------------------------

## License

This project is licensed under the MIT License

--------------------------------------------------------------------------------

## Acknowledgments

- [NightwatchJS](http://nightwatchjs.org/)
- [Selenium](http://www.seleniumhq.org/)
- [Headless Chrome](https://developers.google.com/web/updates/2017/04/headless-chrome)
- [Headless FireFox](https://developer.mozilla.org/en-US/Firefox/Headless_mode)