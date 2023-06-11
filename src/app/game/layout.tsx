import TopBar from "@/components/topBar";

export default function CreateTeamsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <TopBar />
      {children}
    </section>
  );
}
