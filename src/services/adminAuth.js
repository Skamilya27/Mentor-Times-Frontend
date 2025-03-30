import axios from "axios";
import baseUrl from "../conf/config";

export class AdminAuthService {
  async login({ email, password }) {
    try {
      const response = await axios.post(`${baseUrl}/admin/login`, {
        email,
        password,
      });
      if (response.data.token) {
        localStorage.setItem("admin_token", response.data.token);
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data.token}`;
      }
      return response.data;
    } catch (error) {
      throw error.response?.data || "Admin login failed";
    }
  }

  logout() {
    localStorage.removeItem("admin_token");
    delete axios.defaults.headers.common["Authorization"];
  }

  getToken() {
    return localStorage.getItem("admin_token");
  }

  isAuthenticated() {
    return !!this.getToken();
  }
}

const adminAuthService = new AdminAuthService();
export default adminAuthService;
