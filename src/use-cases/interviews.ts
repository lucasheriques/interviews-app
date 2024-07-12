import { createInterview, getInterviews } from "@/data-access/interviews";
import { InterviewExperience } from "@/lib/interviews-shared-types";

export async function submitInterviewExperienceUseCase(
  exp: InterviewExperience,
) {
  // TODO: validate if company exists

  const companyId = exp.companyId;

  return await createInterview({
    ...exp,
    companyId: parseInt(companyId),
  });
}

export async function getInterviewsUseCase() {
  return await getInterviews();
}
