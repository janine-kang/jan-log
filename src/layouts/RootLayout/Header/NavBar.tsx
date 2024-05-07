import styled from "@emotion/styled"
import Link from "next/link"
import { TSection } from "src/types"

const NavBar: React.FC = () => {
  const links = [
    { id: 1, name: "ARCHIVE", to: `/${TSection.archive}` },
    { id: 2, name: "BOOKS", to: `/${TSection.books}` },
    { id: 3, name: "JOURNAL", to: `/${TSection.journal}` },
  ]

  const introduce = [
    { id: 4, name: "ABOUT", to: `/${TSection.about}` },
    { id: 5, name: "JANINE", to: `/${TSection.work}` },
  ]

  return (
    <StyledWrapper className="">
      <ul className="blog">
        {links.map((link) => (
          <li key={link.id}>
            <Link href={link.to}>{link.name}</Link>
          </li>
        ))}
      </ul>
      <ul className="mypage">
        {introduce.map((link) => (
          <li key={link.id}>
            <Link href={link.to}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </StyledWrapper>
  )
}

export default NavBar

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-left: 16px;
  white-space: nowrap;

  ul {
    display: flex;
    flex-direction: row;

    li {
      display: block;
      margin-left: 1rem;
      color: black;

      font-size: 0.8rem;
      font-weight: 400;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
  }

  .blog {
    gap: 1.2rem;
  }
  .mypage {
    li {
      font-weight: 500;
    }
  }
`
