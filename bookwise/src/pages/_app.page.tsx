//import '../lib/dayjs'
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";

import { SideBar } from "@/components/SideBar";
import { globalStyles } from "../../styles/global";
import { DefaultLayout } from "@/layouts/DefaultLayout";

globalStyles();

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <DefaultLayout title="">
        <Component {...pageProps} />
      </DefaultLayout>
    </SessionProvider>
  );
}
