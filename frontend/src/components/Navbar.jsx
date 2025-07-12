const Navbar = () => {
  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-green-600">ReWear</h1>
      <div className="space-x-4">
        <button className="text-green-600 font-medium hover:underline">Start Swapping</button>
        <button className="text-green-600 font-medium hover:underline">Browse Items</button>
        <button className="text-green-600 font-medium hover:underline">List an Item</button>
      </div>
    </nav>
  );
};

export default Navbar;
