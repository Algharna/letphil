# JavaScript HTTP Requests - 2 Hour Lesson Plan

## Objective

By the end of this lesson, students will understand the evolution of HTTP requests in JavaScript, including XHR, Promises, async/await, Fetch API, and Axios. They will also be able to implement HTTP requests using these methods.

## Lesson Outline

### 1. Introduction

- Brief overview of HTTP requests and their importance in web development.
- Explain the evolution of HTTP requests in JavaScript.
  - Early days: Synchronous requests and their drawbacks.
  - Introduction of XMLHttpRequest (XHR) for asynchronous requests.
  - Modern approaches: Promises, async/await, Fetch API, and Axios.

### 2. XMLHttpRequest (XHR)

- History and usage of XHR.
  - Introduced in Internet Explorer 5 for ActiveX.
  - Became a standard for making asynchronous HTTP requests.
- Basic example of making an XHR request.
- Exercise: Write a function to make a GET request using XHR to fetch data from `https://randomuser.me/api/`.
- Discussion: Limitations and drawbacks of using XHR.

<!-- xhr example -->

```javascript
function getData(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.onload = function () {
    // 200 - ok
    // 201 - created
    // 400 - bad request
    // 401 - unauthorized
    // 404 - not found
    // 500 - internal server error
    if (xhr.status >= 200 && xhr.status < 400) {
      var data = JSON.parse(xhr.responseText);
      callback(null, data);
    } else {
      callback(new Error("Request failed: " + xhr.statusText));
    }
  };
  xhr.onerror = function () {
    callback(new Error("Request failed"));
  };
  xhr.send();
}
```

### 3. Promises

- Introduction to Promises and their role in handling asynchronous operations.
  - Explanation of the Promise lifecycle: pending, fulfilled, and rejected.
  - Benefits of using Promises over traditional callback methods.
- Example of converting an XHR request to use Promises.
- Exercise: Refactor the XHR function to use Promises to fetch data from `https://randomuser.me/api/`.
- Discussion: Common pitfalls and best practices when using Promises.

<!-- promise example -->

```javascript
function getData(url) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 400) {
        var data = JSON.parse(xhr.responseText);
        resolve(data);
      } else {
        reject(new Error("Request failed: " + xhr.statusText));
      }
    };
    xhr.onerror = function () {
      reject(new Error("Request failed"));
    };
    xhr.send();
  });
}
```

### 4. async/await

- Explanation of async/await syntax and its benefits.
  - Simplifies the syntax for working with Promises.
  - Makes asynchronous code look and behave more like synchronous code.
- Example of using async/await with Promises.
- Exercise: Refactor the Promises function to use async/await to fetch data from `https://randomuser.me/api/`.
- Discussion: Error handling with try/catch in async/await.

<!-- async/await example -->

```javascript
async function getData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Request failed: " + response.statusText);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Request failed: " + error.message);
  }
}
```

### 5. Fetch API

- Introduction to the Fetch API and its advantages over XHR.
  - Cleaner and more powerful API for making HTTP requests.
  - Returns Promises, making it easier to work with modern JavaScript.
- Example of making a GET request using Fetch.
- Exercise: Write a function to make a POST request using Fetch to `https://randomuser.me/api/`.
- Discussion: Handling different response types (JSON, text, etc.) with Fetch.

<!-- fetch example -->

```javascript
function postData(url, data) {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Request failed: " + response.statusText);
      }
      return response.json();
    })
    .catch(function (error) {
      throw new Error("Request failed: " + error.message);
    });
}
```

### 6. Axios[https://axios-http.com/docs/intro]

- Introduction to Axios and its features.
  - Simplifies HTTP requests with a more intuitive API.
  - Supports older browsers and provides additional features like interceptors.
- Example of making a GET request using Axios.
- Exercise: Write a function to make a PUT request using Axios to `https://randomuser.me/api/`.
- Discussion: Comparing Axios with Fetch and when to use each.

<!-- axios example -->

```javascript
function getData(url, data) {
  return axios
    .get(url, {
      params: data,
    })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      throw new Error("Request failed: " + error.message);
    });
}
```
