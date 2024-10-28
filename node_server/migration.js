require('dotenv').config();
const mysql = require('mysql2');

// Create a MySQL connection using environment variables
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    return console.error('Error connecting to the database: ' + err.stack);
  }
  console.log('Connected to MySQL');

  // Function to run migration queries
  const runMigration = (query, description) => {
    connection.query(query, (err, results) => {
      if (err) {
        console.error(`Error creating ${description}:`, err);
      } else {
        console.log(`${description} created or already exists.`);
      }
    });
  };

  // SQL query to create the contact table if it doesn't exist
  const createContactTableQuery = `
    CREATE TABLE IF NOT EXISTS contact (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      email VARCHAR(100) NOT NULL,
      subject VARCHAR(150),
      message TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;

  // Run migrations
  runMigration(createContactTableQuery, 'Contact table');

  // Close the connection after all migrations
  connection.end((err) => {
    if (err) {
      console.error('Error closing the connection:', err);
      return;
    }
    console.log('Connection closed');
  });
});
