import { PrismaClient } from "@prisma/client"

const prismaClientSingleton = () => {
  // Try to get from process.env first
  const fallbackUrl = "postgresql://postgres.jmmmxgnakjefsjkhqaat:Y%40somos4@aws-1-eu-west-1.pooler.supabase.com:6543/postgres?pgbouncer=true"
  const url = process.env.DATABASE_URL || process.env.DIRECT_URL || fallbackUrl

  return new PrismaClient({
    datasourceUrl: url,
  })
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
