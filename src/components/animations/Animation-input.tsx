import React, {FC, memo} from 'react';
import {AnimatePresence, motion} from "framer-motion";
import s from "../../features/main/Main.module.scss";
import {InputSearch} from "../bll/input-search/Input-search";

type AnimationInputType = {
  children?: ReturnType<typeof InputSearch>
  isInput: boolean
};

const animations = {
  initial: {height: 0, opacity: 0},
  animate: {height: 'auto', opacity: 1},
}

export const AnimationInput: FC<AnimationInputType> = memo(({
  children,
  isInput
}) => {
  return (
    <AnimatePresence>
      {isInput &&
          <motion.div
              className={s.wrap}
              variants={animations}
              initial={'initial'}
              animate={'animate'}
              exit={'exit'}
          >
            {children}
          </motion.div>
      }
    </AnimatePresence>
  );
})
