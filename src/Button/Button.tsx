import React from 'react';

type ButtonPropsType = {
    name: string
    callback: () => void
    className?: string
    disabled?: boolean
}

export const Button = (props: ButtonPropsType) => {
    const onClickHandler = () => props.callback()

    return(
        <button
            disabled={props.disabled}
            className={props.className}
            onClick={onClickHandler}
        >
            {props.name}
        </button>
    )
};