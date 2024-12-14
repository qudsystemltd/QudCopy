const blogPosts = [
  {
    id: 1,
    title: 'Introducing QudCopy: AI-Powered Code Generation',
    excerpt: 'Learn how QudCopy is revolutionizing the way developers write code with advanced AI technology.',
    date: 'Mar 15, 2024',
    author: 'Sarah Johnson',
    category: 'Product Updates',
  },
  {
    id: 2,
    title: 'The Future of Development: AI and Human Collaboration',
    excerpt: 'Exploring the synergy between artificial intelligence and human creativity in software development.',
    date: 'Mar 10, 2024',
    author: 'Michael Chen',
    category: 'Industry Insights',
  },
  {
    id: 3,
    title: 'Best Practices for AI-Assisted Development',
    excerpt: 'Tips and techniques for maximizing your productivity with AI coding tools.',
    date: 'Mar 5, 2024',
    author: 'Alex Rodriguez',
    category: 'Tutorials',
  },
]

export default function BlogPage() {
  return (
    <div className="py-24 px-6 max-w-7xl mx-auto">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-12">Blog</h1>
        
        <div className="space-y-12">
          {blogPosts.map((post) => (
            <article key={post.id} className="border-b border-zinc-800 pb-12 last:border-0">
              <div className="space-y-2 mb-4">
                <span className="text-sm text-blue-400">{post.category}</span>
                <h2 className="text-2xl font-semibold hover:text-blue-400 cursor-pointer transition-colors">
                  {post.title}
                </h2>
              </div>
              
              <p className="text-gray-300 mb-4">
                {post.excerpt}
              </p>
              
              <div className="flex items-center text-sm text-gray-400">
                <span>{post.author}</span>
                <span className="mx-2">·</span>
                <span>{post.date}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
