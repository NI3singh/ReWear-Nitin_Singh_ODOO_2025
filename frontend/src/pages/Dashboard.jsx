import { useQuery, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "../api/axiosInstance";
import { getMyItems } from "../services/itemService";
import { getMySwaps } from "../services/swapService";
import Loader from "../components/layout/Loader";
import { Link } from "react-router-dom";

const fetchMe = () => axiosInstance.get("/auth/me").then((res) => res.data.user);

export default function Dashboard() {
  // v5: object signature
  const {
    data: user,
    isLoading: userLoading,
    isError: userError,
  } = useQuery({
    queryKey: ["me"],
    queryFn: fetchMe,
  });

  const {
    data: myItems,
    isLoading: itemsLoading,
    isError: itemsError,
  } = useQuery({
    queryKey: ["myItems"],
    queryFn: getMyItems,
  });

  const {
    data: mySwaps,
    isLoading: swapsLoading,
    isError: swapsError,
  } = useQuery({
    queryKey: ["mySwaps"],
    queryFn: getMySwaps,
  });

  if (userLoading || itemsLoading || swapsLoading) return <Loader />;

  if (userError || itemsError || swapsError) {
    return <p className="text-red-600">Failed to load dashboard data.</p>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>

      <div className="mb-6">
        <p>
          <strong>Name:</strong> {user.name}
        </p>
        <p>
          <strong>Points:</strong> {user.points}
        </p>
      </div>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">My Listings</h3>
        {myItems.length ? (
          <ul className="space-y-2">
            {myItems.map((item) => (
              <li key={item._id}>
                <Link to={`/items/${item._id}`} className="hover:underline">
                  {item.title} — <em>{item.status}</em>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>No items listed yet.</p>
        )}
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">My Swap Requests</h3>
        {mySwaps.length ? (
          <ul className="space-y-2">
            {mySwaps.map((s) => (
              <li key={s._id}>
                {s.method === "swap" ? (
                  <>
                    {s.requester.name} requested swap on {s.item.title} —{" "}
                    <em>{s.status}</em>
                  </>
                ) : (
                  <>
                    Redeemed {s.item.title} via points — <em>{s.status}</em>
                  </>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p>No swap activity yet.</p>
        )}
      </section>
    </div>
  );
}
