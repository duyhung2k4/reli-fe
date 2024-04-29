import axios from "axios";
// const { google } = require("googleapis");
// const fs = require("fs");

class ProductService {
    // Phương thức lấy sản phẩm từ API
    async getProduct() {
        try {
            // Thực hiện yêu cầu GET đến endpoint cụ thể
            const response = await axios.get("/api/products");
            return response.data;
        } catch (error) {
            console.error("Error fetching product: ", error);
            throw error;
        }
    }
    async getProductToDemo(startRecord, count) {
        try {
            const response = await axios.get(
                `http://89.116.121.36:5000/api/SellProduct/${startRecord}/${count}`
            );
            return response.data;
        } catch (error) {
            console.error("Error fetching product: ", error);
            throw error;
        }
    }
    async addProduct(data) {
        try {

            return await axios({
                method: "post",
                url: "http://89.116.121.36:5000/api/SellProduct",
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
    // Hàm lấy thông tin sản phẩm theo id sản phẩm
    async getProductById(productId) {
        try {
            const response = await axios.get(
                `http://89.116.121.36:5000/api/SellProduct/${productId}`
            );
            return response.data;
        } catch (error) {
            console.log(error)
        }
    }
    //Hàm lấy thông tin ảnh của sản phẩm
    async getProductImg(productId) {
        try {

            const response = await axios.get(
                `http://89.116.121.36:5000/api/SellProduct/images/${productId}`
            );
            return response;
        } catch (error) {
            console.log(error)
        }
    }
    async addProductImage(data) {
        try {

            return await axios({
                method: "post",
                url: "http://89.116.121.36:5000/api/SellProduct/images",
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
    //   // Phương thức tải lên tệp lên Google Drive
    //   async uploadFileToDrive(filePath, fileName) {
    //     // Thông tin xác thực OAuth 2.0 của bạn
    //     const auth = new google.auth.GoogleAuth({
    //       keyFile: "public/googleapikey/silent-glow-421118-96cd40495c45.json", // Đường dẫn đến tệp JSON chứa thông tin xác thực
    //       scopes: "https://www.googleapis.com/auth/drive", // Phạm vi truy cập cần thiết
    //     });

    //     // Tạo một thực thể của Google Drive API
    //     const drive = google.drive({ version: "v3", auth });

    //     try {
    //       const fileMetadata = {
    //         name: fileName,
    //       };
    //       const media = {
    //         mimeType: "image/jpeg", // Loại tệp (ở đây là JPEG, bạn có thể thay đổi tùy theo loại tệp bạn đang tải lên)
    //         body: fs.createReadStream(filePath), // Đường dẫn đến tệp bạn muốn tải lên
    //       };
    //       const response = await drive.files.create({
    //         resource: fileMetadata,
    //         media: media,
    //         fields: "id",
    //       });
    //       console.log("File uploaded with ID: ", response.data.id);
    //       return response.data.id;
    //     } catch (error) {
    //       console.error("Error uploading file to Google Drive: ", error);
    //       throw error;
    //     }
    //  }
}

export default new ProductService();
