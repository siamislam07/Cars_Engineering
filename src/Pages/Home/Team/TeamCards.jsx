import { FaFacebook } from 'react-icons/fa';
const TeamCards = ({ team }) => {
    const {name, title, image, } = team
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <h2 className="card-title">{title}</h2>
                <div className='flex gap-5 '>
                    <FaFacebook className='text-2xl'/>
                    <FaFacebook className='text-2xl'/>
                </div>
            </div>
        </div>
    );
};

export default TeamCards;