import axios from "axios";
const instance = axios.create({
    baseURL: 'https://crudcrud.com/api/' + 'cb2bf03c9e9349c0a27f82e5c2d10773',
})
export const ProductApi = {
    getAllProducts() {
        return instance.get('/products').then(response => {
            return response
        })
    },
    getProduct(id) {
        return instance.get(`/products/${id}`).then(response => {
            return response
        })
    },
    deleteProduct(id) {
        return instance.delete(`/products/${id}`).then(response => {
            return response
        })
    },
    createProduct(data){
        return instance.post('/products' , data).then(response => {
            return response
        })
    }
}
export const CategoriesApi = {
    getAllCategories() {
        return instance.get('/categories').then(response => {
            return response
        })
    },
    createCategory(data){
        return instance.post('/categories' , data).then(response => {
            return response
        })
    }
}