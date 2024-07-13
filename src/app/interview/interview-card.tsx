import CompanyLogo from "@/components/company-logo";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { InterviewWithCompany } from "@/lib/interviews-shared-types";
import { CheckIcon, MinusIcon } from "lucide-react";
import { getTranslations } from "next-intl/server";

interface Props {
  interview: InterviewWithCompany;
}
async function InterviewDifficulty({
  difficulty,
}: {
  difficulty: Pick<InterviewWithCompany, "interviewDifficulty">["interviewDifficulty"];
}) {
  const t = await getTranslations("Interviews");
  if (difficulty === "easy") {
    return (
      <Badge variant="success">
        <CheckIcon size={16} /> {t("easyInterview")}
      </Badge>
    );
  }
  if (difficulty === "medium") {
    return (
      <Badge variant="secondary">
        <MinusIcon size={16} />
        {t("mediumInterview")}
      </Badge>
    );
  }
  return <Badge variant="destructive">{t("hardInterview")}</Badge>;
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
