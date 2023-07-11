import { rest } from "msw";

const url = "api/";

const postResult = {
  id: 101,
  title: "sample title",
  body: "sample body",
  userId: 1,
};

export const handlers = [
  rest.post(`${url}/posts`, (_req, res, ctx) => {
    return res(ctx.status(201), ctx.json(postResult));
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
