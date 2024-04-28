import axios from "axios";
class UserService {
  async registerUser(data) {
    return await axios({
      method: "post",
      url: "http://3.107.38.242:5000/api/Users",
      headers: {
        accepts: "*/*",
        "Content-Type": "application/json",
      },
      data: data,
    });
  }
  async getUser() {
    return await axios({
      method: "get",
      url: "http://3.107.38.242:5000/api/Users",
    });
  }
  async getUserById(userId) {
    const res = await axios.get(`http://3.107.38.242:5000/api/Users/${userId}`);
    return res;
  }
  async updateUser(userId, userData) {
    try {
      const res = await axios({
        method: "put", // Hoặc "patch" nếu chỉ cập nhật một phần của thông tin người dùng
        url: `http://3.107.38.242:5000/api/Users/${userId}`,
        headers: {
          Accept: "*/*",
          "Content-Type": "application/json",
        },
        data: userData,
      });
      return res;
    } catch (error) {
      console.error("Error updating user:", error);
      throw error;
    }
  }
  //Trả về ava người dùng
  async getUserAva(userId) {
    return await axios({
      method: "get",
      url: ` http://3.107.38.242:5000/api/Users/${userId}/avatar`,
    });
  }
}

export default new UserService();
