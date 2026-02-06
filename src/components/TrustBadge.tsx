import { CheckCircle2 } from "lucide-react";

interface TrustBadgeProps {
  text: string;
}

const TrustBadge = ({ text }: TrustBadgeProps) => {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium">
      <CheckCircle2 className="w-4 h-4 text-teal-light" />
      {text}
    </div>
  );
};

export default TrustBadge;
