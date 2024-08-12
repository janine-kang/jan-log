import Link from "next/link"
import { useRouter } from "next/router"
import styled from "@emotion/styled"
import { inter } from "src/assets"
import { TSection } from "src/general"

type Props = {
  tagList: string[]
}

const TagList: React.FC<Props> = ({ tagList }) => {
  const router = useRouter()
  const section = router.query.page as TSection

  return (
    <List>
      {tagList.map((tag) => (
        <Tag key={tag}>
          <Link href={`/${section}/?tag=${tag}`}>{tag}</Link>
        </Tag>
      ))}
    </List>
  )
}

export default TagList

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px 0;

  @media (max-width: 767px) {
    display: none;
  }
`

const Tag = styled.li`
  display: block;
  text-align: end;
  font-family: ${inter.style.fontFamily};
  font-size: 0.8rem;
  font-weight: 400;
  line-height: 1;
  letter-spacing: 0.5px;
  text-transform: lowercase;
  span {
    word-spacing: 3px;
  }
`
