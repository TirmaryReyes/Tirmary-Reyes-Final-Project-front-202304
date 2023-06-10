import { rest } from "msw";
import { tokenMock } from "./userMocks";
import { plantsMocks } from "./plantsMocks";
import paths from "../routers/paths";

const apiUrl = import.meta.env.VITE_APP_URL;

export const handlers = [
  rest.post(`${apiUrl}/user/login`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ token: tokenMock }));
  }),

  rest.get(`${apiUrl}/plants`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ plants: plantsMocks }));
  }),

  rest.delete(
    `${apiUrl}${paths.plants}/${plantsMocks[0].id}`,
    (_req, res, ctx) => {
      return res(ctx.status(200));
    }
  ),
];

export const errorHandlers = [
  rest.post(`${apiUrl}/user/login`, (_req, res, ctx) => {
    return res(ctx.status(401));
  }),

  rest.delete(
    `${apiUrl}${paths.plants}/${plantsMocks[0].id}`,
    (_req, res, ctx) => {
      return res(ctx.status(200));
    }
  ),
];
