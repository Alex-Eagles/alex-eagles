import AbdelghfourAlaa from '../Members/Abdelghfour Alaa.jpg';
import AbdelrahmanArafat from '../Members/Abdelrahman Arafat.jpg';
import Adham from '../Members/Adham.jpeg';
import AhmedIbrahimAnan from '../Members/Ahmed Ibrahim Anan.jpg';
import AhmedSaeed from '../Members/Ahmed Saeed.jpg';
import AhmedSaleh from '../Members/Ahmed Saleh.jpeg';
import AnnTarek from '../Members/Ann Tarek.jpeg';
import EhdaaFarahat from '../Members/Ehdaa Farahat.jpg';
import EsraaAhmed from '../Members/Esraa Ahmed.jpeg';
import EyadAshraf from '../Members/eyad ashraf.jpg';
import FarahHarfoush from '../Members/Farah Harfoush.jpeg';
import hanaWaleed from '../Members/Hana Waleed.jpeg';
import HossamEldeen from '../Members/Hossam Eldeen.jpg';
import IbrahimMohamed from '../Members/Ibrahim Mohamed.jpg';
import JohnAyman from '../Members/John Ayman.jpg';
import MaramWael from '../Members/Maram Wael.jpg';
import MazenAmr from '../Members/Mazen Amr.jpeg';
import MennaEzzat from '../Members/Menna Ezzat.jpg';
import MoamenAshraf from '../Members/Momen Ashraf.png';
import MoamenNawara from '../Members/Moamen Nawara.jpeg';
import MohamedBassem from '../Members/Mohamed Bassem.png';
import MohamedBrbry from '../Members/mohamed brbry.jpeg';
import MohamedElzayat from '../Members/Mohamed Elzayat.jpeg';
import NorhanMohammed from '../Members/Norhan Mohammed.jpg';
import OsamaMohamed from '../Members/Osama Mohamed.jpg';
import PeterAyoub from '../Members/Peter Ayoub.jpeg';
import peterMina from '../Members/Peter Mina.png';
import Rana from '../Members/Rana.jpg';
import ReemEldalil from '../Members/Reem Eldalil.jpeg';
import SaraGharib from '../Members/Sara Gharib.jpg';
import YoussefHozayen from '../Members/Youssef Hozayen.jpeg';
import YoussefIbrahim from '../Members/Youssef Ibrahim.jpeg';

const headsAndLeads = [
  { name: "Bor3e", role: "wing team lead - CFD", image: AbdelghfourAlaa },
  { name: "Abdelrahman", role: "Head of wing subteam", image: AbdelrahmanArafat },
  { name: "Doma", role: "Head of propulsion sub-team", image: Adham },
  { name: "Ahmed Anan", role: "Hardware team lead", image: AhmedIbrahimAnan },
  { name: "Ahmed Saleh", role: "Autonomous Lead", image: AhmedSaleh },
  { name: "Ann Tarek", role: "Software Vice Lead", image: AnnTarek },
  { name: "Ehdaa Farahat", role: "Structure team head", image: EhdaaFarahat },
  { name: "Maram Wael", role: "Software Lead", image: MaramWael },
  { name: "Norhan Mohammed", role: "Vice Leader", image: NorhanMohammed },
  { name: "Osama Mohamed", role: "Vice head of Tail and Stability Sub-Team", image: OsamaMohamed },
  { name: "Peter Ayoub", role: "Electro-mechanical integration lead", image: PeterAyoub },
  { name: "Ibrahim Mohamed", role: "Head of Computer Vision / Vice Head of Autonomous Team", image: IbrahimMohamed },
  { name: "Youssef Hozayen", role: "Vice lead", image: YoussefHozayen }
];

const autonomous = [
  { name: "Ahmed Saeed", role: "Designing and building the power distribution boards", image: AhmedSaeed },
  { name: "John Ayman", role: "Software Team Member", image: JohnAyman },
  { name: "Mazen Nazeih", role: "Software", image: MazenAmr },
  { name: "Menna Ezzat", role: "Hardware member", image: MennaEzzat },
  { name: "Sara Gharib", role: "Software members", image: SaraGharib },
  { name: "Eyad Ashraf", role: "Computer Vision Engineer", image: EyadAshraf },
  { name: "Mohamed Bassem", role: "Computer Vision Engineer ", image: MohamedBassem },
  { name: "Peter Mina", role: "Computer Vision member", image: peterMina }
];

const mechanical = [
  { name: "Esraa Ahmed", role: "Tail&Wing", image: EsraaAhmed },
  { name: "Farah Harfoush", role: "Vertical tail and fixed wing dropping", image: FarahHarfoush },
  { name: "Hana Waleed", role: "Propulsion", image: hanaWaleed },
  { name: "Hossam Eldeen", role: "Propulsion systems", image: HossamEldeen },
  { name: "Mo'men Ashraf", role: "Structure & CAD", image: MoamenAshraf },
  { name: "Moamen Nawara", role: "Structure Design Engineer", image: MoamenNawara },
  { name: "Mohamed Brbry", role: "Design and simulation - Wing - tail", image: MohamedBrbry },
  { name: "Mohamed Elzayat", role: "Wing + tail", image: MohamedElzayat },
  { name: "Rana", role: "ANSYS", image: Rana },
  { name: "Reem Eldalil", role: "wing", image: ReemEldalil },
  { name: "Youssef Ibrahim", role: "Structure", image: YoussefIbrahim }
];

const teamMemberData = [headsAndLeads, autonomous, mechanical];

export default teamMemberData;
