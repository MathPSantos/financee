import { CaretLeft, CaretRight, DotsNine, LockSimple } from "phosphor-react";
import { HTMLAttributes } from "react";
import { classNames } from "../../../core/utils/classnames";

export function HeroIllustration({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  const compClassName = classNames(
    "hidden md:block w-full h-[552px] lg:rounded-[28px] bg-gradient-to-tr from-[#ED7D98] to-[#D366F6] mt-14 p-12",
    className
  );

  return (
    <div className={compClassName} {...props}>
      <div className="w-full h-full bg-white rounded-t-xl border border-b-0 border-slate-200">
        <div
          className="py-2.5 grid items-center px-4 gap-8 border-b border-slate-200"
          style={{ gridTemplateColumns: "7.125rem 1fr 7.125rem" }}
        >
          <div className="flex items-center">
            <div className="w-2.5 h-2.5 rounded-full bg-[#EC6A5F]" />
            <div className="ml-1.5 w-2.5 h-2.5 rounded-full bg-[#F4BF50]" />
            <div className="ml-1.5 w-2.5 h-2.5 rounded-full bg-[#61C454]" />

            <CaretLeft
              width={24}
              height={24}
              className="ml-4 flex-none text-slate-400"
            />
            <CaretRight
              width={24}
              height={24}
              className="ml-2 flex-none text-slate-400"
            />
          </div>
          <div>
            <div className="bg-slate-100 rounded-md text-xs leading-6 py-1 flex items-center justify-center ring-1 ring-inset ring-slate-900/5 mx-auto w-4/5 text-slate-400">
              <LockSimple
                width={14}
                height={14}
                weight="fill"
                className="text-slate-400 w-3.5 h-3.5 mr-1.5"
              />
              app.financee.com
            </div>
          </div>
          <div className="flex justify-end">
            <DotsNine width={24} height={24} className="text-slate-400" />
          </div>
        </div>
      </div>
    </div>
  );
}
