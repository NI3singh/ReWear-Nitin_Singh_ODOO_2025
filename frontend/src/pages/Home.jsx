import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Recycle, Users, Leaf, Star, ArrowRight, TrendingUp } from 'lucide-react';
import { Link } from "react-router-dom";


const ReWearLanding = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Featured items data
  const featuredItems = [
    {
      id: 1,
      title: "Vintage Denim Jacket",
      brand: "Levi's",
      size: "M",
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
      points: 45,
      condition: "Excellent",
      category: "Outerwear"
    },
    {
      id: 2,
      title: "Floral Summer Dress",
      brand: "Zara",
      size: "S",
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop",
      points: 30,
      condition: "Good",
      category: "Dresses"
    },
    {
      id: 3,
      title: "Designer Sneakers",
      brand: "Nike",
      size: "9",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop",
      points: 60,
      condition: "Like New",
      category: "Footwear"
    },
    {
      id: 4,
      title: "Wool Sweater",
      brand: "H&M",
      size: "L",
      image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop",
      points: 25,
      condition: "Good",
      category: "Knitwear"
    },
    {
      id: 5,
      title: "Leather Handbag",
      brand: "Michael Kors",
      size: "One Size",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
      points: 80,
      condition: "Excellent",
      category: "Accessories"
    }
  ];

  const stats = [
    { icon: Users, value: "50K+", label: "Active Users" },
    { icon: Recycle, value: "200K+", label: "Items Exchanged" },
    { icon: Leaf, value: "500T", label: "CO2 Saved" },
    { icon: TrendingUp, value: "95%", label: "Satisfaction Rate" }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredItems.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredItems.length) % featuredItems.length);
  };

  const getVisibleItems = () => {
    const items = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentSlide + i) % featuredItems.length;
      items.push(featuredItems[index]);
    }
    return items;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">


      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Swap, Share,{' '}
                  <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    Sustain
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Transform your wardrobe sustainably. Exchange unused clothing through direct swaps or our innovative point system. Join thousands making fashion circular.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Start Swapping
                </button>
                <Link to="/items"></Link>
                <button className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-50 transition-all flex items-center justify-center gap-2">
                  Browse Items
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-500">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full border-2 border-white"></div>
                  ))}
                </div>
                <span>Join 50,000+ sustainable fashion lovers</span>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl p-4 transform rotate-2 hover:rotate-0 transition-transform">
                      <div className="w-full h-32 bg-gradient-to-br from-emerald-300 to-teal-300 rounded-xl mb-2"></div>
                      <p className="text-sm font-medium text-gray-800">Vintage Jacket</p>
                      <p className="text-xs text-gray-600">45 points</p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-4 transform -rotate-1 hover:rotate-0 transition-transform">
                      <div className="w-full h-32 bg-gradient-to-br from-purple-300 to-pink-300 rounded-xl mb-2"></div>
                      <p className="text-sm font-medium text-gray-800">Summer Dress</p>
                      <p className="text-xs text-gray-600">30 points</p>
                    </div>
                  </div>
                  <div className="space-y-4 pt-8">
                    <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl p-4 transform rotate-1 hover:rotate-0 transition-transform">
                      <div className="w-full h-32 bg-gradient-to-br from-orange-300 to-red-300 rounded-xl mb-2"></div>
                      <p className="text-sm font-medium text-gray-800">Designer Sneakers</p>
                      <p className="text-xs text-gray-600">60 points</p>
                    </div>
                    <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-4 transform -rotate-2 hover:rotate-0 transition-transform">
                      <div className="w-full h-32 bg-gradient-to-br from-blue-300 to-indigo-300 rounded-xl mb-2"></div>
                      <p className="text-sm font-medium text-gray-800">Wool Sweater</p>
                      <p className="text-xs text-gray-600">25 points</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Items Carousel */}
      <section className="py-20 bg-gradient-to-r from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Items</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover amazing pieces waiting for their next adventure. Every item tells a story.
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {getVisibleItems().map((item) => (
                  <div key={item.id} className="group cursor-pointer">
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                      <div className="relative overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {item.condition}
                        </div>
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-emerald-600">
                          {item.points} pts
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                          <span className="text-sm text-gray-500">{item.size}</span>
                        </div>
                        <p className="text-gray-600 mb-4">{item.brand}</p>
                        <div className="flex items-center justify-between">
                          <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm">
                            {item.category}
                          </span>
                          <div className="flex items-center text-yellow-400">
                            <Star className="w-4 h-4 fill-current" />
                            <Star className="w-4 h-4 fill-current" />
                            <Star className="w-4 h-4 fill-current" />
                            <Star className="w-4 h-4 fill-current" />
                            <Star className="w-4 h-4 fill-current" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all z-10"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all z-10"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {featuredItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide ? 'bg-emerald-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Wardrobe?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Join the sustainable fashion revolution. Start swapping, sharing, and making a difference today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-50 transition-all transform hover:scale-105 shadow-lg">
              List an Item
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                  <Recycle className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">ReWear</span>
              </div>
              <p className="text-gray-400">
                Making fashion circular, one swap at a time.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Browse Items</a></li>
                <li><a href="#" className="hover:text-white transition-colors">List an Item</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 ReWear. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ReWearLanding;