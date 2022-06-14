import { Controller, Get, Param } from "@nestjs/common";

@Controller('commits')
export class CommitController {
    @Get()
    getCommits(){
        return "All Commits"
    }
    @Get('/:commitSha')
    getCommitBySha(@Param('commitSha') commitSha: string) {
        console.log(commitSha)
        return 'Get commit by sha'
    }
}