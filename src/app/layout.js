import Head from "next/head";
import "./globals.css";
import "./mobile.css";
import "aos/dist/aos.css";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shiridhar - Portfolio",
  description: `The "Shiridhar - Portfolio" is a dynamic and visually appealing website created using the "create next app" framework. This portfolio showcases the diverse skills and accomplishments of Shiridhar, providing visitors with a comprehensive overview of his professional journey. Explore the carefully curated content to learn more about Shiridhar's expertise, projects, and passion for innovation. Whether you're a potential employer, collaborator, or just curious to know more, this portfolio is designed to leave a lasting impression and highlight the unique qualities that define Shiridhar's professional identity. Welcome to a journey of discovery through the world of Shiridhar's achievements and aspirations!`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta
          name="keywords"
          content="shiridhar, portfolio, khatri, website, webapp, nodejs, shiridhar portfolio, blogs, projects, free code, education, learning, tech, ui, ux"
        ></meta>
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
