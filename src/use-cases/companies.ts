import { getCompanies } from "@/data-access/companies";

export async function getCompaniesUseCase() {
  return await getCompanies();
}

export type Company = Awaited<ReturnType<typeof getCompanies>>[number];
