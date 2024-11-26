export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      <header className="w-full bg-blue-500 p-4 text-white text-center text-2xl font-bold">
        Welcome to Tailwind CSS!
      </header>

      <main className="flex-grow flex flex-col items-center justify-center gap-4">
        <h1 className="text-4xl font-extrabold">Hello, World!</h1>
        <p className="text-lg text-gray-600">
          This is a simple page to test Tailwind CSS.
        </p>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Click Me
        </button>
      </main>

      <footer className="w-full bg-gray-200 p-4 text-center text-sm">
        Powered by <span className="font-bold">Next.js</span> & <span className="font-bold">Tailwind CSS</span>.
      </footer>
    </div>
  );
}
