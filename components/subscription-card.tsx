import { cn } from "@/lib/utils";
import { Subscription } from "@prisma/client";
import { Check } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

type Props = { subscription: Subscription };

const SubscriptionCard = ({ subscription }: Props) => {
  return (
    <article
      className={cn(
        "bg-gradient-to-r from-gradient_dark-start to-gradient_dark-end h-full border-[#334155] border rounded-2xl p-6  flex-col flex lfex-col",
        subscription.type === "PRO" &&
          "bg-gradient-to-br from-gradient_main-start to-gradient_main-end"
      )}
    >
      <h3 className="first-letter:capitalize font-sans lowercase text-white">
        {subscription.type} Plan
      </h3>
      {/* price */}
      <div className="mt-12 flex items-center justify-between">
        <p className="text-3xl font-bold text-white ">$ {subscription.price}</p>
        <p className="text-gray-300 text-xs font-sans ">
          per editor/mounth
          <br />
          Billed mounthly
        </p>
      </div>
      {/* points */}
      <div className="mt-12 space-y-3 flex-1">
        {(subscription.bulletPoints as { id: string; point: string }[]).map(
          (point) => (
            <span key={point.id} className="flex items-center gap-3 ">
              <span className="w-4 h-4 flex items-center justify-center rounded-full bg-white ">
                <Check className="" size={12} />
              </span>
              <p className="text-gray-300 text-xs font-sans first-letter:capitalize">
                {point.point}
              </p>
            </span>
          )
        )}
      </div>
      <Button
        className={cn(
          "w-full mt-24 bg-backGround hover:bg-backGround/80 hover:text-white border border-neutral-700/[70%] hover:opacity-80 transition-opacity",

          {
            "border-[#a3a3a3] text-black bg-gradient-to-tr from-[#D8D8D8] to-[#DFDFDF] hover:text-black":
              subscription.type === "PRO",
          }
        )}
      >
        Choose Plan
      </Button>
    </article>
  );
};

export default SubscriptionCard;
