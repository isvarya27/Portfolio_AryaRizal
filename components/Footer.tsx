export default function Footer() {
    return (
      <footer className="w-full border-t border-gray-200 bg-white mt-20 py-6 text-center text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()} Arya Rizal. Dibuat dengan{" "}
          <span className="text-blue-500 font-semibold">Next.js + TypeScript</span>.
        </p>
        <p>
          <a
            href="https://github.com/isvarya27"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            GitHub
          </a>{" "}
          |{" "}
          <a
            href="mailto:aryarizal.dev@gmail.com"
            className="text-blue-500 hover:underline"
          >
            Email Saya
          </a>
        </p>
      </footer>
    );
  }
  