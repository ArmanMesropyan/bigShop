import axios from "axios";
const instance = axios.create({
    baseURL: 'https://api.escuelajs.co/api/v1/',
})

export const productsApi = {
    getAllProducts() {
        return instance.get('products').then(response => {
            return response
        })
    },
    getProduct(id) {
        return instance.get(`products/${id}`).then(response => {
            return response
        })
    },
    getCategories(){
        return instance.get('categories').then(response => {
            return response
        })
    }
}