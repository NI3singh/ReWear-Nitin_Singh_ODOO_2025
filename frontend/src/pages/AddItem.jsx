import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createItem } from "../services/itemService";
import Loader from "../components/Loader";

export default function AddItem() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    size: "",
    condition: "",
    tags: "",
    redeemable: true,
  });
  const [previews, setPreviews] = useState([]);
  const [files, setFiles] = useState([]);

  const mutation = useMutation({
    mutationFn: createItem,
    onSuccess: () => toast.success("Item submitted for approval"),
    onError: () => toast.error("Failed to submit item"),
  });

  const handleFileChange = (e) => {
    const selected = Array.from(e.target.files);
    setFiles(selected);
    setPreviews(selected.map((file) => URL.createObjectURL(file)));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append("title", form.title);
    fd.append("description", form.description);
    fd.append("category", form.category);
    fd.append("size", form.size);
    fd.append("condition", form.condition);
    // tags as JSON string
    fd.append(
      "tags",
      JSON.stringify(form.tags.split(",").map((t) => t.trim()))
    );
    fd.append("redeemable", form.redeemable);
    files.forEach((f) => fd.append("images", f));

    mutation.mutate(fd);
  };

  if (mutation.isLoading) return <Loader />;

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">List a New Item</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {[
          { key: "title", label: "Title", type: "text" },
          { key: "description", label: "Description", type: "textarea" },
          { key: "category", label: "Category", type: "text" },
          { key: "size", label: "Size", type: "text" },
          { key: "condition", label: "Condition", type: "text" },
          { key: "tags", label: "Tags (comma‑separated)", type: "text" },
        ].map((field) => (
          <div key={field.key}>
            <label className="block mb-1">{field.label}</label>
            {field.type === "textarea" ? (
              <textarea
                value={form[field.key]}
                onChange={(e) =>
                  setForm({ ...form, [field.key]: e.target.value })
                }
                className="w-full border p-2 rounded"
                required
              />
            ) : (
              <input
                type={field.type}
                value={form[field.key]}
                onChange={(e) =>
                  setForm({ ...form, [field.key]: e.target.value })
                }
                className="w-full border p-2 rounded"
                required
              />
            )}
          </div>
        ))}

        <div>
          <label className="block mb-1">Images</label>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleFileChange}
            className="block mb-2"
          />
          <div className="flex space-x-2 overflow-x-auto">
            {previews.map((src, i) => (
              <img
                key={i}
                src={src}
                className="h-24 w-24 object-cover rounded"
              />
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="bg-maroon text-cream px-4 py-2 rounded hover:bg-primary transition"
        >
          Submit Item
        </button>
      </form>
    </div>
  );
}
