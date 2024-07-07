import { useContext } from "react"
import s from "./Icons.module.css"
import { LanguageContext } from "@/app/context/toggleConext"

const Icons = () => {
    const { language } = useContext(LanguageContext)

    return (
        <section className={s.secao} data-aos="zoom-in" data-aos-delay="1000" data-aos-duration="2000">
            <h3>{language === "portuguese" ? "Linguages, frameworks e plataformas que tenho experiência" : "Language, frameworks and plataforms that I have experience"}</h3>
            <div className={s.iconsL}>
                <div>
                    <img alt="Symbol-HTML" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="35" height="35" />
                    <span>HTML</span>
                </div>
                <div>
                    <img alt="Symbol-CSS" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="35" height="35" />
                    <span>CSS</span>
                </div>
                <div>
                    <img alt="sass symbol" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" width="40" height="40" />
                    <span>Sass</span>
                </div>
                <div>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" width="35" height="35" />
                    <span>Bootstrap</span>
                </div>
                <div>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" width="45" height="45" />
                    <span>Tailwind CSS</span>
                </div>
                <div>
                    <img alt="Symbol-JavaScript" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="35" height="35" />
                    <span>JavaScript</span>
                </div>
                <div>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="35" height="35" />
                    <span>TypeScript</span>
                </div>
                <div>
                    <img alt="Symbol-jQuery" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg" width="40" height="40" />
                    <span>jQuery</span>
                </div>
                <div>
                    <img alt="react symbol" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="40" height="40" />
                    <span>React</span>
                </div>
                <div>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" width="40" height="40" />
                    <span>Next.js</span>
                </div>
                <div>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" width="40" height="40" />
                    <span>Redux</span>
                </div>
                <div>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg" width="40" height="40" />
                    <span>Axios</span>
                </div>
                <div>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" width="40" height="40" />
                    <span>Jest</span>
                </div>
                <div>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" width="45" height="45" />
                    <span>AngularJS</span>
                </div>
                <div>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rxjs/rxjs-original.svg" width="40" height="40" />
                    <span>RxJS</span>
                </div>
                <div>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" width="40" height="40" />
                    <span>Vue</span>
                </div>
                <div>
                    <img alt="wordpress symbol" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" width="40" height="40" />
                    <span>WordPress</span>
                </div>
                <div>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" width="40" height="40" />
                    <span>Node.js</span>
                </div>
                <div>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" width="40" height="40" />
                    <span>Express</span>
                </div>
                <div>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" width="40" height="40" />
                    <span>MySQL</span>
                </div>
                <div>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg" width="40" height="40" />
                    <span>Google Cloud</span>
                </div>
                <div>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" width="40" height="40" />
                    <span>AWS</span>
                </div>
                <div>
                    <img alt="firebase symbol" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg" width="40" height="40" />
                    <span>Firebase</span>
                </div>
                <div>
                    <img alt="mongo DB" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg" width="40" height="40" />
                    <span>MongoDB</span>
                </div>
                <div>
                    <img alt="mongo DB" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" width="40" height="40" />
                    <span>Postman</span>
                </div>
                <div>
                    <img alt="mongo DB" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" width="40" height="40" />
                    <span>Docker</span>
                </div>
                <div>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" width="40" height="40" />
                    <span>Git</span>
                </div>
                <div>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" width="40" height="40" />
                    <span>Figma</span>
                </div>
                <div>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg" width="40" height="40" />
                    <span>Photoshop</span>
                </div>
                <div>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blender/blender-original.svg" width="40" height="40" />
                    <span>Blender</span>
                </div>
            </div>
        </section>
    )
}

export default Icons