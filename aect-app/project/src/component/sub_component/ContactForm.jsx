/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
function ContactForm(props) {
    return (
        <>
            <div class="flex h-full justify-center items-center  py-18">
                    <div class="flex w-full justify-around sm:rounded-3xl sm:p-20">

                        <div class="flex-1 text-center pb-6 w-1/2 ">
                            <h1 class="text-3xl font-bold font-title-font-family">Contact Us!</h1>

                            <p class="">
                                Fill up the form below to send us a message.
                            </p>
                        </div>


                        <form class="flex-2 w-1/2">

                            <input
                                class="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text" placeholder="Name" name="name" />

                            <input
                                class="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="email" placeholder="Email" name="email" />

                            <input
                                class="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text" placeholder="Subject" name="_subject" />

                            <textarea
                                class="shadow block mb-4 min-h-0 appearance-none border rounded h-64 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text" placeholder="Type your message here..." name="message"></textarea>

                            <div class="flex justify-center items-center">
                                <input
                                    class=" w-3/5 shadow bg-custom-orange text-white hover:bg-custom-orange  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="submit" value="Invia" />
                            </div>

                        </form>
                    </div>
            </div>
        </>
    )
}
export default ContactForm