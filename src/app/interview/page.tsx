import InterviewCard from "@/app/interview/interview-card";
import { getCompaniesUseCase } from "@/use-cases/companies";
import { getInterviewsUseCase } from "@/use-cases/interviews";

export default async function HomePage() {
  const companies = await getCompaniesUseCase();
  const interviews = await getInterviewsUseCase();

  return (
    <div className="p-4 px-2">
      <h1 className="text-2xl font-bold">Entrevistas</h1>
      {interviews.map((interview) => (
        <InterviewCard key={interview.id} interview={interview} />
      ))}
      {/* <InterviewForm companies={companies} /> */}
    </div>
  );
}
