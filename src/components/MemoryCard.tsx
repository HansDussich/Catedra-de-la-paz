
import { Link } from "react-router-dom";

interface MemoryCardProps {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  type: string;
}

const MemoryCard = ({ id, title, description, imageSrc, type }: MemoryCardProps) => {
  return (
    <Link to={`/${type}/${id}`} className="block">
      <div className="memoria-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="h-48 overflow-hidden">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div className="p-5">
          <h3 className="text-xl font-playfair font-semibold mb-2 text-museo-negro">{title}</h3>
          <p className="text-museo-gris line-clamp-3">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default MemoryCard;
