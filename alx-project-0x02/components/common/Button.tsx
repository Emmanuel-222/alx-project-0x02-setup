import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ size, shape}) => {
    return (
        <button className={`py-2.5 ${size} px-5 ${shape} bg-white text-black`}>Add New Post</button>
    );
};

export default Button;