import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHeart, FaClock, FaTags } from 'react-icons/fa';
import './css/PostList.css';

// 新文章数据：小圈的主贝故事
const posts = [
    {
        id: 1,
        title: '小圈的主贝故事：如何认识贝壳',
        summary: '小圈通过一段奇妙的冒险，开始了解贝壳的奥秘与美丽，探索大海的秘密。',
        category: '奇幻冒险',
        date: '2025-04-30',
        readTime: '6分钟阅读',
        likes: 102,
        tags: ['小圈', '主贝', '故事'],
        image: 'https://images.unsplash.com/photo-1503264117951-4e7cdd2f72b0?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg4OXwwfDF8c2VhY2h8MXx8YmVza3xlbnwwfDB8fHwyfHwx&ixlib=rb-1.2.1&q=80&w=1080',
        color: '#FF8C00'
    },
    {
        id: 2,
        title: '小圈与贝壳王国的冒险',
        summary: '在小圈的冒险旅程中，贝壳王国的故事引领他深入大海的神秘世界。',
        category: '奇幻冒险',
        date: '2025-04-28',
        readTime: '8分钟阅读',
        likes: 134,
        tags: ['小圈', '贝壳', '冒险'],
        image: 'https://images.unsplash.com/photo-1535746983-d8b0d77cd94d?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg4OXwwfDF8c2VhY2h8MnwxfGJlY2tlfGVufDB8fDB8fHwyfHwx&ixlib=rb-1.2.1&q=80&w=1080',
        color: '#FF6347'
    },
    {
        id: 3,
        title: '小圈与贝壳的奇幻之旅',
        summary: '探索小圈与贝壳的奇妙之旅，见证他们如何面对挑战，成长并发现真理。',
        category: '成长故事',
        date: '2025-04-25',
        readTime: '10分钟阅读',
        likes: 190,
        tags: ['小圈', '成长', '冒险'],
        image: 'https://images.unsplash.com/photo-1541669648-5abbd717f9ff?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg4OXwwfDF8c2VhY2h8Mnx8Y2ltcGFzc3xlbnwwfDB8fHwyfHwx&ixlib=rb-1.2.1&q=80&w=1080',
        color: '#32CD32'
    }
];

// 动画配置
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2
        }
    }
};

const cardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.95 },
    visible: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
            duration: 0.5
        }
    },
    hover: {
        y: -10,
        boxShadow: "0 15px 30px rgba(0,0,0,0.15)",
        transition: {
            duration: 0.3,
            ease: "easeOut"
        }
    }
};

const PostList = () => {
    return (
        <div className="post-list-container">
            {/* 背景装饰元素 */}
            <div className="decorative-elements">
                <div className="floating-orb orb-1"></div>
                <div className="floating-orb orb-2"></div>
                <div className="floating-orb orb-3"></div>
            </div>

            {/* 页面标题 */}
            <motion.div
                className="page-header"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, type: "spring" }}
            >
                <div className="breadcrumb">
                    <Link to="/" className="breadcrumb-link">首页</Link>
                    <span className="breadcrumb-separator">/</span>
                    <Link to="/posts" className="breadcrumb-link active">故事</Link>
                </div>
                <motion.h1
                    className="page-title"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    小圈的主贝故事
                    <motion.span
                        className="title-underline"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    />
                </motion.h1>
            </motion.div>

            {/* 文章列表 */}
            <motion.div
                className="posts-grid"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {posts.map((post) => (
                    <motion.article
                        key={post.id}
                        className="post-card"
                        variants={cardVariants}
                        whileHover="hover"
                        style={{ '--accent-color': post.color }}
                    >
                        <Link to={`/posts/${post.id}`} className="post-link">
                            {/* 图片区域 */}
                            <div className="image-wrapper">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="post-image"
                                    loading="lazy"
                                />
                                <div className="category-label">{post.category}</div>
                                <div className="image-overlay"></div>
                            </div>

                            {/* 内容区域 */}
                            <div className="post-content">
                                <div className="post-meta">
                                    <span className="post-date">
                                        <motion.span
                                            className="date-icon"
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ delay: 0.4 }}
                                        >
                                            📅
                                        </motion.span>
                                        {post.date}
                                    </span>
                                    <span className="read-time">
                                        <FaClock className="time-icon" />
                                        {post.readTime}
                                    </span>
                                </div>

                                <h2 className="post-title">{post.title}</h2>
                                <p className="post-excerpt">{post.summary}</p>

                                <div className="post-footer">
                                    <div className="tags-container">
                                        <FaTags className="tags-icon" />
                                        <div className="tags-list">
                                            {post.tags.map((tag, index) => (
                                                <motion.span
                                                    key={tag}
                                                    className="tag"
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.5 + index * 0.1 }}
                                                >
                                                    #{tag}
                                                </motion.span>
                                            ))}
                                        </div>
                                    </div>

                                    <motion.div
                                        className="likes-count"
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <FaHeart className="heart-icon" />
                                        <span>{post.likes}</span>
                                    </motion.div>
                                </div>
                            </div>
                        </Link>
                    </motion.article>
                ))}
            </motion.div>
        </div>
    );
};

export default PostList;
