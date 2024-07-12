import InterviewForm from "@/app/interview/interview-form";
import { getCompaniesUseCase } from "@/use-cases/companies";
import { getInterviewsUseCase } from "@/use-cases/interviews";

export default async function HomePage() {
  const companies = await getCompaniesUseCase();
  const interviews = await getInterviewsUseCase();

  return (
    <div className="p-4 px-2">
      <pre>{JSON.stringify(interviews, null, 2)}</pre>
      <InterviewForm companies={companies} />
    </div>
  );
}
