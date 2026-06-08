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

// Consolidated team data array for dynamic UI filtering
const teamMemberData = [
  // ==========================================
  // EXECUTIVE LEADERSHIP
  // ==========================================
  { id: '1', name: "Ahmed Baheyeldin", role: "Lead", team: "Executive", subTeam: "Management", year: "4", major: "Mechatronics", image: AhmedBaheyeldin },
  { id: '2', name: "Norhan Mohammed", role: "Vice Lead", team: "Executive", subTeam: "Management", year: "4", major: "Mechatronics", image: NorhanMohammed },
  { id: '3', name: "Peter Ayoub", role: "Lead", team: "Executive", subTeam: "Management", year: "4", major: "Electromechanics", image: PeterAyoub },

  // ==========================================
  // AUTONOMOUS TEAM
  // ==========================================
  // Leads
  { id: '4', name: "Ahmed Saleh", role: "Lead", team: "Autonomous", subTeam: "Management", year: "4", major: "Computer and Communications", image: AhmedSaleh },
  { id: '5', name: "Ibrahim Mohamed", role: "Vice Lead", team: "Autonomous", subTeam: "Computer Vision", year: "4", major: "Computer and Communications", image: IbrahimMohamed },
  { id: '6', name: "Ahmed Anan", role: "Lead", team: "Autonomous", subTeam: "Hardware", year: "4", major: "Mechatronics", image: AhmedIbrahimAnan },
  { id: '7', name: "Maram Wael", role: "Lead", team: "Autonomous", subTeam: "Software", year: "4", major: "Computer and Communications", image: MaramWael },
  { id: '8', name: "Ann Tarek", role: "Vice Lead", team: "Autonomous", subTeam: "Software", year: "3", major: "Computer and Communications", image: AnnTarek },
  // Members
  { id: '9', name: "Mazen Nazeih", role: "Member", team: "Autonomous", subTeam: "Software", year: "3", major: "Computer and Communications", image: MazenAmr },
  { id: '10', name: "Sara Gharib", role: "Member", team: "Autonomous", subTeam: "Software", year: "3", major: "Computer and Communications", image: SaraGharib },
  { id: '11', name: "Zeyad Essam", role: "Member", team: "Autonomous", subTeam: "Software", year: "2", major: "Computer and Communications", image: ZeyadEssam },
  { id: '12', name: "John Ayman", role: "Member", team: "Autonomous", subTeam: "Software", year: "2", major: "Computer and Communications", image: JohnAyman },
  { id: '13', name: "Ahmed Saber", role: "Member", team: "Autonomous", subTeam: "Hardware", year: "3", major: "Mechatronics", image: AhmedSaber },
  { id: '14', name: "Ahmed Saeed", role: "Member", team: "Autonomous", subTeam: "Hardware", year: "3", major: "Mechatronics", image: AhmedSaeed },
  { id: '15', name: "Menna Ezzat", role: "Member", team: "Autonomous", subTeam: "Hardware", year: "2", major: "Mechatronics", image: MennaEzzat },
  { id: '16', name: "Mazen Asser", role: "Member", team: "Autonomous", subTeam: "Computer Vision", year: "3", major: "Computer and Communications", image: MazenAsser },
  { id: '17', name: "Eyad Ashraf", role: "Member", team: "Autonomous", subTeam: "Computer Vision", year: "3", major: "Computer and Communications", image: EyadAshraf },
  { id: '18', name: "Mohamed Bassem", role: "Member", team: "Autonomous", subTeam: "Computer Vision", year: "2", major: "Computer and Communications", image: MohamedBassem },
  { id: '19', name: "Peter Mina", role: "Member", team: "Autonomous", subTeam: "Computer Vision", year: "2", major: "Computer and Communications", image: peterMina },
  { id: '20', name: "Mohamed Elzayat", role: "Member", team: "Autonomous", subTeam: "Computer Vision", year: "2", major: "Computer and Communications", image: MohamedElzayat },

  // ==========================================
  // MECHANICAL TEAM
  // ==========================================
  // Leads
  { id: '21', name: "Mohamed Fathallah", role: "Lead", team: "Mechanical", subTeam: "Management", year: "4", major: "Electromechanics", image: MohamedFathallah },
  { id: '22', name: "Hattan Yosry", role: "Lead", team: "Mechanical", subTeam: "Aerodesign", year: "4", major: "Mechatronics", image: HattanYosry },
  { id: '23', name: "Ehdaa Farahat", role: "Lead", team: "Mechanical", subTeam: "Structure", year: "4", major: "Electromechanics", image: EhdaaFarahat },
  { id: '24', name: "Osama Mohamed", role: "Vice Lead", team: "Mechanical", subTeam: "Tail & Stability", year: "4", major: "Mechatronics", image: OsamaMohamed },
  { id: '25', name: "Abdelrahman Arafat", role: "Lead", team: "Mechanical", subTeam: "Wing", year: "4", major: "Electromechanics", image: AbdelrahmanArafat },
  { id: '26', name: "Abdelghfour Alaa", role: "Lead", team: "Mechanical", subTeam: "Wing", year: "4", major: "Mechatronics", image: AbdelghfourAlaa },
  { id: '27', name: "Adham Amr", role: "Lead", team: "Mechanical", subTeam: "Propulsion", year: "4", major: "Electromechanics", image: Adham },
  { id: '28', name: "Youssef Hozayen", role: "Vice Lead", team: "Mechanical", subTeam: "Propulsion", year: "3", major: "Mechatronics", image: YoussefHozayen },
  
  // Members
  // Note: Distributed among sub-teams for UI filtering visualization
  { id: '29', name: "Esraa Ahmed", role: "Member", team: "Mechanical", subTeam: "Aerodesign", year: "3", major: "Electromechanics", image: EsraaAhmed },
  { id: '30', name: "Farah Harfoush", role: "Member", team: "Mechanical", subTeam: "Aerodesign", year: "3", major: "Mechatronics", image: FarahHarfoush },
  { id: '31', name: "Hana Waleed", role: "Member", team: "Mechanical", subTeam: "Structure", year: "3", major: "Electromechanics", image: hanaWaleed },
  { id: '32', name: "Hossam Eldeen", role: "Member", team: "Mechanical", subTeam: "Structure", year: "2", major: "Mechatronics", image: HossamEldeen },
  { id: '33', name: "Lina Tarek", role: "Member", team: "Mechanical", subTeam: "Wing", year: "2", major: "Electromechanics", image: LinaTarek },
  { id: '34', name: "Mira Barsoum", role: "Member", team: "Mechanical", subTeam: "Wing", year: "2", major: "Mechatronics", image: MiraBarsoum },
  { id: '35', name: "Mo'men Ashraf", role: "Member", team: "Mechanical", subTeam: "Tail & Stability", year: "2", major: "Electromechanics", image: MoamenAshraf },
  { id: '36', name: "Moamen Nawara", role: "Member", team: "Mechanical", subTeam: "Tail & Stability", year: "2", major: "Mechatronics", image: MoamenNawara },
  { id: '37', name: "Mohamed Brbry", role: "Member", team: "Mechanical", subTeam: "Propulsion", year: "2", major: "Electromechanics", image: MohamedBrbry },
  { id: '38', name: "Rana", role: "Member", team: "Mechanical", subTeam: "Propulsion", year: "1", major: "Mechatronics", image: Rana },
  { id: '39', name: "Reem Eldalil", role: "Member", team: "Mechanical", subTeam: "Structure", year: "1", major: "Electromechanics", image: ReemEldalil },
  { id: '40', name: "Rodyna Amr", role: "Member", team: "Mechanical", subTeam: "Aerodesign", year: "1", major: "Mechatronics", image: RodynaAmr },
  { id: '41', name: "Youssef Ibrahim", role: "Member", team: "Mechanical", subTeam: "Wing", year: "1", major: "Electromechanics", image: YoussefIbrahim }
];

export default teamMemberData;