import Link from "next/link";

export default function NotFound() {
  return (
        <div className="w-full h-screen flex flex-col items-center justify-center gap-10">
            <h1 className=" text-9xl font-bold">404</h1>
            <h2 className="text-2xl font-bold">Page Not Found</h2>
            <p className="text-lg">The page you are looking for does not exist.</p>
            <Link className="text-lg" href="/">Go back to the home page</Link>
        </div>
  );
}