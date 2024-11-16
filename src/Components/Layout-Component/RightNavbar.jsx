import AddVise from "../AddVise";
import FindUs from "../FindUs";
import QZone from "../QZone";
import SocialLogin from "../SocialLogin";

const RightNavbar = () => {
    return (
        <div className="space-y-8">
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
            <QZone></QZone>
            <AddVise></AddVise>
        </div>
    );
};

export default RightNavbar;