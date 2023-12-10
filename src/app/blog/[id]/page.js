import IndvBlog from "@/app/components/IndvBlog";

export async function generateStaticParams() {
  const host = process.env.NEXT_PUBLIC_HOST || "https://rich-teal-fossa-gear.cyclic.app";
  // const host = "https://portfolio-backend-0roz.onrender.com";
  let headersList = {
    Accept: "*/*",
  };

  let response = await fetch(`${host}/api/blog/fetch`, {
    method: "GET",
    headers: headersList,
  });

  let data = await response.json();
  let id = data.data.map((e) => {
    return { id: e._id };
  });
  let arrayId = [id][0];
  return arrayId;
}

export default function Page({ params }) {
  return <IndvBlog id={params.id} />;
}
