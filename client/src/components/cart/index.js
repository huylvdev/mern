import { useRouter } from 'next/router'

function Cart({ children, href }) {
    const router = useRouter()
    const style = {
        marginRight: 10,
        color: router.pathname === href ? 'red' : 'black',
    }

    const handleClick = (e) => {
        e.preventDefault()
        router.push(href)
    }

    return (
        <a href={href} onClick={handleClick} style={style}>
            <p>{children} </p>
        </a>
    )
}

export default Cart