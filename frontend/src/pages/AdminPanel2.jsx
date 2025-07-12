import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getPendingItems,
  approveItem,
  rejectItem,
} from "../services/adminService";
import Loader from "../components/Loader";

export default function AdminPanel() {
  const qc = useQueryClient();

  // Fetch pending items
  const { data: items, isLoading } = useQuery({
    queryKey: ["pendingItems"],
    queryFn: getPendingItems,
  });

  // Approve mutation
  const approveMut = useMutation({
    mutationFn: approveItem,
    onSuccess: () => qc.invalidateQueries(["pendingItems"]),
  });

  // Reject mutation
  const rejectMut = useMutation({
    mutationFn: rejectItem,
    onSuccess: () => qc.invalidateQueries(["pendingItems"]),
  });

  if (isLoading) return <Loader />;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Admin Panel: Pending Listings</h2>
      {items.length === 0 ? (
        <p>No pending items.</p>
      ) : (
        <ul className="space-y-4">
          {items.map((item) => (
            <li key={item._id} className="bg-white p-4 rounded shadow">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center space-x-4">
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="h-20 w-20 object-cover rounded"
                  />
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-600">
                      {item.description.slice(0, 60)}…
                    </p>
                    <p className="text-xs text-gray-500">
                      By {item.uploader.name}
                    </p>
                  </div>
                </div>
                <div className="mt-4 sm:mt-0 flex space-x-2">
                  <button
                    onClick={() => approveMut.mutate(item._id)}
                    disabled={approveMut.isLoading}
                    className="px-4 py-2 bg-maroon text-cream rounded hover:bg-primary transition"
                  >
                    {approveMut.isLoading ? "..." : "Approve"}
                  </button>
                  <button
                    onClick={() => rejectMut.mutate(item._id)}
                    disabled={rejectMut.isLoading}
                    className="px-4 py-2 border border-maroon text-maroon rounded hover:bg-maroon hover:text-cream transition"
                  >
                    {rejectMut.isLoading ? "..." : "Reject"}
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
