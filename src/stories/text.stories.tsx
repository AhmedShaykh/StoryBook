import Text from '../Components/Text';

export default {
    title: "Text",
    component: Text
};

export const TextLg = () => (
    <Text
        value={"Text Large"}
        style={{ fontSize: "2rem" }}
    />
);

export const TextMd = () => (
    <Text
        value={"Text Medium"}
        style={{ fontSize: "1.5rem" }}
    />
);

export const TextSm = () => (
    <Text
        value={"Text Small"}
        style={{ fontSize: "1rem" }}
    />
);