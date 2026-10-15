import Image from "next/image";

export default function Home() {
  return (
    <main className="p-10">
      <Image src="/logo1.png" alt="Original Closets" width={260} height={100} />
      <h1 className="text-navy text-4xl font-semibold mt-6">
        WHY ORIGINAL CLOSETS
      </h1>
      <p className="mt-4">This is body text in Montserrat.</p>
      <button className="bg-teal text-white px-6 py-2 rounded-full mt-4">
        CONTACT US
      </button>
      <div className="bg-light p-6 mt-4">Light gray section</div>
    </main>
  );
}
