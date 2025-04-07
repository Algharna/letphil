# Express.js Node.js Projects

This set of exercises will help you practice working with Express.js middleware and routers in Node.js applications.

## Exercise 1: Basic Middleware

Create a simple Express application that uses custom middleware to:

- Log all incoming requests with timestamp
- Parse JSON body requests
- Handle basic error responses

## Exercise 2: Router Implementation

Build an Express app with separate routers for:

- User management (GET /users, POST /users, GET /users/:id)
- Product inventory (GET /products, POST /products, GET /products/:id)

## Exercise 3: Authentication Middleware

Implement a token-based authentication middleware that:

- Validates JWT tokens in request headers
- Protects specific routes
- Provides different access levels (admin vs regular user)

## Exercise 4: RESTful API with Validation

Create a complete RESTful API for a blog application with:

- Input validation middleware
- CRUD operations for posts and comments
- Proper HTTP status codes and error handling

## Exercise 5: Rate Limiting

Implement rate limiting middleware that:

- Restricts the number of requests from a single IP
- Returns appropriate status codes when limits are exceeded
- Includes configurable time windows and request counts

## Submission Guidelines

For each exercise, submit:

1. All source code files
2. A README.md explaining how to run your application
3. Examples of API requests (can be curl commands or Postman collections)
