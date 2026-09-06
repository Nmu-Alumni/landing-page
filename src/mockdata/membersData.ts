import kenny from '../assets/images/png/directors/Kenny_Bankejesu_web.jpg'
import betty from '../assets/images/png/directors/Daniel Betty.png'
import kuye from '../assets/images/png/directors/kuye-micheal.png'
import abel from '../assets/images/png/directors/Abel Christopher.jpg'
import favour from '../assets/images/png/directors/Favour Onyeziri.jpeg'
import philemon from '../assets/images/png/directors/ThankGod Philemon.jpeg'
import marvelous from '../assets/images/png/directors/Marvelous Life-Alegbemi.jpeg'
import ebikaboere from '../assets/images/png/directors/Ebi Friday.jpeg'
import akhabue from '../assets/images/png/directors/jennifer-akhabue-web.jpg'
import kalu from '../assets/images/png/directors/youn-raph.png'
import john from '../assets/images/png/directors/john-paul.png'
import bashua from '../assets/images/png/directors/Mubarak Bashua.jpg'
import Wereyesigha from '../assets/images/png/directors/mike-dick.png'
import abraham from '../assets/images/png/directors/Abraham Nelson Odianosen.jpg'
import godwill from '../assets/images/png/directors/IMG_5794 - Gloria Godwill.png'
import Chidimma from '../assets/images/png/directors/Chidimma Ezekwe.jpeg'

export interface MemberProfile {
  id: string;
  name: string;
  title: string;
  profession: string;
  tenure: string;
  image: string;
  driveId?: string;
  shortBio: string;
  fullBio: string;
  category: "executive" | "directors" | "members" | "trustees";
}

/**
 * Ordered by ranking:
 * 1. National Executive Council
 * 2. Directors
 * 3. Assistant Directors / Special roles
 * 4. General Members
 */
