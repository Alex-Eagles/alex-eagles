import { motion } from "framer-motion";

const AnimatedPage = (props) => {
	const pageVariants = {
		initial: {
			// opacity: 0,
			x: "-100vw",
		},
		in: {
			// opacity: 1,
			x: 0,
		},
		out: {
			// opacity: 0,
			x: "100vw",
		},
	};

	const pageTransition =
		// window.innerWidth > 768
		// ?
		{
			type: "tween",
			ease: "easeIn", // "anticipate
			duration: 0.3,
		};
	// : {
	// 		duration: 1.5,
	//   }
	return (
		<motion.div
			variants={pageVariants}
			transition={pageTransition}
			initial="initial"
			animate="in"
			exit="out"
			style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}>
			{props.children}
		</motion.div>
	);
};

export default AnimatedPage;
