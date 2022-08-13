import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {productsApi} from '../../connection/api/request'

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
        const res = await productsApi.getAllProducts().then(data => data)
        return res.data
    }
)
export const getProductTC = createAsyncThunk(
    'shop/getProductTC',
    async (id) => {
        const res = await productsApi.getProduct(id).then(data => data)
        return res.data
    }
)
export const getAllCategoriesTC = createAsyncThunk(
    'shop/getAllCategoriesTC',
    async () => {
        const res = await productsApi.getCategories().then(data => data)
        return res.data
    }
)
export const ShopSlice = createSlice({
    name: 'Shop',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const index = state.cartProducts.findIndex(prod => prod.id === action.payload.id)

            if (index === -1) {
                state.cartProducts.push(action.payload);
            } else {
                const newArr = [...state.cartProducts];
                ++newArr[index].count
                state.cartProducts = newArr

            }

        },
        deleteItemFromCart: (state, action) => {
            state.cartProducts = state.cartProducts.filter(item => item.id !== action.payload)
        },
        incrementProductById: (state, action) => {
            if (state.productById.id === action.payload.id) {
                state.productById.count++
            }
        },
        decrementProductById: (state, action) => {
            if (state.productById.id === action.payload.id) {
                if ( state.productById.count === 1) {
                    return state
                } else {
                    state.productById.count--
                }

            }
        },
        incrementProduct: (state, action) => {
            state.cartProducts = state.cartProducts.map(item => {
                if (item.id === action.payload.id) {
                    item.count++
                }
                return item
            })
        },
        decrementProduct: (state, action, dispatch) => {
            state.cartProducts = state.cartProducts.map(item => {
                if (item.id === action.payload.id) {
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
        [getAllProductsTC.pending]: (state, action) => {
            console.log('loading')
        },
        [getAllProductsTC.fulfilled]: (state, action) => {
            state.products = action.payload
        },
        [getAllProductsTC.rejected]: (state) => {
            console.log("что то пошло не так")
        },
        [getAllCategoriesTC.pending]: (state, action) => {
            console.log('loading')
        },
        [getAllCategoriesTC.fulfilled]: (state, action) => {
            state.categories = action.payload
        },
        [getAllCategoriesTC.rejected]: (state) => {
            console.log("что то пошло не так")
        },
        [getProductTC.pending]: (state, action) => {
            console.log('loading')
        },
        [getProductTC.fulfilled]: (state, action) => {
            state.productById = action.payload
            state.productById.count = 1
            state.productById.reviews = []
        },
        [getProductTC.rejected]: (state) => {
            console.log("что то пошло не так")
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