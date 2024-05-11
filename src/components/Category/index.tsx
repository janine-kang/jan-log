import { useRouter } from "next/router"
import React from "react"
import { COLOR_SET } from "./constants"
import styled from "@emotion/styled"
import { colors } from "src/styles"
import { inter } from "src/assets"

export const getColorClassByName = (name: string): string => {
  try {
    let sum = 0
    name.split("").forEach((alphabet) => (sum = sum + alphabet.charCodeAt(0)))
    const colorKey = sum
      .toString(16)
      ?.[sum.toString(16).length - 1].toUpperCase()
    return COLOR_SET[colorKey]
  } catch {
    return COLOR_SET[0]
  }
}

type Props = {
  children: string
  readOnly?: boolean
}

const Category: React.FC<Props> = ({ readOnly = false, children }) => {
  const router = useRouter()

  const handleClick = (value: string) => {
    if (readOnly) return
    router.push(`/?category=${value.toLowerCase()}`)
  }
  return (
    <StyledWrapper
      onClick={() => handleClick(children)}
      css={{
        backgroundColor: getColorClassByName(children),
        cursor: readOnly ? "default" : "pointer",
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
