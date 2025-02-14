import { motion } from "framer-motion";

const MusicCard = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
  >
    <h3 className="text-2xl font-bold text-pink-600 mb-4">
      Gifts of Music Just for You 🎶
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Add your YouTube video IDs after 'embed/' */}
      <div className="aspect-video">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/5t4AmLL82sg?si=xqMC294jz_38kqg3"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          className="rounded-lg shadow-md"
          allowFullScreen
        />
        <p className="mt-2 text-sm text-gray-600">Love You Lama 💞</p>
      </div>

      <div className="aspect-video">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/BXQlNg4SlWU?si=pcnN1epfSevaGp1u"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          className="rounded-lg shadow-md"
          allowFullScreen
        />
        <p className="mt-2 text-sm text-gray-600">Our Favorite song together</p>
      </div>
      <div className="aspect-video">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/S7xKUEYak-A?si=ClZCBGvbm9vO93Gt"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          className="rounded-lg shadow-md"
          allowFullScreen
        />
        <p className="mt-2 text-sm text-gray-600">عمري الحقيقي ابتدي وياك ..</p>
      </div>
      <div className="aspect-video">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/5FlF1evtCFg?si=t0e5Vhf0VSKeU3KE"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          className="rounded-lg shadow-md"
          allowFullScreen
        />
        <p className="mt-2 text-sm text-gray-600">و تفضلي دايما علي بالي .</p>
      </div>
    </div>
    {/* <p className="mt-4 text-pink-500">Scroll → for more memories →</p> */}
  </motion.div>
);
export default MusicCard;
