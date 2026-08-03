import prisma from "@/db/prisma";

const corsHeaders = {
  "Access-Control-Allow-Origin": "https://time2guess.pages.dev",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: corsHeaders,
  });
}

export async function POST() {
  await prisma.game.create({
    data: {},
  });

  return new Response(null, {
    status: 201,
    headers: corsHeaders,
  });
}
