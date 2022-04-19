import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";


@Controller('auth')
export class AuthController {
  constructor(private authService : AuthService){}

  @Post('signup')
  signup(@Body() authBody: AuthDto){
    console.log({ authBody })
    console.log({ authBody })
    return this.authService.signup()
  }

  @Post('signin')
  signin(){
    return this.authService.signin()
  }
}


// dto - data transfer object


/* 

one way of gettting req in controllers but it only work with express.

  signup(@Req() req: Request){
    console.log({reqbody: req.body})
    return this.authService.signup()
  } 

*/