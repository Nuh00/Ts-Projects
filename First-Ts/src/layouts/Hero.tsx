import CategoryPills from "../components/CategoryPills";

function Hero() {
  return (
    <div className="grid grid-cols-[auto,1fr] flex-grow overflow-auto">
      <aside>Sidebar</aside>
      <div className="sticky top-0 bg-white z-10 pb-4">
        <CategoryPills />
      </div>
    </div>
  );
}

export default Hero;
