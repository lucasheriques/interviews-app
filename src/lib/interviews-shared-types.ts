import { z } from "zod";

export const interviewExperienceSchema = z.object({
  companyId: z.number(),
  position: z.string(),
  receivedOffer: z.boolean(),
  acceptedOffer: z.boolean(),
  experience: z.enum(["positive", "negative", "neutral"]),
  workStyle: z.enum(["hybrid", "remote", "onsite"]),
  interviewQuestions: z.string(),
  interviewDifficulty: z.enum(["easy", "medium", "hard"]),
});

export type InterviewExperience = z.infer<typeof interviewExperienceSchema>;
