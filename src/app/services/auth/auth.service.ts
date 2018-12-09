import { Injectable } from "@angular/core";
import { User } from "./user.model";

@Injectable()
export class AuthService {
  private user: User = {
    name:"Konrad Reyes",
    avatar:"https://cdn.iconscout.com/icon/free/png-256/avatar-368-456320.png"
  };

  getUser() {
    return this.user;
  }
}