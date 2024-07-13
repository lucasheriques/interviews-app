import InterviewCard from "@/app/interview/interview-card";
import { getInterviewsUseCase } from "@/use-cases/interviews";
import { getTranslations } from "next-intl/server";

export default async function HomePage() {
  const interviews = await getInterviewsUseCase();

  const t = await getTranslations("Interviews");

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-2xl font-bold">{t("interviewTitlePlural")}</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {interviews.map((interview) => (
          <InterviewCard key={interview.id} interview={interview} />
        ))}
      </div>
    </div>
  );
}
