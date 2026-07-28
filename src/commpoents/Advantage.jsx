const Advantage = () => {
  // 三张优势卡片静态数据，内容已经填好你的文案
  const advantageList = [
    {
      title: "高效学习与数字化能力",
      content: "熟悉市面主流 AI 工具，善于运用 AI 赋能工作；适应能力突出，可快速融入新环境、掌握新技能并投入实操。"
    },
    {
      title: "项目落地能力",
      content: "能够独立承担项目板块任务，自主推进工作，保障任务完整落地交付。"
    },
    {
      title: "协同沟通能力",
      content: "具备跨部门协作经验，善于联动多方推进工作，保障事项顺畅推进。"
    }
  ];

  return (
    <section
      id="advantage"
      className="w-full min-h-screen bg-[#0c0c10] px-6 sm:px-10 lg:px-20 py-24 flex flex-col justify-center"
    >
      <style>{`
        .adv-card {
          border: 1px solid rgba(191, 255, 47, 0.18);
          transition: all 0.3s ease;
        }
        .adv-card:hover {
          border-color: rgba(191, 255, 47, 0.5);
          background: rgba(191, 255, 47, 0.04);
          transform: translateY(-6px);
        }
      `}</style>

      {/* 区块标题 */}
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white flex items-center gap-3">
          ADVANTAGE
          <span className="text-neonGreen">↘</span>
        </h2>
        <p className="text-gray-400 mt-2 text-xl">个人优势</p>
      </div>

      {/* 三张优势卡片 PC一行3列 / 手机单列垂直堆叠 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {advantageList.map((item, idx) => (
          <div
            key={idx}
            className="adv-card rounded-xl p-8"
          >
            {/* 序号 */}
            <p className="text-neonGreen text-3xl font-bold opacity-60">0{idx + 1}</p>
            <h3 className="text-white text-xl font-bold mt-4 mb-5">
              {item.title}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {item.content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Advantage;