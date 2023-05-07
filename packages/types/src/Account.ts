export interface BaseAccount {
  id: string;
  username: string;
  acct: string;
  url: string;
  display_name: string;
  avatar: string;
}

export interface Account extends BaseAccount {}
