import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  signup(){
    console.log("Signup api clicked")
  }
  @Post('signin')
  signin(){
    console.log("Signin api clicked")
  }
  @Post('signout')
  signout(){
    console.log("Signout api clicked")
  }
}
