import axios from "axios";
class LoginService {
  async loginSubmit(data) {
    try {    
        return await axios({
            method: "post",
            url: "http://3.107.38.242:5000/api/Login",
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
}
export default new LoginService();
