import Button from "./Button";

function CategoryPills() {
  return (
    <div className="overflow-x-hidden relative">
      <div className="flex whitespace-nowrap gap-3 transition-transform w-[max-content]">
        <Button className="px-3 py-1 rounded-lg whitespace-nowrap" variant="dark">All</Button>
      </div>
    </div>
  );
}

export default CategoryPills;
