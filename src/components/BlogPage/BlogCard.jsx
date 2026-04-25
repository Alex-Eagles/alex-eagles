import { Card, CardContent } from "./card";
import { Badge } from "./badge";
import { Calendar, Clock, User } from "lucide-react";

export function BlogCard({ title, excerpt, image, category, date, author, readTime }) {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 bg-white/5 border-white/10 hover:bg-white/10 cursor-pointer group">
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Badge className="absolute top-4 right-4 bg-blue-400 text-blue-950 hover:bg-blue-300">
          {category}
        </Badge>
      </div>
      <CardContent className="p-6 text-white">
        <h3 className="text-2xl mb-3 group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-300 mb-4 line-clamp-2">
          {excerpt}
        </p>
        <div className="flex flex-wrap gap-4 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            <span>{author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{readTime}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
