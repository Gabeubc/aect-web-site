/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
function Card(props) {
    return (
        <>
            <div class="flex h-full justify-center items-center">
                <div class="flex flex-col max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-custom-orange dark:text-white text-center">Politecnico di Torino</h5>
                    </a>
                    <p class="mb-3 font-normal dark:text-gray-400 text-center">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    <div class="w-full flex justify-center items-center">
                        <a href="#" class=" w-2/3 flex justify-center items-center px-3 py-2 text-sm font-medium text-center text-white bg-custom-orange rounded-lg hover:bg-custom-orange  focus:ring-4 focus:outline-none focus:ring-custom-orange dark:bg-custom-orange  dark:hover:bg-custom-orange  dark:focus:ring-custom-orange">
                            Explore
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Card