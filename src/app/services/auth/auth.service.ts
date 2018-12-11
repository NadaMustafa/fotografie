import { Injectable } from "@angular/core";
import { User } from "./user.model";

@Injectable()
export class AuthService {
  private user: User = {
    name:"Konrad Reyes",
    avatar:"data:image/png;base64,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"
  };

  getUser() {
    return this.user;
  }
}