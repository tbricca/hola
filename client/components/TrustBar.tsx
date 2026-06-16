export interface TrustBarProps {
  rating?: string;
  ratingMax?: string;
  starImageSrc?: string;
  reviewCount?: string;
  platformName?: string;
}

export default function TrustBar({
  rating = "4.7",
  ratingMax = "5",
  starImageSrc = "https://media.holafly.com/public/images/common/trustpilot-star.png?width=40&height=40&optimize=medium&fit=cover&quality=80&format=webp",
  reviewCount = "97,343+",
  platformName = "TrustPilot",
}: TrustBarProps) {
  return (
    <section className="w-full bg-holafly-light py-4">
      <div className="mx-auto max-w-[1440px] w-[90%]">
        <div className="flex items-center gap-4 justify-start mx-auto w-[86%] py-6">
          <div className="flex items-center gap-2">
            <div className="flex items-center mr-2">
              <span className="text-5xl font-medium leading-[48px]">
                {rating}
              </span>
              <span className="text-[34px] font-medium leading-[34px]">
                /{ratingMax}
              </span>
            </div>
            <img
              alt="star"
              width={40}
              height={40}
              loading="lazy"
              src={starImageSrc}
              className="w-10 h-10 min-w-[40px] min-h-[40px]"
            />
          </div>
          <div className="flex flex-col">
            <p className="text-base leading-6 text-left">
              Based on {reviewCount}
              <br className="sm:hidden" />
              {" "}customer reviews on{" "}
              <span className="font-bold underline cursor-pointer">
                {platformName}
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
