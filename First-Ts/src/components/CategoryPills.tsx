import { useState } from "react";
import Button from "./Button";
import { ChevronLeft } from "lucide-react";

type CategoryPillsProps = {
  categories: string[];
};

function CategoryPills({ categories }: CategoryPillsProps) {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  return (
    <div className="overflow-x-hidden relative">
      <div className="flex whitespace-nowrap gap-3 transition-transform  w-[max-content]">
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
      <div>
        <Button size="icon" variant="ghost" className="">
          <ChevronLeft />
        </Button>
      </div>
    </div>
  );
}

export default CategoryPills;
