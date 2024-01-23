import { Link } from 'react-router-dom';
import image from '../../assets/docter-illustrations-331199.jpg'

const SignIn = () => {
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={image} className="w-[50%] h-[100vh] rounded-lg shadow-2xl" />
                    <div className='border-2 rounded-lg h-screen w-[50%] pt-[10%]'>
                        <h1 className="text-3xl font-bold text-center mb-10">Sign In to Doc House</h1>
                        <form className='flex flex-col items-center justify-center gap-10'>
                            <input type="email" name='Email' placeholder="Enter your email" className="input input-bordered w-full max-w-xs" />
                            <input type="password" name='Password' placeholder="Enter your password" className="input input-bordered w-full max-w-xs" />
                            <button className="btn w-[56%] bg-[#F7A582] text-white">Create Account</button>
                        </form>
                        <p className='text-center mt-5'>Please register at first. Go to <Link className='text-[#F7A582] underline' to='/SignUp'>SIGN Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;