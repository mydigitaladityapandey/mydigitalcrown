import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Gallery() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 min-h-screen bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-blue-600">Gallery</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our work, events, and the amazing projects we&apos;ve delivered for our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
              <div key={item} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all">
                <div className="h-64 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-lg font-bold mb-1">Project {item}</h3>
                    <p className="text-sm text-gray-200">Digital Marketing Campaign</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors font-semibold">
              Load More
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
