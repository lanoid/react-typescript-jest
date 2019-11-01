import * as React from "react";

interface Props {
    name?: string,
}

const FunctionalComponent: React.FunctionComponent<Props> = (props) => {
 return <p>How are you {props.name}?</p>;
}

FunctionalComponent.defaultProps = {
    name: "lanoid"
}

export default FunctionalComponent;