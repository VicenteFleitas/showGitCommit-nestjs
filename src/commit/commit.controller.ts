import { Controller, Get, Param } from "@nestjs/common";
import { CommitService } from "./commit.service";
import { CommitResponse } from "./commit.model";

@Controller('commits')
export class CommitController {
    @Get()
    async getCommits(){
        let commit = null;
        try {
            let commitService = new CommitService();
            commit = await commitService.getCommit('https://api.github.com/repos/vicentefleitas/canvas-platform-game/commits');
        } catch (e) {
            console.log("Error: ", e);
        }
        return new CommitResponse(commit);
    }
    @Get('/:commitSha')
    getCommitBySha(@Param('commitSha') commitSha: string) {
        console.log(commitSha)
        return 'Get commit by sha'
    }
}