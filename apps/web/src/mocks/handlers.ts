import { rest } from "msw";
import { generateStatuses } from "./handlers/timelines";

const base = "/api/v1";

export const handlers = [
  rest.get(base + "/timelines/*", (req, res, ctx) => {
    return res(ctx.json(generateStatuses(5)));
  }),
];
