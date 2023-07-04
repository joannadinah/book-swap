import useSWR from "swr";
import { useRouter } from "next/router";
import { StyledList } from "./BookList.styled";
// import { books } from "../../lib/books"
import Image from "next/image";
import styled from "styled-components"

const fetcher = (url) => fetch(url).then((r) => r.json());

const Container = styled.div`
//   position: relative;
//   display: block;
//   margin: 2em auto 5em auto;
//   height: 15rem;
padding: 5em 2em;
`;

const List = styled.ul`
    // display: block;
    // margin: 2em auto 5em auto;
    list-style: none;
    `;

const ListItem = styled.li`
    margin-bottom: 2em;
`;

export default function BookList({books}) {
    const router = useRouter();

console.log('Books: ', books);
return (<Container>
<List>
     {/* <li>hi</li> */}

{books && books.map((book, index ) => {
    return (
        <ListItem key={index}> 
        <div>
        <Image
        src={book.image}
        width={ 150 }
        height= { 200 }
        alt="book-cover"
        />
        <details>
        <summary>{book.title}</summary>
            {/* <h2>{book.title}</h2> */}
            <h5>{book.author}</h5>
            <p>{book.description}</p>
            </details> 
            </div>
        </ListItem>
    );
})}

</List>
</Container>)
}


{/* <ImageContainer>

</ImageContainer> */}
    // return(
        
    // <div>   
    // {books.map((book, index ) => (
    
    // <li key={index}> 
    // <h2>{book.title}</h2>
    // <details>
    // <summary>More Information</summary>
    // <h3>{book.author}</h3>
    // <p>{book.description}</p>
    // </details>
    // </li>
    // ))}
    // </div>
    // );

