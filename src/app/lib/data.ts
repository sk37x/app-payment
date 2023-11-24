'use server'
import axios from 'axios';
import type { Product, ProductPrice } from './definitions';

const apiClient = axios.create({
	baseURL: process.env.STRIPE_URL,
});

apiClient.interceptors.request.use(async (config) => {
	config.headers["Authorization"] = `Bearer ${process.env.STRIPE_PRIVATE_KEY}`;
	return config;
});


export const fetchProductItems = async () => {
    return apiClient.get("/v1/products")
        .then(async(res) => {
            let data:Product[] = res.data.data
         
            return data;
        })
        .catch(err => err);
}

export const fetchProductPrice = async(price_id: string) => {
    return await apiClient.get(`/v1/prices/${price_id}`)
    .then(res => {
        return res.data;
    })
    .catch(err => err);
    
}