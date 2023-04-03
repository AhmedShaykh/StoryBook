import Button from '../Components/Button';

export default {
    title: "Button",
    component: Button
};

export const BtnLg = () => (
    <Button
        value={"Button Large"}
        style={{ padding: "1rem 1.3rem", backgroundColor: " black", color: "white", cursor: "pointer", borderRadius: "4px",  outline: "none" }}
        onClick={() => alert("Clicked 1!")}
    />
);

export const BtnMd = () => (
    <Button
        value={"Button Medium"}
        style={{ padding: "0.7rem 0.9rem", backgroundColor: " darkcyan", color: "black", cursor: "pointer", borderRadius: "4px",  outline: "none" }}
        onClick={() => alert("Clicked 2!")}
    />
);

export const BtnSm = () => (
    <Button
        value={"Button Small"}
        style={{ padding: "0.5rem 0.6rem", backgroundColor: " cyan", color: "black", cursor: "pointer", borderRadius: "4px",  outline: "none" }}
        onClick={() => alert("Clicked 3!")}
    />
);