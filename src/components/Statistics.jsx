import css from '../css/statistics.module.css'

function getRandomHexColor(){
    return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(4, 0)}`;
}

export const Statistics = ({ title, stats }) => {
    return (
        <section className={css.statistics}>
            <h2 className={css.title}>{title}</h2>

            <ul className={css.statList}>
                {stats.map(stat => (
                    <li className={css.item} style={{ backgroundColor: getRandomHexColor() }} key={stat.id}>
                        <span className={css.label}>{stat.label}</span>
                        <span className={css.percentage}>{stat.percentage}</span>
                    </li>))}
            </ul>
        </section>
    )
}