import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  async login(loginDto: { username: string; password: string }) {
    return {
      access_token: 'fake-jwt-token',
      refresh_token: 'fake-refresh-token',
      token_type: 'Bearer',
      expires_in: 3600,
    };
  }
}
