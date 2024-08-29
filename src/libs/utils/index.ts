import { colors } from "src/styles"
import { TSection } from "src/general"

export function formatDate(date: any, local: any = "en-US") {
  const d = new Date(date)
  const options: any = {
    month: "short",
    day: "numeric",
    year: "numeric",
  }
  const res = d.toLocaleDateString(local, options)
  return res
}

export function capitalizeFirstLetter(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1)
}

export function getSectionColor(section: TSection): string {
  switch (section) {
    case TSection.tech:
      return colors.light.indigo6
    case TSection.articles:
      return colors.light.pink5
    case TSection.notes:
      return colors.light.yellow5
    case TSection.work:
      return colors.light.green6
    default:
      return colors.light.red10
  }
}
