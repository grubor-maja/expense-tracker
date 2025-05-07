function ExpensesStats({stats}) {

    return (
        <div>
            <h2>Statistics:</h2>
            <ul>
                {stats.map((stat) => (
                    <li key={stat.category}>
                        {stat.category}: ${stat.total_amount}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ExpensesStats;