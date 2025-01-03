import TopBar from "@/components/topBar";
import { ReactNode } from "react";

export default function CreateTeamsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <main className="h-full">
      <TopBar />
      {children}
    </main>
  );
}
