export interface RegisterDTO {
  email: string;
  password: string;
  role: string;
}

export interface LoginDTO {
  email: string;
  password: string;
}

export interface LoginResponseDto {
  email: string;
  token: string;
  role: string;
}

