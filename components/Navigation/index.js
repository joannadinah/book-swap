import Link from "next/link";
import styled from "styled-components";
import { useSession } from "next-auth/react";

const StyledParent= styled.ul`
display: flex;
justify-content: space-around;
  background-color: #A7D7C5;
  margin:0;
  padding: 30px;
  position: absolute;
  top:0;
  width: 100vw;
`
const StyledListItem= styled.li`
  list-style-type: none;
  `
  const StyledButton= styled.button`
  &:hover{
    color:red;
  }
border: none;
background-color: transparent;
font-size:30px;
`

export default function Navigation() {

  const { data: session } = useSession();
 
    return (

        <nav className="navbar navbar-expand-lg fixed-bottom" style={{backgroundColor: "#e3f2fd"}}>
        <div className="container-fluid">
          <Link className="navbar-brand" href="#">Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="/">Home</Link>
              </li>
              {session && 
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href={`/profile/`}>Profile</Link>
              </li>
              }
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="/friends">Friends</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/create">Add Book</Link>
              </li>
            </ul>
            {/* <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
          </div>
        </div>
      </nav>
    
    );
  }


       /*  <StyledParent>
          <StyledListItem>
            <Link href="/" passHref>
              <StyledButton>
                Homepage
              </StyledButton>
            </Link>
          </StyledListItem>

          <StyledListItem>
            <Link href="/profile">
              <StyledButton>
                Profile
              </StyledButton>
            </Link>
          </StyledListItem>

          <StyledListItem>
            <Link href="/favorites">
              <StyledButton>
                Favorites
              </StyledButton>
            </Link>
          </StyledListItem>

          <StyledListItem>
            <Link href="/create">
              <StyledButton>
                Add Book
              </StyledButton>
            </Link>
          </StyledListItem>

        </StyledParent> */  