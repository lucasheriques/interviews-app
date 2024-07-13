import InterviewCard from "@/app/interview/interview-card";
import { getInterviewsUseCase } from "@/use-cases/interviews";

export default async function HomePage() {
  const interviews = await getInterviewsUseCase();

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-2xl font-bold">Entrevistas</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {interviews.map((interview) => (
          <InterviewCard key={interview.id} interview={interview} />
        ))}
      </div>
    </div>
  );
}
