import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div>
            <h2 className="font-semibold mb-3">Login with</h2>
            <div className="w-full flex flex-col gap-3">
                <button className="btn bg-transparent">
                    <FaGoogle></FaGoogle>Login With Google
                </button>
                <button className="btn bg-transparent">
                    <FaGithub></FaGithub>Login With GitHub
                </button>

            </div>
        </div>
    );
};

export default SocialLogin;