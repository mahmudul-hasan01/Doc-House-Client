import img1 from '../../../assets/Rectangle 15 (2).png'
import img2 from '../../../assets/Rectangle 15.png'
import img3 from '../../../assets/Rectangle 15 (1).png'
import logo1 from '../../../assets/logo/Frame.png'
import logo2 from '../../../assets/logo/Frame (1).png'
import logo3 from '../../../assets/logo/Frame (2).png'

const PatientsSays = () => {
    return (
        <div className='space-y-4'>
            <h1 className="text-4xl text-black font-bold text-center">What Our Patients Says</h1>
            <p className="text-center w-[70%] mx-auto">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

            <div className='pt-7 flex justify-evenly'>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={img2} alt="image" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Karyen Anderson</h2>
                        <p>BTP -  Senior Physiotherapist</p>
                        <div className='flex items-center gap-3'>
                            <img src={logo1} alt="" />
                            <p>Dhanmondi, Dhaka, Bangladesh</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <img src={logo2} alt="" />
                            <p>Available On Mon, 22 December</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <img src={logo3} alt="" />
                            <p>$15</p>
                        </div>
                        <div className="card-actions">
                            <button className="btn btn-outline w-[95%] text-[#F7A582]">View Profile</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={img3} alt="image" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Karyen Anderson</h2>
                        <p>BTP -  Senior Physiotherapist</p>
                        <div className='flex items-center gap-3'>
                            <img src={logo1} alt="" />
                            <p>Dhanmondi, Dhaka, Bangladesh</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <img src={logo2} alt="" />
                            <p>Available On Mon, 22 December</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <img src={logo3} alt="" />
                            <p>$15</p>
                        </div>
                        <div className="card-actions">
                            <button className="btn btn-outline w-[95%] text-[#F7A582]">View Profile</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={img1} alt="image" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Karyen Anderson</h2>
                        <p>BTP -  Senior Physiotherapist</p>
                        <div className='flex items-center gap-3'>
                            <img src={logo1} alt="" />
                            <p>Dhanmondi, Dhaka, Bangladesh</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <img src={logo2} alt="" />
                            <p>Available On Mon, 22 December</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <img src={logo3} alt="" />
                            <p>$15</p>
                        </div>
                        <div className="card-actions">
                            <button className="btn btn-outline w-[95%] text-[#F7A582]">View Profile</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PatientsSays;