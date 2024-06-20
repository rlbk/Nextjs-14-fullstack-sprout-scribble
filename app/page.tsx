import getPosts from "@/server/actions/get-posts";

export default async function Home() {
  const { error, success } = await getPosts();
  if (error) {
    throw new Error(error);
  }
  console.log(success, "@Posts");
  return (
    <main className="p-8">
      <h1>main</h1>
    </main>
  );
}
