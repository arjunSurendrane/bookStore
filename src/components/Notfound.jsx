export default function Notfound() {
  return (
    <div className="flex items-center justify-center h-[70vh]">
      <div className="text-center">
        <svg
          className="w-16 h-16 mb-4 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        ></svg>
        <p className="text-xl font-semibold text-gray-700">
          Oops! No books found.
        </p>
        <p className="text-gray-500">Try searching for different subject.</p>
      </div>
    </div>
  );
}
