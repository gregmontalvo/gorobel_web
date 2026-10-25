import { notFound } from "next/navigation";

// Any path no page claims ends up here so the 404 renders inside the language layout.
export default function CatchAll() {
  notFound();
}
