import error from '../../assets/images/404/404.svg'
import NavBar from '../Shared/Navbar/NavBar';
const Error = () => {
    return (
        <div >
            <NavBar/>
            <div className='flex justify-center h-screen items-center'>
                <img src={error} alt="" />
                </div>
            
        </div>
    );
};

export default Error;