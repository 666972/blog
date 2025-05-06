import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './css/Home.css';

function Home() {
    const [activeTab, setActiveTab] = useState('profile'); // 'profile' 或 'functions'

    return (
        <div className="home-container">
            {/* 左侧边栏 */}
            <motion.div
                className="sidebar"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {/* 公告栏卡片 */}
                <motion.div
                    className="card"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <div className="notice-section">
                        <div className="card-header">
                            小窝公告栏
                        </div>
                        <motion.h2
                            className="notice-subtitle card-content"
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            天行健，君子以自强不息
                        </motion.h2>
                    </div>
                </motion.div>

                <div className="divider"></div>

                {/* 导航栏卡片 */}
                <motion.div
                    className="card"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <div className="nav-section">
                        <div className="card-header">
                            导航
                        </div>
                        <ul className="nav-list">
                            <motion.li
                                className="nav-item"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link to="/">首页</Link>
                            </motion.li>
                            <motion.li
                                className="nav-item"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link to="/Post">文章</Link>
                            </motion.li>
                            <motion.li
                                className="nav-item"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link to="/sayings">说说</Link>
                            </motion.li>
                            <motion.li
                                className="nav-item"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link to="/archives">归档</Link>
                            </motion.li>
                        </ul>
                    </div>
                </motion.div>

                <div className="divider"></div>

                {/* 个人简介卡片 - 位于导航栏下方 */}
                <motion.div
                    className="profile-card"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    <div className="profile-header">
                        <div className="profile-tabs">
                            <span
                                className={activeTab === 'profile' ? 'active' : ''}
                                onClick={() => setActiveTab('profile')}
                            >
                                个人简介
                            </span>
                            <span
                                className={activeTab === 'functions' ? 'active' : ''}
                                onClick={() => setActiveTab('functions')}
                            >
                                功能
                            </span>
                        </div>

                        {activeTab === 'profile' ? (
                            <div className="profile-content">
                                <div className="avatar-name">
                                    <div className="avatar"></div>
                                    <div className="name-bio">
                                        <h3>思念</h3>
                                        <p>普普通通的人</p>
                                    </div>
                                </div>
                                <div className="stats">
                                    <div className="stat-item">
                                        <span className="stat-number">74</span>
                                        <span className="stat-label">文章</span>
                                    </div>
                                    <div className="stat-item">
                                        <span className="stat-number">18</span>
                                        <span className="stat-label">分类</span>
                                    </div>
                                    <div className="stat-item">
                                        <span className="stat-number">18</span>
                                        <span className="stat-label">标签</span>
                                    </div>
                                </div>
                                <div className="social-links">
                                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
                                    <a href="/rss" target="_blank" rel="noopener noreferrer">RSS</a>
                                </div>
                            </div>
                        ) : (
                            <div className="functions-content">
                                <div className="external-links">
                                    <Link to="/links">Links</Link>
                                    <Link to="/music">Music</Link>
                                    <a href="https://bilibili.com" target="_blank" rel="noopener noreferrer">Bilibili</a>
                                </div>
                                <div className="function-items">
                                    <div className="function-item">
                                        <h4>文章搜索</h4>
                                        <p>快速查找站内所有文章</p>
                                    </div>
                                    <div className="function-item">
                                        <h4>标签分类</h4>
                                        <p>按标签浏览相关内容</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </motion.div>
            </motion.div>

            {/* 右侧内容区域 */}
            <motion.div
                className="content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
            >
                {/* 主贝日常卡片 */}
                <motion.div
                    className="theme-card"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    <img src="https://th.bing.com/th/id/R.6331f0f19bd5c19eaab5a82ded68168b?rik=AWHBNCasx1qW0A&riu=http%3a%2f%2fimg.7qile.com%2fsmm202303%2f2300.jpg&ehk=39HajBKuSRO%2bkyF2d3QRVvoLJEAsxhxkwit13MM3cXo%3d&risl=&pid=ImgRaw&r=0" alt="Image" />
                    <div className="content-wrapper">
                        <div className="theme-header">
                            <span className="theme-category">首页</span>
                            <span className="theme-date">[2025-05-05]</span>
                            <span className="theme-title">大圈的主奴日常</span>
                        </div>

                        <div className="theme-content">
                            <p>“网恋，虽然隔着屏幕，但每一次消息的跳动，仿佛都在拉近彼此的距离。虽然从未见面，但每一个字，每一声问候，都是我们心与心的碰撞，虚拟世界中的真切感动。”
                            </p>
                        </div>

                        <div className="theme-footer">
                            <div className="theme-stats">
                                <motion.span
                                    className="stat-item"
                                    whileHover={{ background: 'linear-gradient(145deg, #ff7e5f, #feb47b)' }}
                                    transition={{ duration: 0.3 }}
                                >
                                    阅读量：[93,165]
                                </motion.span>
                                <motion.span
                                    className="stat-item"
                                    whileHover={{ background: 'linear-gradient(145deg, #ff7e5f, #feb47b)' }}
                                    transition={{ duration: 0.3 }}
                                >
                                    评论数：[769]
                                </motion.span>
                            </div>
                            <div className="theme-update">
                                关于"小圈的主贝日常"更新信息 &lt;23/11/18&gt;：新增了每日精彩内容插件。
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* 校园网问题卡片 */}
                <motion.div
                    className="theme-card"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.9 }}
                >
                    <img src="https://th.bing.com/th/id/OIP.w85Wq-7jlQLcvBTEnZ9ZiQHaHa?rs=1&pid=ImgDetMain" alt="Image" />
                    <div className="content-wrapper">
                        <div className="theme-header">
                            <motion.span
                                className="theme-category"
                                whileHover={{ background: 'linear-gradient(145deg, #ff7e5f, #feb47b)' }}
                                transition={{ duration: 0.3 }}
                            >
                                技术
                            </motion.span>
                            <span className="theme-date">[2023-09-12]</span>
                            <span className="theme-title">校园网连接问题：无Internet，开放</span>
                        </div>

                        <div className="theme-content">
                            <p>昨晚突然连不上网，虽然连接了校园网，但是显示无Internet，开放，进不去校园网登录验证页。最后靠两个命令激活了，主要原因就是win11的bug~打开cmd，输入 ipconfig /release ipconfig /renew 释放和重新获取ip地址（计算机三级网络技术竟然有，白学了）</p>
                        </div>

                        <div className="theme-footer">
                            <div className="theme-stats">
                                <motion.span
                                    className="stat-item"
                                    whileHover={{ background: 'linear-gradient(145deg, #ff7e5f, #feb47b)' }}
                                    transition={{ duration: 0.3 }}
                                >
                                    阅读量：[2]
                                </motion.span>
                                <motion.span
                                    className="stat-item"
                                    whileHover={{ background: 'linear-gradient(145deg, #ff7e5f, #feb47b)' }}
                                    transition={{ duration: 0.3 }}
                                >
                                    评论数：[13]
                                </motion.span>
                                <span className="stat-item">时间：[17:27]</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default Home;