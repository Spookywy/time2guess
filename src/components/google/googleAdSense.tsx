import Script from "next/script";

type GoogleAdSenseProps = {
  gpId: string;
};

export function GoogleAdSense({ gpId }: GoogleAdSenseProps) {
  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-${gpId}`}
      crossOrigin="anonymous"
    />
  );
}
