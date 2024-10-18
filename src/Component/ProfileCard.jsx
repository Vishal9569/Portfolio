import DynamicText from "./DispalyText";


const ProfileCard = ({ }) => {

    return <div className="Profile" id="Home">


        <div className="ProflieName">
            <h2>I'm Vishal Kumar</h2>
            <DynamicText />
            <p>Aspiring software engineer with a strong foundation in front-end development and a passion for building innovative user experiences...</p>
            <div className="textDiv">
                <h3>See me</h3>
                <h3>Skills</h3>
            </div>


            <div className="logo">

                <div className="Connectsection">
                    <a href="https://leetcode.com/u/Vishal-210545/" target="blank" >
                        <img src={`./leetcode.png`} alt="" />
                    </a>
                    <a href="https://www.geeksforgeeks.org/user/vk965431/" target="blank" >
                        <img src={`./gfg.png`} alt="" />
                    </a>
                    <a href="https://www.linkedin.com/in/vishal-kumar-kushwaha-431484236/" target="blank" >
                        <img src={`./linkdin.png`} alt="" />
                    </a>
                    <a href="https://github.com/Vishal9569?tab=repositories" target="blank" >
                        <img src={`./github.png`} alt="" />
                    </a>

                </div>

                <div className="skill">
                    <img src={`./html.png`} alt="" />
                    <img src={`./css.png`} alt="" />
                    <img src={`./Js.png`} alt="" />
                    <img src={`./reactjs.png`} alt="" />
                    <img src={`./cpp.png`} alt="" />

                </div>
            </div>
        </div>
        <div className="imgDig">
            <img className="img" src={`./logo.png`} alt="" />
        </div>

    </div>
}

export default ProfileCard;