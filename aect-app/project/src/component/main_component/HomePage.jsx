/* eslint-disable react/no-unknown-property */

import Hook from "../sub_component/Hook"
import NavBar from "../sub_component/NavBar"
import SocialProof from "../sub_component/SocialProof"
import CardGuide from "../sub_component/CardGuide"
import Badge from "../sub_component/Badge"
import Card from "../sub_component/Card"
import ContactForm from "../sub_component/ContactForm"
import Newsletter from "../sub_component/Newsletter"

/* eslint-disable no-unused-vars */
function HomePage(props) {
    return (
        <>
            <div class="flex flex-col space-y-2.5 h-full">
                <div class="flex-1">
                    <NavBar></NavBar>
                </div>
                <div class="flex-2 ">
                    <Hook></Hook>
                </div>
                <div class="flex-3">
                    <SocialProof></SocialProof>
                </div>
                <div class="flex-4">
                    <CardGuide></CardGuide>
                </div>
                <div class="flex-5">
                    <Badge></Badge>
                </div>
                <div class="flex-6">
                    <div class="text-center  py-14  flex flex-col space-y-7">
                        <h5 class="font-bold text-2xl font-title-font-family">Materiale per gli studenti</h5>
                        <div class="flex justify-around">
                            <Card></Card>
                            <Card></Card>
                            <Card></Card>
                        </div>
                    </div>
                </div>
                <div class="flex-7">
                    <ContactForm></ContactForm>
                </div>
                <div class="flex-8">
                    <Newsletter></Newsletter>
                </div>
            </div>
            <p class="bg-custom-green text-center text-gray-300 text-xs p-4">powered by Youbissi Kamdem Gabriel</p>
        </>
    )
}

export default HomePage