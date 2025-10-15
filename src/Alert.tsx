import { defaultProps } from "@blocknote/core";
import { createReactBlockSpec } from "@blocknote/react";

// The Alert block.
export const createAlert = createReactBlockSpec(
    {
        type: "alert",
        propSchema: {
            textAlignment: defaultProps.textAlignment,
            textColor: defaultProps.textColor,
            type: {
                default: "warning",
                values: ["warning", "error", "info", "success"],
            },
        },
        content: "inline",
    },
    {
        render: (props) => {
            return (
                <div className={"alert"} data-alert-type={props.block.props.type}>
                    {/*Icon which opens a menu to choose the Alert type*/}
                    Custom Alert Block
                    {/*Rich text field for user to type in*/}
                    <div className={"inline-content"} ref={props.contentRef} />
                </div>
            );
        },
    },
);
