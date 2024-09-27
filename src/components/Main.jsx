export default function Main({ children }) {
  return (
    <main className="flex justify-center p-5 bg-neutral-950">
      <div className="responsive-width">{children}</div>
    </main>
  );
}
