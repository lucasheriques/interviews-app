import { createInterview, getInterviews } from "@/data-access/interviews";
import { Interview } from "@/lib/interviews-shared-types";

export async function submitInterviewExperienceUseCase(exp: Interview) {
  const companyId = exp.companyId;

  return await createInterview({
    ...exp,
    companyId: parseInt(companyId),
  });
}

export async function getInterviewsUseCase() {
  return await getInterviews();
}
