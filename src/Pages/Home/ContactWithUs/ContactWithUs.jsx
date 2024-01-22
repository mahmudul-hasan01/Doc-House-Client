import logo1 from '../../../assets/Frame (2).png'
import logo2 from '../../../assets/Frame (1).png'

const ContactWithUs = () => {
    return (
        <div className='flex justify-center items-center rounded-lg p-20 gap-4 bg-[#07332F] h-[500px] w-[95%] mx-auto'>
            <div className='flex-1 text-white space-y-3'>
                <h1 className="text-3xl text-white font-bold">Contact With Us</h1>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi.</p>
                <div className='flex items-center gap-3'>
                    <img src={logo1} alt="" />
                    <p>+88 01750 14 14 14</p>
                </div>
                <div className='flex items-center gap-3'>
                    <img src={logo2} alt="" />
                    <p>Dhanmondi, Dhaka, Bangladesh</p>
                </div>
            </div>
            <div className='flex-1'>
                <form className='grid grid-cols-2 gap-7'>
                    <input type="text" name='Name' placeholder="Name" className="input w-full bg-transparent border border-red-400 max-w-xs text-white" />
                    <input type="email" name='Email' placeholder="Email" className="input w-full bg-transparent border border-red-400 max-w-xs text-white" />
                    <input type="number" name='Mobile Number' placeholder="Mobile Number" className="input w-full bg-transparent border border-red-400 max-w-xs text-white" />
                    <input type="text" name='Doctor Name' placeholder="Doctor Name" className="input w-full bg-transparent border border-red-400 max-w-xs text-white" />
                    <input type="date" name='Date' placeholder="Date" className="input w-full bg-transparent border border-red-400 max-w-xs text-white" />
                    <input type="time" name='Time' placeholder="Time" className="input w-full bg-transparent border text-white border-red-400 max-w-xs" />
                </form> 
                <button className='btn bg-[#F7A582] w-full mt-6'>Book Now</button>
            </div>
        </div>
    );
};

export default ContactWithUs;