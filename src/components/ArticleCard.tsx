import { Link } from "react-router-dom";

interface ArticleCardProps {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
}

const ArticleCard = ({ slug, title, excerpt, image, date, category }: ArticleCardProps) => (
  <Link to={`/tin-tuc-kien-thuc/${slug}`} className="card-clinic group block">
    <div className="aspect-[16/10] overflow-hidden">
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
    <div className="p-5">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-xs font-semibold text-primary bg-accent px-2.5 py-1 rounded-full">
          {category}
        </span>
        <span className="text-xs text-muted-foreground">{new Date(date).toLocaleDateString("vi-VN")}</span>
      </div>
      <h3 className="font-heading font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground line-clamp-2">{excerpt}</p>
    </div>
  </Link>
);

export default ArticleCard;
