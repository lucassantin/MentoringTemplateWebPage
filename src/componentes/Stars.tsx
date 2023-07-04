interface onStarsProps {
  source: string;
  alt: string;
}

export function Stars({ alt, source }: onStarsProps) {
  return (
    <span className="flex flex-row gap-2">
      <img src={source} alt={alt} className="h-[32px] w-[32px]" />
      <img src={source} alt={alt} className="h-[32px] w-[32px]" />
      <img src={source} alt={alt} className="h-[32px] w-[32px]" />
      <img src={source} alt={alt} className="h-[32px] w-[32px]" />
      <img src={source} alt={alt} className="h-[32px] w-[32px]" />
    </span>
  );
}
