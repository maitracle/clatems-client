export const getAuthToken = () => localStorage.getItem('authTokenState');
export const setAuthToken = (authToken: string) => localStorage.setItem('authTokenState', authToken);
export const removeAuthToken = () => localStorage.removeItem('authTokenState');
