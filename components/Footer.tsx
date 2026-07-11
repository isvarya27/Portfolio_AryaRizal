export default function Footer() {
    return (
      <footer className="w-full border-t border-gray-200 bg-white mt-20 py-6 text-center text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()} Arya Rizal. Built with{" "}
          <span className="text-blue-500 font-semibold">Next.js + TypeScript</span>.
        </p>
        <p>

          <a
            href="mailto:aryarizal.dev@gmail.com"
            className="text-blue-500 hover:underline"
          >
            Email Me
          </a>
        </p>
      </footer>
    );
  }
  