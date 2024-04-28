import axios from "axios";
class UserService {
    async registerUser(data) {
        try {

            return await axios({
                method: "post",
                url: "http://3.107.38.242:5000/api/Users",
                headers: {
                    accepts: "*/*",
                    "Content-Type": "application/json",
                },
                data: data,
            });
        } catch (error) {
            console.log(error)
        }
    }
    async getUser() {
        try {

            return await axios({
                method: "get",
                url: "http://3.107.38.242:5000/api/Users",
            });
        } catch (error) {
            console.log(error)
        }
    }
    async getUserById(userId) {
        try {

            const res = await axios.get(`http://3.107.38.242:5000/api/Users/${userId}`);
            return res;
        } catch (error) {
            console.log(error)
        }
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
        try {

            return await axios({
                method: "get",
                url: ` http://3.107.38.242:5000/api/Users/${userId}/avatar`,
            });
        } catch (error) {
            console.log(error)
        }
    }
}

export default new UserService();
