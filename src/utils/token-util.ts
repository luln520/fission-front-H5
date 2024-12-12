export const TOKEN_KEY = 'x-access-token';

export const removeToken = (): void => {
  localStorage.remove(TOKEN_KEY);
};

export const getToken = (): string | undefined => {
  return localStorage.getItem(TOKEN_KEY);
};

export const saveToken = (token: string): void => {
  localStorage.setItem(TOKEN_KEY, token);
};
