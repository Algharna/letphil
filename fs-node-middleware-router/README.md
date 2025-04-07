# Node.js: Express Router, Controllers & Middleware

## Learning Objectives

By the end of this lesson, you will be able to:

- Understand Express.js routing fundamentals
- Implement the MVC (Model-View-Controller) architecture in Node.js apps
- Create and organize routes using Express Router
- Build reusable controllers to handle business logic
- Implement custom middleware functions for request processing
- Structure a Node.js application following best practices

## Prerequisites

- Basic knowledge of JavaScript
- Familiarity with Node.js fundamentals
- Understanding of HTTP methods (GET, POST, PUT, DELETE)
- Node.js and npm installed on your computer

## Table of Contents

1. [Introduction to Express.js](#introduction-to-expressjs)
2. [MVC Architecture Overview](#mvc-architecture-overview)
3. [Express Routing Basics](#express-routing-basics)
4. [Express Router](#express-router)
5. [Controllers](#controllers)
6. [Middleware Concepts](#middleware-concepts)
7. [Building a Complete API](#building-a-complete-api)
8. [Best Practices](#best-practices)
9. [Exercises](#exercises)
10. [Resources](#resources)

## Introduction to Express.js

Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It simplifies the process of building web applications by providing a layer of web application features without obscuring Node.js features.

## MVC Architecture Overview

The Model-View-Controller (MVC) pattern separates application concerns:

- **Model**: Data and business logic
- **View**: User interface (templates, HTML, etc.)
- **Controller**: Handles requests, processes data using Models, and returns responses

## Express Routing Basics

Routing refers to determining how an application responds to client requests to specific endpoints (URIs) and HTTP methods.

## Express Router

Express Router is a mini express application that provides routing APIs like `.use()`, `.get()`, `.param()`, and `route()`.

## Controllers

Controllers handle the application logic between models and views. They process incoming requests, interact with models, and send responses back to clients.

## Middleware Concepts

Middleware functions are functions that have access to the request object, response object, and the next middleware function. They can:

- Execute code
- Make changes to request/response objects
- End the request-response cycle
- Call the next middleware function

## Building a Complete API

We'll put everything together to build a RESTful API following MVC architecture with proper routing and middleware implementation.

## Best Practices

- Folder structure recommendations
- Error handling
- Code organization
- Performance considerations

## Exercises

1. Create a basic Express application with Router
2. Implement middleware for logging and authentication
3. Build controllers for a simple CRUD application

## Resources

- [Express.js Documentation](https://expressjs.com/)
- [MDN Web Docs - Express/Node introduction](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction)
- [Express Router Guide](https://expressjs.com/en/guide/routing.html)
- [Understanding Express.js Middleware](https://expressjs.com/en/guide/using-middleware.html)
