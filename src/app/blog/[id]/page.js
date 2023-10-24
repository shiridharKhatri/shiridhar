import IndvBlog from "@/app/components/indvBlog";

export async function generateStaticParams() {
  let headersList = {
    Accept: "*/*",
  };

  let response = await fetch("http://localhost:5000/api/blog/fetch", {
    method: "GET",
    headers: headersList,
  });

  let data = await response.json();
  let id = data.data.map((e) => {
    return { id: e._id };
  });
  return [id][0];
}

export default function Page({ params }) {
  
  return <IndvBlog id={params.id}/> ;
}
