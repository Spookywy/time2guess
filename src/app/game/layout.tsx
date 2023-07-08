import TopBar from "@/components/topBar";

export default function CreateTeamsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="h-full">
      <TopBar />
      {children}
    </section>
  );
}
