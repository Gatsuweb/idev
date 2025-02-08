import Image from "next/image"
import s from "../styles/Btn.module.css"

export const BtnContact = () => {
  return (
         <div className={s.btnContainerPricing}>
          <a href="#contact">
                <button className={s.btnPricing} >CONTACTEZ-MOI</button>
                </a>
                <a href="#contact">
                <button className={s.btnPricings} >CONTACTEZ-MOI</button>
                </a>
            </div>

  )
}
