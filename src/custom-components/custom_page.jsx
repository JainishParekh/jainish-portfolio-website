

function CustomPage({ children }) {
    return (
        <section className="bg-primary text-gray-400 h-[100vh] snap-center">
            {children}
        </section>
    )
}

export default CustomPage;