export const allMembers: MemberProfile[] = [
  // ========== 1. NATIONAL EXECUTIVE COUNCIL ==========
  {
    id: "christopher-ogoyi-abel",
    name: "Christopher Ogoyi Abel",
    title: "Vice President",
    profession: "Marine Engineer",
    tenure: "2026 – 2028",
    image: abel,
    shortBio: "Marine Engineer and one of the pioneer graduates of the Department of Marine Engineering. Serves as Vice President of the NMU Alumni Association.",
    fullBio: "Christopher Abel is a Marine Engineer and one of the pioneer graduates of the Department of Marine Engineering, Faculty of Engineering. During his time at the university, he served as Head of the Police Department in the Regimentation Unit, where he was involved in maintaining discipline and coordinating student activities.\n\nHe also played active leadership roles in student events, serving as Committee Chairman for the NMU First Dinner and Award Night with Commodore Kingdom Itoko, and as Head of Logistics and Set-Up for the first Dean’s Cup held in NMU.\n\nHe is the founder of the \"NMU Fellowship of Christian Students\" (now \"Believers Community\") and \"Xoe Church\" in Port Harcourt, both established to support spiritual growth, fellowship, and mentorship.\n\nHe is currently building his career in the maritime industry as a Marine Engineer, while continuing to grow in leadership, service, and community impact.",
    category: "executive",
  },
  {
    id: "ebikaboere-friday",
    name: "Ebikaboere Friday",
    title: "Vice President External",
    profession: "Alumni Leader",
    tenure: "2026 – 2028",
    image: ebikaboere,
    shortBio: "Vice President External of the NMU Alumni Association.",
    fullBio: "Ebikaboere Friday currently serves as Vice President External of the NMU Alumni Association. A full bio will be updated soon.",
    category: "executive",
  },
  {
    id: "onyeziri-adanna-favour",
    name: "Onyeziri Adanna Favour",
    title: "Secretary",
    profession: "Nautical Science | Sailor",
    tenure: "2026 – 2028",
    image: favour,
    shortBio: "Graduate of Nautical Science currently serving as a sailor. Committed to fostering effective communication, strengthening alumni engagement, and promoting meaningful connections among members.",
    fullBio: "My name is Favour Onyeziri, a graduate of Nautical Science from the Nigerian Maritime University. I currently work in the maritime industry as a sailor and have completed my cadetship training, with ongoing preparations toward obtaining my Officer of the Watch (OOW) license. My professional journey is driven by a strong commitment to excellence in seamanship, continuous learning, and advancement within the global shipping industry.\n\nI serve as the Secretary of the Alumni Association, where I am responsible for coordinating communication, documenting proceedings, maintaining accurate records, and ensuring effective administrative support for the smooth operation of the association. In this role, I am dedicated to promoting transparency, organization, and efficiency in all correspondence and activities, while also fostering collaboration among members.\n\nMy passion lies in the maritime sector, where I am deeply committed to safety at sea, professional development, and adherence to international standards of practice. I value mentorship and strongly believe in creating platforms that connect experienced professionals with younger graduates to guide their growth and career progression.\n\nAs Secretary, my vision is to strengthen the alumni network into a well-structured and impactful body that promotes unity, professional advancement, and opportunities for members. I aim to contribute to building a sustainable support system that enhances engagement, encourages knowledge sharing, and strengthens the collective identity of our alumni community within the maritime industry and beyond.",
    category: "executive",
  },
  {
    id: "odianosen-abraham-nelson",
    name: "Odianosen Abraham Nelson",
    title: "Assistant Secretary",
    profession: "Maritime Officer | Founder, O'Nelsons Marine Consulting Services",
    tenure: "2026 – 2028",
    image: abraham,
    shortBio: "Maritime Officer, entrepreneur, and marine logistics professional. Serves as Assistant Secretary of the NMU Pioneer Alumni Association and Founder of O'Nelsons Marine Consulting Services.",
    fullBio: "Odianosen Abraham Nelson is a graduate of Port Management and an experienced maritime professional with practical exposure to vessel fastening, cargo operations, and marine logistics services. He is the Founder and Managing Lead of O'Nelsons Marine Consulting Services, a company focused on vessel sales and hire, container sales and leasing, tugboat and barge charter services, houseboat sales, and marine equipment disposal solutions.\nBeyond his professional engagements, he is committed to leadership, youth development, and strengthening the network of graduates from the Nigerian Maritime University. As the Assistant Secretary of the NMU Pioneer Alumni Association, he contributes to administrative coordination, stakeholder engagement, and initiatives aimed at promoting the welfare and advancement of alumni members.\nHe is passionate about excellence, integrity, continuous learning, and the growth of Nigeria's maritime industry.",
    category: "executive",
  },

  // ========== 2. DIRECTORS ==========
  {
    id: "bankejesu-kenny-oluwakolade",
    name: "Bankejesu Kenny Oluwakolade",
    title: "Director of Institutional Advancement and Development",
    profession: "Petroleum & Gas Engineer | Field Engineer",
    tenure: "2026 – 2028",
    image: kenny,
    shortBio: "Petroleum and Gas Engineering graduate and multidisciplinary professional with experience spanning engineering, technology, innovation, and community leadership.",
    fullBio: "Bankejesu Kenny Oluwakolade is an engineer, innovator, and development-focused leader whose work spans petroleum engineering, technology, product innovation, and institutional advancement. He holds a Bachelor’s degree in Petroleum and Gas Engineering from Nigeria Maritime University, where he graduated with a strong academic record and developed an early interest in applying technology and data-driven solutions to complex industry and societal challenges.\n\nHis professional journey combines technical engineering experience with innovation and leadership. Kenny currently works as a Field Engineer at Sterling Oil Exploration and Energy Production Company, where he contributes to well cementing operations, field engineering activities, operational safety, and technical support within the oil and gas sector. Prior to this, he served at the Nigeria Maritime Administration and Safety Agency (NIMASA) as a Marine Surveyor Trainee, gaining experience in maritime safety, vessel inspections, and regulatory compliance.\n\nAlongside his engineering career, Kenny has built expertise in product design, data analysis, and digital innovation. He holds certifications in Data Analysis, UI/UX Design, and Design Thinking and has continued to expand his knowledge through professional and academic learning programs.\n\nA notable milestone in his academic and innovation journey was his selection as an Academia-Sponsored Presenter at the SLB Digital Forum 2024 in Monaco, where he presented his machine learning research project titled “Predicting Hole Deviation Using Machine Learning.” The work explored the application of artificial intelligence in drilling optimization and reflected his growing interest in the intersection of engineering and emerging technologies.\n\nKenny is also the founder of TRANSY, a transportation technology and financial inclusion initiative focused on building a unified payment and data infrastructure for Nigeria’s transport ecosystem. Through Transy, he seeks to address challenges surrounding cash dependency, transport inefficiencies, safety, compliance, and financial exclusion by connecting commuters, drivers, transport operators, and institutions through digital infrastructure and intelligent mobility systems.\n\nBeyond professional and entrepreneurial pursuits, Kenny is actively involved in leadership and community development. He has served in mentoring, volunteer, and youth leadership capacities and is passionate about empowering young people, supporting institutional growth, and creating systems that deliver lasting social and economic value.\n\nAs Director of Institutional Advancement and Development within the alumni community, Kenny brings a forward-looking vision centered on alumni engagement, partnership development, strategic growth, and sustainable institutional progress. He believes strongly in the role of alumni networks as catalysts for opportunity, innovation, mentorship, and long-term institutional impact.",
    category: "directors",
  },
  {
    id: "ebikonboere-betty-daniel",
    name: "Ebikonboere Betty Daniel",
    title: "Director of Communications & Media",
    profession: "Data Analyst | Communications Professional",
    tenure: "2026 – 2028",
    image: betty,
    shortBio: "First-Class graduate of Port Management. Data Analyst, Social Media Manager, and communications professional serving as Director of Communication and Media.",
    fullBio: "Daniel Ebikonboere Betty is a First-Class graduate of Port Management from the Nigeria Maritime University, Okerenkoko, Delta State. She is a Data Analyst, Social Media Manager, entrepreneur, and communications professional with experience in data analytics, administration, digital communications, and business development.\n\nShe currently serves as the Director of Communication and Media of the Nigeria Maritime University Alumni Association, where she supports alumni engagement, promotes association activities, and contributes to strengthening the alumni network. She also works as a Data Analyst and Social Media Manager for a fashion brand, leveraging data-driven insights and digital strategies to support business growth and brand visibility.\n\nBetty has developed expertise in data analysis, reporting, dashboard development, data visualization, and business intelligence using tools such as Microsoft Excel, Google Sheets, SQL, Python, and R. During her internship with Excelerate, she gained hands-on experience in data cleaning, analysis, visualization, and stakeholder reporting.\n\nBeyond her professional career, Betty is a makeup artist and entrepreneur with interests in the beauty and agricultural sectors. She is passionate about leadership, innovation, continuous learning, and using data-driven solutions to solve real-world challenges. She aspires to pursue advanced studies in Data Analytics, Economics, and Business Administration while building impactful ventures that contribute to sustainable development.",
    category: "directors",
  },
  {
    id: "kuye-micheal-oluwaseun",
    name: "Kuye Micheal Oluwaseun",
    title: "Director of Welfare, Programmes & Events",
    profession: "Marine Geology | Regional Lead (North)",
    tenure: "2026 – 2028",
    image: kuye,
    shortBio: "Marine Geology graduate of Nigeria Maritime University and Regional Lead (North) at Neo Urban Gas and Power. Specializes in business development, stakeholder engagement, and strategic partnerships.",
    fullBio: "Kuye Micheal Oluwaseun is a Marine Geology graduate of Nigeria Maritime University and currently serves as Regional Lead (North) at Neo Urban Gas and Power in collaboration with Fraz Energy. He specializes in business development, stakeholder engagement, and strategic partnerships within the energy sector, with a passion for sustainable development, leadership, and community impact.",
    category: "directors",
  },
  {
    id: "akhabue-jennifer-ese",
    name: "Akhabue Jennifer Ese",
    title: "Director of Career and Professional Development",
    profession: "Project Manager | Entrepreneur",
    tenure: "2026 – 2028",
    image: akhabue,
    shortBio: "Project Manager, Talent Manager, entrepreneur, and business leader. Owner of Shop Lure Essentials.",
    fullBio: "Akhabue Jennifer is a Project Manager, Talent Manager, entrepreneur, and business leader with a passion for building brands, managing high-impact projects, and driving business growth. She is the owner of Shop Lure Essentials, a home fragrance and décor brand specializing in scented candles, diffusers, and room sprays.",
    category: "directors",
  },
  {
    id: "mubarak-bashua",
    name: "Mubarak Bashua",
    title: "Director of Mentorship and Student Relations",
    profession: "Mechanical Engineer",
    tenure: "2026 – 2028",
    image: bashua,
    shortBio: "Mechanical Engineering graduate with a strong passion for innovation, research, and problem-solving.",
    fullBio: "Mubarak Bashua is a Mechanical Engineer with a strong passion for innovation, research, and the application of engineering principles to solve real-world challenges. He holds a degree in Mechanical Engineering and has developed a multidisciplinary interest in energy systems, materials science, data analytics, process optimization, and industrial operations.\n\nProfessionally, Mubarak has gained hands-on experience in engineering and maintenance operations, contributing to the reliability, efficiency, and performance of industrial equipment and processes. His work has involved supporting operational improvements, analyzing system performance, and implementing practical solutions that enhance productivity and sustainability. Through these experiences, he has developed strong technical, analytical, and problem-solving skills, as well as an appreciation for the role of engineering in driving industrial and economic development.\n\nBeyond his professional responsibilities, Mubarak is deeply interested in emerging technologies and their potential to transform industries. He is particularly fascinated by the intersection of engineering, data-driven decision-making, and sustainable development. His academic and personal interests have led him to explore topics such as energy materials, nanotechnology, machine learning applications, and digital transformation, reflecting his commitment to staying at the forefront of technological advancement.\n\nMubarak is a lifelong learner who values continuous personal and professional growth. He actively seeks opportunities to expand his knowledge, collaborate with diverse teams, and contribute to initiatives that create meaningful impact. As he continues to build his career, he remains dedicated to leveraging engineering and innovation to address complex challenges, improve operational excellence, and contribute to a more sustainable future.",
    category: "directors",
  },

  // ========== 3. ASSISTANT DIRECTORS / SPECIAL ROLES ==========
  {
    id: "marvelous-life-alegbemi",
    name: "Marvelous Life Alegbemi",
    title: "Assistant Director of Institutional Advancement & Development",
    profession: "Geologist | GIS Professional | SDGs Advocate",
    tenure: "2026 – 2028",
    image: marvelous,
    shortBio: "Pioneer graduate with First Class Honours in Marine Geology. Assistant Director of Institutional Advancement & Development.",
    fullBio: "Marvelous Life Alegbemi is a geologist with a strong academic foundation and expertise in geoscience, geospatial analysis and map digitization, utilizing GIS knowledge to address human and environmental challenges, to support Sustainable Development Goals (SDGs). She is a refined problem-solver with good virtual administrative skills, and currently a Co-Director at Go Green Development Consultancy Ltd., contributing to project planning and stakeholder engagement.\n\nWithin the Nigeria Maritime University Alumni Association, Marvelous serves as the Assistant Director of Institutional Advancement & Development, and through her service, she remains dedicated to building stronger connections between alumni and the institution while creating opportunities that benefit current and future generations of students.\n\nHer interests include geospatial technologies, environmental sustainability, humanitarian services, education advancement, and community impact.",
    category: "directors",
  },
  {
    id: "john-paul",
    name: "John Paul",
    title: "Assistant Director of Welfare",
    profession: "Community Leader | Agripreneur",
    tenure: "2026 – 2028",
    image: john,
    shortBio: "Dedicated community leader, agripreneur, and technology enthusiast serving as Assistant Director of Welfare.",
    fullBio: "John Paul is a graduate of the Nigerian Maritime University and currently serves as the Assistant Director of Welfare of the NMU Alumni Association. In this role, he is committed to promoting the well-being of alumni members, fostering unity, and supporting initiatives that strengthen the alumni community.\n\nBeyond his alumni leadership responsibilities, John is actively involved in agribusiness, with a strong focus on poultry farming and sustainable agricultural practices. He is also passionate about technology and innovation, particularly in developing digital solutions that address challenges within the agricultural sector.\n\nWith a blend of leadership, entrepreneurship, and a commitment to service, John continues to contribute meaningfully to both the alumni community and society at large. His vision is to empower people, encourage collaboration, and drive initiatives that create lasting value and opportunities for growth.",
    category: "directors",
  },
  {
    id: "kalu-raphael",
    name: "Kalu Raphael",
    title: "Provost Marshal",
    profession: "Marine Economics & Finance | Pioneer Set",
    tenure: "2026 – 2028",
    image: kalu,
    shortBio: "BSc in Marine Economics and Finance (pioneer set). Recipient of the NMU Most Disciplined Cadet Award. Currently serves as Provost Marshal.",
    fullBio: "I hold a BSc in Marine Economics and Finance and was part of the pioneer set. I received the NMU Most Disciplined Cadet Award for the pioneer set and currently volunteer as the NMU Alumni Provost Marshal.",
    category: "directors",
  },

  // ========== 4. GENERAL MEMBERS ==========
  {
    id: "thankgod-philemon-chizhimelozu",
    name: "Thankgod Philemon Chizhimelozu",
    title: "Member",
    profession: "Finance & Public Policy Professional",
    tenure: "—",
    image: philemon,
    shortBio: "Finance and public policy professional with experience in taxation, public finance, legislative research and economic development.",
    fullBio: "He is passionate about sustainable economic growth, public sector accountability, revenue optimisation, and community development. As an alumnus, he remains committed to fostering unity, mentorship, and meaningful collaboration among members of our alumni community. He believes in using knowledge, leadership and service to create opportunities that positively impact society and future generations.",
    category: "members",
  },
  {
    id: "ezekwe-chidimma-cynthia",
    name: "Ezekwe Chidimma Cynthia",
    title: "Member",
    profession: "Metering Engineer | Petroleum & Gas Engineer",
    tenure: "—",
    image: Chidimma,
    shortBio: "Petroleum and Gas Engineer with experience in crude oil metering, custody transfer operations, hydrocarbon measurement, and production support.",
    fullBio: "Ezekwe Chidimma Cynthia is a Petroleum and Gas Engineer with practical experience in crude oil metering operations, hydrocarbon measurement systems, and custody transfer processes within the Nigerian oil and gas industry. She holds a Bachelor of Engineering (B.Eng.) degree in Petroleum and Gas Engineering from the Nigeria Maritime University.\n\nCurrently serving as a Metering Engineer with SeaQuest Upstream Service Limited, working on the Heirs Energy field, Chidimma is responsible for operating and maintaining LACT systems to ensure the accurate measurement and transfer of crude oil. A member of the Society of Petroleum Engineers (SPE), she is passionate about continuous learning, professional development, and contributing to safe and efficient energy operations.",
    category: "members",
  },
  {
    id: "wereyesigha-michael",
    name: "Wereyesigha Michael",
    title: "Member",
    profession: "Businessman | Entrepreneur",
    tenure: "—",
    image: Wereyesigha,
    shortBio: "Dedicated businessman committed to excellence, growth, and creating value.",
    fullBio: "My name is Dickson, and I am a dedicated businessman with a strong passion for entrepreneurship, growth, and creating opportunities. Over the years, I have developed a deep appreciation for hard work, integrity, and the value of building meaningful relationships. I am committed to excellence in every endeavor and continually seek ways to expand my knowledge, improve my skills, and contribute positively to society.\n\nBeyond business, I believe in giving back to my community and supporting initiatives that bring people together and create lasting impact. My vision is to build successful ventures, inspire others through my journey, and leave a legacy of service, leadership, and positive change.",
    category: "members",
  },
  {
    id: "godwill-atonbrapaghafa-gloria",
    name: "Godwill Atonbrapaghafa Gloria",
    title: "Member",
    profession: "Marine Economics & Finance Graduate",
    tenure: "—",
    image: godwill,
    shortBio: "Graduate of Marine Economics and Finance with a passion for continuous learning and personal development.",
    fullBio: "My name is Gloria Godwill, a graduate of Marine Economics and Finance with a passion for continuous learning and personal development. I enjoy reading, acquiring new skills, and exploring opportunities for growth both personally and professionally.\nI recently completed my National Youth Service Corps (NYSC) program, which provided me with valuable experiences in leadership, teamwork, and community service. I am eager to build a successful career, make meaningful contributions in my field, and continue developing my knowledge and skills.\nI am excited to be part of this alumni community, reconnecting with old friends, sharing experiences, and creating opportunities for networking, collaboration, and growth.",
    category: "members",
  },
];

export const getMemberById = (id: string): MemberProfile | undefined =>
  allMembers.find((m) => m.id === id);

export const executives = allMembers.filter((m) => m.category === "executive");
export const directors = allMembers.filter((m) => m.category === "directors");
export const generalMembers = allMembers.filter((m) => m.category === "members");