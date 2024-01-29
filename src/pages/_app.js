import MainLayout from "@/components/MainLayout";
import "@/styles/globals.css";
import Head from "next/head";
import { useEffect, useState } from "react";

const App = ({ Component, pageProps }) => {
const [isInit, setInit] = useState(false);

    useEffect(() => {
        setInit(true);
    }, []);

    if (!isInit) {
        return null;
    }

    return (
        <>
            <Head>
                <title>Tutorial</title>
            </Head>
            <MainLayout>
                <Component {...pageProps} />
            </MainLayout>
        </>
    );
};

export default App;
