import { Field } from "./Field";

export interface BaseAccount {
  id: string;
  username: string;
  acct: string;
  url: string;
  display_name: string;
  note: string;
  avatar: string;
  avatar_static: string;
  header: string;
  header_static: string;
  locked: boolean;
  fields: Field[];
  emojis: null; // TODO
  bot: boolean;
  group: boolean;
  discoverable: boolean | null;
  noindex?: boolean | null; // TODO (this is always t)
  moved?: Account | null;
  suspended?: boolean;
  limited?: boolean;
  created_at: string;
  last_status_at?: string | null;
  statuses_count: number;
  followers_count: number;
  following_count: number;
}

export interface Account extends BaseAccount {}
