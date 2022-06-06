import { Icon } from "phosphor-react";

import { Heading } from "../../../components/common";

interface FeatureItemProps {
  Icon: Icon;
  title: string;
  description: string;
}

export function HorizontalFeatureItem({
  title,
  description,
  Icon,
}: FeatureItemProps) {
  return (
    <div className="group flex items-start gap-8">
      {/* Icon */}
      <div className="p-3 rounded-full border-2 border-pink-500">
        <Icon className="text-slate-700" size={28} />
      </div>

      {/* Content */}
      <div className="flex-1 pb-6 border-b border-b-slate-200 group-last:border-b-0 group-last:pb-0">
        <Heading level={3}>{title}</Heading>
        <p className="mt-3">{description}</p>
      </div>
    </div>
  );
}
