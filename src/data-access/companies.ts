import { db } from "@/db";

export async function getCompanies() {
  return await db.query.companies.findMany();
}
