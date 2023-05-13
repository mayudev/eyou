import { Account } from "./Account";

export type Visibility =
  | "public"
  | "unlisted"
  | "private"
  | "friends"
  | "direct";

export interface Status {
  id: string;
  uri: string;
  created_at: string;
  account: Account;
  content: string;
  visibility: Visibility;
  sensitive: boolean;
  spoiler_text: string;
  media_attachment: null; // TODO
  application?: null; // TODO
  mentions: null; // TODO
  tags: null; // TODO
  emojis: null; // TODO
  reblogs_count: number;
  favourites_count: number;
  replies_count: number;
  url: string | null;
  in_reply_to_id: string | null;
  in_reply_to_account_id: string | null;
  reblog: string | null;
  poll: null; // TODO
  card: null; // TODO
  language: string | null;
  text: string | null;
  edited_at: string | null;
  favourited?: boolean;
  reblogged?: boolean;
  muted?: boolean;
  bookmarked?: boolean;
  pinned?: boolean;
  filtered?: boolean;
}
