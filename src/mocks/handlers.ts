import { rest } from "msw";

const url = "api/";

export const handlers = [
  rest.post("api/posts", (_req, res, ctx) => {
    return res(ctx.status(201));
  }),

  rest.get(`${url}/posts/:id`, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: 1,
        title: "Article No.1",
        body: "sample body 1",
        userId: 1,
      })
    );
  }),
];
