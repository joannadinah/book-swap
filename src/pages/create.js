import Link from "next/link.js";
import styled from "styled-components";
import { useRouter } from "next/router";
import Form from "../../components/Form/index";
// import { StyledLink } from "../components/StyledLink.js";
import useSWR from "swr";
import { useSession } from "next-auth/react";

// const StyledBackLink = styled(StyledLink)`
//   justify-self: flex-start;
// `;

const StyledH2 = styled.h2`
color: #784f41;
font-weight: bold;
font-size: 2rem;
padding-left: 0.3em;
font-style: roboto;
`;

export default function CreateBookPage() {
  const router = useRouter();
  const { data: session } = useSession();
  // function addPlace(place) {
  //   console.log('Place added (but not really...)');
  // }
  const books = useSWR("/api/books");

  async function addBook(book) {
    const response = await fetch("/api/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(book),
    });

    if (response.ok) {
      await response.json();
      books.mutate();
    } else {
      console.error(`Error: ${response.status}`);
    }
  }

  return (
    <>
      <StyledH2 id="add-book">add a book</StyledH2>
      <Link href="/profile/${id}">
        {/* <StyledBackLink>back</StyledBackLink> */}
      </Link>
      <Form onSubmit={addBook} id={session.user._id} formName={"add-book"} />
    </>
  );
}


// <h2 id="add-book">Add Book</h2>
//       <Link href="/" passHref legacyBehavior>
       {/* <StyledBackLink>back</StyledBackLink> */}
//       </Link>
//       <Form onSubmit={addBook} formName={"add-book"} />