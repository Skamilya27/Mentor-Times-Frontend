import axios from "axios";
import baseUrl from "../conf/config";

export class AuthService {
  async login({email, password}) {
    try {
      const response = await axios.post(`${baseUrl}/login`, {
        email,
        password,
      });
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
      }
      return response.data;
    } catch (error) {
      throw error.response?.data || "Login failed";
    }
  }

  async register(userData) {
    try {
      const response = await axios.post(`${baseUrl}/register`, userData);
      //TODO: if user successfully created then login directly
      return response.data;
    } catch (error) {
      throw error.response?.data || "Registration failed";
    }
  }

  logout() {
    localStorage.removeItem("token");
  }

  getToken() {
    return localStorage.getItem("token");
  }

  isAuthenticated() {
    return !!this.getToken();
  }
}

const authService = new AuthService();

export default authService;
