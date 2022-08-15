import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {CategoriesApi, ProductApi} from "../../connection/api/productApi";

const initialState = {
    products: [],
    categories: [],
    productById: null,
    cartProducts: [],
    currentPage: 1,
    postsPerPage: 9
}
export const getAllProductsTC = createAsyncThunk(
    'shop/getAllProductsTC',
    async () => {
        const res = await ProductApi.getAllProducts().then(data => data)
        return res.data
    }
)
export const CreateProductTC = createAsyncThunk(
    'shop/CreateProductTC',
    async (data) => {
        const res = await ProductApi.createProduct(data).then(data => data)
        return res.data
    }
)
export const getProductTC = createAsyncThunk(
    'shop/getProductTC',
    async (id) => {
        const res = await ProductApi.getProduct(id).then(data => data)
        return res.data
    }
)
export const deleteProductTC = createAsyncThunk(
    'shop/deleteProductTC',
    async (id) => {
        const res = await ProductApi.deleteProduct(id).then(data => data)
        return res
    }
)
export const getAllCategoriesTC = createAsyncThunk(
    'shop/getAllCategoriesTC',
    async () => {
        const res = await CategoriesApi.getAllCategories().then(data => data)
        return res.data
    }
)
export const CreateCategoryTC = createAsyncThunk(
    'shop/CreateCategoryTC',
    async (data) => {
        const res = await CategoriesApi.createCategory(data).then(data => data)
        return res.data
    }
)
export const ShopSlice = createSlice({
    name: 'Shop',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const index = state.cartProducts.findIndex(prod => prod.id === action.payload._id)

            if (index === -1) {
                state.cartProducts.push(action.payload);
            } else {
                const newArr = [...state.cartProducts];
                ++newArr[index].count
                state.cartProducts = newArr

            }

        },
        deleteItemFromCart: (state, action) => {
            state.cartProducts = state.cartProducts.filter(item => item._id !== action.payload)
        },
        incrementProductById: (state, action) => {
            if (state.productById._id === action.payload._id) {
                state.productById.count++
            }
        },
        decrementProductById: (state, action) => {
            if (state.productById._id === action.payload._id) {
                if ( state.productById.count === 1) {
                    return state
                } else {
                    state.productById.count--
                }

            }
        },
        incrementProduct: (state, action) => {
            state.cartProducts = state.cartProducts.map(item => {
                if (item._id === action.payload._id) {
                    item.count++
                }
                return item
            })
        },
        decrementProduct: (state, action, dispatch) => {
            state.cartProducts = state.cartProducts.map(item => {
                if (item._id === action.payload._id) {
                    if (item.count === 1) {
                        return item
                    } else {
                        item.count--
                    }
                }
                return item
            })
        },
        setCurrentPage: (state, action, dispatch) => {
            state.currentPage = action.payload
        },
        addReview: (state, action) => {
            state.productById.reviews.push(action.payload)
        }

    },
    extraReducers: {

        [getAllProductsTC.fulfilled]: (state, action) => {
            state.products = action.payload
        },
        [getAllCategoriesTC.fulfilled]: (state, action) => {
            state.categories = action.payload
        },
        [getProductTC.fulfilled]: (state, action) => {
            state.productById = action.payload
            state.productById.count = 1
            state.productById.reviews = []
        },
    }
})

export const {
    addToCart, deleteItemFromCart, incrementProduct,
    decrementProduct, setCurrentPage, incrementProductById,
    decrementProductById ,
    addReview
} = ShopSlice.actions

export default ShopSlice.reducer