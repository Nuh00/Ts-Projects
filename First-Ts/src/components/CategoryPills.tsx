import { useState } from "react";
import Button from "./Button";
import { ChevronLeft, ChevronRight } from "lucide-react";

type CategoryPillsProps = {
  categories: string[];
};

function CategoryPills({ categories }: CategoryPillsProps) {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [isLeftVisible, setIsLeftVisible] = useState(false);
  const [isRightVisible, setIsRightVisible] = useState(false);
¡``
  return (
    <div className="relative border overflow-x-hidden">
      <div className="absolute right-0 top-1/2 ">
        <Button>
          <ChevronRight />
        </Button>
      </div>

      <div className="flex whitespace-nowrap gap-3 transition-transform w-[max-content]">
        {categories.map((category) => (
          <Button
            onClick={() => setActiveCategory(category)}
            key={category}
            variant={category === activeCategory ? "dark" : "default"}
            className="py-1 px-3 rounded-lg whitespace-nowrap"
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-white to-transparent">
        <Button>
          <ChevronLeft />
        </Button>
      </div>
    </div>
  );
}

export default CategoryPills;
