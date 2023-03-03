import {
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  NextApiHandler,
} from "next";
import { withIronSessionApiRoute, withIronSessionSsr } from "iron-session/next";
import { ironOptions } from "../config";

function withSessionRoute(handler: NextApiHandler) {
  return withIronSessionApiRoute(handler, ironOptions);
}

// Theses types are compatible with InferGetStaticPropsType https://nextjs.org/docs/basic-features/data-fetching#typescript-use-getstaticprops
function withSessionSsr<
  P extends { [key: string]: unknown } = { [key: string]: unknown }
>(
  handler: (
    context: GetServerSidePropsContext
  ) => GetServerSidePropsResult<P> | Promise<GetServerSidePropsResult<P>>
) {
  return withIronSessionSsr(handler, ironOptions);
}

export { withSessionRoute, withSessionSsr };