// import { useSession, signIn, signOut } from "next-auth/react";
import { Fragment, useEffect } from "react"
import Link from "next/link";
import BookList from "../../components/BookList"
import useSWR from "swr";
import { useSession, signIn, signOut } from "next-auth/react";
import { styled } from "styled-components";



const Wrapper = styled.div`
padding: 3em 0;
`;

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function Component({data}) {

  // const { data: session } = useSession()
  // const { data, error, isLoading } = useSWR(`/api/books`, fetcher);
  
  // if (error) return <div> Something went wrong.</div>;
  // if (isLoading) return <div> Loading...</div>;


  // console.log("books in index", books)
  console.log("data in index", data)
  const { data: session } = useSession()
  return (
    <>
    
    
      {!session && (<>Not signed in <br />
      <button onClick={() => signIn()} >Sign in</button></>)} 
      <BookList books={data}/>
    </>
  )
}