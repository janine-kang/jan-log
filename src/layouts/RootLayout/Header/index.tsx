import NavBar from "./NavBar"
import Logo from "./Logo"
import styled from "@emotion/styled"
import { zIndexes } from "src/styles/zIndexes"

type Props = {
  fullWidth: boolean
}

const Header: React.FC<Props> = ({ fullWidth }) => {
  return (
    <StyledWrapper>
      <div data-full-width={fullWidth} className="container">
        <Logo fullWidth={fullWidth} />
        <NavBar />
      </div>
    </StyledWrapper>
  )
}

export default Header

const StyledWrapper = styled.div`
  z-index: ${zIndexes.header};
  background-color: hsl(0deg 0% 98.55%);
  padding: 0 36px;
  height: 100px;

  @media (max-width: 767px) {
    height: auto;
  }

  .container {
    display: flex;
    flex-direction: row;
    align-items: center;

    width: 100%;
    height: 100%;
    margin: 0 auto;

    &[data-full-width="true"] {
      @media (min-width: 768px) {
        padding-left: 6rem;
        padding-right: 6rem;
        max-width: 1200px;
      }
    }

    &[data-full-width="false"] {
      @media (max-width: 767px) {
        flex-direction: column;
        height: auto;
        align-items: flex-end;
      }
    }
  }
`
