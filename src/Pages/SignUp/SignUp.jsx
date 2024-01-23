import { Link } from 'react-router-dom';
import image from '../../assets/docter-illustrations-331199.jpg'
import useAuth from '../../Hooks/useAuth';

const SignUp = () => {

    const {signUp,signIn,loading} = useAuth()

    const handleSignUp =async (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.Name.value
        const userName = form.UserName.value
        const email= form.Email.value
        const password= form.Password.value
        const data = await signUp(email,password)
        console.log(data)
    }
    return (
        <div>
            {loading && <p className='flex justify-center items-center'>Loding...</p>}
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={image} className="w-[50%] h-[100vh] rounded-lg shadow-2xl" />
                    <div className='border-2 rounded-lg h-screen w-[50%] pt-[10%]'>
                        <h1 className="text-3xl font-bold text-center pb-4">Sign Up to Doc House</h1>
                        <form onSubmit={handleSignUp} className='flex flex-col items-center justify-center gap-5'>
                            <input type="text" name='Name' placeholder="Enter your Name" className="input input-bordered w-full max-w-xs" />
                            <input type="text" name='UserName' placeholder="Enter your username" className="input input-bordered w-full max-w-xs" />
                            <input type="email" name='Email' placeholder="Enter your email" className="input input-bordered w-full max-w-xs" />
                            <input type="password" name='Password' placeholder="Enter your password" className="input input-bordered w-full max-w-xs" />
                            <button className="btn w-[56%] bg-[#F7A582] text-white">Create Account</button>
                        </form>
                        <p className='text-center mt-5'>Already registered? Go to <Link className='text-[#F7A582] underline' to='/Login'>SIGN IN</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;