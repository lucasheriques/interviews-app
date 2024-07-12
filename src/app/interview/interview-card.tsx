import { InterviewWithCompany } from "@/lib/interviews-shared-types";

interface Props {
  interview: InterviewWithCompany;
}

function InterviewCard({ interview }: Props) {
  return <div>{interview.company.name}</div>;
}

export default InterviewCard;
