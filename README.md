Here’s a clean, professional **README.md** for your project 👇

```markdown
# My App - Express + PostgreSQL Usernames Project

A simple Node.js/Express project that demonstrates form handling, database integration with PostgreSQL, and basic CRUD operations.  

This project was built while following [The Odin Project’s NodeJS curriculum](https://www.theodinproject.com/lessons/nodejs-using-postgresql).

---

## 🚀 Features

- **Express server** with modular routes and controllers.
- **PostgreSQL integration** using `pg` connection pool.
- **Environment variables** for DB configuration via `dotenv`.
- **Form handling** with POST requests.
- **SQL parameterization** to prevent SQL injection.
- **Search usernames** via query parameters.
- **Delete all usernames** with a single route.

---

## 🛠️ Tech Stack

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [pg (node-postgres)](https://node-postgres.com/)
- [dotenv](https://github.com/motdotla/dotenv)

---

## 📂 Project Structure

```

my\_app/
│── app.js               # Main entry point
│── .env                 # Environment variables
│── package.json
│
├── controllers/
│   └── userController.js
│
├── db/
│   ├── pool.js          # PostgreSQL pool config
│   ├── queries.js       # DB query functions
│   └── populatedb.js    # Seed script
│
├── routes/
│   └── userRoutes.js
│
└── views/               # (optional, if using EJS)

````

---

## ⚙️ Setup & Installation

1. **Clone the repo**
   ```bash
   git clone https://github.com/YOUR-USERNAME/my_app.git
   cd my_app
````

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Setup PostgreSQL**

   * Start `psql` shell
   * Create a database:

     ```sql
     CREATE DATABASE top_users;
     ```
   * Create `usernames` table:

     ```sql
     CREATE TABLE usernames (
       id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
       username VARCHAR (255)
     );
     ```

4. **Configure environment variables**
   Create a `.env` file:

   ```env
   DB_USER=your_username
   DB_PASSWORD=your_password
   DB_HOST=localhost
   DB_PORT=5432
   DB_NAME=top_users
   ```

5. **Run the server**

   ```bash
   node app.js
   ```

   Server will run at `http://localhost:3000`

---

## 🔑 Routes

| Method | Route     | Description                                      |
| ------ | --------- | ------------------------------------------------ |
| GET    | `/`       | List all usernames (with optional search query). |
| GET    | `/new`    | Show form to add new username.                   |
| POST   | `/new`    | Insert a new username into the DB.               |
| GET    | `/delete` | Delete all usernames from the DB.                |

**Search example**

```
GET http://localhost:3000/?search=sup
```

Returns all usernames containing `sup`.

---

## 📝 Example Usage

* Open `http://localhost:3000/new` → Add a username.
* Open `http://localhost:3000/` → See all usernames.
* Open `http://localhost:3000/?search=test` → Search for usernames containing "test".
* Open `http://localhost:3000/delete` → Delete all usernames.

---

## 📜 License

This project is licensed under the MIT License.

```

