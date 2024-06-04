import React, { useState, useRef } from "react";
import Button from "./Button";
import { ChevronLeft, ChevronRight } from "lucide-react";

type CategoryPillsProps = {
  categories: string[];
};

function CategoryPills({ categories }: CategoryPillsProps) {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative overflow-x-hidden">
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-white to-transparent h-full w-12 flex items-center justify-start">
        <Button
          size="icon"
          variant="ghost"
          className="h-full aspect-square w-auto p-1.5"
          onClick={() =>
            containerRef.current?.scrollBy({ left: -100, behavior: "smooth" })
          }
        >
          <ChevronLeft />
        </Button>
      </div>
      <div ref={containerRef} className="overflow-x-auto flex items-center">
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
      </div>
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gradient-to-l from-white to-transparent h-full w-12 flex items-center justify-end">
        <Button
          size="icon"
          variant="ghost"
          className="h-full aspect-square w-auto p-1.5"
          onClick={() =>
            containerRef.current?.scrollBy({ left: 100, behavior: "smooth" })
          }
        >
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
}

export default CategoryPills;
