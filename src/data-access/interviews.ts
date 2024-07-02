import { db } from "@/db";
import { interviewExperience } from "@/db/schema";
import { InterviewExperience } from "@/lib/interviews-shared-types";

export async function getInterviews() {
  const interviews = await db.query.interviewExperience.findMany();

  return interviews;
}

export async function createInterview(interview: InterviewExperience) {
  const newInterview = await db.insert(interviewExperience).values(interview);

  return newInterview;
}
