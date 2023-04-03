import { FC } from 'react';

interface Types {
    value: string;
    style?: any;
    className?: string;
    onClick: () => void;
};

const Button: FC<Types> = ({ value, style, className, onClick }) => (
    <button
        style={style}
        className={className}
        onClick={onClick}
    >
        {value}
    </button>
);

export default Button;