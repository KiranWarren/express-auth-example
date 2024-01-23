const express = require("express");

const { User } = require("../models/UserModel");

const router = express.Router();

// ROUTES
// Get all users from database
// localhost:3000/users/
/**
 * [
 * {
 *      userID:
 *      username:
 * },
 * {
 *      userID:
 *      username:
 * },
 * {
 *      userID:
 *      username:
 * }
 * ]
 */
router.get("/", async (request, response) => {
  let result = await User.find();
  response.json({ result });
});

// Get a user by ID
// localhost:3000/users/234313412413
/**
 * {
 *      userID:
 *      username:
 * }
 */
router.get("/:user_id", async (request, response) => {
  return null;
});

// Create a new user in the database
// localhost:3000/users/register
// request.body = {username: "admin", password: "password1"}
// respond with {jwt: 7y743hfh9fhwr8hf98fh4}
router.post("/register", async (request, response) => {
  let newUser = await User.create(request.body).catch((error) => error);
  response.json(newUser);
});

// Log in a user
// localhost:3000/users/login
// request.body = {username: "admin", password: "password1"}
// respond with {jwt: 7y743hfh9fhwr8hf98fh4}
router.post("/login", async (request, response) => {
  return null;
});

// Verify user using their jwt
// localhost:3000/users/verify
// JWT in request.headers["jwt"] or request.header["authorization"]
// respond with {jwt: 7y743hfh9fhwr8hf98fh4}
router.get("/verify", async (request, response) => {
  return null;
});

// Regenerate jwt when jwt expires
// localhost:3000/users/regen
// JWT in request.headers["jwt"] or request.header["authorization"]
// respond with {jwt: 7y743hfh9fhwr8hf98fh4}
router.get("/regen", async (request, response) => {
  return null;
});

module.exports = router;
