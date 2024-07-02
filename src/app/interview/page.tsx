import InterviewForm from "@/app/interview/interview-form";
import { getCompaniesUseCase } from "@/use-cases/companies";

export default async function HomePage() {
  const companies = await getCompaniesUseCase();

  return (
    <div className="">
      <InterviewForm companies={companies} />
    </div>
  );
}
