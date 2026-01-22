// src/lib/tags.ts
export function collectTags(posts: any[]) {
  const tagCounts: Record<string, number> = {};
  
  posts.forEach(post => {
    // 兼容你的摊平结构
    const tags = post.data?.tags || post.tags;
    
    if (Array.isArray(tags)) {
      tags.forEach(tag => {
        // 提取名称：如果是对象就拿 .name，如果是字符串就直接用
        const tagName = typeof tag === 'object' ? tag.name : tag;
        if (tagName) {
          tagCounts[tagName] = (tagCounts[tagName] || 0) + 1;
        }
      });
    }
  });

  // 关键：返回数组对象 [{ tag: 'xxx', count: 1 }]
  return Object.entries(tagCounts).map(([tag, count]) => ({
    tag,
    count
  })).sort((a, b) => {
    // ① 先按数量降序
    // if (b.count !== a.count) {
    //   return b.count - a.count;
    // }
    // ② 数量相同，再按文字排序
    return a.tag.localeCompare(b.tag, 'ja');
  });
}