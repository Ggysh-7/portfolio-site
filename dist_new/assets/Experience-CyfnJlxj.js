import{r as e,t}from"./reactVendor-CksyRl77.js";import{t as n}from"./index-NX7u38db.js";var r=e(),i=t(),a=({children:e,tiltAmount:t=12,scaleOnHover:n=1.04,transformOrigin:a=`center center`})=>{let o=(0,r.useRef)(null),[s,c]=(0,r.useState)(``);return(0,i.jsx)(`div`,{ref:o,onMouseMove:e=>{if(!o.current)return;let r=o.current.getBoundingClientRect(),i=e.clientX-r.left,a=e.clientY-r.top,s=r.width,l=((a/r.height-.5)*-t).toFixed(2),u=((i/s-.5)*t).toFixed(2);c(`perspective(800px) rotateX(${l}deg) rotateY(${u}deg) scale3d(${n}, ${n}, ${n})`)},onMouseLeave:()=>{c(`perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)`)},style:{transform:s,transformOrigin:a,transition:`transform 0.12s ease-out`,willChange:`transform`},children:e})},o=()=>{let e={avatarImg:`/avatar-3d.webp`,name:`郭雨生`,desc:`熟练使用Claude Code、Codex、OpenClaw,熟悉VibeCoding式开发提升工作效率。熟练部署本地 AI 人工智能体，配置各种模型 chatgtp、 llma、deepseek 等。掌握React、Vue3 框架进行 web 端项目开发。`,minzu:`汉族`,xueli:`本科`,birthday:`2000年12月10日`,graduationSchool:`哈尔滨师范大学`,projectNum:`9+`,workNum:`100+`,tags:[`React`,`JavaScript`,`VibeCoding`,`Office`]};return(0,i.jsxs)(`section`,{id:`experience`,className:`w-full min-h-screen bg-transparent px-6 sm:px-10 lg:px-20 py-10 flex flex-col items-start fade-in-element`,style:{"--enter-delay":`0.05s`},children:[(0,i.jsx)(`style`,{children:`
      .career-line {
        position: relative;
        padding-top: 30px;
        overflow: visible;
      }

      /* 水平基线：固定渐变 浅绿 → 深墨绿 */
      .career-line::before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: 14px;
        height: 2px;
        background: linear-gradient(90deg, #bfff2f, #1a2e10);
        z-index: 1;
      }

      /* 清除多余伪元素 */
      .career-line::after {
        content: none;
      }

      .line-dot {
        position: relative;
      }

      /* 左侧圆点（匹配渐变起点：亮浅绿） */
      .line-dot:nth-child(1)::before {
        content: "";
        position: absolute;
        left: 0;
        top: -18px;
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: #bfff2f;
        z-index: 3;
      }

      /* 右侧圆点（匹配渐变终点：深墨绿色） */
      .line-dot:nth-child(2)::before {
        content: "";
        position: absolute;
        left: 0;
        top: -18px;
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: #6a931f;
        z-index: 3;
      }
    `}),(0,i.jsxs)(`div`,{className:`mb-4 fade-in-element`,style:{"--enter-delay":`0.1s`},children:[(0,i.jsxs)(`h2`,{className:`text-3xl md:text-4xl font-bold text-white flex items-center gap-3`,children:[`WORK EXPERIENCE`,(0,i.jsx)(`span`,{className:`text-neonGreen`,children:`↘`})]}),(0,i.jsx)(`p`,{className:`text-gray-400 mt-1 text-lg`,children:`个人经历`})]}),(0,i.jsxs)(`div`,{className:`grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-6 mb-6`,children:[(0,i.jsx)(`div`,{className:`w-full max-w-[300px] mx-auto lg:mx-0 fade-in-element`,style:{"--enter-delay":`0.14s`},children:(0,i.jsx)(a,{tiltAmount:12,scaleOnHover:1.04,children:(0,i.jsx)(n,{src:e.avatarImg,alt:`avatar`,loading:`eager`,fetchPriority:`high`,containerClassName:`rounded-xl aspect-[4/5]`,className:`rounded-xl`})})}),(0,i.jsxs)(`div`,{className:`fade-in-element`,style:{"--enter-delay":`0.18s`},children:[(0,i.jsx)(`p`,{className:`text-neonGreen text-xs tracking-widest mb-1`,children:`ABOUT ME`}),(0,i.jsxs)(`h3`,{className:`text-3xl font-bold text-white mb-3`,children:[`Hi, I am `,e.name,`!`]}),(0,i.jsx)(`p`,{className:`text-gray-300 text-sm max-w-2xl leading-relaxed mb-4`,children:e.desc}),(0,i.jsxs)(`div`,{className:`grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8 mb-4 fade-in-element`,style:{"--enter-delay":`0.22s`},children:[(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`p`,{className:`text-gray-500 text-xs`,children:`民族`}),(0,i.jsx)(`p`,{className:`text-white font-medium`,children:e.minzu})]}),(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`p`,{className:`text-gray-500 text-xs`,children:`学历`}),(0,i.jsx)(`p`,{className:`text-white font-medium`,children:e.xueli})]}),(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`p`,{className:`text-gray-500 text-xs`,children:`出生年月`}),(0,i.jsx)(`p`,{className:`text-white text-sm`,children:e.birthday})]}),(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`p`,{className:`text-gray-500 text-xs`,children:`毕业院校`}),(0,i.jsx)(`p`,{className:`text-white text-sm`,children:e.graduationSchool})]})]}),(0,i.jsxs)(`div`,{className:`flex items-center gap-6 my-4 fade-in-element`,style:{"--enter-delay":`0.26s`},children:[(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`p`,{className:`text-neonGreen text-2xl font-bold`,children:e.projectNum}),(0,i.jsx)(`p`,{className:`text-gray-500 text-xs mt-1`,children:`项目开发`})]}),(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`p`,{className:`text-neonGreen text-2xl font-bold`,children:e.workNum}),(0,i.jsx)(`p`,{className:`text-gray-500 text-xs mt-1`,children:`组件开发`})]})]}),(0,i.jsxs)(`div`,{className:`flex flex-wrap gap-3 items-center fade-in-element`,style:{"--enter-delay":`0.28s`},children:[(0,i.jsx)(`span`,{className:`text-gray-500 text-xs`,children:`Skill Tag`}),e.tags.map((e,t)=>(0,i.jsx)(`span`,{className:`px-2 py-1 bg-white/10 rounded text-xs text-gray-200`,children:e},t)),(0,i.jsx)(`span`,{className:`ml-auto text-gray-400 text-sm`,children:`技能标签`})]})]})]}),(0,i.jsxs)(`div`,{id:`career-timeline`,className:`w-full`,children:[(0,i.jsx)(`p`,{className:`text-right text-gray-400 text-lg mb-6 hidden lg:block`,children:`工作经历`}),(0,i.jsx)(`div`,{className:`grid grid-cols-1 md:grid-cols-2 gap-5 relative career-line`,children:[{time:`2025.03 - 2026.06`,company:`哈尔滨德鹏企业管理咨询有限公司`,position:`项目资料专员`,content:`· 负责工程资料全流程运营管理，确保资料准确性、完整性与规范性
· 解读并落地工程文件标准规范，制定资料管理流程与模板，优化资料运营效率
· 跨部门多方协调，跟踪项目进度、统筹数据运营，保障工程节点顺利推进
· 负责工程数字化平台日常运营、维护与内部培训，提升团队数字化协作能力
· 统筹竣工资料整理、审核、归档与移交，保障资料闭环管理`},{time:`2023.08 - 2024.08`,company:`杭州坤云正旺科技有限公司`,position:`web 前端开发`,content:`· 参与开发公司私有组件库
· 根据公司需求开发学校私有化系统，对接甲方持续改善性能和用户体验
· 开发数字化驾驶舱系统并持续优化体验`}].map((e,t)=>(0,i.jsxs)(`div`,{className:`line-dot relative fade-in-element`,style:{"--enter-delay":`${.1+t*.08}s`},children:[(0,i.jsx)(`p`,{className:`text-neonGreen text-sm`,children:e.time}),(0,i.jsx)(`h4`,{className:`text-white font-bold mt-1`,children:e.company}),(0,i.jsx)(`span`,{className:`inline-block mt-1 px-2 py-0.5 rounded bg-neonGreen/20 text-neonGreen text-xs`,children:e.position}),(0,i.jsx)(`p`,{className:`text-gray-400 text-xs mt-2 leading-relaxed whitespace-pre-line`,children:e.content})]},t))})]})]})};export{o as default};