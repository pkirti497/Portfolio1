const Mail=()=>{
    return <div className="flex md-mx:hidden text-textColor items-center gap-5 fixed bottom-32  rotate-90" style={{right:"-13rem"}}>
        <div className="flex" data-aos-duration="800" data-aos="fade-down-left">
        <a  href="mailto:mangaljeet.pandey123@gmail.com" className="font-mono tracking-wide hover:text-primaryColor hover:-translate-x-1 transition transform duration-300 ease-in-out">
            mangaljeet.pandey123@gmail.com
        </a>
        </div>
        <hr className="border w-40 rounded-full  bg-textColor border-textColor"/>
    </div>
}
export default Mail;