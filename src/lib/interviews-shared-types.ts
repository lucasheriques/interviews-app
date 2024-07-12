import { getInterviewsUseCase } from "@/use-cases/interviews";
import { z } from "zod";

export const interviewFormSchema = z.object({
  companyId: z.string(),
  position: z.string(),
  receivedOffer: z.boolean(),
  acceptedOffer: z.boolean(),
  experience: z.enum(["positive", "negative", "neutral"]),
  workStyle: z.enum(["hybrid", "remote", "onsite"]),
  interviewQuestions: z.string(),
  interviewDifficulty: z.enum(["easy", "medium", "hard"]),
});

export type Interview = z.infer<typeof interviewFormSchema>;

export type InterviewWithCompany = Awaited<
  ReturnType<typeof getInterviewsUseCase>
>[number];
