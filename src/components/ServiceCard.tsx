import { Link } from "react-router-dom";

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
}

const ServiceCard = ({ title, description, image }: ServiceCardProps) => (
  <div className="card-clinic group">
    <div className="aspect-[4/3] overflow-hidden">
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
    <div className="p-5">
      <h3 className="font-heading font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground line-clamp-3">{description}</p>
    </div>
  </div>
);

export default ServiceCard;
