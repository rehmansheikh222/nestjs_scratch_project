import { Controller, Get } from "@nestjs/common"

@Controller('/app')
export class AppController {
    @Get('/root')
    getRootRoute(){
        return 'Hi there!'
    }

    @Get('/bye')
    getByeRoute(){
        return 'Bye There!!'
    }
}