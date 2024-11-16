import pic1 from '../assets/swimming.png'
import pic2 from '../assets/class.png'
import pic3 from '../assets/playground.png'

const QZone = () => {
    return (
        <div className='bg-[#F3F3F3] p-4 '>
            <h2 className='font-semibold'>Q-Zone</h2>
            <div className='flex flex-col justify-center items-center'>
                <img src={pic1} alt="" />
                <img src={pic2} alt="" />
                <img src={pic3} alt="" />
            </div>
        </div>
    );
};

export default QZone;