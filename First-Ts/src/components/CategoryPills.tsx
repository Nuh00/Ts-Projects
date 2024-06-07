import React, { useState, useRef } from "react";
import Button from "./Button";
import { ChevronLeft, ChevronRight } from "lucide-react";

type CategoryPillsProps = {
  categories: string[];
};

const TRANSLATE_AMOUNT = 200;

function CategoryPills({ categories }: CategoryPillsProps) {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [isLeftVisible, setIsLeftVisible] = useState(true);
  const [isRightVisible, setIsRightVisible] = useState(true);

  return (
    <div className="relative">
      {isLeftVisible && (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-white from-50% to-transparent w-24 h-full">
          <Button
            size="icon"
            variant="ghost"
            className="h-full aspect-square w-auto p-1.5"
          >
            <ChevronLeft />
          </Button>
        </div>
      )}

      <main className="flex  w-[max-content] gap-2 transition-transform whitespace-nowrap overflow-x-auto">
        {categories.map((category) => (
          <Button
            onClick={() => setActiveCategory(category)}
            key={category}
            variant={category === activeCategory ? "dark" : "default"}
            className="py-1 px-3 rounded-lg whitespace-nowrap  "
          >
            {category}
          </Button>
        ))}
      </main>

      {isRightVisible && (
        <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-l from-white from-70% to-transparent w-24 h-full ">
          <Button
            size="icon"
            variant="ghost"
            className="h-full aspect-square w-auto p-1.5"
          >
            <ChevronRight />
          </Button>
        </div>
      )}
    </div>
  );
}

export default CategoryPills;
