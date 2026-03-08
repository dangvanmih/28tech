import { country } from "../../database/country"
import "./Country.scss";


function Country() {
    console.log(country);

    return (
        <>
            <ul className="country">
                {(country || []).map(itemCountry => ( // []: kiểm tra các trường hợp database lỗi hoặc ko có data
                    <li className="country__item" key={itemCountry.id}>
                        <span className="country__text">{itemCountry.name}</span>

                        <ul className="country__sub">

                            {(itemCountry.city || []).map(itemCity => ( // tương tự kiểm tra các trường hợp các Country ko có City

                                <li className="country__sub-item" key={itemCity.id}>

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
