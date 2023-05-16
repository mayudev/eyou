import { Status } from "types";
import { generateAccount } from "./accounts";

function generateStatus(): Status {
  return {
    id: "110378211575070882",
    created_at: "2023-05-16T11:50:47.521Z",
    in_reply_to_id: null,
    in_reply_to_account_id: null,
    sensitive: false,
    spoiler_text: "",
    visibility: "public",
    language: "en",
    uri: "https://mastodon.social/users/Gargron/statuses/110378211575070882",
    url: "https://mastodon.social/@Gargron/110378211575070882",
    replies_count: 28,
    reblogs_count: 61,
    favourites_count: 377,
    edited_at: null,
    content:
      "<p>Interactive content, for building interactive 3D library for Behaviour-Driven Development. Alongside HTML element for asynchronous HTTP request and interact with the server is that allows you write cross-platform desktop widgets. Closure is a task runner aiming at Facebook for other purposes. Microsoft for the result of websites. API for front-end dependencies. API. JavaScript has been traditionally implemented in which an utility toolkit which is a fast, small, and Scheme. Chrome is a simple, pluggable static type errors in software modules, defined by JavaScript. Design Patterns is a general reusable solution to use of desktop applications. QUnit is a programming using observable streams. DOM is an application more responsive. AngularJS, and libraries or other languages, even if it is a methodology and the setup and the result of their methods to parse, validate, manipulate to user interfaces. Vanilla is an application structure and possibly complex tasks. Knockout is a creational design pattern in and playing audio and variable declarations to transform a package manager.</p>",
    reblog: null,
    /*application: {
      name: "IceCubesApp",
      website: "https://github.com/Dimillian/IceCubesApp",
    },*/
    account: generateAccount(),
    media_attachments: [],
    text: "",
    /*media_attachments: [
      {
        id: "110378207830819129",
        type: "image",
        url: "https://files.mastodon.social/media_attachments/files/110/378/207/830/819/129/original/731605959212813e.jpeg",
        preview_url:
          "https://files.mastodon.social/media_attachments/files/110/378/207/830/819/129/small/731605959212813e.jpeg",
        remote_url: null,
        preview_remote_url: null,
        text_url: null,
        meta: {
          original: {
            width: 3325,
            height: 2494,
            size: "3325x2494",
            aspect: 1.3331996792301524,
          },
          small: {
            width: 554,
            height: 416,
            size: "554x416",
            aspect: 1.3317307692307692,
          },
        },
        description: "A seagull on a tiny Mediterranean island",
        blurhash: "UgDwXQR3X9of.Ao#jEoLbyt8j[jZNLt7ogj?",
      },
    ],*/
    mentions: null,
    tags: null,
    emojis: null,
    card: null,
    poll: null,
  };
}

export function generateStatuses(n: number): Status[] {
  return new Array(n).fill(generateStatus());
}
