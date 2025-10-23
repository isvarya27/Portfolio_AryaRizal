import Image from "next/image";

export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        fontFamily: "sans-serif",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
        Arya Rizal
      </h1>
      <p style={{ fontSize: "1.2rem", maxWidth: 500 }}>
        👋 Halo! Saya seorang Flutter & Fullstack Developer.  
        Ini adalah portfolio saya yang dibuat menggunakan <b>Next.js + TypeScript</b>.
      </p>
      <a
        href="https://github.com/isvarya27"
        target="_blank"
        style={{
          marginTop: "2rem",
          color: "#0070f3",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        👉 Lihat GitHub Saya
      </a>
    </main>
  );
}
