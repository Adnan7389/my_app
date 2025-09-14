# My App - Express + PostgreSQL Authentication Project

A Node.js/Express project demonstrating user authentication, form handling, database integration with PostgreSQL, and basic CRUD operations.

This project was built while following [The Odin Project’s NodeJS curriculum](https://www.theodinproject.com/lessons/nodejs-using-postgresql) and then extended to include authentication.

---

## 🚀 Features

- **Express server** with modular routes and controllers.
- **PostgreSQL integration** using `pg` connection pool.
- **User authentication** with Passport.js.
- **Password hashing** using `bcryptjs`.
- **Session management** with `express-session`.
- **EJS view engine** for rendering dynamic HTML.
- **Environment variables** for DB configuration via `dotenv`.
- **SQL parameterization** to prevent SQL injection.

---

## 🛠️ Tech Stack

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [pg (node-postgres)](https://node-postgres.com/)
- [Passport.js](http://www.passportjs.org/)
- [bcryptjs](https://github.com/dcodeIO/bcrypt.js)
- [express-session](https://github.com/expressjs/session)
- [EJS](https://ejs.co/)
- [dotenv](https://github.com/motdotla/dotenv)

---

## 📂 Project Structure

```
my_app/
│── app.js               # Main entry point
│── .env                 # Environment variables
│── package.json
│
├── controllers/
│   ├── authController.js  # Authentication logic
│   └── userController.js  # User-related logic
│
├── db/
│   ├── pool.js          # PostgreSQL pool config
│   ├── queries.js       # DB query functions
│   ├── populatedb.js    # Seed script
│   └── test.js          # DB test script
│
├── routes/
│   ├── authRoute.js     # Authentication routes
│   └── userRoutes.js    # User-related routes
│
└── views/
    ├── index.ejs        # Home page
    └── sign-up-form.ejs # Sign-up form

```

---

## ⚙️ Setup & Installation

1.  **Clone the repo**
    ```bash
    git clone https://github.com/YOUR-USERNAME/my_app.git
    cd my_app
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Setup PostgreSQL**
    - Start `psql` shell
    - Create a database:
      ```sql
      CREATE DATABASE top_users;
      ```
    - Create `users` table for authentication:
      ```sql
      CREATE TABLE users (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        username VARCHAR (255) NOT NULL UNIQUE,
        password VARCHAR (255) NOT NULL
      );
      ```
    - (Optional) Create `usernames` table for simple CRUD:
        ```sql
        CREATE TABLE usernames (
          id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
          username VARCHAR (255)
        );
        ```

4.  **Configure environment variables**
    Create a `.env` file:
    ```env
    DB_USER=your_username
    DB_PASSWORD=your_password
    DB_HOST=localhost
    DB_PORT=5432
    DB_NAME=top_users
    SESSION_SECRET=your_session_secret
    ```

5.  **Run the server**
    ```bash
    node app.js
    ```
    Server will run at `http://localhost:3000`

---

## 🔑 Routes

| Method | Route      | Description                                      |
| ------ | ---------- | ------------------------------------------------ |
| GET    | `/`        | Shows welcome message for logged in user.        |
| GET    | `/sign-up` | Show form to sign up.                            |
| POST   | `/sign-up` | Create a new user.                               |
| GET    | `/log-in`  | Show form to log in.                             |
| POST   | `/log-in`  | Log in a user.                                   |
| GET    | `/log-out` | Log out a user.                                  |


---

## 📝 Example Usage

- Open `http://localhost:3000/sign-up` → Create a new user.
- Open `http://localhost:3000/log-in` → Log in with your new user.
- Open `http://localhost:3000/` → See the welcome message.
- Open `http://localhost:3000/log-out` → Log out.

---

## 📜 License

This project is licensed under the MIT License.