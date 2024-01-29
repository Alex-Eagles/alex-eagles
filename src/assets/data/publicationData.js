import publication1 from "../images/publication-1.png";
import publication2 from "../images/publication-2.png";
import publication3 from "../images/publication-3.png";
import publication4 from "../images/publication-4.png";

const publicationData = [
	{
		title: "Design and Fabrication of a Fixed-Wing Unmanned Aerial Vehicle (UAV)",
		image: publication1,
		abstract:
			"Unmanned Aerial Vehicles (UAVs) have been widely used both in military and civil across the world in recent years. Nevertheless, their design always involves complex design optimization variables and decisions. Therefore, this paper aims to guide through the designing, manufacturing, and testing of an electrically powered radio-controlled aircraft for achieving a take-off, cruise, safe landing and carrying the highest payload possible. The whole process involves several phases, design phase, structural analysis, performance analysis, materials used, manufacturing, and finally aircraft testing. The final aircraft was designed with an empty weight and maximum take-off weight of 15.43 Ibs and 33.07 Ibs respectively while the wingspan, cruising speed and maximum speed were 70.1 in., 46 ft/s and 78 ft/sec respectively with a total take-off distance of 100 ft.",
		link: "https://www.sciencedirect.com/science/article/pii/S2090447922004051",
	},
	{
		title: "Low Reynolds Number Wing Design for an Unmanned Aerial Vehicle: A Case Study",
		image: publication2,
		abstract:
			"With the widespread utilization of Unmanned Aerial Vehicles (UAVs) in many fields, it is essential to identify the parameters governing their design process. By taking the wing as a showcase, this study intends to guide through the design process of the wing, elaborate on some important definitions, and show how different parts of an aircraft affect each other. The current case study is limited to low Reynolds number (200,000: 500,000) wing design for unmanned aerial vehicle. The final wing was designed to be rectangular, a high wing with a span of 2 m, a chord of 0.4 m, and a corresponding aspect ratio of 5 with a total take-off weight of 10 kg. While the cruising speed and stall speeds were 14 and 11 m/s respectively.",
		link: "https://thescipub.com/abstract/10.3844/ajeassp.2022.264.273",
	},
	{
		title: "Toward Flare-Free Images: A Survey",
		image: publication3,
		abstract:
			"Lens flare is a common image artifact that can significantly degrade image quality and affect the performance of computer vision systems due to a strong light source pointing at the camera. This survey provides a comprehensive overview of the multifaceted domain of lens flare, encompassing its underlying physics, influencing factors, types, and characteristics. It delves into the complex optics of flare formation, arising from factors like internal reflection, scattering, diffraction, and dispersion within the camera lens system. The diverse categories of flare are explored, including scattering, reflective, glare, orb, and starburst types. Key properties such as shape, color, and localization are analyzed. The numerous factors impacting flare appearance are discussed, spanning light source attributes, lens features, camera settings, and scene content. The survey extensively covers the wide range of methods proposed for flare removal, including hardware optimization strategies, classical image processing techniques, and learning-based methods using deep learning. It not only describes pioneering flare datasets created for training and evaluation purposes but also how they were created. Commonly employed performance metrics such as PSNR, SSIM, and LPIPS are explored. Challenges posed by flare's complex and data-dependent characteristics are highlighted. The survey provides insights into best practices, limitations, and promising future directions for flare removal research. Reviewing the state-of-the-art enables an in-depth understanding of the inherent complexities of the flare phenomenon and the capabilities of existing solutions. This can inform and inspire new innovations for handling lens flare artifacts and improving visual quality across various applications.",
		link: "https://www.researchgate.net/publication/374924443_Pre-Print_Toward_Flare-Free_Images_A_Survey",
	},
	{
		title: "FLare-Free Vision: Empowering Uformer with Depth Insights : ICASSP2024",
		image: publication4,
		abstract:
			"Image flare is a common problem that occurs when a camera lens is pointed at a strong light source. It can manifest as ghosting, blooming, or other artifacts that can degrade the image quality. We propose a novel deep learning approach for flare removal that uses a combination of depth estimation and image restoration. We use a Dense Vision Transformer to estimate the depth of the scene. This depth map is then concate-nated to the input image, which is then fed into a Uformer, a general U-shaped transformer for image restoration. Our proposed method demonstrates state-of-the-art performance on the Flare7K++ test dataset, demonstrating its effectiveness in removing flare artifacts from images. Our approach also demonstrates robustness and generalization to real-world images with various types of flare. We believe that our work opens up new possibilities for using depth information for image restoration. The code is available on GitHub.",
		link: "https://www.researchgate.net/publication/376586936_FLARE-FREE_VISION_EMPOWERING_UFORMER_WITH_DEPTH_INSIGHTS_ICASSP2024",
	},
];

export default publicationData;
