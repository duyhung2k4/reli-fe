import axios from "axios";
class CollectService {
  async addCollectProduct(data) {
    return await axios({
      method: "post",
      url: "http://3.107.38.242:5000/api/CollectProduct",
      headers: {
        accepts: "*/*",
        "Content-Type": "application/json",
      },
      data: data,
    });
  }
  async addCollectProductImg(data) {
    return await axios({
      method: "post",
      url: "http://3.107.38.242:5000/api/CollectProduct/images",
      headers: {
        accepts: "*/*",
        "Content-Type": "application/json",
      },
      data: data,
    });
  }
  async getCollectProductByUserId(userId) {
    try {
      return await axios({
        method: "get",
        url: `http://3.107.38.242:5000/api/CollectProduct/collectProduct/${userId}`,
        headers: { accepts: "*/*", "Content-Type": "application/json" },
      });
    } catch (error) {
      console.log("Cannot find cart item");
    }
  }
}
export default new CollectService();
