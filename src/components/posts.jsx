export const posts = [
    {
        id: 1,
        title: "探索React 18的新特性",
        category: "技术",
        date: "2023年5月15日",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        content: `
      <p>React 18带来了许多令人兴奋的新特性，其中最引人注目的是并发渲染(Concurrent Rendering)。这一特性允许React在渲染过程中中断和恢复工作，从而提供更流畅的用户体验。</p>
      
      <p>另一个重要特性是自动批处理(Automatic Batching)，它可以将多个状态更新合并为单个重新渲染，从而提高性能。</p>
      
      <p>此外，React 18还引入了新的API如<code>useTransition</code>和<code>useDeferredValue</code>，这些API可以帮助开发者更好地控制渲染优先级。</p>
      
      <p>要升级到React 18，只需运行：</p>
      
      <pre><code>npm install react@18 react-dom@18</code></pre>
      
      <p>然后使用新的<code>createRoot</code>API替换原来的<code>ReactDOM.render</code>：</p>
      
      <pre><code>import { createRoot } from 'react-dom/client';
      
const root = createRoot(document.getElementById('root'));
root.render(&lt;App /&gt;);</code></pre>
    `,
        likes: 128,
        comments: 24,
        tags: ["React", "前端", "JavaScript"],
        author: {
            name: "张技术",
            avatar: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        commentsList: [
            {
                id: 1,
                name: "李前端",
                avatar: "https://randomuser.me/api/portraits/women/44.jpg",
                date: "2023年5月16日",
                text: "非常详细的介绍，感谢分享！我已经在项目中尝试了useTransition，效果确实不错。"
            },
            {
                id: 2,
                name: "王开发者",
                avatar: "https://randomuser.me/api/portraits/men/22.jpg",
                date: "2023年5月17日",
                text: "请问自动批处理在类组件中也适用吗？还是仅限于函数组件和hooks？"
            }
        ]
    },
    // 更多文章...
];