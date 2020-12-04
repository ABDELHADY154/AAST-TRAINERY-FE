/** @format */

class Auth {
  constructor() {
    this.Authorization = false;
  }
  Login() {
    this.Authorization = true;
  }
  Logout() {
    this.Authorization = false;
  }

  isAuthenticated() {
    return this.Authorization;
  }
}
export default new Auth();
