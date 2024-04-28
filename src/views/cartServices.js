import axios from "axios";
class CartService {
  async addToCart(data) {
    try {
        
        return await axios({
            method: "post",
            url: "http://3.107.38.242:5000/api/Cart/add",
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
  async getCartInfo(userId) {
    try {
        
        const res = await axios.get(`http://3.107.38.242:5000/api/Cart/${userId}`);
        return res;
    } catch (error) {
        console.log(error)    
    }
  }
  async deleteCartItem(cartId) {
    try {
      return await axios({
        method: "delete",
        url: `http://3.107.38.242:5000/api/Cart/${cartId}`,
        headers: { accepts: "*/*", "Content-Type": "application/json" },
      });
    } catch (error) {
      console.log("Cannot find cart item");
    }
  }
}
export default new CartService();
