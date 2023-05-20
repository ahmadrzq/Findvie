import PropTypes from "prop-types";

Button.propTypes = {
    type: PropTypes.oneOf(["button", "submit", "reset"]),
    className: PropTypes.string,
    variant: PropTypes.oneOf([
        "primary",
        "warning",
        "danger",
        "white-outline",
        "light-outline",
    ]),
    processing: PropTypes.bool,
    children: PropTypes.node,
};

export default function Button({
    type = "submit",
    className = "",
    variant = "primary",
    processing,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            type={type}
            className={
                `py-[13px] text-center w-full transition-all duration-300 ease-in-out ${
                    processing && "opacity-30"
                } btn-${variant}` + className
            }
            disabled={processing}
        >
            {children}
        </button>
    );
}
