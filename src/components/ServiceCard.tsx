import { Link } from "react-router-dom";
import { LucideIcon, ArrowRight } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
}

const ServiceCard = ({ icon: Icon, title, description, link }: ServiceCardProps) => {
  return (
    <Link
      to={link}
      className="group block bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-teal/30 hover:-translate-y-1"
    >
      <div className="w-14 h-14 rounded-xl bg-teal/10 flex items-center justify-center mb-4 group-hover:bg-teal/20 transition-colors">
        <Icon className="w-7 h-7 text-teal" />
      </div>
      <h3 className="font-display font-semibold text-lg text-foreground mb-2 group-hover:text-teal transition-colors">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
        {description}
      </p>
      <div className="flex items-center gap-2 text-teal text-sm font-medium">
        Learn More
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
};

export default ServiceCard;
