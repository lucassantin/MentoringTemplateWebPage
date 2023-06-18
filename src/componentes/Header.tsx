import { InstagramLogo, WhatsappLogo } from "@phosphor-icons/react";

export function Header() {
    return (
        <header className="flex flex-row justify-between bg-transparent text-white 
        items-baseline h-[10vh] w-[100%] pt-5 pr-12 pb-0 pl-8  ">
            <div>
                <p className="text-5xl font-bold cursor-pointer">Sandra Mara</p>
            </div>

            <div>
                <ul className="flex flex-row text-[20px] font-medium list-none gap-16 cursor-pointer ">
                    <a>Home</a>
                    <a>Apresentação</a>
                    <a>Mentorias</a>
                    <a>Depoimentos</a>
                </ul>
            </div>

            <div className="flex flex-row gap-5 cursor-pointer">
                <div><a href="https://api.whatsapp.com/send/?phone=5548996372616&text&type=phone_number&app_absent=0" target="_blank">
                    <InstagramLogo />
                    </a></div>
                <div><a href="https://www.instagram.com/sandramara_dutra/" target="_blank">
                    <WhatsappLogo /> 
                    </a></div>
            </div>
        </header>
    )
}