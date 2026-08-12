function Card({children}) {
    return (
        <div className="bg-gray-200 p-2 text-xl flex-wrap">
            {children}
        </div>
    )
}

export default Card;