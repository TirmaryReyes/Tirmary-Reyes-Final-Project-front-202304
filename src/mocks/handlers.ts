import { rest } from "msw";
import { tokenMock } from "./userMocks";
import { plantsMocks } from "./plantsMocks";

const apiUrl = import.meta.env.VITE_APP_URL;

export const handlers = [
  rest.post(`${apiUrl}/user/login`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ token: tokenMock }));
  }),

  rest.get(`${apiUrl}/plants`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ plants: plantsMocks }));
  }),
];

export const errorHandlers = [
  rest.post(`${apiUrl}/user/login`, (_req, res, ctx) => {
    return res(ctx.status(401));
  }),
];
