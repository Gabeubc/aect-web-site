/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
function NavBar(props) {
    return (
        <>
            <div class="flex justify-between p-3.5 font-basic-font-family font-bold">
                <div class="flex-auto">
                    <div class="flex">Association des Etudiants Camerounais de Turin</div>
                </div>
                <div class="flex-auto">
                    <ul class="flex justify-around">
                        <li>Home</li>
                        <li>Guide utili</li>
                        <li>Come contribuire</li>
                        <li>Materiale</li>
                        <li>Parla con noi</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default NavBar;