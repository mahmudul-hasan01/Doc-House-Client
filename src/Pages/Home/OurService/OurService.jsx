import image from '../../../assets/Rectangle 10.png'
import image1 from '../../../assets/Rectangle 20078.png'

const OurService = () => {
    return (
        <div className='flex justify-between mt-10'>
            <div className='flex-1'>
                <img className='h-[850px] w-[90%]' src={image1} alt="" />
            </div>
            <div className='flex-1 space-y-4'>
                <h1 className='text-black text-4xl font-bold'>Our Services</h1>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                <div className='flex gap-4'>
                    <button className='bg-[#F7A582] btn'>Cavity Protection</button>
                    <button className='btn bg-[#F7A582]'>Cosmetic Dentisty</button>
                    <button className='btn bg-[#F7A582]'>Oral Surgery</button>
                </div>
                <img src={image} alt="" />
                <h1 className='text-black text-[30px] font-bold'>Electro  Gastrology Therapy</h1>
                <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error
                </p>
                <p>Sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                <button className='btn btn-outline text-[#F7A582]'>More Details</button>
            </div>
        </div>
    );
};

export default OurService;