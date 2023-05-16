import { Account } from "types";

export function generateAccount(): Account {
  return {
    id: "1",
    username: "Username",
    acct: "Username",
    display_name: "Username",
    locked: false,
    bot: false,
    discoverable: true,
    group: false,
    created_at: "2016-03-16T00:00:00.000Z",
    note: "<p>CEO of eyou</p>",
    url: "https://localhost/@Gargron",
    avatar: "/d.jpg",
    avatar_static: "/d.jpg",
    header: "",
    header_static: "",
    followers_count: 200,
    following_count: 129,
    statuses_count: 3333,
    last_status_at: "2023-05-16",
    noindex: false,
    emojis: null, // TODO
    fields: [],
  };
}
