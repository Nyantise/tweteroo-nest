import { TweetController } from "./tweets/tweet.controller";
import { TweetService } from "./tweets/tweet.service";
import { UserController } from "./users/user.controller";
import { UserService } from "./users/user.service";

export const controllers = [TweetController, UserController];
export const services = [TweetService, UserService];