import styled from "@emotion/styled"
import Link from "next/link"
import { TCategory } from "src/types"

const NavBar: React.FC = () => {
  const links = [
    { id: 1, name: "Archive", to: `/${TCategory.post}` },
    { id: 2, name: "Books", to: `/${TCategory.books}` },
    { id: 3, name: "Journal", to: `/${TCategory.journal}` },
    { id: 4, name: "Work", to: `/${TCategory.work}` },
  ]
  return (
    <StyledWrapper className="">
      <ul>
        {links.map((link) => (
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
  flex-shrink: 0;
  ul {
    display: flex;
    flex-direction: row;
    li {
      display: block;
      margin-left: 1rem;
      color: ${({ theme }) => theme.colors.gray11};
    }
  }
`
