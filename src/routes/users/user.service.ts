import { Injectable } from '@nestjs/common';
import { UserDto } from './user.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
  private users: User[] = [];

  signup(data: UserDto): User {
    const user = {
      username: data.username,
      avatar: data.avatar,
    };
    this.users.push(user);
    return user;
  }

  getUser(username: string) {
    return this.users.find((user) => user.username === username);
  }
}
