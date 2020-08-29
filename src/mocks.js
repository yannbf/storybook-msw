import { setupWorker, rest } from "msw";

export const handlers = [
  rest.get("https://api.github.com/users/wrong", (req, res, ctx) => {
    console.log('mocking return for', req.url)
    return res(
      ctx.status(200),
      ctx.json({
        message: 'not found!'
      })
    );
  }),
  rest.get("https://api.github.com/users/mocked", (req, res, ctx) => {
    console.log('mocking return for', req.url)
    return res(
      ctx.status(200),
      ctx.json({
        avatar_url:
          "https://petapixel.com/assets/uploads/2020/02/ERtTRuFWkAAPWOb-800x800.jpg",
        login: 'mocked',
        name: "Mocked Joe"
      })
    );
  })
];

export const worker = setupWorker(...handlers);