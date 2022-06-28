import { AnimatePresence } from "framer-motion";

import Layout from "../components/layouts/layout";
import { GlobalStyles } from "../global/styles/global.styled";

if (typeof window !== 'undefined') {
    window.history.scrollRestoration = 'manual'
  }

export default function App ({Component, router, pageProps}) {
    return <>
        <GlobalStyles/>
        <Layout router={router}>
            <AnimatePresence
                 exitBeforeEnter
                 initial={true}
                 onExitComplete={() => {
                   if (typeof window !== 'undefined') {
                     window.scrollTo({ top: 0 })
                   }
                 }}
            >
                <Component {...pageProps} key={router.route} />
            </AnimatePresence>
        </Layout>
    </>
}