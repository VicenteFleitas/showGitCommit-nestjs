import { Module } from '@nestjs/common';
import { CommitController } from 'src/commit/commit.controller';
import { CommitService } from 'src/commit/commit.service';
@Module({
  imports: [],
  controllers: [CommitController],
  providers: [CommitService]
})
export class AppModule {}
