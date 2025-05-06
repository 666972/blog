import React from "react";
import './css/About.css'; // 引入CSS文件

function About() {
    return (
        <div className="about-container">
            <div className="about-content">
                <h1 className="title">你好，我是杨一波</h1>
                <p className="description">我是一名技术爱好者，喜欢旅行，探索世界的每一个角落。通过编程，我希望改变世界。</p>
                <div className="card">
                    <div className="card-content">
                        <h2>我的兴趣</h2>
                        <p>旅行，编程，摄影，电影，游戏</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
