
export default function GlobalMarquee() {
  return (
    <div className="bg-gradient-to-r from-orange-500 to-blue-900 text-white shadow-sm overflow-hidden">
      <div className="marquee-container relative w-full">
        <div className="marquee inline-flex whitespace-nowrap text-sm font-medium tracking-wide py-2">
          <span className="mx-16">
            This is a private consultancy self-registration portal owned by <a href="https://legalpapersindia.com/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 underline">EASRISE LEGALPAPERS MANAGEMENT (OPC) PRIVATE LIMITED</a> for obtaining import export code. Portal fees are consultancy in nature.
          </span>
          <span className="mx-16">
            This is a private consultancy self-registration portal owned by <a href="https://legalpapersindia.com/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 underline">EASRISE LEGALPAPERS MANAGEMENT (OPC) PRIVATE LIMITED</a> for obtaining import export code. Portal fees are consultancy in nature.
          </span>        
          </div>
      </div>
    </div>
  );
}