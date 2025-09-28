import { country } from "../../database/country"
function Country() {
    console.log(country);

    return (
        <>
            <ul>
                {country.map(itemCountry => (
                    <li key={itemCountry.id}>
                        <span>{itemCountry.name}</span>

                        <ul>

                            {itemCountry.city.map(itemCity => (

                                <li key={itemCity.id}>

                                    <span>{itemCity.name}</span>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>

        </>
    )
}

export default Country
// 54:37