interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
}

export function TestimonialCard({ quote, author, role, company, avatar }: TestimonialCardProps) {
  return (
    <div className="p-8 lg:p-10 border border-gray-200 rounded-xl bg-white h-full flex flex-col">
      <p className="text-lg lg:text-xl italic text-[#212427] mb-6 leading-relaxed flex-grow">"{quote}"</p>
      <div className="flex items-center gap-4">
        {avatar ? (
          <img 
            src={avatar} 
            alt={author}
            className="w-14 h-14 rounded-full object-cover"
          />
        ) : (
          <div className="w-14 h-14 rounded-full bg-[#DCF9E3] flex items-center justify-center text-[#0E3E1B] font-medium text-lg">
            {author.charAt(0)}
          </div>
        )}
        <div>
          <div className="font-medium text-[#212427] text-base">{author}</div>
          <div className="text-sm text-[#696969]">{role}, {company}</div>
        </div>
      </div>
    </div>
  );
}
