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
