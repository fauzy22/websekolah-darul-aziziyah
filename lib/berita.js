// Data berita statis (Supabase tidak dipakai lagi)
export const beritaDefault = [
  { tanggal: "12 Agustus 2026", judul: "Penerimaan Peserta Didik Baru 2026/2027", isi: "Pendaftaran santri baru telah dibuka. Daftarkan putra-putri Anda melalui formulir kontak di bawah." },
  { tanggal: "1 Agustus 2026", judul: "Khataman Al-Qur'an Periode Semester Ganjil", isi: "Alhamdulillah, puluhan santri menyelesaikan hafalan juz 30 pada kegiatan khataman akhir semester." },
  { tanggal: "20 Juli 2026", judul: "Kegiatan Islamic Study Trip", isi: "Siswa kelas 6 mengikuti study trip mengenal sejarah Islam dan lingkungan sekitar." },
]

export async function getBerita() {
  return beritaDefault
}
