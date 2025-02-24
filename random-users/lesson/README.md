# Random Users Screen

This screen displays random users similar to a Facebook feed.

## Features

- Display a list of random users
- Show user profile pictures, names, and brief info
- Infinite scrolling to load more users

## Technologies Used

- HTML
- CSS
- JavaScript
- Random User API

## How to Run

1. Clone the repository
2. Open `index.html` in your browser

## Code Snippet

```html
<div id="user-list"></div>
```

```css
#user-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}
```

```javascript
fetch("https://randomuser.me/api/?results=10")
  .then((response) => response.json())
  .then((data) => {
    const userList = document.getElementById("user-list");
    data.results.forEach((user) => {
      const userDiv = document.createElement("div");
      userDiv.innerHTML = `
        <img src="${user.picture.medium}" alt="${user.name.first}">
        <h3>${user.name.first} ${user.name.last}</h3>
        <p>${user.email}</p>
      `;
      userList.appendChild(userDiv);
    });
  });
```
