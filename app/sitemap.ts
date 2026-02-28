import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/content';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://aiagentflow.dev';

    // Base Routes
    const routes = [
        '',
        '/blog',
        '/use-cases/aiagentflow-vs-langchain'
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString().split('T')[0],
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Blog Posts
    const blogs = getAllPosts('blog').map((post) => ({
        url: `${baseUrl}/blog/${post.metadata.slug}`,
        lastModified: post.metadata.date || new Date().toISOString().split('T')[0],
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    // pSEO Pages 
    const pseo = getAllPosts('pseo').map((post) => ({
        url: `${baseUrl}/use-cases/${post.metadata.slug}`,
        lastModified: post.metadata.date || new Date().toISOString().split('T')[0],
        changeFrequency: 'monthly' as const,
        priority: 0.9,
    }));

    return [...routes, ...blogs, ...pseo];
}
