import Image from "next/image"
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
function Header(){
  return (
    <header className="flex py-3 px-12 sm:px-5 justify-between sticky top-0 bg-white z-10 shadow-md">
        <div className="flex space-x-2 items-center ">
            <Image
            src="/images/header/chatgpt-logo.png"
                alt="Logo"
                width={30}
                height={30}
            />
            <div>
              <h1 className="font-bold"><span className="text-violet-500">AI</span> Image Generator</h1>
              <h2 className="text-xs sm:pr-6 ">Powered by DALL-E-2, ChatGPT & Microsoft Azure</h2>
            </div>
        </div>
        <div className="flex items-center space-x-4 sm:space-x-2 ">
          <EmailIcon/>
          <LinkedInIcon/>
          <GitHubIcon/>
        </div>
    </header>
  )
}

export default Header