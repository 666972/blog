import React from 'react';
import './css/Footer.css';

function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-image-container">
                {/* 背景图片 */}
                <img
                    src="https://tse2-mm.cn.bing.net/th/id/OIP-C.tcjY9z5CQkVdIYMw-n-YZAHaD-?rs=1&pid=ImgDetMain"
                    alt="页脚背景"
                    className="footer-bg-image"
                />

                {/* 覆盖在图片上的文字内容 */}
                <div className="footer-text-overlay">
                    <p className="poem-line">云想衣裳花想春，布局解框留华光。</p>
                    <div className="footer-info">
                        <p>本网站由 我们的小家 第 1页为 2025.5.3 6:51</p>
                        <p>本网站部分内容来源于网络，仅供大家学习参考。</p>
                        <p>本网站广的内容不代表本站立场，并不代表本站赞同其观点和对其真实性负责。</p>
                        <p>如无意中侵犯了某个企业或个人的知识产权，请及时通过电子邮件(<a href="1521666923@qq.com">1521666923@qq.com</a>)告知我们。本网站将立即公开删除。</p>
                    </div>
                </div>
            </div>

            {/* 添加波浪动画 */}
            <div className="footer-wave"></div>
        </footer>
    );
}

export default Footer;
