// packages/api/src/index.ts
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8080/api';

export interface User {
    id: string;
    name: string;
    email: string;
}

export interface Product {
    id: string;
    name: string;
    price: number;
}

export async function fetchUsers(): Promise<{ data: User[] | null; error: string | null }> {
    try {
        const response = await fetch(`${API_BASE_URL}/users`);
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to fetch users');
        }
        const data: User[] = await response.json();
        return { data, error: null };
    } catch (error: any) {
        console.error('Error fetching users:', error);
        return { data: null, error: error.message || 'An unknown error occurred' };
    }
}

export async function fetchProducts(): Promise<{ data: Product[] | null; error: string | null }> {
    try {
        const response = await fetch(`${API_BASE_URL}/products`);
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to fetch products');
        }
        const data: Product[] = await response.json();
        return { data, error: null };
    } catch (error: any) {
        console.error('Error fetching products:', error);
        return { data: null, error: error.message || 'An unknown error occurred' };
    }
}