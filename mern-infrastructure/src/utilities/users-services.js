// users-services.js

// Import all named exports attached to the usersAPI object
// This syntax can be helpful documenting where methods come from
import * as usersAPI from "./users-api";

export async function signUp(userData) {
  // Delegate the network request code to the users-api.js API module
  // which will ultimately return a JSON Web Tokem (JWT)
  const token = await usersAPI.signUp(userData);
  // Baby step by returning whatever is sent back by the server
  return token;
}
