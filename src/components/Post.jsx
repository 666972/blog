import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { posts } from '../components/posts';
import './css/Post.css';

const Posts = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [visiblePosts, setVisiblePosts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        // 模拟数据加载
        const timer = setTimeout(() => {
            setIsLoading(false);
            setVisiblePosts(posts);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    const filteredPosts = visiblePosts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <div className="posts-container">
            {/* 背景粒子效果 */}
            <div className="particles">
                {Array.from({ length: 30 }).map((_, i) => (
                    <div key={i} className="particle" style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        width: `${Math.random() * 10 + 5}px`,
                        height: `${Math.random() * 10 + 5}px`,
                        opacity: Math.random() * 0.5 + 0.1,
                        animationDuration: `${Math.random() * 20 + 10}s`,
                        animationDelay: `${Math.random() * 5}s`
                    }} />
                ))}
            </div>

            {/* 搜索框 */}
            <div className="glass-card search-card">
                <div className="search-wrapper">
                    <input
                        type="text"
                        placeholder="搜索文章..."
                        className="search-input"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <svg className="search-icon" viewBox="0 0 24 24">
                        <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                    </svg>
                </div>
            </div>

            {/* 分类标签 */}
            <div className="tags-container">
                {['全部', '技术', '生活', '旅行', '美食', '摄影'].map(tag => (
                    <button
                        key={tag}
                        className="tag-button"
                        onClick={() => setSearchTerm(tag === '全部' ? '' : tag)}
                    >
                        {tag}
                    </button>
                ))}
            </div>

            {/* 加载状态 */}
            {isLoading ? (
                <div className="loading-grid">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="post-skeleton">
                            <div className="skeleton-cover"></div>
                            <div className="skeleton-title"></div>
                            <div className="skeleton-excerpt"></div>
                            <div className="skeleton-meta"></div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="posts-grid">
                    {filteredPosts.map((post, index) => (
                        <Link to={`/post/${post.id}`} key={post.id} className="post-link">
                            <div
                                className="glass-card post-card"
                                style={{
                                    animationDelay: `${index * 0.1}s`,
                                    background: `linear-gradient(
                    to right bottom,
                    rgba(255, 255, 255, 0.7),
                    rgba(255, 255, 255, 0.3)
                  )`
                                }}
                            >
                                <div className="post-image-wrapper">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="post-image"
                                        loading="lazy"
                                    />
                                    <div className="post-category">{post.category}</div>
                                </div>
                                <div className="post-content">
                                    <h3 className="post-title">{post.title}</h3>
                                    <p className="post-excerpt">
                                        {post.content.substring(0, 100)}...
                                    </p>
                                    <div className="post-meta">
                                        <div className="post-author">
                                            <img
                                                src={post.author.avatar}
                                                alt={post.author.name}
                                                className="author-avatar"
                                            />
                                            <span>{post.author.name}</span>
                                        </div>
                                        <div className="post-stats">
                                            <span className="post-date">{post.date}</span>
                                            <span className="post-likes">
                                                <svg viewBox="0 0 24 24" className="like-icon">
                                                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                                </svg>
                                                {post.likes}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Posts;