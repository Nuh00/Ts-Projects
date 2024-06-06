import React, { useState, useRef } from "react";
import Button from "./Button";
import { ChevronLeft, ChevronRight } from "lucide-react";

type CategoryPillsProps = {
  categories: string[];
};

function CategoryPills({ categories }: CategoryPillsProps) {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <div className="relative overflow-x-auto">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-white from-50% to-transparent w-24 h-full">
        <Button
          size="icon"
          variant="ghost"
          className="h-full aspect-square w-auto p-1.5"
        >
          <ChevronLeft />
        </Button>
      </div>

      <main className="flex  w-[max-content]">
        {categories.map((category) => (
          <Button
            onClick={() => setActiveCategory(category)}
            key={category}
            variant={category === activeCategory ? "dark" : "default"}
            className="py-1 px-3 rounded-lg whitespace-nowrap "
          >
            {category}
          </Button>
        ))}
      </main>

      <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-l from-white from-70% to-transparent w-24 h-full ">
        <Button
          size="icon"
          variant="ghost"
          className="h-full aspect-square w-auto p-1.5"
        >
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
}

export default CategoryPills;
