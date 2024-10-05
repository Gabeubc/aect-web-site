/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
function Newsletter(props) {
    return (
        <>
            <div class="flex h-full">
                <div class="flex-1 w-1/2 bg-custom-green text-start text-white py-24">
                    <p class="px-12 text-xl">Iscrivitti alla  nostra</p>
                    <p class="px-12 text-xl">newsletter</p>
                </div>
                <div class="flex-2 w-1/2 bg-custom-green py-24">
                    <div class="flex items-center justify-center">
                        <div class="flex items-center bg-white rounded-full overflow-hidden shadow-lg">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                class="py-2 px-4 text-gray-700 focus:outline-none w-64"
                            />
                            <button
                                class="bg-custom-orange text-white py-2 px-6 rounded-full hover:bg-custom-orange transition-all"
                            >
                                Subscribe
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Newsletter