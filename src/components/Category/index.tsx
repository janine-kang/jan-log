import { useRouter } from "next/router"
import React from "react"
import styled from "@emotion/styled"
import { colors } from "src/styles"
import { inter } from "src/assets"
import { getSectionColor, toTSection } from "src/libs/utils"

export const getColorClassByName = (name: string): string => {
  const section = toTSection(name.toLowerCase())
  return getSectionColor(section)
}

type Props = {
  children: string
  readOnly?: boolean
}

const Category: React.FC<Props> = ({ children }) => {
  const router = useRouter()

  const handleClick = (value: string) => {
    router.push(`/${value.toLowerCase()}`)
  }
  return (
    <StyledWrapper
      onClick={() => handleClick(children)}
      css={{
        backgroundColor: getColorClassByName(children),
        cursor: "pointer",
      }}
    >
      {children}
    </StyledWrapper>
  )
}

export default Category

const StyledWrapper = styled.div`
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  width: fit-content;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
  opacity: 0.9;
  color: ${colors.dark.gray1};
  font-family: ${inter.style.fontFamily};
`
