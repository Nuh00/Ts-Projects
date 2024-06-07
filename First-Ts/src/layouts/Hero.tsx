import CategoryPills from "../components/CategoryPills";
import { categories } from "../data/home";

type CategoryArrProps = {
  categories: string[];
};

function Hero() {
  return (
    <div className="grid grid-cols-[auto,1fr] flex-grow overflow-auto">
      <aside>Sidebar</aside>
      <div className="">
        <div className="sticky top-0 bg-white z-10 pb-4">
          <CategoryPills categories={categories} />
        </div>
        <main></main>
      </div>
    </div>
  );
}

export default Hero;
