import Head from "next/head"
import Header from "../header/header"
import Footer from "../footer/footer"

export default function Layout() {
    return <>
        <Head>
            <title>Next JS Starter</title>
        </Head>
        <Header/>
        <Footer/>
    </>
}