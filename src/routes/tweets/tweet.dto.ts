import { IsNotEmpty, IsString } from 'class-validator';

export class TweetDto {
  @IsString()
  @IsNotEmpty({
    message: 'All fields are required!',
  })
  tweet: string;

  @IsString()
  @IsNotEmpty({
    message: 'All fields are required!',
  })
  username: string;
}