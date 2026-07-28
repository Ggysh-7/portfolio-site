import TiltedCard from '../specialeffects/TiltedCard';

const Experience = () => {
  // 静态简历数据
  const infoData = {
    avatarImg: "/avatar-3d.jpg", 
    name: "郭雨生",
    desc: "熟练使用Claude Code、Codex、OpenClaw,熟悉VibeCoding式开发提升工作效率。熟练部署本地 AI 人工智能体，配置各种模型 chatgtp、 llma、deepseek 等。掌握React、Vue3 框架进行 web 端项目开发。",
    minzu: "汉族",
    xueli: "本科",
    phone: "15776091572",
    email: "Ggysh_7@163.com",
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
      content: "· 负责工程资料全流程运营管理，确保资料准确性、完整性与规范性\n· 解读并落地工程文件标准规范，制定资料管理流程与模板，优化资料运营效率\n· 跨部门多方协调，跟踪项目进度、统筹数据运营，保障工程节点顺利推进\n· 负责工程数字化平台日常运营、维护与内部培训，提升团队数字化协作能\n· 统筹竣工资料整理、审核、归档与移交，保障资料闭环管理"
    },
    {
      time: "2023.08-2024.08",
      company: "杭州坤云正旺科技有限公司",
      position: "web 前端工发",
      content: "· 参与开发公司私有组件库\n· 根据公司的系统开发学校私有定制的系统并对接甲方持续改善性能和用户体验\n· 开发数字化驾驶舱系统并持续改善性能和用户体验"
    }
  ];

  return (
    <section
      id="experience"
      className="w-full min-h-screen bg-[#0c0c10] px-6 sm:px-10 lg:px-20 py-24 flex flex-col justify-center"
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
      <div className="mb-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white flex items-center gap-3">
          WORK EXPERIENCE
          <span className="text-neonGreen">↘</span>
        </h2>
        <p className="text-gray-400 mt-2 text-xl">个人经历</p>
      </div>

      {/* 上部：头像 + 个人介绍区域（PC左右布局 / 手机上下布局） */}
      <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-10 mb-20">
        {/* 左侧3D头像 */}
      <div className="w-full max-w-[340px] mx-auto lg:mx-0">
        <TiltedCard tiltAmount={12} scaleOnHover={1.04}>
          <img
            src={infoData.avatarImg}
            alt="avatar"
            className="w-full rounded-xl object-cover aspect-[4/5]"
          />
        </TiltedCard>
      </div>

        {/* 右侧个人信息面板 */}
        <div>
          <p className="text-neonGreen text-xs tracking-widest mb-2">ABOUT ME</p>
          <h3 className="text-4xl font-bold text-white mb-4">Hi, I am {infoData.name}!</h3>
          <p className="text-gray-300 text-sm max-w-2xl leading-relaxed mb-6">
            {infoData.desc}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-10 mb-6">
            <div>
              <p className="text-gray-500 text-xs">民族</p>
              <p className="text-white font-medium">{infoData.minzu}</p>
            </div>
            <div>
              <p className="text-gray-500 text-xs">学历</p>
              <p className="text-white font-medium">{infoData.xueli}</p>
            </div>
            <div>
              <p className="text-gray-500 text-xs">手机</p>
              <p className="text-white text-sm">{infoData.phone}</p>
            </div>
            <div>
              <p className="text-gray-500 text-xs">邮箱</p>
              <p className="text-white text-sm">{infoData.email}</p>
            </div>
          </div>

          {/* 数据数字 */}
          <div className="flex items-center gap-8 my-8">
            <div>
              <p className="text-neonGreen text-3xl font-bold">{infoData.projectNum}</p>
              <p className="text-gray-500 text-xs mt-1">项目开发</p>
            </div>
            <div>
              <p className="text-neonGreen text-3xl font-bold">{infoData.workNum}</p>
              <p className="text-gray-500 text-xs mt-1">组件开发</p>
            </div>
          </div>

          {/* 进行中标签 */}
          <div className="flex flex-wrap gap-3 items-center">
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

      {/* 下部：横向时间线（PC横向；手机自动纵向堆叠） */}
      <div>
        <p className="text-right text-gray-400 text-xl mb-8 hidden lg:block">工作经历</p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative career-line">
  {careerList.map((item, idx) => (
    <div key={idx} className="line-dot relative">
      <p className="text-neonGreen text-sm">{item.time}</p>
      <h4 className="text-white font-bold mt-1">{item.company}</h4>
      <span className="inline-block mt-2 px-2 py-0.5 rounded bg-neonGreen/20 text-neonGreen text-xs">
        {item.position}
      </span>
      <p className="text-gray-400 text-xs mt-3 leading-relaxed whitespace-pre-line">
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