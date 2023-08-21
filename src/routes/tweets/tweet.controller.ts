import { TweetDto } from './tweet.dto';
import { Controller, Post, Body, HttpStatus, HttpCode, Get, Query, HttpException, Param } from '@nestjs/common';
import { TweetService } from './tweet.service';


@Controller('tweets')
export class TweetController {
  constructor(private readonly tweetService: TweetService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  createTweet(@Body() data: TweetDto) {
    const tweet = this.tweetService.createTweet(data);
    return {
    tweet,
    };
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  getTweets(@Query('page') page: number) {
    if (page <= 0) {
      throw new HttpException('This page is invalid', HttpStatus.BAD_REQUEST);
    }

    const tweets = this.tweetService.getPage(page);
    return tweets;
  }

  @Get(':username')
  @HttpCode(HttpStatus.OK)
  getUserTweets(@Param('username') username: string) {
    const tweets = this.tweetService.getUserTweets(username);
    return tweets;
  }
}