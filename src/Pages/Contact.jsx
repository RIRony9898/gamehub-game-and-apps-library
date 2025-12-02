import useTitle from "../Hooks/useTitle";

const Contact = () => {
  useTitle("Contact Us - Gamehub");
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Contact Us
        </h1>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
              <p className="mb-4">
                Have questions or feedback? We'd love to hear from you. Reach
                out to our team using the information below.
              </p>
              <div className="space-y-2">
                <p>
                  <strong>Email:</strong> support@gamehub.com
                </p>
                <p>
                  <strong>Phone:</strong> +1 (555) 123-4567
                </p>
                <p>
                  <strong>Address:</strong> 123 Game Street, Tech City, TC 12345
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Send us a Message</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 bg-slate-800 border border-purple-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 bg-slate-800 border border-purple-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    className="w-full px-3 py-2 bg-slate-800 border border-purple-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn bg-purple-600 hover:bg-purple-700 text-white"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
