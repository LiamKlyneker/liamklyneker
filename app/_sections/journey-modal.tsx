import { journeyList } from "@/public/journey-data";
import { Typography } from "@/ui/atoms";
import { SideModal } from "@/ui/components";

export default function JourneyModal() {
  return (
    <SideModal title="Jøurney">
      <div className="flex flex-col gap-8">
        {journeyList.map((item) => (
          <article key={item.id} className="max-w-[300px]">
            <Typography variant="h6" className="mb-2">
              {item.date}
            </Typography>
            <Typography variant="p-sm" className="mb-2">
              {item.title} <br />{" "}
              <span className="text-slate-400 font-light">
                at {item.company}
              </span>
            </Typography>
            <Typography variant="p-xs" className="mb-6">
              {item.location}
            </Typography>

            <span className="block w-[90%] h-[2px] bg-lk-turquoise" />
          </article>
        ))}
      </div>
    </SideModal>
  );
}
