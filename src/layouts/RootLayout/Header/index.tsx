import NavBar from "./NavBar"
import Logo from "./Logo"
import styled from "@emotion/styled"
import { zIndexes } from "src/styles/zIndexes"
import { TCategory } from "src/types"

type Props = {
  fullWidth: boolean
}

const Header: React.FC<Props> = ({ fullWidth }) => {
  return (
    <StyledWrapper>
      <div data-full-width={fullWidth} className="container">
        <Logo />
        <NavBar />
      </div>
    </StyledWrapper>
  )
}

export default Header

const StyledWrapper = styled.div`
  z-index: ${zIndexes.header};
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.colors.gray2};
  padding: 0 36px;
  height: 100px;

  .container {
    display: flex;
    flex-direction: row;
    align-items: center;

    width: 100%;
    max-width: 1200px;
    height: 100%;
    margin: 0 auto;

    &[data-full-width="true"] {
      @media (min-width: 768px) {
        padding-left: 6rem;
        padding-right: 6rem;
      }
    }
  }
`
