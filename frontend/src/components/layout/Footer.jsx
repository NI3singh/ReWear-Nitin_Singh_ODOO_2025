export default function Footer() {
  return (
    <footer className="bg-maroon text-cream py-4">
      <div className="container mx-auto text-center">
        © {new Date().getFullYear()} ReWear. All rights reserved.
      </div>
    </footer>
  );
}
