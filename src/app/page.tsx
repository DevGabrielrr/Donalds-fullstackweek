import { redirect } from "next/navigation";

export function generateMetadata() {
  redirect("/fsw-donalds");
}

export default function Home() {
  return null;
}
