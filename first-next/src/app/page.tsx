import CustomLinks from "@/components/CustomLinks";
import Image from "next/image";

export default function Home() {
  return (
    <main className="grid md:grid-cols-2 grid-cols-1 ">
      <div className="flex flex-col md:items-start items-center">
        <h1 className="text-8xl font-extrabold font mb-10">
          Creative <br /> Thought <br /> Agency.
        </h1>
        <p className="mb-8">
          Get started by editing the new wave of the tech world <br />
          with the best team of developers and designers.
        </p>

        <div className="flex gap-4">
          <CustomLinks href="/contact"  intent="sky" >Learn More </CustomLinks>
          <CustomLinks href="/contact" className="bg-white text-black">Contact Us</CustomLinks>
        </div>
        <Image
          src="/brands.png"
          alt=""
          width={300}
          height={10}
          className="relative filter grayscale"
        />
      </div>
      <div className="flex md:justify-end justify-center">
        <Image src="/hero.gif" alt="" width={500} height={500} className="" />
      </div>
    </main>
  );
}
