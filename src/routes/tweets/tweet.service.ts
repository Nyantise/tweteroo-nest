import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Tweet, User } from 'src/entities';
import { UserService } from '../users/user.service';

@Injectable()
export class TweetService {
  private tweets: Tweet[] = [];

  constructor(private userService: UserService) {
    this.userService = userService;
  }

  createTweet(data:Tweet): Tweet {
    const user: User = this.userService.getUser(data.username);
    if (!user) throw new HttpException('User not found!', HttpStatus.UNAUTHORIZED);

    this.tweets.push(data);
    return data;
  }
}