export interface User {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  gender: string;
  image: string;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  gender: string;
  image: string;
}
