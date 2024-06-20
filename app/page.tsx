import getPosts from "@/server/actions/get-posts";

export default async function Home() {
  const { error, success } = await getPosts();
  if (error) {
    throw new Error(error);
  }
  console.log(success, "@Posts");
  return <main>hello</main>;
}
