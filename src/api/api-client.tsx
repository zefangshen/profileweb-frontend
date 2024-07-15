'use client';
export const BACKEND_API_URL = process.env.BACKEND_API_URL

async function fetchAPI(endpoint: string, options = {}) {
  const res = await fetch(`${BACKEND_API_URL}${endpoint}`, options);
  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }

  return res.json();
}

// define all the API calls here
export const apiClient = {
  postSubscribe: (options={}) => fetchAPI('/api/subscribe/', options),
};