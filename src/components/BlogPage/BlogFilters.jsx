import { Grid3x3, Cpu, Code, Settings } from "lucide-react";

const filters = [
  { id: "all", label: "all", icon: Grid3x3 },
  { id: "hardware", label: "hardware", icon: Cpu },
  { id: "software", label: "software", icon: Code },
  { id: "mechanical", label: "mechanical", icon: Settings }
];

export function BlogFilters({ activeFilter, onFilterChange }) {
  return (
    <div className="flex flex-wrap gap-3 mb-12">
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => onFilterChange(filter.id)}
          className={`px-6 py-2 rounded-full transition-all flex items-center gap-2 ${
            activeFilter === filter.id
              ? "bg-blue-400 text-blue-950"
              : "bg-white/10 text-white hover:bg-white/20"
          }`}
        >
          <filter.icon className="w-4 h-4" />
          {filter.label}
        </button>
      ))}
    </div>
  );
}