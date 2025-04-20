
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, ArrowRight } from "lucide-react";

export default function BirthdayGift() {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-green-100 p-6 flex flex-col items-center justify-center text-center">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold text-green-700 mb-4 font-['Bakso Sapi']"
      >
        Selamat Ulang Tahun Ayang 💚
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="text-gray-700 text-lg max-w-xl"
      >
        Ini adalah hadiah kecil dari Ading untuk ayangku yang paling ganteng sedunia, Jhossy Pratama. Web ini isinya hadiah ulang tahun gesan ayaaang, cerita-cerita lucu, dan semua hal yang ading suka tentang ayang. Picik tombol di bawah laaaaah 💌
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="mt-6"
      >
        <Button
          onClick={() => setShowMessage(true)}
          className="bg-green-400 hover:bg-green-500 text-white px-6 py-3 rounded-full shadow-lg flex gap-2"
        >
          Klik Ayang Pesan Secret <ArrowRight size={18} />
        </Button>
      </motion.div>

      {showMessage && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl"
        >
          <Card className="bg-white rounded-2xl shadow-xl p-4">
            <CardContent>
              <h2 className="text-2xl font-bold text-green-600 mb-2">Kata-kata Manis</h2>
              <p className="text-gray-700 whitespace-pre-wrap">
🗓️ Teruntuk Priaku 
Selamat Ulang Tahun sayangku, panjang umur semoga diberkahi Tuhan dan juga sehat selalu. Mudah-mudahan hari ini kedepannya di tahun berikutnya, apa yang abang harapkan dipermudah oleh Allah. Aamiin

Sayangku ❤️
Hari ini Abang jadi spotlight utama di album kecil karya ading. Maaplah ayang, ading meolah crafting lagi, kada menukarkan barang gesan ayang 🥺 tapi ading meolah ini lawas yang ae. Sampai Sabak kamar.

❤️ Ayang, maaflah selama ini banyak merepotkan ayang diberbagai hal, makasih sudah jadi menghiasi hari-hari ading, beberapa tahun terakhir ading kada bisa membari hadiah yang layak. Ading harap, hadiah scrapbook ini jadi yang paling cantik dari hadiah-hadiah ading lainnya, soalnya ading meolah dengan penuh cinta. Ayang tau lah ading meolahnya dari bulan puasa lhoooo khusus gesan ayangkuuuu yang paling uwu ini😚 Ading tu bahagia Banaran dapat pasangan kaya ayang, ading selalu bersyukur dan selalu belajar lebih biar jadi istri yang layak suatu saat gesan anak-anak kita. Ading pun selalu berharap ayang bakal jadi suami ading suatu saat 🥺.

❤️ Untuk ayangkuuu
Teruntuk ayangku jhossy Pratama
Yang senantiasa mempesona
Selamat ulang tahun yang ke dua puluh dua
Semoga cinta kita abadi selamanya 

👙 Emmm ayaaang
Kalau...
dalam atmosfer ada debu
dalam hari ada Rabu
dalam sekolah ada guru
dalam keluarga ada Ibu
Maka...
dalam hatiku ada kamu 😘
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white rounded-2xl shadow-xl p-4">
            <CardContent>
              <h2 className="text-2xl font-bold text-green-600 mb-2">Galeri Kita</h2>
              <div className="grid grid-cols-2 gap-2">
                <img src="/IMG-20250122-WA0062.jpg" className="rounded-lg" alt="Kita 1" />
                <img src="/IMG-20240818-WA0019.jpg" className="rounded-lg" alt="Kita 2" />
                <img src="/IMG-20240906-WA0022.jpg" className="rounded-lg" alt="Kita 3" />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </div>
  );
}
