import { FC } from 'react';

interface Types {
    value: string;
    style: any;
};

const Text: FC<Types> = ({ value, style }) => (
    <p
        style={style}
    >
        {value}
    </p >
);

export default Text;