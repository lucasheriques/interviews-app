import CompanyLogo from "@/components/company-logo";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { InterviewWithCompany } from "@/lib/interviews-shared-types";
import { CheckIcon } from "lucide-react";

interface Props {
  interview: InterviewWithCompany;
}
function InterviewDifficulty({
  difficulty,
}: {
  difficulty: Pick<InterviewWithCompany, "interviewDifficulty">["interviewDifficulty"];
}) {
  if (difficulty === "easy") {
    return (
      <Badge variant="success">
        <CheckIcon size={16} /> Easy
      </Badge>
    );
  }
}

function InterviewCard({ interview }: Props) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-2 space-y-0">
        <CompanyLogo domain={interview.company.domain} />
        <CardTitle>{interview.company.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2">
          <InterviewDifficulty difficulty={interview.interviewDifficulty} />
        </div>
      </CardContent>
    </Card>
  );
}

export default InterviewCard;
