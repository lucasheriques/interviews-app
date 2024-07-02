import { db } from "@/db";
import { interviewExperience } from "@/db/schema";
import { InterviewExperience } from "@/lib/interviews-shared-types";

export async function submitInterviewExperienceUseCase(
  exp: InterviewExperience
) {
  // TODO: validate if company exists

  const companyId = exp.companyId;

  return await db.insert(interviewExperience).values({
    ...exp,
    companyId: parseInt(companyId),
  });
}
