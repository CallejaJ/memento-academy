import { PrismaClient } from "@prisma/client"
import { PrismaPg } from "@prisma/adapter-pg"
import { Pool } from "pg"

const prismaClientSingleton = () => {
  const connectionString = process.env.DATABASE_URL || ""
  const pool = new Pool({ connectionString })
  const adapter = new PrismaPg(pool)
  return new PrismaClient({ adapter })
}

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>
}

// We only want to initialize Prisma on the server side
const prisma =
  typeof window === "undefined"
    ? globalThis.prisma || prismaClientSingleton()
    : (null as unknown as ReturnType<typeof prismaClientSingleton>)

export default prisma

if (process.env.NODE_ENV !== "production") {
  if (typeof window === "undefined") {
    globalThis.prisma = prisma
  }
}
