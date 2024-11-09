// components/about
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNodeJs, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faHtml5, faCss3Alt, faGitAlt } from '@fortawesome/free-brands-svg-icons';
import { faFedora } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';  
import { faFileCode } from '@fortawesome/free-solid-svg-icons';  

const skills = [
  { icon: faHtml5, name: 'HTML', color: 'text-orange-500' },
  { icon: faCss3Alt, name: 'CSS', color: 'text-blue-500' },
  { icon: faJs, name: 'JavaScript', color: 'text-yellow-500' },
  { icon: faReact, name: 'React', color: 'text-blue-500' },
  { icon: faNodeJs, name: 'Node.js', color: 'text-green-500' },
  { icon: faDatabase, name: 'MongoDB', color: 'text-green-700' },
  { icon: faFedora, name: 'Fedora', color: 'text-blue' },
  { icon: faGitAlt, name: 'Git', color: 'text-red-500' },
  { icon: faFileCode, name: 'TypeScript', color: 'text-blue-600' },
  { icon: faFileCode, name: 'Next.js', color: 'text-gray' }
];

const AboutAndSkills: React.FC = () => {
  return (
    <section className="w-full max-w-5xl mx-auto  p-6 space-y-16 shadow-xl rounded-lg  flex flex-col justify-between h-screen   ">
      {/* About Me Section */}
      <div className=" flex-1 overflow-auto   bg-gray-950 p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-slate-800">
        <h2 className="text-3xl font-mono text-white text-center mb-6">About Me</h2>
        <p className="text-base font-sans  leading-relaxed mb-4 text-white">
          Hi, I&apos;m Akshaya Parida, a passionate developer focused on building modern web applications. I specialize in frontend development. I aim to create user-friendly and responsive websites that deliver exceptional user experiences.
        </p>
        <p className="text-base font-sans  leading-relaxed text-white">
          I enjoy exploring new technologies, improving my skills. I&apos;m always excited to tackle challenges and build scalable solutions.
        </p>
      </div>

      {/* Skills Section */}
      <div className=" font-sans bg-gray-950 p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-slate-800">
        <h2 className="text-3xl font-mono text-white text-center mb-6">Skills</h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map(({ icon, name, color }) => (
            <li key={name} className="flex items-center space-x-2">
              <FontAwesomeIcon icon={icon} className={`h-8 w-8 ${color}`} />
              <span className="text-base text-white">{name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AboutAndSkills;
