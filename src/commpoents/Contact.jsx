import { useRef, useState, useEffect } from 'react';

const Contact = () => {
  // 联系方式静态数据，自行修改
  const contactData = {
    phone: "15776091572",
    wechat: "Ggysh7-",
    email: "Ggysh_7@163.com",
    // tagline: "微信二维码",
    qrcode: "/qrcode.png"
  };

  // 文字内容
  const textContent = {
    topTitle: "联系我",
    line1: "In the same boat,",
    line2: " to the same horizon.",
    line3: "Eager to Cooperate."
  };

  return (
    <section id="contact" className="w-full min-h-screen flex items-center overflow-hidden relative px-6 lg:px-16">
      {/* 淡绿色光晕装饰，如果你不需要这个背景光斑，可以直接删除这一整行 */}
      {/* <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#bfff2f]/5 rounded-full blur-[120px]"></div> */}

      <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-20 items-center">
        {/* 左侧文字区域 */}
        <div className="order-1 lg:order-1">
          <p className="text-gray-400 text-lg mb-3">{textContent.topTitle}</p>
          <h2 className="text-white font-bold leading-[1.1] text-[clamp(1.6rem,3.8vw,3.2rem)] uppercase">
            {textContent.line1}<br />
            {textContent.line2}<br />
            <span className="text-[#bfff2f]">{textContent.line3}</span>
          </h2>

          {/* 左下角标签按钮 */}
          <div className="mt-10 inline-flex items-center gap-2 bg-[#bfff2f] text-black font-semibold px-5 py-3 rounded-full">
            <span>👨‍💻</span>
            <span>Guo YuSheng</span>
          </div>
        </div>

        {/* 右侧 玻璃质感联系卡片 */}
        <div className="order-2 lg:order-2 flex justify-center lg:justify-end">
          <div className="w-full max-w-[360px] bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
            <h3 className="text-[#bfff2f] text-xl font-bold mb-6">CONTACT</h3>
            
            <div className="flex flex-col gap-4 text-gray-200">
              <div className="py-2 border-b border-white/10">手机：{contactData.phone}</div>
              <div className="py-2 border-b border-white/10">微信号：{contactData.wechat}</div>
              <div className="py-2 border-b border-white/10">邮箱：{contactData.email}</div>
            </div>

            <p className="text-gray-500 text-sm mt-4 mb-6">{contactData.tagline}</p>

            {/* 二维码区域 */}
            <div className="bg-black/60 rounded-xl p-3 w-[160px]">
              <img
                src={contactData.qrcode}
                alt="微信二维码"
                className="w-full object-cover rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;