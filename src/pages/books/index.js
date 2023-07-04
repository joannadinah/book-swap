import { useRouter } from "next/router";
import { StyledList } from "../../../components/BookList/BookList.styled";
import { StyledButton } from "../../../components/Button/Button.styled";
import { books } from "../../../lib/books"


const fetcher = (url) => fetch(url).then((r) => r.json());

export default function Books() {
    // console.log("pages/books/index: ", books)
    const router = useRouter();

    return(
        
    <div>
    <h1>Library</h1>    
    {books.map((book, index ) => (
    <li key={index}>
    <h2>{book.title}</h2>
    <details>
    <summary>More Information</summary>
    <h3>{book.author}</h3>
    <p>{book.description}</p>
    </details>
    </li>
    ))}
    </div>
    );
}





// {/* <div className="card" style="width: 18rem;">
//     {/* <img src="..." className="card-img-top" alt="..."> */}
//     <div className="card-body">
//     <h5 className="card-title">{book.title}</h5>
//     <h3 className="card-subtitle mb-2 text-muted">{book.author}</h3>
//     <p className="card-text">{book.description}</p>
//     </div>
//     </div> */}

// export default function BookList() {
//     const router = useRouter();
//     const { data } = useSWR("/api/books");
  
//     if (!data) {
//       return <h1>Loading...</h1>;
//     }
  
//     return (
      
//       <StyledList>
//         {books.map((book) => (
//           <li key={book.id}>
//             <StyledButton
//               type="button"
//               onClick={() => router.push(`/${book.id}`)}
//             >
//               {book.name}
//             </StyledButton>
//           </li>
//         ))}
//       </StyledList>
//     );
//   }