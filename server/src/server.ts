import dotenv from 'dotenv';
import path from 'node:path';
import express from 'express';
import routes from './routes/index.js';
import sequelize from './config/connection.js';

dotenv.config();
const root = process.cwd();

const app = express();
const PORT = process.env.PORT || 3001;

// Serves static files in the entire client's dist folder
app.use(express.static('../client/dist'));

// Middleware to parse incoming requests
app.use(express.json());
app.use(routes);

// Wild card route to serve the index.html file
app.get('*', (_req, res) => {
  res.sendFile(path.join(root, '../client/dist/index.html'));
});

// * Change force to true to drop tables and recreate them
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
});
