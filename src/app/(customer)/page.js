
export default function Home() {
  return (
    <div className="">
      <div className="grid grid-cols-4 gap-20 p-20">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="h-80 bg-gray-200 rounded-lg shadow-md"
          ></div>
        ))}
      </div>
    </div>
  );
}
