import axios from "axios";
class CollectService {
    async addCollectProduct(data) {
        try {

            return await axios({
                method: "post",
                url: "http://3.107.38.242:5000/api/CollectProduct",
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
    async addCollectProductImg(data) {
        try {

            return await axios({
                method: "post",
                url: "http://3.107.38.242:5000/api/CollectProduct/images",
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
    async getCollectProductImg(productId) {
        try {
            return await axios({
                method: "get",
                url: `http://3.107.38.242:5000/api/CollectProduct/images/${productId}`,
                headers: { accepts: "*/*", "Content-Type": "application/json" },
            });
        } catch (error) {
            console.log("Cannot find cart item");
        }
    }
}
export default new CollectService();
