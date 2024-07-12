import { db } from "@/db";
import { interviews } from "@/db/schema";
import { InterviewExperience } from "@/lib/interviews-shared-types";

export async function getInterviews() {
  return await db.query.interviews.findMany({
    with: {
      companies: true,
    },
  });
}

export async function createInterview(
  interview: Omit<InterviewExperience, "companyId"> & { companyId: number },
) {
  return await db.insert(interviews).values(interview);
}
