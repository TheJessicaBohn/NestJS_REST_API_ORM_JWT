import { Controller, Get } from '@nestjs/common';
// import { AppService } from './app.service';

@Controller()
export class AppController {
  // constructor(private readonly appService: AppService) {}

  //Método da solicitação -> (Read) -> CRUD
  // /home/hello
  @Get('hello') 
  getHello(): string {
    return 'Qualquer coisa';
  }

  @Get('exemplo')
  exemploDeRota(){
    return 'Exemplo de rota'
  }
}
