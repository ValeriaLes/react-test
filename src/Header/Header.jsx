export const Header = ({isModalShown, isModalClosed}) => {
    return (
        <div>
            <button onClick={isModalShown}>Click me</button>
            <button onClick={isModalClosed}>Click again to close</button>
        </div>
    )
}