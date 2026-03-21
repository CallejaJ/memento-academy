import fs from "fs"
import path from "path"

export function getLocalImage(relativePath: string): string {
  const filePath = path.join(process.cwd(), "public", relativePath)
  const buffer = fs.readFileSync(filePath)
  const ext = path.extname(relativePath).toLowerCase()
  const mime = ext === ".jpg" || ext === ".jpeg" ? "image/jpeg" : "image/png"
  return `data:${mime};base64,${buffer.toString("base64")}`
}
