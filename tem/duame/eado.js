// Ensure the MongoDB client is connected before attempting to access the database
if (client.isConnected()) {
  const db = client.db('mydatabase');
  // Perform database operations here
} else {
  console.error('Database client is not connected.');
}
