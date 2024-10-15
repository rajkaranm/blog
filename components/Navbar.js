
export default function Navbar() {
  return (
    <nav>
      <div style={{margin: "1rem", display: "flex", justifyContent: "center", fontSize: "0.7rem", fontWeight: "500"}}>
        <div>
          <a style={{margin: "0 1rem"}} href="https://rajkaran.blog/" target="_blank">Website</a> | 
          <a style={{margin: "0 1rem"}} href="https://x.com/imrajkaran_" target="_blank">Twitter</a> | 
          <a style={{margin: "0 1rem"}} href="mailto:rajkaranvir456@gmail.com" target="_blank">Gmail</a> | 
          <a style={{margin: "0 1rem"}} href="https://github.com/rajkaranm" target="_blank">Github</a> 
        </div>
      </div>
      <hr style={{width: "90%", opacity: "0.5"}}/>
    </nav>
  )
}
