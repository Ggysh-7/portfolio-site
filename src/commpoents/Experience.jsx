import TiltedCard from '../specialeffects/TiltedCard';
import OptimizedImage from './OptimizedImage';

const Experience = () => {
  // 静态简历数据
  const infoData = {
    avatarImg: "/avatar-3d.webp", 
    name: "郭雨生",
    desc: "熟练使用Claude Code、Codex、OpenClaw,熟悉VibeCoding式开发提升工作效率。熟练部署本地 AI 人工智能体，配置各种模型 chatgtp、 llma、deepseek 等。掌握React、Vue3 框架进行 web 端项目开发。",
    minzu: "汉族",
    xueli: "本科",
    birthday: "2000年12月10日",
    graduationSchool: "哈尔滨师范大学",
    projectNum: "9+",
    workNum: "100+",
    tags: ["React", "JavaScript", "VibeCoding", "Office"],
  };

  // 工作履历时间线数据
  const careerList = [
    {
      time: "2025.03 - 2026.06",
      company: "哈尔滨德鹏企业管理咨询有限公司",
      position: "项目资料专员",
      content: "· 负责工程资料全流程运营管理，确保资料准确性、完整性与规范性\n· 解读并落地工程文件标准规范，制定资料管理流程与模板，优化资料运营效率\n· 跨部门多方协调，跟踪项目进度、统筹数据运营，保障工程节点顺利推进\n· 负责工程数字化平台日常运营、维护与内部培训，提升团队数字化协作能力\n· 统筹竣工资料整理、审核、归档与移交，保障资料闭环管理"
    },
    {
      time: "2023.08 - 2024.08",
      company: "杭州坤云正旺科技有限公司",
      position: "web 前端开发",
      content: "· 参与开发公司私有组件库\n· 根据公司需求开发学校私有化系统，对接甲方持续改善性能和用户体验\n· 开发数字化驾驶舱系统并持续优化体验"
    }
  ];

  return (
    <section
      id="experience"
      className="w-full min-h-screen bg-transparent px-6 sm:px-10 lg:px-20 py-10 flex flex-col items-start fade-in-element"
      style={{ "--enter-delay": "0.05s" }}
    >
    <style>{`
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
    `}</style>

      {/* 区块标题 */}
      <div className="mb-4 fade-in-element" style={{ "--enter-delay": "0.1s" }}>
        <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center gap-3">
          WORK EXPERIENCE
          <span className="text-neonGreen">↘</span>
        </h2>
        <p className="text-gray-400 mt-1 text-lg">个人经历</p>
      </div>

      {/* 上部：头像 + 个人介绍区域（PC左右布局 / 手机上下布局） */}
      <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-6 mb-6">
        {/* 左侧3D头像：缩小最大宽度，减少垂直高度占用 */}
      <div className="w-full max-w-[300px] mx-auto lg:mx-0 fade-in-element" style={{ "--enter-delay": "0.14s" }}>
        <TiltedCard tiltAmount={12} scaleOnHover={1.04}>
          <OptimizedImage
            src={infoData.avatarImg}
            alt="avatar"
            loading="eager"
            fetchPriority="high"
            containerClassName="rounded-xl aspect-[4/5]"
            className="rounded-xl"
          />
        </TiltedCard>
      </div>

        {/* 右侧个人信息面板 */}
        <div className="fade-in-element" style={{ "--enter-delay": "0.18s" }}>
          <p className="text-neonGreen text-xs tracking-widest mb-1">ABOUT ME</p>
          <h3 className="text-3xl font-bold text-white mb-3">Hi, I am {infoData.name}!</h3>
          <p className="text-gray-300 text-sm max-w-2xl leading-relaxed mb-4">
            {infoData.desc}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8 mb-4 fade-in-element" style={{ "--enter-delay": "0.22s" }}>
            <div>
              <p className="text-gray-500 text-xs">民族</p>
              <p className="text-white font-medium">{infoData.minzu}</p>
            </div>
            <div>
              <p className="text-gray-500 text-xs">学历</p>
              <p className="text-white font-medium">{infoData.xueli}</p>
            </div>
            <div>
              <p className="text-gray-500 text-xs">出生年月</p>
              <p className="text-white text-sm">{infoData.birthday}</p>
            </div>
            <div>
              <p className="text-gray-500 text-xs">毕业院校</p>
              <p className="text-white text-sm">{infoData.graduationSchool}</p>
            </div>
          </div>

          {/* 数据数字 */}
          <div className="flex items-center gap-6 my-4 fade-in-element" style={{ "--enter-delay": "0.26s" }}>
            <div>
              <p className="text-neonGreen text-2xl font-bold">{infoData.projectNum}</p>
              <p className="text-gray-500 text-xs mt-1">项目开发</p>
            </div>
            <div>
              <p className="text-neonGreen text-2xl font-bold">{infoData.workNum}</p>
              <p className="text-gray-500 text-xs mt-1">组件开发</p>
            </div>
          </div>

          {/* 技能标签 */}
          <div className="flex flex-wrap gap-3 items-center fade-in-element" style={{ "--enter-delay": "0.28s" }}>
            <span className="text-gray-500 text-xs">Skill Tag</span>
            {infoData.tags.map((tag,i)=>(
              <span key={i} className="px-2 py-1 bg-white/10 rounded text-xs text-gray-200">
                {tag}
              </span>
            ))}
            <span className="ml-auto text-gray-400 text-sm">技能标签</span>
          </div>
        </div>
      </div>

      {/* ==========工作经历容器增加ID，用于导航直接跳转========== */}
      <div id="career-timeline" className="w-full">
        <p className="text-right text-gray-400 text-lg mb-6 hidden lg:block">工作经历</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 relative career-line">
          {careerList.map((item, idx) => (
            <div key={idx} className="line-dot relative fade-in-element" style={{ "--enter-delay": `${0.1 + idx * 0.08}s` }}>
              <p className="text-neonGreen text-sm">{item.time}</p>
              <h4 className="text-white font-bold mt-1">{item.company}</h4>
              <span className="inline-block mt-1 px-2 py-0.5 rounded bg-neonGreen/20 text-neonGreen text-xs">
                {item.position}
              </span>
              <p className="text-gray-400 text-xs mt-2 leading-relaxed whitespace-pre-line">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;