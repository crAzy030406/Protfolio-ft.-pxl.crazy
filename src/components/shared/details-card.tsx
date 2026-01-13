
import { LucideIcon } from 'lucide-react';

interface Detail {
  icon: LucideIcon;
  label: string;
  value: string;
}

interface DetailsCardProps {
  details: Detail[];
}

export default function DetailsCard({ details }: DetailsCardProps) {
  return (
    <div className="absolute w-full h-full bg-transparent rounded-3xl flex items-center justify-center border border-white/20">
        <div className="w-full h-full bg-black/10 backdrop-blur-md rounded-3xl flex flex-col justify-center items-center p-8 font-helvetica">
        <div className="text-center space-y-4">
            {details.map((detail, index) => (
                <div key={index}>
                    <p className="text-sm text-white/70">{detail.label}</p>
                    <h3 className="text-2xl font-bold text-white">{detail.value}</h3>
                </div>
            ))}
        </div>
        </div>
    </div>
  );
}
