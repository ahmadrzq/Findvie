import PropTypes from "prop-types";
import { forwardRef, useEffect, useRef } from "react";

const TextInput = forwardRef(function TextInput(
    {
        type = "text",
        name,
        className = "",
        isFocused = false,
        value,
        defaultValue,
        autoComplete,
        required,
        variant = "primary",
        placeholder,
        isError,
        ...props
    },
    ref
) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            {...props}
            type={type}
            name={name}
            value={value}
            defaultValue={defaultValue}
            className={
                `bg-form-bg py-[13px] px-7 w-full ${
                    isError && "input-error"
                } input-${variant}` + className
            }
            ref={input}
            autoComplete={autoComplete}
            required={required}
            placeholder={placeholder}
        />
    );
});

TextInput.propTypes = {
    type: PropTypes.oneOf(["text", "email", "password", "number", "file"]),
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    className: PropTypes.string,
    variant: PropTypes.oneOf(["primary", "error", "primary-outline"]),
    autoComplete: PropTypes.string,
    required: PropTypes.bool,
    isFocused: PropTypes.bool,
    handleChange: PropTypes.func,
    placeholder: PropTypes.string,
    isError: PropTypes.bool,
};

export default TextInput;
