//import '../lib/dayjs'
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { globalStyles } from "../../styles/global";
import { DefaultLayout } from "@/layouts/DefaultLayout";
import {
  useQuery,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

globalStyles();

const queryClient = new QueryClient()

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
      <DefaultLayout title="">
        <Component {...pageProps} />
      </DefaultLayout>
      </QueryClientProvider>
    </SessionProvider>
  );
}
