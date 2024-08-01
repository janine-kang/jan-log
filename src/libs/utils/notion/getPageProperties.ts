import { getTextContent, getDateValue } from "notion-utils"
import { NotionAPI } from "notion-client"
import { BlockMap, CollectionPropertySchemaMap } from "notion-types"
import { customMapImageUrl } from "./customMapImageUrl"

// 각 Contents 값 통신해오는 부분으로 추정
async function getPageProperties(
  id: string,
  block: BlockMap,
  schema: CollectionPropertySchemaMap | undefined
) {
  if (!schema) {
    return undefined
  }

  const api = new NotionAPI()
  const rawProperties = Object.entries(block?.[id]?.value?.properties || [])

  /**
   * 🐯 rawProperties [
   * * 🐯 rawProperties [
   * * 🐯 rawProperties [
  [ 'NX\\Q', [ [Array] ] ],
  [ 'WxpT', [ [Array] ] ],
  [ 'Xvje', [ [Array] ] ],
  [ '`gQ~', [ [Array] ] ],
  [ 'd]hq', [ [Array] ] ],
  [ 'ppED', [ [Array] ] ],
  [ 'sD^m', [ [Array] ] ],
  [ 'wz|S', [ [Array] ] ],
  [ '~rC=', [ [Array] ] ],
  [ 'title', [ [Array] ] ],
  [ 'f211bdc0-ee00-4186-9a7d-f68c055ec2ee', [ [Array] ] ]
]
   */

  const excludeProperties = ["date", "select", "multi_select", "person", "file"]
  const properties: any = {}

  // rawProperties 크기만큼 돌아감
  for (let i = 0; i < rawProperties.length; i++) {
    const [key, val]: any = rawProperties[i]

    properties.id = id

    // if (i == 0) {
    //   console.log("🐯 rawProperties: ", rawProperties, "rawProperties end 🐯")
    //   console.log("🐯 id: ", id, "id end 🐯")
    //   // console.log("🐯 block: ", block, "block end 🐯")
    //   console.log("🐯 schema: ", schema, "schema end 🐯")
    // }

    if (schema[key]?.type && !excludeProperties.includes(schema[key].type)) {
      properties[schema[key].name] = getTextContent(val)
    } else {
      switch (schema[key]?.type) {
        case "file": {
          try {
            const Block = block?.[id].value
            const url: string = val[0][1][0][1]
            const newurl = customMapImageUrl(url, Block)
            properties[schema[key].name] = newurl
          } catch (error) {
            properties[schema[key].name] = undefined
          }
          break
        }
        case "date": {
          const dateProperty: any = getDateValue(val)
          delete dateProperty.type
          properties[schema[key].name] = dateProperty
          break
        }
        case "select": {
          const selects = getTextContent(val)
          if (selects[0]?.length) {
            properties[schema[key].name] = selects.split(",")
          }
          break
        }
        case "multi_select": {
          const selects = getTextContent(val)
          if (selects[0]?.length) {
            properties[schema[key].name] = selects.split(",")
          }
          break
        }
        case "person": {
          const rawUsers = val.flat()

          const users = []
          for (let i = 0; i < rawUsers.length; i++) {
            if (rawUsers[i][0][1]) {
              const userId = rawUsers[i][0]
              const res: any = await api.getUsers(userId)
              const resValue =
                res?.recordMapWithRoles?.notion_user?.[userId[1]]?.value
              const user = {
                id: resValue?.id,
                name:
                  resValue?.name ||
                  `${resValue?.family_name}${resValue?.given_name}` ||
                  undefined,
                profile_photo: resValue?.profile_photo || null,
              }
              users.push(user)
            }
          }
          properties[schema[key].name] = users
          break
        }
        default:
          break
      }
    }
  }

  return properties
}

export { getPageProperties as default }
