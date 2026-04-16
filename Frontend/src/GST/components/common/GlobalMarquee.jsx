export default function GlobalMarquee() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-sm overflow-hidden">
      <div className="marquee-container relative w-full">
        <div className="marquee inline-flex whitespace-nowrap text-sm font-medium tracking-wide py-2">
          <span className="mx-16">
            This is a private consultancy self-registration portal for obtaining GST registration. 
            Portal fees are consultancy charges and not government fees.
          </span>
          <span className="mx-16">
            This is a private consultancy self-registration portal for obtaining GST registration. 
            Portal fees are consultancy charges and not government fees.
          </span>
        </div>
      </div>
    </div>
  );
}