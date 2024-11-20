const ButtonPrimary = ({
    href,
    target = "_self",
    label,
    icon,
    classes
}) => {
    if (href) {
        return (
            <a href={href} target={target} className={`btn btn-primary ${classes}`}>
               {label} {icon
               ? <span className="material-symbols-rounded" aria-hidden="true">
                {icon}
                </span>
               : undefined
               } 
            </a>
        )
    }else {
        return (
            <button className={`btn btn-primary ${classes}`}>
            {label}
            {icon
               ? <span className="material-symbols-rounded" aria-hidden="true">
                {icon}
                </span>
               : undefined
               } 
            </button>
        )
    }
       
}

ButtonPrimary.prototypes = {
    href: String,
    target: String,
    label: String,
    icon: String,
    classes: String
}

const ButtonOutline = ({
    href,
    target = "_self",
    label,
    icon,
    classes
}) => {
    if (href) {
        return (
            <a href={href} target={target} className={`btn btn-Outline ${classes}`}>
               {label} {icon
               ? <span className="material-symbols-rounded" aria-hidden="true">
                {icon}
                </span>
               : undefined
               } 
            </a>
        )
    }else {
        return (
            <button className={`btn btn-Outline ${classes}`}>
            {label}
            {icon
               ? <span className="material-symbols-rounded" aria-hidden="true">
                {icon}
                </span>
               : undefined
               } 
            </button>
        )
    }
       
}

ButtonOutline.prototypes = {
    href: String,
    target: String,
    label: String,
    icon: String,
    classes: String
}

export {
    ButtonPrimary,
    ButtonOutline
}