/**
 * Build a form component for collecting interview_experiences
 *  export const interviewExperience = sqliteTable("interview_experience", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  userId: integer("user_id", { mode: "number" })
    .references(() => users.id, { onDelete: "cascade" })
    .unique(),
  companyId: integer("company_id", { mode: "number" })
    .references(() => company.id, { onDelete: "cascade" })
    .unique()
    .notNull(),
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

import { z } from "zod";

const interviewExperienceSchema = z.object({
  companyId: z.string(),
  position: z.string(),
  receivedOffer: z.boolean(),
  acceptedOffer: z.boolean(),
  experience: z.enum(["positive", "negative", "neutral"]),
  workStyle: z.enum(["hybrid", "remote", "onsite"]),
  interviewQuestions: z.string(),
  interviewDifficulty: z.enum(["easy", "medium", "hard"]),
});

export default async function HomePage() {
  return <div className="grid grid-cols-2 gap-4"></div>;
}
