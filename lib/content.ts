import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

type ContentType = 'blog' | 'pseo' | 'docs';

export interface PostMetadata {
    title: string;
    description: string;
    date?: string;
    author?: string;
    slug: string;
    keywords?: string[];
}

export interface Post {
    metadata: PostMetadata;
    content: string;
}

const getDirectory = (type: ContentType) => {
    return path.join(process.cwd(), `content/${type}`);
};

export function getPostBySlug(type: ContentType, slug: string): Post | null {
    try {
        const realSlug = slug.replace(/\.md$/, '');
        const fullPath = path.join(getDirectory(type), `${realSlug}.md`);

        if (!fs.existsSync(fullPath)) return null;

        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
            metadata: { ...data, slug: realSlug } as PostMetadata,
            content,
        };
    } catch {
        return null;
    }
}

export function getAllPosts(type: ContentType): Post[] {
    try {
        const dir = getDirectory(type);
        if (!fs.existsSync(dir)) return [];

        const slugs = fs.readdirSync(dir);
        const posts = slugs
            .filter((slug) => slug.endsWith('.md'))
            .map((slug) => getPostBySlug(type, slug))
            .filter((post): post is Post => post !== null)
            .sort((post1, post2) => {
                if (!post1.metadata.date || !post2.metadata.date) return 0;
                return post1.metadata.date > post2.metadata.date ? -1 : 1;
            });

        return posts;
    } catch {
        return [];
    }
}
