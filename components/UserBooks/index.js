import Image from "next/image";
import { styled } from "styled-components";


const List = styled.ul`
   
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 0;
    margin: 0px auto;
    width: auto;
    flex-wrap: wrap;
    align-content: space-between;
    align-items: stretch;
    gap: 12px;
    align-self: center;
`;

const ListItem = styled.li`
    margin-bottom: 2em;
    list-style-type: none;
    height: 100%;
    width: 30%;
    justify-self: left;
    // margin: 0.5rem;

`;

// const ItemCard = styled.div`
//     display: block;
// margin: 0 auto 2em auto;
// width: 60%;
// `;

const StyledImage = styled.img`
// display: block;
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

