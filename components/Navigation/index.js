import Link from "next/link";
import styled from "styled-components";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";


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
const NavWrapper = styled.div`
 & .active {font-weight: bold ; text-decoration: italic}
`;


export default function Navigation() {

  const router = useRouter();
  const active = router.pathname;
  const { data: session } = useSession();
 
    return (
        <NavWrapper>
        <nav className="navbar navbar-expand-lg fixed-bottom" style={{backgroundColor: "#ccd5ae"}}>
        <div className="container-fluid" >
          <Link style={{color: "#784f41"}} className="navbar-brand" href="#">Menu</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link style={{color: "#784f41"}} className={`nav-link ${active === "/" && "active"}`} aria-current="page" href="/">Home</Link>
              </li>
              {session && 
              <li className="nav-item">
                <Link style={{color: "#784f41"}} className={`nav-link ${active === "/profile" && "active"}`} aria-current="page" href={`/profile/`}>Profile</Link>
              </li>
              }
              <li className="nav-item">
                <Link style={{color: "#784f41"}} className={`nav-link ${active === "/friends" && "active"}`} aria-current="page" href="/friends">Friends</Link>
              </li>
              <li className="nav-item">
                <Link style={{color: "#784f41"}} className={`nav-link ${active === "/create" && "active"}`} href="/create">Add Book</Link>
              </li>
            </ul>
            {/* <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
          </div>
        </div>
      </nav>
      </NavWrapper>
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