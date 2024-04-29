import axios from "axios";
class ProcurementService {
    async addProcurementProduct(data) {
        try {

            return await axios({
                method: "post",
                url: "http://89.116.121.36:5000/api/Procurement",
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
    async getProcurementProduct(userId) {
        try {

            return await axios({
                method: "get",
                url: `http://89.116.121.36:5000/api/Procurement/${userId}`,
                headers: {
                    accepts: "*/*",
                    "Content-Type": "application/json",
                },
            });
        } catch (error) {
            console.log(error)
        }
    }
    async addProcurementProductImg(data) {
        try {

            return await axios({
                method: "post",
                url: "http://89.116.121.36:5000/api/Procurement/images",
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
    async getProcurementProductImg(productId) {
        try {
            return await axios({
                method: "get",
                url: `http://89.116.121.36:5000/api/Procurement/images/${productId}`,
                headers: { accepts: "*/*", "Content-Type": "application/json" },
            });
        } catch (error) {
            console.log("Cannot find cart item");
        }
    }
}
export default new ProcurementService();
