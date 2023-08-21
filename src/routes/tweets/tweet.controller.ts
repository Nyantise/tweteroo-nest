import { Controller, Post, Body, HttpStatus, HttpCode } from '@nestjs/common';
import { TweetDto } from 'src/dtos';
import { TweetService } from './tweet.service';


@Controller('tweets')
export class TweetController {
  constructor(private readonly tweetService: TweetService) {}

  @HttpCode(HttpStatus.CREATED)
  @Post()
  createTweet(@Body() data: TweetDto) {
    const tweet = this.tweetService.createTweet(data);
    return {
    tweet,
    };
  }
}