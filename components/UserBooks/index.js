import Image from "next/image";
import { styled } from "styled-components";


const List = styled.ul`
    list-style: none;
`;

const ListItem = styled.li`
    margin-bottom: 2em;
`;


export default function UserBooks({ books }) {
    return (
        <>
        <List>
            {books.map((book) => (
                <ListItem key={book.id}>
                    
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card h-100">
                    <Image src={book.image} className="card-img-top" alt="book-cover" width={ 100 } height={500 }/>
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

