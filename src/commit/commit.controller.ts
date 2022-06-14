import { Controller, Get } from "@nestjs/common";

@Controller('commits')
export class CommitController {
    @Get()
    getCommits(){
        return "All Commits"
    }
}