import { SessionProvider } from "next-auth/react"
import useSWR, { SWRConfig } from "swr"
import Layout from "../../components/Layout";
import Head from "next/head";
import Script from "next/script";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";


const fetcher = (url) => fetch(url).then((r) => r.json());

export default function App({ 
  Component,
  pageProps: { session, ...pageProps }, 
}) { 

  const { data } = useSWR(`/api/books`, fetcher);

  useEffect(()=> {
    import ("bootstrap/dist/js/bootstrap")
  }, [])

  // console.log("data in app", data)
  return (
    <>
    {/* <Head><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"/></Head> */}

    {/* <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></Script> */}
    <SessionProvider session={session}>
      <SWRConfig value={{ fetcher }}>
      <Layout>
      <Component {...pageProps} data={data}/>
      </Layout>
      </SWRConfig>
    </SessionProvider>
  
    </>
  )
}

// https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent("Harry Potter und der Orden")}&key=${process.env.NEXT_PUBLIC_BOOKS_API_KEY}