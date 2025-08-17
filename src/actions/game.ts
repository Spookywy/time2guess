"use server";

import prisma from "@/db/prisma";

export async function createGame() {
  await prisma.game.create({
    data: {},
  });
}
