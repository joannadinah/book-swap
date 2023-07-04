import useSWR from "swr";
import { useRouter } from "next/router";
// import { books } from "../../lib/books"
import Image from "next/image";
import styled from "styled-components"

const fetcher = (url) => fetch(url).then((r) => r.json());

const Container = styled.div`
//   position: relative;
//   display: block;
//   margin: 2em auto 5em auto;
//   height: 15rem;
padding: 8em 2em;
`;

const List = styled.ul`
list-style-type: none;
display: flex;
flex-direction: column;
justify-content: center;
padding: 0;
`;

const ListItem = styled.li`
    
    list-style-type: none;
    
`;
const ItemCard = styled.div`
    display: block;
margin: 0 auto 2em auto;
width: 60%;
`;

const StyledImage = styled.img`
display: block;
margin: 0 auto 0.5em auto;
width: 60%;
`;

export default function BookList({books}) {
    const router = useRouter();

console.log('Books: ', books);
return (<Container>


<List>
     
     {books && books.map((book, index ) => {
         return (
             <ListItem key={index}> 
             
             <StyledImage
             src={book.image}
             // width={ 150 }
             // height= { 200 }
             alt="book-cover"
             />
             <ItemCard>
             <details>
             <summary>{book.title}</summary>
                 <h5>{book.author}</h5>
                 <p>{book.description}</p>
                 </details> 
                 </ItemCard>
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

