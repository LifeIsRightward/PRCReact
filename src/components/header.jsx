import React from "react"
import imgLogo from '../img/man.png'


export default function Header() {
    return (
        <header className="mainheader">
            <nav >
                <ul>
                    <div className="logo">
                        <a href=""><img src={imgLogo} className="imgLogo"></img></a>
                    </div>
                    <div className="contents">
                        <li><a href="">Introduce</a></li>
                        {/* 회사 소개 */}
                        <li><a href="">Service</a></li>
                        {/* 어떤어떤 서비스를 하고 있냐를 설명 */}
                        <li><a href="">Product</a></li>
                        {/* 지금 생산중인 제품들에 대한설명 */}
                        <li><a href="">Contact</a></li>
                        {/* 아마 footer 쪽이 되지 않을까 싶음 */}
                    </div>


                </ul>
            </nav>
        </header>
    )
}
