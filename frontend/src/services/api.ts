const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';

export interface Product {
  id?: string | number;
  name?: string;
  description?: string;
  price?: number;
  skuCode?: string;
  [key: string]: any;
}

/**
 * Helper function to handle fetch responses and network errors consistently
 */
async function fetchWithHandler(url: string, options: RequestInit = {}) {
  try {
    const response = await fetch(`${API_BASE_URL}${url}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      return await response.json();
    }

    // For endpoints that return plain text booleans or strings
    const text = await response.text();
    if (text === 'true') return true;
    if (text === 'false') return false;

    return text;
  } catch (error) {
    console.error(`Network request failed for ${url}:`, error);
    throw error;
  }
}

/**
 * Fetches all products from the Product Service via API Gateway
 */
export async function getProducts(): Promise<Product[]> {
  return await fetchWithHandler('/api/products');
}

/**
 * Checks if a specific product is in stock via the Inventory Service
 */
export async function checkInventory(skuCode: string): Promise<boolean> {
  return await fetchWithHandler(`/api/inventory/${skuCode}`);
}

/**
 * Places a new order via the Order Service
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function placeOrder(orderPayload: any): Promise<any> {
  return await fetchWithHandler('/api/orders', {
    method: 'POST',
    body: JSON.stringify(orderPayload),
  });
}

/**
 * Registers a new user via the User Service
 */
export async function registerUser(payload: { fullName?: string, email?: string, password?: string }): Promise<any> {
  return await fetchWithHandler('/api/auth/register', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

/**
 * Logs in a user via the User Service
 */
export async function loginUser(payload: { email?: string, password?: string }): Promise<any> {
  return await fetchWithHandler('/api/auth/login', {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify(payload),
  });
}
