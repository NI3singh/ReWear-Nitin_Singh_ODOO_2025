import { useParams } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getItemById } from "../services/itemService";
import { requestSwap, redeemViaPoints } from "../services/swapService";
import Loader from "../components/Loader";
import toast from "react-hot-toast";

export default function ItemDetail() {
  const { id } = useParams();
  const qc = useQueryClient();

  const { data: item, isLoading } = useQuery(["item", id], () =>
    getItemById(id)
  );
  const swapMut = useMutation(() => requestSwap(id), {
    onSuccess: () => {
      toast.success("Swap requested");
      qc.invalidateQueries(["item", id]);
    },
    onError: () => toast.error("Failed to request swap"),
  });
  const redeemMut = useMutation(() => redeemViaPoints(id), {
    onSuccess: () => {
      toast.success("Redeemed via points");
      qc.invalidateQueries(["item", id]);
    },
    onError: () => toast.error("Failed to redeem"),
  });

  if (isLoading) return <Loader />;
  if (!item) return <p>Item not found</p>;

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">{item.title}</h2>
      <div className="flex overflow-x-auto space-x-4">
        {item.images.map((src, i) => (
          <img key={i} src={src} className="h-64 w-auto object-cover rounded" />
        ))}
      </div>
      <p>{item.description}</p>
      <p>
        <strong>Category:</strong> {item.category}
      </p>
      <p>
        <strong>Condition:</strong> {item.condition}
      </p>
      <p>
        <strong>Tags:</strong> {item.tags.join(", ")}
      </p>
      <p>
        <strong>Status:</strong> {item.status}
      </p>
      <div className="flex space-x-4">
        <button
          onClick={() => swapMut.mutate()}
          disabled={swapMut.isLoading}
          className="bg-maroon text-cream px-4 py-2 rounded hover:bg-primary transition"
        >
          {swapMut.isLoading ? "..." : "Request Swap"}
        </button>
        {item.redeemable && (
          <button
            onClick={() => redeemMut.mutate()}
            disabled={redeemMut.isLoading}
            className="bg-primary text-cream px-4 py-2 rounded hover:bg-maroon transition"
          >
            {redeemMut.isLoading ? "..." : "Redeem via Points"}
          </button>
        )}
      </div>
    </div>
  );
}
