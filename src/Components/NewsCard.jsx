
import { FaShareAlt, FaRegEye, FaStar } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const {
    author,
    published_date,
    title,
    details,
    image_url,
    total_view,
    rating,
  } = news;
  return (
    <div className="mb-4">
      <div className="card bg-base-100 shadow-lg border rounded-lg">
        {/* Header Section */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-3">
            <img
              src={author.img}
              alt={author.name}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h3 className="font-medium">{author.name}</h3>
              <p className="text-sm text-gray-500">{published_date}</p>
            </div>
          </div>
          <button className="text-gray-500 hover:text-gray-800">
            <FaShareAlt />
          </button>
        </div>

        {/* Title and Image */}
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-3">{title}</h2>
          <img
            src={image_url}
            alt={title}
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>

        {/* Details Section */}
        <div className="p-4 text-gray-600 text-sm">
          {details.substring(0, 200)}...{" "}
          <span className="text-blue-500 font-medium cursor-pointer">
            Read More
          </span>
        </div>

        {/* Footer Section */}
        <div className="flex items-center justify-between p-4 border-t">
          {/* Rating */}
          <div className="flex items-center gap-1 text-yellow-500">
            {[...Array(Math.floor(rating.number))].map((_, i) => (
              <FaStar key={i} />
            ))}
            <span className="text-gray-600 ml-2">{rating.badge}</span>
          </div>

          {/* Views */}
          <div className="flex items-center text-gray-500 gap-1">
            <FaRegEye />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
