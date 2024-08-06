import styled from "@emotion/styled"
import Link from "next/link"
import { useRouter } from "next/router"
import { categoryKey } from "src/general"

const NavBar: React.FC = () => {
  const router = useRouter()
  const section = router.query.page ?? ""

  return (
    <StyledWrapper className="">
      <ul className="blog">
        {categoryKey.links.map((link) => (
          <li key={link.id} className={section === link.name ? "page" : ""}>
            <Link href={link.to}>{link.name}</Link>
          </li>
        ))}
      </ul>
      <ul className="mypage">
        {categoryKey.introduce.map((link) => (
          <li
            key={link.id}
            className={
              router.asPath === link.to || section === link.to.split("/")[1]
                ? "info-page"
                : ""
            }
          >
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

  @media (max-width: 767px) {
    flex-direction: column-reverse;
    align-items: flex-start;
    justify-content: center;
    margin: 0;
  }

  ul {
    display: flex;
    flex-direction: row;
    width: 100%;

    @media (max-width: 767px) {
      margin: 0.6rem 0;
    }

    li {
      display: block;
      margin-left: 1rem;
      color: black;

      font-size: 0.8rem;
      font-weight: 400;
      letter-spacing: 0.1em;
      text-transform: uppercase;

      @media (max-width: 767px) {
        font-size: 0.9rem;
      }
    }
  }

  .page {
    font-weight: 900;
    padding: 0px 2px;
    letter-spacing: 0.5px;

    @media (max-width: 767px) {
      text-decoration: line-through;
      color: #ff008a;
    }
  }

  .info-page {
    font-weight: 900 !important;
    color: #ff008a;
  }

  .blog {
    gap: 1.2rem;
    justify-content: space-between;
  }

  .mypage {
    justify-content: flex-end;
    li {
      font-weight: 500;
      @media (max-width: 767px) {
        font-weight: 600;
      }
    }
  }
`
