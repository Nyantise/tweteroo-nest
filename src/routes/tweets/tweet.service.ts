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

  getPage(page: number) {
    if (page === undefined) page = 1;

    const startIdx = (page - 1) * 15;
    const endIdx = startIdx + 15;
    const tweets = this.tweets.slice(startIdx, endIdx);
    const tweetsWithAvatar = tweets.map((tweet) => {
      const user = this.userService.getUser(tweet.username);
      return {
        ...tweet,
        avatar: user ? user.avatar : null,
      };
    });
    return tweetsWithAvatar;
  }

  getUserTweets(username: string) {
    const user: User = this.userService.getUser(username);
    if (!user) return [];
    
    const tweetsWithAvatar = this.tweets
      .filter((tweet) => tweet.username === username)
      .map((tweet) => ({
        ...tweet,
        avatar: user.avatar,
      }));
    return tweetsWithAvatar;
  }  
}