function Home() {
  return (
    <>
      <div className="min-h-screen bg-maroon-light p-4 text-white-solid font-sans">
        {/* Header */}
        <div className="
          flex items-center justify-between
          border border-white-solid p-4 mb-6
          flex-wrap gap-4
        ">
          <div className="border border-white-solid px-3 py-1 text-sm md:text-base">Screen 3</div>
          <div className="text-xl md:text-2xl font-semibold flex-grow text-center">Landing Page</div>
          <div className="flex items-center space-x-4">
            <div className="
              flex items-center border border-white-solid p-2
              flex-grow
            ">
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent outline-none flex-grow text-white-solid placeholder-white-alpha"
              />
              <button className="text-white-solid ml-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
            <div className="w-8 h-8 rounded-full border border-white-solid"></div> {/* User Icon */}
          </div>
        </div>

        {/* Images Section */}
        <div className="
          border border-white-solid h-48 md:h-64
          flex items-center justify-center text-xl md:text-2xl
          mb-6
        ">
          Images
        </div>

        {/* Categories Section */}
        <div className="mb-6">
          <h2 className="
            text-center text-lg md:text-xl font-medium mb-4 pb-2
            border-b border-white-solid
          ">
            Categories Section
          </h2>
          <div className="
            grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6
            gap-4
          ">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="
                  border border-white-solid h-24
                  flex items-center justify-center text-white-solid
                  hover:bg-maroon transition-colors duration-200
                  text-sm md:text-base
                "
              >
                Category {i + 1}
              </div>
            ))}
          </div>
        </div>

        {/* Product Listings */}
        <div>
          <h2 className="
            text-center text-lg md:text-xl font-medium mb-4 pb-2
            border-b border-white-solid
          ">
            Product Listings
          </h2>
          <div className="
            grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
            gap-4
          ">
            {[...Array(8)].map((_, i) => ( // Added more cards to fill space
              <div
                key={i}
                className="
                  border border-white-solid h-48 md:h-64
                  flex items-center justify-center text-white-solid
                  hover:bg-maroon transition-colors duration-200
                  text-base md:text-lg
                "
              >
                Product {i + 1}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-cream text-maroon p-6 flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to ReWear</h1>
        <p className="text-lg max-w-xl">
          Exchange your unused clothes through direct swaps or points. Start
          saving the planet in style.
        </p>
      </div>
    </>
  );
}

export default Home;


