import { useState } from "react";
import SoftAurora from '../specialeffects/SoftAurora';

const Hero = () => {
   const workList = [
    { imgUrl: "https://s41.ax1x.com/2026/07/30/pmhQAat.png", title: "" },
    { imgUrl: "https://s41.ax1x.com/2026/07/30/pmhQMrj.png", title: "" },
    { imgUrl: "https://s41.ax1x.com/2026/07/30/pmhQZPf.png", title: "" },
    { imgUrl: "https://s41.ax1x.com/2026/07/30/pmhQZPf.png", title: "" },
    { imgUrl: "https://s41.ax1x.com/2026/07/30/pmhQQqs.png", title: "" },
    { imgUrl: "https://s41.ax1x.com/2026/07/30/pmhQEIP.png", title: "" },
    { imgUrl: "https://s41.ax1x.com/2026/07/30/pmhQmRS.png", title: "" },
    { imgUrl: "https://s41.ax1x.com/2026/07/30/pmhQeG8.png", title: "" },
    { imgUrl: "https://s41.ax1x.com/2026/07/30/pmhQKMQ.png", title: "" },
    { imgUrl: "https://s41.ax1x.com/2026/07/30/pmhQnxg.png", title: "" },
  ];

  // 弹窗状态管理
  const [openModal, setOpenModal] = useState(false);
  const [activeWork, setActiveWork] = useState(null);

  // 打开弹窗
  const openPreview = (item) => {
    setActiveWork(item);
    setOpenModal(true);
    document.body.style.overflow = "hidden"; // 禁止页面滚动
  };

  // 关闭弹窗
  const closePreview = () => {
    setOpenModal(false);
    setActiveWork(null);
    document.body.style.overflow = ""; // 恢复滚动
  };

return (
    <section
      id="hero"
      className="relative w-full min-h-screen overflow-hidden flex flex-col justify-center"
    >
      {/* 全局动画样式 */}
      <style>{`
        /* 星星闪烁动画 */
        @keyframes twinkle {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.55; transform: scale(0.92); }
        }
        .star-twinkle {
          animation: twinkle 2.8s ease-in-out infinite;
        }

        /* 无限横向滚动动画 */
        @keyframes scrollLoop {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .scroll-wrap {
          animation: scrollLoop 32s linear infinite;
        }
        .scroll-wrap:hover {
          animation-play-state: paused;
        }

        /* 光晕缓慢浮动动画 */
        @keyframes glowFloat {
          0% { transform: translate(-15%,-10%) scale(1); opacity:0.25; }
          50% { transform: translate(10%,5%) scale(1.15); opacity:0.18; }
          100% { transform: translate(-15%,-10%) scale(1); opacity:0.25; }
        }
        @keyframes glowFloat2 {
          0% { transform: translate(10%,5%) scale(1); opacity:0.15; }
          50% { transform: translate(-10%,-8%) scale(1.2); opacity:0.22; }
          100% { transform: translate(10%,5%) scale(1); opacity:0.15; }
        }
        .glow-layer-1{
          animation: glowFloat 12s ease-in-out infinite;
        }
        .glow-layer-2{
          animation: glowFloat2 16s ease-in-out infinite;
        }

        /* 弹窗淡入动画 */
        @keyframes modalFade {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .modal-wrap {
          animation: modalFade 0.25s ease-out;
        }
      `}</style>

      {/* 底层云海原图 */}
      <div className="absolute inset-0 z-0"> 
        {/* <img src="/bg-hero.jpg" alt="背景云海" className="w-full h-full object-cover" />  */}
        {/* 基础暗化蒙版 */} 
        {/* <div className="absolute inset-0 bg-black/35"></div>  */}
      </div>

      <SoftAurora
        speed={0.6}
        scale={1.5}
        brightness={1}
        color1="#f7f7f7"
        color2="#e100ff"
        noiseFrequency={2.5}
        noiseAmplitude={1}
        bandHeight={0.5}
        bandSpread={1}
        octaveDecay={0.1}
        layerOffset={0}
        colorSpeed={1}
        enableMouseInteraction
        mouseInfluence={0.25}
      />


      {/* 暗化蒙版，叠加在星空上方，统一画面亮度 */}
      <div className="absolute inset-0 z-[0.5] bg-black/35"></div>

      {/* 动态光晕层 */}
      {/* <div className="glow-layer-1 absolute inset-0 z-[1] pointer-events-none">
        <div className="absolute right-[10%] top-[15%] w-[600px] h-[600px] rounded-full bg-amber-400 blur-[120px]"></div>
      </div>
      <div className="glow-layer-2 absolute inset-0 z-[1] pointer-events-none">
        <div className="absolute left-[5%] bottom-[20%] w-[700px] h-[700px] rounded-full bg-sky-400 blur-[140px]"></div>
      </div> */}

      {/* 文字主体内容 响应式调整 */}
      <div className="relative z-10 px-6 sm:px-8 md:px-16 lg:px-24 max-w-[1300px] pt-16 fade-in-element" style={{ "--enter-delay": "0.06s" }}>
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
          <span className="text-neonGreen">Yusheng Guo</span>
          <br />
          <span className="text-white">PORTFOLIO</span>
          <span className="star-twinkle text-2xl sm:text-3xl md:text-5xl align-top ml-2 inline-block">✦</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-100">
          AI 融入生活
          <br />
          让AI提效 让工作更轻松
        </p>
      </div>

      {/* 底部无限自动轮播卡片区域 - 手机缩小尺寸 */}
      <div className="relative z-10 mt-10 md:mt-14 overflow-hidden">
        <div className="scroll-wrap flex gap-3 md:gap-4 w-max">
          {/* 第一组 */}
          {workList.map((item, idx) => (
            <div
              key={idx}
              onClick={() => openPreview(item)}
              className="w-[180px] h-[110px] md:w-[260px] md:h-[160px] rounded-xl overflow-hidden flex-shrink-0 cursor-pointer fade-in-element"
              style={{ "--enter-delay": `${0.08 * idx + 0.12}s` }}
            >
              <img
                src={item.imgUrl}
                alt={`作品${idx + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
          {/* 复制一组，实现无缝衔接无限滚动 */}
          {workList.map((item, idx) => (
            <div
              key={`copy-${idx}`}
              onClick={() => openPreview(item)}
              className="w-[180px] h-[110px] md:w-[260px] md:h-[160px] rounded-xl overflow-hidden flex-shrink-0 cursor-pointer fade-in-element"
              style={{ "--enter-delay": `${0.08 * idx + 0.5}s` }}
            >
              <img
                src={item.imgUrl}
                alt={`作品${idx + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* ========== 作品预览弹窗模块 ========== */}
      {openModal && activeWork && (
        <div
          className="modal-wrap fixed inset-0 z-[9999] bg-black/85 flex items-center justify-center p-4"
          onClick={closePreview}
        >
          {/* 弹窗主体，阻止冒泡 */}
          <div
            className="relative max-w-[1100px] w-full bg-black rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 右上角关闭按钮 */}
            <button
              onClick={closePreview}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-neonGreen/90 text-black flex items-center justify-center font-bold z-10 hover:bg-neonGreen transition"
            >
              ✕
            </button>

            {/* 预览大图 */}
            <img
              src={activeWork.imgUrl}
              alt={activeWork.title}
              className="w-full object-contain max-h-[85vh]"
            />

            {/* 左下角文字（和截图样式一致） */}
            <div className="absolute bottom-6 left-6">
              <h3 className="text-white text-3xl font-bold mt-1">{activeWork.title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;