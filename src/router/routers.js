const { Router } = require("express");
const router = Router();

const userRouter = require("./userRouter");

const routes = [
  {
    path: "/user",
    route: userRouter,
  },
];

routes.forEach((r) => {
  router.use(r.path, r.route);
});

module.exports = router;
