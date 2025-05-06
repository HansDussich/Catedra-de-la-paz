
import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";

interface MemoryCardProps {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  type: string;
}

const MemoryCard = ({ id, title, description, imageSrc, type }: MemoryCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="block">
        <div 
          className="memoria-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
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
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-playfair mb-2">{title}</DialogTitle>
          </DialogHeader>
          <div className="mt-2">
            <div className="mb-4 overflow-hidden rounded-lg">
              <img 
                src={imageSrc} 
                alt={title} 
                className="w-full object-cover"
              />
            </div>
            <p className="text-museo-gris">{description}</p>
            <div className="mt-6 text-right">
              <Link 
                to={`/${type}/${id}`} 
                className="inline-block px-4 py-2 bg-museo-naranja text-white font-medium rounded-md hover:bg-opacity-90 transition-colors"
              >
                Ver más detalles
              </Link>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default MemoryCard;
