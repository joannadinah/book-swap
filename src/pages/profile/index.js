import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Books from '../books';
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image"
import UserBooks from '../../../components/UserBooks';
import useSWR from "swr";
import { useState, useEffect } from 'react';
import styled from "styled-components"

const StyledButton = styled.button`
 
  margin-bottom: 5em;
  background: var(--color-water-10);
  font-size: larger;
  padding: 0.5rem 1rem;
  box-shadow: 0px 1px 5px -2px var(--color-granite);
  &:hover {
    cursor: pointer;
  }
`

const Profile = () => {

  const { data: session } = useSession()
  const router = useRouter();
  // const {id} = router.query;
  const id = session?.user?._id
  const [ userBooks, setUserBooks] = useState([]);
  // const { data: user} = useSWR(id ? `api/users/${id}`: null)
//  if (!user) return
// session.user.
console.log(session)

useEffect(() => {
  async function fetchBooks() {
    try{
      const res = await fetch(`/api/books?userId=${id}`);
      const data = await res.json();
      console.log("test data", data)
      setUserBooks(data)
    } catch (error) {
      console.error(error);
    }
  } fetchBooks();
 },[id])

  if (!session) {
    return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()} >Sign in</button>
    </>
    )
  }

const booksPosted = userBooks.filter(book => book.userId === id)
  console.log(booksPosted)
  return (

    <>
     <h3>Profile Page</h3>
    <h4> 
      Signed in as: {session.user.name}
    </h4> 
   
    <div>
      <p>Books I offer:</p>

      {userBooks.length > 0 && <UserBooks books={booksPosted} />}


      <Link href="/create"> + book
      </Link>
    </div>
    <StyledButton onClick={() => signOut()}>Sign out</StyledButton> 
    </>
  );
};

export default Profile;
