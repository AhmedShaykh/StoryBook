import { FC } from 'react';

interface Types {
    value: string;
    style: any;
    onClick: () => void;
};

const Button: FC<Types> = ({ value, style, onClick }) => (
    <button
        style={style}
        onClick={onClick}
    >
        {value}
    </button>
);

export default Button;