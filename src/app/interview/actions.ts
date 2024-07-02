"use server";

import { interviewExperienceSchema } from "@/lib/interviews-shared-types";
import { rateLimitByIp } from "@/lib/limiter";
import { unauthenticatedAction } from "@/lib/safe-action";
import { submitInterviewExperienceUseCase } from "@/use-cases/interviews";

export const submitInterviewAction = unauthenticatedAction
  .createServerAction()
  .input(interviewExperienceSchema)
  .handler(async ({ input }) => {
    await rateLimitByIp({ key: "register", limit: 3, window: 30000 });

    return await submitInterviewExperienceUseCase(input);
  });
