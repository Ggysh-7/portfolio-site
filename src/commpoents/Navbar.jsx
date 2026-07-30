import { useState } from "react";
import StarBorder from '../specialeffects/StarBorder'

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuList = [
    { label: "工作经历", target: "#experience" },
    { label: "个人优势", target: "#advantage" },
    // { label: "精选作品", target: "#works" },
  ];

  const goTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[96%] max-w-[1240px] rounded-full glass px-6 py-3 flex items-center justify-between">
      {/* 左侧Logo */}
    <div
      onClick={goTop}
      className="bg-neonGreen text-black px-3 py-1 rounded-full font-bold cursor-pointer flex items-center gap-2 select-none text-sm md:text-base"
      // style={{
      //   background: 'linear-gradient(135deg, #088e8d, #ffffff, #1c6c9a)',
      //   boxShadow: '0 0 12px #088e8d, 0 0 24px #1c6c9a, inset 0 0 6px rgba(255,255,255,0.15)'
      // }}
    >
      <span>🐨</span>
      <span>Ggysh</span>
    </div>

      {/* 中间菜单：桌面端展示，手机隐藏 */}
      <div className="hidden md:flex gap-8 text-sm text-gray-200">
        {menuList.map((item, index) => (
          <a
            key={index}
            href={item.target}
            className="hover:text-neonGreen transition-colors duration-200"
          >
            {item.label}
          </a>
        ))}
      </div>

      {/* 右侧【联系我】桌面按钮 */}

      <StarBorder
        as="button"
        className="custom-class"
        color="cyan"
        speed="3s"
      >
        <a
          href="#contact"
          onClick={handleLinkClick}
          //className="hidden md:block px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-sm transition-colors duration-200"
        > 
          联系我
        </a>
          
      </StarBorder>
        

      {/* 移动端汉堡按钮 */}
      <button
        className="md:hidden text-white text-xl"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? "✕" : "☰"}
      </button>

      {/* 移动端弹出菜单 */}
      {mobileMenuOpen && (
        <div className="absolute top-[70px] left-0 w-full glass rounded-2xl py-6 px-6 md:hidden">
          <div className="flex flex-col gap-5">
            {menuList.map((item, index) => (
              <a
                key={index}
                href={item.target}
                onClick={handleLinkClick}
                className="text-gray-200 hover:text-neonGreen transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="mt-2 px-4 py-2 rounded-full bg-white/10 text-center"
            >
              联系我
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;