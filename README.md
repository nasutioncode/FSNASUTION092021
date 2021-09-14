# FSNASUTION092021

### About project

- only login and register features

**code**: `SERVER Dependencies`

- Dependecies:

  ```
  {
    "bcryptjs": "^2.4.3",
    "body-parser": "^1.19.0",
    "cors": "^2.8.5",
    "dotenv": "^10.0.0",
    "express": "^4.17.1",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^5.13.4",
    "nodemon": "^2.0.12"
  }
  ```

  **code**: `CLIENT Dependencies`

- Dependecies:
  ```
  {
    "@material-ui/core": "^4.12.3",
    "@material-ui/icons": "^4.11.2",
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^11.2.7",
    "@testing-library/user-event": "^12.8.3",
    "axios": "^0.21.1",
    "jwt-decode": "^3.1.2",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-google-login": "^5.2.2",
    "react-redux": "^7.2.4",
    "react-router-dom": "^5.2.0",
    "react-scripts": "^4.0.3",
    "redux": "^4.1.0",
    "redux-thunk": "^2.3.0",
    "web-vitals": "^1.1.2"
  }
  ```

## Base URL

- locally
  `http://localhost:3001/`

### Authentication API

- [Register](#register)
- [Login](#login)
- [Logout](#logout)

#### Register:

<details>
    <summary>Show API</summary>
    
| Method | URL                        | Description                               | Code                                                                                                                             |
|--------|----------------------------|-------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| POST   | `/user/register`        | Register new customer account with email  | REGIST  |

**Request and Response**\
**code**: `REGIST`

- Body:
  ```
  {
      name: string|required,
      email: email|string|required,
      password: string&uppercase&number|required
  }
  ```
- Response success (201):
  ```
  {
      "message": "Register successfully",
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmdWxsTmFtZSI6Ik11aGFtbWFkIEZhdGhpIiwiZW1haWwiOiJmYXRoaXNjaWVuY2UwOUBnbWFpbC5jb20iLCJ1c2VybmFtZSI6ImZhdGhpc2NpZW5jZTA5NjMzMjgiLCJpZCI6IjYwMTdiOGMxMjJlNmVkMTZmMTEzZjk2NyIsInBpY3R1cmUiOm51bGwsIm15U3Vic2NyaXB0aW9uIjp7ImN1c3RvbWVySWQiOiI2MDE3YjhjMTIyZTZlZDE2ZjExM2Y5NjciLCJwbGFuSWQiOnsibmFtZSI6IkJhc2ljIFBsYW4iLCJwcmljZVBlck1vbnRocyI6MCwicHJpY2VQZXJZZWFycyI6MCwiZGVzY3JpcHRpb24iOiJGcmVlIHBsYW4gZm9yIGFsbCB1c2VyIiwidXBkYXRlZEF0IjoiMjAyMS0wMS0zMVQyMzo1MDoxMi4xMjJaIiwiY3JlYXRlZEF0IjoiMjAyMS0wMS0zMVQyMzo1MDoxMi4xMjJaIiwic2x1ZyI6ImJhc2ljLXBsYW4iLCJpZCI6IjYwMTc0MjM0MjFmMjE3NWE0YTJlZWU3ZCJ9LCJzdWJzY3JpcHRpb25TdGFydCI6IjIwMjEtMDItMDFUMDg6MTY6MDEuMDAwWiIsInN1YnNjcmlwdGlvbkVuZCI6bnVsbCwidXBkYXRlZEF0IjoiMjAyMS0wMi0wMVQwODoxNjowMS40MDlaIiwiY3JlYXRlZEF0IjoiMjAyMS0wMi0wMVQwODoxNjowMS40MDlaIiwiaWQiOiI2MDE3YjhjMTIyZTZlZDE2ZjExM2Y5NjgifSwiaWF0IjoxNjEyMTY3MzY2LCJleHAiOjE2MTI0MjY1NjZ9.XVCxFPnxmIqqf4D7BUka8FYppTdFbSHxj6pYmL4VfaY"
  }
  ```
- Response Error (400):
  ```
      {
          "error": "error"
      }
      or
      {
          "error" : validation error
      }
  ```

**code**: `REGISTGOOGLE`

- Body:
  ```
  {
      code: string|required
  }
  ```
- Response success (201):
  ```
  {
      "message": "Register successfully",
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmdWxsTmFtZSI6Ik11aGFtbWFkIEZhdGhpIiwiZW1haWwiOiJzZXJ2aWNlLmZhdGhpc2lkZGlxaUBnbWFpbC5jb20iLCJ1c2VybmFtZSI6InNlcnZpY2UuZmF0aGlzaWRkaXFpMjQ4ODcwIiwiaWQiOiI1ZmJiMWMyYjJkOWEyZDFiMDMwNzhiOTEiLCJwaWN0dXJlIjpudWxsLCJteVN1YnNjcmlwdGlvbiI6eyJjdXN0b21lcklkIjoiNWZiYjFjMmIyZDlhMmQxYjAzMDc4YjkxIiwicGxhbklkIjp7Im5hbWUiOiJCYXNpYyBQbGFuIiwicHJpY2VQZXJNb250aHMiOjAsInByaWNlUGVyWWVhcnMiOjAsImRlc2NyaXB0aW9uIjoiRnJlZSBwbGFuIGZvciBhbGwgdXNlciIsInVwZGF0ZWRBdCI6IjIwMjAtMTEtMTJUMDM6MTI6MzAuMDA4WiIsImNyZWF0ZWRBdCI6IjIwMjAtMTEtMTJUMDM6MTI6MzAuMDA4WiIsInNsdWciOiJiYXNpYy1wbGFuIiwiaWQiOiI1ZmFjYTgxZGY0NzE4ODI4ZjU2MjMwYTMifSwic3Vic2NyaXB0aW9uU3RhcnQiOiIyMDIwLTExLTIzVDAyOjE5OjIzLjAwMFoiLCJzdWJzY3JpcHRpb25FbmQiOm51bGwsInVwZGF0ZWRBdCI6IjIwMjAtMTEtMjNUMDI6MTk6MjQuMDAxWiIsImNyZWF0ZWRBdCI6IjIwMjAtMTEtMjNUMDI6MTk6MjQuMDAxWiIsImlkIjoiNWZiYjFjMmIyZDlhMmQxYjAzMDc4YjkzIn0sImlhdCI6MTYwNjA5Nzk2OCwiZXhwIjoxNjA2MzU3MTY4fQ.2BQybraK4j3pbIcf-pZYbyr11DimIoIBh2aXH6IO8Xg"
  }
  ```
- Response error (400):
  ```
  {
      "message": "Google code not found"
  }
  ```

**code**: `IFEMAILEXIST`

- Body:
  ```
  {
      email: email|string
  }
  ```
- Response success (200):
  ```
  {
      "message": "Email available"
  }
  ```
- Response error (400):
  ```
  {
      "error": "Email doesn't available"
  }
  ```

</details>

---

#### Login:

<details>
    <summary>Show API</summary>

| Method | URL          | Description      | Code  |
| ------ | ------------ | ---------------- | ----- |
| POST   | `user/login` | login with email | LOGIN |

**Request and Response**\
**code**: `LOGIN`

- Body:
  ```
  {
      email: email|string|required|,
      password: string&uppercase&number|required|
  }
  ```
- Response success (200):
  ```
  {
      "message": "Login successfully",
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmdWxsTmFtZSI6Ik11aGFtbWFkIEZhdGhpIiwiZW1haWwiOiJzZXJ2aWNlLmZhdGhpc2lkZGlxaUBnbWFpbC5jb20iLCJ1c2VybmFtZSI6InNlcnZpY2UuZmF0aGlzaWRkaXFpMjQ4ODcwIiwiaWQiOiI1ZmJiMWMyYjJkOWEyZDFiMDMwNzhiOTEiLCJwaWN0dXJlIjpudWxsLCJteVN1YnNjcmlwdGlvbiI6eyJjdXN0b21lcklkIjoiNWZiYjFjMmIyZDlhMmQxYjAzMDc4YjkxIiwicGxhbklkIjp7Im5hbWUiOiJCYXNpYyBQbGFuIiwicHJpY2VQZXJNb250aHMiOjAsInByaWNlUGVyWWVhcnMiOjAsImRlc2NyaXB0aW9uIjoiRnJlZSBwbGFuIGZvciBhbGwgdXNlciIsInVwZGF0ZWRBdCI6IjIwMjAtMTEtMTJUMDM6MTI6MzAuMDA4WiIsImNyZWF0ZWRBdCI6IjIwMjAtMTEtMTJUMDM6MTI6MzAuMDA4WiIsInNsdWciOiJiYXNpYy1wbGFuIiwiaWQiOiI1ZmFjYTgxZGY0NzE4ODI4ZjU2MjMwYTMifSwic3Vic2NyaXB0aW9uU3RhcnQiOiIyMDIwLTExLTIzVDAyOjE5OjIzLjAwMFoiLCJzdWJzY3JpcHRpb25FbmQiOm51bGwsInVwZGF0ZWRBdCI6IjIwMjAtMTEtMjNUMDI6MTk6MjQuMDAxWiIsImNyZWF0ZWRBdCI6IjIwMjAtMTEtMjNUMDI6MTk6MjQuMDAxWiIsImlkIjoiNWZiYjFjMmIyZDlhMmQxYjAzMDc4YjkzIn0sImlhdCI6MTYwNjA5ODg1NiwiZXhwIjoxNjA2MzU4MDU2fQ.TmLYTwxlKYQ-DsYMqE9Z2-DCiv67MyeBWddY4yLLhww"
  }
  ```
- Response error (401):
  ```
  {
      "error": "Invalid username or password!"
  }
  ```

**code**: `LOGINGOOGLE`

- Body:
  ```
  {
      token: string|required
  }
  ```
- Response success (200):
  ```
  {
      "message": "Login successfully",
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmdWxsTmFtZSI6Ik11aGFtbWFkIEZhdGhpIiwiZW1haWwiOiJzZXJ2aWNlLmZhdGhpc2lkZGlxaUBnbWFpbC5jb20iLCJ1c2VybmFtZSI6InNlcnZpY2UuZmF0aGlzaWRkaXFpMjQ4ODcwIiwiaWQiOiI1ZmJiMWMyYjJkOWEyZDFiMDMwNzhiOTEiLCJwaWN0dXJlIjpudWxsLCJteVN1YnNjcmlwdGlvbiI6eyJjdXN0b21lcklkIjoiNWZiYjFjMmIyZDlhMmQxYjAzMDc4YjkxIiwicGxhbklkIjp7Im5hbWUiOiJCYXNpYyBQbGFuIiwicHJpY2VQZXJNb250aHMiOjAsInByaWNlUGVyWWVhcnMiOjAsImRlc2NyaXB0aW9uIjoiRnJlZSBwbGFuIGZvciBhbGwgdXNlciIsInVwZGF0ZWRBdCI6IjIwMjAtMTEtMTJUMDM6MTI6MzAuMDA4WiIsImNyZWF0ZWRBdCI6IjIwMjAtMTEtMTJUMDM6MTI6MzAuMDA4WiIsInNsdWciOiJiYXNpYy1wbGFuIiwiaWQiOiI1ZmFjYTgxZGY0NzE4ODI4ZjU2MjMwYTMifSwic3Vic2NyaXB0aW9uU3RhcnQiOiIyMDIwLTExLTIzVDAyOjE5OjIzLjAwMFoiLCJzdWJzY3JpcHRpb25FbmQiOm51bGwsInVwZGF0ZWRBdCI6IjIwMjAtMTEtMjNUMDI6MTk6MjQuMDAxWiIsImNyZWF0ZWRBdCI6IjIwMjAtMTEtMjNUMDI6MTk6MjQuMDAxWiIsImlkIjoiNWZiYjFjMmIyZDlhMmQxYjAzMDc4YjkzIn0sImlhdCI6MTYwNjA5ODg1NiwiZXhwIjoxNjA2MzU4MDU2fQ.TmLYTwxlKYQ-DsYMqE9Z2-DCiv67MyeBWddY4yLLhww"
  }
  ```
- Response error (401):
  ```
  {
      "error": "Invalid username or password!"
  }
  ```

</details>

---

#### Logout:

<details>
    <summary>Show API</summary>

| Method | URL            | Description                | Code   |
| ------ | -------------- | -------------------------- | ------ |
| POST   | `/user/logout` | revoke token and block him | LOGOUT |

**Request and Response**\
**code**: `LOGOUT`

- Header:
  ```
  {
      authorization: 'bearer fill token'
  }
  ```
- Response success (200):
  ```
  {
      message: Token was blocked. you logged out
  }
  ```
- Response error (401):
  ```
  {
      message: Token has been deleted
  }
  ```

</details>
