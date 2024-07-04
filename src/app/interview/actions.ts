"use server";

import { interviewExperienceSchema } from "@/lib/interviews-shared-types";
import { rateLimitByIp } from "@/lib/limiter";
import { unauthenticatedAction } from "@/lib/safe-action";
import { submitInterviewExperienceUseCase } from "@/use-cases/interviews";
import { revalidatePath } from "next/cache";

export const submitInterviewAction = unauthenticatedAction
  .createServerAction()
  .input(interviewExperienceSchema)
  .handler(async ({ input }) => {
    await rateLimitByIp({ key: "register", limit: 3, window: 30000 });

    const interview = await submitInterviewExperienceUseCase(input);

    revalidatePath("/interviews");
    return interview;
  });
