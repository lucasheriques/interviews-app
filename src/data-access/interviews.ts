import { db } from "@/db";
import { interviews } from "@/db/schema";
import { Interview } from "@/lib/interviews-shared-types";

export async function getInterviews() {
  return await db.query.interviews.findMany({
    with: {
      company: true,
    },
  });
}

export async function createInterview(
  interview: Omit<Interview, "companyId"> & { companyId: number },
) {
  return await db.insert(interviews).values(interview);
}
