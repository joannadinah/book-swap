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
padding: 2em 0.5em 2em 0.5em;
`;

const StyledProfileH3 = styled.h3`
color: #784f41;
font-weight: bold;
font-size: 3rem;
`;

const StyledProfileH4 = styled.h4`
color: #784f41;
margin-top: 2rem;
`;

const StyledOffer = styled.div`
color: #784f41;
margin-bottom: 1rem;
margin-top: 1rem;
`;



const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledButton = styled.button`
 
  margin-bottom: 5em;
  background: #ddc9b4;
  color: white;
  font-size: 0.5rem;

  padding: 0.5rem 1rem;
  box-shadow: 5px 5px 5px #784f41;
  border-radius: 1rem;
  &:hover {
    background-color: #ee6055; 
  }
`
const StyledLink = styled(Link)`
color: #784f41;
font-size: 1.5rem;
text-decoration: none;
font-weight: bold;
&:hover {
  color: #2b9348; 
}


`;

const Profile = () => {

  const { data: session } = useSession()
  const router = useRouter();
  // const {id} = router.query;
  const id = session?.user?._id
  const [ userBooks, setUserBooks] = useState([]);
  // const { data: user} = useSWR(id ? `api/users/${id}`: null)
//  if (!user) return
// session.user.
console.log("session in profile: ", session)

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
      <StyledButton onClick={() => signIn()} >Sign in</StyledButton>
    </>
    )
  }

const booksPosted = userBooks.filter(book => book.userId === id)


  console.log(booksPosted)
  return (

    <ProfileCard>
     <StyledProfileH3>Profile Page</StyledProfileH3>
    <StyledProfileH4> 
      Signed in as: {session.user.name}
    </StyledProfileH4> 
   
    <div>
      <StyledOffer>Books I offer:</StyledOffer>

      {userBooks.length > 0 && <UserBooks books={booksPosted} />}


      
    </div>
    <ButtonBox>
    <StyledLink href="/create"> + book
      </StyledLink>
    <StyledButton onClick={() => signOut()}>Sign out</StyledButton> 
    </ButtonBox>
    </ProfileCard>
  );
};

export default Profile;
