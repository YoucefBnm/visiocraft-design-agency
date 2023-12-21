import { motion } from "framer-motion"
import { springTransitionConfig } from "../../libs/motion/motion.variants"

const UserTotalPrice = ({ totalPrice }) => {

  return (
    <div className="flex flex--col gap--1 flex--center">
        <h3 className="display display--sm">Total price</h3>
        <motion.h3 
            className="display display--sm overflow--hidden text--price"
            key={totalPrice}
            transition={springTransitionConfig}
            animate={{ opacity: 1}}
        >
            ${totalPrice}.00
        </motion.h3>
    </div>
  )
}

export default UserTotalPrice