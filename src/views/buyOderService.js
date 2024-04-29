import axios from "axios";
class BuyOrderService {
    async addItemToBuyOder(data) {
        try {
            return await axios({
                method: "post",
                url: "http://89.116.121.36:5000/api/BuyOrder",
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
    async getByOrderById(userId) {
        try {    
            const res = await axios.get(
                `http://89.116.121.36:5000/api/BuyOrder/user/${userId}`
            );
            return res;
        } catch (error) {
            console.log(error)
        }
    }
    async getByOrderBySellerName(sellerName) {
        try {
            const res = await axios.get(
                `http://89.116.121.36:5000/api/BuyOrder/seller/${sellerName}`
            );
            return res;
        } catch (error) {
            console.log(error)
        }
    }
    async updateStatus(id) {
        try {
            const response = await axios.put(
                `http://89.116.121.36:5000/api/BuyOrder/${id}/update-status`
            );
            return response.data;
        } catch (error) {
            console.error("Error updating buy order status:", error);
            throw error;
        }
    }
}
export default new BuyOrderService();
