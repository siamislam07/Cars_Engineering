import time from '../../../assets/icons/001-timetable.svg'
import call from '../../../assets/icons/Group 34.svg'
import add from '../../../assets/icons/Group 35.svg'


const Contact = () => {
    return (
        <div className="bg-[#151515] mt-40 mb-40 p-28 rounded-lg w-full md:w-full lg:w-full mx-auto  ">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10 ">
                <div className="flex gap-4 mx-auto items-center">
                    <img src={time} alt="" />
                    <div>
                        <h3>We are open monday-friday</h3>
                        <p className="text-2xl">7:00 am - 9:00 pm</p>
                    </div>
                </div>
                <div className='flex gap-4 mx-auto items-center'>
                    <img src={call} alt="" />
                    <div>
                        <h3>Have a question?</h3>
                        <p className="text-2xl">+2546 251 2658</p>
                    </div>
                </div>
                <div className='flex gap-4 mx-auto items-center'>
                    <img src={add} alt="" />
                    <div>
                        <h3>Need a repair? our address</h3>
                        <p className='text-2xl'>Liza Street, New York</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;