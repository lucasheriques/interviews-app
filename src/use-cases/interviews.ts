import { db } from "@/db";
import { interviews } from "@/db/schema";
import { InterviewExperience } from "@/lib/interviews-shared-types";

export async function submitInterviewExperienceUseCase(
  exp: InterviewExperience
) {
  // TODO: validate if company exists

  const companyId = exp.companyId;

  return await db.insert(interviews).values({
    ...exp,
    companyId: parseInt(companyId),
  });
}

export async function getInterviewsUseCase() {
  return await db.query.interviews.findMany();
}
