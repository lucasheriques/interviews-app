import { db } from "@/db";
import { interviews } from "@/db/schema";
import { InterviewExperience } from "@/lib/interviews-shared-types";

export async function getInterviews() {
  const interviews = await db.query.interviewExperience.findMany();

  return interviews;
}

export async function createInterview(interview: InterviewExperience) {
  const newInterview = await db.insert(interviews).values(interview);

  return newInterview;
}
