# Node + Docker Development Project Template

## Why?

This is the template project for development node in docker. Just to make sure that the server is developed in the environment that it will be run at.

## Prerequisite

- Docker - docker-compose,
- Node.js - Npm

## Getting started

Start developing by run // or detach if you would like

```
$ docker-compose up --build

// or //

$ make dev
```

While in another tab of terminal is able to install dependencies

```
$ npm install foo
```

then

```
$ docker-compose run --rm install

// or //

$ make install
```

to install dependencies to server without terminating docker service.

Node.js inspector configuration with VScode is also included.
Take a look at `.vscode/launch.json`
