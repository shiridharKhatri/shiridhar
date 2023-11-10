import Search from "@/app/components/Search";

export default function Page({ params }) {
  const query = params.id;
  return <Search id={query} />;
}
