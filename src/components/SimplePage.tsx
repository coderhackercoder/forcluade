export default function SimplePage({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-2xl px-6 py-20">
      <h1 className="font-display text-3xl mb-6">{title}</h1>
      <div className="text-forest/75 leading-relaxed space-y-4">{children}</div>
    </div>
  );
}
