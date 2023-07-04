import { useRouter } from "next/router";
import useSWR from "swr";
import { BookCard } from "./Book.styled";


export default function Book() {
    const router = useRouter();
    const { id } = router.query;

    const { data } = useSWR(id ? `/api/books/${id}` : null);

    if (!data) {
        return <h1>Loading...</h1>;
    }

    return (
        <>
            <h2>{data.title}</h2>
            <p>Author: {data.author}</p>
            <p>Description: {data.description}</p>
        </>
    );
}

{/* <div className="card" style="width: 18rem;">
  <img src="..." className="card-img-top" alt="...">
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div> */}