export default function TrustBar() {
  return (
    <section className="w-full bg-holafly-light py-4">
      <div className="mx-auto max-w-[1440px] w-[90%]">
        <div className="flex items-center gap-4 justify-start mx-auto w-[86%] py-6">
          <div className="flex items-center gap-2">
            <div className="flex items-center mr-2">
              <span className="text-5xl font-medium leading-[48px]">4.7</span>
              <span className="text-[34px] font-medium leading-[34px]">/5</span>
            </div>
            <img
              alt="star"
              width={40}
              height={40}
              loading="lazy"
              src="https://media.holafly.com/public/images/common/trustpilot-star.png?width=40&height=40&optimize=medium&fit=cover&quality=80&format=webp"
              className="w-10 h-10 min-w-[40px] min-h-[40px]"
            />
          </div>
          <div className="flex flex-col">
            <p className="text-base leading-6 text-left">
              Based on 97,343+
              <br className="sm:hidden" />
              {" "}customer reviews on{" "}
              <span className="font-bold underline cursor-pointer">
                TrustPilot
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
