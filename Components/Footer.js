import { SiTwitter, SiGithub, SiInstagram } from "react-icons/si";
import { FiLinkedin } from "react-icons/fi";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="absolute w-full -bottom-0">
      <div className="bg-indigo-600 dark:bg-indigo-900">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-50 text-sm text-center sm:text-left">
            © {year} Bits-Of-C0de —
            <a
              href="https://x.com/UmendraB83238"
              rel="noopener noreferrer"
              className="text-gray-50 ml-1"
              target="_blank"
            >
              @Umendra
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a
              className="text-gray-50"
              href="https://x.com/UmendraB83238"
              rel="noopener noreferrer"
              target="_blank"
            >
              <SiTwitter />
            </a>
            <a
              className="ml-4 text-gray-50"
              href="https://github.com/UmendraBisen2"
              rel="noopener noreferrer"
              target="_blank"
            >
              <SiGithub />
            </a>
            <a
              className="ml-4 text-gray-50"
              href="https://www.instagram.com/umendra1842/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <SiInstagram />
            </a>
            <a
              className="ml-4 text-gray-50"
              href="https://www.linkedin.com/in/umendra-b-96bb56253"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FiLinkedin />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
