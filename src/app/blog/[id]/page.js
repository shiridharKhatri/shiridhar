import IndvBlog from "@/app/components/IndvBlog";

export async function generateStaticParams() {
  //   const host = process.env.NEXT_PUBLIC_HOST;
  //   let headersList = {
  //     Accept: "*/*",
  //   };

  //   let response = await fetch(`${host}/api/blog/fetch`, {
  //     method: "GET",
  //     headers: headersList,
  //   });

  //   let data = await response.json();
  //   let id = data.data.map((e) => {
  //     return { id: e._id };
  //   });
  //   return [id][0];
  return [{ id: "653a7b34738aa76f6f69378f" }];
}

export default function Page({ params }) {
  return <IndvBlog id={params.id} />;
}
