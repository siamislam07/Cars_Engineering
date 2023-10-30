
const ChooseCards = ({choose}) => {
    const {title, image} = choose
    return (
        <div className="group border flex flex-col items-center justify-center p-5 font-bold rounded-lg  transform transition-transform transition-delay-500 hover:scale-110 hover:bg-gradient-to-br from-purple-500 to-pink-500  text-transparent     ">
            <img className="mb-4" src={image} alt="" />
            <p className="group-hover:text-black transition duration-300 text-slate-600">{title}</p>
        </div>
    );
};

export default ChooseCards;