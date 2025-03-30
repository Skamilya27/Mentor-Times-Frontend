import axios from "axios";
import baseUrl from "../conf/config";

export class AuthorAuthService {
  async login({ email, password }) {
    try {
      const response = await axios.post(`${baseUrl}/author/login`, {
        email,
        password,
      });
      if (response.data.token) {
        localStorage.setItem("author_token", response.data.token);
        axios.defaults.headers.common["Authorization"] = `Bearer ${response.data.token}`;
      }
      return response.data;
    } catch (error) {
      throw error.response?.data || "Author login failed";
    }
  }

  logout() {
    localStorage.removeItem("author_token");
    delete axios.defaults.headers.common["Authorization"];
  }

  getToken() {
    return localStorage.getItem("author_token");
  }

  isAuthenticated() {
    return !!this.getToken();
  }
}

const authorAuthService = new AuthorAuthService();
export default authorAuthService;
