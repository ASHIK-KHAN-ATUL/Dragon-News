import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { LuInstagram } from "react-icons/lu";

const FindUs = () => {
    return (
        <div className="">
            <h2 className="font-semibold">Find Us On</h2>
            <div className="join join-vertical flex ">
                <button className="btn join-item bg-transparent justify-start">
                    <CiFacebook></CiFacebook>Facebook
                </button>
                <button className="btn join-item bg-transparent justify-start">
                    <CiTwitter></CiTwitter>Twitter
                </button>
                <button className="btn join-item bg-transparent justify-start">
                    <LuInstagram></LuInstagram>Instagram
                </button>
            </div>
        </div>
    );
};

export default FindUs;