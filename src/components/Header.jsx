import { Link } from 'react-router-dom';
import './css/Header.css';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
    FaHome,
    FaBook,
    FaCommentDots,
    FaLink,
    FaUser,
    FaBookOpen,
    FaSearch,
    FaTimes
} from 'react-icons/fa';

function Header() {
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const fullTitle = "loove you for your company";
    const fullSubtitle = "ouur future has always been together";
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    useEffect(() => {
        let titleInterval;
        let subtitleInterval;

        if (isHomePage) {
            let i = 0;
            titleInterval = setInterval(() => {
                if (i < fullTitle.length) {
                    setTitle(prev => prev + fullTitle.charAt(i));
                    i++;
                } else {
                    clearInterval(titleInterval);
                    let j = 0;
                    subtitleInterval = setInterval(() => {
                        if (j < fullSubtitle.length) {
                            setSubtitle(prev => prev + fullSubtitle.charAt(j));
                            j++;
                        } else {
                            clearInterval(subtitleInterval);
                        }
                    }, 100);
                }
            }, 100);

            // Cleanup the intervals when the component is unmounted or location changes
            return () => {
                clearInterval(titleInterval);
                clearInterval(subtitleInterval);
            };
        }
    }, [isHomePage]);

    const toggleSearch = () => {
        setShowSearch(!showSearch);
    };

    return (
        <>
            <div className="top-navbar">
                <div className="header-container">
                    <div className="brand">
                        <FaBookOpen className="brand-icon" /> 我们的小家
                    </div>
                    <nav className="navigation">
                        <Link to="/"><FaHome className="nav-icon" /> 首页</Link>
                        <Link to="/posts"><FaBook className="nav-icon" /> 文章</Link>
                        <Link to="/thoughts"><FaCommentDots className="nav-icon" /> 碎碎念</Link>
                        <Link to="/mistakes"><FaLink className="nav-icon" /> 友链</Link>
                        <Link to="/about"><FaUser className="nav-icon" /> 关于</Link>
                        <Link to="/guestbook"><FaBookOpen className="nav-icon" /> 留言板</Link>
                        <div className="search-container">
                            {showSearch && (
                                <input
                                    type="text"
                                    placeholder="搜索..."
                                    className="search-input"
                                    autoFocus
                                />
                            )}
                            <button
                                className="search-button"
                                onClick={toggleSearch}
                            >
                                {showSearch ? <FaTimes /> : <FaSearch />}
                            </button>
                        </div>
                    </nav>
                </div>
            </div>

            {isHomePage && (
                <header className="blog-header">
                    <div className="blog-info">
                        <div className="blog-title">{title}<span className="cursor">|</span></div>
                        <div className="blog-subtitle">{subtitle}</div>
                    </div>
                </header>
            )}
        </>
    );
}

export default Header;
