

function CustomPage({ children, className = "", ...props }) {
    return (
        <section className={` bg-primary text-gray-400 h-[100vh] snap-center overflow-hidden ${className} custom_page_wrapper`} {...props}>
            {children}
        </section>
    )
}

export default CustomPage;