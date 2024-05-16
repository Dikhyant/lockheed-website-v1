import type { GatsbyNode } from "gatsby";

export const createPages: GatsbyNode["createPages"] = async ({ actions }) => {
  const { createRedirect } = actions;

  createRedirect({
    fromPath: "*",
    toPath: "/career",
  });
};
