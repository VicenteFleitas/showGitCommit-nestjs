import { Module } from '@nestjs/common';
import { CommitController } from 'src/commit/commit.controller';
@Module({
  imports: [],
  controllers: [CommitController]
})
export class AppModule {}
