import prisma from "@/db/prisma";

export async function POST() {
  await prisma.game.create({
    data: {},
  });

  return new Response(null, { status: 201 });
}
