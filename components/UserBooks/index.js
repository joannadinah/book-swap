import Image from "next/image";
import { styled } from "styled-components";


const List = styled.ul`
    // list-style: none;
    list-style-type: none;
    display: grid;
    // flex-direction: column;
    // justify-content: center;
    padding: 0;

    grid-template-columns: 33% 33% 33%;
    grid-template-rows: auto auto auto; 
    // column-gap: 10px;
    row-gap: 0.5em;
    
`;

const ListItem = styled.li`
    margin-bottom: 2em;
    list-style-type: none;
`;

// const ItemCard = styled.div`
//     display: block;
// margin: 0 auto 2em auto;
// width: 60%;
// `;

const StyledImage = styled.img`
display: block;
margin: 0 auto 0.5em auto;
width: 60%;
`;

export default function UserBooks({ books }) {
    // console.log('## ----> voila Books: ', books[0]._id);
    return (
        <>
        <List>
            {books.map((book) => (
                <ListItem key={book._id}>
                    
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                    <div className="card h-100">
                    <StyledImage src={book.image} className="card-img-top" alt="book-cover"/>
                    <div className="card-body">
                    <details>
                    <summary>{book.title}</summary>
                    <h5>{book.author}</h5>
                     <p className="card-text">{book.description}</p>
                     </details>
                    </div>
                    </div>
                    </div>
                    </div>
                    
                </ListItem>
            ))}
        </List>
        </>
    );
}

