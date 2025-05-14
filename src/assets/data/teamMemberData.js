import AbdelghfourAlaa from '../Members/Abdelghfour Alaa.jpg';
import AbdelrahmanArafat from '../Members/Abdelrahman Arafat.jpg';
import Adham from '../Members/Adham.jpeg';
import AhmedBaheyeldin from '../Members/Ahmed Baheyeldin.jpeg';
import AhmedIbrahimAnan from '../Members/Ahmed Ibrahim Anan.jpg';
import AhmedSaber from '../Members/Ahmed Saber.jpeg';
import AhmedSaeed from '../Members/Ahmed Saeed.jpg';
import AhmedSaleh from '../Members/Ahmed Saleh.jpeg';
import AnnTarek from '../Members/Ann Tarek.jpeg';
import EhdaaFarahat from '../Members/Ehdaa Farahat.jpg';
import EsraaAhmed from '../Members/Esraa Ahmed.jpeg';
import EyadAshraf from '../Members/eyad ashraf.jpg';
import FarahHarfoush from '../Members/Farah Harfoush.jpeg';
import hanaWaleed from '../Members/Hana Waleed.jpeg';
import HattanYosry from '../Members/Hattan Yosry.jpeg';
import HossamEldeen from '../Members/Hossam Eldeen.jpg';
import IbrahimMohamed from '../Members/Ibrahim Mohamed.jpg';
import JohnAyman from '../Members/John Ayman.jpg';
import LinaTarek from '../Members/Lina Tarek.png';
import MaramWael from '../Members/Maram Wael.jpg';
import MazenAmr from '../Members/Mazen Amr.jpeg';
import MazenAsser from '../Members/Mazen Asser.jpeg';
import MennaEzzat from '../Members/Menna Ezzat.jpg';
import MiraBarsoum from '../Members/Mira Barsoum.jpg';
import MoamenAshraf from '../Members/Momen Ashraf.png';
import MoamenNawara from '../Members/Moamen Nawara.jpeg';
import MohamedBassem from '../Members/Mohamed Bassem.png';
import MohamedBrbry from '../Members/mohamed brbry.jpeg';
import MohamedElzayat from '../Members/Mohamed Elzayat.jpeg';
import MohamedFathallah from '../Members/Mohamed Fathallah.jpeg';
import NorhanMohammed from '../Members/Norhan Mohammed.jpg';
import OsamaMohamed from '../Members/Osama Mohamed.jpg';
import PeterAyoub from '../Members/Peter Ayoub.jpeg';
import peterMina from '../Members/Peter Mina.png';
import Rana from '../Members/Rana.jpg';
import ReemEldalil from '../Members/Reem Eldalil.jpeg';
import RodynaAmr from '../Members/Rodyna Amr.jpeg';
import SaraGharib from '../Members/Sara Gharib.jpg';
import YoussefHozayen from '../Members/Youssef Hozayen.jpeg';
import YoussefIbrahim from '../Members/Youssef Ibrahim.jpeg';
import ZeyadEssam from '../Members/Zeyad Essam.jpg';

const heads = [
  { name: "Ahmed Baheyeldin", role: "Team Leader", image: AhmedBaheyeldin },
  { name: "Norhan Mohammed", role: "Vice Team Leader", image: NorhanMohammed },
  { name: "Peter Ayoub", role: "Electro-mechanical Integration Leader", image: PeterAyoub },
];

const autonomusLead = [
  { name: "Ahmed Saleh", role: "Autonomous Team Leader", image: AhmedSaleh },
  { name: "Ibrahim Mohamed", role: "Computer Vision / Autonomous Vice Team Leader", image: IbrahimMohamed },
  { name: "Ahmed Anan", role: "Hardware Team Leader", image: AhmedIbrahimAnan },
  { name: "Maram Wael", role: "Software Team Leader", image: MaramWael },
  { name: "Ann Tarek", role: "Software Vice Team Leader", image: AnnTarek },
];

const mechanicalLead = [
  { name: "Mohamed Fathallah", role: "Mechanical Team Leader", image: MohamedFathallah },
  { name: "Hattan Yosry", role: "Aerodesign Team Leader", image: HattanYosry },
  { name: "Ehdaa Farahat", role: "Structure Team Leader", image: EhdaaFarahat },
  { name: "Osama Mohamed", role: "Tail and Stability Vice Team Leader", image: OsamaMohamed },
  { name: "Abdelrahman Arafat", role: "Wing Team Leader", image: AbdelrahmanArafat },
  { name: "Abdelghfour Alaa", role: "CFD / Wing Team Leader", image: AbdelghfourAlaa },
  { name: "Adham Amr", role: "Propulsion Team Leader", image: Adham },
  { name: "Youssef Hozayen", role: "Propulsion Vice Team Leader", image: YoussefHozayen }
];

const autonomous = [
  { name: "Mazen Nazeih", role: "Software Engineer", image: MazenAmr },
  { name: "Sara Gharib", role: "Software Engineer", image: SaraGharib },
  { name: "Zeyad Essam", role: "Software Engineer", image: ZeyadEssam },
  { name: "John Ayman", role: "Software Engineer", image: JohnAyman },
  { name: "Ahmed Saber", role: "Hardware Engineer", image: AhmedSaber },
  { name: "Ahmed Saeed", role: "Hardware Engineer", image: AhmedSaeed },
  { name: "Menna Ezzat", role: "Hardware Engineer", image: MennaEzzat },
  { name: "Mazen Asser", role: "Hardware / Computer Vision Engineer", image: MazenAsser },
  { name: "Eyad Ashraf", role: "Computer Vision Engineer", image: EyadAshraf },
  { name: "Mohamed Bassem", role: "Computer Vision Engineer", image: MohamedBassem },
  { name: "Peter Mina", role: "Computer Vision Engineer", image: peterMina },
  { name: "Mohamed Elzayat", role: "Computer Vision Engineer", image: MohamedElzayat },
];

const mechanical = [
  { name: "Esraa Ahmed", role: "Mechanical Engineer", image: EsraaAhmed },
  { name: "Farah Harfoush", role: "Mechanical Engineer", image: FarahHarfoush },
  { name: "Hana Waleed", role: "Mechanical Engineer", image: hanaWaleed },
  { name: "Hossam Eldeen", role: "Mechanical Engineer", image: HossamEldeen },
  { name: "Lina Tarek", role: "Mechanical Engineer", image: LinaTarek },
  { name: "Mira Barsoum", role: "Mechanical Engineer", image: MiraBarsoum },
  { name: "Mo'men Ashraf", role: "Mechanical Engineer", image: MoamenAshraf },
  { name: "Moamen Nawara", role: "Mechanical Engineer", image: MoamenNawara },
  { name: "Mohamed Brbry", role: "Mechanical Engineer", image: MohamedBrbry },
  { name: "Rana", role: "Mechanical Engineer", image: Rana },
  { name: "Reem Eldalil", role: "Mechanical Engineer", image: ReemEldalil },
  { name: "Rodyna Amr", role: "Mechanical Engineer", image: RodynaAmr },
  { name: "Youssef Ibrahim", role: "Mechanical Engineer", image: YoussefIbrahim }
];

const teamMemberData = [heads, autonomusLead, mechanicalLead, autonomous, mechanical];

export default teamMemberData;
