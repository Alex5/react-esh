import React from 'react'
import './Hero.scss'

const Hero = () => {

    const [activeItem, setActiveItem] = React.useState(0)

    const menus = [{id: 0, name: 'Ингредиенты'}, {id: 1, name: 'Рецепты'}]

    const onActiveItemCLick = (index) => {
        setActiveItem(index)
    }

    return (
        <section className="hero">
            <div className="hero-header">
                <div className="hero-header__title">
                    <h1>Что<br/> приготовить?</h1>
                </div>
                <div className="hero-header__description">
                    <p>Мы подскажем!
                        Ищите по ингредиентам или блюдам</p>
                </div>
            </div>
            <div className="hero-body">
                <div className="hero-body__search-switch">
                    {menus.map(item => (
                        <div key={item.id} className={`item ${activeItem === item.id ? 'active' : ''}`}
                             onClick={() => onActiveItemCLick(item.id)}
                        >{item.name}</div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Hero;