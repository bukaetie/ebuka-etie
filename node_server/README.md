# Ebuka Etie Portfolio - Server Side

This is the server-side of **Ebuka Etie Portfolio**, a portfolio website built with Node.js, Express, and MySQL. The server handles contact form data and more.

## Tech Stack
- **Runtime**: [Node.js](https://nodejs.org/)
- **Framework**: [Express](https://expressjs.com/)
- **Database**: [MySQL](https://www.mysql.com/)
- **Authentication**: JWT (JSON Web Tokens)
- **CORS**: [cors](https://www.npmjs.com/package/cors)

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/proto-codes/ebuka-etie.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd ebuka-etie-server
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Set up the database**:
   - Create a MySQL database named `ebuka_etie_db`.
   - Import the SQL schema from the provided SQL file (if available) or run the command:
   ```bash
   npm run migrate
   ```

5. **Environment variables**:
   - Create a `.env` file in the root of the project.
   - Add the following lines to configure your database and JWT secret:
     ```bash
     DB_HOST=localhost
     DB_USER=your_db_user
     DB_PASSWORD=your_db_password
     DB_NAME=ebuka_etie_db
     JWT_SECRET=your_jwt_secret

     PORT=5000
     ```

## Running the Server

1. **Start the server**:

   ```bash
   npm run server
   ```

2. **API Endpoints**:
   - Application: `/api/*`

## Testing
You can test the API endpoints using tools like [Postman](https://www.postman.com/) or [cURL](https://curl.se/).

## Structure

   node_server/
   ├── config/
   │   └── db.js
   ├── controllers/
   ├── middleware/
   ├── routes/
   ├── server.js
   ├── package.json
   ├── .env
   └── ...

## License

This project is licensed under the MIT License.
