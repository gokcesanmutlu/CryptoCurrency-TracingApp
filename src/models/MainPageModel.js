import axios from "axios";

export default class MainPageModel {
    static async getCoins(page) {
        // offset: atlancak eleman sayısı
        // limit: kaç eleman göstereceğimi belirler
        const params = {
            offset: (page - 1) * 15,
            limit: 15,
        }
        try {
            // awaiti unutursak veriyi görceğimiz yerde promise görürüz.
            const res = await axios.get("https://api.coincap.io/v2/assets", { params })
            // params obj. içinde çünkü normalde orada options objesi olur ve onun içinde olursa params olur
            // o yüzden önce opt. objesini alıyoruz içine de params'ı tanımlıyoruz
            return res.data.data
        } catch (err) {
            console.log(err)
        }
    }
}