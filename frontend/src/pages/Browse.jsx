import { useQuery } from "@tanstack/react-query";
import { getApprovedItems } from "../services/itemService";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";

export default function Browse() {
  const { data: items, isLoading } = useQuery({
    queryKey: ["items"],
    queryFn: getApprovedItems,
  });

  if (isLoading) return <Loader />;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Browse Items</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <Link to={`/items/${item._id}`} key={item._id}>
            <div className="border rounded overflow-hidden bg-white hover:shadow-lg transition">
              <img
                src={item.images[0]}
                alt={item.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold">{item.title}</h3>
                {item.redeemable && (
                  <span className="text-primary font-bold">Redeemable</span>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
