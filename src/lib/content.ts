//src/lib/content.ts
import { getCollection } from "astro:content";

export async function getAllPosts() {
  const posts = await getCollection("blog");
  return posts.map(p => ({
    slug: p.slug || "dummy-slug",
    title: p.data?.title || "Untitled",
    description: p.data?.description || "No description",
    date: p.data?.date || new Date(),
    tags: p.data?.tags || [{ name: "none" }]
  }));
}

  // console.log(
  //   "[getAllPosts] blogs =",
  //   posts.map(p => ({
  //     title: p.data.title,
  //     date: p.data.pubDate,
  //     tags: p.data.tags,
  //   }))
  // );

// console.log(
//     "[DEBUG] Raw data from first post:", 
//     posts[0]?.data // 检查这里是否有内容
//   );

  // posts.forEach(p => {
  //   // 找出那些会导致你崩溃的文件
  //   if (!p.data.tags) {
  //     console.warn(`⚠️ 文件缺失 tags: ${p.id}`);
  //   }
  // });




