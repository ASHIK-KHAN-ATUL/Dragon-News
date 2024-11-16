import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    return (
        <div className="flex items-center bg-[#F3F3F3] p-2 gap-3 ">
            <p className="py-2 px-6 bg-[#D72050] text-base-200 font-semibold ">Latest</p>
            <Marquee pauseOnHover={true} speed={100} className="space-x-2 text-black">
                <Link to="/news" >
                     *National election dates announced! | Dhaka International Trade Fair starts next week. 
                </Link>
                <Link to="/news" >
                     *National election dates announced! | Dhaka International Trade Fair starts next week. 
                </Link>
                <Link to="/news" >
                     *National election dates announced! | Dhaka International Trade Fair starts next week. 
                </Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;