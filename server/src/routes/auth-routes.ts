import { Router, Request, Response } from 'express';
import { User } from '../models/User.js';
import jwt from 'jsonwebtoken'; // Import the JSON Web Token library for authentication
import bcrypt from 'bcrypt'; // Import the bcrypt library for password hashing

// login function to authenticate a user
export const login = async (req: Request, res: Response) => {
  // Extract username and password from request body
  const { username, password } = req.body;

  // Find user in the database by username
  const user = await User.findOne({
    where: { username },
  });

  // If user is not found, send response
  if (!user) {
    return res.status(401).json({ message: 'Authentication failed' });
  }

  // Compare provided password with the stored hashed password
  const passwordIsValid = await bcrypt.compare(password, user.password);
  if (!passwordIsValid) { // If invalid, send response
    return res.status(401).json({ message: 'Authentication failed' });
  }

  // Get secret key from .env
  const secretKey = process.env.JWT_SECRET_KEY || '';

  // Generate JWT token for the authenticated user
  const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
  return res.json({ token }); // Send the token as a JSON response
};

// signUp function to authenticate a user
export const signUp = async (req: Request, res: Response) => {
  try {
    // Extract username, email and password from request body
    const { username, email, password } = req.body;

    // Create user in the database with provided details
    const newUser = await User.create({ username, email, password });
    
    // Get secret key from .env
    const secretKey = process.env.JWT_SECRET_KEY || '';

    // Generate JWT token for the authenticated user
    const token = jwt.sign({ username: newUser.username }, secretKey, { expiresIn: '1h' });
    res.json({ token }); // Send the token as a JSON response
    // res.status(201).json(newUser);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
}

// Create a new router instance
const router = Router();

// POST /login - Login a user
router.post('/login', login);

// POST /signup - Signup a new user
router.post('/signup', signUp);

export default router; // Export the router instance
