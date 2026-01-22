import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		tags: z.preprocess((val) => {
            if (typeof val === 'string') {
                // 分割字符串并返回字符串数组
                return val.split(',').map(s => s.trim()).filter(s => s.length > 0);
            }
            if (Array.isArray(val)) {
                // 如果已经是数组，确保每个元素都是字符串
                return val.map(v => {
                    if (typeof v === 'string') return v.trim();
                    if (typeof v === 'object' && v !== null && 'name' in v) {
                        return String(v.name).trim();
                    }
                    return String(v).trim();
                }).filter(s => s.length > 0);
            }
            return [];
        }, z.array(z.string()).default([])),
	}),
});

export const collections = { blog };
