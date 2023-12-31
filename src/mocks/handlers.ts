import { rest } from "msw";
import { tokenMock } from "./userMocks";
import { onePLant, plantsMocks } from "./plantsMocks";
import paths from "../routers/paths";
import { notLoadedPlant } from "../components/Modal/feedback";

const apiUrl = import.meta.env.VITE_APP_URL;

export const handlers = [
  rest.post(`${apiUrl}/user/login`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ token: tokenMock }));
  }),

  rest.get(`${apiUrl}/plants`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ plants: plantsMocks }));
  }),

  rest.delete(`${apiUrl}${paths.plants}/*`, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        message: "Plant removed",
      })
    );
  }),
  rest.post(`${apiUrl}/plants/add`, (_req, res, ctx) => {
    return res(ctx.status(201), ctx.json({ plant: onePLant }));
  }),

  rest.get(`${apiUrl}/plants/:idPlant`, (_req, res, cxt) => {
    return res(cxt.status(200), cxt.json({ plant: onePLant }));
  }),
];

export const errorHandlers = [
  rest.post(`${apiUrl}/user/login`, (_req, res, ctx) => {
    return res(ctx.status(401));
  }),

  rest.delete(`${apiUrl}${paths.plants}/*`, (_req, res, ctx) => {
    return res(
      ctx.status(404),
      ctx.json({
        message: "Plant could not be removed",
      })
    );
  }),

  rest.get(`${apiUrl}/plants`, (_req, res, cxt) => {
    const invalidAuthorization = "Can't get the list of plants";
    cxt.set(`Authorization`, invalidAuthorization);
    return res(cxt.status(401));
  }),

  rest.post(`${apiUrl}/plants/add`, (_req, res, ctx) => {
    return res(
      ctx.status(404),
      ctx.json({ message: "Plant could not be added" })
    );
  }),

  rest.get(`${apiUrl}/plants/:idPlant`, (_req, res, cxt) => {
    return res(cxt.status(404), cxt.json({ error: notLoadedPlant.message }));
  }),
];
