import clsx from "clsx"

export const Container: React.FC<{
    children: React.ReactNode;
    [key: string]: any
}> = ({ children, ...props }) => {
    return (
        <OuterContainer {...props}>
            <InnerContainer>{children}</InnerContainer>
        </OuterContainer>
    )
}

export const OuterContainer: React.FC<{
    className?: string
    children: React.ReactNode;
    [key: string]: any
}> = ({ className, children, ...props }) => {
    return (
        <div className={clsx('sm:px-8', className)} {...props}>
            <div className="mx-auto max-w-7xl lg:px-8">{children}</div>
        </div>
    )
}

export const InnerContainer: React.FC<{
    className?: string
    children: React.ReactNode;
    [key: string]: any
}> = ({ className, children, ...props }) => {
    return (
        <div
            className={clsx('relative px-4 sm:px-8 lg:px-12', className)}
            {...props}
        >
            <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
        </div>
    )
}