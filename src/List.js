export let Arraylist = () => {
    let Chocolatename = ["Kitkat", "Cadbury", "Milkbar", "Diary", "Galaxy", "Nestle"]

    return (
        <>
            <ol start={45}>
                {
                    Chocolatename.map(
                        (get, index) =>
                        (
                            <li>{get}</li>
                        )
                    )
                }
            </ol>
        </>
    )
}