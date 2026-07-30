import MagicBento from '../specialeffects/MagicBento';

const Works = () => {
  // 作品配置 span控制占格 md:col-span-2 横向占两格
  const workItems = [
    {
      span: 'md:col-span-2',
      children: (
        <>
          <h3 className="text-white text-xl font-bold">一体化继续学习教育管理系统</h3>
          <p className="text-gray-400 mt-2 text-sm">项目描述、技术栈 React / Tailwind</p>
        </>
      ),
    },
    {
      children: (
        <>
          <h3 className="text-white text-xl font-bold">一体化继续学习教育自定义驾驶舱系统</h3>
          <p className="text-gray-400 mt-2 text-sm">小型工具项目</p>
        </>
      ),
    },
    {
      children: (
        <>
          <h3 className="text-white text-xl font-bold">荣盛大屏车间管理系统</h3>
          <p className="text-gray-400 mt-2 text-sm">AI相关实践项目</p>
        </>
      ),
    },
    {
      span: 'md:col-span-3',
      children: (
        <>
          <h3 className="text-white text-xl font-bold">实验平台-国富500kV线路工程</h3>
          <p className="text-gray-400 mt-2 text-sm">全过程纸质、电子以及数字系统管控资料，统筹资料运营与项目流程管理，保障工程全周期资料合规、可追溯；工程已竣工且完成资料交档。</p>
        </>
      ),
    },
  ];

  return (
    <section
      id="works"
      className="w-full min-h-screen bg-transparent px-6 sm:px-10 lg:px-20 py-24 flex flex-col justify-center fade-in-element"
      style={{ "--enter-delay": "0.05s" }}
    >
      {/* 区块标题 和全网站风格统一 */}
      <div className="mb-16 fade-in-element" style={{ "--enter-delay": "0.1s" }}>
        <h2 className="text-4xl md:text-5xl font-bold text-white flex items-center gap-3">
          WORKS
          <span className="text-[#bfff2f]">↘</span>
        </h2>
        <p className="text-gray-400 mt-2 text-xl">精选作品</p>
      </div>

      <MagicBento items={workItems} />
    </section>
  );
};

export default Works;