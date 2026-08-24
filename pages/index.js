import Head from "next/head"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Profil from "../components/Profil"
import Program from "../components/Program"
import Berita from "../components/Berita"
import Galeri from "../components/Galeri"
import Kontak from "../components/Kontak"

export default function Home() {
  return (
    <>
      <Head>
        <title>DARUL AZIZIYAH — Madrasah Ibtidaiyah Unggulan</title>
        <meta name="description" content="MI Darul Aziziyah — Madrasah Ibtidaiyah berbasis Tahfidz dan Karakter. Cerdas secara intelektual, kuat secara spiritual." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <Hero />
        <Profil />
        <Program />
        <Berita />
        <Galeri />
        <Kontak />
      </main>
      <Footer />
    </>
  )
}