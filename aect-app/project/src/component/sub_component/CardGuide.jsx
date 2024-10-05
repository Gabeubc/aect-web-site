/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
function CardGuide(props) {
    return (
        <>
            <div class="text-center py-14 flex flex-col space-y-7">
                <h5 class="font-bold text-2xl font-title-font-family">Guide utili</h5>
                <div class="flex justify-center items-center h-full">
                    <div class="bg-white h-10/12 w-6/12 rounded-2xl border border-gray-200 py-10">
                        <div class="flex flex-col space-y-2.5 h-full text-center p-3.5">
                            <p class="flex-auto font-bold text-2xl text-custom-orange">GUIDA PER L'ISCRIZIONE AL POLI</p>
                            <p class="flex-auto">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <div class="flex-auto font-bold">
                                <div class="flex justify-center items-center h-full">
                                    <button class="h-3/4 w-2/4 bg-custom-orange rounded-lg py-2 text-white text-center">Read more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardGuide