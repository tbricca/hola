import { Link } from "react-router-dom";

export default function Placeholder() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center bg-holafly-light px-4 text-center">
      <img
        src="https://media.holafly.com/public/logos/holafly.svg"
        alt="Holafly"
        className="h-8 w-auto"
      />
      <h1 className="mt-8 text-4xl font-extrabold text-holafly-dark sm:text-5xl">
        Coming <span className="text-holafly-coral">Soon</span>
      </h1>
      <p className="mt-4 max-w-md text-base text-holafly-gray">
        We're working hard to bring this page to life. In the meantime, explore
        our unlimited data eSIM plans for over 200 destinations.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center justify-center rounded-full bg-holafly-green px-6 py-3 text-sm font-semibold text-holafly-dark transition-opacity hover:opacity-90"
      >
        Back to home
      </Link>
    </main>
  );
}
