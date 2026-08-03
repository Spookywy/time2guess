const time2GuessApiUrl = process.env.NEXT_PUBLIC_TIME_2_GUESS_API_URL;

if (!time2GuessApiUrl) {
  throw new Error("NEXT_PUBLIC_TIME_2_GUESS_API_URL is not configured");
}

export const clientConfig = {
  time2GuessApiUrl,
};
