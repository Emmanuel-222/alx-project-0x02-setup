import { CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({ title, content}) => {
    return(
        <div className="flex justify-center items-center gap-2 bg-white text-black rounded-2xl p-10">
            <h1 className="font-[700] text-2xl text-center">{title}</h1>
            <p>{content}</p>
        </div>
    )
}

export default Card;