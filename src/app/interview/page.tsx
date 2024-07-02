import {
  InterviewExperience,
  interviewExperienceSchema,
} from "@/lib/interviews-shared-types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

/**
 * Build a form component for collecting interview_experiences
 *  export const interviewExperience = sqliteTable("interview_experience", {
  companyId: integer("company_id", { mode: "number" })
  position: text("position").notNull(),
  receivedOffer: integer("received_offer", { mode: "boolean" }).notNull(),
  acceptedOffer: integer("accepted_offer", { mode: "boolean" }).notNull(),
  experience: text("experience", {
    enum: ["positive", "negative", "neutral"],
  }).notNull(),
  workStyle: text("work_style", {
    enum: ["hybrid", "remote", "onsite"],
  }).notNull(),
  interviewQuestions: text("interview_questions").notNull(),
  interViewDifficulty: text("interview_difficulty", {
    enum: ["easy", "medium", "hard"],
  }).notNull(),
})
 */

export default async function HomePage() {
  const form = useForm<InterviewExperience>({
    resolver: zodResolver(interviewExperienceSchema),
  });

  return <div className="grid grid-cols-2 gap-4"></div>;
}
