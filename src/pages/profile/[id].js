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


const ProfileCard = styled.div`
padding-top: 50px;
display: flex;
flex-direction: column;
width: 100vw;
height:100vh;
`;

// const StyledProfileH3 = styled.h3`
// color: #784f41;
// font-weight: bold;
// `;

// const StyledProfileH4 = styled.h4`
// color: #784f41;
// `;

// const StyledOffer = styled.p`
// color: #784f41;
// `;

// const HeadlineProfile = styled.h3`
//   margin-top: 30em;
//   color: #784f41
// `;

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
  const {id} = router.query;
  const [ userBooks, setUserBooks] = useState([]);
  // const { data: user} = useSWR(id ? `api/users/${id}`: null)
//  if (!user) return
// session.user.
console.log(session?.user)
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
  console.log("## ----> postedBook-ID: ", booksPosted.id)
  return (

    <ProfileCard>
    <HeadlineProfile>Profile Page</HeadlineProfile> 
    <StyledProfileH4> 
      Signed in as: {session.user.name}
    </StyledProfileH4> 
    <div>
      <StyledOffer>Books I offer:</StyledOffer>

      {userBooks.length > 0 && <UserBooks books={booksPosted} />}

      <Link href="/create"> + book
      </Link>
    </div>
    <StyledButton onClick={() => signOut()}>Sign out</StyledButton> 
    </ProfileCard>
  );
};

export default Profile;
