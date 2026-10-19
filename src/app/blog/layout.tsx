import AdSenseLoader from "@/components/marketing/AdSenseLoader";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (<>{children}<AdSenseLoader/></>);
}
