const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="max-w-lg w-full bg-white shadow-lg rounded-2xl p-8 text-center">
        
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4">About Me</h1>
        <p className="text-gray-600 mb-6">
          MERN Stack Developer | React | Redux | Tailwind CSS | Java | DSA
        </p>

        {/* Contact Details */}
        <div className="space-y-4">
          <p className="text-gray-700">
            <span className="font-semibold">Name: </span> 
            Pindi Sai Sri Ram Charan
          </p>

          <p className="text-gray-700">
            <span className="font-semibold">Email: </span>
            <a
              href="mailto:saisriramcharanpindi@gmail.com"
              className="text-blue-600 hover:underline"
            >
              saisriramcharanpindi@gmail.com
            </a>
          </p>

          {/* GitHub */}
          <p className="text-gray-700 flex items-center justify-center gap-2">
            <span className="font-semibold">GitHub:</span>
            <a
              href="https://github.com/SaiSriRamCharann"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-[40px] transition-transform duration-300 ease-in-out cursor-pointer hover:scale-125 hover:drop-shadow"
                src="https://cdn-icons-png.flaticon.com/128/5968/5968866.png"
                alt="github"
              />
            </a>
          </p>

          {/* LinkedIn */}
          <p className="text-gray-700 flex items-center justify-center gap-2">
            <span className="font-semibold">LinkedIn:</span>
            <a
              href="https://www.linkedin.com/in/sai-sri-ram-charan-pindi-58115b2a9/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-[40px] transition-transform duration-300 ease-in-out cursor-pointer hover:scale-125 hover:drop-shadow"
                src="https://cdn-icons-png.flaticon.com/128/1384/1384088.png"
                alt="linkedin"
              />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
