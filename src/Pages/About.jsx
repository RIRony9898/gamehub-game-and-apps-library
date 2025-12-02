import useTitle from "../Hooks/useTitle";

const About = () => {
  useTitle("About Us - Gamehub");
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          About Us
        </h1>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg mb-6">
            Welcome to Gamehub, your ultimate destination for discovering and
            installing the best games and apps. We are passionate about bringing
            you a curated selection of high-quality software to enhance your
            digital experience.
          </p>
          <p className="text-lg mb-6">
            Our mission is to provide a seamless platform where users can
            explore, install, and manage their favorite applications with ease.
            Whether you're a gamer looking for the latest titles or a
            productivity enthusiast seeking powerful tools, Gamehub has
            something for everyone.
          </p>
          <p className="text-lg">
            Join our community and dive into a world of endless possibilities!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
