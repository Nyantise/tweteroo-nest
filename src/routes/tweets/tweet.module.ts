import { Module } from '@nestjs/common';
import { TweetService } from './tweet.service';
import { TweetController } from './tweet.controller';
import { UserService } from '../users/user.service';

@Module({
  controllers: [TweetController],
  providers: [TweetService, UserService],
})
export class TweetsModule {}